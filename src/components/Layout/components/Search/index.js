import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { SearchIcon } from '~/components/Icons/index';
import { Wrapper as PopperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

const Search = () => {
    const [seacrhValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [placeholder, setPlaceholder] = useState('Search...');
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 1000);
    }, []);

    function handleOutside() {
        setShowResult(false);
        setPlaceholder('Search...');
    }
    function handleClearSearch() {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    return (
        <TippyHeadless
            onClickOutside={handleOutside}
            interactive
            visible={showResult && searchResult.length > 0}
            content="Tìm kiếm"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => {
                        setShowResult(true);
                        setPlaceholder('Your search...');
                    }}
                    ref={inputRef}
                    placeholder={placeholder}
                    spellCheck={false}
                    value={seacrhValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {!!setSearchValue && (
                    <button className={cx('clear')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
};

export default Search;
