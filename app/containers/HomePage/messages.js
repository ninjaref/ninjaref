/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startProjectHeader: {
    id: 'ninjaref.containers.HomePage.start_project.header',
    defaultMessage: 'Welcome to Ninja Reference!',
  },
  startProjectMessage: {
    id: 'ninjaref.containers.HomePage.start_project.message',
    defaultMessage: 'Ninja Reference is an open-source effort to improve the availability and presentation of data on American Ninja Warrior. We track competitors across seasons, courses, and obstacles\u2014allowing for the level of analysis often found in more traditional sports.',
  },
  trymeHeader: {
    id: 'boilerplate.containers.HomePage.tryme.header',
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: 'boilerplate.containers.HomePage.tryme.message',
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: 'boilerplate.containers.HomePage.tryme.atPrefix',
    defaultMessage: '@',
  },
});
