import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="topbar">
          <div className="brand">
            <Link href="/">
              <Image 
                src="/images/icon.png" 
                alt="Seasons Within icon" 
                width={40}
                height={40}
              />
            </Link>
          </div>

          <nav aria-label="Primary">
            <Link href="/">Meet Therapist</Link>
            <Link href="/services">Offerings</Link>
            <Link href="/supervision">Supervision</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/resources">Resources</Link>
          </nav>
          <div></div>
        </div>
      </div>
    </header>
  );
}
