
const BlogsTab = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and scalable React applications that can grow with your business needs.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "React"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of web development, from AI integration to edge computing.",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Mastering TypeScript: Tips and Tricks",
      excerpt: "Advanced TypeScript techniques that will help you write more robust and maintainable code with better type safety.",
      date: "November 10, 2024",
      readTime: "10 min read",
      category: "TypeScript"
    },
    {
      id: 4,
      title: "DevOps Best Practices for Small Teams",
      excerpt: "How small development teams can implement effective DevOps practices without overwhelming complexity or resource requirements.",
      date: "October 22, 2024",
      readTime: "7 min read",
      category: "DevOps"
    },
    {
      id: 5,
      title: "Understanding Modern CSS: Grid and Flexbox",
      excerpt: "A comprehensive guide to modern CSS layout techniques and when to use Grid vs Flexbox for different design challenges.",
      date: "October 5, 2024",
      readTime: "12 min read",
      category: "CSS"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-cyan-900 text-cyan-300",
      Technology: "bg-green-900 text-green-300",
      TypeScript: "bg-purple-900 text-purple-300",
      DevOps: "bg-orange-900 text-orange-300",
      CSS: "bg-pink-900 text-pink-300"
    };
    return colors[category] || "bg-gray-800 text-gray-300";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">My Blog</h1>
        <p className="text-lg text-gray-300">
          Thoughts, tutorials, and insights about web development and technology
        </p>
      </div>

      <div className="space-y-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6 hover:shadow-md hover:border-gray-600 transition-all duration-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                {blog.category}
              </span>
              <span className="text-sm text-gray-400">{blog.date}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{blog.readTime}</span>
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 cursor-pointer transition-colors">
              {blog.title}
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              {blog.excerpt}
            </p>
            
            <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
              Read more →
            </button>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default BlogsTab;
