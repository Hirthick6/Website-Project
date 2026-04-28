/**
 * GenZova - Pure Vanilla JavaScript
 * No React, No Wix - runs locally
 */

// SERVICES_DATA is loaded from services-data.js

// Dedicated Internship Courses — 15 programs with full detail
const INTERNSHIPS_DATA = [
  {
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    image: 'images/ai.png',
    skills: 'Machine Learning, Deep Learning, NLP, OpenCV',
    description: 'Explore the core of AI from machine learning algorithms and neural networks to natural language processing and build predictive models and systems.',
    tagline: 'Master AI technologies. Build intelligent systems that learn, adapt, and solve real-world problems.',
    stats: [{ label: 'Model Accuracy', value: '98%' }, { label: 'Global Demand', value: 'High' }, { label: 'Learning Efficiency', value: '97%' }],
    applications: [
      { title: 'Chatbot Development', desc: 'Build conversational AI assistants using NLP and transformer models. Deploy production-ready chatbots that handle thousands of concurrent users with context-aware responses.', tags: ['NLP', 'Transformers', 'API Integration'] },
      { title: 'Image Recognition', desc: 'Create computer vision systems for object detection and classification. Implement real-time video analysis pipelines for industrial quality control and security surveillance.', tags: ['OpenCV', 'CNN', 'Image Processing'] },
      { title: 'Recommendation Systems', desc: 'Develop personalized recommendation engines for e-commerce and media. Build hybrid filtering systems that combine collaborative and content-based approaches for maximum accuracy.', tags: ['Collaborative Filtering', 'ML Models', 'Data Pipelines'] },
    ],
    techStack: [
      {
        title: 'Python Programming', desc: 'Core Python, OOP, Data Structures, Algorithms. Build robust applications with clean architecture and efficient memory management. Master list comprehensions, generators, decorators, and context managers for production-grade code.', tags: [
          { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'OOP', logo: 'https://img.icons8.com/color/48/code.png' }
        ], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      {
        title: 'Machine Learning', desc: 'Supervised, Unsupervised Learning, Scikit-learn, XGBoost. Train classification, regression, and clustering models on real-world datasets. Implement feature engineering, cross-validation, hyperparameter tuning, and model deployment pipelines.', tags: [
          { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
          { name: 'XGBoost', logo: 'https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png' }
        ], image: 'images/ml.png'
      },
      {
        title: 'Deep Learning', desc: 'Neural Networks, CNNs, RNNs, TensorFlow, PyTorch. Design and train deep architectures for image recognition, sequence modeling, and generative tasks. Master GPU-accelerated training, model optimization, and transfer learning techniques.', tags: [
          { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' }
        ], image: 'images/dl.png'
      },
      {
        title: 'NLP & Computer Vision', desc: 'Text processing, Sentiment Analysis, OpenCV, YOLO. Build end-to-end NLP pipelines with tokenization, embeddings, and transformer architectures. Implement real-time object detection, face recognition, and OCR systems for production use.', tags: [
          { name: 'NLP', logo: 'https://img.icons8.com/color/48/chat.png' },
          { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' }
        ], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'
      },
    ],
    projects: [
      { title: 'Real-time Sentiment Engine', desc: 'Build a production sentiment analysis pipeline processing live Twitter streams with BERT, visualizing brand perception shifts in real-time dashboards', tags: ['BERT', 'Streaming', 'Dashboard'], level: 'Foundation' },
      { title: 'Medical Image Diagnosis System', desc: 'Train a deep CNN to detect anomalies in X-ray and MRI scans with 97%+ accuracy using transfer learning and explainable AI techniques', tags: ['TensorFlow', 'Transfer Learning', 'XAI'], level: 'Professional' },
      { title: 'Autonomous AI Research Agent', desc: 'Develop a multi-modal AI agent that reads research papers, extracts insights, generates summaries, and answers complex domain questions', tags: ['PyTorch', 'Transformers', 'RAG'], level: 'Expert' },
    ],
  },
  {
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    image: 'images/CloudComputing.jpeg',
    skills: 'AWS, Azure, Cloud Deployment, DevOps Basics',
    description: 'Get hands-on with cloud infrastructure, deployment pipelines, and scalable architecture. Work with AWS and Azure services, containerization, and CI/CD workflows.',
    tagline: 'Build and deploy scalable cloud infrastructure. Master the platforms powering modern applications.',
    stats: [{ label: 'Deployment Success', value: '98%' }, { label: 'Enterprise Usage', value: 'Global' }, { label: 'System Reliability', value: '97%' }],
    applications: [
      { title: 'Cloud-Native Apps', desc: 'Deploy microservices-based applications on AWS and Azure. Architect highly available systems with auto-scaling, load balancing, and multi-region failover strategies.', tags: ['EC2', 'Lambda', 'S3'] },
      { title: 'CI/CD Pipelines', desc: 'Automate build, test, and deployment workflows. Implement zero-downtime deployment strategies and canary release patterns. Monitor performance, ensure continuous integration & delivery.', tags: ['GitHub Actions', 'Jenkins', 'Docker'] },
      { title: 'Infrastructure as Code', desc: 'Manage cloud resources with Terraform and CloudFormation. Build reusable infrastructure modules that provision entire environments in minutes.', tags: ['Terraform', 'IaC', 'Automation'] },
    ],
    techStack: [
      {
        title: 'AWS Services', desc: 'EC2, S3, Lambda, RDS, CloudFront. Deploy scalable compute instances, serverless functions, and managed databases on the world\'s leading cloud platform. Configure VPCs, security groups, IAM roles, and auto-scaling policies for enterprise workloads.', tags: [
          { name: 'EC2', logo: 'https://img.icons8.com/color/48/amazon-web-services.png' }
        ], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
      },
      {
        title: 'Azure Services', desc: 'App Service, Blob Storage, Functions, DevOps. Build and deploy applications using Microsoft\'s cloud ecosystem with integrated CI/CD pipelines. Leverage Azure Active Directory, Cosmos DB, and Logic Apps for enterprise-grade solutions.', tags: [
          { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
          { name: 'DevOps', logo: 'https://img.icons8.com/color/48/infinity.png' }
        ], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
      },
      { title: 'Containerization', desc: 'Docker, Kubernetes, Container Orchestration. Package applications into portable containers and orchestrate them at scale across clusters. Master pod management, service mesh, Helm charts, and rolling deployment strategies. Implement scalable infrastructure.', tags: ['Docker', 'K8s'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { title: 'DevOps Tools', desc: 'CI/CD, Monitoring, Logging, Infrastructure as Code. Automate the entire software delivery lifecycle from code commit to production deployment. Implement observability with Prometheus, Grafana, ELK stack, and alerting systems.', tags: ['Terraform', 'Jenkins'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    ],
    projects: [
      { title: 'Multi-Region Auto-Scaling Platform', desc: 'Deploy a fault-tolerant microservices architecture across AWS regions with auto-scaling, load balancing, and zero-downtime deployments', tags: ['AWS', 'Terraform'], level: 'Foundation' },
      { title: 'Kubernetes CI/CD Pipeline', desc: 'Build a production-grade CI/CD pipeline with GitHub Actions, Docker, and Kubernetes that auto-deploys, runs tests, and rolls back on failure', tags: ['K8s', 'Docker', 'CI/CD'], level: 'Professional' },
      { title: 'Serverless Data Lake Architecture', desc: 'Design a serverless data lake on AWS with Lambda, S3, Glue, and Athena processing millions of events daily with real-time analytics', tags: ['Lambda', 'Glue', 'Athena'], level: 'Expert' },
    ],
  },
  {
    name: 'MERN Stack Development',
    slug: 'mern-stack',
    image: 'images/mernstack.png',
    skills: 'MongoDB, Express.js, React, Node.js',
    description: 'Build modern web apps with the MERN stack. Learn MongoDB for data, Express and Node for the server, and React for dynamic, responsive front-ends.',
    tagline: 'Master the most popular JavaScript stack. Build full-featured web applications end-to-end.',
    stats: [{ label: 'App Performance', value: '98%' }, { label: 'Startup Demand', value: 'High' }, { label: 'Deployment Success', value: '97%' }],
    applications: [
      { title: 'Social Media Platform', desc: 'Build a full-featured social app with posts, likes, and real-time chat. Implement infinite scroll feeds, notification systems, and content moderation with AI.', tags: ['React', 'Socket.io', 'MongoDB'] },
      { title: 'Project Management Tool', desc: 'Create a Trello-like board with drag-and-drop and team collaboration. Add real-time updates, file attachments, activity logs, and Gantt chart views.', tags: ['React DnD', 'Express', 'JWT'] },
      { title: 'E-learning Platform', desc: 'Develop a course platform with video streaming and progress tracking. Include quiz engines, certificate generation, and instructor analytics dashboards.', tags: ['Node.js', 'MongoDB', 'React'] },
    ],
    techStack: [
      { title: 'MongoDB', desc: 'NoSQL Database, Mongoose ODM, Aggregation. Design flexible document schemas and build complex queries with the aggregation framework. Implement indexing strategies, data validation, transactions, and replica sets for high-availability applications.', tags: ['MongoDB', 'Mongoose'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { title: 'Express.js', desc: 'REST APIs, Middleware, Authentication. Build scalable server-side applications with routing, error handling, and security middleware. Implement JWT authentication, rate limiting, CORS policies, and API versioning for production APIs.', tags: ['Express', 'JWT'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { title: 'React', desc: 'Components, Hooks, State Management, Router. Create dynamic, responsive user interfaces with reusable component architecture. Master Context API, Redux Toolkit, React Query, lazy loading, and performance optimization techniques for modern scalable frontend development.', tags: ['React', 'Redux'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { title: 'Node.js', desc: 'Server-side JS, NPM, File System, Streams. Build high-performance backend services with event-driven, non-blocking I/O architecture. Handle file uploads, WebSocket connections, worker threads, and microservice communication patterns.', tags: ['Node.js', 'NPM'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
    projects: [
      { title: 'Real-time Collaboration Platform', desc: 'Build a Notion-like workspace with real-time collaborative editing, WebSocket sync, role-based access, and a rich text editor', tags: ['React', 'Socket.io'], level: 'Foundation' },
      { title: 'AI-Powered Job Board', desc: 'Create a job marketplace with AI-driven resume parsing, skill matching algorithms, and real-time chat between recruiters and candidates', tags: ['MongoDB', 'NLP'], level: 'Professional' },
      { title: 'Video Streaming Platform', desc: 'Develop a Netflix-style platform with adaptive bitrate streaming, recommendation engine, subscription billing, and content management', tags: ['Node.js', 'FFmpeg'], level: 'Expert' },
    ],
  },
  {
    name: 'Full Stack Development',
    slug: 'full-stack',
    image: 'images/fullstack.jpg',
    skills: 'React, Node.js, Databases, REST APIs',
    description: 'Become a developer front-end to back-end. Build full-stack applications with React, Node.js, databases, and deploy production-ready projects.',
    tagline: 'Own the entire stack. Build, deploy, and maintain complete web applications from scratch.',
    stats: [{ label: 'Project Completion', value: '98%' }, { label: 'Industry Demand', value: 'High' }, { label: 'Code Efficiency', value: '97%' }],
    applications: [
      { title: 'SaaS Dashboard', desc: 'Build a subscription-based analytics dashboard with charts and reports. Integrate real-time data streaming, custom widgets, and multi-tenant architecture.', tags: ['React', 'Node.js', 'PostgreSQL'] },
      { title: 'Marketplace Platform', desc: 'Create a multi-vendor marketplace with payments and reviews. Implement escrow payments, dispute resolution, and seller performance analytics.', tags: ['Stripe', 'REST API', 'Auth'] },
      { title: 'CMS System', desc: 'Develop a content management system with role-based access. Build a plugin architecture, media library, and headless API for multi-channel publishing.', tags: ['RBAC', 'CRUD', 'File Upload'] },
    ],
    techStack: [
      { title: 'Frontend', desc: 'React, TypeScript, Tailwind CSS, State Management. Build pixel-perfect, responsive interfaces with type-safe component architecture. Implement design systems, accessibility standards, animation libraries, and progressive web app features.', tags: ['React', 'TypeScript'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { title: 'Backend', desc: 'Node.js, Express, REST APIs, GraphQL. Design scalable server architectures with clean separation of concerns and modular patterns. Build real-time APIs with WebSockets, implement caching strategies, and create GraphQL resolvers with data loaders.', tags: ['Node.js', 'GraphQL'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { title: 'Databases', desc: 'PostgreSQL, MongoDB, Redis, ORM/ODM. Master relational and NoSQL database design with advanced query optimization techniques. Implement caching layers, database migrations, connection pooling, and data replication strategies.', tags: ['PostgreSQL', 'MongoDB'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { title: 'Deployment', desc: 'Docker, CI/CD, Cloud Hosting, Nginx. Containerize applications and automate deployment pipelines for zero-downtime releases. Configure reverse proxies, SSL certificates, load balancers, and monitoring dashboards for production environments.', tags: ['Docker', 'CI/CD'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
    projects: [
      { title: 'Multi-Tenant SaaS Dashboard', desc: 'Build a subscription-based analytics SaaS with tenant isolation, Stripe billing, role-based access, and interactive data visualization', tags: ['React', 'PostgreSQL'], level: 'Foundation' },
      { title: 'Headless CMS with GraphQL', desc: 'Create a headless content management system with GraphQL API, media pipeline, webhook integrations, and a React admin panel', tags: ['GraphQL', 'Docker'], level: 'Professional' },
      { title: 'Real-time Marketplace Platform', desc: 'Develop a multi-vendor marketplace with live bidding, payment escrow, review system, geolocation search, and admin analytics', tags: ['WebSocket', 'Stripe'], level: 'Expert' },
    ],
  },
  {
    name: 'Generative AI Development',
    slug: 'generative-ai',
    image: 'images/ai&devlopment.png',
    skills: 'Python, LangChain, LLMs, API Integration',
    description: 'Build intelligent AI agents that automate workflows, integrate APIs, and reason over data. Learn LangChain, prompt engineering, and autonomous task execution.',
    tagline: 'Build the future of AI. Create intelligent agents, chatbots, and generative applications.',
    stats: [{ label: 'Automation Accuracy', value: '97%' }, { label: 'Industry Demand', value: 'High' }, { label: 'Task Efficiency', value: '96%' }],
    applications: [
      { title: 'Custom AI Chatbot', desc: 'Build a domain-specific chatbot with RAG and knowledge bases. Create intelligent assistants that understand context, cite sources, and learn from user feedback.', tags: ['LangChain', 'RAG', 'Vector DB'] },
      { title: 'Content Generator', desc: 'Create an AI-powered content creation tool for blogs and marketing. Build multi-format generators with brand voice consistency and SEO optimization.', tags: ['GPT API', 'Prompt Engineering', 'Streaming'] },
      { title: 'Autonomous Agent', desc: 'Develop an AI agent that can browse, research, and execute tasks. Implement tool-use patterns, planning algorithms, and self-correcting execution loops.', tags: ['CrewAI', 'Tool Use', 'Planning'] },
    ],
    techStack: [
      { title: 'LLM Fundamentals', desc: 'Transformers, Attention, Tokenization, Fine-tuning. Understand the architecture behind GPT, BERT, and modern language models from the ground up. Learn prompt engineering, few-shot learning, RLHF, and model evaluation metrics for production AI systems.', tags: ['LLMs', 'GPT'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { title: 'LangChain & Frameworks', desc: 'Chains, Agents, Memory, Tools, RAG Pipelines. Build sophisticated AI applications by chaining LLM calls with external tools and data sources. Implement conversation memory, multi-step reasoning, tool selection, and fallback strategies for reliable agents.', tags: ['LangChain', 'RAG'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { title: 'Vector Databases', desc: 'Embeddings, Pinecone, ChromaDB, Semantic Search. Store and retrieve high-dimensional vectors for similarity search across millions of documents. Build hybrid search systems combining keyword and semantic matching with metadata filtering and re-ranking.', tags: ['Pinecone', 'ChromaDB'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { title: 'API Integration', desc: 'OpenAI API, Streaming, Function Calling, Webhooks. Connect AI models to real-world applications with robust API integration patterns. Implement streaming responses, token management, cost optimization, error handling, and webhook-driven automation workflows.', tags: ['OpenAI', 'APIs'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ],
    projects: [
      { title: 'Enterprise Knowledge Base AI', desc: 'Build a RAG-powered system that ingests company documents, PDFs, and wikis to answer employee questions with source citations', tags: ['LangChain', 'ChromaDB'], level: 'Foundation' },
      { title: 'AI Content Studio', desc: 'Create a multi-modal content platform that generates blog posts, social media copy, and images with brand voice consistency and approval workflows', tags: ['GPT API', 'DALL-E'], level: 'Professional' },
      { title: 'Autonomous Research Agent Swarm', desc: 'Develop a multi-agent system where specialized AI agents collaborate — one researches, one analyzes, one writes — to produce comprehensive reports and insights.', tags: ['CrewAI', 'LangGraph'], level: 'Expert' },
    ],
  },
  {
    name: 'E-commerce Development',
    slug: 'ecommerce',
    image: 'images/ecommerce.png',
    skills: 'Shopify, WooCommerce, Payment Gateways',
    description: 'Build and launch online stores end-to-end. Learn e-commerce platforms, product management, payment integration, and conversion optimization techniques.',
    tagline: 'Build online stores that sell. Master e-commerce platforms, payments, and conversion optimization.',
    stats: [{ label: 'Store Success Rate', value: '95%' }, { label: 'Startup Demand', value: 'High' }, { label: 'Conversion Efficiency', value: '96%' }],
    applications: [
      { title: 'Online Store', desc: 'Build a complete store with product catalog, cart, and checkout. Implement dynamic pricing, wishlists, product comparisons, and personalized shopping experiences.', tags: ['Shopify', 'Product Management', 'Themes'] },
      { title: 'Payment Integration', desc: 'Implement secure payment gateways with Stripe and PayPal. Handle multi-currency transactions, subscription billing, refunds, and PCI compliance.', tags: ['Stripe', 'PayPal', 'Security'] },
      { title: 'Inventory System', desc: 'Create inventory management with stock tracking and alerts. Build automated reorder systems, warehouse management, and multi-location inventory sync.', tags: ['WooCommerce', 'Automation', 'Reports'] },
    ],
    techStack: [
      { title: 'Shopify', desc: 'Themes, Liquid, Apps, Shopify API. Build custom storefronts with Liquid templating and extend functionality through the Shopify App ecosystem. Create headless commerce experiences, custom checkout flows, and automated inventory management with webhooks.', tags: ['Shopify', 'Liquid'], image: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg' },
      { title: 'WooCommerce', desc: 'WordPress, Plugins, Custom Fields, Hooks. Develop powerful e-commerce solutions on the world\'s most popular CMS platform. Build custom product types, shipping calculators, tax engines, and integrate with ERP systems through REST APIs.', tags: ['WooCommerce', 'PHP'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
      { title: 'Payment Gateways', desc: 'Stripe, PayPal, Razorpay, Security Best Practices. Implement secure payment processing with PCI-DSS compliance and fraud detection. Handle multi-currency transactions, subscription billing, refund workflows, and 3D Secure authentication.', tags: ['Stripe', 'PayPal'], image: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg' },
      { title: 'Analytics & SEO', desc: 'Google Analytics, Conversion Tracking, Product SEO. Track customer journeys, optimize conversion funnels, and maximize organic product visibility. Implement enhanced e-commerce tracking, A/B testing, structured data markup, and performance monitoring.', tags: ['Analytics', 'SEO'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    ],
    projects: [
      { title: 'Multi-Vendor Marketplace', desc: 'Build a marketplace with vendor dashboards, product variants, dynamic pricing, Stripe Connect payouts, and real-time inventory sync', tags: ['Shopify API', 'Stripe'], level: 'Foundation' },
      { title: 'Subscription Box Platform', desc: 'Create a subscription commerce platform with recurring billing, personalized product curation, and churn prediction analytics', tags: ['WooCommerce', 'Analytics'], level: 'Professional' },
      { title: 'Headless Commerce with AI', desc: 'Develop a headless e-commerce system with AI-powered product recommendations, visual search, dynamic pricing engine, and omnichannel sync', tags: ['React', 'ML', 'GraphQL'], level: 'Expert' },
    ],
  },
  {
    name: 'MEAN Stack Development',
    slug: 'mean-stack',
    image: 'images/meanstack.png',
    skills: 'MongoDB, Express.js, Angular, Node.js',
    description: 'Master the MEAN stack — build dynamic web applications using MongoDB, Express.js, Angular, and Node.js with project experience.',
    tagline: 'Build enterprise-grade applications with Angular and Node.js. Master the MEAN stack end-to-end.',
    stats: [{ label: 'Application Speed', value: '97%' }, { label: 'Developer Demand', value: 'High' }, { label: 'Project Success', value: '100%' }],
    applications: [
      { title: 'Enterprise Dashboard', desc: 'Build a data-rich admin dashboard with charts and role management. Implement real-time data feeds, custom report builders, and exportable analytics.', tags: ['Angular', 'Charts', 'RBAC'] },
      { title: 'HR Management System', desc: 'Create an employee management platform with attendance and payroll. Add leave management, performance reviews, and automated compliance reporting.', tags: ['Express', 'MongoDB', 'Reports'] },
      { title: 'Booking Platform', desc: 'Develop a reservation system with calendar and notifications. Build multi-provider scheduling, payment processing, and automated reminder workflows.', tags: ['Angular', 'Node.js', 'Email'] },
    ],
    techStack: [
      { title: 'MongoDB', desc: 'Schema Design, Aggregation, Indexing. Build efficient NoSQL data models with embedded documents and reference patterns for complex relationships. Implement aggregation pipelines, text search, geospatial queries, and change streams for real-time data processing.', tags: ['MongoDB', 'Mongoose'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { title: 'Express.js', desc: 'REST APIs, Middleware, Error Handling. Create robust server-side applications with modular routing and comprehensive middleware chains. Build authentication systems, file upload handlers, request validation, and centralized error management patterns.', tags: ['Express', 'REST'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { title: 'Angular', desc: 'Components, Services, RxJS, Routing, Forms. Build enterprise-scale single-page applications with TypeScript and reactive programming patterns. Master dependency injection, lazy-loaded modules, custom directives, and state management with NgRx.', tags: ['Angular', 'RxJS'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { title: 'Node.js', desc: 'Server Architecture, Authentication, File Handling. Design event-driven backend systems with non-blocking I/O for high-throughput applications. Implement JWT/OAuth authentication, session management, cluster mode, and worker threads for CPU-intensive tasks.', tags: ['Node.js', 'JWT'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
    projects: [
      { title: 'Enterprise Resource Planner', desc: 'Build an ERP system with modules for HR, inventory, finance, and reporting, complete with role-based dashboards and audit logging.', tags: ['Angular', 'MongoDB'], level: 'Foundation' },
      { title: 'Real-time Booking Engine', desc: 'Create a booking platform with calendar sync, payment processing, automated reminders, waitlists, and multi-timezone support', tags: ['Express', 'Stripe'], level: 'Professional' },
      { title: 'Healthcare Management System', desc: 'Develop a HIPAA-aware patient management system with appointment scheduling, medical records, lab integration, and telemedicine', tags: ['Angular', 'Node.js'], level: 'Expert' },
    ],
  },
  {
    name: 'Mobile Application Development',
    slug: 'mobile-app',
    image: 'images/Mobileapp.png',
    skills: 'React Native, Flutter, iOS, Android',
    description: 'Create cross-platform mobile apps for iOS and Android. Learn React Native or Flutter, mobile UI patterns, device APIs, and app store deployment.',
    tagline: 'Build apps for billions of users. Master cross-platform mobile development for iOS and Android.',
    stats: [{ label: 'App Success Rate', value: '97%' }, { label: 'Industry Demand', value: 'High' }, { label: 'User Retention', value: '96%' }],
    applications: [
      { title: 'Social App', desc: 'Build a social networking app with feeds, messaging, and notifications. Implement stories, live streaming, content moderation, and engagement analytics.', tags: ['React Native', 'Firebase', 'Push Notifications'] },
      { title: 'Fitness Tracker', desc: 'Create a health app with step counting, goals, and charts. Integrate wearable device sync, meal planning, workout routines, and progress sharing.', tags: ['Flutter', 'Device Sensors', 'Charts'] },
      { title: 'Food Delivery App', desc: 'Develop a delivery app with maps, orders, and real-time tracking. Build driver assignment algorithms, estimated delivery times, and rating systems.', tags: ['Maps API', 'Geolocation', 'Payments'] },
    ],
    techStack: [
      { title: 'React Native', desc: 'Components, Navigation, State, Native Modules. Build cross-platform mobile apps with a single JavaScript codebase that renders native UI components. Implement deep linking, offline storage, push notifications, and bridge native device features seamlessly.', tags: ['React Native', 'Expo'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { title: 'Flutter', desc: 'Widgets, Dart, State Management, Animations. Create beautiful, natively compiled applications with Flutter\'s rich widget library and hot reload. Master custom animations, platform channels, responsive layouts, and state management with Riverpod or Bloc.', tags: ['Flutter', 'Dart'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { title: 'Device APIs', desc: 'Camera, GPS, Push Notifications, Storage. Access native device capabilities to build feature-rich mobile experiences users love. Integrate biometric authentication, background location tracking, local databases, and health kit data synchronization.', tags: ['Camera', 'GPS'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { title: 'App Deployment', desc: 'App Store, Play Store, CI/CD, Testing. Navigate the complete app submission process from build to approval on both major platforms. Set up automated testing pipelines, beta distribution, crash reporting, and over-the-air update mechanisms.', tags: ['App Store', 'Play Store'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
    ],
    projects: [
      { title: 'FinTech Wallet App', desc: 'Build a digital wallet with biometric auth, P2P transfers, transaction history, spending analytics, and push notifications', tags: ['React Native', 'Firebase'], level: 'Foundation' },
      { title: 'AR Navigation App', desc: 'Create an augmented reality indoor navigation app with real-time pathfinding, beacon integration, and 3D wayfinding overlays', tags: ['Flutter', 'ARCore'], level: 'Professional' },
      { title: 'On-Demand Delivery Platform', desc: 'Develop a full delivery ecosystem with customer app, driver app, real-time GPS tracking, route optimization, and admin dashboard', tags: ['Maps API', 'Socket.io'], level: 'Expert' },
    ],
  },
  {
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    image: 'images/uiux.png',
    skills: 'Figma, Wireframing, Prototyping, User Research',
    description: 'Design intuitive, user-centered digital experiences. Learn wireframing, prototyping in Figma, usability testing and translate research into beautiful interfaces.',
    tagline: 'Design experiences people love. Master user research, wireframing, and interactive prototyping.',
    stats: [{ label: 'User Satisfaction', value: '97%' }, { label: 'Design Demand', value: 'High' }, { label: 'Usability Score', value: '96%' }],
    applications: [
      { title: 'Mobile App Design', desc: 'Design complete mobile app interfaces with user flows and interactions. Create pixel-perfect mockups with micro-interactions, gesture patterns, and accessibility compliance.', tags: ['Figma', 'Mobile UI', 'Prototyping'] },
      { title: 'Website Redesign', desc: 'Redesign existing websites with improved usability and aesthetics. Conduct UX audits, implement design systems, and optimize conversion funnels.', tags: ['Wireframes', 'UI Audit', 'Design System'] },
      { title: 'Design System', desc: 'Create a reusable component library with tokens and guidelines. Build scalable design foundations with documentation, versioning, and developer handoff specs.', tags: ['Components', 'Tokens', 'Documentation'] },
    ],
    techStack: [
      { title: 'Figma', desc: 'Auto Layout, Components, Variants, Prototyping. Design scalable interfaces with reusable component systems and interactive prototypes. Master advanced auto layout, design tokens, branching workflows, and developer handoff with inspect mode.', tags: ['Figma', 'Auto Layout'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { title: 'User Research', desc: 'Interviews, Surveys, Personas, Journey Maps. Uncover user needs through systematic research methods and synthesize findings into actionable insights. Conduct usability studies, create empathy maps, define user stories, and validate assumptions with data.', tags: ['Research', 'Personas'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
      { title: 'Wireframing', desc: 'Low-fi Sketches, Information Architecture, User Flows. Structure content and navigation for intuitive user experiences before visual design begins. Build sitemaps, task flows, interaction models, and validate information hierarchy with card sorting.', tags: ['Wireframes', 'IA'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
      { title: 'Usability Testing', desc: 'A/B Testing, Heuristic Evaluation, User Feedback. Validate design decisions with real users and iterate based on measurable outcomes. Run moderated and unmoderated tests, analyze heatmaps, track task completion rates, and optimize conversion funnels.', tags: ['Testing', 'Analytics'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
    ],
    projects: [
      { title: 'HealthTech App Redesign', desc: 'Redesign a healthcare app with accessibility-first approach, patient journey mapping, micro-interactions, and a complete design system', tags: ['Figma', 'Design System'], level: 'Foundation' },
      { title: 'AI Dashboard Experience', desc: 'Design an AI analytics dashboard with complex data visualization, real-time widgets, dark/light modes, and responsive layouts', tags: ['Data Viz', 'Prototyping'], level: 'Professional' },
      { title: 'End-to-End SaaS Product Design', desc: 'Lead the full design process for a B2B SaaS product, from user research and competitive analysis to high-fidelity prototypes with developer handoff.', tags: ['Research', 'Handoff'], level: 'Expert' },
    ],
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    image: 'images/webdevelopment.png',
    skills: 'HTML, CSS, JavaScript, React',
    description: 'Build responsive, modern websites from scratch. Learn front-end fundamentals, component-based architecture with React, and best practices for creating fast, accessible user interfaces.',
    tagline: 'Build the web. Master HTML, CSS, JavaScript, and React to create stunning, responsive websites.',
    stats: [{ label: 'Website Performance', value: '98%' }, { label: 'Industry Demand', value: 'High' }, { label: 'Project Success', value: '100%' }],
    applications: [
      { title: 'Business Websites', desc: 'Build professional websites with responsive layouts and animations. Create SEO-optimized, fast-loading sites with modern design patterns and CMS integration.', tags: ['HTML', 'CSS', 'JavaScript'] },
      { title: 'Single Page Apps', desc: 'Create dynamic SPAs with React, routing, and state management. Implement lazy loading, code splitting, and progressive enhancement for optimal performance.', tags: ['React', 'Router', 'Hooks'] },
      { title: 'Landing Pages', desc: 'Design high-converting landing pages with modern CSS and animations. Build A/B testable pages with analytics tracking, form optimization, and scroll-triggered effects.', tags: ['CSS Grid', 'Flexbox', 'Animations'] },
    ],
    techStack: [
      { title: 'HTML & CSS', desc: 'Semantic HTML, Flexbox, Grid, Responsive Design. Build accessible, SEO-friendly web pages with modern layout techniques and responsive breakpoints. Master CSS custom properties, container queries, animations, and progressive enhancement strategies.', tags: ['HTML5', 'CSS3'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { title: 'JavaScript', desc: 'ES6+, DOM, Async/Await, Fetch API. Write modern, clean JavaScript with advanced language features and asynchronous programming patterns. Implement closures, prototypal inheritance, event delegation, Web Workers, and browser storage APIs.', tags: ['JavaScript', 'ES6'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { title: 'React', desc: 'Components, Hooks, Context, React Router. Build dynamic single-page applications with component-driven architecture and declarative UI patterns. Master custom hooks, code splitting, suspense boundaries, server-side rendering, and testing with React Testing Library.', tags: ['React', 'Hooks'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { title: 'Tools & Deployment', desc: 'Git, VS Code, Netlify, Vercel, Webpack. Manage code with version control and deploy applications to modern hosting platforms instantly. Configure build pipelines, environment variables, preview deployments, custom domains, and performance monitoring.', tags: ['Git', 'Netlify'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
    projects: [
      { title: 'Interactive Portfolio with 3D', desc: 'Build a portfolio site with Three.js 3D elements, scroll-triggered animations, dark mode, and a custom CMS for content management', tags: ['Three.js', 'GSAP'], level: 'Foundation' },
      { title: 'Real-time Collaborative Whiteboard', desc: 'Create a Figma-like collaborative whiteboard with WebSocket sync, drawing tools, sticky notes, and export functionality', tags: ['Canvas API', 'WebSocket'], level: 'Professional' },
      { title: 'Progressive Web App Platform', desc: 'Develop a PWA builder that generates installable, offline-capable web apps with push notifications, service workers, and app shell architecture', tags: ['PWA', 'Service Workers'], level: 'Expert' },
    ],
  },
  {
    name: 'Machine Learning & Deep Learning',
    slug: 'ml-deep-learning',
    image: 'images/ML&DL.png',
    skills: 'Python, TensorFlow, PyTorch, Scikit-learn',
    description: 'Go deep into ML and DL — build classification models, neural networks, CNNs, RNNs, and transformers. Learn model training, evaluation, and deployment with datasets.',
    tagline: 'From data to intelligence. Master the algorithms and frameworks behind modern AI systems.',
    stats: [{ label: 'Prediction Accuracy', value: '99%' }, { label: 'Industry Usage', value: 'Global' }, { label: 'Project Success', value: '96%' }],
    applications: [
      { title: 'Predictive Analytics', desc: 'Build models that forecast sales, churn, and market trends. Create automated ML pipelines with feature engineering, model selection, and real-time prediction APIs.', tags: ['Regression', 'Time Series', 'Scikit-learn'] },
      { title: 'Image Classification', desc: 'Train CNNs to classify images for medical, retail, and security use. Implement transfer learning, data augmentation, and model interpretability techniques.', tags: ['CNN', 'TensorFlow', 'Transfer Learning'] },
      { title: 'NLP Applications', desc: 'Build text classifiers, summarizers, and language models. Create production NLP pipelines with entity extraction, topic modeling, and multilingual support.', tags: ['RNN', 'Transformers', 'BERT'] },
    ],
    techStack: [
      { title: 'Python & NumPy', desc: 'Data manipulation, Linear Algebra, Pandas. Process and transform large datasets with vectorized operations and efficient memory management. Build data cleaning pipelines, statistical analysis workflows, and visualization dashboards with Matplotlib and Seaborn.', tags: ['Python', 'NumPy'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { title: 'Scikit-learn', desc: 'Classification, Regression, Clustering, Pipelines. Train and evaluate machine learning models with the industry-standard Python ML library. Implement feature selection, dimensionality reduction, ensemble methods, and automated ML pipelines with cross-validation.', tags: ['Scikit-learn', 'ML'], image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { title: 'TensorFlow & Keras', desc: 'Neural Networks, CNNs, RNNs, Model Training. Build and deploy deep learning models with Google\'s production-grade ML framework. Master custom training loops, distributed training, model quantization, TensorFlow Serving, and TFLite for edge deployment.', tags: ['TensorFlow', 'Keras'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { title: 'PyTorch', desc: 'Dynamic Graphs, Custom Models, Research. Develop cutting-edge deep learning models with PyTorch\'s flexible and intuitive framework. Implement custom loss functions, dynamic computation graphs, distributed data parallel training, and ONNX model export.', tags: ['PyTorch', 'CUDA'], image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    ],
    projects: [
      { title: 'Predictive Maintenance System', desc: 'Build an IoT predictive maintenance platform that analyzes sensor data streams to predict equipment failures before they happen', tags: ['Time Series', 'Scikit-learn'], level: 'Foundation' },
      { title: 'Text-to-SQL Chatbot', desc: 'Create an intelligent chatbot that converts natural language questions into SQL queries, executes them, and returns visual data insights', tags: ['NLP', 'TensorFlow'], level: 'Professional' },
      { title: 'Autonomous Trading Bot', desc: 'Develop a reinforcement learning trading agent that analyzes market patterns, executes trades, and adapts strategy based on real-time performance', tags: ['PyTorch', 'RL'], level: 'Expert' },
    ],
  },
  {
    name: 'Game Development',
    slug: 'game-development',
    image: 'images/Gaming.png',
    skills: 'Unity, C#, 3D Modeling, Game Mechanics',
    description: 'Design and develop interactive games from concept to playable build. Learn Unity, C# scripting, 3D asset integration, physics systems, and core game mechanics with advanced complete skills.',
    tagline: 'Create worlds. Build interactive games with Unity, C#, and professional game design principles.',
    stats: [{ label: 'Game Performance', value: '96%' }, { label: 'Global Market', value: 'Huge' }, { label: 'User Engagement', value: '97%' }],
    applications: [
      { title: '2D Platformer', desc: 'Build a side-scrolling platformer with physics and level design. Create procedural level generation, particle effects, and adaptive difficulty systems.', tags: ['Unity 2D', 'Tilemaps', 'Physics'] },
      { title: '3D Adventure Game', desc: 'Create an open-world exploration game with quests and NPCs. Implement dynamic weather, AI-driven NPC behavior, and cinematic cutscene systems.', tags: ['Unity 3D', 'NavMesh', 'AI'] },
      { title: 'Multiplayer Game', desc: 'Develop an online multiplayer game with matchmaking. Build real-time synchronization, anti-cheat systems, and competitive ranking algorithms.', tags: ['Photon', 'Networking', 'Lobby'] },
    ],
    techStack: [
      { title: 'Unity Engine', desc: 'Scene Management, Physics, UI, Animation. Master the world\'s most popular game engine for 2D and 3D game development across all platforms. Build complex game systems with physics simulations, particle effects, timeline animations, and shader graph visual effects.', tags: ['Unity', 'Editor'], image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80' },
      { title: 'C# Programming', desc: 'OOP, Coroutines, Events, Design Patterns. Write clean, performant game code with C# and apply industry-standard design patterns. Implement state machines, observer patterns, object pooling, scriptable objects, and async programming for smooth gameplay.', tags: ['C#', 'OOP'], image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80' },
      { title: '3D Modeling', desc: 'Asset Import, Materials, Lighting, Shaders. Create stunning visual environments with PBR materials, dynamic lighting, and custom shader effects. Master asset optimization, LOD systems, texture atlasing, and post-processing effects for cinematic quality.', tags: ['3D', 'Shaders'], image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80' },
      { title: 'Game Design', desc: 'Mechanics, Level Design, Balancing, Playtesting. Design engaging gameplay loops that keep players coming back with reward systems and progression. Create level layouts, difficulty curves, economy balancing, narrative integration, and data-driven design iterations.', tags: ['Design', 'Mechanics'], image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80' },
    ],
    projects: [
      { title: 'Open-World Survival Game', desc: 'Build a procedurally generated survival game with crafting systems, day-night cycles, AI-driven wildlife, and inventory management', tags: ['Unity 3D', 'Procedural'], level: 'Foundation' },
      { title: 'Multiplayer Battle Arena', desc: 'Create a real-time multiplayer arena game with matchmaking, leaderboards, skill-based ranking, and spectator mode', tags: ['Photon', 'Networking'], level: 'Professional' },
      { title: 'VR Training Simulator', desc: 'Develop a VR training simulation for industrial safety with realistic physics, hand tracking, scenario branching, and performance analytics', tags: ['XR Toolkit', 'C#'], level: 'Expert' },
    ],
  },
  {
    name: 'Branding & Design',
    slug: 'branding-design',
    image: 'images/Branding&design.png',
    skills: 'Brand Strategy, Visual Identity, Adobe Suite',
    description: 'Craft compelling brand identities from strategy to execution. Learn logo design, typography, color theory, and how to build cohesive visual systems for businesses.',
    tagline: 'Build brands that stand out. Master visual identity, strategy, and design systems.',
    stats: [{ label: 'Design Quality', value: '97%' }, { label: 'Creative Demand', value: 'High' }, { label: 'Client Satisfaction', value: '96%' }],
    applications: [
      { title: 'Brand Identity', desc: 'Create complete brand identities with logos, colors, and typography. Develop brand voice guidelines, visual language systems, and multi-platform asset libraries.', tags: ['Logo Design', 'Color Theory', 'Typography'] },
      { title: 'Marketing Collateral', desc: 'Design brochures, social media graphics, and presentations. Build template systems for consistent brand expression across digital and print channels.', tags: ['Print Design', 'Social Media', 'Layout'] },
      { title: 'Brand Guidelines', desc: 'Develop comprehensive brand guideline documents. Create living style guides with usage rules, do/don\'t examples, and downloadable asset packages.', tags: ['Style Guide', 'Documentation', 'Standards'] },
    ],
    techStack: [
      { title: 'Adobe Illustrator', desc: 'Vector Graphics, Logo Design, Icon Creation. Create scalable brand assets with precision vector tools and professional illustration techniques. Master pen tool mastery, gradient meshes, pattern creation, and export workflows for print and digital media.', tags: ['Illustrator', 'Vector'], image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
      { title: 'Adobe Photoshop', desc: 'Photo Editing, Compositing, Digital Art. Transform images and create stunning visual compositions for marketing and brand campaigns. Master layer management, smart objects, actions automation, color grading, and retouching techniques for professional output.', tags: ['Photoshop', 'Editing'], image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80' },
      { title: 'Brand Strategy', desc: 'Positioning, Messaging, Target Audience, Competitors. Define brand identity through strategic research, competitive analysis, and audience insights. Develop brand archetypes, value propositions, tone of voice guidelines, and go-to-market positioning frameworks.', tags: ['Strategy', 'Research'], image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80' },
      { title: 'Design Principles', desc: 'Color Theory, Typography, Layout, Hierarchy. Apply fundamental design principles to create visually compelling and effective communications. Master grid systems, whitespace management, visual rhythm, contrast ratios, and responsive design adaptation.', tags: ['Color', 'Typography'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80' },
    ],
    projects: [
      { title: 'D2C Brand Launch', desc: 'Create a complete direct-to-consumer brand identity from scratch: logo, packaging, social templates, website design, and brand guidelines document.', tags: ['Illustrator', 'Strategy'], level: 'Foundation' },
      { title: 'Rebranding Campaign', desc: 'Lead a full rebranding project with competitive audit, brand positioning, visual identity overhaul, and multi-channel launch campaign', tags: ['Photoshop', 'Research'], level: 'Professional' },
      { title: 'Design System & Brand OS', desc: 'Build a scalable brand operating system with design tokens, component library, motion guidelines, and automated asset generation pipeline', tags: ['Figma', 'Design Tokens'], level: 'Expert' },
    ],
  },
  {
    name: 'Search Engine Optimization (SEO)',
    slug: 'seo',
    image: 'images/seo.jpg',
    skills: 'Keyword Research, On-Page SEO, Link Building',
    description: 'Drive organic traffic through proven SEO strategies. Learn keyword research, technical SEO, on-page optimization, link building, and analytics reporting.',
    tagline: 'Rank higher. Drive organic traffic with proven SEO strategies and data-driven optimization.',
    stats: [{ label: 'Ranking Improvement', value: '98%' }, { label: 'Business Demand', value: 'High' }, { label: 'Traffic Growth', value: '97%' }],
    applications: [
      { title: 'Website Audit', desc: 'Perform comprehensive SEO audits and create optimization plans. Identify technical issues, content gaps, and competitive opportunities with actionable roadmaps.', tags: ['Technical SEO', 'Site Speed', 'Crawlability'] },
      { title: 'Content Strategy', desc: 'Develop keyword-driven content strategies that rank. Build topical authority maps, content calendars, and performance tracking dashboards.', tags: ['Keyword Research', 'Content Planning', 'SERP Analysis'] },
      { title: 'Link Building', desc: 'Build high-quality backlink profiles through outreach and content. Implement digital PR campaigns, broken link strategies, and authority-building partnerships.', tags: ['Outreach', 'Guest Posts', 'Authority'] },
    ],
    techStack: [
      { title: 'Keyword Research', desc: 'Ahrefs, SEMrush, Google Keyword Planner. Discover high-value keywords with search volume, difficulty, and intent analysis using professional SEO tools. Build keyword clusters, identify content gaps, analyze competitor rankings, and prioritize opportunities by ROI potential.', tags: ['Ahrefs', 'SEMrush'], image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80' },
      { title: 'On-Page SEO', desc: 'Meta Tags, Schema, Content Optimization, Internal Links. Optimize every page element for maximum search engine visibility and click-through rates. Implement structured data markup, heading hierarchy, image alt optimization, and strategic internal linking architecture.', tags: ['Meta Tags', 'Schema'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
      { title: 'Technical SEO', desc: 'Site Speed, Core Web Vitals, Crawling, Indexing. Ensure search engines can efficiently discover, crawl, and index your entire website. Optimize server response times, implement lazy loading, fix crawl errors, manage XML sitemaps, and resolve canonicalization issues.', tags: ['Speed', 'Vitals'], image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80' },
      { title: 'Analytics', desc: 'Google Analytics, Search Console, Reporting. Track organic performance with comprehensive dashboards and data-driven decision making. Build custom reports, set up conversion tracking, monitor keyword rankings, and create automated performance alerts.', tags: ['GA4', 'GSC'], image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80' },
    ],
    projects: [
      { title: 'Technical SEO Overhaul', desc: 'Perform a deep technical audit: fix crawl issues, implement structured data, optimize Core Web Vitals, and build an automated monitoring dashboard.', tags: ['Screaming Frog', 'Schema'], level: 'Foundation' },
      { title: 'Content Authority Engine', desc: 'Build a topical authority strategy with pillar-cluster content architecture, internal linking automation, and SERP tracking for 500+ keywords', tags: ['Ahrefs', 'Content Hub'], level: 'Professional' },
      { title: 'Programmatic SEO Platform', desc: 'Develop a programmatic SEO system that auto-generates thousands of optimized landing pages from data, with dynamic schema and A/B testing', tags: ['Automation', 'Python'], level: 'Expert' },
    ],
  },
  {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    image: 'images/digitalmarketinglogo.jpg',
    skills: 'SEO, Meta Ads, Analytics, Content Strategy',
    description: 'Master digital marketing channels — from search engine optimization and paid ads to social media strategy and analytics management.',
    tagline: 'Drive growth online. Master paid ads, social media, analytics, and data-driven marketing strategies.',
    stats: [{ label: 'Campaign Success', value: '96%' }, { label: 'Market Demand', value: 'High' }, { label: 'Engagement Rate', value: '97%' }],
    applications: [
      { title: 'Paid Ad Campaigns', desc: 'Create and optimize Meta and Google ad campaigns for conversions. Master audience segmentation, creative testing, and budget optimization with ROAS tracking.', tags: ['Meta Ads', 'Google Ads', 'A/B Testing'] },
      { title: 'Social Media Strategy', desc: 'Build and execute social media strategies across platforms. Develop content pillars, engagement frameworks, and influencer collaboration workflows.', tags: ['Instagram', 'LinkedIn', 'Content Calendar'] },
      { title: 'Email Marketing', desc: 'Design automated email campaigns with segmentation and analytics. Build drip sequences, behavioral triggers, and personalized content engines that drive conversions.', tags: ['Mailchimp', 'Automation', 'Segmentation'] },
    ],
    techStack: [
      { title: 'Meta Ads', desc: 'Facebook & Instagram Ads, Audience Targeting, Pixel. Create high-converting ad campaigns with precise audience segmentation and retargeting strategies. Master lookalike audiences, custom conversions, dynamic creative optimization, and campaign budget optimization algorithms.', tags: ['Meta', 'Pixel'], image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80' },
      { title: 'Google Ads', desc: 'Search, Display, YouTube Ads, Remarketing. Drive targeted traffic with pay-per-click campaigns across Google\'s entire advertising network. Build responsive search ads, shopping campaigns, video ad sequences, and performance max campaigns with smart bidding.', tags: ['Google Ads', 'PPC'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
      { title: 'Analytics', desc: 'Google Analytics 4, UTM Tracking, Dashboards. Measure campaign performance with event-based analytics and multi-touch attribution models. Build custom funnels, audience segments, predictive metrics, and automated reporting dashboards with Data Studio.', tags: ['GA4', 'Reporting'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
      { title: 'Content Marketing', desc: 'Blog Strategy, SEO Content, Social Media Content. Create compelling content that attracts, engages, and converts your target audience organically. Develop editorial calendars, content distribution strategies, repurposing workflows, and performance measurement frameworks.', tags: ['Content', 'SEO'], image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80' },
    ],
    projects: [
      { title: 'Omnichannel Campaign Engine', desc: 'Build an integrated campaign across Meta, Google, email, and SMS with unified tracking, attribution modeling, and automated budget optimization', tags: ['Meta Ads', 'GA4'], level: 'Foundation' },
      { title: 'AI-Powered Ad Optimizer', desc: 'Create an AI system that analyzes ad performance, auto-generates creative variations, predicts CTR, and reallocates budget to top performers', tags: ['Python', 'Meta API'], level: 'Professional' },
      { title: 'Growth Marketing Platform', desc: 'Develop a full growth marketing stack with landing page builder, A/B testing engine, lead scoring, marketing automation, and ROI attribution dashboard', tags: ['Automation', 'Analytics'], level: 'Expert' },
    ],
  },
];

// Router - hash-based for local file support
function getRoute() {
  const hash = window.location.hash.slice(1);
  return (hash === '' || !hash) ? '/' : '/' + hash;
}

function navigateTo(path) {
  window.location.hash = path === '/' ? '' : path.slice(1);
  renderPage();
}

function renderPage() {
  const route = getRoute();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Define parent-child relationship for active states
  const isServiceChild = route.startsWith('/service/');
  const isInternshipChild = route.startsWith('/internship/');
  const isSolutionsChild = route.startsWith('/solution/');

  // Check if it's an internship detail route
  if (route.startsWith('/internship/')) {
    const slug = route.replace('/internship/', '');
    const internship = INTERNSHIPS_DATA.find(i => i.slug === slug);
    if (internship) {
      renderInternshipDetail(internship);
      document.getElementById('page-internship-detail').classList.add('active');
      window.scrollTo(0, 0);
      setTimeout(() => initReveal(), 100);
      return;
    }
  }

  // Check if it's a service detail route
  if (route.startsWith('/service/')) {
    const slug = route.replace('/service/', '');
    const service = SERVICES_DATA.find(s => s.slug === slug);
    if (service) {
      renderServiceDetail(service);
      document.getElementById('page-service-detail').classList.add('active');
      window.scrollTo(0, 0);
      setTimeout(() => initReveal(), 100);
      return;
    }
  }

  // Check if it's a solution detail route
  if (route.startsWith('/solution/')) {
    const slug = route.replace('/solution/', '');
    const solution = SOLUTIONS_DATA.find(s => s.slug === slug);
    if (solution) {
      renderSolutionDetail(solution);
      document.getElementById('page-solution-detail').classList.add('active');
      window.scrollTo(0, 0);
      setTimeout(() => initReveal(), 100);
      return;
    }
  }

  const pageMap = {
    '/': 'page-home',
    '/about': 'page-about',
    '/profile': 'page-profile',
    '/team': 'page-team',
    '/faq': 'page-faq',
    '/services': 'page-services',
    '/internships': 'page-internships',
    '/ai-development': 'page-ai-development',
    '/careers': 'page-careers',
    '/contact': 'page-contact',
    '/privacy': 'page-privacy',
    '/terms': 'page-terms',
  };

  const pageId = pageMap[route] || 'page-home';
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
  } else {
    document.getElementById('page-home').classList.add('active');
  }

  const hash = route === '/' ? '' : route.slice(1);
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHash = (link.getAttribute('href') || '').replace('#', '');
    const isExact = (linkHash === hash);
    const isParent = (linkHash === 'services' && isServiceChild) ||
      (linkHash === 'internships' && isInternshipChild) ||
      (linkHash === 'solutions' && isSolutionsChild);

    if (isExact || isParent) link.classList.add('active');
  });

  document.getElementById('mobile-menu')?.classList.remove('open');

  if (pageId === 'page-services') renderServices();
  if (pageId === 'page-internships') renderInternships();
}

function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;
  container.innerHTML = SERVICES_DATA.map(s => `
    <div class="internship-card reveal">
      <div class="internship-img">
        <img src="${s.image}" alt="${s.name}" width="400" height="300" loading="lazy" onerror="this.src='https://placehold.co/600x400/1e293b/94a3b8?text=${encodeURIComponent(s.name)}'">
      </div>
      <div class="internship-body">
        <h3>${s.name}</h3>
        <p class="internship-desc">${s.description}</p>
        <div class="internship-skills">
          ${s.tech.split(', ').map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="internship-btn-group">
          <a href="#service/${s.slug}" class="btn btn-outline internship-course-btn">Learn More</a>
          <a href="javascript:void(0)" onclick="openEnquiryModal('${s.name}')" class="btn btn-primary internship-apply-btn">Get Started</a>
        </div>
      </div>
    </div>
  `).join('');
  initReveal();
}

function renderInternships() {
  const container = document.getElementById('internships-grid');
  if (!container) return;
  container.innerHTML = INTERNSHIPS_DATA.map(s => `
    <div class="internship-card reveal">
      <div class="internship-img">
        <img src="${s.image}" alt="${s.name} Internship" width="400" height="300" loading="lazy" onerror="this.src='https://placehold.co/600x400/1e293b/94a3b8?text=${encodeURIComponent(s.name)}'">
      </div>
      <div class="internship-body">
        <h3>${s.name} Internship</h3>
        <p class="internship-desc">${s.description}</p>
        <div class="internship-skills">
          ${s.skills.split(', ').map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="internship-btn-group">
          <a href="#internship/${s.slug}" class="btn btn-outline internship-course-btn">Course Structure</a>
          <a href="javascript:void(0)" onclick="openInternshipModal('${s.name}')" class="btn internship-apply-btn">Apply Now</a>
        </div>
      </div>
    </div>
  `).join('');
  initReveal();
}

function renderInternshipDetail(data) {
  const container = document.getElementById('internship-detail-content');
  if (!container) return;
  container.innerHTML = `
    <!-- Hero -->
    <section class="detail-hero">
      <div class="detail-hero-inner">
        <a href="#internships" class="detail-back-link">← Back to Internships</a>
        <h1>${data.name}</h1>
        <p class="detail-tagline">${data.tagline}</p>
        <div class="detail-stats">
          ${data.stats.map(s => `<div class="detail-stat"><div class="detail-stat-value">${s.value}</div><div class="detail-stat-label">${s.label}</div></div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Applications -->
    <section class="section detail-apps-section">
      <h2 class="section-title reveal">${data.name} Applications</h2>
      <p class="section-subtitle reveal">Real-world systems you will build with ${data.skills.split(', ').slice(0, 2).join(' & ')}</p>
      <div class="grid-3">
        ${data.applications.map((a, i) => `
          <div class="detail-app-card reveal" style="--card-delay: ${i * 0.1}s">
            <div class="detail-app-icon">${['', '', ''][i]}</div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
            <div class="detail-tags">${a.tags.map(t => `<span class="detail-skill-tag">${t}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="section detail-tech-section">
      <h2 class="section-title reveal">Technology Stack</h2>
      <p class="section-subtitle reveal">Master the tools powering ${data.name.toLowerCase()} in the industry</p>
      <div class="detail-tech-grid">
        ${data.techStack.map((t, i) => `
          <div class="detail-tech-card reveal" style="--card-delay: ${i * 0.08}s">
            <div class="detail-tech-img${t.image.includes('unsplash.com') ? ' stock-photo' : ''}"><img src="${t.image}" alt="${t.title}" loading="lazy" onerror="this.src='https://placehold.co/400x200/e2e8f0/64748b?text=${encodeURIComponent(t.title)}'"></div>
            <div class="detail-tech-number">0${i + 1}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
            <div class="detail-tags">${t.tags.map(tag => {
    if (typeof tag === 'object' && tag.name && tag.logo) {
      return `<span class="detail-tech-tag-with-logo">
                  <span style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img src="${tag.logo}" alt="${tag.name}" style="max-width:24px;max-height:24px;width:auto;height:auto;object-fit:contain;display:block;" onerror="this.style.display='none'"></span>
                  <span>${tag.name}</span>
                </span>`;
    } else {
      return `<span class="detail-tech-tag">${tag}</span>`;
    }
  }).join('')}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Hands-on Projects -->
    <section class="section detail-projects-section">
      <h2 class="section-title reveal">Hands-on Projects</h2>
      <p class="section-subtitle reveal">Production-grade projects you will ship during this internship</p>
      <div class="grid-3">
        ${data.projects.map((p, i) => `
          <div class="detail-project-card reveal" style="--card-delay: ${i * 0.1}s">
            <div class="detail-project-header">
              <span class="detail-project-level detail-project-level--${p.level.toLowerCase()}">${p.level}</span>
            </div>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="detail-tags">${p.tags.map(t => `<span class="detail-skill-tag">${t}</span>`).join('')}</div>
            <div class="detail-project-bar"></div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section class="detail-cta-section">
      <div class="detail-cta-inner">
        <h2>Ready to Start Your ${data.name} Journey?</h2>
        <p>Apply now and gain hands-on experience with real projects and industry mentorship.</p>
        <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin-top:2rem;">
          <a href="javascript:void(0)" onclick="openInternshipModal('${data.name}')" class="btn internship-apply-btn" style="padding:1rem 3rem;font-size:1.1rem;min-width:220px;">Apply Now</a>
          <a href="#internships" class="btn btn-white-outline" style="padding:1rem 3rem;font-size:1.1rem;min-width:220px;">View All Internships</a>
        </div>
      </div>
    </section>
  `;
}

function renderServiceDetail(data) {
  const container = document.getElementById('service-detail-content');
  if (!container) return;
  container.innerHTML = `
    <!-- Hero -->
    <section class="detail-hero">
      <div class="detail-hero-inner">
        <a href="#services" class="detail-back-link">← Back to Services</a>
        <h1>${data.name}</h1>
        <p class="detail-tagline">${data.tagline}</p>
        <div class="detail-stats">
          ${data.stats.map(s => `<div class="detail-stat"><div class="detail-stat-value">${s.value}</div><div class="detail-stat-label">${s.label}</div></div>`).join('')}
        </div>
      </div>
    </section>

    <!-- How It Helps Your Business -->
    <section class="section service-how-section">
      <h2 class="section-title reveal">How It Helps Your Business</h2>
      <p class="section-subtitle reveal">Understanding how ${data.name.toLowerCase()} adapts to your business and drives real results</p>
      <div class="service-impact-grid">
        ${data.businessImpact.map((item, i) => `
          <div class="service-impact-card reveal" style="--card-delay: ${i * 0.1}s">
            <div class="service-impact-img">
              <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/600x300/1e293b/94a3b8?text=${encodeURIComponent(item.title)}'">
            </div>
            <div class="service-impact-body">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Industries We Serve -->
    <section class="section service-industries-section">
      <h2 class="section-title reveal">Industries We Serve</h2>
      <p class="section-subtitle reveal">See how ${data.name.toLowerCase()} transforms businesses across different sectors</p>
      <div class="service-industries-grid">
        ${data.industries.map((ind, i) => `
          <div class="service-industry-card reveal" style="--card-delay: ${i * 0.08}s">
            <div class="service-industry-icon">${ind.svg}</div>
            <h3>${ind.title}</h3>
            <p>${ind.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- What You Get -->
    <section class="section service-deliverables-section">
      <h2 class="section-title reveal">What You Get</h2>
      <p class="section-subtitle reveal">Everything included when you partner with us for ${data.name.toLowerCase()}</p>
      <div class="service-deliverables-grid">
        ${data.whatYouGet.map((item, i) => `
          <div class="service-deliverable-item reveal" style="--card-delay: ${i * 0.08}s">
            <div class="service-deliverable-check">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <p>${item}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section class="detail-cta-section">
      <div class="detail-cta-inner">
        <h2>Ready to Get Started with ${data.name}?</h2>
        <p>Let's discuss how our ${data.name.toLowerCase()} solutions can transform your business and drive measurable growth.</p>
        <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">
          <a href="javascript:void(0)" onclick="openEnquiryModal('${data.name}')" class="btn" style="padding:1.25rem 3rem;font-size:1.15rem;font-weight:700;border:3px solid white;border-radius:12px;background:transparent;color:white;box-shadow:0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2);text-transform:none;letter-spacing:0.5px;">Get Started Now</a>
          <a href="#services" class="btn" style="padding:1.25rem 3rem;font-size:1.15rem;font-weight:700;border:3px solid white;border-radius:12px;background:transparent;color:white;box-shadow:0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.2);text-transform:none;letter-spacing:0.5px;">View All Services</a>
        </div>
      </div>
    </section>
  `;
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('revealed');
    else observer.observe(el);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

function openEnquiryModal(serviceName) {
  const modal = document.getElementById('service-enquiry-modal');
  if (!modal) return;
  const modalInner = modal.querySelector('.enquiry-modal');
  if (modalInner && !window._enquiryFormHTML) {
    window._enquiryFormHTML = modalInner.innerHTML;
  }
  if (modalInner && modalInner.querySelector('.enquiry-success')) {
    modalInner.innerHTML = window._enquiryFormHTML;
  }
  const serviceSelect = document.getElementById('enquiry-service-select');
  if (serviceName && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase()) ||
        serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
    serviceSelect.disabled = true;
    serviceSelect.style.backgroundColor = '#f1f5f9';
    serviceSelect.style.cursor = 'not-allowed';
  }
  document.getElementById('enquiry-service').value = serviceName || '';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeEnquiryModal() {
  const modal = document.getElementById('service-enquiry-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    const modalInner = modal.querySelector('.enquiry-modal');
    if (modalInner && modalInner.querySelector('.enquiry-success')) {
      modalInner.innerHTML = window._enquiryFormHTML || '';
    }
  }
}

function submitEnquiryForm(e) {
  e.preventDefault();
  const name = document.getElementById('enquiry-name').value;
  const modal = document.querySelector('.enquiry-modal');
  if (!modal) return;
  modal.innerHTML = `
    <button class="enquiry-modal-close" onclick="closeEnquiryModal()" aria-label="Close">&times;</button>
    <div class="enquiry-success">
      <div class="enquiry-success-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <h2>Thank You, ${name}!</h2>
      <p>Your enquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.</p>
      <p class="enquiry-success-sub">We appreciate your interest in GenZova. Looking forward to working with you.</p>
      <button class="btn btn-primary enquiry-done-btn" onclick="closeEnquiryModal()">Done</button>
    </div>
  `;
}

// Close modal on overlay click
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'service-enquiry-modal') {
    closeEnquiryModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeEnquiryModal();
    closeInternshipModal();
    if (typeof closeSolutionEnquiryModal === 'function') closeSolutionEnquiryModal();
    if (typeof closeOfferEnquiry === 'function') closeOfferEnquiry();
  }
});

// Internship Modal Functions
function openInternshipModal(courseName) {
  const modal = document.getElementById('internship-enquiry-modal');
  if (!modal) return;
  const modalInner = modal.querySelector('.enquiry-modal');
  if (modalInner && !window._internshipFormHTML) {
    window._internshipFormHTML = modalInner.innerHTML;
  }
  if (modalInner && modalInner.querySelector('.enquiry-success')) {
    modalInner.innerHTML = window._internshipFormHTML;
  }

  const courseSelect = document.getElementById('intern-course-select');
  if (!courseSelect) return;

  // Reset state first
  courseSelect.disabled = false;
  courseSelect.style.backgroundColor = '';
  courseSelect.style.cursor = '';
  courseSelect.selectedIndex = 0;

  // Auto-detect based on route if courseName not provided
  let targetCourse = courseName;
  if (!targetCourse) {
    const hash = window.location.hash;
    if (hash === '#ai-development') {
      targetCourse = 'Artificial Intelligence';
    } else if (hash === '#service/web-development' || hash === '#service/website-development') {
      targetCourse = 'Web Development';
    } else if (hash === '#service/ai-automation') {
      targetCourse = 'Artificial Intelligence';
    } else if (hash.startsWith('#internship/')) {
      // Map internship slug to option text
      const slug = hash.replace('#internship/', '');
      const slugMap = {
        'artificial-intelligence': 'Artificial Intelligence',
        'web-development': 'Web Development',
        'mern-stack-development': 'MERN Stack Development',
        'full-stack-development': 'Full Stack Development',
        'generative-ai-development': 'Generative AI Development',
        'mobile-application-development': 'Mobile Application Development',
        'ui-ux-design': 'UI/UX Design',
        'machine-learning-deep-learning': 'Machine Learning & Deep Learning',
        'search-engine-optimization-seo': 'Search Engine Optimization (SEO)',
        'digital-marketing': 'Digital Marketing',
        'cloud-computing': 'Cloud Computing',
        'game-development': 'Game Development'
      };
      targetCourse = slugMap[slug] || '';
    }
  }

  if (targetCourse && courseSelect) {
    let found = false;
    for (let i = 0; i < courseSelect.options.length; i++) {
      const optText = courseSelect.options[i].text.toLowerCase();
      const optVal = courseSelect.options[i].value.toLowerCase();
      const targetLower = targetCourse.toLowerCase();

      if (optText.includes(targetLower) || optVal.includes(targetLower)) {
        courseSelect.selectedIndex = i;
        found = true;
        break;
      }
    }

    // If a value was pre-selected (via parameter or route), disable it
    if (found || courseName) {
      courseSelect.disabled = true;
      courseSelect.style.backgroundColor = '#f1f5f9';
      courseSelect.style.cursor = 'not-allowed';
    }
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeInternshipModal() {
  const modal = document.getElementById('internship-enquiry-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    const modalInner = modal.querySelector('.enquiry-modal');
    if (modalInner && modalInner.querySelector('.enquiry-success')) {
      modalInner.innerHTML = window._internshipFormHTML || '';
    }
  }
}

function submitInternshipForm(e) {
  e.preventDefault();
  const name = document.getElementById('intern-name').value;
  const course = document.getElementById('intern-course-select');
  const courseName = course.options[course.selectedIndex].text;
  const modal = document.querySelector('#internship-enquiry-modal .enquiry-modal');
  if (!modal) return;
  modal.innerHTML = `
    <button class="enquiry-modal-close" onclick="closeInternshipModal()" aria-label="Close">&times;</button>
    <div class="enquiry-success">
      <div class="enquiry-success-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <h2>Thank You, ${name}!</h2>
      <p>Your application for <strong>${courseName} Internship</strong> has been submitted successfully. Our team will review your profile and reach out to you shortly.</p>
      <p class="enquiry-success-sub">Welcome to GenZova. Your learning journey starts here.</p>
      <button class="btn btn-primary enquiry-done-btn" onclick="closeInternshipModal()">Done</button>
    </div>
  `;
}

// Close internship modal on overlay click
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'internship-enquiry-modal') {
    closeInternshipModal();
  }
  if (e.target && e.target.id === 'solution-enquiry-modal') {
    closeSolutionEnquiryModal();
  }
  if (e.target && e.target.id === 'offer-enquiry-modal') {
    closeOfferEnquiry();
  }
});

// ===== Solution Package Enquiry Modal =====
var SOLUTION_FORM_FIELDS = {
  'client-projects': {
    title: 'Get a Project Quote',
    subtitle: 'Tell us about your project and we\'ll provide a detailed estimate.',
    fields: '<div class="form-group"><label for="sol-enq-company">Company / Organization <span style="color:#ef4444;">*</span></label><input type="text" id="sol-enq-company" placeholder="Your company name" required></div><div class="grid-2"><div class="form-group"><label for="sol-enq-extra1">Estimated Budget</label><select id="sol-enq-extra1"><option value="">Select</option><option>Under ₹20,000</option><option>₹20,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>Above ₹1,00,000</option></select></div><div class="form-group"><label for="sol-enq-extra2">Project Timeline</label><select id="sol-enq-extra2"><option value="">Select</option><option>1–2 Weeks</option><option>3–4 Weeks</option><option>1–2 Months</option><option>4+ Months</option></select></div></div>'
  },
  'corporate-training': {
    title: 'Enquire About Training',
    subtitle: 'Fill in your details and our training team will contact you within 24 hours.',
    fields: '<div class="form-group"><label for="sol-enq-company">Company / Organization <span style="color:#ef4444;">*</span></label><input type="text" id="sol-enq-company" placeholder="Your company name" required></div><div class="grid-2"><div class="form-group"><label for="sol-enq-extra1">Team Size</label><select id="sol-enq-extra1"><option value="">Select</option><option>1–5</option><option>6–15</option><option>16–30</option><option>31–50</option><option>50+</option></select></div><div class="form-group"><label for="sol-enq-extra2">Interested Course</label><select id="sol-enq-extra2"><option value="">Select</option><option>Programming Languages</option><option>Software Development</option><option>Web Development</option><option>Mobile App Development</option><option>AI &amp; Data Science</option><option>AI for Business</option><option>Cloud Computing</option><option>DevOps</option><option>3D Game Development</option><option>Custom / Multiple</option></select></div></div>'
  },
  'academic-projects': {
    title: 'Get Academic Project Support',
    subtitle: 'Share your requirements and we\'ll help with your academic project.',
    fields: '<div class="grid-2"><div class="form-group"><label for="sol-enq-company">College / University <span style="color:#ef4444;">*</span></label><input type="text" id="sol-enq-company" placeholder="Your college name" required></div><div class="form-group"><label for="sol-enq-extra1">Degree</label><select id="sol-enq-extra1"><option value="">Select</option><option>B.Tech / B.E.</option><option>M.Tech / M.E.</option><option>MCA</option><option>BCA</option><option>MBA</option><option>Diploma</option><option>Ph.D.</option></select></div></div><div class="form-group"><label for="sol-enq-extra2">Preferred Technology</label><select id="sol-enq-extra2"><option value="">Select</option><option>AI / Machine Learning</option><option>Web Development</option><option>Mobile App</option><option>IoT / Embedded</option><option>Data Science</option><option>Cloud Computing</option><option>Other</option></select></div>'
  },
  'ai-automation': {
    title: 'Get an AI Solution Quote',
    subtitle: 'Tell us about your AI requirements.',
    fields: '<div class="form-group"><label for="sol-enq-company">Company / Organization <span style="color:#ef4444;">*</span></label><input type="text" id="sol-enq-company" placeholder="Your company name" required></div><div class="grid-2"><div class="form-group"><label for="sol-enq-extra1">AI Solution Type</label><select id="sol-enq-extra1"><option value="">Select</option><option>Conversational AI / Chatbot</option><option>Process Automation</option><option>Predictive Analytics</option><option>Computer Vision</option><option>NLP Solutions</option><option>Custom AI Agent</option></select></div><div class="form-group"><label for="sol-enq-extra2">Industry</label><select id="sol-enq-extra2"><option value="">Select</option><option>Healthcare</option><option>Finance</option><option>E-Commerce</option><option>Manufacturing</option><option>Education</option><option>Other</option></select></div></div>'
  },
  'internship-programs': {
    title: 'Apply for Internship',
    subtitle: 'Start your tech career journey with GenZova.',
    fields: '<div class="grid-2"><div class="form-group"><label for="sol-enq-company">College / University</label><input type="text" id="sol-enq-company" placeholder="Your college name"></div><div class="form-group"><label for="sol-enq-extra1">Current Education</label><select id="sol-enq-extra1"><option value="">Select</option><option>B.Tech / B.E.</option><option>MCA / BCA</option><option>Diploma</option><option>Graduate</option><option>Career Switcher</option></select></div></div><div class="form-group"><label for="sol-enq-extra2">Internship Track</label><select id="sol-enq-extra2"><option value="">Select</option><option>AI &amp; Machine Learning</option><option>Full Stack Development</option><option>Mobile App Development</option><option>Cloud &amp; DevOps</option><option>Data Science</option><option>UI/UX Design</option></select></div>'
  },
  'website-development': {
    title: 'Get a Website Quote',
    subtitle: 'Tell us about your website needs.',
    fields: '<div class="form-group"><label for="sol-enq-company">Company / Business Name <span style="color:#ef4444;">*</span></label><input type="text" id="sol-enq-company" placeholder="Your business name" required></div><div class="grid-2"><div class="form-group"><label for="sol-enq-extra1">Website Type</label><select id="sol-enq-extra1"><option value="">Select</option><option>Business Website</option><option>E-Commerce Store</option><option>Web Application</option><option>Portfolio</option><option>Landing Page</option></select></div><div class="form-group"><label for="sol-enq-extra2">Timeline</label><select id="sol-enq-extra2"><option value="">Select</option><option>2–3 Weeks</option><option>4–6 Weeks</option><option>6–10 Weeks</option><option>Flexible</option></select></div></div>'
  },
  'all-services': {
    title: 'Get a Service Quote',
    subtitle: 'Tell us which services you need.',
    fields: '<div class="form-group"><label for="sol-enq-company">Company / Organization <span style="color:#ef4444;">*</span></label><input type="text" id="sol-enq-company" placeholder="Your company name" required></div><div class="form-group"><label for="sol-enq-extra1">Service Interested In</label><select id="sol-enq-extra1"><option value="">Select</option><option>Software Development</option><option>AI &amp; Data Solutions</option><option>Digital Marketing</option><option>SEO</option><option>UI/UX Design</option><option>E-Commerce</option><option>Cloud &amp; DevOps</option><option>Multiple Services</option></select></div>'
  },
  'courses': {
    title: 'Enroll in a Course',
    subtitle: 'Share your details and we\'ll help you pick the right learning path.',
    fields: '<div class="grid-2"><div class="form-group"><label for="sol-enq-extra1">Experience Level</label><select id="sol-enq-extra1"><option value="">Select</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div><div class="form-group"><label for="sol-enq-extra2">Area of Interest</label><select id="sol-enq-extra2"><option value="">Select</option><option>Programming</option><option>Web Development</option><option>Mobile Development</option><option>AI &amp; Data Science</option><option>Cloud Computing</option><option>Digital Marketing</option></select></div></div>'
  }
};

function openSolutionEnquiry(slug, pkgName, pkgPrice) {
  var modal = document.getElementById('solution-enquiry-modal');
  if (!modal) return;
  var config = SOLUTION_FORM_FIELDS[slug] || { title: 'Get Started', subtitle: 'Fill in your details.', fields: '' };
  document.getElementById('sol-enquiry-title').textContent = config.title;
  document.getElementById('sol-enquiry-subtitle').textContent = config.subtitle;
  var badge = document.getElementById('sol-enquiry-pkg-badge');
  if (pkgName && pkgPrice) {
    badge.textContent = pkgName + ' ' + pkgPrice;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
  document.getElementById('sol-enq-extra-fields').innerHTML = config.fields;
  document.getElementById('solution-enquiry-form').reset();
  document.getElementById('sol-enq-solution').value = slug;
  document.getElementById('sol-enq-package').value = pkgName || '';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeSolutionEnquiryModal() {
  var modal = document.getElementById('solution-enquiry-modal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}

function submitSolutionEnquiry(e) {
  e.preventDefault();
  var name = document.getElementById('sol-enq-name').value.trim();
  var email = document.getElementById('sol-enq-email').value.trim();
  var phone = document.getElementById('sol-enq-phone').value.trim();
  if (!name || !email || !phone) return;
  var btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Submitting...';
  setTimeout(function () {
    btn.disabled = false; btn.textContent = 'Submit Enquiry';
    e.target.reset(); closeSolutionEnquiryModal();
    showToast('Enquiry submitted! We\'ll contact you within 24 hours.');
  }, 1500);
}

// ===== Offer Enquiry Modal =====
function openOfferEnquiry(serviceName) {
  var modal = document.getElementById('offer-enquiry-modal');
  if (!modal) return;
  document.getElementById('offer-enquiry-title').textContent = serviceName ? 'Get Started — ' + serviceName : 'Get Started';
  document.getElementById('offer-enquiry-form').reset();
  document.getElementById('offer-enq-service').value = serviceName || '';
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeOfferEnquiry() {
  var modal = document.getElementById('offer-enquiry-modal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}

document.addEventListener('submit', function (e) {
  if (e.target.id !== 'offer-enquiry-form') return;
  e.preventDefault();
  var name = document.getElementById('offer-enq-name').value.trim();
  var email = document.getElementById('offer-enq-email').value.trim();
  var phone = document.getElementById('offer-enq-phone').value.trim();
  var company = document.getElementById('offer-enq-company').value.trim();
  if (!name || !email || !phone || !company) return;
  var btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Submitting...';
  setTimeout(function () {
    btn.disabled = false; btn.textContent = 'Submit Enquiry';
    e.target.reset(); closeOfferEnquiry();
    showToast('Enquiry submitted successfully! We\'ll contact you within 24 hours.');
  }, 1500);
});

// About page enquiry form
function submitAboutEnquiry(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  form.innerHTML = `
    <div class="enquiry-success" style="padding:2rem 0;">
      <div class="enquiry-success-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <h2>Thank You, ${name}!</h2>
      <p>Your message has been received. Our team will get back to you within 24 hours.</p>
      <p class="enquiry-success-sub">We look forward to working with you.</p>
    </div>
  `;
}

// Profile project filter tabs
const PROFILE_PROJECTS = [
  // AI & ML
  { cat: 'ai', title: 'Cycle Count Detection System', desc: 'Real-time cycle count detection for manufacturing assembly lines using OpenCV and YOLOv11, enabling automated production monitoring with 99.2% accuracy.', tags: ['OpenCV', 'YOLOv11', 'Python', 'Manufacturing'] },
  { cat: 'ai', title: 'Document Intelligence Platform', desc: 'GenAI-powered document processing for insurance companies — automated claim extraction, policy analysis, and fraud detection using advanced LLM pipelines.', tags: ['GenAI', 'LangChain', 'OCR', 'Insurance'] },
  { cat: 'ai', title: 'Multilingual Sentiment Analyzer', desc: 'NLP-based sentiment analysis engine processing customer reviews in 12 languages with transformer models, delivering real-time brand perception insights.', tags: ['NLP', 'Transformers', 'BERT', 'Retail'] },
  { cat: 'ai', title: 'Defect Detection in Textiles', desc: 'Deep learning visual inspection system using OpenCV and custom CNN models to detect fabric defects on production lines, reducing manual QC effort by 80%.', tags: ['OpenCV', 'Deep Learning', 'CNN', 'Textile'] },
  { cat: 'ai', title: 'AI Claims Assistant for Insurance', desc: 'GenAI-powered virtual assistant for insurance companies — automates claim filing, policy inquiries, premium calculations, and document verification using RAG and fine-tuned LLMs.', tags: ['GenAI', 'RAG', 'LLM', 'Insurance'] },
  { cat: 'ai', title: 'Predictive Maintenance System', desc: 'ML-driven predictive maintenance for manufacturing equipment using sensor data, time-series forecasting, and anomaly detection — reducing downtime by 65%.', tags: ['Machine Learning', 'Time Series', 'IoT', 'Manufacturing'] },
  // Web Development
  { cat: 'web', title: 'Booking Platform', desc: 'Online reservation system for service-based businesses with calendar integration, automated notifications, and seamless payment processing.', tags: ['Vue.js', 'Laravel', 'MySQL', 'Payment Integration'] },
  { cat: 'web', title: 'Real Estate Portal', desc: 'Property listing and management platform with virtual tours, mortgage calculators, agent dashboards, and advanced search filters for buyers and sellers.', tags: ['React', 'Node.js', 'PostgreSQL', 'Google Maps'] },
  { cat: 'web', title: 'Learning Management System', desc: 'Full-featured LMS with course creation, video streaming, quizzes, progress tracking, and certification for educational institutions and corporate training.', tags: ['Next.js', 'Python', 'AWS S3', 'WebRTC'] },
  { cat: 'web', title: 'Job Portal & Recruitment', desc: 'End-to-end recruitment platform with resume parsing, AI-based candidate matching, interview scheduling, and employer analytics dashboards.', tags: ['Angular', 'Django', 'Elasticsearch', 'Redis'] },
  { cat: 'web', title: 'SaaS Dashboard Platform', desc: 'Multi-tenant SaaS analytics dashboard with real-time data visualization, role-based access, custom report builder, and white-label capabilities.', tags: ['React', 'GraphQL', 'D3.js', 'AWS'] },
  { cat: 'web', title: 'Hospital Management System', desc: 'Comprehensive HMS with patient records, appointment scheduling, billing, pharmacy management, and lab report integration for multi-branch hospitals.', tags: ['MERN Stack', 'Socket.io', 'MongoDB', 'Healthcare'] },
  // Mobile Apps
  { cat: 'mobile', title: 'Health & Fitness App', desc: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized AI-driven recommendations and wearable device integration.', tags: ['React Native', 'Firebase', 'Health APIs', 'Wearables'] },
  { cat: 'mobile', title: 'Food Delivery App', desc: 'Comprehensive food ordering and delivery application with real-time GPS tracking, multiple payment options, and restaurant management dashboard.', tags: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'] },
  { cat: 'mobile', title: 'Ride Sharing Platform', desc: 'On-demand ride-hailing app with driver-rider matching, fare estimation, live tracking, in-app payments, and driver earnings dashboard.', tags: ['React Native', 'Socket.io', 'Maps SDK', 'Stripe'] },
  { cat: 'mobile', title: 'Digital Wallet App', desc: 'Secure mobile wallet with UPI integration, bill payments, money transfers, transaction history, and rewards system for everyday financial transactions.', tags: ['Flutter', 'Firebase', 'UPI API', 'Biometric Auth'] },
  { cat: 'mobile', title: 'EdTech Learning App', desc: 'Interactive mobile learning platform with video courses, live classes, quizzes, progress tracking, and offline content download for students.', tags: ['Kotlin', 'Swift', 'WebRTC', 'AWS'] },
  { cat: 'mobile', title: 'Smart Home Controller', desc: 'IoT-connected mobile app for controlling smart home devices — lights, thermostats, cameras, and locks with voice commands and automation schedules.', tags: ['Flutter', 'MQTT', 'IoT', 'Voice AI'] },
  // E-commerce
  { cat: 'ecommerce', title: 'Multi-Vendor Marketplace', desc: 'Full-featured multi-vendor e-commerce marketplace with vendor dashboards, commission management, product reviews, and automated order fulfillment.', tags: ['React', 'Node.js', 'MongoDB', 'Razorpay'] },
  { cat: 'ecommerce', title: 'Fashion E-commerce Store', desc: 'Premium fashion retail platform with virtual try-on, size recommendation AI, wishlist, loyalty points, and seamless checkout experience.', tags: ['Next.js', 'Stripe', 'Cloudinary', 'AI Sizing'] },
  { cat: 'ecommerce', title: 'Grocery Delivery Platform', desc: 'Online grocery ordering system with real-time inventory sync, delivery slot management, subscription boxes, and route-optimized delivery logistics.', tags: ['React', 'Django', 'PostgreSQL', 'Maps API'] },
  { cat: 'ecommerce', title: 'B2B Wholesale Portal', desc: 'Business-to-business wholesale platform with bulk pricing, credit management, purchase orders, and integrated logistics for distributors and retailers.', tags: ['Angular', 'Java Spring', 'MySQL', 'ERP Integration'] },
  { cat: 'ecommerce', title: 'Pharmacy E-commerce', desc: 'Online pharmacy with prescription upload, medicine search, auto-refill reminders, doctor consultation booking, and doorstep delivery tracking.', tags: ['React', 'Node.js', 'MongoDB', 'Twilio'] },
  { cat: 'ecommerce', title: 'Auction & Bidding Platform', desc: 'Real-time auction platform with live bidding, countdown timers, escrow payments, seller verification, and automated winner notifications.', tags: ['Vue.js', 'Socket.io', 'Redis', 'Payment Gateway'] },
  // Enterprise Solutions
  { cat: 'enterprise', title: 'CRM System', desc: 'Custom CRM with sales automation, customer support ticketing, pipeline analytics, and team collaboration tools for enterprise clients.', tags: ['Angular', '.NET Core', 'SQL Server', 'Azure'] },
  { cat: 'enterprise', title: 'ERP Solution', desc: 'Enterprise Resource Planning system integrating HR, finance, inventory, procurement, and manufacturing modules for mid-to-large scale organizations.', tags: ['React', 'Java Spring', 'PostgreSQL', 'Microservices'] },
  { cat: 'enterprise', title: 'Supply Chain Management', desc: 'End-to-end supply chain platform with vendor management, purchase orders, warehouse tracking, logistics optimization, and real-time shipment monitoring.', tags: ['React', 'Python', 'MongoDB', 'IoT Sensors'] },
  { cat: 'enterprise', title: 'Payroll & HR Management', desc: 'Automated payroll processing with attendance tracking, leave management, tax calculations, employee self-service portal, and compliance reporting.', tags: ['Angular', 'Node.js', 'MySQL', 'AWS'] },
  { cat: 'enterprise', title: 'Compliance & Audit System', desc: 'Regulatory compliance management platform with automated audit trails, risk assessment, document control, and real-time compliance dashboards.', tags: ['React', '.NET Core', 'SQL Server', 'Power BI'] },
  { cat: 'enterprise', title: 'Business Intelligence Dashboard', desc: 'Real-time BI dashboard aggregating data from multiple sources with custom KPIs, predictive analytics, automated reports, and executive summary views.', tags: ['React', 'Python', 'D3.js', 'Machine Learning'] },
];

function renderProfileProjects(filter) {
  const grid = document.getElementById('profile-projects-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? PROFILE_PROJECTS : PROFILE_PROJECTS.filter(p => p.cat === filter);
  const icons = {
    ai: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-4.2-6.8l-1.4 1.4M5.6 18.4l-1.4 1.4m0-15.6l1.4 1.4m12.8 12.8l1.4 1.4"/></svg>',
    web: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    mobile: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    ecommerce: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    enterprise: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
  };
  grid.innerHTML = filtered.map(p => `
    <div class="profile-project-card" data-category="${p.cat}">
      <div class="profile-project-icon">${icons[p.cat]}</div>
      <h3>${p.title}</h3>
      <p style="text-align:justify;">${p.desc}</p>
      <div class="profile-project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function initProfileTabs() {
  renderProfileProjects('web');
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderProfileProjects(this.dataset.filter);
    });
  });
}

// FAQ accordion toggle
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// FAQ category filter
function initFaqTabs() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.style.display = item.dataset.faqCat === 'services' ? '' : 'none';
  });
  const firstItem = document.querySelector('.faq-item[data-faq-cat="services"]');
  if (firstItem) firstItem.classList.add('open');

  document.querySelectorAll('.faq-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.faq;
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.style.display = item.dataset.faqCat === filter ? '' : 'none';
      });
      const first = document.querySelector('.faq-item[data-faq-cat="' + filter + '"]');
      if (first) first.classList.add('open');
    });
  });
}




function init() {
  setTimeout(() => initReveal(), 100);
  window.addEventListener('hashchange', renderPage);
  renderPage();
  initProfileTabs();
  initFaqTabs();

  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    if (menu) menu.classList.toggle('open');
    if (menuIcon) menuIcon.style.display = menu?.classList.contains('open') ? 'none' : 'block';
    if (closeIcon) closeIcon.style.display = menu?.classList.contains('open') ? 'block' : 'none';
  });

  document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    this.querySelectorAll('.form-error').forEach(el => el.remove());
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value;
    const message = document.getElementById('message')?.value.trim();
    let hasError = false;
    if (!name) { document.getElementById('name')?.insertAdjacentHTML('afterend', '<span class="form-error">Name is required</span>'); hasError = true; }
    if (!email) { document.getElementById('email')?.insertAdjacentHTML('afterend', '<span class="form-error">Email is required</span>'); hasError = true; }
    if (!subject) { document.getElementById('subject')?.insertAdjacentHTML('afterend', '<span class="form-error">Please select a subject</span>'); hasError = true; }
    if (!message) { document.getElementById('message')?.insertAdjacentHTML('afterend', '<span class="form-error">Message is required</span>'); hasError = true; }
    if (hasError) return;
    const btn = this.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      this.reset();
      showToast("Message Sent! We'll get back to you soon.");
    }, 1500);
  });

  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'training-enquiry-form') return;
    e.preventDefault();
    var form = e.target;
    form.querySelectorAll('.form-error').forEach(function (el) { el.remove(); });
    var tName = document.getElementById('t-name')?.value.trim();
    var tEmail = document.getElementById('t-email')?.value.trim();
    var tPhone = document.getElementById('t-phone')?.value.trim();
    var tCompany = document.getElementById('t-company')?.value.trim();
    var hasError = false;
    if (!tName) { document.getElementById('t-name')?.insertAdjacentHTML('afterend', '<span class="form-error">Name is required</span>'); hasError = true; }
    if (!tEmail) { document.getElementById('t-email')?.insertAdjacentHTML('afterend', '<span class="form-error">Email is required</span>'); hasError = true; }
    if (!tPhone) { document.getElementById('t-phone')?.insertAdjacentHTML('afterend', '<span class="form-error">Phone is required</span>'); hasError = true; }
    if (!tCompany) { document.getElementById('t-company')?.insertAdjacentHTML('afterend', '<span class="form-error">Company name is required</span>'); hasError = true; }
    if (hasError) return;
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    setTimeout(function () {
      btn.disabled = false;
      btn.textContent = 'Submit Training Enquiry';
      form.reset();
      showToast("Training Enquiry Submitted! Our team will contact you within 24 hours.");
    }, 1500);
  });

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href !== '#' && href.length > 1) {
        e.preventDefault();
        navigateTo('/' + href.slice(1));
      }
    }
  });
}

function initDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  let leaveTimer = null;
  dropdowns.forEach(d => {
    d.addEventListener('mouseenter', () => {
      clearTimeout(leaveTimer);
      dropdowns.forEach(other => other.classList.remove('dropdown-open'));
      d.classList.add('dropdown-open');
    });
    d.addEventListener('mouseleave', () => {
      leaveTimer = setTimeout(() => d.classList.remove('dropdown-open'), 150);
    });
    const dropdownItems = d.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', () => {
        d.classList.remove('dropdown-open');
      });
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(d => d.classList.remove('dropdown-open'));
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  initDropdowns();
});

// Internship Hero - Interactive Particle Canvas
function initInternshipParticles() {
  const canvas = document.getElementById('internship-particles');
  if (!canvas) return;
  if (canvas._initialized) return;
  canvas._initialized = true;
  const ctx = canvas.getContext('2d');
  let width, height, particles, mouse;
  mouse = { x: -1000, y: -1000 };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }

  function createParticles() {
    particles = [];
    const spacing = 32;
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          baseX: (i + 0.5) * spacing,
          baseY: (j + 0.5) * spacing,
          x: (i + 0.5) * spacing,
          y: (j + 0.5) * spacing,
          size: 2,
        });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const grad = ctx.createRadialGradient(width * 0.3, height * 0.45, 0, width * 0.3, height * 0.45, width * 0.7);
    grad.addColorStop(0, 'rgba(30, 80, 200, 0.12)');
    grad.addColorStop(0.5, 'rgba(10, 40, 120, 0.05)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    const influenceRadius = 220;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const lx = p.baseX - width * 0.3;
      const ly = p.baseY - height * 0.45;
      const lightDist = Math.sqrt(lx * lx + ly * ly);
      const maxLightDist = width * 0.75;
      const baseBrightness = Math.max(0.15, 0.55 - (lightDist / maxLightDist) * 0.45);
      const dx = mouse.x - p.baseX;
      const dy = mouse.y - p.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let cursorBoost = 0;
      if (dist < influenceRadius) {
        const force = (influenceRadius - dist) / influenceRadius;
        cursorBoost = force;
        const angle = Math.atan2(dy, dx);
        p.x += (p.baseX + Math.cos(angle) * force * 18 - p.x) * 0.12;
        p.y += (p.baseY + Math.sin(angle) * force * 18 - p.y) * 0.12;
      } else {
        p.x += (p.baseX - p.x) * 0.08;
        p.y += (p.baseY - p.y) * 0.08;
      }
      const brightness = Math.min(0.7, baseBrightness + cursorBoost * 0.4);
      const dotSize = p.size + cursorBoost * 1.5;
      const glowSize = dotSize + 4 * brightness + cursorBoost * 5;
      const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
      glowGrad.addColorStop(0, `rgba(80, 160, 255, ${brightness * 0.35})`);
      glowGrad.addColorStop(0.3, `rgba(40, 100, 240, ${brightness * 0.12})`);
      glowGrad.addColorStop(1, 'rgba(40, 100, 240, 0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 170, 255, ${brightness * 0.7})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, dotSize * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 225, 255, ${brightness * 0.6})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
  window.addEventListener('resize', () => { resize(); createParticles(); });
  resize();
  createParticles();
  draw();
}

// Start particles when internships page is shown
const origRenderPage = renderPage;
renderPage = function () {
  origRenderPage();
  if (document.getElementById('page-internships')?.classList.contains('active')) {
    initInternshipParticles();
  }
  document.querySelectorAll('.page.active .hero-particles-canvas[data-particles]').forEach(canvas => {
    if (!canvas._initialized) {
      initHeroParticles(canvas);
    }
  });
};

function initHeroParticles(canvas) {
  if (!canvas || canvas._initialized) return;
  canvas._initialized = true;
  const ctx = canvas.getContext('2d');
  let width, height, particles, mouse = { x: -1000, y: -1000 };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }
  function createParticles() {
    particles = [];
    const spacing = 32;
    for (let i = 0; i < Math.floor(width / spacing); i++) {
      for (let j = 0; j < Math.floor(height / spacing); j++) {
        particles.push({ baseX: (i + 0.5) * spacing, baseY: (j + 0.5) * spacing, x: (i + 0.5) * spacing, y: (j + 0.5) * spacing, size: 2 });
      }
    }
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const lx = p.baseX - width * 0.3, ly = p.baseY - height * 0.45;
      const lightDist = Math.sqrt(lx * lx + ly * ly);
      const baseBrightness = Math.max(0.15, 0.55 - (lightDist / (width * 0.75)) * 0.45);
      const dx = mouse.x - p.baseX, dy = mouse.y - p.baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let cursorBoost = 0;
      if (dist < 220) {
        const force = (220 - dist) / 220;
        cursorBoost = force;
        const angle = Math.atan2(dy, dx);
        p.x += (p.baseX + Math.cos(angle) * force * 18 - p.x) * 0.12;
        p.y += (p.baseY + Math.sin(angle) * force * 18 - p.y) * 0.12;
      } else { p.x += (p.baseX - p.x) * 0.08; p.y += (p.baseY - p.y) * 0.08; }
      const brightness = Math.min(0.7, baseBrightness + cursorBoost * 0.4);
      const dotSize = p.size + cursorBoost * 1.5;
      ctx.beginPath(); ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100,170,255,${brightness * 0.7})`; ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  canvas.parentElement.addEventListener('mousemove', e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  canvas.parentElement.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });
  window.addEventListener('resize', () => { resize(); createParticles(); });
  resize(); createParticles(); draw();
}

// Count-up animation for stat numbers
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count], .profile-stat-number[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.count, 10);
        const suffix = entry.target.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          entry.target.textContent = current + suffix;
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

document.addEventListener('DOMContentLoaded', animateCounters);
window.addEventListener('hashchange', () => {
  setTimeout(animateCounters, 200);
});

// Leads Generated - continuous random counter
function initLeadsCounter() {
  const el = document.getElementById('leads-counter');
  if (!el) return;
  let count = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !el.dataset.started) {
        el.dataset.started = 'true';
        const startTarget = Math.floor(Math.random() * 5000) + 10000;
        const duration = 2000;
        const start = performance.now();
        function rampUp(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          count = Math.round(eased * startTarget);
          el.textContent = count.toLocaleString();
          if (progress < 1) {
            requestAnimationFrame(rampUp);
          } else {
            function tick() {
              count += Math.floor(Math.random() * 3) + 1;
              el.textContent = count.toLocaleString();
              setTimeout(tick, Math.floor(Math.random() * 800) + 200);
            }
            tick();
          }
        }
        requestAnimationFrame(rampUp);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(el);
}

document.addEventListener('DOMContentLoaded', initLeadsCounter);
window.addEventListener('hashchange', () => setTimeout(initLeadsCounter, 200));

// ===== Career Application Form Logic =====
var careerCurrentStep = 1;

function validateCareerStep(step) {
  var isValid = true;
  var feedback = document.getElementById('career-form-feedback');

  if (feedback) {
    feedback.style.display = 'none';
    feedback.hidden = true;
  }

  // Clear previous errors
  const currentPanel = document.querySelector('.career-step-panel[data-panel="' + step + '"]');
  if (!currentPanel) return true;

  currentPanel.querySelectorAll('input, select, textarea').forEach(el => {
    el.classList.remove('error-border');
    el.style.borderColor = '';
  });

  if (step === 1) {
    var name = document.getElementById('career-name');
    var email = document.getElementById('career-email');
    var phone = document.getElementById('career-phone');
    var city = document.getElementById('career-city');

    if (!name.value.trim()) { name.classList.add('error-border'); isValid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.classList.add('error-border'); isValid = false; }
    if (!phone.value.trim()) { phone.classList.add('error-border'); isValid = false; }
    if (!city.value.trim()) { city.classList.add('error-border'); isValid = false; }
  } else if (step === 2) {
    var qualification = document.getElementById('career-qualification');
    var college = document.getElementById('career-college');
    var year = document.getElementById('career-year');

    if (!qualification.value.trim()) { qualification.classList.add('error-border'); isValid = false; }
    if (!college.value.trim()) { college.classList.add('error-border'); isValid = false; }
    if (!year.value.trim()) { year.classList.add('error-border'); isValid = false; }
  } else if (step === 3) {
    var experience = document.getElementById('career-experience');
    var skills = document.getElementById('career-skills');
    var position = document.getElementById('career-position');

    if (!experience.value) { experience.classList.add('error-border'); isValid = false; }
    if (!skills.value.trim()) { skills.classList.add('error-border'); isValid = false; }
    if (!position.value) { position.classList.add('error-border'); isValid = false; }
  } else if (step === 4) {
    var resume = document.getElementById('career-resume');
    var why = document.getElementById('career-why');
    var availability = document.getElementById('career-availability');

    if (!resume.files || resume.files.length === 0) { resume.classList.add('error-border'); isValid = false; }
    if (!why.value.trim()) { why.classList.add('error-border'); isValid = false; }
    if (!availability.value) { availability.classList.add('error-border'); isValid = false; }
  }

  if (!isValid) {
    if (feedback) {
      feedback.textContent = 'Please fill all required details';
      feedback.style.display = 'block';
      feedback.hidden = false;
      feedback.style.color = '#ef4444';
      feedback.style.marginTop = '1rem';
      feedback.style.textAlign = 'center';
      feedback.style.fontWeight = '600';
    }
    showToast('Please fill all required details', 'error');

    // Highlight first error
    const firstError = currentPanel.querySelector('.error-border');
    if (firstError) firstError.focus();
  }

  return isValid;
}

function careerNextStep(step) {
  // If moving forward, validate current step
  if (step > careerCurrentStep) {
    if (!validateCareerStep(careerCurrentStep)) return;
  }

  document.querySelectorAll('.career-step-panel').forEach(p => p.style.display = 'none');
  var target = document.querySelector('.career-step-panel[data-panel="' + step + '"]');
  if (target) {
    target.style.display = 'block';
  }
  careerCurrentStep = step;

  document.querySelectorAll('.career-progress-step').forEach(function (s) {
    var sStep = parseInt(s.dataset.step);
    s.classList.remove('active', 'completed');
    if (sStep === step) s.classList.add('active');
    else if (sStep < step) s.classList.add('completed');
  });

  document.querySelectorAll('.career-progress-line').forEach(function (line, i) {
    line.classList.remove('active-line', 'completed-line');
    if (i + 1 < step) line.classList.add('completed-line');
    else if (i + 1 === step) line.classList.add('active-line');
  });

  // Scroll to the top of the form for better UX
  const formElement = document.getElementById('career-apply');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function submitCareerForm() {
  if (!validateCareerStep(4)) return;

  var name = document.getElementById('career-name').value.trim();
  var positionValue = document.getElementById('career-position').value;
  var positionText = 'the selected position';

  const positionSelect = document.getElementById('career-position');
  if (positionSelect && positionSelect.selectedIndex >= 0) {
    positionText = positionSelect.options[positionSelect.selectedIndex].text;
  }

  const progressBar = document.querySelector('.career-progress-bar');
  if (progressBar) progressBar.style.display = 'none';

  const card = document.querySelector('.career-form-card');
  if (card) {
    card.innerHTML = `
        <div class="enquiry-success" style="padding:3rem 1rem;">
          <div class="enquiry-success-icon">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 style="margin-bottom:0.5rem;">Thank You, ${name}!</h2>
          <p style="font-size:1rem;color:var(--muted-grey);margin-bottom:0.75rem;">Your application for <strong>${positionText}</strong> has been submitted successfully.</p>
          <p class="enquiry-success-sub">We appreciate your interest in joining GenZova.</p>
          <button class="btn btn-primary" style="margin-top:1.5rem;padding:0.7rem 2.5rem;" onclick="location.hash='#home'">Done</button>
        </div>
      `;
    showToast('Application submitted successfully!');
  }
}

// Solution detail page
function renderSolutionDetail(data) {
  var c = document.getElementById('solution-detail-content');
  if (!c) return;
  var useCaseIcons = ['<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'];
  var techLogos = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'Arduino': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    'Raspberry Pi': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
    'MQTT': 'https://cdn.worldvectorlogo.com/logos/mqtt.svg',
    'Sensors': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/homeassistant.svg',
    'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    'NLP': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
  };

  var html = '';
  // Hero
  html += '<section class="hero" style="min-height:60vh;">';
  html += '<canvas class="hero-particles-canvas" data-particles></canvas>';
  html += '<div class="hero-overlay"></div>';
  html += '<div class="hero-inner" style="max-width:56rem;">';
  html += '<a href="#" style="color:rgba(255,255,255,0.8);font-size:0.9rem;display:inline-block;margin-bottom:1rem;">&larr; Back to Home</a>';
  html += '<h1 style="text-align:center;">' + data.name + '</h1>';
  html += '<p style="text-align:center;font-size:1.1rem;margin-top:0.5rem;">' + data.tagline + '</p>';
  html += '<p style="text-align:center;margin-top:1rem;color:rgba(255,255,255,0.8);font-size:0.9rem;"></p>';
  html += '</div></section>';

  // Services
  html += '<section class="solution-section"><div style="max-width:72rem;margin:0 auto;text-align:center;">';
  html += '<h2 class="section-title reveal">Our ' + data.name + ' Services</h2>';
  html += '<p class="section-subtitle reveal" style="max-width:45rem;margin:0 auto 2rem;text-align:center;">Comprehensive solutions tailored to your specific needs</p>';
  html += '<div class="grid-3 reveal" style="gap:1.5rem;">';
  data.services.forEach(function (s) {
    html += '<div style="background:#fff;border:2px solid #e2e8f0;border-radius:1rem;padding:1.5rem;text-align:left;transition:border-color 0.2s,box-shadow 0.2s;" onmouseover="this.style.borderColor=\'#2563eb\';this.style.boxShadow=\'0 4px 16px rgba(37,99,235,0.1)\'" onmouseout="this.style.borderColor=\'#e2e8f0\';this.style.boxShadow=\'none\'">';
    html += '<h3 style="font-size:1.05rem;margin-bottom:0.5rem;color:var(--heading);">' + s.title + '</h3>';
    html += '<p style="font-size:0.85rem;color:var(--muted-grey);line-height:1.6;text-align:justify;margin-bottom:1rem;">' + s.desc + '</p>';
    s.features.forEach(function (f) {
      html += '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;">';
      html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
      html += '<span style="font-size:0.8rem;color:var(--heading);">' + f + '</span></div>';
    });
    html += '</div>';
  });
  html += '</div></div></section>';

  // Tech Stack with logos
  if (data.techStack && data.techStack.length > 0) {
    html += '<section class="solution-section" style="background:var(--bg-light);"><div style="max-width:72rem;margin:0 auto;text-align:center;">';
    html += '<h2 class="section-title reveal">Technologies We Work With</h2>';
    html += '<p class="section-subtitle reveal" style="max-width:45rem;margin:0 auto 2rem;text-align:center;">We leverage cutting-edge technologies and frameworks to build robust solutions</p>';
    html += '<div class="grid-3 reveal" style="gap:1.5rem;">';
    data.techStack.forEach(function (t) {
      html += '<div style="background:#fff;border:2px solid #e2e8f0;border-radius:1rem;padding:1.5rem;text-align:center;transition:border-color 0.2s;" onmouseover="this.style.borderColor=\'#2563eb\'" onmouseout="this.style.borderColor=\'#e2e8f0\'">';
      html += '<h3 style="font-size:1rem;margin-bottom:0.5rem;">' + t.title + '</h3>';
      html += '<p style="font-size:0.8rem;color:var(--muted-grey);margin-bottom:1rem;text-align:justify;">' + t.desc + '</p>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">';
      t.tags.forEach(function (tag) {
        var tagName, logo;
        if (typeof tag === 'object' && tag.name && tag.logo) {
          tagName = tag.name;
          logo = tag.logo;
        } else {
          tagName = tag;
          logo = techLogos[tag] || '';
        }
        html += '<div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;min-width:4rem;padding:0.5rem;">';
        if (logo) {
          html += '<div style="width:36px;height:36px;display:flex;align-items:center;justify-content:center;"><img src="' + logo + '" alt="' + tagName + '" style="max-width:36px;max-height:36px;width:auto;height:auto;object-fit:contain;display:block;" onerror="this.style.display=\'none\'"></div>';
        } else {
          html += '<div style="width:36px;height:36px;border-radius:50%;background:rgba(37,99,235,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>';
        }
        html += '<span style="font-size:0.7rem;color:var(--heading);font-weight:500;text-align:center;line-height:1.2;">' + tagName + '</span>';
        html += '</div>';
      });
      html += '</div></div>';
    });
    html += '</div></div></section>';
  }

  // Process
  html += '<section class="career-tracking-section"><div style="max-width:72rem;margin:0 auto;">';
  html += '<h2 class="section-title reveal" style="color:#fff;">Our Process</h2>';
  html += '<div class="career-track-steps reveal">';
  data.process.forEach(function (p, i) {
    html += '<div class="career-track-step">';
    html += '<div class="career-track-circle"><span style="color:#fff;font-weight:700;font-size:1.2rem;">' + (i + 1) + '</span></div>';
    if (i < data.process.length - 1) html += '<div class="career-track-connector"></div>';
    html += '<h3>' + p.title + '</h3>';
    html += '<p>' + p.desc + '</p>';
    html += '</div>';
  });
  html += '</div></div></section>';

  // Use Cases
  html += '<section class="solution-section"><div style="max-width:72rem;margin:0 auto;text-align:center;">';
  html += '<h2 class="section-title reveal">Use Cases</h2>';
  html += '<p class="section-subtitle reveal" style="max-width:45rem;margin:0 auto 2rem;">Transform your business operations across various domains</p>';
  html += '<div class="grid-3 reveal" style="gap:1.5rem;">';
  data.useCases.forEach(function (u, i) {
    html += '<div style="background:#fff;border:2px solid #e2e8f0;border-radius:1rem;padding:1.5rem;text-align:center;transition:border-color 0.2s,box-shadow 0.2s;" onmouseover="this.style.borderColor=\'#2563eb\';this.style.boxShadow=\'0 4px 16px rgba(37,99,235,0.1)\'" onmouseout="this.style.borderColor=\'#e2e8f0\';this.style.boxShadow=\'none\'">';
    html += '<div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(37,99,235,0.08);display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;">' + useCaseIcons[i % useCaseIcons.length] + '</div>';
    html += '<h4 style="font-size:0.95rem;margin-bottom:0.4rem;">' + u.title + '</h4>';
    html += '<p style="font-size:0.8rem;color:var(--muted-grey);line-height:1.6;text-align:justify;">' + u.desc + '</p>';
    html += '</div>';
  });
  html += '</div></div></section>';

  // Packages or Course Pricing
  if (data.coursesPricing && data.coursesPricing.length > 0) {
    html += '<section class="solution-section" style="background:var(--bg-light);"><div style="max-width:72rem;margin:0 auto;text-align:center;">';
    html += '<h2 class="section-title reveal">Course Wise Pricing</h2>';
    html += '<p class="section-subtitle reveal" style="max-width:45rem;margin:0 auto 2rem;">Transparent fixed pricing for every training program</p>';
    html += '<div class="grid-3 reveal" style="gap:1.5rem;">';
    data.coursesPricing.forEach(function (cat) {
      html += '<div style="background:#fff;border:2px solid #e2e8f0;border-radius:1rem;overflow:hidden;transition:border-color 0.2s;" onmouseover="this.style.borderColor=\'#2563eb\'" onmouseout="this.style.borderColor=\'#e2e8f0\'">';
      html += '<div style="background:linear-gradient(135deg,#2563eb,#1e3a8a);padding:0.85rem 1.25rem;">';
      html += '<h3 style="color:#fff;font-size:0.95rem;margin:0;">' + cat.category + '</h3>';
      html += '</div>';
      html += '<table style="width:100%;border-collapse:collapse;">';
      html += '<thead><tr><th style="text-align:left;padding:0.6rem 1rem;font-size:0.75rem;color:var(--muted-grey);border-bottom:2px solid #e2e8f0;font-weight:600;">Course</th><th style="text-align:right;padding:0.6rem 1rem;font-size:0.75rem;color:var(--muted-grey);border-bottom:2px solid #e2e8f0;font-weight:600;">Fixed Price</th></tr></thead>';
      html += '<tbody>';
      cat.courses.forEach(function (course, ci) {
        html += '<tr style="' + (ci % 2 === 0 ? 'background:#f8fafc;' : '') + '">';
        html += '<td style="text-align:left;padding:0.55rem 1rem;font-size:0.8rem;color:var(--heading);border-bottom:1px solid #f1f5f9;">' + course.name + '</td>';
        html += '<td style="text-align:right;padding:0.55rem 1rem;font-size:0.8rem;font-weight:600;color:#2563eb;border-bottom:1px solid #f1f5f9;">' + course.price + '</td>';
        html += '</tr>';
      });
      html += '</tbody></table>';
      html += '</div>';
    });
    html += '</div></div></section>';
  } else if (data.packages && data.packages.length > 0) {
    html += '<section class="solution-section" style="background:var(--bg-light);"><div style="max-width:72rem;margin:0 auto;text-align:center;">';
    html += '<h2 class="section-title reveal">' + data.name + ' Packages</h2>';
    html += '<p class="section-subtitle reveal" style="max-width:40rem;margin:0 auto 2rem;">Flexible solutions for businesses of all sizes</p>';
    html += '<div class="grid-3 reveal" style="gap:1.5rem;">';
    data.packages.forEach(function (pkg) {
      var isFeatured = pkg.tag === 'MOST POPULAR';
      html += '<div style="background:#fff;border:2px solid ' + (isFeatured ? '#2563eb' : '#e2e8f0') + ';border-radius:1rem;padding:1.75rem;text-align:center;position:relative;' + (isFeatured ? 'box-shadow:0 8px 24px rgba(37,99,235,0.15);transform:scale(1.03);' : '') + '">';
      if (pkg.tag) html += '<div style="position:absolute;top:-0.75rem;left:50%;transform:translateX(-50%);background:#2563eb;color:#fff;padding:0.2rem 0.75rem;border-radius:1rem;font-size:0.7rem;font-weight:600;">' + pkg.tag + '</div>';
      html += '<h3 style="font-size:1.1rem;margin-bottom:0.25rem;">' + pkg.name + '</h3>';
      html += '<div style="font-size:1.75rem;font-weight:700;color:var(--primary);margin:0.75rem 0;">' + pkg.price + '</div>';
      pkg.features.forEach(function (f) {
        html += '<div style="display:flex;align-items:center;gap:0.5rem;padding:0.35rem 0;border-bottom:1px solid #f1f5f9;">';
        html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
        html += '<span style="font-size:0.8rem;color:var(--heading);text-align:left;">' + f + '</span></div>';
      });
      html += '<button onclick="openOfferEnquiry(\'' + data.name.replace(/'/g, "\\'") + ' — ' + pkg.name.replace(/'/g, "\\'") + '\')" class="btn ' + (isFeatured ? 'btn-primary' : 'btn-outline') + '" style="width:100%;margin-top:1.25rem;padding:0.6rem;border:none;cursor:pointer;">Get Started</button>';
      html += '</div>';
    });
    html += '</div></div></section>';
  }

  // FAQ
  if (data.faqs && data.faqs.length > 0) {
    html += '<section class="solution-section"><div style="max-width:48rem;margin:0 auto;">';
    html += '<h2 class="section-title reveal" style="text-align:center;">' + data.name + ' FAQs</h2>';
    html += '<div class="reveal" style="margin-top:2rem;">';
    data.faqs.forEach(function (faq, i) {
      html += '<div class="faq-item' + (i === 0 ? ' open' : '') + '" data-faq-cat="solution">';
      html += '<button class="faq-question" onclick="toggleFaq(this)">' + faq.q + '<svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button>';
      html += '<div class="faq-answer"><p>' + faq.a + '</p></div></div>';
    });
    html += '</div></div></section>';
  }

  // Enquiry Form (for Corporate Training)
  if (data.slug === 'corporate-training') {
    html += '<section class="solution-section" style="background:var(--bg-light);"><div style="max-width:42rem;margin:0 auto;">';
    html += '<h2 class="section-title reveal" style="text-align:center;">Enquire About Corporate Training</h2>';
    html += '<p class="reveal" style="text-align:center;color:var(--muted-grey);margin-bottom:2rem;">Fill in your details and our training team will get back to you within 24 hours.</p>';
    html += '<form id="training-enquiry-form" class="reveal" style="background:#fff;padding:2rem;border-radius:1rem;border:1px solid #e2e8f0;">';
    html += '<div class="form-group"><label for="t-name">Full Name *</label><input type="text" id="t-name" placeholder="Your name" required></div>';
    html += '<div class="grid-2"><div class="form-group"><label for="t-email">Email *</label><input type="email" id="t-email" placeholder="your@email.com" required></div>';
    html += '<div class="form-group"><label for="t-phone">Phone *</label><input type="tel" id="t-phone" placeholder="+91 XXXXX XXXXX" required></div></div>';
    html += '<div class="form-group"><label for="t-company">Company / Organization *</label><input type="text" id="t-company" placeholder="Your company name" required></div>';
    html += '<div class="grid-2"><div class="form-group"><label for="t-team-size">Team Size</label><select id="t-team-size"><option value="">Select</option><option value="1-5">1–5</option><option value="6-15">6–15</option><option value="16-30">16–30</option><option value="31-50">31–50</option><option value="50+">50+</option></select></div>';
    html += '<div class="form-group"><label for="t-course">Interested Course</label><select id="t-course"><option value="">Select a course category</option><option value="Programming Languages">Programming Languages</option><option value="Software Development">Software Development</option><option value="Web Development">Web Development</option><option value="Mobile App Development">Mobile App Development</option><option value="AI & Data Science">AI & Data Science</option><option value="AI for Business">AI for Business</option><option value="Cloud Computing">Cloud Computing</option><option value="DevOps">DevOps</option><option value="3D Game Development">3D Game Development</option><option value="Custom / Multiple">Custom / Multiple Courses</option></select></div></div>';
    html += '<div class="form-group"><label for="t-message">Additional Requirements</label><textarea id="t-message" placeholder="Tell us about your training needs, preferred schedule, or any specific topics..." rows="4"></textarea></div>';
    html += '<button type="submit" class="btn btn-primary" style="width:100%;padding:1rem;">Get Started Training Enquiry</button>';
    html += '</form></div></section>';
  }

  // CTA
  html += '<section class="cta-section">';
  if (data.slug === 'corporate-training') {
    html += '<h2>Ready to Upskill Your Team?</h2>';
    html += '<p>Call us directly at <a href="" style="color:#fff;text-decoration:underline;font-weight:600;">' + data.contact + '</a> or fill out the enquiry form above.</p>';
  } else {
    html += '<h2>Ready to Get Started?</h2>';
    html += '<p>Let\'s discuss how GenZova can help transform your business with our ' + data.name.toLowerCase() + ' solutions.</p>';
  }
  html += '<div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">';
  html += '<a href="#contact" class="btn btn-outline" style="padding:1rem 3rem;min-width:200px;text-align:center;">Contact Us</a>';
  html += '<a href="#" class="btn btn-outline" style="padding:1rem 3rem;min-width:200px;text-align:center;">Back to Home</a>';
  html += '</div></section>';

  c.innerHTML = html;

  // Re-init carousel if we are on AI development page
  if (data.slug === 'ai-development' || window.location.hash === '#ai-development') {
    setTimeout(initProjectCarousel, 100);
  }
}

function initProjectCarousel() {
  const carousel = document.querySelector('[data-project-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.project-carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector('.carousel-nav-next');
  const prevBtn = carousel.querySelector('.carousel-nav-prev');

  if (!track || !nextBtn || !prevBtn || slides.length === 0) return;

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const itemsToShow = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
    const maxIndex = Math.max(0, slides.length - itemsToShow);

    if (currentIndex > maxIndex) currentIndex = maxIndex;

    // We use translate3d for better performance
    const offset = currentIndex * slideWidth;
    track.style.transform = `translate3d(-${offset}px, 0, 0)`;

    // Update button states
    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
    nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
  }

  // Remove old listeners if any (to prevent multiple bindings)
  const newNextBtn = nextBtn.cloneNode(true);
  const newPrevBtn = prevBtn.cloneNode(true);
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
  prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);

  newNextBtn.addEventListener('click', () => {
    const itemsToShow = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
    const maxIndex = Math.max(0, slides.length - itemsToShow);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  newPrevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Handle swipe/drag
  let startX, isDragging = false, currentTranslate = 0, prevTranslate = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    track.style.transition = 'none';
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    const slideWidth = slides[0].getBoundingClientRect().width;
    const itemsToShow = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
    const maxIndex = Math.max(0, slides.length - itemsToShow);

    let translate = (-currentIndex * slideWidth) + diff;
    // Rubber band effect at edges
    if (translate > 0) translate /= 3;
    if (translate < -maxIndex * slideWidth) translate = (-maxIndex * slideWidth) + (translate + maxIndex * slideWidth) / 3;

    track.style.transform = `translate3d(${translate}px, 0, 0)`;
  });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    const slideWidth = slides[0].getBoundingClientRect().width;

    if (Math.abs(diff) > slideWidth / 4) {
      if (diff > 0 && currentIndex > 0) currentIndex--;
      else if (diff < 0) {
        const itemsToShow = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        const maxIndex = Math.max(0, slides.length - itemsToShow);
        if (currentIndex < maxIndex) currentIndex++;
      }
    }
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  // Initial update
  setTimeout(updateCarousel, 300);
}

// Add call to DOMContentLoaded if not already there
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectCarousel);
} else {
  initProjectCarousel();
}
// Live Search for Dropdowns
window.filterDropdown = function (input) {
  const filter = input.value.toLowerCase();
  const dropdown = input.closest('.dropdown-menu');
  const items = dropdown.querySelectorAll('.dropdown-item');
  let hasResults = false;

  items.forEach(item => {
    const text = (item.textContent || item.innerText).toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  });

  // Handle empty state
  let emptyMsg = dropdown.querySelector('.dropdown-empty-msg');
  if (!hasResults) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('div');
      emptyMsg.className = 'dropdown-empty-msg';
      emptyMsg.style.cssText = 'padding: 1rem; text-align: center; color: #94a3b8; font-size: 0.875rem;';
      emptyMsg.textContent = 'No results found';
      dropdown.appendChild(emptyMsg);
    }
  } else if (emptyMsg) {
    emptyMsg.remove();
  }
}
