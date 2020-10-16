# DEVFEST Colombia 2020 - Serverless Cloud Functions
Example project built for DEVFest Colombia 2020 with the purpose of teaching the use of Serverless through Cloud Functions

## Create from scratch

```bash
npm install -g firebase-tools
firebase login
mkdir my_folder && cd $_
firebase init functions
```

## Install (optional)

```bash
npm install -g firebase-tools
cd ./functions
npm install
firebase login
```

## ENV Variables
### Get the variables
```
firebase functions:config:get > .runtimeconfig.json
```
### Set a variable
```bash
firebase functions:config:set JSON_VARIABLE=VALUE
```
e.g.
```bash
firebase functions:config:set airtable.dma_base_tab="DMAs"
```
### Removing a variable
```bash
firebase functions:config:unset JSON_VARIABLE
```
e.g.
```bash
$ firebase functions:config:unset qualtrics.survey_id
```
## Run functions
```bash
firebase serve --only functions
```
