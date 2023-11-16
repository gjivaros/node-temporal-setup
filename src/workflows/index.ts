import { proxyActivities, sleep } from '@temporalio/workflow';

const { invoice, notification } = proxyActivities({ startToCloseTimeout: '1 minutes', retry: { maximumAttempts: 3 } })


export async function notifications(inputs:any){
  await sleep("2H")
  return notification(inputs)
}

export async function invoices(input:any){
  await sleep("1H")
  return invoice(input)
}


