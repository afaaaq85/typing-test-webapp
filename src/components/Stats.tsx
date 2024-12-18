import React from 'react';
import { Gauge, Target, Check, X } from 'lucide-react';

interface StatsProps {
  wpm: number;
  accuracy: number;
  correctWords: number;
  incorrectWords: number;
}

export default function Stats({ wpm, accuracy, correctWords, incorrectWords }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-indigo-600 mb-2">
          <Gauge className="w-5 h-5" />
          <h3 className="font-semibold">WPM</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">{wpm}</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-indigo-600 mb-2">
          <Target className="w-5 h-5" />
          <h3 className="font-semibold">Accuracy</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">{accuracy}%</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-green-600 mb-2">
          <Check className="w-5 h-5" />
          <h3 className="font-semibold">Correct</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">{correctWords}</p>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-red-600 mb-2">
          <X className="w-5 h-5" />
          <h3 className="font-semibold">Incorrect</h3>
        </div>
        <p className="text-2xl font-bold text-gray-800">{incorrectWords}</p>
      </div>
    </div>
  );
}