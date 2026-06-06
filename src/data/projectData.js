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
        image: "/images/projects/bash-agent-pytorch.png", // Paths mapped to public/ directory
        github: "https://github.com/BhagyaP27/bash-agent-pytorch",
        demo: "" // Leave blank if there's no live site
    },
    {
        id: 2,
        title: "AI-Resume-Builder",
        description: "An AI-powered web application that helps users build and optimize professional resumes quickly.",
        content: `### Features & Capabilities
A tool designed to dynamically construct and target resumes for specific job descriptions.

### What it does
1. **Dynamic Tailwind Templates:** Renders highly polished, ATS-optimized layouts on the fly.
2. **Contextual Tailoring:** Matches user skill history blocks directly against scraped job requirements to suggest optimal structural emphasis.

Built as an exploration of building modular frontend forms that sync state seamlessly with AI microservices.`,
        technologies: ["React", "Node.js", "TailwindCSS", "OpenAI API"],
        image: "/images/projects/AI-Resume-Builder.png",
        github: "",
        demo: ""
    }
];