import { Client } from '@temporalio/client';
import { invoices, notifications } from './workflows';
import { appConfig } from './context';
import { randomUUID } from 'crypto';

async function run() {
  const client = new Client();

  const sendInvoice = ()=>{
    client.workflow.execute(invoices, {
      taskQueue: appConfig.taskQueue,
      workflowId: randomUUID(),
      args: ["salut"]
    })
  }

  const sendNotification = ()=>{
    client.workflow.execute(notifications, {
      taskQueue: appConfig.taskQueue,
      workflowId: randomUUID(),
      args: ["salut"]
    })
  }

  

  setInterval(sendInvoice, 2000)
  setInterval(sendNotification, 2000)

}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});