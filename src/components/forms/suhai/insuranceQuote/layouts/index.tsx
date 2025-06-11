import type { StatusCode } from "@api/statusCode/types";
import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { FormGarageData } from "@components/forms/suhai/insuranceQuote/garageData";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { FormInsuredData } from "@components/forms/suhai/insuranceQuote/insuredData";
import { requiredFormsFields } from "@components/forms/suhai/insuranceQuote/layouts//utils/requiredFormsFields";
import { generateListMessageIncorrectFilling } from "@components/forms/suhai/insuranceQuote/layouts/utils/generateMessageIncorrectFilling";
import { FormMainDriveData } from "@components/forms/suhai/insuranceQuote/mainDriverData";
import { FormPaymentDetails } from "@components/forms/suhai/insuranceQuote/paymentDetails";
import { FormPersonalData } from "@components/forms/suhai/insuranceQuote/personalData";
import { FormVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData";
import { FormVehicleValue } from "@components/forms/suhai/insuranceQuote/vehicleValue";
import { Toast } from "@components/toast";
import { useToast } from "@components/toast/hooks/useToast";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchIncluirCotacao } from "../modules/incluirCotacao";
import { createPayload } from "./utils/createPayloadIncluirCotacao";

export const FormLayout: React.FC = () => {
    const { state: formData } = useInsuranceQuote();
    const { onClose, show, setMessage, setStatusCode, statusCode, message: messageResponse } = useToast()
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const requiredFields = requiredFormsFields({ formFiels: formLabels })
        const listToast = generateListMessageIncorrectFilling({ formData, requiredFields })
        if (listToast.length) {
            setMessage(listToast)
            setStatusCode(420)
        } else {
            const payload = createPayload({ formData })
            const response = await fetchIncluirCotacao({ ...payload })
            const { data, error, success, status } = response
            if (error && (!success)) {
                setMessage(error ?? 'Não foi possível completar sua solicitação')
            }
            setStatusCode(status as StatusCode)
            if (data) {
                navigate('/proposta', { state: { ...data } })
            }
        }
    }
    return (
        <Container>
            <Toast message={messageResponse} onclose={onClose} show={show} statusCode={statusCode} />
            <Form onSubmit={handleSubmit}>
                <FormVehicleData />
                <FormVehicleValue />
                <FormPersonalData />
                <FormInsuredData />
                <FormMainDriveData />
                <FormGarageData />
                <FormPaymentDetails />
                <div className="text-center mt-4">
                    <Button
                        type="submit"
                        variant="success"
                        size="lg"
                        className="px-5 py-3 fw-bold shadow"
                    >
                        Solicitar Cotação
                    </Button>
                </div>
            </Form>
        </Container>
    );
};
