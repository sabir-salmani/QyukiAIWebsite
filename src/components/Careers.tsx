import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from '../icons';

const Careers = () => {
  const ref = useScrollAnimation();

  const jobs = [
    {
      title: 'Frontend Engineer',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Build elegant, scalable user interfaces that shape the future of AI creativity.',
    },
    {
      title: 'AI Research Intern',
      location: 'Bangalore, India',
      type: 'Internship',
      description: 'Work with our research team to explore new frontiers in generative AI.',
    },
    {
      title: 'Product Designer',
      location: 'Hybrid (Mumbai)',
      type: 'Full-Time',
      description: 'Design seamless user journeys that make powerful AI tools feel magical.',
    }
  ];

  return (
    <main className="min-h-screen bg-black" role="main">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-animated grid-pattern pt-24" aria-labelledby="careers-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in" ref={ref}>
          <h1 id="careers-heading" className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Join <span className="text-gradient">Qyuki AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're building a team of curious minds, bold creators, and future thinkers.
            Come work on breakthrough AI technology that empowers storytellers everywhere.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-gray-900" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 id="why-heading" className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
              Why <span className="text-gradient">Work With Us</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We’re committed to building an environment where innovation thrives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            {[
              {
                title: 'Meaningful Impact',
                desc: 'Your work will help shape tools used by creators and storytellers worldwide.',
              },
              {
                title: 'Remote Friendly',
                desc: 'We believe great talent can come from anywhere, and we support flexible work.',
              },
              {
                title: 'Creative Culture',
                desc: 'We blend tech and storytelling — encouraging experimentation and originality.',
              },
              {
                title: 'Growth Opportunities',
                desc: 'We support continuous learning, mentorship, and cross-functional collaboration.',
              }
            ].map((item, idx) => (
              <div
                key={item.title}
                className="dark-card dark-card-hover p-8"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-black grid-pattern" aria-labelledby="roles-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 id="roles-heading" className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don’t see the perfect role? Drop us a note anyway — we love meeting passionate builders.
            </p>
          </div>

          <div className="space-y-8 fade-in">
            {jobs.map((job, idx) => (
              <div
                key={job.title}
                className="dark-card dark-card-hover p-6 md:p-8"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-xl">{job.title}</h3>
                    <p className="text-sm text-gray-400">{job.type} • {job.location}</p>
                  </div>
                  <button
                    className="btn-primary mt-4 md:mt-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    aria-label={`Apply for ${job.title} role`}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-400 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <div className="dark-card p-12">
            <h2 id="cta-heading" className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
              Nothing Matching? <span className="text-gradient">Reach Out</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We’re always open to meeting brilliant people. If you're excited about Qyuki AI,
              email us your story and how you'd like to contribute.
            </p>
            <button
              className="btn-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500"
              aria-label="Contact careers team"
            >
              Contact Careers Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
