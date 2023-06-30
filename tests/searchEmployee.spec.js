// exercise-bonus.test.js

const searchEmployee = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {

  it ('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  });
  
  it ('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const id = '5569-4';
    const detail = 'firstName';
    expect(searchEmployee(id, detail)).toBe('George');
  });
  
  it ('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const id = '4456-4';
    const detail = 'lastName';
    expect(searchEmployee(id, detail)).toBe('Zuckerberg');
  });
  
  it ('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const id = '1256-4';
    const detail = 'specialities';
    expect(searchEmployee(id, detail)).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  
  it ('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    const id = 'id-inexistente';
    const detail = 'firstName';
    expect(() => { searchEmployee(id, detail) }).toThrow(new Error('ID não identificado'));
  });
  
  it ('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    const id = 'id-inexistente';
    const detail = 'informacao-inexistente';
    expect(() => { searchEmployee(id, detail) }).toThrow();
  });
  
  it ('Testa a mensagem do erro para informação inexistente', () => {
    const id = '8579-6';
    const detail = 'informacao-inexistente';
    expect(() => { searchEmployee(id, detail) }).toThrow('Informação indisponível');
  });
});