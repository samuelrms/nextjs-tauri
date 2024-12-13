import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Teste
        <Link href="/teste">Pagina teste</Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        teste foo
      </footer>
    </>
  );
}
