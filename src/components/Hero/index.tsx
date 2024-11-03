export default function Hero() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //
  //   const response = await fetch('/api/callback', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, phone, comment }),
  //   });
  //
  //   if (response.ok) {
  //     alert('Callback request sent successfully!');
  //     setName('');
  //     setPhone('');
  //     setComment('');
  //   } else {
  //     alert('Failed to send callback request.');
  //   }
  // };

  return (
    <section
      className="h-full mb-[150px] relative flex items-center"
      aria-label="Hero section for apartment buying service in Almaty"
    >
      <div className="absolute top-0 left-0 w-screen h-screen -z-50">
        <img
          src="/hero.jpg"
          alt="Background showing apartments in Almaty, Kazakhstan"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className={
          'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black to-transparent opacity-[50%] z-[-40]'
        }
      />

      <header className="text-white px-[160px] md:px-6 mt-[110px]">
        <h1 className="font-bold text-[80px] leading-[1.1] uppercase">
          Срочный <br /> <span className="text-orange-500">выкуп</span> квартир{' '}
          <br /> <span className="lowercase">в</span>{' '}
          <span className="capitalize">Алматы</span>
        </h1>
        <h2 className="sr-only">Fast apartment purchasing service in Almaty</h2>

        <ul className="list-disc px-4 text-[28px] font-semibold mt-10">
          <li>Выкупим квартиру за 3 часа</li>
          <li>С долгами и обременениями</li>
          <li>Оценка за наш счет</li>
        </ul>

        <form
          className="flex gap-4 md:flex-col mt-20"
          aria-labelledby="consultation-form"
        >
          <div className="flex flex-col gap-2 w-[300px]">
            <label htmlFor="phone" id="consultation-form">
              Оставьте заявку для бесплатной консультации:
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+7 777 777 77 77"
              pattern="\+7 \d{3} \d{3} \d{2} \d{2}"
              required
              aria-required="true"
              className="text-black h-[40px] px-4"
            />
          </div>
          <button
            type="submit"
            className="h-[40px] self-end bg-orange-500 font-semibold px-6"
            aria-label="Request a callback"
          >
            Заказать звонок
          </button>
        </form>
      </header>
    </section>
  );
}
