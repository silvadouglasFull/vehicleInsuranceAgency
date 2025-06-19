import type { StatusCode } from "@api/statusCode/types";
import { AnimationSlide } from "@components/animationSlide/slideLeftRight";
import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { FormGarageData } from "@components/forms/suhai/insuranceQuote/garageData";
import { Provider as FormGarageProvider } from "@components/forms/suhai/insuranceQuote/garageData/context/provider";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { FormInsuredData } from "@components/forms/suhai/insuranceQuote/insuredData";
import { Provider as FormInsuredDataProvider } from "@components/forms/suhai/insuranceQuote/insuredData/context/provider";
import { requiredFormsFields } from "@components/forms/suhai/insuranceQuote/layouts//utils/requiredFormsFields";
import { createPayload } from "@components/forms/suhai/insuranceQuote/layouts/utils/createPayloadIncluirCotacao";
import { generateListMessageIncorrectFilling } from "@components/forms/suhai/insuranceQuote/layouts/utils/generateMessageIncorrectFilling";
import { FormMainDriveData } from "@components/forms/suhai/insuranceQuote/mainDriverData";
import { Provider as FormMainDriverDataProvider } from "@components/forms/suhai/insuranceQuote/mainDriverData/context/provider";
import { fetchIncluirCotacao } from "@components/forms/suhai/insuranceQuote/modules/incluirCotacao";
import { FormPaymentDetails } from "@components/forms/suhai/insuranceQuote/paymentDetails";
import { FormPersonalData } from "@components/forms/suhai/insuranceQuote/personalData";
import { FormVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData";
import { Spinner } from "@components/spinner";
import { Toast } from "@components/toast";
import { useToast } from "@components/toast/hooks/useToast";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const FormLayout: React.FC = () => {
    const { state: formData } = useInsuranceQuote();
    const { onClose, show, setMessage, setStatusCode, statusCode, message: messageResponse } = useToast()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const requiredFields = requiredFormsFields({ formFiels: formLabels })
        const listToast = generateListMessageIncorrectFilling({ formData, requiredFields })
        if (listToast.length) {
            setMessage(listToast)
            setStatusCode(420)
        } else {
            setLoading(true)
            const payload = createPayload({ formData })
            const response = await fetchIncluirCotacao({ ...payload })
            const { data, error, status } = response
            setLoading(false)
            if (error) {
                setMessage(error ?? 'Não foi possível completar sua solicitação')
            }
            setStatusCode(status as StatusCode)
            if (data) {
                navigate('/proposta', { state: { ...data, formData } })
            }
        }
    }
    return (
        <Container>
            <Toast message={messageResponse} onclose={onClose} show={show} statusCode={statusCode} />
            <Form onSubmit={handleSubmit}>
                <AnimationSlide direction="left">
                    <FormVehicleData />
                </AnimationSlide>
                <AnimationSlide direction="right">
                    <FormGarageProvider>
                        <FormGarageData />
                    </FormGarageProvider>
                </AnimationSlide>
                <AnimationSlide direction="left">
                    <FormPersonalData />
                </AnimationSlide>
                <AnimationSlide direction="right">
                    <FormInsuredDataProvider>
                        <FormInsuredData />
                    </FormInsuredDataProvider>
                </AnimationSlide>
                <AnimationSlide direction="left">
                    <FormMainDriverDataProvider>
                        <FormMainDriveData />
                    </FormMainDriverDataProvider>
                </AnimationSlide>
                <AnimationSlide direction="left">
                    <FormPaymentDetails />
                </AnimationSlide>
                <AnimationSlide direction="right">
                    <div className="text-center mt-4">
                        <Button
                            type="submit"
                            variant="info"
                            size="lg"
                            className="px-5 py-3 fw-bold shadow"
                        >
                            Solicitar Cotação {loading && <Spinner animation="border" />}
                        </Button>
                    </div>
                </AnimationSlide>
            </Form>
        </Container>
    );
};
