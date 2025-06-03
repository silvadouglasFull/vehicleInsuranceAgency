import { previewMessage } from "@components/forms/contactUs/constants";
import type { PreviewMessage } from "@components/forms/contactUs/constants/types";
import { useLanguage } from "@context/language/hooks";
import { useEffect, useState } from "react";

export const useSetPreviewMessage = (): PreviewMessage => {
    const defaultMessage: PreviewMessage = previewMessage.find(item => item.language === 'en') || previewMessage[0]
    const [message, setMessage] = useState<PreviewMessage>(defaultMessage)
    const { language } = useLanguage()
    useEffect(() => {
        setMessage(previewMessage.find(item => item.language === language) ?? defaultMessage)
    }, [language])
    return {
        ...message
    }

}