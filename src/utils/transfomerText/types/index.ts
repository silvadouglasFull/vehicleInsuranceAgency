export type TransformerInFirstWord = {
    world: string
}
export type AddDots = {
    text: string,
    padNumber: number,
    dot: '.' | '|' | ',' | '-'
}
export type SplitStringProps = {
    fullString: string
    separator: '.'

}
export type FunctionSplitString = { firstPart: string; secondPart: string }
export type SplitString = ({ fullString, separator }: SplitStringProps) => FunctionSplitString