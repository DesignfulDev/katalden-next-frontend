import Head from 'next/head';
import Header from './Header';
import Main from './Main';

export default function Layout() {
  return (
    <div className="h-screen border-2 border-blue-500">
      <Header />
      <Main />
    </div>
  );
}
