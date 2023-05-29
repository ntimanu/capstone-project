const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const speakers = [
  {
    name: 'Eng Michel Stevens.',
    description: 'Structural engineer',
    expanded: 'Structural disgne in CS construction company, design buildings and bridges. Work in the aerospace industry, designing jetliners and space stations.',
    image: 'img/profile1.jpeg',
  },

  {
    name: 'Eng Steve Kennedy.',
    description: 'Electrical Engineer.',
    expanded: 'A civil engineer is an engineer with expertise in infrastructure construction and operation. Civil engineers participate in construction projects like highways, railroads, and airports.',
    image: 'img/profile2.jpeg',
  },

  {
    name: 'Ruth Bush.',
    description: 'Architectural Engineer',
    expanded: 'Architecture Engineer for the design of buildings and structures with an emphasis on aesthetics. Architectural engineering combines building design and aesthetics with a focus on sustainable construction and functionality..',
    image: 'img/profile3.jpeg',
  },

  {
    name: 'Clair Williams.',
    description: 'Construction engineer.',
    expanded: ' Construction engineers manage and deliver residential and/or construction projects. They plan construction activities, supervise structural elements, and perform building inspections upon project completion..',
    image: 'img/profile4.jpeg',
  },

  {
    name: 'Anna Faris.',
    description: 'Earthquake Engineer',
    expanded: ' Earthquake engineering is a specialised field in geotechnical engineering. It is a small niche that provides opportunities in a limited number of countries susceptible to earthquakes.',
    image: 'img/profile5.jpeg',
  },

  {
    name: 'Steve Bruce.',
    description: 'Civil Engineer.',
    expanded: ' A civil engineer is an engineer with expertise in infrastructure construction and operation. Civil engineers participate in construction projects like highways, railroads, and airports.',
    image: 'img/profile6.jpeg',
  },
];

const mainSpeakers = document.querySelector('.main-speakers');
mainSpeakers.style.alignItems = 'center';
mainSpeakers.style.display = 'grid';

const descriptionStyle = {
  position: 'relative',
  marginLeft: '10px',
  marginBottom: '16px',
  fontFamily: 'Lato',
  fontSize: '0.8rem',
};


const chessStyle = {
  position: 'absolute',
  source: 'icons/checkers.svg',
  width: '65px',
  zIndex: '1',
  top: '-15px',
  left: '31px',
};

const speakersImageStyle = {
  width: '120px',
  marginLeft: '40px',
  zIndex: '1',
  position: 'relative',
};

function gridify() {
  if (window.innerWidth >= 768) {
    mainSpeakers.style.gridTemplateColumns = '1fr 1fr';
  } else if (window.innerWidth <= 768) {
    mainSpeakers.style.gridTemplateColumns = '1fr';
  }
}

const body = document.querySelector('body');
body.addEventListener('click', gridify);

const inc = 1;
function main(count) {
  for (let i = 0; i < count; i += inc) {
    const overAll = document.createElement('div');
    overAll.style.display = 'flex';
    overAll.style.alignItems = 'center';
    mainSpeakers.appendChild(overAll);

    const pictureWrapper = document.createElement('div');
    pictureWrapper.style.position = 'relative';
    pictureWrapper.style.marginBottom = '30px';
    overAll.appendChild(pictureWrapper);

    // The info about the speaker
    const descriptionCon = document.createElement('div');
    descriptionCon.style.marginBottom = '30px';
    overAll.appendChild(descriptionCon);

    const chess = document.createElement('img');
    chess.setAttribute('class', 'chess');
    chess.src = chessStyle.source;
    Object.assign(chess.style, chessStyle);
    pictureWrapper.appendChild(chess);

    const speaker = document.createElement('img');
    speaker.src = speakers[i].image;
    Object.assign(speaker.style, speakersImageStyle);
    pictureWrapper.appendChild(speaker);

    const name = document.createElement('h3');
    Object.assign(name.style, descriptionStyle);
    name.innerHTML = speakers[i].name;
    name.style.fontWeight = '600';
    descriptionCon.appendChild(name);

    const description = document.createElement('h6');
    Object.assign(description.style, descriptionStyle);
    description.style.color = '#ec5242';
    description.style.marginTop = '-10px';
    description.style.fontWeight = '600';
    description.innerHTML = speakers[i].description;
    descriptionCon.appendChild(description);

    const expand = document.createElement('h6');
    Object.assign(expand.style, descriptionStyle);
    expand.style.color = '#272a31';
    expand.innerHTML = speakers[i].expanded;
    descriptionCon.appendChild(expand);
  }
}

const seemore = document.querySelector('#seemore');
seemore.addEventListener('click', () => {
  mainSpeakers.innerHTML = '';
  seemore.style.opacity = '0';
  main(6);
});

if (window.innerWidth >= 768) {
  window.onload = main(6);
  mainSpeakers.style.gridTemplateColumns = '1fr 1fr';
} else {
  window.onload = main(2);
}