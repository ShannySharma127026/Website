function Contact() {
  return (
    <section
      id="contact"
      className="ml-72 bg-[#111827] text-white px-20 py-24"
    >
      <h2 className="text-5xl font-bold text-cyan-400">
        Contact Me
      </h2>

      <form className="mt-12 max-w-3xl space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg bg-slate-800 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg bg-slate-800 outline-none"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-slate-800 outline-none"
        ></textarea>

        <button className="bg-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-600">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;