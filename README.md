# 📬 email-me

> A minimal contact form linked from my Instagram. Since I'm not on Instagram, this is a better way to reach me.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Resend](https://img.shields.io/badge/Resend-email-6366f1?style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

---

## ✨ What it does

- 📝 Visitors fill out a simple form — **optional email** + **required message**
- 📨 Message is sent directly to my inbox via **Resend**
- ⚡ Serverless — deployed on **Vercel**, no backend needed
- 🎨 Minimal design using the **SF Pro** system font (Apple Notes aesthetic)

---

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Email | Resend |
| Styling | Tailwind CSS + inline styles |
| Deployment | Vercel |
| Font | `-apple-system` / SF Pro |

---

## 🚀 Running locally

```bash
# 1. Clone the repo
git clone https://github.com/tejvirmann/email-me.git
cd email-me

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY and CONTACT_EMAIL

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔑 Environment Variables

```env
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=you@yourdomain.com
```

Get a free API key at [resend.com](https://resend.com).

> 💡 **Tip:** Verify your own domain in Resend to avoid emails landing in spam.

---

## 📁 Project Structure

```
email-me/
├── app/
│   ├── api/contact/route.ts   # Resend email handler
│   ├── page.tsx               # Contact form UI
│   ├── layout.tsx             # Metadata + fonts
│   └── globals.css            # Base styles
├── .env.local                 # API keys (gitignored)
└── vercel.json                # Vercel config
```

---

## 🌐 Links

- 🔗 **Website** — [tejvirmann.com](https://www.tejvirmann.com)
- 💼 **LinkedIn** — [tejvir-s-mann](https://www.linkedin.com/in/tejvir-s-mann/)
- 🐙 **GitHub** — [@tejvirmann](https://github.com/tejvirmann)

---

<p align="center">Made by <a href="https://www.tejvirmann.com">Tejvir S. Mann</a></p>
