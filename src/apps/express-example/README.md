# Express Example App

A simple Express example app for the monorepo.

## Run

```bash
cd src
bun install
bun --filter @notification-services/express-example dev
```

Then open:

- http://localhost:3000/
- http://localhost:3000/health

## Example API

### POST /notifications

```json
{
  "title": "Welcome",
  "message": "Your account has been created",
  "channel": "email"
}
```

Response:

```json
{
  "ok": true,
  "notification": {
    "title": "Welcome",
    "message": "Your account has been created",
    "channel": "email"
  }
}
```
