# Biblical Stories Website

This project is a beautifully crafted Next.js website that showcases biblical stories with a modern, user-friendly design. It features theme switching (black and white), multiple Bible translations, and dynamic recommendations. Users can explore stories, suggest new ones, and enjoy daily curated content.

---

## Features

### 1. **Home Section**
- Highlights the **Story of the Day**.
- Engages users with a clean and visually appealing layout.

### 2. **About Section**
- Provides information about the purpose and vision of the website.
- Shares insights into how the stories were curated.

### 3. **Story Recommendation**
- Dynamically suggests stories based on the one currently being read.
- Encourages exploration of related biblical narratives.

### 4. **User Suggestions**
- A dedicated page for users to suggest stories they'd like to see featured.
- Integrated with **Nodemailer** to send suggestions directly to the admin.

### 5. **Multiple Bible Translations**
- Offers support for translations like:
  - King James Version (KJV)
  - New Living Translation (NLT)
  - Others can be easily added.
- Enhances accessibility and personalization for readers.

### 6. **Theme Switching**
- Toggle between light (white) and dark (black) themes for optimal readability and user preference.

### 7. **Story Storage and Web Scraping**
- Stories are stored in JSON format for efficient reference and management.
- Full stories are dynamically scraped from the web using **Cheerio**.

---

## Technologies Used

### Frontend
- **Next.js**: For server-side rendering and dynamic routing.
- **React**: For building interactive UI components.
- **TailwindCSS**: For modern, utility-first styling.
- **DaisyUI**: For pre-built, customizable UI components.
- **Bootstrap**: Additional CSS framework for styling options.

### Backend
- **Express**: Lightweight server framework for backend logic.
- **Nodemailer**: Handles email functionality for user suggestions.
- **Axios**: For API calls and data fetching.
- **Cheerio**: For web scraping full stories.

### Utilities
- **Theme Change**: For dynamic theme switching.
- **Sharp**: For image optimization.

### Database
- **JSON**: Used for storing story references.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Achu-Worifung/BiblicalStories.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
    GOOGLE_EMAIL = google email address
    GOOGLE_PASSWORD = google email address app password
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

---



## Future Improvements

- Add more Bible translations.
- Implement user accounts for personalized recommendations.
- Enhance the suggestion process with a feedback mechanism.
- Introduce audio support for stories.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contribution

contributions are welcomed! Feel free to fork the repository and submit a pull request with your enhancements.

---


##Pictures
![Screenshot 2024-12-19 230640](https://github.com/user-attachments/assets/04a3284e-c917-465f-9e86-46cedcefbc37)
![suggestion](https://github.com/user-attachments/assets/0bd40992-d86b-4ca8-a319-ca9d8219fef0)
![about us](https://github.com/user-attachments/assets/900435c5-338c-4c4c-84ec-72337d09e6d0)

