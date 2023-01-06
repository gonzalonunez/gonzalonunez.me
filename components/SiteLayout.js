import { useContext } from 'react';
import NavigationBar from './NavigationBar';
import { NavigationContext } from './providers/Navigation';
import Sidebar from './Sidebar';

function SiteLayout(props) {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  return (
    <div>
      <nav className='fixed top-0 w-full z-10'>
        <div className='fixed z-50'>
          <Sidebar />
        </div>
        <NavigationBar />
      </nav>
      <div className='container h-screen mt-12'>{props.children}</div>
    </div>
  );
}

export default SiteLayout;
