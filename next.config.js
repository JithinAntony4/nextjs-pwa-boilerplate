const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")


module.exports = withPWA({
    pageExtensions: ["tsx"],
    pwa: {
        disable: !isProd,
        dest: "public"
    }
})
