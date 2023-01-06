import * as React from 'react';

const navigationContext = {
  isOpen: false,
  setIsOpen: value => {}
};

export const NavigationContext = React.createContext(navigationContext);
