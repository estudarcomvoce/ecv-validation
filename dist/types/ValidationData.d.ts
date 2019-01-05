export default interface ValidationData<T> {
    errors: {
        [K in keyof T]?: string;
    };
    invalid: {
        [K in keyof T]?: boolean;
    };
    data: T;
}
/**
 * Helper function to create a validation data object with errors and invalid fields empty
 * @param data The starting data
 */
export declare function ValidationDataFactory<T>(data?: T): ValidationData<T>;
