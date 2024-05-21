# Events Registration App

A web-based application for events registration. The app allows users to view a list of events, register for an event, and view participants for each event. The app also features infinite scroll pagination, sorting, and participant search functionality.

## Technologies Used

- **Node.js** as the runtime environment for the back-end server.
- **MongoDB** for storing event data and user registration information.
- **Mongoose** as an Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Express.js** to handle the back-end server and API endpoints.
- **React** to build the user interface and manage components efficiently.
- **React Router** for navigation, enabling users to switch between different views seamlessly.
- **React Hook Form and Yup** for form handling and validation on the registration page.
- **React Hot Toast** for displaying notifications to users.
- **Styled Components** for styling the application, ensuring a visually appealing design.
- **Responsive Design** to ensure the application adapts to different screen sizes for an optimal user experience.

## Layout

The application layout includes two main pages: "Home" and "Events" - which display a paginated list of available events with sorting options. Events include two pages: the "Event Registration" page, which allows users to register for an event by filling out a form, and the "Event Participants" page, which shows a list of participants registered for a specific event with search functionality.

![README-img](./public/README-img.png)

## Getting Started

### Installation

1. Clone this repository.

```bash
git clone https://github.com/TaniaUdod/events-registration-app.git
```

2. Install dependencies.

```bash
npm install
```

3. Run the application.

```bash
npm start
```

The application will run on http://localhost:3000/.

### Accessing the Application Online

If you want to access the application online, you can visit
https://events-registration-app-syfh.onrender.com.
