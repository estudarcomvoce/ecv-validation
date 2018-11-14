import { ValidationRule } from './validationRules';

export default class Validation<T> {
  constructor(
    public fieldName: string,
    public alias: string,
    public type: string,
    protected validationRules: ValidationRule<T>[],
  ) {}

  public validate(value: any): { error: string, invalid: boolean} {
    const out = this.validationRules.reduce(
      (prev: { error: string[], invalid: boolean}, currentRule) => {
        const { error, invalid } = currentRule(this.alias, value);

        return {
          error: error ? [...prev.error, error] : prev.error,
          invalid: prev.invalid || invalid,
        };
      },
      { error: [], invalid: false },
    );

    return {
      error: out.error.join(', '),
      invalid: out.invalid,
    };
  }
}
