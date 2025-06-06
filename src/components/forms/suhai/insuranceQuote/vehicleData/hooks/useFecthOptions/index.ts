import { fetchPossuiOutroVeic, fetchTipoUtilizacao, fetchZeroKm } from "@components/forms/suhai/insuranceQuote/modules/fetchOptions";
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { UseFecthOptions } from "@components/forms/suhai/insuranceQuote/vehicleData/hooks/useFecthOptions/types";
import { useEffect, useState } from "react";
export const useFecthOptions = (): UseFecthOptions => {
    const [zeroKm, setZeroKm] = useState<Options[]>([]);
    const [tipoUtilizacao, setTipoUtilizacao] = useState<Options[]>([]);
    const [possuiOutroVeic, setPossuiOutroVeic] = useState<Options[]>([]);
    const [zeroKmLoading, setZeroKmLoading] = useState<boolean>(false);
    const [tipoUtilizacaoLoading, setTipoUtilizacaoLoading] = useState<boolean>(false);
    const [possuiOutroVeicLoading, setPossuiOutroVeicLoading] = useState<boolean>(false);

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
        zeroKm,
        tipoUtilizacao,
        possuiOutroVeic,
        zeroKmLoading,
        tipoUtilizacaoLoading,
        possuiOutroVeicLoading,
    };
}