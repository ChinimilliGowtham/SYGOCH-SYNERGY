# SYGOCH SYNERGY - Team Members Management App

This is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) application developed by **Team SYGOCH SYNERGY** 
---

## 🚀 Project Description

A **Student Team Members Management System** where:
- Users can add, view, and manage team members
- Images can be uploaded and viewed
- MongoDB handles data storage
- React Router manages navigation

---

## 🛠️ Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Tools**: Visual Studio Code, MongoDB Compass, Axios

---

## 📁 Folder Structure

```
SYGOCH-SYNERGY/
├── backend/
│   ├── models/
│   │   └── Member.js
│   ├── routes/
│   ├── uploads/         # Stores uploaded images
│   ├── .env
│   ├── index.js         # Express server
│   ├── package.json
│
├── _frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── .gitattributes
```

---

## 📷 Application UI Preview


### 🏠 Home Page
![WhatsApp Image 2025-05-01 at 17 33 11_57488208](https://github.com/user-attachments/assets/77c681a1-9728-461b-b200-aa037e9b501d)

### ➕ Add Member Page
![WhatsApp Image 2025-05-01 at 17 23 37_d1d1a764](https://github.com/user-attachments/assets/c1767f9c-509f-4f5b-bb4e-a13aed7791bd)

### 👥 View Members Page
![WhatsApp Image 2025-05-01 at 17 24 33_329b8571](https://github.com/user-attachments/assets/d6346ab4-c6a9-4984-9261-d40d78881c9e)

### 👤 Member Details Page
![WhatsApp Image 2025-05-01 at 17 31 12_e4e002b6](https://github.com/user-attachments/assets/473afc33-5fb3-45ae-bb84-eb64f4dded2d)

### 🗂️ MongoDB JSON View
![WhatsApp Image 2025-05-01 at 17 22 32_fd4f7cf3](https://github.com/user-attachments/assets/c0d005af-0d3a-468f-b962-76e0ec643193)


---

## 🧪 API Endpoints

| Method | Endpoint            | Description                         |
|--------|---------------------|-------------------------------------|
| GET    | `/api/members`      | Get all team members                |
| GET    | `/api/members/:id`  | Get one member by ID                |
| POST   | `/members`          | Add a new member with image upload  |

---

## ⚙️ How to Run the App Locally

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/SYGOCH-SYNERGY.git
cd SYGOCH-SYNERGY
```

---

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
PORT=5000
MONGO_URI=<your_mongo_connection_string>
```

Start the backend:
```bash
npm start
```

---

### 3. Frontend Setup
```bash
cd ../_frontend
npm install
npm start
```

---

## 📝 Team Members

- Gowtham Chinimilli
- Syam Kumar
- Charani Sanapureddy


