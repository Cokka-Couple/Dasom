import { LayoutProps } from "../../interface/type";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <main className="w-full h-[calc(100vh-74px)] py-9 px-4 flex flex-col justify-between">
      {children}
    </main>
  );
}
