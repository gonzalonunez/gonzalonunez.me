import Article from '../components/Article';

export default function About() {
  return (
    <Article title='About'>
      <p>
        <b>Hi, I'm Gonzalo.</b> I think about engineering, art, startups, and
        philosophy. I'm the Founding Mobile Engineer at{' '}
        <a href='https://primer.com' target='_blank'>
          Primer
        </a>{' '}
        and I live in San Francisco, California. If you'd like to grab beer or a
        coffee, feel free to reach out on{' '}
        <a href='https://twitter.com/gonzalo__nunez' target='_blank'>
          Twitter
        </a>
        .
      </p>
      <p>
        I write essays at{' '}
        <a href='https://gonzalonunez.substack.com' target='_blank'>
          A Work in Progress
        </a>
        , here are some of my favorites:
      </p>
      <ul>
        <li>
          <a href='https://open.substack.com/pub/gonzalonunez/p/i-am-asking-you-to-want-something'>
            I am asking you to want something
          </a>
          : It seems like nobody really wants anything and nobody cares. Is this
          a new problem?
        </li>
        <li>
          <a href='https://open.substack.com/pub/gonzalonunez/p/love-is-not-a-math-problem'>
            Love is not a math problem
          </a>
          : On the hyper-optimization of love and why commitment is underrated.
        </li>
        <li>
          <a href='https://open.substack.com/pub/gonzalonunez/p/how-to-build-a-worldview'>
            How to build a worldview
          </a>
          : A pattern language for understanding the world and my place in it.
        </li>
        <li>
          <a href='https://open.substack.com/pub/gonzalonunez/p/the-art-of-masculinity'>
            The Art of Masculinity
          </a>
          : Poking at the feelings and poetry of literature's macho men.
        </li>
      </ul>
    </Article>
  );
}
