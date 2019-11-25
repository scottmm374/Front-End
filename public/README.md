## Back End (Immunization Tracking App) ==> SUBJECT TO CHANGE

---

### Back End Architect: Karen Li (Github: karenjli)

---

## BASE URL:

https://immunizationtracker-bw.herokuapp.com/

--

### _USER - REFERS TO PARENT REGISTERING (CREATING) THE ACCOUNT_

### _PATIENT - REFERS TO ANYONE CREATED UNDER USER ACCOUNT (GENERALLY CHILDREN)_

--

# USER REGISTRATION & LOGIN

### User Registration (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/user-register

Client sends:

{
"userEmail": "nickchubb@gmail.com",
"userPassword": "ilovecleveland",
"userName": "Nick Chubb"
}

Server returns:

{
"id": 118,
"userEmail": "nickchubb@gmail.com",
"userPassword": "$2a$08\$1ZIraMWTVOs/evXVXBG83OcS6ZZmAnTxrUoMh6ZY.2eLzSBoq5xy2",
"userName": "Nick Chubb"
}

### User Login (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/user-login

Client sends:

{
"userEmail": "nickchubb@gmail.com",
"userPassword": "ilovecleveland"
}

Server returns:
{
"id": 118,
"message": "Welcome Nick Chubb",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMTgsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNTc0NjA5ODYwLCJleHAiOjE1NzQ2Mzg2NjB9.poTqx9QfQjTt9FtvxOABNyYn91mOoJyQGJpgIECbe7M"
}

        *Note, it would be nice if it returned USER Email and Full name to use in the app.  Difficult to access these to use in application. Currently have to use LocalStorage and grab Message to display on Parents home page, to have a Name displayed.

--

# Medical Professional REGISTRATION & LOGIN

### Medical Professional Registration (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/med-register

Client sends:

{
"medicEmail": "selena@gmail.com",
"medicPassword": "gomez",
"company": "Disney",
"position": "RN"
}

Server returns:

{ id: "5" }

### Medical Professional Login (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/med-login

Client sends:

{
"medicEmail": "selena@gmail.com",
"medicPassword": "gomez"
}

Server returns:
{
"message": "Welcome, RN", "medtoken": "the-super-long-hashed-token"
}

---

# PATIENT INFO (USER SIDE) (GET)

### DISPLAY ALL PATIENT INFO RELATED TO SPECIFIC USER (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/:id

\*\*Note: "id" on URL refers to the USER'S (userId), which is also stored in the token. One USER may have multiple PATIENTS due to having kids profile.

    SideNote:

         * This Endpoint returns ALL PATIENTS IN DATABASE with ANY USER token in header*
         https://immunizationtracker-bw.herokuapp.com/api/user

Client sends :

userId (USER) in URL, AND, USER token in header

{

    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMTUsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNTc0NjAyO Dc5LCJleHAiOjE1NzQ2MzE2Nzl9.68NRTLeFEjEGQl0mIoMhSOaAp8mQwhXhJp9kLcnP01s"

}

Server returns:

[
{
"id": 1,
"firstName": "Karl",
"lastName": "Mozart",
"age": 10,
"gender": "male",
"weight": "80lb",
"height": "4'11",
"patientEmail": "mozart@gmail.com",
"patientPhone": "123-345-5678",
"isChild": 1,
"userId": 1
},

{
"id": 2,
"firstName": "Wolfgang",
"lastName": "Mozart",
"age": 45,
"gender": "male",
"weight": "150lb",
"height": "5'5",
"patientEmail": "mozart@gmail.com",
"patientPhone": "123-345-5678",
"isChild": 0,
"userId": 1
}
]

### DISPLAY SINGLE PATIENT INFO (GET) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

\*\*Note: "id" refers to the PATIENT id that is created when the patient is created, NOT USER'S userId.

Client sends: id of PATIENT in url and USER token in header.

Server returns:
{
"id": 6,
"firstName": "Alois",
"lastName": "Polzelli",
"age": 10,
"gender": "male",
"weight": "90lb",
"height": "5'2",
"patientEmail": "haydn@gmail.com",
"patientPhone": "123-345-5678",
"isChild": 1,
"userId": 5  
}

### ADD PATIENT FROM USER ACCOUNT (POST) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/addpatient

\*\*Note: "userId" in body Has to be USER's userId that is adding the patient,
Otherwise you can inadvertently add a PATIENT to another USERS account.

Client sends:

{
"firstName":"Nick",
"lastName":"Chubb jr",
"age": 5,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "nickchubb@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 118
}

Server returns:

{
"message": "New patient created",
"patient": {
"id": 147,
"firstName": "Nick",
"lastName": "Chubb jr",
"age": 5,
"gender": "male",
"weight": "40lb",
"height": "42 in",
"patientEmail": "nickchubb@gmail.com",
"patientPhone": "123456789",
"isChild": true,
"userId": 118
}
}

