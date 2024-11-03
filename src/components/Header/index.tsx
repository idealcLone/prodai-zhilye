import Link from 'next/link';

export default function Header() {
  return (
    <header className={'bg-white px-20 py-4 sticky top-0 left-0 z-50'}>
      <nav className={'flex justify-between items-center gap-4'}>
        <h2 className={'font-bold text-[24px]'}>
          <Link href="/">ПродайЖилье</Link>
        </h2>
        <div className={'flex items-center gap-10 md:gap-4 text-[20px]'}>
          <div>
            <strong>+77777982306</strong> <br />{' '}
            <span className={'underline'}>Заказать звонок</span>
          </div>
          <a href={'#services'} className={'md:hidden'}>
            О Сервисе
          </a>
          <a href={'#advantages'} className={'md:hidden'}>
            Преимущества
          </a>
          <a href={'#feedback'} className={'md:hidden'}>
            Отзывы
          </a>
        </div>
        <a
          href="https://wa.me/+77777982306"
          target={'_blank'}
          className={'flex gap-2 items-center'}
        >
          <div>Cвяжитесь с нами прямо сейчас &rarr;</div>
          <i className="fa-brands fa-square-whatsapp text-[40px] text-green-500"></i>
        </a>
      </nav>
    </header>
  );
}
