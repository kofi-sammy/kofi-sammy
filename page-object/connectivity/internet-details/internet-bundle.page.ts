import { Locator, Page } from "@playwright/test";
import MainPage from "../../main-page";

/** Internet bundle page */

class InternetBundlePage extends MainPage {
   voucherButton: Locator;

    constructor(page: Page){
        super(page);
        this.voucherButton = this.page.locator('button.connectivity-link')
    }
    
    /** 
     * Go to voucher modale page.
     */
    async goToVoucherModale(): Promise<void> {
      await this.voucherButton.click()
    }

}

export default InternetBundlePage;