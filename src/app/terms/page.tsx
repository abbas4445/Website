import { Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Terms and <span className="text-blue-500">Conditions</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Welcome to Cryptowith Aliwaris. By visiting and using this website, you agree to follow the terms and conditions explained below. If you do not agree with any of these terms, please stop using the website.
            </p>
          </div>

          <div className="grid gap-10">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">1. Use of the Website</h2>
              <p className="text-gray-400 leading-relaxed">
                All content available on Cryptowith Aliwaris is shared for educational and informational purposes only. You agree to use this website responsibly and only for lawful activities, without violating any local or international laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">2. Information Accuracy</h2>
              <p className="text-gray-400 leading-relaxed">
                We do our best to keep the information on this website accurate and updated. However, Cryptowith Aliwaris cannot guarantee that all content will always be complete, current, or error-free. Information may be updated or changed at any time without notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">3. No Professional Advice</h2>
              <p className="text-gray-400 leading-relaxed">
                Any content related to cryptocurrency, blockchain, or digital technologies is provided for general information only and should not be considered financial, investment, or legal advice. Users are encouraged to research independently before making any decisions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">4. Ownership of Content</h2>
              <p className="text-gray-400 leading-relaxed">
                Unless mentioned otherwise, all text, graphics, logos, and design elements published on Cryptowith Aliwaris belong to this website. Copying, republishing, or distributing any material without prior written permission is not allowed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">5. Links to Other Websites</h2>
              <p className="text-gray-400 leading-relaxed">
                This website may include links to third-party websites for reference or additional information. Cryptowith Aliwaris has no control over the content or policies of those websites and is not responsible for any loss or issues that may arise from visiting them.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">6. Limitation of Responsibility</h2>
              <p className="text-gray-400 leading-relaxed">
                Cryptowith Aliwaris will not be responsible for any direct or indirect loss, damage, or inconvenience resulting from the use of this website or reliance on the information provided.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">7. Changes to These Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update or modify these Terms and Conditions at any time. By continuing to use the website after changes are made, you agree to accept the updated terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">8. Legal Jurisdiction</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms and Conditions are governed by applicable international and local laws.
              </p>
            </section>

            <section className="space-y-3 p-6 bg-white/5 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white">9. Contact Details</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions or concerns regarding these Terms and Conditions, you can contact us at:
              </p>
              <div className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors">
                <Mail size={20} />
                <a href="mailto:syedaliwaris125@gmail.com" className="font-medium">
                  syedaliwaris125@gmail.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
