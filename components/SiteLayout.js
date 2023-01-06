import { useContext } from 'react';
import IconButton from './IconButton';
import NavigationBar from './NavigationBar';
import { NavigationContext } from './providers/Navigation';
import Sidebar from './Sidebar';

function SiteLayout(props) {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  return (
    <div className='flex flex-column'>
      <div className='fixed z-50'>
        <Sidebar />
      </div>
      <div>
        <NavigationBar>
          <IconButton
            name='window'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </NavigationBar>
        {props.children}
      </div>
    </div>
  );
}

export default SiteLayout;
