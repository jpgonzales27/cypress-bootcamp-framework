npm init -y
npm install cypress --save-dev
npx cypress open
npx cypress open --e2e --browser chrome
npx cypress run --headed
npx cypress run --headed --spec "cypress/e2e/tests/autenticacion.cy.js"
npx cypress run --headed --spec "cypress/e2e/tests/\*.cy.js"
npm i @shelex/cypress-allure-plugin
npx cypress run --headed --env allure=true
npx allure open
cypress run --env allure=true,allureLogCyCommands=false
