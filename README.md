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


## Tecnologias usadas
 - HTML
 - CSS
 - JS

## Uso

 1. Abra o arquivo HTML no navegador.
 2. Insira um PIN de quatro dígitos no campo de entrada.
 3. Clique no botão para verificar se o PIN está correto.
 4. Receba feedback sobre a precisão da sua tentativa.


## Exemplos do Output

![Captura de ecrã de 2024-01-08 19-51-10](https://github.com/Muethea/sprintsUol/assets/64161845/36ea8691-44ee-402d-b1a4-91cdd7db4799)

![Captura de ecrã de 2024-01-09 13-28-56](https://github.com/Muethea/sprintsUol/assets/64161845/b9010a61-53f0-4a42-9627-51f1dd8b0491)

![Captura de ecrã de 2024-01-09 13-29-10](https://github.com/Muethea/sprintsUol/assets/64161845/97e4f156-f155-46a7-a0ec-6a049425caed)

