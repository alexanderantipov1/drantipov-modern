Source: https://web.dev/articles/vitals
Title: Web Vitals  |  Articles  |  web.dev
Fetched: 2026-09-24T16:47:43.922Z

[Skip to main content](https://web.dev/articles/vitals#main-content)

[![web.dev](https://www.gstatic.com/devrel-devsite/prod/v01e820f11dab21f3ca0f6bae75161414eea27d2d73afb4b420c81b7d54dc150c/web/images/lockup.svg)](https://web.dev/)

`/`

Language

- [English](https://web.dev/articles/vitals)
- [Deutsch](https://web.dev/articles/vitals?hl=de)
- [Español – América Latina](https://web.dev/articles/vitals?hl=es-419)
- [Français](https://web.dev/articles/vitals?hl=fr)
- [Indonesia](https://web.dev/articles/vitals?hl=id)
- [Italiano](https://web.dev/articles/vitals?hl=it)
- [Polski](https://web.dev/articles/vitals?hl=pl)
- [Português – Brasil](https://web.dev/articles/vitals?hl=pt-br)
- [Tiếng Việt](https://web.dev/articles/vitals?hl=vi)
- [Türkçe](https://web.dev/articles/vitals?hl=tr)
- [Русский](https://web.dev/articles/vitals?hl=ru)
- [עברית](https://web.dev/articles/vitals?hl=he)
- [العربيّة](https://web.dev/articles/vitals?hl=ar)
- [فارسی](https://web.dev/articles/vitals?hl=fa)
- [हिंदी](https://web.dev/articles/vitals?hl=hi)
- [বাংলা](https://web.dev/articles/vitals?hl=bn)
- [ภาษาไทย](https://web.dev/articles/vitals?hl=th)
- [中文 – 简体](https://web.dev/articles/vitals?hl=zh-cn)
- [中文 – 繁體](https://web.dev/articles/vitals?hl=zh-tw)
- [日本語](https://web.dev/articles/vitals?hl=ja)
- [한국어](https://web.dev/articles/vitals?hl=ko)

[Sign in](https://web.dev/_d/signin?continue=https%3A%2F%2Fweb.dev%2Farticles%2Fvitals&prompt=select_account)

- [Articles](https://web.dev/articles)

- On this page
- [Overview](https://web.dev/articles/vitals#overview)
- [Core Web Vitals](https://web.dev/articles/vitals#core-web-vitals)
  - [Lifecycle](https://web.dev/articles/vitals#lifecycle)
  - [Tools to measure and report Core Web Vitals](https://web.dev/articles/vitals#tools_to_measure_and_report_core_web_vitals)
  - [Recommendations for improving your scores](https://web.dev/articles/vitals#recommendations_for_improving_your_scores)
- [Other Web Vitals](https://web.dev/articles/vitals#other-web-vitals)
- [Changes to Web Vitals](https://web.dev/articles/vitals#evolving-web-vitals)

- [Home](https://web.dev/)
- [Articles](https://web.dev/articles)
- [Resources](https://web.dev/explore/ai)
- [Learn Core Web Vitals](https://web.dev/explore/learn-core-web-vitals)

Was this helpful?

# Web Vitals    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [Overview](https://web.dev/articles/vitals#overview)
- [Core Web Vitals](https://web.dev/articles/vitals#core-web-vitals)
  - [Lifecycle](https://web.dev/articles/vitals#lifecycle)
  - [Tools to measure and report Core Web Vitals](https://web.dev/articles/vitals#tools_to_measure_and_report_core_web_vitals)
  - [Recommendations for improving your scores](https://web.dev/articles/vitals#recommendations_for_improving_your_scores)
- [Other Web Vitals](https://web.dev/articles/vitals#other-web-vitals)
- [Changes to Web Vitals](https://web.dev/articles/vitals#evolving-web-vitals)

![Philip Walton](https://web.dev/images/authors/philipwalton.jpg)


Philip Walton


[X](https://twitter.com/philwalton) [GitHub](https://github.com/philipwalton) [LinkedIn](https://www.linkedin.com/in/waltonphilip) [Mastodon](https://toot.cafe/@philipwalton) [Bluesky](https://bsky.app/profile/philipwalton.com) [Homepage](https://philipwalton.com/)

Published: May 4, 2020, Last updated: October 31, 2024

Optimizing for quality of user experience is key to the long-term success of any site on the web. Whether you're a business owner, marketer, or developer, Web Vitals can help you quantify the experience of your site and identify opportunities to improve.

## Overview

Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Google has provided a number of tools over the years to measure and report on performance. Some developers are experts at using these tools, while others have found the abundance of both tools and metrics challenging to keep up with.

Site owners shouldn't have to be performance experts to understand the quality of experience they are delivering to their users. The Web Vitals initiative aims to simplify the landscape, and help sites focus on the metrics that matter most, the **Core Web Vitals**.

[![Sign up for the web.dev newsletter.](https://web.dev/static/images/newsletter/opt2_banner.png)](https://web.dev/newsletter?nl_cta=true)

## Core Web Vitals

Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable [in the field](https://web.dev/articles/user-centric-performance-metrics#how_metrics_are_measured), and reflects the real-world experience of a critical [user-centric](https://web.dev/articles/user-centric-performance-metrics#how_metrics_are_measured) outcome.

The metrics that make up Core Web Vitals will [evolve](https://web.dev/articles/vitals#evolving-web-vitals) over time. The current set focuses on three aspects of the user experience— _loading_, _interactivity_, and _visual stability_—and includes the following metrics (and their respective thresholds):

![Largest Contentful Paint threshold recommendations](https://web.dev/static/articles/vitals/image/largest-contentful-paint-ea2e6ec5569b6.svg)![Interaction to Next Paint threshold recommendations](https://web.dev/static/articles/vitals/image/inp-thresholds.svg)![Cumulative Layout Shift threshold recommendations](https://web.dev/static/articles/vitals/image/cumulative-layout-shift-t-5d49b9b883de4.svg)

- **[Largest Contentful Paint (LCP)](https://web.dev/articles/lcp)**: measures _loading_ performance. To provide a good user experience, LCP should occur within **2.5 seconds** of when the page first starts loading.
- **[Interaction to Next Paint (INP)](https://web.dev/articles/inp)**: measures _interactivity_. To provide a good user experience, pages should have a INP of **200 milliseconds** or less.
- **[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)**: measures _visual stability_. To provide a good user experience, pages should maintain a CLS of **0.1.** or less.

To ensure you're hitting the recommended target for these metrics for most of your users, a good threshold to measure is the **75th percentile** of page loads, segmented across mobile and desktop devices.

Tools that assess Core Web Vitals compliance should consider a page passing if it meets the recommended targets at the 75th percentile for all three of the Core Web Vitals metrics.

### Lifecycle

Metrics on the Core Web Vitals track go through a lifecycle consisting of three phases: experimental, pending, and stable.

![The three lifecycle phases of Core Web Vitals metrics, visualized as a series of three chevrons. From left to right, the phases are Experimental, Pending, and Stable.](https://web.dev/static/articles/vitals/image/the-three-lifecycle-phase-0d329be3158f9.svg)
The stages of the Core Web Vitals lifecycle.


Each phase is designed to signal to developers how they should think about each metric:

- **Experimental metrics** are prospective Core Web Vitals that may still be undergoing significant changes depending on testing and community feedback.
- **Pending metrics** are future Core Web Vitals that have passed the testing and feedback stage and have a well-defined timeline to becoming stable.
- **Stable metrics** are the current set of Core Web Vitals that Chrome considers essential for great user experiences.

The Core Web Vitals are at the following lifecycle stages:

- [LCP](https://web.dev/articles/lcp): Stable
- [CLS](https://web.dev/articles/cls): Stable
- [INP](https://web.dev/articles/inp): Stable

#### Experimental

When a metric is initially developed and enters the ecosystem, it is considered an _experimental metric_.

The purpose of the experimental phase is to assess a metric's fitness, first by exploring the problem to be solved, and possibly iterate on what previous metrics may have failed to address. For example, [Interaction to Next Paint (INP)](https://web.dev/articles/inp) was initially developed as an experimental metric to address the runtime performance issues present on the web more comprehensively than [First Input Delay (FID)](https://web.dev/articles/fid).

The experimental phase of Core Web Vitals lifecycle is also intended to give flexibility in a metric's development by identifying bugs and even exploring changes to its initial definition. It's also the phase in which community feedback is most important.

#### Pending

When the Chrome team determines that an experimental metric has received sufficient feedback and proven its efficacy, it becomes a _pending metric_. For example, INP was promoted in 2023 from experimental to pending status with the intent to eventually retire FID.

Pending metrics are held in this phase for a minimum of six months to give the ecosystem time to adapt. Community feedback remains an important aspect of this phase, as more developers begin to use the metric.

#### Stable

When a Core Web Vital candidate metric is finalized, it becomes a _stable metric_. This is when the metric can become a Core Web Vital.

Stable metrics are actively supported, and can be subject to bug fixes and definition changes. Stable Core Web Vitals metrics won't change more than once per year. Any change to a Core Web Vital will be clearly communicated in the metric's official documentation, as well as in the metric's changelog. Core Web Vitals are also included in any assessments.

### Tools to measure and report Core Web Vitals

Google believes that the Core Web Vitals are critical to all web experiences. As a result, it is committed to surfacing these metrics [in all of its popular tools](https://web.dev/articles/vitals-tools). The following sections details which tools support the Core Web Vitals.

#### Field tools to measure Core Web Vitals

The [Chrome User Experience Report](https://developer.chrome.com/docs/crux) collects anonymized, real user measurement data for each Core Web Vital. This data enables site owners to quickly assess their performance without requiring them to manually instrument analytics on their pages, and powers tools like [Chrome DevTools](https://developer.chrome.com/docs/devtools/performance/overview#compare), [PageSpeed Insights](https://pagespeed.web.dev/), and Search Console's [Core Web Vitals report](https://support.google.com/webmasters/answer/9205520).

|     |     |     |     |
| --- | --- | --- | --- |
|  | LCP | INP | CLS |
| [Chrome User Experience Report](https://developer.chrome.com/docs/crux) | check | check | check |
| [Chrome DevTools](https://developer.chrome.com/docs/devtools/performance/overview#compare) | check | check | check |
| [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) | check | check | check |
| [Search Console (Core Web Vitals report)](https://support.google.com/webmasters/answer/9205520) | check | check | check |

The data provided by Chrome User Experience Report offers a quick way to assess the performance of sites, but it does not provide the detailed, per-pageview telemetry that is often necessary to accurately diagnose, monitor, and quickly react to regressions. As a result, we strongly recommend that sites set up their own real-user monitoring.

#### Measure Core Web Vitals in JavaScript

Each of the Core Web Vitals can be measured in JavaScript using standard web APIs.

The easiest way to measure all the Core Web Vitals is to use the [web-vitals](https://github.com/GoogleChrome/web-vitals) JavaScript library, a small, production-ready wrapper around the underlying web APIs that measures each metric in a way that accurately matches how they're reported by all the Google tools listed earlier.

With the [web-vitals](https://github.com/GoogleChrome/web-vitals) library, measuring each metric can be done by calling a single function. See the documentation for complete [usage](https://github.com/GoogleChrome/web-vitals#usage) and [API](https://github.com/GoogleChrome/web-vitals#api) details.

```
import {onCLS, onINP, onLCP} from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}

onCLS(sendToAnalytics);
onINP(sendToAnalytics);
onLCP(sendToAnalytics);
```

Once you've configured your site to use the [web-vitals](https://github.com/GoogleChrome/web-vitals) library to measure and send your Core Web Vitals data to an analytics endpoint, the next step is to aggregate and report on that data to see if your pages are meeting the recommended thresholds for at least 75% of page visits.

While some analytics providers have built-in support for Core Web Vitals metrics, even those that don't should include basic custom metric features that allow you to measure Core Web Vitals in their tool.

Developers who prefer to measure these metrics directly using the underlying web APIs can instead use these metric guides for implementation details:

- [Measure LCP in JavaScript](https://web.dev/articles/lcp#measure_lcp_in_javascript)
- [Measure INP in JavaScript](https://web.dev/articles/inp#how-to-measure-inp)
- [Measure CLS in JavaScript](https://web.dev/articles/cls#measure_cls_in_javascript)

For additional guidance on measuring these metrics using popular analytics services or your own in-house analytics tools, see [Best practices for measuring Web Vitals in the field](https://web.dev/articles/vitals-field-measurement-best-practices).

#### Lab tools to measure Core Web Vitals

While all of the Core Web Vitals are, first and foremost, field metrics, many of them are also measurable in the lab.

Lab measurement is the best way to test the performance of features during development—before they've been released to users. It's also the best way to catch performance regressions before they happen.

The following tools can be used to measure the Core Web Vitals in a lab environment:

|  | LCP | INP | CLS |
| --- | --- | --- | --- |
| [Chrome DevTools](https://developer.chrome.com/docs/devtools) | check | check | check |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) | check | block (use [TBT](https://web.dev/articles/tbt) instead) | check |

While lab measurement is an essential part of delivering great experiences, it is not a substitute for field measurement.

The performance of a site can substantially vary based on a user's device capabilities, their network conditions, what other processes may be running on the device, and how they're interacting with the page. In fact, each of the Core Web Vitals metrics can have its score affected by user interaction. Only field measurement can accurately capture the complete picture.

### Recommendations for improving your scores

The following guides offer specific recommendations for how to optimize your pages for each of the Core Web Vitals:

- [Optimize LCP](https://web.dev/articles/optimize-lcp)
- [Optimize INP](https://web.dev/articles/optimize-inp)
- [Optimize CLS](https://web.dev/articles/optimize-cls)

There are many ways to improve Core Web Vitals, and each approach comes with varying levels of impact, relevance, and ease of use for every situation. Refer to [The most effective ways to improve Core Web Vitals](https://web.dev/articles/top-cwv) for a short list of the Chrome team's top recommendations.

## Other Web Vitals

While the Core Web Vitals are the critical metrics for understanding and delivering a great user experience, there are other supporting metrics.

These other metrics can serve as proxy—or as supplemental metrics for the three Core Web Vitals—to help capture a larger part of the experience or to aid in diagnosing a specific issue.

For example, the metrics [Time to First Byte (TTFB)](https://web.dev/articles/ttfb) and [First Contentful Paint (FCP)](https://web.dev/articles/fcp) are both vital aspects of the _loading_ experience, and are both useful in diagnosing issues with LCP (slow [server response times](https://web.dev/articles/overloaded-server) or [render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources), respectively).

Similarly, a metric like [Total Blocking Time (TBT)](https://web.dev/articles/tbt) is a lab metrics is vital in catching and diagnosing potential _interactivity_ issues that can impact INP. However, it is not part of the Core Web Vitals set because they are not field-measurable, nor do they reflect a [user-centric](https://web.dev/articles/user-centric-performance-metrics#how_metrics_are_measured) outcome.

## Changes to Web Vitals

Web Vitals and Core Web Vitals represent the best available signals developers have today to measure quality of experience across the web, but these signals are not perfect and future improvements or additions should be expected.

The **Core Web Vitals** are relevant to all web pages and featured across relevant Google tools. Changes to these metrics will have wide-reaching impact; as such, developers should expect the definitions and thresholds of the Core Web Vitals to be stable, and updates to have prior notice and a predictable, annual cadence.

The other Web Vitals are often context or tool specific, and may be more experimental than the Core Web Vitals. As such, their definitions and thresholds may change with greater frequency.

For all Web Vitals, changes will be clearly documented in this public [CHANGELOG](https://chromium.googlesource.com/chromium/src/+/main/docs/speed/metrics_changelog/README.md).

Was this helpful?

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-10-31 UTC.




\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2024-10-31 UTC."\],\[\],\[\]\]