/* =========================================================
   KRISHNENDU BHAKTA PORTFOLIO
   MAIN.JS
========================================================= */


/* =========================================================
   1. TOGGLE MOBILE NAVBAR
========================================================= */

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", () => {

        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");

    });

}


/* =========================================================
   2. SCROLL SECTION ACTIVE LINK
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    sections.forEach((section) => {

        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
            scrollPosition >= offset &&
            scrollPosition < offset + height
        ) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    `header nav a[href="#${id}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });


    /* Sticky header */

    if (header) {

        header.classList.toggle(
            "sticky",
            scrollPosition > 100
        );

    }


    /* Close mobile menu after scrolling */

    if (menuIcon && navbar) {

        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");

    }

});


/* =========================================================
   3. SCROLL REVEAL
========================================================= */

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal({
        distance: "80px",
        duration: 1800,
        delay: 150,
        reset: false
    });


    ScrollReveal().reveal(
        ".home-content, .heading",
        {
            origin: "top"
        }
    );


    ScrollReveal().reveal(
        ".home-img, .certificates-container, .projects-grid, .contact form",
        {
            origin: "bottom"
        }
    );


    ScrollReveal().reveal(
        ".about-img",
        {
            origin: "left"
        }
    );


    ScrollReveal().reveal(
        ".about-content",
        {
            origin: "right"
        }
    );


    ScrollReveal().reveal(
        ".skill-category",
        {
            origin: "bottom",
            interval: 100
        }
    );


    ScrollReveal().reveal(
        ".experience-card",
        {
            origin: "bottom"
        }
    );

}


/* =========================================================
   4. TYPED.JS
========================================================= */

if (
    typeof Typed !== "undefined" &&
    document.querySelector(".multiple-text")
) {

    new Typed(".multiple-text", {

        strings: [
            "AI Engineer",
            "Generative AI Developer",
            "Python Developer",
            "Full Stack Developer",
            "Data Analyst",
            "Computer Vision Developer"
        ],

        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true

    });

}


/* =========================================================
   5. AI ASSISTANT ELEMENTS
========================================================= */

const aiAssistantButton =
    document.querySelector("#ai-assistant-button");

const aiChatWindow =
    document.querySelector("#ai-chat-window");

const aiChatClose =
    document.querySelector("#ai-chat-close");

const aiChatMessages =
    document.querySelector("#ai-chat-messages");


/* =========================================================
   6. OPEN / CLOSE AI ASSISTANT
========================================================= */

if (aiAssistantButton && aiChatWindow) {

    aiAssistantButton.addEventListener("click", () => {

        aiChatWindow.classList.toggle("active");

    });

}


if (aiChatClose && aiChatWindow) {

    aiChatClose.addEventListener("click", () => {

        aiChatWindow.classList.remove("active");

    });

}


/* =========================================================
   7. PORTFOLIO KNOWLEDGE BASE
========================================================= */

