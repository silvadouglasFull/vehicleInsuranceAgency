import type { Link } from "@flavor/links/types";
import React from "react";
import { Nav } from "react-bootstrap";
export const LinkItem: React.FC<Link> = ({ namePage, id, route }: Link) => {
    return (
        <Nav.Link id={`nav-link-item-${id}`} href={route}>{namePage}</Nav.Link>
    )
}