/// <reference types="Cypress"/>

//*****VARIÁVEIS*****/
//URL
let BASE_URL = 'https://web.superfrete.com/'
//campos
let altura = '#packageHeight'
let largura = '#packageWidth'
let comprimento = '#packageDepth'
let cep_origem = '#originPostcode'
let cep_destino = '#destinationPostcode' 
//select
let peso = '#weight'
let peso_300g = '[data-value="0.3"]'
//botões
let botao_calcular = '[data-cy="calculator-submit"]'
let limpar = '.css-tuxzvu > :nth-child(3) > .MuiButtonBase-root'
//mensagens de erro
let cep_origem_error_msg = '#originPostcode-helper-text'
let cep_destino_error_msg = '#destinationPostcode-helper-text'
let altura_error_msg = '#packageHeight-helper-text'
let largura_error_msg = '#packageWidth-helper-text'
let comprimento_error_msg = '#packageDepth-helper-text'
// info pac, sedex e mini envios 
let label_pac = ':nth-child(3) > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiTypography-root'
let label_sedex = ':nth-child(4) > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiTypography-root'
let label_minienvios = ':nth-child(5) > .MuiPaper-elevation1 > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiTypography-root'
//*****/

//*****TESTE*****/
describe('Teste Funcional da Tela de Cálculo', () => {
    it('Deve calcular frete com desconto com sucesso e retornar informações de PAC, SEDEX e Mini Envio', () => 
    {
    cy.visit(BASE_URL)
    cy.get(cep_origem).type("08090-284")
    cy.get(peso).click()
    cy.get(peso_300g).click()
    cy.get(altura).type("2") 
    cy.get(largura).type("11") 
    cy.get(comprimento).type("16") 
    cy.get(cep_destino).type("05407-002")
    cy.get(botao_calcular).click()
    // Deve visualizar as informações de mini envios, PAC e SEDEX 
    cy.get(label_pac).should('contain', 'PAC')
    cy.get(label_sedex).should('contain', 'SEDEX')
    cy.get(label_minienvios).should('contain', 'Mini Envios')
    })
    it('Ao tentar realizar o cálculo com o CEP de ORIGEM vazio, deve retornar uma mensagem de erro', () => 
    {
    cy.visit(BASE_URL)
    cy.get(peso).click()
    cy.get(peso_300g).click() 
    cy.get(altura).type("2") 
    cy.get(largura).type("11") 
    cy.get(comprimento).type("16") 
    cy.get(cep_destino).type("05407-002")
    cy.get(botao_calcular).click()
    // Deve visualizar a mensagem de erro
    cy.get(cep_origem_error_msg ).should('contain', 'CEP de origem é obrigatório')
    })
    it('Ao tentar realizar o cálculo com o CEP de DESTINO vazio, deve retornar uma mensagem de erro', () => 
    {
    cy.visit(BASE_URL)
    cy.get(cep_origem).type("08090-284")
    cy.get(peso).click()
    cy.get(peso_300g).click()
    cy.get(altura).type("2") 
    cy.get(largura).type("11") 
    cy.get(comprimento).type("16") 
    cy.get(botao_calcular).click()
    // Deve visualizar a mensagem de erro 
    cy.get(cep_destino_error_msg ).should('contain', 'CEP de destino é obrigatório')
    })
    it('Ao selecionar o formato "Caixa/Pacote" e peso "300g" e informar a altura < 0.4 cm, largura < 8 cm e comprimento menor que 13 cm, devem ser exibidas três mensagens de erro', () => 
    {
    cy.visit(BASE_URL)
    cy.get(cep_origem).type("08090-284")
    cy.get(peso).click()
    cy.get(peso_300g).click()
    cy.get(altura).type("0.3") 
    cy.get(largura).type("7")  
    cy.get(comprimento).type("12") 
    cy.get(cep_destino).type("05407-002")
    cy.get(botao_calcular).click()
    //Deve visualizar 3 mensagens de erro
    cy.get(altura_error_msg).should('contain', 'Altura mínima 0.4 cm.')
    cy.get(largura_error_msg).should('contain', 'Largura mínima 8 cm.')
    cy.get(comprimento_error_msg).should('contain', 'Comprimento mínimo 13 cm')
    })
    it.skip('Validação de valor limite para altura, largura e comprimento ', () => 
    {
    cy.get(limpar).click()
    cy.get(cep_origem).type("08090-284")
    cy.get(peso).click()
    cy.get(peso_300g).click()
    cy.get(altura).type("0.4") 
    cy.get(largura).type("8")  
    cy.get(comprimento).type("13") 
    cy.get(cep_destino).type("05407-002")
    cy.get(botao_calcular).click()
    });  
}); 


