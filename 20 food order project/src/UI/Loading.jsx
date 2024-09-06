import styles from "./Loading.module.css";
import loadingImg from "../../public/loading.gif";

export default function Loading() {
  return (
    <div className={styles.loaderComponent}>
      <img src={loadingImg} className={styles.loader} />
    </div>
  );
}
