import type React from "react"

export type Breadcrumbs = {
    backgroundImage: string | null
}
export type BreadcrumbsProps = Breadcrumbs & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
export type Style = {
    section: React.CSSProperties
}