import { ValidationRule } from './validationRules';
export default class Validation<T> {
    fieldName: string;
    alias: string;
    type: string;
    protected validationRules: ValidationRule<T>[];
    constructor(fieldName: string, alias: string, type: string, validationRules: ValidationRule<T>[]);
    validate(value: any): {
        error: string;
        invalid: boolean;
    };
}
