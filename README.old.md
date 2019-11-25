# Front-End

[Visit IM-Records](https://front-end-git-michelle-scott.im-records.now.sh/)

"**Important: Do not use any data about real people in this app as it could be a violation of HIPAA regulations**

As a parent, it's hard to keep track of your child's immunization records!
Especially if you move states, or switch doctors.  
It's a pain to call around and figure out which immunizations your child still needs,
or to have them mail you proof for things like school registration.  
As an adult, it's even harder to access these records for travel that requires immunizations or booster shots.
This app allows medical professionals to upload immunization records to your personal or family account."

Proposal

- What problem does your app solve?
  Create a central location to keep your child’s immunization records that the patient and doctor can access and update. The record exists independently from your doctor’s current records, so if you change providers you don’t lose your record.

- Be as specific as possible; how does your app solve the problem?
-     Patients and doctors/providers each create an account on the app.

  The patient gives their doctor permission to access & edit the immunization record for their child.
  The Doctor can add new immunizations to the record. If the patient moves or changes providers they can add a new doctor/provider and remove the old one.

- What is the mission statement?
  Easy access to your child’s immunization records.
  Features

- What features are required for your minimum viable product?
  Web-UI - Landing Page
  **The marketing page must have a disclaimer letting the user know not to use data from real people in this as it could be a HIPAA violation**
  Button that Links to front-end - CTA (call to action)
  There needs to be at least 2 pages that are fully responsive

Front-End - Application - Account creation/Onboarding for parents and doctors with corresponding Login pages.
-Add children to your account.
-Ability for the doctor to edit and update the children’s records. - Ability for parents to give permission to Dr.

- What features may you wish to put in a future release? - Ability for office staff to upload a pdf form as proof of immunization. Ability for user to download a pdf summarizing the name and date of each immunization.

* What do the top 3 similar apps do for their users?
  ReadyVax: http://www.readyvax.com/user-role
* layout is smooth and clean. The sectioning on the landing page is great
* the landing page states that the app has alerts
* the onboarding flow is pretty great and very explanatory. Easy to follow.
  PreCheck: https://www.precheck.com/solutions/immunization-tracking
  Clear call to action
  Great landing page - clearly states the benefits of using the application, etc.
  Cygnis: https://www.cygnismedia.com/case-studies/readyvax-immunization-tracking-app.html
  Great landing page!

Frameworks - Libraries

_What 3rd party frameworks/libraries are you considering using?_

UI:

Web-UI:
HTML5
CSS3 & LESS
Flexbox
Phone View, Tablet View, Desktop View

Front-End:
React
Reactstrap
Formik/Yup
State Management - Context.API, Hooks
Styled Components
Backend api
Axios

- Do APIs require you to contact its maintainer to gain access?
- nope
- Are you required to pay to use the API?
- nope
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
- nope

Target Audience

- Who is your target audience? Be specific.
- parents that needs to manage immunization records for their children.

- What feedback have you gotten from potential users?
- NA: no users yet.

- Have you validated the problem and your solution with your target audience? How?
- NA: no users.

Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the first 2 days researching so you can hit the ground running on Friday.
  Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.
