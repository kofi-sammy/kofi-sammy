import { Locator, Page } from "@playwright/test";
import MainPage from "../../main-page";

/** 
 * Eula landing page.
 */
class EulaContainerPage extends MainPage{
    acceptButton: Locator;

    constructor(page: Page){
        super(page)
        this.acceptButton = this.page.locator('.btn-accept')
    }

    /**
     * Accept button 
     */
    async acceptAll(): Promise<void>{
        await this.acceptButton.click()
    }
}

export default EulaContainerPage;