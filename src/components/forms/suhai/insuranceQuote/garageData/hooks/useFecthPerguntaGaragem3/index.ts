import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/garageData/hooks/useFecthPerguntaGaragem3/types";
import { fetchGaragemPergunta3 } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [garagemPergunta3, setGaragemPergunta3] = useState<Options[]>([]);
    const [garagemPergunta3Loading, setGaragemPergunta3Loading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setGaragemPergunta3Loading(true);
            try {
                const response = await fetchGaragemPergunta3({ signal: controller.signal });
                if (response?.data) {
                    setGaragemPergunta3(response.data);
                } else {
                    setGaragemPergunta3([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch garagemPergunta3:', error);
                    setGaragemPergunta3([]);
                }
            } finally {
                setGaragemPergunta3Loading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        garagemPergunta3,
        garagemPergunta3Loading
    };
}