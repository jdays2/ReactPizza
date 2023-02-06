import styles from "./Search.module.scss";
import searchIcon from "../../../assets/img/search-icon.svg";
import closeIcon from "../../../assets/img/close-icon.svg";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} />
      <input
        className={styles.search}
        placeholder="Поиск любимой пиццы"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      />

      {searchValue === "" ? null : (
        <img
          className={styles.closeIcon}
          src={closeIcon}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
}

export default Search;
