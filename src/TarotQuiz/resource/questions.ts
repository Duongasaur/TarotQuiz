import { CARDS } from './cards';

export type Question = {
  set: string;
  variations: string[];
  cards: string[];
};

export const QUESTIONS: Question[] = [
  {
    set: 'Leadership',
    variations: [
      'Do you enjoy taking charge and leading others?',
      'Do you consider yourself organized and good at decision-making?',
    ],
    cards: ['The Emperor', 'The Chariot', 'Judgement'],
  },
  {
    set: 'Intuition',
    variations: [
      'Do you trust your gut feelings and intuition?',
      'Do you often find yourself knowing things without knowing how you know?',
    ],
    cards: ['The High Priestess', 'The Moon', 'The Empress'],
  },
  {
    set: 'Transformation',
    variations: [
      'Are you comfortable with change and personal growth?',
      'Do you see challenges as opportunities to transform and evolve?',
    ],
    cards: ['Death', 'The Tower', 'The World'],
  },
  {
    set: 'Spirituality',
    variations: [
      'Do you value spiritual growth and personal development?',
      'Are you drawn to explore the mysteries of life?',
    ],
    cards: ['The Hierophant', 'The Hermit', 'The Star'],
  },
  {
    set: 'Balance',
    variations: [
      'Do you strive for balance and harmony in your life?',
      'Do you believe that everything has its place and purpose?',
    ],
    cards: ['Justice', 'Temperance', 'The Wheel of Fortune'],
  },
  {
    set: 'Creativity',
    variations: [
      'Do you consider yourself creative and imaginative?',
      'Do you enjoy expressing yourself through art or other creative outlets?',
    ],
    cards: ['The Fool', 'The Magician', 'The Lovers'],
  },
  {
    set: 'Strength',
    variations: [
      'Do you have a strong sense of inner strength and resilience?',
      'Do you believe that courage comes from within?',
    ],
    cards: ['Strength', 'The Sun', 'The Hanged Man'],
  },
  {
    set: 'Wisdom',
    variations: [
      'Do you value wisdom and learning from life experiences?',
      'Are you drawn to the pursuit of knowledge and understanding?',
    ],
    cards: ['The Hermit', 'The Hierophant', 'The High Priestess'],
  },
  {
    set: 'Passion',
    variations: [
      'Do you live your life with passion and excitement?',
      'Are you motivated by your desires and ambitions?',
    ],
    cards: ['The Magician', 'The Lovers', 'The Chariot'],
  },
  {
    set: 'Perseverance',
    variations: [
      'Do you have the ability to persist in the face of adversity?',
      'Are you determined to overcome challenges and obstacles?',
    ],
    cards: ['Strength', 'The Emperor', 'The Hanged Man'],
  },
  {
    set: 'Change',
    variations: [
      'Do you embrace change and view it as a natural part of life?',
      'Are you able to let go of the past and move forward?',
    ],
    cards: ['Death', 'The Wheel of Fortune', 'The Tower'],
  },
  {
    set: 'Optimism',
    variations: [
      'Do you maintain a positive outlook on life?',
      'Do you believe in the power of hope and the potential for good in all situations?',
    ],
    cards: ['The Sun', 'The Star', 'The World'],
  },
  {
    set: 'Introspection',
    variations: [
      'Do you often spend time reflecting on your thoughts and emotions?',
      'Do you value self-awareness and personal growth?',
    ],
    cards: ['The Hermit', 'The Moon', 'Judgement'],
  },
  {
    set: 'Manifestation',
    variations: [
      'Do you believe in your ability to manifest your dreams and desires?',
      'Are you proactive in creating the life you want?',
    ],
    cards: ['The Magician', 'The Empress', 'The Fool'],
  },
];

export const SCORES = {
  [CARDS.THE_FOOL]: 0,
  [CARDS.THE_MAGICIAN]: 0,
  [CARDS.THE_HIGH_PRIESTESS]: 0,
  [CARDS.THE_EMPRESS]: 0,
  [CARDS.THE_EMPEROR]: 0,
  [CARDS.THE_HIEROPHANT]: 0,
  [CARDS.THE_LOVERS]: 0,
  [CARDS.THE_CHARIOT]: 0,
  [CARDS.STRENGTH]: 0,
  [CARDS.THE_HERMIT]: 0,
  [CARDS.WHEEL_OF_FORTUNE]: 0,
  [CARDS.JUSTICE]: 0,
  [CARDS.THE_HANGED_MAN]: 0,
  [CARDS.DEATH]: 0,
  [CARDS.TEMPERANCE]: 0,
  [CARDS.THE_DEVIL]: 0,
  [CARDS.THE_TOWER]: 0,
  [CARDS.THE_STAR]: 0,
  [CARDS.THE_MOON]: 0,
  [CARDS.THE_SUN]: 0,
  [CARDS.JUDGEMENT]: 0,
  [CARDS.THE_WORLD]: 0,
};
