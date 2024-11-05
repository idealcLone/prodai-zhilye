import Image from 'next/image';

async function handleSubmit(formData: FormData) {
  'use server';

  const phone = formData.get('phone');

  const text = `Поступила завяка для бесплатной консультации\nНомер: ${phone}`;

  await fetch('https://inticus.com/bot/send-message', {
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
}

export default function Hero() {
  return (
    <section
      className="h-full mb-[150px] relative flex items-center"
      aria-label="Hero section for apartment buying service in Almaty"
    >
      <div className="absolute top-0 left-0 w-screen h-screen -z-50">
        <Image
          src="/hero.jpg"
          alt="Background showing apartments in Almaty, Kazakhstan"
          className="w-full h-full object-cover object-center"
          fill={true}
        />
      </div>
      <div
        className={
          'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black to-transparent opacity-[50%] z-[-40]'
        }
      />

      <header className="text-white px-[160px] md:px-6 mt-[110px] md:mt-10">
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
          className="flex gap-4 md:flex-col mt-20 md:mt-4"
          aria-labelledby="consultation-form"
          action={handleSubmit}
        >
          <div className="flex flex-col gap-2 w-[300px]">
            <label htmlFor="phone" id="consultation-form">
              Оставьте заявку для бесплатной консультации:
            </label>
            <input
              id="phone"
              name="phone" // Add the name attribute
              type="tel"
              placeholder="+7 777 777 77 77"
              required
              aria-required="true"
              className="text-black h-[40px] px-4"
            />
          </div>
          <button
            type="submit"
            className="h-[40px] self-end md:self-start bg-orange-500 font-semibold px-6"
            aria-label="Request a callback"
          >
            {'Заказать звонок'}
          </button>
        </form>
      </header>
    </section>
  );
}
