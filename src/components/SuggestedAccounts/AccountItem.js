import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '../Propper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreviews = (props) => (
        <div className={cx('preview')} tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
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
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/449589969_4072352503033632_6153515065509786941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EzMgZMpKrwAQ7kNvgGVDGae&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYAM0n6QgfJhka8gzAPFY8T_C_gz6Ul-HC9Hvi5Mvo550Q&oe=66C0E585"
                    alt="avatar"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        name
                        {<FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                    </h4>
                    <p className={cx('username')}>nickname</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
