import styles from "./crimeData.module.css";

function CrimeData(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Results</h2>
        <div className={styles.data}>
          <span>Violent Crime</span>
          <span>{props.violent}</span>
        </div>
        <div className={styles.data}>
          <span>Rape</span>
          <span>{props.rape}</span>
        </div>
        <div className={styles.data}>
          <span>Robbery</span>
          <span>{props.robbery}</span>
        </div>
        <div className={styles.data}>
          <span>Burglary</span>
          <span>{props.burglary}</span>
        </div>
        <div className={styles.data}>
          <span>Homicide</span>
          <span>{props.homicide}</span>
        </div>
        <div className={`${styles.total} ${styles.data}`}>
          <span>Total Crime</span>
          <span>{props.total}</span>
        </div>
      </div>
    </div>
  );
}

export default CrimeData;
