
const knowledgeBase = [
    {
        keywords: ['what is ctp', 'overview', 'introduction'],
        answer: `The Changloon Transformation Project (CTP) is a 10-year initiative by UUM focusing on:
        1. Waste Management
        2. Eco-Tourism Development
        3. Educational Enhancement
        4. Social Empowerment`
    },
    {
        keywords: ['phases', 'timeline',]   ,
        answer: `Project Phases:
        Phase 1 (2023-2027): Foundation - Community programs & pilot projects
        Phase 2 (2028-2032): Scaling - Full implementation`
    },
    {
        keywords: ['waste', 'recycling', 'recycle', 'composting'],
        answer: `Waste Management Plan:
        • 40% landfill reduction target
        • Community composting workshops
        • School recycling programs`
    },
    {
        keywords: ['tourism', 'eco-tourism'],
        answer: `Tourism Initiatives:
        • Cultural heritage trails
        • Partnered eco-tourism packages
        • Target: 30% visitor increase by 2025`
    },
    {
        keywords: ['education', 'knowledge'],
        answer: `Education Upgrades:
        • STEM labs in 10 schools
        • SDG-aligned curriculum by 2025
        • Digital literacy programs`
    },
    {
        keywords: ['participate', 'join', 'contact','contricbute'],
        answer: `Get Involved:
        📧 cetma@uum.edu.my
        📞 +604-928 2406`
    },

    {
        keywords: ['living lab', 'circular economy', 'smart agriculture', 'urban farming'],
        answer: `Living Labs in CTP:
        • Circular Economy Lab: Focuses on waste reduction, upcycling, and composting.
        • Smart Agriculture Lab: Uses sensors/drones for sustainable farming.
        • Urban Farming Lab: Promotes community gardens and local food systems.
        Objective: Test real-world solutions with community involvement.`
    },
    {
        keywords: ['risk', 'risk management', 'mitigation'],
        answer: `Risk Management:
        High Risks: Funding gaps, political instability, community resistance.
        Mitigation: Contingency funds, stakeholder engagement, audits.
        See Figure 6 (CTP Risk Matrix) for details.`
    },
    {
        keywords: ['stakeholder', 'engagement', 'community involvement'],
        answer: `Stakeholder Engagement:
        • Categories: Schools, businesses, NGOs, residents.
        • Approach: Regular meetings, feedback channels, partnerships.
        • Goal: Ensure inclusive decision-making.`
    },
    {
        keywords: ['kpi', 'metrics', 'evaluation'],
        answer: `Key Performance Indicators (KPIs):
        • Waste: % landfill reduction, recycling rates.
        • Tourism: Visitor numbers, business revenue.
        • Education: STEM program participation.
        • Social: Quality-of-life improvements.`
    },
    {
        keywords: ['sustainability', 'scalability', 'replicable'],
        answer: `Sustainability & Scalability:
        • 4 pillars: Efficient resource use, partnerships, community ownership.
        • Scalability: Phased expansion to neighboring areas.
        • Framework designed for replication.`
    },
    {
        keywords: ['social', 'community programs', 'quality of life'],
        answer: `Social Transformation:
        • Initiatives: Skill development, data-driven solutions for local issues.
        • Outcomes: Empowered communities, reduced inequality.`
    },
    {
        keywords: ['partners', 'collaborators', 'UUM', 'MPRP'],
        answer: `Key Partners:
        • UUM, MPRP, NCLA, local authorities.
        • NGOs: HEPA, CeRVA.
        • Global: SDG-aligned organizations.`
    },
    {
        keywords: ['monitoring', 'reporting', 'documentation'],
        answer: `Monitoring & Reporting:
        • Frequency: Quarterly reports with KPI updates.
        • Tools: Surveys, community feedback, SROI analysis.
        • Transparency: Publicly accessible documentation.`
    }
];

// Chat Functions
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
}

function handleUserInput() {
    const input = document.getElementById('userInput');
    const question = input.value.trim().toLowerCase();
    input.value = '';
    
    if (!question) return;

    addMessage(question, 'user');

      // Display "thinking..." message
      const thinkingMessage = document.createElement('div');
      thinkingMessage.className = 'bot-message thinking';
      thinkingMessage.textContent = '🤔 Thinking...';
      document.getElementById('chatMessages').appendChild(thinkingMessage);
    
      setTimeout(() => {
        const response = getResponse(question);

        // Remove the "thinking..." message before responding
        thinkingMessage.remove();
        addMessage(response, 'bot');
    }, 1500); // Delay for 1.5 seconds
}

function getResponse(question) {
    const match = knowledgeBase.find(item => 
        item.keywords.some(keyword => question.includes(keyword))
    );

    if (match) {
        return match.answer;
    } else {
        return (
            "I specialize in CTP information. 📌\n\n" +
            "You can ask about:\n" +
            "✅ Project Phases\n" +
            "✅ Waste Management\n" +
            "✅ Tourism Plans\n" +
            "✅ Education Initiatives\n" +
            "✅ Community Involvement\n\n" +
            "Feel free to ask more specific questions!"
        );
    }
}

    
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `${sender}-message`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Enter key support
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserInput();
});