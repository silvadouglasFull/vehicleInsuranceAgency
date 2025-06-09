import { fetchTipoUtilizacao } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFecthTipoUtilizacao/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [tipoUtilizacao, setTipoUtilizacao] = useState<Options[]>([]);
    const [tipoUtilizacaoLoading, setTipoUtilizacaoLoading] = useState<boolean>(false);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setTipoUtilizacaoLoading(true);
            try {
                const response = await fetchTipoUtilizacao({ signal: controller.signal });
                if (response?.data) {
                    setTipoUtilizacao(response.data);
                } else {
                    setTipoUtilizacao([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch tipoUtilizacao:', error);
                    setTipoUtilizacao([]);
                }
            } finally {
                setTipoUtilizacaoLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        tipoUtilizacao,
        tipoUtilizacaoLoading,
    };
}