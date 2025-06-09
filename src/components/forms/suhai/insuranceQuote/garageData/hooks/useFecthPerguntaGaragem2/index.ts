import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem2/types";
import { fetchGaragemPergunta2 } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [garagemPergunta2, setGaragemPergunta2] = useState<Options[]>([]);
    const [garagemPergunta2Loading, setGaragemPergunta2Loading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setGaragemPergunta2Loading(true);
            try {
                const response = await fetchGaragemPergunta2({ signal: controller.signal });
                if (response?.data) {
                    setGaragemPergunta2(response.data);
                } else {
                    setGaragemPergunta2([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch garagemPergunta2:', error);
                    setGaragemPergunta2([]);
                }
            } finally {
                setGaragemPergunta2Loading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        garagemPergunta2,
        garagemPergunta2Loading
    };
}