import { LayoutProps } from "../../interface/type";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <main className="w-full pt-9 px-4 flex flex-col justify-between">
      {children}
    </main>
  );
}
