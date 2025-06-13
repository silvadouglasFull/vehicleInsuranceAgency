import type { GetTransformOptions, ITransformOptions, Strategies, TransformData, VehicleTransformData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/instance/types"
import type { ITransformBrandVehicleData } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/transformOptions/transformVehicleData/ITransformBrandVehicleData"
import { whatIsDataType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/modules/whatIsDataType"
import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"
import type { AgroupedConsultaFipe } from "@modules/suhai/consultarFipe/dtos"

export class TransformOptions implements ITransformOptions {
    private typeTransform!: Strategies
    private vehicleData: VehicleTransformData = {
        apply: (data: AgroupedConsultaFipe) => this.transformVehicleBrandData(data)
    }
    private data: TransformData = {
        apply: () => this.transformData()
    }
    private transformBrandVehicleData!: ITransformBrandVehicleData
    constructor(ptransformBrandVehicleData: ITransformBrandVehicleData) {
        this.transformBrandVehicleData = ptransformBrandVehicleData
    }
    public init(data: Record<string, []>): Options[] {
        const typeTransform: keyof Strategies = whatIsDataType.typeDate(data)
        return this.getTransformOptions(typeTransform).apply(data)
    }
    public getTransformOptions(typeTransform: keyof Strategies): GetTransformOptions {
        this.typeTransform = {
            vehicleTransformData: this.vehicleData,
            transformData: this.data
        }
        return this.typeTransform[typeTransform] ?? this.typeTransform.transformData
    }
    public transformData(): Options[] {
        return Array.from({ length: 1 }).map(() => ({ value: '', label: '' })) as Options[]
    }
    public transformVehicleBrandData(data: AgroupedConsultaFipe): Options[] {
        return this.transformBrandVehicleData.transformBrandData(data)
    }
}