# BE Assignment

Complete test BE Assignment

### User API Reference

#### User Login

```http
  POST /user/login
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

#### User Logout

```http
  POST /user/logout
```

| Header          | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `authorization` | `string` | **Required**. Bearer ... |

#### User Register

```http
  POST /user/logout
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

### Account API Reference

#### Account Create

```http
  POST /account/create
```

| Header          | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `authorization` | `string` | **Required**. Bearer ... |

| Body          | Type     | Description                      |
| :------------ | :------- | :------------------------------- |
| `accountType` | `string` | **Required**. Your Account Type  |
| `balance`     | `number` | **Required**. Your input balance |

#### Account Read

```http
  POST /account/read
```

| Header          | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `authorization` | `string` | **Required**. Bearer ... |

### Transaction API Reference

#### Transaction Read

```http
  GET /transaction/read
```

| Header          | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `authorization` | `string` | **Required**. Bearer ... |

#### Transaction Send

```http
  POST /transaction/send
```

| Header          | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `authorization` | `string` | **Required**. Bearer ... |

| Body        | Type     | Description                                    |
| :---------- | :------- | :--------------------------------------------- |
| `amount`    | `number` | **Required**. Your input amount                |
| `toAddress` | `number` | **Required**. Your input destination account   |
| `accountId` | `number` | **Required**. Your input account usage to send |

#### Transaction Withdraw

```http
  POST /transaction/withdraw
```

| Header          | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `authorization` | `string` | **Required**. Bearer ... |

| Body        | Type     | Description                                        |
| :---------- | :------- | :------------------------------------------------- |
| `amount`    | `number` | **Required**. Your input amount                    |
| `accountId` | `number` | **Required**. Your input account usage to withdraw |
