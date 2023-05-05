import { Feed } from "@components";

export default function Home() {
  return (
    <section className="w-full flex-col flex-center flex">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="md:hidden" />{" "}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Incite Prompts is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}
