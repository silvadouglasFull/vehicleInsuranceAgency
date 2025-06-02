import { Spinner } from "@components/spinner";
import React from "react";
export const FallBack: React.FC = () => {
    return (
        <div className="p-5 m-5 text-center d-flex justify-content-center align-items-center align-self-stretch">
            <Spinner />
        </div>
    )
}