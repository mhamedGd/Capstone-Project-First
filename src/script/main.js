/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const SPEAKERS_INFORMATION = [
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.1',
    info: 'Head of speaking department on mars',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.2',
    info: 'Head of speaking department in gargantua',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Bob',
    info: 'King of the universe',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.4',
    info: 'a friend of bob',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.5',
    info: 'Head of speaking department of the lizard people',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.6',
    info: 'Head of speaking department in the outer universe',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.7',
    info: 'Head of speaking department in andromeda galaxy',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.8',
    info: 'Head of speaking department in mariana trench',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.9',
    info: 'Head of speaking department on the sun',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
  {
    image: './rsc/Images/avatar.jpg',
    name: 'Speaker No.10',
    info: 'Head of speaking department on pluto',
    paragraph: 'This is a paragraph to prove that I did say something about something blah blah blah blah blah',
  },
];

function CreateSpeaker(SPEAKER_INFO_OBJECT) {
  const SPEAKER_MAIN = document.createElement('li');
  SPEAKER_MAIN.classList.add('flex');
  SPEAKER_MAIN.classList.add('gap-x-5');
  SPEAKER_MAIN.classList.add('m-0');
  SPEAKER_MAIN.classList.add('h-32');

  const IMAGE_DIV = document.createElement('div');
  IMAGE_DIV.classList.add('speakers-image');
  IMAGE_DIV.classList.add('flex-[1.2]');
  IMAGE_DIV.classList.add('flex');
  IMAGE_DIV.classList.add('justify-center');
  IMAGE_DIV.classList.add('items-center');
  IMAGE_DIV.classList.add('max-w-[150px]');
  IMAGE_DIV.classList.add('max-h-[150px]');
  SPEAKER_MAIN.appendChild(IMAGE_DIV);

  const IMAGE = document.createElement('img');
  IMAGE.src = SPEAKER_INFO_OBJECT.image;
  IMAGE.classList.add('min-w-[100px]');
  IMAGE.classList.add('min-h-[100px]');
  IMAGE.classList.add('max-w-[300px]');
  IMAGE.classList.add('max-h-[300px]');
  IMAGE.width = '60%';
  IMAGE.height = '60%';
  IMAGE_DIV.appendChild(IMAGE);

  const INFO_DIV = document.createElement('div');
  INFO_DIV.classList.add('flex-[2]');
  SPEAKER_MAIN.appendChild(INFO_DIV);

  const INFO_DIV_DIV = document.createElement('div');
  INFO_DIV.appendChild(INFO_DIV_DIV);

  const SPEAKER_NAME = document.createElement('h3');
  SPEAKER_NAME.classList.add('text-2xl');
  SPEAKER_NAME.classList.add('font-bold');
  SPEAKER_NAME.textContent = SPEAKER_INFO_OBJECT.name;
  INFO_DIV_DIV.appendChild(SPEAKER_NAME);

  const SPEAKER_INFO = document.createElement('p');
  SPEAKER_INFO.classList.add('text-orange-400');
  SPEAKER_INFO.classList.add('text-xl');
  SPEAKER_INFO.classList.add('mt-2.5');
  SPEAKER_INFO.textContent = SPEAKER_INFO_OBJECT.info;
  INFO_DIV_DIV.appendChild(SPEAKER_INFO);

  const LINE = document.createElement('hr');
  LINE.classList.add('w-8');
  LINE.classList.add('mt-3');
  LINE.classList.add('border-b-1');
  LINE.classList.add('border-black');
  INFO_DIV_DIV.appendChild(LINE);

  const SPEAKER_PARAGRAPH = document.createElement('p');
  SPEAKER_PARAGRAPH.classList.add('mt-3');
  SPEAKER_PARAGRAPH.textContent = SPEAKER_INFO_OBJECT.paragraph;
  INFO_DIV_DIV.appendChild(SPEAKER_PARAGRAPH);

  document.querySelector('.speakers').appendChild(SPEAKER_MAIN);
}

for (let i = 0; i < 9; i += 1) {
  CreateSpeaker(SPEAKERS_INFORMATION[i]);
}
