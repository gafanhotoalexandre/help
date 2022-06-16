import { useState } from 'react';

import styles from './SearchInput.module.css'

interface SearchInputProps {
  mainColor: string;
  onSearch: (searchValue: string) => void;
}

export function SearchInput({ mainColor, onSearch }: SearchInputProps) {
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
      style={{ borderColor: focused ? mainColor : '#fff' }}
    >
      <div
        className={styles.button}
        onClick={() => onSearch(searchValue)}
      ></div>

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
