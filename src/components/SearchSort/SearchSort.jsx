import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Select from '../Select/Select';
import './SearchSort.scss';

const sortOptions = [
    {
        label: 'By default',
        value: 'default'
    },
    {
        label: 'A > B',
        value: 'asc'
    },
    {
        label: 'A < B',
        value: 'desc'
    }
];

const SearchSort = ({ search, setSearch, sort, setSort }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (sort) {
            setSearchParams({ sort: sort });
        }

        if (sort === 'default') {
            setSearchParams({});
        }
    }, [sort, searchParams, setSearchParams]);

    return (
        <div className="search-sort">
            <SearchForm searchValue={search} setSearchValue={setSearch} placeholder="Find user by username ..." />
            <Select value={sort} setValue={setSort} options={sortOptions} label="Sort by" />
        </div>
    );
};

export default SearchSort;
