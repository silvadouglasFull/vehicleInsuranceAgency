import { nameFlavor } from "@flavor/index";
import type React from "react";
export const CopyRight: React.FC = () => {
    return (
        <div className="text-center mt-3">
            <small>&copy; {new Date().getFullYear()} {nameFlavor}. Todos os direitos reservados.</small>
        </div>

    )
}