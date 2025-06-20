import { Icon } from "@components/icons"
import { useTheme } from "@components/navbarPublic/themes/hooks/theme"
import { useSetClassActive } from "@components/navbarPublic/themes/item/hooks/useSetClassActive"
import type { Item as TItem } from "@components/navbarPublic/themes/item/types"
import type React from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item: React.FC<TItem> = ({ id, description, theme, icon }: TItem) => {
    const { theme: { icon: contextIcon }, setTheme } = useTheme()
    const active = useSetClassActive({ contextIcon, icon })
    const onClick = () => {
        setTheme({ id, description, theme, icon })
    }
    return (
        <Dropdown.Item active={active} className="text-decoration-none" as={Link} to={`#${theme}`} onClick={onClick}>
            {icon && <Icon name={`${icon} me-2 ${contextIcon === icon ? 'text-info' : ''}`} />}{description}
        </Dropdown.Item>
    )
}