import rss, {pagesGlobToRssItems} from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "Lin Chen creating Astro | Blog",
    description: "努力嘗試各種Astro可能",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`
  })
}
