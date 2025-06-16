import { fetchFormaPagamento } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useFecthFormaPagamento/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [formaPagamento, setformaPagamento] = useState<Options[]>([]);
    const [formaPagamentoLoading, setFormaPagamentoLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setFormaPagamentoLoading(true);
            try {
                const response = await fetchFormaPagamento({ signal: controller.signal });
                if (response?.data) {
                    setformaPagamento(response.data);
                } else {
                    setformaPagamento([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch formaPagamento:', error);
                    setformaPagamento([]);
                }
            } finally {
                setFormaPagamentoLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        formaPagamento,
        formaPagamentoLoading
    };
}