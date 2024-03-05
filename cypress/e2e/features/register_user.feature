Feature: Register User
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am on register screen

    Scenario: Cadastro com campo nome vazio
        When I click on Register
        Then I see message "O campo nome deve ser prenchido" on register
 

    Scenario: Cadastro com campo senha vazio
        And I fill name
        And I fill e-mail "hjd@test.com.br"
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register 

    Scenario: Cadastro com sucesso
        And I fill my credentials of register
        When I click on Register
        Then I see success message on register

    Scenario: Cadastro com campo e-mail invalido
        And I fill name
        And I fill with e-mail "invalidEmail"
        When I click on Register
        Then I see message "O campo e-mail deve ser prenchido corretamente" on register   
    
    Scenario: Cadastro com campo senha invalido
        And I fill name
        And I fill e-mail "hjd@test.com.br"
        And I fill with password "123"
        When I click on Register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register   

