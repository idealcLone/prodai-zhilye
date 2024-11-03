export default function Feedback() {
  const data = [
    {
      name: 'Аслан',
      text: 'Переезд вынудил меня срочно продавать квартиру. Знакомый риелтор сразу сказал, что хорошую цену я получу в лучшем случае через 2-3 месяца непрерывной продажи. Но я ждать не мог, а потому воспользовался услугой срочного выкупа, сохранив время для бизнеса и семьи.',
      image: '/IMG_0194.jpg',
    },
    {
      name: 'Мадина',
      text: 'Это моя вторая продажа квартиры. Никогда не забуду первой, когда риелторы звонили даже ночью, а для показа приходилось вырываться с работы. Нет, теперь все прошло куда спокойнее и проще - эксперт приехал в удобное именно мне время, все посмотрел, и в следующий раз мы встретились уже при подписании документов.',
      image: '/IMG_0195.jpg',
    },
    {
      name: 'Максат',
      text: 'Моя квартира "висела" на нескольких сайтах. Просмотры постоянно росли, но звонков было мало, да и те от посредников, которые хотели сбить цену. Больше угнетала не цена, которую они предлагали, а ожидание и отсутствие хоть какой-то конкретики. Срочный выкуп оказался вариантом, который сразу решил все мои проблемы.',
      image: '/IMG_0196.jpg',
    },
    {
      name: 'Марат и Амангуль',
      text: 'По личным обстоятельствам пришлось поспешно продать квартиру. По словам знакомого риелтора, для получения хорошей цены понадобилось бы несколько месяцев активных продаж. Но вместо долгого ожидания мы решили воспользоваться услугой срочного выкупа.',
      image: '/IMG_0197.jpg',
    },
  ];

  return (
    <section
      id="feedback"
      className="px-[160px] md:px-6 pt-[100px] text-[20px]"
      aria-labelledby="feedback-title"
    >
      <h2
        id="feedback-title"
        className="text-[60px] text-center font-bold mb-10"
      >
        Отзывы
      </h2>

      <ul
        className="grid grid-cols-1 gap-8 w-[80%] md:w-full mx-auto"
        role="list"
        aria-label="Customer feedback"
      >
        {data.map((item, index) => (
          <li
            key={index}
            className={`flex md:flex-col shadow-md rounded-md overflow-hidden ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
            aria-label={`Feedback from ${item.name}`}
          >
            <img
              src={item.image}
              alt={`Фото ${item.name}`}
              className="h-[400px] object-contain object-center"
            />
            <div className="text-[18px] md:text-[16px] p-4 flex flex-col gap-2 flex-1 overflow-auto">
              <h3 className="font-bold">{item.name}</h3>
              <p className={'text-justify md:text-left'}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
