import React from "react"
import { Helmet } from "react-helmet"

export default function HeaderScripts() {
  return (
    <Helmet>
      {/* Lottie Animation Loader */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      {/* Smooth Scrolling */}
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
      {/* Icons */}
      <script
        src="https://kit.fontawesome.com/da815149ed.js"
        SameSite="None"
        Secure
        crossorigin="anonymous"
      ></script>
      {/* <link rel="stylesheet" href="../../../styles/prism/prism.css"></link> */}
      {/* Facebook Pixel Code  */}
      <script
  dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '650102202342493');
  fbq('track', 'PageView')`}}
  />
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=650102202342493&ev=PageView&noscript=1"
/></noscript>
{/* Facebook Pixel Code  */}
    </Helmet>
  )
}
