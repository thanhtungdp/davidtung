import Image from "next/image";

export function Logo({ className = "h-9 w-auto", markOnly = false }: { className?: string; markOnly?: boolean }) {
  const [light, dark, w, h] = markOnly
    ? ["/brand/dt-mark.png", "/brand/dt-mark-light.png", 138, 69]
    : ["/brand/david-tung-logo.png", "/brand/david-tung-logo-light.png", 288, 70];
  return (
    <>
      <Image src={light as string} alt="David Tung" width={w as number} height={h as number} priority className={`${className} dark:hidden`} />
      <Image src={dark as string} alt="David Tung" width={w as number} height={h as number} priority className={`${className} hidden dark:block`} />
    </>
  );
}
