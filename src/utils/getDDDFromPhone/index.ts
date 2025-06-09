/**
 * Extrai o DDD de um número de telefone brasileiro formatado.
 * @param phone Número de telefone no formato (00) 00000-0000
 * @returns O DDD como string ou null se inválido
 */
export function getDDDFromPhone(phone: string): string | null {
    const match = phone.match(/\((\d{2})\)/);
    return match?.length === 1 ? match[1] : phone.substring(0, 3);
}
