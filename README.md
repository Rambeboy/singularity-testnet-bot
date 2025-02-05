## SINGULARITY TESTNET BOT

## PREREQUISITE

- Git
- Node JS (v22)

### SINGULARITY FINANCE TESTNET
New Testnet : **Singularity Finance**
- **Claim Faucet** : [Claim Here](https://faucet-testnet.singularityfinance.ai/)
- **Connect New Wallet** : [Here](https://singularityfinance.ai/testnet)
- **Complete Zeally** : [Here](https://zealy.io/cw/singularityfinance/)

- Get Test SFI Tokens
- Swap SFI > wSFI or Other
- Stake 50%
- Claim Reward
- Bridge SFI
- Complete Daily Onchain Task & Social Media Task 
- Done

**LFG**

## BOT FEATURE

- Multi Account
- Proxy Support
- Support PK & SEED
- Daily Bridge (Disabled)
- Daily Wrap & Unwrap (Disable)
- Daily Stake & Unstake
- Daily Claim Staking Reward
- Daily Swap
- Daily Add Liquidity
- Daily Travel Rule (Later)

## SETUP & CONFIGURE BOT

### LINUX
1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/singularity-testnet-bot.git && cd singularity-testnet-bot
   ```
2. Install Dependencies and Setup Accounts
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure the bot config
    ```
   nano config/config.js
    ```
5. Configure the proxy
   ```
   nano config/proxy_list.js
   ```
6. To run the bot
   ```
   npm run start
   ```
   
### WINDOWS
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/singularity-testnet-bot.git
   ```
   and cd to project dir
   ```
   cd singularity-testnet-bot
   ```
3. Install Dependencies and Setup Accounts 
   ```
   npm install && npm run setup
   ```
5. Navigate to `singularity-testnet-bot` directory. 
6. Navigate to `accounts` directory.
7. Now open `acccounts.js` and setup your accounts. 
8. Now Back to `singularity-testnet-bot` directory and Navigate to `config` directory and adjust the `config.js` and `proxy_list.js` as needed.
9.  Back to `singularity-testnet-bot` directory.
10. To start the app open your `Command Prompt` or `Power Shell`
11. To run auto Tx Bot
    ```
    npm run start
    ```

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
3. Start the bot
4. If any eror happen check `log/app.log`


## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.
If any error regarding SQL, try to delete `database.db` first.
Any eror during tx will be retried until it success.
Singularity Dashboard is have a huge delay, don't worry just run and forget it.

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
