# Next Steps: Phase 0 Action Plan

**Purpose:** Clear, actionable guidance for launching CommonGood's community foundation  
**Timeline:** Next 4 weeks (Phase 0)  
**Last Updated:** January 14, 2026

---

## 🎯 Phase 0 Goals Reminder

By the end of Week 4, you should have:
- ✅ Landing page live and collecting signups
- ✅ 20+ interested neighbors signed up
- ✅ First physical meetup completed with 10+ attendees
- ✅ Paper prototype tested and feedback gathered
- ✅ Started Flutter learning journey

---

## This Week (Week 1): Get Live

### Day 1-2: Landing Page Setup ⏱️ 3-4 hours

**Priority 1: Google Sheets Integration**
1. Follow `SETUP-GOOGLE-SHEETS.md` (10 minutes)
   - Create Google Sheet
   - Enable Google Sheets API
   - Create service account
   - Download JSON credentials
   - Share sheet with service account

2. Configure environment variables (5 minutes)
   ```bash
   cp .env.local.example .env.local
   # Add your GOOGLE_SHEET_ID and GOOGLE_SHEETS_CREDENTIALS
   ```

3. Test locally (5 minutes)
   ```bash
   pnpm install
   pnpm dev
   ```
   - Open http://localhost:3000
   - Submit test signup
   - Verify data appears in Google Sheet

**Priority 2: Deploy to Vercel**
4. Push to GitHub (10 minutes)
   ```bash
   git add .
   git commit -m "Initial CommonGood landing page"
   git push origin main
   ```

5. Deploy on Vercel (15 minutes)
   - Go to vercel.com
   - Import your GitHub repo
   - Add environment variables:
     - `GOOGLE_SHEET_ID`
     - `GOOGLE_SHEETS_CREDENTIALS`
   - Deploy

6. Test live site (5 minutes)
   - Fill out your own signup form
   - Check Google Sheet
   - Share URL with 2-3 friends for feedback

**✅ Success Metric:** Landing page live and collecting signups

---

### Day 3-4: First Outreach ⏱️ 2-3 hours

**Priority 1: Soft Launch to Close Network**
1. Email 5-10 friends/family (30 minutes)
   ```
   Subject: Testing a community resilience project—need your feedback
   
   Hey [name],
   
   I'm working on a project to build offline-capable tools for local 
   mutual aid in Minneapolis. The goal is to help neighborhoods share 
   skills and coordinate during emergencies without depending on 
   corporate platforms.
   
   I just launched a simple landing page and would love your feedback:
   [your-site].vercel.app
   
   Sign up if you're interested in testing the concept with paper 
   prototypes! No tech skills needed—just a willingness to meet 
   neighbors and imagine better community tools.
   
   Let me know what you think!
   - Travis
   ```

2. Post in one personal network (15 minutes)
   - Your neighborhood Facebook group, OR
   - NextDoor, OR
   - Community Discord/Slack
   
   Keep it humble:
   ```
   "Hey neighbors! I'm exploring a project around offline-capable 
   mutual aid tools for Minneapolis. Looking for people interested 
   in testing a paper prototype over the next few weeks. Check out 
   [your-site].vercel.app if curious. Still very early stage!"
   ```

3. Reach out to 2-3 community organizers (30 minutes)
   - Local mutual aid groups
   - Community gardens coordinators
   - Tool library organizers
   - Neighborhood council members
   
   Ask: "Would you be interested in a physical meetup to test a 
   community SkillSwap prototype?"

**✅ Success Metric:** 5-10 signups by end of week

---

### Day 5-7: Physical Prototype Prep ⏱️ 3-4 hours

**Priority 1: Create Paper SkillSwap Cards**
1. Design simple cards (1 hour)
   - 4x6 index cards work great
   - Template:
     ```
     ┌─────────────────────────┐
     │ OFFER / REQUEST         │
     │                         │
     │ [  ] I can teach/do:    │
     │ _____________________   │
     │                         │
     │ [  ] I need help with:  │
     │ _____________________   │
     │                         │
     │ Pseudonym: __________   │
     │ Neighborhood: ________  │
     │ Contact: _____________  │
     └─────────────────────────┘
     ```

2. Print 50 cards (30 minutes)
   - Use heavy cardstock or index cards
   - Consider using different colors for offers vs. requests

3. Create simple instructions (30 minutes)
   ```
   HOW TO USE SKILLSWAP CARDS
   
   1. Fill out what you can offer OR what you need
   2. Pin your card on the community board
   3. Browse other cards—find a match?
   4. Contact the person directly to arrange
   5. Meet at a public place (SafeSwap Zone)
   6. Exchange skills! (No money needed)
   
   Examples:
   - "I can teach Spanish" ↔ "I need bike repair"
   - "I can help with moving" ↔ "I need garden advice"
   ```

