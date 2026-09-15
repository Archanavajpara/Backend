# Prisma ORM + MySQL Task Application

This application performs:

1. getAll
2. getByID
3. search
4. getTasksByUserID

## Database

MySQL database name:

`taskdb`

Tables:

### User
- UserID
- UserName
- Password

### Task
- TaskID
- TaskTitle
- TaskDescription
- IsCompleted
- UserID

`Task.UserID` is a foreign key referencing `User.UserID`.

## Requirements

- Node.js
- MySQL / XAMPP
- npm

## Setup

### 1. Start MySQL

If using XAMPP, start MySQL from the XAMPP Control Panel.

### 2. Create database

Open phpMyAdmin or MySQL and run:

```sql
CREATE DATABASE taskdb;
```

### 3. Install packages

```bash
npm install
```

### 4. Create `.env`

Copy `.env.example` to `.env`.

For normal XAMPP MySQL with root and no password:

```env
DATABASE_URL="mysql://root:@localhost:3306/taskdb"
PORT=3000
```

If your MySQL root account has a password, put it after `root:`.

### 5. Create tables with Prisma

```bash
npx prisma migrate dev --name init
```

### 6. Insert sample data

```bash
node seed.js
```

### 7. Start application

```bash
npm start
```

Server:

`http://localhost:3000`

## API Operations

### getAll

```http
GET http://localhost:3000/users
```

### getByID

```http
GET http://localhost:3000/users/1
```

### search

```http
GET http://localhost:3000/users/search?name=Arch
```

### getTasksByUserID
    
```http
GET http://localhost:3000/users/1/tasks
```

## Important

The Password field is included because it is required by the practical's table structure. In a real application, passwords should never be stored as plain text; they should be securely hashed.
