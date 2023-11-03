import { Locator, Page } from "@playwright/test";
import MainPage from "../../main-page";

/** User profile page */

class UserProfilePage extends MainPage {
    languagesTextField: Locator;
    frenchOptionText: Locator;

    constructor(page: Page) {
        super(page);
        this.languagesTextField = this.page.locator('#language');
        this.frenchOptionText = this.page.locator('//select[@id="language"]/option[last()]')
    }
    
    /** 
     * Select language.
     */
    async selectLanguage(): Promise<void> {
        await this.languagesTextField.click();
    }

    /** 
     * Select French language.
     */
    async setFrenchLanguage(): Promise<void> {
       await this.languagesTextField.selectOption({value:"fr"})

    }
}

export default UserProfilePage;
