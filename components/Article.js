export default function Article(props) {
  return (
    <div className='flex justify-center px-lg pb-6'>
      <article className='prose prose-neutral w-full underline-offset-4 select-none'>
        {props.title && <h1 className='font-title mb-0'>{props.title}</h1>}
        {props.children}
      </article>
    </div>
  );
}
