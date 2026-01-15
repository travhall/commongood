# CommonGood Landing Page

Community infrastructure for mutual aid in Minneapolis. This is the Phase 0 landing page for gathering interested neighbors and testing the concept with physical prototypes.

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Google Sheets (10 minutes)

Follow the detailed guide: **[SETUP-GOOGLE-SHEETS.md](./SETUP-GOOGLE-SHEETS.md)**

Quick summary:
1. Create a Google Sheet
2. Enable Google Sheets API in Google Cloud Console
3. Create Service Account credentials
4. Share Sheet with service account email
5. Add credentials to `.env.local`

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### 4. Test the Signup Form

Fill out the form and check your Google Sheet - you should see the signup appear!

## Project Structure

```
commongood/
├── app/
│   ├── api/signup/
│   │   └── route.ts          # API endpoint for signups
│   ├── page.tsx               # Main landing page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   └── SignupForm.tsx         # Email signup form component
├── lib/
│   └── sheets.ts              # Google Sheets integration
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this!)
├── .env.local.example         # Template for environment variables
└── SETUP-GOOGLE-SHEETS.md    # Google Sheets setup guide
```

## Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Then fill in your Google Sheets credentials. See [SETUP-GOOGLE-SHEETS.md](./SETUP-GOOGLE-SHEETS.md) for details.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEETS_CREDENTIALS`
6. Deploy!

**Important**: Never commit `.env.local` to Git. Use Vercel's environment variables dashboard instead.

### Alternative: Deploy to Netlify

1. Push to GitHub
2. Connect to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Sheets** - Free database for signups (Phase 0)
- **Vercel** - Hosting (recommended)

## What's Next?

### Phase 0 (Current - Weeks 1-4)
- ✅ Landing page live
- 🔄 Gathering 20+ interested neighbors
- 🔄 Planning first physical meetup
- 🔄 Creating paper SkillSwap prototypes

### Phase 1 (Months 1-3)
- Flutter app with offline-first database (Hive)
- Local-only MVP (no server, no sync)
- Beta testing with 5-10 neighbors

### Phase 2 (Months 3-6)
- Migrate from Google Sheets to Supabase
- Add background sync layer
- Multi-device support
- 30+ active users across neighborhoods

## Philosophy

This isn't a startup. We're building community infrastructure using local-first architecture:

- **Your device is the source of truth** - App works offline indefinitely
- **Privacy by design** - Pseudonyms, not real names. No tracking.
- **Community-owned** - Open source. Self-hostable. Exportable.

For more details, see the [Resilient Architecture document](./docs/CommonGood-Resilient-Architecture.md).

## Contributing

We're in Phase 0 (community building). Ways to help:

1. **Sign up** - Test the form, join the email list
2. **Spread the word** - Share with neighbors interested in mutual aid
3. **Physical testing** - Join us for paper prototype meetups
4. **Feedback** - What features matter most to you?

## Contact

- **Email**: hello@commongood.community
- **Location**: Minneapolis, Minnesota
- **Status**: Phase 0 (community building)

## License

- **Documentation**: CC BY-SA 4.0
- **Code** (when released): AGPL-3.0

---

**Community-led initiative**  
Building in public. All decisions transparent.
