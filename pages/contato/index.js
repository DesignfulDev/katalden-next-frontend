import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, CheckIcon } from '@heroicons/react/outline';
import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';

const options = [
  { id: 0, option: 'Assunto', value: '' },
  { id: 1, option: 'Agendar tattoo', value: 'agendamento' },
  { id: 2, option: 'Informações sobre fotografias', value: 'fotografia' },
  { id: 3, option: 'Parcerias e colaborações', value: 'colab' },
  { id: 4, option: 'Outro assunto', value: 'outro' },
];

export default function ContactPage() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Layout>
      <div className="flex flex-col items-center px-8 h-full">
        <h1 className="text-3xl lowercase font-thin">Contato</h1>

        <form className="flex flex-col items-center w-full h-full justify-between mt-16 pb-10">
          <div className="">
            <input
              type="text"
              placeholder="Nome"
              className="border-2 border-brand bg-brand-white placeholder:italic placeholder:text-gray-400 w-full py-2 px-4 mb-4 rounded-full"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="border-2 border-brand bg-brand-white placeholder:italic placeholder:text-gray-400 w-full py-2 px-4 mb-4 rounded-full"
            />

            <Listbox
              value={selected}
              onChange={setSelected}
              name="assunto"
              as="div"
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative border-2 border-brand bg-brand-white rounded-full py-2 px-4 mb-4 w-full text-left">
                  <span
                    className={`block truncate ${
                      selected.id === 0 ? 'text-gray-400 italic' : null
                    }`}
                  >
                    {selected.option}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <SelectorIcon
                      className="h-5 w-5 text-brand"
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
                  <Listbox.Options className="absolute -mt-3 ml-5 max-h-60 overflow-auto rounded-md bg-white py-2 px-6 shadow-lg">
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
                                  className="h-5 w-5"
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
              name="mensagem"
              id=""
              cols="25"
              rows="6"
              placeholder="Mensagem"
              className="rounded-3xl border-2 border-brand bg-brand-white placeholder:italic w-full p-4"
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
