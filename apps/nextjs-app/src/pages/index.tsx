import { CountButton } from "@shared/ui"

export default () => {
  return (
    <div className="h-[100svh] flex flex-col justify-center items-center gap-y-4">
      <h1 className="font-medium text-4xl">NextJs Monorepo</h1>
      <CountButton />
    </div>
  ) 
}