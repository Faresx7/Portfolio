/* --- Configuration --- */
const portfolioData = {
    hero: {
        titles: ["Data Scientist", "Python Developer", "Data Analyst", "Problem Solver"],
        description: "Turning raw data into actionable insights. Specialized in data analysis, and predictive modeling."
    },

    socials: [
        {
            name: "GitHub",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
            link: "https://github.com/faresx7"
        },
        {
            name: "LinkedIn",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
            link: "https://www.linkedin.com/in/fares-esaam-0b3491222/"
        },
        {
            name: "Email",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
            link: "mailto:faresesaam001@gmail.com"
        }
    ],
    skills: [
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Scikit-Learn", icon: "🤖" },
        { name: "SQL", icon: "🗄️" },
        { name: "Matplotlib", icon: "📈" },
        { name: "Git", icon: "🐙" },
        { name: "Excel", icon: "📊" },
        { name: 'Streamlit', icon: '📊' },
        { name: 'PowerBI', icon: '📊' }
    ],
    experience: [
        {
            role: "Data Science Intern",
            company: "DEPI (Digital Egypt Pioneers Initiative)",
            duration: "6 Months",
            desc: "Intensive scholarship program focused on advanced data science methodologies and real-world application.",
            tags: ["Python", "Data Analysis", "SQL", "Machine Learning", "Pipelines"]
        },
        {
            company: "Minia National University",
            role: "Bachelor's Degree",
            duration: "4 Years",
            desc: "Focused on Computer Science and Artificial Intelligence.",
            tags: ["Education", "CS", "Data Science"]

        },
    ],
    projects: [
        {
            title: `Ultra Marathon EDA Project
            (Exploratory Data Analysis)`,
            subtitle: "Data Analysis",
            desc: "An EDA project on Ultra Marathon races with an interactive GUI for exploring race data from 1980's, generating key insights from athlete performances.",
            details: `
            <h3>Detailed Project Description</h3>
            <p>This project is a <strong>comprehensive Exploratory Data Analysis (EDA)</strong> of Ultra-Marathon race datasets, aimed at uncovering trends, patterns, and insights about athletes' performances across various races. It combines <strong>data preprocessing, visualization, and an interactive GUI</strong>, making it accessible for both technical and non-technical users.</p>

            <h3>1. Data Collection & Structure</h3>
            <ul>
            <li>The dataset includes <strong>Ultra-Marathon race results</strong> with athlete information (age, gender, nationality), race details (distance, location, elevation), and performance metrics (completion times, rankings).</li>
            <li>Data is structured into clean tabular formats, suitable for analysis and visualization.</li>
            </ul>

            <h3>2. Data Cleaning & Preprocessing</h3>
            <ul>
            <li><strong>Missing Value Handling:</strong> Identifies incomplete entries and applies strategies like imputation or removal based on context.</li>
            <li><strong>Outlier Detection:</strong> Flags extreme performance times or unrealistic data points that could skew analysis.</li>
            <li><strong>Data Standardization:</strong> Ensures consistency in units (e.g., kilometers vs miles), formatting of categorical variables, and uniform datetime representations.</li>
            <li><strong>Feature Engineering:</strong> Creates derived variables such as pace per kilometer, age group categories, and participation frequency to enrich analysis.</li>
            </ul>

            <h3>3. Exploratory Data Analysis (EDA)</h3>
            <ul>
            <li><strong>Statistical Summaries:</strong> Computes mean, median, standard deviation, and percentiles for numeric variables.</li>
            <li><strong>Trend Analysis:</strong> Examines performance trends across years, distances, and participant demographics.</li>
            <li><strong>Comparative Visualizations:</strong> Uses histograms, boxplots, scatter plots, and heatmaps to compare performance across age groups, gender, and nationality.</li>
            <li><strong>Correlation Analysis:</strong> Investigates relationships between variables like age, experience, and finishing time.</li>
            </ul>

            <h3>4. Interactive GUI</h3>
            <ul>
            <li>Built with <strong>Streamlit</strong>, the GUI allows users to:
                <ul>
                <li>Dynamically generate visualizations like bar charts, line plots, and distribution plots.</li>
                <li>Export analysis results and charts for further reporting or presentation.</li>
                </ul>
            </li>
            <li>The GUI emphasizes <strong>user-friendliness</strong>, enabling non-programmers to explore data intuitively.</li>
            </ul>

            <h3>5. Insight Generation & Reporting</h3>
            <ul>
            <li>Highlights key findings, such as:
                <ul>
                <li>Average completion times across distances and age groups.</li>
                <li>Participation trends by gender and nationality.</li>
                <li>Relationships between experience, age, and Ultra-Marathon performance.</li>
                </ul>
            </li>
            <li>Supports decision-making for <strong>athletes, coaches, and race organizers</strong> by providing actionable insights.</li>
            </ul>

            <h3>6. Technologies & Practices</h3>
            <ul>
            <li><strong>Python Libraries:</strong> pandas, numpy, matplotlib,Streamlit, plotly, Scikit-learn, Seaborn.</li>
            <li><strong>Best Practices:</strong> Modular code design, reproducible workflows, clear documentation, and robust error handling in GUI.</li>
            <li>Focus on scalability to handle larger datasets as new races and results are added.</li>
            </ul>

            <h3>7. Project Goal</h3>
            <ul>
            <li>Transform raw Ultra-Marathon datasets into <strong>structured, insightful, and actionable information</strong>.</li>
            <li>Provide a <strong>self-contained tool</strong> for data exploration, analysis, and visualization with minimal setup.</li>
            </ul>
                        
            `,
            images: [
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 202355.png",
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 200521.png",
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 200547.png",
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 200616.png",
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 200710.png",
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 200746.png",
                "assets/ultra marathon eda/لقطة شاشة 2026-02-01 201226.png"
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Fallback/Main
            tech: ["Python", "Pandas", "Numpy", "Plotly", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit", "Jupyter notebook"],
            link: "https://github.com/Faresx7/Depi_Amit_ONL3_AIS4_S4/tree/main/Data%20Analysis%20project"
        },
        {
            title: "Sales Prediction Model",
            subtitle: "Predictive Analytics",
            desc: "Forecasting future sales trends using regression analysis to assist in strategic inventory management.",
            details: "Built a predictive model to forecast sales with high accuracy. The project involved feature engineering, model selection (Linear Regression, Random Forest), and hyperparameter tuning. The final model provides actionable insights for inventory planning.",
            image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2070&auto=format&fit=crop", // Placeholder
            tech: ["Scikit-Learn", "Matplotlib", "Seaborn"],
            link: "#"
        },

        {
            title: "Cafe Sales Performance Dashboard",
            subtitle: "Data Analysis",
            desc: "Cafe Sales Performance PowerBI Dashboard to support Decision-Making",
            details: `
                <p>This dashboard presents an analytical overview of café sales performance, built to support informed business and operational decision-making. It transforms raw transactional data into actionable insights across sales, products, locations, payment methods, and time.</p>
                <br>
                <h3>Data Preparation & Cleaning</h3>
                <p>As part of the data preparation process, the dataset was cleaned and validated to handle missing and null values. Missing fields were logically derived where possible, including:</p>
                <ul>
                    <li>Calculating <strong>quantity</strong> from total spent and unit price</li>
                    <li>Deriving <strong>unit price</strong> from total spent and quantity</li>
                    <li>Reconstructing <strong>total spent</strong> from quantity and unit price</li>
                </ul>
                <p>This ensured data consistency and reliability before analysis.</p>
                <br>
                <h3>Key Insights</h3>
                <p>The dashboard highlights key KPIs such as total sales, units sold, average spend per transaction, top-performing product, and monthly sales growth. Visuals analyze revenue by product, payment method, and sales channel (in-store vs. takeaway), while a monthly trend chart reveals seasonality and performance fluctuations.</p>
                <br>
                <h3>Interactive Features</h3>
                <p>Interactive filters enable focused analysis by season, location, and product, turning the dashboard into a practical decision-support tool. Overall, this project demonstrates strong data cleaning, analytical, and visualization skills, with a clear focus on real business decision-making.</p>
                <h3>Business Value</h3>
                <ul>
                    <li>Identifies top-performing products and revenue drivers to support pricing and promotion decisions</li>
                    <li>Highlights customer payment preferences to guide digital payment and partnership strategies</li>
                    <li>Reveals sales trends and seasonality for better inventory planning and staffing decisions</li>
                    <li>Compares in-store vs. takeaway performance to optimize operational focus</li>
                    <li>Enables fast, self-service analysis through interactive filtering, reducing dependency on manual reports</li>
                </ul>  `,
            images: [
                "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 183343.png",
                "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 183436.png",
                "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 183451.png",
                "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 183527.png",
                "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 183609.png",
                "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 183653.png"
            ],
            image: "assets/PowerBI cafe dashboard/لقطة شاشة 2026-02-01 171619.png",
            tech: ["PowerBI (DAX,Data Modeling, Visuals)", "Python", "Pandas", "Numpy"],
            link: "https://github.com/Faresx7/Fares_Esaam/tree/main/Cafe%20data%20cleaning"
        },
        {
            title: "Text classification model",
            subtitle: "Machine Learning & NLP",
            desc: "Text classification model takes field of interest and tell you what will you be in future",
            details: `
            <h2>Machine Learning & NLP Career Prediction System</h2>

            <p>
            This project is a <strong>Machine Learning and Natural Language Processing (NLP)</strong> application
            designed to predict a user's <strong>potential future career field</strong> based on the text they provide,
            such as their interests, skills, or personal goals.
            </p>

            <h2>Project Overview</h2>
            <p>
            The system follows a complete NLP pipeline, starting from raw text input and ending with a career
            field prediction, while applying proper machine learning best practices to ensure reliable and
            realistic results.
            </p>

            <h2>Text Processing & NLP Pipeline</h2>
            <p>
            User input text is processed using <strong>NLTK</strong> through multiple preprocessing steps:
            </p>

            <ul>
            <li>Text normalization (lowercasing and noise removal)</li>
            <li>Tokenization to split text into meaningful units</li>
            <li>Lemmatization to reduce words to their root forms</li>
            <li>Stopword removal to eliminate non-informative words</li>
            </ul>

            <p>
            After preprocessing, the text is converted into numerical features using
            <strong>TF-IDF Vectorization</strong>, allowing the model to capture the importance of words
            relative to the entire dataset.
            </p>

            <h2>Machine Learning Model</h2>
            <ul>
            <li>The prediction model is built using <strong>Logistic Regression</strong>.</li>
            <li>The model is trained on a <strong>pre-existing labeled dataset</strong> representing different career fields.</li>
            <li>TF-IDF features are used as input to the model during training and prediction.</li>
            </ul>

            <h2>Model Reliability & Best Practices</h2>
            <ul>
            <li>Data leakage is avoided by applying preprocessing and vectorization only within the training pipeline.</li>
            <li>Overfitting is minimized using proper data splitting and regularization techniques.</li>
            <li>A clear separation between training and testing data is maintained to simulate real-world usage.</li>
            </ul>

            <h2>User Interface & Experience</h2>
            <p>
            The project includes a simple and interactive user interface that enhances usability and engagement:
            </p>

            <ul>
            <li>A text input area for users to enter their information.</li>
            <li>A <strong>Clear Chat</strong> button to reset the input instantly.</li>
            <li>A <strong>Balloons animation</strong> feature to make the interaction more enjoyable and engaging.</li>
            </ul>
            `,
            images: ["assets/nlp chatbot/لقطة شاشة 2026-02-02 145604.png",
                    "assets/nlp chatbot/لقطة شاشة 2026-02-02 145617.png"

            ]
            ,
            tech: ["Python", "NLTK","Pipelines", "Scikit-learn","Streamlit","TF-IDF Vectorizer"],
            link: "https://github.com/Faresx7/Fares_Esaam/tree/main/Text%20classification%20model"
        }

    ]
};

/* --- Render Functions --- */
function renderContent() {
    // 1. Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = portfolioData.skills.map(skill => `
            <div class="glass-panel skill-item fade-in">
                <div class="skill-icon">${skill.icon}</div>
                <span>${skill.name}</span>
            </div>
        `).join('');
    }

    // 2. Experience
    const expContainer = document.getElementById('experience-container');
    if (expContainer) {
        expContainer.innerHTML = portfolioData.experience.map(job => `
            <div class="glass-panel smart-card fade-in">
                <h3>${job.role}</h3>
                <span class="subtitle">${job.company} • ${job.duration}</span>
                <p>${job.desc}</p>
                <div class="tags">
                    ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // 3. Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = portfolioData.projects.map(project => `
            <div class="glass-panel smart-card fade-in">
                <h3>${project.title}</h3>
                <span class="subtitle">${project.subtitle}</span>
                <p>${project.desc}</p>
                <div class="tags" style="margin-bottom: 20px;">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <div class="card-buttons">
                    <a href="${project.link}" class="btn btn-secondary">View Project</a>
                    <button class="btn btn-secondary details-btn" data-title="${project.title}">See Details</button>
                </div>
            </div>
        `).join('');
    }

    // 4. Social Links
    const socialContainer = document.getElementById('social-links-container');
    if (socialContainer) {
        socialContainer.innerHTML = portfolioData.socials.map(social => `
            <a href="${social.link}" target="_blank" class="social-icon" title="${social.name}">
                ${social.icon}
            </a>
        `).join('');
    }
}

/* --- Typing Effect --- */
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 80; // Fast typing speed

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 150; // Fast pause before new word
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

/* --- 3D Tilt Effect & Interactions --- */
function initObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => observer.observe(el));
}

function initTiltEffect() {
    const cards = document.querySelectorAll('.smart-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImgContainer = document.getElementById('modal-image-container');
    const modalTech = document.getElementById('modal-tech');
    const modalDots = document.getElementById('modal-dots');

    // Open Modal
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card tilt interference if needed
            const title = btn.getAttribute('data-title');
            const project = portfolioData.projects.find(p => p.title === title);

            if (project) {
                modalTitle.innerText = project.title;
                modalDesc.innerHTML = project.details || project.desc;
                modalTech.innerHTML = project.tech.map(t => `<span class="tag">${t}</span>`).join('');

                // Handle Images (Gallery)
                modalImgContainer.innerHTML = ''; // Clear previous images
                modalDots.innerHTML = ''; // Clear previous dots

                let images = [];
                if (project.images && project.images.length > 0) {
                    images = project.images;
                } else if (project.image) {
                    images = [project.image];
                } else {
                    images = ["photo.png"]; // Fallback
                }

                // Create Images
                images.forEach((imgSrc, index) => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = project.title;
                    modalImgContainer.appendChild(img);
                });

                // Create Dots if multiple images
                if (images.length > 1) {
                    images.forEach((_, index) => {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        if (index === 0) dot.classList.add('active');
                        modalDots.appendChild(dot);
                    });
                }

                // Reset Scroll
                modalImgContainer.scrollLeft = 0;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable scroll
            }
        });
    });

    // Handle Scroll for Dots
    modalImgContainer.addEventListener('scroll', () => {
        const dots = modalDots.querySelectorAll('.dot');
        if (dots.length === 0) return;

        const scrollLeft = modalImgContainer.scrollLeft;
        const width = modalImgContainer.offsetWidth;
        const index = Math.round(scrollLeft / width);

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    });

    // Close Functions
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape Key to Close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Content
    renderContent();

    // 2. Init Typing
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        new TypeWriter(typingElement, portfolioData.hero.titles);
    }

    // Inject Hero Description
    const heroDesc = document.getElementById('hero-description');
    if (heroDesc) {
        heroDesc.innerText = portfolioData.hero.description;
    }

    // 3. Init Effects
    setTimeout(() => {
        initObservers();
        initTiltEffect();
        initModal();
        // Note: Resume preview now uses iframe - no JavaScript needed
    }, 100);

    // Dynamic Title
    const originalTitle = document.title;
    window.addEventListener('blur', () => { document.title = "Hit me up! 👋"; });
    window.addEventListener('focus', () => { document.title = originalTitle; });

    // Smooth Scroll Fallback & Active Link Logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Optional: Update URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
});

/* --- Resume PDF Preview Loader --- */
function loadResumePreview() {
    console.log('[Resume Preview] Starting to load...');
    const previewContainer = document.getElementById('resume-preview');

    if (!previewContainer) {
        console.error('[Resume Preview] Container element not found!');
        return;
    }

    const resumePath = 'assets/resume/Fares_Esaam_Resume.pdf';
    console.log('[Resume Preview] PDF path:', resumePath);

    // Show loading state
    previewContainer.innerHTML = `
        <div class="preview-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
            </svg>
            <p>Loading PDF Preview...</p>
        </div>
    `;

    // Try to load PDF.js from CDN
    if (typeof pdfjsLib !== 'undefined') {
        console.log('[Resume Preview] PDF.js already loaded');
        loadPDFPreview(resumePath, previewContainer);
    } else {
        console.log('[Resume Preview] Loading PDF.js from CDN...');
        // Load PDF.js dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        script.onload = () => {
            console.log('[Resume Preview] PDF.js loaded successfully');
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            loadPDFPreview(resumePath, previewContainer);
        };
        script.onerror = (error) => {
            console.error('[Resume Preview] Failed to load PDF.js:', error);
            createFallbackPreview(previewContainer);
        };
        document.head.appendChild(script);
    }
}

function loadPDFPreview(pdfPath, container) {
    console.log('[PDF Render] Starting to load document:', pdfPath);

    pdfjsLib.getDocument(pdfPath).promise.then(pdf => {
        console.log('[PDF Render] PDF document loaded. Number of pages:', pdf.numPages);

        // Get the first page
        pdf.getPage(1).then(page => {
            console.log('[PDF Render] Got page 1');

            // Calculate scale to fit container width (approx 300px)
            const desiredWidth = 260; // Adjusted for padding
            const viewport = page.getViewport({ scale: 1.0 });
            const scale = desiredWidth / viewport.width;
            const scaledViewport = page.getViewport({ scale });

            console.log('[PDF Render] Viewport:', scaledViewport.width, 'x', scaledViewport.height);

            // Create canvas
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = scaledViewport.height;
            canvas.width = scaledViewport.width;
            canvas.style.maxWidth = '100%';
            canvas.style.height = 'auto';
            canvas.style.display = 'block';

            // Render PDF page to canvas
            const renderContext = {
                canvasContext: context,
                viewport: scaledViewport
            };

            console.log('[PDF Render] Rendering page to canvas...');
            page.render(renderContext).promise.then(() => {
                console.log('[PDF Render] Rendering complete! Displaying canvas...');

                // Clear placeholder and add canvas
                container.innerHTML = '';
                container.appendChild(canvas);

                // Add subtle fade-in animation
                canvas.style.opacity = '0';
                setTimeout(() => {
                    canvas.style.transition = 'opacity 0.5s ease-in-out';
                    canvas.style.opacity = '1';
                    console.log('[PDF Render] Preview displayed successfully!');
                }, 50);
            }).catch(error => {
                console.error('[PDF Render] Error rendering page to canvas:', error);
                createFallbackPreview(container);
            });
        }).catch(error => {
            console.error('[PDF Render] Error getting page 1:', error);
            createFallbackPreview(container);
        });
    }).catch(error => {
        console.error('[PDF Render] Error loading PDF document:', error);
        console.error('[PDF Render] Error details:', error.message);
        createFallbackPreview(container);
    });
}

function createFallbackPreview(container) {
    // Show a nice fallback message
    container.innerHTML = `
        <div class="preview-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <p style="margin: 0; font-size: 0.85rem;">Resume PDF</p>
            <p style="margin: 0; font-size: 0.7rem; opacity: 0.7;">Click buttons below to view →</p>
        </div>
    `;
}
