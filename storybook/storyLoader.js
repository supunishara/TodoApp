

function loadStories() {
  require('../src/stories/Home.story');
  require('../src/stories/ActionSheet.story');
  require('../src/stories/Button.story');
  require('../src/stories/TextInput.story');
  require('../src/stories/TaskList.story');
  require('../src/stories/Card.story');
}

const stories = [
  '../src/stories/Home.story',
  '../src/stories/ActionSheet.story',
  '../src/stories/Button.story',
  '../src/stories/TextInput.story',
  '../src/stories/TaskList.story',
  '../src/stories/Card.story'
];

module.exports = {
  loadStories,
  stories,
};
