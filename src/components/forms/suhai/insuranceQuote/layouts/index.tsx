import { FormGarageData } from "@components/forms/suhai/insuranceQuote/garageData";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { FormInsuredData } from "@components/forms/suhai/insuranceQuote/insuredData";
import { FormMainDriveData } from "@components/forms/suhai/insuranceQuote/mainDriverData";
import { FormPaymentDetails } from "@components/forms/suhai/insuranceQuote/paymentDetails";
import { FormPersonalData } from "@components/forms/suhai/insuranceQuote/personalData";
import { FormVehicleData } from "@components/forms/suhai/insuranceQuote/vehicleData";
import { FormVehicleValue } from "@components/forms/suhai/insuranceQuote/vehicleValue";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";

export const FormLayout: React.FC = () => {
    const { state: formData } = useInsuranceQuote();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados da cotação:", formData);
        alert("Cotação enviada com sucesso!");
    };

    return (
        <Container>
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
