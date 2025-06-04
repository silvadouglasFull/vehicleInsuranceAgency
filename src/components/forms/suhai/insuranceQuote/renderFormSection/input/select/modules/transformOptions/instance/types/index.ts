import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types"
export type VehicleTransformData = {
    apply: (data: []) => Options[]
}
export type TransformData = {
    apply: (data: []) => Options[]
}
export type Strategies = {
    vehicleTransformData: VehicleTransformData
    transformData: TransformData
}
export type GetTransformOptions = VehicleTransformData | TransformData
export interface ITransformOptions {
    transformData(data: []): Options[]
    transformVehicleData(data: []): Options[]
}