import carImage from "@assets/seuSeguroNoClick/imagens/flashSection/car.png";
import motocicleImage from "@assets/seuSeguroNoClick/imagens/flashSection/motocicle.png";
import truckImage from "@assets/seuSeguroNoClick/imagens/flashSection/truck.png";
import type { FlashSection } from "@flavor/flashSection/types";
export const flashSection: FlashSection[] = [
    {
        id: 1,
        title: "Seguro de Automóvel",
        paragraph: [
            {
                id: 1,
                text: "Ter um seguro automotivo para carro é essencial para proteger seu patrimônio contra roubos, colisões e danos a terceiros. Isso garante mais tranquilidade no dia a dia, especialmente em grandes centros urbanos. Além disso, seguros oferecem assistência 24h, agregando comodidade e segurança em situações de emergência.",
            },
            {
                id: 2,
                text: "Com o aumento dos custos de reparos e reposição de peças, um seguro pode representar uma economia significativa em caso de imprevistos. Evita gastos inesperados que comprometeriam seu orçamento. A cobertura também pode incluir carro reserva, facilitando sua mobilidade após um sinistro.",
            },
            {
                id: 3,
                text: "Para quem utiliza o carro diariamente, o seguro representa não apenas proteção financeira, mas também respaldo jurídico e suporte técnico. É uma decisão estratégica para quem valoriza previsibilidade e segurança.",
            },
        ],
        midia: carImage
    },
    {
        id: 2,
        title: "Seguro de Motocicleta",
        paragraph: [
            {
                id: 1,
                text: "A moto, por sua vulnerabilidade e maior índice de acidentes, exige um seguro que minimize riscos ao condutor e ao veículo. Um bom seguro cobre desde roubo até colisões e danos a terceiros. É um investimento essencial para quem depende da moto como meio de transporte ou trabalho.",
            },
            {
                id: 2,
                text: "Motociclistas estão mais expostos a imprevistos, o que torna o seguro um aliado indispensável. A assistência 24h pode incluir reboque, chaveiro e até transporte alternativo. Isso proporciona agilidade e proteção em situações críticas.",
            },
            {
                id: 3,
                text: "Além da proteção ao bem material, o seguro para motos pode incluir coberturas pessoais, como invalidez ou despesas médicas. Assim, você preserva sua segurança física e financeira com responsabilidade.",
            },
        ],
        midia: motocicleImage
    },
    {
        id: 3,
        title: "Seguro de Veículo de Carga",
        paragraph: [
            {
                id: 1,
                text: "Para quem trabalha com transporte de cargas, o seguro de caminhão é vital para proteger seu negócio contra prejuízos com acidentes, furtos e danos à carga. É uma forma de garantir a continuidade das operações com segurança.",
            },
            {
                id: 2,
                text: "O seguro também cobre responsabilidade civil, oferecendo amparo legal em casos de danos a terceiros. Isso é essencial para motoristas autônomos e empresas que dependem da logística rodoviária.",
            },
            {
                id: 3,
                text: "Com planos personalizados, é possível adequar a cobertura ao perfil do veículo, da carga e da rota. Essa flexibilidade protege não só o caminhão, mas todo o investimento envolvido na operação.",
            },
        ],
        midia: truckImage
    },
];
