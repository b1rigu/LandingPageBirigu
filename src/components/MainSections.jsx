import Reveal from "./Reveal";
import CardGraphic from "./CardGraphic";
import GithubLogo from "./GithubLogo";
import ObservableSection from "./ObservableSection";
import SquareDecoration from "./SquareDecoration";
import TechList from "./TechList";

export default function MainSections() {
  return (
    <main>
      <section>
        <CardGraphic />
      </section>

      <section className="bg-gradient-to-b from-black to-base-100">
        <div className="w-3/5 mx-auto relative">
          <SquareDecoration />
          <Reveal>
            <p className="font-bold text-[6rem]">
              Hello, I'm Birigu<span className="text-primary-color">.</span>
            </p>
          </Reveal>
          <Reveal>
            <p className="text-3xl pb-4">
              I'm a <span className="text-primary-color font-bold">Full Stack Developer</span> from
              Mongolia.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg pb-4 w-[40rem]">
              I've been into programming since I was 12. I've spent the last 3 years building and
              scaling software as an Full Stack Developer. I love talking with people and hearing
              their ideas, also love beatboxing and more. Let's connect!
            </p>
          </Reveal>
          <a className="btn btn-outline btn-primary" href="#contact">
            Contact me
          </a>
        </div>
      </section>

      <ObservableSection id="about">
        <div className="w-3/5 mx-auto">
          <div className="flex items-center mb-8">
            <Reveal>
              <p className="font-bold text-6xl">
                About<span className="text-primary-color font-bold">.</span>
              </p>
            </Reveal>
            <hr className="ms-8 flex-1"></hr>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 text-lg text-justify">
              <Reveal className="mb-6">
                <p></p>
              </Reveal>
              <Reveal className="mb-6">
                <p></p>
              </Reveal>
              <Reveal className="mb-6">
                <p></p>
              </Reveal>
              <Reveal className="mb-6">
                <p></p>
              </Reveal>
              <Reveal>
                <div className="flex items-center h-8">
                  <p className="text-primary-color mr-4">My links -&gt;</p>
                  <GithubLogo />
                </div>
              </Reveal>
            </div>

            <div className="col-span-1">
              <TechList />
            </div>
          </div>
        </div>
      </ObservableSection>

      <ObservableSection id="projects">
        <div className="w-3/5 mx-auto">
          <div className="flex items-center mb-8">
            <hr className="me-8 flex-1"></hr>
            <Reveal>
              <p className="font-bold text-6xl">
                Projects<span className="text-primary-color font-bold">.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </ObservableSection>

      <ObservableSection id="experience">
        <div className="w-3/5 mx-auto">
          <div className="flex items-center mb-8">
            <Reveal>
              <p className="font-bold text-6xl">
                Experience<span className="text-primary-color font-bold">.</span>
              </p>
            </Reveal>
            <hr className="ms-8 flex-1"></hr>
          </div>
        </div>
      </ObservableSection>

      <ObservableSection id="blog">
        <div className="w-3/5 mx-auto">
          <div className="flex items-center mb-8">
            <hr className="me-8 flex-1"></hr>
            <Reveal>
              <p className="font-bold text-6xl">
                Blog<span className="text-primary-color font-bold">.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </ObservableSection>

      <ObservableSection id="contact">
        <div className="w-2/5 mx-auto flex flex-col items-center">
          <Reveal>
            <p className="font-bold text-[6rem]">
              Contact<span className="text-primary-color font-bold">.</span>
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg mb-8 text-center">
              Shoot me an email if you want to connect! You can also find me on
              <span className="text-primary-color"> Linkedin </span> or
              <span className="text-primary-color"> Upwork </span>
              if that's more your speed.
            </p>
          </Reveal>
          <Reveal>
            <a className="text-3xl hover:text-primary-color" href="mailto:birigu@proton.me">
              birigu@proton.me
            </a>
          </Reveal>
        </div>
      </ObservableSection>
    </main>
  );
}