const portfolioKnowledge = {

    /* -----------------------------------------------------
       PERSONAL INFORMATION
    ----------------------------------------------------- */

    personal: {

        name: "Krishnendu Bhakta",

        title:
            "AI Engineer | Generative AI Developer | Python Developer",

        location:
            "West Bengal, India",

        education:
            "4th-year B.Tech Computer Science & Engineering student at Gargi Memorial Institute of Technology.",

        careerGoal:
            "Looking for internship and entry-level opportunities where he can contribute, learn, and grow as an AI Engineer.",

        interests:
            "Generative AI, Artificial Intelligence, Machine Learning, Computer Vision, Full Stack Development, Python, and Data Analytics."

    },


    /* -----------------------------------------------------
       EDUCATION
    ----------------------------------------------------- */

    education: {

        degree:
            "B.Tech in Computer Science & Engineering",

        year:
            "4th Year",

        institute:
            "Gargi Memorial Institute of Technology"

    },


    /* -----------------------------------------------------
       EXPERIENCE
    ----------------------------------------------------- */

    experience: {

        bharatcares: {

            company:
                "BharatCares®",

            role:
                "AI Automation & Intelligent Solutions Intern",

            duration:
                "22 June 2026 – 31 July 2026",

            durationText:
                "6-week internship",

            organization:
                "BharatCares in association with AICTE and IBM SkillsBuild",

            certificateId:
                "BHIBMAC10953",

            certificateUrl:
                "https://drive.google.com/file/d/1TaG6fTkOb2LGjPHgSfzN5Zo8oXZElpMJ/view?usp=sharing",

            technologies: [

                "Generative AI",
                "AI Automation",
                "AI Agents",
                "IBM Granite LLM",
                "IBM watsonx",
                "IBM watsonx Assistant",
                "Retrieval-Augmented Generation (RAG)",
                "Prompt Engineering",
                "Intelligent Virtual Agents",
                "AI Ethics",
                "AI Risk Management"

            ],

            project:
                "AI Skin Specialist"

        }

    },


    /* =====================================================
       SKILLS
    ===================================================== */

    skills: {

        aiEngineering: [

            "Python",
            "Generative AI",
            "Machine Learning",
            "Agentic AI",
            "Retrieval-Augmented Generation (RAG)",
            "Multi-Agent Systems",
            "Large Language Models (LLMs)",
            "IBM Granite",
            "IBM watsonx Assistant",
            "Intelligent Virtual Agents",
            "Prompt Engineering",
            "Gemini API",
            "Natural Language Processing",
            "Conversational AI",
            "Computer Vision",
            "FastAPI",
            "Streamlit"

        ],

        fullStack: [

            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "SQL",
            "REST APIs",
            "Responsive Design"

        ],

        dataAnalytics: [

            "Power BI",
            "Microsoft Excel",
            "SQL",
            "Data Cleaning",
            "Data Transformation",
            "Data Visualization",
            "Dashboard Development",
            "Data Modeling",
            "KPI Reporting",
            "DAX"

        ],

        tools: [

            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "MongoDB Compass",
            "Google Gemini API",
            "Streamlit",
            "FastAPI",
            "Clerk",
            "Convex"

        ]

    },


    /* =====================================================
       PROJECTS
    ===================================================== */

    projects: {

        aiSkinSpecialist: {

            id: "aiSkinSpecialist",

            name:
                "AI Skin Specialist",

            icon:
                "🤖",

            aliases: [
                "ai skin specialist",
                "skin specialist",
                "skin project",
                "skin ai",
                "dermatology",
                "skin analysis",
                "skin analyser",
                "skin analyzer"
            ],

            description:
                "An AI-powered dermatology assistant that analyses skin images and videos using Generative AI and Computer Vision and provides intelligent AI-generated insights and recommendations.",

            technologies: [

                "Python",
                "Google Gemini API",
                "Computer Vision",
                "Generative AI",
                "FastAPI",
                "Streamlit"

            ],

            features: [

                "AI Image Analysis",
                "Video Skin Analysis",
                "Computer Vision",
                "Intelligent AI Recommendations",
                "Real-time Processing",
                "AI-generated Skin Insights"

            ],

            problemsSolved: [

                "Helps users analyse skin images using AI",
                "Provides preliminary AI-generated skin insights",
                "Allows users to analyse skin videos",
                "Makes AI-powered skin analysis easier to access"

            ],

            github:
                "https://github.com/krishnendubhaktacse-kb/AI-Skin-Specialist",

            liveDemo:
                "https://ai-skin-specialist-kb.streamlit.app"

        },


        smartKB: {

            id: "smartKB",

            name:
                "SmartKB – Multimodal AI Assistant",

            icon:
                "🧠",

            aliases: [
                "smartkb",
                "smart kb",
                "multimodal ai",
                "ai assistant",
                "smart knowledge base"
            ],

            description:
                "A modern multimodal AI assistant inspired by conversational AI platforms that enables intelligent conversations and AI image generation.",

            technologies: [

                "Next.js",
                "Gemini API",
                "AI Chat",
                "Image Generation",
                "Clerk",
                "Convex"

            ],

            features: [

                "AI Chat Assistant",
                "Text-to-Image Generation",
                "Intelligent Prompt Responses",
                "Secure User Authentication",
                "Modern Web Interface",
                "Multimodal AI Interaction"

            ],

            problemsSolved: [

                "Provides an AI-powered conversational interface",
                "Allows users to interact with generative AI",
                "Supports AI image generation from prompts",
                "Provides secure user authentication"

            ],

            github:
                "https://github.com/krishnendubhaktacse-kb/SmartKB",

            liveDemo:
                "https://smart-kb.vercel.app"

        },


        powerBI: {

            id: "powerBI",

            name:
                "Data Analytics with Power BI",

            icon:
                "📊",

            aliases: [
                "power bi",
                "powerbi",
                "data analytics",
                "data analysis",
                "sales dashboard",
                "analytics project",
                "business intelligence"
            ],

            description:
                "An interactive business intelligence dashboard built using Power BI to analyse sales performance, customer behaviour, and important business metrics through data-driven visualisations.",

            technologies: [

                "Power BI",
                "SQL",
                "Microsoft Excel",
                "Data Visualization",
                "DAX",
                "Data Analytics"

            ],

            features: [

                "Interactive Dashboard",
                "Sales Performance Analysis",
                "KPI Reporting",
                "Business Insights",
                "Data Cleaning",
                "Data Transformation",
                "Data Visualization"

            ],

            problemsSolved: [

                "Converts raw business data into useful insights",
                "Helps analyse sales performance",
                "Provides KPI-based reporting",
                "Makes business data easier to understand visually"

            ],

            github:
                "https://github.com/krishnendubhaktacse-kb/data-analytics",

            liveDemo:
                null

        },


        redstore: {

            id: "redstore",

            name:
                "REDSTORE – E-Commerce Website",

            icon:
                "🛒",

            aliases: [
                "redstore",
                "red store",
                "ecommerce",
                "e-commerce",
                "shopping website",
                "online store",
                "shopping project"
            ],

            description:
                "A responsive front-end e-commerce website designed to provide an engaging online shopping experience with a modern user interface, product showcase, category browsing, shopping cart interface, and responsive layout.",

            technologies: [

                "HTML5",
                "CSS3",
                "JavaScript",
                "Responsive Design"

            ],

            features: [

                "Responsive User Interface",
                "Product Showcase",
                "Shopping Cart UI",
                "Mobile-Friendly Design",
                "Modern Shopping Interface",
                "Category Browsing"

            ],

            problemsSolved: [

                "Creates a modern online shopping interface",
                "Provides a responsive shopping experience",
                "Displays products in an organised interface",
                "Supports mobile-friendly browsing"

            ],

            github:
                "https://github.com/krishnendubhaktacse-kb/web-design",

            liveDemo:
                "https://krishnendubhaktacse-kb.github.io/web-design"

        }

    },


    /* =====================================================
       CERTIFICATIONS
    ===================================================== */

    certifications: [

        {
            name:
                "Make Agentic AI Work for You – IBM SkillsBuild",

            icon:
                "fas fa-user-gear",

            credential:
                "https://www.credly.com/badges/dccff173-9b14-4d89-bc9c-f0ade9406508/linked_in_profile"
        },

        {
            name:
                "Getting Started with Generative AI – IBM SkillsBuild",

            icon:
                "fas fa-wand-magic-sparkles",

            credential:
                "https://www.credly.com/badges/a06cbfa9-172c-4e63-bdbf-bd2e9aafe3ad/linked_in_profile"
        },

        {
            name:
                "Introduction to Intelligent Virtual Agents with IBM watsonx Assistant",

            icon:
                "fas fa-comments",

            credential:
                "https://www.credly.com/badges/a38cbc48-d752-48d8-8eb6-780f745b28c3/linked_in_profile"
        },

        {
            name:
                "Artificial Intelligence – Programming Hub",

            icon:
                "fas fa-robot",

            credential:
                "https://drive.google.com/file/d/1ofAPlMK5DPgkRzAckdbTdGbHt9IcYUUb/view?usp=drivesdk"
        },

        {
            name:
                "Machine Learning – Programming Hub",

            icon:
                "fas fa-brain",

            credential:
                "https://drive.google.com/file/d/1rb8J0IADIgTrldt-vGtDTDrIowvnZOvE/view?usp=drivesdk"
        },

        {
            name:
                "AI Image Generation – Programming Hub",

            icon:
                "fas fa-image",

            credential:
                "https://drive.google.com/file/d/1nmaHVGTdc7z9RRgfIFQY4XrFijH9UTn1/view?usp=sharing"
        },

        {
            name:
                "ChatGPT & Prompt Engineering – Programming Hub",

            icon:
                "fas fa-comment-dots",

            credential:
                "https://drive.google.com/file/d/1kYPA4nzfhzr6WViheKNu58QDJTNY_3oQ/view?usp=sharing"
        },

        {
            name:
                "Mastering AI Tools for Productivity – Programming Hub",

            icon:
                "fas fa-rocket",

            credential:
                "https://drive.google.com/file/d/1ovpxZr-4RPoVMZilbSmieZL3WdvV6Qbv/view?usp=sharing"
        },

        {
            name:
                "Computer Vision – Programming Hub",

            icon:
                "fas fa-eye",

            credential:
                "https://drive.google.com/file/d/1fm9DLL6Wj2g2jNmC-YDvvW6BhiWcaHcE/view?usp=sharing"
        },

        {
            name:
                "Natural Language Processing – Programming Hub",

            icon:
                "fas fa-language",

            credential:
                "https://drive.google.com/file/d/173RrELlxO-dDhsfbK9Moo0h4oGeOWRPi/view?usp=drive_link"
        },

        {
            name:
                "Python – Mimo",

            icon:
                "fa-brands fa-python",

            credential:
                "https://www.virtualbadge.io/certificate-validator?credential=d4c7d8f1-e0b4-4831-8e3f-80301fa2774c"
        },

        {
            name:
                "Front-End Development – Mimo",

            icon:
                "fas fa-laptop-code",

            credential:
                "https://www.virtualbadge.io/certificate-validator?credential=9efd24d6-5e69-4a3f-8618-3e99551c9423"
        },

        {
            name:
                "Back-End Development – Mimo",

            icon:
                "fas fa-server",

            credential:
                "https://www.virtualbadge.io/certificate-validator?credential=caa5d586-2927-461e-882e-982e3861b797"
        },

        {
            name:
                "Full-Stack Development – Mimo",

            icon:
                "fas fa-project-diagram",

            credential:
                "https://www.virtualbadge.io/certificate-validator?credential=515903c6-682b-44e8-8929-1fc35dc7d228"
        },

        {
            name:
                "Data Analytics with Power BI – Euphoria GenX",

            icon:
                "fas fa-chart-line",

            credential:
                "https://drive.google.com/file/d/1apTAQFw3JrTrCacbyvm2oJFx3nXzfyCf/view?usp=drivesdk"
        },

        {
            name:
                "Web Design – Academy of Skill Development",

            icon:
                "fa-solid fa-code",

            credential:
                "https://certificates.asd.org.in/generate/67351"
        }

    ],


    /* =====================================================
       LINKS
    ===================================================== */

    links: {

        github:
            "https://github.com/krishnendubhaktacse-kb",

        linkedin:
            "https://linkedin.com/in/krishnendubhakta",

        portfolio:
            "https://krishnendubhaktacse-kb.github.io"

    }

};


