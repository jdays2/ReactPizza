import styles from "./Search.module.scss";
import searchIcon from "../../../assets/img/search-icon.svg";
import closeIcon from "../../../assets/img/close-icon.svg";
import React from "react";
import { setCurrentValue } from "./../../../redux/slices/SearchSlice";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

function Search() {
  const dispatch = useDispatch();
  // const currentValue = useSelector((state) => state.search.currentValue);
  const [value, setValue] = React.useState("");

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setCurrentValue(str));
    }, 300),
    []
  );

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input
        // ref={importRef}
        className={styles.search}
        placeholder="Поиск любимой пиццы"
        onChange={onChangeInput}
        value={value}
      />

      {value === "" ? null : (
        <img
          className={styles.closeIcon}
          src={closeIcon}
          onClick={() => {
            dispatch(setCurrentValue(""));
            // importRef.current.focus();
          }}
        />
      )}
    </div>
  );
}

export default Search;
