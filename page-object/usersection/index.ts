import { Page } from '@playwright/test';

import UserProfilePage from "./profile/user-profile.page";
import EulaContainerPage from './eula/eula-container.page';

export interface ProfilePages {
    userProfilePage: UserProfilePage,
    eulaContainerPage: EulaContainerPage,
}
export default (page: Page): ProfilePages => ({
    userProfilePage: new UserProfilePage(page),
    eulaContainerPage: new EulaContainerPage(page)
});