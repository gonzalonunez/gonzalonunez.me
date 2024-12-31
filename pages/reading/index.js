import Article from '../../components/Article';
import { ListItems } from '../../components/ListItems';

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
          'A book you cannot unsee. Permanently changes the way you analyze and view politics.',
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
      },
      {
        title: 'Psychopolitics',
        subtitle: 'Byung-Chul Han',
        details:
          'An interesting little book, certainly one of the most thoughtful critiques of modernity that I have ever come across. Rhymes with Houellebecq in many ways.',
        href: 'https://a.co/d/0A35M9G',
        new: false
      },
      {
        title: 'Democracy: The God That Failed',
        subtitle: 'Hans-Hermann Hoppe',
        details:
          'Another world-shattering book, moreso than any other political work I\'ve ever read. Written in 2001, does not pose a challenge to the contemporary reader. Hoppe is the only person who\'s been right to say that "Fukuyama was wrong." This book may have the longest half-life of this entire list.',
        href: 'https://a.co/d/9ZRmlk8',
        new: true
      },
      {
        title: 'On Heroes, Hero-Worship, and the Heroic in History',
        subtitle: 'Thomas Carlyle',
        details:
          'If you enjoy Nietzsche, you will enjoy Carlyle. No matter what you think you know of "the great man theory of history", there are truths to be found here.',
        href: 'https://a.co/d/7hwGZwL',
        new: true
      }
    ],
    religion: [
      {
        title: 'Dominion',
        subtitle: 'Tom Holland',
        details:
          'It is impossible to read Dominion and not come out the other side a completely different person. Whether you are religious or not, this is an earth-shattering book and one that will surely be discussed for decades to come, maybe even centuries. Also, easy to read and very much written for the modern reader.',
        href: 'https://a.co/d/gsnxzUc',
        new: false
      },
      {
        title: 'Confessions',
        subtitle: 'Saint Augustine',
        details:
          'Somehow ten-times more relatable than I had originally anticipated. A beautiful text that should accompany every young Catholic, especially those who are accustomed to the modern habit of taking history for granted.',
        href: 'https://a.co/d/fDBP6vB',
        new: false
      },
      {
        title: 'All Desire is a Desire for Being',
        subtitle: 'René Girard (Cynthia L. Haven)',
        details:
          'Nietzsche will make you mean, Dostoevsky will save you, and then Girard will make it all real. By far the most impactful book of 2024 for me. I am not sure why I held off on Girard for so long, perhaps because I thought I already knew what I would find. No matter what you think you know of Girard, nothing will replace seeing for yourself exactly what it is that he had to say. Also, another instance where an author being a contemporary of ours helps with the overall accessibility of his work.',
        href: 'https://a.co/d/hohcOcc',
        new: true
      },
      {
        title: 'When These Things Begin: Conversations with Michel Treguer',
        subtitle: 'René Girard',
        details:
          "A really tremendous interview with a seminal thinker. One chapter is featured in Haven's book and here you'll find the rest of the interview. Serves as another great introduction to Girard, before moving on to his denser work.",
        href: 'https://a.co/d/9Kq9gPg',
        new: true
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
          "The most palatable of Houellebecq's novels and a very good introduction to his thinking. Touches on a wide variety of Houellebecqian themes.",
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
          'Nietzsche will make you mean and then Dostoevsky will save you. Long and complex, a book that calls to be reread over the course of a lifetime.',
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
        title: 'The Conquest of New Spain',
        subtitle: 'Bernal Díaz',
        details:
          "A gripping first-hand account of Cortes' conquest of the Aztec empire, perhaps the most incredible tale that history has to offer, by one of his own soldiers. Also the best primary source I have ever come across, and certainly the easiest to read as well.",
        href: 'https://a.co/d/f75VqQ0',
        new: false
      },
      {
        title: 'Cuba: A History',
        subtitle: 'Hugh Thomas',
        details:
          "Published in 1971 and absolutely massive in scope, Thomas starts from the English occupation of Havana in 1762 and ends with the Cuban Missile Crisis. A nuanced and neutral account anchored in a liberal historian's point of view, although Thomas' labor sympathies occasionally shine through. Serves as a great jumping off point into further research with its deep bibliography.",
        href: 'https://a.co/d/ch9a6cm',
        new: false
      },
      {
        title: 'Cuba',
        subtitle: 'Erna Fergusson',
        details:
          "Most enjoyable book on Cuba that I have ever read. Shines a light on 1940s pre-revolutionary Cuba from a first-person perspective. The author sits down for a coffee with my grandfather. Tough to find a copy but I've linked to the Goodreads for those interested.",
        href: 'https://www.goodreads.com/en/book/show/17234438-cuba'
      },
      {
        title: 'The Sugar King of Havana',
        subtitle: 'John Paul Rathbone',
        details:
          "Another great book on Cuba. It is every Cuban American's dream to tell the story of the Revolution while weaving in some family history. Rathbone executes masterfully. Great insight on Julio Lobo, very much a live-player in the tragic Cuban drama.",
        href: 'https://www.amazon.com/Sugar-King-Havana-Julio-Tycoon/dp/0143119338'
      },
      {
        title: 'Steve Jobs',
        subtitle: 'Walter Isaacson',
        details:
          "Do not make the same mistake that I did and think that you don't need to read this. Silicon Valley could really use another Jobs. This is Isaacson at his best.",
        href: 'https://a.co/d/3EacMqw',
        new: false
      },
      {
        title: 'Leonardo da Vinci',
        subtitle: 'Walter Isaacson',
        details:
          'A memorable biography of a brilliant and heretical figure. So good that years later it prompted me to write an essay.',
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
          'Fascinating look into some of the driving forces behind a Golden Age. I arrived here by way of Nietzsche, it explains some of the historical motivations behind certain aspects of his philosophy. Coined "the state as a work of art".',
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
          'Contains secrets of the universe. A wonderful introduction into the world of a seminal and perenially underrated thinker. Worth buying despite being out of print.',
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
      },
      {
        title: 'Res Gestae Divi Augusti',
        subtitle: 'Augustus (Alison E. Cooley)',
        details:
          'A neat window into the Ancient Roman culture + ethics through the mind of a great leader. Best preceded by Coulanges\' "The Ancient City", which provides great context for the text.',
        href: 'https://a.co/d/ewP3DvT',
        new: true
      },
      {
        title: 'The Ancient City',
        subtitle: 'Fustel De Coulanges',
        details:
          'An absolutely monumental work of anthropology. Somehow allows you to draw a line all of the way back to Ancient Greece and Rome while also showing you just how much of the ancient world is utterly alien to anyone alive today. If I could only take away a single lesson: the ancient Romans were right about ancestor worship.',
        href: 'https://a.co/d/4HS3khS',
        new: true
      }
    ],
    essays: [
      {
        title: 'The White Album',
        subtitle: 'Joan Didion',
        details:
          'I try to always have easy access to something by Didion. Makes you want to write.',
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
          'Beautiful and delicate analysis of a complex film. Motivated me to watch the movie and now it is one of my favorites.',
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
          'A piece of family history written by my aunt from the perspective of my grandmother.',
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
          'Critical to understanding Moldbug, the closest person we have to a philosopher-king today. Just like Nietzsche, ignoring Moldbug is a mistake.',
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
      },
      {
        title: 'Versos Sencillos',
        subtitle: 'Jose Martí',
        details:
          "A wonderful collection of poems from Cuba's most heroic figure. See also: Ismaelillo.",
        href: 'https://a.co/d/1FwRFbs',
        new: false
      }
    ]
  };
  return (
    <Article
      title='Reading'
      subtitle='Last updated on Sunday December 30, 2024'
    >
      <p>
        A list of my favorite authors, books, essays, and collected works. The
        overwhelming majority of what I read does not make it onto this list.
        Updated yearly, new entries marked in green{' '}
        <span className='text-zinc-400'>[</span>
        &nbsp;
        <span className='align-text-middle text-green-500'>•</span>&nbsp;
        <span className='text-zinc-400'>]</span>
      </p>
      <ListItems title='Philosophy / Politics' items={content['philosophy']} />
      <ListItems title='Religion' items={content['religion']} />
      <ListItems title='Fiction' items={content['fiction']} />
      <ListItems title='Nonfiction' items={content['nonfiction']} />
      <ListItems title='Essays / Speeches' items={content['essays']} />
      <ListItems title='Poetry' items={content['poetry']} />
    </Article>
  );
}
