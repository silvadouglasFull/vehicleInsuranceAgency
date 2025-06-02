import type { CardProps } from "@components/cards/servicesCards/card/types";
import { cardService1, cardService2, cardService3 } from "@flavor/assets";

export const cards: CardProps[] = [
    {
        id: 1,
        title: 'Seguro para Carro de Família',
        text: 'Proteja seu carro e sua família com cobertura completa.',
        image: cardService3
    },
    {
        id: 2,
        title: 'Seguro Esportivo',
        text: 'Maior segurança para seu carro esportivo.',
        image: cardService2
    },
    {
        id: 3,
        title: 'Seguro para Veículo Comercial',
        text: 'Tenha proteção completa para seu veículo de trabalho.',
        image: cardService1
    },
];