/* =========================================================
   8. HELPER FUNCTIONS
========================================================= */

function normalizeQuestion(question) {

    return question
        .toLowerCase()
        .trim()
        .replace(/[?!.,]/g, "")
        .replace(/\s+/g, " ");

}


function createList(items, symbol = "•") {

    return items
        .map(item => `${symbol} ${item}`)
        .join("<br>");

}


function getAllSkills() {

    return [

        ...portfolioKnowledge.skills.aiEngineering,
        ...portfolioKnowledge.skills.fullStack,
        ...portfolioKnowledge.skills.dataAnalytics,
        ...portfolioKnowledge.skills.tools

    ];

}


function getUniqueSkills() {

    return [
        ...new Set(
            getAllSkills()
        )
    ];

}


function findProject(question) {

    const q = normalizeQuestion(question);

    const projects =
        Object.values(
            portfolioKnowledge.projects
        );


    for (const project of projects) {

        for (const alias of project.aliases) {

            if (q.includes(alias)) {

                return project;

            }

        }

    }


    for (const project of projects) {

        if (
            q.includes(
                project.name.toLowerCase()
            )
        ) {

            return project;

        }

    }


    return null;

}


function findMentionedSkills(question) {

    const q =
        normalizeQuestion(question);

    const skills =
        getUniqueSkills();

    return skills.filter(skill => {

        return q.includes(
            skill.toLowerCase()
        );

    });

}


