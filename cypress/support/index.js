// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
/**
 * 
 * @type {Cypress.PluginConfig} on 
 * 
 */
module.exports= (on, config) => {

}
Cypress.on('uncaught:exception', (err, runnable) => {
<<<<<<< HEAD
    // returning false here prevents Cypress from
    // failing the test
    return false
})
=======
  // returning false here prevents Cypress from
  // failing the test
  return false
})
>>>>>>> 0018ad0577eeecf3dd4551d2180c592d6852b8ad
