import { CSSProperties, useEffect, useRef, useState } from 'react';
import Styles from '../styles/components/Brief.module.css';

export function Brief() {
  const ref = useRef<HTMLDivElement>(null);
  const [positionY, setPositionY] = useState(10000);
  const [freezeScrollBound, setFreezeScrollBound] = useState<number | null>(null);
  const className = Styles.brief + (freezeScrollBound !== null ? ' ' + Styles.fixed : '');
  const style: CSSProperties =
    freezeScrollBound !== null ? { position: 'fixed', top: positionY } : {};

  useEffect(() => {
    setPositionY(window.innerHeight);
  }, []);

  useEffect(() => {
    function handleScroll(e: Event) {
      const boundingRect = ref.current?.getBoundingClientRect();

      if (!boundingRect) {
        return;
      }

      setPositionY(boundingRect.y);

      if (freezeScrollBound !== null && document.documentElement.scrollTop <= freezeScrollBound) {
        setFreezeScrollBound(null);
      }

      if (
        freezeScrollBound === null &&
        boundingRect.top + boundingRect.height / 2 <= window.innerHeight / 2
      ) {
        setFreezeScrollBound(document.documentElement.scrollTop);
      }
    }

    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [ref, freezeScrollBound]);

  return (
    <div className={className} style={style} ref={ref}>
      Websites, apps, mods, crypto, and more. If you can imagine it, I can build it.
    </div>
  );
}
