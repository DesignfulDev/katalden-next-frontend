import { Html, Head, Main, NextScript } from 'next/document';
import { motion, AnimatePresence } from 'framer-motion';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
