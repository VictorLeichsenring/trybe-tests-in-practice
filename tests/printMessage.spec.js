const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it ('Testa a informação de boas vindas.', () => {
    expect(printMessage(info)).toContain('Boas vindas');
  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    expect(printMessage(info)).toContain('Margarida');
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  const newInfo = ['item 1', 'item 2'];
  it ('Testa o fluxo de exceção da função printMessage.', () => {
    expect(() => printMessage(newInfo)).toThrow('objeto inválido');
  });
});