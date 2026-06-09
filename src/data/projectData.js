// src/data/projectData.js
export const projects = [
    {
        id: 1,
        title: "bash-agent-pytorch",
        description: "A Python-based seq2seq and entity extraction pipeline for generating parameterized Bash commands dynamically.",
        content: `### Deep Dive & Architecture
This framework acts as an intelligent layer between natural language and complex shell environments. It translates human intent into safely structured, parameterized Bash scripts.

### Key Implementation Details
* **Entity Extraction Pipeline:** Uses a custom sequence-to-sequence implementation to parse user parameters out of raw English text.
* **Safety & Guardrails:** Validates generated commands against a strict abstract syntax tree (AST) whitelist to prevent accidental or malicious execution of destructive commands (like structural directory wipes).

### Technical Challenges
The biggest obstacle was resolving token ambiguity when handling dense regular expressions and inline bash piping. Moving to a more granular tokenization strategy helped stabilize parameter mapping significantly.`,
        technologies: ["Python", "PyTorch", "Bash", "NLP"],
        image: "/images/projects/bash-agent-pytorch.png",
        github: "https://github.com/BhagyaP27/bash-agent-pytorch",
        demo: ""
    },
    {
        id: 2,
        title: "RAG Doc Reader",
        description: "A full-stack AI-powered document assistant. Upload any PDF, Word doc, or Markdown file and have a real conversation with its contents — powered by local LLMs via Ollama. No API keys. No cloud. No data leaving your computer.",
        content: `### Overview
A full-stack Retrieval-Augmented Generation (RAG) application that lets you upload documents and ask natural language questions about them. Answers stream token-by-token in real time, grounded strictly in your document — no hallucination.

### How It Works
\`\`\`
Upload a file
    ↓
Parse text → split into chunks → embed with sentence-transformers → store in FAISS
                                                                          ↓
Ask a question → embed question → semantic search → retrieve top 5 chunks
                                                                          ↓
                                Inject chunks into prompt → stream answer via Ollama
\`\`\`

### Architecture & Key Decisions

* **FAISS over ChromaDB:** Switched from ChromaDB to FAISS for the vector store because ChromaDB's dependency had no Windows wheel for Python 3.13. FAISS is faster, dependency-free, and gives direct control over the similarity math. Vectors are persisted manually as \`.faiss\` + \`.json\` files on disk.
* **Sentence Transformers (all-MiniLM-L6-v2):** Lightweight 90 MB embedding model that runs fully offline. Embedded at Docker build time so the first query is instant.
* **Streaming SSE:** The FastAPI backend streams LLM tokens as Server-Sent Events. The React frontend reads the \`ReadableStream\` and appends each token live — no waiting for the full response.
* **Multi-provider LLM abstraction:** A single config switch in \`.env\` routes between Ollama (local), OpenAI, and Anthropic without any code changes.

### Technical Challenges

The hardest part was not the LLM wrapper — it was the data plumbing. Moving from ChromaDB to raw NumPy matrix math, and then to FAISS, revealed how critical infrastructure choices are when handling high-dimensional vectors. NumPy's brute-force cosine similarity scaled linearly with chunk count and became unacceptably slow. FAISS solves this with optimized C++ BLAS routines and Approximate Nearest Neighbor search that only scans relevant vector neighborhoods.

### Deployment
Deployed to AWS with a fully automated CI/CD pipeline: frontend on S3 + CloudFront, backend as a Docker container on ECS Fargate, FAISS index persisted on EFS so documents survive redeployments. OIDC authentication eliminates long-lived AWS keys from GitHub Actions.

### Eval Results
A custom faithfulness evaluator (\`eval_rag.py\`) measures RAG vs. bare LLM baseline using word-overlap heuristics. RAG improved answer faithfulness by ~96% on a 5-question benchmark.`,
        technologies: ["Python", "FastAPI", "FAISS", "React", "Vite", "Ollama", "sentence-transformers", "LangChain", "Docker", "AWS ECS", "Terraform"],
        image: "/images/projects/rag-doc-reader.png",
        github: "https://github.com/BhagyaP27/rag-doc-reader",
        demo: ""
    },
    {
        id: 3,
        title: "Customer Personality Segmentation",
        description: "End-to-end customer segmentation analysis using K-Means clustering and PCA to group customers based on purchasing behavior and demographics.",
        content: `### Overview
Performed a full customer segmentation pipeline to identify distinct customer personas from raw behavioral and demographic data. The goal was to give a business actionable groupings for targeted marketing.

### Pipeline
* **Exploratory Data Analysis:** Cleaned missing values, handled outliers, and visualized feature distributions with pandas and matplotlib.
* **Dimensionality Reduction:** Applied PCA to reduce the feature space before clustering, improving both speed and cluster separability.
* **Clustering:** Used K-Means with the Elbow Method and Silhouette Score to select the optimal number of clusters.
* **Profiling:** Characterized each cluster by spending patterns, income range, and product category preferences to produce actionable business personas.

### Key Findings
Identified 4 distinct customer segments ranging from high-value loyalists to price-sensitive occasional buyers, enabling targeted campaign strategies for each group.`,
        technologies: ["Python", "pandas", "NumPy", "Scikit-learn", "K-Means", "PCA", "Matplotlib"],
        image: "",
        github: "https://github.com/BhagyaP27",
        demo: ""
    },
    {
        id: 4,
        title: "Potential Customers Prediction",
        description: "ML classification model to predict which leads are likely to convert into customers, using an ensemble of Logistic Regression, Decision Trees, Random Forests, and Gradient Boosting.",
        content: `### Overview
Built a binary classification pipeline to predict customer conversion probability from behavioral and demographic features. Compared multiple model families to find the best precision-recall tradeoff for a lead-scoring use case.

### Pipeline
* **Feature Engineering:** Used \`OneHotEncoder\` for categorical variables and standard scaling for numerical features inside a \`Pipeline\` to prevent data leakage.
* **Model Comparison:** Trained and cross-validated Logistic Regression, Decision Trees, Random Forests, and Gradient Boosting. Evaluated on ROC-AUC, precision, and recall.
* **Hyperparameter Tuning:** Applied \`GridSearchCV\` on the best-performing model to optimize depth, estimators, and learning rate.

### Results
Gradient Boosting achieved the highest ROC-AUC, outperforming the Logistic Regression baseline by a significant margin while maintaining interpretable feature importances for business stakeholders.`,
        technologies: ["Python", "Scikit-learn", "Logistic Regression", "Random Forests", "Gradient Boosting", "pandas"],
        image: "",
        github: "https://github.com/BhagyaP27",
        demo: ""
    }
];