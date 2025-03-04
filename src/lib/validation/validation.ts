import * as t from "./responses";
import * as r from "./regexes";
import { toast } from "sonner";
export function validateLogin(identifier: string, password: string) {
  const errors: string[] = [];

  if (!r.emailRegex.test(identifier) && !r.usernameRegex.test(identifier)) {
    errors.push(t.invalidEmail);
  }

  if (!r.minPasswordRegex.test(password)) {
    errors.push(t.minCharacters);
  }
  if (!r.containsCapitalLettersRegex.test(password)) {
    errors.push(t.noCapitalLetters);
  }
  if (!r.containsSmallLettersRegex.test(password)) {
    errors.push(t.noSmallLetters);
  }
  if (!r.containsNumbersRegex.test(password)) {
    errors.push(t.noNumbers);
  }
  if (!r.containsSpecialCharactersRegex.test(password)) {
    errors.push(t.noSpecialCharacters);
  }

  if (errors.length > 0) {
    toast(errors[0]);
    return { valid: false, messages: errors };
  }

  return {
    valid: true,
    message: t.loginSuccess,
  };
}

export function validateRegister(
  email: string,
  password: string,
  confirmPassword: string,
) {
  const errors: string[] = [];

  if (!r.emailRegex.test(email)) {
    errors.push(t.invalidEmail);
  }

  

  if (password.length < 8) {
    errors.push(t.minCharacters);
  }
  if (!r.containsCapitalLettersRegex.test(password)) {
    errors.push(t.noCapitalLetters);
  }
  if (!r.containsSmallLettersRegex.test(password)) {
    errors.push(t.noSmallLetters);
  }
  if (!r.containsNumbersRegex.test(password)) {
    errors.push(t.noNumbers);
  }
  if (!r.containsSpecialCharactersRegex.test(password)) {
    errors.push(t.noSpecialCharacters);
  }

  if (password !== confirmPassword) {
    errors.push(t.passwordsDoNotMatch);
  }

  if (errors.length > 0) {
    toast(errors[0]);
    return { valid: false, messages: errors };
  }
  return {
    valid: true,
    message: t.registrationSuccess,
  };
}
export function validateNewItem(name: string, price: number, description: string) {
  const errors: string[] = [];

  if (name.length < 3) {
    errors.push("Name is too short");
  }

  if (price < 0) {
    errors.push("Price is too low");
  }

  if (description.length < 10) {
    errors.push("Description is too short");
  }

  if (errors.length > 0) {
    toast(errors[0]);
    return { valid: false, messages: errors };
  }

  return {
    valid: true,
    message: "Item created successfully",
  };
}