import Link from "next/link";

export default function Privacy() {
  return (
    <div className="max-w-[900px] mx-auto mt-4 px-4">
      <div className="mb-[100px]">
        {/* Terminal prompt */}
        <div className="text-sm text-[#a6adc8] mb-4">
          <span className="text-[#a6e3a1]">$</span> cat ./privacy.md
          <span className="text-[#a6e3a1] cursor-blink">_</span>
        </div>

        <h1 className="text-lg font-bold text-[#b4befe] mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#9399b2] mb-6">
          Last Updated: August 2026
        </p>

        <div className="space-y-6 text-sm text-[#a6adc8]">
          <section>
            <h2 className="text-base font-bold text-[#a6e3a1] mb-2">
              ## Hey there!
            </h2>
            <p className="leading-relaxed">
              Welcome to my little corner of the internet! This privacy policy is
              pretty straightforward because, well, I don&apos;t do much with your
              data. Let&apos;s break it down.
            </p>
          </section>

          <div className="border-t border-[#45475a] pt-4">
            <h2 className="text-base font-bold text-[#a6e3a1] mb-2">
              ## What I Collect (Spoiler: Not Much)
            </h2>
            <p className="leading-relaxed mb-3">
              This is just a portfolio site, so I keep things simple. Here&apos;s
              what I might collect:
            </p>

            <h3 className="text-sm font-bold text-[#b4befe] mb-1">
              1. Analytics Stuff
            </h3>
            <p className="leading-relaxed mb-3">
              Basic visit data to see if anyone&apos;s actually reading this (hi
              mom!). This includes things like which pages you visit and how long
              you stay - nothing personal or creepy.
            </p>

            <h3 className="text-sm font-bold text-[#b4befe] mb-1">
              2. Contact Form Info
            </h3>
            <p className="leading-relaxed">
              If you reach out through the contact form, I&apos;ll only see what you
              choose to share. Usually just your name, email, and whatever message
              you send my way.
            </p>
          </div>

          <div className="border-t border-[#45475a] pt-4">
            <h2 className="text-base font-bold text-[#a6e3a1] mb-2">
              ## What I Do With It
            </h2>
            <p className="leading-relaxed">
              Pretty much just use it to reply to your messages and maybe make the
              site better. No selling, no sharing, no spam - promise!
            </p>
          </div>

          <div className="border-t border-[#45475a] pt-4">
            <h2 className="text-base font-bold text-[#a6e3a1] mb-2">
              ## Security Talk
            </h2>
            <p className="leading-relaxed">
              I do my best to keep things secure, but the internet is the internet.
              Don&apos;t share any state secrets in the contact form, okay?
            </p>
          </div>

          <div className="border-t border-[#45475a] pt-4">
            <h2 className="text-base font-bold text-[#a6e3a1] mb-2">
              ## Questions?
            </h2>
            <p className="leading-relaxed">
              Got questions? Want to chat? Found a bug? Just want to say hi? Hit me
              up through the{" "}
              <Link
                href="/contact"
                className="text-[#a6e3a1] hover:text-[#94e2d5] transition-colors"
              >
                [contact form]
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}