describe('тест bookApp', () => {

  beforeEach(()=>{
    cy.visit('/')
  })

  it('тест логина', () => {
    cy.login("bropet@mail.ru", "123")
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible")
  })


  it('тест пустого имени пользователя', () => {
    cy.login("", "123")
    cy.get("#mail").then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('тест пустого пароля', () => {
    cy.login("bropet@mail.ru", "")
    cy.get("#pass").then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
  
  it('тест добавления книги', () => {
    cy.login("bropet@mail.ru", "123")
    
    cy.get('.p-0 > .btn').click()

    cy.addBook("Тигр!Тигр!", "фантастический роман", "Альфред Бестер")
    cy.get('form > .ml-2').click()
    cy.contains("Тигр!Тигр!").should("be.visible")
  
  })

  it('тест добавления книги в избранное', () => {
    cy.login("bropet@mail.ru", "123")
    
    cy.get('.p-0 > .btn').click()

    cy.addBook("Имею скафандр - готов путешествовать!", "фантастический роман", "Роберт Хайнлайн")
    cy.get('#favorite').dblclick()
    cy.get('form > .ml-2').click()

    cy.get('h4').click()
    cy.contains("Имею скафандр - готов путешествовать!").should("be.visible")
    
  })


})