let coins = 0;
let currentProblem = null;

const problems = [
    { problem: "What is 2 + 2?", answer: "4" },
    { problem: "What is the capital of France?", answer: "Paris" },
    { problem: "What is 5 * 6?", answer: "30" },
    { problem: "What is the square root of 16?", answer: "4" }
];

// Reward user for daily visit
coins += 1; // Increase coin count by 1 for the daily visit
document.getElementById('coinCount').innerText = coins + ' Coins';

document.getElementById('goToProblemBtn').addEventListener('click', () => {
    if (currentProblem) {
        // Prevent loading a new problem if one is already being attempted
        alert("You can only solve one problem per visit. Please submit your answer.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * problems.length);
    currentProblem = problems[randomIndex];
    document.getElementById('problemText').innerText = currentProblem.problem;
    
    // Clear previous inputs and messages
    document.getElementById('userAnswer').value = ''; // Clear previous answer
    document.getElementById('submissionMessage').innerText = ''; // Clear previous message
    
    // Show the problem
    document.getElementById('dailyProblem').style.display = 'block';
});

document.getElementById('submitAnswerBtn').addEventListener('click', () => {
    const userAnswer = document.getElementById('userAnswer').value;

    if (userAnswer === currentProblem.answer) {
        coins += 5; // Reward 5 coins for a correct answer
        document.getElementById('coinCount').innerText = coins + ' Coins';
        document.getElementById('submissionMessage').innerText = 'Correct! You earned 5 coins!';
        currentProblem = null; // Reset the problem after correct answer
    } else {
        document.getElementById('submissionMessage').innerText = 'Incorrect! Try again.';
    }
});



document.getElementById('moreProblemsBtn').addEventListener('click', () => {
    window.location.href = 'more_exercise_problems.html'; // Redirect to More Exercise Problems page
});

document.getElementById('fitnessChallengesBtn').addEventListener('click', () => {
    window.location.href = 'fitness_challenges.html'; // Redirect to Fitness Challenges page
});


// third block 

// Sample data to simulate challenge completion
const challengeData = {
    "2024-10-20": true, // Completed
    "2024-10-21": false, // Missed
    // Add more dates as needed
};

function createCalendar(year, month) {
    const calendarContainer = document.querySelector('.calendar');
    calendarContainer.innerHTML = ''; // Clear previous calendar

    const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
    const monthHeader = document.createElement('div');
    monthHeader.className = 'month-name';
    monthHeader.innerText = monthName;
    calendarContainer.appendChild(monthHeader);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Empty slots for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day';
        calendarContainer.appendChild(emptyDay);
    }

    // Create day elements
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = day;

        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Check if a challenge was completed or missed
        if (challengeData[dateKey] === true) {
            dayElement.classList.add('completed');
        } else if (challengeData[dateKey] === false) {
            dayElement.classList.add('missed');
        }

        calendarContainer.appendChild(dayElement);
    }
}

// Create calendar for October 2024
createCalendar(2024, 9); // October (month is 0-indexed)



// chatbot

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


