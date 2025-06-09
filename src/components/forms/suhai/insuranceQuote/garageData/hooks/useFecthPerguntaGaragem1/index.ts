import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem1/types";
import { fetchGaragemPergunta1 } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [garagemPergunta1, setGaragemPergunta1] = useState<Options[]>([]);
    const [garagemPergunta1Loading, setGaragemPergunta1Loading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setGaragemPergunta1Loading(true);
            try {
                const response = await fetchGaragemPergunta1({ signal: controller.signal });
                if (response?.data) {
                    setGaragemPergunta1(response.data);
                } else {
                    setGaragemPergunta1([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch garagemPergunta1:', error);
                    setGaragemPergunta1([]);
                }
            } finally {
                setGaragemPergunta1Loading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        garagemPergunta1,
        garagemPergunta1Loading
    };
}