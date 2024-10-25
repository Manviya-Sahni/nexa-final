// Sample data structure for tutors (could be in shared.js)
const tutors = {
    en: [
        { name: "John Smith", language: "English", age: 32, specialization: "Expert in Physics", image: "tutor1.jpg" },
        { name: "Emily Johnson", language: "English", age: 29, specialization: "Specialist in Chemistry", image: "tutor2.jpg" },
        // Add more English tutors here...
    ],
    hi: [
        // {
        //     name: "Rajesh Kumar",
        //     language: "Hindi",
        //     age: 30,
        //     specialization: "Expert in teaching strategies for children with Dyslexia.",
        //     image: "rajesh_kumar.jpg"
        // },
        {
            name: "Dr Jyoti Bajaj",
            language: "Hindi",
            age: 28,
            specialization: "Specialist in ADHD, focusing on interactive learning.",
            image: "https://userphotos2.teacheron.com/2451181-39832.JPG"
        },
        {
            name: "Suresh Gupta",
            language: "Hindi",
            age: 35,
            specialization: "Expert in Autism Spectrum Disorder with personalized learning plans.",
            image: "suresh_gupta.jpg"
        },
        {
            name: "Priya Mehta",
            language: "Hindi",
            age: 32,
            specialization: "Special educator for children with multiple disabilities, including ADHD and Dyslexia.",
            image: "priya_mehta.jpg"
        }
        ]
    };
    let currentIndex = 0;

    function displayTutor() {
        const language = localStorage.getItem('selectedLanguage');
        const tutorCard = document.getElementById('tutorCard');
        const tutor = tutors[language][currentIndex];

        if (tutor) {
            tutorCard.innerHTML = `
                <div class="card-left">
                    <img src="${tutor.image}" alt="${tutor.name}">
                </div>
                <div class="card-right">
                    <h3>${tutor.name}</h3>
                    <p>Age: ${tutor.age}</p>
                    <p>Location: ${tutor.location}</p>
                    <p>Distance: ${tutor.distance}</p>
                    <p>Charges: ${tutor.charges}</p>
                    <p>${tutor.specialization}</p>
                    <p>Language: ${tutor.language}</p>
                </div>
            `;
        } else {
            tutorCard.innerHTML = '<p>No tutor available.</p>';
        }
    }

    function nextTutor() {
        const language = localStorage.getItem('selectedLanguage');
        currentIndex = (currentIndex + 1) % tutors[language].length; // Loop to the first tutor
        displayTutor();
    }

    function prevTutor() {
        const language = localStorage.getItem('selectedLanguage');
        currentIndex = (currentIndex - 1 + tutors[language].length) % tutors[language].length; // Loop to the last tutor
        displayTutor();
    }

    document.getElementById('nextBtn').addEventListener('click', nextTutor);
    document.getElementById('prevBtn').addEventListener('click', prevTutor);

    // Call displayTutor on page load
    window.onload = displayTutor;
    function nextTutor() {
        const language = localStorage.getItem('selectedLanguage');
        currentIndex = (currentIndex + 1) % tutors[language].length;
        document.getElementById('tutorCard').style.transform = 'translateX(100%)'; // Slide out to the right
        setTimeout(() => {
            displayTutor();
            document.getElementById('tutorCard').style.transform = 'translateX(0)'; // Slide in from the right
        }, 300); // Adjust this delay to match the CSS transition duration
    }
    
    function prevTutor() {
        const language = localStorage.getItem('selectedLanguage');
        currentIndex = (currentIndex - 1 + tutors[language].length) % tutors[language].length;
        document.getElementById('tutorCard').style.transform = 'translateX(-100%)'; // Slide out to the left
        setTimeout(() => {
            displayTutor();
            document.getElementById('tutorCard').style.transform = 'translateX(0)'; // Slide in from the left
        }, 300);
    }
    
