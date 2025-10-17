import { Image as ImageIcon, Video, Calendar, Smile, ThumbsUp, MessageCircle, Repeat, Send } from 'lucide-react';
import { useState } from 'react';

function PostComposer({ onPost }) {
  const [text, setText] = useState('');

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onPost({
      id: Date.now(),
      author: 'John Doe',
      title: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop',
      time: 'Just now',
      content: trimmed,
      image: null,
      likes: 0,
      comments: 0,
      reposts: 0,
    });
    setText('');
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-start gap-3">
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop"
          alt="avatar"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="flex-1">
          <textarea
            rows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start a post"
            className="w-full resize-none rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 text-sm"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-600">
              <button className="inline-flex items-center gap-2 hover:text-gray-900">
                <ImageIcon className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Media</span>
              </button>
              <button className="inline-flex items-center gap-2 hover:text-gray-900">
                <Video className="h-5 w-5 text-green-500" />
                <span className="text-sm">Video</span>
              </button>
              <button className="inline-flex items-center gap-2 hover:text-gray-900">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Event</span>
              </button>
              <button className="inline-flex items-center gap-2 hover:text-gray-900">
                <Smile className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">Feeling</span>
              </button>
            </div>
            <button
              onClick={submit}
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              disabled={!text.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img src={post.avatar} alt={post.author} className="h-11 w-11 rounded-full object-cover" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="font-semibold leading-none">{post.author}</p>
              <span className="text-xs text-gray-500">• {post.time}</span>
            </div>
            <p className="text-xs text-gray-500">{post.title}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-800 whitespace-pre-wrap">{post.content}</p>
      </div>
      {post.image && (
        <img src={post.image} alt="post" className="w-full max-h-[520px] object-cover" />
      )}
      <div className="px-4 py-2 border-t border-gray-100 text-gray-600">
        <div className="grid grid-cols-4">
          <button className="flex items-center justify-center gap-2 py-2 hover:text-gray-900">
            <ThumbsUp className="h-5 w-5" />
            <span className="text-sm">Like</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:text-gray-900">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">Comment</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:text-gray-900">
            <Repeat className="h-5 w-5" />
            <span className="text-sm">Repost</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2 hover:text-gray-900">
            <Send className="h-5 w-5" />
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Ava Patel',
      title: 'Product Designer at Flow',
      avatar:
        'https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=200&auto=format&fit=crop',
      time: '1h',
      content:
        'Just wrapped up a design sprint focused on onboarding. Key takeaway: reduce friction, add clarity, and celebrate small milestones. 🚀',
      image:
        'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0b5?q=80&w=1200&auto=format&fit=crop',
      likes: 132,
      comments: 24,
      reposts: 7,
    },
    {
      id: 2,
      author: 'Liam Chen',
      title: 'Full‑stack Engineer @ NovaTech',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
      time: '3h',
      content:
        'TypeScript has fundamentally changed how we scale our codebase. Fewer bugs, better DX, happier team. If you are on the fence — give it a try! 💙',
      image: null,
      likes: 245,
      comments: 51,
      reposts: 18,
    },
  ]);

  const addPost = (p) => setPosts((prev) => [p, ...prev]);

  return (
    <main className="flex-1 max-w-2xl mx-auto space-y-3">
      <PostComposer onPost={addPost} />
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </main>
  );
}
