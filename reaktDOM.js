function renderNode(node) {

}

function render(reaktElement, domElement) {
  const app = renderNode(reaktElement);
  domElement.appendChild(app);
}

export default { render }
