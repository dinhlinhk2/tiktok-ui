import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';
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
    const [loading, setLoading] = useState();

    const debouncedValue = useDebounce(seacrhValue, 500);

    const [placeholder, setPlaceholder] = useState('Search...');
    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
            .then((response) => response.json())
            .then((response) => {
                setSearchResult(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [debouncedValue]);

    function handleOutside() {
        setShowResult(false);
        setPlaceholder('Search...');
    }
    function handleClearSearch() {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    function handleChangeSearchValue(e) {
        const value = e.target.value;

        if (!/^\s+/.test(value) && !/\s{2,}/.test(value)) {
            setSearchValue(value);
        }
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
                        {searchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
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
                    onChange={handleChangeSearchValue}
                />
                {!!seacrhValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
};

export default Search;
