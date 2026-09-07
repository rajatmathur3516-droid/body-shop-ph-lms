export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-cream-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Learn & Grow</h1>
        <p className="text-xl mb-8">The Body Shop Philippines Academy</p>
        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white font-bold">
          Start Learning
        </button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-2">📚</h3>
          <h2 className="text-xl font-bold mb-2">My Learning Plans</h2>
          <p>View personalized learning paths</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-2">🏆</h3>
          <h2 className="text-xl font-bold mb-2">Achievements</h2>
          <p>Earn badges and track progress</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-2">⭐</h3>
          <h2 className="text-xl font-bold mb-2">Leaderboards</h2>
          <p>See top performers and compete</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-gray-50 p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-40 rounded mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Course {i}: Product Knowledge</h3>
              <p className="text-gray-600 mb-4">Learn essential skills for your role</p>
              <div className="flex justify-between">
                <span>⭐ 4.8</span>
                <span>15 min</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-8">
        <p>Transform Your Future with The Body Shop Academy</p>
      </footer>
    </div>
  );
}