import { useEffect, useState } from 'react';

// Section structure
import Section from '../components/structure/section';
import Container from '../components/structure/container';

// Section blocks
import SectionTitle from '../components/blocks/section.title.block';

import career from "../styles/sections/index/career.module.scss";

export default function Resume() {
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    // delay iframe load slightly (same pattern as other pages)
    const t = setTimeout(() => setShowEmbed(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Resume"
          preTitle="Connection"
          subTitle="A dedicated professional with a diverse skill set from leadership to PHP. Discover my professional journey, ready for you to explore."
        />
      </Container>

      {/* Only load iframe AFTER initial render */}
      {showEmbed && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '129.4118%',
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              padding: 0,
              margin: 0
            }}
            src="https://www.canva.com/design/DAF9RbZ9Hl8/PmSkZCcLKAzwQgQAOf1CIA/view?embed"
            allowFullScreen
          />
        </div>
      )}

      <a
        href="https://www.canva.com/design/DAF9RbZ9Hl8/PmSkZCcLKAzwQgQAOf1CIA/view?utm_content=DAF9RbZ9Hl8&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my resume on Canva
      </a>
    </Section>
  );
}