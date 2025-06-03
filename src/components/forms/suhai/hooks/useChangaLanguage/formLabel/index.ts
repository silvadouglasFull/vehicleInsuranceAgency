import { formLabels } from "@components/forms/contactUs/constants";
import type { FormField } from "@components/forms/contactUs/constants/types";
import type { Items } from "@components/forms/contactUs/hooks/useChangaLanguage/formLabel/types";
import { useLanguage } from "@context/language/hooks";
import { useEffect, useState } from "react";

export const useChangeLanguage = (): Items => {
    const [formInputs, setFormsInputs] = useState<FormField[]>(formLabels)
    const { language } = useLanguage()
    useEffect(() => {
        setFormsInputs(formLabels.filter(item => item.language === language) ?? formLabels)
    }, [language])
    return {
        items: formInputs
    }
}