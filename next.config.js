/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['occ-0-3933-116.1.nflxso.net','tailwindui.com','images.unsplash.com'],
    },
    experimental:{
        appDir:true,
        serverComponentsExternalPackages:["mongoose"]
    }
}

module.exports = nextConfig
