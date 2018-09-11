import Reakt from './reakt.js';
import {render} from './reaktDOM.js';
import {App} from './app.js';

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

class List extends Component {

  constructor(props) {
    super(props);

    this.state = { items: []};

    setInterval(() => {
      this.setState( items: [...this.state.items, "Pretzel"]);
    }, 2000)
  }

  addItem() {
    this.setState({ items: [...this.state.items, "Pretzel"] })
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
  App(),
  document.getElementById('app')
);
