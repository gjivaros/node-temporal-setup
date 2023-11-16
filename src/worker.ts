import { Worker, NativeConnection } from '@temporalio/worker';
import {sendInvoice} from './workflows/invoice'
import {sendNotification} from './workflows/notification'
import { appConfig } from './context';

async function run() {
  const connection = await NativeConnection.connect({address: "localhost:7233"})

  const worker = await Worker.create({
    workflowsPath: appConfig.workflowsPath,
    taskQueue: appConfig.taskQueue,
    namespace: appConfig.namespaces,
    activities:{
      invoice: sendInvoice,
      notification: sendNotification
    },
    connection
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});