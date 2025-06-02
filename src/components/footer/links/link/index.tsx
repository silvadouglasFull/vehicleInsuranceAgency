import type { Link as TLink } from "@flavor/links/types";
import type React from "react";
import { Link as ReactRouterDownLink } from 'react-router-dom';
export const Link: React.FC<TLink> = ({ namePage, route }: TLink) => {
    return (
        <li>
            <ReactRouterDownLink to={route} className="text-light" >
                {namePage}
            </ReactRouterDownLink>
        </li>

    )
}