function findProjectsUsingSkill(skill) {

    const normalizedSkill =
        skill.toLowerCase();

    return Object.values(
        portfolioKnowledge.projects
    ).filter(project => {

        return project.technologies.some(
            technology =>
                technology
                    .toLowerCase()
                    .includes(normalizedSkill) ||
                normalizedSkill.includes(
                    technology.toLowerCase()
                )
        );

    });

}


/* =========================================================
   9. PROJECT HTML
========================================================= */

function createProjectResponse(project) {

    let linksHTML = "";


    if (project.github) {

        linksHTML += `

            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="ai-project-link"
            >

                <i class="fab fa-github"></i>

                GitHub

            </a>

        `;

    }


    if (project.liveDemo) {

        linksHTML += `

            <a
                href="${project.liveDemo}"
                target="_blank"
                rel="noopener noreferrer"
                class="ai-project-link live"
            >

                <i class="fas fa-external-link-alt"></i>

                Live Demo

            </a>

        `;

    }


    return `

        <p>
            ${project.icon}

            <strong style="color: var(--main-color);">
                ${project.name}
            </strong>
        </p>


        <p>
            ${project.description}
        </p>


        <p>

            🛠️

            <strong style="color: var(--main-color);">
                Technologies Used:
            </strong>

            <br>

            ${createList(project.technologies, "•")}

        </p>


        <p>

            ✨

            <strong style="color: var(--main-color);">
                Key Features:
            </strong>

            <br>

            ${createList(project.features, "✔")}

        </p>


        <p>

            🎯

            <strong style="color: var(--main-color);">
                Problems Solved:
            </strong>

            <br>

            ${createList(project.problemsSolved, "✔")}

        </p>


        <p>

            🔗

            <strong style="color: var(--main-color);">
                Project Links:
            </strong>

        </p>


        <div class="ai-project-links">

            ${linksHTML}

        </div>

    `;

}


/* =========================================================
   10. ALL PROJECTS RESPONSE
========================================================= */

function createAllProjectsResponse() {

    const projects =
        Object.values(
            portfolioKnowledge.projects
        );


    const projectList =
        projects.map(project => {

            return `

                <div class="ai-project-summary">

                    <p>
                        ${project.icon}
                        <strong style="color: var(--main-color);">
                            ${project.name}
                        </strong>
                    </p>

                    <p>
                        ${project.description}
                    </p>

                    <p>
                        <strong style="color: var(--main-color);">
                            Technologies:
                        </strong>
                        ${project.technologies.join(", ")}
                    </p>

                </div>

            `;

        }).join("<hr>");


    return {

        message: `

            <p>
                🚀 <strong>Krishnendu's Projects</strong>
            </p>

            <p>
                Here are all the projects currently available
                in his portfolio:
            </p>

            ${projectList}

            <p>
                Select a project below to see its complete
                details and direct links.
            </p>

        `,

        options: projects.map(project => ({

            text:
                `🤖 Can you tell me about ${project.name}?`,

            icon:
                "fas fa-folder-open"

        })).concat([

            {
                text:
                    "🛠️ What technical skills does Krishnendu have?",

                icon:
                    "fas fa-code"
            }

        ])

    };

}


/* =========================================================
   11. ALL SKILLS RESPONSE
========================================================= */

function createAllSkillsResponse() {

    const skills =
        portfolioKnowledge.skills;


    return {

        message: `

            <p>
                🛠️ <strong>Krishnendu's Complete Technical Skills</strong>
            </p>

            <p>
                Krishnendu has experience across
                <strong>AI Engineering, Full Stack Development,
                Data Analytics, and development tools.</strong>
            </p>


            <p>
                <strong>🤖 AI Engineering</strong>
                <br>

                ${createList(
                    skills.aiEngineering,
                    "•"
                )}

            </p>


            <p>
                <strong>💻 Full Stack Development</strong>
                <br>

                ${createList(
                    skills.fullStack,
                    "•"
                )}

            </p>


            <p>
                <strong>📊 Data Analytics</strong>
                <br>

                ${createList(
                    skills.dataAnalytics,
                    "•"
                )}

            </p>


            <p>
                <strong>⚙️ Tools & Platforms</strong>
                <br>

                ${createList(
                    skills.tools,
                    "•"
                )}

            </p>


            <p>
                <strong>
                    Total unique skills:
                    ${getUniqueSkills().length}
                </strong>
            </p>

        `,

        options: [

            {
                text:
                    "🚀 What projects has Krishnendu built?",

                icon:
                    "fas fa-rocket"
            },

            {
                text:
                    "🤖 What AI Engineering skills does Krishnendu have?",

                icon:
                    "fas fa-brain"
            },

            {
                text:
                    "💻 What Full Stack Development skills does Krishnendu have?",

                icon:
                    "fas fa-laptop-code"
            },

            {
                text:
                    "📊 What Data Analytics skills does Krishnendu have?",

                icon:
                    "fas fa-chart-line"
            }

        ]

    };

}


/* =========================================================
   12. SKILL CATEGORY RESPONSE
========================================================= */

function createSkillCategoryResponse(
    title,
    skills,
    icon
) {

    return {

        message: `

            <p>
                ${icon}
                <strong>${title}</strong>
            </p>

            <p>
                ${createList(skills, "•")}
            </p>

            <p>
                <strong>
                    ${skills.length} skills
                </strong>
                are listed in this category.
            </p>

        `,

        options: [

            {
                text:
                    "🛠️ What other technical skills does Krishnendu have?",

                icon:
                    "fas fa-code"
            },

            {
                text:
                    "🚀 What projects has Krishnendu built?",

                icon:
                    "fas fa-rocket"
            }

        ]

    };

}


/* =========================================================
   13. SPECIFIC SKILL RESPONSE
========================================================= */

