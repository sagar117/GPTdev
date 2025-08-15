# GPTdev — Vibe Coding Platform
GPTdev is an experimental AI-assisted collaborative coding platform that merges prompt engineering, codWith GPTdev, you can:
- Describe a feature in natural language.
- Let the AI generate or modify code based on your requirements.
- Automatically save the output to files.
- Create branches, commit changes, and push to Git — all without leaving the browser.
---
## ■ Features
### 1. Prompt-to-Code Workflow
Fill in structured prompts in `prompt.html`:
- Feature Name
- Objective / Purpose
- UI Requirements
- Functionality
- Data Requirements
- Dependencies
- Platform / Technology
- Constraints
- Expected Output / Result
- Input File Name
- Output File Name
- Branch Name
The system converts these into AI prompts for code generation.
### 2. Integrated Git Versioning
- See existing branches and versions.
- Create new branches directly from the UI.
- Push generated code to a selected branch.
### 3. Multi-Page Demos
Besides `prompt.html`, the repo contains:
- `chat.html` / `chat.js` – Experimental GPT chat UI.
- `documents.html` – Document viewing/listing UI.
- `ball.html`, `snake.html` – Mini-games.
- `index.html` – Current default page (e-commerce mock).
- Other HTML/JS – Prototypes and feature experiments.
---
## 📂 Project Structure

```
index.html               # Current landing page (e-commerce demo)
prompt.html              # AI + Git feature creation form
chat.js / chat2.js       # GPT chat UIs
project_reader.js        # Reads and processes project data
documents.html           # Document viewer prototype
ball.html / snake.html   # Mini-game demos
mongo_login.db           # ⚠ Local DB artifact (should be ignored in .gitignore)
node_modules/            # Dependencies (should not be committed)
css/ js/ assets/         # Styles and scripts
```
---
## ■ Installation & Setup
**Note:** The current repo is front-end only. Git operations and AI calls require a backend service.
1. Clone the repo
 git clone https://github.com/sagar117/GPTdev.git
 cd GPTdev
2. Install dependencies
 npm install
 (Remove node_modules from git if already committed)
3. Run locally
 - Open any HTML file directly in the browser for a static preview.
 - For API/Git features, connect to a backend that:
 - Handles GPT/LLM calls.
 - Executes Git commands securely.
---
## ■ Security Notes
- Do not commit database files (`mongo_login.db`) or node_modules/ to version control.
- Never expose API keys in client-side JavaScript — use a backend proxy.
---
## ■ Roadmap
- Backend integration for AI prompt handling.
- Secure Git command execution via API.
- Real-time collaborative editing.
- Authentication & user sessions.
- Live preview of generated code.
---
## ■ License
MIT License — feel free to modify and adapt for your own projects.
---
## ■ Contributing
Pull requests are welcome! If you want to extend GPTdev:
1. Fork the repo.
2. Create a feature branch.
3. Submit a PR with your changes.
Author: Sagar (https://github.com/sagar117)
Status: Early Prototype — Work in Progress
