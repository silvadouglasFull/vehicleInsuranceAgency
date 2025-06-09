import type { OpenLink } from "./types"

export const openLink = ({ link }: OpenLink): void => {
    window.open(link, '_blank')?.focus()
}