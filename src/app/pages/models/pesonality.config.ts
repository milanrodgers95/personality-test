import { Questionnaire } from './pesonality.models';

export const QuestionMockup: Questionnaire[] = [
  {
    id: 1,
    question:
      'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    answers: [
      {
        name: 'Don’t dare to interrupt them',
        score: 7,
        selected: false
      },
      {
        name: 'Think it’s more important to give them some of your time; work can wait',
        score: 3,
        selected: false
      },
      {
        name: 'Listen, but with only with half an ear',
        score: 4,
        selected: false
      },
      {
        name: 'Interrupt and explain that you are really busy at the moment',
        score: 8,
        selected: false
      },
    ],
  },
  {
    id: 2,
    question:
      'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    answers: [
      {
        name: 'Look at your watch every two minutes',
        score: 3,
        selected: false
      },
      {
        name: 'Bubble with inner anger, but keep quiet',
        score: 2,
        selected: false
      },
      {
        name: 'Explain to other equally impatient people in the room that the doctor is always running late',
        score: 6,
        selected: false
      },
      {
        name: 'Complain in a loud voice, while tapping your foot impatiently',
        score: 8,
        selected: false
      },
    ],
  },
  {
    id: 3,
    question:
      'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
    answers: [
      {
        name: 'Don’t dare contradict them',
        score: 6,
        selected: false
      },
      {
        name: 'Think that they are obviously right',
        score: 1,
        selected: false
      },
      {
        name: 'Defend your own point of view, tooth and nail',
        score: 7,
        selected: false
      },
      {
        name: 'Continuously interrupt your colleague',
        score: 6,
        selected: false
      },
    ],
  },
  {
    id: 4,
    question: 'You are taking part in a guided tour of a museum. You:',
    answers: [
      {
        name: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
        score: 3,
        selected: false
      },
      {
        name: 'Follow the group without question',
        score: 6,
        selected: false
      },
      {
        name: 'Make sure that everyone is able to hear properly',
        score: 4,
        selected: false
      },
    ],
  },
];