**Priority 2: Identify First Meetup Location**
4. Scout 2-3 potential venues (1 hour)
   Options:
   - Local library (usually free meeting rooms)
   - Coffee shop with community board
   - Community center
   - Church basement
   - Your living room if <10 people

5. Check availability (30 minutes)
   - Call/email to reserve room (if needed)
   - Target date: 2-3 weeks out (gives time to promote)
   - Weekend afternoon works best (2-3pm on Saturday)

**Priority 3: Announce Meetup Date**
6. Update landing page (if date confirmed) (15 minutes)
   - Add meetup details to Phase 0 section
   - Send email to current signups

**✅ Success Metric:** Cards printed, meetup date scheduled

---

## Week 2: Community Building + Learning

### Flutter Learning Track (5-7 hours this week)

**Day 1-2: Flutter Installation + First App**
1. Install Flutter SDK (1 hour)
   - Follow official guide: https://flutter.dev/docs/get-started/install
   - macOS: Use Homebrew or direct download
   - Verify: `flutter doctor`

2. Complete first codelab (2 hours)
   - "Write your first Flutter app": https://flutter.dev/docs/get-started/codelab
   - Focus on understanding:
     - Widgets (everything is a widget)
     - State management basics
     - Hot reload workflow

3. Build "Hello CommonGood" app (1 hour)
   - Create new app: `flutter create hello_commongood`
   - Modify to show CommonGood branding
   - Run on simulator/device
   - Experiment with changing text, colors

**Day 3-4: Hive Database Intro**
4. Learn Hive basics (2 hours)
   - Read docs: https://docs.hivedb.dev/
   - Watch tutorial: "Hive Flutter Tutorial" on YouTube
   - Understand:
     - Boxes (like tables)
     - Type adapters
     - CRUD operations

5. Build simple Hive app (2-3 hours)
   - Todo list that persists locally
   - Goal: Create, read, update, delete todos
   - No sync, no server—just local storage
   - **This is the foundation for CommonGood Phase 1**

**✅ Success Metric:** Working todo app with Hive persistence

---

### Community Building Track (3-4 hours this week)

**Day 1-2: Promote Meetup**
1. Create event announcement (30 minutes)
   ```
   Subject: You're invited: CommonGood SkillSwap Paper Prototype Test
   
   Date: [Your date, 2-3 weeks out]
   Time: 2pm-4pm
   Location: [Venue name + address]
   
   What: Test a paper prototype of a community skill-sharing system
   Who: 10-20 neighbors interested in local resilience
   Why: Shape the design before we write any code
   
   Bring: Just yourself and your skills! No tech skills needed.
   
   We'll test:
   - Posting skill offers/requests on physical cards
   - Matching neighbors with complementary needs
   - Vouching system for building trust
   - SafeSwap Zone concept
   
   Pizza and drinks provided. RSVP: [email or form]
   
   Questions? hello@commongood.community
   ```

2. Post in 2-3 places (1 hour)
   - Neighborhood Facebook groups
   - NextDoor
   - Local subreddit (r/Minneapolis)
   - Community centers' bulletin boards

3. Personal invitations (1 hour)
   - Email everyone who signed up
   - Invite specific friends you think would be interested
   - Ask existing signups to bring a friend

**Day 3-4: Prepare Meetup Materials**
4. Gather supplies (1 hour)
   - SkillSwap cards (already printed)
   - Markers/pens
   - Large poster board for "community board"
   - Name tags
   - Snacks/drinks
   - Feedback forms (see template below)

5. Create feedback form (30 minutes)
   ```
   COMMONGOOD PROTOTYPE FEEDBACK
   
   1. Did the SkillSwap concept make sense? Yes / No / Somewhat
   
   2. Would you actually use this in your neighborhood?
      □ Definitely  □ Probably  □ Maybe  □ Probably not  □ No
   
   3. What worked well?
   
   4. What confused you or didn't work?
   
   5. What features would make this more useful?
   
   6. Main concern or hesitation:
   
   7. Interested in beta testing the app? Yes / No
      If yes, email: ___________________
   
   Thank you! 🌱
   ```

**✅ Success Metric:** Meetup promoted, 10+ RSVPs, materials ready

---

## Week 3: Meetup + Iteration

### The Physical Meetup (2-3 hours on meetup day)

**Before Meetup:**
1. Arrive early (30 min before start)
2. Set up:
   - Community board (poster on wall)
   - SkillSwap cards on table
   - Name tags
   - Snacks

**During Meetup (2 hours):**
1. Intro (15 minutes)
   - Welcome everyone
   - Share CommonGood mission briefly
   - Explain: "This is a prototype test—we're designing together"

