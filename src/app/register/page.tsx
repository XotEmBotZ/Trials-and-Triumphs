'use client';

import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to store team data in local state/context will go here
    router.push('/select-characters');
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Team Registration</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div>
          <label className="block mb-2">Team Name</label>
          <input type="text" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" required />
        </div>
        <div>
          <label className="block mb-2">Player 1 Name</label>
          <input type="text" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" required />
        </div>
        <div>
          <label className="block mb-2">Player 2 Name</label>
          <input type="text" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" required />
        </div>
        <div>
          <label className="block mb-2">Player 3 Name</label>
          <input type="text" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" required />
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-bold">
          Continue to Character Selection
        </button>
      </form>
    </main>
  );
}
