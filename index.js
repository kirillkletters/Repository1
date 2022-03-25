{
  "name": "root",
  "devDependencies": {
    "@4tw/cypress-drag-drop": "^2.0.0",
    "cross-env": "^7.0.3",
    "cypress": "^9.2.0",
    "cypress-file-upload": "^5.0.8",
    "cypress-iframe": "^1.0.1",
    "fs": "0.0.1-security",
    "jsdoc-to-markdown": "^5.0.3",
    "lerna": "^3.20.1",
    "scriptjs": "^2.5.9",
    "xlsx": "^0.17.4"
  },
  "scripts": {
    "start:api": "cd ./packages/nocodb; npm install; npm run watch:run",
    "start:xcdb-api": "cd ./packages/nocodb; npm install; NC_DISABLE_TELE=true NC_INFLECTION=camelize DATABASE_URL=sqlite:../../../scripts/cypress/fixtures/sqlite-sakila/sakila.db npm run watch:run",
    "start:web": "cd ./packages/nc-gui; npm install; npm run dev",
    "cypress:run": "cypress run --config-file ./scripts/cypress/cypress.json",
    "cypress:open": "cypress open --config-file ./scripts/cypress/cypress.json",
    "cypress:clear": "cypress cache clear",
    "test:travis": "git log --pretty=format:'%h' -n 1 --skip 1 | xargs  lerna run test:travis --since",
    "lerna:install": "git log --pretty=format:'%h' -n 1 --skip 1 | xargs  lerna bootstrap --ignore nc-cli --since",
    "updated:xc-migrator": "lerna run publish --scope xc-migrator && lerna run xc && lerna publish && npm install -f xc-cli",
    "doc": "lerna run doc",
    "install:local:dep": "cd packages/nc-lib-gui;npm uninstall -S xc-lib;rm package-lock.json; npm i ../../../xc-lib-private; cd ../xc-instant;npm uninstall -S xc-lib xc-lib-gui;npm i ../../../xc-lib-private;npm i ../xc-lib-gui",
    "install:npm:dep": "cd packages/nc-lib-gui;npm uninstall -S xc-lib; npm i -S xc-lib@latest; cd ../xc-instant;npm uninstall -S xc-lib xc-lib-gui;npm i -S xc-lib@latest xc-lib-gui@latest;npm i ../xc-lib-gui"
  },
  "dependencies": {
    "mysql2": "^2.3.3",
    "pg": "^8.7.3",
    "sqlite3": "^5.0.2"
  }
}
