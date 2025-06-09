import type {
    RequestBodyOptions,
    ResponseFormOptions
} from '@modules/formOptions/options/dtos';
export interface IFormOptionsService {
    get({ key, signal }: RequestBodyOptions): Promise<ResponseFormOptions>
}