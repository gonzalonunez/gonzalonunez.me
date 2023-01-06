import Link from 'next/link';
import { useContext } from 'react';
import IconButton from './IconButton';
import { NavigationContext } from './providers/Navigation';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  return (
    <nav
      className={`${
        isOpen ? 'absolute translate-x-0' : 'absolute -translate-x-full'
      } transition-transform bg-white border-r p-md h-screen w-64`}
    >
      <div className='pb-sm'>
        <IconButton
          name='window'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <h1 className='font-title text-2xl mb-md'>Gonzalo Nuñez</h1>
      <ul className='list-none space-y-[4px]'>
        <SidebarItem href='/' isExternal={false} title='About' />
        <SidebarItem href='/reading' isExternal={false} title='Reading' />
        <SidebarItem
          href='https://gonzalonunez.substack.com'
          isExternal={true}
          title='A Work in Progress'
          icon='arrow-top-right'
        />
        <SidebarItem
          href='https://github.com/gonzalonunez'
          isExternal={true}
          title='GitHub'
          icon='arrow-top-right'
        />
        <SidebarItem
          href='https://twitter.com/gonzalo__nunez'
          isExternal={true}
          title='Twitter'
          icon='arrow-top-right'
        />
      </ul>
    </nav>
  );
}

export default Sidebar;
