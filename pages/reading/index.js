import Article from '../../components/Article';

function ReadingItem(props) {
  return (
    <li key={props.item.href}>
      <a className='select-none' href={props.item.href} target='_blank'>
        {props.item.title}
      </a>
      <div className='prose text-xs text-neutral-400 mt-1'>
        <b>{props.item.subtitle && `${props.item.subtitle}`}</b>
        <b>{props.item.subtitle && props.item.details && ` · `}</b>
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
          'Ignoring Nietzsche is a mistake. Disregard popular misconceptions about him while also discounting his later work. “Each of us can discover a different Nietzsche to admire and/or detest.” — Shelley Frisch.',
        href: 'https://www.amazon.com/stores/author/B000APYT8O/allbooks'
      },
      {
        title: 'Nietzsche: A Philosophical Biography',
        subtitle: 'Rüdiger Safranski',
        details:
          "Highly recommend. Extremely easy to read and covers all of Nietzsche's work in the context of his life. A fantastic supplement to the primary sources.",
        href: 'https://www.amazon.com/Nietzsche-Philosophical-Biography-R%C3%BCdiger-Safranski/dp/0393323803/'
      },
      {
        title: 'The Human Condition',
        subtitle: 'Hannah Arendt',
        details:
          'Prescient book, written in 1958 but diagnoses a lot of "modern" problems. Characteristically Arendtian, but easier to contextualize than some of her other work. Helpful introduction to Ancient Greek philosophy.',
        href: 'https://www.amazon.com/Human-Condition-2nd-Hannah-Arendt/dp/0226025985'
      },
      {
        title: 'The Machiavellians: Defenders of Freedom',
        subtitle: 'James Burnham',
        details:
          'A book you cannot unsee, permanently changes the way you analyze and view politics.',
        href: 'https://www.amazon.com/Machiavellians-Defenders-Freedom-James-Burnham/dp/1839013958'
      },
      {
        title: 'Essays and Aphorisms',
        subtitle: 'Arthur Schopenhauer',
        details:
          'A great collection of essays. Stylistically brilliant with tons of memorable one-liners.',
        href: 'https://www.amazon.com/Essays-Aphorisms-Penguin-Classics-Schopenhauer/dp/0140442278'
      },
      {
        title: 'In the Presence of Schopenhauer',
        subtitle: 'Michel Houellebecq',
        details:
          "In Schopenhauer, Houellebecq found a companion. This short book shines a light on Houellebecq's worldview. Crucial if you want to understand Houellebecq.",
        href: 'https://www.amazon.com/Presence-Schopenhauer-Michel-Houellebecq/dp/1509543252'
      },
      {
        title: 'The End of History and the Last Man',
        subtitle: 'Francis Fukuyama',
        details:
          'Fukuyama was right. Strong and widely misunderstood thesis, more relevant with each passing day. Written for the modern reader, weaves a beautiful tapestry of history and philosophy. Also a great introduction to Hegel and supplement to Nietzsche.',
        href: 'https://www.amazon.com/End-History-Last-Man/dp/0743284550'
      }
    ],
    fiction: [
      {
        title: 'The Elementary Particles',
        subtitle: 'Michel Houellebecq',
        details:
          'My favorite from Houellebecq thus far. Warning: graphic and gruesome at times, but another instance of an author presciently diagnosing some of our modern ills.',
        href: 'https://www.amazon.com/Elementary-Particles-Michel-Houellebecq/dp/0375727019'
      },
      {
        title: 'The Map and The Territory',
        subtitle: 'Michel Houellebecq',
        details:
          "The most palatable of Houellebecq's novels. Good introduction to Houellebecq, but not his best for probably the same reasons.",
        href: 'https://www.amazon.com/Map-Territory-Vintage-International/dp/0307946533'
      },
      {
        title: 'The Complete Short Stories',
        subtitle: 'Ernest Hemingway',
        details:
          'Hemingway at his best. Memorable stories include "The Snows of Kilimanjaro", "Che Te Dice La Patria?", "Today is Friday", and "The Short Happy Life of Francis Macomber".',
        href: 'https://www.amazon.com/Complete-Short-Stories-Ernest-Hemingway/dp/0684843323'
      },
      {
        title: 'The Sun Also Rises',
        subtitle: 'Ernest Hemingway',
        details:
          'Simple writing that reads as if you were watching a movie in your head. Good gateway drug if you want to get back into fiction.',
        href: 'https://www.amazon.com/Sun-Also-Rises-Vintage-Classics/dp/0593466349'
      },
      {
        title: 'The Brothers Karamazov',
        subtitle: 'Fyodor Dostoevsky',
        details:
          'After Nietzsche makes you mean, Dostoevsky will save you. Long and complex, a book that calls to be reread over the course of a lifetime.',
        href: 'https://www.amazon.com/Brothers-Karamazov-Novel-Parts-Epilogue/dp/0140449248'
      },
      {
        title:
          'Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values',
        subtitle: 'Robert Pirsig',
        details:
          "An enjoyable read. Another good gateway drug to get you back into fiction if that's what your looking for.",
        href: 'https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060839872'
      }
    ],
    nonfiction: [
      {
        title: 'Cuba',
        subtitle: 'Erna Fergusson',
        details:
          "Best book on Cuba that I have ever read. Shines a light on 1940s pre-revolutionary Cuba from a first-person perspective. The author sits down for a coffee with my grandfather. Tough to find a copy but I've linked to the Goodreads for those interested",
        href: 'https://www.goodreads.com/en/book/show/17234438-cuba'
      },
      {
        title: 'The Sugar King of Havana',
        subtitle: 'John Paul Rathbone',
        details:
          "Another great book on Cuba. It is every Cuban-American's dream to tell the story of the Revolution while weaving in some family history. Great insight on Julio Lobo, very much a live-player in the tragic Cuban drama.",
        href: 'https://www.amazon.com/Sugar-King-Havana-Julio-Tycoon/dp/0143119338'
      },
      {
        title: 'Leonardo da Vinci',
        subtitle: 'Walter Isaacson',
        details:
          'A memorable biography of a brilliant and heretical figure. So good that it prompted me to write an essay about it years after reading.',
        href: 'https://www.amazon.com/Leonardo-Vinci-Walter-Isaacson/dp/1501139169'
      },
      {
        title: 'Bolívar',
        subtitle: 'Marie Arana',
        details:
          'Fun read, does not shy away from the complex details of such a monumental figure. Doubles as a lesson in Latin American history.',
        href: 'https://www.amazon.com/Bolivar-Marie-Arana-audiobook/dp/B00DLJEO68'
      },
      {
        title: 'The Civilization of the Renaissance in Italy',
        subtitle: 'Jacob Burckhardt',
        details:
          'Fascinating look into some of the driving factors behind a Golden Age. I arrived here by way of Nietzsche, it explains some of the historical motivations behind certain aspects of his philosophy. Coined "the state as a work of art".',
        href: 'https://www.amazon.com/Civilization-Renaissance-Italy-Penguin-Classics/dp/014044534X'
      },
      {
        title: "Don't Tell Me I Can't",
        subtitle: 'Cole Summers',
        details:
          "You'll read it in an hour and will never forget it. Raw, concentrated optimism straight from the mind of a 14 year-old.",
        href: 'https://www.amazon.com/Dont-Tell-Cant-Ambitious-Homeschoolers/dp/B0B1HN84HL'
      },
      {
        title: 'The Timeless Way of Building',
        subtitle: 'Christopher Alexander',
        details:
          'Contains the secrets of the universe. A wonderful introduction into the world of a seminal and perenially underrated thinker. Worth buying despite being out of print.',
        href: 'https://www.amazon.com/Timeless-Way-Building-Christopher-Alexander/dp/0195024028'
      },
      {
        title: 'The War of Art',
        subtitle: 'Steven Pressfield',
        details:
          'The only "self-help" style book you\'ll find me recommending. Pressfield understands the fundamental nature of creativity.',
        href: 'https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026'
      },
      {
        title: 'A Moveable Feast',
        subtitle: 'Ernest Hemingway',
        details:
          "Allegedly a work of fiction but not really. A great look into Hemingway's time in Paris with fun anecdotes about Gertude Stein and F. Scott Fitzgerald.",
        href: 'https://www.amazon.com/Moveable-Feast-Restored-Ernest-Hemingway/dp/143918271X'
      }
    ],
    essays: [
      {
        title: 'The White Album',
        subtitle: 'Joan Didion',
        details:
          'I try to always have easy access to something by Didion. Makes you want to write. Not for everybody, but a staunch favorite of those for whom it is.',
        href: 'https://www.amazon.com/White-Album-Essays-Joan-Didion-ebook/dp/B072HMBLSM'
      },
      {
        title: 'Slouching Towards Bethlehem',
        subtitle: 'Joan Didion',
        href: 'https://www.amazon.com/Slouching-Towards-Bethlehem-Essays-Classics/dp/0374531382'
      },
      {
        title: 'Quit Your Job',
        subtitle: 'Wolf Tivy',
        href: 'https://www.palladiummag.com/2022/01/06/quit-your-job/'
      },
      {
        title: 'Start With Creation',
        subtitle: 'Simon Sarris',
        href: 'https://open.substack.com/pub/simonsarris/p/start-with-creation'
      },
      {
        title: 'In Praise of the Gods',
        subtitle: 'Simon Sarris',
        href: 'https://open.substack.com/pub/simonsarris/p/in-praise-of-the-gods'
      },
      {
        title: 'The Most Precious Resource is Agency',
        subtitle: 'Simon Sarris',
        href: 'https://open.substack.com/pub/simonsarris/p/the-most-precious-resource-is-agency'
      },
      {
        title: 'Adult Fantasy of Youth',
        subtitle: 'Marilyn Simon',
        details:
          'Beautiful and delicate analysis of a complex film. Motivated me to watch it, which is now one of my favorites.',
        href: 'https://quillette.com/2022/08/18/adult-fantasy-of-youth/'
      },
      {
        title: 'How an 18th Century Philosopher Helped Solve My Midlife Crisis',
        subtitle: 'Alison Gopnik',
        href: 'https://www.theatlantic.com/magazine/archive/2015/10/how-david-hume-helped-me-solve-my-midlife-crisis/403195/'
      },
      {
        title: 'La Patria a flor de piel',
        subtitle: 'IMarie Nuñez',
        details:
          'A piece of family history written by my aunt, from the perspective of my grandmother.',
        href: 'https://cronicasdeimarie.com/relatos-cuentos/la-patria-a-flor-de-piel/'
      },
      {
        title: 'This is Water',
        subtitle: 'David Foster Wallace',
        href: 'https://fs.blog/david-foster-wallace-this-is-water/'
      },
      {
        title: 'From Mises to Carlyle',
        subtitle: 'Mencius Moldbug',
        details:
          'Critical to understanding Moldbug, the closest person we have to a philosopher-king today. Strong diagnosis of some of the failures of modern politics. Just like Nietzsche, ignoring Moldbug is a mistake.',
        href: 'https://www.unqualified-reservations.org/2010/02/from-mises-to-carlyle-my-sick-journey/'
      },
      {
        title: 'A World Split Apart',
        subtitle: 'Aleksandr Solzhenitsyn',
        href: 'https://www.solzhenitsyncenter.org/a-world-split-apart'
      },
      {
        title: 'The End of History',
        subtitle: 'Francis Fukuyama',
        details:
          'Worth reading the 1989 essay before diving into the book, which takes the essay and then proceeds to blow it out of the water.',
        href: 'https://pages.ucsd.edu/~bslantchev/courses/pdf/Fukuyama%20-%20End%20of%20History.pdf'
      }
    ],
    poetry: [
      {
        title: 'Burning in Water, Drowning in Flame',
        subtitle: 'Charles Bukowski',
        details:
          'Turns out you can just buy a book of poems and sit for 30 minutes straight reading poem after poem, one after the other.',
        href: 'https://www.amazon.com/Burning-Water-Drowning-Charles-Bukowski/dp/087685191X'
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
