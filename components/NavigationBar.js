import { useEffect, useState } from 'react';

function NavigationBar(props) {
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
      {props.children}
    </div>
  );
}

export default NavigationBar;
