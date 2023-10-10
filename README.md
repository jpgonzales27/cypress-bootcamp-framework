npm init -y
npm install cypress --save-dev
npx cypress open
npx cypress open --e2e --browser chrome
npx cypress run --headed
npm i @shelex/cypress-allure-plugin
npx cypress run --headed --env allure=true
npx allure open
