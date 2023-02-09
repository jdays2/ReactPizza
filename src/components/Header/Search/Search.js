import styles from "./Search.module.scss";
import searchIcon from "../../../assets/img/search-icon.svg";
import closeIcon from "../../../assets/img/close-icon.svg";
import React from "react";
import { setCurrentValue } from "./../../../redux/slices/SearchSlice";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

function Search() {
  const dispatch = useDispatch();
  const currentValue = useSelector((state) => state.search.currentValue);
  const importRef = React.useRef();

  const console = console.log("hello");

  const testDeb = _.debounce(console, 500);

  const onHandle = (event) => {
    dispatch(setCurrentValue(event.target.value));
    importRef.current.focus();
    testDeb();
  };

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input
        ref={importRef}
        className={styles.search}
        placeholder="Поиск любимой пиццы"
        onChange={(event) => {
          onHandle(event);
        }}
        value={currentValue}
      />

      {currentValue === "" ? null : (
        <img
          className={styles.closeIcon}
          src={closeIcon}
          onClick={() => {
            dispatch(setCurrentValue(""));
            importRef.current.focus();
          }}
        />
      )}
    </div>
  );
}

export default Search;
