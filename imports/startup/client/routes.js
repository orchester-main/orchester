import { IronRouter } from 'meteor/iron:router';

import '../../ui/pages/partner-apply.js';
import '../../ui/pages/partner-sign-up.js';

Router.route('/partner-log-out', function () {
  Meteor.logout();
  this.redirect('/partner-portal');
});

Router.route('/partner-portal', function () {
  if (!Meteor.user()) {
    this.render('partnerSignUp');
  }
  else {
    this.render('partnerApply');
  }
});

Router.route('/partner-sign-up', function () {
  this.render('partnerSignUp');
});

