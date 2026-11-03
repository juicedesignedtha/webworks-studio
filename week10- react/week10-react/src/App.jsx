import { useState } from 'react'
// TODO: Import ServiceCard after you complete the component.
import ServiceCard from './components/ServiceCard.jsx'

const services = [
  {
    id: 'health-navigation',
    title: 'Health Resource Navigation',
    category: 'health',
    categoryLabel: 'Health',
    description:
      'Get help identifying local clinics, wellness programs, and community health resources.',
    detail: 'Appointments available by phone or in person.',
  },
  {
    id: 'food-support',
    title: 'Food Support',
    category: 'health',
    categoryLabel: 'Health',
    description:
      'Connect with food pantries, nutrition resources, and benefit-navigation support.',
    detail: 'Same-week referral support may be available.',
  },
  {
    id: 'housing-navigation',
    title: 'Housing Navigation',
    category: 'housing',
    categoryLabel: 'Housing',
    description:
      'Find local rental resources, housing counseling, and emergency-support information.',
    detail: 'Eligibility varies by program.',
  },
  {
    id: 'home-repair',
    title: 'Home Repair Assistance',
    category: 'housing',
    categoryLabel: 'Housing',
    description:
      'Locate nonprofit and public programs that may assist with qualifying home repairs.',
    detail: 'Income and location requirements may apply.',
  },
  {
    id: 'volunteer-match',
    title: 'Volunteer Match',
    category: 'community',
    categoryLabel: 'Community',
    description:
      'Explore local volunteer opportunities based on schedule, interests, and availability.',
    detail: 'Opportunities are updated throughout the month.',
  },
  {
    id: 'community-events',
    title: 'Community Events',
    category: 'community',
    categoryLabel: 'Community',
    description:
      'Find free and low-cost workshops, neighborhood events, and community programs.',
    detail: 'New events are added weekly.',
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span>Community Connect</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Local help, easier to find</p>
              <h1>Start with the service you need.</h1>
              <p className="lead">
                Community Connect helps residents discover practical local resources
                without searching across dozens of separate websites.
              </p>
            </div>

            <aside className="hero-note" aria-labelledby="prototype-note-heading">
              <h2 id="prototype-note-heading">Week 10 prototype</h2>
              <p>
                This small interface is intentionally focused on repeated content,
                components, props, list rendering, and one piece of React state.
              </p>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <p className="eyebrow">Service Directory</p>
            <h2>Explore community resources</h2>

            <div className="filter-panel" aria-labelledby="filter-heading">
              <h3 id="filter-heading">Filter services</h3>

              <div className="filter-buttons">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  aria-pressed={selectedCategory === 'all'}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('health')}
                  aria-pressed={selectedCategory === 'health'}
                >
                  Health
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('housing')}
                  aria-pressed={selectedCategory === 'housing'}
                >
                  Housing
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('community')}
                  aria-pressed={selectedCategory === 'community'}
                >
                  Community
                </button>
              </div>
            </div>

            <div className="service-grid">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  categoryLabel={service.categoryLabel}
                  title={service.title}
                  description={service.description}
                  detail={service.detail}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container narrow">
            <p className="eyebrow">Why Components?</p>
            <h2>Repeated interface patterns should not require repeated maintenance.</h2>
            <p>
              In this sprint, the service content stays the same. Your code structure
              changes so one reusable component can render many different service records.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p><strong>Community Connect</strong></p>
          <p>WebWorks Studio instructional React project.</p>
        </div>
      </footer>
    </>
  )
}

export default App
