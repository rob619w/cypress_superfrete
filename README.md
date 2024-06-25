# cypress_superfrete

**Teste Técnico SuperFrete - QA** 💻✅
----------------------------------

Projeto com Testes Funcionais implementado via Cypress e escrito em JavaScript para tela de cálculo da SuperFrete (https://web.superfrete.com/#/calcular-correios)


Cenário de Sucesso 🟢
- O projeto valida a tela de cálculo, garantindo que o fluxo principal esteja coberto pelos testes:
Usuário informa CEP de origem;
Usuário seleciona o formato "Caixa / Pacote";
Usuário seleciona o peso "300g";
Usuário informa a altura;
Usuário informa a largura;
Usuário informa o comprimento;
Usuário informa o CEP de destino;
Usuário seleciona a opção "CALCULAR FRETE COM DESCONTO";
Usuário deve visualizar as informações de mini envios, PAC e SEDEX.

Cenário com mensagem de erro / insucesso 🔴
- O projeto valida a tela de cálculo, garantindo que os fluxos de erro abaixo estejam cobertos por testes:
Usuário não informa CEP de origem e deve visualizar uma mensagem de erro;
Usuário não informa CEP de destino e deve visualizar uma mensagem de erro;
Usuário seleciona o formato "Caixa / Pacote" e peso "300g" e informa altura < 0.4 cm, largura < 8 cm e comprimento menor que 13 cm e deve visualizar três mensagens de erro.
