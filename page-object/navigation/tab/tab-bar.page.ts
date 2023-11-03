import { Locator, Page } from "@playwright/test";
import MainPage from "../../main-page";

/** Navbar page */

class TabBarPage extends MainPage {
    logoText:Locator;
    internetBundleButton: Locator;
    userProfileButton: Locator;
    movingMapButton: Locator;
    cartButton: Locator;

    constructor(page: Page){
        super(page);
        this.userProfileButton = this.page.locator('.top-tab-bar a[href*="/user"]');
        this.logoText = this.page.locator('.airline-company-logo')
        this.internetBundleButton = this.page.locator('.widget-content')
    }
    
    /** 
     * Go to user profile page. 
     */
    async goToUserProfile(): Promise<void> {
        await this.userProfileButton.click()
    }
    /**
     * Go to home page.
     */
    async goToHome(): Promise<void> {
        await this.logoText.click();
    }

    /**
     * Go to internet plan page.
     */
    async goToInternetPlans(): Promise<void> {
        await this.internetBundleButton.click();
    }

}   

export default TabBarPage;