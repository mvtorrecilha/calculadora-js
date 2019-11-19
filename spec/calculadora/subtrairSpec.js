describe("Suite de testes de subtração", function () {
	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 5 para 8 e 3', function () {
		expect(Calculadora.subtrair(8,3)).toEqual(5);
	});

	it('deve retornar 5 para 8 e 3 no formato texto', function () {
		expect(Calculadora.subtrair('8','3')).toEqual(5);
	});

	it('deve retornar 4 para 5.5 e 1.5', function () {
		expect(Calculadora.subtrair(5.5,1.5)).toEqual(4);
		expect(Calculadora.subtrair('5.5','1.5')).toEqual(4);
	});

	it('deve retornar 0 quando valor 1 inválido', function () {
		expect(Calculadora.subtrair(undefined,10)).toEqual(0);
	});

	it('deve retornar 0 quando valor 2 inválido', function () {
		expect(Calculadora.subtrair(10, undefined)).toEqual(0);
	});
});