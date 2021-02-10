## What's inside

It is an empty React project created for the code review 
purposes on the React course in MIPT (2021).

## Pull requests

For everyone who wants to send homework for the code review 
a special branch is created. The name of each branch looks 
like `homework/<username>`.

At the first step, you need to make a `fork` of the repository 
and continue inside your own copy.

When you have smth for the review, you should make a Pull 
request from your repository into `obabichev:homework/<username>`.

After that PR will be reviewed and scored, and the table with ratings updated (or not updated.. ^_^).

## Run project

This project was created with `create-react-app`. So all 
the scripts are the same including `npm start`, 
`npm run build`.

## Connect to the server

If you try to connect to the server  
you may get an error related to the CORS policy. It happens 
because you run the website on one domain (for example 
`localhost`), but try to make a request to the other (for 
example `https://431243-co32399.tmweb.ru`).

The easiest way to avoid this problem is to use proxy 
possibilities of the server create-react-app runs for you.

Just add a field `proxy` with the server url in `package.json`:

```json
{
  ...
  "proxy": "https://431243-co32399.tmweb.ru"
}
```

## Swagger

You can find the description of available API in the swagger documentation:
```
https://431243-co32399.tmweb.ru/swagger/
```

## Bugs

If you find any problems in the API implementation I would be happy to know about it.
I promise extra points for the found issues and PRs with bugfixes ^_^.
