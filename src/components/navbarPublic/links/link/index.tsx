import type { Link } from "@flavor/links/types";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link as LinkReactRouterDowm } from "react-router-dom";
export const LinkItem: React.FC<Link> = ({ namePage, id, route }: Link) => {
    return (
        <>
            <Nav.Link className='d-block d-md-none text-dark' id={`nav-link-item-${id}`} as={LinkReactRouterDowm} to={route}>{namePage}</Nav.Link>
            <Nav.Link className='d-none d-md-block text-light' id={`nav-link-item-${id}`} as={LinkReactRouterDowm} to={route}>{namePage}</Nav.Link>
        </>
    )
}