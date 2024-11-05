async function handleSubmit(formData) {
  'use server';

  const name = formData.get('name');
  const phone = formData.get('phone');
  const comment = formData.get('comment');

  const text = `Поступила завяка для бесплатной консультации\nИмя: ${name}\nНомер: ${phone}\nКоммент: ${comment}`;

  const response = await fetch('https://inticus.com/bot/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      telegramUserId: '392596958',
      chatId: '392596958',
    }),
  });

  if (response.ok) {
    // Return success status
    return { success: true };
  } else {
    // Return error status
    return { success: false };
  }
}

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

      <form
        className="flex flex-col gap-6 max-w-full"
        aria-labelledby="contact-form-title"
        action={handleSubmit}
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
          name="name" // Add the name attribute
          placeholder="Имя"
          className="w-[400px] max-w-full bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
        />

        <label htmlFor="phone" className="sr-only">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone" // Add the name attribute
          placeholder="Телефон"
          className="w-[400px] max-w-full bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]"
        />

        <label htmlFor="comment" className="sr-only">
          Комментарий (не обязательно)
        </label>
        <textarea
          id="comment"
          name="comment" // Add the name attribute
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
