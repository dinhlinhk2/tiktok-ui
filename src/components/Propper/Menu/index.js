import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Propper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
const cx = classNames.bind(styles);
function Menu({ items = [], children }) {
    const renderMenuItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };

    return (
        <Tippy
            placement="bottom-end"
            delay={[0, 500]}
            interactive
            content="More-Btn"
            render={(attrs) => (
                <div className={cx('more-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderMenuItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
