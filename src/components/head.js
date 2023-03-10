import * as React from "react"

export default function Head({ title, description, image }) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <script src="https://embedsocial.com/js/iframe.js"></script>
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-63d02ff670222ded"></script>

        {/*<script>iFrameResize();</script>*/}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/hi_IN/sdk.js#xfbml=1&version=v15.0&appId=1359501101512627&autoLogAppEvents=1"
        nonce="spYj4Ddf"
      ></script>
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </>
  )
}
