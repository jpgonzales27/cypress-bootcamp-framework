export class CartElements {
  static get buttons() {
    return {
      get placeOrder() {
        return cy.get('button[data-toggle="modal"]');
      },
    };
  }

  static get links() {
    return {
      delete(productName) {
        // return cy.contains("td", productName).closest("tr").find("a");
        return cy.contains("td", productName).parent("tr").find("a");
      },
    };
  }
}
