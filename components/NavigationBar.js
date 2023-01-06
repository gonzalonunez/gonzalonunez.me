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
      } sticky top-0 z-20 flex flex-row p-md bg-white w-screen`}
    >
      {props.children}
    </div>
  );
}

export default NavigationBar;
