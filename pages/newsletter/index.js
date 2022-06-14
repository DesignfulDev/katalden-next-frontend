import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';

export default function NewsletterPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center px-8 h-full">
        <h1 className="text-3xl lowercase">Newsletter</h1>
        <p className="text-xl font-light mt-16 mb-10">
          Assine e receba informações de agenda de tattoo, viagens e meus
          trabalhos mais recentes direto no seu e-mail.
        </p>
        <form className="flex flex-col items-center w-full h-full justify-between pb-10">
          <input
            type="email"
            placeholder="your@email.com"
            className="border-2 border-brand w-full py-2 px-4 mb-10 rounded-full"
          />
          <button className="px-16 py-3 rounded-full bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white text-lg lowercase">
            assinar
          </button>
        </form>
        <Copyright />
      </div>
    </Layout>
  );
}
