# Issues
## Overflow 

I am having an issue with `overflow`.  Here is a link to the output on Github pages: https://mawentowski.github.io/tripane/

My website consists of a top navigation and a div underneath called `main-row` that consists of 3 divs (columns) in 1 row: `left-nav-col` , `main-content` , and a `right-nav-col`. There are anchor tags in the `right-nav-col` that link to bookmarks in `main-content`.

My issue is that I do not want the entire page to be scrollable, only the `main-row`. But, when I set the body element to `overflow-y: hidden` to remove the outer scrollbar, and I click an a link in the `right-nav-col`, the `main-row` moves to the top and the top navigation becomes hidden when it should always be visible. Because the `body` element is not scrollable, you cannot scroll back up to see the top navigation. I want the top navigation to be visible at all times...

Here is the type of setup I am trying to imitate: https://stripe.com/docs/radar/reviews#best-practices

## Tabs 
On click tab, apply these classes:
```CSS
    .text-color-blue {
        color: #5469d4;
    }
    .tab-border-bottom-blue {
        border-bottom: 2px solid #5469d4;
    }
```

When you click a tab, it should not load the header again.


### tab.js

Need an event listener that remembers when a tab is selected and removes the formatting of that tab once another tag is selected.

Right now it applies the classes.





## Left Nav

Currently left nav generates automatically when the page loads and there is only one nav.

The left nav should only display when you click a tab, and the nav associated tab should be displayed (one nav per tab.)

The navs should already be loaded when the page loads (build time instead of runtime?) to improve performance.

Need to be able to place those tic icons in TOC expanded BEFORE so you can line up the text

On click left nav item, needs to apply these classes:

```CSS
    .text-color-blue {
        color: #5469d4;
    }
```
When you click a nav item, it should not load the header or left nav again, only the main-content and right-nav.

## Right-Nav
Needs to read the H2 and H3s and generate based on those headings.

## Home Tab
The Home tab is the first page loaded and does not have a side nav

## Icon Row
Need some way the name of the tab selected to so the TOC icon text displays the name of the tab. When you click the TOC button, it needs to load the left nav associated with the selected tab. It also needs to know if you start the page on the tab...

## Version 
Select event on dropdown item that loads the page again.


```CSS
p {
    /* Primary font color */
    color: #3C4257;
    /* selected links */
    color: #694386;
    /* unselected links */
    color: #697386;
    /* border color */
    border: 0.1px solid #dddddd;
    /* default font properties */
    font-weight: 500;
    line-height: 20px;
    font-size: 15px;
}

```






Javascript added classes for future:
```CSS
    .text-color-blue {
        color: #5469d4;
    }
    .tab-border-bottom-blue {
        border-bottom: 2px solid #5469d4;
    }
    .default-font-color {
        color: #3c4257;
    }
    .default-font-properties {
        line-height: 20px;
        font-size: 15px;
        font-weight: 500;
    }
```

<!-- Watch that hover video for links -->


## Nav config


The header needs to be position fixed and have a z-index greater
than the main row.

The main-row needs a position fixed and takes up 100vh
but has a top that puts it below the header


