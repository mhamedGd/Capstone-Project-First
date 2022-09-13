/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

function CreateSpeaker() {
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
  SPEAKER_MAIN.appendChild(IMAGE_DIV);

  const IMAGE = document.createElement('img');
  IMAGE.src = './rsc/Images/avatar.jpg';
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
  SPEAKER_NAME.textContent = 'Speaker';
  INFO_DIV_DIV.appendChild(SPEAKER_NAME);

  const SPEAKER_INFO = document.createElement('p');
  SPEAKER_INFO.classList.add('text-orange-400');
  SPEAKER_INFO.classList.add('text-xl');
  SPEAKER_INFO.classList.add('mt-2.5');
  SPEAKER_INFO.textContent = 'This is orange';
  INFO_DIV_DIV.appendChild(SPEAKER_INFO);

  const LINE = document.createElement('hr');
  LINE.classList.add('w-8');
  LINE.classList.add('mt-3');
  LINE.classList.add('border-b-1');
  LINE.classList.add('border-black');
  INFO_DIV_DIV.appendChild(LINE);

  const SPEAKER_PARAGRAPH = document.createElement('p');
  SPEAKER_PARAGRAPH.classList.add('mt-3');
  SPEAKER_PARAGRAPH.textContent = 'Listen to the speakers from various countries about the messages of sharing and opening.';
  INFO_DIV_DIV.appendChild(SPEAKER_PARAGRAPH);

  document.querySelector('.speakers').appendChild(SPEAKER_MAIN);
}

CreateSpeaker();