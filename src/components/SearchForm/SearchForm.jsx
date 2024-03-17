import './SearchForm.scss';

const SearchForm = ({ searchValue = '', setSearchValue, placeholder = '' }) => {
    return (
        <form className="search-form">
            <input
                type="search"
                placeholder={placeholder}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
        </form>
    );
};

export default SearchForm;
