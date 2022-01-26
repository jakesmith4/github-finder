function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Check you ${selection} selector, no such element exists in the CSS`
    );
  }
}

export default getElement;
