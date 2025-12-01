export type AllowedDomain = 'gmail.com' | 'ukr.net' | 'sumdu.edu.ua';
const ALLOWED_DOMAINS: AllowedDomain[] = ['gmail.com', 'ukr.net', 'sumdu.edu.ua'];

export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  consent: boolean;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export const validateName = (name: string): boolean => {
  if (name.length < 2) {
    return false;
  }
  const letterRegex = /^[\p{L}]+$/u;
  return letterRegex.test(name);
};

export const validateAge = (age: number): boolean => {
  if (!Number.isInteger(age)) {
    return false;
  }
  return age >= 1 && age <= 120;
};

export const validateEmail = (email: string): boolean => {
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');

  if (atIndex <= 0 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
    return false;
  }

  const domain = email.substring(atIndex + 1);
  return (ALLOWED_DOMAINS as string[]).includes(domain);
};

export const validatePassword = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  }
  const digitRegex = /\d/;
  return digitRegex.test(password);
};

export const validateConsent = (consent: boolean): boolean => {
  return consent === true;
};

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {}; 

  if (!validateName(data.name)) {
    errors.name = 'Name is invalid (min 2 letters, no numbers/symbols).';
  }

  if (!validateAge(data.age)) {
    errors.age = 'Age must be an integer between 1 and 120.';
  }

  if (!validateEmail(data.email)) {
    const allowed = ALLOWED_DOMAINS.join(', ');
    errors.email = `Email is invalid (must be @... and from domains: ${allowed}).`;
  }

  if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 8 characters long and contain a digit.';
  }

  if (!validateConsent(data.consent)) {
    errors.consent = 'You must agree to the terms.';
  }

  return errors;
};

const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/(\b\p{L})/gu, (char) => char.toUpperCase());
};

export const normalizeForm = (data: FormData): FormData => {
  return {
    name: toTitleCase(data.name.trim()),
    email: data.email.trim().toLowerCase(),
    age: data.age,
    password: data.password,
    consent: data.consent,
  };
};