import type { UseGetExplanationForKeysParams } from "@components/proposal/suhai/coveragePlans/coverage/hooks/useGetTitleExplanationForKeys/types";
import { explanationProposedReturnFields } from "@flavor/texts/coverage";
import { useEffect, useState } from "react";

export const useGetExplanationForKeys = ({ key }: UseGetExplanationForKeysParams): string => {
    const [titleExplanation, setTitleExplanation] = useState<string>('')
    useEffect(() => {
        const findTitleExplanation = () => {
            const findTitle = explanationProposedReturnFields.find(item => item.key === key)?.title ?? ''
            setTitleExplanation(findTitle)
        }
        findTitleExplanation()
    }, [key])
    return titleExplanation
}