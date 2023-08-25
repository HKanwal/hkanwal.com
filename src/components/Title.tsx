import Styles from "../styles/components/Title.module.css";

export interface TitleProps {}

export function Title(props: TitleProps) {
  return (
    <div className={Styles["title-container"]}>
      <span className={Styles.name}>
        <em>Harkeerat</em> Kanwal
      </span>
      <span className={Styles.subtitle}>
        The Web Developer you are looking for
      </span>
    </div>
  );
}
