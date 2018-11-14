import Validation from './Validation';
import FormData from './FormData';
export default class ValidationRunner<T> {
    protected validations: {
        [s: string]: Validation<T>;
    };
    constructor(...validations: Validation<T>[]);
    run(oldData: FormData<T>, name: string, value: any): FormData<T>;
}
