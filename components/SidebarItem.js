import { clsx } from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Icon from './Icon';
import { NavigationContext } from './providers/Navigation';

function SidebarItem(props) {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  const { href, icon, isExternal, title } = props;
  return (
    <Link href={href} target={isExternal ? '_blank' : undefined}>
      <div
        className={clsx(
          router.asPath === href ? 'bg-neutral-100' : 'bg-white',
          'flex cursor-pointer flex-row items-center rounded-md p-2 hover:bg-neutral-100'
        )}
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
