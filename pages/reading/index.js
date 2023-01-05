import Article from '../../components/Article';

function ReadingItem(props) {
  return <li>{props.item}</li>;
}

function ReadingItems(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <ul>
        {props.items.map(item => (
          <ReadingItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function Reading() {
  const content = {
    philosophy: [
      'Nietzche (Everything)',
      'Nietzsche (Rüdiger Safranski)',
      'The Human Condition (Hannah Arendt)',
      'The Machiavellians (James Burnham)',
      'Essays and Aphorisms (Schopenhauer)',
      'In the Presence of Schopenhauer (Michel Houellebecq)',
      'The End of History (Francis Fukuyama)'
    ],
    fiction: [
      'The Elementary Particles (Michel Houellebecq)',
      'The Map and The Territory (Michel Houellebecq)',
      'The Complete Short Stories of Ernest Hemingway (Ernest Hemingway)',
      'The Sun Also Rises (Ernest Hemingway)',
      'A Moveable Feast (Ernest Hemingway)'
    ],
    nonfiction: [
      'Cuba (Erna Fergusson)',
      'The Sugar King of Havana (John Paul Rathbone)',
      'Leonardo da Vinci (Isaacson)',
      "Don't Tell Me I Can't (Cole Summers)",
      'The Timeless Way of Building (Christopher Alexander)',
      'The War of Art (Steven Pressfield)'
    ],
    essays: [
      'The White Album (Joan Didion)',
      'Slouching Towards Bethlehem  (Joan Didion)',
      'Quit Your Job (Wolf Tivy)',
      'Start With Creation (Simon Sarris)',
      'In Praise of the Gods (Simon Sarris)',
      'The Most Precious Resource is Agency (Simon Sarris)',
      'Adult Fantasy of Youth (Marilyn Simon)',
      'How an 18th Century Philosopher Helped Solve My Midlife Crisis (Alison Gopnik)',
      'La Patria a flor de piel (IMarie Núñez)',
      'This is Water (David Foster Wallace)',
      'From Mises to Carlyle (Mencius Moldbug)',
      'A World Split Apart (Solzhenitsyn)'
    ],
    poetry: ['Burning in Water, Drowning in Flame (Charles Bukowski)']
  };
  return (
    <Article title='Reading'>
      <p>
        A few of my favorite authors, books, essays and/or collected works that
        I have read either in print or on the internet. You can find my Substack
        recommendations over at{' '}
        <a href='https://gonzalonunez.substack.com' target='_blank'>
          A Work in Progress
        </a>
        .
      </p>
      <ReadingItems
        title='Philosophy / Politics'
        items={content['philosophy']}
      />
      <ReadingItems title='Fiction' items={content['fiction']} />
      <ReadingItems title='Nonfiction' items={content['nonfiction']} />
      <ReadingItems title='Essays / Speeches' items={content['essays']} />
      <ReadingItems title='Poetry' items={content['poetry']} />
    </Article>
  );
}
