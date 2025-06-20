import type { UseDefinesAsSeenByTheVisitor, UseDefinesAsSeenByTheVisitorParams } from "@components/privacyPolicy/modal/hooks/useDefinesAsSeenByTheVisitor/types";
import { defineAsSeenByTheVisitor, retrieveAsSeenByTheVisitor } from "@components/privacyPolicy/modal/hooks/useDefinesAsSeenByTheVisitor/util/storageSeen";
import { useEffect, useState } from "react";

export const useDefinesAsSeenByTheVisitor = ({ showModal }: UseDefinesAsSeenByTheVisitorParams): UseDefinesAsSeenByTheVisitor => {
    const [seen, setSeen] = useState<boolean>(false)
    useEffect(() => {
        const verifySeen = async () => {
            try {
                const response = await retrieveAsSeenByTheVisitor()
                if (response?.seen) {
                    return setSeen(true)
                }
                if (showModal) {
                    defineAsSeenByTheVisitor()
                    setSeen(true)
                }
            } catch (error) {
                console.log(error)
                setSeen(false)
            }
        }
        verifySeen()
    }, [showModal])
    return {
        seen
    }
}