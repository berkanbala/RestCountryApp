import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import classNames from "classnames";

export default function Header(props: Props) {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <ul>
        <li>
          <Link to="/">Where in the world?</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

interface Props {
  className: string;
}
