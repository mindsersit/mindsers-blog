# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

-   Automatically add the meta[hreflang] tag for the current language
-   Display the previous post's link and the next post's link below current post

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

[unreleased]: https://github.com/mindsers/mindsersit-blog/compare/v2.7.0...HEAD
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
