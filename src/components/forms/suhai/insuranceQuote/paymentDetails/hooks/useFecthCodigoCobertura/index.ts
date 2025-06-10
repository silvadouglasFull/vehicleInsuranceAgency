import { fetchCodigoCobertura } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useFecthCodigoCobertura/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [codigoCobertura, setcodigoCobertura] = useState<Options[]>([]);
    const [codigoCoberturaLoading, setcodigoCoberturaLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setcodigoCoberturaLoading(true);
            try {
                const response = await fetchCodigoCobertura({ signal: controller.signal });
                if (response?.data) {
                    setcodigoCobertura(response.data);
                } else {
                    setcodigoCobertura([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch codigoCobertura:', error);
                    setcodigoCobertura([]);
                }
            } finally {
                setcodigoCoberturaLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        codigoCobertura,
        codigoCoberturaLoading
    };
}