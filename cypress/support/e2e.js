/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

import './commands'

import 'cypress-mailosaur'

import 'cypress-iframe'
