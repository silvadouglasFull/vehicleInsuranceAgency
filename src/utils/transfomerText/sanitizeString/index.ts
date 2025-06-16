/**
 * Remove pontos, traços, vírgulas, espaços e outros caracteres não alfanuméricos de uma string.
 * @param value A string original
 * @returns A string limpa
 */
export function sanitizeString(value: string): string {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-zA-Z0-9]/g, '');  // Remove não alfanuméricos
}
