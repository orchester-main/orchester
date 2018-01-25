import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';

import './sign-up.html';

Template.app_signUp.onCreated(function signUpOnCreated() {
});

Template.app_signUp.helpers({
});

Template.app_signUp.events({
  'submit form'(event, instance) {

    event.preventDefault();

    Accounts.createUser({
      email: event.target.email.value,
      password: event.target.password.value
    }, (err, res) => {
      console.log(err);
    })
  },
});