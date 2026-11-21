window.CURRICULUM = [
  // ==================== MONTH 1: PYTHON & GIT FOUNDATIONS (DAYS 1–28) ====================
  {
    day: 1,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "Corey Schafer",
    duration: "21m",
    title: "Variables, Strings & F-String Formatting",
    videoId: "k9TUPpGqYTo",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 21:15",
    takeaways: [
      "Strings in Python are immutable sequences supporting slicing [start:stop:step] and methods like .strip(), .lower(), and .replace().",
      "F-strings (f'{val:,.2f}') evaluate expressions inline and format numbers cleanly for analytics reports."
    ],
    lab: "Clean the raw messy customer record string, extract the city and spend amount, and print a formatted summary line.",
    hint: "Use .strip(), .split('|'), and cast the numeric string with float() before formatting with :,.2f.",
    starterPy: `raw_record = "  ishan munjewar | navi mumbai | 14850.5  "\nparts = [p.strip() for p in raw_record.split("|")]\nname = parts[0].title()\ncity = parts[1].title()\nspend = float(parts[2])\nprint(f"Customer: {name} | City: {city} | Spend: INR {spend:,.2f}")`,
    starterSql: `SELECT name, department, salary FROM employees LIMIT 5;`
  },
  {
    day: 2,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "Corey Schafer",
    duration: "12m",
    title: "Integers, Floats, Operators & Type Casting",
    videoId: "khKv-8q7YmY",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 11:50",
    takeaways: [
      "Use // for floor division, % for modulo remainder, and ** for exponentiation.",
      "Always cast user or CSV string inputs explicitly with int() or float() before arithmetic to prevent TypeError."
    ],
    lab: "Compute base revenue, 18% GST amount, gross invoice total, and rounded integer loyalty points (1 point per INR 100 spent).",
    hint: "Use round(gross, 2) for currency and int(base // 100) for loyalty points.",
    starterPy: `unit_price = 1249.0\nqty = 3\ngst_rate = 0.18\n\nbase = unit_price * qty\ngst = round(base * gst_rate, 2)\ngross = round(base + gst, 2)\npoints = int(base // 100)\nprint(f"Base: {base} | GST: {gst} | Gross: {gross} | Points: {points}")`,
    starterSql: `SELECT order_id, amount, ROUND(amount * 0.18, 2) AS gst_amount FROM orders LIMIT 5;`
  },
  {
    day: 3,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "Corey Schafer",
    duration: "16m",
    title: "Booleans, Comparisons & Conditional Logic",
    videoId: "DZwmZ8Usvnk",
    altVideoId: "_b6NgY_pMdw",
    focus: "00:00 – 16:05",
    takeaways: [
      "Combine conditions with logical and, or, not; remember empty containers ([], '', 0, None) evaluate as False.",
      "Use == for value equality and 'is' strictly for identity checks like 'val is None'."
    ],
    lab: "Classify an order into 'Enterprise' (>= 50000), 'Growth' (15000–49999), or 'Starter' (< 15000), flagging orders with None amount as 'Invalid'.",
    hint: "Check 'if order_amount is None:' first before numeric >= comparisons.",
    starterPy: `order_amount = 28500\nis_paid = True\n\nif order_amount is None:\n    tier = "Invalid"\nelif order_amount >= 50000 and is_paid:\n    tier = "Enterprise"\nelif order_amount >= 15000:\n    tier = "Growth"\nelse:\n    tier = "Starter"\nprint("Order Tier:", tier)`,
    starterSql: `SELECT order_id, amount, CASE WHEN amount >= 5000 THEN 'High' ELSE 'Standard' END AS tier FROM orders LIMIT 5;`
  },
  {
    day: 4,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "Corey Schafer",
    duration: "14m",
    title: "For Loops, Range & Enumerate Iteration",
    videoId: "6iF8Xb7Z3wQ",
    altVideoId: "-7xg8pGcP6w",
    focus: "00:00 – 08:30",
    takeaways: [
      "enumerate(iterable, start=1) yields both index and value cleanly without manual counter variables.",
      "Accumulating sums and counts inside a loop is the foundation of aggregation algorithms."
    ],
    lab: "Iterate through daily sales figures, print each day number with its sales, and compute the total and average daily revenue.",
    hint: "Use enumerate(daily_sales, start=1) and divide total by len(daily_sales).",
    starterPy: `daily_sales = [12400, 15800, 9800, 21000, 18500, 24200, 19100]\ntotal = 0\nfor day_num, sale in enumerate(daily_sales, start=1):\n    total += sale\n    print(f"Day {day_num}: INR {sale:,}")\nprint(f"Total: INR {total:,} | Avg: INR {total/len(daily_sales):,.2f}")`,
    starterSql: `SELECT region, SUM(amount) AS total_sales FROM orders GROUP BY region;`
  },
  {
    day: 5,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "Corey Schafer",
    duration: "14m",
    title: "While Loops, Break, Continue & Guard Clauses",
    videoId: "6iF8Xb7Z3wQ",
    altVideoId: "-7xg8pGcP6w",
    focus: "08:31 – 14:15",
    takeaways: [
      "continue skips the current iteration immediately; break exits the enclosing loop.",
      "while loops require guaranteed state progression to prevent infinite loops."
    ],
    lab: "Process a batch of transactions: skip negative/zero refunds (continue), stop processing if cumulative spend exceeds the INR 40,000 budget cap (break), and print accepted total.",
    hint: "Check tx <= 0 first with continue, then check if spent + tx > budget before adding.",
    starterPy: `transactions = [8500, -500, 12000, 0, 14500, 9000, 6000]\nbudget = 40000\nspent = 0\n\nfor tx in transactions:\n    if tx <= 0:\n        continue\n    if spent + tx > budget:\n        print(f"Budget cap reached before INR {tx}")\n        break\n    spent += tx\nprint("Approved Spend:", spent)`,
    starterSql: `SELECT * FROM orders WHERE amount > 0 ORDER BY order_date LIMIT 6;`
  },
  {
    day: 6,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "David J. Malan (CS50P)",
    duration: "25m",
    title: "Nested Loops & 2D Matrix Traversal",
    videoId: "-7xg8pGcP6w",
    altVideoId: "6iF8Xb7Z3wQ",
    focus: "32:00 – 57:00",
    takeaways: [
      "Nested loops traverse rows and columns of 2D grids—the exact mental model behind DataFrames and matrices.",
      "zip() pairs multiple sequences element-by-element in lockstep."
    ],
    lab: "Given a 3x4 quarterly revenue matrix (3 regions x 4 quarters), compute and print each region's annual total and the overall company grand total.",
    hint: "Use zip(regions, matrix) and sum(row) inside the outer loop.",
    starterPy: `regions = ["West", "South", "North"]\nquarterly = [\n    [120, 135, 150, 180],\n    [95, 110, 125, 140],\n    [110, 115, 130, 160]\n]\ngrand_total = 0\nfor region, q_vals in zip(regions, quarterly):\n    reg_sum = sum(q_vals)\n    grand_total += reg_sum\n    print(f"{region}: {reg_sum} Lakhs")\nprint("Grand Total:", grand_total, "Lakhs")`,
    starterSql: `SELECT department, COUNT(*) AS headcount, AVG(salary) AS avg_sal FROM employees GROUP BY department;`
  },
  {
    day: 7,
    month: 1,
    week: 1,
    subject: "Python Foundations",
    instructor: "David J. Malan (CS50P)",
    duration: "22m",
    title: "Week 1 Mini-Project: CLI EMI & Compound Growth Calculator",
    videoId: "nLRL_NcnK-4",
    altVideoId: "khKv-8q7YmY",
    focus: "45:00 – 01:07:00",
    takeaways: [
      "Combining loops, conditionals, and formatted strings turns raw formulas into readable financial simulations.",
      "Always validate edge cases like 0% interest rate before dividing."
    ],
    lab: "Simulate a 12-month SIP investment of INR 15,000/month at 12% annual return (1% monthly), printing month-by-month balance for Months 3, 6, 9, and 12.",
    hint: "Each month: balance = (balance + monthly_sip) * (1 + monthly_rate).",
    starterPy: `monthly_sip = 15000\nmonthly_rate = 0.12 / 12\nbalance = 0.0\n\nfor month in range(1, 13):\n    balance = (balance + monthly_sip) * (1 + monthly_rate)\n    if month % 3 == 0:\n        print(f"Month {month:02d} Corpus: INR {balance:,.2f}")`,
    starterSql: `SELECT name, salary, ROUND(salary * 1.10, 2) AS projected_salary FROM employees;`
  },
  {
    day: 8,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "Corey Schafer",
    duration: "29m",
    title: "Lists, Tuples & Sets: Mutability & Membership Speed",
    videoId: "W8KRzm-HUcc",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 29:05",
    takeaways: [
      "Lists are ordered and mutable; tuples are ordered and immutable; sets store unique items with O(1) hash lookup.",
      "Set intersection (&) and difference (-) quickly compare customer cohorts."
    ],
    lab: "Find users who purchased in both January and February (&), and users who churned after January (-), using Python sets.",
    hint: "Convert both lists with set() and apply & and - operators.",
    starterPy: `jan_buyers = ["U101", "U102", "U103", "U104", "U102"]\nfeb_buyers = ["U103", "U104", "U105", "U106"]\n\njan_set = set(jan_buyers)\nfeb_set = set(feb_buyers)\nprint("Retained:", sorted(jan_set & feb_set))\nprint("Churned:", sorted(jan_set - feb_set))`,
    starterSql: `SELECT DISTINCT region FROM orders;`
  },
  {
    day: 9,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "Corey Schafer",
    duration: "19m",
    title: "Dictionaries: Key-Value Lookups & Frequency Counting",
    videoId: "daefaLgNkw0",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 19:20",
    takeaways: [
      ".get(key, default) avoids KeyError when reading optional fields from JSON or API payloads.",
      "Dictionaries power frequency maps, lookup tables, and structured records."
    ],
    lab: "Count how many times each product category appears in the orders list using a dictionary and .get().",
    hint: "Loop over categories and set counts[cat] = counts.get(cat, 0) + 1.",
    starterPy: `categories = ["Electronics", "Books", "Electronics", "Home", "Books", "Electronics"]\ncounts = {}\nfor cat in categories:\n    counts[cat] = counts.get(cat, 0) + 1\nfor k, v in counts.items():\n    print(f"{k}: {v}")`,
    starterSql: `SELECT category, COUNT(*) AS order_count FROM orders GROUP BY category;`
  },
  {
    day: 10,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "Corey Schafer",
    duration: "22m",
    title: "Functions, Default Arguments, *args & **kwargs",
    videoId: "9Os0o3wzS_I",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 22:10",
    takeaways: [
      "Pure functions take inputs and return outputs without mutating global state, making analytics pipelines testable.",
      "*args captures variable positional arguments as a tuple; **kwargs captures keyword arguments as a dict."
    ],
    lab: "Write a reusable function calculate_net_margin(revenue, cost, tax_rate=0.18) returning net profit and margin percentage.",
    hint: "Return a tuple (round(net_profit, 2), round(margin_pct, 2)).",
    starterPy: `def calculate_net_margin(revenue, cost, tax_rate=0.18):\n    gross = revenue - cost\n    tax = max(0.0, gross * tax_rate)\n    net = gross - tax\n    margin_pct = (net / revenue) * 100 if revenue else 0.0\n    return round(net, 2), round(margin_pct, 2)\n\nnet_val, pct = calculate_net_margin(250000, 165000)\nprint(f"Net Profit: INR {net_val:,} ({pct}%)")`,
    starterSql: `SELECT department, SUM(salary) AS total_payroll FROM employees GROUP BY department;`
  },
  {
    day: 11,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "Corey Schafer",
    duration: "17m",
    title: "List & Dictionary Comprehensions",
    videoId: "3dt4OGnU5sM",
    altVideoId: "W8KRzm-HUcc",
    focus: "00:00 – 17:10",
    takeaways: [
      "List comprehensions [expr for x in seq if cond] express map-and-filter transformations concisely.",
      "Dictionary comprehensions {k: v for ...} build lookup mappings in a single readable pass."
    ],
    lab: "From the employee salary dict, use a dict comprehension to give a 12% raise only to employees earning under INR 90,000.",
    hint: "{name: round(sal * 1.12, 2) for name, sal in salaries.items() if sal < 90000}.",
    starterPy: `salaries = {"Aarav": 75000, "Diya": 115000, "Kabir": 82000, "Meera": 95000}\nrevised = {k: round(v * 1.12, 2) for k, v in salaries.items() if v < 90000}\nprint("Revised Eligible Salaries:", revised)`,
    starterSql: `SELECT name, salary, ROUND(salary * 1.12, 2) AS revised FROM employees WHERE salary < 90000;`
  },
  {
    day: 12,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "Corey Schafer",
    duration: "18m",
    title: "Sorting Complex Objects, Lambda & Key Functions",
    videoId: "D3JvDWO-BY4",
    altVideoId: "3dt4OGnU5sM",
    focus: "00:00 – 18:15",
    takeaways: [
      "sorted(iterable, key=lambda x: ..., reverse=True) returns a new sorted list without mutating the original.",
      "Tuple keys like (x['dept'], -x['score']) enable multi-column sorting."
    ],
    lab: "Sort the list of candidate records by 'score' descending, breaking ties by 'experience' descending.",
    hint: "Use key=lambda c: (c['score'], c['experience']), reverse=True.",
    starterPy: `candidates = [\n    {"name": "Rohan", "score": 88, "experience": 2},\n    {"name": "Sneha", "score": 92, "experience": 1},\n    {"name": "Vikram", "score": 88, "experience": 4}\n]\nranked = sorted(candidates, key=lambda c: (c["score"], c["experience"]), reverse=True)\nfor i, c in enumerate(ranked, 1):\n    print(f"#{i} {c['name']} - Score: {c['score']}, Exp: {c['experience']}y")`,
    starterSql: `SELECT name, department, salary FROM employees ORDER BY salary DESC LIMIT 5;`
  },
  {
    day: 13,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "Corey Schafer",
    duration: "21m",
    title: "Standard Library Modules: datetime, collections & math",
    videoId: "CqvZ3vGoGs0",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 21:05",
    takeaways: [
      "collections.Counter computes top-N frequencies in one line.",
      "datetime.strptime parses date strings into date objects for day-difference arithmetic."
    ],
    lab: "Use Counter to find the top 2 most common error codes in server logs, and compute days between two ISO dates.",
    hint: "Use Counter(logs).most_common(2) and datetime.strptime(d, '%Y-%m-%d').",
    starterPy: `from collections import Counter\nfrom datetime import datetime\n\nlogs = ["200", "404", "200", "500", "404", "200", "403", "404"]\nprint("Top 2 Status Codes:", Counter(logs).most_common(2))\n\nd1 = datetime.strptime("2026-01-15", "%Y-%m-%d")\nd2 = datetime.strptime("2026-06-27", "%Y-%m-%d")\nprint("Days Elapsed:", (d2 - d1).days)`,
    starterSql: `SELECT status, COUNT(*) AS cnt FROM orders GROUP BY status ORDER BY cnt DESC;`
  },
  {
    day: 14,
    month: 1,
    week: 2,
    subject: "Data Structures & Functions",
    instructor: "David J. Malan (CS50P)",
    duration: "24m",
    title: "Week 2 Mini-Project: In-Memory Sales Analytics Aggregator",
    videoId: "nLRL_NcnK-4",
    altVideoId: "daefaLgNkw0",
    focus: "01:45:00 – 02:09:00",
    takeaways: [
      "Grouping records into a dictionary of lists or running totals mirrors SQL GROUP BY in pure Python.",
      "Structuring analytics logic into small helper functions prepares you for Pandas pipelines."
    ],
    lab: "Aggregate a list of order dictionaries by 'city' to compute total revenue and order count per city, sorted by revenue descending.",
    hint: "Build summary[city] = {'orders': 0, 'revenue': 0} and sort summary.items() by revenue.",
    starterPy: `orders = [\n    {"city": "Mumbai", "amount": 4500},\n    {"city": "Pune", "amount": 3200},\n    {"city": "Mumbai", "amount": 7800},\n    {"city": "Bengaluru", "amount": 9100},\n    {"city": "Pune", "amount": 4100}\n]\nsummary = {}\nfor o in orders:\n    c = o["city"]\n    summary.setdefault(c, {"orders": 0, "revenue": 0})\n    summary[c]["orders"] += 1\n    summary[c]["revenue"] += o["amount"]\n\nfor city, stats in sorted(summary.items(), key=lambda x: x[1]["revenue"], reverse=True):\n    print(f"{city}: {stats['orders']} orders | INR {stats['revenue']:,}")`,
    starterSql: `SELECT region, COUNT(*) AS orders, SUM(amount) AS revenue FROM orders GROUP BY region ORDER BY revenue DESC;`
  },
  {
    day: 15,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "24m",
    title: "File Objects, Context Managers (with) & CSV/JSON",
    videoId: "Uh2ebFW8OYM",
    altVideoId: "q5uM4VKywbA",
    focus: "00:00 – 24:15",
    takeaways: [
      "Always open files with 'with open(..., encoding=\"utf-8\") as f:' so file handles close automatically even on errors.",
      "json.dumps() and json.loads() serialize Python dicts for APIs and local storage."
    ],
    lab: "Write a sample JSON config to virtual disk in Pyodide, read it back with a context manager, and verify the parsed dictionary.",
    hint: "Use json.dump(data, f, indent=2) and json.load(f).",
    starterPy: `import json\n\nconfig = {"pipeline": "sales_etl", "version": 7.0, "retries": 3}\nwith open("config.json", "w", encoding="utf-8") as f:\n    json.dump(config, f, indent=2)\n\nwith open("config.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\nprint("Loaded Config:", loaded["pipeline"], loaded["version"])`,
    starterSql: `SELECT * FROM employees WHERE department = 'Engineering';`
  },
  {
    day: 16,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "16m",
    title: "CSV DictReader & DictWriter Pipelines",
    videoId: "q5uM4VKywbA",
    altVideoId: "Uh2ebFW8OYM",
    focus: "00:00 – 16:30",
    takeaways: [
      "csv.DictReader maps every row to a dictionary keyed by header names, surviving column reordering.",
      "io.StringIO lets you stream in-memory CSV text identically to disk files."
    ],
    lab: "Parse the in-memory CSV string using csv.DictReader and compute average salary for the 'Data' team.",
    hint: "Wrap raw_csv in io.StringIO(raw_csv) and filter row['dept'] == 'Data'.",
    starterPy: `import csv, io\n\nraw_csv = "name,dept,salary\\nAarav,Data,95000\\nNeha,Sales,72000\\nRiya,Data,105000"\nreader = csv.DictReader(io.StringIO(raw_csv))\ndata_sals = [int(r["salary"]) for r in reader if r["dept"] == "Data"]\nprint("Avg Data Team Salary:", sum(data_sals) / len(data_sals))`,
    starterSql: `SELECT AVG(salary) AS avg_salary FROM employees;`
  },
  {
    day: 17,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "14m",
    title: "Exception Handling: try, except, else & finally",
    videoId: "NIWwJbo-9_8",
    altVideoId: "nlCKrKGHSSk",
    focus: "00:00 – 13:50",
    takeaways: [
      "Catch specific exceptions (ValueError, ZeroDivisionError, KeyError) rather than bare 'except:'.",
      "The else block runs only when no exception occurred; finally always runs for cleanup."
    ],
    lab: "Safely parse a dirty list of numeric strings into floats, logging skipped invalid entries without crashing.",
    hint: "Wrap float(val) in try/except ValueError inside a loop.",
    starterPy: `raw_prices = ["499.50", "N/A", "1200", "ERROR", "850.25"]\nclean = []\nskipped = 0\n\nfor item in raw_prices:\n    try:\n        clean.append(float(item))\n    except ValueError:\n        skipped += 1\n\nprint(f"Clean: {clean} | Sum: {sum(clean):.2f} | Skipped: {skipped}")`,
    starterSql: `SELECT COUNT(*) AS total_orders, COUNT(amount) AS valid_amounts FROM orders;`
  },
  {
    day: 18,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "15m",
    title: "OOP Part 1: Classes, Instances & __init__",
    videoId: "ZDa-Z5JzY-Q",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 15:25",
    takeaways: [
      "Classes bundle state (attributes) and behavior (methods) into reusable blueprints—just like Scikit-Learn estimators.",
      "self refers to the specific object instance being initialized or mutated."
    ],
    lab: "Create a DatasetStats class initialized with a list of numbers, with methods .mean() and .range_span().",
    hint: "Store self.data = list(data) in __init__ and return max(self.data) - min(self.data) in range_span().",
    starterPy: `class DatasetStats:\n    def __init__(self, data):\n        self.data = list(data)\n\n    def mean(self):\n        return round(sum(self.data) / len(self.data), 2)\n\n    def range_span(self):\n        return max(self.data) - min(self.data)\n\nds = DatasetStats([12, 18, 25, 30, 15])\nprint(f"Mean: {ds.mean()} | Span: {ds.range_span()}")`,
    starterSql: `SELECT MIN(salary) AS min_sal, MAX(salary) AS max_sal, MAX(salary)-MIN(salary) AS span FROM employees;`
  },
  {
    day: 19,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "12m",
    title: "OOP Part 2: Class Variables, @classmethod & @staticmethod",
    videoId: "BJ-VvGyQxho",
    altVideoId: "rq8cL2XMM5M",
    focus: "00:00 – 12:15",
    takeaways: [
      "Class attributes are shared across all instances; instance attributes belong to self.",
      "@classmethod works as an alternative constructor (e.g., Model.from_json())."
    ],
    lab: "Add a @classmethod from_csv_row(cls, row_str) to Product so 'Laptop,65000' instantiates a Product cleanly.",
    hint: "Split row_str by ',' inside from_csv_row and return cls(name, float(price)).",
    starterPy: `class Product:\n    tax_rate = 0.18\n\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    @classmethod\n    def from_csv_row(cls, row_str):\n        name, price = row_str.split(",")\n        return cls(name.strip(), float(price))\n\n    def final_price(self):\n        return round(self.price * (1 + self.tax_rate), 2)\n\np = Product.from_csv_row("Mechanical Keyboard, 4500")\nprint(p.name, "with GST:", p.final_price())`,
    starterSql: `SELECT category, ROUND(AVG(amount), 2) AS avg_order FROM orders GROUP BY category;`
  },
  {
    day: 20,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "19m",
    title: "OOP Part 3: Inheritance & Custom Transformers",
    videoId: "RSl87lqOXDE",
    altVideoId: "ZDa-Z5JzY-Q",
    focus: "00:00 – 19:10",
    takeaways: [
      "Inheritance lets subclasses extend base classes via super().__init__() without duplicating code.",
      "Scikit-Learn custom transformers inherit from BaseEstimator and TransformerMixin using this exact pattern."
    ],
    lab: "Create BaseTransformer with .fit(data) and a MinMaxScaler subclass implementing .transform(data) to scale values to [0, 1].",
    hint: "Store self.min_ and self.max_ in fit(), then return [(x - self.min_)/(self.max_ - self.min_) for x in data].",
    starterPy: `class BaseTransformer:\n    def fit(self, data):\n        return self\n\nclass MinMaxScaler(BaseTransformer):\n    def fit(self, data):\n        self.min_ = min(data)\n        self.max_ = max(data)\n        return self\n\n    def transform(self, data):\n        span = self.max_ - self.min_\n        return [round((x - self.min_) / span, 3) for x in data]\n\nscaler = MinMaxScaler().fit([10, 20, 30, 50])\nprint("Scaled:", scaler.transform([10, 25, 50]))`,
    starterSql: `SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 3;`
  },
  {
    day: 21,
    month: 1,
    week: 3,
    subject: "OOP, File I/O & Reliability",
    instructor: "Corey Schafer",
    duration: "27m",
    title: "Automated Testing with assert & unittest",
    videoId: "6tNS--WetLI",
    altVideoId: "nLRL_NcnK-4",
    focus: "00:00 – 27:10",
    takeaways: [
      "Data pipelines fail silently when schemas drift; assert statements and unit tests catch bad math early.",
      "Test normal inputs, boundary values (0, empty list), and invalid types."
    ],
    lab: "Write a clean_percentage(val) helper and verify 4 test cases using assert statements.",
    hint: "Handle strings ending with '%' and clamp values between 0.0 and 100.0.",
    starterPy: `def clean_percentage(val):\n    if isinstance(val, str):\n        val = val.replace("%", "").strip()\n    num = float(val)\n    return max(0.0, min(100.0, num))\n\nassert clean_percentage("84.5%") == 84.5\nassert clean_percentage(120) == 100.0\nassert clean_percentage(-5) == 0.0\nassert clean_percentage(" 42 ") == 42.0\nprint("All 4 data quality assertions passed!")`,
    starterSql: `SELECT COUNT(*) AS invalid_orders FROM orders WHERE amount < 0;`
  },
  {
    day: 22,
    month: 1,
    week: 4,
    subject: "Git & GitHub Workflows",
    instructor: "Corey Schafer",
    duration: "20m",
    title: "Git Architecture: Init, Staging Area & Atomic Commits",
    videoId: "HVsySz-h9r4",
    altVideoId: "RGOj5yH7evk",
    focus: "00:00 – 14:30",
    takeaways: [
      "Git tracks snapshots across Working Directory -> Staging Index (git add) -> Repository History (git commit).",
      "Write imperative, atomic commit messages (e.g., 'Add missing value imputation for age column')."
    ],
    lab: "Simulate a Git staging & commit tracker in Python that moves files from working -> staged -> commit history with SHA-like hashes.",
    hint: "Use hashlib.sha1(msg.encode()).hexdigest()[:7] to generate realistic 7-char short commit hashes.",
    starterPy: `import hashlib\n\nclass MiniGit:\n    def __init__(self):\n        self.staged = []\n        self.commits = []\n\n    def add(self, filename):\n        self.staged.append(filename)\n\n    def commit(self, message):\n        sha = hashlib.sha1(f"{message}{len(self.commits)}".encode()).hexdigest()[:7]\n        self.commits.append({"sha": sha, "msg": message, "files": list(self.staged)})\n        self.staged.clear()\n        return sha\n\nrepo = MiniGit()\nrepo.add("etl.py")\nprint("Committed:", repo.commit("Add initial sales ETL script"), repo.commits)`,
    starterSql: `SELECT * FROM employees LIMIT 5;`
  },
  {
    day: 23,
    month: 1,
    week: 4,
    subject: "Git & GitHub Workflows",
    instructor: "Corey Schafer",
    duration: "20m",
    title: "Inspecting History: git status, diff, log & checkout",
    videoId: "HVsySz-h9r4",
    altVideoId: "SWYqp7iY_Tc",
    focus: "14:31 – 20:30",
    takeaways: [
      "git diff shows unstaged line changes; git diff --staged inspects what is about to be committed.",
      "git restore <file> discards accidental local edits cleanly."
    ],
    lab: "Use Python's difflib.unified_diff to compare two versions of a SQL query file just like 'git diff'.",
    hint: "Pass v1.splitlines() and v2.splitlines() into difflib.unified_diff().",
    starterPy: `import difflib\n\nv1 = ["SELECT id, name", "FROM employees", "WHERE salary > 50000"]\nv2 = ["SELECT id, name, department", "FROM employees", "WHERE salary >= 75000"]\n\nfor line in difflib.unified_diff(v1, v2, fromfile="a/query.sql", tofile="b/query.sql", lineterm=""):\n    print(line)`,
    starterSql: `SELECT id, name, department FROM employees WHERE salary >= 75000;`
  },
  {
    day: 24,
    month: 1,
    week: 4,
    subject: "Git & GitHub Workflows",
    instructor: "Corey Schafer",
    duration: "14m",
    title: "Branching Strategies & Feature Workflows",
    videoId: "FyAAIHHClqI",
    altVideoId: "RGOj5yH7evk",
    focus: "00:00 – 09:30",
    takeaways: [
      "Never experiment directly on main; create isolated branches like 'feat/xgboost-tuning' with git switch -c.",
      "Branches in Git are lightweight 41-byte pointers to a commit SHA."
    ],
    lab: "Write a branch-naming validator enforcing prefixes ('feat/', 'fix/', 'eda/', 'docs/') and lowercase kebab-case.",
    hint: "Check any(branch.startswith(p) for p in allowed) and ' ' not in branch.",
    starterPy: `def validate_branch(name):\n    prefixes = ("feat/", "fix/", "eda/", "docs/")\n    valid_prefix = name.startswith(prefixes)\n    valid_chars = name == name.lower() and " " not in name\n    return valid_prefix and valid_chars\n\nfor b in ["feat/rfm-segmentation", "My Broken Branch", "eda/churn-outliers"]:\n    print(f"{b:25s} -> Valid: {validate_branch(b)}")`,
    starterSql: `SELECT DISTINCT department FROM employees;`
  },
  {
    day: 25,
    month: 1,
    week: 4,
    subject: "Git & GitHub Workflows",
    instructor: "Corey Schafer",
    duration: "14m",
    title: "Merging, Rebasing & Resolving Merge Conflicts",
    videoId: "FyAAIHHClqI",
    altVideoId: "RGOj5yH7evk",
    focus: "09:31 – 14:20",
    takeaways: [
      "Merge conflicts occur when two branches edit the same lines; Git marks them with <<<<<<<, =======, and >>>>>>>.",
      "Always run tests after resolving a conflict before committing the merge."
    ],
    lab: "Parse a conflicted text snippet and programmatically resolve it by keeping the incoming (feature) branch block.",
    hint: "Extract lines between '=======' and '>>>>>>>'.",
    starterPy: `conflict_text = """learning_rate = 0.01\n<<<<<<< HEAD\nn_estimators = 100\n=======\nn_estimators = 300\n>>>>>>> feat/tune-xgb\nmax_depth = 6"""\n\nresolved = []\nin_head = False\nfor line in conflict_text.splitlines():\n    if line.startswith("<<<<<<<"):\n        in_head = True\n    elif line.startswith("======="):\n        in_head = False\n    elif line.startswith(">>>>>>>"):\n        continue\n    elif not in_head:\n        resolved.append(line)\n\nprint("\\n".join(resolved))`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 26,
    month: 1,
    week: 4,
    subject: "Git & GitHub Workflows",
    instructor: "freeCodeCamp",
    duration: "25m",
    title: "GitHub Remotes, SSH Keys, Pull Requests & GitHub Pages",
    videoId: "RGOj5yH7evk",
    altVideoId: "SWYqp7iY_Tc",
    focus: "28:00 – 53:00",
    takeaways: [
      "git push -u origin feat/branch publishes local work and opens a Pull Request for code review.",
      "GitHub Pages deploys static HTML/JS/CSS apps directly from main or /docs for live portfolio demos."
    ],
    lab: "Generate a clean, structured Markdown Pull Request summary from a dictionary of model metrics.",
    hint: "Format metrics into a Markdown table comparing baseline vs candidate model.",
    starterPy: `metrics = {"baseline_auc": 0.782, "candidate_auc": 0.864, "latency_ms": 14}\nmd = f"""## Pull Request: Upgrade Churn Classifier\n| Metric | Value |\n| :--- | :--- |\n| Baseline ROC-AUC | {metrics['baseline_auc']} |\n| Candidate ROC-AUC | **{metrics['candidate_auc']}** |\n| Inference Latency | {metrics['latency_ms']} ms |\n"""\nprint(md)`,
    starterSql: `SELECT region, AVG(amount) AS avg_amt FROM orders GROUP BY region;`
  },
  {
    day: 27,
    month: 1,
    week: 4,
    subject: "Git & GitHub Workflows",
    instructor: "freeCodeCamp",
    duration: "18m",
    title: ".gitignore, Secrets Hygiene & Reproducible Environments",
    videoId: "RGOj5yH7evk",
    altVideoId: "HVsySz-h9r4",
    focus: "53:01 – 01:08:00",
    takeaways: [
      "Never commit .env files, API keys, or multi-GB raw CSVs to Git; list them in .gitignore immediately.",
      "Pin dependencies in requirements.txt so teammates reproduce your exact Python environment."
    ],
    lab: "Filter a list of repository filenames against .gitignore patterns to flag files that must NOT be committed.",
    hint: "Check extensions like .env, .csv, .pkl, and __pycache__.",
    starterPy: `files = ["app.py", ".env", "requirements.txt", "raw_dump.csv", "model.pkl", "README.md"]\nblocked_ext = (".env", ".csv", ".pkl")\n\nsafe_to_commit = [f for f in files if not f.endswith(blocked_ext)]\nignored = [f for f in files if f.endswith(blocked_ext)]\nprint("Commit:", safe_to_commit)\nprint("Ignored:", ignored)`,
    starterSql: `SELECT * FROM orders LIMIT 5;`
  },
  {
    day: 28,
    month: 1,
    week: 4,
    subject: "Python & Git Capstone",
    instructor: "Corey Schafer",
    duration: "30m",
    title: "Month 1 Capstone: OOP Expense & Revenue Audit Engine",
    videoId: "ZDa-Z5JzY-Q",
    altVideoId: "q5uM4VKywbA",
    focus: "00:00 – 15:25",
    takeaways: [
      "Combining OOP classes, CSV parsing, exception handling, and comprehensions creates production-ready Python utilities.",
      "Clean summary exports bridge raw transactional logs with executive reporting."
    ],
    lab: "Build an AuditLedger class that ingests raw CSV rows, skips malformed amounts safely, and outputs category-wise totals.",
    hint: "Use csv.DictReader, try/except ValueError, and a dictionary accumulator inside AuditLedger.",
    starterPy: `import csv, io\n\nclass AuditLedger:\n    def __init__(self):\n        self.records = []\n        self.errors = 0\n\n    def ingest_csv(self, csv_text):\n        for row in csv.DictReader(io.StringIO(csv_text)):\n            try:\n                amt = float(row["amount"])\n                self.records.append({"dept": row["dept"].strip(), "amount": amt})\n            except (ValueError, KeyError):\n                self.errors += 1\n\n    def report(self):\n        totals = {}\n        for r in self.records:\n            totals[r["dept"]] = totals.get(r["dept"], 0.0) + r["amount"]\n        return totals\n\ndata = "dept,amount\\nCloud,42000\\nMarketing,18500\\nCloud,bad_val\\nMarketing,11500"\nledger = AuditLedger()\nledger.ingest_csv(data)\nprint("Totals:", ledger.report(), "| Errors Skipped:", ledger.errors)`,
    starterSql: `SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department ORDER BY total_salary DESC;`
  },

  // ==================== MONTH 2: SQL FOR DATA ANALYTICS (DAYS 29–56) ====================
  {
    day: 29,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Luke Barousse",
    duration: "28m",
    title: "SELECT, DISTINCT, Aliases & Logical Execution Order",
    videoId: "7mz73uXD9DA",
    altVideoId: "p3ky8jTPina",
    focus: "00:00 – 28:15",
    takeaways: [
      "SQL executes FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT, even though SELECT is written first.",
      "Use explicit column names and readable snake_case aliases instead of SELECT * in production queries."
    ],
    lab: "Query distinct departments from employees and list employee names, roles, and annual salary formatted as 'annual_ctc'.",
    hint: "Use SELECT DISTINCT department FROM employees; or alias salary AS annual_ctc.",
    starterPy: `employees = [{"name": "Aarav", "dept": "Data"}, {"name": "Diya", "dept": "Data"}, {"name": "Kabir", "dept": "Sales"}]\nprint("Distinct Depts:", sorted({e["dept"] for e in employees}))`,
    starterSql: `SELECT DISTINCT department FROM employees ORDER BY department;`
  },
  {
    day: 30,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Luke Barousse",
    duration: "26m",
    title: "WHERE Filtering: IN, BETWEEN, LIKE & NULL Logic",
    videoId: "7mz73uXD9DA",
    altVideoId: "HXV3zeQKqGY",
    focus: "28:16 – 54:30",
    takeaways: [
      "NULL represents unknown state—always test with IS NULL or IS NOT NULL, never '= NULL'.",
      "IN replaces long chains of OR clauses; BETWEEN is inclusive of both endpoints."
    ],
    lab: "Filter orders where status is 'Completed' and amount is between 2000 and 15000, sorted by amount descending.",
    hint: "Use WHERE status = 'Completed' AND amount BETWEEN 2000 AND 15000.",
    starterPy: `orders = [{"id": 1, "amt": 4500, "status": "Completed"}, {"id": 2, "amt": 19000, "status": "Completed"}]\nprint([o for o in orders if o["status"] == "Completed" and 2000 <= o["amt"] <= 15000])`,
    starterSql: `SELECT order_id, customer_name, region, amount, status\nFROM orders\nWHERE status = 'Completed' AND amount BETWEEN 2000 AND 15000\nORDER BY amount DESC;`
  },
  {
    day: 31,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Alex The Analyst",
    duration: "15m",
    title: "Aggregate Functions: COUNT, SUM, AVG, MIN & MAX",
    videoId: "2-1XQHAgDsM",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 07:45",
    takeaways: [
      "COUNT(*) counts all rows including NULLs, whereas COUNT(column) counts only non-NULL values.",
      "ROUND(AVG(col), 2) keeps KPI summaries clean and presentation-ready."
    ],
    lab: "Compute total order count, total revenue, average order value (AOV), minimum order, and maximum order from the orders table.",
    hint: "Combine COUNT(*), SUM(amount), ROUND(AVG(amount), 2), MIN(amount), and MAX(amount) in one SELECT.",
    starterPy: `amts = [2500, 4800, 1200, 9500, 6100]\nprint(f"Count: {len(amts)} | Sum: {sum(amts)} | Avg: {sum(amts)/len(amts):.2f}")`,
    starterSql: `SELECT\n  COUNT(*) AS total_orders,\n  SUM(amount) AS total_revenue,\n  ROUND(AVG(amount), 2) AS avg_order_value,\n  MIN(amount) AS min_order,\n  MAX(amount) AS max_order\nFROM orders;`
  },
  {
    day: 32,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Alex The Analyst",
    duration: "15m",
    title: "GROUP BY Multi-Dimensional Rollups",
    videoId: "2-1XQHAgDsM",
    altVideoId: "7mz73uXD9DA",
    focus: "07:46 – 15:10",
    takeaways: [
      "Every non-aggregated column in SELECT must appear in the GROUP BY clause.",
      "Grouping by two columns (e.g., region, status) creates a cross-dimensional breakdown."
    ],
    lab: "Group orders by region and status to show order volume and total revenue per segment.",
    hint: "SELECT region, status, COUNT(*), SUM(amount) FROM orders GROUP BY region, status.",
    starterPy: `print("SQLite engine ready: switch to SQLite tab and click Run to execute GROUP BY.")`,
    starterSql: `SELECT region, status, COUNT(*) AS orders_cnt, SUM(amount) AS revenue\nFROM orders\nGROUP BY region, status\nORDER BY region, revenue DESC;`
  },
  {
    day: 33,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Alex The Analyst",
    duration: "11m",
    title: "HAVING vs WHERE: Filtering Aggregated Groups",
    videoId: "t60-5313_hQ",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 10:45",
    takeaways: [
      "WHERE filters individual raw rows BEFORE grouping; HAVING filters grouped buckets AFTER aggregation.",
      "Using WHERE before GROUP BY shrinks the dataset early and speeds up queries."
    ],
    lab: "Find departments in employees that have at least 2 staff members and an average salary above 75,000.",
    hint: "Use GROUP BY department HAVING COUNT(*) >= 2 AND AVG(salary) > 75000.",
    starterPy: `print("Compare WHERE (row-level) vs HAVING (group-level) in the SQLite tab.")`,
    starterSql: `SELECT department, COUNT(*) AS headcount, ROUND(AVG(salary), 2) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING COUNT(*) >= 2 AND AVG(salary) > 75000;`
  },
  {
    day: 34,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Alex The Analyst",
    duration: "13m",
    title: "CASE WHEN Conditional Logic & Pivot Counters",
    videoId: "Twusw_GjA8M",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 12:50",
    takeaways: [
      "CASE WHEN ... THEN ... ELSE ... END creates custom business tiers directly inside SQL.",
      "SUM(CASE WHEN cond THEN 1 ELSE 0 END) computes conditional counts across multiple segments in one table scan."
    ],
    lab: "Bucket employees into 'Senior Band' (>= 95000), 'Mid Band' (70000–94999), and 'Junior Band' (< 70000) and count each band.",
    hint: "Wrap the CASE expression inside GROUP BY or a subquery.",
    starterPy: `print("CASE WHEN acts just like if/elif/else inside SQL SELECT projections.")`,
    starterSql: `SELECT\n  CASE\n    WHEN salary >= 95000 THEN 'Senior Band'\n    WHEN salary >= 70000 THEN 'Mid Band'\n    ELSE 'Junior Band'\n  END AS compensation_band,\n  COUNT(*) AS staff_count,\n  ROUND(AVG(salary), 2) AS band_avg_salary\nFROM employees\nGROUP BY compensation_band\nORDER BY band_avg_salary DESC;`
  },
  {
    day: 35,
    month: 2,
    week: 5,
    subject: "SQL Foundations",
    instructor: "Luke Barousse",
    duration: "25m",
    title: "Week 5 Practice: Order Conversion & Cancellation Rate Audit",
    videoId: "7mz73uXD9DA",
    altVideoId: "Twusw_GjA8M",
    focus: "01:15:00 – 01:40:00",
    takeaways: [
      "Multiplying by 100.0 (float) prevents integer division truncation in SQLite and PostgreSQL.",
      "Conditional aggregation computes completion and cancellation rates in a single pass."
    ],
    lab: "Calculate total orders, completed orders, and completion percentage per region.",
    hint: "Use ROUND(100.0 * SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) / COUNT(*), 1).",
    starterPy: `print("Run the SQL query in SQLite to see regional order completion rates.")`,
    starterSql: `SELECT\n  region,\n  COUNT(*) AS total_orders,\n  SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_orders,\n  ROUND(100.0 * SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) / COUNT(*), 1) AS completion_pct\nFROM orders\nGROUP BY region\nORDER BY completion_pct DESC;`
  },
  {
    day: 36,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Alex The Analyst",
    duration: "18m",
    title: "INNER JOIN & Primary-Foreign Key Relationships",
    videoId: "9yeOJ0ZMUYw",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 09:30",
    takeaways: [
      "INNER JOIN returns only rows where the join key matches in both tables.",
      "Always qualify column names with concise table aliases (e.g., e.name, o.amount)."
    ],
    lab: "Join orders (o) with employees (e) on emp_id to display each sales rep's name, department, and total closed order revenue.",
    hint: "INNER JOIN employees e ON o.emp_id = e.emp_id, then GROUP BY e.emp_id, e.name, e.department.",
    starterPy: `print("Relational joins connect normalized tables via foreign keys like emp_id.")`,
    starterSql: `SELECT e.emp_id, e.name AS sales_rep, e.department, COUNT(o.order_id) AS deals, SUM(o.amount) AS total_revenue\nFROM orders o\nINNER JOIN employees e ON o.emp_id = e.emp_id\nGROUP BY e.emp_id, e.name, e.department\nORDER BY total_revenue DESC;`
  },
  {
    day: 37,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Alex The Analyst",
    duration: "18m",
    title: "LEFT JOIN & Anti-Join Null Detection",
    videoId: "9yeOJ0ZMUYw",
    altVideoId: "7mz73uXD9DA",
    focus: "09:31 – 18:10",
    takeaways: [
      "LEFT JOIN preserves all rows from the left table and fills unmatched right columns with NULL.",
      "Adding WHERE right.key IS NULL creates an Anti-Join—ideal for finding inactive users or reps with zero orders."
    ],
    lab: "Use LEFT JOIN from employees to orders with COALESCE(SUM(o.amount), 0) so employees with 0 orders appear with 0 revenue.",
    hint: "Put filter conditions on the right table inside the ON clause so LEFT JOIN rows aren't accidentally dropped.",
    starterPy: `print("COALESCE(val, 0) turns NULL sums from unmatched LEFT JOIN rows into clean zeros.")`,
    starterSql: `SELECT e.emp_id, e.name, e.department, COUNT(o.order_id) AS order_count, COALESCE(SUM(o.amount), 0) AS revenue\nFROM employees e\nLEFT JOIN orders o ON e.emp_id = o.emp_id\nGROUP BY e.emp_id, e.name, e.department\nORDER BY revenue ASC;`
  },
  {
    day: 38,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Luke Barousse",
    duration: "24m",
    title: "SELF JOIN: Org Charts & Manager-Employee Hierarchies",
    videoId: "7mz73uXD9DA",
    altVideoId: "9yeOJ0ZMUYw",
    focus: "01:45:00 – 02:09:00",
    takeaways: [
      "A SELF JOIN links a table to itself using two distinct aliases (e.g., emp e LEFT JOIN emp m ON e.manager_id = m.emp_id).",
      "Use LEFT JOIN for hierarchies so top-level leaders with NULL manager_id remain visible."
    ],
    lab: "Join employees to itself to display each employee's name, role, and their direct manager's name (showing 'Executive / Top' if NULL).",
    hint: "Use COALESCE(m.name, 'Executive / Top') AS manager_name.",
    starterPy: `print("Self-joins resolve parent-child trees like org charts and category hierarchies.")`,
    starterSql: `SELECT e.emp_id, e.name AS employee, e.role, COALESCE(m.name, 'Executive / Top') AS manager_name\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.emp_id\nORDER BY e.emp_id;`
  },
  {
    day: 39,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Alex The Analyst",
    duration: "10m",
    title: "UNION vs UNION ALL & Stacking Datasets",
    videoId: "Rng0JiY1f1g",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 09:40",
    takeaways: [
      "UNION removes duplicate rows (requiring a sort/hash pass), whereas UNION ALL appends rows directly and runs much faster.",
      "Both SELECT queries must output the exact same number of columns with compatible data types."
    ],
    lab: "Combine high-earning employees (> 95,000) and high-value order reps (> 8,000) into a unified 'Top Performers' tag list using UNION ALL.",
    hint: "Include a literal tag column like 'High Salary' AS recognition_type in each SELECT.",
    starterPy: `print("Prefer UNION ALL by default unless you explicitly need duplicate removal.")`,
    starterSql: `SELECT name, department AS group_name, 'High Compensation' AS badge FROM employees WHERE salary > 95000\nUNION ALL\nSELECT e.name, o.region AS group_name, 'Big Deal Closer' AS badge\nFROM orders o JOIN employees e ON o.emp_id = e.emp_id WHERE o.amount > 8000;`
  },
  {
    day: 40,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Luke Barousse",
    duration: "22m",
    title: "CROSS JOIN & Cartesian Date/Category Grids",
    videoId: "7mz73uXD9DA",
    altVideoId: "9yeOJ0ZMUYw",
    focus: "02:10:00 – 02:32:00",
    takeaways: [
      "CROSS JOIN produces the Cartesian product (M x N rows), useful for generating dense region x category matrices.",
      "Left-joining actual sales onto a CROSS JOIN grid ensures zero-sale combinations still appear in BI dashboards."
    ],
    lab: "Build a dense matrix of every distinct department crossed with every distinct order status.",
    hint: "CROSS JOIN two DISTINCT subqueries for department and status.",
    starterPy: `import itertools\nprint(list(itertools.product(["West", "East"], ["Completed", "Pending"])))`,
    starterSql: `SELECT d.department, s.status\nFROM (SELECT DISTINCT department FROM employees) d\nCROSS JOIN (SELECT DISTINCT status FROM orders) s\nORDER BY d.department, s.status;`
  },
  {
    day: 41,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Luke Barousse",
    duration: "20m",
    title: "Preventing Join Fan-Out & Double-Counting Bugs",
    videoId: "7mz73uXD9DA",
    altVideoId: "9yeOJ0ZMUYw",
    focus: "02:32:01 – 02:52:00",
    takeaways: [
      "Joining a 1-to-many table before aggregating duplicates the '1' side rows, inflating SUM(salary) or budgets.",
      "Always pre-aggregate child tables inside a CTE before joining to parent tables."
    ],
    lab: "Safely compare each employee's salary against their total generated order revenue without inflating salary.",
    hint: "Pre-aggregate orders by emp_id in a subquery, then LEFT JOIN onto employees.",
    starterPy: `print("Pre-aggregating 1-to-many child tables before joining prevents metric inflation.")`,
    starterSql: `SELECT e.name, e.salary, COALESCE(agg.total_sales, 0) AS total_sales,\n  ROUND(COALESCE(agg.total_sales, 0) / e.salary, 2) AS sales_to_salary_ratio\nFROM employees e\nLEFT JOIN (\n  SELECT emp_id, SUM(amount) AS total_sales FROM orders GROUP BY emp_id\n) agg ON e.emp_id = agg.emp_id\nORDER BY sales_to_salary_ratio DESC;`
  },
  {
    day: 42,
    month: 2,
    week: 6,
    subject: "Relational Joins & Set Ops",
    instructor: "Alex The Analyst",
    duration: "22m",
    title: "Week 6 Practice: Department Revenue Contribution & Share %",
    videoId: "9yeOJ0ZMUYw",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 18:10",
    takeaways: [
      "Combining JOINs with scalar total subqueries computes percentage share of total revenue cleanly.",
      "Clear percentage breakdowns turn raw SQL tables into executive insights."
    ],
    lab: "Compute each department's total order revenue and its percentage share of overall company revenue.",
    hint: "Divide SUM(o.amount) * 100.0 by (SELECT SUM(amount) FROM orders).",
    starterPy: `print("Execute the SQL query to see each department's % share of total revenue.")`,
    starterSql: `SELECT e.department,\n  SUM(o.amount) AS dept_revenue,\n  ROUND(100.0 * SUM(o.amount) / (SELECT SUM(amount) FROM orders), 2) AS revenue_share_pct\nFROM orders o\nJOIN employees e ON o.emp_id = e.emp_id\nGROUP BY e.department\nORDER BY dept_revenue DESC;`
  },
  {
    day: 43,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Alex The Analyst",
    duration: "14m",
    title: "Scalar, IN & Correlated Subqueries",
    videoId: "m1KcNV-Zhmc",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 14:10",
    takeaways: [
      "Subqueries can live inside SELECT, FROM, or WHERE clauses to compare rows against dynamic benchmarks.",
      "EXISTS stops scanning as soon as the first matching row is found, often outperforming IN on large tables."
    ],
    lab: "List all employees whose salary exceeds the overall company average salary, showing the exact difference above average.",
    hint: "Compare salary > (SELECT AVG(salary) FROM employees).",
    starterPy: `sals = [70000, 85000, 95000, 110000]\navg_s = sum(sals)/len(sals)\nprint([s for s in sals if s > avg_s])`,
    starterSql: `SELECT name, department, salary,\n  ROUND(salary - (SELECT AVG(salary) FROM employees), 2) AS above_avg_by\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees)\nORDER BY salary DESC;`
  },
  {
    day: 44,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Alex The Analyst",
    duration: "12m",
    title: "Common Table Expressions (WITH CTEs) & Modular SQL",
    videoId: "K1WeoCJUXYI",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 11:45",
    takeaways: [
      "CTEs (WITH step_one AS (...), step_two AS (...)) replace nested subqueries with top-to-bottom readable pipelines.",
      "A CTE exists only for the duration of the single query immediately following it."
    ],
    lab: "Write a 2-step CTE: first compute department average salaries, then join back to employees to find staff paid above their own department's average.",
    hint: "WITH dept_avg AS (SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department) ...",
    starterPy: `print("CTEs turn complex multi-stage SQL into clean, debuggable building blocks.")`,
    starterSql: `WITH dept_avg AS (\n  SELECT department, ROUND(AVG(salary), 2) AS avg_sal\n  FROM employees\n  GROUP BY department\n)\nSELECT e.name, e.department, e.salary, d.avg_sal\nFROM employees e\nJOIN dept_avg d ON e.department = d.department\nWHERE e.salary > d.avg_sal\nORDER BY e.department, e.salary DESC;`
  },
  {
    day: 45,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Alex The Analyst",
    duration: "15m",
    title: "Window Functions Intro: OVER() & PARTITION BY",
    videoId: "D6XNlTfgl8U",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 14:50",
    takeaways: [
      "Unlike GROUP BY, window functions (func() OVER (...)) compute aggregates WITHOUT collapsing individual rows.",
      "PARTITION BY resets the calculation window for each group (e.g., per department or region)."
    ],
    lab: "Display every order alongside its region's total revenue and each order's percentage contribution to its region.",
    hint: "Use SUM(amount) OVER (PARTITION BY region) AS region_total.",
    starterPy: `print("Window functions preserve row-level detail while adding group-level context.")`,
    starterSql: `SELECT order_id, region, amount,\n  SUM(amount) OVER (PARTITION BY region) AS region_total,\n  ROUND(100.0 * amount / SUM(amount) OVER (PARTITION BY region), 1) AS pct_of_region\nFROM orders\nORDER BY region, amount DESC;`
  },
  {
    day: 46,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Luke Barousse",
    duration: "25m",
    title: "Ranking Windows: ROW_NUMBER, RANK & DENSE_RANK",
    videoId: "7mz73uXD9DA",
    altVideoId: "D6XNlTfgl8U",
    focus: "03:05:00 – 03:30:00",
    takeaways: [
      "ROW_NUMBER() assigns 1,2,3,4 uniquely; RANK() leaves gaps on ties (1,2,2,4); DENSE_RANK() has no gaps (1,2,2,3).",
      "Wrapping ROW_NUMBER() in a CTE lets you filter WHERE rn = 1 to fetch the top record per group."
    ],
    lab: "Rank employees by salary descending within each department using both ROW_NUMBER() and DENSE_RANK().",
    hint: "OVER (PARTITION BY department ORDER BY salary DESC).",
    starterPy: `print("Top-N per group is one of the most common SQL data analyst interview patterns.")`,
    starterSql: `SELECT name, department, salary,\n  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,\n  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rnk\nFROM employees;`
  },
  {
    day: 47,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Luke Barousse",
    duration: "22m",
    title: "Running Totals & Moving Averages with ROWS BETWEEN",
    videoId: "7mz73uXD9DA",
    altVideoId: "D6XNlTfgl8U",
    focus: "03:30:01 – 03:52:00",
    takeaways: [
      "ORDER BY inside OVER() defaults to a cumulative frame from the start of the partition up to the current row.",
      "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW computes an exact 3-period moving average."
    ],
    lab: "Compute chronological cumulative revenue and a 3-order moving average across all orders ordered by order_date, order_id.",
    hint: "Use SUM(amount) OVER (ORDER BY order_date, order_id ROWS UNBOUNDED PRECEDING).",
    starterPy: `import itertools\nvals = [100, 250, 150, 400]\nprint("Running Total:", list(itertools.accumulate(vals)))`,
    starterSql: `SELECT order_id, order_date, amount,\n  SUM(amount) OVER (ORDER BY order_date, order_id ROWS UNBOUNDED PRECEDING) AS cumulative_revenue,\n  ROUND(AVG(amount) OVER (ORDER BY order_date, order_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS moving_avg_3\nFROM orders;`
  },
  {
    day: 48,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Luke Barousse",
    duration: "20m",
    title: "LAG & LEAD: Period-over-Period Growth & Deltas",
    videoId: "7mz73uXD9DA",
    altVideoId: "D6XNlTfgl8U",
    focus: "03:52:01 – 04:05:00",
    takeaways: [
      "LAG(col, 1) accesses the previous row's value without a slow self-join.",
      "LEAD(col, 1) peeks forward to calculate session gaps or next-purchase intervals."
    ],
    lab: "Compare each order's amount against the previous order's amount within the same region using LAG().",
    hint: "LAG(amount, 1) OVER (PARTITION BY region ORDER BY order_date, order_id).",
    starterPy: `print("LAG() and LEAD() power MoM, WoW, and sequential event analysis.")`,
    starterSql: `SELECT region, order_id, order_date, amount,\n  LAG(amount, 1) OVER (PARTITION BY region ORDER BY order_date, order_id) AS prev_order_amt,\n  amount - LAG(amount, 1) OVER (PARTITION BY region ORDER BY order_date, order_id) AS delta_from_prev\nFROM orders;`
  },
  {
    day: 49,
    month: 2,
    week: 7,
    subject: "CTEs & Window Functions",
    instructor: "Luke Barousse",
    duration: "18m",
    title: "NTILE Bucketing & Top-Quartile Segmentation",
    videoId: "7mz73uXD9DA",
    altVideoId: "K1WeoCJUXYI",
    focus: "04:05:01 – 04:18:00",
    takeaways: [
      "NTILE(4) splits ordered rows into 4 equal quartiles—widely used for RFM customer scoring.",
      "Combining CTEs with NTILE lets you isolate top-25% VIP customers cleanly."
    ],
    lab: "Divide all orders into 4 spending quartiles using NTILE(4) and summarize min, max, and count per quartile.",
    hint: "Compute NTILE(4) OVER (ORDER BY amount DESC) in a CTE, then GROUP BY quartile.",
    starterPy: `print("NTILE(4) assigns quartile 1 to the top 25% when ordered DESC.")`,
    starterSql: `WITH quartiles AS (\n  SELECT order_id, amount,\n    NTILE(4) OVER (ORDER BY amount DESC) AS spend_quartile\n  FROM orders\n)\nSELECT spend_quartile, COUNT(*) AS orders, MIN(amount) AS min_amt, MAX(amount) AS max_amt\nFROM quartiles\nGROUP BY spend_quartile\nORDER BY spend_quartile;`
  },
  {
    day: 50,
    month: 2,
    week: 8,
    subject: "Query Optimization & Analytics SQL",
    instructor: "Hussain Nasser",
    duration: "22m",
    title: "B-Tree Indexes & EXPLAIN QUERY PLAN",
    videoId: "HXV3zeQKqGY",
    altVideoId: "7mz73uXD9DA",
    focus: "02:45:00 – 03:07:00",
    takeaways: [
      "Indexes trade modest write/storage overhead for O(log N) lookups instead of full-table scans.",
      "Wrapping indexed columns in functions (e.g., WHERE LOWER(name) = ...) disables index usage (non-SARGable)."
    ],
    lab: "Inspect SQLite's execution plan for filtering orders by status using EXPLAIN QUERY PLAN.",
    hint: "Prefix any SELECT query with EXPLAIN QUERY PLAN.",
    starterPy: `print("Use EXPLAIN QUERY PLAN to verify whether a query uses an INDEX SEARCH or full SCAN.")`,
    starterSql: `EXPLAIN QUERY PLAN\nSELECT order_id, amount FROM orders WHERE status = 'Completed';`
  },
  {
    day: 51,
    month: 2,
    week: 8,
    subject: "Query Optimization & Analytics SQL",
    instructor: "Luke Barousse",
    duration: "20m",
    title: "SQL String Cleaning: TRIM, SUBSTR, INSTR & REPLACE",
    videoId: "7mz73uXD9DA",
    altVideoId: "HXV3zeQKqGY",
    focus: "01:00:00 – 01:20:00",
    takeaways: [
      "Cleaning messy text directly in SQL staging views keeps downstream BI dashboards consistent.",
      "UPPER(TRIM(col)) standardizes categorical keys before GROUP BY."
    ],
    lab: "Extract uppercase 3-letter department codes using UPPER(SUBSTR(department, 1, 3)) and format clean employee labels.",
    hint: "Concatenate strings in SQLite with the || operator.",
    starterPy: `print("In SQLite and PostgreSQL, || concatenates strings cleanly.")`,
    starterSql: `SELECT emp_id,\n  UPPER(SUBSTR(department, 1, 3)) || '-' || emp_id AS badge_code,\n  TRIM(name) AS clean_name,\n  role\nFROM employees;`
  },
  {
    day: 52,
    month: 2,
    week: 8,
    subject: "Query Optimization & Analytics SQL",
    instructor: "Luke Barousse",
    duration: "21m",
    title: "SQL Date & Time Analytics: strftime & Tenure Buckets",
    videoId: "7mz73uXD9DA",
    altVideoId: "HXV3zeQKqGY",
    focus: "01:20:01 – 01:41:00",
    takeaways: [
      "strftime('%Y-%m', order_date) truncates daily timestamps into monthly cohorts for trend charts.",
      "Grouping by formatted year-month reveals seasonality and MoM revenue trajectory."
    ],
    lab: "Aggregate order count and monthly revenue by Year-Month using strftime('%Y-%m', order_date).",
    hint: "GROUP BY strftime('%Y-%m', order_date) ORDER BY order_month.",
    starterPy: `print("Truncating dates to YYYY-MM is step one of every time-series SQL report.")`,
    starterSql: `SELECT strftime('%Y-%m', order_date) AS order_month,\n  COUNT(*) AS total_orders,\n  SUM(amount) AS monthly_revenue\nFROM orders\nGROUP BY order_month\nORDER BY order_month;`
  },
  {
    day: 53,
    month: 2,
    week: 8,
    subject: "Query Optimization & Analytics SQL",
    instructor: "Alex The Analyst",
    duration: "14m",
    title: "Views & Reusable Semantic Analytics Layers",
    videoId: "RF0LE3hYFrI",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 13:45",
    takeaways: [
      "Views store virtual SQL definitions so analysts query clean business metrics without rewriting complex joins.",
      "CREATE TEMP VIEW or CREATE VIEW IF NOT EXISTS keeps queries idempotent."
    ],
    lab: "Create a temporary view v_rep_scorecard joining employees and orders, then query the top-performing reps from it.",
    hint: "Run CREATE TEMP VIEW IF NOT EXISTS v_rep_scorecard AS SELECT ...; followed by SELECT * FROM v_rep_scorecard;",
    starterPy: `print("Semantic views standardize KPI definitions across Python notebooks and BI tools.")`,
    starterSql: `CREATE TEMP VIEW IF NOT EXISTS v_rep_scorecard AS\nSELECT e.emp_id, e.name, e.department,\n  COUNT(o.order_id) AS deals_closed,\n  COALESCE(SUM(o.amount), 0) AS total_sales\nFROM employees e\nLEFT JOIN orders o ON e.emp_id = o.emp_id\nGROUP BY e.emp_id, e.name, e.department;\n\nSELECT * FROM v_rep_scorecard ORDER BY total_sales DESC;`
  },
  {
    day: 54,
    month: 2,
    week: 8,
    subject: "Query Optimization & Analytics SQL",
    instructor: "Luke Barousse",
    duration: "24m",
    title: "Customer Repeat Purchase & Frequency Analysis",
    videoId: "7mz73uXD9DA",
    altVideoId: "K1WeoCJUXYI",
    focus: "03:05:00 – 03:29:00",
    takeaways: [
      "Customer retention starts by measuring order frequency per customer_name and flagging repeat buyers (COUNT > 1).",
      "Two-stage CTEs (customer grain -> cohort summary) make retention metrics crystal clear."
    ],
    lab: "Classify customers into 'Repeat Buyer' (>1 order) vs 'One-Time Buyer' (=1 order) and count customers and revenue in each group.",
    hint: "First CTE groups orders by customer_name; outer query groups by buyer_type.",
    starterPy: `print("Two-stage aggregation (user grain -> segment grain) is the core of product analytics SQL.")`,
    starterSql: `WITH customer_orders AS (\n  SELECT customer_name, COUNT(*) AS order_cnt, SUM(amount) AS total_spent\n  FROM orders\n  GROUP BY customer_name\n)\nSELECT\n  CASE WHEN order_cnt > 1 THEN 'Repeat Buyer' ELSE 'One-Time Buyer' END AS segment,\n  COUNT(*) AS customer_count,\n  SUM(total_spent) AS segment_revenue\nFROM customer_orders\nGROUP BY segment;`
  },
  {
    day: 55,
    month: 2,
    week: 8,
    subject: "Query Optimization & Analytics SQL",
    instructor: "Luke Barousse",
    duration: "25m",
    title: "Pareto 80/20 Revenue Concentration Query",
    videoId: "7mz73uXD9DA",
    altVideoId: "D6XNlTfgl8U",
    focus: "03:30:00 – 03:55:00",
    takeaways: [
      "Combining cumulative window SUM() with overall SUM() reveals what percentage of customers drive 80% of revenue.",
      "Pareto analysis guides key-account retention and inventory prioritization."
    ],
    lab: "Rank customers by total spend descending and calculate their cumulative revenue percentage.",
    hint: "Use SUM(cust_rev) OVER (ORDER BY cust_rev DESC) / SUM(cust_rev) OVER ().",
    starterPy: `print("Cumulative share = running_sum / grand_total using two OVER() clauses.")`,
    starterSql: `WITH cust_rev AS (\n  SELECT customer_name, SUM(amount) AS revenue\n  FROM orders\n  GROUP BY customer_name\n)\nSELECT customer_name, revenue,\n  ROUND(100.0 * SUM(revenue) OVER (ORDER BY revenue DESC ROWS UNBOUNDED PRECEDING) / SUM(revenue) OVER (), 1) AS cum_revenue_pct\nFROM cust_rev\nORDER BY revenue DESC;`
  },
  {
    day: 56,
    month: 2,
    week: 8,
    subject: "SQL Capstone",
    instructor: "Alex The Analyst",
    duration: "32m",
    title: "Month 2 Capstone: Executive Sales & Compensation SQL Audit",
    videoId: "K1WeoCJUXYI",
    altVideoId: "7mz73uXD9DA",
    focus: "00:00 – 11:45",
    takeaways: [
      "Production analytics queries combine CTEs, LEFT JOINs, conditional aggregation, and window rankings cleanly.",
      "Always verify row counts and NULL handling before sharing executive reports."
    ],
    lab: "Build an executive leaderboard ranking every employee within their department by completed revenue, showing salary, completed revenue, ROI ratio, and department rank.",
    hint: "Filter o.status = 'Completed' inside the LEFT JOIN ON clause, then apply RANK() OVER (PARTITION BY e.department ORDER BY ... DESC).",
    starterPy: `print("Switch to SQLite and run the Month 2 Capstone query!")`,
    starterSql: `WITH rep_metrics AS (\n  SELECT e.emp_id, e.name, e.department, e.salary,\n    COUNT(o.order_id) AS completed_deals,\n    COALESCE(SUM(o.amount), 0) AS completed_revenue\n  FROM employees e\n  LEFT JOIN orders o ON e.emp_id = o.emp_id AND o.status = 'Completed'\n  GROUP BY e.emp_id, e.name, e.department, e.salary\n)\nSELECT name, department, salary, completed_deals, completed_revenue,\n  ROUND(completed_revenue * 1.0 / salary, 2) AS revenue_per_salary,\n  RANK() OVER (PARTITION BY department ORDER BY completed_revenue DESC) AS dept_rank\nFROM rep_metrics\nORDER BY department, dept_rank;`
  },

  // ==================== MONTH 3: NUMPY, PANDAS & DATA CLEANING (DAYS 57–84) ====================
  {
    day: 57,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "NumPy ndarrays, Shapes, Dtypes & Memory Layout",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 14:30",
    takeaways: [
      "NumPy arrays store homogeneous C-typed elements in contiguous memory, making math 10x–100x faster than Python lists.",
      "Always inspect .shape, .ndim, and .dtype when debugging matrix pipelines."
    ],
    lab: "Create a 2D NumPy array of shape (3, 4) representing 3 stores across 4 weeks, and inspect its shape, dtype, and total bytes.",
    hint: "Use np.array(..., dtype=np.float64) and check .shape, .dtype, .nbytes.",
    starterPy: `import numpy as np\n\nsales = np.array([\n    [42.5, 48.0, 51.2, 49.8],\n    [31.0, 35.5, 38.0, 41.2],\n    [60.2, 62.1, 59.5, 65.0]\n], dtype=np.float64)\n\nprint("Shape:", sales.shape, "| Dtype:", sales.dtype, "| Bytes:", sales.nbytes)`,
    starterSql: `SELECT region, SUM(amount) FROM orders GROUP BY region;`
  },
  {
    day: 58,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "2D Slicing, Fancy Indexing & Boolean Masks",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "14:31 – 26:15",
    takeaways: [
      "Use arr[row_slice, col_slice] for multi-axis slicing; remember slices return views into the original array.",
      "Boolean masks like arr[arr > 50] filter elements cleanly without loops."
    ],
    lab: "Extract the last 2 weeks (columns 2 and 3) across all stores, and filter all weekly sales values strictly greater than 50.0.",
    hint: "Use sales[:, 2:] for the last two columns and sales[sales > 50.0] for boolean masking.",
    starterPy: `import numpy as np\n\nsales = np.array([[42.5, 48.0, 51.2, 49.8], [31.0, 35.5, 38.0, 41.2], [60.2, 62.1, 59.5, 65.0]])\nlast_two_weeks = sales[:, 2:]\nhigh_weeks = sales[sales > 50.0]\nprint("Last 2 Weeks:\\n", last_two_weeks)\nprint("Values > 50:", high_weeks)`,
    starterSql: `SELECT * FROM orders WHERE amount > 5000;`
  },
  {
    day: 59,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "Vectorized Arithmetic & Universal Functions (ufuncs)",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "26:16 – 36:40",
    takeaways: [
      "Vectorized operators (+, *, np.log1p, np.sqrt, np.clip) execute compiled C loops across entire arrays at once.",
      "np.where(condition, x, y) is the vectorized equivalent of element-wise if/else."
    ],
    lab: "Apply a vectorized 10% promotional boost to orders >= 5000 and 5% to orders < 5000 using np.where.",
    hint: "np.where(orders >= 5000, orders * 1.10, orders * 1.05).",
    starterPy: `import numpy as np\n\norders = np.array([2400, 5200, 8900, 3100, 6500], dtype=float)\nadjusted = np.where(orders >= 5000, orders * 1.10, orders * 1.05)\nprint("Original:", orders)\nprint("Adjusted:", np.round(adjusted, 2))`,
    starterSql: `SELECT order_id, amount, CASE WHEN amount >= 5000 THEN amount*1.10 ELSE amount*1.05 END AS adj FROM orders;`
  },
  {
    day: 60,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "Broadcasting Rules & Axis-Wise Aggregations",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "36:41 – 44:20",
    takeaways: [
      "axis=0 collapses rows (computes column-wise stats); axis=1 collapses columns (computes row-wise stats).",
      "Broadcasting automatically stretches trailing dimensions of size 1 to match larger arrays without copying memory."
    ],
    lab: "Standardize each column (feature) of a 4x3 feature matrix to zero mean and unit standard deviation (Z-score) using broadcasting.",
    hint: "(X - X.mean(axis=0)) / X.std(axis=0).",
    starterPy: `import numpy as np\n\nX = np.array([\n    [25, 45000, 2],\n    [32, 72000, 5],\n    [45, 110000, 12],\n    [29, 60000, 3]\n], dtype=float)\n\nZ = (X - X.mean(axis=0)) / X.std(axis=0)\nprint("Column Means:", np.round(Z.mean(axis=0), 4))\nprint("Z-Scored Matrix:\\n", np.round(Z, 3))`,
    starterSql: `SELECT AVG(salary) AS mean_salary FROM employees;`
  },
  {
    day: 61,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "Reshaping, Stacking & Splitting Arrays",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "44:21 – 51:00",
    takeaways: [
      "reshape(-1, 1) converts a 1D feature vector into a 2D column matrix required by Scikit-Learn .fit(X, y).",
      "np.hstack and np.vstack combine feature blocks horizontally or batch samples vertically."
    ],
    lab: "Reshape a 1D array of 6 monthly metrics into a (3, 2) matrix and horizontally stack a bias column of ones.",
    hint: "Use np.ones((3, 1)) and np.hstack([bias, mat]).",
    starterPy: `import numpy as np\n\narr = np.arange(10, 70, 10)\nmat = arr.reshape(3, 2)\nbias = np.ones((3, 1))\ndesign_matrix = np.hstack([bias, mat])\nprint("Design Matrix (3x3):\\n", design_matrix)`,
    starterSql: `SELECT emp_id, salary FROM employees LIMIT 3;`
  },
  {
    day: 62,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "Linear Algebra (@ Dot Product) & Weighted Scoring",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "51:01 – 55:10",
    takeaways: [
      "The @ operator performs matrix multiplication—the mathematical backbone of linear regression and neural networks.",
      "Weighted lead scoring or portfolio return is simply X @ weights."
    ],
    lab: "Compute lead priority scores for 4 prospects given a (4, 3) feature matrix [visits, downloads, demo_req] and weight vector [0.2, 0.3, 0.5].",
    hint: "scores = features @ weights.",
    starterPy: `import numpy as np\n\nfeatures = np.array([\n    [10, 2, 1],\n    [3, 0, 0],\n    [15, 4, 1],\n    [8, 1, 0]\n], dtype=float)\nweights = np.array([0.2, 0.3, 0.5])\nscores = features @ weights\nprint("Lead Scores:", scores)`,
    starterSql: `SELECT name, salary FROM employees LIMIT 4;`
  },
  {
    day: 63,
    month: 3,
    week: 9,
    subject: "NumPy & Vectorized Computing",
    instructor: "Keith Galli",
    duration: "58m",
    title: "Seeded Random Sampling & Monte Carlo Revenue Simulation",
    videoId: "QUT1VHiLmmI",
    altVideoId: "vmEHCJofslg",
    focus: "55:11 – 58:20",
    takeaways: [
      "np.random.default_rng(42) creates reproducible random draws for simulations and train/test splits.",
      "Monte Carlo simulation estimates probability distributions of uncertain business outcomes."
    ],
    lab: "Simulate 10,000 monthly revenue outcomes where leads ~ Normal(500, 60) and conversion rate ~ Uniform(0.08, 0.14) at INR 4,000/deal, printing the 5th and 95th percentiles.",
    hint: "Use rng.normal() and rng.uniform(), then np.percentile(rev, [5, 50, 95]).",
    starterPy: `import numpy as np\n\nrng = np.random.default_rng(42)\nleads = rng.normal(loc=500, scale=60, size=10000)\nconv = rng.uniform(low=0.08, high=0.14, size=10000)\nrevenue = leads * conv * 4000\n\np5, p50, p95 = np.percentile(revenue, [5, 50, 95])\nprint(f"P05: INR {p5:,.0f} | Median: INR {p50:,.0f} | P95: INR {p95:,.0f}")`,
    starterSql: `SELECT COUNT(*) AS sample_size, AVG(amount) AS mean_amt FROM orders;`
  },
  {
    day: 64,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Corey Schafer",
    duration: "17m",
    title: "DataFrames, Series & Initial Data Profiling",
    videoId: "ZyhVh-qRZPA",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 17:10",
    takeaways: [
      "A DataFrame is a dictionary of aligned Series sharing an Index.",
      "Always inspect .shape, .dtypes, .isna().sum(), and .describe() first on any new dataset."
    ],
    lab: "Construct a Pandas DataFrame of 5 product SKUs and print its shape, summary statistics, and column dtypes.",
    hint: "Pass a dict of lists to pd.DataFrame({...}) and call df.describe().",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "sku": ["A101", "A102", "A103", "A104", "A105"],\n    "category": ["Laptop", "Mouse", "Monitor", "Laptop", "Keyboard"],\n    "price": [72000, 1200, 18500, 85000, 3400],\n    "units": [12, 85, 24, 9, 45]\n})\nprint("Shape:", df.shape)\nprint(df.describe())`,
    starterSql: `SELECT * FROM orders LIMIT 5;`
  },
  {
    day: 65,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Corey Schafer",
    duration: "24m",
    title: "Label (.loc) vs Position (.iloc) Indexing & Slicing",
    videoId: "zmdjNSmRXF4",
    altVideoId: "W9XjRYFkkyw",
    focus: "00:00 – 24:15",
    takeaways: [
      ".loc[row_labels, col_names] selects by index label (inclusive endpoints); .iloc[row_pos, col_pos] selects by integer position.",
      "Always use df.loc[mask, 'col'] = new_val when assigning to subsets to avoid SettingWithCopyWarning."
    ],
    lab: "Set 'sku' as the DataFrame index and use .loc to retrieve price and units for 'A102' and 'A104'.",
    hint: "df = df.set_index('sku'); df.loc[['A102', 'A104'], ['price', 'units']].",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "sku": ["A101", "A102", "A103", "A104"],\n    "price": [72000, 1200, 18500, 85000],\n    "units": [12, 85, 24, 9]\n}).set_index("sku")\n\nprint(df.loc[["A102", "A104"], ["price", "units"]])`,
    starterSql: `SELECT emp_id, name, salary FROM employees WHERE emp_id IN (1, 3);`
  },
  {
    day: 66,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Corey Schafer",
    duration: "21m",
    title: "Multi-Condition Filtering, .isin() & .query()",
    videoId: "Lw2rlcxScZY",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 21:05",
    takeaways: [
      "Combine boolean Series using bitwise &, |, and ~ with parentheses around each condition.",
      "df.query('category == \"Laptop\" and price > 75000') offers clean SQL-like filtering syntax."
    ],
    lab: "Filter rows where category is in ['Laptop', 'Monitor'] AND price is greater than 15,000.",
    hint: "Use df['category'].isin(['Laptop', 'Monitor']) & (df['price'] > 15000).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "sku": ["A101", "A102", "A103", "A104"],\n    "category": ["Laptop", "Mouse", "Monitor", "Laptop"],\n    "price": [72000, 1200, 18500, 85000]\n})\nfiltered = df[df["category"].isin(["Laptop", "Monitor"]) & (df["price"] > 15000)]\nprint(filtered)`,
    starterSql: `SELECT * FROM orders WHERE category IN ('Electronics', 'Software') AND amount > 3000;`
  },
  {
    day: 67,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Corey Schafer",
    duration: "23m",
    title: "Feature Creation, .assign() & Conditional Columns",
    videoId: "DCDe29sIKcE",
    altVideoId: "HQ6XO9eT-ws",
    focus: "00:00 – 23:10",
    takeaways: [
      "Vectorized column arithmetic (df['revenue'] = df['price'] * df['units']) beats row-by-row loops by orders of magnitude.",
      ".assign() supports method chaining without mutating intermediate DataFrames."
    ],
    lab: "Add 'revenue' (price * units) and 'margin_tier' ('High' if revenue >= 400000 else 'Standard') using np.where.",
    hint: "Use np.where(df['revenue'] >= 400000, 'High', 'Standard').",
    starterPy: `import pandas as pd, numpy as np\n\ndf = pd.DataFrame({\n    "sku": ["A101", "A102", "A103", "A104"],\n    "price": [72000, 1200, 18500, 85000],\n    "units": [12, 85, 24, 9]\n})\ndf["revenue"] = df["price"] * df["units"]\ndf["margin_tier"] = np.where(df["revenue"] >= 400000, "High", "Standard")\nprint(df)`,
    starterSql: `SELECT order_id, amount, CASE WHEN amount >= 5000 THEN 'High' ELSE 'Standard' END AS tier FROM orders;`
  },
  {
    day: 68,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Corey Schafer",
    duration: "14m",
    title: "Sorting, .nlargest() & Series Ranking",
    videoId: "T11QYVfZoUA",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 14:20",
    takeaways: [
      "df.nlargest(n, 'col') retrieves top-N rows faster than full sorting.",
      "Series.rank(method='dense', ascending=False) replicates SQL DENSE_RANK() in Pandas."
    ],
    lab: "Sort the dataset by category ascending and revenue descending, then add a 'rev_rank' column.",
    hint: "df.sort_values(['category', 'revenue'], ascending=[True, False]).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "sku": ["A101", "A102", "A103", "A104"],\n    "category": ["Tech", "Accessory", "Tech", "Accessory"],\n    "revenue": [864000, 102000, 444000, 153000]\n})\ndf["rev_rank"] = df["revenue"].rank(method="dense", ascending=False).astype(int)\nprint(df.sort_values(["category", "revenue"], ascending=[True, False]))`,
    starterSql: `SELECT name, department, salary FROM employees ORDER BY department ASC, salary DESC;`
  },
  {
    day: 69,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Keith Galli",
    duration: "35m",
    title: "Vectorized Text Cleaning with the .str Accessor",
    videoId: "vmEHCJofslg",
    altVideoId: "KdmPHEnPJPs",
    focus: "25:00 – 42:00",
    takeaways: [
      "df['col'].str provides null-safe vectorized string methods (.strip(), .lower(), .contains(), .split(), .extract()).",
      "Always pass na=False inside .str.contains('pattern', na=False) when missing values exist."
    ],
    lab: "Clean messy city names (whitespace + casing) and flag rows containing 'Mumbai' (case-insensitive) in a boolean column 'is_mumbai'.",
    hint: "df['city'] = df['city'].str.strip().str.title(); df['is_mumbai'] = df['city'].str.contains('Mumbai', case=False, na=False).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({"city": [" navi mumbai ", "PUNE", "mumbai suburban", None, "Bengaluru"]})\ndf["clean_city"] = df["city"].str.strip().str.title()\ndf["is_mumbai"] = df["clean_city"].str.contains("Mumbai", case=False, na=False)\nprint(df)`,
    starterSql: `SELECT DISTINCT region FROM orders;`
  },
  {
    day: 70,
    month: 3,
    week: 10,
    subject: "Pandas Core & Data Wrangling",
    instructor: "Keith Galli",
    duration: "25m",
    title: "Categorical Dtypes & DataFrame Memory Optimization",
    videoId: "eMOA1pPVUc4",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 25:00",
    takeaways: [
      "Converting low-cardinality string columns (e.g., region, status) to 'category' dtype cuts RAM usage by up to 80%.",
      "Downcasting float64 -> float32 and int64 -> int32 keeps million-row DataFrames snappy."
    ],
    lab: "Measure memory usage in bytes before and after converting repeated string columns to 'category' dtype.",
    hint: "Use df.memory_usage(deep=True).sum() before and after .astype('category').",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "region": ["West", "South", "North", "East"] * 250,\n    "status": ["Completed", "Pending"] * 500\n})\nbefore = df.memory_usage(deep=True).sum()\ndf["region"] = df["region"].astype("category")\ndf["status"] = df["status"].astype("category")\nafter = df.memory_usage(deep=True).sum()\nprint(f"Memory reduced from {before:,} B to {after:,} B ({100*(1-after/before):.1f}% saved)")`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 71,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Corey Schafer",
    duration: "31m",
    title: "GroupBy Split-Apply-Combine & Named Aggregations",
    videoId: "txMdrV1Ut64",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 31:15",
    takeaways: [
      "Named aggregation df.groupby('grp').agg(total=('amt', 'sum'), avg=('amt', 'mean')) produces flat, clean column names.",
      "Pass as_index=False or chain .reset_index() so group keys remain regular columns."
    ],
    lab: "Group sales records by 'region' and compute total_orders, total_revenue, and max_order in a single .agg() call.",
    hint: "df.groupby('region', as_index=False).agg(total_orders=('amount', 'count'), ...).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "region": ["West", "East", "West", "South", "East"],\n    "amount": [5000, 3200, 8400, 4100, 6900]\n})\nsummary = df.groupby("region", as_index=False).agg(\n    total_orders=("amount", "count"),\n    total_revenue=("amount", "sum"),\n    max_order=("amount", "max")\n).sort_values("total_revenue", ascending=False)\nprint(summary)`,
    starterSql: `SELECT region, COUNT(*) AS total_orders, SUM(amount) AS total_revenue, MAX(amount) AS max_order FROM orders GROUP BY region;`
  },
  {
    day: 72,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Corey Schafer",
    duration: "31m",
    title: "GroupBy .transform() for Row-Aligned Benchmarks",
    videoId: "txMdrV1Ut64",
    altVideoId: "eMOA1pPVUc4",
    focus: "20:00 – 31:15",
    takeaways: [
      ".transform() broadcasts group-level aggregates back to the original DataFrame index—Pandas' equivalent of SQL OVER (PARTITION BY).",
      "Ideal for computing '% of group total' or imputing missing values using group medians."
    ],
    lab: "Add 'region_total' and 'pct_of_region' columns to every order row using .groupby('region')['amount'].transform('sum').",
    hint: "df['pct_of_region'] = (df['amount'] / df['region_total'] * 100).round(1).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "order_id": [1, 2, 3, 4],\n    "region": ["West", "West", "East", "East"],\n    "amount": [6000, 4000, 2500, 7500]\n})\ndf["region_total"] = df.groupby("region")["amount"].transform("sum")\ndf["pct_of_region"] = (df["amount"] / df["region_total"] * 100).round(1)\nprint(df)`,
    starterSql: `SELECT order_id, region, amount, SUM(amount) OVER (PARTITION BY region) AS region_total FROM orders;`
  },
  {
    day: 73,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Keith Galli",
    duration: "30m",
    title: "Relational Joins in Pandas: pd.merge() & Audit Indicators",
    videoId: "eMOA1pPVUc4",
    altVideoId: "vmEHCJofslg",
    focus: "25:01 – 48:00",
    takeaways: [
      "pd.merge(left, right, on='key', how='left', validate='many_to_one') catches accidental duplicate keys in lookup tables.",
      "Setting indicator=True adds a '_merge' column showing 'both', 'left_only', or 'right_only' for join audits."
    ],
    lab: "Left-merge orders with a customer lookup table using validate='many_to_one' and indicator=True to spot unmatched customer IDs.",
    hint: "pd.merge(orders, customers, on='cust_id', how='left', validate='many_to_one', indicator=True).",
    starterPy: `import pandas as pd\n\norders = pd.DataFrame({"order_id": [101, 102, 103], "cust_id": [1, 2, 99], "amount": [4500, 7200, 3100]})\ncustomers = pd.DataFrame({"cust_id": [1, 2], "tier": ["Gold", "Platinum"]})\n\nmerged = pd.merge(orders, customers, on="cust_id", how="left", validate="many_to_one", indicator=True)\nprint(merged)`,
    starterSql: `SELECT o.order_id, o.amount, e.name FROM orders o LEFT JOIN employees e ON o.emp_id = e.emp_id;`
  },
  {
    day: 74,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Keith Galli",
    duration: "25m",
    title: "Multi-File Ingestion with pd.concat()",
    videoId: "eMOA1pPVUc4",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 25:00",
    takeaways: [
      "Collect monthly DataFrames in a list and call pd.concat(dfs, ignore_index=True) once—never concat inside a loop (O(N^2)).",
      "Pass keys=['Jan', 'Feb'] to preserve source batch labels."
    ],
    lab: "Combine three monthly sales DataFrames into a unified master table with a 'month_batch' column.",
    hint: "Add df['month_batch'] = m before appending to a list, then call pd.concat(frames, ignore_index=True).",
    starterPy: `import pandas as pd\n\nbatches = {\n    "Jan": pd.DataFrame({"sku": ["A1", "A2"], "rev": [12000, 8500]}),\n    "Feb": pd.DataFrame({"sku": ["A1", "A3"], "rev": [14500, 9200]}),\n    "Mar": pd.DataFrame({"sku": ["A2", "A3"], "rev": [11000, 13400]})\n}\nmaster = pd.concat([df.assign(month=m) for m, df in batches.items()], ignore_index=True)\nprint(master)`,
    starterSql: `SELECT strftime('%Y-%m', order_date) AS m, SUM(amount) FROM orders GROUP BY m;`
  },
  {
    day: 75,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Keith Galli",
    duration: "28m",
    title: "Pivot Tables & Cross-Tabulations (pivot_table & crosstab)",
    videoId: "vmEHCJofslg",
    altVideoId: "txMdrV1Ut64",
    focus: "42:01 – 58:00",
    takeaways: [
      "df.pivot_table(index='region', columns='category', values='amount', aggfunc='sum', fill_value=0) creates Excel-style matrices.",
      "pd.crosstab(df['a'], df['b'], normalize='index') computes row-wise contingency percentages."
    ],
    lab: "Create a region x category revenue pivot table with fill_value=0 and margins=True for row/column totals.",
    hint: "Use margins_name='Total' alongside margins=True.",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "region": ["West", "West", "East", "East", "West"],\n    "category": ["Cloud", "Hardware", "Cloud", "Cloud", "Cloud"],\n    "amount": [15000, 8000, 12000, 9000, 5000]\n})\npt = df.pivot_table(index="region", columns="category", values="amount", aggfunc="sum", fill_value=0, margins=True)\nprint(pt)`,
    starterSql: `SELECT region, category, SUM(amount) AS rev FROM orders GROUP BY region, category;`
  },
  {
    day: 76,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Corey Schafer",
    duration: "20m",
    title: "Wide-to-Long Unpivoting with pd.melt()",
    videoId: "txMdrV1Ut64",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 18:00",
    takeaways: [
      "Tidy data puts one observation per row; pd.melt() unpivots wide quarterly/monthly columns into long format for Seaborn and SQL.",
      "Specify id_vars for identifier columns and value_vars for the columns to stack."
    ],
    lab: "Unpivot a wide Q1–Q4 regional revenue DataFrame into tidy columns ['region', 'quarter', 'revenue'].",
    hint: "pd.melt(wide_df, id_vars=['region'], var_name='quarter', value_name='revenue').",
    starterPy: `import pandas as pd\n\nwide = pd.DataFrame({\n    "region": ["West", "South"],\n    "Q1": [120, 95],\n    "Q2": [135, 110],\n    "Q3": [150, 125]\n})\ntidy = pd.melt(wide, id_vars=["region"], var_name="quarter", value_name="revenue")\nprint(tidy)`,
    starterSql: `SELECT * FROM orders LIMIT 5;`
  },
  {
    day: 77,
    month: 3,
    week: 11,
    subject: "Grouping, Reshaping & Merges",
    instructor: "Keith Galli",
    duration: "24m",
    title: "Multi-Tier Segmentation with np.select()",
    videoId: "vmEHCJofslg",
    altVideoId: "DCDe29sIKcE",
    focus: "48:00 – 01:02:00",
    takeaways: [
      "np.select(conditions, choices, default=...) vectorizes multi-branch if/elif/else rules cleanly without slow .apply(axis=1).",
      "Always order conditions from most restrictive to least restrictive."
    ],
    lab: "Assign customer segments ('VIP', 'Loyal', 'At-Risk', 'Regular') using np.select based on spend and days_since_last_order.",
    hint: "Define conditions = [(df['spend'] >= 20000) & (df['recency'] <= 30), ...].",
    starterPy: `import pandas as pd, numpy as np\n\ndf = pd.DataFrame({\n    "customer": ["C1", "C2", "C3", "C4"],\n    "spend": [28000, 12000, 22000, 4500],\n    "recency": [12, 20, 95, 45]\n})\nconds = [\n    (df["spend"] >= 20000) & (df["recency"] <= 30),\n    (df["spend"] >= 20000) & (df["recency"] > 30),\n    (df["spend"] >= 10000)\n]\nchoices = ["VIP Active", "VIP At-Risk", "Loyal"]\ndf["segment"] = np.select(conds, choices, default="Regular")\nprint(df)`,
    starterSql: `SELECT customer_name, amount FROM orders ORDER BY amount DESC LIMIT 4;`
  },
  {
    day: 78,
    month: 3,
    week: 12,
    subject: "Data Cleaning & Time Series",
    instructor: "Corey Schafer",
    duration: "28m",
    title: "Diagnosing & Imputing Missing Values (isna, fillna, dropna)",
    videoId: "KdmPHEnPJPs",
    altVideoId: "fHFOANOHwh8",
    focus: "00:00 – 28:10",
    takeaways: [
      "Inspect missingness percentages per column before deciding between dropping, median imputation, or adding a missingness indicator flag.",
      "Median imputation resists skew from extreme outliers far better than mean imputation."
    ],
    lab: "Add an 'age_was_missing' binary indicator column, then impute missing 'age' values using the group median by 'role'.",
    hint: "df['age'] = df['age'].fillna(df.groupby('role')['age'].transform('median')).",
    starterPy: `import pandas as pd, numpy as np\n\ndf = pd.DataFrame({\n    "role": ["Analyst", "Analyst", "Analyst", "Engineer", "Engineer"],\n    "age": [24, np.nan, 28, 31, np.nan]\n})\ndf["age_missing"] = df["age"].isna().astype(int)\ndf["age"] = df["age"].fillna(df.groupby("role")["age"].transform("median"))\nprint(df)`,
    starterSql: `SELECT COUNT(*) AS total, COUNT(amount) AS non_null FROM orders;`
  },
  {
    day: 79,
    month: 3,
    week: 12,
    subject: "Data Cleaning & Time Series",
    instructor: "Corey Schafer",
    duration: "28m",
    title: "Deduplication & Schema Type Enforcement",
    videoId: "KdmPHEnPJPs",
    altVideoId: "fHFOANOHwh8",
    focus: "15:00 – 28:10",
    takeaways: [
      "Sort by updated_at ascending before calling df.drop_duplicates(subset=['order_id'], keep='last') so the newest record survives.",
      "pd.to_numeric(col, errors='coerce') converts dirty strings into NaN instead of crashing."
    ],
    lab: "Deduplicate an order log keeping the latest timestamp per order_id, and coerce dirty string amounts to float.",
    hint: "Sort by 'updated_at' first, then call drop_duplicates(subset=['order_id'], keep='last').",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "order_id": [101, 101, 102],\n    "updated_at": ["2026-05-01 10:00", "2026-05-01 14:30", "2026-05-02 09:00"],\n    "amount": ["4500", "4800", "invalid"]\n})\ndf["amount"] = pd.to_numeric(df["amount"], errors="coerce")\nclean = df.sort_values("updated_at").drop_duplicates(subset=["order_id"], keep="last")\nprint(clean)`,
    starterSql: `SELECT order_id, COUNT(*) FROM orders GROUP BY order_id HAVING COUNT(*) > 1;`
  },
  {
    day: 80,
    month: 3,
    week: 12,
    subject: "Data Cleaning & Time Series",
    instructor: "Krish Naik",
    duration: "26m",
    title: "Outlier Detection & Winsorization (IQR & Z-Score)",
    videoId: "fHFOANOHwh8",
    altVideoId: "KdmPHEnPJPs",
    focus: "00:00 – 26:00",
    takeaways: [
      "IQR = Q3 - Q1; values outside [Q1 - 1.5*IQR, Q3 + 1.5*IQR] are standard Tukey outliers.",
      "Capping (winsorizing) with .clip(lower, upper) preserves sample size while preventing extreme distortion."
    ],
    lab: "Compute Q1, Q3, IQR, and Tukey fences on transaction amounts, flag outliers, and create a winsorized 'amount_capped' column.",
    hint: "q1, q3 = df['amount'].quantile([0.25, 0.75]); iqr = q3 - q1.",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({"amount": [1200, 1450, 1300, 1500, 1600, 1400, 28500]})\nq1, q3 = df["amount"].quantile([0.25, 0.75])\niqr = q3 - q1\nlow, high = q1 - 1.5 * iqr, q3 + 1.5 * iqr\ndf["is_outlier"] = (df["amount"] < low) | (df["amount"] > high)\ndf["amount_capped"] = df["amount"].clip(lower=low, upper=high)\nprint(df)`,
    starterSql: `SELECT MIN(amount) AS min_amt, MAX(amount) AS max_amt FROM orders;`
  },
  {
    day: 81,
    month: 3,
    week: 12,
    subject: "Data Cleaning & Time Series",
    instructor: "Keith Galli",
    duration: "25m",
    title: "Regular Expressions (Regex) for Feature Extraction",
    videoId: "eMOA1pPVUc4",
    altVideoId: "vmEHCJofslg",
    focus: "48:01 – 01:08:00",
    takeaways: [
      "df['text'].str.extract(r'pattern') pulls structured IDs, pincodes, or currency values out of unstructured logs.",
      "Named capture groups (?P<code_id>...) automatically name the extracted DataFrame columns."
    ],
    lab: "Extract the invoice ID (e.g., INV-2049) and 6-digit Indian PIN code from unstructured delivery notes using .str.extract().",
    hint: "Use pattern r'(?P<invoice>INV-\\d+).*?(?P<pincode>\\d{6})'.",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "note": [\n        "Delivered INV-2049 to Taloja 410208 on time",\n        "Pending INV-2050 dispatch for Kharghar 410210"\n    ]\n})\nextracted = df["note"].str.extract(r"(?P<invoice>INV-\\d+).*?(?P<pincode>\\d{6})")\nprint(pd.concat([df, extracted], axis=1))`,
    starterSql: `SELECT order_id, customer_name FROM orders LIMIT 5;`
  },
  {
    day: 82,
    month: 3,
    week: 12,
    subject: "Data Cleaning & Time Series",
    instructor: "Corey Schafer",
    duration: "25m",
    title: "DateTime Parsing, .dt Accessor & Cohort Age",
    videoId: "UFuo7EHI8zc",
    altVideoId: "vmEHCJofslg",
    focus: "00:00 – 14:30",
    takeaways: [
      "pd.to_datetime(col, errors='coerce') parses ISO and mixed date formats cleanly.",
      "The .dt accessor exposes .year, .month, .day_name(), .quarter, and .days for timedelta differences."
    ],
    lab: "Parse signup_date and first_order_date, then compute 'days_to_first_order' and 'signup_day_name'.",
    hint: "(df['first_order_date'] - df['signup_date']).dt.days.",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "signup_date": ["2026-01-10", "2026-02-14", "2026-03-03"],\n    "first_order_date": ["2026-01-12", "2026-02-25", "2026-03-03"]\n})\ndf["signup_date"] = pd.to_datetime(df["signup_date"])\ndf["first_order_date"] = pd.to_datetime(df["first_order_date"])\ndf["days_to_convert"] = (df["first_order_date"] - df["signup_date"]).dt.days\ndf["signup_weekday"] = df["signup_date"].dt.day_name()\nprint(df)`,
    starterSql: `SELECT order_id, order_date FROM orders ORDER BY order_date LIMIT 5;`
  },
  {
    day: 83,
    month: 3,
    week: 12,
    subject: "Data Cleaning & Time Series",
    instructor: "Corey Schafer",
    duration: "25m",
    title: "Time-Series Resampling & Rolling Window Metrics",
    videoId: "UFuo7EHI8zc",
    altVideoId: "vmEHCJofslg",
    focus: "14:31 – 25:10",
    takeaways: [
      "df.set_index('date').resample('W')['sales'].sum() aggregates irregular timestamps into regular weekly/monthly buckets.",
      ".rolling(window=3, min_periods=1).mean() smooths noisy daily series."
    ],
    lab: "Resample daily revenue into weekly totals ('W') and compute a 2-week rolling average.",
    hint: "Set 'date' as DatetimeIndex, call .resample('W')['revenue'].sum(), then .rolling(2, min_periods=1).mean().",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "date": pd.date_range("2026-06-01", periods=14, freq="D"),\n    "revenue": [100, 120, 90, 150, 180, 200, 170, 130, 140, 160, 210, 230, 190, 220]\n}).set_index("date")\n\nweekly = df.resample("W").agg(weekly_rev=("revenue", "sum"))\nweekly["rolling_2w"] = weekly["weekly_rev"].rolling(2, min_periods=1).mean()\nprint(weekly)`,
    starterSql: `SELECT order_date, SUM(amount) AS daily_rev FROM orders GROUP BY order_date ORDER BY order_date;`
  },
  {
    day: 84,
    month: 3,
    week: 12,
    subject: "Pandas & Cleaning Capstone",
    instructor: "Krish Naik",
    duration: "35m",
    title: "Month 3 Capstone: End-to-End Dirty E-Commerce Cleaning Pipeline",
    videoId: "fHFOANOHwh8",
    altVideoId: "KdmPHEnPJPs",
    focus: "26:01 – 48:00",
    takeaways: [
      "Production cleaning pipelines chain deduplication, string normalization, numeric coercion, median imputation, and outlier capping deterministically.",
      "Always log row counts and missingness before and after cleaning as an automated quality audit."
    ],
    lab: "Clean the dirty e-commerce batch: strip/title city names, coerce amounts, deduplicate order_id, impute missing amounts by city median, and summarize clean revenue by city.",
    hint: "Chain .assign(), .drop_duplicates(), .groupby('city')['amount'].transform('median'), and .groupby('city').agg().",
    starterPy: `import pandas as pd, numpy as np\n\nraw = pd.DataFrame({\n    "order_id": [1, 1, 2, 3, 4, 5],\n    "city": [" mumbai ", "Mumbai", "PUNE", "pune ", "Bengaluru", "Mumbai"],\n    "amount": ["4500", "4800", "3200", "N/A", "9100", "5200"]\n})\n\nclean = (\n    raw.assign(\n        city=lambda d: d["city"].str.strip().str.title(),\n        amount=lambda d: pd.to_numeric(d["amount"], errors="coerce")\n    )\n    .drop_duplicates(subset=["order_id"], keep="last")\n)\nclean["amount"] = clean["amount"].fillna(clean.groupby("city")["amount"].transform("median"))\nreport = clean.groupby("city", as_index=False).agg(orders=("order_id", "count"), revenue=("amount", "sum"))\nprint(report)`,
    starterSql: `SELECT region, COUNT(*) AS orders, SUM(amount) AS revenue FROM orders GROUP BY region;`
  },