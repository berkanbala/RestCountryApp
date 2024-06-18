import { Outlet } from "react-router-dom";
import styles from "./appLayout.module.scss";
import Header from "../../common/component/layout/header/header";

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
