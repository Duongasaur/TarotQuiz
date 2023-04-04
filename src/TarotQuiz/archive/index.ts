// function* randomQuestions(
//   questions: Question[]
// ): Generator<RandomQuestion | undefined, string, string[]> {
//   console.log("sup", questions);
//   while (true) {
//     const filters: string[] = yield;
//     const checkForCard = (card: string) => filters.includes(card);
//     questions = questions.filter(({ cards }) => cards.some(checkForCard));
//     console.log("##########################", questions);

//     const questionsLength = questions
//       .map(({ variations: { length } }) => length)
//       .reduce((count, length) => count + length, 0);

//     // console.log(questions.length);
//     if (questionsLength === 0) {
//       return "DONE";
//     }

//     for (const { variations, cards } of questions) {
//       const randomIndex = Math.floor(Math.random() * variations.length);
//       const [question] = variations.splice(randomIndex, 1);
//       yield { question, cards };
//     }
//   }
// }

// export const QUESTIONS: Question[] = [
//   {
//     set: "The Ruler",
//     variations: [
//       "Do you have a clear vision of what you want to achieve in life?",
//       "Are you comfortable with taking calculated risks to achieve your goals?",
//       "Do you have a strong sense of discipline and control over your life?"
//     ],
//     cards: ["The Emperor", "The Hierophant", "Justice", "Temperance"]
//   },
//   {
//     set: "The Innovator",
//     variations: [
//       "Are you someone who is naturally curious and enjoys learning?",
//       "Do you enjoy experimenting and trying new things, even if they don't always work out?",
//       "Are you open-minded and willing to consider unconventional or alternative ideas?"
//     ],
//     cards: ["The Magician", "The Star", "The Tower", "The World"]
//   },
//   {
//     set: "The Rebel",
//     variations: [
//       "Are you someone who values personal freedom and independence?",
//       "Do you believe in standing up for your beliefs, even if it means going against the norm?",
//       "Are you comfortable with taking risks and exploring the unknown?"
//     ],
//     cards: ["The Fool", "Death", "The Devil", "The Hanged Man"]
//   },
//   {
//     set: "The Protector",
//     variations: [
//       "Are you someone who is loyal and committed to your loved ones?",
//       "Do you have a strong sense of empathy and compassion for others?",
//       "Are you someone who values security and stability?"
//     ],
//     cards: ["The Chariot", "Strength", "The Sun", "The Moon"]
//   },
//   {
//     set: "The Guide",
//     variations: [
//       "Do you enjoy helping others and making a difference in their lives?",
//       "Do you have a strong sense of purpose and meaning in your life?",
//       "Are you someone who values inner wisdom and intuition over external opinions and advice?"
//     ],
//     cards: ["The High Priestess", "The Hermit", "Judgement", "The Empress"]
//   },
//   {
//     set: "The Lover",
//     variations: [
//       "Do you enjoy expressing your emotions and feelings openly?",
//       "Do you place a high value on physical touch and affection?",
//       "Are you someone who values beauty and aesthetics in your surroundings?"
//     ],
//     cards: ["The Lovers", "Wheel of Fortune", "Justice", "The Hanged Man"]
//   },
//   {
//     set: "The Seeker",
//     variations: [
//       "Do you enjoy exploring your own spirituality or belief systems?",
//       "Are you comfortable with uncertainty and not knowing what the future holds?",
//       "Do you see life as a journey of discovery and growth?"
//     ],
//     cards: ["The Fool", "The Star", "The Tower", "The Moon"]
//   },
//   {
//     set: "The Transformer",
//     variations: [
//       "Are you someone who is willing to let go of past attachments or beliefs that no longer serve you?",
//       "Do you see change as an opportunity for growth and transformation?",
//       "Are you someone who values adaptability and flexibility?"
//     ],
//     cards: ["Death", "The Devil", "The World", "The Sun"]
//   },
//   {
//     set: "The Mentor",
//     variations: [
//       "Do you enjoy learning from others and expanding your knowledge?",
//       "Are you someone who is open to new perspectives and ideas?",
//       "Do you have a deep respect for the wisdom and knowledge of those who came before you?"
//     ],
//     cards: ["The Hierophant", "The Hermit", "The Emperor", "The Empress"]
//   },
//   {
//     set: " The Champion",
//     variations: [
//       "Do you have a strong sense of self-discipline and focus when working towards your goals?",
//       "Are you someone who values hard work and persistence over talent or luck?",
//       "Do you see challenges as opportunities to grow and become stronger?"
//     ],
//     cards: ["The Chariot", "Strength", "Judgement", "The Magician"]
//   },
//   {
//     set: " The Visionary",
//     variations: [
//       "Do you have a strong sense of purpose or mission in life?",
//       "Are you someone who values imagination and creativity in your personal or professional pursuits?",
//       "Do you believe that anything is possible if you can envision it clearly enough?"
//     ],
//     cards: [
//       "The High Priestess",
//       "The Lovers",
//       "Temperance",
//       "Wheel of Fortune"
//     ]
//   }
// ];

