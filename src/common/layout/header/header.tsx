import styles from "./header.module.scss";
import classNames from "classnames";

export default function Header(props: Props) {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <ul>
        <li>
          <h1>Where in the world?</h1>
        </li>
        <li>☼-☾</li>
      </ul>
    </div>
  );
}

interface Props {
  className: string;
}