function createSkillResponse(skill) {

    const projects =
        findProjectsUsingSkill(skill);


    let projectHTML = "";


    if (projects.length > 0) {

        projectHTML = `

            <p>
                <strong>
                    🚀 Projects using ${skill}:
                </strong>
                <br>

                ${projects
                    .map(project =>
                        `• ${project.name}`
                    )
                    .join("<br>")}

            </p>

        `;

    } else {

        projectHTML = `

            <p>
                This skill is listed in Krishnendu's
                portfolio knowledge base.
            </p>

        `;

    }


    return {

        message: `

            <p>
                🛠️ <strong>${skill}</strong>
            </p>

            <p>
                ${skill} is part of Krishnendu's
                technical skill set.
            </p>

            ${projectHTML}

        `,

        options: [

            {
                text:
                    "🛠️ What technical skills does Krishnendu have?",

                icon:
                    "fas fa-code"
            },

            {
                text:
                    "🚀 What projects has Krishnendu built?",

                icon:
                    "fas fa-rocket"
            }

        ]

    };

}


/* =========================================================
   14. CERTIFICATE RESPONSE
========================================================= */

function createCertificatesResponse() {

    const certificates =
        portfolioKnowledge.certifications;


    const certificateList =
        certificates.map(certificate => {

            return `

                <div class="ai-certificate-summary">

                    <p>
                        <i
                            class="${certificate.icon}"
                            style="color: var(--main-color);"
                        ></i>

                        <strong style="color: var(--main-color);">
                            ${certificate.name}
                        </strong>
                    </p>


                    <div class="ai-certificate-action">

                        <a
                            href="${certificate.credential}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="ai-project-link"
                            style="color: #fff;"
                        >

                            <i
                                class="fas fa-award"
                                style="color: #fff;"
                            ></i>

                            View Credential

                        </a>

                    </div>

                </div>

            `;

        }).join("<hr>");


    return {

        message: `

            <p>
                🏆 <strong>Krishnendu's Certifications</strong>
            </p>

            <p>
                Krishnendu has completed
                <strong>${certificates.length} certifications</strong>
                covering Artificial Intelligence, Generative AI,
                Machine Learning, Computer Vision, NLP,
                Full Stack Development, Data Analytics,
                and Web Development.
            </p>

            <div class="ai-certificates-list">

                ${certificateList}

            </div>

        `,

        options: [

            {
                text:
                    "🛠️ What technical skills does Krishnendu have?",

                icon:
                    "fas fa-code"
            },

            {
                text:
                    "🚀 What projects has Krishnendu built?",

                icon:
                    "fas fa-rocket"
            },

            {
                text:
                    "💼 What experience does Krishnendu have?",

                icon:
                    "fas fa-briefcase"
            }

        ]

    };

}


/* =========================================================
   15. GENERATE AI RESPONSE
========================================================= */

