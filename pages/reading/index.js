import Article from '../../components/Article';

function ReadingItem(props) {
  return (
    <li>
      <div className=''>{props.item.title}</div>
      <div className='text-xs text-neutral-400'>{props.item.subtitle}</div>
    </li>
  );
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
      {
        title: 'Nietzche (Everything)'
      },
      {
        title: 'Nietzche',
        subtitle: 'Rüdiger Safranski'
      },
      {
        title: 'The Human Condition',
        subtitle: 'Hannah Arendt'
      },
      {
        title: 'The Machiavellians',
        subtitle: 'James Burnham'
      },
      {
        title: 'Essays and Aphorisms',
        subtitle: 'Schopenhauer'
      },
      {
        title: 'In the Presence of Schopenhauer',
        subtitle: 'Michel Houellebecq'
      },
      {
        title: 'The End of History',
        subtitle: 'Francis Fukuyama'
      }
    ],
    fiction: [
      {
        title: 'The Elementary Particles',
        subtitle: 'Michel Houellebecq'
      },
      {
        title: 'The Map and The Territory',
        subtitle: 'Michel Houellebecq'
      },
      {
        title: 'The Complete Short Stories (Finca Vigía)',
        subtitle: 'Ernest Hemingway'
      },
      {
        title: 'The Sun Also Rises',
        subtitle: 'Ernest Hemingway'
      },
      {
        title: 'The Brothers Karamazov',
        subtitle: 'Dostoevsky'
      },
      {
        title: 'Zen and the Art of Motorcycle Maintenance',
        subtitle: 'Robert Pirsig'
      }
    ],
    nonfiction: [
      {
        title: 'Cuba',
        subtitle: 'Erna Fergusson'
      },
      {
        title: 'The Sugar King of Havana',
        subtitle: 'John Paul Rathbone'
      },
      {
        title: 'Leonardo da Vinci',
        subtitle: 'Walter Isaacson'
      },
      {
        title: 'Bolívar',
        subtitle: 'Marie Arana'
      },
      {
        title: "Don't Tell Me I Can't",
        subtitle: 'Cole Summers'
      },
      {
        title: 'The Timeless Way of Building',
        subtitle: 'Christopher Alexander'
      },
      {
        title: 'The War of Art',
        subtitle: 'Steven Pressfield'
      },
      {
        title: 'A Moveable Feast',
        subtitle: 'Ernest Hemingway'
      }
    ],
    essays: [
      {
        title: 'The White Album',
        subtitle: 'Joan Didion'
      },
      {
        title: 'Slouching Towards Bethlehem',
        subtitle: 'Joan Didion'
      },
      {
        title: 'Quit Your Job',
        subtitle: 'Wolf Tivy'
      },
      {
        title: 'Start With Creation',
        subtitle: 'Simon Sarris'
      },
      {
        title: 'In Praise of the Gods',
        subtitle: 'Simon Sarris'
      },
      {
        title: 'The Most Precious Resource is Agency',
        subtitle: 'Simon Sarris'
      },
      {
        title: 'Adult Fantasy of Youth',
        subtitle: 'Marilyn Simon'
      },
      {
        title: 'How an 18th Century Philosopher Helped Solve My Midlife Crisis',
        subtitle: 'Alison Gopnik'
      },
      {
        title: 'La Patria a flor de piel',
        subtitle: 'IMarie Nuñez'
      },
      {
        title: 'This is Water',
        subtitle: 'David Foster Wallace'
      },
      {
        title: 'From Mises to Carlyle',
        subtitle: 'Mencius Moldbug'
      },
      {
        title: 'A World Split Apart',
        subtitle: 'Aleksandr Solzhenitsyn'
      }
    ],
    poetry: [
      {
        title: 'Burning in Water, Drowning in Flame',
        subtitle: 'Charles Bukowski'
      }
    ]
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
