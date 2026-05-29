function Features() {
  const features = [
    {
      icon: "🧠",
      title: "AI Mentor",
      description:
        "Get instant answers to your SSC doubts with AI-powered explanations and guidance.",
    },
    {
      icon: "📝",
      title: "Mock Tests",
      description:
        "Practice SSC-style mock tests with timers, solutions, and performance tracking.",
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description:
        "Track your strengths, weaknesses, accuracy, and overall preparation progress.",
    },
    {
      icon: "🎯",
      title: "Personalized Learning",
      description:
        "Receive recommendations based on your weak topics and test performance.",
    },
    {
      icon: "📚",
      title: "Study Plans",
      description:
        "Generate structured daily and weekly study plans to stay consistent.",
    },
    {
      icon: "🏆",
      title: "Leaderboard",
      description:
        "Compete with other aspirants and monitor your rank among top performers.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Everything you need to prepare smarter and score higher.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;