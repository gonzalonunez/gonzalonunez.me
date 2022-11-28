import Icon from './Icon';

function SidebarItem(props) {
  const { title, icon } = props;
  return (
    <div className='flex flex-row items-center rounded-md p-sm cursor-pointer hover:bg-neutral-50 active:bg-neutral-100'>
      <div className='inline-block w-full'>{title}</div>
      {icon && <Icon name={icon} />}
    </div>
  );
}

export default SidebarItem;
