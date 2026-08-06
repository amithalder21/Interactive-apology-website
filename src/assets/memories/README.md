# Memory artwork

Drop the illustrations here. The filename (without extension) has to match the
chapter's `slug` in [`src/data/story.js`](../../data/story.js):

| # | File                | Chapter                              |
| - | ------------------- | ------------------------------------ |
| 1 | `nehru-place.jpg`   | First outing — CR Park, Nehru Place  |
| 2 | `movie-call.jpg`    | Lockdown movie nights over call      |
| 3 | `illusions.jpg`     | Museum of Illusions                  |
| 4 | `tom-jerry.jpg`     | Tom & Jerry                          |
| 5 | `saket-evening.jpg` | The evening in Saket                 |
| 6 | `metro-hug.jpg`     | The hug at Saket metro               |
| 7 | `sorry.jpg`         | The apology                          |

`.jpg`, `.jpeg`, `.png`, `.webp` and `.avif` all work. No import to add and no
code to touch — the file is picked up automatically the next time Vite builds.

Any chapter without a file shows generated fallback art instead, so the site is
never broken while artwork is still missing. Add them one at a time if you like.

**Tip:** generate all seven in the same style and with the same two characters as
the older `../images/img*.jpg` illustrations, so the set stays consistent.
Portrait framing (roughly 3:4) fits the layout best.
