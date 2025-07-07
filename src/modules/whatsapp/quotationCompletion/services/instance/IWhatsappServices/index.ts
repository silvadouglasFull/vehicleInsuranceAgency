import type { RequestWhatsapp, ResponseWhatsapp } from '@modules/whatsapp/quotationCompletion/dto';

export interface IWhatsappServices {
    post({ destino, nome }: RequestWhatsapp): Promise<ResponseWhatsapp>
}