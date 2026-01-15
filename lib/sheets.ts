import { google } from 'googleapis';

/**
 * Google Sheets API client for appending signup data
 * 
 * Setup instructions:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a new project (or select existing)
 * 3. Enable Google Sheets API
 * 4. Create Service Account credentials
 * 5. Download JSON key file
 * 6. Share your Google Sheet with the service account email
 * 7. Add credentials to .env.local (see .env.local.example)
 */

// Initialize Google Sheets client
function getGoogleSheetsClient() {
  const credentials = JSON.parse(
    process.env.GOOGLE_SHEETS_CREDENTIALS || '{}'
  );

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

/**
 * Append a row to the Google Sheet
 * @param values Array of values to append (e.g., [timestamp, email, neighborhood, interests])
 */
export async function appendToSheet(values: string[]) {
  const sheets = getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw new Error('Failed to save signup data');
  }
}

/**
 * Get all signups from the sheet (for admin/dashboard use)
 */
export async function getSignups() {
  const sheets = getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID not configured');
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:D',
    });

    return response.data.values || [];
  } catch (error) {
    console.error('Error reading from sheet:', error);
    throw new Error('Failed to fetch signup data');
  }
}
