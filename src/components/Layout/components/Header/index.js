import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Propper/Menu';
import {
    CoinIcon,
    DarkMode,
    HelpIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingsIcon,
    ShortcutsIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feadback',
    },
    {
        icon: <DarkMode />,
        title: 'Dark Mode',
        to: '/darkmode',
    },
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get Coins',
        to: '/getcoins',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'Create tools',
        subItem: {
            title: 'Create tools',
            data: [
                {
                    icon: <ShortcutsIcon />,
                    type: 'create_tool',
                    code: 'live_studio',
                    title: 'LIVE Studio',
                    separate: true,
                },
                {
                    icon: <ShortcutsIcon />,
                    type: 'create_tool',
                    code: 'live_creator_hub',
                    title: 'LIVE Creator Hub',
                },
            ],
        },
    },
    {
        icon: <SettingsIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const user = true;

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

                <Search />

                <div className={cx('actions')}>
                    {user ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('icon-action')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <button className={cx('icon-action')}>
                                <MessageIcon />
                                <p className={cx('sub-icon')}>2</p>
                            </button>
                            <button className={cx('icon-action')}>
                                <InboxIcon />
                                <p className={cx('sub-icon', 'inbox-icon')}>29</p>
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={user ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {user ? (
                            <Image
                                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/449589969_4072352503033632_6153515065509786941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5UEqauYUdxUQ7kNvgGLn4qj&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6sUFBYdkiTTtrbg_LLTxoy_9AUm6Oa8XaWaYbiTyhVw&oe=66B6CA05"
                                className={cx('user-avt')}
                                alt="NguyenDinhLinh"
                                fallback="file:///C:/Users/Admin/Downloads/emiu.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
