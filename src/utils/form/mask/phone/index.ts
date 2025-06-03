import type { PhoneCountry } from "@utils/form/mask/phone/types";


/**
 * Formats a phone number according to the specified country format.
 *
 * @param {string} phone - The raw phone number string containing only digits.
 * @param {PhoneCountry} country - The country code to determine the formatting style.
 * @returns {string} The formatted phone number.
 *
 * @example
 * formatPhoneNumber("1234567890", "us"); // (123) 456-7890
 * formatPhoneNumber("13812345678", "cn"); // +86 138 1234 5678
 * formatPhoneNumber("11987654321", "br"); // (11) 98765-4321
 */
export function formatPhoneNumber(phone: string, country: PhoneCountry): string {
    const digits = phone.replace(/\D/g, "");

    switch (country) {
        case "en":
            if (digits.length !== 10) return phone;
            return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;

        case "zh":
            if (digits.length !== 11) return phone;
            return `+86 ${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`;

        case "pt":
            if (digits.length === 11) {
                // Mobile phone: (11) 98765-4321
                return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
            } else if (digits.length === 10) {
                // Landline: (11) 3456-7890
                return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
            }
            return phone;

        default:
            return phone;
    }
}
