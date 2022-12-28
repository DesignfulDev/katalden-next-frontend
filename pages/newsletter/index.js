import { useState } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout';
import Copyright from '../../components/Copyright';
import { API_URL } from '../../config/index';

export default function NewsletterPage() {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(formValues).some(el => el === '');

    if (hasEmptyFields) {
      toast.error('Favor preencher todos os campos');
      return;
    }

    const formData = { data: { ...formValues } };

    const res = await fetch(`${API_URL}/api/assinantes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const failure = await res.json();

      if (
        failure.error &&
        failure.error.message === 'This attribute must be unique'
      ) {
        toast.error('Opa, você já tá na minha newsletter!');
      } else {
        toast.error('Ops! Algo deu errado. Tente de novo daqui a pouco.');
      }
    } else {
      toast.success('Bem vindo a minha newsletter!');
      setFormValues({ nome: '', email: '' });
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
        <h1 className="text-3xl font-thin lowercase">Newsletter</h1>
        <p className="mt-16 mb-10 text-xl font-light">
          Assine e receba informações de agenda de tattoo, viagens e meus
          trabalhos mais recentes direto no seu e-mail.
        </p>
        <form
          className="flex flex-col items-center justify-between w-full h-full pb-10"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="w-full px-4 py-2 mb-5 border-2 rounded-full border-brand bg-brand-white placeholder:italic placeholder:text-gray-400"
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              value={formValues.nome}
              onChange={handleInputChange}
            />
            <input
              className="w-full px-4 py-2 mb-10 border-2 rounded-full border-brand bg-brand-white placeholder:italic placeholder:text-gray-400"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="px-16 py-3 text-lg lowercase rounded-full bg-brand hover:bg-brand-light active:bg-brand-dark text-brand-white"
            type="submit"
          >
            assinar
          </button>
        </form>
        <Copyright />
      </div>
    </Layout>
  );
}
