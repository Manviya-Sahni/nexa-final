document.getElementById('selectionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const language = document.getElementById('language').value;
    const disability = document.getElementById('disability').value;

    // Store selections in localStorage
    localStorage.setItem('selectedLanguage', language);
    localStorage.setItem('selectedDisability', disability);
    
    // Redirect to the tutors page
    window.location.href = 'reward.html';
});
