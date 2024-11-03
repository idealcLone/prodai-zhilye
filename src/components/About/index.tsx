export default function About() {
  return (
    <section id="services" aria-label="About the ПродайЖилье service">
      <div className="flex gap-10 p-20 pt-40 md:p-6 md:flex-col">
        <header>
          <h2 className="text-[80px] md:text-[60px]">
            О сервисе <br />
            <strong>ПродайЖилье</strong>
          </h2>
          <figure className="mr-[20px] mt-[120px] text-center relative overflow-hidden">
            <div className="font-bold text-[90px]">1200+</div>
            <figcaption>квартир уже выкуплено нами</figcaption>
            <div className="-z-50 absolute w-[750px] border-[2px] top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 border-yellow-400 rounded-full aspect-square"></div>
          </figure>
        </header>

        <article className="text-[32px] pt-[100px] flex flex-col gap-12 text-[#777]">
          <p>
            <strong className={'text-orange-500'}>
              Мы не агентство недвижимости
            </strong>
            , а финансовые инвесторы. Выкупаем квартиры на собственные деньги,
            вкладываем в их ремонт и предпродажную подготовку. Затем реализуем
            на рынке.
          </p>
          <div className="w-40 h-[2px] bg-red-600"></div>
          <p>
            <strong className={'text-orange-500'}>Мы не риелторы</strong>, и не
            заинтересованы в том, чтобы показывать вашу квартиру многим
            потенциальным покупателям. Наоборот, наш бизнес - быстрые сделки.
            Время - деньги.
          </p>
          <div
            className="rounded-full bg-blue-500 w-[200px] h-[200px] text-[16px] flex flex-col justify-center items-center text-white text-center"
            aria-label="Estimated buy price"
          >
            <div className="text-[40px] font-bold">90%</div>
            <div>От рыночной цены квартиры</div>
          </div>
        </article>
      </div>

      <div className="flex flex-col gap-10 px-40 md:px-6 my-40 md:my-6">
        <h3 className="text-[70px] pl-6">
          Три <br /> быстрых <br /> <strong>шага</strong>
        </h3>
        <ul
          className="grid grid-cols-3 md:grid-cols-1 gap-10 md:gap-20"
          aria-label="Three steps for apartment selling"
        >
          <li
            className="flex flex-col gap-6 relative"
            aria-label="Step 1: Evaluation"
          >
            <img
              src="/1_Stroke.svg"
              alt="Step 1: Evaluation"
              className="absolute top-[-20%] right-[-10%] w-[200px] -z-50 opacity-[30%]"
            />
            <div className={'w-[60%] text-center'}>
              <div className="text-[32px] font-bold">Оценка</div>
            </div>
            <div className="w-full h-[2px] bg-amber-800 mb-6 opacity-[20%]" />
            <p className="text-gray-500 text-[20px] text-center px-6">
              Расскажите о своей квартире и ответьте на несколько вопросов. Это
              занимает менее 10 минут
            </p>
          </li>

          <li
            className="flex flex-col gap-6 relative"
            aria-label="Step 2: Offer"
          >
            <img
              src="/2_Stroke.svg"
              alt="Step 2: Offer"
              className="absolute top-[-20%] right-[-10%] w-[200px] -z-50 opacity-[30%]"
            />
            <div className={'w-[60%] text-center'}>
              <div className="text-[32px] font-bold">Предложение</div>
            </div>
            <div className="w-full h-[2px] bg-amber-800 mb-6 opacity-[20%]" />
            <p className="text-gray-500 text-[20px] text-center px-6">
              Получите лучшее текущее предложение с минимальным дисконтом от
              рыночной цены - учтем ваши пожелания
            </p>
          </li>

          <li
            className="flex flex-col gap-6 relative"
            aria-label="Step 3: Advance"
          >
            <img
              src="/3_Stroke.svg"
              alt="Step 3: Advance payment"
              className="absolute top-[-20%] right-[-10%] w-[200px] -z-50 opacity-[30%]"
            />
            <div className={'w-[60%] text-center'}>
              <div className="text-[32px] font-bold pl-6">Аванс</div>
            </div>
            <div className="w-full h-[2px] bg-amber-800 mb-6 opacity-[20%]" />
            <p className="text-gray-500 text-[20px] text-center px-6">
              Заберите задаток и утвердите дату сделки купли-продажи (обычно
              сделка проходит в течение двух дней)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
