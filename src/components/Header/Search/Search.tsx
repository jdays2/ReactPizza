import styles from "./Search.module.scss";
import searchIcon from "../../../assets/img/search-icon.svg";
import closeIcon from "../../../assets/img/close-icon.svg";
import React from "react";

import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setCurrentValue } from "../../../redux/search/slice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const clearSearchValue = () => {
    setValue("");
    updateSearchValue("");
    if (inputRef.current) inputRef.current.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setCurrentValue(str));
    }, 300),
    []
  );

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input
        ref={inputRef}
        className={styles.search}
        placeholder="Поиск любимой пиццы"
        onChange={onChangeInput}
        value={value}
      />

      {value === "" ? null : (
        <img
          className={styles.closeIcon}
          src={closeIcon}
          onClick={clearSearchValue}
        />
      )}
    </div>
  );
};

export default Search;
