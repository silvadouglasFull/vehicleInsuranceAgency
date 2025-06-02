import type { Contact } from "@flavor/links/types"

export const Link: React.FC<Contact> = ({ text, type }: Contact) => {
    return (
        <p>
            <span className="font-weight-bold mr-2">
                {type}:
            </span>
            {text}
        </p>
    )
}