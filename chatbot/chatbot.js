function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    displayMessage(messageText, 'user');
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        displayMessage(botResponse, 'bot');
    }, 1000);
}

function displayMessage(text, sender) {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userInput) {
    const responses = {
        sad: "I'm really sorry to hear that. It's okay to feel this way. Consider talking to someone you trust, or try journaling your thoughts.",
        anxious: "Anxiety can be tough. Try deep breathing exercises: inhale for 4 seconds, hold for 4 seconds, and exhale for 4 seconds. Would you like to know more?",
        stressed: "Stress is common, but managing it is important. How about trying some relaxation techniques like meditation or going for a walk?",
        overwhelmed: "Feeling overwhelmed can be tough. Break tasks into smaller steps and focus on one thing at a time. You can do this!",
        tired: "If you're feeling tired, make sure to prioritize rest. A short nap or a good night’s sleep can do wonders.",
        help: "I'm here for you. Consider practicing mindfulness or engaging in a hobby you enjoy to help lift your mood.",
        happy: "That's wonderful to hear! Happiness is a beautiful feeling. What’s bringing you joy today? If you're up for it, consider sharing this happiness with someone else—it can make your day even brighter!",
        exercise: "Physical activity can be a great way to boost your mood. Even a short walk or stretching can help.",
        thankyou: "You're welcome! I'm here to help.",
        thanks: "You're welcome! I'm here to help.",
        thank: "You're welcome! I'm here to help.",
        hello: "Hi there! How can I support you today?",
    };

    // Check for keywords in user input
    const userWords = userInput.toLowerCase().split(' ');
    for (let word of userWords) {
        if (responses[word]) {
            return responses[word];
        }
    }

    // Default response
    return "I'm here to listen. Please share what's on your mind.";
}
