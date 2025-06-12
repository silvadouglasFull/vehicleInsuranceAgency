import type {
    RequestConsultaCEP,
    ResponseConsultaCEP
} from '@modules/cep/consultaCep/dto';
export interface ICEPServices {
    get({ cep, signal }: RequestConsultaCEP): Promise<ResponseConsultaCEP>
}