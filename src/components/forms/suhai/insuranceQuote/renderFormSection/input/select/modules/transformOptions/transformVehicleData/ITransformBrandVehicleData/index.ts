import type { Options } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import type { AgroupedConsultaFipe } from "@modules/suhai/consultarFipe/dtos/ConsultarFipe";

export interface ITransformBrandVehicleData {
    transformBrandData(data: AgroupedConsultaFipe): Options[]
}