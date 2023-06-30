let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  try {
    if (
      typeof characterInfo !== 'object' 
      || characterInfo === null 
      || Array.isArray(characterInfo)
    ) {
      throw new Error('objeto inválido');
    }

    let welcomeMessage = 'Boas vindas, ';
    let result = `${welcomeMessage}${characterInfo.personagem}`;
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = printMessage;

console.log(printMessage(info));

module.exports = { info, printMessage };