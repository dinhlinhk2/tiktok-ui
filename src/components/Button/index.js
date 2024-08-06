import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    let classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        text,
        disabled,
        small,
        large,
        [className]: className,
    });

    let Props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(Props).forEach((key) => {
            if (key.startsWith('on') && typeof Props[key] === 'function') {
                delete Props[key];
            }
        });
    }

    if (to) {
        Props.to = to;
        Comp = Link;
    } else if (href) {
        Props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...Props} {...passProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
