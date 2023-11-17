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
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
          </article>
        </div>
      </Container>
    </Layout>
  );
}
