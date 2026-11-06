---
title: "Email Deliverability for a Small Ecommerce Store"
description: "A lean ecommerce team gets a short list of deliverability signals to watch each week, plus the authentication setup that only needs doing once. The piece also explains why open rate no longer tells the real story on its own."
publishedAt: 2026-11-06
updatedAt: 2026-11-06
category: Ecommerce marketing
tags: email deliverability, sender reputation, list hygiene, email authentication, spam rate
seoTitle: "Email Deliverability for a Small Ecommerce Store"
seoDescription: "Email deliverability decides whether ecommerce emails reach the inbox: the authentication, weekly metrics and list rules a lean store should check now."
---
If email is your most profitable channel, deliverability is the thing that can take it away without any warning in your revenue dashboard. For a store with one person on marketing, the decision is narrow: get the sending domain authenticated once, send only to people who asked and still respond, and watch four signals weekly (spam complaints, bounces, unsubscribes, and delivery errors with their reasons).

Two recent changes matter for how you check that. The old Google Postmaster Tools interface, with its domain and IP reputation scale, is going away: on August 20, 2026 [Spam Resource reported](https://www.spamresource.com/2026/08/gpt-v1-retirement-and-important-updates.html) that Google's pause on retiring it had been lifted, that many senders could only reach the new v2 view, and that v2 does not contain the reputation indicators v1 had. Microsoft, meanwhile, has rejected unauthenticated bulk mail from domains sending more than 5,000 messages a day to its consumer addresses since May 5, 2025.

So the old habit of glancing at a colored reputation bar is gone. What replaces it is less satisfying and more useful: complaint rate, bounce reasons, and who you chose to email.

## What is email deliverability, and how does it cost a store money?

Email deliverability is whether a mailbox provider accepts your message and puts it in the inbox rather than the spam folder, or rejects it outright at the SMTP level. It is separate from whether the email is any good. A perfect abandoned-cart sequence filtered into spam earns nothing.

A message in the spam folder has to be found before it can be read, so a send that lands there loses most of the revenue it was planned to produce. A bounce is a message the receiving provider never accepts, and Klaviyo notes that an account with a high number of bounces can see a negative impact on its deliverability ([Klaviyo's email deliverability best practices](https://help.klaviyo.com/hc/en-us/articles/25620771311643)).

Recovery is slower than the decline. Google says a [high spam rate leads](https://support.google.com/mail/answer/81126) to more spam classification, and that improvements in spam rate take time to show up in how mail is classified. For a store that depends on one monthly promotional send plus flows, that lag is the expensive part: the damage registers quickly and the recovery in classification does not.

## What has changed in how providers enforce deliverability?

Google's own position and what senders see have drifted apart. Google postponed the legacy Postmaster Tools deprecation after sender feedback and has published no new final date, according to [Unspam's deliverability tracker](https://unspam.email/articles/email-deliverability-trends), while Spam Resource's Al Iverson reads the reports of v2-only access as Google working through its list of domains and users and switching v1 off as it goes. Either way, plan around v2. It does not carry the old domain or IP reputation scale: a store now checks compliance status, spam rate, authentication, encryption and delivery errors with their reasons instead ([Folderly's Postmaster Tools guide](https://folderly.com/blog/google-postmaster-tools)).

Microsoft now rejects rather than filters. Domains sending more than 5,000 messages a day to outlook.com, hotmail.com, live.com and other Microsoft consumer addresses must pass SPF, DKIM and DMARC under requirements Microsoft announced in April 2025, and since May 5, 2025 the documented action for a failure has been rejection with the error code `550 5.7.515` (Unspam's tracker, linked above).

Plenty of senders are still behind. Unspam's 2026 testing found that 52% of senders checked had no DMARC at all, and that only 14% passed its one-click unsubscribe check two years after that mandate took effect.

## What authentication does your sending domain need before anything else?

Authentication, and it is a one-time job at your DNS provider. Google requires SPF or DKIM from every sender to personal Gmail accounts (addresses ending @gmail.com or @googlemail.com), plus valid forward and reverse DNS records, a TLS connection, and messages formatted to RFC 5322. Senders of more than 5,000 messages a day to personal Gmail accounts need SPF, DKIM and DMARC together, with a DMARC enforcement policy of none allowed ([Google's email sender guidelines](https://support.google.com/mail/answer/81126)).

Four details catch lean senders out:

- For direct email, the domain in your From: header has to align with either the SPF domain or the DKIM domain, or DMARC cannot pass.
- A From: header should carry only one email address.
- Google Workspace senders can use its "Require a secure connection for email" setting to meet the TLS requirement.
- Sending to personal Gmail accounts needs a DKIM key of 1024 bits or longer; Google recommends 2048 bits where your provider supports it.

[Yahoo's sender requirements](https://senders.yahooinc.com/best-practices/) set the same 1024-bit minimum and ask all senders for SPF or DKIM, with both plus a DMARC policy of at least p=none required from bulk senders.

One audit worth doing while you are in DNS: check your DMARC record for the `pct`, `ri` and `rf` tags. RFC 9989, the DMARC standard published in May 2026, removed them, so a receiver following the current standard applies your full policy to every failing message regardless of any percentage you had set. The staged rollout `pct` used to give you is replaced by a test flag, `t=y` ([Unspam's tracker](https://unspam.email/articles/email-deliverability-trends)).

## Which numbers should a one-person team watch every week?

Four numbers: spam complaint rate, bounce rate, unsubscribe rate, and delivery errors with their reasons. Everything else is diagnosis after one of those moves.

| What to watch | What Gmail says | What Yahoo says | Klaviyo's recommended level |
| --- | --- | --- | --- |
| Spam complaint rate | Keep below 0.10%, and never reach 0.30% or higher | Keep below 0.3%, calculated on mail delivered to the inbox | Below 0.01% |
| Bounce rate | No figure given; reduce volume until the SMTP error rate falls if messages bounce or defer | No figure given; monitor hard and soft bounces and remove invalid recipients promptly | Below 1.0% |
| Unsubscribes | One-click unsubscribe required above 5,000 messages a day to Gmail accounts | Honor unsubscribe requests within 2 days | Unsubscribe rate below 0.3% |
| Delivery errors | Postmaster Tools shows the share of authenticated mail rejected or temporarily failed, with reasons; read the reason, not only the rate | No figure published | No figure published |

Sources for the table: [Google's sender guidelines](https://support.google.com/mail/answer/81126), [Yahoo's sender best practices](https://senders.yahooinc.com/best-practices/), [Klaviyo's deliverability best practices](https://help.klaviyo.com/hc/en-us/articles/25620771311643) and, for the delivery errors dashboard, [Folderly's Postmaster Tools guide](https://folderly.com/blog/google-postmaster-tools).

Open rate is left out of this table on purpose: it is a relative signal inside your own account, not a measure of deliverability, as the next section explains.

In Klaviyo, the deliverability hub has a Bounce details page that breaks bounces into categories, with a top bounce categories card and a bounce report ([Klaviyo's deliverability best practices](https://help.klaviyo.com/hc/en-us/articles/25620771311643)). That is where to look when the bounce rate moves, rather than guessing at content.

## Can you judge deliverability by open rate?

No, and relying on it is now actively misleading. Google states plainly that it does not track open rates, cannot verify open rates reported by third parties, and that low open rates are not necessarily an accurate sign of a deliverability or spam-classification problem ([Google's sender guidelines](https://support.google.com/mail/answer/81126)).

The gap between what inboxes do and what opens show widened in late 2025. [Validity reported](https://www.validity.com/blog/whats-really-behind-gmails-open-rate-drop-and-what-to-do-about-it/) that Gmail image loading, tracking pixels included, dropped by roughly a third in late November 2025, with some of its customers seeing Gmail opens fall 30% or more quarter over quarter, while its data showed Gmail inbox placement down only about 3% over the same months. The same piece points out that Apple Mail Privacy Protection inflates opens in the other direction, by pre-loading emails through proxy servers whether or not anyone reads them. The drop in reported opens was many times larger than the placement change behind it, which is reason enough to stop treating opens as a deliverability KPI and watch complaints, clicks, bounces and placement instead.

Klaviyo still publishes an open-rate benchmark of at least 33%, regardless of industry. Opens remain a useful relative signal inside your own account, and Validity itself calls them directionally useful, but they are a poor way to answer whether your mail is actually landing.

## How do you keep the list healthy without gutting it?

Yahoo asks senders to mail only people who specifically requested it, and to avoid buying mailing lists or subscribing people through an opt-in checkbox that is checked by default on your site. Confirmed opt-in, where a subscriber clicks to confirm, keeps fake addresses and accidental signups off the list. Yahoo suggests a reconfirmation email to inactive recipients, and [Google's Postmaster Tools setup page](https://support.google.com/mail/answer/9981691) suggests periodically sending messages to confirm that recipients want to stay subscribed.

Klaviyo goes further on sourcing: purchasing lists breaches its acceptable use policy and produces profiles that will not engage and are more likely to report you, and it also advises against renting lists, email affiliate marketing, third-party opt-in, and sending to lists previously suppressed for lack of engagement.

Bounce handling should be automatic, and is worth verifying once. Klaviyo suppresses hard-bouncing addresses automatically, and suppresses an address that soft bounces 7 consecutive times.

For the subscribers who are simply quiet, [Magicianly's deliverability checklist](https://www.magicianly.com/insights/email-deliverability-checklist) recommends a short re-engagement attempt, then suppression, rather than suppressing straight away, and recommends auditing forgotten automations for expired promotions, discontinued products and broken links. [Our review request email template](/blog/review-request-email-template) covers the guard conditions that stop an automated email embarrassing a store, including checking a product is still active before it sends.

## Which send decisions quietly damage sender reputation?

The ones that feel like growth.

**Jumping frequency.** Honor what the list signed up for: Yahoo's guidance is not to start daily sends to people who subscribed to a weekly or monthly mailing. Our view: for a store emailing a few thousand profiles, one weekly campaign to engaged subscribers plus working flows is a safer baseline than adding a second campaign.

**Volume spikes.** Google recommends sending at a consistent rate rather than in bursts, starting with low volume to engaged recipients, and avoiding sudden jumps such as doubling previous volume. If messages start bouncing or being deferred, cut volume until the SMTP error rate falls, then increase again slowly. Klaviyo defines warming as establishing a reputation on new infrastructure: a cold IP has gone unused for 30 days, a cold root domain was registered in the last 30 days or has never sent mail, and its guidance is to email contacts who have recently engaged first during that period.

**Mixing streams.** Yahoo tells senders not to send bulk marketing mail from the same IPs used for transactional mail, alerts and user mail, because each IP and DKIM domain carries its own reputation. Google adds the content version of that rule: do not include promotions in a sales receipt, and give each category of message its own From address. It is a good reason to keep an operational message like a [shipping delay email](/blog/shipping-delay-email-template) in its own stream rather than bundling an offer into it.

**Mailing everyone.** Magicianly's deliverability checklist names sending to everyone as the single most common cause of declining ecommerce email performance it encounters. Tier instead: frequent sends to the highly engaged, selective sends to low engagement, and rare sends before sunsetting the long-term unengaged.

## Does this setup live in your ESP or in your DNS?

Split, and knowing which is which saves hours. Your domain's SPF, DKIM and DMARC records, and the CNAME and TXT records behind a branded sending domain or click-tracking domain, all live at your DNS provider. The forward and reverse DNS (PTR) records belong to the sending IPs, so if you send through an email service provider, confirm with them that those records are in place. Suppression lists, engagement segments, flow logic, warming schedules and the metrics above live inside your email platform.

One platform limit to know before you plan around it: [Klaviyo's help article on dedicated click tracking](https://help.klaviyo.com/hc/en-us/articles/360001550572) states that a dedicated click-tracking domain requires a paid plan, with free accounts shown an upgrade message, and that only users with the Owner, Admin, Manager or Campaign Coordinator role can set one up. An account can run one click-tracking domain at a time. If you use manual setup and later delete its CNAME record at your DNS provider, click-tracking links in already-sent emails stop working, so leave that record in place even after removing the domain in Klaviyo. Separately, tracked links in any sent email stop redirecting 90 days after sending, though compliance links such as unsubscribe keep working.

If you send from Shopify rather than a separate ESP, [Shopify Messaging](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging) (formerly Shopify Email) is available on the Basic, Grow, Advanced and Shopify Plus plans, with pricing based on message volume.

## Where does this approach fail?

Postmaster Tools reports only on mail sent to personal Gmail accounts. If much of your list uses company addresses hosted on Google Workspace, those recipients never appear in the data, so the dashboard can look calm while your mail to them is being filtered more heavily ([Folderly's Postmaster Tools guide](https://folderly.com/blog/google-postmaster-tools)).

The dashboard also lags. Updates typically land within a day but can take longer, Google can withhold data on low-volume days, and a fix to your compliance status can take up to 7 days to show because that view runs on a rolling average. Worse, a spam rate that suddenly reads zero can mean your mail is being filtered before anyone gets the chance to report it; Google's own troubleshooting names that case.

Two more failure modes worth planning for. Blocklists matter unevenly: Klaviyo says Gmail does not rely on blocklists and uses its own systems to judge reputation, while other inbox providers may weigh Spamhaus, and SORBS and SpamCop to a lesser extent ([Klaviyo's deliverability best practices](https://help.klaviyo.com/hc/en-us/articles/25620771311643)). So a Spamhaus listing can hurt you at some providers while your Gmail numbers look fine. And filtering is becoming individual: a February 2026 piece by Laura Atkins for the Certified Senders Alliance argued that filtering is increasingly tailored to each recipient's behavior, meaning two subscribers at the same provider can see the same send treated differently ([Unspam's tracker](https://unspam.email/articles/email-deliverability-trends)).

## Frequently asked questions

### What is email deliverability?

Email deliverability is whether a mailbox provider accepts your message and places it in the inbox rather than the spam folder, or rejects it at the SMTP level. It depends mainly on authentication, sender reputation and how recipients respond to your mail, not on the words in a subject line, and the technical setup only needs to happen once.

### What spam complaint rate is too high?

Google tells senders to keep the spam rate reported in Postmaster Tools below 0.10% and to avoid ever reaching 0.30% or higher. Folderly's reading of Google's FAQ adds that a bulk sender at 0.30% or above stays ineligible for Google's delivery mitigation until the rate holds below that line for seven consecutive days. Yahoo requires bulk senders to stay below 0.3%, calculated on mail delivered to the inbox. Klaviyo's own recommended level is stricter: keep spam complaint rates below 0.01%.

### Do I need DMARC if I send fewer than 5,000 emails a day?

Yes. Google recommends always setting up SPF, DKIM and DMARC, even though it only requires all three together once you pass 5,000 messages a day to personal Gmail accounts, and Yahoo strongly urges every domain that sends mail to publish its own DMARC policy.

### Should I delete unengaged subscribers?

Suppress subscribers who have stayed unengaged for a long stretch, but only after one attempt to win them back with a short re-engagement send, a preference update or a clear opt-out, since keeping them on the campaign list costs reputation without producing revenue. A long-dormant subscriber is unlikely to come back just because another promotion lands in their inbox, and re-adding addresses already suppressed for lack of engagement is worth avoiding entirely.

## Next step

Do these four this week, in order:

1. Check SPF, DKIM and DMARC for your sending domain, confirm your From: domain aligns with one of them, and look at your DMARC record for a `pct` tag, which receivers following RFC 9989 now ignore. Use `t=y` if you still want a staged rollout.
2. Verify your sending domain in Postmaster Tools using its DKIM `d=` or SPF Return-Path domain, and read the compliance status and deliverability analysis verdict there rather than looking for the domain and IP reputation scale, which the v2 view does not carry.
3. Write down your current spam complaint, bounce and unsubscribe rates next to the thresholds in the earlier table, and check them weekly.
4. Build an engaged segment and send your next campaign to it rather than to everyone.

[StoreCMO is in development.](/product) We are building it to flag the deliverability signal that needs attention each week before it costs email revenue.
