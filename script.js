const questions = [
    { q: "भारत के पहले CDS कौन थे?", options: ["Gen. Bipin Rawat", "Gen. Manoj Pande", "Gen. Anil Chauhan", "Admiral Hari"], answer: 0 },
    { q: "भारतीय सेना का मुख्यालय कहाँ है?", options: ["Mumbai", "New Delhi", "Pune", "Dehradun"], answer: 1 }
];

let currentQ = 0;
let score = 0;

function renderDashboard() {
    document.getElementById('app').innerHTML = `
        <h1 style="color: #f59e0b; font-size: 24px; margin-bottom: 20px;">AGNIVEER GD</h1>
        <p style="margin-bottom: 30px;">तैयारी शुरू करें</p>
        <button onclick="startTest()">टेस्ट शुरू करें</button>
    `;
}

function startTest() {
    currentQ = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const data = questions[currentQ];
    document.getElementById('app').innerHTML = `
        <h2 style="color: #f59e0b; margin-bottom: 20px;">प्रश्न ${currentQ + 1}</h2>
        <p style="margin-bottom: 20px;">${data.q}</p>
        ${data.options.map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`).join('')}
    `;
}

function checkAnswer(selected) {
    if(selected === questions[currentQ].answer) score++;
    currentQ++;
    if(currentQ < questions.length) loadQuestion();
    else showResult();
}

function showResult() {
    document.getElementById('app').innerHTML = `
        <h2>टेस्ट समाप्त!</h2>
        <p>आपका स्कोर: ${score}/${questions.length}</p>
        <button onclick="renderDashboard()">होम पर जाएँ</button>
    `;
}

renderDashboard();
