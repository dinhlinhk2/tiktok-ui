import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { HeaderOnly } from '~/components/Layout';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
    {
        path: '/search',
        component: Search,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
