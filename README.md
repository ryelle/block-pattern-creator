Block Pattern Creator
=====================

This is a proof-of-concept for creating block patterns on the frontend of a site.

It does the following:
- Creates a CPT called "Block Patterns" `wp-pattern`
- Replaces the frontend content with a new template `view/editor.php` — currently every frontend page, but this could be changed to a block, specific page template, etc.
- Loads a JS app into the div from `view/editor.php`, which creates an editor interface
- Currently the post it loads is hardcoded, you can change it for testing on L55 of `block-pattern-creator.php`
- The loaded post can be interacted with, edited, and saved

Current shortcomings
- It only works if you're logged in
- The post to edit can't be changed yet
  - We could offer a dropdown in the app of the users' patterns to switch to, or have pattern lists live elsewhere (on a PHP page) and have this show up on an edit link
- This doesn't let you create new patterns, only edit existing patterns

Future plans for a Block Pattern Creator/Directory on wp.org
- This `wp-pattern` CPT could be used to house submitted patterns, with the post content being the pattern itself & any meta stored in post meta
- The (TBD) wp.org API would pull from this post type
- We'll need to tweak the permissions in the API for logged in wporg users who aren't members of the block patterns site
- Meta could be controlled in the Inspector sidebar — currently this is only the block inspector, but we could add a tab like Document settings in the post editor

## Try it out

Check out this repo & [gutenberg](https://github.com/wordpress/gutenberg/) into the same folder, so they're next to each other.

```bash
cd block-pattern-creator
npm install
npm run build
npm run wp-env start
```

You now have a new WordPress site at `http://localhost:8888`. Log in. You might need to activate the Gutenberg plugin.

Create some Block Patterns using the new CPT. If necessary, change the ID on L55 of `block-pattern-creator.php` to a pattern you've created.

Load up any page, and you should see the pattern editor. Play around & save your pattern.

Note: you can skip the last CLI command if you're using an existing site, just make sure you have Gutenberg installed & active.
