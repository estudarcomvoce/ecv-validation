import Validation from './Validation';
import ValidationData, { ValidationDataFactory } from './ValidationData';
import { createHash } from 'crypto';

export default class ValidationRunner<T extends {}> {
  protected validity: { [s: string]: boolean } = {};
  protected validations: { [s: string]: Validation<T>};

  constructor(...validations: Validation<T>[]) {
    this.validations = validations.reduce((prev: any, curr) => Object.assign(prev, { [curr.fieldName]: curr }), {});
  }

  /**
   * Runs validations for a single field, to be used for instance on an input onChange handler
   * 
   * @param oldData the form data being submited, in case the validations need to compare the field with other attributes of
   * the same object
   * @param name the name of the field
   * @param value the value of the field being validated
   */
  public run(oldData: ValidationData<T>, name: string, value: any): ValidationData<T> {
    const internalFormData = oldData;
    const validation = this.validations[name];

    if (validation) {
      const { error, invalid } = validation.validate(value);
      
      if (invalid) {
        (internalFormData.errors as any)[name] = error;
        (internalFormData.invalid as any)[name] = true;
      } else {
        (internalFormData.errors as any)[name] = undefined;
        (internalFormData.invalid as any)[name] = false;
        (internalFormData.data as any)[name] = validation.type === 'number' ? parseFloat(value) : value;  
      }
    } else {
      (internalFormData.data as any)[name] = value;
    }
    
    return internalFormData;
  }

  /**
   * Runs all validations against a given object, to be used on form onSubmit handlers
   * @param data The form data being submitted
   */
  public runAll(data: T): ValidationData<T> {
    const internalFormData = ValidationDataFactory(data);

    for(const key of Object.keys(data)) {
      const validation = this.validations[key];

      if (validation) {
        const { error, invalid } = validation.validate(data[key]);

        if (invalid) {
          (internalFormData.errors as any)[key] = error;
          (internalFormData.invalid as any)[key] = true;
        } else {
          (internalFormData.errors as any)[key] = undefined;
          (internalFormData.invalid as any)[key] = false;
        }
      }
    }

    // store data validity state
    this.validity[ValidationRunner.hashFormData(data)] = ValidationRunner.reduceValidity(internalFormData);
    return internalFormData;
  }

  protected static hashFormData(data: any): string {
    const hash = createHash('sha1');
    hash.update(JSON.stringify(data));
    return hash.digest('hex');
  }

  protected static reduceValidity<T>(data: ValidationData<T>): boolean {
    return !Object.values<boolean>(data.invalid).reduce((prev, curr) => curr || prev, false);
  }

  /**
   * Checks wheter an object passes all validations
   * @param data The form data to be validated
   */
  public isValid(data: T): boolean {
    const dataHash = ValidationRunner.hashFormData(data);
    
    // Runs validations in case we don't have validity state stored for the object
    if (this.validity[dataHash] === undefined) this.runAll(data);
    
    return this.validity[dataHash];
  }
}
