import Hero from "./Hero";
import Projects from "./Projects";

export default function Home({
  changePath,
}: {
  changePath: ({
    name,
    id,
    color,
  }: {
    name: string;
    id: string;
    color: string;
  }) => void;
}) {
  return (
    <main className="w-screen overflow-x-hidden bg-background overflow-y-hidden">
      <Hero />
      {/* <Bio links={links} /> */}
      <Projects changePath={changePath} />
      {/*<Skills />*/}
    </main>
  );
}
