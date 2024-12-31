export function ListItem(props) {
  const itemClassName = props.item.new
    ? 'marker:text-green-500'
    : 'marker:text-neutral-300';
  return (
    <li className={itemClassName}>
      {props.item.href ? (
        <a href={props.item.href} target='_blank'>
          {props.item.title}
        </a>
      ) : (
        <div className='font-medium'>{props.item.title}</div>
      )}
      <div className='prose mr-6 mt-1  text-xs text-zinc-400 sm:text-justify'>
        <b>{props.item.subtitle && `${props.item.subtitle}`}</b>
        <b>{props.item.subtitle && props.item.details && ` · `}</b>
        {props.item.details}
      </div>
    </li>
  );
}
