import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>
          News <span>Hunt</span>
        </h1>

        <h3>Take your Daily dose of news</h3>
      </div>
    </div>
  );
}
