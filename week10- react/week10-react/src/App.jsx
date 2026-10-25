import { useState } from 'react'
// TODO: Import ServiceCard after you complete the component.
// import ServiceCard from './components/ServiceCard.jsx'

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
  /*
    TODO 1 — STATE
    Create selectedCategory state with useState().
    Start with "all".

    Example concept:
    const [selectedCategory, setSelectedCategory] = useState(...)
  */

  /*
    TODO 2 — FILTERED DATA
    Create a filteredServices variable.

    If selectedCategory is "all", use the full services array.
    Otherwise, keep only services whose category matches selectedCategory.
  */

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
                {/*
                  TODO 3 — FILTER BUTTON EVENTS + ACCESSIBLE STATE

                  Connect each button to selectedCategory state.

                  Requirements:
                  - Use onClick to update state.
                  - Use aria-pressed to communicate which filter is active.
                  - Keep these as native <button> elements.
                */}

                <button type="button">All</button>
                <button type="button">Health</button>
                <button type="button">Housing</button>
                <button type="button">Community</button>
              </div>
            </div>

            {/*
              CURRENT STARTER STATE:
              The six cards below repeat nearly identical JSX.

              TODO 4 — COMPONENT + PROPS + MAP
              1. Complete src/components/ServiceCard.jsx.
              2. Import ServiceCard at the top of this file.
              3. Delete the repeated card markup below.
              4. Render filteredServices with map().
              5. Pass service data as props.
              6. Use service.id as the stable React key.
            */}

            <div className="service-grid">
              <article className="service-card">
                <p className="service-category">Health</p>
                <h3>Health Resource Navigation</h3>
                <p>Get help identifying local clinics, wellness programs, and community health resources.</p>
                <p className="service-detail">Appointments available by phone or in person.</p>
              </article>

              <article className="service-card">
                <p className="service-category">Health</p>
                <h3>Food Support</h3>
                <p>Connect with food pantries, nutrition resources, and benefit-navigation support.</p>
                <p className="service-detail">Same-week referral support may be available.</p>
              </article>

              <article className="service-card">
                <p className="service-category">Housing</p>
                <h3>Housing Navigation</h3>
                <p>Find local rental resources, housing counseling, and emergency-support information.</p>
                <p className="service-detail">Eligibility varies by program.</p>
              </article>

              <article className="service-card">
                <p className="service-category">Housing</p>
                <h3>Home Repair Assistance</h3>
                <p>Locate nonprofit and public programs that may assist with qualifying home repairs.</p>
                <p className="service-detail">Income and location requirements may apply.</p>
              </article>

              <article className="service-card">
                <p className="service-category">Community</p>
                <h3>Volunteer Match</h3>
                <p>Explore local volunteer opportunities based on schedule, interests, and availability.</p>
                <p className="service-detail">Opportunities are updated throughout the month.</p>
              </article>

              <article className="service-card">
                <p className="service-category">Community</p>
                <h3>Community Events</h3>
                <p>Find free and low-cost workshops, neighborhood events, and community programs.</p>
                <p className="service-detail">New events are added weekly.</p>
              </article>
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
