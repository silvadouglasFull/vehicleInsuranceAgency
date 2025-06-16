import type { IInstance } from "@modules/cep/consultaCep/services/util/formatEstado/instance/IInstance";
import type { Format, FormatParams } from "@modules/cep/consultaCep/services/util/formatEstado/instance/types";
import { transformerInFirstWord } from "@utils/transfomerText";


export class FormatEstado implements IInstance {
    private format({ firstWord, secoundWord }: FormatParams): Format {
        const firstLatterOfFirstWord = transformerInFirstWord({ world: firstWord }) ?? ''
        const firstLatterOfSecoundWord = transformerInFirstWord({ world: secoundWord }) ?? ''
        return {
            firstLatterOfFirstWord,
            firstLatterOfSecoundWord
        }
    }
    public init(estado: string): string {
        const [firstWord, secoundWord] = estado.split(' ')
        const { firstLatterOfFirstWord, firstLatterOfSecoundWord } = this.format({ firstWord, secoundWord })
        return `${firstLatterOfFirstWord.toUpperCase() ?? ''}${firstLatterOfSecoundWord.toUpperCase() ?? ''}`
    }
}