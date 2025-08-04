import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Wand2, Chrome, Download, ArrowRight, Check } from "lucide-react";

function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 fixed w-full bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Replino.ai Logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300">
              replino.ai
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition-colors"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Features
            </a>
            <a
              href="#extension"
              className="text-slate-300 hover:text-white transition-colors"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Extension
            </a>
            <Link
              to="/app"
              className="flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Launch App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div
            className="inline-flex items-center gap-3 mb-6 bg-slate-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-400/20"
            data-aos="fade-up"
          >
            <span className="text-emerald-300 font-medium">
              AI-Powered Email Responses
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300 mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Never Stress Over
            <br />
            Email Replies Again
          </h1>
          <p
            className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Replino.ai crafts perfect email responses in seconds with AI.
            Professional, friendly, or casual - you choose the tone.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              to="/app"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              Try It Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#extension"
              className="flex items-center justify-center gap-2 bg-slate-800/40 border border-slate-700 text-white px-6 py-4 rounded-lg font-medium hover:border-emerald-500 transition-colors"
            >
              <Chrome className="w-5 h-5" />
              Get Chrome Extension
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen flex items-center justify-center py-32 bg-slate-900/40"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Email Assistance
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Replino.ai understands your emails and generates thoughtful,
              context-aware responses in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700 p-8 shadow-lg shadow-black/20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/30">
                <Wand2 className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Tone Control
              </h3>
              <p className="text-slate-300">
                Choose from professional, casual, or friendly tones to match
                your communication style.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700 p-8 shadow-lg shadow-black/20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/30">
                <Wand2 className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Context-Aware
              </h3>
              <p className="text-slate-300">
                Our AI understands the email content and generates relevant,
                coherent responses.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700 p-8 shadow-lg shadow-black/20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 border border-emerald-500/30">
                <Mail className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Browser Integration
              </h3>
              <p className="text-slate-300">
                Use our Chrome extension to generate replies directly from your
                email client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <span className="text-emerald-300 font-medium">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Paste Your Email
                    </h3>
                    <p className="text-slate-300">
                      Copy and paste the email you want to reply to into
                      Replino.ai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <span className="text-emerald-300 font-medium">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Select Your Tone
                    </h3>
                    <p className="text-slate-300">
                      Choose the tone that fits your response - professional,
                      casual, or friendly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <span className="text-emerald-300 font-medium">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Get Your Perfect Reply
                    </h3>
                    <p className="text-slate-300">
                      Our AI generates a thoughtful response in seconds. Copy,
                      edit if needed, and send!
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/app"
                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
              >
                Try It Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div
              className="md:w-1/2 bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700 p-4 shadow-xl shadow-black/30"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/app-preview.png"
                alt="Replino.ai app preview"
                className="rounded-lg border border-slate-700 w-full"
              />
              <p className="text-center text-slate-400 mt-4 text-sm">
                Replino.ai web application interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chrome Extension Section */}
      <section
        id="extension"
        className="min-h-screen flex items-center justify-center py-32 bg-slate-900/40"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 bg-slate-800/30 backdrop-blur-sm px-5 py-2 rounded-full border border-slate-400/20">
              <Chrome className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-300 font-medium">
                Chrome Extension
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Generate Replies Directly in Gmail
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our Chrome extension adds Replino.ai directly to your Gmail
              interface for seamless email responses.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className="md:w-1/2 bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700 p-4 shadow-xl shadow-black/30"
              data-aos="fade-right"
            >
              <img
                src="/extension-preview.png"
                alt="Replino.ai Chrome extension preview"
                className="rounded-lg border border-slate-700 w-full"
              />
              <p className="text-center text-slate-400 mt-4 text-sm">
                Replino.ai Chrome extension in Gmail
              </p>
            </div>

            <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-white mb-6">
                How To Install
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <Check className="w-4 h-4 text-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Download the Extension
                    </h3>
                    <p className="text-slate-300">
                      Get the ZIP file containing the Chrome extension
                    </p>
                    <a
                      href="/replino-ai-chrome-extension.zip"
                      download
                      className="mt-3 inline-flex items-center gap-2 bg-slate-800/40 border border-slate-700 text-white px-4 py-2 rounded-lg font-medium hover:border-emerald-500 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Extension
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <Check className="w-4 h-4 text-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Install in Chrome
                    </h3>
                    <p className="text-slate-300 mb-2">
                      Follow these steps to install the extension:
                    </p>
                    <ol className="list-decimal list-inside text-slate-300 space-y-1">
                      <li>Unzip the downloaded file</li>
                      <li>
                        Open Chrome and go to{" "}
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded">
                          chrome://extensions
                        </code>
                      </li>
                      <li>Enable "Developer mode" (toggle in top right)</li>
                      <li>
                        Click "Load unpacked" and select the unzipped folder
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <Check className="w-4 h-4 text-emerald-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Use in Gmail
                    </h3>
                    <p className="text-slate-300">
                      Open Gmail and look for the Replino.ai button when
                      composing a reply. Click to generate AI responses
                      instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-2xl border border-emerald-500/30 p-12 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Workflow?
            </h2>
            <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands who save hours every week with AI-powered email
              responses.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all text-lg"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img src="/logo.png" alt="Replino.ai Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300">
                replino.ai
              </span>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-slate-400 mb-2">
                © {new Date().getFullYear()} Replino.ai. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                AI-powered email assistance for everyone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
