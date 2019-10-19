# github_greener_bot

**Automation in the wrong way!!!**

This is a experiment project that helps me contribute rubbish and keeps my GitHub account "Active", so that employers can be satisfied by my "Active" GitHub account.

**I'M JOKING. PLEASE DON'T DO THIS. LOL**



### Technology

* AWS Lambda
* Node.js

### How to use

1. Fork/ Create a repo
2. Create a AWS Lambda function, choose Node.js 8.10 for its runtime. (Due to the change of OS, at the time of writing Git doesn't work on Node.js 10.x runtime)

3. Add a Layer for Git. 

   Choose the option `Provide a layer version ARN` and enter the following `arn:aws:lambda:us-east-1:553035198032:layer:git:6` . It is a layer that allows your functions to use `git` and `ssh` binaries. I found it here: **[git-lambda-layer](https://github.com/lambci/git-lambda-layer)**

4. Copy the script `index.js`. You can use its inline code editor.

5. Generate access token in GitHub Developer Settings

6. Configure environment variables on Lambda. Four env variables are needed:

   `GH_Email` - Your email address

   `GH_USERNAME` - Your username

   `GH_REPO` - Your repository name

   `GH_TOKEN` - Your Github token

7. Change the commit message to your like (but I think it doesn't matter :P)

8. Test the function.

   * In basic settings, I set my timeout to 5 sec which I found enough.

9. Add a CloudWatch Event trigger using Rate/ Cron to specify the time for auto updating GitHub repo.

   How to write Rate/ Cron expression: **[Schedule Expressions Using Rate or Cron](https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html)**

### To do

- [x] Function script
- [x] Trigger
- [ ] Stop if the user is active on that day
- [x] Generate random number of commits
- [ ] Issues
- [ ] Pull requests
- [ ] Code review