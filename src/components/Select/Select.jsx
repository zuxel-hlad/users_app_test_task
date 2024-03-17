import './Select.scss';

const Select = ({ value = '', setValue, options = [], label = '' }) => {
    return (
        <label className="select">
            {label && `${label}:`}
            <select value={value} onChange={e => setValue(e.target.value)}>
                <option disabled value="">
                    Choose option
                </option>
                {options.map((option, idx) => (
                    <option value={option.value} key={idx}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default Select;
