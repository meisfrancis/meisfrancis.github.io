import React, {useState, useEffect} from 'react';
import {loadMiscPost, getCategoryColor, IPost} from '../utils/dataLoader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MiscPageProps {
  filename: string;
  title: string;
}

const MiscPage: React.FC<MiscPageProps> = ({filename, title}) => {
  const [post, setPost] = useState<IPost>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFile = async () => {
      try {
        setLoading(true);
        setError(null);

        // Dynamic import based on filename
        const fileContent = await import(`../data/misc/${filename}.md?raw`);
        const loadedPost = loadMiscPost(filename, fileContent.default as never);
        setPost(loadedPost);
      } catch (err) {
        console.error('Error loading file:', err);
        setError(`Failed to load file: ${filename}.md`);
      } finally {
        setLoading(false);
      }
    };
    document.title = title
    loadFile();
  }, [filename, title]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-gray-400">No content found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-gray-300">
              {post.excerpt}
            </p>
          )}
        </div>

        <article className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
          <div className="flex items-center gap-4 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
            <span className="text-sm text-gray-400">{post.date}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MiscPage;