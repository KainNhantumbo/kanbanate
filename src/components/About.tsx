import {
  RiAppsLine,
  RiCloseLine,
  RiCodeSSlashLine,
  RiCopyrightLine
} from 'react-icons/ri';
import { m as motion, AnimatePresence } from 'framer-motion';
import { _about as Container } from '@/styles/modules/_about';
import { metadata } from '@/shared/data';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { updateAboutModal } from '@/state/slices/simpleModalsSlice';

export default function About() {
  const dispatch = useDispatch();
  const isAboutModal = useSelector(
    (state: RootState) => state.simpleModals.isAboutModal
  );

  const { appName, version, copyright, license, author, contacts } = metadata;

  return (
    <AnimatePresence>
      {isAboutModal && (
        <Container
          className='main'
          onClick={(e: any) => {
            const isTarget = e.target.classList.contains('main');
            if (isTarget) return dispatch(updateAboutModal(false));
          }}>
          <motion.section
            className='dialog-modal'
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3 }
            }}
            exit={{ opacity: 0, scale: 0 }}>
            <div className='dialog-box'>
              <div className='box-info'>
                <h2 className='box-app-name'>
                  <span>
                    {appName} v{version}
                  </span>
                </h2>
                <h3>
                  <RiCodeSSlashLine />
                  <span>
                    <i>Developer:</i> {author.name}
                  </span>
                </h3>
              </div>

              <section className='contacts'>
                {contacts.map((contact) => (
                  <div key={contact.name} className='contact'>
                    {<contact.icon />}
                    <span>{contact.name}: </span>
                    <a
                      href={contact.url}
                      target={'_blank'}
                      rel={'noreferrer noopener'}>
                      {contact.url.replace('https://', '')}
                    </a>
                  </div>
                ))}
              </section>

              <div className='legal'>
                <h3>
                  <RiAppsLine />
                  <span>{license.name}</span>
                </h3>

                <h3>
                  <RiCopyrightLine />
                  <span> {copyright}</span>
                </h3>
              </div>
              <button
                title='Close Panel'
                className='box-btn'
                onClick={() => dispatch(updateAboutModal(false))}>
                <RiCloseLine />
              </button>
            </div>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
