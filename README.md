Deploy link : https://incredible-arithmetic-215faf.netlify.app/ 

![image](https://github.com/user-attachments/assets/50d062ba-8362-4c44-8301-4a1d0b3b6b94)

![image](https://github.com/user-attachments/assets/8a4f4b46-5010-4679-954d-531d1db96a1b)

![image](https://github.com/user-attachments/assets/03deccea-5e7f-48ac-aa3e-da6cadb539d1)

![image](https://github.com/user-attachments/assets/34521aa6-6905-4de0-a65a-addc8ee9d0d5)

🛍️ Figma Store Clone
This is a front-end replica of the Figma Store, showcasing a visually rich layout with dynamic category rendering, SVG-shaped featured products, and a responsive design. The project is built using HTML, CSS, and JavaScript, and interacts with a products.json file for dynamic content.

🚀 Project Overview
The Figma Store Clone is a visually engaging eCommerce landing page that mimics the design and layout style of the official Figma Store. It features:

A dynamic category section

Interactive carousel of featured products using SVG masks

Animated and colorful typography

Responsive UI

Integration with JSON for dynamic rendering

🛠️ Technologies Used

Tech	Description
HTML5	Structure and content
CSS3	Styling and layout (including flexbox, transitions, and gradients)
JavaScript (Vanilla)	Dynamic behavior and interactivity
Fetch API	To retrieve product data from products.json
SVG	For featured image masking in custom shapes

## 📂 File Structure

```
figma-store-clone/
├── index.html           # Main landing page
├── style.css            # External stylesheet (referenced in index.html)
├── products.json        # Product data for category rendering
├── category.html        # Page to display filtered products (optional/linked)
├── assets/              # (If applicable) Images, icons, etc.
```

> **Note:** This structure assumes the presence of `products.json`, `style.css`, and optionally `category.html`.


✅ Key Features
🎨 SVG-Based Featured Product Cards: Creative use of SVG clip paths to style product displays.

🌀 Carousel: Smooth transitions between featured product slides.

📦 Dynamic Categories: Fetches data from products.json and renders category cards on page load.

📱 Responsive Layout: Designed to look good on multiple screen sizes.

🌍 Country Selector: Simulated dropdown menu for region-based browsing (UI only).

➕ Pros
Clean and scalable design.

Creative use of SVG clip paths and gradients for visual aesthetics.

Good separation of concerns (HTML, CSS, JS).

Lightweight and fast.

➖ Cons
No backend integration (pure frontend project).

Lacks authentication/cart logic and real-time cart updates.

No routing/navigation logic for single product or category views (only mock links).

Accessibility could be improved (e.g., buttons should have aria-labels).

🔮 Future Scope
Here’s how you can take this project to the next level:

Backend Integration: Use Node.js, Firebase, or Express with a database like MongoDB or Firestore.

React Migration: Convert it to a fully component-based React app with React Router.

Cart Functionality: Implement cart logic, checkout flow, and product quantity management.

Login/Auth: Add user accounts, session persistence, and wishlist support.

Animations: Use animation libraries like GSAP or Framer Motion for smoother effects.

Search & Filter: Add search functionality with real-time product filtering.

Accessibility Enhancements: Add proper semantic HTML and ARIA roles.
