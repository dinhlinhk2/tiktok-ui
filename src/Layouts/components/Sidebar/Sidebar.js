import classNames from 'classnames/bind';

import {
    HomeIconActive,
    HomeIconUnActive,
    FollowingIconActive,
    FollowingIconUnActive,
    LiveIconActive,
    LiveIconUnActive,
} from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    activeIcon={<HomeIconActive />}
                    icon={<HomeIconUnActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    activeIcon={<FollowingIconActive />}
                    icon={<FollowingIconUnActive />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    activeIcon={<LiveIconActive />}
                    icon={<LiveIconUnActive />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
