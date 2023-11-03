import { Page, Locator } from "@playwright/test";
import MainPage from "../../main-page";

/** Voucher modale page */
class VoucherModalePage extends MainPage {
    voucherTextField: Locator;
    voucherSubmitButton: Locator;
    errorMessage: Locator;
    modaleCard: Locator;
    
    constructor(page: Page){
        super(page);
        this.voucherTextField = this.page.locator('input[name="inputFieldTitle"]');
        this.voucherSubmitButton = this.page.locator('.btn-brand-primary-large');
        this.errorMessage = this.page.locator('.error span');
        this.modaleCard = this.page.locator('.content-pop-up')
    }
     
    /** 
     * Type voucher code.
     */
    async setVoucherCode(code): Promise<void> {
       await this.voucherTextField.fill(code);
    }

    /** 
     * Submit voucher.
     */
     async submit(): Promise<void> {
        await this.voucherSubmitButton.click();
     }

    /** 
     * Error message.
     */
      async error() {
        return this.errorMessage.textContent();
    }
    
    /**
     * Display Modale card
     */
    async isVoucherModaleCard(): Promise<void>{
      await this.modaleCard.isVisible()
    }
}
 
 export default VoucherModalePage;