import logo from "@/assets/brand/logo.webp.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return <img className={className} src={logo.url} alt="Ha Bite" width={848} height={813} />;
}