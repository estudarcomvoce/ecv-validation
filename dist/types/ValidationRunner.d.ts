import Validation from './Validation';
import ValidationData from './ValidationData';
export default class ValidationRunner<T extends {}> {
    protected validity: {
        [s: string]: boolean;
    };
    protected validations: {
        [s: string]: Validation<T>;
    };
    constructor(...validations: Validation<T>[]);
    /**
     * Runs validations for a single field, to be used for instance on an input onChange handler
     *
     * @param oldData the form data being submited, in case the validations need to compare the field with other attributes of
     * the same object
     * @param name the name of the field
     * @param value the value of the field being validated
     */
    run(oldData: ValidationData<T>, name: string, value: any): ValidationData<T>;
    /**
     * Runs all validations against a given object, to be used on form onSubmit handlers
     * @param data The form data being submitted
     */
    runAll(data: T): ValidationData<T>;
    protected static hashFormData(data: any): string;
    protected static reduceValidity<T>(data: ValidationData<T>): boolean;
    /**
     * Checks wheter an object passes all validations
     * @param data The form data to be validated
     */
    isValid(data: T): boolean;
}
