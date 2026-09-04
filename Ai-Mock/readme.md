# 🎙️ Teams AI Mock Interviewer (Powered by n8n)

An interactive, web-based mock technical interviewer application styled after Microsoft Teams. It features real-time speech recognition, automated text-to-speech visual feedback, dynamic transcript logging, and automated resume analysis powered by **n8n workflow automation**.

---

## 🌟 Key Features
- **Teams Meeting Interface**: Complete with call header, participant overlays, active speaker indicators, and real-time audio wave visuals.
- **n8n Automation Engine**: All user chat inputs and uploaded resume PDFs are sent directly to n8n webhooks for processing, LLM evaluation, and prompt handling.
- **Voice & Speech Support**: Uses the browser-native Web Speech API for real-time speech recognition (voice-to-text) and spoken interviewer replies (text-to-speech).
- **Resume PDF Parsing**: Accepts candidate resume uploads (`FormData`) and routes them directly to n8n to customize interview questions dynamically.
- **Live Transcript & Chat**: Displays a structured real-time meeting log of candidate answers and interviewer questions.

---

## ⚙️ Architecture & n8n Integration

The application operates using a webhook-driven architecture powered by **n8n**:

1. **User Interaction**: The user speaks or types a response, or uploads a PDF resume.
2. **Webhook Trigger**: The front-end issues a `POST` request (`JSON` or `multipart/form-data`) to your production **n8n Webhook URL**.
3. **n8n AI Workflow**:
   - Extracts text from candidate resumes (PDF parsing).
   - Manages conversation memory/session context.
   - Routes context to an AI/LLM node (e.g., OpenAI, Claude, Gemini) to generate tailored interview questions.
4. **Response Payload**: n8n sends back a JSON response (`{ "output": "Interviewer response..." }`).
5. **Speech & UI Render**: The app appends the response to the transcript and triggers browser voice synthesis with live active-speaker visuals.

---

## 🚀 Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_GITHUB_USERNAME/teams-ai-mock-interviewer.git](https://github.com/YOUR_GITHUB_USERNAME/teams-ai-mock-interviewer.git)
   cd teams-ai-mock-interviewer