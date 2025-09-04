// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const treatmentsGrid = document.getElementById('treatments-grid');
const wellnessGrid = document.getElementById('wellness-grid');
const loadMoreTreatmentsBtn = document.getElementById('load-more-treatments');
const loadMoreWellnessBtn = document.getElementById('load-more-wellness');

// Sample data for treatments
const treatmentsData = [
    {
        id: 1,
        title: "Panchakarma Therapy",
        description: "Complete detoxification and rejuvenation therapy using five purification procedures to eliminate toxins and restore balance.",
        fullDescription: "Panchakarma is the cornerstone of Ayurvedic treatment, involving five therapeutic procedures: Vamana (emesis), Virechana (purgation), Basti (enema), Nasya (nasal administration), and Raktamokshana (bloodletting). This comprehensive therapy helps in deep cleansing of the body, mind, and consciousness, promoting optimal health and longevity."
    },
    {
        id: 2,
        title: "Herbal Medicine Consultation",
        description: "Personalized herbal remedies and natural medicines tailored to your specific health needs and constitution.",
        fullDescription: "Our herbal medicine consultation involves a thorough assessment of your health condition, body constitution (Prakriti), and current imbalances (Vikriti). Based on this analysis, we prescribe specific herbal formulations, dietary recommendations, and lifestyle modifications to restore your natural balance and promote healing."
    },
    {
        id: 3,
        title: "Digestive Health Treatment",
        description: "Specialized treatment for digestive disorders including acidity, IBS, constipation, and other gastrointestinal issues.",
        fullDescription: "Digestive health is fundamental to overall well-being in Ayurveda. Our treatment approach includes dietary modifications, herbal preparations, lifestyle counseling, and specific therapies like Agni deepana (digestive fire enhancement) and Ama pachana (toxin elimination) to restore optimal digestive function."
    },
    {
        id: 4,
        title: "Stress & Anxiety Management",
        description: "Holistic approach to managing stress, anxiety, and mental health through Ayurvedic principles and practices.",
        fullDescription: "Stress and anxiety are common in modern life and can lead to various health issues. Our treatment includes meditation techniques, breathing exercises (Pranayama), herbal nervine tonics, lifestyle modifications, and specific Ayurvedic therapies like Shirodhara and Abhyanga to calm the mind and nervous system."
    },
    {
        id: 5,
        title: "Skin & Hair Care",
        description: "Natural treatments for various skin conditions and hair problems using traditional Ayurvedic methods.",
        fullDescription: "Beautiful skin and hair are reflections of internal health. Our treatments address the root causes of skin and hair issues through internal cleansing, herbal preparations, external applications, and dietary recommendations. We treat conditions like acne, eczema, psoriasis, hair fall, and premature graying."
    },
    {
        id: 6,
        title: "Weight Management",
        description: "Safe and effective weight management program combining diet, exercise, and Ayurvedic therapies.",
        fullDescription: "Our weight management program is based on understanding your body type and metabolic needs. We provide personalized diet plans, herbal supplements, lifestyle modifications, and specific therapies like Udvartana (herbal powder massage) and Virechana to help you achieve and maintain your ideal weight naturally."
    },
    {
        id: 7,
        title: "Joint & Musculoskeletal Care",
        description: "Treatment for arthritis, joint pain, back pain, and other musculoskeletal conditions using Ayurvedic therapies.",
        fullDescription: "Joint and musculoskeletal problems are common with age and lifestyle factors. Our treatment includes herbal preparations, external therapies like Janu Basti and Kati Basti, Panchakarma procedures, and lifestyle modifications to reduce inflammation, improve mobility, and strengthen the musculoskeletal system."
    },
    {
        id: 8,
        title: "Women's Health",
        description: "Comprehensive care for women's health issues including menstrual disorders, PCOS, and menopause management.",
        fullDescription: "Women's health requires special attention due to hormonal changes throughout life. Our treatment addresses menstrual irregularities, PCOS, fertility issues, menopause symptoms, and other women-specific health concerns through herbal medicine, dietary modifications, and specialized Ayurvedic therapies."
    }
];

