import Styles from "../styles/components/Title.module.css";

export interface TitleProps {}

export function Title(props: TitleProps) {
  return (
    <div className={Styles["title-container"]}>
      <div className={Styles["name-container"]}>
        <span className={Styles.firstname}>Harkeerat</span>
        &nbsp;
        <span>Kanwal</span>
      </div>
      <span className={Styles.subtitle}>A Full-Stack Developer</span>
    </div>
  );
}
