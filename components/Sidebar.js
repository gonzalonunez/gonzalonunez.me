import IconButton from './IconButton';
import SidebarItem from './SidebarItem';

function Sidebar(props) {
  const { isOpen, setIsOpen } = props;
  return (
    <nav
      className={`${
        isOpen ? 'absolute translate-x-0' : 'absolute -translate-x-full'
      } transition-transform z-50`}
    >
      <div className='bg-white border-r p-md h-screen w-64'>
        <div className='pb-sm'>
          <IconButton
            name='window'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <h1 className='font-sans font-bold text-2xl pb-md'>Gonzalo Nuñez</h1>
        <ul className='list-none space-y-[4px]'>
          <SidebarItem title='About' />
          <SidebarItem title='Books' />
          <SidebarItem title='Writing' icon='arrow-top-right' />
          <SidebarItem title='Github' icon='arrow-top-right' />
          <SidebarItem title='Twitter' icon='arrow-top-right' />
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
