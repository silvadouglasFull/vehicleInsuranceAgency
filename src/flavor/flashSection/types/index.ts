export type FlashSection = {
    id: number;
    title: string;
    paragraph: {
        id: number;
        text: string;
    }[];
    midia?: string
}