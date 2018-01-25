import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../ui/layouts/app-body.html';
import '../../ui/pages/sign-up.js';

FlowRouter.route('/sign-up', {
  name: 'App.sign-up',
  action() {
    BlazeLayout.render('app_body', { main: 'app_signUp' });
  },
});