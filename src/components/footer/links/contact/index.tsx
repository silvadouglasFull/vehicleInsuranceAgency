import type { Contact } from "@flavor/links/types";

import { Link } from "@components/footer/links/contact/links";
import type React from "react";
export type ContactLinksProps = {
    items: Contact[]
}
export const ContactLinks: React.FC<ContactLinksProps> = ({ items }: ContactLinksProps) => {
    if (!items.length) {
        return (
            <>
            </>
        )
    }
    return items.map(item => (
        <Link key={item.id} {...item} />
    ))
}