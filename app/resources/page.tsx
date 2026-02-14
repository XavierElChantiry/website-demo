export const metadata = {
  title: "Resources | Seasons Within",
  description: "Recommended resources for grounding, learning, and support.",
};

export default function Resources() {
  return (
    <section className="container resources">
      <h1>Resources</h1>

      <p>
        Steady, simple tools for grounding and learning.
      </p>

      <hr className="divider" />

      <h2>Podcasts</h2>

      <p>
        <strong>Lessons from the Playroom — Lisa Dion</strong><br />
        Insightful conversations grounded in play therapy, attachment, and nervous system awareness.
      </p>

      <p>
        <strong>The Baffling Behaviour Show — Robyn Gobbel</strong><br />
        Warm, accessible discussions on trauma, regulation, and relational support.
      </p>

      <hr className="divider" />

      <h2>Books &amp; Learning</h2>

      <p>
        <strong>Journey Through Trauma — Gretchen Schmelzer, PhD</strong><br />
        A compassionate guide to long-term trauma healing.<br />
        <a href="https://gretchenschmelzer.com/book-page" target="_blank" rel="noopener">
          Visit the book page
        </a>

        <div style={{marginTop:12}} className="video-responsive">
          <iframe src="https://www.youtube.com/embed/O0O58LRViMk" title="Author talk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </p>

      <hr className="divider" />

      <h2>Breathing &amp; Grounding Practices</h2>

      <p>Short practices you can try on your own:</p>

      <ul>
        <li>
          <strong>Double Inhale</strong>
          <div className="video-responsive" style={{marginTop:8}}>
            <iframe src="https://www.youtube.com/embed/kSZKIupBUuc" title="Double Inhale" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </li>

        <li>
          <strong>Vagus Nerve Massage</strong>
          <div className="video-responsive" style={{marginTop:8}}>
            <iframe src="https://www.youtube.com/embed/LnV3Q2xIb1U" title="Vagus Nerve Massage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </li>

        <li>
          <strong>Figure 8 Breath</strong>
          <div className="video-responsive" style={{marginTop:8}}>
            <iframe src="https://www.youtube.com/embed/n0Fv2NnqF5o" title="Figure 8 Breath" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </li>
      </ul>

      <hr className="divider" />

      <h2>Nature-Based Alternatives</h2>

      <p>
        Want to get outside but not ready for formal nature therapy?
      </p>

        <p>
        <strong>Forest Bathing</strong>
        </p>

        <div className="video-responsive" style={{marginTop:8, marginBottom:8}}>
          <iframe src="https://www.youtube.com/embed/12CCjoixpkA" title="Forest Bathing Guided" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <p><a href="https://www.youtube.com/watch?v=k-CoeV8C48s" target="_blank" rel="noopener">Another approach (YouTube)</a></p>

      <hr className="divider" />

      <h2>A Note on Self-Help Tools</h2>

      <p>
        Use what helps. Leave what doesn&apos;t.<br />
        These tools don&apos;t replace therapy — they simply offer support in moments when you need something steady.
      </p>

      <hr className="divider" />

      <h2>If You Need Immediate Support</h2>

      <p>
        BC Suicide Prevention Line — 310-6789<br />
        1-800-SUICIDE (1-800-784-2433)<br />
        Kids Help Phone — 1-800-668-6868 | Text 686868<br />
        KUU-US Indigenous Crisis Line — 1-800-588-8717<br />
        IRSSS — 1-800-721-0066<br />
        VictimLink BC — 1-800-563-0808
      </p>

      <p className="note">
        If you&apos;re in danger, please call 911 or visit your nearest emergency department.
      </p>
    </section>
  );
}
