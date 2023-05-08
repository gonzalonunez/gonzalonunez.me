import Article from '../components/Article';
import { ListItems } from '../components/ListItems';

const projects = [
  {
    href: 'https://glyph.sh',
    key: 'glyph',
    title: 'Glyph',
    details: "What if GPT lived inside of your phone's keyboard?"
  },
  {
    href: 'https://github.com/gonzalonunez/docc-gpt',
    title: 'DoccGPT',
    details: 'Self-documenting Swift code with GPT and DocC'
  }
];

const work = [
  {
    key: 'current',
    title: '???',
    details: '2023–'
  },
  {
    href: 'https://primer.com',
    title: 'Primer',
    subtitle: 'Founding Mobile Engineer',
    details: '2020–23'
  },
  {
    href: 'https://airbnb.com',
    title: 'Airbnb',
    subtitle: 'Software Engineer',
    details: '2018–20'
  }
];

const essays = [
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
  },
  {
    href: 'https://open.substack.com/pub/gonzalonunez/p/how-to-build-a-worldview',
    title: 'How to build a worldview',
    details:
      'A pattern language for understanding the world and my place in it.'
  }
];

export default function About() {
  return (
    <Article title='About'>
      <p>
        <span className='font-semibold'>Hi, I'm Gonzalo.</span> I think about
        art, culture, startups, and philosophy. I also write mobile software.
      </p>
      <ListItems title='Projects' items={projects}>
        <div className='text-xs text-neutral-400 mt-[-4px] mb-[-4px]'>
          Explore more projects on{' '}
          <a href='https://github.com/gonzalonunez' target='_blank'>
            GitHub
          </a>
        </div>
      </ListItems>
      <ListItems title='Essays' items={essays}>
        <div className='text-xs text-neutral-400 mt-[-4px] mb-[-4px]'>
          Read more at{' '}
          <a href='https://gonzalonunez.substack.com' target='_blank'>
            A Work in Progress
          </a>
        </div>
      </ListItems>
      <ListItems title='Work' items={work} />
    </Article>
  );
}
