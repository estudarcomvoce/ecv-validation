export default interface FormData<T> {
  errors: { [K in keyof T]?: string };
  invalid: { [K in keyof T]?: boolean };
  values: T;
}
