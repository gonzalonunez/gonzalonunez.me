import { useContext } from 'react';
import IconButton from './IconButton';
import NavigationBar from './NavigationBar';
import { NavigationContext } from './providers/Navigation';
import Sidebar from './Sidebar';

function SiteLayout(props) {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  return (
    <div>
      <div className='fixed z-50'>
        <Sidebar />
      </div>
      <div className='sticky top-0 z-40'>
        <NavigationBar>
          <IconButton
            name='window'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </NavigationBar>
      </div>
      {props.children}
    </div>
  );
}

export default SiteLayout;
