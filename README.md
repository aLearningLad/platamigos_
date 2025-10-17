# 💸 *Plata.migos* 

## A demo peer-lending platform  
This project is written in Typescript and has custom components styled with Tailwind CSS classes.
In places it utilizes ShadCN UI components, while making use of a Redis instance hosted on Upstash to persist frequently queried data.
User and transaction data is held within a PostgreSQL database hosted on Supabase.

 ## ⚙️ Tech Stack
| **Layer**          | **Technology**             |
|---------------------|----------------------------|
| Frontend Framework    | Next.js via Client and Server Components      |
| APIs    | Server Actions, Supabase JS Client      |
| Caching   | Redis      |
| Storage    | PostgreSQL      |
| Auth    | Supabase Auth    |
| Middleware   | Supabase    |
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






