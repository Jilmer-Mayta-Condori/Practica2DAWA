describe('Contact App', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3001')
    })

    it ('Se pude visitar la pagina', () =>{
        cy.contains('Bienvenido')
    })

    it ('Ir a crear Contacto', () =>{
        cy.contains('Crear Contacto').click()
    })

    it ('Se puede validar los campos de Contacto', () =>{
        cy.contains('Crear Contacto').click()
        cy.get('#form-create-contact-button').click()
        cy.contains('El Nombre no puede estar vacio')
    })

    it ('Se puede validar el numero de Contacto', () =>{
        cy.contains('Crear Contacto').click()
        cy.get('[name="name"]').last().type('Daniel Toledo')
        cy.get('[name="number"]').last().type('asd5451ed')
        cy.get('#form-create-contact-button').click()
        cy.contains('El Numero no puede contener caracteres')
    })

    it ('Se puede crear un Contacto', () =>{
        cy.contains('Crear Contacto').click()
        cy.get('[name="name"]').first().type('Jilmer Mayta')
        cy.get('[name="number"]').last().type('987654321')
        cy.get('#form-create-contact-button').click()
        cy.contains('Lista de contactos')
        cy.contains('Jilmer Mayta')
        cy.contains('987654321')
    })

    it ('Se puede listar Contacto', () =>{
        cy.contains('Mostrar Contactos').click()
        cy.contains('Lista de contactos')
        cy.contains('Eliminar')
    })

    it.only ('Se puede eliminar un elemento de los Contacto', () =>{
        cy.contains('Mostrar Contactos').click()
        cy.contains('Lista de contactos')
        cy.contains('Eliminar').click()
    })
})