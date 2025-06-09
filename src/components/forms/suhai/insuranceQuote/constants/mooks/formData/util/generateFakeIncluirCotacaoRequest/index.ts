import { faker } from '@faker-js/faker';
import type { IncluirCotacaoRequest } from '@modules/suhai/incluirCotacao/dtos/IncluirCotacao';

/**
 * Gera dados fictícios para IncluirCotacaoRequest
 * @returns objeto com dados simulados
 */
export function generateFakeIncluirCotacaoRequest(): IncluirCotacaoRequest {
    const nome = faker.person.fullName();
    const nomeCondutor = faker.person.fullName();

    return {
        cpfCnpj: '0000000000',
        nome,
        dtNascimento: faker.date.birthdate({ min: 25, max: 55, mode: 'age' }).toLocaleDateString('pt-BR'),
        sexo: faker.helpers.arrayElement(['1', '2']),
        estadoCivil: faker.helpers.arrayElement(['1', '2', '3']),
        cepPerinote: faker.location.zipCode('#####-###'),
        marca: faker.vehicle.manufacturer(),
        modelo: faker.vehicle.model(),
        modeloVeiculo: faker.vehicle.model(),
        anoModelo: faker.number.int({ min: 2015, max: 2025 }),
        zeroKm: faker.helpers.arrayElement(['S', 'N']),
        chassi: faker.string.alphanumeric({ length: 17 }).toUpperCase(),
        placa: faker.string.alpha({ length: 3 }).toUpperCase() + faker.string.numeric(4),
        utilizacaoDut: faker.helpers.arrayElement(['Particular', 'Comercial']),
        tipoUtilizacao: faker.helpers.arrayElement(['Passeio', 'Trabalho', 'Misto']),
        possuiOutroVeic: faker.helpers.arrayElement(['0', '1']),
        tipoContratacao: faker.helpers.arrayElement(['Completa', 'Parcial']),
        cpfCnpjPrincipalCondutor: '0000000000',
        nomePrincipalCondutor: nomeCondutor,
        dtNascimentoPrincipalCondutor: faker.date.birthdate({ min: 25, max: 55, mode: 'age' }).toLocaleDateString('pt-BR'),
        sexoPrincipalCondutor: faker.helpers.arrayElement(['1', '2']),
        estadoCivilPrincipalCondutor: faker.helpers.arrayElement(['1', '2', '3']),
        pergunta1: faker.helpers.arrayElement(['Sim', 'Não']),
        pergunta2: faker.helpers.arrayElement(['Sim', 'Não']),
        pergunta3: faker.helpers.arrayElement(['Sim', 'Não']),
        pergunta4: faker.helpers.arrayElement(['Sim', 'Não']),
        codProduto: faker.string.numeric(5),
        tipoSeguro: faker.helpers.arrayElement(['Roubo e Furto', 'Completo', 'RCF']),
        nro_apolice_ant: faker.string.numeric(10),
        ddd_cel: '00',
        num_cel: '0000000000',
        email: faker.internet.email({ firstName: nome.split(' ')[0], lastName: nome.split(' ')[1] || '' }),
    };
}
