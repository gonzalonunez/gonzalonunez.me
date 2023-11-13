export default function Article(props) {
  return (
    <div className='px-lg flex justify-center pb-6'>
      <article className='prose prose-neutral w-full select-none underline-offset-4'>
        {props.title && (
          <h1 className='font-title mb-0 text-2xl'>{props.title}</h1>
        )}
        {props.children}
      </article>
    </div>
  );
}
