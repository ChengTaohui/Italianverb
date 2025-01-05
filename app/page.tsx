'use client';
import { useState } from 'react';
import ChatInterface from './components/ChatInterface';

interface VerbConjugation {
  tense: string;
  conjugations: {
    i: string;
    you: string;
    he: string;
    we: string;
    youPl: string;
    they: string;
  };
}

export default function Home() {
  const [selectedVerb, setSelectedVerb] = useState("parlare (to speak)");
  
  const conjugations: VerbConjugation[] = [
    {
      tense: "Present",
      conjugations: {
        i: "parlo",
        you: "parli",
        he: "parla",
        we: "parliamo",
        youPl: "parlate",
        they: "parlano"
      }
    },
    {
      tense: "Past",
      conjugations: {
        i: "ho parlato",
        you: "hai parlato",
        he: "ha parlato",
        we: "abbiamo parlato",
        youPl: "avete parlato",
        they: "hanno parlato"
      }
    },
    {
      tense: "Future",
      conjugations: {
        i: "parlerò",
        you: "parlerai",
        he: "parlerà",
        we: "parleremo",
        youPl: "parlerete",
        they: "parleranno"
      }
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Italian Verb Learner</h1>
      
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{selectedVerb}</h2>
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="py-4 text-gray-500">Tense</th>
              <th className="py-4">I</th>
              <th className="py-4">You</th>
              <th className="py-4">He/She/It</th>
              <th className="py-4">We</th>
              <th className="py-4">You (pl)</th>
              <th className="py-4">They</th>
            </tr>
          </thead>
          <tbody>
            {conjugations.map((conj, index) => (
              <tr key={conj.tense} className="border-t">
                <td className="py-4 text-gray-500">{conj.tense}</td>
                <td className="py-4">{conj.conjugations.i}</td>
                <td className="py-4">{conj.conjugations.you}</td>
                <td className="py-4">{conj.conjugations.he}</td>
                <td className="py-4">{conj.conjugations.we}</td>
                <td className="py-4">{conj.conjugations.youPl}</td>
                <td className="py-4">{conj.conjugations.they}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ChatInterface />
    </div>
  );
}
