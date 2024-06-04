import { Outlet } from "react-router-dom";
import Header from "../../common/layout/header/header";
import styles from "./appLayout.module.scss";

export default function AppLayout() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
