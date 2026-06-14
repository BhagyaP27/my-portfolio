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
        
        github: "https://github.com/BhagyaP27",
        demo: ""
    },
    {
        id: 5,
        title: "MyTunes+ Music Database",
        description: "A relational music collection database with a custom Flask web interface. Demonstrates complex SQL queries across a 10-table normalized schema — artist catalogues, playlist durations, many-to-many genre relationships, and track credits.",
        content: `### Overview
MyTunes+ is a fully normalized SQLite database modelling a personal music collection, wrapped in a Flask web app for interactive query demonstration. Built for COMP 3005 (Database Systems) at Carleton University.

### Schema Design
The database spans **10 tables** in 3NF:

* \`ARTIST\`, \`ALBUM\`, \`TRACK\` — core catalogue hierarchy
* \`TRACK_ARTIST\` — many-to-many between tracks and artists, with a \`role\` attribute (primary, featuring, composer)
* \`GENRE\`, \`ALBUM_GENRE\` — many-to-many genre tagging
* \`PLAYLIST\`, \`PLAYLIST_TRACK\` — ordered playlist membership with position tracking
* \`USER\`, \`USER_FOLLOWS\` — user accounts and artist follow relationships

### Key SQL Queries
* **Artist catalogue:** Multi-join across \`TRACK_ARTIST → TRACK → ALBUM\` with \`GROUP_CONCAT\` for collaborator credits and role aggregation.
* **Playlist duration report:** \`COALESCE(SUM(duration_sec), 0)\` with ordered \`PLAYLIST_TRACK\` join — answers "how long is my playlist?" in one query.
* **Genre drill-down:** Two-hop many-to-many join via \`ALBUM_GENRE → GENRE\` filtered by \`genre_id\`, demonstrating N:N relationship traversal.
* **Top artists by credits:** \`LEFT JOIN TRACK_ARTIST\` with \`COUNT\` and \`GROUP BY\` to rank artists by primary track credits.

### Architecture
* **Backend:** Flask 3.x with \`sqlite3.Row\` for dict-style row access and \`PRAGMA foreign_keys = ON\` enforced on every connection.
* **Templating:** Jinja2 with a shared \`base.html\` layout, \`format_duration\` context processor converting raw seconds to human-readable time.
* **Seed script:** \`setup_db.py\` recreates and seeds the entire database from Python tuples — reproducible from scratch in one command.

### Technical Highlights
Foreign key constraints are enforced at the SQLite layer, not just application logic. The \`PLAYLIST_TRACK\` table enforces both \`UNIQUE (playlist_id, position)\` and \`PRIMARY KEY (playlist_id, track_id)\` — preventing duplicate positions and duplicate track entries independently.`,
        technologies: ["Python", "Flask", "SQLite", "SQL", "Jinja2", "HTML", "CSS"],
        
        github: "https://github.com/BhagyaP27",
        demo: ""
    },
    {
        id: 6,
        title: "My Journal — Desktop App",
        description: "A private, offline-first journal and task manager built with React and Electron. All data stays on your machine — no accounts, no servers, no tracking.",
        content: `### Overview
A cross-platform desktop application for journaling and task management. Built with React for the UI and Electron for native desktop integration. Data is persisted to the local filesystem via Electron's IPC bridge — no cloud, no telemetry.

### Architecture
The app uses a clean two-process Electron architecture:

* **Main process** (\`electron/main.js\`): Manages the \`BrowserWindow\`, handles file I/O through a \`store.json\` in the OS user data directory, and exposes a typed IPC API (\`store-get\`, \`store-set\`, \`store-delete\`, \`store-has\`).
* **Renderer process** (React): Communicates with the main process through a \`contextBridge\` preload — \`window.electronStore\` — keeping \`nodeIntegration\` disabled for security.
* **Storage abstraction:** A unified \`storage\` helper detects whether \`window.electronStore\` is present and falls back to \`localStorage\` automatically, so the app runs identically in a browser during development.

### Features
* **Journal** — timestamped entries with title and freeform content, edit/delete, sorted chronologically.
* **Tasks** — priority levels (High / Medium / Low), optional due dates, completion toggle, full edit/delete lifecycle.
* **Offline-first** — all data written to \`%APPDATA%/my-journal-app/store.json\` on Windows; no network requests.

### Build & Distribution
Packaged with \`electron-builder\` targeting NSIS installer and portable \`win-unpacked\` for Windows, \`dmg\` for macOS, and \`AppImage\` for Linux. A multi-stage Docker build also serves the React app via nginx for web deployment.

### Technical Highlights
The \`contextBridge\` + \`ipcMain.handle\` pattern provides a fully async, promise-based storage API to the renderer without exposing Node.js internals — a security best practice over the legacy \`nodeIntegration: true\` approach.`,
        technologies: ["React", "Electron", "JavaScript", "Tailwind CSS", "Node.js", "electron-builder", "Docker"],
        github: "https://github.com/BhagyaP27",
        demo: ""
    },
    {
        id: 7,
        title: "OS Process Scheduler Simulator",
        description: "A C++ simulation of three OS scheduling algorithms — External Priority (EP), Round Robin (RR), and a hybrid EP+RR — with full PCB lifecycle tracking, memory partition allocation, and I/O interrupt handling.",
        content: `### Overview
A systems-level C++ simulator built for SYSC 4001 (Operating Systems) at Carleton University. Models a realistic OS scheduler with three distinct scheduling policies, a fixed memory partition table, and an interrupt-driven I/O subsystem. All state transitions are logged in a formatted execution trace table.

### Scheduling Algorithms Implemented

* **External Priority (EP) — Non-Preemptive:** Processes are ordered by PID (lower PID = higher priority). Once a process starts running, it holds the CPU until it blocks on I/O or terminates. No context switching due to priority changes mid-burst.
* **Round Robin (RR):** Pure time-sharing with a 100ms quantum. Processes cycle through the ready queue in FIFO order. Preempted processes are re-enqueued at the back, and a returning I/O process is inserted at the front to preserve fairness.
* **EP + RR Hybrid:** Combines both policies. Higher-priority processes preempt lower-priority ones immediately on arrival. Among equal-priority processes, the 100ms Round Robin quantum enforces fair CPU sharing.

### Architecture

The simulator is built around a \`PCB\` struct tracking PID, size, arrival time, start time, processing time, remaining time, partition number, state, I/O frequency, and I/O duration. A shared header (\`interrupts_student1_student2.hpp\`) provides all OS primitives:

* \`assign_memory()\` / \`free_memory()\` — best-fit allocation across 6 fixed partitions (40, 25, 15, 10, 8, 2 MB)
* \`sync_queue()\` — propagates PCB state changes back into the job list
* \`idle_CPU()\` — resets the running slot to a sentinel NOT_ASSIGNED state
* \`all_process_terminated()\` — loop termination predicate

### I/O Interrupt Handling

Each process carries an \`io_freq\` (burst length before needing I/O) and \`io_duration\` (time blocked). The simulator tracks \`time_since_last_io\` per running process and a vector of \`{PID, completion_time}\` pairs for pending I/O operations. At each tick, completed I/O events are resolved first, moving processes from WAITING back to READY before new arrivals are processed — matching real interrupt priority ordering.

### Memory Management

Six fixed partitions are allocated using a reverse best-fit scan: the smallest partition that fits the process is chosen, preventing fragmentation of large partitions. Partitions are freed on termination and the \`occupied\` field is reset to \`-1\`.

### Output

Each run produces a formatted state-transition table logging every NEW→READY, READY→RUNNING, RUNNING→WAITING, WAITING→READY, and RUNNING→TERMINATED event with its timestamp. Output filenames are auto-derived from the input test case number.

### Concurrency Extension (Part 2)

A parallel TA exam-marking system was built alongside the scheduler to demonstrate POSIX process synchronization:
* **Part A** (no semaphores): Demonstrates live race conditions — duplicate question marking, lost rubric updates, and concurrent exam loads.
* **Part B** (with semaphores): Implements a readers-writer pattern for the shared rubric (\`sem_wait\` / \`sem_post\`), per-exam mutexes for question selection, and a dedicated exam-load mutex. All three critical section requirements (mutual exclusion, progress, bounded waiting) are satisfied.
* **Shared memory** via \`shm_open\` + \`mmap\` with \`fork()\`-based TA processes.`,
        technologies: ["C++", "POSIX", "Shared Memory", "Semaphores", "OS Scheduling", "Memory Management"],
        github: "https://github.com/BhagyaP27",
        demo: ""
    }
];