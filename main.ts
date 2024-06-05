#! usr/bin/env node 

import inquirer from "inquirer";

const Passcode  = await inquirer.prompt([{
    message: "Enter Your Passcode!", type: "input", name: "password"
}])
let balance = 10000
if (Passcode.password === "whiskeyoutnow2234"){
    const selectionOfATM = await inquirer.prompt ([{
       message: "Select What You Wants To Do:", type: "list", name: "choice", choices: ["Withdraw", "Deposit", "Show Balance"]
    }])
     
    if(selectionOfATM.choice === "Withdraw"){
        let withdrawMoney = await inquirer.prompt ([{
            message: "Enter Your Amount to be withdrawed", type: "number", name: "withdrawedAmount" 
        }])

        let remainingAmount = balance - withdrawMoney.withdrawedAmount
        console.log(`Your remaining Amount in the Bank is: ${remainingAmount}`);
        balance = remainingAmount 
    }
    else if(selectionOfATM.choice === "Deposit"){
        let depositAmount = await inquirer.prompt ([{
            message: "Enter Your Amount to be Deposited", type: "number", name: "depositedMoney"
        }])
        let theMoney = balance + depositAmount.depositedMoney;
        console.log(`Now Your Money is: ${theMoney}`);
        balance = theMoney
    }
    else if(selectionOfATM.choice === "Show Balance"){
        console.log(balance);
    }
    else{
        console.log("Select a valid operation to be performed");
    }

    const clarification = await inquirer.prompt([{
        message: "Do You wants to check your amount again(yes or no)", type: "input", name: "reclarify"
    }]);
    if (clarification.reclarify === "yes"){
        console.log(balance);
    }
    else{
        
        console.log("You are good to go!");
    }
}
else{
    console.log("This is not your account Dear!");
}
