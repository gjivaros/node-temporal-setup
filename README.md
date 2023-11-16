# Node temporal starter

## start temporal server
```sh
docker-compose up -d
```

## install dependencies
```sh
npm install @temporalio/client @temporalio/worker @temporalio/workflow @temporalio/activity @temporalio/common
```

## start worker
```sh
npm run worker
```

## start app
```sh
npm run start
```
