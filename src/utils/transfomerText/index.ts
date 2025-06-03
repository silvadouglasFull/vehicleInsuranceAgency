import type { TransformerInFirstWord } from "@utils/transfomerText/types"
export const transformerInFirstWord = ({ world }: TransformerInFirstWord): string => {
    return String(world).substring(0, 1)
}