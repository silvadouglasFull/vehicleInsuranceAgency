
import type { Props, UseGetPropsInput, UseGetPropsInputParams } from "@components/forms/suhai/insuranceQuote/hooks/useGetPropsInput/types";
import { listForms } from "@components/forms/suhai/insuranceQuote/utils/listForms";
import { useEffect, useState } from "react";

export const useGetPropsInput = ({ keyGet = 'name', additionalForms, sliceEnd, sliceStart }: UseGetPropsInputParams): UseGetPropsInput => {
    const [props, setProps] = useState<Props>({})
    useEffect(() => {
        const temProps: Props = {}
        const inputs = listForms({ additionalForms, sliceEnd, sliceStart })
        if (inputs.length) {
            inputs.forEach(item => {
                temProps[keyGet ? item[keyGet] : item.type] = { ...item }
            })
            setProps(temProps)
        }
    }, [additionalForms, keyGet, sliceEnd, sliceStart])
    return props
}