import WaitlistForm from "@/components/waitlist-form";

export default function CtaBand({ source, heading = "Be first in line when StoreCMO opens.", id }: { source: string; heading?: string; id?: string }) {
  return (
    <section className="cta-band is-dark" id={id} aria-labelledby={`${source}-cta-heading`}>
      <div className="shell cta-band__inner">
        <div>
          <p className="eyebrow">Early access</p>
          <h2 className="h2" id={`${source}-cta-heading`}>{heading}</h2>
          <p className="lead">Join the waitlist and we will email you once, when StoreCMO is ready for its first ecommerce teams.</p>
        </div>
        <WaitlistForm source={source} />
      </div>
    </section>
  );
}
