const {
    verificarMaioridade,
    calcularIMC,
    formatarNome,
    ehPar,
    celsiusParaFahrenheit,
    adicionarHobby,
    dividir,
    criarAluno,
    aplicarDesconto,
    validarTamanhoSenha
} = require('./sistema');

describe("Testes das funções do sistema", () => {
    test("verificarMaioridade: Teste idades de 15, 18 e 21 anos.", () => {
        expect(verificarMaioridade(15)).toBe(false);
        expect(verificarMaioridade(18)).toBe(true);
        expect(verificarMaioridade(21)).toBe(true);
    });

    test("calcularIMC: Verifique se peso 70 e altura 1.75 retorna 22.86", () => {
        expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86);
    });

    test("formatarNome: Verifique a formatação", () => {
        expect(formatarNome('Gui', 'Gustavo')).toBe('Gustavo, Gui');
    });

    test("ehPar: Teste um número par, um ímpar e o número 0.", () => {
        expect(ehPar(4)).toBe(true);
        expect(ehPar(5)).toBe(false);
        expect(ehPar(0)).toBe(true);
    });

    test("celsiusParaFahrenheit: Teste 0°C, 100°C e -40°C.", () => {
        expect(celsiusParaFahrenheit(0)).toBe(32);
        expect(celsiusParaFahrenheit(100)).toBe(212);
        expect(celsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("adicionarHobby: Verifique se o array aumenta de tamanho e se contém o novo item.", () => {
        const hobbies = ["fifa", "Jogar ASUSTUF15"];
        const novoHobby = "programação";
        const resultado = adicionarHobby(hobbies, novoHobby);
        expect(resultado).toContain(novoHobby);
        expect(resultado).toHaveLength(hobbies.length + 1);
    });

    test("dividir: Teste uma divisão normal e valide se o erro é lançado ao dividir por zero.", () => {
        expect(dividir(10, 2)).toBe(5);
        expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
    });

    test("criarAluno: Verifique se o objeto retornado contém as propriedades corretas.", () => {
        const aluno = criarAluno("João", "Engenharia");
        expect(aluno).toHaveProperty("nome", "João");
        expect(aluno).toHaveProperty("curso", "Engenharia");
        expect(aluno).toHaveProperty("ativo", true);
    });

    test("aplicarDesconto: Teste um preço de 100 com desconto de 10% e 50%.", () => {
        expect(aplicarDesconto(100, 10)).toBe(90);
        expect(aplicarDesconto(100, 50)).toBe(50);
    });

    test("validarTamanhoSenha: Teste senhas com 5 e 8 caracteres.", () => {
        expect(validarTamanhoSenha("12345")).toBe(false);
        expect(validarTamanhoSenha("12345678")).toBe(true);
    });
});