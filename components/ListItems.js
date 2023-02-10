import { ListItem } from './ListItem';

export function ListItems(props) {
  return (
    <div>
      <h4 className='select-none'>{props.title}</h4>
      <ul>
        {props.items.map(item => (
          <ListItem item={item} />
        ))}
      </ul>
    </div>
  );
}
