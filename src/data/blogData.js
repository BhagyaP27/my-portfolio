// src/data/blogData.js
export const blogPosts = [
    {
        id: 1,
        title: "Learning Transformers: A Beginner's Guide",
        date: "November 14, 2025",
        coverImage: "/images/blog/TransFormer_arch.jpg", // Add your image path
        excerpt: "Transformers have revolutionized the field of Natural Language Processing (NLP) and serve as the backbone for modern LLMs. In this post, we break down the attention mechanism and architecture without the complex math.",
        content: `Transformers completely changed how machines understand human language. Before they arrived in 2017 via the famous 'Attention Is All You Need' paper, sequential models like RNNs and LSTMs processed text word-by-word. This was slow and terrible for long sentences.

### The Secret Sauce: Self-Attention
Transformers introduced **Self-Attention**, which allows a model to look at every single word in a sentence simultaneously and determine which words are most relevant to each other. For example, in the sentence 'The bank of the river,' attention helps the model know 'bank' refers to land, not money.

### Core Architecture
1. **The Encoder:** Processes the input text and extracts its core meanings and features.
2. **The Decoder:** Takes those features and generates an output (like translating the text into another language or predicting the next word).

Today, models like GPT, BERT, and Claude rely entirely on scaled-up versions of this exact architecture. If you're getting into AI, mastering the Transformer is your absolute square one.`,
        tags: ["AI", "Machine Learning", "Transformers", "NLP"]
    },
    {
        id: 2,
        title: "My Experience Learning a RAG Doc Reader",
        date: "December 5, 2025",
        coverImage: "/images/blog/RAG_arch1.jpg", // Add your image path
        excerpt: "Building a Retrieval-Augmented Generation (RAG) pipeline taught me how to bridge the gap between static AI models and private data. Here is how I overcame vector search bottlenecks by moving from ChromaDB to FAISS.",
        content: `Standard Large Language Models are amazing, but they suffer from two major flaws: they hallucinate facts when they don't know the answer, and their knowledge cuts off at their training date. To fix this for a portfolio project, I built a RAG (Retrieval-Augmented Generation) Document Reader. 

While the concept seemed straightforward, the actual implementation forced me to rethink my entire architecture when performance hit a wall.

### The Initial Setup: ChromaDB
I started the project using **ChromaDB**, an open-source vector database. It worked fine out of the box for small-scale testing, but as I began ingestion and chunking—splitting documents into digestible 500-character blocks—I wanted more granular control over how the vector similarity math was being executed. 

I decided to export the embeddings into raw NumPy arrays to manually run exact vector matching. 

### The Bottleneck: The NumPy Vector Search Struggle
That's where the headache started. Using pure NumPy to calculate cosine similarity or Euclidean distance across hundreds of document chunks became incredibly slow. 

Writing nested loops or even broadcasting matrix multiplications in NumPy means you are performing an exhaustive brute-force search (Linear Scan). As the number of vectors grew, the search time scaled linearly. The query latency was completely unacceptable for a real-time doc reader application. I needed a dedicated mathematical engine designed specifically for massive vector operations.

### The Breakthrough: Shifting to FAISS
After hitting a wall with NumPy, I pivoted to **FAISS (Facebook AI Similarity Search)**, a library developed by Meta specifically for efficient dense vector clustering and searching. 

Switching to FAISS completely transformed the app's performance. Here is why it succeeded where my previous attempts struggled:

* **Incredible Speed:** FAISS is written in highly optimized C++ with seamless Python wrappers. It leverages BLAS libraries to maximize CPU instruction efficiency, making matrix math significantly faster than raw NumPy.
* **Beyond Brute Force (Quantization):** While NumPy forced me into exact matching ($O(N)$ complexity), FAISS allows for **Approximate Nearest Neighbor (ANN)** search. It clusters vectors together so queries only search relevant neighborhoods instead of scanning the entire dataset.
* **Memory Efficiency:** It offers product quantization (PQ), which compresses vectors to significantly reduce the RAM footprint without destroying the accuracy of the document retrieval.

### Key Takeaway
Building this pipeline taught me that the hardest part of AI engineering isn't the LLM wrapper—it's the data plumbing. Moving from ChromaDB to raw NumPy math, and finally to a specialized engine like FAISS, showed me just how critical infrastructure choices are when handling high-dimensional AI data.`,
        tags: ["AI", "RAG", "FAISS", "Vector Search", "Python", "NumPy"]
    }
];