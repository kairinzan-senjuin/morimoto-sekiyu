/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages (プロジェクトページ) 用。カスタムドメイン移行時は環境変数を外す
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
