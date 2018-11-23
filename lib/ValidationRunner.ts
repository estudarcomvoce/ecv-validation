import Validation from './Validation';
import FormData from './FormData';

export default class ValidationRunner<T extends {}> {
  protected validations: { [s: string]: Validation<T>};

  constructor(...validations: Validation<T>[]) {
    this.validations = validations.reduce((prev: any, curr) => Object.assign(prev, { [curr.fieldName]: curr }), {});
  }

  public run(oldData: FormData<T>, name: string, value: any): FormData<T> {
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
        (internalFormData.values as any)[name] = validation.type === 'number' ? parseFloat(value) : value;  
      }
    } else {
      (internalFormData.values as any)[name] = value;
    }
    
    return internalFormData;
  }

  public runAll(data: T): FormData<T> {
    const internalFormData: FormData<T> = {
      values: data,
      errors: {},
      invalid: {},
    };

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
    return internalFormData;
  }

  public static isValid<T extends {}>(data: FormData<T>): boolean {
    return Object.values<boolean>(data.invalid).reduce((prev, curr) => curr || prev, false);
  }
}
