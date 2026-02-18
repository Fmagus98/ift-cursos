import React, { useState } from "react";

export const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false); // Cambiar de nuevo a "Copiar" después de 2 segundos
    }, 1000);
  };

  return (
    <button
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-8 rounded-md px-3 text-xs absolute top-3 right-3 transition-all duration-300 shadow-lg bg-cyan-600 hover:bg-cyan-700"
      onClick={copyToClipboard}
      disabled={copied} // Deshabilitar el botón cuando se ha copiado
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-copy w-4 h-4 mr-1"
        aria-hidden="true"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
      </svg>
      {copied ? "Copiado ✓" : "Copiar"}
    </button>
  );
};

export default CopyButton;
