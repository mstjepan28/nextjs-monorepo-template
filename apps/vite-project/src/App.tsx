import { CountButton } from '@shared/ui';

export const App = () => {
  return (
    <div className="h-[100svh] flex flex-col justify-center items-center gap-y-4">
      <h1 className="font-medium text-4xl">Vite + React</h1>
      <CountButton />
    </div>
  )
}
