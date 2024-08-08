import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faMoon,
    faUpload,
    faInbox,
    faUser,
    faGear,
    faSackDollar,
    faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Propper/Menu';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        subItem: {
            title: 'Languege',
            data: [
                {
                    type: 'languege',
                    code: 'en',
                    title: 'Englishs',
                },
                {
                    type: 'languege',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feadback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark Mode',
        to: '/darkmode',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faSackDollar} />,
        title: 'Get Coins',
        to: '/getcoins',
    },
    {
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        title: 'Create tools',
        subItem: {
            title: 'Create tools',
            data: [
                {
                    icon: <FontAwesomeIcon icon={faHouseUser} />,
                    type: 'create_tool',
                    code: 'live_studio',
                    title: 'LIVE Studio',
                    separate: true,
                },
                {
                    icon: <FontAwesomeIcon icon={faHouseUser} />,
                    type: 'create_tool',
                    code: 'live_creator_hub',
                    title: 'LIVE Creator Hub',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignIn} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const user = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    });

    // xử lý logic
    function handleChange(menuItem) {
        switch (menuItem.type) {
            case 'languege':
                // xử lý logic cho menu Languege
                break;
            default:
                break;
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo"></img>

                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    content="Tìm kiếm"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search..." spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>

                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Tippy trigger="click" content="Upload video" placement="bottom">
                                <button className={cx('icon-action')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Tippy>
                            <button className={cx('icon-action')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                            <button className={cx('icon-action')}>
                                <FontAwesomeIcon icon={faInbox} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    {user ? (
                        <>
                            <Menu items={userMenu} title="Create tools">
                                <img
                                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/449589969_4072352503033632_6153515065509786941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5UEqauYUdxUQ7kNvgGLn4qj&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6sUFBYdkiTTtrbg_LLTxoy_9AUm6Oa8XaWaYbiTyhVw&oe=66B6CA05"
                                    className={cx('user-avt')}
                                    alt="NguyenDinhLinh"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Menu items={MENU_ITEMS} onChange={handleChange} title="Create tools">
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
