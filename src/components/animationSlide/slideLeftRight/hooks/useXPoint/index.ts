import type { AnimationSlideProps, UseXPoint } from "@components/animationSlide/slideLeftRight/types";

export const useXPoint = ({ direction }: AnimationSlideProps): UseXPoint => {
    const xPoint = direction === 'left' ? -200 : direction === 'right' ? 200 : 0;
    return { xPoint };
}