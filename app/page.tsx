import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section id="intro" className="section soft">
        <div className="center-head">
          <div className="intro-media" role="img" aria-label="Calming still life image">
            <h2>Nature-based therapy that makes space for reflection, growth, and the moments that make us smile.</h2>
            <h4>clarity connection, growth.</h4>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="center-head">
            <div className="lined-title">Philosophy</div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px', alignItems: 'start'}}>
            <div className="offerings-box">
              <ul>
                <li>Belonging</li>
                <li>Awareness</li>
                <li>Relationships</li>
                <li>Diverse Experiences</li>
                <li>Accessibility</li>
                <li>Growth</li>
              </ul>
            </div>

            <aside className="rates-teaser">
              <h3 style={{marginTop:0}}>Rates (teaser)</h3>
              <p style={{marginBottom:6}}><strong>Individual</strong><br />$170 - 50 min</p>
              <p style={{marginBottom:6}}><strong>Family</strong><br />$260 - 80 min</p>
              <p style={{marginBottom:6}}><a href="/services">See full rates &amp; offerings</a></p>
            </aside>
          </div>
        </div>
      </section>

      <section id="welcome">
        <div className="container">
          <div className="center-head">
            <div className="lined-title">About Me</div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="image-container home-image">
          <div className="image-box">
            <Image 
              src="/images/IMG_0430.JPG" 
              alt="Alexandra pic" 
              width={420}
              height={420}
            />
          </div>
        </div>

        <div className="text-container">
          <div className="center-head">
            <section>
              <h2>Who I Am &amp; Why I Practice This Way</h2>

              <p>
                I came to this work through a long-standing curiosity about how people make sense of what they&apos;ve lived through and how they continue to move forward while carrying it. I&apos;ve always been drawn to the in-between spaces: moments of transition, uncertainty, and quiet unraveling, as well as the steady resilience people often don&apos;t recognize in themselves.
              </p>

              <p>
                Counselling became a way for me to sit with complexity alongside others, rather than rushing toward answers or solutions.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="center-head">
          <h2>My Approach &amp; Values</h2>

          <p>
            My approach is grounded in the belief that healing is not linear and that meaningful change happens in relationship. In sessions, clients can expect a pace that is collaborative, thoughtful, and attentive to their nervous system and lived context.
          </p>

          <p>
            I work from a trauma-informed, psychodynamic-attachment lens, informed by relational, developmental, feminist, and systems perspectives. Curiosity, reflection, and respect guide the work, with an emphasis on creating space that feels steady, supportive, and responsive to each person&apos;s unique rhythm.
          </p>
        </div>
      </section>
    </>
  );
}
