# Single AI Model Setup Guide

## ✅ Simplified Configuration

The bot now uses **one AI model** for all tasks instead of separate fast/slow models!

## Setup

### 1. Get Your API Key

1. Go to [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for an account
3. Get your API key from the dashboard

### 2. Configure Your .env File

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and add:

```bash
# Your OpenRouter API Key (REQUIRED for AI features)
OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here

# AI Model to use (OPTIONAL - defaults to mistralai/mistral-7b-instruct)
AI_MODEL=mistralai/mistral-7b-instruct
```

### 3. Start the Bot

```bash
npm start
```

You should see:
```
🤖 AI Model: mistralai/mistral-7b-instruct
🚀 AI Learning Diary Bot is running...
```

## Choosing a Model

### Budget-Friendly (Free/Low Cost)
```bash
AI_MODEL=mistralai/mistral-7b-instruct
# or
AI_MODEL=meta-llama/llama-3.1-8b-instruct
```

### Balanced Quality/Cost
```bash
AI_MODEL=google/gemini-flash-1.5
# or
AI_MODEL=anthropic/claude-3-haiku
```

### High Quality
```bash
AI_MODEL=anthropic/claude-3-sonnet
# or
AI_MODEL=openai/gpt-4o-mini
```

### Premium
```bash
AI_MODEL=openai/gpt-4o
# or
AI_MODEL=anthropic/claude-3-opus
```

## Find More Models

Visit [OpenRouter Models](https://openrouter.ai/models) to browse:
- 200+ available models
- Pricing per model
- Speed and quality ratings
- Context window sizes

## What Each Model is Used For

Your chosen model handles **all** AI tasks:
- ✅ Follow-up questions after learning entries
- ✅ Weekly summaries
- ✅ Quiz generation (both PDF and inline)
- ✅ AI conversations
- ✅ Learning recommendations
- ✅ Category suggestions

## Without AI

If you **don't** set `OPENROUTER_API_KEY`, the bot still works perfectly for:
- ✅ Logging learnings
- ✅ Viewing history
- ✅ Searching
- ✅ Goals & streaks
- ✅ Statistics
- ✅ Exporting to PDF

## Example .env File

```bash
# Required
TELEGRAM_API_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
MONGODB_URI=mongodb://localhost:27017/learning-diary

# Optional - AI Features
OPENROUTER_API_KEY=sk-or-v1-1234567890abcdef
AI_MODEL=mistralai/mistral-7b-instruct

# Optional
APP_URL=https://github.com/yourusername/yourrepo
```

## Troubleshooting

### "AI features disabled" message
- **Cause**: `OPENROUTER_API_KEY` not set
- **Solution**: Add your API key to `.env`

### "API error: 401 Unauthorized"
- **Cause**: Invalid API key
- **Solution**: Check your key is correct and active

### "Model not found"
- **Cause**: Model name incorrect
- **Solution**: Copy exact name from [OpenRouter Models](https://openrouter.ai/models)

## Cost Tracking

- Check usage at [OpenRouter Dashboard](https://openrouter.ai/activity)
- Set billing alerts if needed
- Most free-tier models cost $0.00 per request
- Premium models vary from $0.001 to $0.10 per request

## Switching Models

To try a different model:

1. Edit `.env`:
   ```bash
   AI_MODEL=google/gemini-flash-1.5
   ```

2. Restart the bot:
   ```bash
   npm start
   ```

3. Check the startup message confirms your model:
   ```
   🤖 AI Model: google/gemini-flash-1.5
   ```

That's it! Enjoy your learning diary bot! 🎓
