import { TrendingUp, UserPlus } from 'lucide-react';

export default function RightSidebar() {
  return (
    <aside className="hidden xl:block w-80 space-y-3">
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-blue-600" />
          <h4 className="font-semibold">Trending News</h4>
        </div>
        <ul className="space-y-3 text-sm">
          {[
            { t: 'AI hiring trends in 2025', s: '12,345 readers' },
            { t: 'The rise of TypeScript at scale', s: '9,876 readers' },
            { t: 'Remote work best practices', s: '7,420 readers' },
          ].map(({ t, s }) => (
            <li key={t} className="group">
              <p className="font-medium group-hover:underline cursor-pointer">{t}</p>
              <p className="text-gray-500 text-xs">{s}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h4 className="font-semibold mb-3">People you may know</h4>
        <div className="space-y-3">
          {[
            { name: 'Ava Patel', role: 'Product Designer' },
            { name: 'Liam Chen', role: 'Full‑stack Engineer' },
            { name: 'Sophia Garcia', role: 'Data Scientist' },
          ].map((p) => (
            <div key={p.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(p.name)}`}
                  alt={p.name}
                  className="h-9 w-9 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium leading-none">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.role}</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-300 hover:border-gray-400">
                <UserPlus className="h-3.5 w-3.5" />
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
