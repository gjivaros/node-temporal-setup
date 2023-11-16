import { dirname, join } from 'path'

export const packageDir = dirname(__dirname)

export const appConfig = {
  taskQueue: 'default',
  namespaces: "job-runner",
  workflowsPath: join(packageDir, 'src', 'workflows', 'index.ts')
}