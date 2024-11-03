export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-blue-300 text-white px-[160px] md:px-6 py-[60px] mt-[40px] flex md:flex-col justify-between gap-10"
      aria-labelledby="footer-title"
    >
      <section className="flex flex-col gap-6" aria-label="Contact Information">
        <h2 id="footer-title" className="font-bold text-[50px]">
          Контакты:
        </h2>
        <address className="not-italic text-[28px]">
          Телефон:{' '}
          <a href="tel:+77777982306" className="font-semibold text-white">
            +77777982306
          </a>
        </address>
      </section>

      <section
        className="flex flex-col gap-6"
        aria-labelledby="contact-form-title"
      >
        <h3 id="contact-form-title" className="sr-only">
          Contact Form
        </h3>
        <label htmlFor="name" className="sr-only">
          Имя
        </label>
        <input
          type="text"
          id="name"
          placeholder="Имя"
          className="w-[400px] bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
        />

        <label htmlFor="phone" className="sr-only">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Телефон"
          className="w-[400px] bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
        />

        <label htmlFor="comment" className="sr-only">
          Комментарий (не обязательно)
        </label>
        <textarea
          id="comment"
          placeholder="Комментарий (не обязательно)"
          className="w-[400px] bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
        />

        <button
          type="submit"
          className="text-center bg-white rounded-[80px] font-semibold text-blue-800 text-[18px] py-4 px-20"
          aria-label="Request a callback"
        >
          Заказать звонок
        </button>
      </section>
    </footer>
  );
}
