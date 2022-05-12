const comoEstamos = require('./estado');

//testing de una funcion
test('string que retorna estado', () => {
   expect(comoEstamos()).toMatch('esta nublado');
});