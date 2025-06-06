import type { Key } from "@modules/formOptions/options/dtos"
import type React from "react"
import type { SelectBrandProps } from "../../../types"
export type TKey = Key & "codigoFipe" | "marca" | "modelo" | "anoModelo" | "cpf" | "nome" | "email" | "telefone" | "veiculo.valor" | "dadosPagamento.formaPagamento" | "dadosPagamento.quantidadeParcelas" | "dadosSegurado.nome" | "dadosSegurado.cpf" | "dadosSegurado.endereco" | "sexo" | "estadoCivil" | "zeroKm" | "tipoUtilizacao" | "possuiOutroVeic" | "tipoContratacao" | "sexoPrincipalCondutor" | "estadoCivilPrincipalCondutor" | "pergunta1" | "pergunta2" | "pergunta3" | "pergunta4" | "pergunta6"
export type Forms = {
    key: TKey
    component: (props?: SelectBrandProps) => React.JSX.Element
}