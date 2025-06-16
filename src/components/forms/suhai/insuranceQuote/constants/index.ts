import type { FormField, GroupForms } from "@components/forms/suhai/insuranceQuote/constants/types";
import type { States } from "@components/forms/suhai/insuranceQuote/context/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";

export const formLabels: FormField[] = [
    {
        id: 1,
        idControll: 'codigoFipe',
        label: 'Código FIPE',
        name: 'codigoFipe',
        type: 'fipe',
        placeholder: 'Digite o código FIPE',
        required: true,
        min: 8,
        max: 8,
        maxLength: 8,
        helperLink: 'https://veiculos.fipe.org.br/',
        title: 'Como saber o código da tabela Fipe?'
    },
    {
        id: 2,
        idControll: 'marca',
        label: 'Marca',
        name: 'marca',
        type: 'marca',
        placeholder: 'Digite a marca',
        required: true,
        maxLength: 100

    },
    {
        id: 3,
        idControll: 'modelo',
        label: 'Modelo',
        name: 'modelo',
        type: 'modelo',
        placeholder: 'Digite o modelo',
        required: true,
        maxLength: 100
    },
    {
        id: 4,
        idControll: 'anoModelo',
        label: 'Ano do Modelo',
        name: 'anoModelo',
        type: 'text',
        placeholder: String(new Date().getFullYear()),
        required: true,
        maxLength: 4
    },
    {
        id: 5,
        idControll: 'cpf',
        label: 'CPF',
        name: 'cpf',
        type: 'cpf',
        placeholder: 'Digite seu CPF',
        required: true,
        maxLength: 16
    },
    {
        id: 6,
        idControll: 'nome',
        label: 'Nome Completo',
        name: 'nome',
        type: 'text',
        placeholder: 'Digite seu nome completo',
        required: true,
        maxLength: 100
    },
    {
        id: 7,
        idControll: 'email',
        label: 'E-mail',
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu e-mail',
        required: true,
        maxLength: 100
    },
    {
        id: 8,
        idControll: 'telefone',
        label: 'Telefone',
        name: 'telefone',
        type: 'telefone',
        placeholder: formatPhoneNumber('0000000000', 'pt') ?? 'Digite seu Celular',
        required: false,
        maxLength: 18
    },
    {
        id: 9,
        idControll: 'valor',
        label: 'Valor do Veículo',
        name: 'valor',
        type: 'number',
        placeholder: 'Digite o valor do veículo',
        required: true,
        min: 0,
    },
    {
        id: 10,
        idControll: 'formaPagamento',
        label: 'Forma de Pagamento',
        name: 'formaPagamento',
        type: 'formaPagamento',
        placeholder: 'Ex: boleto, cartão',
        required: true,
        maxLength: 100
    },
    {
        id: 12,
        idControll: 'nome',
        label: 'Nome do Segurado',
        name: 'nome',
        type: 'text',
        placeholder: 'Digite o nome do segurado',
        required: true,
        maxLength: 100
    },
    {
        id: 13,
        idControll: 'cpf',
        label: 'CPF do Segurado',
        name: 'cpf',
        type: 'cpf',
        placeholder: 'Digite o CPF do segurado',
        required: true,
        maxLength: 11,
        readOnly: false
    },
    {
        id: 14,
        idControll: 'endereco',
        label: 'Endereço do Segurado',
        name: 'endereco',
        type: 'endereco',
        placeholder: 'Digite o endereço do segurado',
        required: true,
        maxLength: 100
    },
    {
        id: 27,
        name: 'sexo',
        idControll: 'sexo',
        label: 'Sexo',
        type: 'sexo',
        placeholder: 'Selecione o sexo',
        required: true,
    },
    {
        id: 15,
        name: 'estadoCivil',
        idControll: 'estadoCivil',
        label: 'Estado Civil',
        type: 'estadoCivil',
        placeholder: 'Selecione o estado civil',
        required: true,
    },
    {
        id: 16,
        name: 'zeroKm',
        idControll: 'zeroKm',
        label: 'Veículo Zero KM?',
        type: 'zeroKm',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 17,
        name: 'tipoUtilizacao',
        idControll: 'tipoUtilizacao',
        label: 'Tipo de Utilização',
        type: 'tipoUtilizacao',
        placeholder: 'Selecione a utilização',
        required: true,
    },
    {
        id: 18,
        name: 'possuiOutroVeic',
        idControll: 'possuiOutroVeic',
        label: 'Possui outro veículo?',
        type: 'possuiOutroVeic',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 19,
        name: 'tipoContratacao',
        idControll: 'tipoContratacao',
        label: 'Tipo de Contratação',
        type: 'tipoContratacao',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 20,
        name: 'sexoPrincipalCondutor',
        idControll: 'sexoPrincipalCondutor',
        label: 'Sexo do Condutor Principal',
        type: 'sexoPrincipalCondutor',
        placeholder: 'Selecione o sexo',
        required: true,
    },
    {
        id: 21,
        name: 'estadoCivilPrincipalCondutor',
        idControll: 'estadoCivilPrincipalCondutor',
        label: 'Estado Civil do Condutor Principal',
        type: 'estadoCivilPrincipalCondutor',
        placeholder: 'Selecione o estado civil',
        required: true,
    },
    {
        id: 22,
        name: 'pergunta1',
        idControll: 'pergunta1',
        label: 'Veículo em garagem na residência?',
        type: 'pergunta1',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 23,
        name: 'pergunta2',
        idControll: 'pergunta2',
        label: 'Garagem no local de trabalho?',
        type: 'pergunta2',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 24,
        name: 'pergunta3',
        idControll: 'pergunta3',
        label: 'Garagem na faculdade/colégio?',
        type: 'pergunta3',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 25,
        name: 'pergunta4',
        idControll: 'pergunta4',
        label: 'Veículo guardado fora de serviço?',
        type: 'pergunta4',
        placeholder: 'Selecione',
        required: true,
    },
    {
        id: 26,
        name: 'pergunta6',
        idControll: 'pergunta6',
        label: 'É caminhão e guarda fora do serviço?',
        type: 'select',
        placeholder: 'Selecione',
        required: false,
    },
    {
        id: 28,
        name: 'cepPernoite',
        idControll: 'cepPernoite',
        label: 'CEP',
        type: 'cepPernoite',
        placeholder: '00000-000',
        required: true
    },
    {
        id: 29,
        name: 'dtNascimento',
        idControll: 'dtNascimento',
        label: 'Data de Nascimento',
        type: 'date',
        placeholder: '__/__/____',
        required: true
    },
    {
        id: 30,
        name: 'dtNascimentoPrincipalCondutor',
        idControll: 'dtNascimentoPrincipalCondutor',
        label: 'Data de Nascimento do Principal Condutor',
        type: 'date',
        placeholder: '__/__/____',
        required: true
    },
    {
        id: 31,
        name: 'placa',
        idControll: 'placa',
        label: 'Placa do Veículo',
        type: 'text',
        placeholder: 'Placa do Veículo',
        required: true
    },
    {
        id: 32,
        name: 'cdCobertura',
        idControll: 'cdCobertura',
        label: 'Tipo de Cobertura',
        type: 'cdCobertura',
        placeholder: 'Tipo de Cobertura',
        required: true
    },
    {
        id: 33,
        name: 'chassi',
        idControll: 'chassi',
        label: 'Chassi do Veículo',
        type: 'text',
        placeholder: 'Chassi do Veículo',
        required: true,
        maxLength: 17
    }
];
export const personalData: GroupForms = [14, 15, 27, 28, 29]; // sexo, estado civil
export const vehicleData: GroupForms = [9, 16, 17, 18, 31, 33]; // zeroKm, tipoUtilizacao, possuiOutroVeic, tipoContratacao
export const mainDriverData: GroupForms = [20, 21, 30]; // sexoPrincipalCondutor, estadoCivilPrincipalCondutor
export const garageData: GroupForms = [22, 23, 24, 25]; // pergunta1
export const dadosCaminhao = [26]; // pergunta6
export const paymentData = [19, 32]
export const states: States = {
    codigoFipe: '',
    marca: '',
    modelo: '',
    anoModelo: '',
    cpf: '',
    nome: '',
    email: '',
    telefone: '',
    valor: 0,
    numeroCotacao: '',
    status: '',
    validade: '',
    formaPagamento: '',
    endereco: '',
    numeroProposta: '',
    pdfPropostaBase64: '',
    protocolo: '',
    codMsgRet: '',
    textoMsgRet: '',
    cod_fipe: '',
    num_passageiros: 0,
    cod_marca: '',
    cod_modelo: '',
    cod_categoria_suhai: '',
    categoria_suhai: '',
    cod_categoria_tarifaria: '',
    cpfCnpj: '',
    dtNascimento: '', // formato DD/MM/AAAA
    sexo: '', // "1" = Feminino, "2" = Masculino
    estadoCivil: '', // "1" = Casado, "2" = Solteiro, "3" = Outros
    cepPernoite: '',
    modeloVeiculo: '',
    zeroKm: '',
    chassi: '',
    placa: '',
    utilizacaoDut: '',
    tipoUtilizacao: '',
    possuiOutroVeic: '', // "1" = Sim, "0" = Não
    tipoContratacao: '',
    tabelaComissao: '',
    classeBonus: '',
    cpfCnpjPrincipalCondutor: '',
    nomePrincipalCondutor: '',
    dtNascimentoPrincipalCondutor: '',
    sexoPrincipalCondutor: '',
    estadoCivilPrincipalCondutor: '',
    pergunta1: '', // residência
    pergunta2: '', // trabalho
    pergunta3: '', // faculdade
    pergunta4: '', // fora de serviço
    pergunta6: '', // caminhão
    codProduto: '',
    tipoSeguro: '',
    nro_apolice_ant: '',
    vlr_DanosCorporais: '',
    vlr_DanosMateriais: '',
    fator_FipeAjuste: '',
    fator_Desconto: '',
    ddd_cel: '',
    num_cel: '',
    anoFabricacao: '',
    cdCobertura: ''
}