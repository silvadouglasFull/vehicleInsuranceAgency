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
        route: '',
        icon: 'fa-brands fa-facebook'
    },
    {
        id: 1,
        nameSocialMidia: 'Whatsapp',
        route: '',
        icon: 'fa-brands fa-whatsapp',
    },
    {
        id: 2,
        nameSocialMidia: 'Instagram',
        route: '',
        icon: 'fa-brands fa-instagram',
    }
]

export const contact: Contact[] = [
    {
        id: 0,
        type: 'Endereço',
        text: 'Rua Exemplo, 123, Cidade - UF'
    },
    {
        id: 1,
        type: 'Email',
        text: 'ouvidoria@suhaiseguradora.com'
    },
    {
        id: 2,
        type: 'Whatsapp',
        text: '3003-0335',
    }
]