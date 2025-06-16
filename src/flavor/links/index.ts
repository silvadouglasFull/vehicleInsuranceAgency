import type { Link as TSocialMidia } from "@components/footer/links/socialMidia/link/types";
import type { Contact, Link } from "@flavor/links/types";
export const links: Link[] = [
    { id: 1, namePage: "Home", route: "/" },
    { id: 2, namePage: "Contato", route: "/contato" },
    { id: 3, namePage: "Cotação", route: "/cotacao" },
];
export const socialMidia: TSocialMidia[] = [
    {
        id: 0,
        nameSocialMidia: 'Facebook',
        route: 'https://www.facebook.com/seucreditonoclick/',
        icon: 'fa-brands fa-facebook'
    },
    {
        id: 1,
        nameSocialMidia: 'Whatsapp',
        route: 'https://api.whatsapp.com/send?phone=5508006071111&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20cr%C3%A9dito',
        icon: 'fa-brands fa-whatsapp',
    },
    {
        id: 2,
        nameSocialMidia: 'Instagram',
        route: 'https://www.instagram.com/seucreditonoclick/',
        icon: 'fa-brands fa-instagram',
    }
]

export const contact: Contact[] = [
    {
        id: 0,
        type: 'Endereço',
        text: 'Rua General Jardim, 482 5º andar – Vila Buarque, S.Paulo – SP CEP 01223-010'
    },
    {
        id: 1,
        type: 'Endereço',
        text: 'Rua Amazonas, 439 Sala 70, Centro, São Caetano do Sul – SP CEP 09520-070'
    },
    {
        id: 2,
        type: 'Whatsapp',
        text: '0800 607 1111',
    }
]