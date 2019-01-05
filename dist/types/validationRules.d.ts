import ValidationData from './ValidationData';
export declare type ValidationRule<T = {}> = (alias: string, value: any, data?: ValidationData<T>) => {
    invalid: boolean;
    error: string;
};
export declare function lessThan(threshold: number): ValidationRule;
export declare function lessThanOrEqual(threshold: number): ValidationRule;
export declare function largerThan(threshold: number): ValidationRule;
export declare function largerThanOrEqual(threshold: number): ValidationRule;
export declare function longerThan(threshold: number): ValidationRule;
export declare function shorterThan(threshold: number): ValidationRule;
export declare const required: ValidationRule;
export declare function largerthanField<T>(fieldName: string, fieldNameAlias: string): ValidationRule;
