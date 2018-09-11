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
  function handleChildren(children, element) {

    (children || []).forEach(child => {
      if (isString(child)) {
        element.appendChild(document.createTextNode(child));
      }
      else {
        element.appendChild(renderNode(child));
      }
    });
  }

  function handleProps(props, element) {
    for (let propName in props) {
      // support events
      if (isEvent(propName)) {
        const eventName = propName.substring(2).toLowerCase();
        element.addEventListener(eventName, props[propName]);
      }
      // support DOM properties
      else if (propName in element) {
        element[propName] = props[propName];
      }
      // support custom attributes
      else {
        element.setAttribute(propName, props[propName]);
      }
    }
  }


  let currentApp;

  function render(element, rootElement) {
    const app = renderNode(element);

    currentApp ?
      rootElement.replaceChild(app, currentApp) :
      rootElement.appendChild(app);

    currentApp = app;

  }

export default {render};
