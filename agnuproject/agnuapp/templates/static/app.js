// Knowledge Base
const knowledgeBase = {
  artificial_intelligence: {
    title: "Artificial Intelligence",
    content: "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (acquiring information and rules for using it), reasoning (using rules to reach approximate or definite conclusions), and self-correction. AI systems can be categorized into narrow AI (designed for specific tasks) and general AI (theoretical systems with human-like cognitive abilities).",
    category: "Technology",
    tags: ["AI", "technology", "computing", "machine learning"],
    keyPoints: [
      "Simulates human intelligence in machines",
      "Includes learning, reasoning, and self-correction",
      "Categorized into narrow AI and general AI",
      "Applications span across multiple industries"
    ]
  },
  machine_learning: {
    title: "Machine Learning",
    content: "Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms build mathematical models based on sample data (training data) to make predictions or decisions. Common types include supervised learning, unsupervised learning, and reinforcement learning. Applications range from image recognition to natural language processing.",
    category: "Technology",
    tags: ["ML", "AI", "algorithms", "data science"],
    keyPoints: [
      "Learns from experience without explicit programming",
      "Builds models from training data",
      "Types: supervised, unsupervised, reinforcement",
      "Powers image recognition and NLP applications"
    ]
  },
  quantum_computing: {
    title: "Quantum Computing",
    content: "Quantum computing harnesses quantum mechanical phenomena like superposition and entanglement to process information. Unlike classical computers that use bits (0 or 1), quantum computers use qubits that can exist in multiple states simultaneously. This allows quantum computers to solve certain complex problems exponentially faster than classical computers, particularly in cryptography, drug discovery, and optimization problems.",
    category: "Technology",
    tags: ["quantum", "computing", "physics", "technology"],
    keyPoints: [
      "Uses quantum phenomena like superposition",
      "Qubits can exist in multiple states simultaneously",
      "Exponentially faster for certain problems",
      "Applications in cryptography and drug discovery"
    ]
  },
  internet_history: {
    title: "History of the Internet",
    content: "The internet originated from ARPANET in 1969, a project by the U.S. Department of Defense. Key milestones include the development of TCP/IP protocols (1970s), the World Wide Web by Tim Berners-Lee (1989), the first web browser Mosaic (1993), and the dot-com boom (late 1990s). The internet has evolved from a military and academic tool to a global communication infrastructure connecting billions of devices.",
    category: "History",
    tags: ["internet", "history", "technology", "innovation"],
    keyPoints: [
      "Originated from ARPANET in 1969",
      "TCP/IP protocols developed in 1970s",
      "World Wide Web created by Tim Berners-Lee in 1989",
      "Evolved into global communication infrastructure"
    ]
  },
  climate_change: {
    title: "Climate Change",
    content: "Climate change refers to long-term shifts in global temperatures and weather patterns. While climate change is natural, scientific evidence shows that human activities, particularly burning fossil fuels, have been the dominant cause of warming since the mid-20th century. Effects include rising sea levels, extreme weather events, ecosystem disruption, and threats to food security. Mitigation strategies include renewable energy adoption, carbon capture, and sustainable practices.",
    category: "Science",
    tags: ["climate", "environment", "science", "sustainability"],
    keyPoints: [
      "Long-term shifts in temperatures and weather",
      "Human activities are the dominant cause",
      "Effects: rising seas, extreme weather, ecosystem disruption",
      "Solutions: renewable energy and sustainable practices"
    ]
  },
  neural_networks: {
    title: "Neural Networks",
    content: "Neural networks are computing systems inspired by biological neural networks in animal brains. They consist of interconnected nodes (neurons) organized in layers: input layer, hidden layers, and output layer. Each connection has a weight that adjusts during training. Deep neural networks with multiple hidden layers enable deep learning, powering breakthroughs in computer vision, natural language processing, and game playing.",
    category: "Technology",
    tags: ["AI", "deep learning", "neural networks", "algorithms"],
    keyPoints: [
      "Inspired by biological neural networks",
      "Organized in layers with weighted connections",
      "Deep networks enable advanced learning",
      "Powers computer vision and NLP breakthroughs"
    ]
  },
  blockchain: {
    title: "Blockchain Technology",
    content: "Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers. Each block contains a cryptographic hash of the previous block, creating an immutable chain. Originally developed for Bitcoin, blockchain now has applications in supply chain, healthcare, voting systems, and smart contracts. It provides transparency, security, and eliminates the need for intermediaries.",
    category: "Technology",
    tags: ["blockchain", "cryptocurrency", "distributed ledger", "security"],
    keyPoints: [
      "Decentralized distributed ledger technology",
      "Immutable chain of cryptographically linked blocks",
      "Applications beyond cryptocurrency",
      "Provides transparency and eliminates intermediaries"
    ]
  },
  space_exploration: {
    title: "Space Exploration",
    content: "Space exploration encompasses the discovery and exploration of celestial structures beyond Earth. Major achievements include the Moon landing (1969), Mars rovers, the Hubble Space Telescope, and the International Space Station. Current initiatives focus on Mars colonization, asteroid mining, and the search for extraterrestrial life. Private companies like SpaceX and Blue Origin are revolutionizing space travel with reusable rockets.",
    category: "Science",
    tags: ["space", "astronomy", "exploration", "technology"],
    keyPoints: [
      "Major milestone: Moon landing in 1969",
      "Current focus on Mars and asteroid mining",
      "ISS serves as research laboratory",
      "Private companies revolutionizing space access"
    ]
  },
  renewable_energy: {
    title: "Renewable Energy",
    content: "Renewable energy comes from natural sources that are constantly replenished, including solar, wind, hydroelectric, geothermal, and biomass. These sources produce minimal greenhouse gas emissions compared to fossil fuels. Technological advances have made renewables increasingly cost-competitive. Solar and wind energy are the fastest-growing sources, with battery storage solving intermittency challenges.",
    category: "Science",
    tags: ["energy", "sustainability", "environment", "technology"],
    keyPoints: [
      "Sources: solar, wind, hydro, geothermal, biomass",
      "Minimal greenhouse gas emissions",
      "Increasingly cost-competitive with fossil fuels",
      "Battery storage addressing intermittency"
    ]
  },
  cybersecurity: {
    title: "Cybersecurity",
    content: "Cybersecurity involves protecting computer systems, networks, and data from digital attacks, unauthorized access, and damage. Key concepts include encryption, firewalls, intrusion detection, and multi-factor authentication. Common threats include malware, phishing, ransomware, and DDoS attacks. As technology evolves, cybersecurity becomes increasingly critical for individuals, businesses, and governments.",
    category: "Technology",
    tags: ["security", "technology", "privacy", "networks"],
    keyPoints: [
      "Protects systems from digital attacks",
      "Key tools: encryption, firewalls, authentication",
      "Threats: malware, phishing, ransomware",
      "Critical for individuals and organizations"
    ]
  }
};

