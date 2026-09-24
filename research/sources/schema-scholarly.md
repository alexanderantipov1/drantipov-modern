Source: https://schema.org/MedicalScholarlyArticle
Title: MedicalScholarlyArticle - Schema.org Type
Fetched: 2026-09-24T16:48:11.163Z

**Note**: You are viewing the development
version of [Schema.org](https://schema.org/).
See [how we work](https://schema.org/docs/howwework.html) for more details.

[Schema.org](https://schema.org/)

- [Docs](https://schema.org/docs/documents.html)
- [Schemas](https://schema.org/docs/schemas.html)
- [Validate](https://validator.schema.org/)
- [About](https://schema.org/docs/about.html)

|     |     |     |
| --- | --- | --- |
| |     |     |
| --- | --- |
|  | × | | search |  |

# MedicalScholarlyArticle

A Schema.org Type

Usage:

[1K - 10K Domains\\
Based on monthly aggregations from Google's web index.](https://schema.org/docs/usage_stats.html)
(Google - August 2026)



[Thing](https://schema.org/Thing "Thing")


\>






[CreativeWork](https://schema.org/CreativeWork "CreativeWork")


\>






[Article](https://schema.org/Article "Article")


\>






[ScholarlyArticle](https://schema.org/ScholarlyArticle "ScholarlyArticle")




\>




[MedicalScholarlyArticle](https://schema.org/MedicalScholarlyArticle "MedicalScholarlyArticle")

**\[more...\]**

- Canonical URL: https://schema.org/MedicalScholarlyArticle
- [Check for open issues.](https://github.com/schemaorg/schemaorg/issues?q=is%3Aissue+is%3Aopen+MedicalScholarlyArticle)

A scholarly article in the medical domain.

| Property | Expected Type | Description |
| --- | --- | --- |
| Properties from <br> <br> <br> [MedicalScholarlyArticle](https://schema.org/MedicalScholarlyArticle "MedicalScholarlyArticle") |
| `<br>    publicationType` | [Text](https://schema.org/Text "Text") | The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html). |
| Properties from <br> <br> <br> [Article](https://schema.org/Article "Article") |
| `<br>    articleBody` | [Text](https://schema.org/Text "Text") | The actual body of the article. |
| `<br>    articleSection` | [Text](https://schema.org/Text "Text") | Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc. |
| `<br>    backstory` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[Text](https://schema.org/Text "Text") | For an [Article](https://schema.org/Article), typically a [NewsArticle](https://schema.org/NewsArticle), the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc. |
| `<br>    pageEnd` | [Integer](https://schema.org/Integer "Integer")  or <br>[Text](https://schema.org/Text "Text") | The page on which the work ends; for example "138" or "xvi". |
| `<br>    pageStart` | [Integer](https://schema.org/Integer "Integer")  or <br>[Text](https://schema.org/Text "Text") | The page on which the work starts; for example "135" or "xiii". |
| `<br>    pagination` | [Text](https://schema.org/Text "Text") | Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". |
| `<br>    speakable` | [SpeakableSpecification](https://schema.org/SpeakableSpecification "SpeakableSpecification")  or <br>[URL](https://schema.org/URL "URL") | Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.<br>The _speakable_ property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:<br>1.) _id-value_ URL references - uses _id-value_ of an element in the page being annotated. The simplest use of _speakable_ has (potentially relative) URL values, referencing identified sections of the document concerned.<br>2.) CSS Selectors - addresses content in the annotated page, e.g. via class attribute. Use the [cssSelector](https://schema.org/cssSelector) property.<br>3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [xpath](https://schema.org/xpath) property.<br>For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this<br>we define a supporting type, [SpeakableSpecification](https://schema.org/SpeakableSpecification) which is defined to be a possible value of the _speakable_ property. |
| `<br>    wordCount` | [Integer](https://schema.org/Integer "Integer") | The number of words in the text of the CreativeWork such as an Article, Book, etc. |
| Properties from <br> <br> <br> [CreativeWork](https://schema.org/CreativeWork "CreativeWork") |
| `<br>    about` | [Thing](https://schema.org/Thing "Thing") | The subject matter of an object.<br> <br> <br> <br>Inverse property: <br> <br> <br> [subjectOf](https://schema.org/subjectOf "subjectOf") |
| `<br>    abstract` | [Text](https://schema.org/Text "Text") | An abstract is a short description that summarizes a [CreativeWork](https://schema.org/CreativeWork). |
| `<br>    accessMode` | [Text](https://schema.org/Text "Text") | The human sensory perceptual system or cognitive faculty through which a person may process or perceive the intellectual content of a resource, not including any adaptations of the content (e.g., text alternatives for images). Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessMode-vocabulary). |
| `<br>    accessModeSufficient` | [ItemList](https://schema.org/ItemList "ItemList") | A list of single or combined access modes that are sufficient to understand all the intellectual content of a resource, including any adaptations. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary). |
| `<br>    accessibilityAPI` | [Text](https://schema.org/Text "Text") | Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary). |
| `<br>    accessibilityControl` | [Text](https://schema.org/Text "Text") | Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary). |
| `<br>    accessibilityFeature` | [Text](https://schema.org/Text "Text") | Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityFeature-vocabulary). |
| `<br>    accessibilityHazard` | [Text](https://schema.org/Text "Text") | A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary). |
| `<br>    accessibilitySummary` | [Text](https://schema.org/Text "Text") | A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed". |
| `<br>    accountablePerson` | [Person](https://schema.org/Person "Person") | Specifies the Person that is legally accountable for the CreativeWork. |
| `<br>    acquireLicensePage` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item. |
| `<br>    aggregateRating` | [AggregateRating](https://schema.org/AggregateRating "AggregateRating") | The overall rating, based on a collection of reviews or ratings, of the item. |
| `<br>    alternativeHeadline` | [Text](https://schema.org/Text "Text") | A secondary title of the CreativeWork. |
| `<br>    archivedAt` | [URL](https://schema.org/URL "URL")  or <br>[WebPage](https://schema.org/WebPage "WebPage") | Indicates a page or other link involved in archival of a [CreativeWork](https://schema.org/CreativeWork). In the case of [MediaReview](https://schema.org/MediaReview), the items in a [MediaReviewItem](https://schema.org/MediaReviewItem) may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content. |
| `<br>    assesses` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text") | The item being described is intended to assess the competency or learning outcome defined by the referenced term. |
| `<br>    associatedMedia` | [MediaObject](https://schema.org/MediaObject "MediaObject") | A media object that encodes this CreativeWork. This property is a synonym for encoding. |
| `<br>    audience` | [Audience](https://schema.org/Audience "Audience") | An intended audience, i.e. a group for whom something was created.<br> Supersedes <br> <br> <br> <br> [serviceAudience](https://schema.org/serviceAudience "serviceAudience"). |
| `<br>    audio` | [AudioObject](https://schema.org/AudioObject "AudioObject")  or <br>[Clip](https://schema.org/Clip "Clip")  or <br>[MusicRecording](https://schema.org/MusicRecording "MusicRecording") | An embedded audio object. |
| `<br>    author` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. |
| `<br>    award` | [Text](https://schema.org/Text "Text") | An award won by or for this item.<br> Supersedes <br> <br> <br> <br> [awards](https://schema.org/awards "awards"). |
| `<br>    character` | [Person](https://schema.org/Person "Person") | Fictional person connected with a creative work. |
| `<br>    citation` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[Text](https://schema.org/Text "Text") | A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. |
| `<br>    comment` | [Comment](https://schema.org/Comment "Comment") | Comments, typically from users. |
| `<br>    commentCount` | [Integer](https://schema.org/Integer "Integer") | The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere. |
| `<br>    conditionsOfAccess` | [Text](https://schema.org/Text "Text") | Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [ArchiveComponent](https://schema.org/ArchiveComponent) held by an [ArchiveOrganization](https://schema.org/ArchiveOrganization). This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.<br>For example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ". |
| `<br>    contentLocation` | [Place](https://schema.org/Place "Place") | The location depicted or described in the content. For example, the location in a photograph or painting. |
| `<br>    contentRating` | [Rating](https://schema.org/Rating "Rating")  or <br>[Text](https://schema.org/Text "Text") | Official rating of a piece of content—for example, 'MPAA PG-13'. |
| `<br>    contentReferenceTime` | [DateTime](https://schema.org/DateTime "DateTime") | The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event. |
| `<br>    contributor` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | A secondary contributor to the CreativeWork or Event. |
| `<br>    copyrightHolder` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | The party holding the legal copyright to the CreativeWork. |
| `<br>    copyrightNotice` | [Text](https://schema.org/Text "Text") | Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work. |
| `<br>    copyrightYear` | [Number](https://schema.org/Number "Number") | The year during which the claimed copyright for the CreativeWork was first asserted. |
| `<br>    correction` | [CorrectionComment](https://schema.org/CorrectionComment "CorrectionComment")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | Indicates a correction to a [CreativeWork](https://schema.org/CreativeWork), either via a [CorrectionComment](https://schema.org/CorrectionComment), textually or in another document. |
| `<br>    countryOfOrigin` | [Country](https://schema.org/Country "Country") | The country of origin of something, including products as well as creative works such as movie and TV content.<br>In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [CreativeWork](https://schema.org/CreativeWork) it is difficult to provide fully general guidance, and properties such as [contentLocation](https://schema.org/contentLocation) and [locationCreated](https://schema.org/locationCreated) may be more applicable.<br>In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here. |
| `<br>    creativeWorkStatus` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text") | The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle. |
| `<br>    creator` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. |
| `<br>    creditText` | [Text](https://schema.org/Text "Text") | Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work. |
| `<br>    dateCreated` | [Date](https://schema.org/Date "Date")  or <br>[DateTime](https://schema.org/DateTime "DateTime") | The date on which the CreativeWork was created or the item was added to a DataFeed. |
| `<br>    dateModified` | [Date](https://schema.org/Date "Date")  or <br>[DateTime](https://schema.org/DateTime "DateTime") | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. |
| `<br>    datePublished` | [Date](https://schema.org/Date "Date")  or <br>[DateTime](https://schema.org/DateTime "DateTime") | Date of first publication or broadcast. For example the date a [CreativeWork](https://schema.org/CreativeWork) was broadcast or a [Certification](https://schema.org/Certification) was issued. |
| `<br>    digitalSourceType` | [IPTCDigitalSourceEnumeration](https://schema.org/IPTCDigitalSourceEnumeration "IPTCDigitalSourceEnumeration") | Indicates an IPTCDigitalSourceEnumeration code indicating the nature of the digital source(s) for some [CreativeWork](https://schema.org/CreativeWork). |
| `<br>    discussionUrl` | [URL](https://schema.org/URL "URL") | A link to the page containing the comments of the CreativeWork. |
| `<br>    displayLocation` | [Place](https://schema.org/Place "Place") | The location at which an item can be viewed or experienced in-person. |
| `<br>    editEIDR` | [Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [identifier](https://schema.org/identifier) representing a specific edit / edition for a work of film or television.<br>For example, the motion picture known as "Ghostbusters" whose [titleEIDR](https://schema.org/titleEIDR) is "10.5240/7EC7-228A-510A-053E-CBB8-J" has several edits, e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".<br>Since schema.org types like [Movie](https://schema.org/Movie) and [TVEpisode](https://schema.org/TVEpisode) can be used for both works and their multiple expressions, it is possible to use [titleEIDR](https://schema.org/titleEIDR) alone (for a general description), or alongside [editEIDR](https://schema.org/editEIDR) for a more edit-specific description. |
| `<br>    editor` | [Person](https://schema.org/Person "Person") | Specifies the Person who edited the CreativeWork. |
| `<br>    educationalAlignment` | [AlignmentObject](https://schema.org/AlignmentObject "AlignmentObject") | An alignment to an established educational framework.<br>This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [teaches](https://schema.org/teaches) or [assesses](https://schema.org/assesses) a competency. |
| `<br>    educationalLevel` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. |
| `<br>    educationalUse` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text") | The purpose of a work in the context of education; for example, 'assignment', 'group work'. |
| `<br>    encoding` | [MediaObject](https://schema.org/MediaObject "MediaObject") | A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.<br> Supersedes <br> <br> <br> <br> [encodings](https://schema.org/encodings "encodings").<br> <br> <br>Inverse property: <br> <br> <br> [encodesCreativeWork](https://schema.org/encodesCreativeWork "encodesCreativeWork") |
| `<br>    encodingFormat` | [Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.<br>In cases where a [CreativeWork](https://schema.org/CreativeWork) has several media type representations, [encoding](https://schema.org/encoding) can be used to indicate each [MediaObject](https://schema.org/MediaObject) alongside particular [encodingFormat](https://schema.org/encodingFormat) information.<br>Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.<br> Supersedes <br> <br> <br> <br> [fileFormat](https://schema.org/fileFormat "fileFormat"). |
| `<br>    exampleOfWork` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork") | A creative work that this work is an example/instance/realization/derivation of.<br> <br> <br> <br>Inverse property: <br> <br> <br> [workExample](https://schema.org/workExample "workExample") |
| `<br>    expires` | [Date](https://schema.org/Date "Date")  or <br>[DateTime](https://schema.org/DateTime "DateTime") | Date the content expires and is no longer useful or available. For example a [VideoObject](https://schema.org/VideoObject) or [NewsArticle](https://schema.org/NewsArticle) whose availability or relevance is time-limited, a [ClaimReview](https://schema.org/ClaimReview) fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [Certification](https://schema.org/Certification) the validity has expired. |
| `<br>    funder` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | A person or organization that supports (sponsors) something through some kind of financial contribution. |
| `<br>    funding` | [Grant](https://schema.org/Grant "Grant") | A [Grant](https://schema.org/Grant) that directly or indirectly provide funding or sponsorship for this item. See also [ownershipFundingInfo](https://schema.org/ownershipFundingInfo).<br> <br> <br> <br>Inverse property: <br> <br> <br> [fundedItem](https://schema.org/fundedItem "fundedItem") |
| `<br>    genre` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | Genre of the creative work, broadcast channel or group. |
| `<br>    hasPart` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork") | Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).<br> <br> <br> <br>Inverse property: <br> <br> <br> [isPartOf](https://schema.org/isPartOf "isPartOf") |
| `<br>    headline` | [Text](https://schema.org/Text "Text") | Headline of the article. |
| `<br>    inLanguage` | [Language](https://schema.org/Language "Language")  or <br>[Text](https://schema.org/Text "Text") | The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [availableLanguage](https://schema.org/availableLanguage).<br> Supersedes <br> <br> <br> <br> [language](https://schema.org/language "language"). |
| `<br>    interactionStatistic` | [InteractionCounter](https://schema.org/InteractionCounter "InteractionCounter") | The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.<br> Supersedes <br> <br> <br> <br> [interactionCount](https://schema.org/interactionCount "interactionCount"). |
| `<br>    interactivityType` | [Text](https://schema.org/Text "Text") | The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'. |
| `<br>    interpretedAsClaim` | [Claim](https://schema.org/Claim "Claim") | Used to indicate a specific claim contained, implied, translated or refined from the content of a [MediaObject](https://schema.org/MediaObject) or other [CreativeWork](https://schema.org/CreativeWork). The interpreting party can be indicated using [claimInterpreter](https://schema.org/claimInterpreter). |
| `<br>    isAccessibleForFree` | [Boolean](https://schema.org/Boolean "Boolean") | A flag to signal that the item, event, or place is accessible for free.<br> Supersedes <br> <br> <br> <br> [free](https://schema.org/free "free"). |
| `<br>    isBasedOn` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[Product](https://schema.org/Product "Product")  or <br>[URL](https://schema.org/URL "URL") | A resource from which this work is derived or from which it is a modification or adaptation.<br> Supersedes <br> <br> <br> <br> [isBasedOnUrl](https://schema.org/isBasedOnUrl "isBasedOnUrl"). |
| `<br>    isFamilyFriendly` | [Boolean](https://schema.org/Boolean "Boolean") | Indicates whether this content is family friendly. |
| `<br>    isPartOf` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.<br> <br> <br> <br>Inverse property: <br> <br> <br> [hasPart](https://schema.org/hasPart "hasPart") |
| `<br>    keywords` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property. |
| `<br>    learningResourceType` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text") | The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'. |
| `<br>    license` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | A license document that applies to this content, typically indicated by URL. |
| `<br>    locationCreated` | [Place](https://schema.org/Place "Place") | The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork. |
| `<br>    mainEntity` | [Thing](https://schema.org/Thing "Thing") | Indicates the primary entity described in some page or other CreativeWork.<br> <br> <br> <br>Inverse property: <br> <br> <br> [mainEntityOfPage](https://schema.org/mainEntityOfPage "mainEntityOfPage") |
| `<br>    maintainer` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | A maintainer of a [Dataset](https://schema.org/Dataset), software package ( [SoftwareApplication](https://schema.org/SoftwareApplication)), or other [Project](https://schema.org/Project). A maintainer is a [Person](https://schema.org/Person) or [Organization](https://schema.org/Organization) that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [maintainer](https://schema.org/maintainer) is applied to a specific version of something e.g. a particular version or packaging of a [Dataset](https://schema.org/Dataset), it is always possible that the upstream source has a different maintainer. The [isBasedOn](https://schema.org/isBasedOn) property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work. |
| `<br>    material` | [Product](https://schema.org/Product "Product")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | A material that something is made from, e.g. leather, wool, cotton, paper. |
| `<br>    materialExtent` | [QuantitativeValue](https://schema.org/QuantitativeValue "QuantitativeValue")  or <br>[Text](https://schema.org/Text "Text") | The quantity of the materials being described or an expression of the physical space they occupy. |
| `<br>    mentions` | [Thing](https://schema.org/Thing "Thing") | Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept. |
| `<br>    offers` | [Demand](https://schema.org/Demand "Demand")  or <br>[Offer](https://schema.org/Offer "Offer") | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [businessFunction](https://schema.org/businessFunction) to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [Demand](https://schema.org/Demand). While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.<br> <br> <br> <br>Inverse property: <br> <br> <br> [itemOffered](https://schema.org/itemOffered "itemOffered") |
| `<br>    pattern` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text") | A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. |
| `<br>    position` | [Integer](https://schema.org/Integer "Integer")  or <br>[Text](https://schema.org/Text "Text") | The position of an item in a series or sequence of items. |
| `<br>    producer` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | The person or organization who produced the work (e.g. music album, movie, TV/radio series etc.). |
| `<br>    provider` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.<br> Supersedes <br> <br> <br> <br> [carrier](https://schema.org/carrier "carrier"). |
| `<br>    publication` | [PublicationEvent](https://schema.org/PublicationEvent "PublicationEvent") | A publication event associated with the item. |
| `<br>    publisher` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | The publisher of the article in question. |
| `<br>    publisherImprint` | [Organization](https://schema.org/Organization "Organization") | The publishing division which published the comic. |
| `<br>    publishingPrinciples` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | The publishingPrinciples property indicates (typically via [URL](https://schema.org/URL)) a document describing the editorial principles of an [Organization](https://schema.org/Organization) (or individual, e.g. a [Person](https://schema.org/Person) writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [CreativeWork](https://schema.org/CreativeWork) (e.g. [NewsArticle](https://schema.org/NewsArticle)) the principles are those of the party primarily responsible for the creation of the [CreativeWork](https://schema.org/CreativeWork).<br>While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [funder](https://schema.org/funder)) can be expressed using schema.org terminology. |
| `<br>    recordedAt` | [Event](https://schema.org/Event "Event") | The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.<br> <br> <br> <br>Inverse property: <br> <br> <br> [recordedIn](https://schema.org/recordedIn "recordedIn") |
| `<br>    releasedEvent` | [PublicationEvent](https://schema.org/PublicationEvent "PublicationEvent") | The place and time the release was issued, expressed as a PublicationEvent. |
| `<br>    review` | [Review](https://schema.org/Review "Review") | A review of the item.<br> Supersedes <br> <br> <br> <br> [reviews](https://schema.org/reviews "reviews"). |
| `<br>    schemaVersion` | [Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to<br> indicate the use of a specific schema.org release, e.g. `10.0` as a simple string, or more explicitly via URL, `https://schema.org/docs/releases.html#v10.0`. There may be situations in which other schemas might usefully be referenced this way, e.g. `http://dublincore.org/specifications/dublin-core/dces/1999-07-02/` but this has not been carefully explored in the community. |
| `<br>    sdDatePublished` | [Date](https://schema.org/Date "Date") | Indicates the date on which the current structured data was generated / published. Typically used alongside [sdPublisher](https://schema.org/sdPublisher). |
| `<br>    sdLicense` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | A license document that applies to this structured data, typically indicated by URL. |
| `<br>    sdPublisher` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The<br>[sdPublisher](https://schema.org/sdPublisher) property helps make such practices more explicit. |
| `<br>    size` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[QuantitativeValue](https://schema.org/QuantitativeValue "QuantitativeValue")  or <br>[SizeSpecification](https://schema.org/SizeSpecification "SizeSpecification")  or <br>[Text](https://schema.org/Text "Text") | A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured [SizeSpecification](https://schema.org/SizeSpecification); in other cases, the [width](https://schema.org/width), [height](https://schema.org/height), [depth](https://schema.org/depth) and [weight](https://schema.org/weight) properties may be more applicable. |
| `<br>    sourceOrganization` | [Organization](https://schema.org/Organization "Organization") | The Organization on whose behalf the creator was working. |
| `<br>    spatial` | [Place](https://schema.org/Place "Place") | The "spatial" property can be used in cases when more specific properties<br>(e.g. [locationCreated](https://schema.org/locationCreated), [spatialCoverage](https://schema.org/spatialCoverage), [contentLocation](https://schema.org/contentLocation)) are not known to be appropriate. |
| `<br>    spatialCoverage` | [Place](https://schema.org/Place "Place") | The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of<br> contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates<br> areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York. |
| `<br>    sponsor` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. |
| `<br>    teaches` | [DefinedTerm](https://schema.org/DefinedTerm "DefinedTerm")  or <br>[Text](https://schema.org/Text "Text") | The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. |
| `<br>    temporal` | [DateTime](https://schema.org/DateTime "DateTime")  or <br>[Text](https://schema.org/Text "Text") | The "temporal" property can be used in cases where more specific properties<br>(e.g. [temporalCoverage](https://schema.org/temporalCoverage), [dateCreated](https://schema.org/dateCreated), [dateModified](https://schema.org/dateModified), [datePublished](https://schema.org/datePublished)) are not known to be appropriate. |
| `<br>    temporalCoverage` | [DateTime](https://schema.org/DateTime "DateTime")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In<br> the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content, e.g. ScholarlyArticle, Book, TVSeries or TVEpisode, may indicate their temporalCoverage in broader terms - textually or via well-known URL.<br> Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".<br>Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.<br> Supersedes <br> <br> <br> <br> [datasetTimeInterval](https://schema.org/datasetTimeInterval "datasetTimeInterval"). |
| `<br>    text` | [Text](https://schema.org/Text "Text") | The textual content of this CreativeWork. |
| `<br>    thumbnail` | [ImageObject](https://schema.org/ImageObject "ImageObject") | Thumbnail image for an image or video. |
| `<br>    thumbnailUrl` | [URL](https://schema.org/URL "URL") | A thumbnail image relevant to the Thing. |
| `<br>    timeRequired` | [Duration](https://schema.org/Duration "Duration") | Approximate or typical time it usually takes to work with or through the content of this work for the typical or target audience. |
| `<br>    translationOfWork` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork") | The work that this work has been translated from. E.g. 物种起源 is a translationOf “On the Origin of Species”.<br> <br> <br> <br>Inverse property: <br> <br> <br> [workTranslation](https://schema.org/workTranslation "workTranslation") |
| `<br>    translator` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event. |
| `<br>    typicalAgeRange` | [Text](https://schema.org/Text "Text") | The typical expected age range, e.g. '7-9', '11-'. |
| `<br>    usageInfo` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | The schema.org [usageInfo](https://schema.org/usageInfo) property indicates further information about a [CreativeWork](https://schema.org/CreativeWork). This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.<br>This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses. |
| `<br>    version` | [Number](https://schema.org/Number "Number")  or <br>[Text](https://schema.org/Text "Text") | The version of the CreativeWork embodied by a specified resource. |
| `<br>    video` | [Clip](https://schema.org/Clip "Clip")  or <br>[VideoObject](https://schema.org/VideoObject "VideoObject") | An embedded video object. |
| `<br>    wordCount` | [Integer](https://schema.org/Integer "Integer") | The number of words in the text of the CreativeWork such as an Article, Book, etc. |
| `<br>    workExample` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork") | Example/instance/realization/derivation of the concept of this creative work. E.g. the paperback edition, first edition, or e-book.<br> <br> <br> <br>Inverse property: <br> <br> <br> [exampleOfWork](https://schema.org/exampleOfWork "exampleOfWork") |
| `<br>    workTranslation` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork") | A work that is a translation of the content of this work. E.g. 西遊記 has an English workTranslation “Journey to the West”, a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese translation Tây du ký bình khảo.<br> <br> <br> <br>Inverse property: <br> <br> <br> [translationOfWork](https://schema.org/translationOfWork "translationOfWork") |
| Properties from <br> <br> <br> [Thing](https://schema.org/Thing "Thing") |
| `<br>    additionalType` | [Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the<br> use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org [style guide](https://schema.org/docs/styleguide.html). |
| `<br>    alternateName` | [Text](https://schema.org/Text "Text") | An alias for the item. |
| `<br>    description` | [Text](https://schema.org/Text "Text")  or <br>[TextObject](https://schema.org/TextObject "TextObject") | A description of the item. |
| `<br>    disambiguatingDescription` | [Text](https://schema.org/Text "Text") | A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. |
| `<br>    identifier` | [PropertyValue](https://schema.org/PropertyValue "PropertyValue")  or <br>[Text](https://schema.org/Text "Text")  or <br>[URL](https://schema.org/URL "URL") | The identifier property represents any kind of identifier for any kind of [Thing](https://schema.org/Thing), such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](https://schema.org/docs/datamodel.html#identifierBg) for more details. |
| `<br>    image` | [ImageObject](https://schema.org/ImageObject "ImageObject")  or <br>[URL](https://schema.org/URL "URL") | An image of the item. This can be a [URL](https://schema.org/URL) or a fully described [ImageObject](https://schema.org/ImageObject). |
| `<br>    mainEntityOfPage` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[URL](https://schema.org/URL "URL") | Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](https://schema.org/docs/datamodel.html#mainEntityBackground) for details.<br> <br> <br> <br>Inverse property: <br> <br> <br> [mainEntity](https://schema.org/mainEntity "mainEntity") |
| `<br>    name` | [Text](https://schema.org/Text "Text") | The name of the item. |
| `<br>    owner` | [Organization](https://schema.org/Organization "Organization")  or <br>[Person](https://schema.org/Person "Person") | A person or organization who owns this Thing.<br> <br> <br> <br>Inverse property: <br> <br> <br> [owns](https://schema.org/owns "owns") |
| `<br>    potentialAction` | [Action](https://schema.org/Action "Action") | Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. |
| `<br>    sameAs` | [URL](https://schema.org/URL "URL") | URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. |
| `<br>    subjectOf` | [CreativeWork](https://schema.org/CreativeWork "CreativeWork")  or <br>[Event](https://schema.org/Event "Event") | A CreativeWork or Event about this Thing.<br> <br> <br> <br>Inverse property: <br> <br> <br> [about](https://schema.org/about "about") |
| `<br>    url` | [URL](https://schema.org/URL "URL") | URL of the item. |

### Examples

![Copy to clipboard](https://schema.org/docs/clipboard/clippy.svg)[Example 1](https://schema.org/MedicalScholarlyArticle#eg-0222 "Link: #eg-0222")

Copied

No MarkupMicrodataRDFaJSON-LDStructure

Example notes or example HTML without markup.

```html
<h1>New guidelines for metformin and diabetes mellitus</h1>

<p>Dr. John Smith

<br>Medical University

<br>2012-03-24</p>

<p><b>Abstract:</b>

We review clinical evidence related to the use of metformin for

treatment of type-2 diabetes mellitus and provide new clinical guideline

recommendations.</p>

<p><b>MeSH subject headings:</b> Metformin; Diabetes Mellitus, Type 2</p>

...

<h3>Guidelines</h3>

Recommendation: we recommend monotherapy with metformin as an initial

pharmacologic therapy to treat most patients with type 2 diabetes

(Grade: strong recommendation; high-quality evidence).
```

Example encoded as [Microdata](https://en.wikipedia.org/wiki/Microdata_(HTML)) embedded in HTML.

```html
<div itemscope itemtype="https://schema.org/MedicalScholarlyArticle">

  <link itemprop="audience" href="https://schema.org/Clinician"/>

  <meta itemprop="publicationType" content="Meta-Analysis"/>

  <h1><span itemprop="name">New guidelines for metformin and

      diabetes mellitus</span></h1>

  <p><span itemprop="author" itemscope itemtype="https://schema.org/Person">

    <span itemprop="name">Dr. John Smith</span>

    <br><span itemprop="affiliation">Medical University</span>

  </span>

  <br><span itemprop="datePublished">2012-03-24</span></p>

  <p><b>Abstract:</b>

  <span itemprop="description">We review clinical evidence related to the use of metformin for

  treatment of type-2 diabetes mellitus and provide new clinical guideline

  recommendations.</span></p>

  <p><b>MeSH subject headings:</b>

  <span itemprop="about" itemscope itemtype="https://schema.org/Drug">

    <span itemprop="name">Metformin</span>

    <span itemprop="code" itemscope

          itemtype="https://schema.org/MedicalCode"

          itemid="http://www.ncbi.nlm.nih.gov/mesh/D02.078.370.141.450">

      <!-- Note: use of itemid is not mandatory, but recommended when an

           external enumeration is available -->

      <meta itemprop="code" content="D02.078.370.141.450"/>

      <meta itemprop="codingSystem" content="MeSH"/>

    </span>

  </span>;

  <span itemprop="about" itemscope itemtype="https://schema.org/MedicalCondition">

    <span itemprop="name">Diabetes Mellitus, Type 2</span>

    <span itemprop="code" itemscope

          itemtype="https://schema.org/MedicalCode"

          itemid="http://www.ncbi.nlm.nih.gov/mesh/C18.452.394.750.149">

      <!-- Note: use of itemid is not mandatory, but recommended when an

           external enumeration is available -->

      <meta itemprop="code" content="C18.452.394.750.149"/>

      <meta itemprop="codingSystem" content="MeSH"/>

    </span>

  </span></p>

  ...

  <h3>Guidelines</h3>

  <span itemscope itemtype="https://schema.org/MedicalGuidelineRecommendation">

    Recommendation: we recommend monotherapy with

    <span itemprop="guidelineSubject">metformin</span> as an initial pharmacologic therapy

    to treat most patients with <span itemprop="guidelineSubject">type 2 diabetes</span>

    (Grade: <span itemprop="recommendationStrength">strong recommendation</span>;

    <a itemprop="evidenceLevel" href="https://schema.org/EvidenceLevelA">high-quality

      evidence</a>).

  </span>

</div>
```

Example encoded as [RDFa](https://en.wikipedia.org/wiki/RDFa) embedded in HTML.

```html
<div vocab="https://schema.org/" typeof="MedicalScholarlyArticle">

  <link property="audience" href="https://schema.org/Clinician"/>

  <meta property="publicationType" content="Meta-Analysis"/>

  <h1><span property="name">New guidelines for metformin and

      diabetes mellitus</span></h1>

  <p><span property="author"  typeof="Person">

    <span property="name">Dr. John Smith</span>

    <br><span property="affiliation">Medical University</span>

  </span>

  <br><span property="datePublished">2012-03-24</span></p>

  <p><b>Abstract:</b>

  <span property="description">We review clinical evidence related to the use of metformin for

  treatment of type-2 diabetes mellitus and provide new clinical guideline

  recommendations.</span></p>

  <p><b>MeSH subject headings:</b>

  <span property="about"  typeof="Drug">

    <span property="name">Metformin</span>

    <span property="code"  typeof="MedicalCode"

          resource="http://www.ncbi.nlm.nih.gov/mesh/D02.078.370.141.450">

      <!-- Note: use of itemid is not mandatory, but recommended when an

           external enumeration is available -->

      <meta property="code" content="D02.078.370.141.450"/>

      <meta property="codingSystem" content="MeSH"/>

    </span>

  </span>;

  <span property="about"  typeof="MedicalCondition">

    <span property="name">Diabetes Mellitus, Type 2</span>

    <span property="code"  typeof="MedicalCode"

          resource="http://www.ncbi.nlm.nih.gov/mesh/C18.452.394.750.149">

      <!-- Note: use of itemid is not mandatory, but recommended when an

           external enumeration is available -->

      <meta property="code" content="C18.452.394.750.149"/>

      <meta property="codingSystem" content="MeSH"/>

    </span>

  </span>

  </p>

  ...

  <h3>Guidelines</h3>

  <span  typeof="MedicalGuidelineRecommendation">

    Recommendation: we recommend monotherapy with

    <span property="guidelineSubject">metformin</span> as an initial pharmacologic therapy

    to treat most patients with <span property="guidelineSubject">type 2 diabetes</span>

    (Grade: <span property="recommendationStrength">strong recommendation</span>;

    <a property="evidenceLevel" href="https://schema.org/EvidenceLevelA">high-quality

      evidence</a>).

  </span>

</div>
```

Example encoded as [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) in a HTML script tag.

```html
<script type="application/ld+json">

{

  "@context": "https://schema.org",

  "@type": "MedicalScholarlyArticle",

  "about": [\
\
    {\
\
      "@type": "Drug",\
\
      "code": {\
\
        "@id": "http://www.ncbi.nlm.nih.gov/mesh/D02.078.370.141.450",\
\
        "@type": "MedicalCode",\
\
        "code": "D02.078.370.141.450",\
\
        "codingSystem": "MeSH"\
\
      },\
\
      "name": "Metformin"\
\
    },\
\
    {\
\
      "@type": "MedicalCondition",\
\
      "name": "Diabetes Mellitus, Type 2"\
\
    }\
\
  ],

  "audience": "https://schema.org/Clinician",

  "author": {

    "@type": "Person",

    "affiliation": "Medical University",

    "name": "Dr. John Smith"

  },

  "datePublished": "2012-03-24",

  "description": "We review clinical evidence related to the use of metformin for treatment of type-2 diabetes mellitus and provide new clinical guideline recommendations.",

  "name": "New guidelines for metformin and diabetes mellitus",

  "publicationType": "Meta-Analysis"

  }

</script>
```

Structured representation of the JSON-LD example.

{
"@context": "https://schema.org",
"@type": "MedicalScholarlyArticle",
"about": \[\
{\
"@type": "Drug",\
"code": {\
"@id": "http://www.ncbi.nlm.nih.gov/mesh/D02.078.370.141.450",\
"@type": "MedicalCode",\
"code": "D02.078.370.141.450",\
"codingSystem": "MeSH"\
},\
"name": "Metformin"\
},\
{\
"@type": "MedicalCondition",\
"name": "Diabetes Mellitus, Type 2"\
}\
\],
"audience": "https://schema.org/Clinician",
"author": {
"@type": "Person",
"affiliation": "Medical University",
"name": "Dr. John Smith"
},
"datePublished": "2012-03-24",
"description": "We review clinical evidence related to the use of metformin for treatment of type-2 diabetes mellitus and provide new clinical guideline recommendations.",
"name": "New guidelines for metformin and diabetes mellitus",
"publicationType": "Meta-Analysis"
}

|     |     |
| --- | --- |
|  |  |