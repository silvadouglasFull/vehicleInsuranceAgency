import { FormInsuranceQuote } from "@components/forms/suhai/insuranceQuote"
import { Container } from "react-bootstrap"

export const Quote = () => {
    return (
        <section className="py-5 bg-light">
            <Container>
                <FormInsuranceQuote />
            </Container>
        </section>
    )
}