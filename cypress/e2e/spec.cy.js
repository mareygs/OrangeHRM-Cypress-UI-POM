import adminPage from "../pages/adminPage";

describe('template spec', () => {
beforeEach(() => {
  cy.loginIntoApplication()
})

  it('Login and navigate to home page', () => {
/*     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[type="password"]').type('admin123');
    cy.contains('button', ' Login ').click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); */
    

  })

  it.only('Add new user in the admin page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    cy.contains('span', 'Admin').click()
    cy.contains('span', 'Admin').click();
    cy.contains('button', 'Add').click();

    cy.contains('label', 'User Role').parent().siblings().eq(0).click()
    // Also we can use this
    // cy.contains('div', 'User Role').siblings().eq(0).click()

    cy.contains('[role="option"]', "ESS").click()

  }),
  
  it('Edit a user', () => {
    cy.contains('div','kilometer')

  }),

  it('Delete a user', () => {
    
  })
})