import { useEffect, useState } from 'react';
import Styles from '../styles/components/AppearingText.module.css';

export interface AppearingTextProps {
  text: string;

  /** In milliseconds */
  delay: number;
}

export function AppearingText(props: AppearingTextProps) {
  const [visible, setVisible] = useState(false);
  const className = Styles.text + (visible ? ' ' + Styles.visible : '');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, props.delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <span className={className}>{props.text}</span>;
}
