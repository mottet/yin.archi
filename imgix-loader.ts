export default function imgixLoader({
    src,
    width,
    quality,
}: {
    src: string
    width: number
    quality?: number
}) {
    const url = new URL(`https://yin-archi.imgix.net${src}`)
    const params = url.searchParams
    params.set("auto", params.getAll("auto").join(",") || "format")
    params.set("fit", params.get("fit") || "max")
    params.set("w", params.get("w") || width.toString())
    if (quality) {
        params.set("q", params.get("q") || quality.toString())
    }
    return url.href
}