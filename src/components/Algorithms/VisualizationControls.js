import { Play, Pause, RotateCcw, SkipForward } from 'lucide-react';
import { cn } from './utils';

export const VisualizationControls = ({ 
  isPlaying, 
  onPlay, 
  onPause, 
  onReset, 
  onStep,
  speed,
  onSpeedChange 
}) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 border border-border shadow-lg backdrop-blur-md z-10" data-testid="visualization-controls">
      <button
        onClick={onReset}
        data-testid="reset-button"
        className={cn(
          "p-2 rounded-full transition-colors",
          "hover:bg-slate-100 dark:hover:bg-slate-800",
          "text-slate-600 dark:text-slate-300"
        )}
        title="Reiniciar"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
      
      {isPlaying ? (
        <button
          onClick={onPause}
          data-testid="pause-button"
          className={cn(
            "p-3 rounded-full transition-colors",
            "bg-cyan-600 hover:bg-cyan-700 text-white"
          )}
          title="Pausar"
        >
          <Pause className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={onPlay}
          data-testid="play-button"
          className={cn(
            "p-3 rounded-full transition-colors",
            "bg-cyan-600 hover:bg-cyan-700 text-white"
          )}
          title="Reproducir"
        >
          <Play className="w-5 h-5" />
        </button>
      )}
      
      <button
        onClick={onStep}
        data-testid="step-button"
        className={cn(
          "p-2 rounded-full transition-colors",
          "hover:bg-slate-100 dark:hover:bg-slate-800",
          "text-slate-600 dark:text-slate-300"
        )}
        title="Paso a paso"
      >
        <SkipForward className="w-5 h-5" />
      </button>
      
      <div className="h-6 w-px bg-border mx-1" />
      
      <div className="flex items-center gap-2 px-2">
        <span className="text-xs text-muted-foreground">Velocidad:</span>
        <input
          type="range"
          min="1"
          max="5"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          data-testid="speed-slider"
          className="w-20 accent-cyan-600"
        />
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400 w-4">{speed}x</span>
      </div>
    </div>
  );
};