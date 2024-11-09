'use client';

import { toast } from 'react-toastify';

export default function Footer() {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const comment = formData.get('comment');

    await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        comment,
      }),
    });

    toast.success('Заявка успешно отправлена!');
  };

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

      <form
        className="flex flex-col gap-6 max-w-full"
        aria-labelledby="contact-form-title"
        onSubmit={onSubmit}
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
          name="name"
          placeholder="Имя"
          className="w-[400px] max-w-full bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
          required
        />

        <label htmlFor="phone" className="sr-only">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Телефон"
          className="w-[400px] max-w-full bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
          required
        />

        <label htmlFor="comment" className="sr-only">
          Комментарий (не обязательно)
        </label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Комментарий (не обязательно)"
          className="w-[400px] max-w-full bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
        />

        <button
          type="submit"
          className="text-center bg-white rounded-[80px] font-semibold text-blue-800 text-[18px] py-4 px-20 z-[51]"
          aria-label="Request a callback"
        >
          Заказать звонок
        </button>
      </form>
    </footer>
  );
}
