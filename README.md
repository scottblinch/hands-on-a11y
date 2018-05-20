# Hands-on Web Accessibility

A supporting git repo for this talk: https://slides.com/scottblinch/hands-on-web-accessibility#/

Each directory is a fairly simple flat download of a page from each submitted website (just used the save page feature in Chrome), with some minor tweaks to clean up HTML formatting and to attempt to fix strange bugs that occurred in the saved pages.

I took inventory of each site, cataloging a few of the things that were done very well, then a few things that could be improved, and then choosing a couple from each to actually go ahead and do work on improving. I didn't set out to make each page perfect, as that would have been quite the lofty goal. While I did try to reach a certain sort of perfection with the things I chose to improve, I wasn't quite able to reach that, as it would have involved editing the existing minified JS and CSS, which is a bit of a messy task. Instead, I did the best I could and then set up separate CodePen demonstrations for more "ideal" implementations.

It is not my goal to embarrass or humiliate anyone by posting this repo. I much prefer to be an accessibility evangelist by teaching rather than shaming. The aim of the talk and this repo is simply to demonstrate that it's possible to improve a website's accessibility by taking it one step at a time, breaking off small pieces and getting small wins.

## Western Engineering

### The Wins

* Great contrast
* Macro components predictable throughout site (within eng subdomain)
* Most links and images have good text
* External links have visual indication

### The Improvements We'll Make

#### Missing Skip links

Skip links are important to allow those using assistive technology or just their keyboards to navigate a website to be able to skip over a large block of text or links that may not be relevant to them, or simple to just get straight to the relevant content of the page they're on.

In this case, I decided to add a group of 4 skip links at the top that allowed the user to skip to the main content, then to the side bar, then to the social section, then to the footer. I also included a skip link to get past the Twitter iframe.

Pull request here (#1): https://github.com/scottblinch/hands-on-a11y/pull/1

#### Keyboard Navigation - Part 1 - Improve "Popular Links" Flyout

In the current state of the page, the following issues exist with the Popular Links flyout:

* Cannot focus to the flyout toggle button
* Focus does not get re-set once the popular links flyout is activated
* Keyboard focus order does not occur in the order that one may expect
* The flyout is removed and replaced with an inaccessible select dropdown on mobile

In #2, I fixed the toggler not being focusable, I set the focus to the first focusable item in the flyout once it was activated, I fixed the keyboard focus order, and I improved its responsiveness so there would be no need to replace the panel with the dropdown on mobile. Pull request here: https://github.com/scottblinch/hands-on-a11y/pull/2

#### Keyboard Navigation - Part 2 - Improve Navbar Navigation

The main navbar in its current state does not visually indicate the current focus of the keyboard, in addition to not showing the dropdown menus on focus (only hover). In #3, I did my best to improve both of those issues, but was not able to get it to a fully satisfactory state without editing the current JS and CSS. Pull request here: https://github.com/scottblinch/hands-on-a11y/pull/3

Instead, I built out a navbar implementation in vanilla CSS and JS (no frameworks were used), including responsiveness and a simple 1-level dropdown system. I included more information on the accessibility best practices there: https://codepen.io/scottblinch/pen/gzdKyd

## Earth to Business

### The Wins

* Macro components predictable throughout site
* Breadcrumbs and current page marked help user keep track
* Heading structure is mostly sound
* Common UI components are consistent

### The Improvements We'll Make

#### Colour Contrast

While the colour contrast was mostly good on the page, there were some areas where there wasn't enough to make the text discernable above the background, so I added some CSS to improve that (in addition to removing one bit of inline styling). Pull request here: https://github.com/scottblinch/hands-on-a11y/pull/4

* Form accessibility

The contact form has the following issues:

* Form instructions and indication of required fields occurred at the end of the form (and within the form, which doesn't get read by screenreaders)
* Labels aren't correctly connected to their fields
* While `aria-required` is applied, `required` should also be added
* The CAPTCHA field doesn't include an auditory alternative

I fixed the first 3 issues (and simply delete the CAPTCHA) in #5. Pull request here: https://github.com/scottblinch/hands-on-a11y/pull/5

I was not able to fully test the error/success states of the form, so I implemented a demo implementation of an accessible form with error states (with lots of bullet points on the accessible best practices used) here: https://codepen.io/scottblinch/pen/VxEgKe
