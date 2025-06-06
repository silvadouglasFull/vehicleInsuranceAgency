export type TransformerInFirstWord = {
    world: string
}
export type SplitStringProps = {
    fullString: string
    separator: '.'

}
export type MaskCodFipe = {
    codFipe: string
}
export type FunctionSplitString = { firstPart: string; secondPart: string }
export type SplitString = ({ fullString, separator }: SplitStringProps) => FunctionSplitString
export type FormatCPF = {
    cpf: string
}