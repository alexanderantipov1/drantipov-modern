Source: https://developers.google.com/tag-platform/security/concepts/consent-mode
Title: Consent mode overview  |  Tag Platform  |  Google for Developers
Fetched: 2026-09-24T16:47:52.520Z

[Skip to main content](https://developers.google.com/tag-platform/security/concepts/consent-mode#main-content)

- [Security and Privacy hub](https://developers.google.com/tag-platform/security)

`/`

Language

- [English](https://developers.google.com/tag-platform/security/concepts/consent-mode)
- [Deutsch](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=de)
- [Español](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=es)
- [Español – América Latina](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=es-419)
- [Français](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fr)
- [Indonesia](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=id)
- [Italiano](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=it)
- [Polski](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=pl)
- [Português – Brasil](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=pt-br)
- [Tiếng Việt](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=vi)
- [Türkçe](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=tr)
- [Русский](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=ru)
- [עברית](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=he)
- [العربيّة](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=ar)
- [فارسی](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=fa)
- [हिंदी](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=hi)
- [বাংলা](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=bn)
- [ภาษาไทย](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=th)
- [中文 – 简体](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=zh-cn)
- [中文 – 繁體](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=zh-tw)
- [日本語](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=ja)
- [한국어](https://developers.google.com/tag-platform/security/concepts/consent-mode?hl=ko)

[Sign in](https://developers.google.com/_d/signin?continue=https%3A%2F%2Fdevelopers.google.com%2Ftag-platform%2Fsecurity%2Fconcepts%2Fconsent-mode&prompt=select_account)

- [Security & Privacy](https://developers.google.com/tag-platform/security)

[Open Google Tag Manager](https://tagmanager.google.com/)

- On this page
- [How to manage consent](https://developers.google.com/tag-platform/security/concepts/consent-mode#how_to_manage_consent)
- [Tags that support consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#tags_that_support_consent_mode)
- [Consent mode terminology](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent_mode_terminology)
  - [Consent types](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-types)
- [Basic versus advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic-vs-advanced)
  - [Basic consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic_consent_mode)
  - [Advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#advanced_consent_mode)
  - [Overview](https://developers.google.com/tag-platform/security/concepts/consent-mode#overview)
- [How consent affects tag and app SDK behavior](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-behavior)
- [Consent mode HTTP parameters](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent_mode_http_parameters)
- [Consent mode modeling](https://developers.google.com/tag-platform/security/concepts/consent-mode#conversion-modeling)
- [Get started with consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#get_started_with_consent_mode)

- [Home](https://developers.google.com/)
- [Products](https://developers.google.com/products)
- [Security & Privacy](https://developers.google.com/tag-platform/security)
- [Concepts and best practices](https://developers.google.com/tag-platform/security/concepts/privacy)

Was this helpful?



 Send feedback



# Consent mode overview    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [How to manage consent](https://developers.google.com/tag-platform/security/concepts/consent-mode#how_to_manage_consent)
- [Tags that support consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#tags_that_support_consent_mode)
- [Consent mode terminology](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent_mode_terminology)
  - [Consent types](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-types)
- [Basic versus advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic-vs-advanced)
  - [Basic consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic_consent_mode)
  - [Advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#advanced_consent_mode)
  - [Overview](https://developers.google.com/tag-platform/security/concepts/consent-mode#overview)
- [How consent affects tag and app SDK behavior](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-behavior)
- [Consent mode HTTP parameters](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent_mode_http_parameters)
- [Consent mode modeling](https://developers.google.com/tag-platform/security/concepts/consent-mode#conversion-modeling)
- [Get started with consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#get_started_with_consent_mode)

![Spark icon](https://developers.google.com/_static/images/icons/spark.svg)

## Page Summary

outlined\_flag

- Consent mode lets website and app developers control how Google tags and SDKs behave based on users' consent choices for data storage and use.

- You need to get users' consent, tell Google about their choices, and ensure your tags respect those choices by using built-in consent checks or custom configurations in Google Tag Manager.

- Consent mode offers two implementations: basic, which blocks tags until consent; and advanced, which loads tags with default settings and adjusts behavior based on consent, allowing for more detailed conversion modeling.

- When users deny consent for certain data types, Google tags and SDKs limit data collection and may use modeling techniques to fill gaps in measurement while respecting user privacy.

- Consent mode uses pings to communicate consent status and key events to Google, enabling conversion and behavioral modeling in Google Ads and Google Analytics 4 properties.


Consent mode allows web and app developers to adjust tag and app SDK behavior
based on user consent choices.

## How to manage consent

Managing user consent requires the following:

1. **Obtain the user's consent choice** to grant or deny consent for storing
information about their behavior. You are responsible for obtaining users'
consent on your website or app or any data you upload to Google. For
websites and apps, you can implement a consent banner or other custom
consent solution, or use a Consent Management Platform (CMP).


For data uploads to Google, consult with your legal department on a consent
management solution that fits your business needs.
2. **Communicate the user's consent choice**, or consent state, to Google. Many
CMPs handle sending the consent state to Google. If you implement a custom
consent solution, you must implement a method to send the consent state to
Google, see [Choose a framework to manage consent](https://support.google.com/tagmanager/answer/12329599#choose-consent-framework).
3. Ensure that Google tags and third-party **tags behave according to the**
**user's consent choice**.

## Tags that support consent mode

Tags and SDKs for the following Google products contain built-in consent checks
and adjust their behavior based on consent state:

- Google tag
- Google Analytics (includes Google Analytics for Firebase SDK)
- Google Ads (includes Google Ads Conversion Tracking and Remarketing; support
for Phone Call Conversions is pending.)
- Floodlight
- Conversion Linker

## Consent mode terminology

The following terms have a special meaning in the context of consent mode:

- **Consent checks**: Causes tags and SDKs to modify behavior based on
_consent state_ and _consent type_.
- **Consent state**: Represents user choices and can be granted or denied, for
each _consent type_. Tags and SDKs with _consent checks_ modify their
behavior as described in [How consent affects tag behavior](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-behavior).
- **Consent type**: Indicates the type of storage. Consent can be `granted` or
`denied` for each type.

### Consent types

Consent types include:

|     |     |
| --- | --- |
| **Consent Type** | **Description** |
| ad\_storage | Enables storage, such as cookies (web) or device identifiers (apps), related to advertising. |
| ad\_user\_data | Sets consent for sending user data to Google for online advertising purposes. |
| ad\_personalization | Sets consent for personalized advertising. |
| analytics\_storage | Enables storage, such as cookies (web) or device identifiers (apps), related to analytics, for example, visit duration. |
| functionality\_storage | Enables storage that supports the functionality of the website or app,<br> for example, language settings |
| personalization\_storage | Enables storage related to personalization, for example, video<br> recommendations |
| security\_storage | Enables storage related to security such as authentication<br> functionality, fraud prevention, and other user protection |

## Basic versus advanced consent mode

You can implement consent mode on your website or app in either of two ways:
basic or advanced.

### Basic consent mode

When you implement consent mode in its basic version, you prevent Google tags
from loading until a user interacts with a consent banner. This setup transmits
no data to Google prior to user interaction with the consent banner. When the
user grants consent, Google tags load and execute the consent mode APIs. The
tags send the consent states to Google in the following order:

1. Send default consent states.
2. Send updated consent states.

However, when the user doesn't consent, no data is transferred to Google at all
– not even the consent status. Google tags are completely blocked from firing.
Consent mode's conversion modeling in Ads is then based on a general model.

### Advanced consent mode

When you implement consent mode in its advanced version, Google tags load when a
user opens the website or app. The tags load the consent mode API and do the
following:

1. Set default consent states. By default, consent may be `denied`, unless you
set your own defaults. While consent is `denied`, the Google tags send
[measurements without\\
cookies](https://support.google.com/google-ads/answer/10000067#Pings).
2. Wait for user interaction with the banner and update consent states. Only
when a user grants consent to data collection, Google tags send the full
measurement data. [Learn more about tag\\
behavior](https://support.google.com/analytics/answer/9976101#behavior).

This implementation enables improved modeling compared to the Basic one as it
provides an advertiser-specific model as opposed to a general model.

### Overview

| Feature | Basic consent mode | Advanced consent mode |
| --- | --- | --- |
| Tag loading | Blocked until user interaction with a consent banner. | Loads with defaults set to `denied`, unless configured<br>otherwise. |
| Data transmission | No data is sent before a user consents - not even the default<br>consent status. | When consent is `denied`, consent state and measurements<br>without cookies are sent.<br>When consent is `granted`, cookies are<br>written and all measurement data is sent. |
| Consent states | Set after user interaction. | Defaults set to `denied`, unless configured otherwise;<br>updates based on user choice. |
| Tag behavior after user interaction | Loads and executes consent mode APIs only when a user grants<br>consent. | Adjusts tag behavior based on user consent choice. |
| Conversion and key event modeling | General model (less detailed modeling). | Advertiser-specific model (more detailed modeling). |

## How consent affects tag and app SDK behavior

In general, when users grant consent, tags function normally.

When users deny consent for ad personalization or ad user data, tags or app SDKs
can't use user data for ad targeting purposes.

When users deny consent for storage, consent-aware tags or app SDKs don't store
cookies (web) or device identifiers (apps). Instead, tags communicate consent
state and user activity by sending measurements without cookies (web), or
signals (apps), to the Google server. This enables Google Ads and Google
Analytics properties to model conversions and key events, see [Consent mode\\
modeling](https://developers.google.com/tag-platform/security/concepts/consent-mode#conversion-modeling).

The following signals communicate consent state:

- **Consent state pings:** Consent state pings are sent from each page the
user visits where consent mode is implemented. These pings communicate a
consent state of granted or denied for each consent type, such as ad storage
or analytics storage.

- **Key event pings:** Key event pings are sent to indicate that a key event
has occurred.

- **Google Analytics pings**: Google Analytics pings are sent on each page of
a website using Google Analytics when events are logged.


Pings can include:

- **Functional information (such as headers added passively by the browser)**:

  - Timestamp
  - User Agent
  - Referrer
- **Aggregate / non-identifying information:**
  - An indication for whether or not the current page or a prior page in the
    user's navigation on the site included ad-click information in the URL
    (e.g., GCLID / DCLID)
  - Boolean information about the consent state
  - Random number generated on each page load

Besides allowing the consent state to modify tag behavior, you can also redact
stored data when a user denies consent. For example, a user might have granted
consent to store data for ads and then change their mind and deny consent. If
you enable `ads_data_redaction`, when the user denies consent, Google Ads will
delete the stored information.

Tags with built-in consent checks amend their behavior based on different
consent states. The following table explains tag behavior by consent types,
consent state, and whether `ads_data_redaction` is set to `true`.

|     |     |     |
| --- | --- | --- |
| **Consent type(s)** | **Denied or granted** | **Behavior** |
| `ad_storage` and `analytics_storage` | granted<br>granted | - Cookies and device identifiers pertaining to advertising may be read and written.<br>- IP addresses are collected.<br>- The full page URL, including ad-click information in URL parameters<br>   (e.g., GCLID / DCLID) is collected.<br>- Third-party cookies previously set on google.com and doubleclick.net,<br>   and first-party key event cookies (e.g., `_gcl_*`) are accessible. |
| `ad_personalization` | denied | Personalized advertising is disabled, the following features won't receive data:<br>- Remarketing in Google Ads, Display & Video 360, Search Ads 360<br>- Personalized advertising with Google's advertising products |
| `ad_user_data` | denied | Personal data collection for online advertising is disabled, including:<br>- `user_id`<br>- Enhanced conversions: Hashed first party data |
| `ad_storage` | denied | - No new cookies or device identifiers pertaining to advertising may be written.<br>- No existing advertising cookies or device identifiers may be read.<br>- Requests are sent through a different domain (e.g. pagead2.googlesyndication.com) to avoid previously set<br>   third-party cookies from being sent in request headers.<br>- Google Analytics won't read or write Google Ads cookies, and Google<br>   signals features won't accumulate data for this traffic.<br>- Ads products truncate IP addresses at collection.<br>- Full page URLs are collected, including ad-click information in URL<br>   parameters (e.g., GCLID / DCLID) |
| `analytics_storage` | denied | - Won't read or write first-party [analytics cookies](https://business.safety.google/adscookies/) or app identifiers.<br>- Measurements without 3rd-party cookies (web) or signals (apps) will be sent to Google Analytics (e.g. to www.google-analytics.com or standard Analytics domains) for basic<br>   measurement and modeling purposes. |
| `ad_storage` and `ads_data_redaction` | denied and true | - No new cookies or device identifiers pertaining to advertising may be written.<br>- No existing advertising cookies or device identifiers may be read.<br>- Requests are sent through a different domain (e.g. pagead2.googlesyndication.com) to avoid previously set<br>   third-party cookies from being sent in request headers.<br>- Google Analytics won't read or write Google Ads cookies or device identifiers, and<br>   Google signals features won't accumulate data for this traffic.<br>- Ad-click identifiers (e.g., GCLID / DCLID) in consent and key event<br>   pings are redacted.<br>- Ads products truncate IP addresses at collection.<br>- Page URLs with ad-click identifiers are redacted. |

## Consent mode HTTP parameters

When you implement consent mode, consent mode parameters are translated into
HTTP request parameters such as `dma`, `gcd`, and `gcs`. Consent to [Google\\
services](https://support.google.com/tagmanager/answer/12131703#CPS-selection) is encoded using `dma_cps`. These fields collectively provide
information about consent states and related configuration settings. Google tag
fields may be encoded to improve transmission efficiency. These fields may be
subject to change as these services evolve.

The `gcs` parameter is used to transmit the `ad_storage` and `analytics_storage`
parameters, indicating the user's consent choice regarding the storage of
advertising and analytics cookies (web) or device identifiers (app). The `gcd`
parameter is always sent to Google services, regardless of whether consent mode
is activated or not. The `gcd` parameter encodes detailed information about the
user's consent choice through the consent types.

Tag Assistant can help you understand these fields and how your Google tag is
behaving, so that you can better debug your setup. [Learn how to debug consent\\
mode](https://developers.google.com/tag-platform/security/guides/consent-debugging).

## Consent mode modeling

To mitigate any data collection gaps, Google products use these pings to model
your metrics for your measurement solutions. In order to protect user privacy,
your tag or app SDK needs to meet a certain data collection threshold. You can
find more information about what is modeled and under which circumstances in the
following articles:

- [Google Ads consent mode modeling](https://support.google.com/google-ads/answer/10548233)
- [Google Ads online conversion modeling](https://support.google.com/google-ads/answer/10081327)
- [Google Analytics conversion modeling](https://support.google.com/analytics/answer/10710245)
- [Google Analytics behavioral modeling](https://support.google.com/analytics/answer/11161109)

## Get started with consent mode

- [Set up consent mode on websites](https://developers.google.com/tag-platform/security/guides/consent)
- [Set up consent mode for apps](https://developers.google.com/tag-platform/security/guides/app-consent)
- [Consent mode for CMP providers](https://developers.google.com/tag-platform/security/concepts/cmp)

Was this helpful?



 Send feedback



Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-07-30 UTC.


Need to tell us more?






\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2026-07-30 UTC."\],\[\],\["Consent mode allows adjusting tag behavior based on user consent. Key actions include: obtaining user consent, communicating the consent state to Google, and ensuring tags respect user choices. Consent types cover storage for ads, analytics, functionality, personalization, and security. There are two modes: basic (blocking tags until consent) and advanced (loading tags with defaults, sending cookieless pings when consent is denied). When consent is denied, tags avoid storing cookies or device identifiers and send cookieless pings to model conversions.\\n"\]\]



Info


Chat


API


## Page info

bug\_reportfullscreenclose\_fullscreenclose

### On this page

- On this page
- [How to manage consent](https://developers.google.com/tag-platform/security/concepts/consent-mode#how_to_manage_consent)
- [Tags that support consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#tags_that_support_consent_mode)
- [Consent mode terminology](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent_mode_terminology)
  - [Consent types](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-types)
- [Basic versus advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic-vs-advanced)
  - [Basic consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic_consent_mode)
  - [Advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#advanced_consent_mode)
  - [Overview](https://developers.google.com/tag-platform/security/concepts/consent-mode#overview)
- [How consent affects tag and app SDK behavior](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-behavior)
- [Consent mode HTTP parameters](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent_mode_http_parameters)
- [Consent mode modeling](https://developers.google.com/tag-platform/security/concepts/consent-mode#conversion-modeling)
- [Get started with consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#get_started_with_consent_mode)