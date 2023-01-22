class ProductListPage {
	get = {
		Items: () => cy.get('[data-component-type="s-search-result"] h2 a'),
	};

	clickFirstItem() {
		this.get.Items().first().click();
	}
}

export const productList = new ProductListPage();
