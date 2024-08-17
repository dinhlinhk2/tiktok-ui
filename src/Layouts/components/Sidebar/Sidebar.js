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
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userSuggestedService from '~/Services/userSuggestedService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [usersSuggested, setUsersSuggested] = useState([]);

    useEffect(() => {
        userSuggestedService
            .getUserSuggested(page, PER_PAGE)
            .then((data) => {
                console.log(data);

                setUsersSuggested((pre) => [...pre, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    const handleViewChange = (isSeeAll) => {
        setIsSeeAll((pre) => !pre);
        if (isSeeAll) {
            console.log(111);

            setPage(page + 1);
        } else {
            console.log(222);
        }
    };

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
            <SuggestedAccounts
                title="Suggested Accounts"
                data={usersSuggested}
                isSeeAll={isSeeAll}
                onViewChange={handleViewChange}
            />
            <SuggestedAccounts title="Following Accounts" />
        </aside>
    );
}

export default Sidebar;
