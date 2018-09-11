import Reakt from './reakt';
import {render} from './reaktDOM';
import {App} from './app';

// const Title = ({text}) =>
//   Reakt.createElement(
//     'h1',
//     {
//       className: 'danger',
//       onClick: () => alert('clicked')
//     },
//     text);

// const App = () => {
//   Reakt.createElement('div', null,
//     Reakt.createElement(
//       Title,
//       {
//         text: "Hello Reakt",
//       }
//     )
//   )
// };

class List {

  constructor(props) {
    this.props = props
  }

  render() {
    return (
      Reakt.createElement('ul', null,
        Reakt.createElement('li', null, 'item'))
    );
  };
}

const App = () => {
  Reakt.createElement('div', null,
    Reakt.createElement('h1', null, "Pretzel Factory"),
    Reakt.createElement(List, null),
  )
};

ReaktDOM.render(
  Reakt.createElement(App),
  document.getElementById('app')
);
