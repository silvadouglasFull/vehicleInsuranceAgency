import { Link } from "@components/footer/links/link"
import type { LinksFooterProps } from "@components/footer/links/types"
import type React from "react"
import { Row } from "react-bootstrap"

export const Links: React.FC<LinksFooterProps> = ({ items }: LinksFooterProps) => {
    if (!items.length) {
        return (
            <>
            </>
        )
    }
    return (
        <Row className="list-unstyled" >
            {items.map(item => (
                <Link key={item.id} {...item} />))}
        </Row>
    )
}