import { SocialMidiaLink } from "@components/footer/links/socialMidia/link"
import type { SocialMidiaLinksProps } from "@components/footer/links/socialMidia/types"
import type React from "react"

export const SocialMidiaLinks: React.FC<SocialMidiaLinksProps> = ({ items }: SocialMidiaLinksProps) => {
    if (!items.length) {
        return (
            <>
            </>
        )
    }
    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <SocialMidiaLink key={item.id} {...item} />
            ))}
        </ul>
    )
}