// Web Source Templates
const webSourceTemplates = [
  { domain: "science-daily.com", type: "Scientific Research", credibility: "High" },
  { domain: "tech-insights.io", type: "Technology News", credibility: "High" },
  { domain: "knowledge-hub.org", type: "Educational", credibility: "High" },
  { domain: "research-journal.edu", type: "Academic", credibility: "High" },
  { domain: "industry-weekly.com", type: "Industry News", credibility: "Medium" }
];

// Query Intent Types
const queryIntents = {
  factual: "User seeking specific facts or information",
  explanation: "User wants to understand a concept",
  comparison: "User comparing multiple things",
  how_to: "User seeking instructions or guidance",
  opinion: "User seeking perspectives or analysis",
  current_events: "User asking about recent news or trends"
};

// Session State (in-memory only)
let searchHistory = [];
let previousQueries = [];
let currentTheme = 'light';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const webSearchToggle = document.getElementById('webSearchToggle');
const knowledgeBaseToggle = document.getElementById('knowledgeBaseToggle');
const queryAnalysis = document.getElementById('queryAnalysis');
const loadingContainer = document.getElementById('loadingContainer');
const resultsContainer = document.getElementById('resultsContainer');
const confidenceBadge = document.getElementById('confidenceBadge');
const responseContent = document.getElementById('responseContent');
const keyPoints = document.getElementById('keyPoints');
const sourcesSection = document.getElementById('sourcesSection');
const relatedTopics = document.getElementById('relatedTopics');
const historyToggle = document.getElementById('historyToggle');
const historySidebar = document.getElementById('historySidebar');
const closeSidebar = document.getElementById('closeSidebar');
const historyList = document.getElementById('historyList');
const clearHistory = document.getElementById('clearHistory');
const themeToggle = document.getElementById('themeToggle');
const surpriseMe = document.getElementById('surpriseMe');
const copyResponse = document.getElementById('copyResponse');
const refineSearch = document.getElementById('refineSearch');
const exportResults = document.getElementById('exportResults');

