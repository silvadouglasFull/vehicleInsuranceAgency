
import { Handler } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType//handler";
import type { IWhatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType/IWhatIsDataType";
import type { TypeData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/utils/types";
import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";

export class IsTypeVehicleData extends Handler implements IWhatIsDataType {
    handle(data: Record<string, []>): TypeData | null {
        if (typeof data !== 'object') {
            return super.handle(data);
        }
        const items: Data[] = []
        Object.keys(data).forEach(key => {
            const itemsFromGroup = data[key]
            items.push(...itemsFromGroup)
        })
        if (items.every(
            (item) =>
                typeof item === 'object' &&
                item !== null &&
                typeof item.modelo === 'string' &&
                typeof item.marca === 'string'
        )) {
            return 'vehicleTransformData'
        }
        return super.handle(data);
    }
}
