import SmudgeCanvas from "@/components/smudge-canvas"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-white mb-4">Evolving Smudge Canvas</h1>
      <SmudgeCanvas />
    </main>
  )
}
