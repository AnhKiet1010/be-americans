'use client';

import { NavbarItems } from '@/constants/narbar-items';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import Logo from '@/components/logo';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { Submenu } from '@/types/submenu';
import Link from 'next/link';
import LanguageSwitcher from '@/components/language-switcher';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLocale } from 'next-intl';

export default function Header() {
  const locale = useLocale();
  const [currentSubMenu, setCurrentSubMenu] =
    useState<Submenu[]>([]);
  const [showSubmenu, setShowSubmenu] =
    useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function onClickItem(label: string) {
    const submenu = NavbarItems.find(
      (ele) => ele.label === label
    );
    setCurrentSubMenu(submenu.children);
    setShowSubmenu(true);
  }

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(
          event.target as Node
        )
      ) {
        setShowSubmenu(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  function handleLinkClick() {
    setShowSubmenu(false);
  }

  return (
    <header className="relative w-full">
      <nav className="flex items-center justify-between gap-2 px-6 border-b">
        <div className="flex items-center">
          <Logo />
          <div className="hidden xl:block">
            {NavbarItems.map((item) => {
              return (
                <Button
                  onClick={() =>
                    onClickItem(item.label)
                  }
                  variant="ghost"
                  key={item.label}
                  className="font-normal"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              );
            })}
          </div>
        </div>
        <div className="hidden xl:flex gap-2 items-center">
          <LanguageSwitcher />
          <Button>Contact</Button>
        </div>
        <div className="xl:hidden cursor-pointer">
          {showMenu ? (
            <X
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <Menu
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </nav>
      <div
        ref={submenuRef}
        className={`w-full max-h-min bg-white shadow-lg ${
          showSubmenu ? 'absolute' : 'hidden'
        } top-100 z-50`}
      >
        <div className="w-2/3 m-auto p-10">
          <div className="grid grid-cols-2 gap-2">
            {currentSubMenu.map((submenu) => (
              <Link
                href={`${
                  submenu.link.startsWith(
                    `/${locale}`
                  )
                    ? submenu.link
                    : `/${locale}${submenu.link}`
                }`}
                onClick={handleLinkClick}
                key={submenu.link}
                className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-md"
              >
                {submenu.icon}
                <div>
                  <p className="font-medium">
                    {submenu.label}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {submenu.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`w-full max-h-min bg-white ${
          showMenu ? 'absolute' : 'hidden'
        } top-100 z-50`}
      >
        <div className="w-full">
          <Accordion type="single" collapsible>
            {NavbarItems.map((item) => (
              <AccordionItem
                value={item.label}
                key={item.label}
                className="px-10"
              >
                <AccordionTrigger className="text-md font-semibold">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3 text-[16px]">
                  {item.children.map(
                    (submenu) => (
                      <Link
                        href={`${
                          submenu.link.startsWith(
                            `/${locale}`
                          )
                            ? submenu.link
                            : `/${locale}${submenu.link}`
                        }`}
                        onClick={handleLinkClick}
                        key={submenu.label}
                        className="flex items-start gap-2"
                      >
                        {submenu.icon}{' '}
                        <div>
                          <p className="font-medium">
                            {submenu.label}
                          </p>
                          <p className="text-sm text-gray-500">
                            {submenu.desc}
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="w-full flex flex-col">
            <LanguageSwitcher />
            <div className="w-full px-10 py-6 border-t">
              <Button className="w-full text-md">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
