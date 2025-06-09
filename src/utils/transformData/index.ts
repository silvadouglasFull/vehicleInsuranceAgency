/**
 * Converts a date string from ISO format (yyyy-mm-dd) to Brazilian format (dd/mm/yyyy)
 * @param isoDate - string in format 'yyyy-mm-dd'
 * @returns string in format 'dd/mm/yyyy'
 */
export function convertToBrazilianDate(isoDate: string): string {
    const [year, month, day] = isoDate.split("-");
    if (!year || !month || !day) {
        throw new Error("Invalid date format. Expected format: yyyy-mm-dd");
    }
    return `${day}/${month}/${year}`;
}
