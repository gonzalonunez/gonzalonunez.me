export default function Article(props) {
  return (
    <div className='flex justify-center px-4 pb-6'>
      <article className='prose prose-zinc w-full  underline-offset-4'>
        {props.title && (
          <h1 className='font-title mb-0 text-2xl'>{props.title}</h1>
        )}
        {props.subtitle && (
          <p className='mb-0 mt-1 text-xs text-zinc-400'>{props.subtitle}</p>
        )}
        {props.children}
      </article>
    </div>
  );
}
