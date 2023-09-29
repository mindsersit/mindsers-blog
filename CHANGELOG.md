# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

-   Update footer link with up-to-date data
-   Fix events when someone click on Cookie Consent after he already gave a consent
-   Remove account management feature to externalize them

## [3.7.2] - 2023-01-02

### Fixed

-   Fix typos

## [3.7.1] - 2023-01-01

### Changed

-   Update welcome pages' text.

### Fixed

-   Fixed typos on perks.

## [3.7.0] - 2023-01-01

### Added

-   Profile is now able to show which perks the user has access to
-   Add new perks to the list. Update the old ones.
-   Add a subscribe form on the homepage.

### Changed

-   Translate the post CTA.
-   Update the text on the plans page to match last communications.

### Fixed

-   Featured images were too zoomed.
-   Premium badges were not displayed correctly due to tiers.

## [3.6.0] - 2022-08-26

### Added

-   New section on profile page to explain the comments feature

### Changed

-   Allow plan changes from complementary plan

### Fixed

-   Remove and correct typos

## [3.5.1] - 2022-08-26

### Fixed

-   Upgrade of all the deprecated deps

## [3.5.0] - 2022-08-26

### Added

-   Add a direct link to the perks list in the menu

### Changed

-   Simpler user flow for comments. The comments feature isn't handle by Commento anymore but Ghost.
    Users doesn't have to log twice (ghost + commento) to be able to comment.

## [3.4.0] - 2022-07-27

### Added

-   New button on the main menu for search feature
-   Display a discount link on the plan page.

### Changed

-   Open shop in a new tab

### Removed

-   No more link to patreon anymore.

## [3.3.0] - 2022-06-06

### Added

-   New warning paragraph on welcome pages about email languages
-   New options on profile page to help subscribers to update their plans
-   Show additional information about the current subscription

### Fixed

-   Directly redirect to portal newsletter settings when clicking on "email preferences"
-   Fix the display issue on the profile image on small screen
-   Move the shop button into the more menu on small screen

## [3.2.0] - 2022-06-06

### Added

-   New question in the plans FAQ
-   New disclaimer (newsletter plan do not five access to blog posts) in newsletter plans
-   New welcome pages for new plans
-   New RSS feeds for premium content list

### Changed

-   The newsletter load plans content from the API too
-   Premium content is more accessible from the profile page
-   Improve the visibility of the link to update the profile picture

### Fixed

-   Fix button text color in dark mode (plans)
-   Show the selected tier on the newsletter page even if it is not visible in portal

## [3.1.1] - 2022-06-06

### Changed

-   Update the plans description wording
-   The CTA now adapts the strings for post only visible for specific tiers

### Fixed

-   Price button are not readable. Display them in white.
-   Fix subscribe button of the CTA to lunch stripe again

## [3.1.0] - 2022-06-06

### Added

-   Show a fallback message to redirect users to membership when no specific tier is selected for newsletter

### Changed

-   Improve the newsletter page wording (better English)
-   Make the shop button optional
-   Make the login button looks like a less important link when the shop button is displayed

### Removed

-   The signup form does not handle language anymore.
    Language will be handled with Email Preferences in the profile page

## [3.0.1] - 2022-06-06

### Fixed

-   Add or remove specific option for Ghost v5
-   Upgrade deps to make CI pass

## [3.0.0] - 2022-06-06

### Added

-   Add a new link to change profile picture. Link on the PP.
-   New link to edit the billing information on the profile page
-   Support for the new tiers feature of Ghost
-   It is now possible to use custom theme settings to indicate the favourite tier.
-   New toggle switch to switch between monthly and yearly plans
-   New theme custom field to select the plan to show on the newsletter page
-   On the profile page, add a link to change the email preferences of the user

### Changed

-   The "legal notices" link in the footer now redirect to an internal page of Mindsers Blog
-   The perk section on the profile page is now seperated by a strong line and a title to make it more identifiable
-   [BREAKING] The theme doesn't support Ghost version lower than v5

