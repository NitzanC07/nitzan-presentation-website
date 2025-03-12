/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: `/courses/:courseId`,
        destination: "/404",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
