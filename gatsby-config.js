// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const myCustomQueries = {
  xs: '(max-width: 320px)',
  small: '(max-width: 640px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  l: '(max-width: 1536px)',
  portrait: '(orientation: portrait)',
};


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ghanshyamanuragi.in/",
    title: "घनश्याम अनुरागी - पूर्व सांसद, अध्यक्ष जिला पंचायत जालौन, भाजपा",
    author: `घनश्याम अनुरागी`,
    description:
      "घनश्याम अनुरागी एक भारतीय राजनीतिज्ञ और भारत की संसद के सदस्य हैं। वर्तमान में वे भारतीय जनता पार्टी से जिला पंचायत जालौन के अध्यक्ष हैं।",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-X2MN809TZ6",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        content:  "13a0523e4dad4641b015335b2ac1856a",
        async: true,
        defer: true
      }
    },
    // {
    //   resolve: `gatsby-plugin-addsocialshare-share`,
    //   options: {
    //     size: 28,
    //     providers:{"facebook":"Facebook","whatsapp":"Whatsapp","twitter":"Twitter","sms":"SMS","telegram":"Telegram","copylink":"Copy Link"},
    //     corners:"5%",
    //     // bgcolor:"#F47216",
    //     interfacetype: "floating", //inline,floating
    //     topoffset: "30%", //work only floating interface
    //     id: ".ass_interface",
    //     alignment_desktop: "left", //left,right,hide
    //     alignment_mobile: "bottom", //top,bottom,hide
    //   },
    // },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ghanshyam Anuragi - President of District Panchayat Jalaun from BJP",
        short_name: "Ghanshyam Anuragi",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#FFFFFF",
        theme_color: "#F47216",
        icon: "src/favicon.png",
      },
    },
  ],
}
