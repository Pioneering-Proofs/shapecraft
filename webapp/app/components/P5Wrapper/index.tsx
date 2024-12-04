import dynamic from "next/dynamic";

export const NextReactP5Wrapper = dynamic(
  async () => (await import("./components/ReactP5Wrapper")).ReactP5Wrapper,
  { ssr: false },
);
