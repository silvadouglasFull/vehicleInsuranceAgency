export type Link = {
    id: number | string;
    namePage: string;
    route: '/' | '/contato' | '/cotacao';
};

export type Type = 'Endereço' | 'Whatsapp' | 'Email'
export type Contact = {
    id: number | string
    type: Type
    text: string
}