// Event Listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});

historyToggle.addEventListener('click', () => {
  historySidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
  historySidebar.classList.remove('active');
});

clearHistory.addEventListener('click', () => {
  searchHistory = [];
  previousQueries = [];
  updateHistoryDisplay();
});

themeToggle.addEventListener('click', toggleTheme);
surpriseMe.addEventListener('click', surpriseMeHandler);
copyResponse.addEventListener('click', copyResponseHandler);
refineSearch.addEventListener('click', refineSearchHandler);
exportResults.addEventListener('click', exportResultsHandler);

// Main Search Function
async function performSearch() {
  const query = searchInput.value.trim();
  
  if (!query) {
    alert('Please enter a query');
    return;
  }

  if (!webSearchToggle.checked && !knowledgeBaseToggle.checked) {
    alert('Please enable at least one search mode');
    return;
  }

  // Add to history
  addToHistory(query);
  previousQueries.push(query);

  // Hide results, show loading
  resultsContainer.classList.add('hidden');
  queryAnalysis.classList.remove('hidden');
  loadingContainer.classList.remove('hidden');

  // Analyze query
  const intent = analyzeQueryIntent(query);
  queryAnalysis.innerHTML = `
    <strong>Query Analysis:</strong> ${intent.description}<br>
    <strong>Processing Mode:</strong> ${getProcessingMode()}
  `;

  // Simulate processing time
  await sleep(2000);

  // Generate response
  const response = generateResponse(query, intent);

  // Hide loading, show results
  loadingContainer.classList.add('hidden');
  queryAnalysis.classList.add('hidden');
  displayResults(response, query);
}

// Analyze Query Intent
function analyzeQueryIntent(query) {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('what is') || lowerQuery.includes('define') || lowerQuery.includes('explain')) {
    return { type: 'explanation', description: queryIntents.explanation };
  } else if (lowerQuery.includes('how to') || lowerQuery.includes('how do')) {
    return { type: 'how_to', description: queryIntents.how_to };
  } else if (lowerQuery.includes('compare') || lowerQuery.includes('difference') || lowerQuery.includes('vs')) {
    return { type: 'comparison', description: queryIntents.comparison };
  } else if (lowerQuery.includes('current') || lowerQuery.includes('latest') || lowerQuery.includes('recent')) {
    return { type: 'current_events', description: queryIntents.current_events };
  } else if (lowerQuery.includes('should') || lowerQuery.includes('opinion') || lowerQuery.includes('think')) {
    return { type: 'opinion', description: queryIntents.opinion };
  } else {
    return { type: 'factual', description: queryIntents.factual };
  }
}

// Generate Response
function generateResponse(query, intent) {
  const lowerQuery = query.toLowerCase();
  let kbResults = [];
  let webResults = [];
  let confidence = 'high';

  // Search Knowledge Base
  if (knowledgeBaseToggle.checked) {
    kbResults = searchKnowledgeBase(lowerQuery);
  }

  // Generate Web Results
  if (webSearchToggle.checked) {
    webResults = generateWebResults(query, kbResults.length > 0);
  }

  // Determine confidence
  if (kbResults.length === 0 && webResults.length === 0) {
    confidence = 'low';
  } else if (kbResults.length === 0 || webResults.length === 0) {
    confidence = 'medium';
  }

  // Check for similar previous queries
  const similarQuery = findSimilarPreviousQuery(query);

  return {
    query,
    intent,
    kbResults,
    webResults,
    confidence,
    similarQuery
  };
}

