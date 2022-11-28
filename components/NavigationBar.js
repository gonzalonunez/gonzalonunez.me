import IconButton from './IconButton';

function NavigationBar(props) {
  const { isOpen, setIsOpen } = props;
  return (
    <div className='sticky top-0 z-20 flex flex-row p-md bg-white border-b'>
      {props.children}
    </div>
  );
}

export default NavigationBar;
