# Contacts CRUD Challenge

Created by Jian Sorge

## Challenge Description

This Contacts web application was built with `create-react-app` for a technical challenge. It utilizes an [API]('https://github.com/BrandSourceDigital/backend-code-test') to perform CRUD operations on a contacts databas via functional components. Mockup is accessible [here](https://www.figma.com/file/ecny7QBqYUP5DF01MZohLj/Contacts-CRUD). See 'instructions.txt' for full instructions.

[Deployed Site]()

### API Data Structure

`[{
  firstName: string,
  lastName: string,
  emails: string[]
},]`

## Summary of Web Application

I used 4 major components for this app's design:

1. App.js
1. ContactList.js
1. Contact.js
1. Email.js

I used fetch to perform initial `GET` request of all contact data and store it with `useState`. App. Emails are enabled and disabled by comparing the state array of emails versus the initial email list.

With more time, I would implement API error handling and notification, testing, and modals to prevent erroneous loss of data.

## Potential Next Steps

- Jest + Enzyme Unit Tests
- Integrated testing using Cypress or Gherkin BDD
- Error handling and notification of successful/failed API calls
- Implement modals to ensure user does not accidentally lose data after clicking cancel, delete or on a different contact
- Performance enhancement using Lighthouse webpagetest, etc.
- Accessibility to perform all app functions
- Validation of duplicate Emails
- Ability to edit emails
- Cache data for offline usage and faster performance
- Styling and highlighting of input validation before submit
- Responsive mobile design
- Refactor API methods into a separate component and folder for services
- Show total # of contacts and # of emails for each contact
- Utilize hash map / object for contacts data instead of array for improved performance
- Utilize mobx or redux for state management of contact editing
