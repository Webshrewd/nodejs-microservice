# nodejs-microservice
Nodejs simple microservice tutorial boilerplate

## Set Up and Installation

### 1. Clone project

Clone this project into a folder called nodejs-microservices inside your current working directory.

`git clone https://github.com/Webshrewd/nodejs-microservice.git nodejs-microservices`

### 2. Install dependencies

Because each microservice is self-contained, you must install dependencies for each one. \

Follow these steps:

**Auth service**
```
cd nodejs-microservices/auth
npm install
```

**Users service**
```
cd nodejs-microservices/users
npm install
```

### 3. Start servers

**Auth service**

```
cd nodejs-microservices/auth
npm start
```
**Users service**

```
cd nodejs-microservices/users
npm start
```
### 4. Run tests

**Auth service**

```
cd nodejs-microservices/auth
npm test
```
**Users service**

```
cd nodejs-microservices/users
npm test
```

