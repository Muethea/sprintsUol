# Sistema de verificação de PIN

Este é um simples sistema de verificação de PIN (Número de Identificação Pessoal) desenvolvido em JavaScript. O sistema gera um PIN aleatório de quatro dígitos e permite que o usuário tente adivinhar o valor gerado. Após cada tentativa, o sistema fornece feedback ao usuário com base na diferença entre o PIN inserido e o valor gerado.

## Funcionalidades Principais
# Geração de PIN Aleatório:

    O sistema gera um valor aleatório entre 1000 e 9999 usando Math.random().
    const valorEsperado = Math.floor(Math.random() * 9000) + 1000;

## Verificação do PIN Digitado:

    A função checknumber é responsável por receber o PIN digitado pelo usuário e fornecer feedback.

    
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
      feedback = 'Você está muito próximo'
    } else if (pin > expectedValue) {
      feedback = 'Muito menor'
    } else {
      feedback = 'Muito maior'
    }

    document.getElementById(
      'resultado'
    ).innerHTML = `Tente novamente. ${feedback} que o numero digitado. O valor correto era ${expectedValue}.`
    console.log(
      `Tente novamente. ${feedback} que o numero digitado. O valor correto era ${expectedValue}.`
        )
      }
    }


## Uso

    1. Abra o arquivo HTML no navegador.
    2. Insira um PIN de quatro dígitos no campo de entrada.
    3. Clique no botão para verificar se o PIN está correto.
    4. Receba feedback sobre a precisão da sua tentativa.