import { Link, useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  return (
    user && (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/">
            <img src="/ift.png" alt="ift" className="w-20 h-20" />
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              className="text-gray-700 hover:text-cyan-600 font-medium"
              href="/home"
            >
              Cursos
            </a>
            {/* <a
            className="text-gray-700 hover:text-cyan-600 font-medium"
            href="/algorithms"
          >
            Algoritmos
          </a> */}
            <a
              className="text-gray-700 hover:text-cyan-600 font-medium"
              href="/about"
            >
              Sobre Nosotros
            </a>
          </nav>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-2 rounded-md border h-9 px-4 text-sm font-medium">
                <span className="sm:inline">{user.email}</span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-md rounded-md p-2 w-48">
              <Link to="/profile">
                <DropdownMenu.Item className="px-2 py-1 hover:bg-gray-100 rounded">
                  Perfil
                </DropdownMenu.Item>
              </Link>
              <DropdownMenu.Separator className="my-1 border-t border-gray-200" />
              <DropdownMenu.Item
                onClick={handleLogout}
                className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer"
              >
                Cerrar sesión
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </header>
    )
  );
};

export default Header;