2. Explain SkillSwap (10 minutes)
   - Show example card
   - "What can you teach in 1 hour?"
   - "What would you like to learn?"
   - "Skills are equal: 1 hour teaching = 1 hour learning"

3. Fill out cards (20 minutes)
   - Everyone fills out 1-2 cards
   - Post cards on community board
   - Browse cards from others

4. Matchmaking exercise (30 minutes)
   - "Find someone whose skill you want"
   - "Introduce yourself"
   - "Arrange a future skill exchange"
   - Facilitate connections

5. Group discussion (30 minutes)
   - What worked? What didn't?
   - Safety concerns?
   - Would you use an app for this?
   - What features matter most?

6. Wrap up (15 minutes)
   - Collect feedback forms
   - Take group photo (with permission)
   - Thank everyone for coming
   - Promise to share updates

**After Meetup:**
7. Follow up same day (1 hour)
   - Email all attendees thanking them
   - Share group photo (if taken)
   - Ask for additional feedback
   - Tease: "App development starts soon!"

**✅ Success Metric:** 10+ attendees, valuable feedback gathered, group photo

---

### Post-Meetup Analysis (2-3 hours after meetup)

**Day 1 After Meetup: Process Feedback**
1. Read all feedback forms (30 minutes)
   - Identify common themes
   - Note surprising insights
   - List top 3 concerns
   - List top 3 requested features

2. Write up learnings (1 hour)
   - What people liked
   - What people didn't understand
   - What would make them actually use it
   - Safety concerns to address
   
   Document in: `docs/Phase0-Meetup-Learnings.md`

3. Update architecture doc if needed (30 minutes)
   - Add features people requested
   - Adjust trust/safety approach based on concerns
   - Note what to prioritize in Phase 1

**Day 2-3 After Meetup: Share Updates**
4. Blog post / update email (1 hour)
   - Share meetup photos
   - Summarize learnings
   - Thank participants
   - Announce: "Phase 1 app development starting!"

5. Update landing page (30 minutes)
   - Add meetup photos to gallery (create new section)
   - Update Phase 0 status: "✅ Complete"
   - Tease Phase 1: "App development starting Month 2"

**✅ Success Metric:** Feedback documented, updates shared publicly

---

## Week 4: Phase 1 Prep

### Flutter Learning (5-7 hours)

**Day 1-2: Repository Pattern**
1. Learn about Flutter architecture (2 hours)
   - Read about Repository pattern
   - Watch: "Flutter Architecture" videos
   - Understand: UI → Repository → Database

2. Refactor todo app (2 hours)
   - Move Hive code to `TodoRepository`
   - Separate UI from data layer
   - Practice: "How would I add sync later?"

**Day 3-4: Build Mini SkillSwap**
3. Start simple version (3-4 hours)
   - Screen 1: List of skills (hardcoded data)
   - Screen 2: Add new skill (save to Hive)
   - Screen 3: View skill details
   - NO styling, NO complexity—just foundation

**✅ Success Metric:** Simple Flutter app with Hive that models SkillSwap

---

### Community Maintenance (2-3 hours)

**Ongoing:**
1. Respond to new signups (30 min/week)
   - Welcome email
   - Answer questions
   - Invite to stay updated

2. Share progress (1 hour)
   - Twitter/social media updates
   - Email list with development updates
   - "Building in public" posts

3. Plan Phase 1 beta testing (1 hour)
   - Identify 5-10 people for early testing
   - Create simple beta test plan
   - Set up feedback channel (Discord/Slack/Email)

**✅ Success Metric:** Active communication with growing community

---

## Success Tracking

### Phase 0 Scorecard (End of Week 4)

**Must Have (Required):**
- [ ] Landing page live and functional
- [ ] 20+ email signups
- [ ] Meetup completed with feedback
- [ ] Flutter + Hive basics learned
- [ ] Simple SkillSwap prototype built

**Should Have (Important):**
- [ ] 10+ meetup attendees
- [ ] Positive feedback from majority
- [ ] 5-10 beta testers identified
- [ ] Meetup learnings documented
- [ ] Updates shared publicly

**Nice to Have (Bonus):**
- [ ] 30+ email signups
- [ ] Local press coverage
- [ ] Second meetup requested
- [ ] Technical contributor interested
- [ ] Partnership inquiry (library, etc.)

---

## Common Pitfalls to Avoid

### ❌ Don't:
1. **Overengineer the landing page**
   - Good enough > perfect
   - Launch with simple version
   - Iterate based on feedback

2. **Skip the physical meetup**
   - This validates the entire concept
   - Can't be replaced with online survey
   - Real human connection builds trust

