// Input validation and sanitization utilities

/**
 * Sanitize user input to prevent NoSQL injection and XSS
 * @param {string} input - User input to sanitize
 * @param {number} maxLength - Maximum allowed length
 * @returns {string} - Sanitized input
 */
function sanitizeInput(input, maxLength = 5000) {
    if (typeof input !== 'string') {
        return '';
    }

    // Trim and limit length
    let sanitized = input.trim().slice(0, maxLength);

    // Remove MongoDB operators to prevent NoSQL injection
    sanitized = sanitized.replace(/\$\{/g, '');
    sanitized = sanitized.replace(/\$/g, '');

    // Remove null bytes
    sanitized = sanitized.replace(/\0/g, '');

    return sanitized;
}

/**
 * Validate and sanitize learning content
 * @param {string} content - Learning content
 * @returns {Object} - { valid: boolean, sanitized: string, error: string }
 */
function validateLearningContent(content) {
    if (!content || typeof content !== 'string') {
        return { valid: false, sanitized: '', error: 'Content is required' };
    }

    const sanitized = sanitizeInput(content, 2000);

    if (sanitized.length < 3) {
        return { valid: false, sanitized, error: 'Content must be at least 3 characters long' };
    }

    if (sanitized.length > 2000) {
        return { valid: false, sanitized, error: 'Content is too long (max 2000 characters)' };
    }

    return { valid: true, sanitized, error: null };
}

/**
 * Validate search query
 * @param {string} query - Search query
 * @returns {Object} - { valid: boolean, sanitized: string, error: string }
 */
function validateSearchQuery(query) {
    if (!query || typeof query !== 'string') {
        return { valid: false, sanitized: '', error: 'Search query is required' };
    }

    const sanitized = sanitizeInput(query, 100);

    if (sanitized.length < 2) {
        return { valid: false, sanitized, error: 'Search query must be at least 2 characters' };
    }

    return { valid: true, sanitized, error: null };
}

/**
 * Validate goal number
 * @param {*} goal - Goal value
 * @returns {Object} - { valid: boolean, value: number, error: string }
 */
function validateGoal(goal) {
    const num = parseInt(goal);

    if (isNaN(num) || num < 1 || num > 50) {
        return { valid: false, value: null, error: 'Goal must be a number between 1 and 50' };
    }

    return { valid: true, value: num, error: null };
}

/**
 * Validate category selection
 * @param {string} category - Category name
 * @returns {Object} - { valid: boolean, category: string, error: string }
 */
function validateCategory(category) {
    const validCategories = [
        'Tech/Programming',
        'Science',
        'Creative/Art',
        'Language',
        'Business',
        'Health/Fitness',
        'General'
    ];

    if (!category) {
        return { valid: true, category: null, error: null };
    }

    if (!validCategories.includes(category)) {
        return { valid: false, category: null, error: 'Invalid category' };
    }

    return { valid: true, category, error: null };
}

/**
 * Validate chat ID
 * @param {*} chatId - Telegram chat ID
 * @returns {boolean}
 */
function isValidChatId(chatId) {
    return typeof chatId === 'number' && !isNaN(chatId) && chatId !== 0;
}

/**
 * Sanitize HTML to prevent XSS (basic protection)
 * @param {string} text - Text that might contain HTML
 * @returns {string} - Sanitized text
 */
function escapeHtml(text) {
    if (typeof text !== 'string') return '';

    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Rate limiting helper - check if action is allowed
 * @param {Map} rateLimitMap - Map to store rate limit data
 * @param {*} userId - User identifier
 * @param {number} maxRequests - Maximum requests allowed
 * @param {number} windowMs - Time window in milliseconds
 * @returns {boolean} - True if action is allowed
 */
function checkRateLimit(rateLimitMap, userId, maxRequests = 10, windowMs = 60000) {
    const now = Date.now();
    const userKey = String(userId);

    if (!rateLimitMap.has(userKey)) {
        rateLimitMap.set(userKey, { count: 1, resetTime: now + windowMs });
        return true;
    }

    const userData = rateLimitMap.get(userKey);

    if (now > userData.resetTime) {
        // Reset window
        rateLimitMap.set(userKey, { count: 1, resetTime: now + windowMs });
        return true;
    }

    if (userData.count >= maxRequests) {
        return false;
    }

    userData.count++;
    return true;
}

module.exports = {
    sanitizeInput,
    validateLearningContent,
    validateSearchQuery,
    validateGoal,
    validateCategory,
    isValidChatId,
    escapeHtml,
    checkRateLimit
};
