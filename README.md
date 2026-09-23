
```markdown
# React Fetch Custom Hook

This project demonstrates how to create and use a **custom React hook** (`useFetch`) to fetch data from an API. It uses functional components, modular structure, and clean UI design.

## Features

- Custom `useFetch` hook
- API data fetching
- Modular components
- Clear separation of concerns

## Project Structure

```

src/
│
├── Components/
│   ├── FetchData.css         # Styles for data display
│   ├── FetchData.jsx         # Component that displays fetched data
│   └── UseFetch.jsx          # Custom hook that handles data fetching
│
├── App.jsx                   # Main app component
├── App.css                   # App-level styles
├── main.jsx                  # Entry point
├── index.css                 # Global styles
├── vite.config.js            # Vite configuration

````

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Helia-Karisani/React-fetch_custom_hook.git
   cd React-fetch_custom_hook
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm run dev
   ```

4. Open your browser at:

   ```
   http://localhost:5173/
   ```

## How It Works

* `UseFetch.jsx`: defines a reusable hook to fetch and return data, loading state, and error state.
* `FetchData.jsx`: uses the custom hook to display the fetched data.
* The app shows how to keep fetch logic out of components and reuse it easily.




