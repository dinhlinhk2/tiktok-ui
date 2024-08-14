import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { HeaderOnly } from '~/components/Layout';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import routesConfig from '~/components/config/routes';

const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.nickname,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: null,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
