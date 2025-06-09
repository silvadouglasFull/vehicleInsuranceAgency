import { fetchTipoContratacao } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useFecthTipoContratacao/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [tipoContratacao, setTipoContratacao] = useState<Options[]>([]);
    const [tipoContratacaoLoading, setTipoContratacaoLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setTipoContratacaoLoading(true);
            try {
                const response = await fetchTipoContratacao({ signal: controller.signal });
                if (response?.data) {
                    setTipoContratacao(response.data);
                } else {
                    setTipoContratacao([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch tipoContratacao:', error);
                    setTipoContratacao([]);
                }
            } finally {
                setTipoContratacaoLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        tipoContratacao,
        tipoContratacaoLoading
    };
}