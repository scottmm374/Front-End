## Back End (Immunization Tracking App) ==> SUBJECT TO CHANGE

---

### Back End Architect: Karen Li (Github: karenjli)

---

## BASE URL:

https://immunizationtracker-bw.herokuapp.com/

--

### _USER - REFERS TO PARENT REGISTERING (CREATING) THE ACCOUNT_

### _PATIENT - REFERS TO ANYONE CREATED UNDER USER ACCOUNT (GENERALLY CHILDREN)_

#### back-end URL

## https://github.com/immunization-tracking-buildweek/Back-End

# USER REGISTRATION & LOGIN

### User Registration (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/user-register

Client sends:

{ "userEmail": "ladygaga@gmail.com", "userPassword": "pokerface", "userName": "Lady Gaga" }

Server returns:

{
"id": 12,
"userEmail": "ladygaga@gmail.com",
"userPassword": "Long-Encrypted-password",
"userName": "Lady Gaga"
}

### User Login (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/user-login

Client sends:

{ "userEmail": "ladygaga@gmail.com", "userPassword": "pokerface" }

Server returns:
{
"id": 12,
"message": "Welcome Lady Gaga",
"token": "the-super-long-hash-token"
}

        *Note, it would be nice if it returned USER Email and Full name to use in the app.
         Difficult to access these to use in application. I tested and you can send "userName" : "Lady Gaga" with the login-in and it works, just no return for it.

--

# Medical Professional REGISTRATION & LOGIN

### Medical Professional Registration (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/med-register

Client sends:

{
"medicFirstName": "Tara",
"medicLastName" : "Cole",
"medicEmail": "tcole@gmail.com",
"medicPassword": "medicine",
"company": "Beaumont",
"position": "DR"
}

Server returns:

{
"id": 73,
"medicEmail": "tcole@gmail.com",
"medicPassword": "Long-Encrypted-password",
"medicFirstName": "Tara",
"medicLastName": "Cole",
"company": "Beaumont",
"position": "DR"
}

### Medical Professional Login (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/med-login

Client sends:

{
"medicEmail": "tcole@gmail.com",
"medicPassword": "medicine"
}

Server returns:

{
"id": 73,
"message": "Welcome, DR",
"medtoken": "the-super-long-hash-token"
}

            * Note- Would be more useful if this returned The Dr's name as well?

---

# PATIENT INFO (USER SIDE) (GET)

### DISPLAY ALL PATIENT INFO RELATED TO SPECIFIC USER (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/:id

\*\*Note: "id" on URL refers to the USERS (userId), which is also stored in the token. One USER may have multiple PATIENTS due to having kids profile.

Client sends :

Server returns:

[
{
"id": 203,
"firstName": "Sarah",
"lastName": "gaga",
"age": 2,
"gender": "Female",
"weight": "20lbs",
"height": "36 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
},
{
"id": 204,
"firstName": "James",
"lastName": "gaga",
"age": 2,
"gender": "male",
"weight": "23lbs",
"height": "40 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
},
{
"id": 202,
"firstName": "Nick",
"lastName": "gaga",
"age": 5,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
}
]

### DISPLAY SINGLE PATIENT INFO (GET) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

\*\*Note: "id" in URL refers to the PATIENT (id) that is created when the patient is created, NOT USERS (userId).

Client sends:

Server returns:
{
"id": 202,
"firstName": "Nick",
"lastName": "gaga",
"age": 5,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
}

### ADD PATIENT FROM USER ACCOUNT (POST) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/addpatient

\*\*Note: "userId" in body refers to USERS (userId) that is adding the patient,

       Issue? - All keys except patientPhone are required

Client sends:

{
"firstName":"Nick",
"lastName":"gaga",
"age": 5,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
}

Server returns:

{
"message": "New patient created",
"patient": {
"id": 202,
"firstName": "Nick",
"lastName": "gaga",
"age": 5,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
}
}

### EDIT PATIENT INFO FROM USER ACCOUNT (PUT) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

\*\*Note: "Id" in URL and body refers to the Patient id, userId in body refers to USERS (userId)

Client sends:

{
"id": 202,
"firstName": "Nick",
"lastName": "Gaga",
"age": 4,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
}
Server returns:

{
"message": "Patient information updated"
}

### DELETE PATIENT INFO FROM USER ACCOUNT (DELETE) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

        Bug- Once permission is granted to Medic, patient can no longer be deleted, even if permission is revoked.

\*\*Note: "Id" on URL refers to patient id

Server returns:
{
"message": "Patient deleted"
}

### GIVE PERMISSION TO MEDICAL PROFESSIONAL TO ACCESS DATA (POST) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/add

\*\*Note: medproId is the medics "id" patientId is the "id" of patient.

Client sends:

{"permission": true, "patientId":206, "medproId":73}

\*\* Note, grab Permission id here, otherwise you lose access to it. It is the id listed first in the perm:{ id: 95}

Server returns:

{
"message": "New permission request posted",
"perm": {
"id": 95,
"permission": true,
"patientId": 206,
"medproId": 73
}
}

### EDIT PERMISSION GRANTED TO MEDICAL PROFESSIONAL (PUT) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/update/:id

\*\*Note: "id" refers to the permission id, Grab the permission ID when Giving permission in (Above endpoint).

