# Modern Portfolio Website with Blog

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Medium integration. Feel free to use this template for your own portfolio!

## 🌟 Features

- ⚡️ Next.js 14 with App Router
- 💎 TypeScript
- 🎨 Tailwind CSS
- 🌙 Dark/Light mode
- 📱 Fully Responsive
- 📝 Medium Blog Integration
- 🎭 Framer Motion Animations
- ⚡ Fast Page Loads
- 🔍 SEO Optimized

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/hasan-furkan/ihfk.git

```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your Medium RSS feed URL:
```env
MEDIUM_RSS_URL=https://medium.com/feed/@your-medium-username
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

### Personal Information
Edit `app/page.tsx` to update your personal information:
- Name
- Title
- About section
- Social links

### Blog
The blog section automatically fetches posts from your Medium account through RSS feed. Update the `MEDIUM_RSS_URL` in your `.env.local` file.

### Theme
Modify `globals.css` and Tailwind configuration in `tailwind.config.js` to match your preferred color scheme.

## 📁 Project Structure

```
├── app/
│   ├── blog/
│   ├── components/
│   ├── lib/
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── styles/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🛠 Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn UI](https://ui.shadcn.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/portfolio-website/issues).

## 💖 Support

Give a ⭐️ if you like this project!

## 🙏 Acknowledgments

- Thanks to [Shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Medium RSS feed](https://medium.com/) for blog integration
- All the amazing open-source contributors

---

Feel free to use this template for your own portfolio! No attribution required, though it's appreciated 😊
```

This README:
1. Provides clear instructions for setup
2. Lists all major features
3. Explains how to customize the portfolio
4. Includes project structure
5. Lists technologies used
6. Makes it clear that the project is free to use
7. Provides contact information and acknowledgments

You can customize any section to better match your project's specific needs or add additional sections as required.
