
import { useState, useEffect } from 'react';
import { loadYamlFile } from '../utils/yamlLoader';
import { BlogsData } from '../types/yaml';

const BlogsTab = () => {
  const [data, setData] = useState<BlogsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await loadYamlFile<BlogsData>('blogs');
        setData(blogsData);
      } catch (err) {
        setError('Failed to load blogs data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error || !data) {
    return <div className="text-center text-red-500">{error || 'Failed to load data'}</div>;
  }

  const getCategoryColor = (category: string) => {
    return data.categoryColors[category] || data.categoryColors.default;
  };

  return (
    <div className="max-w-4xl mx-auto font-mono">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">{data.title}</h1>
        <p className="text-lg text-gray-300">
          {data.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        {data.blogs.map((blog) => (
          <article
            key={blog.id}
            className={data.styles.article}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                {blog.category}
              </span>
              <span className="text-sm text-gray-400">{blog.date}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{blog.readTime}</span>
            </div>

            <h2 className={data.styles.title}>
              {blog.title}
            </h2>

            <p className={data.styles.excerpt}>
              {blog.excerpt}
            </p>

            <button className={data.styles.readMoreButton}>
              {data.buttons.readMore}
            </button>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className={data.styles.loadMoreButton}>
          {data.buttons.loadMore}
        </button>
      </div>
    </div>
  );
};

export default BlogsTab;
