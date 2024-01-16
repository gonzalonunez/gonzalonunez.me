import { clsx } from 'clsx';
import { useContext, useEffect, useRef, useState } from 'react';
import IconButton from './IconButton';
import { NavigationContext } from './providers/Navigation';

function NavigationBar() {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return (
    <div
      className={clsx(
        scrollPosition > 0 ? 'border-border-color' : 'border-transparent',
        'sticky top-0 z-30 flex max-h-14 flex-row border-b bg-white p-4 transition-colors ease-out'
      )}
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
