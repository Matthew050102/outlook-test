# Outlook Web Automation - Puppeteer & Cucumber (Gherkin)

## Features

- **Automated Authentication**: Secure multi-step login handling with session state management
- **Dynamic Email Sending**: Composes and dispaches emails with randomly generated subject and body contents.
- **Sent Folder Verification**: Verifies email delivery directly in the Sent Emails folder.
- **Mailbox Cleanup**: Automatically clears Sent Emails which ensures all emails are deleted before finishing the test.
- **Headless & Debug Mode**: Switching between headless execution and interactive visual debugging (`slowMo`).
- **Automated Failure Artifacts**: Automatic full-page screenshot capturing on test failure for fast troubleshooting.

---

## Tech Stacks

- **Runtime**: Node.js
- **Test Framework**: Cucumber.js (Gherkin)
- **Browser Automation**: Puppeteer

---

## Installation

1. Clone this repository:

```bash
  git clone https://github.com/Matthew050102/outlook-test.git
  cd ./outlook-test
```

2. Install dependencies:

```bash
  npm install
```

---

## Configuration

Create a `.env` file in the root directory using the `.env.example` file.

---

## Running Tests

There are two types of tests:

1. Puppeteer-only

```bash
  npm run test:puppeteer
```

<br>

2. Cucumber using Puppeteer

```bash
  npm run test:cucumber
```

---

## Project Structure

```
├── src/
│   ├── features/
│   │   ├── error/                # Folder of error screenshots
│   │   ├── hooks/
│   │   │   └── hooks.js          # Setup for "Cucumber using Puppeteer" test
│   │   ├── steps/
│   │   │   └── email.steps.js    # Cucumber step definitions
│   │   └── email.feature         # Gherkin scenario definitions
│   ├── pages/                    # Page Object Model abstraction layer
│   │   ├── clear-emails.page.js
│   │   ├── login.page.js
│   │   ├── send-email.page.js
│   │   └── verify-email.page.js
│   ├── tests/
│   │   └── outlook.test.js       # Setup for "Puppeteer-only" test
│   ├── utils/
│   │   ├── browser.js            # Browser launch & page lifecycle helpers
│   │   ├── email-content.js      # Mock data generation
│   │   └── locator.js            # Helper functions for "locator" to ensure readable codes
│   └── config.js                 # Global configuration & credentials mapping from ".env"
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
