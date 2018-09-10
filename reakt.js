//supporting function

if (typeof nodeName === 'function')

//create DOM element
if (typeof nodeName === 'string') {
  const element = document.createElement(nodeName);

  // handle props
  for (let prop in props) {

    if (/^on/.test(prop)) {
      const propName = prop.substring(2).toLocalLowerCase
      console.log('this is an event');
    }

    if (props(prop) in element) {
      console.log('this is a valid prop');
    }

    else {
      element(prop) = props(prop);
    }
  }

  //handle children
  children.forEach(child => {
    if (typeof)
  })
}
