import { fetchEstadoCivil } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/personalData/hooks/useFecthEstadoCivil/types";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [estadoCivil, setEstadoCivil] = useState<Options[]>([]);
    const [estadoCivilLoading, setEstadoCivilLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setEstadoCivilLoading(true);
            try {
                const response = await fetchEstadoCivil({ signal: controller.signal });
                if (response?.data) {
                    setEstadoCivil(response.data);
                } else {
                    setEstadoCivil([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch estadoCivil:', error);
                    setEstadoCivil([]);
                }
            } finally {
                setEstadoCivilLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        estadoCivil,
        estadoCivilLoading
    };
}