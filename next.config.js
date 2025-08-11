/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'cdn.jsdelivr.net'],
  },
  env: {
    AZURE_COMMUNICATION_CONNECTION_STRING: "endpoint=https://guiderx-communicationservices-prod.unitedstates.communication.azure.com/;accesskey=vu4KI0MFKnWREvENY2OmN96FoQIFFuX8Sw0keClYghTqLlfUGG3RJQQJ99BDACULyCpR6K6hAAAAAZCSlWoX",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
}

module.exports = nextConfig 