import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl =  "https://pretgemarket.xyz";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/*",
                    "/admin/*",
                    "/private/*",
                    "/user/*",
                    "/dashboard/*",
                    "/auth/*",
                    "/login*",
                    "/register*",
                    "/*?*",
                    "/search?*",
                    "*.json$",
                ],
                crawlDelay: 1,
            },
            {
                userAgent: "Googlebot",
                allow: ["/", "/blogs/*", "/[lang]/*"],
                disallow: ["/api/*", "/admin/*", "/private/*"],
                crawlDelay: 0,
            },
            {
                userAgent: "Bingbot", 
                allow: ["/", "/blogs/*", "/[lang]/*"],
                disallow: ["/api/*", "/admin/*", "/private/*"],
                crawlDelay: 1,
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
