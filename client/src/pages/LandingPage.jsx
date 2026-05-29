import Navbar from "../components/common/Navbar";
import Features from "../components/common/Features";

function LandingPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Prepare Smarter.
            <span className="text-purple-500"> Score Higher.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Your AI study companion for SSC preparation.
            Practice, learn, track progress, and improve every day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition">
              Start Learning
            </button>

            <a
              href="#features"
              className="border border-slate-700 hover:border-purple-500 px-8 py-4 rounded-xl font-semibold transition"
            >
              Explore Features
            </a>

          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold text-purple-500">
              10K+
            </h2>
            <p className="mt-3 text-slate-400">
              Practice Questions
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-purple-500">
              500+
            </h2>
            <p className="mt-3 text-slate-400">
              Mock Tests
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-purple-500">
              24/7
            </h2>
            <p className="mt-3 text-slate-400">
              AI Support
            </p>
          </div>

        </div>
      </section>

      <Features />

      {/* CTA Section */}
      <section className="bg-slate-950 py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Start Your SSC Journey Today
        </h2>

        <p className="mt-4 text-slate-400 text-lg">
          Learn smarter with AI-powered preparation.
        </p>

        <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold">
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center">
        <h3 className="text-xl font-bold">
          Inane<span className="text-purple-500">AI</span>
        </h3>

        <p className="text-slate-400 mt-2">
          AI-Powered SSC Learning Platform
        </p>

        <p className="text-slate-500 text-sm mt-4">
          © 2026 Inane AI. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default LandingPage;