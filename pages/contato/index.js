import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center px-8 h-full">
        <h1 className="text-3xl lowercase">Contato</h1>

        <form className="flex flex-col items-center w-full h-full justify-between mt-16 pb-10">
          <div className="">
            <input
              type="text"
              placeholder="Nome"
              className="border-2 border-brand bg-brand-white placeholder:italic placeholder:text-gray-400 w-full py-2 px-4 mb-4 rounded-full"
            />

            <input
              type="email"
              placeholder="seu@email.com"
              className="border-2 border-brand bg-brand-white placeholder:italic placeholder:text-gray-400 w-full py-2 px-4 mb-4 rounded-full"
            />

            <select
              name="assunto"
              id="select-assunto"
              className="border-2 border-brand bg-brand-white rounded-full py-2 px-4 mb-4 w-full"
            >
              <option value="" className="py-2">
                -- Motivo do contato --
              </option>
              <option value="agendamento">Agendar Tattoo</option>
              <option value="fotografia">Informações sobre fotografia</option>
              <option value="colab">Parcerias e colaborações</option>
              <option value="outros">Outro assunto</option>
            </select>

            <textarea
              name="mensagem"
              id=""
              cols="25"
              rows="6"
              className="rounded-3xl border-2 border-brand bg-brand-white w-full p-5"
            ></textarea>
          </div>

          <button className="px-16 py-3  rounded-full bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white text-lg lowercase">
            enviar
          </button>
        </form>
        <Copyright />
      </div>
    </Layout>
  );
}
