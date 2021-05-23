$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/LoginDataDrivenMap.feature");
formatter.feature({
  "line": 1,
  "name": "Login data creation",
  "description": "",
  "id": "login-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Checking login credentials mapping",
  "description": "",
  "id": "login-data-creation;checking-login-credentials-mapping",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is  on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters  valid username and valid password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "Adminabc",
        "123"
      ],
      "line": 7
    },
    {
      "cells": [
        "Admindef",
        "456"
      ],
      "line": 8
    },
    {
      "cells": [
        "Adminghi",
        "789"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Closing browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DataDrivenMapStepDefinitions.user_is_already_on_loginpage()"
});
formatter.result({
  "duration": 29498582708,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenMapStepDefinitions.title_is_OrangeHRM()"
});
formatter.result({
  "duration": 18643304,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenMapStepDefinitions.user_enters_valid_username_and_valid_password(DataTable)"
});
formatter.result({
  "duration": 25666002441,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenMapStepDefinitions.tear_browser()"
});
formatter.result({
  "duration": 349272786,
  "status": "passed"
});
});