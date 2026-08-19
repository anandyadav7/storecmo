import Link from "next/link";
import SiteNav from "@/components/site-nav";

export function Wordmark() {
  return (
    <span className="wordmark">
      Store<b>CMO</b>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" aria-label="StoreCMO home">
          <Wordmark />
        </Link>
        <SiteNav />
        <Link href="/#waitlist" className="button button--dark button--sm site-header__cta">
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
