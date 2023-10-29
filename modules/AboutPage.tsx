import Head from 'next/head';
import PageBase from './shared/PageBase';

const AboutPage = () => {
  return (
    <PageBase>
      <Head>
        <title>About - Arkiv</title>
      </Head>
      <div className="prose prose-lg prose-dark px-6 py-12">
        <h1>Welcome to the archives</h1>
        <p>
          This website aims to back up as much Virtual YouTuber content as
          possible. We back up (almost) everything
          available on the YouTube video page, including the thumbnail,
          description, chat logs, and captions (if available). All videos are
          archived at the highest quality available.
        </p>
        <p>
          . You can contact me on Twitter at{' '}
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://twitter.com/arkivin"
          >
            @arkivin
          </a>
          . For legal inquiries, feel free to contact me through the channels
          above, or send me an email at{' '}
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="mailto:vt@arkiv.in"
          >
            vt@arkiv.in
          </a>
          .
        </p>
        <p>
          This project is open source! Forking the project and running your own
          instance is highly encouraged. Check out the source code{' '}
          <a
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://github.com/ragtag-archive/archive-browser"
          >
            here
          </a>
          .
        </p>
        <p>Enjoy!</p>
      </div>
    </PageBase>
  );
};

export default AboutPage;
