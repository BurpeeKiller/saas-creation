export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur SaaS-Creation 🚀</h1>
      <p className="text-gray-600">Votre assistant pour générer des SaaS rentables.</p>
      <a href="/login" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
        Commencer →
      </a>
    </main>
  );
}