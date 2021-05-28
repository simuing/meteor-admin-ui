import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/ui/App';

Meteor.startup(() => {
    console.info('[INFO] client start')
    Meteor.syncCall = (name , ...test)=> new Promise((resolve, reject)=>Meteor.apply(name, test, (err, data)=> err ? reject(err) : resolve(data)))
    render(renderRoutes(), document.getElementById('react-target'));

});
