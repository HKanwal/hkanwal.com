import Styles from "../styles/components/Waves.module.css";

export interface WavesProps {
  height?: string;
}

export function Waves(props: WavesProps) {
  return (
    <svg
      className={Styles.waves}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="80 0 150 95"
      preserveAspectRatio="none"
      shapeRendering="auto"
      height={props.height}
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g>
        <use
          href="#gentle-wave"
          className={Styles["front-wave"]}
          x="48"
          y="5"
          fill="#2c7fbe"
        ></use>
        <use
          href="#gentle-wave"
          className={Styles["back-wave"]}
          x="48"
          y="7"
          fill="#32bafa"
        ></use>
      </g>
    </svg>
  );
}