3. **Try to learn everything about Flutter**
   - Focus on Hive + basic UI
   - You'll learn more building Phase 1
   - Tutorials are infinite, start building

4. **Wait for "enough" signups**
   - 20 engaged people > 100 lukewarm
   - Start meetup even with 5 RSVPs
   - Quality over quantity

5. **Build the app before testing concept**
   - Paper prototype teaches more than code
   - Cheaper to iterate on paper
   - Community buy-in matters more than tech

### ✅ Do:
1. **Launch imperfect**
   - Better done than perfect
   - Iterate based on real feedback
   - Community understands "work in progress"

2. **Document everything**
   - Write down learnings from meetup
   - Take photos for transparency
   - Share progress publicly

3. **Focus on relationships**
   - Every signup is a potential advocate
   - Personal responses > automated emails
   - This is community-building first, tech second

4. **Stay on schedule**
   - Meetup by Week 3 (no delays)
   - Flutter learning by Week 4
   - Phase 1 starts Month 2

5. **Ask for help**
   - Technical questions? Ask developers in community
   - Organizing questions? Ask existing organizers
   - You don't have to do everything alone

---

## Emergency Pivots

### If signup numbers are low (<10 by Week 2):
**Action:** Double down on personal outreach
- Call/text friends directly
- Post in more specific groups
- Offer to host meetup at your place
- Smaller group is fine for prototype test

### If meetup has low turnout (<5 people):
**Action:** Make it valuable anyway
- Deep discussion with attendees
- Get detailed feedback
- Schedule one-on-one follow-ups
- Plan smaller, more frequent meetups

### If Flutter is too hard:
**Action:** Adjust learning pace
- Extend Phase 0 by 1-2 weeks
- Focus only on Hive basics
- Consider simpler web app first
- Remember: You have time to learn

### If concept gets negative feedback:
**Action:** Listen and iterate
- Ask "What would make this better?"
- Dig into specific concerns
- Adjust approach based on feedback
- May need to pivot features, not mission

---

## Tools & Resources

### Project Management
- **Tasks:** Use GitHub Issues or simple Trello board
- **Timeline:** Google Calendar with milestones
- **Notes:** Markdown files in `docs/` folder

### Communication
- **Email:** Use your current email for now
- **Updates:** Blog on landing page OR simple Substack
- **Community:** Consider Discord/Slack for Phase 1 beta

### Development
- **Code:** GitHub repo (already set up)
- **Hosting:** Vercel (free tier is plenty)
- **Database:** Google Sheets → Supabase later
- **Learning:** Flutter docs, YouTube, Stack Overflow

---

## Weekly Check-In Questions

Ask yourself every Sunday:

1. **Progress:**
   - What did I accomplish this week?
   - What's blocking me?
   - Am I on track for Phase 0 goals?

2. **Community:**
   - How many signups this week?
   - Did I respond to everyone?
   - Is momentum building?

3. **Learning:**
   - How many hours did I spend on Flutter?
   - What did I build?
   - What do I need to learn next?

4. **Energy:**
   - Am I excited or burned out?
   - Do I need to adjust pace?
   - Who can I ask for help?

5. **Next Week:**
   - Top 3 priorities?
   - What can I delegate or skip?
   - What's the success metric?

---

## When Phase 0 is Complete

### Celebrate! 🎉
You've:
- ✅ Launched a landing page
- ✅ Built a community
- ✅ Tested the concept
- ✅ Learned Flutter basics
- ✅ Proven people want this

### Then:
1. **Week 5:** Start Phase 1 (Local-Only MVP)
2. **Refer to:** `CommonGood-Resilient-Architecture.md` Phase 1 section
3. **Build:** First version of Flutter app
4. **Timeline:** 8-12 weeks to working prototype

---

## Final Reminders

**This is a marathon, not a sprint:**
- You have 12+ months to build this properly
- Community building happens in parallel to coding
- Learning is part of the process, not a delay
- Offline-first architecture is worth doing right

**You're not building a startup:**
- No pressure to "launch fast and break things"
- Thoughtful design > rushed features
- Community feedback > assumed requirements
- Resilience > growth metrics

**You're building infrastructure:**
- Like roads, libraries, community gardens
- Takes time to build well
- But lasts for decades
- Serves the community, not investors

---

**Good luck with Phase 0! 🌱**

You've got this. Remember: the goal is to build the human network first, validate the concept, and learn the foundations. The app comes after—and it'll be better because you did this groundwork.

**Questions?** Review the architecture doc, check QUICK-START.md, or ask for help. You're building in public—that means asking for guidance when you need it.

**Ready?** Start with Week 1, Day 1-2: Get that landing page live! ✨
