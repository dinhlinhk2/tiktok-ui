import classNames from 'classnames/bind';
import Style from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Style);

function AccountPreview({ data }) {
    return (
        <div className={cx('account-item')}>
            <header className={cx('header-preview')}>
                <img className={cx('avatar')} src={data.avatar} alt="avatar" />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {`${data.last_name} ${data.first_name} `}
                    {<FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                </h4>
                <p className={cx('username')}>{data.nickname}</p>
                <p className={cx('analytics')}>
                    <span className={cx('value')}>{data.followers_count}M</span>
                    <span className={cx('follower')}>Followers</span>
                    <span className={cx('value')}>{data.likes_count}M</span>
                    <span className={cx('likes')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
