# Nova Store

A modern, high-performance e-commerce frontend application built with **Next.js 16 (App Router)** and **Tailwind CSS 4**. This project showcases a premium user interface with dynamic features, robust authentication, and seamless user experience.

## 🚀 Features & Highlights

### 🎨 Modern UI/UX

- **Premium Design**: Glassmorphism effects, gradient accents, and smooth animations powered by `tailwindcss-animate` and `swiper` concepts.
- **Responsive Layouts**: Fully responsive design that works flawlessly across mobile, tablet, and desktop devices.
- **Dark Mode Support**: Built-in theme switcher (Light/Dark/System) using `next-themes` and `shadcn/ui` components.
- **Skeleton Loaders**: Custom skeleton screens for loading states (e.g., Products Grid, Item Details) to improve perceived performance.

### 🛠️ Technical Implementation

- **Next.js 16 App Router**: Utilizing the latest React Server Components (RSC) architecture for optimal performance and SEO.
- **Dynamic Metadata**: SEO-friendly dynamic page titles and descriptions for every route, including individual product pages.
- **Robust Authentication**: Secure login system integrated with `next-auth` (Credentials Provider), featuring protected routes and redirection logic (e.g., `callbackUrl` handling).
- **Admin Capabilities**: Protected "Add Item" interface for authenticated admin users to manage inventory.
- **Shared Component Architecture**: Organized codebase with reusable `shared` components (`ProductCard`, `SectionHeader`, `Logo`) to maintain consistency.

## 🛠️ Setup & Installation

Follow these steps to get the project running locally.

### Prerequisites

- **Node.js**: v18 or higher recommended.
- **Backend Server**: Ensure the `nova-store-server` is running (default: `http://localhost:5000`).

### Installation

1.  **Clone the repository** (if you haven't already):

    ```bash
    git clone https://github.com/hadialhamza/nova-store-client.git
    cd nova-store-client
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Run Development Server**:

    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📍 Route Summary

### Public Routes

- **`/` (Home)**: The landing page featuring a Hero section, Featured Collections, and key value propositions.
- **`/items` (All Products)**: A comprehensive catalog page with product grids and category filters.
- **`/items/[id]` (Product Details)**: Dynamic Individual product pages showing detailed information, pricing, and "Add to Cart" options.
- **`/login`**: Secure login page for users and admins.

### Protected / Admin Routes

- **`/admin/add-item`**: A secure dashboard form for adding new products to the inventory.
  - _Access Control_: Redirects unauthenticated users to Login.
  - _Redirect Flow_: Automatically returns users to this page after successful login.

## 🔧 Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Library**: [Shadcn/UI](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

---

Built by **Hadi Al Hamza**.
