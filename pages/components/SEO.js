import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>Jason's Portfolio</title>
      <meta name="title" content="Jason's Portfolio" />
      <meta name="author" content="Jason Praful" />
      <meta
        name="description"
        content="Full Stack Developer | AI & Space Enthusiast | Futurist."
      />

      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="en" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jasonpraful.co.uk/" />
      <meta property="og:title" content="Jason Praful's Portfolio" />
      <meta
        property="og:description"
        content="Full Stack Developer | AI & Space Enthusiast | Futurist."
      />
      <meta property="og:image" content="/preview.png" />

      {/* <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://aditya2810.me/"/>
        <meta property="twitter:title" content="Aditya's Portfolio"/>
        <meta property="twitter:description"
              content="Hi! I am Aditya Manikanth Rao. I am a final year CS Undergraduate and a Full Stack Developer from Warangal, India. Check out my portfolio and other profiles to know more or contact me."/>
        <meta property="twitter:image" content="/preview.png"/> */}
    </Head>
  );
}
