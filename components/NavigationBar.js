import { clsx } from 'clsx';
import { useContext, useEffect, useRef, useState } from 'react';
import IconButton from './IconButton';
import { NavigationContext } from './providers/Navigation';

function NavigationBar({ containerRef, contentRef }) {
  const ref = useRef(0);
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    const rect = contentRef.current?.getBoundingClientRect();
    setScrollPosition(rect.y);
  };

  useEffect(() => {
    containerRef?.current?.addEventListener('scroll', updateScrollPosition, {
      passive: true
    });
    return () => {
      containerRef?.current?.removeEventListener(
        'scroll',
        updateScrollPosition
      );
    };
  }, []);

  useEffect(() => {
    updateScrollPosition();
  }, [contentRef.current]);

  useEffect(() => {
    setNavBarHeight(ref.current?.getBoundingClientRect().height);
  }, [ref.current]);

  return (
    <div
      className={clsx(
        scrollPosition < navBarHeight ? 'border-b' : '',
        'sticky top-0 z-30 flex max-h-14 flex-row bg-white p-4'
      )}
      ref={ref}
    >
      <IconButton
        name='window'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
}

export default NavigationBar;
