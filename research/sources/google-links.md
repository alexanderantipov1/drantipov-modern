Source: https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
Title: Qualify Outbound Links for SEO | Google Search Central  |  Documentation  |  Google for Developers
Fetched: 2026-09-24T16:46:47.252Z

[Skip to main content](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#main-content)

[![Google Search Central](https://developers.google.com/static/search/images/google-search-central-logo.svg)](https://developers.google.com/search)

- [GoogleSearch Central](https://developers.google.com/search)

`/`

Language

- [English](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)
- [Deutsch](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=de)
- [Español](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=es)
- [Español – América Latina](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=es-419)
- [Français](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=fr)
- [Indonesia](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=id)
- [Italiano](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=it)
- [Polski](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=pl)
- [Português – Brasil](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=pt-br)
- [Tiếng Việt](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=vi)
- [Türkçe](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=tr)
- [Русский](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=ru)
- [العربيّة](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=ar)
- [हिंदी](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=hi)
- [ภาษาไทย](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=th)
- [中文 – 简体](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=zh-cn)
- [中文 – 繁體](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=zh-tw)
- [日本語](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=ja)
- [한국어](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links?hl=ko)

[Sign in](https://developers.google.com/_d/signin?continue=https%3A%2F%2Fdevelopers.google.com%2Fsearch%2Fdocs%2Fcrawling-indexing%2Fqualify-outbound-links&prompt=select_account)

- [Documentation](https://developers.google.com/search/docs)

[Search Console](https://goo.gle/searchconsole)

- On this page
- [rel="sponsored"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#sponsored)
- [rel="ugc"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#ugc)
- [rel="nofollow"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#nofollow)
- [Multiple values](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#multiple-values)

- [Home](https://developers.google.com/)
- [Search Central](https://developers.google.com/search)
- [Documentation](https://developers.google.com/search/docs)

Was this helpful?



 Send feedback



- On this page
- [rel="sponsored"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#sponsored)
- [rel="ugc"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#ugc)
- [rel="nofollow"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#nofollow)
- [Multiple values](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#multiple-values)

# Qualify your outbound links to Google

For certain links on your site, you might want to tell Google your relationship with the
linked page. In order to do that, use one of the following `rel`
attribute values in the `<a>` tag.

For regular links that you expect Google to fetch and parse without any qualifications, you don't need
to add a `rel` attribute. For example:

```
<p>My favorite horse is the <a href="https://horses.example.com/Palomino">palomino</a>.</p>
```

For other links, use one or more of the following values:

| `rel` values |
| --- |
| ### `rel="sponsored"` | Mark links that are advertisements or paid placements (commonly called _paid_<br>_links_) with the `sponsored` value. Read more about [Google's stance on paid links](https://developers.google.com/search/docs/essentials/spam-policies#link-spam).<br>```<br><a rel="sponsored" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a><br>``` |
| ### `rel="ugc"` | We recommend marking user-generated content (UGC) links, such as comments and forum<br>posts, with the `ugc` value.<br>```<br><a rel="ugc" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a><br>```<br>If you want to recognize and reward trustworthy contributors, you might remove this<br>attribute from links posted by members or users who have consistently made<br>high-quality contributions over time. Read more about how to<br>[prevent user-generated spam on your site and platform](https://developers.google.com/search/docs/monitor-debug/prevent-abuse). |
| ### `rel="nofollow"` | Use the `nofollow` value when other values don't apply, and you'd rather<br>Google not associate your site with, or crawl the linked page from, your site. For<br>links within your own site, use the<br>[robots.txt `disallow` rule](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt#disallow).<br>```<br><a rel="nofollow" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a><br>``` |
| ### _Multiple values_ | You may specify multiple `rel` values as a space- or comma-separated<br>list. **Examples:**<br>```<br><p>I love <a rel="ugc nofollow" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a> cheese.</p><br>```<br>```<br><p>I hate <a rel="ugc,nofollow" href="https://cheese.example.com/blue_cheese">Blue</a> cheese.</p><br>``` |

Links marked with these `rel` attributes will generally not be followed. Remember
that the linked pages may be found through other means, such as sitemaps or links from other
sites, and thus they may still be crawled. These `rel` attributes are used only in
[`<a>` elements that Google can crawl](https://developers.google.com/search/docs/crawling-indexing/links-crawlable#crawlable-links),
except `nofollow`, which is also available as
[robots `meta` tag](https://developers.google.com/search/docs/crawling-indexing/special-tags).

If you need to prevent Google from fetching a link to a page on your own site, use the
[robots.txt `disallow` rule](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt#disallow).

To prevent Google from indexing a page, allow crawling and use the
[`noindex` robots rule](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Was this helpful?



 Send feedback



Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-12-10 UTC.


Need to tell us more?






\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2025-12-10 UTC."\],\[\],\["To manage how Google interacts with outbound links, use \`rel\` attributes within \`\\u003ca\\u003e\` tags. \`rel=\\"sponsored\\"\` marks paid links; \`rel=\\"ugc\\"\` designates user-generated content. \`rel=\\"nofollow\\"\` signals that Google should not associate your site with the linked page or crawl it. Multiple \`rel\` values can be used together. Links with these attributes generally won't be followed, but can still be found through other sources. For links on your site, use the \`robots.txt disallow\` rule.\\n"\]\]



Info


Chat


API


## Page info

bug\_reportfullscreenclose\_fullscreenclose

### On this page

- On this page
- [rel="sponsored"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#sponsored)
- [rel="ugc"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#ugc)
- [rel="nofollow"](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#nofollow)
- [Multiple values](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links#multiple-values)