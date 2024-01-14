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
      } h-screen w-64 border-r bg-white p-4 transition-transform`}
    >
      <div className='pb-4'>
        <IconButton
          name='window'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <h1 className='font-title mb-4 text-2xl font-normal'>Gonzalo Nuñez</h1>
      <div className='flex flex-col space-y-[4px]'>
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
      </div>
    </nav>
  );
}

export default Sidebar;
