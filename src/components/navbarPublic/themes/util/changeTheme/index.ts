import type { ChangeThemeParams } from "@components/navbarPublic/themes/util/changeTheme/types";

export const changeTheme = ({ theme }: ChangeThemeParams): void => {
    window.document.documentElement.setAttribute("data-bs-theme", theme)
}