function generateAIResponse(question) {

    const q =
        normalizeQuestion(question);


    /* =====================================================
       PROJECT DETECTION FIRST
    ===================================================== */

    const project =
        findProject(q);


    if (project) {

        return {

            message:
                createProjectResponse(project),

            options: [

                {
                    text:
                        "🚀 What other projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                },

                {
                    text:
                        "🛠️ What technical skills does Krishnendu have?",

                    icon:
                        "fas fa-code"
                }

            ]

        };

    }


   /* =====================================================
   ALL PROJECTS
===================================================== */

if (

    q === "projects" ||

    q.includes("all projects") ||

    q.includes("other projects") ||

    q.includes("show projects") ||

    q.includes("your projects") ||

    q.includes("what projects") ||

    q.includes("what have you built") ||

    q.includes("what did you build") ||

    q.includes("list projects") ||

    q.includes("project list")

) {

    return createAllProjectsResponse();

}

    /* =====================================================
       ALL SKILLS
    ===================================================== */

    if (

        q === "skills" ||

        q === "skill" ||

        q.includes("all skills") ||

        q.includes("technical skills") ||

        q.includes("show skills") ||

        q.includes("what skills") ||

        q.includes("what are your skills") ||

        q.includes("what technologies do you know") ||

        q.includes("what technologies") ||

        q.includes("tech stack") ||

        q.includes("technology stack")

    ) {

        return createAllSkillsResponse();

    }


    /* =====================================================
       SPECIFIC SKILL
    ===================================================== */

    const mentionedSkills =
        findMentionedSkills(q);


    if (
        mentionedSkills.length === 1 &&
        (
            q.includes("skill") ||
            q.includes("know") ||
            q.includes("use") ||
            q.includes("technology") ||
            q.includes("technologies") ||
            q.includes("experience")
        )
    ) {

        return createSkillResponse(
            mentionedSkills[0]
        );

    }


    /* =====================================================
       AI ENGINEERING
    ===================================================== */

    if (

        q.includes("ai engineering") ||

        q.includes("ai skills") ||

        q.includes("artificial intelligence") ||

        q.includes("generative ai skills") ||

        q.includes("ai technologies")

    ) {

        return createSkillCategoryResponse(

            "AI Engineering",

            portfolioKnowledge.skills.aiEngineering,

            "🤖"

        );

    }


    /* =====================================================
       FULL STACK
    ===================================================== */

    if (

        q.includes("full stack") ||

        q.includes("web development") ||

        q.includes("frontend") ||

        q.includes("front end") ||

        q.includes("backend") ||

        q.includes("back end") ||

        q.includes("web technologies")

    ) {

        return createSkillCategoryResponse(

            "Full Stack Development",

            portfolioKnowledge.skills.fullStack,

            "💻"

        );

    }


    /* =====================================================
       DATA ANALYTICS
    ===================================================== */

    if (

        q.includes("data analytics") ||

        q.includes("data analysis") ||

        q.includes("analytics skills") ||

        q.includes("business intelligence") ||

        q.includes("power bi skills")

    ) {

        return createSkillCategoryResponse(

            "Data Analytics",

            portfolioKnowledge.skills.dataAnalytics,

            "📊"

        );

    }


    /* =====================================================
       TOOLS
    ===================================================== */

    if (

        q.includes("tools") ||

        q.includes("platforms") ||

        q.includes("development tools") ||

        q.includes("software tools")

    ) {

        return createSkillCategoryResponse(

            "Tools & Platforms",

            portfolioKnowledge.skills.tools,

            "⚙️"

        );

    }


    /* =====================================================
       PROJECTS USING A TECHNOLOGY
    ===================================================== */

    if (

        q.includes("which projects use") ||

        q.includes("projects using") ||

        q.includes("project uses") ||

        q.includes("used in which project")

    ) {

        const skills =
            findMentionedSkills(q);


        if (skills.length > 0) {

            const skill =
                skills[0];


            const projects =
                findProjectsUsingSkill(
                    skill
                );


            if (projects.length > 0) {

                return {

                    message: `

                        <p>
                            🔎 Projects using
                            <strong>${skill}</strong>:
                        </p>

                        <p>
                            ${projects
                                .map(project =>
                                    `• ${project.name}`
                                )
                                .join("<br>")}
                        </p>

                    `,

                    options:
                        projects.map(project => ({

                            text:
                                `🤖 Can you tell me about ${project.name}?`,

                            icon:
                                "fas fa-folder-open"

                        }))

                };

            }

        }

    }


    /* =====================================================
       ABOUT KRISHNENDU
    ===================================================== */

    if (

        q.includes("who is krishnendu") ||

        q.includes("about krishnendu") ||

        q.includes("tell me about krishnendu") ||

        q.includes("about him") ||

        q.includes("introduce krishnendu") ||

        q.includes("who are you")

    ) {

        return {

            message: `

                <p>
                    👋 <strong>Krishnendu Bhakta</strong>
                    is a 4th-year B.Tech Computer Science &
                    Engineering student at
                    <strong>
                        Gargi Memorial Institute of Technology
                    </strong>.
                </p>

                <p>
                    He focuses on
                    <strong>
                        Generative AI, AI Engineering,
                        Python, Machine Learning,
                        Computer Vision, Full Stack Development
                        and Data Analytics.
                    </strong>
                </p>

                <p>
                    He enjoys building intelligent applications
                    that solve practical real-world problems.
                </p>

            `,

            options: [

                {
                    text:
                        "🛠️ What technical skills does Krishnendu have?",

                    icon:
                        "fas fa-code"
                },

                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                },

                {
                    text:
                        "💼 What experience does Krishnendu have?",

                    icon:
                        "fas fa-briefcase"
                },

                {
                    text:
                        "🏆 What certifications has Krishnendu completed?",

                    icon:
                        "fas fa-certificate"
                }

            ]

        };

    }


    /* =====================================================
       EDUCATION
    ===================================================== */

    if (

        q.includes("education") ||

        q.includes("degree") ||

        q.includes("college") ||

        q.includes("university") ||

        q.includes("study") ||

        q.includes("qualification")

    ) {

        const education =
            portfolioKnowledge.education;


        return {

            message: `

                <p>
                    🎓 <strong>Education</strong>
                </p>

                <p>
                    <strong>Degree:</strong>
                    ${education.degree}
                </p>

                <p>
                    <strong>Year:</strong>
                    ${education.year}
                </p>

                <p>
                    <strong>Institute:</strong>
                    ${education.institute}
                </p>

            `,

            options: [

                {
                    text:
                        "🛠️ What technical skills does Krishnendu have?",

                    icon:
                        "fas fa-code"
                },

                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                }

            ]

        };

    }


    /* =====================================================
       WHAT HE LEARNED
       
       IMPORTANT:
       This block is intentionally placed BEFORE EXPERIENCE
       so questions containing "internship" are not treated
       as general experience questions.
    ===================================================== */

    if (

        q.includes("what krishnendu learned") ||

        q.includes("what did krishnendu learn") ||

        q.includes("what krishnendu learn") ||

        q.includes("what he learned") ||

        q.includes("what did he learn") ||

        q.includes("internship skills") ||

        q.includes("what was learned") ||

        (
            q.includes("internship") &&
            (
                q.includes("learn") ||
                q.includes("learning") ||
                q.includes("learned")
            )
        )

    ) {

        const internship =
            portfolioKnowledge
                .experience
                .bharatcares;


        return {

            message: `

                <p>
                    🧠 <strong>What Krishnendu Learned During His Internship</strong>
                </p>

                <p>
                    During his
                    <strong>6-week AI Automation & Intelligent Solutions Internship</strong>
                    at <strong>BharatCares®</strong>,
                    Krishnendu gained practical exposure to
                    modern AI technologies and intelligent solutions.
                </p>

                <p>
                    <strong>📚 Key Learning Areas:</strong>
                    <br>

                    ${createList(
                        internship.technologies,
                        "•"
                    )}

                </p>

                <p>
                    <strong>💡 Practical Learning:</strong>
                    <br>

                    • Understanding how Generative AI can be applied
                    to real-world problems
                    <br>

                    • Working with AI automation and AI agents
                    <br>

                    • Understanding Retrieval-Augmented Generation (RAG)
                    <br>

                    • Developing effective prompts using Prompt Engineering
                    <br>

                    • Exploring IBM Granite LLM and IBM watsonx
                    <br>

                    • Understanding Intelligent Virtual Agents
                    <br>

                    • Learning about AI Ethics and AI Risk Management
                    <br>

                    • Applying AI concepts to intelligent solutions
                </p>

                <p>
                    🎯 This internship helped him strengthen his
                    understanding of Generative AI, automation,
                    intelligent applications, and practical AI problem solving.
                </p>

            `,

            /*
               IMPORTANT:
               The "What did Krishnendu learn..." option is
               intentionally NOT included here, so it will
               not appear again after the user clicks it.
            */

            options: [

                {
                    text:
                        "💼 What experience does Krishnendu have?",

                    icon:
                        "fas fa-briefcase"
                },


                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                },

                {
                    text:
                        "🏆 What certifications has Krishnendu completed?",

                    icon:
                        "fas fa-certificate"
                }

            ]

        };

    }


    /* =====================================================
       EXPERIENCE
    ===================================================== */

    if (

        q.includes("experience") ||
        q.includes("internship") ||
        q.includes("intern") ||
        q.includes("bharatcares") ||
        q.includes("work experience")

    ) {

        const internship =
            portfolioKnowledge
                .experience
                .bharatcares;


        return {

            message: `

                <p>
                    💼 Krishnendu completed a
                    <strong>
                        ${internship.durationText}
                    </strong>
                    at
                    <strong>
                        ${internship.company}
                    </strong>.
                </p>

                <p>
                    <strong>Role:</strong><br>
                    ${internship.role}
                </p>

                <p>
                    <strong>Duration:</strong><br>
                    ${internship.duration}
                </p>

                <p>
                    <strong>Organization:</strong><br>
                    ${internship.organization}
                </p>

                <p>
                    <strong>Key Learning Areas:</strong><br>
                    ${createList(
                        internship.technologies,
                        "•"
                    )}
                </p>

                <p>
                    <strong>Certificate ID:</strong>
                    ${internship.certificateId}
                </p>

                <div class="ai-project-links">

                    <a
                        href="${internship.certificateUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="ai-project-link"
                    >

                        <i class="fas fa-award"></i>

                        View Certificate

                    </a>

                </div>

            `,

            options: [

                {
                    text:
                        "🧠 What did Krishnendu learn during his internship?",

                    icon:
                        "fas fa-brain"
                },


                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                },

                {
                    text:
                        "🏆 What certifications has Krishnendu completed?",

                    icon:
                        "fas fa-certificate"
                }

            ]

        };

    }


    /* =====================================================
       CERTIFICATIONS
    ===================================================== */

    if (

        q.includes("certificate") ||

        q.includes("certification") ||

        q.includes("certifications") ||

        q.includes("credentials")

    ) {

        return createCertificatesResponse();

    }


    /* =====================================================
       GITHUB
    ===================================================== */

    if (

        q.includes("github") ||

        q.includes("source code") ||

        q.includes("repositories") ||

        q.includes("repo")

    ) {

        return {

            message: `

                <p>
                    💻 You can explore all of Krishnendu's
                    source code and repositories on GitHub.
                </p>

                <div class="ai-project-links">

                    <a
                        href="${portfolioKnowledge.links.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="ai-project-link"
                    >

                        <i class="fab fa-github"></i>

                        Open GitHub

                    </a>

                </div>

            `,

            options: [

                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                },

                {
                    text:
                        "🛠️ What technical skills does Krishnendu have?",

                    icon:
                        "fas fa-code"
                }

            ]

        };

    }


    /* =====================================================
       LINKEDIN
    ===================================================== */

    if (

        q.includes("linkedin") ||

        q.includes("professional profile")

    ) {

        return {

            message: `

                <p>
                    🔗 You can connect with Krishnendu
                    through LinkedIn.
                </p>

                <div class="ai-project-links">

                    <a
                        href="${portfolioKnowledge.links.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="ai-project-link"
                    >

                        <i class="fab fa-linkedin"></i>

                        Open LinkedIn

                    </a>

                </div>

            `,

            options: [

                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                },

                {
                    text:
                        "💼 What experience does Krishnendu have?",

                    icon:
                        "fas fa-briefcase"
                }

            ]

        };

    }


    /* =====================================================
       CONTACT / HIRE
    ===================================================== */

    if (

        q.includes("contact") ||

        q.includes("hire") ||

        q.includes("reach") ||

        q.includes("job") ||

        q.includes("opportunity")

    ) {

        return {

            message: `

                <p>
                    📩 If you're interested in working with
                    <strong>Krishnendu</strong>, you can use
                    the <strong>Contact Me</strong> section
                    of this portfolio.
                </p>

                <p>
                    You can also connect with him directly
                    through LinkedIn.
                </p>

                <div class="ai-project-links">

                    <a
                        href="${portfolioKnowledge.links.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="ai-project-link"
                    >

                        <i class="fab fa-linkedin"></i>

                        Connect on LinkedIn

                    </a>

                </div>

            `,

            options: [

                {
                    text:
                        "👨‍💻 Can you tell me about Krishnendu?",

                    icon:
                        "fas fa-user"
                },

                {
                    text:
                        "💼 What experience does Krishnendu have?",

                    icon:
                        "fas fa-briefcase"
                },

                {
                    text:
                        "🚀 What projects has Krishnendu built?",

                    icon:
                        "fas fa-rocket"
                }

            ]

        };

    }


    /* =====================================================
       DEFAULT FALLBACK
    ===================================================== */

    return {

        message: `

            <p>
                🤔 I can help you explore
                <strong>Krishnendu's portfolio</strong>.
            </p>

            <p>
                You can ask me about his skills,
                projects, experience, education,
                certifications, GitHub, or LinkedIn.
            </p>

            <p>
                For example:
                <strong>
                    "Can you tell me about AI Skin Specialist?"
                </strong>
            </p>

        `,

        options: [

            {
                text:
                    "👨‍💻 Can you tell me about Krishnendu?",

                icon:
                    "fas fa-user"
            },

            {
                text:
                    "🛠️ What technical skills does Krishnendu have?",

                icon:
                    "fas fa-code"
            },

            {
                text:
                    "🚀 What projects has Krishnendu built?",

                icon:
                    "fas fa-rocket"
            },

            {
                text:
                    "💼 What experience does Krishnendu have?",

                icon:
                    "fas fa-briefcase"
            },

            {
                text:
                    "🏆 What certifications has Krishnendu completed?",

                icon:
                    "fas fa-certificate"
            }

        ]

    };

}


