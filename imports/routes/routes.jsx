

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'index',
    action() {
      // Render a template using Blaze
      this.render('templateName');
  
      // Can be used with BlazeLayout,
      // and ReactLayout for React-based apps
    }
});
  
FlowRouter.route('/lists/:_id', {
    name: 'Lists.show',
    action(params, queryParams) {
      console.log("Looking at a list?");
    }
});


// Create 404 route (catch-all)
FlowRouter.route('*', {
    action() {
        // Show 404 error page using Blaze
        this.render('notFound');

        // Can be used with BlazeLayout,
        // and ReactLayout for React-based apps
    }
});