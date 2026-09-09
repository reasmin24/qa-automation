# 🧪 NZiTech B2C — Playwright QA Automation

Automated end-to-end tests for the **NZiTech B2C travel portal** (Flight / Hotel / Bus / Train / E-SIM booking web app), built with **Playwright (JavaScript)**.

> Daily smoke tests written by a QA engineer — every test case is derived from real manual test scenarios and bug reports.

## ✨ Features

- ⚡ **Playwright Test** runner with HTML reporter
- 🌐 Configurable `baseURL` — point it at any environment (dev / staging / prod)
- 📸 Automatic screenshots on failure + full-page screenshot capability
- 🧭 Test scenarios that mirror real QA work: homepage smoke, navigation tabs, visual evidence
- 🚀 Runs headless in CI or headed locally

## 🛠️ Tech Stack

- **Node.js** + **Playwright** (`@playwright/test`)
- Chromium (cross-browser support easy to extend: Firefox, WebKit)

## 📁 Project Structure

```
qa-automation/
├── tests/
│   └── homepage.spec.js      # B2C homepage smoke tests
├── docs/                     # screenshots / evidence (optional)
├── playwright.config.js      # runner config
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Install browsers (first time only)
npx playwright install chromium

# 3. Run all tests (headed = watch the browser)
npx playwright test --headed

# 4. Open the pretty HTML report
npx playwright show-report
```

## 🧪 What is covered (so far)

| Test | What it verifies |
|---|---|
| Homepage loads | Title, main nav, search form, footer render correctly |
| Tab switching | Hotels tab in booking widget switches properly |
| Visual evidence | Full-page screenshot of homepage for review |

*More suites coming: flight search flow, partner logo display check, form validation, API-level tests.*

## 👩‍💻 Author

**Rukhsana Easmin** — QA Tester · learning automation, one test at a time
