Source: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
Title: General Structured Data Guidelines | Google Search Central  |  Documentation  |  Google for Developers
Fetched: 2026-09-24T16:46:51.414Z

[Skip to main content](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#main-content)

[![Google Search Central](https://developers.google.com/static/search/images/google-search-central-logo.svg)](https://developers.google.com/search)

- [GoogleSearch Central](https://developers.google.com/search)

`/`

Language

- [English](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Deutsch](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=de)
- [Español](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=es)
- [Español – América Latina](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=es-419)
- [Français](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=fr)
- [Indonesia](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=id)
- [Italiano](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=it)
- [Polski](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=pl)
- [Português – Brasil](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=pt-br)
- [Tiếng Việt](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=vi)
- [Türkçe](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=tr)
- [Русский](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=ru)
- [العربيّة](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=ar)
- [हिंदी](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=hi)
- [ภาษาไทย](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=th)
- [中文 – 简体](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=zh-cn)
- [中文 – 繁體](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=zh-tw)
- [日本語](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=ja)
- [한국어](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=ko)

[Sign in](https://developers.google.com/_d/signin?continue=https%3A%2F%2Fdevelopers.google.com%2Fsearch%2Fdocs%2Fappearance%2Fstructured-data%2Fsd-policies&prompt=select_account)

- [Documentation](https://developers.google.com/search/docs)

[Search Console](https://goo.gle/searchconsole)

- On this page
- [Technical guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#technical-guidelines)
  - [Format](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#format)
  - [Access](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#access)
- [Quality guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#quality-guidelines)
  - [Content](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#content)
  - [Relevance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#relevance)
  - [Completeness](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#completeness)
  - [Location](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#location)
  - [Specificity](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#specificity)
  - [Images](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#images)
  - [Multiple items on a page](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#multiple-items)

- [Home](https://developers.google.com/)
- [Search Central](https://developers.google.com/search)
- [Documentation](https://developers.google.com/search/docs)

Was this helpful?



 Send feedback



- On this page
- [Technical guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#technical-guidelines)
  - [Format](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#format)
  - [Access](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#access)
- [Quality guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#quality-guidelines)
  - [Content](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#content)
  - [Relevance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#relevance)
  - [Completeness](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#completeness)
  - [Location](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#location)
  - [Specificity](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#specificity)
  - [Images](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#images)
  - [Multiple items on a page](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#multiple-items)

# General structured data guidelines

To be eligible for rich result appearance in Google Search results, structured data shouldn't violate the
[Content policies for Google Search](https://support.google.com/websearch/answer/10622781)
(which include our [spam policies](https://developers.google.com/search/docs/essentials/spam-policies)).
In addition, this page details the general guidelines that apply to all structured data: they
must be followed in order to be eligible for appearance as a rich result in Google Search.


If your page contains a [structured data issue](https://support.google.com/webmasters/answer/9044175#spammy-structured-markup),
it can result in a manual action. A structured data manual action means that a page loses eligibility
for appearance as a rich result; it doesn't affect how the page ranks in Google web search.
To check if you have a manual action, open the
[Manual Actions report in Search Console](https://search.google.com/search-console/manual-actions).

## Technical guidelines

You can test compliance with technical guidelines using the
[Rich Results Test](https://search.google.com/test/rich-results) and the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289), which catch most technical errors.

### Format

In order to be eligible for rich results, mark up your site's pages
using one of [three supported formats](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data#structured-data-format):

- JSON-LD (recommended)
- Microdata
- RDFa

### Access

Don't block your structured data pages to Googlebot using robots.txt, [`noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing),
or any other access control methods.

## Quality guidelines

These quality guidelines are not easily testable using an automated tool.
Violating a quality guideline can prevent syntactically correct structured data from being
displayed as a rich result in Google Search, or possibly cause it
to be [marked as spam](https://support.google.com/webmasters/answer/3498001).

### Content

- Follow the [spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies).
- Provide up-to-date information. We won't show a rich result for time-sensitive
content that is no longer relevant.
- Provide original content that you or your users have generated.
- **Don't** mark up content that is not visible to readers of the page. For example, if the JSON-LD
markup describes a performer, the HTML body must describe that same performer.
- **Don't** mark up irrelevant or misleading content, such as fake reviews or content
unrelated to the focus of a page.
- **Don't** use structured data to deceive or mislead users. Don't impersonate any person or
organization, or misrepresent your ownership, affiliation, or primary purpose.
- Content in structured data must also follow the additional content guidelines or policies, as
documented in the specific feature guide. For example, content in `JobPosting`
structured data must follow the [job posting content policies](https://developers.google.com/search/docs/appearance/structured-data/job-posting#content-policies).

### Relevance

Your structured data must be a true representation of the page content. Here
are some examples of irrelevant data:

- A sports live streaming site labeling broadcasts as local events.
- A woodworking site labeling instructions as recipes.

### Completeness

- Specify all required properties listed in the [documentation for your specific rich result type](https://developers.google.com/search/docs/appearance/structured-data/search-gallery). Items that are missing required properties are not eligible for rich results.
- The more recommended properties that you provide, the higher quality the result is to
users. For example: users prefer job postings with explicitly stated
salaries than those without; users prefer recipes with actual user reviews and genuine
star ratings (note that reviews or ratings not by actual users may result in
[manual action](https://support.google.com/webmasters/answer/3498001)). Rich result
ranking takes extra information into consideration.

### Location

- Put the structured data on the page that it describes, unless specified otherwise
by the documentation.
- If you have duplicate pages for the same content, we recommend placing the same structured
data on all page duplicates, not just on the canonical page.

### Specificity

- Try to use the most specific applicable type and property names defined by schema.org
for your markup.
- Follow all additional guidelines given in the [documentation for your specific rich result type](https://developers.google.com/search/docs/guides/search-gallery).

### Images

- When specifying an image as a structured data property, make sure that the image is relevant
to the page that it's on. For example, if you define the `image` property of `NewsArticle`,
the image must be relevant to that news article.
- All image URLs specified in structured data must be crawlable and indexable. Otherwise, Google Search can't find and
display them on the search results page. To check if Google can access your URLs, use
the [URL\\
Inspection tool](https://support.google.com/webmasters/answer/9012289).

### Multiple items on a page

Multiple items on a page means that there is more than one kind of thing on a page. For
example, a page could contain a recipe, a video that shows how to make that recipe,
and breadcrumb information for how people can discover that recipe. All of this user-visible
information can also be marked up with structured data, which makes it easier for search engines
like Google Search to understand the information on a page. When you add more items that
apply to a page, Google Search has a fuller picture of what the page is about and can display
that page in different search features.


![A recipe rich result that shows both a video and reviews](https://developers.google.com/static/search/docs/images/multiple-items-rich-result.png)

Google Search understands multiple items on a page, whether you nest the items
or specify each item individually:


- **Nesting**: When there is one main item, and additional items are grouped
under the main item. This is particularly helpful when grouping related items (for example,
a recipe with a video and reviews).
- **Individual items**: When each item is a separate block on the same page.


These examples are trimmed for brevity, and they don't
include all the required and recommended properties for the features. For a full example, refer to the
[specific structured data type documentation](https://developers.google.com/search/docs/guides/search-gallery).

[Nesting](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#nesting)[Individual items](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#individual-items)More

Here's an example of nested structured data, where `Recipe` is the main item, and `aggregateRating` and `video` are nested in the `Recipe`.


```
<html>
  <head>
    <title>How To Make Banana Bread</title>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "Banana Bread Recipe",
      "image": [\
        "https://example.com/photos/1x1/photo.jpg",\
        "https://example.com/photos/4x3/photo.jpg",\
        "https://example.com/photos/16x9/photo.jpg"\
      ],
      "description": "The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.7,
        "ratingCount": 123
      },
      "video": {
        "@type": "VideoObject",
        "name": "How To Make Banana Bread",
        "description": "This is how you make banana bread, in 5 easy steps.",
        "contentUrl": "https://www.example.com/video123.mp4"
       }
    }
    </script>
  </head>
  <body>
  </body>
</html>
```

Here's an example of individual items of structured data. There are two, distinct items: `Recipe` and `BreadcrumbList`.


```
<html>
  <head>
    <title>How To Make Banana Bread</title>
    <script type="application/ld+json">
    [{\
      "@context": "https://schema.org/",\
      "@type": "Recipe",\
      "name": "Banana Bread Recipe",\
      "description": "The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas.",\
      "image": [\
        "https://example.com/photos/1x1/photo.jpg",\
        "https://example.com/photos/4x3/photo.jpg",\
        "https://example.com/photos/16x9/photo.jpg"\
      ]\
    },\
    {\
      "@context": "https://schema.org",\
      "@type": "BreadcrumbList",\
      "itemListElement": [{\
        "@type": "ListItem",\
        "position": 1,\
        "name": "Recipes",\
        "item": "https://example.com/recipes"\
      },{\
        "@type": "ListItem",\
        "position": 2,\
        "name": "Bread recipes",\
        "item": "https://example.com/recipes/bread-recipes"\
      },{\
        "@type": "ListItem",\
        "position": 3,\
        "name": "How To Make Banana Bread"\
      }]\
    }]
    </script>
  </head>
  <body>
  </body>
</html>
```

#### Additional tips

- To make sure that Google Search understands what the main purpose of the page is, include
the main type of structured data that reflects the main focus of the page. For example, if a
page is mainly about a recipe, make sure to include
[Recipe structured\\
data](https://developers.google.com/search/docs/appearance/structured-data/recipe) in addition to [Video](https://developers.google.com/search/docs/appearance/structured-data/video) and
[Review](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) structured data. This is an opportunity for that
page to be eligible for multiple search appearances (recipe rich results, video search, and
review snippets). If the page only contained Video structured data, Google Search wouldn't know
enough about the page to also display it as a recipe rich result.
- To ensure that the page fully represents the content that's visible to users, make sure all
structured data items are complete. For example, if you include multiple reviews, make sure
that you include all of the reviews that are visible to people on the page. If a page didn't
mark up all of the reviews on a page, this would be misleading for people who expect to see
all of those reviews, based on the appearance of the page in Search results.

Was this helpful?



 Send feedback



Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-07-10 UTC.


Need to tell us more?






\[\[\["Easy to understand","easyToUnderstand","thumb-up"\],\["Solved my problem","solvedMyProblem","thumb-up"\],\["Other","otherUp","thumb-up"\]\],\[\["Missing the information I need","missingTheInformationINeed","thumb-down"\],\["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"\],\["Out of date","outOfDate","thumb-down"\],\["Samples / code issue","samplesCodeIssue","thumb-down"\],\["Other","otherDown","thumb-down"\]\],\["Last updated 2026-07-10 UTC."\],\[\],\["Structured data must comply with Google's content and spam policies to be eligible for rich results in Search. Key actions include using supported formats (JSON-LD, Microdata, RDFa), ensuring data accurately represents page content, providing complete and up-to-date information, and not blocking Googlebot access. Avoid marking up hidden, misleading, or irrelevant content. Use the Rich Results Test and URL Inspection Tool for technical validation. Google doesn't guarantee rich results, even with proper markup.\\n"\]\]



Info


Chat


API


## Page info

bug\_reportfullscreenclose\_fullscreenclose

### On this page

- On this page
- [Technical guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#technical-guidelines)
  - [Format](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#format)
  - [Access](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#access)
- [Quality guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#quality-guidelines)
  - [Content](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#content)
  - [Relevance](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#relevance)
  - [Completeness](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#completeness)
  - [Location](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#location)
  - [Specificity](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#specificity)
  - [Images](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#images)
  - [Multiple items on a page](https://developers.google.com/search/docs/appearance/structured-data/sd-policies#multiple-items)