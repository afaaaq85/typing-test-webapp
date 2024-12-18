
import { Timer, RefreshCw } from 'lucide-react';

interface TestHeaderProps {
  timeLeft: number;
  onReset: () => void;
}

export default function TestHeader({ timeLeft, onReset }: TestHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-800">Typing Speed Test</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Timer className="w-5 h-5" />
          <span className="font-mono text-xl">{timeLeft}s</span>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  );
}