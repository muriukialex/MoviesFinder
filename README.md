[![Netlify Status](https://api.netlify.com/api/v1/badges/c61fd680-85df-4fcc-8de7-52ce3c33e047/deploy-status?branch=main)](https://app.netlify.com/sites/main--candid-llama-b0e6af/deploys)
# Movies Finder App 🎬

This is a movie search web application that allows users to search for movies and view details about each movie. 
The app fetches data from the publicly available [TMDB API](https://developer.themoviedb.org/). Data fetched includes the movie's information, and movie ratings which are later presented in a visually appealing manner ✨.

## Table of Contents

- [Features](#features)
- [Figma Designs](#figma-designs)
- [How to Run Locally](#how-to-run-locally)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)


## Features

-   Search: Enter a movie title in the search input field and click the search button to fetch movie data from the specific API.
-   Movie Details: View additional information about a movie, such as plot summary, cast, genre, etc., by clicking the "View Details" button.
-   Bookmarks: Bookmark your favorite movies to view later.
-   Recently Viewed Movies: Users can also come back to recently viewed movies.
-   Responsive Design: The web app is designed to look and function well on different screen sizes.
-   Filter by genre

## Figma Designs

To view this application's figma designs, see [here](https://www.figma.com/file/aqhVPaVGDh8nlsyX62zcNj/movies-finder?type=design&node-id=0%3A1&mode=design&t=uKYtvAsH9sdhwwRD-1)

## How to Run Locally

To run the application locally, follow these steps:

1. Clone the repository
  ```shell
    git clone https://github.com/muriukialex/MoviesFinder.git
  ```
2. Install dependencies
  ```shell
    npm install
  ```
3. Obtain an API Key from the (TMDB) website: [The Movie Database (TMDB) API](https://developer.themoviedb.org/reference/intro/getting-started)
5. Add your API keys
  ```shell
   cp .env.local.example .env.local

   # Remember to update your respective API keys
  ```
   
6. Start the development server
  ```shell
   npm run dev
  ```

## Screenshots

Here are some screenshots of the final web app:

_User Login._
<img width="1433" alt="Screenshot 2023-07-04 at 20 38 51" src="https://github.com/muriukialex/MoviesFinder/assets/51236424/8366bdfa-8c5a-4b0f-a65e-932a0df7128b">


_Landing Page._
<img width="1436" alt="Screenshot 2023-07-04 at 20 39 21" src="https://github.com/muriukialex/MoviesFinder/assets/51236424/ed165cb9-ba8c-4711-bda5-3442f87bc47d">



_About Movies Finder._

<img width="1437" alt="Screenshot 2023-07-04 at 20 39 36" src="https://github.com/muriukialex/MoviesFinder/assets/51236424/909ff788-a025-465b-871a-a2864526a5dd">


## Demo

You can also see a live demo of the web app [here](https://main--candid-llama-b0e6af.netlify.app/).

## Technologies Used

The following technologies were used to build this web app:

-   HTML5 & CSS3
-   JavaScript
-   [TypeScript](https://www.typescriptlang.org/docs/)
-   [React.js](https://react.dev/)
-   [NextJS](https://nextjs.org/)
-   [Auth.JS](https://authjs.dev/)
-   [TMDb API](https://developer.themoviedb.org/)
-   Figma

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Implement your feature or bug fix.
4. Commit your changes: `git commit -m "Description of your changes"`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request detailing your changes.

## Author

-   [Alex Muriuki](https://github.com/muriukialex)

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
