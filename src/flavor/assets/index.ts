import cardService1 from '@assets/seuSeguroNoClick/imagens/cards/1.png';
import cardService2 from "@assets/seuSeguroNoClick/imagens/cards/2.png";
import cardService3 from "@assets/seuSeguroNoClick/imagens/cards/3.png";
import logo from "@assets/seuSeguroNoClick/imagens/logo.png";
import slide1 from "@assets/seuSeguroNoClick/imagens/slides/1.png";
import slide2 from "@assets/seuSeguroNoClick/imagens/slides/2.jpg";
import slide3 from "@assets/seuSeguroNoClick/imagens/slides/3.png";
import type { BreadCrumps, Slide } from "@flavor/assets/types";
export { cardService1, cardService2, cardService3, logo };
export const slides: Slide[] = [
    {
        id: 1,
        midia: slide1,
        textButton: "Saiba Mais",
        title: "Proteja seu veículo com a melhor seguradora",
        subtitle: "Cobertura completa e atendimento 24h para você rodar tranquilo.",
        captionStyle: {
            desktop: { top: '20%', margin: '0 auto' },
            mobile: { margin: '0 auto', top: '15%' }
        }
    },
    {
        id: 2,
        midia: slide2,
        textButton: "Contrate Agora",
        title: "Planos personalizados para você",
        subtitle: "Escolha o plano ideal e tenha mais segurança no seu dia a dia.",
        captionStyle: {
            desktop: { top: '60%', margin: '0 auto' },
            mobile: { margin: '0 auto', top: '60%' }
        }
    },
    {
        id: 3,
        midia: slide3,
        textButton: "Fale com um consultor",
        title: "Atendimento especializado",
        subtitle: "Nossa equipe está pronta para te ajudar em todas as etapas.",
        captionStyle: {
            desktop: {
                left: 350,
                top: '20%',
                width: '100%'
            },
            mobile: { margin: '0 auto', top: '50%' }
        }
    },
];
export const breadCrumps: BreadCrumps[] = [
    {
        id: 1,
        midia: slide3,
        url: '/cotacao'
    },
    {
        id: 2,
        midia: slide2,
        url: '/proposta'
    },
]