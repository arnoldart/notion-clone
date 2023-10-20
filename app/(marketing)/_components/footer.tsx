import { Logo } from "./logo"

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-between flex items-center gap-x-2 text-muted">

      </div>
    </div>
  )
}