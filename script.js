// script.js
const questions = [
    {
        q: "भारत के पहले CDS कौन थे?",
        options: ["Gen. Bipin Rawat", "Gen. Manoj Pande", "Gen. Anil Chauhan", "Admiral Hari"],
        answer: 0
    },
    {
        q: "भारतीय सेना का मुख्यालय कहाँ है?",
        options: ["Mumbai", "New Delhi", "Pune", "Dehradun"],
        answer: 1
    }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
    const app = document.getElementById('app');
    const data = questions[currentQ];
    
    app.innerHTML = `
        <h2 style="color: #f59e0b; font-weight: bold;">प्रश्न ${currentQ + 1}</h2>
        <p style="margin: 20px 0;">${data.q}</p>
        <div>
            ${data.options.map((opt, i) => `
                <button onclick="checkAnswer(${i})">${opt}</button>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selected) {
    if(selected === questions[currentQ].answer) score++;
    currentQ++;
    
    if(currentQ < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('app').innerHTML = `
            <h2>टेस्ट समाप्त!</h2>
            <p>आपका स्कोर: ${score}/${questions.length}</p>
            <button onclick="location.reload()">दोबारा शुरू करें</button>
        `;
    }
}

loadQuestion();
