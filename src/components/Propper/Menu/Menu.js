import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Propper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import MenuHeader from './Header';
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ items = [], hideOnClick = false, children, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    // useEffect(() => {
    //     console.log(history);
    //     console.log(current);
    // }, [history]);

    const renderMenuItems = () => {
        return current.data.map((item, index) => {
            const isSub = !!item.subItem;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isSub) {
                            setHistory((pre) => [...pre, item.subItem]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('more-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <MenuHeader title={current.title} onBack={handleBack} />}
                <div className={cx('scroll-menu')}>{renderMenuItems()}</div>
            </PopperWrapper>
        </div>
    );
    const handleResetToFirstPage = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            placement="bottom-end"
            delay={[0, 500]}
            offset={[12, 8]}
            interactive
            onHide={handleResetToFirstPage}
            content="More-Btn"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
};
export default Menu;
