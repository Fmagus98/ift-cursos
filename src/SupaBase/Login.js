import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", submit: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault(); 
  setErrors({ email: "", password: "", submit: "" });

  if (!email) {
    setErrors((prev) => ({ ...prev, email: "El email es requerido" }));
    return;
  }
  if (!password) {
    setErrors((prev) => ({ ...prev, password: "La contraseña es requerida" }));
    return;
  }

  setIsLoading(true);
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  setIsLoading(false);

  if (error) setErrors((prev) => ({ ...prev, submit: error.message }));
  else navigate("/Home");
};

useEffect(() => {
  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      if (session) {
        navigate("/home");
      }
    }
  );

  return () => {
    listener.subscription.unsubscribe();
  };
}, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-1">
          <img src="/ift.png" alt="IFT" className="w-20 h-20 mx-auto" />
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow border-2 border-gray-200 shadow-xl">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="font-bold text-2xl text-center">Iniciar Sesión</h2>
            <p className="text-sm text-muted-foreground text-center">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </div>
          <div className="p-6 pt-0">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <div className="flex items-center border rounded-md p-2 w-full">
                  <Mail className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: "", submit: "" }));
                    }}
                    className="flex-1 outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="password">Contraseña</label>
                <div className="flex items-center border rounded-md p-2 w-full">
                  <Lock className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        password: "",
                        submit: "",
                      }));
                    }}
                    className="flex-1 outline-none"
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password}
                  </p>
                )}
              </div>

              {errors.submit && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.submit}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-cyan-600 text-white p-2 text-sm font-medium hover:bg-cyan-700 disabled:opacity-50 transition"
              >
                {isLoading ? "Ingresando..." : "Iniciar Sesión"}
                {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
              </button>
            </form>

            {/* <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm">
              <p className="font-semibold mb-1">💡 Credenciales de Demo:</p>
              <p>
                <strong>Admin:</strong> admin@codigoacademy.com / admin123
              </p>
              <p className="mt-1">O crea una cuenta nueva en el registro</p>
            </div> */}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes cuenta?{" "}
                <Link
                  to="/register"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold hover:underline"
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
