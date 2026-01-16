# Phase 2+ Features & Requirements

**Purpose:** Detailed specifications for features to be implemented in Phase 2 and beyond. These requirements were extracted from original project documentation and represent validated design decisions.

**Status:** Reference document for future implementation  
**Last Updated:** January 14, 2026

---

## Table of Contents
1. [SkillSwap Features](#skillswap-features)
2. [Good Samaritan Tools](#good-samaritan-tools)
3. [Trust & Safety Systems](#trust--safety-systems)
4. [Performance Requirements](#performance-requirements)
5. [Privacy & Accessibility](#privacy--accessibility)
6. [API Integrations](#api-integrations)

---

## SkillSwap Features

### Core Posting System

**FR1.1: User Posts Skill/Request**
- **Acceptance Criteria:**
  - Form with fields: Title, Description, Time Credit (1hr = 1 credit)
  - Time-banked exchange model (1 hour teaching = 1 hour receiving)
  - Example: "Teach Spanish (1hr)" trades for "Fix my bike (1hr)"

**FR1.2: View Nearby Trades on Map**
- **Acceptance Criteria:**
  - Map pins filtered by 5-mile radius (configurable)
  - Color-coded by post type (skill offer, skill request, favor, lost, found)
  - Load 50+ map pins in <2 seconds
  - **Implementation:** Mapbox GL for web, Google Maps for Flutter

**FR1.3: SMS Proxying (Privacy Feature)**
- **Acceptance Criteria:**
  - Twilio relays messages between users
  - Phone numbers remain hidden (masked)
  - Users can respond without revealing contact info
  - **Implementation:** Twilio API with proxy number pool

**FR1.4: Auto-Expire Posts**
- **Acceptance Criteria:**
  - Posts archived after 7 days if no activity (configurable)
  - Users can manually mark posts as complete/inactive
  - Expired posts move to archive (not deleted, for trust history)

**Non-Functional Requirements:**
- **Performance:** Map loads in <2 seconds with 50+ pins
- **Security:** SMS proxying (no raw phone numbers stored in database)

---

## Good Samaritan Tools

### NeighborLink (Quick Favors)

**FR2.1: Post Quick Favor**
- **Acceptance Criteria:**
  - Simple 3-field form: "I need / I can offer" + location
  - Fast posting flow (<30 seconds from open to submit)
  - No time-credit requirement (one-way help)
  - Examples: "Can someone walk my dog?", "Need help moving couch"

**FR2.3: Anonymous Replies**
- **Acceptance Criteria:**
  - Generate disposable email/SMS for contact
  - Contact method expires after 7 days or when marked complete
  - Users can respond without revealing identity initially

### Lost & Found Commons

**FR2.2: Photo Upload with AI Matching**
- **Acceptance Criteria:**
  - Image upload (max 5MB, JPG/PNG)
  - Optional: AI suggests potential matches from "found items"
  - Description field + location (neighborhood-level fuzzy)
  - **Images deleted after 30 days** (privacy/storage)

**Non-Functional Requirements:**
- **Privacy:** Images deleted after 30 days (automatic cleanup)
- **Accessibility:** Alt-text required for all uploaded photos

---

## Trust & Safety Systems

### User Verification Tiers

**Tier 1: Basic (Pseudonym + SMS Proxy)**
- Pseudonym (no real name required)
- SMS proxy for communication
- Can post/browse, limited trust

**Tier 2: Vouched (Trusted by Community Member)**
- Existing Tier 2+ user confirms identity via SMS
- Increases post visibility and trust score
- Can participate in higher-value exchanges

**Tier 3: SafeSwap Partner (Verified Organizations)**
- Libraries, community centers, verified partners
- Can host SafeSwap Zones
- Highest trust level

### Vouching System

**FR3.1: Vouching for New Users**
- **Acceptance Criteria:**
  - Existing user (Tier 2+) confirms new user's identity via SMS
  - Vouching limited to 5 new users per month (prevents abuse)
  - Vouch recorded on blockchain or immutable log (future)
  - New user moves from Tier 1 → Tier 2

**Implementation Notes:**
- SMS confirmation: "Reply YES to vouch for [pseudonym]"
- Vouch history visible on profile
- Bad vouches affect voucher's trust score

### Reporting & Moderation

**FR3.2: Report Posts/Users**
- **Acceptance Criteria:**
  - 1-click flag button on all posts
  - Report reasons: scam, spam, inappropriate, safety concern
  - Moderators review within 24 hours
  - Reporter receives update when resolved

**Incident Response Workflow:**
1. **First violation:** Warning message to user
2. **Second violation:** Temporary suspension (7 days)
3. **Third violation:** Permanent ban (device-level enforcement)

**Enforcement:**
- Device fingerprinting (not IP addresses - privacy)
- No email/password = harder to create new accounts
- Community review board for appeals (Phase 3+)

### SafeSwap Zones

**FR3.3: SafeSwap Zone Verification**
- **Acceptance Criteria:**
  - Partner organizations approve locations via admin portal
  - Requirements: Public, staffed, visible signage
  - Users can flag unsafe locations
  - Map shows verified zones with special icon

**SafeSwap Zone Rules:**
- High-value trades (>$50 equivalent) must occur here
- Users encouraged to bring buddy for all meetups
- Zones have posted safety guidelines

**Data Stored:**
- Location name, address, hours of operation
- Partner organization contact
- User safety ratings/reports

---

## Performance Requirements

### Response Time Targets

- **Map loading:** 50+ pins in <2 seconds
- **Post creation:** Form submit to confirmation <1 second (offline)
- **Sync:** Background sync every 5 minutes (when online)
- **Image upload:** Progress indicator, max 5MB

### Storage Limits

- **Local database:** <100MB (offline guides + cached posts)
- **Per-user data:** ~10-20MB (depends on activity)
- **Image storage:** Max 5MB per image, 30-day retention

### Offline Capabilities

- **Must work offline:**
  - Browse cached posts
  - Create new posts (queue for sync)
  - View offline guides
  - Profile management

- **Requires connectivity:**
  - Initial data sync
  - SMS/message sending
  - Image upload
  - Map tile loading (unless cached)

---

## Privacy & Accessibility

### Privacy Requirements

**Data Collection Minimums:**
- **Required:** Pseudonym, phone number (proxied), neighborhood code (fuzzy)
- **Optional:** Profile photo (for Lost & Found posts only)
- **Never stored:** Real names, precise GPS coordinates, payment info

**Data Retention:**
- Posts: Auto-delete after 14 days inactive (configurable)
- Images: Delete after 30 days
- Messages: User can delete anytime, auto-delete after 90 days
- Account: User can request full deletion via privacy@commongood.org

**Encryption:**
- In transit: TLS 1.3
- At rest: Database-level encryption (Supabase provides this)
- E2E encryption for messages (Phase 3+)

### Accessibility Requirements

**WCAG 2.1 AA Compliance:**
- Alt-text required for all images
- Keyboard navigation support
- Screen reader friendly
- High contrast mode available
- Minimum font size 16px (adjustable)

**Device Support:**
- Works on low-end Android devices (2GB RAM minimum)
- iOS 13+ and Android 8+ support
- Responsive web design (mobile-first)

---

## API Integrations

### Twilio (SMS Proxying)

**Purpose:** Mask phone numbers for privacy

**Implementation:**
- Proxy number pool (rotate numbers per conversation)
- Message forwarding with sender/recipient hidden
- Cost: ~$1/month per active proxy number
- Fallback: In-app messaging if Twilio fails

**API Endpoints Needed:**
- `/api/sms/send` - Forward message via proxy
- `/api/sms/webhook` - Receive incoming messages
- `/api/sms/proxy/create` - Generate new proxy number

**Cost Estimate:** $50-100/month for 100 active users

### Mapbox (Geofencing & Maps)

**Purpose:** Display posts on interactive map, geofencing for neighborhoods

**Implementation:**
- Mapbox GL JS for web
- Google Maps SDK for Flutter (Mapbox Flutter support limited)
- Geofencing: 5-mile radius around user (adjustable)
- Offline: Cache map tiles for user's neighborhood

**API Usage:**
- Map loads: ~1000/day per active user
- Geocoding: ~100/day (address → coordinates)
- Free tier: 50k map loads/month

**Cost Estimate:** Free for Phase 1, ~$50/month for 500 users

### Google Vision API (Future - Lost & Found Matching)

**Purpose:** AI-powered image matching for lost/found items

**Implementation:**
- Image similarity detection
- Label detection (e.g., "blue backpack", "calico cat")
- Suggest potential matches when item posted

**Cost:** ~$1.50 per 1000 images (deferred to Phase 3)

---

## Development Timeline Estimates

### Phase 1: Local-Only MVP (8-12 weeks)
- Week 1-2: Hive database + basic UI
- Week 3-4: Post creation/viewing
- Week 5-6: Offline guides integration
- Week 7-8: User onboarding flow
- Week 9-10: Testing + bug fixes
- Week 11-12: Beta with 5-10 users

### Phase 2: Sync & Community Features (8-12 weeks)
- Week 1-2: Supabase integration
- Week 3-4: Background sync engine
- Week 5-6: SMS proxying (Twilio)
- Week 7-8: Basic messaging
- Week 9-10: Trust/vouching system
- Week 11-12: Beta with 30+ users

### Phase 3: Trust & Safety (6-8 weeks)
- Week 1-2: Reporting/moderation system
- Week 3-4: SafeSwap Zones
- Week 5-6: Advanced vouching
- Week 7-8: Admin portal for partners

### Phase 4: P2P & Resilience (12+ weeks)
- Research & prototyping
- Bluetooth P2P implementation
- Mesh network exploration
- Advanced offline features

---

## Open Questions (To Be Resolved)

### Geofencing Approach
**Question:** Use device GPS or approximate (neighborhood-level)?

**Options:**
- **Precise GPS:** More accurate matching, privacy concerns
- **Neighborhood-level:** Better privacy, less precise
- **Hybrid:** GPS for map display, fuzzy for storage

**Decision Needed By:** Phase 2 Week 1

### Image Moderation
**Question:** Pre-screen lost/found photos with AI?

**Options:**
- **Manual moderation:** Community reports, moderator review
- **AI pre-screening:** Google Vision API to flag inappropriate
- **Hybrid:** AI flags suspicious, human reviews

**Decision Needed By:** Phase 2 Week 5

### Time Banking Model
**Question:** Strict 1hr=1credit or flexible?

**Options:**
- **Strict:** All skills equal (1 hour teaching = 1 hour plumbing)
- **Flexible:** Users negotiate (2hrs teaching = 1hr plumbing)
- **Tiered:** Skill categories with different rates

**Decision Needed By:** Phase 1 (MVP decision)

---

## Success Metrics

### Phase 2 Targets
- 30+ active users across 3+ neighborhoods
- 500+ posts created
- <1% spam/abuse reports
- 95% uptime for sync services
- Average post fulfillment time: <3 days

### Phase 3 Targets
- 100+ active users
- 10+ SafeSwap Zone partnerships
- Community moderation handles 90% of reports
- <2 hour average moderation response time

---

## Notes for Future Implementation

**When implementing these features:**

1. **Start with smallest viable version**
   - SMS proxy before fancy features
   - Basic map before advanced filtering
   - Manual moderation before AI

2. **Privacy by default**
   - Collect minimum data needed
   - Default to neighborhood-level, not GPS
   - Give users control over their data

3. **Community feedback loop**
   - Beta test each feature with 5-10 users
   - Document what works/doesn't
   - Iterate based on real usage

4. **Cost awareness**
   - APIs add up quickly (Twilio, Mapbox)
   - Apply for nonprofit credits when possible
   - Plan for self-hosting expensive services

---

**Remember:** These are specifications, not mandates. Adjust based on community feedback and real-world usage. The goal is resilient community infrastructure, not feature completeness.
