import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{title}</div>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('see-all')}>See all</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
