import { test, expect } from "@playwright/test";
import pageObject from "../page-object";

test('As a user I can access Internet plan', async ({page}) => {
    const $ = pageObject(page)
       await page.goto('https://portal-ugo.ife.ugo.aero/');
       await $.eulaContainerPage.acceptAll();
       await $.tabBarPage.goToInternetPlans();
       await $.internetBundlePage.goToVoucherModale();
       await $.voucherModalePage.isVoucherModaleCard();
       await $.voucherModalePage.setVoucherCode('Test')
       await $.voucherModalePage.submit();
       const errorMessageElement = await $.voucherModalePage.error();
       await expect(errorMessageElement).toBeDefined()
});



