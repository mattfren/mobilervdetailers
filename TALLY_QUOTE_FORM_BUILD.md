# Mobile RV Detailers Tally Quote Form

Build this form in Tally, then paste the published Tally URL into `src/data/site.ts` as `quoteFormUrl`.

## Form Title

Request an RV Detailing Quote

## Intro Copy

Send the RV details, service location, requested services, and photos. Mobile RV Detailers will review the scope before confirming final pricing or scheduling.

## Fields

1. Full name
   - Type: Short answer
   - Required: Yes

2. Best phone number
   - Type: Phone number
   - Required: Yes

3. Email address
   - Type: Email
   - Required: No

4. Preferred contact method
   - Type: Multiple choice
   - Required: Yes
   - Options:
     - Text
     - Facebook Messenger
     - Phone call
     - Email

5. RV type
   - Type: Multiple choice
   - Required: Yes
   - Options:
     - Class A
     - Class B
     - Class C
     - Fifth wheel
     - Travel trailer
     - Toy hauler
     - Other

6. RV length
   - Type: Short answer
   - Required: Yes
   - Placeholder: Example: 35 ft

7. Year / make / model
   - Type: Short answer
   - Required: No

8. Service location
   - Type: Short answer
   - Required: Yes
   - Placeholder: City, RV park, storage facility, or address

9. Where is the RV parked?
   - Type: Multiple choice
   - Required: Yes
   - Options:
     - Home
     - RV park
     - Campground
     - Storage facility
     - Other

10. Services wanted
    - Type: Checkboxes
    - Required: Yes
    - Options:
      - Normal Wash
      - Wash + Roof or Awning
      - Full Exterior Detail
      - Black Streak Removal
      - Bug & Tar Removal
      - Wax Soap & Hand Dry
      - RV Care Club
      - Custom request

11. Condition notes
    - Type: Long answer
    - Required: Yes
    - Placeholder: Light dirt, heavy road film, bugs, black streaks, roof buildup, mildew, mold, awning stains, tar, sap, chalking, fading, oxidation, not cleaned in a while, or other problem areas

12. Photos
    - Type: File upload
    - Required: Yes
    - Help text: Upload front cap, rear, both sides, roof if safely available, awning, wheels, and any problem areas if available.

13. Water available at the RV location?
    - Type: Multiple choice
    - Required: Yes
    - Options:
      - Yes
      - No
      - Not sure

14. Electricity available at the RV location?
    - Type: Multiple choice
    - Required: Yes
    - Options:
      - Yes
      - No
      - Not sure

15. Does the site allow mobile washing/detailing?
    - Type: Multiple choice
    - Required: Yes
    - Options:
      - Yes
      - No
      - Not sure
      - Not applicable / home

16. Preferred timing
    - Type: Short answer
    - Required: No
    - Placeholder: Example: next week, before a trip, weekday afternoons

17. Anything else Mobile RV Detailers should know?
    - Type: Long answer
    - Required: No

18. Quote acknowledgement
    - Type: Checkbox
    - Required: Yes
    - Text: I understand final pricing, availability, travel fees, and scheduling are confirmed after Mobile RV Detailers reviews the RV details, photos, location, water/electricity availability, site access, weather, and requested service scope. Quotes may change if photos or details are incomplete, unclear, inaccurate, outdated, or do not reflect the RV's actual condition at the time of service.

## Thank You Page

Title:
Quote request received

Copy:
Thanks for sending the details. Mobile RV Detailers will review the RV information, photos, location, and requested services before confirming final pricing or scheduling.

Button:
Return to Mobile RV Detailers

Button URL:
https://mobilervdetailers.com

## Tally Settings

- Collect email notifications for every submission.
- Keep file upload enabled.
- Use the published share URL as the website quote CTA.
- Do not require account creation from customers.
- If Tally offers spam protection, enable it.

## Site Wiring

After publishing the Tally form:

1. Copy the public Tally form URL.
2. Open `src/data/site.ts`.
3. Set:

```ts
quoteFormUrl: "https://tally.so/r/YOUR_FORM_ID",
```

4. Run:

```bash
npm run build
```

Until this URL is added, the site routes `Request Quote` to `/contact` and keeps Facebook Messenger as a secondary contact option.
