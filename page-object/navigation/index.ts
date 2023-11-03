import {Page} from '@playwright/test';

import TabBarPage from "./tab/tab-bar.page";
import NavMenuContainerPage from './nav-menu/nav-menu-container.page';

export interface NavigationPages {
    tabBarPage: TabBarPage,
    navMenuContainerPage: NavMenuContainerPage,

}
export default (page: Page): NavigationPages => ({
    tabBarPage: new TabBarPage(page),
    navMenuContainerPage: new NavMenuContainerPage(page),
});