// SET 2

// export const QUESTIONS: Question[] = [
//     {
//       set: "The Ruler",
//       variations: [
//         "Do you enjoy taking charge and leading others?",
//         "Do you consider yourself organized and good at decision-making?",
//         "Do you prefer structure and order in your life?"
//       ],
//       cards: ["The Emperor", "The Hierophant", "Justice", "Temperance"]
//     },
//     {
//       set: "The Innovator",
//       variations: [
//         "Do you thrive on creativity and innovation?",
//         "Do you often think outside the box?",
//         "Are you an early adopter of new technology or trends?"
//       ],
//       cards: ["The Magician", "The Star", "The Tower", "The World"]
//     },
//     {
//       set: "The Rebel",
//       variations: [
//         "Do you often question authority and societal norms?",
//         "Do you seek out unconventional paths in life?",
//         "Are you drawn to rebellion and counterculture?"
//       ],
//       cards: ["The Fool", "Death", "The Devil", "The Hanged Man"]
//     },
//     {
//       set: "The Protector",
//       variations: [
//         "Do you prioritize the well-being of your loved ones?",
//         "Do you often go out of your way to help others?",
//         "Do you find comfort in routine and stability?"
//       ],
//       cards: ["The Chariot", "Strength", "The Sun", "The Moon"]
//     },
//     {
//       set: "The Guide",
//       variations: [
//         "Do people often seek your advice or guidance?",
//         "Are you drawn to meditation, mindfulness, or self-reflection?",
//         "Do you trust your intuition more than the opinions of others?"
//       ],
//       cards: ["The High Priestess", "The Hermit", "Judgement", "The Empress"]
//     },
//     {
//       set: "The Lover",
//       variations: [
//         "Do you express your love and appreciation openly?",
//         "Are you a hopeless romantic?",
//         "Do you enjoy creating beautiful spaces and experiences?"
//       ],
//       cards: ["The Lovers", "Wheel of Fortune", "Justice", "The Hanged Man"]
//     },
//     {
//       set: "The Seeker",
//       variations: [
//         "Are you always searching for deeper meaning in life?",
//         "Do you enjoy exploring new cultures and spiritual practices?",
//         "Do you embrace personal growth and self-discovery?"
//       ],
//       cards: ["The Fool", "The Star", "The Tower", "The Moon"]
//     },
//     {
//       set: "The Transformer",
//       variations: [
//         "Do you adapt easily to change?",
//         "Are you open to personal transformation and growth?",
//         "Do you believe in reinventing yourself and leaving the past behind?"
//       ],
//       cards: ["Death", "The Devil", "The World", "The Sun"]
//     },
//     {
//       set: "The Mentor",
//       variations: [
//         "Do you have a thirst for knowledge and wisdom?",
//         "Do you enjoy sharing your insights with others?",
//         "Do you value learning from the experiences of others?"
//       ],
//       cards: ["The Hierophant", "The Hermit", "The Emperor", "The Empress"]
//     },
//     {
//       set: "The Champion",
//       variations: [
//         "Do you stay focused on your goals, no matter the obstacles?",
//         "Do you believe in the power of hard work and perseverance?",
//         "Do you see setbacks as opportunities to learn and grow?"
//       ],
//       cards: ["The Chariot", "Strength", "Judgement", "The Magician"]
//     },
//     {
//       set: "The Visionary",
//       variations: [
//         "Do you often dream of a better future?",
//         "Do you believe in the power of visualization and manifestation?",
//         "Are you drawn to creative pursuits and self-expression?"
//       ],
//       cards: [
//         "The High Priestess",
//         "The Lovers",
//         "Temperance",
//         "Wheel of Fortune"
//       ]
//     }
//   ];

export {};
