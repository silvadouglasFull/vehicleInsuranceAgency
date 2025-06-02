import ServicesCards from "@components/cards"
import { cards } from "@flavor/servicesCards"

export const ServicesSection = () => {
    return (
        <>
            <ServicesCards items={cards} />
        </>
    )
}