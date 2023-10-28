import Layout from '@/components/Layout';
import { useAppContext } from '@/context/AppContext';
import { _boards as Container } from '@/styles/routes/_boards';
import actions from '@/shared/actions';

export default function Boards() {
  const { state, dispatch } = useAppContext();

  return (
    <Layout>
      <Container>
        <article></article>
      </Container>
    </Layout>
  );
}
