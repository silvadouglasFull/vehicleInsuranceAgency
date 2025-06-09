import { fetchPossuiOutroVeic } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFecthOutroVeiculo/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [possuiOutroVeic, setPossuiOutroVeic] = useState<Options[]>([]);
    const [possuiOutroVeicLoading, setPossuiOutroVeicLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setPossuiOutroVeicLoading(true);
            try {
                const response = await fetchPossuiOutroVeic({ signal: controller.signal });
                if (response?.data) {
                    setPossuiOutroVeic(response.data);
                } else {
                    setPossuiOutroVeic([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch possuiOutroVeic:', error);
                    setPossuiOutroVeic([]);
                }
            } finally {
                setPossuiOutroVeicLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    return {
        possuiOutroVeic,
        possuiOutroVeicLoading,
    };
}