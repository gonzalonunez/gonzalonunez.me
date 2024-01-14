import { clsx } from 'clsx';
import { useContext, useEffect, useState } from 'react';
import IconButton from './IconButton';
import { NavigationContext } from './providers/Navigation';

function NavigationBar(props) {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        scrollPosition > 0 ? 'border-b' : '',
        'sticky top-0 flex flex-row bg-white p-4'
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
