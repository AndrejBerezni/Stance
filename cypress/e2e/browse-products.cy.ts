const bypassToken = Cypress.env('VERCEL_BYPASS_TOKEN');

describe('Visit page and browse product catalogue', () => {
  beforeEach(() => {
    cy.visit(`/?x-vercel-protection-bypass=${bypassToken}`);
    // Close 'under construction' info panel
    cy.get('[data-testid="close-under-construction"]').click();
    // Switch language to English
    cy.contains('button', 'en').click();
  });

  it('Home page is loaded', () => {
    // Assert that all home page sections are rendered
    cy.get('[data-testid="hero-section"]').should('exist').and('be.visible');
    cy.get('[data-testid="latest-arrivals-section"]')
      .should('exist')
      .and('be.visible');
    cy.get('[data-testid="collections-section"]')
      .should('exist')
      .and('be.visible');
    cy.get('[data-testid="features-section"]')
      .should('exist')
      .and('be.visible');
  });

  it('Catalogue loads 6 initial products', () => {
    cy.contains('a', 'Shop now').click();

    // Show 6 product cards with all elements
    cy.get('[data-testid="product-card"]')
      .should('have.length', 6)
      .each(($card) => {
        cy.wrap($card).within(() => {
          // Product image
          cy.get('img').should('exist').and('be.visible');
          // Product color and name
          cy.get('h3').should('exist').and('be.visible');
          // Product price
          cy.get('span').contains('€').should('exist').and('be.visible');
          // Color selector
          cy.get('[role="radiogroup"]')
            .find('[role="radio"]')
            .should('have.length.at.least', 1);
        });
      });
  });

  it('Filters and sort are rendered', () => {
    cy.contains('a', 'Shop now').click();

    // Filters
    cy.get('#filters').within(() => {
      // Header
      cy.get('h2').contains('Filter').should('exist');
      cy.get('[data-testid="close-filters-sidebar"]')
        .should('exist')
        .within(() => cy.get('svg').should('exist'));
      // Check filter inputs
      cy.get('#collections-filters').should('exist');
      cy.get('#category-filters').should('exist');
      cy.get('#colors-filters').should('exist');
      cy.get('#rating-filters').should('exist');
    });

    // Open sort dropdown
    cy.contains('button', 'Sort by').click();

    // Assert that all sort option buttons are visible
    cy.contains('button', 'Newest').should('exist').and('be.visible');
    cy.contains('button', 'Best rating').should('exist').and('be.visible');
    cy.contains('button', 'Price: Low to high')
      .should('exist')
      .and('be.visible');
    cy.contains('button', 'Price: High to low')
      .should('exist')
      .and('be.visible');

    // Close sort dropdown
    cy.contains('button', 'Sort by').click();
  });
});
