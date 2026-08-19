import Link from "next/link";
import { Wordmark } from "@/components/site-header";
import { navigation, siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__grid">
          <div>
            <Link href="/" aria-label="StoreCMO home">
              <Wordmark />
            </Link>
            <p className="site-footer__tagline">
              Your AI CMO for ecommerce. Being built for lean ecommerce teams that need strategy and execution without a large marketing department.
            </p>
          </div>
          <nav aria-labelledby="footer-site">
            <h2 id="footer-site">Site</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-follow">
            <h2 id="footer-follow">Follow</h2>
            <ul>
              <li>
                <Link href="/#waitlist">Join the waitlist</Link>
              </li>
              <li>
                <a href="/feed.xml">RSS feed</a>
              </li>
              {siteConfig.social.x && (
                <li>
                  <a href={siteConfig.social.x} target="_blank" rel="noreferrer">
                    X / Twitter
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}. In development.</span>
          <span>Built for ecommerce brands.</span>
        </div>
      </div>
    </footer>
  );
}
