import './style.css'
import './modal.css';
import { textContent, convertToParagraphs } from './textContent';
const paragraphHTML = convertToParagraphs(textContent);
import imagesData from './imageData.json';
import { generateModal } from './modal';

document.addEventListener('DOMContentLoaded', function(event) {
  const sidebar = document.getElementById('sidebar');

  function createImageElement(id, src, alt, width) {
    const img = document.createElement('img');
    img.id = id;
    img.src = src;
    img.alt = alt;
    img.width = width;

    img.addEventListener('click', function() {
      console.log('ID: ', id);

      const modalContainer = document.getElementById('modalContainer')
      const modalImg = document.getElementById(id);
      modalContainer.innerHTML = generateModal(id, src);

      const closeButton = document.getElementById('close-btn');
      closeButton.addEventListener('click', function() {
        modalContainer.style.display = 'none';
      });

      modalContainer.style.display = 'block';
      console.log('Src: ', src);
    });

    return img;
  }

  imagesData.forEach(imageData => {
    const { id, src, alt, width } = imageData;
    const imgElement = createImageElement(id, src, alt, width);
    sidebar.appendChild(imgElement);
  })
});

document.querySelector('#app').innerHTML = `
 
<main id="wrapper" class="wrapper">

  <header>
    <h1>Travel The World Is Not a Hobby It's a Lifestyle</h1>
    <img src="/images/bridge.jpg" alt="A bridge with a beautiful view" height="355" width="889">
  </header>

  <div id="content" class="content">
    <section>

      <article class="introduction">Travel may not be classified as a hobby in many people's eyes, but I would say that for me, traveling is like playing football for someone else; 
      it's my greatest interest in life, I often refer to it as a lifestyle.</article>

      <div class="text-content">
        ${paragraphHTML}
      </div>

    </section>
  </div>

  <aside id="sidebar" class="sidebar">

  </aside>

</main>
`;