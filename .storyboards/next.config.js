const compose = require("compose-function")
const path = require("path")
const fs = require("fs")
const { toRequireContext } = require("./configSupport")

/*
parameters used
- transpiled packages, no pass them explicity
- required config obj
- wrapper component path
- aliases
*/

const transpile = require("next-transpile-modules")([
  path.resolve(__dirname, "../"),
  "@chakra-ui",
])

const composed = compose(transpile)

let { stories, wrapper, basePath } = getConfig() || {}
if (basePath && basePath.trim() === "/") {
  basePath = ""
}

const storiesGlobs = stories
  .filter(Boolean)
  .map((g) => path.join(path.resolve(__dirname, "../"), g))

module.exports = composed({
  webpack: (config, options) => {
    const { webpack } = options
    const { path: dir, recursive, match } = toRequireContext(storiesGlobs[0]) // TODO support for array stories paths
    // console.log({ dir, recursive, match })
    config.plugins.push(
      new webpack.DefinePlugin({
        WRAPPER_COMPONENT_PATH: JSON.stringify(
          wrapper ? path.join(path.resolve(__dirname, "../"), wrapper) : "",
        ),
        STORIES_EXTENSION: match,
        STORIES_PATH: JSON.stringify(dir),
        BASE_PATH: JSON.stringify(basePath || "/"),
        STORIES_RECURSIVE: JSON.stringify(recursive),
      }),
    )
    // replace the stories react packages with local ones to not dedupe
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliasOfPackages([
        "react",
        "react-dom",
        "@emotion/core",
        "emotion-theming",
        "next",
        // '@chakra-ui'
      ]),
    }
    return config
  },
  ...(basePath ? { experimental: { basePath } } : {}),
  pageExtensions: ["js", "jsx", "ts", "tsx"],
})

function aliasOfPackages(packages) {
  return Object.assign(
    {},
    ...packages.map((p) => {
      const pkgPath = path.resolve(__dirname, ".", "node_modules", p)
      if (fs.existsSync(pkgPath)) {
        return {
          [p]: pkgPath,
        }
      }
      return {}
    }),
  )
}

function getConfig() {
  try {
    return require("../storyboards.config")
  } catch (e) {
    console.log(`cannot find './storyboards.config.js'`)
    process.exit(1)
  }
}
