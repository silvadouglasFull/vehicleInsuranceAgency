import type React from "react"

export type Title = {
    title: string
}
export type TitleProps = Title & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>