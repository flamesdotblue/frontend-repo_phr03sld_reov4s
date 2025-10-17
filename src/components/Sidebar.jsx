import { Users, Briefcase, Bookmark } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 space-y-3">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="h-14 bg-gradient-to-r from-blue-600 to-cyan-500" />
        <div className="px-4 pb-4 -mt-7">
          <div className="h-14 w-14 rounded-full ring-4 ring-white bg-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop"
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-semibold">John Doe</h3>
          <p className="text-sm text-gray-500">Frontend Developer | React • TypeScript • UX</p>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 text-sm">
          <div className="flex items-center justify-between py-1">
            <span className="text-gray-600">Profile views</span>
            <span className="font-semibold text-blue-600">127</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-gray-600">Post impressions</span>
            <span className="font-semibold text-blue-600">2,304</span>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 text-sm space-y-2">
          <button className="w-full inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Users className="h-4 w-4" />
            Connections
          </button>
          <button className="w-full inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Briefcase className="h-4 w-4" />
            Jobs
          </button>
          <button className="w-full inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Bookmark className="h-4 w-4" />
            Saved Items
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h4 className="font-semibold mb-3">Recent</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {['reactjs', 'tailwindcss', 'frontend-careers', 'typescript', 'ui-ux'].map((t) => (
            <li key={t} className="hover:text-gray-900 cursor-pointer"># {t}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
