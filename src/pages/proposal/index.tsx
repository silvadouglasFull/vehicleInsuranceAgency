import { DefaultLayout } from "@components/accordion/suhai/layouts";
import React from "react";
import { Container } from "react-bootstrap";
export const CotacaoResumo: React.FC = () => {

    return (
        <Container className="my-4">
            <h4 className="text-center mb-4 text-success fw-bold">Resumo da Cotação</h4>
            <DefaultLayout />
        </Container>
    );
};
