'use strict';

const categories = [
  {
    title: 'Front End',
    img: 'assets/img/https-toghr.com-lowongan-front-end-developer.jpg',
    description:
      'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.\nThe objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.',
    source:
      'https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html',
  },
  {
    title: 'Back End',
    img:
      'assets/img/https-toghr.com-back-end-developer-dan-full-stack-developer.jpg',
    description:
      'A back-end web developer is responsible for server-side web application logic and integration of the work front-end web developers do. Back-end developers usually write web services and APIs used by front-end developers and mobile application developers.\nWriting a good job description and a job ad for a back-end developer requires proper separation of concerns. Posting a generic web developer description in your job ad, when you are looking for an advanced back-end web developer, will bring numerous applications from people who are specialized in building front-end user interface, or web designers who have absolutely no knowledge about programming.\nThere are technologies and knowledge that are common to all web developers, and some that are specific to back-end developers. This article will provide you with a sample back-end web developer job description that will help you write a perfect job ad and assure that you easily find and hire the person that matches your specific criteria.',
    source: 'https://www.toptal.com/back-end/job-description',
  },
];
const articles = [
  {
    title: 'React',
    img:
      'assets/img/https-hackernoon.com-build-your-own-react-48edb8ed350d.jpeg',
    content:
      "Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.\nComponent-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.\nLearn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
    source: 'https://github.com/facebook/react',
    category: 'front-end',
  },
  {
    title: 'Node.js',
    img:
      'assets/img/https-www.codepolitan.com-menangani-antrian-task-dengan-kue-di-nodejs-58ea2e7ed3f69.png',
    content:
      'Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. For more information on using Node.js, see the Node.js Website.\nThe Node.js project uses an open governance model. The OpenJS Foundation provides support for the project.\nThis project is bound by a Code of Conduct.',
    source: 'https://github.com/nodejs/node',
    category: 'back-end',
  },
  {
    title: 'Golang',
    img:
      'assets/img/https-meritocracy.is-blog-2021-04-06-golang-why-you-should-learn-go-in-2021.jpg',
    content:
      'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
    source: 'https://golang.org/',
    category: 'back-end',
  },
  {
    title: 'Vue.js',
    img:
      'assets/img/https-hackernoon.com-vue-js-good-bad-and-choice-dcc1d27f82c6.png',
    content:
      'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
    source: 'https://vuejs.org/v2/guide/',
    category: 'front-end',
  },
];
const slidesContainer = document.getElementById('slides');
const dropdownContainer = document.getElementById('dropdown');
const contentContainer = document.getElementById('content');

/**
 * mathewbyrne/slugify.js
 * https://gist.github.com/mathewbyrne/1280286
 * @param {string} text
 * @returns {string}
 */
const slugify = function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

/**
 * @returns {void}
 */
const sliderComponent = function slider() {
  const slides = document.querySelectorAll('.slide');
  const nextButton = document.getElementById('next-button');
  const prevButton = document.getElementById('prev-button');

  let trX = 0;
  const trXVal = 100;
  const trXMax = slides.length * trXVal;

  /**
   * @returns {void}
   */
  const slideLeft = function slideLeft() {
    trX = trX >= 0 ? -(trXMax - trXVal) : trX + trXVal;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${trX}%)`;
    });
  };

  /**
   * @returns {void}
   */
  const slideRight = function slideRight() {
    trX = trX <= -(trXMax - trXVal) ? 0 : trX - trXVal;
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${trX}%)`;
    });
  };

  prevButton.addEventListener('click', () => {
    slideLeft();
  });

  nextButton.addEventListener('click', () => {
    slideRight();
  });

  setInterval(() => {
    slideRight();
  }, 3000);
};

const dropdownComponent = function dropdown() {
  const dropdown = document.getElementById('dropdown');
  const dropButton = document.getElementById('dropdown-button');

  dropButton.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
};

/**
 *
 * @param {{title: string, img: string, description: string}} data
 * @returns {HTMLDivElement}
 */
const slideComponent = function slideComponent({ title, img, description }) {
  const slide = document.createElement('div');
  slide.style.backgroundImage = `url(${img})`;
  slide.classList.add('slide');

  const div = document.createElement('div');
  slide.appendChild(div);

  const h2 = document.createElement('h2');
  h2.textContent = title;
  div.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = `${description.split(' ').splice(0, 5).join(' ')}...`;
  div.appendChild(p);

  return slide;
};

/**
 *
 * @param {string} title
 * @returns {HTMLLIElement}
 */
const menuComponent = function menuComponent(title) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = title;
  a.href = `#${slugify(title)}`;
  li.appendChild(a);

  return li;
};

/**
 *
 * @param {{title: string, img: string, content: string, source: string}} data
 * @returns {HTMLElement}
 */
const articleSectionComponent = function articleSectionComponent({
  title,
  img,
  content,
  source,
}) {
  const section = document.createElement('section');
  const h3 = document.createElement('h3');
  h3.textContent = title;
  section.appendChild(h3);

  const image = document.createElement('img');
  image.src = img;
  image.classList.add('featured-image');
  image.alt = title;
  image.width = '720';
  image.height = '300';
  section.appendChild(image);

  content.split('\n').forEach((val) => {
    const p = document.createElement('p');
    p.textContent = val;
    section.appendChild(p);
  });

  const cite = document.createElement('cite');
  section.appendChild(cite);

  const a = document.createElement('a');
  a.target = '_blank';
  a.rel = 'noreferrer';
  a.href = source;
  a.textContent = source;
  cite.appendChild(a);

  return section;
};

/**
 * @param {{title: string, description: string, source: string}} data
 * @returns {HTMLElement}
 */
const articleComponent = function articleComponent({
  title,
  description,
  source,
}) {
  const slugTitle = slugify(title);
  const article = document.createElement('article');
  article.id = slugTitle;
  article.classList.add('card');

  const h2 = document.createElement('h2');
  h2.textContent = title;
  article.appendChild(h2);

  description.split('\n').forEach((val) => {
    const p = document.createElement('p');
    p.textContent = val;
    article.appendChild(p);
  });

  const cite = document.createElement('cite');
  article.appendChild(cite);

  const a = document.createElement('a');
  a.target = '_blank';
  a.rel = 'noreferrer';
  a.href = source;
  a.textContent = source;
  cite.appendChild(a);

  articles.forEach(
    ({ category, ...restData }) =>
      category === slugTitle &&
      article.appendChild(articleSectionComponent(restData))
  );

  return article;
};

categories.forEach((category) => {
  const { title, description, source, img } = category;

  slidesContainer.appendChild(slideComponent({ title, description, img }));
  dropdownContainer.appendChild(menuComponent(title));
  contentContainer.appendChild(
    articleComponent({ title, description, source })
  );
});

sliderComponent();
dropdownComponent();
