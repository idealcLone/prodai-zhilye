export default function About() {
  return (
    <div id={'services'}>
      <div className={'flex gap-10 p-20'}>
        <div>
          <h2 className={'text-[80px]'}>
            О сервисе <br />
            <strong>ПродайЖилье</strong>
          </h2>
          <div className={'mr-[20px] mt-[120px] text-center relative'}>
            <div className={'font-bold text-[90px]'}>1200+</div>
            <div>квартир уже выкуплено нами</div>
            <div
              className={
                '-z-50 absolute w-[750px] border-[2px] top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 border-yellow-400 rounded-full aspect-square'
              }
            ></div>
          </div>
        </div>
        <div
          className={
            'text-[32px] pt-[100px] flex flex-col gap-12 text-gray-500'
          }
        >
          <p>
            <strong className={'underline'}>
              Мы не агентство недвижимости
            </strong>
            , а финансовые инвесторы. Выкупаем квартиры на собственные деньги,
            вкладываем в их ремонт и предпродажную подготовку. Затем реализуем
            на рынке.
          </p>
          <div className={'w-40 h-[2px] bg-red-600'}></div>
          <p>
            <strong className={'underline'}>Мы не риелторы</strong>, и не
            заинтересованы в том, чтобы показывать вашу квартиру многим
            потенциальным покупателям. Наоборот, наш бизнес - быстрые сделки.
            Время - деньги.
          </p>
          <div
            className={
              'rounded-full bg-blue-500 w-[200px] h-[200px] text-[16px] flex flex-col justify-center items-center text-white text-center'
            }
          >
            <div className={'text-[40px] font-bold'}>90%</div>
            <div>От рыночной цены квартиры</div>
          </div>
        </div>
      </div>
      <div className={'flex flex-col gap-10 px-40 my-40'}>
        <h3 className={'text-[70px] pl-6'}>
          Три <br /> быстрых <br /> <strong>шага</strong>
        </h3>
        <ul className={'grid grid-cols-3 gap-10'}>
          <li className={'flex flex-col gap-6 relative'}>
            <img
              src="/1_Stroke.svg"
              alt="1"
              className={
                'absolute top-[-20%] left-[30%] w-[200px] -z-50 opacity-[30%]'
              }
            />
            <div className={'text-[32px] font-bold pl-6'}>Оценка</div>
            <div className={'w-full h-[2px] bg-amber-800 mb-6 opacity-[20%]'} />
            <p className={'text-gray-500 text-[18px] text-center px-6'}>
              Расскажите о своей квартире и ответьте на несколько вопросов. Это
              занимает менее 10 минут
            </p>
          </li>
          <li className={'flex flex-col gap-6 relative'}>
            <img
              src="/2_Stroke.svg"
              alt="2"
              className={
                'absolute top-[-20%] left-[40%] w-[200px] -z-50 opacity-[30%]'
              }
            />
            <div className={'text-[32px] font-bold text-center'}>
              Предложение
            </div>
            <div className={'w-full h-[2px] bg-amber-800 mb-6 opacity-[20%]'} />
            <p className={'text-gray-500 text-[18px] text-center px-6'}>
              Получите лучшее текущее предложение с минимальным дисконтом от
              рыночной цены - учтем ваши пожелания
            </p>
          </li>
          <li className={'flex flex-col gap-6 relative'}>
            <img
              src="/3_Stroke.svg"
              alt="3"
              className={
                'absolute top-[-20%] left-[30%] w-[200px] -z-50 opacity-[30%]'
              }
            />
            <div className={'text-[32px] font-bold pl-6'}>Аванс</div>
            <div className={'w-full h-[2px] bg-amber-800 mb-6 opacity-[20%]'} />
            <p className={'text-gray-500 text-[18px] text-center px-6'}>
              Заберите задаток и утвердите дату сделки купли-продажи (обычно
              сделка проходит в течение двух дней)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
