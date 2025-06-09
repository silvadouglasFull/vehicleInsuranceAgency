import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { FormControllBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllBrand";
import { FormControllDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { SelectPergunta1 } from "../select/garageData/pergunta1";
import { SelectPergunta2 } from "../select/garageData/pergunta2";
import { SelectPergunta3 } from "../select/garageData/pergunta3";
import { SelectPergunta4 } from "../select/garageData/pergunta4";
import { SelectEstadoCivilPrincipalCondutor } from "../select/mainDriverData/maritalStatus";
import { SelectSexoPrincipalCondutor } from "../select/mainDriverData/sexo";
import { SelectEstadoCivil } from "../select/personalData";
import { SelectBrand } from "../select/vehicleData/brand";
import { SelectModel } from "../select/vehicleData/model";
import { SelectOutroVeiculo } from "../select/vehicleData/outroVeiculo";
import { SelectTipoUtilizacao } from "../select/vehicleData/tipoUtilizacao";
import { SelectZero } from "../select/vehicleData/zeroKm";
export const inputTypes: InputsType[] = [
    {
        type: 'marca',
        component: (props?: Select2BootStrap | FormProps) => <SelectBrand {...props as Select2BootStrap} />
    },
    {
        type: 'modelo',
        component: (props?: Select2BootStrap | FormProps) => <SelectModel {...props as Select2BootStrap} />
    },
    {
        type: 'fipe',
        component: (props?: Select2BootStrap | FormProps) => <FormControllBrand {...props as FormProps} />
    },
    {
        type: 'cpf',
        component: (props?: Select2BootStrap | FormProps) => <FormControllDoc {...props as FormProps} />
    },
    {
        type: 'zeroKm',
        component: (props?: Select2BootStrap | FormProps) => <SelectZero {...props as Select2BootStrap} />
    },
    {
        type: 'tipoUtilizacao',
        component: (props?: Select2BootStrap | FormProps) => <SelectTipoUtilizacao {...props as Select2BootStrap} />
    },
    {
        type: 'possuiOutroVeic',
        component: (props?: Select2BootStrap | FormProps) => <SelectOutroVeiculo {...props as Select2BootStrap} />
    },
    {
        type: 'estadoCivil',
        component: (props?: Select2BootStrap | FormProps) => <SelectEstadoCivil {...props as Select2BootStrap} />
    },
    {
        type: 'estadoCivilPrincipalCondutor',
        component: (props?: Select2BootStrap | FormProps) => <SelectEstadoCivilPrincipalCondutor {...props as Select2BootStrap} />
    },
    {
        type: 'sexoPrincipalCondutor',
        component: (props?: Select2BootStrap | FormProps) => <SelectSexoPrincipalCondutor {...props as Select2BootStrap} />
    },
    {
        type: 'pergunta1',
        component: (props?: Select2BootStrap | FormProps) => <SelectPergunta1 {...props as Select2BootStrap} />
    },
    {
        type: 'pergunta2',
        component: (props?: Select2BootStrap | FormProps) => <SelectPergunta2 {...props as Select2BootStrap} />
    },
    {
        type: 'pergunta3',
        component: (props?: Select2BootStrap | FormProps) => <SelectPergunta3 {...props as Select2BootStrap} />
    },
    {
        type: 'pergunta4',
        component: (props?: Select2BootStrap | FormProps) => <SelectPergunta4 {...props as Select2BootStrap} />
    },
];