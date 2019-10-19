const { execSync } = require('child_process');

exports.handler = async(event) => {
    // Configure in Lambda environment
    let token = process.env.GH_TOKEN;
    let email = process.env.GH_EMAIL;
    let user = process.env.GH_USERNAME;
    let repo = process.env.GH_REPO;
    
    // Customization
    let commitMessage = "Bot Update";
    let maxNumberOfCommit = 4;
    
    // Execution Script
    execSync('rm -rf /tmp/*')
    execSync(`git clone https://github.com/${user}/${repo}.git /tmp/bot`)
    execSync('echo Updated: $(date) > /tmp/bot/log.txt')
    execSync(`cd /tmp/bot && git remote set-url origin https://${user}:${token}@github.com/${user}/${repo}.git && git config --local user.name ${user} && git config --local user.email ${email}`)
    let max = Math.floor((Math.random() * maxNumberOfCommit) + 1)
    for(var i = 0; i < max; i++){
        execSync(`cd /tmp/bot && echo . >> log.txt && git add . && git commit -m "${commitMessage}"`)
    }
    
    execSync('cd /tmp/bot && git push')
}