import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-300">
            Velkommen til Brefront
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Din AI-partner i Norge
          </p>
        </header>

        {/* Hero Section */}
        <section className="relative w-full h-[400px] mb-16">
          <Image
            src="https://via.placeholder.com/1200x400.png?text=AI+Integration"
            alt="AI Integration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Våre Tjenester
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-300">
                AI Klarhetsvurdering
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vurder din nåværende infrastruktur, data og ferdigheter for å
                forstå din AI-beredskap.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-300">
                Tilpassede AI-løsninger
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Utvikle og implementere AI-modeller skreddersydd til dine
                forretningsbehov, inkludert GenAI, RAG og ML-modeller.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-300">
                Databehandling
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Integrer og administrer dataene dine effektivt for å støtte dine
                AI-initiativ.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-300">
                AI Plattformutvikling
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Skap skalerbare AI-plattformer og tilpassede applikasjoner for å
                nå dine forretningsmål.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-300">
                Endringsledelse
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sørg for en jevn overgang til AI med effektive
                endringsledelsesstrategier og treningsprogrammer.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-300">
                Støtte og Vedlikehold
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Motta kontinuerlig støtte og vedlikehold for dine AI-systemer
                for å sikre optimal ytelse.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-blue-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Om Oss
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="lg:w-1/2">
              <Image
                src="https://via.placeholder.com/600x400.png?text=About+Us"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-700 dark:text-gray-300">
                Brefront er dedikert til å hjelpe norske bedrifter med å utnytte
                kraften i AI. Med vårt team av eksperter, tilbyr vi omfattende
                AI-løsninger som driver innovasjon og effektivitet. Vår misjon
                er å styrke din organisasjon til å lykkes i den digitale
                tidsalderen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Kontakt Oss
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
            Klar til å starte din AI-reise med Brefront? Ta kontakt med oss i
            dag og la oss diskutere hvordan vi kan hjelpe din bedrift å lykkes.
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

        {/* Footer Section */}
        <footer className="text-center py-6 text-gray-700 dark:text-gray-300">
          <p>
            By{" "}
            <a
              className="inline-flex place-items-center gap-2 text-blue-600 dark:text-blue-300"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
