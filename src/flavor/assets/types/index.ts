import type { TRoute } from "@flavor/links/types";

export type CaptionStyle = {
    mobile: React.CSSProperties
    desktop: React.CSSProperties
}
export type Slide = {
    id: number;
    midia: string;
    textButton: string;
    title: string;
    subtitle: string;
    captionStyle?: CaptionStyle
    buttonLink?: string
};

export type BreadCrumps = {
    id: number | string
    midia: string
    url: TRoute
}