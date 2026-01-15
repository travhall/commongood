# Google Sheets Setup Guide

This guide will walk you through setting up Google Sheets as your signup database. It takes about 10 minutes.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CommonGood Signups" (or whatever you prefer)
4. Add headers to the first row:
   ```
   | Timestamp | Email | Neighborhood | Interests |
   ```
5. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
                                          ^^^^^^^^^^^^^^^
                                          Copy this part
   ```

## Step 2: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
   - Click the project dropdown at the top
   - Click "New Project"
   - Name it "CommonGood" (or whatever you prefer)
   - Click "Create"
3. Enable the Google Sheets API:
   - In the search bar, type "Google Sheets API"
   - Click on "Google Sheets API"
   - Click "Enable"

## Step 3: Create Service Account

1. In Google Cloud Console, go to **IAM & Admin** → **Service Accounts**
2. Click **"Create Service Account"**
3. Fill in the details:
   - **Name**: `commongood-sheets`
   - **Description**: `Service account for CommonGood signups`
   - Click **"Create and Continue"**
4. Grant role (optional): 
   - You can skip this step or select "Editor" if you want
   - Click **"Continue"**
5. Click **"Done"**

## Step 4: Create and Download Key

1. Click on the service account you just created
2. Go to the **"Keys"** tab
3. Click **"Add Key"** → **"Create new key"**
4. Select **JSON** format
5. Click **"Create"**
6. A JSON file will download automatically - **keep this safe!**

The downloaded file looks like this:
```json
{
  "type": "service_account",
  "project_id": "commongood-123456",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "commongood-sheets@commongood-123456.iam.gserviceaccount.com",
  "client_id": "123456789...",
  ...
}
```

## Step 5: Share Google Sheet with Service Account

1. Open your Google Sheet from Step 1
2. Click the **"Share"** button (top right)
3. Copy the `client_email` from your downloaded JSON file
   - It looks like: `something@something.iam.gserviceaccount.com`
4. Paste it into the "Add people and groups" field
5. Give it **"Editor"** permission
6. **Uncheck "Notify people"** (the service account doesn't need an email)
7. Click **"Share"**

## Step 6: Configure Environment Variables

1. In your project root, copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in the values:

   ```bash
   # The Sheet ID from Step 1
   GOOGLE_SHEET_ID=your_sheet_id_here

   # The ENTIRE contents of the JSON file from Step 4
   # Important: Put it all on ONE line, no line breaks
   GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"...","private_key":"..."}
   ```

3. **Important**: The `GOOGLE_SHEETS_CREDENTIALS` must be:
   - The entire JSON object
   - On a single line (no line breaks)
   - Properly escaped (the JSON should be valid)

### Example `.env.local`:

```bash
GOOGLE_SHEET_ID=1a2B3c4D5e6F7g8H9i0J

GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"commongood-123456","private_key_id":"abc123def456","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n","client_email":"commongood-sheets@commongood-123456.iam.gserviceaccount.com","client_id":"123456789"}
```

## Step 7: Install Dependencies

```bash
pnpm add googleapis
```

## Step 8: Test It!

1. Start your dev server:
   ```bash
   pnpm dev
   ```

2. Open http://localhost:3000

3. Fill out the signup form and submit

4. Check your Google Sheet - you should see a new row!

## Troubleshooting

### Error: "The caller does not have permission"
- Make sure you shared the Sheet with the service account email
- Check that you gave it "Editor" permission

### Error: "GOOGLE_SHEET_ID not configured"
- Make sure your `.env.local` file exists in the project root
- Check that the variable name matches exactly
- Restart your dev server after creating `.env.local`

### Error: "Failed to parse credentials"
- Make sure the JSON is on ONE line (no line breaks)
- Make sure there are no extra spaces or characters
- Try copying the JSON again from the downloaded file

### Signups not appearing in Sheet
- Check the browser console for errors
- Check your terminal for server errors
- Verify the Sheet ID is correct
- Make sure the service account has Editor access

## Security Notes

⚠️ **NEVER commit `.env.local` to Git!**
- The `.gitignore` file should already include `.env.local`
- The JSON credentials contain sensitive keys
- Anyone with these credentials can access your Sheet

✅ **For production (later):**
- Use Vercel/Netlify environment variables (not .env files)
- Consider using encryption for stored data
- Rotate service account keys periodically

## What's Next?

Once signups are working:
1. View your signups anytime in Google Sheets
2. Export to CSV when you need to email everyone
3. Use filters/formulas to analyze neighborhoods
4. Share the sheet with other organizers (as view-only)

When you outgrow Google Sheets (100+ signups), you'll migrate to Supabase in Phase 2. The form will work exactly the same, just a different backend!
