const sideNav = document.querySelector('.open');
const hamburgerButton = document.querySelector('.hamburger-icon-container');
const closeButton = document.querySelector('.side-nav-close-btn-container');
const about = document.querySelector('.sid-nav-about');
const program = document.querySelector('.sid-nav-program');
const join = document.querySelector('.sid-nav-join');
const sponser = document.querySelector('.sid-nav-sponser');
const news = document.querySelector('.sid-nav-news');
const body = document.querySelector('body');

function openSideNavbar() {
  sideNav.classList.add('display');
  sideNav.classList.remove('side-nav');
  body.style.overflow = 'hidden';
}

hamburgerButton.addEventListener('click', openSideNavbar);

function closeSideNavbar() {
  sideNav.classList.remove('display');
  sideNav.classList.add('side-nav');
  body.style.overflow = 'auto';
}

closeButton.addEventListener('click', closeSideNavbar);
about.addEventListener('click', closeSideNavbar);
program.addEventListener('click', closeSideNavbar);
join.addEventListener('click', closeSideNavbar);
sponser.addEventListener('click', closeSideNavbar);
news.addEventListener('click', closeSideNavbar);

// js for dropdown button and storing data in array of objects

const tutorDetails = [
  {
    id: 1,
    profileImage: 'images/tutor_01.jpg',
    fullName: 'David Reevesr',
    education:
      'Harvad John A. Paulson School of Engineering and Applied Science',
    experience:
      'Benkler has 20 years of teaching experience in software engineering.',
  },
  {
    id: 2,
    profileImage: 'images/tutor_02.jpg',
    fullName: 'Amin Ned',
    education:
      'Assistant Professor Harvad John A. PaulsonSchool of Engineering and Applied Science.',
    experience:
      'Amin, Specialises in Artificial Intelligence and Programming Languages.',
  },
  {
    id: 3,
    profileImage: 'images/tutor_03.jpg',
    fullName: 'Mike A',
    education: 'Mike, Studied Computer Science at Obafemi Awolowo University.',
    experience:
      'Radcliffe Alumnae Professor and Researcher at Opolo Specialises in Machine Learning and Theory of Computation.',
  },
  {
    id: 4,
    profileImage: 'images/tutor_04.jpg',
    fullName: 'John Brooks',
    education: 'Haley Family Professor of Computer Science.',
    experience:
      'John has 15 years of teaching experience and Specialises  in computer architecture.',
  },
  {
    id: 5,
    profileImage: 'images/tutor_05.jpg',
    fullName: 'Barak  Greg',
    education: 'Gordon McKay Professor of Computer Science',
    experience:
      'Specialises in Machine Learning and Theory of Computation.',
  },
  {
    id: 6,
    profileImage: 'images/tutor_06.jpg',
    fullName: 'James Gregory',
    education: 'Assistant Professor of Computer Science at Florida state University',
    experience: 'James, has 12 years of lecturing databases and big data engineering',
  },
];

const tutors = document.querySelector('#tutors-profile-container');

for (let i = 1; i <= 2; i += 1) {
  const result = tutorDetails.find((item) => item.id === i);
  tutors.innerHTML += `
<div class="tutor-profile">
  <div class="tutor-profile-img-container">
    <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
  </div>
  <div class="tutor-details-container">
    <div class="tutor-name-container">
      <h3 class="tutor-name">${result.fullName}</h3>
    </div>
    <div class="tutor-educations-container">
      <p class="tutor-education">
        ${result.education}
      </p>
    </div>
    <div class="tutor-experience-container">
      <p class="tutor-experience">
      ${result.experience}
      </p>
    </div>
  </div>
</div>
`;
}

// js to see more tutors
const moreTutors = document.querySelector('#more-tutors-profile-container');
const arrowDown = document.querySelector('.down-arrow-container');
const arrowUp = document.querySelector('.hide-arrow-container');
function displayMoreTutors() {
  for (let i = 3; i <= 6; i += 1) {
    const result = tutorDetails.find((item) => item.id === i);
    moreTutors.innerHTML += `
      <div class="tutor-profile">
        <div class="tutor-profile-img-container">
          <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
        </div>
        <div class="tutor-details-container">
          <div class="tutor-name-container">
            <h3 class="tutor-name">${result.fullName}</h3>
          </div>
          <div class="tutor-educations-container">
            <p class="tutor-education">
              ${result.education}
            </p>
          </div>
          <div class="tutor-experience-container">
            <p class="tutor-experience">
            ${result.experience}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  moreTutors.classList.add('display-more-tutors');
  arrowDown.classList.remove('down-arrow-container');
  arrowDown.classList.add('hide-arrow-container');
  arrowUp.classList.remove('hide-arrow-container');
}

arrowDown.addEventListener('click', displayMoreTutors);

// js to see less tutors
function seeLessTutors() {
  moreTutors.innerHTML = '';
  arrowUp.classList.add('hide-arrow-container');
  arrowDown.classList.remove('hide-arrow-container');
  arrowDown.classList.add('down-arrow-container');
}

arrowUp.addEventListener('click', seeLessTutors);

for (let i = 3; i <= 6; i += 1) {
  const result = tutorDetails.find((item) => item.id === i);
  moreTutors.innerHTML += `
    <div class="tutor-profile">
      <div class="tutor-profile-img-container">
        <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
      </div>
      <div class="tutor-details-container">
        <div class="tutor-name-container">
          <h3 class="tutor-name">${result.fullName}</h3>
        </div>
      <div class="tutor-educations-container">
        <p class="tutor-education">
          ${result.education}
        </p>
      </div>
        <div class="tutor-experience-container">
          <p class="tutor-experience">
            ${result.experience}
          </p>
        </div>
      </div>
    </div>
  `;
}

// js to create add more tutors for pc view
function displayMoreTutorsForPcView() {
  if (window.innerWidth < 1010) {
    moreTutors.innerHTML = '';
    arrowUp.classList.add('hide-arrow-container');
    arrowDown.classList.add('down-arrow-container');
  } else {
    moreTutors.innerHTML = '';
    for (let i = 3; i <= 6; i += 1) {
      const result = tutorDetails.find((item) => item.id === i);
      moreTutors.innerHTML += `
        <div class="tutor-profile">
          <div class="tutor-profile-img-container">
            <img src="${result.profileImage}" alt="tutor profile image" class="tutor-profile-img">
          </div>
          <div class="tutor-details-container">
            <div class="tutor-name-container">
              <h3 class="tutor-name">${result.fullName}</h3>
            </div>
            <div class="tutor-educations-container">
              <p class="tutor-education">
                ${result.education}
              </p>
            </div>
            <div class="tutor-experience-container">
              <p class="tutor-experience">
                ${result.experience}
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }
}

window.addEventListener('resize', displayMoreTutorsForPcView);
