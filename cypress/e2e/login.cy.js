describe('проверка сайта с логином', function () {
    it('Проверка авторизации с верным логином и паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Авторизация прошла успешно').should('be.visible');
     })
 })
 describe('проверка сайта с логином', function () {
    it('Проверка авторизации с верным логином и неверным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // кнопка при входе задизаблена
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); // кнопка при логине задизаблена
        cy.get('#pass').type('nevervy password');
        cy.get('#loginButton').should('be.enabled'); // кнопка при пароле активна
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
     })
 })
 describe('проверка сайта с логином', function () {
    it('Проверка авторизации с неверным логином и верным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // кнопка при входе задизаблена
        cy.get('#mail').type('aliya@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); // кнопка при логине задизаблена
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); // кнопка при пароле активна
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
     })
    })
    describe('проверка сайта с логином', function () {
        it('Проверка ошибки о валидации', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // кнопка при входе задизаблена
            cy.get('#mail').type('germandolnikov.ru'); // не указываем собачку в логине
            cy.get('#loginButton').should('be.disabled'); // кнопка при логине задизаблена
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').should('be.enabled'); // кнопка при пароле активна
            cy.get('#loginButton').click();
            cy.wait(1000);
            cy.contains('Нужно исправить проблему валидации').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
         })
        })
        describe('проверка сайта с логином', function () {
            it('проверка логики восстановления пароля', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#loginButton').should('be.disabled'); // кнопка при входе задизаблена
                cy.get('#forgotEmailButton').click();
                cy.contains('Восстановите пароль').should('be.visible');
                cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //наличие крестика
                cy.get('#mailForgot').type('german@dolnikov.ru');
                cy.get('#restoreEmailButton').click();
                cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
                cy.get('#exitMessageButton > .exitIcon').click();
                cy.contains('Форма логина').should('be.visible');
             })
            })
            describe('проверка на приведение к строчным буквам в логине', function () {
                it('в логине буквы меняются на строчные', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.wait(1000);
                    cy.contains('Авторизация прошла успешно').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие крестика
                 })
                })
   