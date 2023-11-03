import {Page} from '@playwright/test';

import InternetBundlePage from './internet-details/Internet-bundle.page';
import VoucherModalePage from './modale/voucher-modale.page';

export interface InternetDetailsPages {
    internetBundlePage: InternetBundlePage,
    voucherModalePage:  VoucherModalePage
}

export default (page: Page):InternetDetailsPages => ({
    internetBundlePage: new InternetBundlePage(page),
    voucherModalePage: new VoucherModalePage(page),
});