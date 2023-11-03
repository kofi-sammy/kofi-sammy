import {Page} from '@playwright/test';

import navigationPages,{NavigationPages} from './navigation';
import userSectionPages,{ ProfilePages } from './usersection';
import connectivity,{ InternetDetailsPages} from './connectivity';

export interface Pages extends NavigationPages, ProfilePages, InternetDetailsPages {};

export default (page: Page): Pages => ({
  ...navigationPages(page),
  ...userSectionPages(page),
  ...connectivity(page),
})