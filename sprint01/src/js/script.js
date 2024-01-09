const expectedValue = Math.floor(Math.random() * 9000) + 1000

function checknumber() {
  const userInput = document.getElementById('userInput').value.trim()

  if (userInput === '' || userInput.length < 4) {
    document.getElementById('resultado').innerHTML =
      'Por favor, insira um pin válido com pelo menos quatro dígitos.'
    console.log(
      'Por favor, insira um pin válido com pelo menos quatro dígitos.'
    )
    return
  }

  // Converter o numero para o tipo interiro
  const pin = parseInt(userInput)
  console.log('Parsed pin ', pin)

  if (pin > 9999) {
    document.getElementById('resultado').innerHTML =
      'Por favor, insira um pin com  máximo quatro dígitos.'
    console.log('Por favor, insira um pin com  máximo quatro dígitos.')
    return
  }
  //Se o pin digitado pelo usuario for igual ao valor gerado aleatoriamente o sistema dará os parabéns ao usuario
  if (pin === expectedValue) {
    document.getElementById('resultado').innerHTML = 'Parabéns! Você acertou!'
    console.log('Parabéns! Você acertou!')
  } else {
    let feedback = ''

    if (Math.abs(pin - expectedValue) <= 100) {
      feedback = 'Você está muito próximo do correto'
    } else if (pin > expectedValue) {
      feedback = 'Muito maior  que o correto'
    } else {
      feedback = 'Muito menor  que o correto'
    }

    document.getElementById(
      'resultado'
    ).innerHTML = `Tente novamente. ${feedback} . O valor correto era ${expectedValue}.`
    console.log(
      `Tente novamente. ${feedback} que o numero digitado. O valor correto era ${expectedValue}.`
    )
  }
}

