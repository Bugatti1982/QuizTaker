import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import questions from '../../cypress/fixtures/questions.json';

describe('<Quiz /> Component Test', () => {
  it('renders the quiz with a start button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('displays the first question after starting the quiz', () => {
    mount(<Quiz questions={questions} />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.question').should('contain', questions[0].question);
  });

  it('displays the score when the quiz is over', () => {
    mount(<Quiz questions={questions} />);
    cy.get('button').contains('Start Quiz').click();

    questions.forEach(() => {
      cy.get('button').contains('Next').click();
    });

    cy.get('.quiz-over').should('exist');
    cy.get('.score').should('contain', 'Your Score:');
  });

  it('allows restarting the quiz after finishing', () => {
    mount(<Quiz questions={questions} />);
    cy.get('button').contains('Start Quiz').click();

    questions.forEach(() => {
      cy.get('button').contains('Next').click();
    });

    cy.get('button').contains('Start New Quiz').click();
    cy.get('.question').should('contain', questions[0].question);
  });
});