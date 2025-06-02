export type CarouselImageProps = {
    src: string;
    alt?: string;
    fluid?: boolean;
    rounded?: boolean;
    className?: string;
}
export type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>