export function ListItem(props) {
  const itemClassName = props.item.new
    ? 'marker:text-green-500'
    : 'marker:text-neutral-300';
  return (
    <li className={itemClassName}>
      {props.item.href ? (
        <a className='select-none' href={props.item.href} target='_blank'>
          {props.item.title}
        </a>
      ) : (
        <div className='select-none font-medium'>{props.item.title}</div>
      )}
      <div className='prose mr-6 mt-1 select-none text-xs text-neutral-400 sm:text-justify'>
        <b>{props.item.subtitle && `${props.item.subtitle}`}</b>
        <b>{props.item.subtitle && props.item.details && ` · `}</b>
        {props.item.details}
      </div>
    </li>
  );
}
