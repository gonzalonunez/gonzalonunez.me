import Icon from './Icon';

function IconButton(props) {
  const { name, onClick } = props;
  return (
    <button className='hover:opacity-75 active:opacity-50' onClick={onClick}>
      <Icon name={name} />
    </button>
  );
}

export default IconButton;
