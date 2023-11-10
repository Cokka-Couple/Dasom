import { LayoutProps } from "../../interface/type";

export default function MainLayout({ children }: LayoutProps) {
  return <div className="w-full">{children}</div>;
}