// Search Knowledge Base
function searchKnowledgeBase(query) {
  const results = [];
  
  for (const [key, item] of Object.entries(knowledgeBase)) {
    const searchText = `${item.title} ${item.content} ${item.tags.join(' ')}`.toLowerCase();
    const words = query.split(' ').filter(w => w.length > 2);
    
    let matches = 0;
    words.forEach(word => {
      if (searchText.includes(word)) matches++;
    });
    
    if (matches > 0) {
      results.push({
        ...item,
        relevance: matches / words.length
      });
    }
  }
  
  return results.sort((a, b) => b.relevance - a.relevance).slice(0, 3);
}

// Generate Web Results
function generateWebResults(query, hasKbResults) {
  const results = [];
  const numResults = hasKbResults ? 3 : 5;
  
  for (let i = 0; i < numResults; i++) {
    const template = webSourceTemplates[i % webSourceTemplates.length];
    results.push({
      title: `${query} - Comprehensive Overview`,
      snippet: `Detailed information about ${query} including latest research, expert analysis, and practical applications. This source provides comprehensive coverage of the topic.`,
      url: `https://${template.domain}/${query.toLowerCase().replace(/\s+/g, '-')}`,
      type: template.type,
      credibility: template.credibility,
      date: getRecentDate()
    });
  }
  
  return results;
}

// Find Similar Previous Query
function findSimilarPreviousQuery(query) {
  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(' ').filter(w => w.length > 3);
  
  for (let i = previousQueries.length - 2; i >= 0; i--) {
    const prevQuery = previousQueries[i].toLowerCase();
    let matches = 0;
    
    words.forEach(word => {
      if (prevQuery.includes(word)) matches++;
    });
    
    if (matches >= 2) {
      return previousQueries[i];
    }
  }
  
  return null;
}

// Display Results
function displayResults(response, query) {
  // Confidence Badge
  confidenceBadge.className = `confidence-badge confidence-${response.confidence}`;
  confidenceBadge.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    Confidence: ${response.confidence.charAt(0).toUpperCase() + response.confidence.slice(1)}
  `;

  // Main Response
  let mainContent = '';
  
  if (response.similarQuery) {
    mainContent += `<p style="font-style: italic; color: var(--color-info); margin-bottom: 16px;">📊 Based on your previous interest in "${response.similarQuery}", here's related information...</p>`;
  }

  if (response.kbResults.length > 0) {
    const topResult = response.kbResults[0];
    mainContent += `<h2>${topResult.title}</h2>`;
    mainContent += `<p>${topResult.content}</p>`;
  } else {
    mainContent += `<h2>${query}</h2>`;
    mainContent += `<p>Based on current information and web sources, here's what we found about ${query}. The topic is relevant across multiple domains and has various applications in modern contexts.</p>`;
  }

  responseContent.innerHTML = mainContent;

  // Key Points
  if (response.kbResults.length > 0 && response.kbResults[0].keyPoints) {
    keyPoints.innerHTML = `
      <h3>Key Points</h3>
      <ul>
        ${response.kbResults[0].keyPoints.map(point => `<li>${point}</li>`).join('')}
      </ul>
    `;
  } else {
    keyPoints.innerHTML = '';
  }

  // Sources
  let sourcesHTML = '<h3>Sources</h3>';
  
  // Knowledge Base Sources
  if (response.kbResults.length > 0) {
    response.kbResults.forEach(result => {
      sourcesHTML += `
        <div class="source-item">
          <div class="source-header">
            <div class="source-title">${result.title}</div>
            <div class="source-type">Knowledge Base</div>
          </div>
          <div class="source-content">${result.content.substring(0, 150)}...</div>
          <div class="source-url">Category: ${result.category}</div>
        </div>
      `;
    });
  }
  
  // Web Sources
  if (response.webResults.length > 0) {
    response.webResults.forEach(result => {
      sourcesHTML += `
        <div class="source-item">
          <div class="source-header">
            <div class="source-title">${result.title}</div>
            <div class="source-type">${result.type} - ${result.credibility} Credibility</div>
          </div>
          <div class="source-content">${result.snippet}</div>
          <div class="source-url">${result.url} • ${result.date}</div>
        </div>
      `;
    });
  }
  
  sourcesSection.innerHTML = sourcesHTML;

  // Related Topics
  const relatedTerms = generateRelatedTopics(query, response.kbResults);
  if (relatedTerms.length > 0) {
    relatedTopics.innerHTML = `
      <h3>Related Topics</h3>
      <div class="related-items">
        ${relatedTerms.map(term => `<div class="related-item" onclick="searchRelated('${term}')">${term}</div>`).join('')}
      </div>
    `;
  } else {
    relatedTopics.innerHTML = '';
  }

  resultsContainer.classList.remove('hidden');
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Generate Related Topics
function generateRelatedTopics(query, kbResults) {
  const related = [];
  
  if (kbResults.length > 0) {
    kbResults[0].tags.forEach(tag => {
      if (!query.toLowerCase().includes(tag.toLowerCase())) {
        related.push(tag);
      }
    });
  }
  
  // Add some generic related terms
  const genericTerms = ['Applications', 'Future Trends', 'Best Practices', 'Case Studies', 'Expert Opinions'];
  genericTerms.forEach(term => {
    if (related.length < 6) {
      related.push(term);
    }
  });
  
  return related.slice(0, 6);
}

