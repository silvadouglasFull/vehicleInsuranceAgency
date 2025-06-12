/* eslint-disable react-hooks/exhaustive-deps */

import { useInsuranceQuote } from "@components/forms/suhai/insuranceQuote/hooks/insuranceQuote";
import { fetchCep } from "@components/forms/suhai/insuranceQuote/modules/fetchCep";
import type { ResponseConsultaCEP } from "@modules/cep/consultaCep/dto";
import { onlyNumbers } from "@utils/transfomerText";
import { useEffect, useState } from "react";
import type { UseFetchAddressInfo } from "./types";

export const useFetchAddressInfo = (): UseFetchAddressInfo => {
    const { state, handleForm } = useInsuranceQuote()
    const [infoAddress, setInfoAddress] = useState<ResponseConsultaCEP | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const { cepPernoite, endereco } = state
    useEffect(() => {
        const fetchInfo = async () => {
            if (cepPernoite?.length === 9) {
                const controller = new AbortController();
                const stringFormated = onlyNumbers(cepPernoite)
                try {
                    const response = await fetchCep({ signal: controller.signal, cep: cepPernoite });
                    const { logradouro } = response
                    handleForm({
                        endereco: logradouro
                    })
                    setInfoAddress({ ...response })
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false);
                }
                handleForm({
                    endereco: stringFormated,
                })
            }
        }
        fetchInfo()
    }, [cepPernoite?.length])
    return {
        infoAddress,
        loading,
        value: endereco ?? ''
    }
}