import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"
import type { AgroupedConsultaFipe } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe"
export type VehicleTransformData = {
    apply: (data: AgroupedConsultaFipe) => Options[]
}
export type TransformData = {
    apply: (data: object) => Options[]
}
export type Strategies = {
    vehicleTransformData: VehicleTransformData
    transformData: TransformData
}
export type GetTransformOptions = VehicleTransformData | TransformData
export interface ITransformOptions {
    transformData(data: []): Options[]
    transformVehicleBrandData(data: AgroupedConsultaFipe): Options[]
    init(data: Record<string, []>): Options[]
}