// Search Related Topic
function searchRelated(term) {
  searchInput.value = term;
  performSearch();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// History Functions
function addToHistory(query) {
  const timestamp = new Date().toLocaleString();
  searchHistory.unshift({ query, timestamp });
  
  // Keep only last 20
  if (searchHistory.length > 20) {
    searchHistory = searchHistory.slice(0, 20);
  }
  
  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  if (searchHistory.length === 0) {
    historyList.innerHTML = '<p class="history-empty">No search history yet</p>';
    return;
  }
  
  historyList.innerHTML = searchHistory.map(item => `
    <div class="history-item" onclick="searchFromHistory('${item.query.replace(/'/g, "\\'")}')">      <div class="history-item-query">${item.query}</div>
      <div class="history-item-time">${item.timestamp}</div>
    </div>
  `).join('');
}

function searchFromHistory(query) {
  searchInput.value = query;
  historySidebar.classList.remove('active');
  performSearch();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Toggle
function toggleTheme() {
  const root = document.documentElement;
  const sunIcon = themeToggle.querySelector('.sun-icon');
  const moonIcon = themeToggle.querySelector('.moon-icon');
  
  if (currentTheme === 'light') {
    root.setAttribute('data-color-scheme', 'dark');
    currentTheme = 'dark';
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    root.setAttribute('data-color-scheme', 'light');
    currentTheme = 'light';
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

// Surprise Me Handler
function surpriseMeHandler() {
  const topics = Object.values(knowledgeBase).map(item => item.title);
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  searchInput.value = randomTopic;
  performSearch();
}

// Copy Response Handler
function copyResponseHandler() {
  const content = responseContent.innerText;
  const keyPointsText = keyPoints.innerText;
  const fullText = `${content}\n\n${keyPointsText}`;
  
  navigator.clipboard.writeText(fullText).then(() => {
    const originalText = copyResponse.innerHTML;
    copyResponse.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Copied!
    `;
    
    setTimeout(() => {
      copyResponse.innerHTML = originalText;
    }, 2000);
  });
}

// Refine Search Handler
function refineSearchHandler() {
  searchInput.focus();
  searchInput.select();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Export Results Handler
function exportResultsHandler() {
  const content = responseContent.innerText;
  const keyPointsText = keyPoints.innerText;
  const sourcesText = sourcesSection.innerText;
  const fullText = `${content}\n\n${keyPointsText}\n\n${sourcesText}`;
  
  const blob = new Blob([fullText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ai-research-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// Utility Functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getProcessingMode() {
  const web = webSearchToggle.checked;
  const kb = knowledgeBaseToggle.checked;
  
  if (web && kb) return 'Hybrid (Web + Knowledge Base)';
  if (web) return 'Web Search Only';
  if (kb) return 'Knowledge Base Only';
  return 'None';
}

function getRecentDate() {
  const dates = [
    'November 2025',
    'October 2025',
    'September 2025'
  ];
  return dates[Math.floor(Math.random() * dates.length)];
}

// Initialize
console.log('GenAI Intelligence Tool initialized');
console.log('Knowledge Base entries:', Object.keys(knowledgeBase).length);