// Sample data for wellness articles
const wellnessData = [
    {
        id: 1,
        title: "Daily Ayurvedic Routine for Optimal Health",
        content: "Discover the ancient wisdom of Dinacharya - the daily routine that can transform your health and well-being.",
        fullContent: "Dinacharya, or daily routine, is a fundamental concept in Ayurveda that helps maintain balance and prevent disease. A proper daily routine includes waking up before sunrise, tongue scraping, oil pulling, meditation, exercise, and eating meals at regular times. This routine aligns your body with natural rhythms and promotes optimal health.",
        date: "2024-01-15",
        category: "Lifestyle"
    },
    {
        id: 2,
        title: "Understanding Your Body Type (Dosha)",
        content: "Learn about Vata, Pitta, and Kapha doshas and how understanding your constitution can guide your health choices.",
        fullContent: "According to Ayurveda, every individual has a unique constitution made up of three doshas: Vata (air and space), Pitta (fire and water), and Kapha (earth and water). Understanding your dominant dosha helps in making appropriate dietary, lifestyle, and treatment choices. This knowledge is essential for maintaining balance and preventing disease.",
        date: "2024-01-10",
        category: "Education"
    },
    {
        id: 3,
        title: "Seasonal Eating According to Ayurveda",
        content: "How to adapt your diet according to seasons to maintain balance and support your body's natural healing processes.",
        fullContent: "Ayurveda emphasizes eating according to seasons to maintain balance. In winter, favor warm, grounding foods. In summer, choose cooling, hydrating foods. Spring is ideal for cleansing foods, while autumn calls for nourishing, warming foods. This seasonal approach helps prevent seasonal disorders and maintains optimal health throughout the year.",
        date: "2024-01-05",
        category: "Nutrition"
    },
    {
        id: 4,
        title: "The Power of Meditation in Ayurveda",
        content: "Explore how meditation practices can enhance your Ayurvedic treatment and promote mental clarity and peace.",
        fullContent: "Meditation is an integral part of Ayurvedic healing. It helps calm the mind, reduce stress, and promote mental clarity. Different types of meditation, including mindfulness, mantra meditation, and breathing exercises, can be tailored to your dosha type. Regular practice enhances the effectiveness of other Ayurvedic treatments and promotes overall well-being.",
        date: "2024-01-01",
        category: "Mental Health"
    },
    {
        id: 5,
        title: "Herbal Teas for Common Ailments",
        content: "Simple herbal tea recipes that can help with common health issues like cold, cough, indigestion, and stress.",
        fullContent: "Herbal teas are a gentle and effective way to address common health issues. Ginger tea helps with digestion and cold symptoms. Tulsi (holy basil) tea boosts immunity and reduces stress. Chamomile tea promotes sleep and relaxation. Cumin-coriander-fennel tea aids digestion. These simple remedies can be easily incorporated into daily life for better health.",
        date: "2023-12-28",
        category: "Home Remedies"
    },
    {
        id: 6,
        title: "Ayurvedic Approach to Sleep",
        content: "Learn how to improve your sleep quality using Ayurvedic principles and natural remedies.",
        fullContent: "Good sleep is essential for health and healing. Ayurveda recommends going to bed before 10 PM, avoiding heavy meals before sleep, creating a calming bedtime routine, and using herbs like Brahmi and Ashwagandha for better sleep. The bedroom should be cool, dark, and quiet. Proper sleep hygiene according to Ayurvedic principles can significantly improve sleep quality.",
        date: "2023-12-25",
        category: "Lifestyle"
    }
];

