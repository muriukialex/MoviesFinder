# Movies Finder App 🎬

This is a movie search web application that allows users to search for movies and view details about each movie. 
The app fetches data from some of the publicly available [Rapid API](https://rapidapi.com/) movie APIs. Data fetched includes the movie's information, and movie ratings which are later presented in a visually appealing manner ✨.

## Features

-   Search: Enter a movie title in the search input field and click the search button to fetch movie data from the specific API.
-   Movie Details: View additional information about a movie, such as plot summary, cast, genre, etc., by clicking the "View Details" button.
-   Bookmarks: Bookmark your favorite movies to view later.
-   Recently Viewed Movies: Users can also come back to recently viewed movies.
-   Responsive Design: The web app is designed to look and function well on different screen sizes.

## Figma Designs

To view this application's figma designs, see [here](https://www.figma.com/file/aqhVPaVGDh8nlsyX62zcNj/movies-finder?type=design&node-id=0%3A1&mode=design&t=uKYtvAsH9sdhwwRD-1)

## Bonus Features

In addition to the main features, the following bonus features have been implemented:

-   Pagination: Display multiple pages of search results, allowing users to navigate through the movie list.
-   Sorting: Sort search results by different criteria, such as rating or release date.
-   For Movie Ratings - Movies Ratings presented rely on the OMDb platform.

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
3. Obtain a X-RapidAPI-Key API key from the X-RapidAPI-Key website: [https://rapidapi.com/](https://rapidapi.com/)
5. Create a `.env.local` file in the root directory and add your API key: `NEXT_PUBLIC_X-RapidAPI-Key=<your-X-RapidAPI-Key>`
6. Start the development server: `npm run dev`
7. Open your web browser and visit: `http://localhost:3000`

## Screenshots

Here are some screenshots of the final web app:

_Enter a movie title and click the search button to fetch results._


_Filter movies by movie genre._

## Demo

You can also see a live demo of the web app [here](https://example.com/).

## Technologies Used

The following technologies were used to build this web app:

-   HTML5 & CSS3
-   JavaScript
-   [TypeScript](https://www.typescriptlang.org/docs/)
-   [React.js](https://react.dev/)
-   [NextJS](https://nextjs.org/)
-   [Auth.JS](https://authjs.dev/)
-   [Rapid API](https://rapidapi.com/)
-   Figma [Designs](https://www.figma.com/file/aqhVPaVGDh8nlsyX62zcNj/movies-finder?type=design&node-id=0%3A1&mode=design&t=uKYtvAsH9sdhwwRD-1)

## Author

-   [Alex Muriuki](https://github.com/muriukialex)

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
