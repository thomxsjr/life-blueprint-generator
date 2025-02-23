import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dashboard-dark to-dashboard-card relative overflow-hidden">
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),rgba(217,70,239,0.1),rgba(249,115,22,0.1))] pointer-events-none" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto glass-card p-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 bg-clip-text text-transparent">
            Life Blueprint Generator
          </h1>
          <p className="text-lg text-dashboard-muted mb-8">
            Your personal AI-powered life optimization platform. Track, analyze, and improve every aspect of your life.
          </p>
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 hover:opacity-90 transition-opacity">
              <Link to="/signin">Sign In</Link>
            </button>
            <button className="border-white/10 hover:bg-white/5">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
