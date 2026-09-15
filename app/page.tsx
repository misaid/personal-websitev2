"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Uofa from "@/components/Uofa";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

type TabId = "workexp" | "school";

export default function Home(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabId>("workexp");

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    setActiveTab((prev) => (prev === "workexp" ? "school" : "workexp"));
  };

  return (
    <div className="w-full h-full">
      <div className="max-w-[900px] mx-auto mt-6 px-4 pb-16">
        {/* Terminal prompt header */}
        <div className="text-sm text-[#a6adc8] mb-4 select-none" aria-hidden="true">
          <span className="text-[#a6e3a1]">$</span> cat ./about.md
          <span className="text-[#a6e3a1] cursor-blink">_</span>
        </div>

        {/* Profile Section - ASCII Box */}
        <section aria-label="About Mohamed Said" className="border border-[#45475a] bg-[#181825] p-4 mb-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                src="https://moprojects.s3.us-east-2.amazonaws.com/portfolio/hiking.png"
                alt="Portrait of Mohamed Said"
                width={80}
                height={80}
                sizes="80px"
                priority
                className="border border-[#45475a]"
              />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <h1 className="text-lg font-bold text-[#b4befe]">
                Mohamed Said
              </h1>
              <p className="text-sm text-[#a6adc8]">
                Full-Stack Software Developer
              </p>
              <p className="text-xs text-[#9399b2] mt-1">
                Edmonton, Alberta, CA
              </p>
              <div className="flex justify-center sm:justify-start gap-3 mt-2 text-xs">
                <a
                  href="https://www.linkedin.com/in/misaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
                >
                  [linkedin]
                </a>
                <a
                  href="https://www.github.com/misaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
                >
                  [github]
                </a>
                <a
                  href="mailto:mohamediasaid@outlook.ca"
                  className="text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
                >
                  [email]
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#45475a] mt-4 pt-4">
            <h2 className="text-lg font-bold text-[#a6e3a1] mb-2">
              &gt; I build secure, scalable software.
            </h2>
            <p className="text-sm text-[#a6adc8] leading-relaxed">
              I&apos;m Mohamed, a software developer in Edmonton. I build web
              and mobile products across the front end, back end, databases,
              and deployment, with experience in AI evaluation and secure
              software development.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="/projects"
                className="text-sm text-[#a6e3a1] hover:text-[#94e2d5] transition-colors border border-[#a6e3a1]/30 px-3 py-1 hover:bg-[#a6e3a1]/10"
              >
                [view projects]
              </Link>
              <Link
                href="/contact"
                className="text-sm text-[#a6adc8] hover:text-[#a6e3a1] transition-colors border border-[#45475a] px-3 py-1 hover:border-[#a6e3a1]/30"
              >
                [get in touch]
              </Link>
            </div>
          </div>
        </section>

        {/* Work Experience / Education Tabs */}
        <div className="mb-4">
          <div className="flex border border-[#45475a] border-b-0" role="tablist" aria-label="Experience and education" onKeyDown={handleTabKeyDown}>
            <button
              role="tab"
              id="tab-workexp"
              aria-selected={activeTab === "workexp"}
              aria-controls="panel-workexp"
              tabIndex={activeTab === "workexp" ? 0 : -1}
              onClick={() => setActiveTab("workexp")}
              className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                activeTab === "workexp"
                  ? "bg-[#313244] text-[#a6e3a1]"
                  : "text-[#a6adc8] hover:text-[#cdd6f4]"
              }`}
            >
              [work experience]
            </button>
            <button
              role="tab"
              id="tab-school"
              aria-selected={activeTab === "school"}
              aria-controls="panel-school"
              tabIndex={activeTab === "school" ? 0 : -1}
              onClick={() => setActiveTab("school")}
              className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                activeTab === "school"
                  ? "bg-[#313244] text-[#a6e3a1]"
                  : "text-[#a6adc8] hover:text-[#cdd6f4]"
              }`}
            >
              [education]
            </button>
          </div>

          <div className="border border-[#45475a] bg-[#181825] p-4">
            {activeTab === "workexp" && (
              <div id="panel-workexp" role="tabpanel" aria-labelledby="tab-workexp" className="space-y-5">
                {/* Outlier */}
                <div>
                  <p className="text-xs text-[#9399b2] mb-1">
                    Sep 2025 – Present
                  </p>
                  <h2 className="text-base font-bold text-[#b4befe]">
                    AI Evaluation Analyst
                  </h2>
                  <p className="text-sm text-[#a6adc8] mb-2">Outlier</p>
                  <ul className="space-y-1 text-sm text-[#a6adc8]">
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Evaluated LLM prompt-response pairs for factual
                      accuracy, coherence, and adherence to writing-quality
                      guidelines
                    </li>
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Delivered written feedback and actionable
                      recommendations on prompt design and model behavior
                    </li>
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Selected to peer-review evaluations submitted by other
                      reviewers, catching inconsistencies and enforcing quality
                      standards
                    </li>
                  </ul>
                </div>

                <div className="border-t border-[#45475a] pt-4">
                  <p className="text-xs text-[#9399b2] mb-1">
                    Sep 2024 – Dec 2024
                  </p>
                  <h2 className="text-base font-bold text-[#b4befe]">
                    Student Software Developer
                  </h2>
                  <p className="text-sm text-[#a6adc8] mb-2">Nexzones</p>
                  <ul className="space-y-1 text-sm text-[#a6adc8]">
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Built a no-code, node-based platform that streamlined
                      daily developer operations, improving workflow efficiency
                      by 65%
                    </li>
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Served as Scrum Master for a team of 8 student
                      developers, delivering all milestones on time
                    </li>
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Achieved 80% test coverage using Jest and Selenium,
                      enhancing application reliability
                    </li>
                    <li>
                      <span className="text-[#a6e3a1] mr-2" aria-hidden="true">▸</span>
                      Containerized the application using Docker for
                      cross-environment compatibility
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "school" && (
              <div id="panel-school" role="tabpanel" aria-labelledby="tab-school" className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12">
                  <Uofa />
                </div>
                <div>
                  <p className="text-xs text-[#9399b2] mb-1">
                    Sep 2022 – Jun 2025
                  </p>
                  <h2 className="text-base font-bold text-[#b4befe]">
                    University of Alberta
                  </h2>
                  <p className="text-sm text-[#a6adc8] mb-2">
                    Bachelor of Science in Computing Science
                  </p>
                  <p className="text-sm text-[#a6adc8] leading-relaxed">
                    Coursework spanning software engineering, algorithms,
                    databases, cryptography, AI, information retrieval, web
                    development, and digital image processing. Developed
                    projects applying these concepts to cryptanalysis, image
                    processing, search, and web applications.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        <section className="border border-[#45475a] bg-[#181825] p-4 mb-4" aria-label="Skills">
          <Skills />
        </section>

        {/* Projects */}
        <section className="border border-[#45475a] bg-[#181825] p-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-[#45475a] pb-2 mb-3">
            <div>
              <h2 className="text-lg font-bold text-[#b4befe]">Projects</h2>
              <p className="text-xs text-[#9399b2]">
                A sample of product, platform, and academic work.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-xs text-[#a6adc8] hover:text-[#a6e3a1] transition-colors shrink-0"
            >
              [see more →]
            </Link>
          </div>
          <Projects />
        </section>
      </div>
    </div>
  );
}