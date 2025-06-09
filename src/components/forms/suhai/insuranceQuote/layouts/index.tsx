import { formLabels } from "@components/forms/suhai/insuranceQuote/constants";
import { FormGarageData } from "@components/forms/suhai/insuranceQuote/garageData";
import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { FormInsuredData } from "@components/forms/suhai/insuranceQuote/insuredData";
import { requiredFormsFields } from "@components/forms/suhai/insuranceQuote/layouts//utils/requiredFormsFields";
import { generateMessageIncorrectFilling } from "@components/forms/suhai/insuranceQuote/layouts/utils/generateMessageIncorrectFilling";
import { isValid } from "@components/forms/suhai/insuranceQuote/layouts/utils/isValidRequiredFields";
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
        const requiredFields = requiredFormsFields({ formFiels: formLabels })
        const listToast: string[] = []
        requiredFields.forEach(item => {
            const valid = isValid({ name: item.name, state: formData })
            if (!valid) {
                listToast.push(generateMessageIncorrectFilling({ label: item.label }))
            }
        })
        console.log(listToast)
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
