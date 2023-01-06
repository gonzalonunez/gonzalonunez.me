import Icon from './Icon';

function IconButton(props) {
  const { name, onClick } = props;
  return (
    <button className='hover:opacity-60 active:opacity-40' onClick={onClick}>
      <Icon name={name} />
    </button>
  );
}

export default IconButton;
