$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/CucumberTags.feature");
formatter.feature({
  "line": 1,
  "name": "Free orangehrm application testing",
  "description": "",
  "id": "free-orangehrm-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login with correct username and correct password",
  "description": "",
  "id": "free-orangehrm-application-testing;login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "This is valid logintest",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberTagsDefinitions.this_is_valid_logintest()"
});
formatter.result({
  "duration": 49238830027,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login with incorrect username and incorrect password",
  "description": "",
  "id": "free-orangehrm-application-testing;login-with-incorrect-username-and-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "This is invalid logintest",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberTagsDefinitions.this_is_invalid_logintest()"
});
formatter.result({
  "duration": 40235605513,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create user",
  "description": "",
  "id": "free-orangehrm-application-testing;create-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "This is new usertestcase",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberTagsDefinitions.this_is_new_usertestcase()"
});
formatter.result({
  "duration": 50270,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create deals",
  "description": "",
  "id": "free-orangehrm-application-testing;create-deals",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "This is new dealtestcase",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberTagsDefinitions.this_is_new_dealtestcase()"
});
formatter.result({
  "duration": 45288,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create task",
  "description": "",
  "id": "free-orangehrm-application-testing;create-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "This is new taskrtestcase",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberTagsDefinitions.this_is_new_taskrtestcase()"
});
formatter.result({
  "duration": 54799,
  "status": "passed"
});
});