// State management
let currentTreatmentsPage = 1;
let currentWellnessPage = 1;
const itemsPerPage = 4;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    loadTreatments();
    loadWellness();
    initializeContactForm();
    initializeLoadMoreButtons();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        // Navbar background on scroll
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Load treatments
function loadTreatments() {
    const startIndex = (currentTreatmentsPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const treatmentsToShow = treatmentsData.slice(startIndex, endIndex);

    treatmentsToShow.forEach(treatment => {
        const treatmentCard = createTreatmentCard(treatment);
        treatmentsGrid.appendChild(treatmentCard);
    });

    // Hide load more button if all treatments are loaded
    if (endIndex >= treatmentsData.length) {
        loadMoreTreatmentsBtn.style.display = 'none';
    }
}

// Create treatment card
function createTreatmentCard(treatment) {
    const card = document.createElement('div');
    card.className = 'treatment-card';
    card.innerHTML = `
        <h3>${treatment.title}</h3>
        <p>${treatment.description}</p>
        <span class="read-more" onclick="showFullTreatment(${treatment.id})">Read More</span>
    `;
    return card;
}

// Show full treatment details
function showFullTreatment(treatmentId) {
    const treatment = treatmentsData.find(t => t.id === treatmentId);
    if (treatment) {
        // Create modal or expand the card
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>${treatment.title}</h2>
                <p>${treatment.fullDescription}</p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="bookConsultation('${treatment.title}')">Book Consultation</button>
                    <button class="btn btn-secondary" onclick="closeModal()">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    }
}

// Load wellness articles
function loadWellness() {
    const startIndex = (currentWellnessPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const wellnessToShow = wellnessData.slice(startIndex, endIndex);

    wellnessToShow.forEach(article => {
        const wellnessCard = createWellnessCard(article);
        wellnessGrid.appendChild(wellnessCard);
    });

    // Hide load more button if all articles are loaded
    if (endIndex >= wellnessData.length) {
        loadMoreWellnessBtn.style.display = 'none';
    }
}

// Create wellness card
function createWellnessCard(article) {
    const card = document.createElement('div');
    card.className = 'wellness-card';
    card.innerHTML = `
        <div class="meta">${article.category} • ${formatDate(article.date)}</div>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <span class="read-more" onclick="showFullWellness(${article.id})">Read More</span>
    `;
    return card;
}

// Show full wellness article
function showFullWellness(articleId) {
    const article = wellnessData.find(a => a.id === articleId);
    if (article) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <div class="meta">${article.category} • ${formatDate(article.date)}</div>
                <h2>${article.title}</h2>
                <p>${article.fullContent}</p>
                <div class="modal-actions">
                    <button class="btn btn-secondary" onclick="closeModal()">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Book consultation
function bookConsultation(treatment) {
    closeModal();
    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    // Pre-fill the subject field
    const subjectSelect = document.getElementById('subject');
    subjectSelect.value = 'consultation';
    // Add treatment info to message
    const messageTextarea = document.getElementById('message');
    messageTextarea.value = `I would like to book a consultation for: ${treatment}`;
}

// Initialize load more buttons
function initializeLoadMoreButtons() {
    loadMoreTreatmentsBtn.addEventListener('click', function() {
        currentTreatmentsPage++;
        loadTreatments();
    });

    loadMoreWellnessBtn.addEventListener('click', function() {
        currentWellnessPage++;
        loadWellness();
    });
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Send data to backend
        sendContactForm(data)
            .then(response => {
                showMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch(error => {
                showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                console.error('Error:', error);
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Send contact form data
async function sendContactForm(data) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        // For demo purposes, simulate success
        console.log('Form data:', data);
        
        // Send WhatsApp message (simulate)
        const whatsappMessage = `New Contact Form Submission:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}
Message: ${data.message}`;
        
        // In a real implementation, you would send this to your backend
        console.log('WhatsApp message:', whatsappMessage);
        
        return { success: true };
    }
}

// Show message
function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    const form = document.querySelector('.contact-form-container');
    form.insertBefore(message, form.firstChild);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Add modal styles dynamically
const modalStyles = `
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    max-width: 600px;
    width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}

.close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    cursor: pointer;
    color: #666;
}

.close:hover {
    color: #333;
}

.modal-actions {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

@media (max-width: 768px) {
    .modal-content {
        padding: 1.5rem;
        margin: 10px;
    }
    
    .modal-actions {
        flex-direction: column;
    }
    
    .modal-actions .btn {
        width: 100%;
    }
}
`;

// Add modal styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
