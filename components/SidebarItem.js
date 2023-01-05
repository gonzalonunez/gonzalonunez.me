import Link from 'next/link';
import Icon from './Icon';
import { NavigationContext } from './providers/Navigation';
import { useContext } from 'react';

function SidebarItem(props) {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  const { href, icon, isExternal, title } = props;
  return (
    <Link href={href} target={isExternal ? '_blank' : undefined}>
      <div
        className='flex flex-row items-center rounded-md p-sm cursor-pointer hover:bg-neutral-50 active:bg-neutral-100'
        onClick={() => {
          if (!isExternal) {
            setIsOpen(false);
          }
        }}
      >
        <div className='inline-block w-full'>{title}</div>
        {icon && <Icon name={icon} />}
      </div>
    </Link>
  );
}

export default SidebarItem;
