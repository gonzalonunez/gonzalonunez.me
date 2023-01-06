import { useContext, useEffect, useState } from 'react';
import IconButton from './IconButton';
import { NavigationContext } from './providers/Navigation';

function NavigationBar(props) {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
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
      className={`${
        scrollPosition > 0 ? 'border-b' : ''
      } flex flex-row p-md bg-white`}
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
