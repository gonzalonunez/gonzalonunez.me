import Icon from './Icon';

function SidebarItem(props) {
  const { title, icon } = props;
  return (
    <div className='flex flex-row items-center rounded-md p-sm hover:bg-neutral-50 active:bg-neutral-100'>
      <div className='inline-block w-full'>{title}</div>
      {icon && <Icon name={icon} />}
    </div>
  );
}

function Sidebar() {
  return (
    <div className='border-r p-lg pl-md pr-md h-screen w-64'>
      <h1 className='font-sans font-bold text-2xl pb-sm'>Gonzalo Nuñez</h1>
      <ul className='list-none space-y-[4px]'>
        <SidebarItem title='About' />
        <SidebarItem title='Books' />
        <SidebarItem title='Writing' icon='arrow-top-right' />
        <SidebarItem title='Github' icon='arrow-top-right' />
        <SidebarItem title='Twitter' icon='arrow-top-right' />
      </ul>
    </div>
  );
}

export default Sidebar;
