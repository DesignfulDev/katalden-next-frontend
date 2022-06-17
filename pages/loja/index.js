import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';

export default function StorePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between px-8 h-full">
        <h1 className="text-3xl lowercase font-thin">Loja</h1>
        <p className="text-xl font-light mt-16 mb-10">Em construção</p>

        <Copyright />
      </div>
    </Layout>
  );
}
