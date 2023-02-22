export function ListItem(props) {
  return (
    <li>
      {props.item.href ? (
        <a className='select-none' href={props.item.href} target='_blank'>
          {props.item.title}
        </a>
      ) : (
        <div className='font-medium select-none'>{props.item.title}</div>
      )}
      <div className='prose text-xs text-neutral-400 mt-1 select-none'>
        <b>{props.item.subtitle && `${props.item.subtitle}`}</b>
        <b>{props.item.subtitle && props.item.details && ` · `}</b>
        {props.item.details}
      </div>
    </li>
  );
}
