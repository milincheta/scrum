import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.calendar.onCreated(function calendarOnCreated() {
  // counter starts at 0
  this.counterDev = new ReactiveVar(0);
  this.counterQA = new ReactiveVar(0);
});

Template.calendar.helpers({
  counterDev() {
    return Template.instance().counterDev.get();
  },
});

Template.calendar.helpers({
  totalDev() {
    return Template.instance().counterDev.get()*6;
  },
});

Template.calendar.helpers({
  counterQA() {
    return Template.instance().counterQA.get();
  },
});

Template.calendar.helpers({
  totalQA() {
    return Template.instance().counterQA.get()*6;
  },
});


Template.calendar.events({
  'click #dev'(event, instance) {
    // increment the counter when button is clicked
    if(event.target.checked){
      instance.counterDev.set(instance.counterDev.get() + 1);}
    else
    {instance.counterDev.set(instance.counterDev.get() -1);}
  },
});


Template.calendar.events({
  'click #qa'(event, instance) {
    // increment the counter when button is clicked
    if(event.target.checked){
      instance.counterQA.set(instance.counterQA.get() + 1);}
    else
    {instance.counterQA.set(instance.counterQA.get() -1);}
  },
});


Template.calendar.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counterDev.set(0);
    instance.counterQA.set(0);
  },
});
