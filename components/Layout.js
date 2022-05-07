import Head from 'next/head';
import Header from './Header';
import Main from './Main';
import GalleryNav from './GalleryNav';
import Sidebar from './Sidebar';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="flex flex-col h-screen bg-brand-white text-brand-black">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Main />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Kat Alden | Galeria Virtual',
  keywords: 'tattoo, abstrato, tribal, futurismo, fotografia, moda sustentável',
  description:
    'Galeria virtual dos trabalhos artísticos de Katharine Alden. Tattoos, fotografia, moda sustentável',
};