### Fixed

-   Hide the email archives from the exclusive content page
-   When clicking back on Stripe forms, the user comes back to the correct page (membership, etc)

## [2.13.0] - 2021-11-01

### Added

-   Display a box to ask user consent on usage of cookies
-   Created a new page to list all the premium content available
-   Add sections on profile page to better explain the premium rewards
    to premium members
-   Add a setting in ghost admin to activate or deactivate
    the cookie consent box. Default to false (deactivated)

### Changed

-   Display a disclaimer message at the beggining of a sponsored post

### Fixed

-   Use only one column to display data on profile when the screen is small

## [2.12.0] - 2021-09-21

### Added

-   New section to let premium subscriber send messages from their profile page
-   New section to give member info about the discord server on their profile page

### Changed

-   Improve the wording of the plans
-   Add information about the premium membership

## [2.11.0] - 2021-09-20

### Added

-   A "no span" message was added below the subscribe buttons of plan pages
-   New CTA message displayed on top of articles. When user is paid member, it displays a thank you message.

### Changed

-   Make the "Subscribe" button more visible on content-cta block
-   Trigger a direct stripe checkout from the post page when a user click on the subscribe button of the content-cta block
-   Add a new "See plans" link on the content-cta block

### Fixed

-   Translate footer
-   Hide the tags list on newsletter issue (there is no tag on issue)
-   Improve the post title when no featured image is available

## [2.10.0] - 2021-08-27

### Added

-   Display tag list on posts

### Changed

-   Welcome and profile pages are now below the robots "no-index" rule

## [2.9.1] - 2021-08-26

### Fixed

-   Declare hreflang using canonical URL only if canonical URL exists

## [2.9.0] - 2021-08-26

### Added

-   New automatic x-default declaration for English posts

### Changed

-   Use canonical URL instead of URL in automatic lang declaration

### Fixed

-   Match the html lang attribute and hreflang declaration

## [2.8.0] - 2021-08-22

### Added

-   Automatically add the meta[hreflang] tag for the current language
-   Display the previous post's link and the next post's link below current post
-   A badge appears on post list when #addtional-content is used and
    the access level is paid member-only
-   The Premuim CTA changes when the #additional-content is used. Let people know
    that additional content is available if they subscribe.

## [2.7.0] - 2021-07-02

### Added

-   Create a new FAQ section on plan pages
-   Configure breakpoint for reponsive images

### Changed

-   Customize every meta title

### Fixed

-   Fix typos on welcome page for premium members
-   Make footer text bigger on mobile devices

## [2.6.0] - 2021-07-01

### Added

-   Create a welcome page for new members
-   Create a welcome page specifically for premium members

### Fixed

-   Issue cards are now styled on newsletter page

## [2.5.0] - 2021-07-01

### Added

-   New link to rss feed in the section title of the homepage
-   New link to rss feed in the title of posts index pages
-   A meta linking to the rss feed is adding on home and index pages

### Changed

-   Change the quote character used in testimonials to match the ones used in posts

### Fixed

-   Hide testimonials again

## [2.4.0] - 2021-07-01

### Added

-   New testimonial from @aartwix
-   New testimonial from @maevatravelandfood

### Fixed

-   Improve testimonials positionning
-   Add missing label and aria-\* attributes on homepage

## [2.3.0] - 2021-06-30

### Changed

-   Display only public posts on authors page
-   Javascript execution is faster on posts

### Fixed

-   Avoid redirecting for "issues" urls
-   Display a pagination on authors page
-   Hide fake recommandations
-   Videos are shown in full height

## [2.2.0] - 2021-06-30

### Added

-   Illustrated the error pages
-   Style subscription on profile page

### Fixed

-   Move hero image at the top of page on small screen
-   Display success and error message on log in form

## [2.1.0] - 2021-06-30

