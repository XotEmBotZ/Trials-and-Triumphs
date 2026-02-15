'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { useEffect } from 'react';

export default function CharacterSelectionPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleComplete = () => {
    // Logic to save selections and redirect
    router.push('/status');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Select Your Characters</h1>
      <p className="mb-8">Each team must select 3 unique characters.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        {/* Character cards will be mapped here */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg text-center">
          <p className="text-gray-500">Character Placeholder</p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg text-center">
          <p className="text-gray-500">Character Placeholder</p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-lg text-center">
          <p className="text-gray-500">Character Placeholder</p>
        </div>
      </div>

      <button 
        onClick={handleComplete}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded font-bold"
      >
        Finalize Team
      </button>
    </main>
  );
}
