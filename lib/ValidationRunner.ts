import Validation from './Validation';
import FormData from './FormData';

export default class ValidationRunner<T> {
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
}
