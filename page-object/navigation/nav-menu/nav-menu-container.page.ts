import { Page, Locator } from "@playwright/test";
import MainPage from "../../main-page";

/** Navigation Menu Container */

class NavMenuContainerPage extends MainPage {
    connectivityLinkText: Locator;
   
    constructor(page: Page){
        super(page);
        this.connectivityLinkText = this.page.locator('a[href="/services/connectivity/325"].text-truncate');
    }
     
    /**
     * Navigation menu list
     */
    async connectivityLink(){
      return this.connectivityLinkText.textContent()
    }
   
}

export default NavMenuContainerPage;