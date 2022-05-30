import {HeaderOnly} from '~/components/Layout'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Meo from '~/pages/Meo';
import Upload from '~/pages/Upload';
const publicRoutes = [
    {
        path: '/',
        components: Home,
    },
    {
        path: '/following',
        components: Following,
    },
    {
        path: '/meo',
        components: Meo,
    },
    {
        path: '/upload',
        components: Upload,
        layout: HeaderOnly,
    },
];
const privateRoutes = [{}];
export { publicRoutes, privateRoutes };
