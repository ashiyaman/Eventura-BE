
# 🎉 Eventura: Discover and Share Events

**Eventura** is an intuitive event listing app that allows users to discover, explore, and share local events based on their interests. From concerts to meetups, Eventura makes it easy to stay informed about what's happening around you and be part of exciting experiences.

---

## ✨ Features

- **Event Discovery**: Easily find events near you based on location, category, and personal interests.
- **Event Creation**: Users can create and share their own events, inviting friends or the public to join.
- **Interactive Calendar**: View upcoming events in a simple and user-friendly calendar format.
- **Personalized Recommendations**: Get event suggestions tailored to your preferences and past interactions.
- **Event Reminders**: Set notifications to remind you of your upcoming events.

---

## 🛠 Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/eventura.git
```

### Install dependencies

```bash
cd eventura
npm install
```

### Set up the environment variables

Create a `.env` file in the root directory and include:

```env
PORT=5000
MONGO_URL=<your-mongodb-connection-string>
```

### Start the development server

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 🚀 Usage

1. **Event Discovery**: Browse events on the homepage based on location and category.
2. **Create Event**: Use the “Create Event” form to list your own events.
3. **Calendar**: Check all events in an interactive calendar view.
4. **Personalized Feed**: Dashboard shows recommendations based on your preferences.
5. **Reminders**: Set notifications to avoid missing important events.

---

## 📘 API Endpoints

### 🔹 Root

#### GET `/`
Returns a welcome message.

**Response:**
```
Welcome to Eventura, an events listing App.
```

---

### 🔹 Events

#### GET `/events`
Fetch all events.

**Response Example:**
```json
[
  {
    "_id": "eventId",
    "title": "Tech Meetup",
    "date": "2025-06-20T00:00:00.000Z",
    "venue": {
      "name": "Grand Hall",
      "city": "Mumbai"
    }
  }
]
```

#### GET `/events/type/:eventType`
Get events by type.

**Example:**
```
GET /events/type/Offline
```
---

### 🔹 Speakers

#### GET `/speakers`
Fetch all speakers.

**Response Example:**
```json
[
  {
    "_id": "speakerId",
    "name": "Jane Doe",
    "designation": "Lead Developer",
    "profileImg": "https://example.com/image.jpg"
  }
]
```

---

## 📬 Contact

For questions or feedback:  
**Email**: [ashiya1005@gmail.com](mailto:ashiya1005@gmail.com)
