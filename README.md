# 💸 *Plata.migos* 

## A demo peer-lending platform  
This project is written in Typescript and has custom components styled with Tailwind CSS classes.
In places it utilizes ShadCN UI components, while making use of a Redis instance hosted on Upstash to persist frequently queried data on the server.
User and transaction data are held within multiple relational tables linked with neat primary/foreign key relationships for easy joins, across a PostgreSQL database hosted on Supabase.

 ## ⚙️ Tech Stack
| **Layer**          | **Technology**             |
|---------------------|----------------------------|
| Frontend Framework    | Next.js via Client and Server Components      |
| State Management    | Zustand, React useState      |
| APIs    | Server Actions, Supabase JS Client      |
| Client-side Caching   | React SWR     |
| Server-side Caching   | Redis     |
| Storage    | PostgreSQL      |
| Auth    | Supabase Auth    |
| Middleware   | Supabase Client & Server Middlewares   |
| Styling    | Tailwind CSS, ShadCN UI, CSS    |
| Testing    | Jest    |
| Animations    | GSAP    |
| Animated Media    | Lottie Files (json)    |

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

### 3️⃣: Setup PostgreSQL Database

The *all_uers* Table 
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE possible_roles AS ENUM ('borrower/lender', 'admin');

CREATE TABLE all_users (
  user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  surname VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  last_login_at TIMESTAMP DEFAULT NOW(),
  role possible_roles NOT NULL
);

```

The *loans* Table
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- allows me to use that uuid generating function

CREATE TYPE loan_type AS ENUM('request', 'offer');

CREATE TYPE statuses AS ENUM('pending', 'funded', 'repaid', 'defaulted');

CREATE TABLE loans (
  loan_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  user_id UUID REFERENCES all_users(user_id) ON DELETE CASCADE,
  type loan_type NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  pcp INTEGER NOT NULL, --principle amount
  due NUMERIC(12,2) NOT NULL, --repayable. This will be adjusted with each repayment, or added to w/ interest if so agreed
  term INTEGER NOT NULL, --how many months given to repay
  due_from DATE NOT NULL, 
  due_by DATE NOT NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  rate NUMERIC(5,2) NOT NULL,
  description TEXT NOT NULL,
  status statuses NOT NULL DEFAULT 'pending'
);

-- Indexes for performance
CREATE INDEX idx_loans_user_id ON loans(user_id);
CREATE INDEX idx_loans_status ON loans(status);


```

The *transactions_log* Table
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- allows me to use that uuid generating function

CREATE TYPE tr_type AS ENUM('signup', 'login', 'loan_request_created', 'offer', 'instalment_paid', 'settlement', 'default_on_loan', 'denied_offer', 'loan_funded', 'profile_updated', 'other', 'blacklisted');

CREATE TABLE transactions_log (
  tr_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  debtor_id UUID REFERENCES all_users(user_id) ON DELETE CASCADE DEFAULT NULL,
  creditor_id UUID REFERENCES all_users(user_id) ON DELETE CASCADE DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  amount NUMERIC(12,2) DEFAULT NULL,
  details TEXT NOT NULL,
  action_type tr_type NOT NULL
);

-- Indexes for performance
CREATE INDEX idx_transactions_created_at ON transactions_log(created_at);
CREATE INDEX idx_transactions_action ON transactions_log(action_type);
```

The *credit_scores* Table 
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- allows me to use that uuid generating function

CREATE TABLE credit_scores (
  cs_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES all_users(user_id) ON DELETE CASCADE,
  score INTEGER NOT NULL DEFAULT 0,
  balance NUMERIC(12,2) NOT NULL DEFAULT 5000 CHECK (balance >= 0),
  loans_funded INTEGER NOT NULL DEFAULT 0,
  debts_settled INTEGER NOT NULL DEFAULT 0,
  total_creditors NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_creditors >= 0),
  total_debtors NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_debtors >= 0)
);
```


### 4️⃣: Run Locally
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





