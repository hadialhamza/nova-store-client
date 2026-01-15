# Nova Store

A modern e-commerce application built with Next.js 15 (App Router) and Express.js.

## Features

- **Responsive Landing Page**: 7 themed sections including Hero, Features, Testimonials.
- **Product Catalog**: Fetch and display items from a MongoDB database.
- **Product Details**: Dedicated page for full product information.
- **Authentication**: Secure login system using NextAuth.js.
- **Admin Dashboard**: Protected route to add new products to the store.
- **Interactive UI**: Toast notifications, hover effects, and modern styling.

## Technologies Used

- **Frontend**: Next.js 16, Tailwind CSS 4, Lucide React, Sonner (Toasts)
- **Backend**: Express.js, MongoDB (Native Driver), CORS, Dotenv
- **Authentication**: NextAuth.js (Credentials Provider)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB connection string

### Installation

1.  **Clone the repository**
2.  **Setup Server**
    ```bash
    cd nova-store-server
    npm install
    # Create .env file with:
    # MONGODB_URI=your_mongodb_connection_string
    # PORT=5000
    npm start
    ```
    
3.  **Setup Client**
    ```bash
    cd nova-store-client
    npm install
    npm run dev
    ```

## Route Summary

- `/`: Home Page (Public)
- `/items`: Product Listing (Public)
- `/items/:id`: Product Details (Public)
- `/login`: Admin Login (Public)
- `/admin/add-item`: Add New Product (Protected)

## Login Credentials (Mock)

- **Email**: `admin@novastore.com`
- **Password**: `password123`

## Deployment

- **Frontend**: Ready for Vercel.
- **Backend**: Ready for Render/Railway.

---
Built by Hadi Al Hamza.
