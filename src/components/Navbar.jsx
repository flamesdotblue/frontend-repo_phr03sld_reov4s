import { Home, Users, Briefcase, MessageSquare, Bell, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">in</div>
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-500">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm placeholder:text-gray-500 w-64"
              />
            </div>
          </div>

          {/* Center: Nav icons */}
          <nav className="hidden md:flex items-center gap-8 text-gray-600">
            <a href="#" className="flex flex-col items-center hover:text-gray-900">
              <Home className="h-5 w-5" />
              <span className="text-[11px]">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-gray-900">
              <Users className="h-5 w-5" />
              <span className="text-[11px]">My Network</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-gray-900">
              <Briefcase className="h-5 w-5" />
              <span className="text-[11px]">Jobs</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-gray-900">
              <MessageSquare className="h-5 w-5" />
              <span className="text-[11px]">Messaging</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-gray-900">
              <Bell className="h-5 w-5" />
              <span className="text-[11px]">Notifications</span>
            </a>
          </nav>

          {/* Right: Profile */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center text-xs font-semibold">JD</div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs text-gray-500">View Profile</p>
              </div>
            </div>
            <button className="md:hidden p-2 rounded hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
