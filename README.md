![logo2](https://cloud.githubusercontent.com/assets/3016427/25870705/bb99efbc-350d-11e7-8137-0a1c69856456.png)

# text-underless
A css/less/sass snippet for iOS-like links underlining with cut-out line.

*Work in progress*

## Summary
Links should be underlined, but `text-decoration: underline` sucks.

![shot](https://cloud.githubusercontent.com/assets/3016427/25870737/e71b429e-350d-11e7-897b-8ab61c263d53.png)


## Demo
[vitaliysiroshtan.github.io/text-underless](https://vitaliysiroshtan.github.io/text-underless/)

## Why

Snippet is built using semi-transparent gradient background instead of `text-decoration: underline` or `border-bottom: 1px solid` which both produce disgusting results obtrusing descenders, tails, and loops of the lowercase letters and numerals.

Hairline has color same as text and can have configured opacity.
White outline of `text-shadow` make descenders look like they are cutting out the underline, similar to iOS link rendering. That outline will require easy additional configuration, if you are going to use it on other backgrounds.

## Installation

Add the compiled styles to your page:

```html
<link rel="stylesheet" href="links.css" media="all">
```

or include `links.less` into your less styles.

*SASS version TBD*


## Usage

*TODO: write detailed instruction*

a) Use `<a href="#" class="link-blue">...</a>`.
b) Make `a {.link;}` in the less file to make all links underlined by default (not recommended).


## Sources
- [Crafting link underlines](https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9#.ipgajuswk) on [Medium](https://medium.design/)
- [Should commas be coloured?](http://artgorbunov.ru/bb/soviet/20130128/) (rus)
- [The right way of quoting the links](http://ilyabirman.ru/meanwhile/2008/12/30/1/) (rus)
- [§ 83. Secrets of good hypertext](http://www.artlebedev.com/mandership/83/) by Artemy Lebedev
- Similar approach can be found in [SmartUnderline](https://eager.io/app/smartunderline) by [Eager](https://eager.io/)

© 2017
