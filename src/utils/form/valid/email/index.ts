/**
 * Validates whether a string is a valid email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} `true` if the email is valid, otherwise `false`.
 *
 * @example
 * isValidEmail("john.doe@example.com"); // true
 * isValidEmail("invalid-email"); // false
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
