import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity" href="/">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center">
            <img src="/ift.png" alt="ift"></img>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a className="text-gray-700 hover:text-cyan-600 transition-colors font-medium" href="/">
            Cursos
          </a>
          <a className="text-gray-700 hover:text-cyan-600 transition-colors font-medium" href="/about">
            Sobre Nosotros
          </a>
        </nav>

        {/* User dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-2 rounded-md border border-input shadow-sm h-9 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="hidden sm:inline">federico</span>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="bg-white shadow-md rounded-md p-2 w-48">
            <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
              Perfil
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
              Configuración
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="my-1 border-t border-gray-200" />
            <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
              Cerrar sesión
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
};

export default Header;