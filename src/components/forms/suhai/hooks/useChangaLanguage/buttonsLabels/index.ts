import { buttonsLabels } from "@components/forms/contactUs/constants";
import type { TButtonsLabels } from "@components/forms/contactUs/constants/types";
import { useLanguage } from "@context/language/hooks";
import { useEffect, useState } from "react";

export const useButtonsLabels = (): TButtonsLabels => {
    const [buttonlabel, setButtonLabel] = useState<TButtonsLabels>(buttonsLabels[0])
    const { language } = useLanguage()
    useEffect(() => {
        setButtonLabel(buttonsLabels.find(item => item.language === language) ?? buttonsLabels[0])
    }, [language])
    return {
        ...buttonlabel
    }
}