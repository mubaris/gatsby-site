import React from "react"

// const MathJaxConfig = `
// window.MathJax = {
//   tex2jax: {
//     inlineMath: [['$', '$'], ['\\(','\\)'] ],
//     displayMath: [['$$', '$$'], ['\[','\]'] ],
//     processEscapes: true,
//     processEnvironments: true,
//     skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
//     TeX: {
//       equationNumbers: {autoNumber: 'AMS'},
//       extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
//     },
//   }
// };
// `;

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var OneSignal = window.OneSignal || [];
              OneSignal.push(function() {
                OneSignal.init({
                  appId: "15627440-9c03-47ac-b6c9-cf82032a63db",
                });
              });
              `
            }}
          />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-6562225781072467",
                enable_page_level_ads: true
            });
              `
            }}
          />
          <script src="https://cdn.emojicom.io/embed/widget.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.EMOJICOM_WIDGET = {
                campaign: "ReLGFzw0nmX9eNsMsEh1"
              };
              `
            }}
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {/* <script
            defer
            src="https://cdn.bootcss.com/mathjax/2.7.4/latest.js?config=TeX-AMS_SVG"
          /> */}
        </body>
      </html>
    )
  }
}
