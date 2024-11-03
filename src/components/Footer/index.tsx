export default function Footer() {
  return (
    <footer
      id={'contacts'}
      className={
        'bg-blue-300 text-white px-[160px] py-[60px] mt-[40px] flex justify-between gap-10'
      }
    >
      <div className={'flex flex-col gap-6'}>
        <div className={'text-bold text-[50px]'}>Контакты:</div>
        <div className={'text-[28px]'}>
          Телефон: <strong>+77777982306</strong>
        </div>
      </div>
      <div className={'flex flex-col gap-6'}>
        <input
          type="text"
          placeholder={'Имя'}
          className={
            'w-[400px] bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]'
          }
        />
        <input
          type="tel"
          placeholder={'Телефон'}
          className={
            'w-[400px] bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]'
          }
        />
        <textarea
          placeholder={'Комментарий (не обязательно)'}
          className={
            'w-[400px] bg-blue-300 text-white border-b border-white pb-2 placeholder:text-white outline-none text-[18px]'
          }
        />
        <button
          className={
            'text-center bg-white rounded-[80px] font-semibold text-blue-800 text-[18px] py-4 px-20'
          }
        >
          Заказать звонок
        </button>
      </div>
    </footer>
  );
}
