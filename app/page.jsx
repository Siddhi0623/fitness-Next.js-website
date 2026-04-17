import WhatsAppActions from "@/components/WhatsAppActions";

const programs = [
  {
    title: "Strength Reset",
    text: "Progressive lifting, movement checks, and weekly load targets for steady strength.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    alt: "Person training with a kettlebell",
  },
  {
    title: "Lean & Mobile",
    text: "Conditioning, mobility, and habit targets for better energy without burnout.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    alt: "Fitness group stretching in a studio",
  },
  {
    title: "1:1 Transformation",
    text: "Personal coaching with form reviews, nutrition targets, and WhatsApp check-ins.",
    image:
      "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=80",
    alt: "Trainer coaching a client in the gym",
  },
];

const plans = [
  {
    name: "Starter",
    length: "4 weeks",
    text: "Custom workouts, weekly check-in, and simple nutrition targets.",
    message: "Hi PulseFit, I am interested in the Starter 4 week plan.",
  },
  {
    name: "Momentum",
    length: "8 weeks",
    text: "Workouts, video feedback, habit tracking, and priority chat support.",
    message: "Hi PulseFit, I am interested in the Momentum 8 week plan.",
    featured: true,
  },
  {
    name: "Elite",
    length: "12 weeks",
    text: "Full transformation coaching with detailed reviews and accountability.",
    message: "Hi PulseFit, I am interested in the Elite 12 week plan.",
  },
];

export default function Home() {
  return (
    <>
      <WhatsAppActions />
      <main id="top">
        <section className="hero" aria-label="Personal fitness training">
          <div className="hero__content">
            <p className="eyebrow">Strength. Mobility. Accountability.</p>
            <h1>Train with structure. Move with confidence.</h1>
            <p>
              Online and studio coaching for busy people who want stronger
              bodies, cleaner routines, and clear weekly support.
            </p>
            <div className="hero__actions">
              <a
                className="button button--primary js-whatsapp"
                href="#contact"
                data-whatsapp-message="Hi PulseFit, I want to book a fitness consultation."
              >
                Book on WhatsApp
              </a>
              <a className="button button--secondary" href="#programs">
                View programs
              </a>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Training outcomes">
          <div>
            <strong>8+</strong>
            <span>Years coaching</span>
          </div>
          <div>
            <strong>1:1</strong>
            <span>Plan reviews</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>WhatsApp support</span>
          </div>
        </section>

        <section className="section intro-section">
          <div className="section-copy">
            <p className="eyebrow">Built around real life</p>
            <h2>Fitness that fits your schedule, not the other way around.</h2>
            <p>
              Every plan starts with your current routine, training history,
              food habits, and recovery window. Then we build a path you can
              repeat.
            </p>
          </div>
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
              alt="Athlete lifting a barbell in a gym"
            />
          </div>
        </section>

        <section className="section section--stacked programs" id="programs">
          <div className="section-heading">
            <p className="eyebrow">Choose your track</p>
            <h2>Coaching programs</h2>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.title}>
                <img src={program.image} alt={program.alt} />
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section results-section" id="results">
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1200&q=80"
              alt="Fitness class training with battle ropes"
            />
          </div>
          <div className="section-copy">
            <p className="eyebrow">Steady progress</p>
            <h2>Small wins every week. Noticeable change every month.</h2>
            <p>
              You get clear sessions, habit targets, simple meal guidance, and
              feedback loops that keep the plan honest.
            </p>
            <ul className="check-list">
              <li>Workout plans for home, gym, or hybrid training</li>
              <li>Form review through shared videos</li>
              <li>Nutrition guidance without crash dieting</li>
              <li>Weekly progress check-in through WhatsApp</li>
            </ul>
          </div>
        </section>

        <section className="section section--stacked plans" id="plans">
          <div className="section-heading">
            <p className="eyebrow">Start simple</p>
            <h2>Membership plans</h2>
          </div>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`}
                key={plan.name}
              >
                <p className="plan-card__name">{plan.name}</p>
                <h3>{plan.length}</h3>
                <p>{plan.text}</p>
                <a
                  className={`button ${plan.featured ? "button--primary" : "button--outline"} js-whatsapp`}
                  href="#contact"
                  data-whatsapp-message={plan.message}
                >
                  {plan.featured ? "Choose Momentum" : "Ask on WhatsApp"}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-copy">
            <p className="eyebrow">Ready when you are</p>
            <h2>Tell us your goal. We will reply on WhatsApp.</h2>
            <p>
              Share a little about your current routine and the kind of support
              you want. Your message opens in WhatsApp with the details filled
              in.
            </p>
          </div>

          <form className="contact-form" id="lead-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Goal
              <select name="goal" required defaultValue="">
                <option value="" disabled>
                  Choose a goal
                </option>
                <option>Build strength</option>
                <option>Lose fat</option>
                <option>Improve mobility</option>
                <option>Start personal coaching</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="I want to train 3 days a week..."
                required
              />
            </label>
            <button className="button button--primary" type="submit">
              Send WhatsApp message
            </button>
            <p className="form-note">Replies usually arrive within one business day.</p>
          </form>
        </section>
      </main>

      <a
        className="floating-whatsapp js-whatsapp"
        href="#contact"
        aria-label="Chat on WhatsApp"
        data-whatsapp-message="Hi PulseFit, I want to know more about fitness coaching."
      >
        WhatsApp
      </a>

      <footer className="site-footer">
        <p>PulseFit Coaching</p>
        <p>Train better. Recover smarter. Stay consistent.</p>
      </footer>
    </>
  );
}
