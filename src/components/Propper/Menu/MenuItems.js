import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    const classes = cx('menu-items', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;
