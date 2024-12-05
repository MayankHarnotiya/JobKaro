# JOB KARO WEBSITE

JOB KARO is a robust and user-friendly job portal built using the MERN STACK. It is designed to streamline the job application process for JOB SEEKERS and EMPLOYERS, offering features like PERSONALIZED JOB MATCHING, JOB POSTING, and APPLICATION MANAGEMENT. This platform ensures a seamless experience for all users, with SECURE AUTHENTICATION and a RESPONSIVE DESIGN.

# Features

## For Job Seekers
- Personalized Job Matching: Matches job seekers with roles based on their skills, experience, and career goals.
- Intuitive Application Process: Apply for jobs directly with ease.
- Profile Customization: Create, update, and manage user profiles.
- Application Tracking: Monitor the status of job applications in real time.

## For Employers
- Post Job Listings: Add and manage job opportunities.
- Manage Applications: Review, accept, or reject applications efficiently.
- Company Profiles: Showcase organizational details for better visibility.

## For Administrators
- Platform Management: Oversee job postings and user registrations.
- Notifications: Notify users about job matches, application updates, and approvals.

# Tech Stack
- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- File Storage: Cloudinary
- Deployment: Fully responsive and accessible across devices

# APIs
The backend provides a set of RESTful APIs for managing the following:

- Jobs: Create, update, delete, and retrieve job listings.
- Users: User registration, authentication, and profile management.
- Applications: Handle job applications and track their status.
- Admin Controls: Manage platform settings and monitor activity.

# Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Backend Setup

1. Clone the repository:
     ```bash
     git clone https://github.com/MayankHarnotiya/JobKaro.git cd JobKaro/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following:
    ```env
    PORT=8000
   MONGO_URI=mongodb+srv://mayankharnotiya25:DSl6Uw8KJMxFYlQf@cluster0.j9jatcm.mongodb.net/
   SECRET_KEY=lkjhgfdsa
   CLOUD_NAME=dznbyjl0h
   API_KEY=145761277899417
   API_SECRET=1HhFPZxpz6aBK07FO0gTSaz3Rmo
    ```
4. Start the server:
    ```bash
    npm run start
    ```
### Frontend Setup

1. Navigate to the `Frontend` directory:
    ```bash
    cd ../Frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run start
    ```
## Usage
### For Job Seekers:
- Register or log in to the platform.
- Explore job listings tailored to your skills and goals.
- Apply to positions and track application status.

### For Employers:
- Register and create a company profile.
- Post job openings and review applications.
- Accept or reject candidates based on suitability.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact
For any inquiries or issues, please reach out to(mailto:mayankharnotiya25@gmail.com).


