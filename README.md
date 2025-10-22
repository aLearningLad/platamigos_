# 💸 *Plata.migos* 

## A demo peer-lending platform  
This project is written in Typescript and has custom components styled with Tailwind CSS classes.
In places it utilizes ShadCN UI components, while making use of a Redis instance hosted on Upstash to persist frequently queried data on the server.
User and transaction data are held within multiple relational tables linked with neat primary/foreign key linking for easy joins, across a PostgreSQL database hosted on Supabase.

 ## ⚙️ Tech Stack
| **Layer**          | **Technology**             |
|---------------------|----------------------------|
| Frontend Framework    | Next.js via Client and Server Components      |
| State Management    | Zustand, React Usestate      |
| APIs    | Server Actions, Supabase JS Client      |

| Client-side Caching   | React SWR     |
| Server-side Caching   | Redis     |
| Storage    | PostgreSQL      |
| Auth    | Supabase Auth    |
| Middleware   | Supabase Client & Server Middlewares   |
| Styling    | Tailwind CSS, ShadCN UI, CSS    |
| Testing    | Jest    |

## 🚀 Getting Started
### :one: Clone and install
```
git clone https://github.com/aLearningLad/platamigos.git
cd platamigos
npm install
```

### :two: Environment Variables
Create an .env file at the root of your project & set up your credentials
```
API_KEY=
SECRET_KEY=

SUPABASE_PROJECT_URL=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### :three: Run Locally
```
npm run dev
```
💡 *Make sure your PostgreSQL and Redis services are running locally or accessible remotely*

## 🧪Testing
### Run all tests using:
```
npm run test
```

### Tests Cover:  
* 🔐 Authentication (sign up, login, protected routes)
* Requesting funding
* Accepting a funding offer
* Denying a funding offer
* Making an instalment

  ## ☁️ Deployment
Deployed on Vercel, with postgreSQL tables hosted on Supabase





