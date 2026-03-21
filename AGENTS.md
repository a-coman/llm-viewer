# WEB
- For web development, we use Astro
- This is a static site that should be able to be hosted on GitHub Pages
- After your work verify the app is working and still builds using ´npm run build´
# SRC/SCRIPTS
- In order to run python scripts, we are using astral UV, eg.
```
uv run script.py
```
- If you need to install dependencies to python scripts using UV you can run:
```
uv add --script script.py  "package_name"
```
- At the end of editing .py files you should always format and lint your code using Ruff:
```
uvx ruff format path/to/file.py
```
```
uvx ruff check --fix path/to/file.py
```