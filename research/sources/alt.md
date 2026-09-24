Source: https://www.w3.org/WAI/tutorials/images/decision-tree/
Title:  An alt Decision Tree | Web Accessibility Initiative (WAI) | W3C
Fetched: 2026-09-24T16:48:19.554Z

- **Does the image contain text?**
  - **Yes:**
    - **… and the text is also present as _real_ text nearby.** _Use an empty `alt` attribute. See [Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)._
    - **… and the text is only shown for visual effects.** _Use an empty `alt` attribute. See [Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)._
    - **… and the text has a specific function, for example is an icon.** _Use the `alt` attribute to communicate the function of the image. See [Functional Images](https://www.w3.org/WAI/tutorials/images/functional/)._
    - **… and the text in the image is not present otherwise.** _Use the `alt` attribute to include the text of the image. See [Images of Text](https://www.w3.org/WAI/tutorials/images/textual/#styled-text-decorative-effect)._
  - **No:**
    - Continue.
- **Is the image used in a link or a button, and would it be hard or impossible to understand what the link or the button does, if the image wasn’t there?**
  - **Yes:**
    - _Use the `alt` attribute to communicate the destination of the link or action taken. See [Functional Images](https://www.w3.org/WAI/tutorials/images/functional/)._
  - **No:**
    - Continue.
- **Does the image contribute meaning to the current page or context?**
  - **Yes:**
    - **… and it’s a simple graphic or photograph.** _Use a brief description of the image in a way that conveys that meaning in the `alt` attribute. See [Informative Images](https://www.w3.org/WAI/tutorials/images/informative/)._
    - **… and it’s a graph or complex piece of information.** _Include the information contained in the image elsewhere on the page. See [Complex Images](https://www.w3.org/WAI/tutorials/images/complex/)._
    - **… and it shows content that is redundant to _real_ text nearby.** _Use an empty `alt` attribute. See (redundant) [Functional Images](https://www.w3.org/WAI/tutorials/images/functional/#logo-image-within-link-text)._
  - **No:**
    - Continue.
- **Is the image purely decorative or not intended for users?**
  - **Yes:**
    - _Use an empty `alt` attribute. See [Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/)._
  - **No:**
    - Continue.
- **Is the image’s use not listed above or it’s unclear what `alt` text to provide?**
  - This decision tree **does not** cover all cases. For detailed information on the provision of text alternatives refer to the [Images Tutorial](https://www.w3.org/WAI/tutorials/images/).

[Back to Top](https://www.w3.org/WAI/tutorials/images/decision-tree/#top)