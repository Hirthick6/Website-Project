/**
 * GenZova Solutions Data — 9 solution pages
 * Each rendered dynamically via renderSolutionDetail()
 */
const SOLUTIONS_DATA = [
  {
    name: 'Client Based Projects',
    slug: 'client-projects',
    tagline: 'End-to-End Custom Software Development for Businesses Across Industries',
    contact: '',
    icon: 'projects',
    btnLabel: 'Explore Projects',
    services: [
      {
        title: 'Custom Web Applications',
        desc: 'Tailored web solutions built from scratch to match your unique business requirements and workflows.',
        features: ['Scalable Architecture', 'Responsive Design', 'API Integration', 'Performance Optimized']
      },
      {
        title: 'Enterprise Software',
        desc: 'Robust enterprise-grade applications for CRM, ERP, HRMS, and business process automation.',
        features: ['Multi-tenant Systems', 'Role-Based Access', 'Audit Logging', 'Cloud Deployment']
      },
      {
        title: 'MVP & Startup Solutions',
        desc: 'Rapid prototyping and MVP development to validate your business idea and attract investors.',
        features: ['Agile Development', 'Quick Turnaround', 'Investor-Ready', 'Scalable Foundation']
      }
    ],
    techStack: [
      { title: 'Frontend Technologies', desc: 'Modern UI frameworks for responsive, interactive user experiences.', tags: ['React', 'Angular', 'Vue.js', 'Next.js'] },
      { title: 'Backend Technologies', desc: 'Scalable server-side solutions for robust business logic.', tags: ['Node.js', 'Python', 'Java', '.NET'] },
      { title: 'Cloud & DevOps', desc: 'Cloud-native deployment and CI/CD automation.', tags: ['AWS', 'Azure', 'Docker', 'Kubernetes'] }
    ],
    process: [
      { title: 'Requirement Analysis', desc: 'We gather your business requirements, define scope, and create a detailed project roadmap.' },
      { title: 'UI/UX Design', desc: 'Our designers create wireframes and prototypes aligned with your brand and user expectations.' },
      { title: 'Agile Development', desc: 'We build in sprints with regular demos, ensuring transparency and quality at every stage.' },
      { title: 'Testing & Deployment', desc: 'Rigorous QA testing followed by seamless deployment and post-launch support.' }
    ],
    useCases: [
      { title: 'Healthcare', desc: 'Patient management systems, telemedicine platforms, and health record digitization.' },
      { title: 'E-Commerce', desc: 'Custom online stores, marketplace platforms, and inventory management systems.' },
      { title: 'Finance', desc: 'Banking portals, payment gateways, and financial analytics dashboards.' },
      { title: 'Education', desc: 'Learning management systems, virtual classrooms, and student portals.' },
      { title: 'Real Estate', desc: 'Property listing platforms, CRM systems, and virtual tour applications.' },
      { title: 'Logistics', desc: 'Fleet management, route optimization, and supply chain tracking systems.' }
    ],
    packages: [
      { name: 'Starter Project', price: '₹18,000', tag: '', features: ['Single Module Application', 'Responsive Design', 'Basic API Integration', '3 Months Support', 'Source Code Delivery'] },
      { name: 'Business Project', price: '₹22,000', tag: 'MOST POPULAR', features: ['Multi-Module Application', 'Custom UI/UX Design', 'Advanced API Integration', 'Admin Dashboard', '6 Months Support', 'Cloud Deployment'] },
      { name: 'Enterprise Project', price: '₹25,000', tag: '', features: ['Enterprise-Grade System', 'Microservices Architecture', 'Third-Party Integrations', 'Real-Time Analytics', '12 Months Support', 'Dedicated Team'] }
    ],
    faqs: [
      { q: 'How long does a typical project take?', a: 'Timelines vary based on complexity. Simple web apps take 4-8 weeks, while enterprise solutions can take 12-24 weeks. We provide detailed timelines during the planning phase.' },
      { q: 'Do you provide post-launch support?', a: 'Yes, all our packages include post-launch support ranging from 3 to 12 months. We also offer extended maintenance contracts.' },
      { q: 'Can you work with our existing technology stack?', a: 'Absolutely. We are technology-agnostic and can work with your current stack or recommend the best technologies for your project goals.' },
      { q: 'Do you sign NDAs and ensure data security?', a: 'Yes, we sign NDAs before project kickoff and follow industry-standard security practices throughout the development lifecycle.' }
    ]
  },
  {
    name: 'Corporate Training',
    slug: 'corporate-training',
    tagline: 'Upskill Your Workforce with Industry-Relevant Technology Training Programs',
    contact: '',
    icon: 'training',
    btnLabel: 'View Training Programs',
    services: [
      {
        title: 'Programming Languages',
        desc: 'Master core programming languages with hands-on projects, real-world coding exercises, and expert-led sessions.',
        features: ['C', 'C++', 'Python', 'Java']
      },
      {
        title: 'Software Development',
        desc: 'Build strong software engineering fundamentals with industry-standard practices and modern development methodologies.',
        features: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'Advanced Python Programming', 'Spring Boot (Java)']
      },
      {
        title: 'Web Development',
        desc: 'Full-stack web development training covering frontend, backend, and modern JavaScript frameworks.',
        features: ['Full Stack Development', 'PHP & Laravel Framework', 'Node.js Development', 'React.js / Angular / Vue.js / Next.js']
      },
      {
        title: 'Mobile App Development',
        desc: 'Cross-platform and native mobile app development training for iOS and Android platforms.',
        features: ['Flutter Mobile App Development', 'React Native', 'Android Development (Kotlin / Java)']
      },
      {
        title: 'AI & Data Science',
        desc: 'Comprehensive AI and data science training from fundamentals to advanced generative AI applications.',
        features: ['Data Science with Python', 'Computer Vision', 'Reinforcement Learning', 'Generative AI Applications']
      },
      {
        title: 'AI for Business',
        desc: 'Applied AI training focused on building real-world business solutions and intelligent automation systems.',
        features: ['Chatbot Development', 'Recommendation Systems', 'AI for Business Applications']
      },
      {
        title: 'Cloud Computing',
        desc: 'Cloud platform training and certification preparation across all major cloud providers.',
        features: ['AWS Cloud Training', 'Microsoft Azure', 'Google Cloud Platform (GCP)']
      },
      {
        title: 'DevOps',
        desc: 'Modern DevOps practices, containerization, CI/CD pipelines, and MLOps for AI model deployment.',
        features: ['DevOps Fundamentals', 'Docker & Kubernetes', 'CI/CD Pipelines', 'AI Model Deployment (MLOps)']
      },
      {
        title: '3D Game Development',
        desc: 'Game design fundamentals and development using industry-standard game engines and technologies.',
        features: ['Game Design & Fundamentals', 'Game Development Technologies', 'Unity / Unreal Engine Development']
      }
    ],
    techStack: [],
    process: [
      { title: 'Training Consultation', desc: 'We discuss your organization\'s goals, team skill levels, and technology requirements to identify the right training programs.' },
      { title: 'Custom Curriculum Design', desc: 'Our experts design a tailored syllabus with hands-on labs, real-world case studies, and assessments aligned to your industry.' },
      { title: 'Expert-Led Training', desc: 'Industry professionals deliver interactive sessions with live coding, workshops, Q&A, and practical exercises.' },
      { title: 'Certification & Follow-Up', desc: 'Participants receive GenZova certifications, performance reports, and 30-day post-training mentorship support.' }
    ],
    useCases: [
      { title: 'Build Production-Ready Applications', desc: 'Trainees gain the ability to design, develop, and deploy full-stack web and mobile applications using modern frameworks like React, Node.js, and Flutter.' },
      { title: 'Implement AI & ML Solutions', desc: 'Participants learn to build machine learning models, chatbots, recommendation systems, and computer vision applications for real business problems.' },
      { title: 'Deploy on Cloud Platforms', desc: 'Teams acquire hands-on skills to deploy, manage, and scale applications on AWS, Azure, and GCP with CI/CD pipelines and containerization.' },
      { title: 'Lead Technical Projects', desc: 'Professionals develop the confidence to architect systems, review code, manage DevOps workflows, and lead development teams effectively.' },
      { title: 'Earn Industry Certifications', desc: 'Participants get prepared for globally recognized certifications in AWS, Azure, Google Cloud, Python, and other in-demand technologies.' },
      { title: 'Transition into New Tech Roles', desc: 'Career switchers and freshers gain job-ready skills with portfolio projects, enabling them to secure roles in software development, data science, and cloud engineering.' }
    ],
    packages: [],
    coursesPricing: [
      {
        category: 'Programming Languages', courses: [
          { name: 'C', price: '₹6,000' },
          { name: 'C++', price: '₹7,000' },
          { name: 'Python', price: '₹8,000' },
          { name: 'Java', price: '₹9,000' }
        ]
      },
      {
        category: 'Software Development', courses: [
          { name: 'Data Structures & Algorithms (DSA)', price: '₹6,000' },
          { name: 'Object-Oriented Programming (OOP)', price: '₹5,000' },
          { name: 'Advanced Python Programming', price: '₹7,000' },
          { name: 'Spring Boot (Java)', price: '₹8,000' }
        ]
      },
      {
        category: 'Web Development', courses: [
          { name: 'Full Stack Development', price: '₹12,000' },
          { name: 'PHP & Laravel Framework', price: '₹7,000' },
          { name: 'Node.js Development', price: '₹7,000' },
          { name: 'React.js / Angular / Vue.js / Next.js', price: '₹8,000' }
        ]
      },
      {
        category: 'Mobile App Development', courses: [
          { name: 'Flutter Mobile App Development', price: '₹8,000' },
          { name: 'React Native', price: '₹8,000' },
          { name: 'Android Development (Kotlin / Java)', price: '₹9,000' }
        ]
      },
      {
        category: 'AI & Data Science', courses: [
          { name: 'Data Science with Python', price: '₹12,000' },
          { name: 'Computer Vision', price: '₹10,000' },
          { name: 'Reinforcement Learning', price: '₹10,000' },
          { name: 'Generative AI Applications', price: '₹12,000' }
        ]
      },
      {
        category: 'AI for Business', courses: [
          { name: 'Chatbot Development', price: '₹7,000' },
          { name: 'Recommendation Systems', price: '₹8,000' },
          { name: 'AI for Business Applications', price: '₹8,000' }
        ]
      },
      {
        category: 'Cloud Computing', courses: [
          { name: 'AWS Cloud Training', price: '₹8,000' },
          { name: 'Microsoft Azure', price: '₹8,000' },
          { name: 'Google Cloud Platform (GCP)', price: '₹8,000' }
        ]
      },
      {
        category: 'DevOps', courses: [
          { name: 'DevOps Fundamentals', price: '₹8,000' },
          { name: 'Docker & Kubernetes', price: '₹9,000' },
          { name: 'CI/CD Pipelines', price: '₹7,000' },
          { name: 'AI Model Deployment (MLOps)', price: '₹10,000' }
        ]
      },
      {
        category: '3D Game Development', courses: [
          { name: 'Game Design & Fundamentals', price: '₹7,000' },
          { name: 'Game Development Technologies', price: '₹8,000' },
          { name: 'Unity / Unreal Engine Development', price: '₹10,000' }
        ]
      }
    ],
    faqs: []
  },
  {
    name: 'Academic Projects',
    slug: 'academic-projects',
    tagline: 'Professional Academic Project Support for Students Across All Engineering Disciplines',
    contact: '',
    icon: 'academic',
    btnLabel: 'Explore Academic Support',
    services: [
      {
        title: 'Final Year Projects',
        desc: 'Complete project development support for B.Tech, M.Tech, MCA, and BCA final year students with documentation.',
        features: ['Project Selection', 'Implementation', 'Documentation', 'Presentation Support']
      },
      {
        title: 'Research Projects',
        desc: 'Research-oriented projects with paper publication support in AI, ML, IoT, and emerging technologies.',
        features: ['Literature Survey', 'Novel Approach', 'Paper Writing', 'Journal Publication']
      },
      {
        title: 'Mini Projects',
        desc: 'Semester-wise mini projects with source code, reports, and demonstration support.',
        features: ['Quick Delivery', 'Source Code', 'Project Report', 'Demo Support']
      }
    ],
    techStack: [
      {
        title: 'AI & Machine Learning', desc: 'Projects using Python, TensorFlow, and advanced ML algorithms.', tags: [
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'NLP', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiM0ZjQ2ZTUiLz48dGV4dCB4PSIzMiIgeT0iMjIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIj5OTFAgTW9kZWw8L3RleHQ+PHBhdGggZD0iTTE2IDMwIFEzMiAxNiA0OCAzMCBRMzIgNDQgMTYgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjIyIiBjeT0iMzgiIHI9IjMiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSI0MiIgcj0iMyIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSI0MiIgY3k9IjM4IiByPSIzIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==' }
        ]
      },
      { title: 'Web Technologies', desc: 'Full-stack projects with modern web frameworks.', tags: ['React', 'Django', 'Node.js', 'MongoDB'] },
      {
        title: 'IoT & Embedded', desc: 'Hardware-integrated projects with sensors and microcontrollers.', tags: [
          { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
          { name: 'Raspberry Pi', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
          { name: 'Sensors', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMwMDdiOGMiLz48cmVjdCB4PSIyMiIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyNCIgcng9IjMiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjkiLz48bGluZSB4MT0iMjciIHkxPSIyNiIgeDI9IjM3IiB5Mj0iMjYiIHN0cm9rZT0iIzAwN2I4YyIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjI3IiB5MT0iMzIiIHgyPSIzNyIgeTI9IjMyIiBzdHJva2U9IiMwMDdiOGMiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIyNyIgeTE9IjM4IiB4Mj0iMzciIHkyPSIzOCIgc3Ryb2tlPSIjMDA3YjhjIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMzIiIHkxPSI0NCIgeDI9IjMyIiB5Mj0iNTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg==' }
        ]
      }
    ],
    process: [
      { title: 'Topic Selection', desc: 'We help you choose a relevant, innovative project topic aligned with your curriculum and interests.' },
      { title: 'Design & Planning', desc: 'System architecture, database design, and project timeline planning with milestone tracking.' },
      { title: 'Development & Testing', desc: 'Complete implementation with regular progress updates, code reviews, and thorough testing.' },
      { title: 'Documentation & Viva', desc: 'Professional documentation, presentation slides, and viva preparation support.' }
    ],
    useCases: [
      { title: 'B.Tech / B.E.', desc: 'Final year and mini projects for Computer Science, IT, ECE, and EEE branches.' },
      { title: 'M.Tech / M.E.', desc: 'Research-oriented projects with paper publication for postgraduate students.' },
      { title: 'MCA / BCA', desc: 'Application development projects with full documentation and source code.' },
      { title: 'MBA', desc: 'Technology-driven business analytics and management system projects.' },
      { title: 'Diploma', desc: 'Practical projects suitable for diploma-level curriculum requirements.' },
      { title: 'Ph.D. Research', desc: 'Advanced research projects with novel algorithms and journal publication support.' }
    ],
    packages: [
      { name: 'Mini Project', price: '₹6,999', tag: '', features: ['Basic Application', 'Source Code', 'Project Report', 'Demo Support', 'Email Support'] },
      { name: 'Final Year Project', price: '₹7,999', tag: 'MOST POPULAR', features: ['Full Application', 'Complete Source Code', 'IEEE Format Documentation', 'Presentation Slides', 'Viva Preparation', '2 Revisions'] },
      { name: 'Research Project', price: '₹8,999', tag: '', features: ['Novel Implementation', 'Research Paper', 'Journal Publication Guidance', 'Complete Documentation', 'Unlimited Revisions'] }
    ],
    faqs: [
      { q: 'Do you provide the complete source code?', a: 'Yes, you receive the complete source code, database scripts, and all project files with full ownership rights.' },
      { q: 'Can you help with project documentation?', a: 'Absolutely. We provide IEEE-format documentation, UML diagrams, presentation slides, and viva preparation materials.' },
      { q: 'How long does project development take?', a: 'Mini projects take 1-2 weeks, final year projects take 3-6 weeks, and research projects take 6-12 weeks depending on complexity.' },
      { q: 'Do you support paper publication?', a: 'Yes, for research projects we assist with writing, formatting, and submitting papers to reputed journals and conferences.' }
    ]
  },
  {
    name: 'AI & Automation Solutions',
    slug: 'ai-automation',
    tagline: 'Build Intelligent AI Agents That Automate Processes, Enhance Customer Experience, and Drive Business Growth',
    contact: '',
    icon: 'ai',
    btnLabel: 'Discover AI Solutions',
    services: [
      {
        title: 'Conversational AI Agents',
        desc: 'Intelligent chatbots and virtual assistants that understand natural language and provide human-like interactions.',
        features: ['Natural Language Processing', 'Multi-platform Integration', 'Context Awareness', 'Sentiment Analysis']
      },
      {
        title: 'Process Automation Agents',
        desc: 'AI-powered automation agents that streamline business processes, reduce manual work, and improve efficiency.',
        features: ['Workflow Automation', 'Data Processing', 'Decision Support', 'System Integration']
      },
      {
        title: 'Predictive Analytics Agents',
        desc: 'Intelligent agents that analyze data patterns, predict trends, and provide actionable insights for better decision-making.',
        features: ['Machine Learning Models', 'Real-time Analytics', 'Anomaly Detection', 'Forecasting']
      }
    ],
    techStack: [
      {
        title: 'Machine Learning', desc: 'Advanced ML algorithms and frameworks for intelligent predictive modeling and pattern recognition.', tags: [
          { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
          { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' }

        ]
      },
      {
        title: 'Deep Learning', desc: 'Neural networks and deep architectures for complex pattern recognition and AI model training.', tags: [
          { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'CNN', logo: 'https://img.icons8.com/fluency/48/artificial-intelligence.png' },
          { name: 'ResNet', logo: 'https://img.icons8.com/color/48/brain.png' }
        ]
      },
      {
        title: 'Computer Vision', desc: 'Image processing and visual analytics for object detection, recognition, and automated inspection.', tags: [
          { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'YOLO', logo: 'https://img.icons8.com/color/48/camera.png' },
          { name: 'ResNet', logo: 'https://img.icons8.com/color/48/artificial-intelligence.png' }
        ]
      },
      {
        title: 'Generative AI', desc: 'Large language models and generative AI for content creation, automation, and intelligent assistants.', tags: [
          { name: 'GPT Models', logo: 'https://img.icons8.com/color/48/chatgpt.png' },
          { name: 'LangChain', logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
          { name: 'RAG', logo: 'https://img.icons8.com/color/48/search.png' },
        ]
      },
      {
        title: 'Natural Language Processing', desc: 'State-of-the-art NLP models for understanding and generating human language with contextual awareness.', tags: [
          { name: 'BERT', logo: 'https://img.icons8.com/color/48/google-logo.png' },
          { name: 'NLTK', logo: 'https://img.icons8.com/color/48/python.png' },
          { name: 'Transformers', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' }
        ]
      },
      {
        title: 'AI Infrastructure', desc: 'Scalable cloud infrastructure and deployment platforms for AI applications with enterprise-grade reliability.', tags: [
          { name: 'EC2', logo: 'https://img.icons8.com/color/48/amazon-web-services.png' },
          { name: 'Azure AI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
          { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
        ], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
      }
    ],
    process: [
      { title: 'Discovery & Analysis', desc: 'We analyze your business processes, data sources, and requirements to identify AI opportunities and define project scope.' },
      { title: 'Data Preparation', desc: 'We collect, clean, and prepare your data for AI model training, ensuring quality and relevance for optimal performance.' },
      { title: 'Model Development', desc: 'Our AI engineers develop and train custom models, continuously testing and refining for accuracy and performance.' },
      { title: 'Deployment & Optimization', desc: 'We deploy the AI agent into your environment and provide ongoing monitoring, maintenance, and optimization.' }
    ],
    useCases: [
      { title: 'Customer Service', desc: '24/7 intelligent customer support agents that handle queries, provide information, and escalate complex issues.' },
      { title: 'Sales & Marketing', desc: 'AI agents for lead qualification, personalized recommendations, and automated marketing campaigns.' },
      { title: 'Manufacturing', desc: 'OpenCV-based object detection for cycle counting, quality inspection, defect detection, and production line monitoring.' },
      { title: 'HR & Recruitment', desc: 'Intelligent screening agents, employee onboarding assistants, and HR process automation.' },
      { title: 'Healthcare', desc: 'Medical diagnosis assistants, patient monitoring agents, and healthcare process automation.' },
      { title: 'Finance', desc: 'Fraud detection systems, investment advisors, and automated financial reporting agents.' },
      { title: 'Supply Chain', desc: 'Inventory optimization agents, demand forecasting systems, and logistics automation.' },
      { title: 'Retail & E-Commerce', desc: 'Visual search, product recommendation engines, chatbots for customer engagement, and automated inventory management.' },
      { title: 'Education', desc: 'Intelligent tutoring systems, automated grading, personalized learning paths, and student performance analytics.' }
    ],
    packages: [
      { name: 'Starter AI Agent', price: '₹15,000', tag: '', features: ['Basic Conversational AI', 'Single Platform Integration', 'Pre-trained NLP Models', 'Basic Analytics Dashboard', '3 Months Support', 'Documentation & Training'] },
      { name: 'Business AI Agent', price: '₹25,000', tag: 'MOST POPULAR', features: ['Advanced Conversational AI', 'Multi-platform Integration', 'Custom ML Models', 'Advanced Analytics', 'Process Automation', '6 Months Support'] },
      { name: 'Enterprise AI Agent', price: '₹32,000', tag: '', features: ['Enterprise-grade AI', 'Full System Integration', 'Custom Deep Learning', 'Real-time Analytics', 'Multi-agent System', '12 Months Support'] }
    ],
    faqs: [
      { q: 'How long does it take to develop an AI agent?', a: 'A basic conversational AI agent takes 4-8 weeks, while complex enterprise solutions with custom ML models can take 12-20 weeks.' },
      { q: 'Do you need our data to train the AI models?', a: 'Yes, quality data is essential. We work with your data while ensuring complete privacy and security. We can also leverage pre-trained models and transfer learning.' },
      { q: 'Can AI agents integrate with our existing systems?', a: 'Absolutely. We specialize in integrating AI agents with existing CRM, ERP, databases, and other business systems through APIs and custom connectors.' },
      { q: 'How do you measure AI agent performance?', a: 'We track accuracy, response time, user satisfaction, task completion rate, and business KPIs with detailed performance reports.' },
      { q: 'What is the ROI timeline for AI automation?', a: 'Most businesses see measurable ROI within 6-12 months through reduced operational costs, increased efficiency, improved accuracy, and enhanced customer satisfaction.' }
    ]
  },
  {
    name: 'Internship Programs',
    slug: 'internship-programs',
    tagline: 'Launch Your Tech Career with Hands-On Industry Internships at GenZova',
    contact: '',
    icon: 'internship',
    btnLabel: 'Apply Now',
    services: [
      {
        title: 'AI & Machine Learning',
        desc: 'Dive into AI with hands-on projects in machine learning, deep learning, NLP, and computer vision.',
        features: ['Python & TensorFlow', 'Real-World Datasets', 'Model Deployment', 'Research Projects']
      },
      {
        title: 'Full Stack Development',
        desc: 'Build complete web applications from frontend to backend with modern JavaScript frameworks.',
        features: ['React & Node.js', 'Database Design', 'REST APIs', 'Cloud Deployment']
      },
      {
        title: 'Mobile App Development',
        desc: 'Create cross-platform mobile applications for iOS and Android with React Native and Flutter.',
        features: ['React Native', 'Flutter', 'Device APIs', 'App Store Deployment']
      }
    ],
    techStack: [
      { title: 'AI & Data Science', desc: 'Python, TensorFlow, PyTorch, OpenCV, and NLP frameworks.', tags: ['Python', 'TensorFlow', 'OpenCV', 'NLP'] },
      { title: 'Web Development', desc: 'MERN, MEAN stack, and modern frontend frameworks.', tags: ['React', 'Angular', 'Node.js', 'MongoDB'] },
      { title: 'Mobile & Cloud', desc: 'Cross-platform mobile and cloud deployment technologies.', tags: ['Flutter', 'AWS', 'Firebase'] }
    ],
    process: [
      { title: 'Application & Selection', desc: 'Submit your application with resume and skills. Our team reviews and selects candidates based on aptitude.' },
      { title: 'Orientation & Training', desc: 'Comprehensive onboarding with technology fundamentals, tools setup, and project introduction.' },
      { title: 'Project Development', desc: 'Work on real client projects under expert mentorship with weekly code reviews and progress tracking.' },
      { title: 'Certification & Placement', desc: 'Receive industry-recognized certification and placement assistance upon successful completion.' }
    ],
    useCases: [
      { title: 'B.Tech Students', desc: 'Final year internships with real project experience and industry exposure.' },
      { title: 'MCA / BCA Students', desc: 'Practical development experience with modern technology stacks.' },
      { title: 'Career Switchers', desc: 'Transition into tech with structured learning and mentorship.' },
      { title: 'Fresh Graduates', desc: 'Bridge the gap between academics and industry with hands-on training.' },
      { title: 'Diploma Holders', desc: 'Practical skill development with certification for career advancement.' },
      { title: 'Self-Learners', desc: 'Structured project experience to complement self-taught skills.' }
    ],
    packages: [
      { name: '1 Month Internship', price: '₹4,999', tag: '', features: ['1 Technology Track', 'Mini Project', 'Basic Certification', 'Online Sessions', 'Email Support'] },
      { name: '3 Month Internship', price: '₹9,999', tag: 'MOST POPULAR', features: ['2 Technology Tracks', 'Live Client Project', 'Advanced Certification', 'Mentorship', 'Placement Assistance', 'Letter of Recommendation'] },
      { name: '6 Month Internship', price: '₹17,999', tag: '', features: ['Multiple Tracks', 'Multiple Projects', 'Industry Certification', 'Dedicated Mentor', 'Guaranteed Placement', 'Stipend Eligible'] }
    ],
    faqs: [
      { q: 'Is this internship online or offline?', a: 'We offer both online and offline (at our Madurai office) internship modes. You can choose based on your preference and location.' },
      { q: 'Do I get a certificate after completion?', a: 'Yes, all interns receive an industry-recognized completion certificate and a letter of recommendation from GenZova.' },
      { q: 'Is there placement assistance?', a: 'Yes, our 3-month and 6-month programs include placement assistance with our partner companies and clients.' },
      { q: 'What are the eligibility criteria?', a: 'Students pursuing or completed B.Tech, BCA, MCA, or equivalent degrees. Basic programming knowledge is preferred but not mandatory.' },
      { q: 'Will I work on real projects during the internship?', a: 'Absolutely. All interns work on live client projects under expert mentorship, gaining hands-on experience with real-world challenges and industry-standard practices.' }
    ]
  },
  {
    name: 'Website Development',
    slug: 'website-development',
    tagline: 'Professional Website Design & Development That Drives Traffic, Engagement, and Conversions',
    contact: '',
    icon: 'web',
    btnLabel: 'See Our Web Work',
    services: [
      {
        title: 'Business Websites',
        desc: 'Professional, responsive websites that establish your online presence and attract customers.',
        features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading']
      },
      {
        title: 'E-Commerce Websites',
        desc: 'Feature-rich online stores with secure payment gateways, inventory management, and analytics.',
        features: ['Product Catalog', 'Payment Integration', 'Order Management', 'Analytics Dashboard']
      },
      {
        title: 'Web Applications',
        desc: 'Complex web applications with dynamic functionality, user authentication, and real-time features.',
        features: ['Custom Logic', 'User Management', 'Real-time Features', 'API Integration']
      }
    ],
    techStack: [
      { title: 'Frontend', desc: 'Modern UI frameworks for stunning, responsive interfaces.', tags: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
      { title: 'Backend', desc: 'Robust server-side technologies for scalable applications.', tags: ['Node.js', 'Python', 'PHP', 'Java'] },
      {
        title: 'CMS & Platforms', desc: 'Popular content management systems and e-commerce platforms.', tags: [
          { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
          { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
          { name: 'WooCommerce', logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg' }

        ]
      }
    ],
    process: [
      { title: 'Discovery & Strategy', desc: 'We understand your business goals, target audience, and competitors to create a winning web strategy.' },
      { title: 'Design & Prototype', desc: 'Pixel-perfect UI/UX design with interactive prototypes for your review and approval.' },
      { title: 'Development & Testing', desc: 'Clean, efficient code with cross-browser testing, performance optimization, and security audits.' },
      { title: 'Launch & Support', desc: 'Seamless deployment with ongoing maintenance, updates, and performance monitoring.' }
    ],
    useCases: [
      { title: 'Startups', desc: 'Launch your online presence with a professional website that attracts investors and customers.' },
      { title: 'Small Business', desc: 'Affordable, effective websites that generate leads and establish credibility.' },
      { title: 'E-Commerce', desc: 'Online stores that convert visitors into customers with seamless shopping experiences.' },
      { title: 'Corporate', desc: 'Enterprise websites with multi-language support, intranets, and client portals.' },
      { title: 'Portfolio', desc: 'Stunning portfolio websites for freelancers, agencies, and creative professionals.' },
      { title: 'Non-Profit', desc: 'Impactful websites for NGOs with donation systems and volunteer management.' }
    ],
    packages: [
      { name: 'Basic Website', price: '₹9,999', tag: '', features: ['5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', 'SSL Certificate', '1 Month Support'] },
      { name: 'Business Website', price: '₹14,999', tag: 'MOST POPULAR', features: ['15 Pages', 'Custom Design', 'CMS Integration', 'Advanced SEO', 'Analytics Setup', '3 Months Support'] },
      { name: 'E-Commerce Website', price: '₹24,999', tag: '', features: ['Unlimited Products', 'Payment Gateway', 'Inventory System', 'Order Management', 'Marketing Tools', '6 Months Support'] }
    ],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'Basic websites take 2-3 weeks, business websites 4-6 weeks, and e-commerce sites 6-10 weeks depending on features and complexity.' },
      { q: 'Do you provide hosting and domain?', a: 'We can set up hosting and domain registration for you. We recommend reliable providers and handle the complete setup process.' },
      { q: 'Will my website be mobile-friendly?', a: 'Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices.' },
      { q: 'Do you offer website maintenance?', a: 'Yes, we offer monthly maintenance packages including updates, backups, security monitoring, and content updates.' }
    ]
  },
  {
    name: 'Products',
    slug: 'products',
    tagline: 'Ready-to-Deploy Software Products Built for Modern Businesses',
    contact: '',
    icon: 'products',
    btnLabel: 'Explore Products',
    services: [
      {
        title: 'SaaS Platforms',
        desc: 'Cloud-based software-as-a-service products for business management, analytics, and automation.',
        features: ['Multi-Tenant', 'Subscription Billing', 'API Access', 'White-Label Options']
      },
      {
        title: 'Business Tools',
        desc: 'Ready-made tools for project management, CRM, HR management, and team collaboration.',
        features: ['Quick Setup', 'Customizable', 'Integration Ready', 'Mobile Apps']
      },
      {
        title: 'AI-Powered Products',
        desc: 'Intelligent products with built-in AI for automation, analytics, and smart decision-making.',
        features: ['AI Analytics', 'Smart Automation', 'Predictive Insights', 'Natural Language']
      }
    ],
    techStack: [
      {
        title: 'Cloud Platforms', desc: 'Scalable cloud infrastructure for reliable product hosting.', tags: [
          { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
          { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
          { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
          { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' }
        ]
      },
      {
        title: 'Application Stack', desc: 'Modern technology stack for high-performance products.', tags: [
          { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
          { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
        ]
      },
      {
        title: 'AI & Analytics', desc: 'Intelligent features powered by advanced AI frameworks.', tags: [
          { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'OpenAI', logo: 'https://img.icons8.com/color/48/chatgpt.png' },
          { name: 'LangChain', logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' }
        ]
      }
    ],
    process: [
      { title: 'Product Demo', desc: 'Schedule a demo to see our products in action and understand how they fit your business needs.' },
      { title: 'Customization', desc: 'We customize the product to match your branding, workflows, and specific requirements.' },
      { title: 'Deployment', desc: 'Quick deployment on your preferred infrastructure with data migration and setup assistance.' },
      { title: 'Training & Support', desc: 'Comprehensive training for your team and ongoing technical support.' }
    ],
    useCases: [
      { title: 'Project Management', desc: 'Track projects, assign tasks, monitor progress, and collaborate with your team efficiently.' },
      { title: 'Customer Management', desc: 'Manage leads, track sales pipelines, and automate customer communications.' },
      { title: 'HR & Payroll', desc: 'Employee management, attendance tracking, payroll processing, and compliance.' },
      { title: 'Inventory Management', desc: 'Track stock levels, manage orders, and optimize supply chain operations.' },
      { title: 'Learning Platform', desc: 'Online course delivery, student management, and assessment systems.' },
      { title: 'Analytics Dashboard', desc: 'Real-time business intelligence with custom KPIs and automated reports.' }
    ],
    packages: [
      { name: 'Starter', price: '₹7,999', tag: '', features: ['Up to 10 Users', 'Core Features', 'Email Support', 'Basic Analytics', 'Cloud Hosted', 'Monthly Updates'] },
      { name: 'Professional', price: '₹15,999', tag: 'MOST POPULAR', features: ['Up to 50 Users', 'All Features', 'Priority Support', 'Advanced Analytics', 'Custom Branding', 'API Access'] },
      { name: 'Enterprise', price: 'Custom', tag: '', features: ['Unlimited Users', 'Custom Features', 'Dedicated Support', 'On-Premise Option', 'SLA Guarantee', 'Dedicated Manager'] }
    ],
    faqs: [
      { q: 'Can products be customized for our needs?', a: 'Yes, all our products support customization including branding, workflows, integrations, and feature additions.' },
      { q: 'Is there a free trial available?', a: 'Yes, we offer a 14-day free trial for all our SaaS products. No credit card required to get started.' },
      { q: 'Can we host the product on our servers?', a: 'Enterprise plans include on-premise deployment options. We handle the complete setup and migration process.' },
      { q: 'What about data security?', a: 'We follow industry-standard security practices including encryption, regular backups, and compliance with data protection regulations.' },
      { q: 'Do you provide training and onboarding support?', a: 'Yes, all plans include comprehensive training sessions, user documentation, video tutorials, and dedicated onboarding support to ensure your team can use the product effectively from day one.' }
    ]
  },
  {
    name: 'Services',
    slug: 'all-services',
    tagline: 'Comprehensive Digital Solutions to Transform Your Business and Accelerate Growth',
    contact: '',
    icon: 'services',
    btnLabel: 'View Services',
    services: [
      {
        title: 'Software Development',
        desc: 'Custom software solutions including web apps, mobile apps, enterprise systems, and API development.',
        features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development']
      },
      {
        title: 'AI & Data Solutions',
        desc: 'Artificial intelligence, machine learning, data analytics, and business intelligence solutions.',
        features: ['AI Agents', 'ML Models', 'Data Analytics', 'Business Intelligence']
      },
      {
        title: 'Digital Marketing',
        desc: 'Complete digital marketing services including SEO, social media, content marketing, and PPC campaigns.',
        features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns']
      }
    ],
    techStack: [
      {
        title: 'Development', desc: 'Full-stack development with modern frameworks and tools.', tags: [
          { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
          { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' }
        ]
      },
      {
        title: 'AI & Cloud', desc: 'AI frameworks and cloud platforms for intelligent solutions.', tags: [
          { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
          { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
          { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
          { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
        ]
      },
      {
        title: 'Marketing Tools', desc: 'Industry-leading tools for digital marketing and analytics.', tags: [
          { name: 'Google Ads', logo: 'https://img.icons8.com/color/48/google-ads.png' },
          { name: 'Meta Ads', logo: 'https://img.icons8.com/color/48/meta.png' },
          { name: 'Analytics', logo: 'https://img.icons8.com/color/48/google-analytics.png' },
          { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png' }
        ]
      }
    ],
    process: [
      { title: 'Consultation', desc: 'Free consultation to understand your business needs, challenges, and goals.' },
      { title: 'Strategy & Planning', desc: 'Detailed project plan with timelines, milestones, and resource allocation.' },
      { title: 'Execution', desc: 'Agile development with regular updates, demos, and feedback incorporation.' },
      { title: 'Delivery & Growth', desc: 'Project delivery with ongoing support, optimization, and growth strategies.' }
    ],
    useCases: [
      { title: 'Startups', desc: 'MVP development, branding, and digital marketing to launch and grow your startup.' },
      { title: 'SMBs', desc: 'Affordable digital solutions to establish online presence and streamline operations.' },
      { title: 'Enterprise', desc: 'Large-scale systems, integrations, and digital transformation initiatives.' },
      { title: 'E-Commerce', desc: 'Online stores, marketplace platforms, and omnichannel retail solutions.' },
      { title: 'Healthcare', desc: 'HIPAA-compliant solutions, telemedicine platforms, and patient management systems.' },
      { title: 'Education', desc: 'LMS platforms, virtual classrooms, and student management systems.' }
    ],
    packages: [
      { name: 'Starter', price: '₹4999', tag: '', features: ['Single Service', 'Basic Scope', '1 Month Duration', 'Email Support', 'Documentation'] },
      { name: 'Growth', price: '₹7999', tag: 'MOST POPULAR', features: ['Multiple Services', 'Custom Scope', '3 Month Duration', 'Priority Support', 'Monthly Reports', 'Dedicated Manager'] },
      { name: 'Enterprise', price: 'Custom', tag: '', features: ['All Services', 'Unlimited Scope', 'Ongoing Partnership', '24/7 Support', 'SLA Guarantee', 'Dedicated Team'] }
    ],
    faqs: [
      { q: 'What services does GenZova offer?', a: 'We offer web development, mobile apps, AI/ML solutions, digital marketing, SEO, UI/UX design, cloud solutions, and more.' },
      { q: 'How do you price your services?', a: 'We offer fixed-price, time & material, and dedicated team models. Pricing depends on project scope and complexity.' },
      { q: 'Do you work with international clients?', a: 'Yes, we serve clients globally with flexible communication across time zones and multiple engagement models.' },
      { q: 'What is your typical project timeline?', a: 'Timelines vary from 2 weeks for simple projects to 6+ months for enterprise solutions. We provide detailed estimates during consultation.' }
    ]
  },
  {
    name: 'Course Recommendations',
    slug: 'courses',
    tagline: 'Curated Learning Paths and Course Recommendations to Accelerate Your Tech Career',
    contact: '',
    icon: 'courses',
    btnLabel: 'Browse Courses',
    services: [
      {
        title: 'Self-Paced Courses',
        desc: 'Learn at your own pace with recorded video lectures, hands-on assignments, and project-based learning.',
        features: ['Video Lectures', 'Hands-On Labs', 'Assignments', 'Lifetime Access']
      },
      {
        title: 'Live Bootcamps',
        desc: 'Intensive live bootcamps with expert instructors, real-time doubt clearing, and peer collaboration.',
        features: ['Live Sessions', 'Expert Mentors', 'Group Projects', 'Job Assistance']
      },
      {
        title: 'Certification Programs',
        desc: 'Industry-recognized certification programs in AI, cloud, full-stack, and digital marketing.',
        features: ['Industry Certified', 'Exam Preparation', 'Practice Tests', 'Career Guidance']
      }
    ],
    techStack: [
      {
        title: 'Programming', desc: 'Foundation courses in popular programming languages.', tags: [
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' }
        ]
      },
      {
        title: 'Frameworks', desc: 'Modern framework courses for web and mobile development.', tags: [
          { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
          { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' }
        ]
      },
      {
        title: 'Specializations', desc: 'Advanced courses in Artificial Intelligence, cloud, and data science.', tags: [
          { name: 'AI/ML', logo: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
          { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
          { name: 'Data Science', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' }]
      }
    ],
    process: [
      { title: 'Skill Assessment', desc: 'Take our free skill assessment to identify your current level and learning gaps.' },
      { title: 'Path Selection', desc: 'Choose a curated learning path based on your career goals and skill assessment results.' },
      { title: 'Learn & Practice', desc: 'Follow structured modules with video lessons, coding exercises, and real-world projects.' },
      { title: 'Certify & Grow', desc: 'Complete assessments, earn certifications, and get career guidance for your next step.' }
    ],
    useCases: [
      { title: 'Beginners', desc: 'Start from scratch with foundational courses in programming, web development, and data science.' },
      { title: 'Working Professionals', desc: 'Upskill with advanced courses in AI, cloud, and modern frameworks while working.' },
      { title: 'Students', desc: 'Supplement your academics with practical, industry-relevant technology courses.' },
      { title: 'Career Switchers', desc: 'Transition into tech with structured learning paths and mentorship support.' },
      { title: 'Freelancers', desc: 'Expand your skill set to take on diverse projects and increase your earning potential.' },
      { title: 'Entrepreneurs', desc: 'Learn the tech skills needed to build and manage your own digital products.' }
    ],
    packages: [
      { name: 'Single Course', price: '₹3,999', tag: '', features: ['1 Course Access', 'Video Lectures', 'Assignments', 'Certificate', 'Lifetime Access'] },
      { name: 'Learning Path', price: '₹7,999', tag: 'MOST POPULAR', features: ['5 Course Bundle', 'Structured Path', 'Live Doubt Sessions', 'Projects', 'Mentorship', 'Career Guidance'] },
      { name: 'All Access Pass', price: '₹12,999', tag: '', features: ['All Courses', 'All Bootcamps', 'Priority Support', 'Unlimited Projects', '1-on-1 Mentorship', 'Placement Support'] }
    ],
    faqs: [
      { q: 'Are courses self-paced or live?', a: 'We offer both. Self-paced courses have recorded videos with lifetime access. Live bootcamps have scheduled sessions with expert instructors.' },
      { q: 'Do I get a certificate?', a: 'Yes, all courses include a completion certificate. Our certification programs also prepare you for industry-recognized exams.' },
      { q: 'Is there placement support?', a: 'Learning Path and All Access Pass subscribers receive career guidance, resume building, and placement assistance with our partner companies.' },
      { q: 'Can I access courses on mobile?', a: 'Yes, all courses are accessible on desktop, tablet, and mobile devices through our responsive learning platform.' }
    ]
  }
];
