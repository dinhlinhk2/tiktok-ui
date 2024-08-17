import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '../Propper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreviews = (props) => (
        <div className={cx('preview')} tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview data={data} />
            </PopperWrapper>
        </div>
    );
    return (
        <Tippy
            appendTo={() => document.body}
            interactive
            offset={[-15, 0]}
            delay={[800, 0]}
            placement="bottom"
            render={renderPreviews}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={data.avatar} alt="avatar" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        {data.last_name} {data.first_name}
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                    </h4>
                    <p className={cx('username')}>{data.nickname}</p>
                </div>
            </div>
        </Tippy>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired, // eslint-disable-line
};

export default AccountItem;
