import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-24 px-4 bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 font-serif">
            <span className="text-orange-400">Privacy</span>{" "}
            <span className="text-cyan-400">Policy</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto"></div>
          <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-sm text-gray-400">
            This Privacy Policy applies to my personal developer portfolio
            website. It explains what information is collected, how it is used,
            and the choices available to visitors, collaborators, and clients.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">1. Who I am</h2>
            <p>
              I’m Dezmil, a full‑stack developer and system architect. This
              portfolio showcases my projects, open‑source contributions, and
              design work. It is a personal site, not a commercial platform.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">2. Information I collect</h2>
            <p>This site is primarily informational. Limited data may be collected:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Contact Information:</strong> if you reach out via forms, I may collect your name, email, or message content.</li>
              <li><strong>Analytics:</strong> anonymized data such as page views, browser type, and device info to improve the site.</li>
              <li><strong>Newsletter:</strong> if you subscribe, your email is stored securely for updates.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">3. How I use your data</h2>
            <p>Data is used to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Respond to inquiries and collaboration requests.</li>
              <li>Share updates about new projects or blog posts.</li>
              <li>Improve the site’s performance and user experience.</li>
              <li>Maintain security and prevent misuse.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">4. Third‑party services</h2>
            <p>
              I may use trusted third‑party services such as analytics providers,
              email newsletter tools, or hosting platforms. These services only
              receive the minimum data necessary to perform their functions.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">5. Data retention</h2>
            <p>
              Contact messages and newsletter subscriptions are retained only as
              long as necessary. Analytics data is anonymized and used for
              improving the site.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">6. Security</h2>
            <p>
              I take reasonable steps to protect your information, including
              secure hosting and encryption where applicable. However, no system
              is completely secure, so please contact me if you suspect an issue.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">7. Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Request access to the information you’ve shared.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Unsubscribe from newsletters at any time.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">8. Changes to this policy</h2>
            <p>
              I may update this Privacy Policy occasionally. If changes are
              significant, I’ll post a clear notice on the site.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-400">9. Contact me</h2>
            <p>
              For questions or requests, contact:
              <br />
              <span className="text-cyan-400">privacy@dezmil.dev</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
