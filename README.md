# CampusInsider

CampusInsider is a college blog site that provides exclusive and insider information about campus life, events, and trends.

## Technologies Used

- Angular
- Bootstrap
- Firebase
- Firestore

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository:

   ```
   git clone https://github.com/CampusInsider.git
   ```

2. Install the dependencies:

   ```
   cd CampusInsider
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - Enable Firebase Storage and Firestore in the project.
   - Copy your Firebase project configuration details.

4. Configure Firebase in your Angular project:

   - Open `src/environments/environment.ts` file.
   - Replace the Firebase configuration placeholders with your own Firebase project configuration details.

5. Build and run the application:

   ```
   ng serve
   ```

6. Open the application in your browser:

   ```
   http://localhost:4200
   ```

## Deployment

To deploy the application using Firebase Hosting, follow the steps below:

1. Build the optimized production version:

   ```
   ng build --prod
   ```

2. Deploy the application to Firebase Hosting:

   ```
   firebase deploy
   ```

## File Structure

The project follows the standard file structure of an Angular application:

```
CampusInsider/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   ├── services/
  │   │   ├── models/
  │   │   ├── ...
  │   ├── assets/
  │   ├── ...
  ├── ...
```

## Contributing

Contributions to CampusInsider are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Angular - [https://angular.io/](https://angular.io/)
- Bootstrap - [https://getbootstrap.com/](https://getbootstrap.com/)
- Firebase - [https://firebase.google.com/](https://firebase.google.com/)