/* =========================================================
   16. ADD MESSAGE
========================================================= */

function addAIMessage(
    message,
    type = "ai"
) {

    if (!aiChatMessages) {
        return;
    }


    const messageElement =
        document.createElement("div");


    /* -----------------------------------------------------
       USER MESSAGE
    ----------------------------------------------------- */

    if (type === "user") {

        messageElement.className =
            "user-message";


        messageElement.innerHTML = `

            <div class="user-message-content">

                <p>
                    ${message}
                </p>

            </div>

        `;

    }


    /* -----------------------------------------------------
       AI MESSAGE
    ----------------------------------------------------- */

    else {

        messageElement.className =
            "ai-message";


        messageElement.innerHTML = `

            <div class="ai-message-avatar">

                <i class="fas fa-robot"></i>

            </div>


            <div class="ai-message-content">

                ${message}

            </div>

        `;

    }


    aiChatMessages.appendChild(
        messageElement
    );


    aiChatMessages.scrollTop =
        aiChatMessages.scrollHeight;

}


/* =========================================================
   17. TYPING INDICATOR
========================================================= */

function showTypingIndicator() {

    if (!aiChatMessages) {
        return;
    }


    if (
        document.querySelector("#ai-typing")
    ) {

        return;

    }


    const typingElement =
        document.createElement("div");


    typingElement.className =
        "ai-message";


    typingElement.id =
        "ai-typing";


    typingElement.innerHTML = `

        <div class="ai-message-avatar">

            <i class="fas fa-robot"></i>

        </div>


        <div class="ai-message-content ai-typing-content">

            <span></span>
            <span></span>
            <span></span>

        </div>

    `;


    aiChatMessages.appendChild(
        typingElement
    );


    aiChatMessages.scrollTop =
        aiChatMessages.scrollHeight;

}


