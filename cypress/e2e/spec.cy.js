import { HomeMethods } from "./pages/Home/home.methods";
import { CartMethods } from "./pages/cart/cart.methods";
import { CommonPageElements } from "./pages/common-page/common-page.elements";
import { CommonPageMethods } from "./pages/common-page/common-page.methods";
import { LoginMethods } from "./pages/login/login.methods";
import { Logger } from "./util/logger";

describe.skip("template spec", () => {
  it("passes", () => {
    const username = "random01";
    const password = "random01";

    //Logger.stepNumber(1);
    Logger.step("Navegar a la demoblaze page");
    cy.visit("https://www.demoblaze.com/index.html");

    //Logger.stepNumber(2);
    Logger.step("Click on 'Login' link");
    CommonPageMethods.clickOnLoginOption();

    //Logger.stepNumber(3);
    Logger.step(`Login with credentials: ${username}/${password}}`);
    LoginMethods.login(username, password);

    //Logger.stepNumber(4);
    Logger.verification(`The home should show: Welcome ${username}`);
    cy.get("a#nameofuser").should("contain.text", username);
  });
});
