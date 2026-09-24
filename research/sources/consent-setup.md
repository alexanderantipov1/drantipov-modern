Source: https://developers.google.com/tag-platform/security/guides/consent
Title: Set up consent mode on websites  |  Tag Platform  |  Google for Developers
Fetched: 2026-09-24T16:47:54.909Z

[Skip to main content](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#main-content)

- [Security and Privacy hub](https://developers.google.com/tag-platform/security)

`/`

Language

- [English](https://developers.google.com/tag-platform/security/guides/consent)
- [Deutsch](https://developers.google.com/tag-platform/security/guides/consent?hl=de)
- [Español](https://developers.google.com/tag-platform/security/guides/consent?hl=es)
- [Español – América Latina](https://developers.google.com/tag-platform/security/guides/consent?hl=es-419)
- [Français](https://developers.google.com/tag-platform/security/guides/consent?hl=fr)
- [Indonesia](https://developers.google.com/tag-platform/security/guides/consent?hl=id)
- [Italiano](https://developers.google.com/tag-platform/security/guides/consent?hl=it)
- [Polski](https://developers.google.com/tag-platform/security/guides/consent?hl=pl)
- [Português – Brasil](https://developers.google.com/tag-platform/security/guides/consent?hl=pt-br)
- [Tiếng Việt](https://developers.google.com/tag-platform/security/guides/consent?hl=vi)
- [Türkçe](https://developers.google.com/tag-platform/security/guides/consent?hl=tr)
- [Русский](https://developers.google.com/tag-platform/security/guides/consent?hl=ru)
- [עברית](https://developers.google.com/tag-platform/security/guides/consent?hl=he)
- [العربيّة](https://developers.google.com/tag-platform/security/guides/consent?hl=ar)
- [فارسی](https://developers.google.com/tag-platform/security/guides/consent?hl=fa)
- [हिंदी](https://developers.google.com/tag-platform/security/guides/consent?hl=hi)
- [বাংলা](https://developers.google.com/tag-platform/security/guides/consent?hl=bn)
- [ภาษาไทย](https://developers.google.com/tag-platform/security/guides/consent?hl=th)
- [中文 – 简体](https://developers.google.com/tag-platform/security/guides/consent?hl=zh-cn)
- [中文 – 繁體](https://developers.google.com/tag-platform/security/guides/consent?hl=zh-tw)
- [日本語](https://developers.google.com/tag-platform/security/guides/consent?hl=ja)
- [한국어](https://developers.google.com/tag-platform/security/guides/consent?hl=ko)

[Sign in](https://developers.google.com/_d/signin?continue=https%3A%2F%2Fdevelopers.google.com%2Ftag-platform%2Fsecurity%2Fguides%2Fconsent%3Fconsentmode%3Dadvanced&prompt=select_account)

- [Security & Privacy](https://developers.google.com/tag-platform/security)

[Open Google Tag Manager](https://tagmanager.google.com/)

- On this page
- [Before you begin](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#before_you_begin)
- [Set up consent mode](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#set_up_consent_mode)
  - [Set the default consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#default-consent)
  - [Update consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#update-consent)
  - [Change user consent choices](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#change-consent)
- [Implementation example](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#implementation_example)
- [Upgrade to consent mode v2](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#upgrade-consent-v2)
- [More consent mode features](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#more_consent_mode_features)
  - [Region-specific behavior](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#region-specific-behavior)
  - [Pass through ad click, client ID, and session ID information in URLs](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#passthroughs)
  - [Redact ads data](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#redact_ads_data)
- [Common issues](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#faq)
  - [Consent isn't updated on a transition page](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#consent_isnt_updated_on_a_transition_page)
  - [Consent updated immediately before page reload](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#consent_updated_immediately_before_page_reload)
- [Next steps](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#next-steps)
- [Legacy tag controls](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#legacy_tag_controls)
- [Related links](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#related-links)

- [Home](https://developers.google.com/)
- [Products](https://developers.google.com/products)
- [Security & Privacy](https://developers.google.com/tag-platform/security)
- [Guides](https://developers.google.com/tag-platform/security/guides/consent)

Was this helpful?



 Send feedback



# Set up consent mode on websites    Stay organized with collections      Save and categorize content based on your preferences.

- On this page
- [Before you begin](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#before_you_begin)
- [Set up consent mode](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#set_up_consent_mode)
  - [Set the default consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#default-consent)
  - [Update consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#update-consent)
  - [Change user consent choices](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#change-consent)
- [Implementation example](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#implementation_example)
- [Upgrade to consent mode v2](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#upgrade-consent-v2)
- [More consent mode features](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#more_consent_mode_features)
  - [Region-specific behavior](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#region-specific-behavior)
  - [Pass through ad click, client ID, and session ID information in URLs](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#passthroughs)
  - [Redact ads data](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#redact_ads_data)
- [Common issues](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#faq)
  - [Consent isn't updated on a transition page](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#consent_isnt_updated_on_a_transition_page)
  - [Consent updated immediately before page reload](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#consent_updated_immediately_before_page_reload)
- [Next steps](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#next-steps)
- [Legacy tag controls](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#legacy_tag_controls)
- [Related links](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#related-links)

![Spark icon](https://developers.google.com/_static/images/icons/spark.svg)

## Page Summary

outlined\_flag

- This guide explains how to integrate Google's consent mode for developers managing their own website consent solution.

- Consent mode allows you to control data collection based on user consent for advertising and analytics purposes.

- You need to set the default consent state and update it based on user interactions with your consent settings.

- Consent mode was recently updated and now includes additional parameters for advertising user data and personalization.

- Developers using legacy tags are encouraged to update to gtag.js or Google Tag Manager for better privacy controls.


> This page is for developers who maintain their own consent solution on their
> website and want to integrate consent mode. For an introduction to consent mode,
> read [Consent mode overview](https://developers.google.com/tag-platform/devguides/privacy#consent_mode_overview). If you use a Consent Management Platform (CMP)
> to obtain user consent, learn more about
> [how to set up consent mode with a CMP](https://support.google.com/tagmanager/answer/14009343#web-consent).

You can implement consent mode in a basic or advanced way. Check your company's
guidelines to pick an implementation method and which defaults to set. Learn
more about [basic versus advanced consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode#basic-vs-advanced).

Advanced consent modeBasic consent mode

## Before you begin

Take the following into consideration before implementing consent mode:

- If you use Tag Manager and want to maintain your own banner, the recommended
approach is loading your banner through the Tag Manager container. To do so,
you need to [create a consent mode template](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis). Alternatively, you can use a
consent mode template from the [Community Template Gallery](https://tagmanager.google.com/gallery/#/?filter=consent&page=1).

- If you use gtag.js, make sure you have installed the Google tag on every
page of your website. The consent mode code gets added to each page of your
website.


## Set up consent mode

To set up consent mode, you need to:

1. Before a user grants consent: [Set the default\\
consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#default-consent).
2. [Update the consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#update-consent) based on the user
interaction with your consent settings.

### Set the default consent state

Set a default value for each [consent type](https://developers.google.com/tag-platform/security/concepts/consent-mode#consent-types) you are using. By default, no
consent mode values are set.

It is best practice to scope the default consent settings to the regions where
you are surfacing consent banners to your visitors. This helps with preserving
measurement in regions where consent banners are required and Google tags adjust
their behavior accordingly. You also prevent any loss of measurement where there
are no consent banners or consent banners don't apply. See [Region-specific\\
behavior](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#regional-behavior).

[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

To adjust the default measurement capabilities, call the `gtag('consent',
'default', ...)` command on every page of your site before any commands that
send measurement data (such as `config` or `event`).

For example, to set deny consent for all parameters by default:

```
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});
```

### Optional: Integrate with asynchronous consent management platforms

If your banner loads asynchronously, it might not always run before your
Google tags. To handle such situations, specify `wait_for_update` along with
a millisecond value to control how long to wait before data is sent.

For example, to deny `ad_storage` on a particular page by default, but to
allow your CMP to update consent status, use `wait_for_update`. In the
following code, `ad_storage` defaults to `denied`, and the consent tool is
given 500 milliseconds to call `gtag('consent', 'update', ...)` before tags
fire:

```
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'wait_for_update': 500
  });
```

When you use Google Tag Manager, create your own template using the Tag
Manager consent APIs. The following [example](https://github.com/googleanalytics/gtm-consent-mode-examples/tree/main/vendor-agnostic-google-template) is available to reference as a
starting point.

Use the Tag Manager-specific APIs for managing consent states
`setDefaultConsentState` and `updateConsentState`. The `gtagSet` API can be
used to optionally set the `ads_data_redaction` and URL passthrough settings
as appropriate.

### Update consent state

[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

To send the user's consent status, use the `update` command. Since consent
mode doesn't save consent choices, update the consent status as soon as a
user interacts with your consent management solution. After a user grants
consent, persist their choice and call the update command accordingly on
subsequent pages.

It is up to you to ensure the correct values are set for all consent types.
For full details on supported types, read the [API reference](https://developers.google.com/tag-platform/gtagjs/reference#consent).

The following code example shows how to update the consent status to
`granted` when user agrees to all options:

```
<!-- Send consent updates when users interact with your consent banner -->
<script>
function allConsentGranted() {
  gtag('consent', 'update', {
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'ad_storage': 'granted',
    'analytics_storage': 'granted'
  });
}
</script>
<!-- Invoke your consent function when a user interacts with your banner -->
<body>
  ...
  <button onclick="allConsentGranted()">Accept all</button>
  ...
</body>
```

When you use a consent mode template, the user consent should automatically
update when the user interacts with the banner.

If you build a consent mode template yourself, use the Tag Manager-specific
APIs for managing consent states `setDefaultConsentState` and
`updateConsentState`. The `gtagSet` API can be used to optionally set the
`ads_data_redaction` and URL passthrough settings as appropriate.

### Change user consent choices

Users can change their consent preferences after their initial interaction. For
example, a user who initially granted consent might later decide to revoke it
through your website's settings panel.

[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

To update the consent state at any time, use the `update` command. This
command is used for any change in consent state, including changing from
`'granted'` to `'denied'`.

**Example: Revoking consent**

If a user has previously granted consent for `analytics_storage` and
`ad_storage`, but now wishes to deny consent, send an `update` call
reflecting their new choice:

```
// User updates their settings to deny consent
gtag('consent', 'update', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});
```

If you use a consent mode template, the user's consent should update
automatically when the user interacts with your banner or settings panel.

If you build a consent mode template yourself, use the `updateConsentState`
API to update the consent state when a user confirms their new preferences.

**Implementation considerations:**

1. **Persistence:** Ensure the user's updated consent choices are persisted,
such as in a first-party cookie or local storage, so that the correct state
is set on subsequent page loads.
2. **Timing:** Call the update command as soon as the user confirms their new
preferences in your site's consent settings interface.

## Implementation example

The following example sets multiple consent mode parameters to `denied` by
default. After a user indicates their consent choices, the relevant parameters
are updated to `granted`.

[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

The order of the code here is vital. **If your consent code is called out of**
**order, consent defaults won't work**. Depending on business requirements,
specifics may vary, but in general, code should run in the following order:

1. Load the Google tag. This is your default snippet code. The default
snippet should be updated (see below) to include a call to
`gtag('consent', 'default', ...)`.

2. Load your consent solution. If your consent solution loads
asynchronously, see [Integrate with asynchronous consent management\\
platforms](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#async) for how to make sure this happens in the correct order.

3. If not handled by your consent solution, call `gtag('consent', 'update',
...)` after the user indicates consent.


```
<script>
// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent to 'denied' as a placeholder
// Determine actual values based on your own requirements
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});
</script>
<!-- Google tag (gtag.js) -->
<script async src="//www.googletagmanager.com/gtag/js?id=TAG_ID">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());
  gtag('config', 'TAG_ID');
</script>

<!-- Send consent updates when users interact with your consent banner -->
<script>
  function allConsentGranted() {
    gtag('consent', 'update', {
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
  }
</script>
<!-- Invoke your consent function when a user interacts with your banner -->
<body>
  ...
  <button onclick="allConsentGranted()">Accept all</button>
  ...
</body>
```

For sites using Tag Manager, we recommend using a CMP to handle updates of
visitor consent choices. CMPs provide templates in the [Community Template\\
Gallery](https://tagmanager.google.com/gallery/#/?filter=consent&page=1) to create a tag for managing consent mode.

If using a template is not possible, you can instead update the code on your
page as follows. The order of the code here is vital. **If your consent code**
**is called out of order, consent defaults won't work.**

```
<script>
  // Define dataLayer and the gtag function.
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Set default consent to 'denied' as a placeholder
  // Determine actual values based on your own requirements
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->

<!-- Send consent updates when users interact with your consent banner -->
<script>
  function allConsentGranted() {
    gtag('consent', 'update', {
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
    });
  }
</script>
<!-- Invoke your consent function when a user interacts with your banner -->
<body>
  ...
  <button onclick="allConsentGranted()">Accept all</button>
  ...
</body>
```

## Upgrade to consent mode v2

As a part of Google's ongoing commitment to a privacy-centric digital
advertising ecosystem, we are strengthening the enforcement of our [EU user\\
consent policy](https://www.google.com/about/company/user-consent-policy/).

Learn more about Google's [Updates to consent mode for traffic in European\\
Economic Area (EEA)](https://support.google.com/tagmanager/answer/13695607).

Consent mode users need to send two new parameters in addition to `ad_storage`
and `analytics_storage`:

| Field Name | Allowed Values | Description |
| --- | --- | --- |
| `<br>ad_user_data<br>` | `<br>'granted' | 'denied'<br>` | Sets consent for sending user data related to advertising to<br>Google. |
| `<br>ad_personalization<br>` | `<br>'granted' | 'denied'<br>` | Sets consent for personalized advertising. |

## More consent mode features

Advanced consent features include the ability to:

- [Set which Google services you share data with](https://support.google.com/tagmanager/answer/12131703#CPS-selection&zippy=%2Cmanage-data-use-across-google-services) using the Google tag UI.
- Set behavior for a geographic region.
- Pass ad click, client ID, and session ID information in URLs when users have
not granted consent for cookies.
- Fully redact (remove) ad information when users deny consent for ad cookies.

### Region-specific behavior

To set default consent states that apply to visitors from particular areas,
specify a region (according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2#current-codes)) in your gtag consent default
command. Using region values lets you to comply with regional regulations.

You can set defaults for specific regions, and then set a different default for
all other regions. A gtag consent default command without a region parameter
sets the default for all visitors not covered by another region-specific
command.

[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

The following example sets `analytics_storage` to `denied` for users from
Spain and Alaska, and sets `ad_storage` to `denied` for all users.

```
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'region': ['ES', 'US-AK']
  });

  gtag('consent', 'default', {
    'ad_storage': 'denied'
  });
```

If you are using a template to create your tag, it may have the controls to
set region-specific behaviour. If you are building a template tag on your
own, see [Create a consent mode template](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis) for more information on setting
[region-specific behavior](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#regional-behavior).

#### Most specific parameter takes precedence

If two default consent commands occur on the same page with values for a region
and subregion, the one with a more specific region will take effect. For
example, if you have `ad_storage` set to `granted` for the region US and
`ad_storage` set to `denied` for the region US-CA, a visitor from California
will have the more specific US-CA setting take effect. For this example, that
would mean a visitor from US-CA would have `ad_storage` set to `denied`.

| Region | `ad_storage` | Behavior |
| --- | --- | --- |
| US | `'granted'` | Applies to users in the US that are _not_ in CA |
| US-CA | `'denied'` | Applies to users US-CA |
| Unspecified | `'granted'` | Uses the default value of `'granted'`. In the example, applies to<br>visitors that aren't in the US or in US-CA |

### Pass through ad click, client ID, and session ID information in URLs

When a user lands on your website after clicking an ad, information about the ad
may be appended to your landing page URLs as a query parameter. In order to
improve key event accuracy, this information is usually stored in first-party
cookies on your domain.

However, if `ad_storage` is set to `denied`, this information won't be stored
locally. To improve ad click measurement quality when `ad_storage` is `denied`,
you can optionally elect to pass information about ad clicks through URL
parameters across pages using URL passthrough.

Similarly, if `analytics_storage` is set to `denied`, URL passthrough can be
used to send event and session-based analytics (including key events) without
cookies across pages.

The following conditions must be met in order to use URL passthrough:

- Your Google tag is consent-aware and present on the page.
- The advertiser has enabled the URL passthrough feature.
- Consent mode is implemented on the page.
- The outgoing link refers to the same domain as the current page's domain.
- A GCLID or DCLID is present in the URL (Google Ads and Floodlight tags only)


[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

To enable this capability, set the `url_passthrough` parameter to `true`.
Add the following command to the default snippet before any `config`
commands:

```
gtag('set', 'url_passthrough', true);
```

If you are using a template to create your tag, it may have the controls to
set URL passthrough. If you are building a template tag on your own, see
[Create a consent mode template](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis) for more information on setting [URL\\
passthrough](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#url-passthrough) using the `gtagSet` custom template API.

Or, you can use the following options to set it in Conversion Linker or
analytics tags.

#### For **Google Ads** and **Floodlight** tags:

To enable this capability, create (or use an existing) [conversion linker](https://support.google.com/tagmanager/answer/7549390)
tag and ensure **Enable linking on all page URLs** is checked. See [basic\\
setup](https://support.google.com/tagmanager/answer/7549390#basic) for instructions on how to create a conversion linker tag.

#### For **Google Analytics** tags:

1. In Tag Manager, navigate to **Fields to Set** and select \*\*Tag Configuration


> Fields to Set\*\*.



1. When the Fields to Set section is expanded, click **Add Row**.
2. For **Field Name**, enter `url_passthrough`.
3. For **Value**, enter 'true'.
4. **Save** the tag and publish.

Alternatively, you can set the `url_passthrough` parameter to `true` on
every page of your site before the GTM install snippet.

```
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('set', 'url_passthrough', true);
```

When using URL passthrough, a few query parameters may be appended to links
as users navigate through pages on your website:

   - `gclid`
   - `dclid`
   - `gclsrc`
   - `_gl`
   - `wbraid`

For best results, ensure that:

1. Redirects on your site pass all the preceding query parameters.
2. Your analytics tools ignore these parameters in page URLs.
3. These parameters don't interfere with your site behavior.

### Redact ads data

When `ad_storage` is `denied`, new cookies won't be set for advertising
purposes. Additionally, third-party cookies previously set on google.com and
doubleclick.net won't be used except for spam and fraud purposes. Data sent
to Google will still include the full page URL, including any ad click
information in the URL parameters.

[gtag.js](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#gtag.js)[Tag Manager](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#tag-manager)More

To further redact your ads data when `ad_storage` is `denied`, set
`ads_data_redaction` to `true`.

```
gtag('set', 'ads_data_redaction', true);
```

When `ads_data_redaction` is `true` and `ad_storage` is `denied`, ad click
identifiers sent in network requests by Google Ads and Floodlight tags will
be redacted. Network requests will also be sent through a domain without
third-party cookies, such as pagead2.googlesyndication.com.

If you are using a template to create your tag, it may have the controls to
further redact ads data. If you are building a template tag on your own, see
[Create a consent mode template](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis) for more information on [redacting ads\\
data](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#redact_ads_data).

## Common issues

Review the following common issues encountered during implementation.

### Consent isn't updated on a transition page

When you implement advanced consent mode, you should call an update command on
the page where the user grants consent.

When a page loads with consent denied and then reloads with consent granted
after a consent change, Google tags may lose key data points from the
original page. Any subsequent reports may be incomplete.

For example, in Google Analytics, many sessions with consent could be missing a
session\_start event.

To avoid this issue, call the update command whenever a user's consent state
changes.

### Consent updated immediately before page reload

In some cases, when a consent type updates from denied to granted, Google
tags may send measurements based on this update. If the update command
is called as the page unloads, the browser may cancel this network traffic
before it completes. Any subsequent reports may be incomplete.

If possible, ensure that update commands are logged well before the page
unloads.

## Next steps

- [Verify consent mode works](https://developers.google.com/tag-platform/security/guides/consent-debugging#start-debugging)

## Legacy tag controls

If you use legacy tags, such as ga.js, analytics.js, or conversion.js, update to
gtag.js or Google Tag Manager.

To learn more about other legacy tag's privacy controls, see the following
documentation:

- [Google Analytics](https://support.google.com/analytics/answer/9019185)
- [Google Ads](https://support.google.com/google-ads/answer/9606827)
- [Campaign Manager](https://support.google.com/campaignmanager/topic/6228828)

## Related links

- [Tag Manager consent APIs](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis)
- [Google tag consent APIs](https://developers.google.com/tag-platform/gtagjs/reference)
- [Create a consent mode template](https://developers.google.com/tag-platform/tag-manager/templates/consent-apis)
- [Community Template Gallery](https://tagmanager.google.com/gallery/#/?filter=consent&page=1)
- [Tag Manager consent mode support](https://support.google.com/tagmanager/answer/10718549)
- [Configure consent mode with Google Analytics](https://support.google.com/analytics/answer/10270783)

Was this helpful?



 Send feedback



Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-07-30 UTC.


Need to tell us more?






\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2026-07-30 UTC."\],\[\],\["Developers implementing their own consent solution should set up consent mode by first defining the default consent state before user interaction. They should then update the consent state based on user choices, ensuring updates are tracked before any page transitions. Consent mode has been updated to include \`ad\_user\_data\` and \`ad\_personalization\` parameters. Users with older consent mode versions need to upgrade to v2. Legacy tags should be updated to gtag.js or Google Tag Manager.\\n"\]\]



Info


Chat


API


## Page info

bug\_reportfullscreenclose\_fullscreenclose

### On this page

- On this page
- [Before you begin](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#before_you_begin)
- [Set up consent mode](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#set_up_consent_mode)
  - [Set the default consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#default-consent)
  - [Update consent state](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#update-consent)
  - [Change user consent choices](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#change-consent)
- [Implementation example](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#implementation_example)
- [Upgrade to consent mode v2](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#upgrade-consent-v2)
- [More consent mode features](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#more_consent_mode_features)
  - [Region-specific behavior](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#region-specific-behavior)
  - [Pass through ad click, client ID, and session ID information in URLs](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#passthroughs)
  - [Redact ads data](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#redact_ads_data)
- [Common issues](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#faq)
  - [Consent isn't updated on a transition page](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#consent_isnt_updated_on_a_transition_page)
  - [Consent updated immediately before page reload](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#consent_updated_immediately_before_page_reload)
- [Next steps](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#next-steps)
- [Legacy tag controls](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#legacy_tag_controls)
- [Related links](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced#related-links)