import { Icon } from "@components/icons";
import { useTheme } from "@components/navbarPublic/themes/hooks/theme";
import { Item } from "@components/navbarPublic/themes/item";
import type { ThemesProps } from "@components/navbarPublic/themes/types";
import type React from "react";
import { NavDropdown } from "react-bootstrap";
export const ThemesDropDown: React.FC<ThemesProps> = ({ items }: ThemesProps) => {
    const { theme: { icon, description } } = useTheme()
    if (!items.length) {
        return <></>
    }
    return (
        <NavDropdown
            id="collapsible-nav-dropdown"
            title={<span className="text-light">{icon && <Icon name={`${icon} me-2`} />}{description ?? 'Temas'}</span>} >
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </NavDropdown>
    )
}