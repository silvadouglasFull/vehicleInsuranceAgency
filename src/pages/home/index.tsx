import { ServicesSection } from "@pages/home/layouts/firstSection"
import { FlashSection } from "@pages/home/layouts/flashsection"
import { BannerAction } from "@pages/home/layouts/secoundSection"

export const Home = () => {
    return (
        <>
            <ServicesSection />
            <BannerAction />
            <FlashSection />
        </>
    )
}