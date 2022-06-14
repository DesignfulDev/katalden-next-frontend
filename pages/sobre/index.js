import SobreContent from './SobreContent';
import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';

export default function SobrePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center bg-brand-white">
        <h1 className="text-3xl lowercase font-thin">sobre mim</h1>
        <SobreContent />

        <Copyright />
      </div>
    </Layout>
  );
}
