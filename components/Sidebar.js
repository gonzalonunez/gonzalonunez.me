import { clsx } from 'clsx';
import { useContext } from 'react';
import IconButton from './IconButton';
import { NavigationContext } from './providers/Navigation';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 z-50 h-screen w-64 border-r bg-white px-4 pb-0 pt-0 transition-transform',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className='max-h-14 py-4'>
        <IconButton
          name='window'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div className='prose'>
        <h1 className='font-title pb-5 text-2xl'>Gonzalo Nuñez</h1>
      </div>
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
    </aside>
  );
}

export default Sidebar;
