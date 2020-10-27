# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.1] - 2020-10-06
### Fixed
- Prefer the asset tag over using relative path (even in the js code)
- Fix the design of the bookmarked link

## [1.5.0] - 2020-06-14
### Changed
- Remove useless link to old iOS apps in the footer
- Add support for web monetization

## [1.4.3] - 2019-10-25
### Fixed
- Display newsletter button the right way

## [1.4.2] - 2019-10-25
### Fixed
- CI uses another theme name for the zip

## [1.4.1] - 2019-10-25
### Added
- `@mindsersit/blog` is now deployed automatically on new releases

### Fixed
- User can signup to the newsletter again
- Hide related tag on english posts

## [1.4.0] - 2019-10-24
### Changed
- Update prismjs dependency (#9)
- Support for Ghost v3 (#13)
  - **BREAKING CHANGE**: Drop support Ghost v0.10
  - see #12 for the complete changelog

### Fixed
- PHP is highlighted again (#9)
- Display link to headers (#11)
- Hide the "related tags" section on pages (#15)
- Preview posts doesn't load the comments from discourse (#7, #16)

## [1.3.1] - 2019-05-29
### Changed
- Ghost menu is not displayed anymore

### Fixed
- Instagram cards are centered
- Related tags block have a fixed size
- Comments zone is not display on pages

## [1.3.0] - 2019-05-22
### Added
- Discourse integration (Users can now leave comment on blog posts)

### Changed
- Blog's name is not displayed on the header anymore. The header display "Nathanael Cherrier".
- Post date is displayed on mobile devices

### Fixed
- Fix a grammar mistake on english language band

## [1.2.0] - 2019-03-20
### Added
- Font optimizations
- Add a black block on front of headings
- New ad bar for enforce supporting from reader
- Add link to legal notices

### Changed
- Update style for title headings
- Use the new content API v2 from Ghost

### Fixed
- Fix link to nathanaelcherrier.com depending on the locale

## [1.1.3] - 2019-03-03
### Fixed
- Add missing translation string
- Fix bad language filter on featured posts list

## [1.1.2] - 2018-12-25
### Fixed
- Call inlcudes/post-card instead of post-card in author.hbs ans tag.hbs

## [1.1.1] - 2018-10-29
### Fixed
- French post show the alternative language version box

## [1.1.0] - 2018-10-07
### Added

- English collection at /en/
- English post with path beginning with /en/
- Link on titles
- Blockquote are surround with double quotes now
- Posts show the alternative version (English -> French; French -> English)

### Changed
- Ending message contains a call to action for Patreon

### Fixed
- Blockquote apparence since 2.0
- Embeded content since 2.0

## [1.0.1] - 2018-07-11
### Fixed
- downsize code
- downsize blue header bloc
- fix post-card links to tags
- force input corner with radius to 0 (subscribe)

## [1.0.0] - 2018-07-11
### Added
- First version of the website

[Unreleased]: https://github.com/mindsers/mindsersit-blog/compare/v1.5.1...HEAD
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