'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full px-20 md:px-4 py-4 sticky top-0 left-0 z-50">
      <nav
        className="flex justify-between items-center gap-4"
        aria-label="Main navigation"
      >
        <h1 className="font-bold text-[24px]">
          <Link href="/" aria-label="Homepage link for ПродайЖилье">
            ПродайЖилье
          </Link>
        </h1>

        <div className="flex items-center gap-10 md:gap-4 text-[20px]">
          <a
            href="#services"
            className="md:hidden"
            aria-label="Learn about our service"
          >
            О Сервисе
          </a>
          <a
            href="#advantages"
            className="md:hidden"
            aria-label="Learn about our advantages"
          >
            Преимущества
          </a>
          <a
            href="#feedback"
            className="md:hidden"
            aria-label="Read client feedback"
          >
            Отзывы
          </a>
        </div>

        <div
          className={
            'fixed bottom-10 right-10 bg-white text-[18px] p-2 rounded-md border border-orange-600'
          }
        >
          {!isOpen && (
            <div
              onClick={() => setIsOpen(true)}
              className={'flex gap-2 items-center cursor-pointer'}
            >
              <div className="md:hidden">
                Свяжитесь с нами прямо сейчас &rarr;
              </div>
              <i
                className="fa-brands fa-square-whatsapp text-[28px] text-green-500"
                aria-hidden="true"
              ></i>
            </div>
          )}
          {isOpen && (
            <div>
              <div>
                <a href="tel:+77777982306" aria-label="Order a callback">
                  Заказать звонок: <strong>+77777982306</strong>
                </a>
              </div>
              <a
                href="https://wa.me/+77777982306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center md:flex-col"
                aria-label="Contact us on WhatsApp"
              >
                <div className="md:hidden">
                  Свяжитесь с нами прямо сейчас &rarr;
                </div>
                <i
                  className="fa-brands fa-square-whatsapp text-[28px] text-green-500"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
