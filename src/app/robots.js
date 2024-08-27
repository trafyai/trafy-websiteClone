export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/terms-of-service",
        "/privacy-policy",
        "/cookie-policy",
        "/refund-policy",
        "/enquiry",
        "/free-demo",
        "/forget-password",
        "/reset-password",
        "/services",
        "/account-security",
        "/account-settings",
        "/self-paced-test"
      ],
    },
    sitemap: "https://trafyai.com/sitemap.xml",
  };
}
