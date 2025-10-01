# AI Model Configuration Guide

## Overview

You can now configure which AI models the bot uses by setting environment variables in your `.env` file!

## Configuration

Add these to your `.env` file:

```bash
# AI Model Configuration
AI_MODEL_FAST=mistralai/mistral-7b-instruct
AI_MODEL_SLOW=qwen/qwen-coder-plus
```

## Model Types

### Fast Model (`AI_MODEL_FAST`)
Used for quick, real-time responses:
- ✅ Follow-up questions after learning entries
- ✅ Quiz question generation
- ✅ Category suggestions

**Default**: `mistralai/mistral-7b-instruct`

**Recommended alternatives**:
- `meta-llama/llama-3.1-8b-instruct` - Fast and efficient
- `google/gemini-flash-1.5` - Very fast, good quality
- `anthropic/claude-3-haiku` - Fast Claude model

### Slow Model (`AI_MODEL_SLOW`)
Used for detailed analysis and generation:
- ✅ Weekly summaries
- ✅ Quiz generation (PDF)
- ✅ Learning recommendations
- ✅ Learning path creation

**Default**: `qwen/qwen-coder-plus`

**Recommended alternatives**:
- `anthropic/claude-3-sonnet` - High quality analysis
- `openai/gpt-4o-mini` - Good balance of speed/quality
- `google/gemini-pro-1.5` - Excellent for analysis
- `meta-llama/llama-3.1-70b-instruct` - Very capable

## Examples

### Budget Setup (Free/Low Cost)
```bash
AI_MODEL_FAST=mistralai/mistral-7b-instruct
AI_MODEL_SLOW=qwen/qwen-coder-plus
```

### Balanced Setup
```bash
AI_MODEL_FAST=google/gemini-flash-1.5
AI_MODEL_SLOW=anthropic/claude-3-haiku
```

### High Quality Setup
```bash
AI_MODEL_FAST=anthropic/claude-3-haiku
AI_MODEL_SLOW=anthropic/claude-3-sonnet
```

### Premium Setup
```bash
AI_MODEL_FAST=openai/gpt-4o-mini
AI_MODEL_SLOW=openai/gpt-4o
```

## How to Change Models

1. **Edit your `.env` file**:
   ```bash
   nano .env
   ```

2. **Add or update the model configuration**:
   ```bash
   AI_MODEL_FAST=your-chosen-fast-model
   AI_MODEL_SLOW=your-chosen-slow-model
   ```

3. **Restart the bot**:
   ```bash
   npm start
   ```

4. **Check the logs** - You'll see which models are loaded:
   ```
   🤖 AI Models configured:
      Fast model: your-chosen-fast-model
      Slow model: your-chosen-slow-model
   ```

## Finding Available Models

Visit [OpenRouter Models](https://openrouter.ai/models) to see:
- All available models
- Pricing per model
- Speed and quality ratings
- Context window sizes

## Cost Optimization

### Tips for Lower Costs:
1. Use smaller models for fast tasks (7B-13B parameters)
2. Use mid-size models for slow tasks (30B-70B parameters)
3. Avoid the largest models unless quality is critical

### Cost Tracking:
- Check your OpenRouter dashboard for usage
- Set billing alerts if needed
- Models with "mini", "flash", or "7b" tend to be cheaper

## Troubleshooting

### Model Not Found Error
```
Error: Model 'xyz' not found
```
**Solution**: Check the model name on [OpenRouter](https://openrouter.ai/models) - copy exact name including provider prefix

### API Rate Limits
```
Error: 429 Too Many Requests
```
**Solution**:
- Switch to a different model
- Add delays between requests
- Upgrade your OpenRouter plan

### Quality Issues
If responses are poor quality:
1. Try a larger model for slow tasks
2. Keep fast model simple/quick
3. Adjust temperature in code if needed

## Default Behavior

If you **don't set** these variables:
- `AI_MODEL_FAST` defaults to `mistralai/mistral-7b-instruct`
- `AI_MODEL_SLOW` defaults to `qwen/qwen-coder-plus`

The bot will work fine with defaults!

## Model Recommendations by Use Case

### For Code Learning
```bash
AI_MODEL_FAST=mistralai/mistral-7b-instruct
AI_MODEL_SLOW=qwen/qwen-coder-plus  # Good for code
```

### For General Learning
```bash
AI_MODEL_FAST=google/gemini-flash-1.5
AI_MODEL_SLOW=anthropic/claude-3-haiku
```

### For Language Learning
```bash
AI_MODEL_FAST=anthropic/claude-3-haiku
AI_MODEL_SLOW=anthropic/claude-3-sonnet
```

### For Academic/Research
```bash
AI_MODEL_FAST=openai/gpt-4o-mini
AI_MODEL_SLOW=anthropic/claude-3-sonnet
```

## Support

If you have questions about which models to use:
1. Check [OpenRouter Models](https://openrouter.ai/models)
2. Read model descriptions and benchmarks
3. Try different models and see what works best for you!

Happy learning! 🎓