Client sends:

{"permission": false, "patientId":206, "medproId":73}

Server returns:

{
"message": "Permission status changed"
}

### DISPLAY LIST OF PERMISSIONS BY PATIENT ON USER SIDE(GET) (BOTH USER AND MEDIC HAVE ACCESS)

https://immunizationtracker-bw.herokuapp.com/api/perm/patient/:id

\*\*Note: "id" on URL refers to patient ID

         BUG- This always returns as (permission: false), even if permissions are true,
         reflects as (permission: true) on the next end-point below however.

Server returns:

[
{
"id": 206,
"permission": false,
"patientId": 206,
"medproId": 73,
"firstName": "Ann",
"lastName": "gaga",
"age": 2,
"gender": "female",
"weight": "23lbs",
"height": "40 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12
},
{
"id": 206,
"permission": false,
"patientId": 206,
"medproId": 73,
"firstName": "Ann",
"lastName": "gaga",
"age": 2,
"gender": "female",
"weight": "23lbs",
"height": "40 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12

---

# PATIENT INFO (MEDICAL PROFESSIONAL SIDE)

### DISPLAY PATIENT INFO ON MEDICAL PROFESSIONAL (GET) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/:id

\*\*Note: "Id" on URL refers to medical professional ID

Server returns:
[
{
"id": 73,
"permission": true,
"patientId": 203,
"medproId": 73,
"firstName": "Sarah",
"lastName": "gaga",
"age": 2,
"gender": "Female",
"weight": "20lbs",
"height": "36 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12,
"medicEmail": "tcole@gmail.com",
"medicPassword": "long-encrypted-password",
"medicFirstName": "Tara",
"medicLastName": "Cole",
"company": "Beaumont",
"position": "DR"
},
{
"id": 73,
"permission": true,
"patientId": 204,
"medproId": 73,
"firstName": "James",
"lastName": "gaga",
"age": 2,
"gender": "male",
"weight": "23lbs",
"height": "40 in",
"patientEmail": "ladygaga@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 12,
"medicEmail": "tcole@gmail.com",
"medicPassword": "long-encrypted-password",
"medicFirstName": "Tara",
"medicLastName": "Cole",
"company": "Beaumont",
"position": "DR"
}
]

\*\*Note: The server will only show the information of patients who granted permission to medical professional.

#Immunization Records

### ADD IMMUNIZATION RECORD FOR PATIENT (POST) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/record/addImmunization

Client sends:

{"vaccineName": "TDap", "vaccineDate": "2000-10-12", "vaccineLocation": "Houston", "patientId":204}

        Optional field "isCompleted": "true"  Was not included in original ReadMe,
        but  (GET IMMUNIZATION RECORD BY PATIENT ID (GET) (BOTH USER AND MEDIC HAVE ACCESS) endpoint)  returns this key as false if not included. .

Server returns:

{
"message": "New immunization record added",
"record": {
}
}

        ** Note- record:{} returns lots of data, but no med/patient related info.

### DELETE IMMUNIZATION RECORD FOR PATIENT (DELETE) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/record/vaccine/:id

\*\*Note: "id" in URL refers to the id from "immunization record"

    Issue- You have to grab Record ID from the next endpoint
    (GET IMMUNIZATION RECORD BY PATIENT ID (GET) (BOTH USER AND MEDIC HAVE ACCESS))
    it is not returned when vaccination is created.

Server returns:

{
"message": "Immunization Record deleted"
}

### GET IMMUNIZATION RECORD BY PATIENT ID (GET) (BOTH USER AND MEDIC HAVE ACCESS)

https://immunizationtracker-bw.herokuapp.com/api/record/:id

\*\*Note: "id" in URL refers to patientId. Record id is the first id listed in data returned from server. {"id": 84}

Server returns:

[
{
"id": 84,
"vaccineName": "TDap",
"vaccineDate": "2000-10-12T00:00:00.000Z",
"vaccineLocation": "Houston",
"patientId": 204,
"isCompleted": false
},
{
"id": 88,
"vaccineName": "Chicken Pox",
"vaccineDate": "2000-10-12T00:00:00.000Z",
"vaccineLocation": "Houston",
"patientId": 204,
"isCompleted": false
},
{
"id": 90,
"vaccineName": "Measels",
"vaccineDate": "2000-10-12T00:00:00.000Z",
"vaccineLocation": "Houston",
"patientId": 204,
"isCompleted": true
}
]

### (MVP) for Immunization Tracker.

"**The marketing page must have a disclaimer letting the user know not to use data from real people in this as it could be a HIPAA violation**

1.  Onboading process for a parents (and ability for parents to add their children to their account)
2.  Onboarding process for medical professionals/office staff
3.  Ability for office staff to input immunization name, date received, and place received into a person's file.
4.  Ability for parents to grant permission for an office staff account to edit their immunization records. (The user can't edit it themself, only grant permission to their doctor's office).

           4. There is no EDIT immunizations end-point, Medic can Add or Delete an immunization only.

5.  Overview homepage for a user to see a summary of received and missing immunizations.

        5. Showing summary of immunizations works, however nothing built in to back-end to show missing immunizations.

6.  Homepage for office staff to see all patients that have granted them permission to edit their records. Single page view for each patient as well."
