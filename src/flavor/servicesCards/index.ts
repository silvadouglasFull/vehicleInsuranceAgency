import type { CardProps } from "@components/cards/servicesCards/card/types";
import { cardService1, cardService2, cardService3 } from "@flavor/assets";

export const cards: CardProps[] = [
    {
        id: 1,
        title: 'Por quê ter Seguro de Automóvel?',
        text: ' Garante proteção financeira, assistência emergencial e tranquilidade diante de imprevistos cotidianos.',
        image: cardService1
    },
    {
        id: 2,
        title: 'Por quê ter Seguro de Motocicleta?',
        text: 'Oferece segurança ao condutor e ao veículo diante de acidentes e roubos, com suporte ágil em emergências.',
        image: cardService2
    },
    {
        id: 3,
        title: 'Por quê ter Seguro de Veículo de Carga?',
        text: 'Protege o patrimônio e assegura a continuidade das operações logísticas com respaldo completo.',
        image: cardService3
    },
];