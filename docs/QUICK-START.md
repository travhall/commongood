# Quick Start Checklist

Use this checklist to get your landing page live in the next hour.

## ✅ Setup Checklist

### Step 1: Install Dependencies (2 minutes)
```bash
cd /Users/travishall/GitHub/commongood
pnpm install
```

- [ ] Dependencies installed successfully
- [ ] No error messages

---

### Step 2: Create Google Sheet (3 minutes)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet called "CommonGood Signups"
3. Add headers to first row:
   ```
   Timestamp | Email | Neighborhood | Interests
   ```
4. Copy Sheet ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

- [ ] Google Sheet created
- [ ] Headers added
- [ ] Sheet ID copied

---

### Step 3: Set Up Google Cloud (5 minutes)

See detailed guide: [SETUP-GOOGLE-SHEETS.md](./SETUP-GOOGLE-SHEETS.md)

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project or select existing
3. Enable "Google Sheets API" (search for it)
4. Create Service Account:
   - Go to IAM & Admin → Service Accounts
   - Click "Create Service Account"
   - Name: `commongood-sheets`
   - Click "Create and Continue" → "Done"
5. Create JSON Key:
   - Click on the service account
   - Keys tab → Add Key → Create new key → JSON
   - Download the JSON file

- [ ] Google Cloud project created
- [ ] Google Sheets API enabled
- [ ] Service account created
- [ ] JSON key downloaded

---

### Step 4: Share Sheet with Service Account (1 minute)

1. Open your Google Sheet
2. Click "Share" button
3. Copy the `client_email` from your JSON file
   - Looks like: `something@something.iam.gserviceaccount.com`
4. Paste into "Add people" field
5. Give "Editor" permission
6. **Uncheck "Notify people"**
7. Click "Share"

- [ ] Sheet shared with service account
- [ ] Editor permission granted

---

### Step 5: Configure Environment Variables (2 minutes)

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` in your editor

3. Add your Sheet ID:
   ```bash
   GOOGLE_SHEET_ID=your_sheet_id_here
   ```

4. Add your credentials (ENTIRE JSON on ONE line):
   ```bash
   GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...","private_key":"..."}
   ```

- [ ] `.env.local` file created
- [ ] Sheet ID added
- [ ] Credentials added (entire JSON, one line)

---

### Step 6: Test Locally (2 minutes)

```bash
pnpm dev
```

1. Open http://localhost:3000
2. Fill out the signup form
3. Submit
4. Check your Google Sheet for new row

- [ ] Dev server started successfully
- [ ] Landing page loads
- [ ] Signup form works
- [ ] Data appears in Google Sheet

---

### Step 7: Deploy to Vercel (5 minutes)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial CommonGood landing page"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables:
   - Key: `GOOGLE_SHEET_ID`, Value: (your sheet ID)
   - Key: `GOOGLE_SHEETS_CREDENTIALS`, Value: (your JSON)
6. Click "Deploy"

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Deployed successfully

---

## 🎉 You're Live!

Your landing page is now live! Here's what to do next:

### Immediate (Today)
- [ ] Test the live site - fill out the form
- [ ] Share the URL with 2-3 close friends for feedback
- [ ] Post to one neighborhood Facebook group or Nextdoor

### This Week
- [ ] Print 50 SkillSwap paper cards (template TBD)
- [ ] Plan first physical meetup (date/location)
- [ ] Email 5-10 people you know might be interested
- [ ] Start Flutter learning (see Resilient Architecture doc)

### Next Week
- [ ] Host first physical meetup
- [ ] Gather feedback on paper prototype
- [ ] Update landing page with meetup photos/results
- [ ] Send update email to everyone who signed up

---

## 🆘 Troubleshooting

**Problem: "GOOGLE_SHEET_ID not configured"**
- Solution: Make sure `.env.local` exists and has the correct variable name
- Restart dev server after creating `.env.local`

**Problem: "The caller does not have permission"**
- Solution: Share the Sheet with service account email
- Make sure you gave it "Editor" permission

**Problem: Signups not appearing**
- Solution: Check browser console and terminal for errors
- Verify Sheet ID is correct
- Confirm service account has access

**Need help?**
See detailed troubleshooting in [SETUP-GOOGLE-SHEETS.md](./SETUP-GOOGLE-SHEETS.md)

---

## 📊 What Success Looks Like

**Phase 0 Goals (Weeks 1-4):**
- ✅ Landing page live
- 20+ email signups
- First physical meetup with 10+ people
- Validated paper prototype concept
- Working knowledge of Flutter/Hive

**Track your progress:**
- Signups: Open your Google Sheet anytime
- Traffic: Add Vercel Analytics (free, privacy-friendly)
- Community: Document learnings from each meetup

---

**Remember:** This is Phase 0. The goal isn't a polished product - it's validating that people actually want this and learning what they need.

You're building community infrastructure, not a startup. Take your time. Build relationships first, code second.

Good luck! 🌱
