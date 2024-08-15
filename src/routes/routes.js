import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { HeaderOnly } from '~/Layouts';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import config from '~/config';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.nickname,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: null,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
