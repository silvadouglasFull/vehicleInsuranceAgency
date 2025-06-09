import { fetchSexo } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/personalData/hooks/useFecthSexo/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [sexo, setsexo] = useState<Options[]>([]);
    const [sexoLoading, setsexoLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setsexoLoading(true);
            try {
                const response = await fetchSexo({ signal: controller.signal });
                if (response?.data) {
                    setsexo(response.data);
                } else {
                    setsexo([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch sexo:', error);
                    setsexo([]);
                }
            } finally {
                setsexoLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        sexo,
        sexoLoading
    };
}