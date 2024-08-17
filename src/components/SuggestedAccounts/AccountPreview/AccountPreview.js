import classNames from 'classnames/bind';
import Style from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Style);

function AccountPreview() {
    return (
        <div className={cx('account-item')}>
            <header className={cx('header-preview')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/449589969_4072352503033632_6153515065509786941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EzMgZMpKrwAQ7kNvgGVDGae&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYAM0n6QgfJhka8gzAPFY8T_C_gz6Ul-HC9Hvi5Mvo550Q&oe=66C0E585"
                    alt="avatar"
                />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    name
                    {<FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                </h4>
                <p className={cx('username')}>nickname</p>
                <p className={cx('analytics')}>
                    <span className={cx('value')}>10M</span>
                    <span className={cx('follower')}>Followers</span>
                    <span className={cx('value')}>10M</span>
                    <span className={cx('likes')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
