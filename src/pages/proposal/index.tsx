import React from "react";
import { Accordion, Container } from "react-bootstrap";

interface CotacaoProps {
    data: any;
}

export const CotacaoResumo: React.FC<CotacaoProps> = ({ data }) => {
    const resumo = data || {};

    return (
        <Container className="my-4">
            <h4 className="text-center mb-4 text-success fw-bold">Resumo da Cotação</h4>
            <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Informações Básicas</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>Protocolo:</strong> {resumo.protocolo}</p>
                        <p><strong>Mensagem:</strong> {resumo.textoMsgRet}</p>
                        <p><strong>Prêmio Líquido:</strong> R$ {resumo.premioLiquido}</p>
                        <p><strong>Prêmio Total à Vista:</strong> R$ {resumo.premioTotalAVista}</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Parcelas Individuais</Accordion.Header>
                    <Accordion.Body>
                        {[...Array(12)].map((_, i) => {
                            const valor = resumo[`premioParcela${i + 1}`];
                            return valor ? (
                                <p key={i}><strong>Parcela {i + 1}:</strong> R$ {valor}</p>
                            ) : null;
                        })}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Informações FIPE</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>Valor FIPE:</strong> R$ {resumo.valorFipe}</p>
                        <p><strong>Fator FIPE:</strong> {resumo.fatorFipe}%</p>
                        <p><strong>Valor x Fator:</strong> R$ {resumo.valorFipexFator}</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>RCF (Responsabilidade Civil Facultativa)</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>Materiais:</strong> R$ {resumo.Calculo?.RCF?.premioDanosMateriais}</p>
                        <p><strong>Corporais:</strong> R$ {resumo.Calculo?.RCF?.premioDanosCorporais}</p>
                        <p><strong>Morais:</strong> R$ {resumo.Calculo?.RCF?.premioDanosMorais}</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Planos de Cobertura</Accordion.Header>
                    <Accordion.Body>
                        {resumo.Calculo?.PremioCoberturas?.Cobertura.map((cobertura: any, idx: number) => (
                            <div key={idx} className="mb-4">
                                <h6 className="fw-bold text-primary">{cobertura.nome}</h6>
                                <p><strong>Prêmio Líquido:</strong> R$ {cobertura.premioLiquido}</p>
                                <ul className="ps-3">
                                    {cobertura.Parcelamento.Parcela.map((parcela: any, i: number) => (
                                        <li key={i}>
                                            <strong>{parcela.quantidade}x</strong> de R$ {parcela._value_1.toFixed(2)} | Total: R$ {parcela.valorTotal.toFixed(2)} | IOF: R$ {parcela.valorIOF.toFixed(2)} | Juros: R$ {parcela.valorJuros.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};
