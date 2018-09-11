function renderNode(node) {
  const {nodeName, props, children} = node;
}

//support classes
if (typeof nodeName === 'function' &&
  /^class/.test(nodeName.toString()))
  {
  const component = new nodeName(props);
  Object.assign(component, {updater: updateComponent});

  component.base = renderNode(component.render());

  return component.base;
}

function updateComponent(component) {
  const vNode = component.render();
  const oldNode = component.base;

  component.base = renderNode(vNode);
}

//support functions
if (typeof nodeName === 'function') {
  return nodeName(props);
}

//create DOM element
if (typeof nodeName === 'string') {
  const element = document.createElement(nodeName);

  // handle props
  for (let prop in props) {

    if (/^on/.test(prop)) {
      const propName = prop.substring(2).toLocaleLowerCase
      element.addEventListener(eventName, props[prop])
    }

    else if (props in element) {
      element[prop] = props[prop];
    }

    else {
      element(prop) = props(prop);
    }
  }

  //handle children
  children.forEach(child => {
    if (typeof child === 'string') {
      const textNode =
    }
  })
}

export Component {

  constructor(props) {
    this.props = props;
    this.state = null;
  }

  setState(partialState) {
    Object.assign(this.state, partialState);
    console.log(this.state);
  }
}

function createElement(nodeName, props, ...children) {
  return { nodeName, props, children};
};

export default {createElement};
