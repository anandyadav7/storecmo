const platforms = ["Shopify", "WooCommerce", "BigCommerce", "Squarespace", "Wix", "Magento", "PrestaShop", "Ecwid"];

/**
 * Scrolling strip of platform names under the homepage hero. Pure CSS motion:
 * the list is duplicated (second copy aria-hidden) and the track translates
 * -50% for a seamless loop; prefers-reduced-motion gets a static row.
 */
export default function PlatformMarquee() {
  return (
    <aside className="marquee" aria-label="Platforms StoreCMO is being built for">
      <div className="shell marquee__inner">
        <p className="marquee__label">Platform-agnostic · Being built for stores on</p>
        <div className="marquee__viewport">
          <ul className="marquee__track">
            {platforms.map((name) => (
              <li key={name}>{name}</li>
            ))}
            {platforms.map((name) => (
              <li key={`${name}-loop`} aria-hidden="true">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
