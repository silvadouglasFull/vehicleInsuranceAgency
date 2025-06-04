import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";
import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";

export function isVehicleData(data: Data[]): TypeData {
    if (Array.isArray(data) &&
        data.every(
            (item) =>
                typeof item === 'object' &&
                item !== null &&
                typeof item.modelo === 'string' &&
                typeof item.marca === 'string'
        )) {
        return 'vehicleTransformData'
    }
    return 'transformData'
}