### EDIT PATIENT INFO FROM USER ACCOUNT (PUT) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

\*\*Note: "Id" on URL refers to the Patient id

Client sends:

{"firstName":"Nick", "lastName":"Chubb jr", "age": 5,"gender": "male", "weight": "45lb","height": "42 in","patientEmail": "nickchubb@gmail.com","patientPhone": "123456789","isChild": true,"userId": 118}

Server returns:

{
"message": "Patient information updated"
}

### DELETE PATIENT INFO FROM USER ACCOUNT (DELETE) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/7

\*\*Note: "Id" on URL refers to patient id

Server returns:
{
"message": "Patient deleted"
}

### GIVE PERMISSION TO MEDICAL PROFESSIONAL TO ACCESS DATA (POST) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/add

        BUG- Once permission is granted to a medical professional, You cannot delete that patient off the database. Even revoking permission does not change this.

Client sends:

{"permission": true, "patientId":4, "medproId":27}

\*\* Note, grab Permission id here, otherwise you lose access to it. it is the id listed first in the perm:{}

Server returns:

{
"message": "New permission request posted",
"perm": {
"id": 90,
"permission": true,
"patientId": 4,
"medproId": 27
}
}

### EDIT PERMISSION GRANTED TO MEDICAL PROFESSIONAL (PUT) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/update/:id

\*\*Note: "id" refers to the permission id, Grab the permission ID when granting permission.

        Bug? Once permission is changed to false, it cannot be changed back to true on the specific Medical professional. You can Grant permission again however, with a new Post to Grant permission.

Client sends:

{"permission": false, "patientId":6, "medproId":1}

Server returns:

{
"message": "Permission status changed"
}

### DISPLAY LIST OF PERMISSIONS BY PATIENT ON USER SIDE(GET) (BOTH USER AND MEDIC HAVE ACCESS)

https://immunizationtracker-bw.herokuapp.com/api/perm/patient/:id

\*\*Note: "id" on URL refers to patient ID

Server returns:

[
{
"permission": false,
"patientId": 1,
"medproId": 1,
"id": 1,
"firstName": "Karl",
"lastName": "Mozart",
"age": 10,
"gender": "male",
"weight": "80lb",
"height": "4'11",
"patientEmail": "mozart@gmail.com",
"patientPhone": "123-345-5678",
"isChild": 1,
"userId": 1
},
{
"permission": false,
"patientId": 1,
"medproId": 2,
"id": 1,
"firstName": "Karl",
"lastName": "Mozart",
"age": 10,
"gender": "male",
"weight": "80lb",
"height": "4'11",
"patientEmail": "mozart@gmail.com",
"patientPhone": "123-345-5678",
"isChild": 1,
"userId": 1
}
]

---

# BOOKMARK, Where I left off.

# PATIENT INFO (MEDICAL PROFESSIONAL SIDE)

### DISPLAY PATIENT INFO ON MEDICAL PROFESSIONAL (GET) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/:id

\*\*Note: "Id" on URL refers to medical professional ID

Server returns:
[
{
"permission": 1,
"patientId": 5,
"medproId": 1,
"id": 1,
"firstName": "Alois",
"lastName": "Polzelli",
"age": 10,
"gender": "male",
"weight": "90lb",
"height": "5'2",
"patientEmail": "haydn@gmail.com",
"patientPhone": "123-345-5678",
"isChild": 1,
"userId": 5,
"medicEmail": "marie@gmail.com",
"medicPassword": "curie",
"company": "MedFirst",
"position": "OBGYN"
}
]

\*\*Note: The server will only show the information of patients who granted permission to medical professional.

#Immunization Records

### ADD IMMUNIZATION RECORD FOR PATIENT (POST) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/record/addImmunization

Client sends:

{"vaccineName": "TDap", "vaccineDate": "2000-10-12", "vaccineLocation": "Houston", "patientId":1}

Server returns:

{
"message": "New immunization record added",
"record": [
3
]
}

### DELETE IMMUNIZATION RECORD FOR PATIENT (DELETE) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/record/vaccine/:id

\*\*Note: "id" in URL refers to the id from "immunization record"

Server returns:

{
"message": "Immunization Record deleted"
}

### GET IMMUNIZATION RECORD BY PATIENT ID (GET) (BOTH USER AND MEDIC HAVE ACCESS)

https://immunizationtracker-bw.herokuapp.com/api/record/:id

\*\*Note: "id" refers to patient ID

Server returns:

[
{
"id": 1,
"vaccineName": "flu",
"vaccineDate": "2010-12-19",
"vaccineLocation": "New York City",
"patientId": 1
},
{
"id": 2,
"vaccineName": "HPV",
"vaccineDate": "2000-10-12",
"vaccineLocation": "Houston",
"patientId": 1
}
]
