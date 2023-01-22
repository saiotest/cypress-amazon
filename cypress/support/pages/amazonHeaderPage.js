class HeaderPage {
	get = {
		searchBar: () => cy.get('#twotabsearchtextbox'),
	};

	searchForItem(text) {
		this.get.searchBar().type(text);
	}
}

export const searchBar = new HeaderPage();
