import { clsx } from 'clsx';
import { useContext } from 'react';
import { NavigationContext } from './providers/Navigation';

export default function SidebarOverlay() {
  const { isOpen, setIsOpen } = useContext(NavigationContext);
  return (
    <div
      className={clsx(
        'fixed left-0 top-0 z-40 h-screen w-screen bg-gray-100/90 transition-opacity',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
      onClick={() => {
        setIsOpen(false);
      }}
    />
  );
}
