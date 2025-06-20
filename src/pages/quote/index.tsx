import { FormInsuranceQuote } from "@components/forms/suhai/insuranceQuote"
import { Provider as InsuranceProvider } from "@components/forms/suhai/insuranceQuote/context/provider"
import { Container } from "react-bootstrap"

export const Quote = () => {
    return (
        <section className="py-5">
            <Container>
                <InsuranceProvider>
                    <FormInsuranceQuote />
                </InsuranceProvider>
            </Container>
        </section>
    )
}