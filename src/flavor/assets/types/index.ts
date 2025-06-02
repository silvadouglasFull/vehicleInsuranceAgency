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
};
