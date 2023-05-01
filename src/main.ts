import './style.css';
// import './clean-code/04-homework.ts';
// import './clean-code/05-dry';
// import './clean-code/06-clases-b';
// import './clean-code/06-clases-c';
// import './clean-code/07-tarea';
// import './code-smells/02-high-coupling';
// import './code-smells/02-low-coupling';
import './solid/01-srp';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;

