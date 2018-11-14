import FormData from './FormData';

export type ValidationRule<T = {}> = (alias: string, value: any, data?: FormData<T>) => 
  { invalid: boolean, error: string};

export function lessThan(threshold: number):ValidationRule {
  return (alias: string, value: number) => {
    if (value >= threshold) {
      return {
        error: `${alias} deve ser menor que ${threshold} `,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}

export function lessThanOrEqual(threshold: number):ValidationRule {
  return (alias: string, value: number) => {
    if (value > threshold) {
      return {
        error: `${alias} deve ser menor ou igual a que ${threshold} `,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}

export function largerThan(threshold: number):ValidationRule {
  return (alias: string, value: number) => {
    if (value <= threshold) {
      return {
        error: `${alias} deve ser maior que ${threshold} `,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}

export function largerThanOrEqual(threshold: number):ValidationRule {
  return (alias: string, value: number) => {
    if (value < threshold) {
      return {
        error: `${alias} deve ser maior ou igual a ${threshold} `,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}

export function longerThan(threshold: number):ValidationRule {
  return (alias: string, value: number) => {
    if (value <= threshold) {
      return {
        error: `${alias} deve ser maior que ${threshold} caracteres`,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}

export function shorterThan(threshold: number):ValidationRule {
  return (alias: string, value: number) => {
    if (value > threshold) {
      return {
        error: `${alias} deve ser maior que ${threshold} caracteres`,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}

export const required: ValidationRule = (alias: string, value: number) => {
  if (!value) {
    return {
      error: `${alias} é obrigatorio`,
      invalid: true,
    };
  }
  return {
    error: '',
    invalid: false,
  };
};

export function largerthanField<T>(fieldName: string, fieldNameAlias: string): ValidationRule {
  return (alias: string, value: number, data: FormData<T>) => {
    if (value <= (data.values as any)[fieldName]) {
      return {
        error: `${alias} deve ser menor que ${fieldNameAlias}`,
        invalid: true,
      };
    }
    return {
      error: '',
      invalid: false,
    };
  };
}
