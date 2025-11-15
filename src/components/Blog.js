import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
          >
            ← Back to all posts
          </button>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{selectedPost.title}</h1>
            <p className="text-gray-500 mb-6">{selectedPost.date}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {selectedPost.content}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Blog
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Thoughts, tutorials, and insights on web development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedPost(post)}
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <span className="text-blue-600 hover:text-blue-800 font-semibold">
                Read more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;