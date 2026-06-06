import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogData';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
          >
            ← Back to all posts
          </button>
          
          <article className="bg-white rounded-2xl shadow-md overflow-hidden p-6 md:p-10">
            {/* Full Post Cover Image */}
            {selectedPost.coverImage && (
              <img 
                src={selectedPost.coverImage} 
                alt={selectedPost.title} 
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              />
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              {selectedPost.title}
            </h1>
            <p className="text-gray-500 mb-6 text-sm">{selectedPost.date}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedPost.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Markdown Body Content with Custom Tailwind Styling */}
            <div className="text-gray-800 leading-relaxed space-y-4">
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2" {...props} />,
                  p: ({ node, ...props }) => <p className="text-gray-700 mb-4" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc list-inside pl-4 mb-4 space-y-1 text-gray-700" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside pl-4 mb-4 space-y-1 text-gray-700" {...props} />,
                  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                  code: ({ node, inline, ...props }) => (
                    <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                  )
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 text-gray-900 tracking-tight">
          Blog
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-md mx-auto">
          Deep dives into AI engineering, vector performance, and architecture.
        </p>

        {/* Blog Grid Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
              onClick={() => setSelectedPost(post)}
            >
              {/* Card Cover Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200">
                {post.coverImage ? (
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 font-mono text-xs">
                    No preview available
                  </div>
                )}
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 text-xs font-medium mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <span className="text-blue-600 group-hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1">
                  Read article <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;