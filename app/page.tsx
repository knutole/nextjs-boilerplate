import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Velkommen til Brefront
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="#services"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Våre Tjenester{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Utforsk hvordan Brefront kan hjelpe din bedrift med å integrere AI
            sømløst.
          </p>
        </a>

        <a
          href="#about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Om Oss{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Lær mer om Brefront og vår misjon om å styrke bedrifter med AI.
          </p>
        </a>

        <a
          href="#contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Kontakt{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Ta kontakt med oss for å starte din AI-reise i dag.
          </p>
        </a>
      </div>

      <section id="services" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Våre Tjenester</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              AI Klarhetsvurdering
            </h3>
            <p>
              Vurder din nåværende infrastruktur, data og ferdigheter for å
              forstå din AI-beredskap.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              Tilpassede AI-løsninger
            </h3>
            <p>
              Utvikle og implementere AI-modeller skreddersydd til dine
              forretningsbehov, inkludert GenAI, RAG og ML-modeller.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Databehandling</h3>
            <p>
              Integrer og administrer dataene dine effektivt for å støtte dine
              AI-initiativ.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              AI Plattformutvikling
            </h3>
            <p>
              Skap skalerbare AI-plattformer og tilpassede applikasjoner for å
              nå dine forretningsmål.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Endringsledelse</h3>
            <p>
              Sørg for en jevn overgang til AI med effektive
              endringsledelsesstrategier og treningsprogrammer.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              Støtte og Vedlikehold
            </h3>
            <p>
              Motta kontinuerlig støtte og vedlikehold for dine AI-systemer for
              å sikre optimal ytelse.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Om Oss</h2>
        <p className="text-center max-w-4xl mx-auto">
          Brefront er dedikert til å hjelpe norske bedrifter med å utnytte
          kraften i AI. Med vårt team av eksperter, tilbyr vi omfattende
          AI-løsninger som driver innovasjon og effektivitet. Vår misjon er å
          styrke din organisasjon til å lykkes i den digitale tidsalderen.
        </p>
      </section>

      <section id="contact" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Kontakt Oss</h2>
        <p className="text-center max-w-4xl mx-auto mb-5">
          Klar til å starte din AI-reise med Brefront? Ta kontakt med oss i dag
          og la oss diskutere hvordan vi kan hjelpe din bedrift å lykkes.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:contact@brefront.no"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Send oss en e-post
          </a>
        </div>
      </section>
    </main>
  );
}
