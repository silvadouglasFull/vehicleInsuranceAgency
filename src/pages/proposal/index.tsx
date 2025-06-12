import { DefaultLayout } from "@components/quote/suhai/layouts";
import React from "react";
import { Container } from "react-bootstrap";
export const Proposta: React.FC = () => {

    return (
        <Container className="my-4">
            <h4 className="text-center mb-4 text-success fw-bold">Resumo da Cotação</h4>
            <DefaultLayout />
        </Container>
    );
};
