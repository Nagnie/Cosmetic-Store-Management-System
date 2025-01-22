# Cosmetic Store Management

As part of the "Window Programming" course at the Faculty of Information Technology, Ho Chi Minh University of Science (FIT HCMUS), we present the Cosmetic Store Management System. This desktop application is designed to streamline the operations of a cosmetic store, providing an intuitive and efficient way to manage inventory, sales, and customer information.

## Technologies Used

- **Frontend**: WinUI
- **Backend**: .NET
- **Database**: PostgreSQL
- **Programming Language**: C#

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nagnie/Cosmetic-Store-Management-System.git
   ```

2. **Set Up the Database**:
   - Install PostgreSQL if not already installed.
   - Create a new database for the application.
   - Apply the migrations to create the necessary tables.
   ```
   cd Migrations
   knex migrate:latest      # run this to create tables
   knex migrate:rollback    # run this to drop all tables
   knex seed:run            # run this to add data into tables
   ```

3. **Configure the Application**:
   - Update the database connection string in the application settings.

4. **Run the Application**:
   - Open the solution in Visual Studio.
   - Build and run the application.

## Usage

- Navigate through the application to manage your cosmetic inventory efficiently.
- Use the sales trend feature to make data-driven decisions.
- Log in and communicate with other users using the real-time chat functionality.

## License

This project is licensed under the MIT License. See the LICENSE file for details.