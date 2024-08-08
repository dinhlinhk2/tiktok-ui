import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Images.module.scss';

function Image({ src, alt, className, fallback = images.noImg, ...props }, ref) {
    const [error, setError] = useState('');
    const handleError = () => {
        setError(fallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={error || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
