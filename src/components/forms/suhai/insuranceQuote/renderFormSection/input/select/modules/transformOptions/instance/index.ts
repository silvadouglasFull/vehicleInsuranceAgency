import type { GetTransformOptions, ITransformOptions, Strategies, TransformData, VehicleTransformData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/instance/types"
import { whatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType"
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"
import type { Data } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"

export class TransformOptions implements ITransformOptions {
    private typeTransform!: Strategies
    private vehicleData: VehicleTransformData = {
        apply: (data: []) => this.transformVehicleData(data)
    }
    private data: TransformData = {
        apply: (data: []) => this.transformData(data)
    }
    constructor(data: []) {
        const typeTransform = whatIsDataType.typeDate(data)
        this.getTransformOptions(typeTransform)?.apply(data)
    }
    private getTransformOptions(typeTransform: keyof Strategies): GetTransformOptions {
        this.typeTransform = {
            vehicleTransformData: this.vehicleData,
            transformData: this.data
        }
        return this.typeTransform[typeTransform] ?? this.typeTransform.transformData
    }
    public transformData(data: []): Options[] {
        return Array.from({ length: data.length }).map(() => ({ value: '', label: '' })) as Options[]
    }
    public transformVehicleData(data: []): Options[] {
        const items: Data[] = data
        return items.map(item => ({
            label: item.modelo ?? '',
            value: item.modelo ?? ''
        }))
    }
}