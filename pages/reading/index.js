import { useState } from 'react';
import Article from '../../components/Article';

function ReadingItem(props) {
  return (
    <li>
      <a className='select-none' href='https://amazon.com' target='_blank'>
        {props.item.title}
      </a>
      <div className='prose text-xs text-neutral-400 mt-1'>
        {props.item.subtitle && `${props.item.subtitle}`}
        {props.item.subtitle && props.item.details && ` · `}
        {props.item.details}
      </div>
    </li>
  );
}

function ReadingItems(props) {
  return (
    <div>
      <h4 className='select-none'>{props.title}</h4>
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
        title: 'Nietzsche (Everything)',
        details:
          'Ignoring Nietzsche is a mistake. Disregard popular misconceptions about him while also discounting his later work. “Each of us can discover a different Nietzsche to admire and/or detest.” — Shelley Frisch.'
      },
      {
        title: 'Nietzsche: A Philosophical Biography',
        subtitle: 'Rüdiger Safranski',
        details:
          "Highly recommend. Extremely easy to read and covers all of Nietzsche's work in the context of his life. A fantastic supplement to the primary sources."
      },
      {
        title: 'The Human Condition',
        subtitle: 'Hannah Arendt',
        details:
          'Prescient book, written in 1958 but diagnoses a lot of "modern" problems. Characteristically Arendtian, but easier to contextualize than some of her other work. Helpful introduction to Ancient Greek philosophy.'
      },
      {
        title: 'The Machiavellians',
        subtitle: 'James Burnham',
        details:
          'A book you cannot unsee, changes the way you view politics forever.'
      },
      {
        title: 'Essays and Aphorisms',
        subtitle: 'Schopenhauer'
      },
      {
        title: 'In the Presence of Schopenhauer',
        subtitle: 'Michel Houellebecq',
        details:
          "In Schopenhauer, Houellebecq found a companion. This short book shines a light on Houellebecq's worldview. Crucial if you want to understand Houellebecq."
      },
      {
        title: 'The End of History',
        subtitle: 'Francis Fukuyama',
        details:
          'Fukuyama was right. Strong and widely misunderstood thesis, more relevant with each passing day. Written for the modern reader, weaves a beautiful tapestry of history and philosophy. Also a great introduction to Hegel and supplement to Nietzsche.'
      }
    ],
    fiction: [
      {
        title: 'The Elementary Particles',
        subtitle: 'Michel Houellebecq',
        details:
          'My favorite from Houellebecq thus far. Warning: graphic and gruesome, but another instance of an author presciently diagnosing some of our modern ills.'
      },
      {
        title: 'The Map and The Territory',
        subtitle: 'Michel Houellebecq',
        details:
          "The most palatable of Houellebecq's novels. Good introduction to Houellebecq, but not his best for probably the same reasons."
      },
      {
        title: 'The Complete Short Stories',
        subtitle: 'Ernest Hemingway',
        details:
          'Hemingway at his best. Memorable stories include "The Snows of Kilimanjaro", "Che Te Dice La Patria?", "Today is Friday", and "The Short Happy Life of Francis Macomber".'
      },
      {
        title: 'The Sun Also Rises',
        subtitle: 'Ernest Hemingway',
        details:
          'Simple writing that reads as if you were watching a movie in your head. Good gateway drug if you want to get back into fiction.'
      },
      {
        title: 'The Brothers Karamazov',
        subtitle: 'Dostoevsky',
        details:
          'Once Nietzsche make you mean, Dostoevsky will save you. Long and complex, a book that calls to be reread over the course of a lifetime.'
      },
      {
        title: 'Zen and the Art of Motorcycle Maintenance',
        subtitle: 'Robert Pirsig'
      }
    ],
    nonfiction: [
      {
        title: 'Cuba',
        subtitle: 'Erna Fergusson',
        details:
          'Best book on Cuba that I have ever read. Shines a light on 1940s pre-revolutionary Cuba from a first-person perspective. The author sits down for a coffee with my grandfather.'
      },
      {
        title: 'The Sugar King of Havana',
        subtitle: 'John Paul Rathbone',
        details:
          "Another great book on Cuba. It is every Cuban-American's dream to tell the story of the Revolution while weaving in some family history. Great insight on Julio Lobo, very much a live-player in all of the Cuban drama."
      },
      {
        title: 'Leonardo da Vinci',
        subtitle: 'Walter Isaacson'
      },
      {
        title: 'Bolívar',
        subtitle: 'Marie Arana',
        details:
          'Fun read, does not shy away from the complex details of such a monumental figure. Doubles as a lesson in Latin American history.'
      },
      {
        title: 'The Civilization of the Italian Renaissance',
        subtitle: 'Jacob Burckhardt',
        details:
          'Fascinating look into some of the driving factors behind a Golden Age. I arrived here by way of Nietzsche, it explains some of the historical motivations behind certain aspects of his philosophy.'
      },
      {
        title: "Don't Tell Me I Can't",
        subtitle: 'Cole Summers',
        details:
          "You'll read it in an hour and will never forget it. Raw, concentrated optimism and hope in a better future from the mind of a 14 year-old."
      },
      {
        title: 'The Timeless Way of Building',
        subtitle: 'Christopher Alexander',
        details:
          'Contains the secrets of the universe. A wonderful introduction into the world of a seminal and perenially underrated thinker.'
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
        subtitle: 'Joan Didion',
        details:
          'I try to always have easy access to something by Didion. Makes you want to write. Not for everybody, but a staunch favorite of those for whom it is.'
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
        subtitle: 'Marilyn Simon',
        details:
          'Motivated me to watch the film, which is now one of my favorites. Beautiful and delicate analysis of a complex film.'
      },
      {
        title: 'How an 18th Century Philosopher Helped Solve My Midlife Crisis',
        subtitle: 'Alison Gopnik'
      },
      {
        title: 'La Patria a flor de piel',
        subtitle: 'IMarie Nuñez',
        details:
          'A piece of family history written by my aunt, from the perspective of my grandmother.'
      },
      {
        title: 'This is Water',
        subtitle: 'David Foster Wallace'
      },
      {
        title: 'From Mises to Carlyle',
        subtitle: 'Mencius Moldbug',
        details:
          'Critical to understanding Moldbug, the closest person we have to a philosopher-king today. Strong diagnosis of some of the failures of modern politics. Just like Nietzsche, ignoring Moldbug is a mistake.'
      },
      {
        title: 'A World Split Apart',
        subtitle: 'Aleksandr Solzhenitsyn'
      },
      {
        title: 'The End of History (Essay)',
        subtitle: 'Francis Fukuyama',
        details:
          'Worth reading before diving into the book, which takes the essay and then proceeds to blow it out of the water.'
      }
    ],
    poetry: [
      {
        title: 'Burning in Water, Drowning in Flame',
        subtitle: 'Charles Bukowski',
        details:
          'Turns out you can just buy a book of poems and read it front-to-back as if it were a novel.'
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
