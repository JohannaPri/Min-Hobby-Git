import './style.css'
import { textContent, convertToParagraphs } from './textContent';
const paragraphHTML = convertToParagraphs(textContent);


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


