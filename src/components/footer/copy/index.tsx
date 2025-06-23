import { appVersion, nameFlavor } from "@flavor/index";
import type React from "react";
export const CopyRight: React.FC = () => {
    return (
        <div className="text-center mt-3">
            <small className="me-2">&copy; {new Date().getFullYear()} {nameFlavor}. Todos os direitos reservados.</small>
            <span className="text-info">Versão: {appVersion}</span>
        </div>

    )
}