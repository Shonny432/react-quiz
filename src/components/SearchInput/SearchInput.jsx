import { useId } from 'react';
import { SearchIcon } from '../icons';
import cls from './SearchInput.module.css';


export const SearchInput = ({value, onChange}) => {
    const inputId = useId();
    return (
        <div className={cls.searchInput}>
            <label htmlFor={inputId}><SearchIcon className={cls.searchIcon} /></label>
            <input type="text" value={value} onChange={onChange} id={inputId} className={cls.input} placeholder='Search' />
        </div>
  );
};
