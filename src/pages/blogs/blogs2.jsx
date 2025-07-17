import React from "react";
import MuslimComponents from "./muslimComponents/muslimComponents";

const Blogs2 = () => {
  return (
    <>
      <main className="text-white p-4 font-sans min-h-[500px] grid md:grid-cols-5 my-10  gap-6">
        <section className="bg-[#1A1A1A] rounded-xl p-6 space-y-6 flex content-center justify-center md:col-span-3 items-center gap-5">
          <h1 className="md:text-5xl text-2xl font-bold leading-tight ">
            MASTERING THE ART
            <br />
              OF MINIMALISTIC DESIGN
          </h1>
          <button className="flex items-center gap-2 text-[#D87D4A] text-xl font-medium">
            <span className="w-6 h-6 border border-[#D87D4A] rounded-full flex items-center justify-center">
              →
            </span>
            START A PROJECT
          </button>
        </section>
        
        <aside className="grid gap-4 bg-[#1A1A1A] md:col-span-2 p-4 rounded-2xl">
          <div className="bg-[#1F1F1F] rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-400 uppercase tracking-wide">
              Author
            </span>
            <span className="text-xl font-semibold">Sophia Roberts</span>
          </div>

          <div className="bg-[#1F1F1F] rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-400 uppercase tracking-wide">
              Published Date
            </span>
            <span className="text-xl font-semibold">25th October 2023</span>
          </div>

          <div className="bg-[#1F1F1F] rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-400 uppercase tracking-wide">
              Category
            </span>
            <span className="text-xl font-semibold">Design</span>
          </div>

          <div className="bg-[#1F1F1F] rounded-lg p-4 flex justify-between items-center">
            <span className="text-gray-400 uppercase tracking-wide">
              Read Time
            </span>
            <span className="text-xl font-semibold">5 Minutes</span>
          </div>
        </aside>
      </main>

      <main className="bg-black text-white font-sans p-4 space-y-8">
        <article className="space-y-4">
          <img
            src="/imgMuslim/blogImgHeader.png"
            alt="Minimalism Design"
            className="rounded w-full"
          />
        </article>

        <section className="flex flex-col md:flex-row items-start gap-5">
          <aside className="bg-[#1A1A1A] p-5 flex flex-col gap-5 md:max-w-[70%]">
            <article>
              <h1 className="text-2xl font-semibold">
                The Essence of Minimalism in Design
              </h1>
              <p className="leading-6 text-gray-300 mt-2">
                In the realm of design, the essence of minimalism lies in the
                deliberate choice to distill complexity and convey a powerful
                message through simplicity. It's an art form that celebrates the
                beauty of space, emphasizing the significance of each carefully
                chosen element. A minimalist design isn't about deprivation;
                rather, it's a conscious decision to focus on the core, allowing
                the audience to engage with a visual narrative that is both
                refined and impactful. As we explore the essence of minimalistic
                design, we uncover the subtle nuances that contribute to its
                allure. The use of negative space, a hallmark of minimalism,
                creates breathing room within the composition, allowing the
                viewer's gaze to rest and appreciate the inherent beauty of the
                design. The simplicity in form and color becomes a canvas for
                expression, where every line and shade tells a story. By
                embracing minimalism, designers have the opportunity to
                communicate more with less, fostering a connection that
                transcends visual aesthetics. At its core, minimalism in design
                challenges conventional notions, encouraging a shift from excess
                to essence. It invites both creators and consumers to engage in
                a thoughtful dialogue with the visual elements, promoting a
                sense of mindfulness and intentionality. The essence of
                minimalistic design, therefore, lies not just in its visual
                appeal but in the profound impact it has on the way we perceive
                and interact with the world of design.
              </p>
            </article>
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                Minimalism Beyond Aesthetics
              </h2>
              <p className="leading-6 text-gray-300">
                Beyond its visually captivating exterior, minimalism is a design
                philosophy that permeates every aspect of the creative process,
                extending its influence far beyond the surface. This philosophy
                becomes a lens through which designers view their craft, shaping
                not just what is seen but how it is experienced. The minimalist
                approach transcends mere aesthetics; it becomes a mindset that
                emphasizes clarity, functionality, and a deeper connection with
                the audience. Minimalism, as a philosophy, challenges the notion
                that complexity is synonymous with sophistication. It prompts
                designers to question the necessity of each element, encouraging
                a meticulous evaluation of form and function. This shift in
                perspective extends to the user experience, where the removal of
                unnecessary clutter allows for a seamless and intuitive
                interaction. Beyond creating visually pleasing designs, the
                minimalist philosophy becomes a guiding force for designing
                experiences that are inherently user-centric.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                Practical Tips for Mastering Minimalistic Design
              </h2>
              <p className="leading-6 text-gray-300">
                The journey to mastering minimalistic design involves a
                practical exploration of principles...
              </p>
            </section>
          </aside>

          <aside className="bg-[#1A1A1A] p-4 rounded space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/imgMuslim/blogImg1.png"
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Wade Warren</h3>
                <p className="text-gray-400">Art Director</p>
              </div>
            </div>
            <p className="text-gray-400">
              Wade Warren Art Director Crafting visual narratives that captivate
              and inspire, weaving creativity into every chapter of the design
              journey.
            </p>
            <p className="text-gray-300">@wadewarren</p>
            <div className="flex justify-between pt-2 border-t border-gray-700 mt-2">
              <p className="text-gray-400">❤️ 2.6K</p>
              <p className="text-gray-400">🔁 120</p>
            </div>
            <section className="flex justify-center space-x-4 pt-4">
              <button className="bg-gray-800 p-2 rounded">🐦</button>
              <button className="bg-gray-800 p-2 rounded">📸</button>
              <button className="bg-gray-800 p-2 rounded">📘</button>
            </section>
          </aside>
        </section>
      </main>

      <main className="bg-black text-white">
        <MuslimComponents />
      </main>
    </>
  );
};

export default Blogs2;
