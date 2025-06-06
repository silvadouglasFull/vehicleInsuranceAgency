import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"

export type UseFecthOptions = {
    zeroKm: Options[]
    tipoUtilizacao: Options[]
    possuiOutroVeic: Options[],
    zeroKmLoading: boolean
    tipoUtilizacaoLoading: boolean
    possuiOutroVeicLoading: boolean
}