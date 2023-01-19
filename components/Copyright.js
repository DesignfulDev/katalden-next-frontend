export default function Copyright() {
  return (
    <footer className="py-5 mx-auto text-sm font-light text-center md:text-[1vw]">
      <p className="uppercase">
        Copyright &copy; {new Date().getFullYear()} Katharine Alden
      </p>
      <p className="pt-1">Todos os Direitos Reservados</p>
    </footer>
  );
}
