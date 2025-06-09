import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/mainDriverData/hooks/useFecthEstadoCivil/types";
import { fetchEstadoCivilPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [estadoCivilPrincipalCondutor, setEstadoCivilPrincipalCondutor] = useState<Options[]>([]);
    const [estadoCivilPrincipalCondutorLoading, setEstadoCivilLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setEstadoCivilLoading(true);
            try {
                const response = await fetchEstadoCivilPrincipalCondutor({ signal: controller.signal });
                if (response?.data) {
                    setEstadoCivilPrincipalCondutor(response.data);
                } else {
                    setEstadoCivilPrincipalCondutor([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch estadoCivilPrincipalCondutor:', error);
                    setEstadoCivilPrincipalCondutor([]);
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
        estadoCivilPrincipalCondutor,
        estadoCivilPrincipalCondutorLoading
    };
}