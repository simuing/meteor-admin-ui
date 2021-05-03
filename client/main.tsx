import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/routes/routes';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('react-target'));
});


// import { Meteor } from 'meteor/meteor';
// import { App } from '/imports/ui/App'
// Meteor.startup(() => {
    //   render(<App />, document.getElementById('root'));
// });