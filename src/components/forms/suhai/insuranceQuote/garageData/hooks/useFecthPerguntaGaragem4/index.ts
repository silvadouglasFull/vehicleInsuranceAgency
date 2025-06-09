import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem4/types";
import { fetchGaragemPergunta4 } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [garagemPergunta4, setGaragemPergunta4] = useState<Options[]>([]);
    const [garagemPergunta4Loading, setGaragemPergunta4Loading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setGaragemPergunta4Loading(true);
            try {
                const response = await fetchGaragemPergunta4({ signal: controller.signal });
                if (response?.data) {
                    setGaragemPergunta4(response.data);
                } else {
                    setGaragemPergunta4([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch garagemPergunta4:', error);
                    setGaragemPergunta4([]);
                }
            } finally {
                setGaragemPergunta4Loading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        garagemPergunta4,
        garagemPergunta4Loading
    };
}