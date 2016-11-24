export function setEventListener(element, event, listener) {
  element.addEventListener(event, listener);

  if (event === 'animationiteration') {
    element.addEventListener('webkitAnimationIteration', listener);
  } else if (event === 'animationend') {
    element.addEventListener('webkitAnimationEnd', listener);
  }
}

export function clearEventListener(element, event, listener) {
  element.removeEventListener(event, listener);

  if (event === 'animationiteration') {
    element.removeEventListener('webkitAnimationIteration', listener);
  } else if (event === 'animationend') {
    element.removeEventListener('webkitAnimationEnd', listener);
  }
}
