import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/paymentDetails/context/hooks/insuranceQuote";
import type { UseControllVisibleNroApolice } from "@components/forms/suhai/insuranceQuote/paymentDetails/hooks/useControllVisibleNroApolice/types";
import { useEffect, useState } from "react";

export const useControllVisibleNroApolice = (): UseControllVisibleNroApolice => {
    const { state } = useInsuranceQuote()
    const [showInputNApolice, setShowInputNApolice] = useState<boolean>(false)
    const { tipoContratacao } = state
    useEffect(() => {
        const controllVisible = () => {
            setShowInputNApolice(Number(tipoContratacao) === 2)
        }
        controllVisible()
    }, [tipoContratacao])
    return {
        showInputNApolice,
        setShowInputNApolice
    }
}