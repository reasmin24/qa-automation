# 🧪 Playwright QA Automation — Demo Store

Automated end-to-end tests for **[SauceDemo](https://www.saucedemo.com/)** — the public demo e-commerce store used worldwide for QA practice. Built with **Playwright (JavaScript)**.

> Every test here mirrors real QA work: positive paths, negative paths, and UI assertions.

## ✨ Features

- ⚡ **Playwright Test** runner with HTML reporter
- ✅ Positive + **negative** test cases (locked-out user error handling)
- 🛒 Core e-commerce flow: login → browse catalog → add to cart → verify cart
- 📸 Automatic screenshots on failure + evidence screenshots
- 🌐 Configurable `baseURL` — point it at any environment
- 🚀 Runs headless in CI or headed locally

## 🛠️ Tech Stack

- **Node.js** + **Playwright** (`@playwright/test`)
- Chromium (easy to extend: Firefox, WebKit)

## 📁 Project Structure

```
qa-automation/
├── tests/
│   └── saucedemo.spec.js    # Login & core shopping flow tests
├── docs/                     # screenshots / evidence
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

## 🧪 Test Coverage

| Test | Type | What it verifies |
|---|---|---|
| Login page loads | Positive | Branding + all form fields visible |
| Valid login | Positive | 6 products shown in catalog |
| Add to cart | Positive | Cart badge updates, item present in cart |
| Locked-out user | Negative | Expected error message displayed |

## 👩‍💻 Author

**Rukhsana Easmin** — QA Tester · learning automation, one test at a time
