import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiProfileLine
} from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { m as motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { app_features, metadata } from '@/shared/data';
import { _home as Container } from '@/styles/routes/_home';

export default function Home() {
  const theme = useTheme();
 
  const { appName, repository, author } = metadata;

  return (
    <Layout renderHeader renderFooter>
      <Container>
        <div className='wrapper-container'>
          <article>
            <section className='introduction-container'>
              <h1>
                <span>Collect your thoughts and convert into notes</span>
              </h1>

              <p>
                All your notes, synced on your devices. Get started with{' '}
                {appName} now for free on all your devices or use it in your
                browser.
              </p>

              <div className='action-buttons'>
                <Link to={'/boards'}>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className='browser-button'>
                    <span>Get started</span>
                  </motion.button>
                </Link>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  target='_blank'
                  href={repository}>
                  <span>Give a star</span>
                  <RiGithubLine />
                </motion.a>
              </div>
              {/* 
              <img
                loading='lazy'
                decoding='async'
                src={colorScheme.scheme === 'dark' ? demoDarkImage : demoLightImage}
                alt={`${appName} demo image`}
                placeholder={`${appName} demo image`}
              /> */}
            </section>

            <section id='features' className='features-container'>
              {app_features.map((feature, index) => (
                <motion.div
                  whileHover={{
                    boxShadow: `0 0 25px rgba(${theme.black}, 0.09)`,
                    translateY: -8
                  }}
                  title={feature.title}
                  key={String(index)}>
                  <h3>
                    <feature.icon />
                    <span>{feature.title}</span>
                  </h3>
                  <p>{feature.content}</p>
                </motion.div>
              ))}
            </section>

            <section className='identity-container'>
              <h2>Who is behind {appName}?</h2>
              <p>
                This app is developed by a indie developer, {author.name}, based
                in Maputo, Mozambique.
              </p>

              <div className='shields-container'>
                <a
                  data-tooltip-id={author.email}
                  data-tooltip-content={`@Gmail | ${author.email}`}
                  href={`mailto:${author.email}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <RiMailLine />
                  <Tooltip
                    classNameArrow='tooltip-border-class'
                    className='tooltip-class'
                    id={author.email}
                  />
                </a>
                <a
                  href={author.github}
                  data-tooltip-id={author.github}
                  data-tooltip-content={`@Github | ${author.github}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <RiGithubLine />
                  <Tooltip
                    classNameArrow='tooltip-border-class'
                    className='tooltip-class'
                    id={author.github}
                  />
                </a>

                <a
                  href={author.portfolio}
                  data-tooltip-id={author.portfolio}
                  data-tooltip-content={`@Homepage | ${author.portfolio}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <RiProfileLine />
                  <Tooltip
                    classNameArrow='tooltip-border-class'
                    className='tooltip-class'
                    id={author.portfolio}
                  />
                </a>

                <a
                  href={author.linkedin}
                  data-tooltip-id={author.linkedin}
                  data-tooltip-content={`@LinkedIn | ${author.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <RiLinkedinBoxLine />
                  <Tooltip
                    classNameArrow='tooltip-border-class'
                    className='tooltip-class'
                    id={author.linkedin}
                  />
                </a>
              </div>
            </section>
          </article>
        </div>
      </Container>
    </Layout>
  );
}
