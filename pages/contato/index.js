import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, CheckIcon } from '@heroicons/react/outline';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';
import { API_URL } from '../../config/index';

const options = [
  { id: 0, option: 'Assunto', value: '' },
  { id: 1, option: 'Agendar tattoo', value: 'agendamento' },
  { id: 2, option: 'Informações sobre fotografias', value: 'fotografia' },
  { id: 3, option: 'Parcerias e colaborações', value: 'colab' },
  { id: 4, option: 'Outro assunto', value: 'outro' },
];

export default function ContactPage() {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    mensagem: '',
    assunto:
      options[options.findIndex(opt => opt.value === router.query.assunto)] ||
      options[0],
  });

  const handleSubmit = async e => {
    e.preventDefault();

    // Validation
    const hasEmptyFields =
      Object.values(formValues).some(el => el === '') ||
      formValues.assunto.value === '';

    if (hasEmptyFields) {
      toast.error('Favor preencher todos os campos');
      return;
    }

    const formData = {
      data: { ...formValues, assunto: formValues.assunto.value },
    };

    const res = await fetch(`${API_URL}/api/mensagens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      toast.error('Ops! Algo deu errado. Tente de novo daqui a pouco.');
    } else {
      toast.success('Sua mensagem foi enviada para a Kat!');
      setFormValues({ nome: '', email: '', mensagem: '', assunto: options[0] });
    }
  };

  const handleInputChange = e => {
    if (e.target) {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    } else {
      setFormValues({ ...formValues, assunto: { ...e } });
    }
  };

  return (
    <Layout>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: '100px',
          },
        }}
      />
      <div className="flex flex-col items-center h-full px-8">
        <h1 className="text-3xl font-thin lowercase">Contato</h1>

        <form
          className="flex flex-col items-center justify-between w-full h-full pb-10 mt-16"
          onSubmit={handleSubmit}
        >
          <div className="">
            <input
              className="w-full px-4 py-2 mb-4 border-2 rounded-full border-brand bg-brand-white placeholder:italic placeholder:text-gray-400"
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome"
              onChange={handleInputChange}
              value={formValues.nome}
            />

            <input
              className="w-full px-4 py-2 mb-4 border-2 rounded-full border-brand bg-brand-white placeholder:italic placeholder:text-gray-400"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={handleInputChange}
              value={formValues.email}
            />

            <Listbox
              value={formValues.assunto}
              onChange={handleInputChange}
              name="assunto"
              id="assunto"
              as="div"
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full px-4 py-2 mb-4 text-left border-2 rounded-full border-brand bg-brand-white">
                  <span
                    className={`block truncate ${
                      formValues.assunto.id === 0
                        ? 'text-gray-400 italic'
                        : null
                    }`}
                  >
                    {formValues.assunto.option}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <SelectorIcon
                      className="w-5 h-5 text-brand"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  as={Fragment}
                  enter="transform transition ease-out duration-150"
                  enterFrom="opacity-0 translate-y-[-3rem]"
                  enterTo="opacity-100 translate-y-0"
                  leave="transform transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-[-3rem]"
                >
                  <Listbox.Options className="absolute px-6 py-2 ml-5 -mt-3 overflow-auto bg-white rounded-md shadow-lg max-h-60">
                    {options.slice(1).map(opt => (
                      <Listbox.Option
                        key={opt.id}
                        value={opt}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-brand-light text-brand-white'
                              : 'text-brand-black'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {opt.option}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-dark">
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <textarea
              className="w-full p-4 border-2 rounded-3xl border-brand bg-brand-white placeholder:italic"
              name="mensagem"
              id="mensagem"
              onChange={handleInputChange}
              cols="25"
              rows="6"
              placeholder="Mensagem"
              value={formValues.mensagem}
            ></textarea>
          </div>

          <button
            className="px-16 py-3 text-lg lowercase rounded-full bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white"
            type="submit"
          >
            enviar
          </button>
        </form>
        <Copyright />
      </div>
    </Layout>
  );
}
