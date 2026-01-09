// src/__tests__/validators.test.ts
import { isValidEmail, isValidPassword } from '../src/utils/validators';

test('valid email', () => {
    expect(isValidEmail('test@mail.com')).toBe(true);
});

test('Invalid email', () => {
    expect(isValidEmail('testa')).toBe(false);
});

test('invalid password', () => {
    expect(isValidPassword('123')).toBe(false);
});

test('Valid password', () => {
    expect(isValidPassword('12345678')).toBe(true);
});
