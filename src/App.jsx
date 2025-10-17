import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[18rem,minmax(0,1fr)] xl:grid-cols-[18rem,minmax(0,1fr),20rem] gap-4">
          <Sidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
      <footer className="py-10 text-center text-xs text-gray-500">
        <p>
          This is a UI recreation inspired by LinkedIn for demo purposes. Not affiliated with LinkedIn.
        </p>
      </footer>
    </div>
  );
}

export default App;
