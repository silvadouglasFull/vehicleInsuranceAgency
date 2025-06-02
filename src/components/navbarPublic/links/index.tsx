import { LinkItem } from "@components/navbarPublic/links/link"
import type { LinksProps } from "@components/navbarPublic/links/types"
import type React from "react"
import { Nav } from "react-bootstrap"

export const Links: React.FC<LinksProps> = ({ items }: LinksProps) => {
    return (
        <Nav className="ms-auto">
            {items.length
                ? items.filter(item => item.route !== '/').map(item => <LinkItem key={item.id} {...item} />)
                : null}
        </Nav>
    )

}