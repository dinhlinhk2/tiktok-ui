import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function MenuHeader({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('header-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h3 className={cx('header-title')}>{title}</h3>
        </header>
    );
}
export default MenuHeader;
