
import type { Props, UseGetPropsInput, UseGetPropsInputParams } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput/types";
import { listForms } from "@components/forms/suhai/insuranceQuote/utils/listForms";
import { useEffect, useState } from "react";

export const useGetPropsInput = ({ types, additionalForms, sliceEnd, sliceStart }: UseGetPropsInputParams): UseGetPropsInput => {
    const [props, setProps] = useState<Props>({})
    useEffect(() => {
        const temProps: Props = {}
        const inputs = listForms({ additionalForms, sliceEnd, sliceStart })
        if (inputs.length) {
            inputs.forEach(item => {
                temProps[item.type] = { ...item }
            })
            setProps(temProps)
        }
    }, [additionalForms, types, sliceEnd, sliceStart])
    return props
}