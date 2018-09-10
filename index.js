import Reakt from './reakt.js';

const Title = ({text}) =>
  Reakt.createElement('h1', null, text);

const App = () => {
  Reakt.createElement('div', null,
    Reakt.createElement(
      Title,
      {
        text: "hello Reakt",
      }
    )
  )
};

Reakt.render(
  Title,
  document.getElementById('app'),
)
