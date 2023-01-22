const { searchBar } = require('../support/pages/amazonHeaderPage');
const { productList } = require('../support/pages/amazonItemListPage');
const { cart } = require('../support/pages/amazonCartPage');

describe('Agregar items al Cart que requieran Inicio de Sesión', () => {
	beforeEach('Precondiciones', () => {
		cy.visit('/');
		searchBar.searchForItem('PS5{enter}');
		productList.clickFirstItem();
		cy.screenshot();
	});
	it('Validar No poder hacer checkout de item VIP cuando no se ha realizado sesión', () => {
		cart.clickInvRequestBtn();
		cy.url().should('contain', 'signin');
		cy.screenshot();
	});
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
