import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { FormControllCodFipe } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllCodFipe";
import { FormControllDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc";
import { SelectPergunta1 } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta1";
import { SelectPergunta2 } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta2";
import { SelectPergunta3 } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta3";
import { SelectPergunta4 } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/garageData/pergunta4";
import { SelectEstadoCivilPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/mainDriverData/maritalStatus";
import { SelectSexoPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/mainDriverData/sexo";
import { SelectTipoContratacao } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/paymentDetails/tipoContratacao";
import { SelectEstadoCivil } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData";
import type { Select2BootStrap } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/types";
import { SelectBrand } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/brand";
import { SelectModel } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/model";
import { SelectOutroVeiculo } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/outroVeiculo";
import { SelectTipoUtilizacao } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/tipoUtilizacao";
import { SelectZero } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/vehicleData/zeroKm";
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
        component: (props?: Select2BootStrap | FormProps) => <FormControllCodFipe {...props as FormProps} />
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
    {
        type: 'tipoContratacao',
        component: (props?: Select2BootStrap | FormProps) => <SelectTipoContratacao {...props as Select2BootStrap} />
    },
];