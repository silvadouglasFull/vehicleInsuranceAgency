import type { FormProps } from "@components/forms/suhai/insuranceQuote/constants/types";
import { SelectPergunta1 } from "@components/forms/suhai/insuranceQuote/garageData/select/pergunta1";
import { SelectPergunta2 } from "@components/forms/suhai/insuranceQuote/garageData/select/pergunta2";
import { SelectPergunta3 } from "@components/forms/suhai/insuranceQuote/garageData/select/pergunta3";
import { SelectPergunta4 } from "@components/forms/suhai/insuranceQuote/garageData/select/pergunta4";
import { SelectEstadoCivilPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/mainDriverData/select/maritalStatus";
import { SelectSexoPrincipalCondutor } from "@components/forms/suhai/insuranceQuote/mainDriverData/select/sexo";
import { SelectCodigoCobertura } from "@components/forms/suhai/insuranceQuote/paymentDetails/select/codigoCobertura";
import { SelectFormaPagamento } from "@components/forms/suhai/insuranceQuote/paymentDetails/select/formaPagamento";
import { SelectTipoContratacao } from "@components/forms/suhai/insuranceQuote/paymentDetails/select/tipoContratacao";
import { SelectSexo } from "@components/forms/suhai/insuranceQuote/personalData/select/sexo";
import type { InputsType } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/constants/types";
import { RenderFormControllAdress } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllAddress";
import { FormControllCEP } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllCep";
import { FormControllCodFipe } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllCodFipe";
import { FormControllDoc } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllDoc";
import { RenderFormControllPhone } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/renderFormControllPhone";
import { SelectEstadoCivil } from "@components/forms/suhai/insuranceQuote/renderFormSection/input/select/personalData/estadoCivil";
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
    {
        type: 'sexo',
        component: (props?: Select2BootStrap | FormProps) => <SelectSexo {...props as Select2BootStrap} />
    },
    {
        type: 'cepPernoite',
        component: (props?: Select2BootStrap | FormProps) => <FormControllCEP {...props as FormProps} />
    },
    {
        type: 'telefone',
        component: (props?: Select2BootStrap | FormProps) => <RenderFormControllPhone {...props as FormProps} />
    },
    {
        type: 'cdCobertura',
        component: (props?: Select2BootStrap | FormProps) => <SelectCodigoCobertura {...props as Select2BootStrap} />
    },
    {
        type: 'endereco',
        component: (props?: Select2BootStrap | FormProps) => <RenderFormControllAdress {...props as FormProps} />
    }, {
        type: 'formaPagamento',
        component: (props?: Select2BootStrap | FormProps) => <SelectFormaPagamento {...props as Select2BootStrap} />
    }
];