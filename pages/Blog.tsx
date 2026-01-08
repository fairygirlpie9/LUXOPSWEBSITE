import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data';

const BlogList: React.FC = () => {
  return (
    <div className="bg-lux-black min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-20 font-oswald uppercase tracking-tight">ENGINEERING LOG</h1>
        
        <div className="space-y-16">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="border border-white/10 bg-lux-dark p-10 rounded-lg hover:border-lux-green/50 transition-all">
                  <div className="flex items-center text-lux-green font-mono text-base mb-6">
                     <Calendar className="w-5 h-5 mr-3" />
                     {post.date}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-lux-green transition-colors font-oswald uppercase leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-lux-dim mb-8 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                  <span className="text-white text-lg font-bold border-b-2 border-lux-green pb-1 font-oswald uppercase tracking-wider group-hover:bg-lux-green group-hover:text-black group-hover:px-2 transition-all">
                    READ LOG ENTRY
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div>Post not found. <Link to="/blog" className="text-lux-green">Go Back</Link></div>
      </div>
    );
  }

  return (
    <div className="bg-lux-black min-h-screen py-24">
       <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-lux-dim hover:text-white mb-12 transition-colors text-lg font-mono">
            <ArrowLeft className="w-5 h-5 mr-3" /> Back to Logs
          </Link>
          
          <header className="mb-16 text-center flex flex-col items-center">
             <div className="text-lux-green font-mono text-base mb-6 border border-lux-green/30 inline-block px-4 py-2 rounded">
                LOG DATE: {post.date}
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white leading-none font-oswald uppercase mb-8">
               {post.title}
             </h1>
          </header>

          <div className="mb-16 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
             <img src={post.image} alt={post.title} className="w-full object-cover" />
          </div>

          <div 
            className="prose prose-invert prose-xl max-w-none prose-headings:font-oswald prose-headings:uppercase prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-loose prose-strong:text-lux-green"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
       </div>
    </div>
  );
};

export const Blog: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  return id ? <BlogPostDetail /> : <BlogList />;
};