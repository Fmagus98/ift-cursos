import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from './utils';

export const CodeBlock = ({ code, language = 'python', title, highlightLines = [] }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback to older method
      try {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy text:', fallbackErr);
      }
    }
  };

  const lines = code.split('\n');

  return (
    <div className="relative rounded-lg overflow-hidden bg-slate-950 border border-slate-800 text-sm" data-testid="code-block">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400">
        <span className="text-xs font-mono">{title || language}</span>
        <button
          onClick={handleCopy}
          data-testid="copy-button"
          className="p-1.5 rounded hover:bg-slate-800 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-4">
          <code className="font-mono text-sm">
            {lines.map((line, index) => (
              <div
                key={index}
                className={cn(
                  "code-line",
                  highlightLines.includes(index + 1) && "highlight"
                )}
              >
                <span className="text-slate-600 select-none inline-block w-8">{index + 1}</span>
                <span className="text-slate-200">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};