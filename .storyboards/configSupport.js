const globBase = require("glob-base")
const { makeRe } = require("micromatch")
const path = require("path")
const { promises: fs } = require("fs")

const isObject = (val) =>
  val != null && typeof val === "object" && Array.isArray(val) === false

module.exports.toRequireContext = (input) => {
  switch (true) {
    case typeof input === "string": {
      const { base, glob } = globBase(input)
      const regex = makeRe(glob)
        .toString()
        // webpack prepends the relative path with './'
        .replace(/^\/\^/, "/^\\.\\/")
        .replace(/\?:\^/g, "?:")

      return {
        path: base,
        recursive: glob.startsWith("**"),
        match: regex,
      }
    }
    case isObject(input): {
      return input
    }

    default: {
      throw new Error(
        "the provided input cannot be transformed into a require.context",
      )
    }
  }
}

module.exports.aliasOfPackages = async function (packages) {
  return Object.assign(
    {},
    await Promise.all(
      packages.map(async (p) => {
        const pkgPath = path.resolve(__dirname, ".", "node_modules", "react")
        if (await exists(pkgPath)) {
          return {
            [p]: pkgPath,
          }
        }
        return {}
      }),
    ),
  )
}

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {}
  return false
}