### Added

-   Design and style the author page
-   New image in the hero header

### Changed

-   Redirection uses YAML format
-   Collections use singular version for the url (`/posts/slug/` => `/post/slug/`)

### Fixed

-   Improve the responsiveness of the CTA's text

## [2.0.2] - 2021-06-29

### Fixed

-   No featured image on pages
-   Do no force height on images on posts

## [2.0.1] - 2021-06-29

### Fixed

-   Hide menu for mobile on bigger screens

## [2.0.0] - 2021-06-29

### Changed

-   **[BREAKING CHANGE]** Complete re-write of the theme.

## [1.7.5] - 2021-04-02

### Fixed

-   Add again the EUR symbol which was removed by Ghost in version 4

## [1.7.4] - 2021-01-14

### Fixed

-   Removed a development test string

## [1.7.3] - 2021-01-05

### Fixed

-   Update the last occurence of `/pricing/`

## [1.7.2] - 2021-01-05

### Fixed

-   Remove typos

## [1.7.1] - 2021-01-04

### Changed

-   Change pricing page for a membership page

### Fixed

-   Re-create the RSS feed at website root with both French and English posts.
-   Update Twitter link in the footer

## [1.7.0] - 2021-01-04

### Added

-   Create topic hubs (tech, misc, coffee shops)
-   New "complex" menu to improve navigation
-   Support for paid posts (paywall, etc)
-   Support for members (login, signup, etc)
-   New a message CTA before public posts
-   Dark mode by system preferences
-   New simple homepage in French

### Changed

-   Simplify templates and avoid some duplicate templates by language
-   New minimal header for index pages

### Removed

-   No more classic translation using ghost HBS tag

### Fixed

-   Remove typos
-   Updated link to intagram
-   Change all nathanaelcherrier.com occurences to nathanaelcherrier.dev
-   Change all blog.nathanaelcherrier.com occurences to mindsers.blog

## [1.6.0] - 2020-11-13

### Added

-   New search bar on the header

### Changed

-   The subscibe block register people in ghost (not mailchimp anymore)

### Fixed

-   Make the subscribe block looks better
-   Fix Google Analytics

## [1.5.1] - 2020-10-06

### Fixed

-   Prefer the asset tag over using relative path (even in the js code)
-   Fix the design of the bookmarked link

## [1.5.0] - 2020-06-14

### Changed

-   Remove useless link to old iOS apps in the footer
-   Add support for web monetization

## [1.4.3] - 2019-10-25

### Fixed

-   Display newsletter button the right way

## [1.4.2] - 2019-10-25

### Fixed

-   CI uses another theme name for the zip

## [1.4.1] - 2019-10-25

### Added

-   `@mindsersit/blog` is now deployed automatically on new releases

### Fixed

-   User can signup to the newsletter again
-   Hide related tag on english posts

## [1.4.0] - 2019-10-24

### Changed

