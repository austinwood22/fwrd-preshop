━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  AW PRE-SHOP — SETUP IN 5 MINUTES
  No code. No tech knowledge needed.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


HOW IT WORKS
────────────
Client submits their cart → you get an email with a clean
table → your assistant copies that table into Google Sheets.

That's it. One email. One paste. Done.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — SET UP EMAILJS (free, 5 minutes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to:  https://www.emailjs.com
2. Click "Sign Up Free" — use your Google account

3. Once logged in, click "Email Services" on the left
4. Click "Add New Service"
5. Choose Gmail
6. Click "Connect Account" → sign in with austin.wood@fwrd.com
7. Click "Create Service"
8. COPY the Service ID shown (looks like: service_abc1234)
   → Save it somewhere

9. Click "Email Templates" on the left
10. Click "Create New Template"
11. Change the Subject line to:
      New PreShop Request — {{item_count}} items from {{client_email}}

12. In the Content/Body area, DELETE everything and paste
    EXACTLY this (the {{{table_html}}} part is important):

────────────────────────────────────────────────────────
New request from: {{client_email}}
Date: {{submitted_at}}
Items: {{item_count}}
Estimated Total: {{total_price}}

{{{table_html}}}
────────────────────────────────────────────────────────

13. Click "Save"
14. COPY the Template ID shown (looks like: template_xyz5678)
    → Save it somewhere

15. Click your account name (top right) → "Account"
16. COPY your Public Key (looks like: AbCdEfGhIjKlMnOp)
    → Save it somewhere


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — PASTE YOUR 3 KEYS INTO THE APP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open the file called  index.html  in this folder
   (right-click → Open With → TextEdit on Mac,
    or Notepad on Windows)

2. Near the top of the file, find these 3 lines:

      const EJ_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
      const EJ_SERVICE_ID  = 'YOUR_SERVICE_ID';
      const EJ_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

3. Replace each value with what you copied. Example:

      const EJ_PUBLIC_KEY  = 'AbCdEfGhIjKlMnOp';
      const EJ_SERVICE_ID  = 'service_abc1234';
      const EJ_TEMPLATE_ID = 'template_xyz5678';

4. Save the file (Cmd+S on Mac, Ctrl+S on Windows)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — PUT IT LIVE ON NETLIFY (2 minutes, free)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to:  https://app.netlify.com/drop
2. Drag the entire pwa folder onto that page
3. It gives you a live link in about 30 seconds
   (something like: https://funny-name-123.netlify.app)
4. That's your app URL — share it with clients


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT THE EMAIL LOOKS LIKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subject: New PreShop Request — 4 items from jane@email.com

New request from: jane@email.com
Date: May 13, 2026, 2:45 PM
Items: 4
Estimated Total: $14,260

┌──────────┬───────────────────┬───────┬──────┬─────────┬──────────────┐
│ Look     │ Item              │ Color │ Size │ Retail  │ Code         │
├──────────┼───────────────────┼───────┼──────┼─────────┼──────────────┤
│ Look 06  │ Skye II Jacket    │ Stone │  6   │ $5,290  │ 290B57610001 │
│ Look 06  │ Alicynne Pant     │ Stone │  4   │ $3,990  │ 290B55610001 │
│ Look 09  │ Ardsley Jacket    │ Stone │  6   │ $2,890  │ 290B55442001 │
│ Look 09  │ Bryer 95 Sandal   │ Silver│  38  │ $1,090  │ 800B55837001 │
└──────────┴───────────────────┴───────┴──────┴─────────┴──────────────┘
                                              Est. $14,260


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW YOUR ASSISTANT ADDS IT TO GOOGLE SHEETS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open the email
2. Select the table (click + drag from Look to last Code)
3. Copy (Cmd+C / Ctrl+C)
4. Open Google Sheets → click the next empty row
5. Paste (Cmd+V / Ctrl+V)
   → Each column lands in the right cell automatically

Done. The whole paste takes about 10 seconds.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UPDATING THE PRODUCT CATALOG (new season / new looks)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The catalog lives in  products.json  in this folder.
Open it in TextEdit/Notepad, make your changes, save,
then re-drag the folder to Netlify. Updates in ~30 sec.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Austin Wood | FWRD Preferred | Rise Group South Bay
  austin.wood@fwrd.com | 213-222-5189
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
