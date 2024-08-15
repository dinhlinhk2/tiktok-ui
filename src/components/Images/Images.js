import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Images.module.scss';

const Image = forwardRef(({ src, alt, className, fallback = images.noImg, ...props }, ref) => {
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
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
