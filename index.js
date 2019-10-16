const { execSync } = require('child_process');

exports.handler = async(event) => {
    // Configure in Lambda environment
    let token = process.env.GH_TOKEN;
    let email = process.env.GH_EMAIL;
    let user = process.env.GH_USERNAME;
    let repo = process.env.GH_REPO;
    
    // Customize commit message
    let commitMessage = "Lazy...";

    execSync('rm -rf /tmp/*')
    execSync(`git clone https://github.com/${user}/${repo}.git /tmp/bot`)
    execSync('echo Updated: $(date) > /tmp/bot/log.txt')
    execSync(`cd /tmp/bot && git remote set-url origin https://${user}:${token}@github.com/${user}/${repo}.git && git config --local user.name ${user} && git config --local user.email ${email} && git add . && git commit -m "${commitMessage}" && git push`)
}