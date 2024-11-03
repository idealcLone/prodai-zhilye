export default function Hero() {
  return (
    <div className={'h-full mb-[150px]'}>
      <div className={'absolute top-0 left-0 w-screen h-screen -z-50'}>
        <img
          src={'/hero.jpg'}
          alt="Hero"
          className={'w-full h-full object-cover object-center'}
        />
      </div>

      <div className={'text-white px-[240px] pt-[30px]'}>
        <h1 className={'font-bold text-[80px] leading-[1.1] uppercase'}>
          Срочный <br /> <span className={'text-orange-500'}>выкуп</span>{' '}
          квартир <br /> <span className={'lowercase'}>в</span>{' '}
          <span className={'capitalize'}>Алматы</span>
        </h1>
        <ul className={'list-disc px-4 text-[28px] font-semibold mt-10'}>
          <li>Выкупим квартиру за 3 часа</li>
          <li>С долгами и обременениями</li>
          <li>Оценка за наш счет</li>
        </ul>

        <div className={'flex gap-4 mt-20'}>
          <div className={'flex flex-col gap-2 w-[300px]'}>
            <label htmlFor="phone">
              Оставьте заявку для бесплатной консультации:
            </label>
            <input
              id={'phone'}
              type="tel"
              placeholder="+7 777 777 77 77"
              pattern="\+7 \d{3} \d{3} \d{2} \d{2}"
              required
              className={'text-black h-[40px] px-4'}
            />
          </div>
          <button
            className={'h-[40px] self-end bg-orange-500 font-semibold px-6'}
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
}
