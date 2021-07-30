# Content Management

Your webpage is all up and running, now what? 🤔

Mughead provides a way for you to manage your site content via [Markdown](https://en.wikipedia.org/wiki/Markdown) &mdash; a simple, beautiful, human-readable mark up. This means that you don't need to write bulky, repetitive, and confusing code just to publish a simple page.

Focus in writing _content_ &mdash; not _code_.

---

### Default files

The location of the website's content is located at `content` directory. If you do not wish to customize the website for advanced usage, then you can safely ignore all other files outside of `content` directory.

When you first cloned the repository, the `content` directory are prepopulated by a default main page and this documentation. Feel free to delete and modify these files as you manage your site. You can even add folders and subfolders to properly organize your content.

By default, Mughead will look for `content/main.md` and display it as its homepage.

---

### Basic Usage

Mughead will consider a single markdown file (with extension `.md`) to be displayed as a single page with its own unique URL. It will parse them according to the markdown flavors supported by [Marked.js](https://github.com/commonmark/commonmark-spec/wiki/Markdown-Flavors)

Here are some basic markdown components

| Component       | Syntax                    |
| --------------- | ------------------------- |
| Heading 1       | `# Some heading`          |
| Heading 2       | `## Some heading`         |
| Heading 3       | `### Some heading`        |
| Bold text       | `**Text here**`           |
| Italicized text | `*Text here*`             |
| Strikethrough   | `~~Text here~~`           |
| Horizontal rule | `---`                     |
| Links           | `[Link Label](link-url)`  |
| Images          | `![Image alt](image-url)` |

For a more exhaustive list of markdown formats, please check this [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

---

### Hyperlinks

You can supply any url inside a markdown text hyperlink (i.e. `[name](url)`). Mughead will try its best to resolve the link depending the url supplied. During navigation, if the link targets a markdown file locally, Mughead will automatically append `.md` extension to the path.

In the scenarios below, assume that the user is at `https://site.com/view/foo/file.md`

| Scenario                  | Example                             | Target                              |
| ------------------------- | ----------------------------------- | ----------------------------------- |
| Same site , relative path | `bar/file`                          | `content/foo/bar/file.md`           |
| Same site , absolute path | `/bar/file`                         | `content/bar/file.md`               |
| External site             | `https://another-site.com/bar/file` | `https://another-site.com/bar/file` |

---

### File resolution

Mughead will map any file path url under the `view` subroute into the `content` directory. This means that the url `http://site.com/view/folder/file` will map to `content/folder/file.md`.

This is useful when making external links to your website or when resolving images inside `content`.

---

That's it for this guide. Up next, learn how to compile your website for production in [Building](building).

---

<div style="display: flex; justify-content: space-between; width: 100%;"><div>

[⏪ Get Started ](installation)

</div><div>

[Building ⏩](building)

</div></div>
