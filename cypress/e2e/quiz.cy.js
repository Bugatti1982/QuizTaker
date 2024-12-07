describe('Tech Quiz End-to-End Test', () => {
    beforeEach(() => {
        
        cy.visit('/');
    });

    it('should start the quiz and handle the full flow correctly', () => {
        
        cy.get('h1').contains('Tech Quiz'); 

        
        cy.get('button').contains('Start Quiz').click();

        
        cy.get('.question').should('exist');
        cy.get('.question').should('not.be.empty');

        
        const mockQuestions = require('../fixtures/questions.json');

        
        mockQuestions.forEach((_, index) => {
            cy.get('button').contains('Next').click(); 

            if (index < mockQuestions.length - 1) {
                
                cy.get('.question').should('not.be.empty');
            }
        });

        
        cy.get('.quiz-over').should('exist').and('contain', 'Quiz Over');

       
        cy.get('.score').should('exist').and('contain', 'Your Score:');

        
        cy.get('button').contains('Start New Quiz').click();
        cy.get('.question').should('exist');
    });
});