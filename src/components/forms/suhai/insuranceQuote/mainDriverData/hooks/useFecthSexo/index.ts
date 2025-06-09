import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/mainDriverData/hooks/useFecthSexo/types";
import { fetchSexoPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [sexoPrincipalCondutor, setSexoPrincipalCondutor] = useState<Options[]>([]);
    const [sexoPrincipalCondutorLoading, setSexoPrincipalCondutorLoading] = useState<boolean>(false)
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setSexoPrincipalCondutorLoading(true);
            try {
                const response = await fetchSexoPrincipalCondutor({ signal: controller.signal });
                if (response?.data) {
                    setSexoPrincipalCondutor(response.data);
                } else {
                    setSexoPrincipalCondutor([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch sexoPrincipalCondutor:', error);
                    setSexoPrincipalCondutor([]);
                }
            } finally {
                setSexoPrincipalCondutorLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        sexoPrincipalCondutor,
        sexoPrincipalCondutorLoading
    };
}