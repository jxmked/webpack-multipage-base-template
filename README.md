# Webpack Multipage Base Template

Wanna do some multipage static sites?

## Config

Open `entries.mjs` file and add your pages in `pages` constant.

```js
{
  title: 'index', // For config title and chunking
  folder: '', // Source file
  output_folder: '' // Url
}
```

> It also supports sub/sub/sub directories like what I did in `/pagetwo/about`

- The `title`, `folder` and `output_folder` keys should be unique.
- The `folder` key will be the actual folder inside of src folder.
- The `output_folder` key will be use as url path like `http://localhost:3000/:folder`

> The webpack config is similar to the first version `Webpack base template` but the
> `Webpack base template` is just for single page. The main difference between these
> template and the other is this template supports multipage rendering but with some
> complexity to setup. To reduce some complexity, I added `entries.mjs` for easily
> configuration (atleast). I also updated my [ga4-webpack-plugin](https://www.npmjs.com/package/ga4-webpack-plugin)
> to fit the requirements of this webpack config.

**Hope you guys like this**

#### Incase you lost

- [webpack-base-template](https://github.com/jxmked/webpack-base-template)
- [webpack-multipage-base-template](https://github.com/jxmked/webpack-multipage-base-template)

#### Any questions?

- email: jovandeguia@gmail.com
- FB: fb.com/deguia25
- IG: instagram.com/jxmked
