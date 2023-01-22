class CartPage {
	get = {
		InvRequestButton: () => cy.get('#hdp-invite-button'),
	};

	clickInvRequestBtn() {
		this.get.InvRequestButton().click();
	}
}

export const cart = new CartPage();
