import { useState } from "react";
import axios from "axios";
import { Sparkles, Copy, Mail, Wand2, Loader2 } from "lucide-react";

function EmailPage() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4 bg-slate-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-400/20">
            <Sparkles className="w-5 h-5 text-emerald-300" />
            <span className="text-emerald-300 font-medium">
              AI Email Assistant
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300 mb-4">
            Smart Reply Generator
          </h1>
          <p className="text-slate-300 max-w-lg mx-auto">
            Let AI craft the perfect response to your emails with just a few
            clicks.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-700 p-6 shadow-xl shadow-black/30">
          {/* Email Input */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-emerald-400 mb-3 font-medium">
              <Mail className="w-5 h-5" />
              Original Email Content
            </label>
            <textarea
              className="w-full bg-slate-800/40 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent min-h-[200px]"
              placeholder="Paste the email you want to reply to..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
          </div>

          {/* Tone Selector */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-emerald-400 mb-3 font-medium">
              <Wand2 className="w-5 h-5" />
              Select Tone
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["", "professional", "casual", "friendly"].map((option) => (
                <button
                  key={option || "none"}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    tone === option
                      ? "bg-emerald-700/40 border-emerald-500 text-white shadow-lg shadow-emerald-700/20"
                      : "bg-slate-900/30 border-slate-700 text-slate-200 hover:border-emerald-500"
                  }`}
                  onClick={() => setTone(option)}
                >
                  {option === ""
                    ? "Neutral"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
              !emailContent || loading
                ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/30"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Smart Reply
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-900/50 border border-red-800 rounded-lg text-red-200">
              {error}
            </div>
          )}
        </div>

        {/* Generated Reply */}
        {generatedReply && (
          <div className="mt-8 bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-700 p-6 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                AI-Generated Reply
              </h2>
              <button
                onClick={() => navigator.clipboard.writeText(generatedReply)}
                className="flex items-center gap-1.5 text-emerald-300 hover:text-white bg-slate-800/40 hover:bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 whitespace-pre-wrap">
              {generatedReply}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>
            Powered by advanced AI technology • Craft perfect responses in
            seconds
          </p>
        </footer>
      </div>
    </div>
  );
}

export default EmailPage;
