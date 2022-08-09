import Head from "next/head";
import { Header } from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { siteConfig } from "../content/siteConfig";

const SiteLayout = ({
  children,
  showSkills = false,
}: {
  children: ReactNode;
  showSkills?: boolean;
}) => {
  const { title, description, favicon, ogImage, url, footerLinks } = siteConfig
  return (
    <div className="flex flex-col justify-between h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://og-image.vercel.app/Mitchell%20Stewart%20-%20Full%20Stack%20Developer.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg" />
      </Head>

      <div>
        {/* <Header /> */}

        {children}
      </div>

      {/* <Footer
          showSkills={showSkills}
          links={footerLinks}
      /> */}
    </div>
  );
};

export default SiteLayout;
