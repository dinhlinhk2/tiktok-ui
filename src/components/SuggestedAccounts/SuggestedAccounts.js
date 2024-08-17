import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title, data = [], onViewChange, isSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{title}</div>
            {data.map((itemAccount) => (
                <AccountItem data={itemAccount} key={itemAccount.id} />
            ))}
            <p className={cx('see-all')} onClick={() => onViewChange(isSeeAll)}>
                {isSeeAll ? 'See less' : 'See all'}
            </p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
