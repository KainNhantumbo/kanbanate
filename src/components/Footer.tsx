import { Link } from 'react-router-dom';
import { metadata, footerAnchors } from '../shared/data';
import { _footer as Container } from '../styles/modules/_footer';

export default function Footer() {
  return (
    <footer className='w-[100%] max-w-md font-[500] text-base flex flex-wrap  justify-between align-middle  gap-5 p-5 selection:bg- selection:colo'>
      <nav role='navigation'>
        {footerAnchors.map((item, index) => (
          <Link key={index.toString()} to={item.anchor}>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <p className='copyright-sentence'>&copy; {metadata.copyright}</p>
    </footer>
  );
}
