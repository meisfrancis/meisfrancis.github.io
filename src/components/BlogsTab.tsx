
import { loadBlogPosts, getCategoryColor } from '../utils/dataLoader';

const BlogsTab = () => {
  const blogs = loadBlogPosts();

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
