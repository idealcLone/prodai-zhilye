export default function Advantages() {
  return (
    <section
      className="px-[160px] md:px-6 pb-[200px]"
      aria-label="Advantages for customers"
    >
      <h2 className="text-center text-[90px] md:text-[48px] font-medium">
        <strong className={'font-bold'}>Преимущества</strong> для Вас
      </h2>

      <ul
        className="flex flex-col text-neutral-700 mt-[60px]"
        aria-label="List of customer advantages"
      >
        {/* Advantage 1 */}
        <li
          className="p-4 border-t border-neutral-300 flex md:flex-col gap-4 justify-between items-center"
          aria-label="Advantage 1: Fast service"
        >
          <article className="w-[400px] text-[20px] flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"
              aria-hidden="true"
            />
            <p>
              Задаток перечисляется в день обращения. Сделка за 1-2 дня -
              выбирайте удобную дату. Никто не любит терять время
            </p>
          </article>
          <h3 className="text-[60px] uppercase font-bold text-black">Быстро</h3>
          <span className="text-[24px] text-black" aria-hidden="true"></span>
        </li>

        {/* Advantage 2 */}
        <li
          className="p-4 border-t border-neutral-300 flex md:flex-col gap-4 justify-between items-center"
          aria-label="Advantage 2: Stress-free process"
        >
          <article className="w-[400px] text-[20px] flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"
              aria-hidden="true"
            />
            <p>
              Сделка происходит понятно и прогнозируемо. Не приходится пребывать
              в неведении, ожидая решения о покупке.
            </p>
          </article>
          <h3 className="text-[60px] uppercase pl-4 font-bold text-black">
            Без Стресса
          </h3>
          <span className="text-[24px] text-black" aria-hidden="true"></span>
        </li>

        {/* Advantage 3 */}
        <li
          className="p-4 border-t border-neutral-300 flex md:flex-col gap-4 justify-between items-center"
          aria-label="Advantage 3: Convenient process"
        >
          <article className="w-[400px] text-[20px] flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"
              aria-hidden="true"
            />
            <p>
              Вам не нужно проводить десятки показов, каждый раз согласовывая
              время и приводя квартиру "в порядок". Будет только 1 показ.
            </p>
          </article>
          <h3 className="text-[60px] uppercase font-bold text-black">Удобно</h3>
          <span className="text-[24px] text-black" aria-hidden="true"></span>
        </li>

        {/* Advantage 4 */}
        <li
          className="p-4 border-t border-b border-neutral-300 flex md:flex-col gap-4 justify-between items-center"
          aria-label="Advantage 4: Fair and transparent"
        >
          <article className="w-[400px] text-[20px] flex gap-2 items-center">
            <div
              className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"
              aria-hidden="true"
            />
            <p>
              Берем на себя обременнения, долги - все прозрачно учитываем в цене
              сделки, а не пугаем "сложностью ситуации".
            </p>
          </article>
          <h3 className="text-[60px] uppercase font-bold text-black">Честно</h3>
          <span className="text-[24px] text-black" aria-hidden="true"></span>
        </li>
      </ul>
    </section>
  );
}