-   Update prismjs dependency (#9)
-   Support for Ghost v3 (#13)
    -   **BREAKING CHANGE**: Drop support Ghost v0.10
    -   see #12 for the complete changelog

### Fixed

-   PHP is highlighted again (#9)
-   Display link to headers (#11)
-   Hide the "related tags" section on pages (#15)
-   Preview posts doesn't load the comments from discourse (#7, #16)

## [1.3.1] - 2019-05-29

### Changed

-   Ghost menu is not displayed anymore

### Fixed

-   Instagram cards are centered
-   Related tags block have a fixed size
-   Comments zone is not display on pages

## [1.3.0] - 2019-05-22

### Added

-   Discourse integration (Users can now leave comment on blog posts)

### Changed

-   Blog's name is not displayed on the header anymore. The header display "Nathanael Cherrier".
-   Post date is displayed on mobile devices

### Fixed

-   Fix a grammar mistake on english language band

## [1.2.0] - 2019-03-20

### Added

-   Font optimizations
-   Add a black block on front of headings
-   New ad bar for enforce supporting from reader
-   Add link to legal notices

### Changed

-   Update style for title headings
-   Use the new content API v2 from Ghost

### Fixed

-   Fix link to nathanaelcherrier.com depending on the locale

## [1.1.3] - 2019-03-03

### Fixed

-   Add missing translation string
-   Fix bad language filter on featured posts list

## [1.1.2] - 2018-12-25

### Fixed

-   Call inlcudes/post-card instead of post-card in author.hbs ans tag.hbs

## [1.1.1] - 2018-10-29

### Fixed

-   French post show the alternative language version box

## [1.1.0] - 2018-10-07

### Added

-   English collection at /en/
-   English post with path beginning with /en/
-   Link on titles
-   Blockquote are surround with double quotes now
-   Posts show the alternative version (English -> French; French -> English)

### Changed

-   Ending message contains a call to action for Patreon

### Fixed

-   Blockquote apparence since 2.0
-   Embeded content since 2.0

## [1.0.1] - 2018-07-11

### Fixed

-   downsize code
-   downsize blue header bloc
-   fix post-card links to tags
-   force input corner with radius to 0 (subscribe)

## [1.0.0] - 2018-07-11

### Added

-   First version of the website

[unreleased]: https://github.com/mindsers/mindsersit-blog/compare/v3.7.2...HEAD
[3.7.2]: https://github.com/mindsers/mindsersit-blog/compare/v3.7.1...v3.7.2
[3.7.1]: https://github.com/mindsers/mindsersit-blog/compare/v3.7.0...v3.7.1
[3.7.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.6.0...v3.7.0
[3.6.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.5.1...v3.6.0
[3.5.1]: https://github.com/mindsers/mindsersit-blog/compare/v3.5.0...v3.5.1
[3.5.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.4.0...v3.5.0
[3.4.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.3.0...v3.4.0
[3.3.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.1.1...v3.2.0
[3.1.1]: https://github.com/mindsers/mindsersit-blog/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/mindsers/mindsersit-blog/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/mindsers/mindsersit-blog/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.13.0...v3.0.0
[2.13.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.11.0...v2.13.0
[2.12.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.11.0...v2.12.0
[2.11.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.10.0...v2.11.0
[2.10.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.9.1...v2.10.0
[2.9.1]: https://github.com/mindsers/mindsersit-blog/compare/v2.9.0...v2.9.1
[2.9.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.8.0...v2.9.0
[2.8.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/mindsers/mindsersit-blog/compare/v2.0.2...v2.1.0
[2.0.2]: https://github.com/mindsers/mindsersit-blog/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/mindsers/mindsersit-blog/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.7.5...v2.0.0
[1.7.5]: https://github.com/mindsers/mindsersit-blog/compare/v1.7.4...v1.7.5
[1.7.4]: https://github.com/mindsers/mindsersit-blog/compare/v1.7.3...v1.7.4
[1.7.3]: https://github.com/mindsers/mindsersit-blog/compare/v1.7.2...v1.7.3
[1.7.2]: https://github.com/mindsers/mindsersit-blog/compare/v1.7.1...v1.7.2
[1.7.1]: https://github.com/mindsers/mindsersit-blog/compare/v1.7.0...v1.7.1
[1.7.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/mindsers/mindsersit-blog/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.4.3...v1.5.0
[1.4.3]: https://github.com/mindsers/mindsersit-blog/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/mindsers/mindsersit-blog/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/mindsers/mindsersit-blog/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/mindsers/mindsersit-blog/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.1.3...v1.2.0
[1.1.3]: https://github.com/mindsers/mindsersit-blog/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/mindsers/mindsersit-blog/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/mindsers/mindsersit-blog/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/mindsers/mindsersit-blog/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/mindsers/mindsersit-blog/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/mindsers/mindsersit-blog/releases/tag/v1.0.0
