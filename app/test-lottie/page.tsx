'use client';

import { useEffect, useState } from 'react';
import LottieAnimation from '@/components/LottieAnimation';

export default function TestLottiePage() {
  const [animations, setAnimations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const animationFiles = [
      '/animations/phone-ring.json',
      '/animations/ai-process.json',
      '/animations/checkmark.json',
      '/animations/star.json',
    ];

    Promise.all(
      animationFiles.map(async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Failed to fetch ${url}`);
          const data = await response.json();
          return { url, data, error: null };
        } catch (error) {
          return { url, data: null, error: String(error) };
        }
      })
    ).then((results) => {
      setAnimations(results.map(r => r.data));
      setErrors(results.filter(r => r.error).map(r => `${r.url}: ${r.error}`));
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Lottie Animation Test</h1>

        {loading && <p className="text-xl">Loading animations...</p>}

        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h2 className="font-bold">Errors:</h2>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animations.map((animData, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Animation {idx + 1}</h3>

              {animData ? (
                <>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <LottieAnimation
                      animationData={animData}
                      width={200}
                      height={200}
                      loop={true}
                    />
                  </div>
                  <div className="text-sm text-green-600">✓ Loaded successfully</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Size: {animData.w}x{animData.h}<br/>
                    Frames: {animData.op - animData.ip}
                  </div>
                </>
              ) : (
                <div className="bg-red-100 p-4 rounded text-red-700">
                  Failed to load
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-4 rounded">
          <h2 className="font-bold mb-2">Debug Info:</h2>
          <pre className="text-xs overflow-auto">
            {JSON.stringify(
              animations.map((a, i) => ({
                index: i,
                loaded: !!a,
                hasLayers: a?.layers?.length || 0,
                version: a?.v,
              })),
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}
