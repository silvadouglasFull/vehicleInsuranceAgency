import type { SelectBrandProps } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type React from "react";
import { Inputs } from "./constants";
import type { FormsSelectVehicleDataProps } from "./types";

export const FormsSelectVehicleData: React.FC<FormsSelectVehicleDataProps> = ({ name, ...props }) => {
    const findInput = Inputs.find(item => item.key === name);
    if (!findInput) return null;

    const Component = findInput.component;
    return <Component {...(props as SelectBrandProps)} />;
};