/* =========================================================
   18. REMOVE TYPING INDICATOR
========================================================= */

function removeTypingIndicator() {

    const typingElement =
        document.querySelector("#ai-typing");


    if (typingElement) {

        typingElement.remove();

    }

}


/* =========================================================
   19. ADD OPTION BUTTONS
========================================================= */

function addAIOptions(options) {

    if (
        !aiChatMessages ||
        !Array.isArray(options) ||
        options.length === 0
    ) {

        return;

    }


    const optionsContainer =
        document.createElement("div");


    optionsContainer.className =
        "ai-options";


    options.forEach(option => {

        const button =
            document.createElement("button");


        button.type =
            "button";


        button.className =
            "ai-option-btn";


        button.innerHTML = `

            <i class="${option.icon || "fas fa-comment"}"></i>

            <span>
                ${option.text}
            </span>

        `;


        button.addEventListener(
            "click",
            () => {

                /*
                   Show selected question
                   as user message.
                */

                addAIMessage(
                    option.text,
                    "user"
                );


                /*
                   Remove current options.
                */

                optionsContainer.remove();


                /*
                   Show typing animation.
                */

                showTypingIndicator();


                /*
                   Generate response.
                */

                setTimeout(() => {

                    removeTypingIndicator();


                    const response =
                        generateAIResponse(
                            option.text
                        );


                    addAIMessage(
                        response.message,
                        "ai"
                    );


                    /*
                       Show next questions.
                    */

                    if (
                        response.options &&
                        response.options.length > 0
                    ) {

                        setTimeout(() => {

                            addAIOptions(
                                response.options
                            );

                        }, 250);

                    }

                }, 650);

            }
        );


        optionsContainer.appendChild(
            button
        );

    });


    aiChatMessages.appendChild(
        optionsContainer
    );


    aiChatMessages.scrollTop =
        aiChatMessages.scrollHeight;

}


/* =========================================================
   20. INITIAL AI OPTIONS
========================================================= */

function initializeAIOptions() {

    if (!aiChatMessages) {
        return;
    }


    if (
        aiChatMessages.querySelector(
            ".ai-options"
        )
    ) {

        return;

    }


    addAIOptions([

        {
            text:
                "👨‍💻 Can you tell me about Krishnendu?",

            icon:
                "fas fa-user"
        },

        {
            text:
                "🛠️ What technical skills does Krishnendu have?",

            icon:
                "fas fa-code"
        },

        {
            text:
                "🚀 What projects has Krishnendu built?",

            icon:
                "fas fa-rocket"
        },

        {
            text:
                "💼 What experience does Krishnendu have?",

            icon:
                "fas fa-briefcase"
        },

        {
            text:
                "🏆 What certifications has Krishnendu completed?",

            icon:
                "fas fa-certificate"
        }

    ]);

}


/* =========================================================
   21. INITIALIZE AI ASSISTANT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (aiChatMessages) {

            initializeAIOptions();

        }

    }
);


/* =========================================================
   22. OPTIONAL GLOBAL ACCESS
   Useful for testing from browser console.
========================================================= */

window.portfolioKnowledge =
    portfolioKnowledge;

window.generateAIResponse =
    generateAIResponse;