import { Sidebar } from "../interfaces/sidebar";
import { EPage } from "../../../core/enums/page.enum";
import { baseUrl, baseUrlAccount, baseUrlCalculation } from "../../../core/constants/route.constant";

export const sidebarData: Sidebar = [
  {
    id: 1,
    title: '',
    items: [
      {
        id: 11,
        icon: './assets/images/icons/dashboard.svg',
        link: baseUrl + EPage.Dashboard,
        title: 'page.main.sidebar.dashboard',
      }
    ],
  },
  {
    id: 2,
    title: 'page.main.sidebar.account',
    items: [
      {
        id: 21,
        icon: './assets/images/icons/account.svg',
        link: baseUrlAccount + EPage.Profile,
        title: 'page.main.sidebar.profile',
      },
      {
        id: 22,
        icon: './assets/images/icons/characters.svg',
        link: baseUrlAccount + EPage.Characters,
        title: 'page.main.sidebar.characters',
      },
      {
        id: 23,
        icon: './assets/images/icons/materials.svg',
        link: baseUrlAccount + EPage.Materials,
        title: 'page.main.sidebar.materials',
      },
      {
        id: 24,
        icon: './assets/images/icons/account-weapons.svg',
        link: baseUrlAccount + EPage.AccountWeapons,
        title: 'page.main.sidebar.account-weapons',
      }
    ],
  },
  {
    id: 3,
    title: 'page.main.sidebar.calculation',
    items: [
      {
        id: 31,
        icon: './assets/images/icons/artifacts.svg',
        link: baseUrlCalculation + EPage.Artifacts,
        title: 'page.main.sidebar.artifacts',
      },
      {
        id: 32,
        icon: './assets/images/icons/talents.svg',
        link: baseUrlCalculation + EPage.Talents,
        title: 'page.main.sidebar.talents',
      },
      {
        id: 33,
        icon: './assets/images/icons/weapons.svg',
        link: baseUrlCalculation + EPage.Weapons,
        title: 'page.main.sidebar.weapons',
      }
    ],
  },
];
