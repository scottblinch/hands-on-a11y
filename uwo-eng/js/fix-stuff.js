/**
 * Uses "dirty" jQuery hacks to fix accessibility issues because this is a quick thing and jQuery lets it be a quick
 * thing. You don't have to use jQuery. You also don't have to NOT use jQuery. The world is your oyster! I'm also using
 * es6/es2015 syntax a lot here and totally not transpiling it to work cross-browser. You should definitely shove this
 * through Babel or avoid using es6 syntax.
 */
jQuery(($) => {
    /**
     * Focuses the first focusable thing but only if `this` is visible
     */
    const focusTheFirstThing = function focusTheFirstThing() {
        const $this = $(this);
        const $firstFocusableThing = $this.find('a,button,:input').filter(':visible').first();

        if ($this.is(':visible') && $firstFocusableThing.length) {
            $firstFocusableThing.focus();
        }
    };

    const togglePopularLinks = function togglePopularLinks() {
        const $this = $(this);

        $this.attr('aria-expanded', $this.attr('aria-expanded') === 'true' ? 'false' : 'true');
        $('.panelbck').slideToggle(focusTheFirstThing)
    };

    /**
     * Removes the click listener on the "popular links" image and puts it on the button we created around it instead
     * When the slide animation completes, it focuses the first thing in it
     */
    const fixPopularLinksToggle = () => {
        $('.flip').off('click');
        $('.flipjar__button').on('click', togglePopularLinks);
    };

    /**
     * Hello, more accessible world
     */
    const initialize = () => {
        fixPopularLinksToggle();
    };

    initialize();
});
