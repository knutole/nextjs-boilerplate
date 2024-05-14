import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Brefront
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
            Our Services{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore how Brefront can help your business integrate AI seamlessly.
          </p>
        </a>

        <a
          href="#about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about Brefront and our mission to empower businesses with
            AI.
          </p>
        </a>

        <a
          href="#contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get in touch with us to start your AI journey today.
          </p>
        </a>
      </div>

      <section id="services" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Our Services</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              AI Readiness Assessment
            </h3>
            <p>
              Evaluate your current infrastructure, data, and skills to
              understand your AI readiness.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Custom AI Solutions</h3>
            <p>
              Develop and implement AI models tailored to your business needs,
              including GenAI, RAG, and ML models.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Data Management</h3>
            <p>
              Integrate and manage your data efficiently to support your AI
              initiatives.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              AI Platform Development
            </h3>
            <p>
              Create scalable AI platforms and custom applications to meet your
              business goals.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Change Management</h3>
            <p>
              Ensure a smooth transition to AI with effective change management
              strategies and training programs.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              Support and Maintenance
            </h3>
            <p>
              Receive ongoing support and maintenance for your AI systems to
              ensure optimal performance.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">About Us</h2>
        <p className="text-center max-w-4xl mx-auto">
          Brefront is dedicated to helping Norwegian businesses harness the
          power of AI. With our team of experts, we provide comprehensive AI
          solutions that drive innovation and efficiency. Our mission is to
          empower your organization to thrive in the digital age.
        </p>
      </section>

      <section id="contact" className="py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Contact Us</h2>
        <p className="text-center max-w-4xl mx-auto mb-5">
          Ready to start your AI journey with Brefront? Get in touch with us
          today and let's discuss how we can help your business succeed.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:contact@brefront.no"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
