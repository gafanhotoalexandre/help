import { useState } from 'react';

// contexts
import { useAppContext } from '../../contexts/AppContext';

import SearchIcon from './searchIcon.svg';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  onSearch: (searchValue: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const { tenant } = useAppContext();

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      onSearch(searchValue);
    }
  }

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? tenant?.mainColor : '#fff' }}
    >
      <div
        className={styles.button}
        onClick={() => onSearch(searchValue)}
      >
        <SearchIcon color={tenant?.mainColor} />
      </div>

      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </div>
  );
}
