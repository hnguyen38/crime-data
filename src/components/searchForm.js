import { useRef } from "react";
import styles from "./searchForm.module.css";

function SearchForm(props) {
  const stateRef = useRef();
  const startYearRef = useRef();
  const endYearRef = useRef();

  const minYear = 1979;
  const maxYear = new Date().getFullYear() - 1;

  function handleSubmit(e) {
    e.preventDefault();
    const enteredState = stateRef.current.value;
    const enteredStartYear = startYearRef.current.value;
    const enteredEndYear = endYearRef.current.value;

    const inputData = {
      state: enteredState,
      startYear: enteredStartYear,
      endYear: enteredEndYear,
    };

    props.onFormInput(inputData);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Crime Data by State</h1>
      <span className={styles.description}>
        Crime data is gathered and updated starting from 1979 to the year prior
        to the current year.
      </span>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="state" className={styles.label}>
          State (Abbreviation)
        </label>
        <input
          className={styles.input}
          type="text"
          id="state"
          pattern="[A-Z, a-z]{2}"
          placeholder="AL"
          name="stateAbb"
          ref={stateRef}
          required
        />

        <label htmlFor="startYear" className={styles.label}>
          Start Year
        </label>
        <input
          className={styles.input}
          type="number"
          id="startYear"
          placeholder="YYYY"
          pattern="[0-9]{4}"
          name="startYear"
          ref={startYearRef}
          min={minYear}
          required
        />

        <label htmlFor="endYear" className={styles.label}>
          End Year
        </label>
        <input
          className={styles.input}
          type="number"
          id="endYear"
          placeholder="YYYY"
          pattern="[0-9]{4}"
          name="endYear"
          ref={endYearRef}
          min={minYear + 1}
          max={maxYear}
          required
        />

        <button className={styles.btn}>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
