# Azure Function

Create an Azure Function with the code in **index.js** provided in this Repo. The Azure Function will be HTTP triggered and upon calling will create a message into a queue to process the scale activity.

![image.png](/images/image-221229cc-927e-40be-86a5-8b77a37a7a38.png)

Update the function output to point correctly to the storage queue. This can be set up from the "Integration" option at your Function.

![image.png](/images/image-b6817183-00fc-462f-abdd-94e705aa9b86.png)

# Logic Apps

Once the message is on the queue, logic apps we'll orchestrate the processing of the message and the call to Azure Automation. Use the JSON file in the Logic Apps folder to replicate the flow bellow.

![image.png](/images/image-604fbeac-bca1-465e-9e9a-5fe2d98586a6.png)

Review the connections for the Queue and Automation Account as this will need to correspond to the resources in your subscription.

# Automation Account

The final step is the execution of the scale! Go to your Azure Automation Account with RunAsAccount enabled and create a new PowerShell Runbook with the code in the folder Automation Account of this repo. Please make sure the modules Az.Accounts and Az.Sql are present in your Automation Account. 

Update the values for your SQL Pool name, server name and resource group location. Also note that more parameters could be added if you would like to target several Sql Pools.
