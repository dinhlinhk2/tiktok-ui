import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/449589969_4072352503033632_6153515065509786941_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5UEqauYUdxUQ7kNvgGLn4qj&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYA6sUFBYdkiTTtrbg_LLTxoy_9AUm6Oa8XaWaYbiTyhVw&oe=66B6CA05"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Dinh Linh <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </h4>
                <p className={cx('username')}>line</p>
            </div>
        </div>
    );
}

export default AccountItem;
