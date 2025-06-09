import { fetchZeroKm } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFetchZeroKm/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [zeroKm, setZeroKm] = useState<Options[]>([]);
    const [zeroKmLoading, setZeroKmLoading] = useState<boolean>(false);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setZeroKmLoading(true);
            try {
                const response = await fetchZeroKm({ signal: controller.signal });
                if (response?.data) {
                    setZeroKm(response.data);
                } else {
                    setZeroKm([]);
                }
            } catch (error) {
                if (typeof error === "object" && error !== null && "label" in error && (error as { label: string }).label !== 'AbortError') {
                    console.error('Failed to fetch zeroKm:', error);
                    setZeroKm([]);
                }
            } finally {
                setZeroKmLoading(false);
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);
    return {
        zeroKm,
        zeroKmLoading,
    };
}