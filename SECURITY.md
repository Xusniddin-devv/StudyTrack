# Security Guide

## Environment Variables

This application uses sensitive API keys and credentials. Follow these guidelines to keep them safe:

### Required Environment Variables

1. **TELEGRAM_API_TOKEN** - Your Telegram bot token
2. **MONGODB_URI** - MongoDB connection string
3. **OPENROUTER_API_KEY_FAST** - OpenRouter API key for fast model
4. **OPENROUTER_API_KEY_SLOW** - OpenRouter API key for slow model

### Setup Instructions

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual credentials (NEVER commit this file)

3. Ensure `.env` is in your `.gitignore` file (already configured)

### Security Best Practices

✅ **DO:**
- Keep your `.env` file local and never commit it
- Use different API keys for development and production
- Rotate API keys regularly
- Use environment-specific configurations
- Monitor API usage for unusual patterns

❌ **DON'T:**
- Share your `.env` file
- Commit API keys to version control
- Use production keys in development
- Store keys in plaintext in other locations
- Share keys via email or messaging apps

## Input Validation

The application now includes comprehensive input validation to prevent:
- NoSQL injection attacks
- XSS (Cross-Site Scripting)
- Buffer overflow attacks
- Invalid data processing

All user inputs are sanitized before being processed or stored in the database.

## Rate Limiting

Basic rate limiting is implemented to prevent abuse. The bot tracks user actions and can limit excessive requests.

## Error Handling

The application includes improved error handling that:
- Prevents sensitive data from appearing in error messages
- Logs errors securely
- Provides user-friendly error messages
- Handles uncaught exceptions gracefully

## MongoDB Security

1. **Connection String**: Never expose your MongoDB URI
2. **Authentication**: Always use authentication for MongoDB
3. **Network Access**: Restrict MongoDB network access to your application's IP
4. **Regular Backups**: Maintain regular database backups

## Reporting Security Issues

If you discover a security vulnerability, please email the maintainer directly rather than opening a public issue.

## Updates

Keep all dependencies up to date to ensure you have the latest security patches:

```bash
npm audit
npm update
```
