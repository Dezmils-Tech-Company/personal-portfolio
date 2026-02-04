import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <section className="py-24 px-4  text-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 font-serif">
            <span className="text-orange-500">Terms</span>{" "}
            <span className="text-cyan-400">& Conditions</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 mx-auto"></div>
          <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 text-sm text-gray-400">
            These Terms & Conditions govern use of my personal developer
            portfolio website. By browsing, contacting me, or subscribing to
            updates, you agree to these terms. This site is intended to showcase
            my work, projects, and professional services.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">1. Purpose</h2>
            <p>
              This portfolio exists to present my projects, open‑source
              contributions, and professional background. It is informational
              only and does not constitute a commercial service unless otherwise
              agreed in writing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">2. Use of Content</h2>
            <p>
              All code samples, designs, and articles are my intellectual
              property unless otherwise credited. You may reference or share
              them with attribution, but reproduction or commercial use requires
              prior permission.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">3. Contact & Collaboration</h2>
            <p>
              If you reach out via forms or email, you agree to provide accurate
              information. I will use your details only to respond to your
              inquiry or collaboration request. Submissions that are offensive,
              spam, or misleading may be ignored or blocked.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">4. Newsletter & Updates</h2>
            <p>
              By subscribing to my newsletter, you consent to receive occasional
              updates about new projects, blog posts, or services. You may
              unsubscribe at any time, and your email will be removed from my
              list promptly.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">5. Third‑Party Services</h2>
            <p>
              This site may use third‑party tools (analytics, hosting, email
              services). These providers only receive the minimum data necessary
              to perform their functions and are bound by their own privacy
              policies.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">6. Liability</h2>
            <p>
              While I strive to keep this site secure and accurate, I make no
              guarantees. I am not liable for damages resulting from use of this
              site, reliance on its content, or third‑party links. Use the
              information here at your own discretion.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">7. Changes to Terms</h2>
            <p>
              I may update these Terms & Conditions occasionally. If changes are
              significant, I will post a clear notice on the site. Continued use
              of the site after updates constitutes acceptance of the revised
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-500">8. Contact Me</h2>
            <p>
              For questions about these Terms & Conditions, collaborations, or
              permissions, contact:
              <br />
              <span className="text-cyan-400">support@dezmil.dev</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
