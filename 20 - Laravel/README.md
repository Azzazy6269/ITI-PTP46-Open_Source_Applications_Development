Project Description
Overview:
Developed a comprehensive, Trello-inspired Task Management System (TasksManager) designed for high-performance project tracking. This application handles complex data relationships, secure user authentication, and provides a seamless RESTful API for external integrations.

Key Technical Features:

Robust Core Logic: Implemented full CRUD operations using RESTful Resource Controllers and optimized database interactions with Migrations, Seeders, and Factories (capable of handling 500+ records instantly).

Advanced Database Architecture: * Utilized Polymorphic Relationships for a flexible commenting system (reusable across multiple models).

Designed complex One-to-Many relationships for task creators and assignees.

Optimized database performance using Eager Loading to eliminate the N+1 query problem.

Security & Validation:

Engineered secure Form Request Validation for all inputs (Title, Description, Priority, etc.).

Integrated Laravel Breeze for session-based authentication and Laravel Sanctum for secure API token management.

Advanced Media Handling: * Developed a multiple-image upload system using Laravel Storage.

Implemented automated file cleanup (deleting old files from storage upon update/deletion) and custom Model Mutators for clean URL handling.

Third-Party Integrations: * Enabled Social Authentication (OAuth) via Google and GitHub using Laravel Socialite.

Implemented SEO-friendly URLs using Eloquent Sluggable.

API Development: Built a fully functional RESTful API with dedicated API Resources for standardized JSON responses, including pagination and nested user data.

User Experience (UX):

Integrated Soft Deletes for data recovery.

Utilized Carbon for localized and human-readable date formatting.

Built reusable UI components using Laravel Blade Components.

Technical Stack:

Backend: Laravel (Latest Version), PHP.

Database: MySQL (Complex Relationships, Polymorphism).

Authentication: Laravel Breeze, Sanctum (API), Socialite (OAuth).

Frontend: Blade Templating, Tailwind CSS, Blade Components.

Packages: Cviebrock/Eloquent-Sluggable, Carbon.


How to Run the Project
Follow these steps to get the project up and running on your local machine:

Clone the repository:

Bash
git clone repo link
cd tasksManager
Install Dependencies:

Bash
composer install
npm install
Environment Setup:

Create a .env file from the example:

Bash
cp .env.example .env
Generate the application key:

Bash
php artisan key:generate
Configure your database settings in the .env file.

Database Migration & Seeding:
This will create the tables and populate the database with 500 sample records (Tasks & Users):

Bash
php artisan migrate:fresh --seed
Compile Assets:

Bash
npm run dev
Start the Server:

Bash
php artisan serve
Now, you can access the project at http://127.0.0.1:8000.