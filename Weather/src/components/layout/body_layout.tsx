import { LayoutProps } from "../../interface/type";

export default function BodyLayout({ children }: LayoutProps) {
  return <div className="body_layout">{children}</div>;
}
