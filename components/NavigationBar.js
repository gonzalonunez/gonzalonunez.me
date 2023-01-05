function NavigationBar(props) {
  return (
    <div className='sticky top-0 z-20 flex flex-row p-md bg-white w-screen'>
      {props.children}
    </div>
  );
}

export default NavigationBar;