import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, Trash2, Globe, Bell } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Data Collection",
      content: `We collect only the minimum data necessary to provide our services:

• **Audio Files**: Uploaded for analysis only. Automatically deleted within 24 hours unless you choose to save them to your account.
• **Account Information**: Email address and hashed password for registered users.
• **Usage Data**: Anonymous analytics to improve our service (no personal identifiers).
• **Device Information**: Browser type and operating system for compatibility purposes.

We do NOT collect: Personal conversations, location data, or any information beyond what's needed for the service.`,
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `Your security is our top priority:

• **Encryption in Transit**: All data is transmitted using TLS 1.3 encryption.
• **Encryption at Rest**: Audio files and personal data are encrypted using AES-256.
• **Secure Infrastructure**: Hosted on SOC 2 Type II certified infrastructure.
• **Access Controls**: Strict employee access policies with audit logging.
• **Regular Audits**: Third-party security assessments conducted quarterly.

We never share your audio files with third parties or use them for training our models without explicit consent.`,
    },
    {
      icon: Trash2,
      title: "Data Retention & Deletion",
      content: `You have full control over your data:

• **Guest Users**: Audio files are processed in memory and never stored. All data is deleted immediately after analysis.
• **Registered Users**: Analysis history is retained for 30 days by default, adjustable in settings.
• **Account Deletion**: Request complete deletion of all your data at any time. We process requests within 72 hours.
• **Automatic Cleanup**: Orphaned data is purged monthly.

To delete your data, visit your account settings or email privacy@deepguard.ai.`,
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: `Under GDPR, CCPA, and other privacy laws, you have the right to:

• **Access**: Request a copy of all data we hold about you.
• **Rectification**: Correct any inaccurate personal information.
• **Erasure**: Request deletion of your personal data.
• **Portability**: Receive your data in a machine-readable format.
• **Objection**: Opt out of certain data processing activities.
• **Withdraw Consent**: Revoke previously given consent at any time.

Exercise any of these rights by contacting privacy@deepguard.ai.`,
    },
    {
      icon: Globe,
      title: "International Transfers",
      content: `For users outside our primary operating region:

• **EU Users**: Data is processed within the European Economic Area whenever possible.
• **Standard Contractual Clauses**: Used for any necessary international transfers.
• **Privacy Shield**: We adhere to Privacy Shield principles for US-EU transfers.
• **Local Compliance**: We comply with applicable local privacy laws in all regions we operate.

Contact us for specific information about data processing in your region.`,
    },
    {
      icon: Bell,
      title: "Updates to This Policy",
      content: `We may update this privacy policy periodically:

• **Notification**: Significant changes will be announced via email and in-app notifications.
• **Review Period**: Users are given 30 days to review major policy changes.
• **Version History**: Previous versions are archived and available upon request.
• **Effective Date**: Changes take effect 30 days after notification unless otherwise stated.

Last updated: January 2026`,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Your Privacy Matters</span>
            </div>
            <h1 className="font-display text-3xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              At DeepGuard, we believe privacy is a fundamental right. This policy explains 
              how we collect, use, and protect your data with complete transparency.
            </p>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => (
              <div 
                key={section.title}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-semibold mb-4">
                      {section.title}
                    </h2>
                    <div className="prose prose-invert prose-sm max-w-none">
                      {section.content.split('\n\n').map((paragraph, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                          {paragraph.split('\n').map((line, lineIndex) => {
                            if (line.startsWith('•')) {
                              return (
                                <p key={lineIndex} className="text-muted-foreground ml-4 mb-2">
                                  {line.replace(/\*\*(.*?)\*\*/g, (_, text) => text)}
                                </p>
                              );
                            }
                            return (
                              <p key={lineIndex} className="text-muted-foreground">
                                {line}
                              </p>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl text-center">
            <h3 className="font-display text-xl font-semibold mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our Data Protection Officer is available to answer any questions about 
              how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a 
                href="mailto:privacy@deepguard.ai" 
                className="text-primary hover:underline"
              >
                privacy@deepguard.ai
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-muted-foreground">Response within 48 hours</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
