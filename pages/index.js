import Article from '../components/Article';
import { ListItems } from '../components/ListItems';

const essays = [
  {
    href: 'https://open.substack.com/pub/gonzalonunez/p/you-should-consider-yourself-exceptional',
    title: 'You should consider yourself exceptional',
    details:
      'Nietzsche, Christ, Jobs, and a soon-to-be centenarian on whether or not you should think of yourself as special.'
  },
  {
    href: 'https://open.substack.com/pub/gonzalonunez/p/i-am-asking-you-to-want-something',
    title: 'I am asking you to want something',
    details:
      'It seems like nobody really wants anything and nobody cares. Is this a new problem?'
  },
  {
    href: 'https://open.substack.com/pub/gonzalonunez/p/parasocial-media',
    title: 'Parasocial Media',
    details: 'Nobody on the internet actually cares about you. I’m sorry.'
  },
  {
    href: 'https://open.substack.com/pub/gonzalonunez/p/love-is-not-a-math-problem',
    title: 'Love is not a math problem',
    details:
      'On the hyper-optimization of love and why commitment is underrated.'
  }
];

export default function About() {
  return (
    <Article title='About'>
      <p>
        <span className='text-pretty font-semibold'>Hi, I'm Gonzalo.</span> I
        think about art, culture, startups, and philosophy. I also write
        software, mostly as part of my day job at{' '}
        <a className='text-rewind' href='https://rewind.ai'>
          Rewind
        </a>
        .
      </p>
      <ListItems title='Essays' items={essays}>
        <div className='mb-[-4px] mt-[-4px] text-xs text-zinc-400'>
          Read more at{' '}
          <a href='https://gonzalonunez.substack.com' target='_blank'>
            A Work in Progress
          </a>
        </div>
      </ListItems>
    </Article>
  );
}
