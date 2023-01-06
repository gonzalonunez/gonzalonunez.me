export default function Article(props) {
  return (
    <div className='flex justify-center p-lg'>
      <article className='prose prose-neutral w-full underline-offset-4'>
        {props.title && <h1 className='font-title'>{props.title}</h1>}
        {props.children}
      </article>
    </div>
  );
}
