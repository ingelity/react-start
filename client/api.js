/* @flow */

const headlines = [
  'how are you doing?',
  'what an awesome day',
  'don\'t you just feel great today',
  'we should all go out more often',
  'any plans for today?',
];

function getHeadline(index) {
  return headlines[index % headlines.length];
}

// specifying functions as object props,
// same as export default { getHeadline: function(){...} };
export default {
  getHeadline(index: number = 0) {
    return new Promise(resolve => {
      setTimeout(() => resolve(getHeadline(index)), 500);
    });
  },
};
