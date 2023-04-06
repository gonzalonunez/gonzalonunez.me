import { ListItem } from './ListItem';

export function ListItems(props) {
  return (
    <div>
      <h4 className='select-none'>{props.title}</h4>
      {props.children}
      <ul>
        {props.items.map(item => (
          <ListItem key={item.key ?? item.href} item={item} />
        ))}
      </ul>
    </div>
  );
}
