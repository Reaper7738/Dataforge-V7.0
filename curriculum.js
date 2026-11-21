/* ==========================================================================
   DATAFORGE // INSTINCT OS v7.0 — 168-DAY MASTER CURRICULUM
   PART 1 OF 2: MONTHS 1–3 (DAYS 1–84)
   ========================================================================== */

window.CURRICULUM = (function () {
  const RAW_PART_1 = [
    // ==================== MONTH 1: PYTHON FOUNDATIONS & GIT (DAYS 1–28) ====================
    {
      day: 1, month: 1, week: 1, subject: "Python Foundations", instructor: "Corey Schafer",
      title: "Strings, Slicing & F-String Formatting", duration: "21m",
      videoId: "k9TUPpGqYTo", altVideoId: "nLRL_NcnK-4", startSec: 0, focus: "00:00 – 21:15",
      takeaways: [
        "Use .strip(), .lower(), and .split() to sanitize raw text records.",
        "Format dynamic metrics cleanly with Python f-strings and precision specifiers."
      ],
      lab: "Clean the raw customer string '  ishan_m | panvel | 4500  ', extract name, city, and spend, and print a formatted summary.",
      hint: "Use raw.strip().split('|') and strip whitespace on each piece.",
      starterPy: "raw = '  ishan_m | panvel | 4500  '\n# Clean and print formatted summary below\n",
      starterSql: "SELECT department, COUNT(*) AS staff, ROUND(AVG(salary), 0) AS avg_sal FROM employees GROUP BY department;"
    },
    {
      day: 2, month: 1, week: 1, subject: "Python Foundations", instructor: "Corey Schafer",
      title: "Integers, Floats & Numeric Operators", duration: "12m",
      videoId: "khKv-8q7YmY", altVideoId: "nLRL_NcnK-4", startSec: 0, focus: "00:00 – 11:50",
      takeaways: [
        "Distinguish true division (/), floor division (//), modulo (%), and exponentiation (**).",
        "Avoid floating-point drift when rounding financial and GST calculations."
      ],
      lab: "Compute 18% GST and percentage revenue growth from ₹1,20,000 to ₹1,48,500 rounded to 2 decimals.",
      hint: "Percentage change = ((new_rev - old_rev) / old_rev) * 100.",
      starterPy: "old_rev, new_rev = 120000, 148500\ngst_rate = 0.18\n",
      starterSql: "SELECT region, SUM(amount) AS revenue FROM orders WHERE status = 'Completed' GROUP BY region;"
    },
    {
      day: 3, month: 1, week: 1, subject: "Python Foundations", instructor: "Corey Schafer",
      title: "Lists, Tuples & Sets for Deduplication", duration: "29m",
      videoId: "W8KRzm-HUcc", altVideoId: "nLRL_NcnK-4", startSec: 0, focus: "00:00 – 29:05",
      takeaways: [
        "Slice lists efficiently with [start:stop:step] and mutate with .append() / .extend().",
        "Use sets for O(1) membership lookups and instant duplicate removal."
      ],
      lab: "Given a list of customer IDs with duplicates, print the sorted unique IDs and total duplicate count.",
      hint: "len(ids) - len(set(ids)) gives the duplicate count.",
      starterPy: "ids = [104, 101, 102, 101, 105, 102, 109, 104]\n",
      starterSql: "SELECT DISTINCT customer_name, region FROM orders ORDER BY customer_name;"
    },
    {
      day: 4, month: 1, week: 1, subject: "Python Foundations", instructor: "Corey Schafer",
      title: "Dictionaries & Safe Key-Value Lookups", duration: "10m",
      videoId: "daefaLgNkw0", altVideoId: "nLRL_NcnK-4", startSec: 0, focus: "00:00 – 10:15",
      takeaways: [
        "Retrieve keys safely with dict.get(key, default) instead of risking KeyError crashes.",
        "Iterate over .items() to transform configuration and lookup tables."
      ],
      lab: "Build a SKU price dictionary, safely look up 'SKU_99' with a default of 0, and compute cart total.",
      hint: "Use catalog.get(sku, 0) inside a loop over cart items.",
      starterPy: "catalog = {'SKU_01': 499, 'SKU_02': 1299, 'SKU_03': 799}\ncart = ['SKU_01', 'SKU_99', 'SKU_03']\n",
      starterSql: "SELECT category, COUNT(*) AS orders, SUM(amount) AS total FROM orders GROUP BY category;"
    },
    {
      day: 5, month: 1, week: 1, subject: "Python Foundations", instructor: "Corey Schafer",
      title: "Conditionals, Truthiness & Boolean Logic", duration: "16m",
      videoId: "DZwmZ8Usvnk", altVideoId: "nLRL_NcnK-4", startSec: 0, focus: "00:00 – 16:20",
      takeaways: [
        "Combine business rules cleanly with and, or, not, and chained comparisons.",
        "Leverage Python truthiness to detect empty lists, strings, and None values."
      ],
      lab: "Classify customer spend into 'Platinum' (>=10000), 'Gold' (5000–9999), or 'Silver' (<5000).",
      hint: "Check highest threshold first with if / elif / else.",
      starterPy: "spend = 8400\n",
      starterSql: "SELECT order_id, amount, CASE WHEN amount >= 10000 THEN 'Platinum' WHEN amount >= 5000 THEN 'Gold' ELSE 'Silver' END AS tier FROM orders;"
    },
    {
      day: 6, month: 1, week: 1, subject: "Python Foundations", instructor: "Corey Schafer",
      title: "For/While Loops, Enumerate & Zip", duration: "10m",
      videoId: "6iF8Xb7Z3wQ", altVideoId: "nLRL_NcnK-4", startSec: 0, focus: "00:00 – 10:05",
      takeaways: [
        "Pair parallel sequences cleanly with zip() instead of manual index counters.",
        "Use enumerate(seq, start=1) when tracking 1-based row numbers."
      ],
      lab: "Pair product names, unit prices, and quantities via zip() to print itemized subtotals and grand total.",
      hint: "for item, price, qty in zip(items, prices, qtys):",
      starterPy: "items = ['Laptop Stand', 'Wireless Mouse', 'USB-C Hub']\nprices = [1500, 800, 1200]\nqtys = [2, 3, 1]\n",
      starterSql: "SELECT emp_id, COUNT(*) AS deals, SUM(amount) AS total_sales FROM orders WHERE status = 'Completed' GROUP BY emp_id;"
    },
    {
      day: 7, month: 1, week: 1, subject: "Python Foundations", instructor: "Programming with Mosh",
      title: "Week 1 Capstone: Expense & GST Ledger", duration: "22m",
      videoId: "_uQrJ0TkZlc", altVideoId: "nLRL_NcnK-4", startSec: 7200, focus: "02:00:00 – 02:22:00",
      takeaways: [
        "Combine lists, dictionaries, loops, and conditionals into an end-to-end aggregation script.",
        "Compute category-wise net totals and 18% GST liability."
      ],
      lab: "Aggregate a list of expense dictionaries by category and print each category's base spend and 18% GST.",
      hint: "totals[cat] = totals.get(cat, 0) + amt",
      starterPy: "expenses = [\n  {'cat': 'Cloud', 'amt': 2400},\n  {'cat': 'Software', 'amt': 1500},\n  {'cat': 'Cloud', 'amt': 1600},\n  {'cat': 'Hardware', 'amt': 4200}\n]\n",
      starterSql: "SELECT category, SUM(amount) AS base_amt, ROUND(SUM(amount)*0.18, 2) AS gst FROM orders WHERE status='Completed' GROUP BY category;"
    },
    {
      day: 8, month: 1, week: 2, subject: "Python Functions & Files", instructor: "Corey Schafer",
      title: "Functions, *args & **kwargs", duration: "21m",
      videoId: "9Os0o3wzS_I", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 21:40",
      takeaways: [
        "Design modular, pure functions with default parameters and clear return tuples.",
        "Accept variable-length numeric inputs cleanly with *args."
      ],
      lab: "Write calc_summary(*scores) returning a dictionary with count, min, max, and rounded mean.",
      hint: "Return {'count': len(scores), 'mean': round(sum(scores)/len(scores), 2), ...}.",
      starterPy: "def calc_summary(*scores):\n    pass\n\nprint(calc_summary(78, 85, 92, 88, 95))\n",
      starterSql: "SELECT department, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM employees GROUP BY department;"
    },
    {
      day: 9, month: 1, week: 2, subject: "Python Functions & Files", instructor: "Corey Schafer",
      title: "List, Dict & Set Comprehensions", duration: "17m",
      videoId: "3dt4OGnU5sM", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 17:30",
      takeaways: [
        "Replace verbose filter-and-transform loops with readable single-line comprehensions.",
        "Build lookup dictionaries dynamically with {k: v for ...} syntax."
      ],
      lab: "From raw order amounts, build a list of amounts >= 5000 after adding 10% tax in one comprehension.",
      hint: "[round(x * 1.10, 2) for x in amounts if x >= 5000]",
      starterPy: "amounts = [2400, 6500, 4800, 11200, 5000, 1900]\n",
      starterSql: "SELECT order_id, amount, ROUND(amount * 1.10, 2) AS with_tax FROM orders WHERE amount >= 5000;"
    },
    {
      day: 10, month: 1, week: 2, subject: "Python Functions & Files", instructor: "Corey Schafer",
      title: "Lambda Expressions & Custom Sorting", duration: "14m",
      videoId: "D3JvDWO-BY4", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 14:10",
      takeaways: [
        "Sort complex lists of dicts or tuples by multiple keys using sorted(..., key=lambda ...).",
        "Understand when named functions beat lambdas for readability."
      ],
      lab: "Sort the staff records by department ascending and salary descending using a lambda key.",
      hint: "key=lambda r: (r['dept'], -r['sal'])",
      starterPy: "staff = [\n  {'name': 'Aarav', 'dept': 'Data', 'sal': 95000},\n  {'name': 'Diya', 'dept': 'Data', 'sal': 115000},\n  {'name': 'Kabir', 'dept': 'Eng', 'sal': 105000}\n]\n",
      starterSql: "SELECT name, department, salary FROM employees ORDER BY department ASC, salary DESC;"
    },
    {
      day: 11, month: 1, week: 2, subject: "Python Functions & Files", instructor: "Corey Schafer",
      title: "Regular Expressions (re) for Text Extraction", duration: "24m",
      videoId: "K8L6KVGG-7o", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Extract emails, invoice IDs, and phone patterns from unstructured logs using re.findall().",
        "Use raw strings r'...' to avoid backslash escaping bugs."
      ],
      lab: "Extract all invoice codes matching INV- followed by 4 digits from the log string.",
      hint: "re.findall(r'INV-\\d{4}', log_text)",
      starterPy: "import re\nlog_text = 'Paid INV-2041 (₹4500), pending INV-2049, failed INV-99, cleared INV-2055.'\n",
      starterSql: "SELECT order_id, customer_name FROM orders WHERE customer_name LIKE '%Corp%' OR customer_name LIKE '%Tech%';"
    },
    {
      day: 12, month: 1, week: 2, subject: "Python Functions & Files", instructor: "Corey Schafer",
      title: "Datetime Parsing & Timedelta Math", duration: "26m",
      videoId: "eirjjyP2qcQ", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 26:15",
      takeaways: [
        "Parse ISO strings with datetime.strptime() and format outputs with .strftime().",
        "Compute SLA durations and cohort tenure using timedelta arithmetic."
      ],
      lab: "Parse signup_date '2026-01-15' and churn_date '2026-08-22', then print total tenure in days and weeks.",
      hint: "delta = datetime.strptime(d2, '%Y-%m-%d') - datetime.strptime(d1, '%Y-%m-%d')",
      starterPy: "from datetime import datetime\nsignup_date = '2026-01-15'\nchurn_date = '2026-08-22'\n",
      starterSql: "SELECT order_id, order_date, JULIANDAY('2026-07-01') - JULIANDAY(order_date) AS days_ago FROM orders LIMIT 5;"
    },
    {
      day: 13, month: 1, week: 2, subject: "Python Functions & Files", instructor: "Corey Schafer",
      title: "Defensive Error Handling (try / except / else)", duration: "13m",
      videoId: "NIWwJbo-9_8", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 13:05",
      takeaways: [
        "Catch specific exceptions (ValueError, KeyError, ZeroDivisionError) rather than bare except.",
        "Build resilient data ingestion parsers that log bad rows without crashing."
      ],
      lab: "Convert raw_prices to floats, collecting valid numbers and counting how many corrupt entries were skipped.",
      hint: "Wrap float(item) in try / except ValueError.",
      starterPy: "raw_prices = ['450.5', 'N/A', '1290.0', 'ERR_NULL', '820.25', '--']\n",
      starterSql: "SELECT COUNT(*) AS total_rows, COUNT(manager_id) AS non_null_managers FROM employees;"
    },
    {
      day: 14, month: 1, week: 2, subject: "Python Functions & Files", instructor: "ArjanCodes",
      title: "Week 2 Capstone: JSON & CSV Ingestion Parser", duration: "18m",
      videoId: "pTT7HMqDnJw", altVideoId: "9Os0o3wzS_I", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Deserialize JSON payloads with json.loads() and validate numeric schemas.",
        "Filter completed orders and compute net revenue cleanly."
      ],
      lab: "Parse the JSON order stream, skip cancelled or invalid amounts, and print total valid revenue.",
      hint: "Use json.loads(stream) and try/except float(row['amt']).",
      starterPy: "import json\nstream = '[{\"id\":1,\"amt\":\"4500\",\"status\":\"Completed\"},{\"id\":2,\"amt\":\"1200\",\"status\":\"Cancelled\"},{\"id\":3,\"amt\":\"BAD\",\"status\":\"Completed\"},{\"id\":4,\"amt\":\"7800\",\"status\":\"Completed\"}]'\n",
      starterSql: "SELECT status, COUNT(*) AS cnt, SUM(amount) AS total FROM orders GROUP BY status;"
    },
    {
      day: 15, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "Corey Schafer",
      title: "Classes, Instances & __init__ Constructors", duration: "15m",
      videoId: "ZDa-Z5JzLYM", altVideoId: "Ej_02ICOIgs", startSec: 0, focus: "00:00 – 15:25",
      takeaways: [
        "Encapsulate dataset state and transformation methods inside clean Python classes.",
        "Understand self as the explicit instance reference."
      ],
      lab: "Create a MetricSeries class storing name and values, with mean() and max_val() methods.",
      hint: "def mean(self): return sum(self.values) / len(self.values)",
      starterPy: "class MetricSeries:\n    pass\n\ns = MetricSeries('latency_ms', [120, 98, 145, 110])\n",
      starterSql: "SELECT role, ROUND(AVG(salary), 2) AS avg_salary FROM employees GROUP BY role;"
    },
    {
      day: 16, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "Corey Schafer",
      title: "Class Variables & @classmethod Factories", duration: "16m",
      videoId: "BJ-VvGyQxho", altVideoId: "Ej_02ICOIgs", startSec: 0, focus: "00:00 – 16:10",
      takeaways: [
        "Use @classmethod as alternative constructors for parsing CSV or JSON strings.",
        "Differentiate shared class attributes from per-instance state."
      ],
      lab: "Add Order.from_csv('101,Acme,14500') classmethod returning an initialized Order instance.",
      hint: "@classmethod def from_csv(cls, line): oid, cust, amt = line.split(','); return cls(int(oid), cust, float(amt))",
      starterPy: "class Order:\n    def __init__(self, oid, customer, amount):\n        self.oid, self.customer, self.amount = oid, customer, amount\n",
      starterSql: "SELECT * FROM orders WHERE order_id = 101;"
    },
    {
      day: 17, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "Corey Schafer",
      title: "Inheritance & Specialized Connectors", duration: "19m",
      videoId: "RSl87lqOXDE", altVideoId: "Ej_02ICOIgs", startSec: 0, focus: "00:00 – 19:30",
      takeaways: [
        "Extend base classes using super().__init__() without duplicating shared logic.",
        "Override extract() methods for specialized data sources."
      ],
      lab: "Create BaseSource and subclass APISource adding an endpoint attribute and custom fetch() message.",
      hint: "super().__init__(name) inside APISource.__init__.",
      starterPy: "class BaseSource:\n    def __init__(self, name): self.name = name\n",
      starterSql: "SELECT e.name, e.department, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;"
    },
    {
      day: 18, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "Corey Schafer",
      title: "Magic Dunder Methods (__repr__, __len__)", duration: "14m",
      videoId: "3ohzBxoFHAY", altVideoId: "Ej_02ICOIgs", startSec: 0, focus: "00:00 – 14:20",
      takeaways: [
        "Implement __repr__ for unambiguous debugging logs and __len__ for len(obj) support.",
        "Make custom data containers feel native to Python."
      ],
      lab: "Implement __len__ and __repr__ on FeatureBatch so len(batch) and print(batch) work cleanly.",
      hint: "def __repr__(self): return f'FeatureBatch(n={len(self.rows)})'",
      starterPy: "class FeatureBatch:\n    def __init__(self, rows): self.rows = rows\n",
      starterSql: "SELECT COUNT(*) AS total_orders FROM orders;"
    },
    {
      day: 19, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "Corey Schafer",
      title: "Generators & Lazy Streaming Pipelines", duration: "12m",
      videoId: "bD05uGo_sVI", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 12:15",
      takeaways: [
        "Stream huge datasets row-by-row using yield with O(1) memory overhead.",
        "Chain generator expressions to filter millions of records lazily."
      ],
      lab: "Write a generator batch_iter(items, batch_size) yielding slices of size batch_size.",
      hint: "for i in range(0, len(items), batch_size): yield items[i:i+batch_size]",
      starterPy: "def batch_iter(items, batch_size):\n    pass\n\nprint(list(batch_iter(list(range(10)), 3)))\n",
      starterSql: "SELECT * FROM orders LIMIT 3 OFFSET 0;"
    },
    {
      day: 20, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "Corey Schafer",
      title: "Decorators & Function Execution Timers", duration: "21m",
      videoId: "FsAPt_9Bf3U", altVideoId: "C-gEQdGVXbk", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Wrap functions with @decorator syntax using functools.wraps to preserve metadata.",
        "Benchmark ETL step latency automatically."
      ],
      lab: "Write a @log_step decorator that prints the function name before executing it.",
      hint: "from functools import wraps",
      starterPy: "from functools import wraps\n",
      starterSql: "SELECT department, SUM(salary) AS payroll FROM employees GROUP BY department;"
    },
    {
      day: 21, month: 1, week: 3, subject: "OOP & Python Internals", instructor: "ArjanCodes",
      title: "Week 3 Capstone: Dataclasses & ETL Pipeline", duration: "19m",
      videoId: "vBH6GRJ1REM", altVideoId: "ZDa-Z5JzLYM", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Eliminate boilerplate __init__ and __repr__ code using @dataclass.",
        "Structure clean Extract -> Transform -> Load data models."
      ],
      lab: "Define a @dataclass Transaction(id: int, amount: float) with an is_high_value() method (>5000).",
      hint: "from dataclasses import dataclass",
      starterPy: "from dataclasses import dataclass\n",
      starterSql: "SELECT * FROM orders WHERE amount > 5000;"
    },
    {
      day: 22, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "Corey Schafer",
      title: "Git Version Control, Commits & Diffs", duration: "18m",
      videoId: "HVsySz-h9r4", altVideoId: "Uszj_k0DGsg", startSec: 0, focus: "00:00 – 18:30",
      takeaways: [
        "Track code history with git status, git add, git commit, and git log --oneline.",
        "Write atomic commits that isolate schema changes from feature logic."
      ],
      lab: "Simulate a Git commit log in Python storing short hash, message, and changed file count.",
      hint: "Append dictionaries to a commits list and format with f-strings.",
      starterPy: "commits = []\n",
      starterSql: "SELECT * FROM employees ORDER BY hire_date DESC;"
    },
    {
      day: 23, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "Tech With Tim",
      title: "Git Branching, PRs & Merge Conflict Logic", duration: "16m",
      videoId: "e2IbNHi4uCI", altVideoId: "HVsySz-h9r4", startSec: 0, focus: "00:00 – 16:00",
      takeaways: [
        "Isolate experiments on feature branches before merging into main.",
        "Detect conflicting hyperparameter keys between two config dictionaries."
      ],
      lab: "Compare main_cfg and exp_cfg dicts and print any keys whose values differ.",
      hint: "for k in main_cfg.keys() & exp_cfg.keys(): if main_cfg[k] != exp_cfg[k]: ...",
      starterPy: "main_cfg = {'lr': 0.01, 'batch': 32, 'epochs': 10}\nexp_cfg = {'lr': 0.003, 'batch': 32, 'epochs': 20}\n",
      starterSql: "SELECT region, COUNT(*) AS cnt FROM orders GROUP BY region;"
    },
    {
      day: 24, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "Corey Schafer",
      title: "Virtual Environments & Dependency Pinning", duration: "15m",
      videoId: "APOPm01BVrk", altVideoId: "HVsySz-h9r4", startSec: 0, focus: "00:00 – 15:00",
      takeaways: [
        "Isolate project packages using venv and lock versions in requirements.txt.",
        "Prevent 'works on my machine' dependency conflicts."
      ],
      lab: "Parse a requirements.txt string into a {package_name: version} dictionary.",
      hint: "Split lines with .splitlines() and split each line on '=='.",
      starterPy: "req_txt = 'numpy==1.26.4\\npandas==2.2.2\\nscikit-learn==1.5.0\\nscipy==1.13.1'\n",
      starterSql: "SELECT role, COUNT(*) AS cnt FROM employees GROUP BY role;"
    },
    {
      day: 25, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "Corey Schafer",
      title: "Unit Testing Data Pipelines (unittest / assert)", duration: "25m",
      videoId: "6tNS--WetLI", altVideoId: "pTT7HMqDnJw", startSec: 0, focus: "00:00 – 25:10",
      takeaways: [
        "Guard data transformations with automated assertions for nulls, bounds, and schemas.",
        "Test edge cases like empty inputs and negative values."
      ],
      lab: "Write 3 assert checks verifying clip_values() bounds numbers strictly within [low, high].",
      hint: "assert clip_values([-5, 50, 150], 0, 100) == [0, 50, 100]",
      starterPy: "def clip_values(vals, low, high):\n    return [max(low, min(high, v)) for v in vals]\n\n# Add assertions below\n",
      starterSql: "SELECT MIN(amount) AS min_amt, MAX(amount) AS max_amt FROM orders;"
    },
    {
      day: 26, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "ArjanCodes",
      title: "Static Type Hints & Self-Documenting Code", duration: "17m",
      videoId: "QORvB-_uWR0", altVideoId: "pTT7HMqDnJw", startSec: 0, focus: "00:00 – 17:15",
      takeaways: [
        "Annotate function inputs and return types (list[float], dict[str, int]) for IDE safety.",
        "Catch schema mismatches before runtime."
      ],
      lab: "Implement a typed function min_max_scale(vals: list[float]) -> list[float] scaling values to [0, 1].",
      hint: "(v - lo) / (hi - lo)",
      starterPy: "def min_max_scale(vals: list[float]) -> list[float]:\n    pass\n\nprint(min_max_scale([10.0, 20.0, 30.0, 50.0]))\n",
      starterSql: "SELECT order_id, amount FROM orders LIMIT 5;"
    },
    {
      day: 27, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "Corey Schafer",
      title: "Working with CSV & Nested API Payloads", duration: "16m",
      videoId: "q5uM4VKywbA", altVideoId: "9Os0o3wzS_I", startSec: 0, focus: "00:00 – 16:00",
      takeaways: [
        "Parse CSV text in memory using io.StringIO and csv.DictReader.",
        "Flatten nested JSON API dictionaries into flat tabular rows."
      ],
      lab: "Use csv.DictReader on csv_data to compute total Completed sales.",
      hint: "import io, csv; reader = csv.DictReader(io.StringIO(csv_data))",
      starterPy: "import io, csv\ncsv_data = 'id,region,amt,status\\n1,West,4500,Completed\\n2,East,2100,Pending\\n3,West,6200,Completed'\n",
      starterSql: "SELECT region, SUM(amount) AS rev FROM orders WHERE status='Completed' GROUP BY region;"
    },
    {
      day: 28, month: 1, week: 4, subject: "Git, Testing & Clean Code", instructor: "ArjanCodes",
      title: "Month 1 Capstone: End-to-End Ingestion Engine", duration: "22m",
      videoId: "84_82699238", altVideoId: "pTT7HMqDnJw", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Combine dataclasses, validation, deduplication, and aggregation into one clean module.",
        "Deliver production-grade KPI summaries from raw messy records."
      ],
      lab: "Ingest raw CSV rows, deduplicate by order_id, validate positive amounts, and print regional revenue.",
      hint: "Track seen_ids = set() while iterating over rows.",
      starterPy: "raw_rows = [\n  '101,West,4500',\n  '102,South,3200',\n  '101,West,4500',\n  '103,West,-500',\n  '104,South,6800'\n]\n",
      starterSql: "SELECT region, COUNT(*) AS valid_orders, SUM(amount) AS rev FROM orders WHERE status='Completed' GROUP BY region;"
    },

    // ==================== MONTH 2: SQL ANALYTICS MASTERY (DAYS 29–56) ====================
    {
      day: 29, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Alex The Analyst",
      title: "SELECT, WHERE, IN, BETWEEN & LIKE", duration: "19m",
      videoId: "RSl8fqNy3vY", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 19:20",
      takeaways: [
        "Filter rows cleanly using IN lists, BETWEEN ranges, and wildcard LIKE patterns.",
        "Understand SQL logical evaluation order (FROM -> WHERE -> SELECT)."
      ],
      lab: "Query all Completed orders in 'West' or 'South' with amount between 5000 and 15000.",
      hint: "WHERE status = 'Completed' AND region IN ('West', 'South') AND amount BETWEEN 5000 AND 15000",
      starterPy: "print('Switch to the SQLite Analytics tab to run today\\'s SQL query!')",
      starterSql: "SELECT order_id, customer_name, region, amount\nFROM orders\nWHERE status = 'Completed'\n  AND region IN ('West', 'South')\n  AND amount BETWEEN 5000 AND 15000;"
    },
    {
      day: 30, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Luke Barousse",
      title: "ORDER BY, LIMIT & Distinct Cardinality", duration: "18m",
      videoId: "7mz73uXD9DA", altVideoId: "HXV3zeQKqGY", startSec: 1800, focus: "30:00 – 48:00",
      takeaways: [
        "Rank top records using multi-column ORDER BY and LIMIT.",
        "Measure column cardinality with COUNT(DISTINCT col)."
      ],
      lab: "Retrieve the top 5 highest-amount orders with customer_name, category, and order_date.",
      hint: "ORDER BY amount DESC LIMIT 5",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT order_id, customer_name, category, amount, order_date\nFROM orders\nORDER BY amount DESC\nLIMIT 5;"
    },
    {
      day: 31, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Alex The Analyst",
      title: "Aggregations: COUNT, SUM, AVG, MIN & MAX", duration: "18m",
      videoId: "Ofktsne-utM", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 18:15",
      takeaways: [
        "Summarize business KPIs across thousands of rows in a single pass.",
        "Remember that aggregate functions ignore NULL values automatically."
      ],
      lab: "Compute total Completed orders, unique customers, total revenue, and rounded average order value.",
      hint: "ROUND(AVG(amount), 2) AS aov",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT\n  COUNT(*) AS completed_orders,\n  COUNT(DISTINCT customer_name) AS unique_customers,\n  SUM(amount) AS total_revenue,\n  ROUND(AVG(amount), 2) AS avg_order_value\nFROM orders\nWHERE status = 'Completed';"
    },
    {
      day: 32, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Data with Baraa",
      title: "GROUP BY & HAVING Post-Aggregation Filters", duration: "21m",
      videoId: "q_JsgpiuY98", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 21:10",
      takeaways: [
        "Filter raw rows before grouping with WHERE; filter aggregated groups with HAVING.",
        "Include every non-aggregated SELECT column inside GROUP BY."
      ],
      lab: "Find customers with >= 2 Completed orders whose total Completed spend exceeds ₹15,000.",
      hint: "HAVING COUNT(*) >= 2 AND SUM(amount) > 15000",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT customer_name, COUNT(*) AS order_cnt, SUM(amount) AS total_spend\nFROM orders\nWHERE status = 'Completed'\nGROUP BY customer_name\nHAVING COUNT(*) >= 2 AND SUM(amount) > 15000\nORDER BY total_spend DESC;"
    },
    {
      day: 33, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Luke Barousse",
      title: "CASE WHEN Conditional Logic & Bucketing", duration: "19m",
      videoId: "7mz73uXD9DA", altVideoId: "HXV3zeQKqGY", startSec: 5400, focus: "01:30:00 – 01:49:00",
      takeaways: [
        "Create custom customer segments and conditional KPIs directly inside SQL queries.",
        "Combine CASE WHEN with SUM() to build conditional pivot metrics."
      ],
      lab: "Classify every order as 'Enterprise' (>=10000), 'Mid-Market' (5000-9999), or 'SMB' (<5000) and count each tier.",
      hint: "Group by the CASE WHEN expression.",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT\n  CASE\n    WHEN amount >= 10000 THEN 'Enterprise'\n    WHEN amount >= 5000 THEN 'Mid-Market'\n    ELSE 'SMB'\n  END AS deal_tier,\n  COUNT(*) AS deal_count,\n  SUM(amount) AS tier_revenue\nFROM orders\nGROUP BY deal_tier\nORDER BY tier_revenue DESC;"
    },
    {
      day: 34, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Data with Baraa",
      title: "NULL Semantics, IS NULL & COALESCE", duration: "16m",
      videoId: "w0b2f7S0_z0", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 16:00",
      takeaways: [
        "Never test = NULL; always use IS NULL or IS NOT NULL.",
        "Provide clean fallback labels in reports using COALESCE(col, fallback)."
      ],
      lab: "List all employees and replace NULL manager_id values with 'Department Lead'.",
      hint: "COALESCE(CAST(manager_id AS TEXT), 'Department Lead')",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT emp_id, name, department,\n  COALESCE(CAST(manager_id AS TEXT), 'Department Lead') AS manager_ref\nFROM employees;"
    },
    {
      day: 35, month: 2, week: 5, subject: "SQL Fundamentals", instructor: "Alex The Analyst",
      title: "Week 5 Capstone: Regional Revenue Scorecard", duration: "24m",
      videoId: "RSl8fqNy3vY", altVideoId: "HXV3zeQKqGY", startSec: 600, focus: "10:00 – 34:00",
      takeaways: [
        "Build executive multi-metric scorecards using conditional SUM(CASE WHEN ...).",
        "Calculate order completion rate % per region in a single query."
      ],
      lab: "Show Completed revenue, Pending/Cancelled revenue, and completion rate % for every region.",
      hint: "ROUND(SUM(CASE WHEN status='Completed' THEN 1.0 ELSE 0 END) * 100 / COUNT(*), 1)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT region,\n  SUM(CASE WHEN status = 'Completed' THEN amount ELSE 0 END) AS completed_rev,\n  SUM(CASE WHEN status != 'Completed' THEN amount ELSE 0 END) AS at_risk_rev,\n  ROUND(SUM(CASE WHEN status = 'Completed' THEN 1.0 ELSE 0 END) * 100 / COUNT(*), 1) AS completion_pct\nFROM orders\nGROUP BY region\nORDER BY completed_rev DESC;"
    },
    {
      day: 36, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Alex The Analyst",
      title: "INNER JOIN Multi-Table Revenue Attribution", duration: "20m",
      videoId: "9yeOJ0ZMUYw", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Link fact tables (orders) to dimension tables (employees) via primary/foreign keys.",
        "Always qualify column names with table aliases (o.amount, e.name)."
      ],
      lab: "Join orders and employees to compute total Completed revenue and deal count per sales rep.",
      hint: "JOIN employees e ON o.emp_id = e.emp_id",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT e.name, e.role, COUNT(o.order_id) AS deals, SUM(o.amount) AS revenue\nFROM orders o\nJOIN employees e ON o.emp_id = e.emp_id\nWHERE o.status = 'Completed'\nGROUP BY e.name, e.role\nORDER BY revenue DESC;"
    },
    {
      day: 37, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Data with Baraa",
      title: "LEFT JOIN & Anti-Join Orphan Detection", duration: "19m",
      videoId: "2HVMiPPuPIM", altVideoId: "9yeOJ0ZMUYw", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Preserve all rows from the left table even when no matching right-table row exists.",
        "Use WHERE right.id IS NULL (Anti-Join) to find inactive users or zero-sale staff."
      ],
      lab: "Find all employees in the company who have zero orders linked to their emp_id.",
      hint: "LEFT JOIN orders o ON e.emp_id = o.emp_id WHERE o.order_id IS NULL",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT e.emp_id, e.name, e.department, e.role\nFROM employees e\nLEFT JOIN orders o ON e.emp_id = o.emp_id\nWHERE o.order_id IS NULL;"
    },
    {
      day: 38, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Luke Barousse",
      title: "Self-Joins & Organizational Hierarchies", duration: "17m",
      videoId: "7mz73uXD9DA", altVideoId: "9yeOJ0ZMUYw", startSec: 9000, focus: "02:30:00 – 02:47:00",
      takeaways: [
        "Join a table to itself using distinct aliases (e for employee, m for manager).",
        "Preserve top-level executives with LEFT JOIN + COALESCE."
      ],
      lab: "Display every employee's name, department, and their direct manager's name.",
      hint: "LEFT JOIN employees m ON e.manager_id = m.emp_id",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT e.name AS employee, e.department, COALESCE(m.name, 'Executive Lead') AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.emp_id;"
    },
    {
      day: 39, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Alex The Analyst",
      title: "UNION vs UNION ALL Set Operations", duration: "12m",
      videoId: "TWU353X2m6k", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 12:15",
      takeaways: [
        "Stack query results vertically when column counts and types align.",
        "Prefer UNION ALL when duplicates are impossible or desired (avoids expensive sort deduplication)."
      ],
      lab: "Combine staff earning > ₹1,10,000 and reps who closed single deals > ₹12,000 into one tagged list.",
      hint: "SELECT name, 'High Base' AS tag FROM employees WHERE salary > 110000 UNION ALL ...",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT name, 'High Salary' AS badge FROM employees WHERE salary > 110000\nUNION\nSELECT DISTINCT e.name, 'Big Deal Closer' AS badge FROM employees e JOIN orders o ON e.emp_id = o.emp_id WHERE o.amount > 12000;"
    },
    {
      day: 40, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Data with Baraa",
      title: "Correlated & Non-Correlated Subqueries", duration: "20m",
      videoId: "nJzgYpZU7hI", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Compare individual rows against dynamic group benchmarks using correlated subqueries.",
        "Know when to refactor nested subqueries into readable CTEs."
      ],
      lab: "Find all employees earning strictly more than the average salary of their own department.",
      hint: "WHERE e.salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e.department)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT name, department, salary\nFROM employees e\nWHERE salary > (\n  SELECT AVG(salary) FROM employees e2 WHERE e2.department = e.department\n);"
    },
    {
      day: 41, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Luke Barousse",
      title: "Date Extraction & Monthly Revenue Trends", duration: "18m",
      videoId: "7mz73uXD9DA", altVideoId: "HXV3zeQKqGY", startSec: 10800, focus: "03:00:00 – 03:18:00",
      takeaways: [
        "Truncate ISO date strings to YYYY-MM using SUBSTR(order_date, 1, 7) in SQLite.",
        "Track monthly order volume alongside revenue."
      ],
      lab: "Group Completed orders by YYYY-MM month and show order count and monthly revenue.",
      hint: "SUBSTR(order_date, 1, 7) AS ym",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT SUBSTR(order_date, 1, 7) AS ym, COUNT(*) AS orders, SUM(amount) AS monthly_rev\nFROM orders\nWHERE status = 'Completed'\nGROUP BY ym\nORDER BY ym;"
    },
    {
      day: 42, month: 2, week: 6, subject: "Relational Joins & Modeling", instructor: "Alex The Analyst",
      title: "Week 6 Capstone: Sales Commission Leaderboard", duration: "24m",
      videoId: "9yeOJ0ZMUYw", altVideoId: "HXV3zeQKqGY", startSec: 300, focus: "05:00 – 29:00",
      takeaways: [
        "Combine multi-table joins, conditional filtering, and arithmetic KPIs.",
        "Calculate total compensation (base salary + 8% sales commission)."
      ],
      lab: "Join employees & Completed orders to compute each Sales rep's base salary, 8% commission, and total payout.",
      hint: "e.salary + ROUND(COALESCE(SUM(o.amount), 0) * 0.08, 2)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT e.name, e.salary AS base_salary,\n  ROUND(COALESCE(SUM(o.amount), 0) * 0.08, 2) AS commission,\n  e.salary + ROUND(COALESCE(SUM(o.amount), 0) * 0.08, 2) AS total_comp\nFROM employees e\nLEFT JOIN orders o ON e.emp_id = o.emp_id AND o.status = 'Completed'\nWHERE e.department = 'Sales'\nGROUP BY e.emp_id, e.name, e.salary\nORDER BY total_comp DESC;"
    },
    {
      day: 43, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Alex The Analyst",
      title: "Common Table Expressions (WITH CTEs)", duration: "19m",
      videoId: "K1WeoBJOxis", altVideoId: "Ww71knvhQ-s", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Break complex multi-stage SQL pipelines into named, readable CTE blocks.",
        "Reuse aggregated CTE results across downstream joins and window calculations."
      ],
      lab: "Use a CTE to compute monthly Completed revenue, then select months exceeding ₹15,000.",
      hint: "WITH monthly_sales AS (SELECT ... ) SELECT * FROM monthly_sales WHERE rev > 15000;",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "WITH monthly_sales AS (\n  SELECT SUBSTR(order_date, 1, 7) AS ym, SUM(amount) AS rev\n  FROM orders\n  WHERE status = 'Completed'\n  GROUP BY ym\n)\nSELECT ym, rev FROM monthly_sales WHERE rev > 15000 ORDER BY ym;"
    },
    {
      day: 44, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Data with Baraa",
      title: "ROW_NUMBER, RANK & DENSE_RANK", duration: "22m",
      videoId: "Ww71knvhQ-s", altVideoId: "K1WeoBJOxis", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Understand the difference between RANK() (skips ties) and DENSE_RANK() (no gaps).",
        "Partition rankings independently per department or region with PARTITION BY."
      ],
      lab: "Rank employees by salary within each department using DENSE_RANK().",
      hint: "DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT name, department, salary,\n  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank\nFROM employees;"
    },
    {
      day: 45, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Luke Barousse",
      title: "Running Totals & Cumulative Share", duration: "20m",
      videoId: "7mz73uXD9DA", altVideoId: "Ww71knvhQ-s", startSec: 12600, focus: "03:30:00 – 03:50:00",
      takeaways: [
        "Compute cumulative YTD revenue using SUM(amount) OVER (ORDER BY order_date, order_id).",
        "Calculate each order's % contribution to total revenue with SUM(amount) OVER ()."
      ],
      lab: "Display each Completed order with its cumulative running revenue total over time.",
      hint: "SUM(amount) OVER (ORDER BY order_date, order_id)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT order_date, customer_name, amount,\n  SUM(amount) OVER (ORDER BY order_date, order_id) AS cumulative_rev\nFROM orders\nWHERE status = 'Completed';"
    },
    {
      day: 46, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Data with Baraa",
      title: "LAG & LEAD for Month-over-Month Growth", duration: "23m",
      videoId: "5-1_X_0-5_8", altVideoId: "Ww71knvhQ-s", startSec: 0, focus: "00:00 – 23:10",
      takeaways: [
        "Access prior-period rows without self-joins using LAG(col, 1) OVER (ORDER BY period).",
        "Compute exact Month-over-Month (MoM) % growth."
      ],
      lab: "Calculate monthly Completed revenue, previous month revenue via LAG(), and MoM % change.",
      hint: "ROUND((rev - prev_rev) * 100.0 / prev_rev, 1)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "WITH m AS (\n  SELECT SUBSTR(order_date, 1, 7) AS ym, SUM(amount) AS rev\n  FROM orders WHERE status = 'Completed' GROUP BY ym\n)\nSELECT ym, rev,\n  LAG(rev) OVER (ORDER BY ym) AS prev_rev,\n  ROUND((rev - LAG(rev) OVER (ORDER BY ym)) * 100.0 / LAG(rev) OVER (ORDER BY ym), 1) AS mom_pct\nFROM m;"
    },
    {
      day: 47, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Alex The Analyst",
      title: "Rolling Moving Averages (ROWS BETWEEN)", duration: "18m",
      videoId: "Ww71knvhQ-s", altVideoId: "K1WeoBJOxis", startSec: 600, focus: "10:00 – 28:00",
      takeaways: [
        "Smooth noisy time-series metrics with sliding window frames (ROWS BETWEEN 2 PRECEDING AND CURRENT ROW).",
        "Distinguish physical ROWS frames from logical RANGE frames."
      ],
      lab: "Compute a 3-order rolling average of order amount across Completed orders.",
      hint: "AVG(amount) OVER (ORDER BY order_date, order_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT order_id, order_date, amount,\n  ROUND(AVG(amount) OVER (ORDER BY order_date, order_id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS rolling_3_avg\nFROM orders\nWHERE status = 'Completed';"
    },
    {
      day: 48, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Data with Baraa",
      title: "Top-N Per Group Pattern (CTE + ROW_NUMBER)", duration: "17m",
      videoId: "Ww71knvhQ-s", altVideoId: "K1WeoBJOxis", startSec: 900, focus: "15:00 – 32:00",
      takeaways: [
        "Master the #1 SQL interview pattern: partition + ROW_NUMBER() inside a CTE, then filter WHERE rn = 1.",
        "Retrieve top deals or highest-paid employees per group cleanly."
      ],
      lab: "Find the single largest Completed order for each region.",
      hint: "ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) AS rn",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "WITH ranked_orders AS (\n  SELECT region, customer_name, amount, order_date,\n    ROW_NUMBER() OVER (PARTITION BY region ORDER BY amount DESC) AS rn\n  FROM orders\n  WHERE status = 'Completed'\n)\nSELECT region, customer_name, amount, order_date\nFROM ranked_orders\nWHERE rn = 1;"
    },
    {
      day: 49, month: 2, week: 7, subject: "Window Functions & CTEs", instructor: "Luke Barousse",
      title: "Week 7 Capstone: Customer Repeat Interval Analysis", duration: "25m",
      videoId: "7mz73uXD9DA", altVideoId: "Ww71knvhQ-s", startSec: 14000, focus: "03:53:00 – 04:18:00",
      takeaways: [
        "Partition LAG() by customer_name to track inter-purchase intervals.",
        "Measure days elapsed between consecutive customer orders using JULIANDAY()."
      ],
      lab: "For customers with multiple Completed orders, calculate days elapsed since their previous order.",
      hint: "ROUND(JULIANDAY(order_date) - JULIANDAY(LAG(order_date) OVER (PARTITION BY customer_name ORDER BY order_date)), 0)",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "WITH cust_seq AS (\n  SELECT customer_name, order_date, amount,\n    LAG(order_date) OVER (PARTITION BY customer_name ORDER BY order_date) AS prev_date\n  FROM orders WHERE status = 'Completed'\n)\nSELECT customer_name, prev_date, order_date,\n  ROUND(JULIANDAY(order_date) - JULIANDAY(prev_date), 0) AS days_between_orders\nFROM cust_seq\nWHERE prev_date IS NOT NULL;"
    },
    {
      day: 50, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Hussein Nasser",
      title: "B-Tree Indexes & EXPLAIN QUERY PLAN", duration: "19m",
      videoId: "HubezKbFL7E", altVideoId: "2-1XQHAgDsM", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Inspect query execution plans to spot full table scans vs index lookups.",
        "Understand how composite indexes speed up WHERE + ORDER BY clauses."
      ],
      lab: "Run EXPLAIN QUERY PLAN on a filtered orders query to inspect SQLite's scan strategy.",
      hint: "Prefix your SELECT statement with EXPLAIN QUERY PLAN.",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "EXPLAIN QUERY PLAN\nSELECT customer_name, SUM(amount)\nFROM orders\nWHERE region = 'West' AND status = 'Completed'\nGROUP BY customer_name;"
    },
    {
      day: 51, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Alex The Analyst",
      title: "SQL Data Cleaning (TRIM, UPPER, REPLACE)", duration: "16m",
      videoId: "2-1XQHAgDsM", altVideoId: "HXV3zeQKqGY", startSec: 0, focus: "00:00 – 16:30",
      takeaways: [
        "Standardize text keys and generate clean URL/account slugs directly in SQL.",
        "Prevent join mismatches caused by trailing spaces or inconsistent casing."
      ],
      lab: "Generate clean uppercase account codes (e.g., 'ACME_CORP') for every distinct customer.",
      hint: "UPPER(REPLACE(TRIM(customer_name), ' ', '_'))",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT DISTINCT customer_name,\n  UPPER(REPLACE(TRIM(customer_name), ' ', '_')) AS account_code\nFROM orders\nORDER BY account_code;"
    },
    {
      day: 52, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Data with Baraa",
      title: "Matrix Pivoting with Conditional Aggregation", duration: "20m",
      videoId: "q_JsgpiuY98", altVideoId: "2-1XQHAgDsM", startSec: 600, focus: "10:00 – 30:00",
      takeaways: [
        "Transform long transaction logs into cross-tabulated BI matrices using SUM(CASE WHEN ...).",
        "Compare product category performance side-by-side across regions."
      ],
      lab: "Build a Region x Category Completed revenue pivot matrix for Cloud, Software, and Electronics.",
      hint: "One SUM(CASE WHEN category = '...' THEN amount ELSE 0 END) per category column.",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT region,\n  SUM(CASE WHEN category = 'Cloud' THEN amount ELSE 0 END) AS cloud_rev,\n  SUM(CASE WHEN category = 'Software' THEN amount ELSE 0 END) AS software_rev,\n  SUM(CASE WHEN category = 'Electronics' THEN amount ELSE 0 END) AS electronics_rev\nFROM orders\nWHERE status = 'Completed'\nGROUP BY region;"
    },
    {
      day: 53, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Alex The Analyst",
      title: "RFM (Recency, Frequency, Monetary) Scoring", duration: "23m",
      videoId: "2-1XQHAgDsM", altVideoId: "HXV3zeQKqGY", startSec: 600, focus: "10:00 – 33:00",
      takeaways: [
        "Quantify customer value using Recency (days since last order), Frequency, and Monetary LTV.",
        "Rank customers into actionable VIP vs at-risk segments."
      ],
      lab: "Compute days_since_last_order (relative to '2026-06-30'), order frequency, and total LTV per customer.",
      hint: "ROUND(JULIANDAY('2026-06-30') - JULIANDAY(MAX(order_date)), 0) AS recency_days",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT customer_name,\n  ROUND(JULIANDAY('2026-06-30') - JULIANDAY(MAX(order_date)), 0) AS recency_days,\n  COUNT(*) AS frequency,\n  SUM(amount) AS monetary_ltv\nFROM orders\nWHERE status = 'Completed'\nGROUP BY customer_name\nORDER BY monetary_ltv DESC;"
    },
    {
      day: 54, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Luke Barousse",
      title: "Churn Risk Flagging & Dormant Accounts", duration: "20m",
      videoId: "7mz73uXD9DA", altVideoId: "2-1XQHAgDsM", startSec: 15200, focus: "04:13:00 – 04:33:00",
      takeaways: [
        "Identify accounts that have gone silent past a 75-day inactivity threshold.",
        "Prioritize outreach by historical lifetime spend."
      ],
      lab: "Flag Completed customers whose most recent order was before '2026-04-15' as 'Churn Risk'.",
      hint: "HAVING MAX(order_date) < '2026-04-15'",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "SELECT customer_name, MAX(order_date) AS last_order, SUM(amount) AS ltv, 'Churn Risk' AS alert_status\nFROM orders\nWHERE status = 'Completed'\nGROUP BY customer_name\nHAVING MAX(order_date) < '2026-04-15'\nORDER BY ltv DESC;"
    },
    {
      day: 55, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Data with Baraa",
      title: "Semantic Views & Reusable Metric Layers", duration: "16m",
      videoId: "w0b2f7S0_z0", altVideoId: "2-1XQHAgDsM", startSec: 600, focus: "10:00 – 26:00",
      takeaways: [
        "Encapsulate business definitions (e.g., valid Completed sales) inside Views so teams share one source of truth.",
        "Query views just like standard relational tables."
      ],
      lab: "Create a TEMP VIEW v_completed_deals joining orders & employees, then aggregate revenue by department.",
      hint: "CREATE TEMP VIEW v_completed_deals AS SELECT ...",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "CREATE TEMP VIEW v_completed_deals AS\nSELECT o.order_id, o.amount, o.region, e.department, e.name AS rep_name\nFROM orders o\nJOIN employees e ON o.emp_id = e.emp_id\nWHERE o.status = 'Completed';\n\nSELECT department, COUNT(*) AS deals, SUM(amount) AS revenue\nFROM v_completed_deals\nGROUP BY department;"
    },
    {
      day: 56, month: 2, week: 8, subject: "SQL Optimization & BI Case Study", instructor: "Alex The Analyst",
      title: "Month 2 Capstone: Executive Share-of-Revenue Audit", duration: "28m",
      videoId: "Ww71knvhQ-s", altVideoId: "K1WeoBJOxis", startSec: 1200, focus: "20:00 – 48:00",
      takeaways: [
        "Combine CTEs, multi-table joins, and window SUM() OVER() to compute exact % revenue share.",
        "Deliver an executive-ready department attribution table."
      ],
      lab: "Compute each department's Completed revenue, deal count, and % share of total company revenue.",
      hint: "ROUND(rev * 100.0 / SUM(rev) OVER (), 1) AS share_pct",
      starterPy: "print('Switch to SQLite Analytics tab!')",
      starterSql: "WITH dept_perf AS (\n  SELECT e.department, COUNT(o.order_id) AS deals, SUM(o.amount) AS rev\n  FROM orders o\n  JOIN employees e ON o.emp_id = e.emp_id\n  WHERE o.status = 'Completed'\n  GROUP BY e.department\n)\nSELECT department, deals, rev,\n  ROUND(rev * 100.0 / SUM(rev) OVER (), 1) AS revenue_share_pct\nFROM dept_perf\nORDER BY rev DESC;"
    },

    // ==================== MONTH 3: NUMPY & PANDAS DATA WRANGLING (DAYS 57–84) ====================
    {
      day: 57, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "Keith Galli",
      title: "NumPy Arrays, Shapes, Dtypes & Reshaping", duration: "19m",
      videoId: "QUT1VHiLmmI", altVideoId: "8Y0qQEh7dJg", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Understand contiguous typed memory buffers vs Python object lists (10x–50x faster).",
        "Reshape 1D arrays into 2D feature matrices with .reshape(rows, cols)."
      ],
      lab: "Create a 1D array of 1..12, reshape it to (4, 3), and print its shape, ndim, and dtype.",
      hint: "arr = np.arange(1, 13).reshape(4, 3)",
      starterPy: "import numpy as np\narr = np.arange(1, 13).reshape(4, 3)\nprint(arr)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 58, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "Keith Galli",
      title: "2D Slicing & Boolean Mask Filtering", duration: "20m",
      videoId: "QUT1VHiLmmI", altVideoId: "8Y0qQEh7dJg", startSec: 1140, focus: "19:00 – 39:00",
      takeaways: [
        "Extract submatrices with [row_slice, col_slice] syntax.",
        "Filter and cap outliers in-place using boolean masks (arr[arr > cap] = cap)."
      ],
      lab: "Filter sensor readings >= 70.0 and clip any reading above 95.0 down to 95.0.",
      hint: "readings = np.clip(readings, 0, 95.0)",
      starterPy: "import numpy as np\nreadings = np.array([62.5, 78.1, 99.4, 81.0, 54.2, 96.8, 73.4])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 59, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "Codebasics (Dhaval Patel)",
      title: "Broadcasting & Vectorized Z-Score Scaling", duration: "17m",
      videoId: "Rbh1wrGzQZ0", altVideoId: "QUT1VHiLmmI", startSec: 0, focus: "00:00 – 17:15",
      takeaways: [
        "Apply scalar and 1D operations across entire arrays without writing Python for-loops.",
        "Standardize features to zero mean and unit variance in one vectorized line."
      ],
      lab: "Compute the Z-score standardized array (x - mean) / std and verify its new mean is ~0.",
      hint: "z = (x - x.mean()) / x.std()",
      starterPy: "import numpy as np\nx = np.array([12.0, 18.0, 24.0, 30.0, 36.0])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 60, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "Keith Galli",
      title: "Axis Reductions (axis=0 vs axis=1)", duration: "16m",
      videoId: "QUT1VHiLmmI", altVideoId: "8Y0qQEh7dJg", startSec: 2340, focus: "39:00 – 55:00",
      takeaways: [
        "Collapse rows (axis=0) for column feature stats; collapse columns (axis=1) for per-sample totals.",
        "Combine np.argmax(axis=1) to pick top predicted classes."
      ],
      lab: "Given a 3x4 quarterly sales matrix (3 reps x 4 quarters), compute each rep's annual total and each quarter's average.",
      hint: "rep_totals = sales.sum(axis=1); q_avgs = sales.mean(axis=0)",
      starterPy: "import numpy as np\nsales = np.array([[120, 135, 140, 160], [95, 110, 105, 130], [150, 165, 170, 190]])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 61, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "3Blue1Brown",
      title: "Linear Algebra, Dot Products & Matrix Multiplication", duration: "14m",
      videoId: "XkY2DOUCWMU", altVideoId: "QUT1VHiLmmI", startSec: 0, focus: "00:00 – 14:15",
      takeaways: [
        "Visualize matrix-vector multiplication as linear transformations of space.",
        "Compute batch linear model predictions y_hat = X @ w + b cleanly."
      ],
      lab: "Predict prices for 3 houses using X @ weights + bias.",
      hint: "preds = X @ weights + bias",
      starterPy: "import numpy as np\nX = np.array([[1000, 2], [1500, 3], [2200, 4]])\nweights = np.array([140.0, 12000.0])\nbias = 30000.0\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 62, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "StatQuest (Josh Starmer)",
      title: "Random Generators & Monte Carlo Simulation", duration: "18m",
      videoId: "KzHJXdFJSIQ", altVideoId: "QUT1VHiLmmI", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Use reproducible seeded generators np.random.default_rng(42) for scientific experiments.",
        "Estimate complex probabilities via vectorized Monte Carlo trials."
      ],
      lab: "Simulate 50,000 pairs of 6-sided dice rolls and estimate the probability that their sum equals 7.",
      hint: "d1 = rng.integers(1, 7, size=50000); d2 = rng.integers(1, 7, size=50000)",
      starterPy: "import numpy as np\nrng = np.random.default_rng(42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 63, month: 3, week: 9, subject: "NumPy Vectorization", instructor: "Codebasics (Dhaval Patel)",
      title: "Week 9 Capstone: Vectorized Portfolio Risk Engine", duration: "22m",
      videoId: "Rbh1wrGzQZ0", altVideoId: "QUT1VHiLmmI", startSec: 600, focus: "10:00 – 32:00",
      takeaways: [
        "Compute annualized return, volatility, and Sharpe ratio using vectorized NumPy reductions.",
        "Avoid slow loop-based financial calculations."
      ],
      lab: "From daily_returns, compute annualized volatility (std * sqrt(252)) and Sharpe ratio (mean*252 / ann_vol).",
      hint: "ann_vol = daily_returns.std(ddof=1) * np.sqrt(252)",
      starterPy: "import numpy as np\ndaily_returns = np.array([0.012, -0.004, 0.009, 0.014, -0.007, 0.006, 0.011, -0.002])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 64, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Data School (Kevin Markham)",
      title: "DataFrames, Series & Schema Inspection", duration: "20m",
      videoId: "yzIMircGU5I", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Inspect tabular datasets immediately using .shape, .dtypes, .head(), and .describe().",
        "Understand single-bracket Series vs double-bracket DataFrame selection."
      ],
      lab: "Build a product DataFrame, add a 'revenue' column (price * units), and print .describe().",
      hint: "df['revenue'] = df['price'] * df['units']",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'sku': ['A1','B2','C3','D4'], 'price': [450, 1200, 800, 1500], 'units': [30, 12, 25, 8]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 65, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Data School (Kevin Markham)",
      title: "loc vs iloc & Multi-Condition Filtering", duration: "21m",
      videoId: "xvpNA7bC8cs", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 21:15",
      takeaways: [
        "Use .loc[row_mask, col_list] for label-based filtering and safe assignment (avoid SettingWithCopyWarning).",
        "Combine boolean masks with & (AND), | (OR), and ~ (NOT) wrapped in parentheses."
      ],
      lab: "Select ['customer', 'spend'] for rows where region == 'West' and spend >= 6000.",
      hint: "df.loc[(df['region'] == 'West') & (df['spend'] >= 6000), ['customer', 'spend']]",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'customer':['Acme','Zenith','Nova','Pulse'], 'region':['West','South','West','West'], 'spend':[14500,6200,4800,9600]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 66, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Corey Schafer",
      title: "Sorting, Ranking & Derived Profit Columns", duration: "18m",
      videoId: "T5pRlIbr6gg", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Sort DataFrames by multiple columns with .sort_values(by=[...], ascending=[...]).",
        "Compute rank percentiles with .rank(pct=True)."
      ],
      lab: "Calculate gross_margin_pct = ((rev - cost) / rev) * 100 and sort descending.",
      hint: "df.sort_values('gross_margin_pct', ascending=False)",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'item':['Cloud','SaaS','Hardware'], 'rev':[15000, 9000, 12000], 'cost':[4500, 1800, 9600]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 67, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Data School (Kevin Markham)",
      title: "Handling Missing Values (isna, fillna, dropna)", duration: "19m",
      videoId: "fCMrO_VzeL8", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 19:20",
      takeaways: [
        "Audit missingness rates per column with df.isna().mean() * 100.",
        "Impute skewed numeric columns with median and categoricals with mode or 'Unknown'."
      ],
      lab: "Impute missing 'salary' values with the column median and missing 'city' values with 'Remote'.",
      hint: "df['salary'] = df['salary'].fillna(df['salary'].median())",
      starterPy: "import pandas as pd, numpy as np\ndf = pd.DataFrame({'name':['A','B','C','D'], 'salary':[85000, np.nan, 92000, np.nan], 'city':['Mumbai', None, 'Pune', None]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 68, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Data School (Kevin Markham)",
      title: "Vectorized String Methods (.str Accessor)", duration: "17m",
      videoId: "bofaC0IckHo", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 17:00",
      takeaways: [
        "Chain .str.strip().str.title() across entire text columns cleanly.",
        "Extract email domains or SKU prefixes with .str.split() and .str.extract()."
      ],
      lab: "Clean 'raw_name' to Title Case and extract the email domain into a new 'domain' column.",
      hint: "df['domain'] = df['email'].str.split('@').str[1]",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'raw_name':['  aarav sharma ', 'DIYA PATEL'], 'email':['aarav@acme.in', 'diya@nova.io']})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 69, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Corey Schafer",
      title: "Vectorized Conditional Logic (np.where & np.select)", duration: "20m",
      videoId: "DCDe29sIKcE", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 20:10",
      takeaways: [
        "Replace slow row-wise .apply(lambda ...) with 100x faster np.where and np.select.",
        "Map discrete lookup codes cleanly with Series.map()."
      ],
      lab: "Create a 'priority' column ('High' if amount >= 8000 else 'Standard') using np.where.",
      hint: "df['priority'] = np.where(df['amount'] >= 8000, 'High', 'Standard')",
      starterPy: "import pandas as pd, numpy as np\ndf = pd.DataFrame({'order_id':[1,2,3,4], 'amount':[4500, 9200, 12500, 3100]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 70, month: 3, week: 10, subject: "Pandas Core & Data Cleaning", instructor: "Codebasics (Dhaval Patel)",
      title: "Week 10 Capstone: Messy CRM Dataset Sanitizer", duration: "24m",
      videoId: "M5R10023828", altVideoId: "ZyhVh-qRZPA", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Deduplicate records with .drop_duplicates(subset=['id']) and coerce numeric strings via pd.to_numeric.",
        "Build reproducible cleaning pipelines."
      ],
      lab: "Deduplicate by 'id', convert 'spend' to numeric (coercing 'ERR' to NaN, then filling with median), and print total spend.",
      hint: "pd.to_numeric(df['spend'], errors='coerce')",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'id':[1,1,2,3,4], 'spend':['4500','4500','ERR','8200','6100']})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 71, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Data School (Kevin Markham)",
      title: "GroupBy Split-Apply-Combine & Named Aggs", duration: "22m",
      videoId: "qy0fDqoMJx8", altVideoId: "txMdrV1Ut64", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Compute multiple metrics simultaneously using named aggregations .agg(total=('amt','sum'), ...).",
        "Use .transform('sum') to broadcast group totals back onto original rows."
      ],
      lab: "Group by 'category' and compute total_rev, avg_order, and order_count.",
      hint: "df.groupby('category', as_index=False).agg(total_rev=('amt','sum'), avg_order=('amt','mean'), order_count=('amt','count'))",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'category':['Cloud','Cloud','AI','AI','SaaS'], 'amt':[5000,7000,12000,8000,4500]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 72, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Data School (Kevin Markham)",
      title: "Relational Merging with pd.merge()", duration: "21m",
      videoId: "iYWKfUOtGaw", altVideoId: "txMdrV1Ut64", startSec: 0, focus: "00:00 – 21:10",
      takeaways: [
        "Perform inner, left, and outer joins with pd.merge(..., on=..., how=..., validate='many_to_one').",
        "Guard against accidental row explosion using the validate parameter."
      ],
      lab: "Left-merge orders with customers on 'cust_id' and compute total revenue per customer tier.",
      hint: "merged = pd.merge(orders, customers, on='cust_id', how='left')",
      starterPy: "import pandas as pd\norders = pd.DataFrame({'cust_id':[1,2,1,3], 'amt':[3000,5000,4500,2000]})\ncustomers = pd.DataFrame({'cust_id':[1,2], 'tier':['Platinum','Gold']})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 73, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Corey Schafer",
      title: "Pivot Tables & Cross-Tabulations", duration: "19m",
      videoId: "txMdrV1Ut64", altVideoId: "qy0fDqoMJx8", startSec: 0, focus: "00:00 – 19:20",
      takeaways: [
        "Summarize multidimensional data cleanly using df.pivot_table(..., fill_value=0, margins=True).",
        "Compare category shares across regions at a glance."
      ],
      lab: "Create a pivot table of 'amt' sums with index='region', columns='cat', and fill_value=0.",
      hint: "df.pivot_table(values='amt', index='region', columns='cat', aggfunc='sum', fill_value=0)",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'region':['West','West','South','South'], 'cat':['Cloud','AI','Cloud','SaaS'], 'amt':[6000,9000,4000,3500]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 74, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Data School (Kevin Markham)",
      title: "Tidy Data Reshaping (pd.melt & Wide-to-Long)", duration: "17m",
      videoId: "oY62DhUHWR4", altVideoId: "txMdrV1Ut64", startSec: 0, focus: "00:00 – 17:00",
      takeaways: [
        "Convert wide spreadsheet reports (Q1, Q2, Q3 columns) into tidy long tables for plotting and ML.",
        "Use pd.melt(id_vars=..., var_name=..., value_name=...)."
      ],
      lab: "Unpivot Q1, Q2, and Q3 revenue columns into tidy long format with columns ['product', 'quarter', 'revenue'].",
      hint: "pd.melt(df, id_vars=['product'], var_name='quarter', value_name='revenue')",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'product':['Alpha','Beta'], 'Q1':[120,210], 'Q2':[150,245], 'Q3':[185,290]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 75, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Corey Schafer",
      title: "Time Series DatetimeIndex & Resampling", duration: "24m",
      videoId: "UFuo7EHI8zc", altVideoId: "txMdrV1Ut64", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Parse timestamps with pd.to_datetime() and extract .dt.day_name(), .dt.month, and .dt.quarter.",
        "Downsample daily logs into weekly ('W') or monthly ('ME') totals with .resample()."
      ],
      lab: "Set 'date' as DatetimeIndex and resample daily sales into weekly ('W') revenue sums.",
      hint: "df.set_index('date').resample('W')['sales'].sum()",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'date': pd.date_range('2026-01-01', periods=14, freq='D'), 'sales': range(100, 240, 10)})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 76, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Rob Mulla",
      title: "Rolling Windows, Shifts & Pct Change", duration: "18m",
      videoId: "D0efHEJzgHo", altVideoId: "UFuo7EHI8zc", startSec: 0, focus: "00:00 – 18:15",
      takeaways: [
        "Compute moving averages with .rolling(window=3).mean() and period growth with .pct_change().",
        "Create lag features for time-series forecasting."
      ],
      lab: "Add 'rolling_3d' (3-day moving average) and 'pct_growth' columns to the traffic DataFrame.",
      hint: "df['rolling_3d'] = df['visits'].rolling(3).mean(); df['pct_growth'] = df['visits'].pct_change()",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'visits':[120, 132, 128, 160, 184, 175]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 77, month: 3, week: 11, subject: "GroupBy, Joins & Reshaping", instructor: "Codebasics (Dhaval Patel)",
      title: "Week 11 Capstone: E-Commerce Cohort Revenue", duration: "25m",
      videoId: "t6g85_2a8_0", altVideoId: "qy0fDqoMJx8", startSec: 0, focus: "00:00 – 25:00",
      takeaways: [
        "Join user signup cohorts with order logs to measure LTV by acquisition month.",
        "Combine merge, groupby, and named aggregations."
      ],
      lab: "Merge users and orders, then compute active buyers and total revenue per signup_month.",
      hint: "Merge on 'uid', then groupby('signup_month').agg(...)",
      starterPy: "import pandas as pd\nusers = pd.DataFrame({'uid':[1,2,3,4], 'signup_month':['2026-01','2026-01','2026-02','2026-02']})\norders = pd.DataFrame({'uid':[1,1,2,3,4], 'amt':[2500,3500,1800,4200,5100]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 78, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "Rob Mulla",
      title: "Univariate EDA: Distributions, Skew & Quantiles", duration: "21m",
      videoId: "xi0vhXFPegw", altVideoId: "fHFOANOHwh8", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Compare mean vs median to diagnose right-skewed revenue and salary distributions.",
        "Measure distribution asymmetry with .skew() and tail heaviness with .kurt()."
      ],
      lab: "Print mean, median, 90th percentile (.quantile(0.90)), and skewness for the skewed income series.",
      hint: "s.mean(), s.median(), s.quantile(0.90), s.skew()",
      starterPy: "import pandas as pd\nincome = pd.Series([38, 42, 45, 48, 50, 52, 55, 240, 380])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 79, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "Krish Naik",
      title: "IQR & Z-Score Outlier Detection", duration: "19m",
      videoId: "A3gClkvkPyrY", altVideoId: "xi0vhXFPegw", startSec: 0, focus: "00:00 – 19:15",
      takeaways: [
        "Detect non-parametric outliers cleanly using Tukey's [Q1 - 1.5*IQR, Q3 + 1.5*IQR] fences.",
        "Decide when to cap (Winsorize) vs remove extreme anomalies."
      ],
      lab: "Identify and print all values in 's' that fall outside the 1.5 * IQR fences.",
      hint: "q1, q3 = s.quantile([0.25, 0.75]); iqr = q3 - q1",
      starterPy: "import pandas as pd\ns = pd.Series([14, 15, 13, 16, 15, 14, 92, 13, 17, 105])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 80, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "StatQuest (Josh Starmer)",
      title: "Correlation Matrices (Pearson vs Spearman)", duration: "18m",
      videoId: "xZ_z8KWkhXE", altVideoId: "xi0vhXFPegw", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Use Pearson correlation for linear relationships and Spearman rank correlation for monotonic curves.",
        "Spot redundant collinear features (|r| > 0.90) before modeling."
      ],
      lab: "Compute both Pearson and Spearman correlation matrices across ad_spend, clicks, and sales.",
      hint: "df.corr(method='pearson') and df.corr(method='spearman')",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'ad_spend':[10,20,30,40,50], 'clicks':[102,205,298,410,505], 'sales':[48,99,151,198,255]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 81, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "Data School (Kevin Markham)",
      title: "Categorical Encoding (One-Hot & Ordinal)", duration: "20m",
      videoId: "0s_1IsROgDc", altVideoId: "xi0vhXFPegw", startSec: 0, focus: "00:00 – 20:10",
      takeaways: [
        "Convert nominal categories into binary indicators via pd.get_dummies(drop_first=True).",
        "Preserve natural rank order for ordinal tiers ('Low' < 'Med' < 'High')."
      ],
      lab: "One-hot encode 'city' with drop_first=True and map 'tier' ('Silver':1, 'Gold':2, 'Platinum':3).",
      hint: "pd.get_dummies(df, columns=['city'], drop_first=True, dtype=int)",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'city':['Mumbai','Pune','Delhi','Mumbai'], 'tier':['Gold','Silver','Platinum','Gold'], 'spend':[500,300,900,450]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 82, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "Rob Mulla",
      title: "Domain Feature Engineering & Interaction Ratios", duration: "22m",
      videoId: "GduT2_f0_80", altVideoId: "xi0vhXFPegw", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Engineer high-signal behavioral ratios (spend per session, support tickets per month).",
        "Protect ratios against zero-division using .clip(lower=1)."
      ],
      lab: "Create 'spend_per_visit' and 'tickets_per_month' safely without division-by-zero errors.",
      hint: "df['spend'] / df['visits'].clip(lower=1)",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'spend':[1200, 0, 3400, 800], 'visits':[4, 0, 8, 2], 'tickets':[1, 3, 2, 0], 'tenure_mo':[12, 2, 24, 6]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 83, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "Krish Naik",
      title: "Automated Data Quality Audit Function", duration: "18m",
      videoId: "fHFOANOHwh8", altVideoId: "xi0vhXFPegw", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Standardize initial dataset triage with a reusable audit DataFrame summarizing dtype, nulls, and cardinality.",
        "Spot constant or ID-like columns immediately."
      ],
      lab: "Write audit_table(df) returning a summary DataFrame with dtype, null_count, and nunique per column.",
      hint: "pd.DataFrame({'dtype': df.dtypes, 'nulls': df.isna().sum(), 'nunique': df.nunique()})",
      starterPy: "import pandas as pd, numpy as np\ndf = pd.DataFrame({'id':[1,2,3], 'city':['Mumbai',np.nan,'Pune'], 'active':[1,1,1]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 84, month: 3, week: 12, subject: "Exploratory Data Analysis (EDA)", instructor: "Rob Mulla",
      title: "Month 3 Capstone: Customer Churn EDA Diagnosis", duration: "28m",
      videoId: "xi0vhXFPegw", altVideoId: "fHFOANOHwh8", startSec: 600, focus: "10:00 – 38:00",
      takeaways: [
        "Compare behavioral distributions between churned (1) and retained (0) cohorts.",
        "Surface top churn drivers with clear quantitative evidence."
      ],
      lab: "Group by 'churned' to compare mean tenure, support calls, and monthly_charge, plus overall churn rate %.",
      hint: "df.groupby('churned')[['tenure','calls','charge']].mean()",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'churned':[0,1,0,1,0,1], 'tenure':[24,3,36,2,18,4], 'calls':[1,5,0,6,2,4], 'charge':[65,95,55,99,70,92]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    }
  ];

  return RAW_PART_1.map(item => ({
    ...item,
    altVideoId: item.altVideoId || item.videoId,
    startSec: item.startSec || 0
  }));/* ==========================================================================
   DATAFORGE // INSTINCT OS v7.0 — 168-DAY MASTER CURRICULUM
   PART 2 OF 2: MONTHS 4–6 (DAYS 85–168)
   ========================================================================== */

(function () {
  const RAW_PART_2 = [
    // ==================== MONTH 4: STATISTICS & EXPERIMENTATION (DAYS 85–112) ====================
    {
      day: 85, month: 4, week: 13, subject: "Probability & Distributions", instructor: "StatQuest (Josh Starmer)",
      title: "Mean, Variance, Standard Deviation & IQR", duration: "16m",
      videoId: "SzZ6GpcfoQY", altVideoId: "xxpc-HPKN28", startSec: 0, focus: "00:00 – 16:10",
      takeaways: [
        "Distinguish sample variance (ddof=1) from population variance (ddof=0).",
        "Compare parametric (mean/SD) vs non-parametric (median/IQR) summaries on skewed metrics."
      ],
      lab: "Compute sample mean, sample std (ddof=1), median, and IQR for latency_ms using NumPy.",
      hint: "np.std(arr, ddof=1) and np.percentile(arr, 75) - np.percentile(arr, 25)",
      starterPy: "import numpy as np\nlatency_ms = np.array([42, 45, 48, 51, 49, 53, 140, 47, 50])\n",
      starterSql: "SELECT region, COUNT(*) AS n, ROUND(AVG(amount), 2) AS avg_amt FROM orders GROUP BY region;"
    },
    {
      day: 86, month: 4, week: 13, subject: "Probability & Distributions", instructor: "3Blue1Brown",
      title: "Bayes' Theorem & Conditional Probability", duration: "15m",
      videoId: "HZGCoVF3YvM", altVideoId: "9wCnvr7Xw4E", startSec: 0, focus: "00:00 – 15:20",
      takeaways: [
        "Update prior beliefs cleanly when new diagnostic or behavioral signals arrive.",
        "Avoid the base-rate fallacy on imbalanced fraud and disease detection problems."
      ],
      lab: "Given fraud base rate P(F)=0.02, sensitivity P(+|F)=0.90, and false positive rate P(+|~F)=0.05, compute P(F|+).",
      hint: "p_pos = p_f * sens + (1 - p_f) * fpr; post = (p_f * sens) / p_pos",
      starterPy: "p_f, sens, fpr = 0.02, 0.90, 0.05\n",
      starterSql: "SELECT status, COUNT(*) AS cnt FROM orders GROUP BY status;"
    },
    {
      day: 87, month: 4, week: 13, subject: "Probability & Distributions", instructor: "StatQuest (Josh Starmer)",
      title: "Normal Distribution & Empirical 68-95-99.7 Rule", duration: "14m",
      videoId: "rzFX5NWojp0", altVideoId: "xxpc-HPKN28", startSec: 0, focus: "00:00 – 14:15",
      takeaways: [
        "Map Z-scores to tail probabilities using scipy.stats.norm.cdf() and .ppf().",
        "Compute the 95% two-tailed critical Z-value (±1.96)."
      ],
      lab: "Use scipy.stats.norm to compute P(Z <= 1.65) and the Z-score for the 97.5th percentile.",
      hint: "from scipy.stats import norm; norm.cdf(1.65), norm.ppf(0.975)",
      starterPy: "from scipy.stats import norm\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 88, month: 4, week: 13, subject: "Probability & Distributions", instructor: "StatQuest (Josh Starmer)",
      title: "Binomial & Poisson Discrete Distributions", duration: "17m",
      videoId: "J8jNoF-K8E8", altVideoId: "bbkcGDn4yCY", startSec: 0, focus: "00:00 – 17:00",
      takeaways: [
        "Model fixed-trial conversion counts with Binomial(n, p) and arrival rates with Poisson(lambda).",
        "Compute exact probabilities using scipy.stats.binom and scipy.stats.poisson."
      ],
      lab: "If checkout conversion is p=0.12 across n=50 visitors, compute the probability of getting >= 8 conversions.",
      hint: "1 - binom.cdf(7, n=50, p=0.12)",
      starterPy: "from scipy.stats import binom, poisson\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 89, month: 4, week: 13, subject: "Probability & Distributions", instructor: "3Blue1Brown",
      title: "Central Limit Theorem (CLT) in Action", duration: "19m",
      videoId: "zeJD6dqJ5lo", altVideoId: "YAlJCEDH2uY", startSec: 0, focus: "00:00 – 19:10",
      takeaways: [
        "Verify why sample means converge toward a Normal distribution regardless of underlying skew.",
        "Calculate Standard Error SE = sigma / sqrt(n)."
      ],
      lab: "Draw 2,000 sample means (each of size n=40) from an exponential(scale=50) distribution and print their mean and std.",
      hint: "means = [rng.exponential(50, 40).mean() for _ in range(2000)]",
      starterPy: "import numpy as np\nrng = np.random.default_rng(42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 90, month: 4, week: 13, subject: "Probability & Distributions", instructor: "StatQuest (Josh Starmer)",
      title: "Confidence Intervals & Bootstrap Resampling", duration: "18m",
      videoId: "TqOeMYtOc1w", altVideoId: "N4ZTVAWcB_Q", startSec: 0, focus: "00:00 – 18:05",
      takeaways: [
        "Quantify estimation uncertainty with parametric 95% CIs and non-parametric bootstrap percentiles.",
        "Interpret confidence intervals accurately without falling into probability myths."
      ],
      lab: "Compute a 95% bootstrap confidence interval for the median of order_values using 2,000 resamples.",
      hint: "np.percentile(boot_medians, [2.5, 97.5])",
      starterPy: "import numpy as np\nrng = np.random.default_rng(42)\norder_values = np.array([450, 520, 490, 610, 580, 1450, 510, 475, 690, 530])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 91, month: 4, week: 13, subject: "Probability & Distributions", instructor: "StatQuest (Josh Starmer)",
      title: "Week 13 Capstone: SLA Breach Risk Simulator", duration: "21m",
      videoId: "bbkcGDn4yCY", altVideoId: "rzFX5NWojp0", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Combine Poisson arrival rates and Normal processing times to model operational bottlenecks.",
        "Estimate tail breach probabilities analytically and via simulation."
      ],
      lab: "Given mean server response 180ms and std 25ms, compute the probability a request exceeds the 230ms SLA.",
      hint: "1 - norm.cdf(230, loc=180, scale=25)",
      starterPy: "from scipy.stats import norm\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 92, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "StatQuest (Josh Starmer)",
      title: "Null Hypotheses, P-Values & Alpha Thresholds", duration: "15m",
      videoId: "vemZtEM63GY", altVideoId: "0oc49DyA3hU", startSec: 0, focus: "00:00 – 15:10",
      takeaways: [
        "Understand p-value as P(data this extreme | H0 true), never P(H0 is true).",
        "Control Type I false-positive errors with pre-registered significance level alpha=0.05."
      ],
      lab: "Given p_val = 0.031 and alpha = 0.05, print whether to reject H0 and compute Bonferroni-adjusted alpha for 5 tests.",
      hint: "alpha_adj = 0.05 / 5",
      starterPy: "p_val, alpha, num_tests = 0.031, 0.05, 5\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 93, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "StatQuest (Josh Starmer)",
      title: "Two-Sample Welch's t-Test for Continuous KPIs", duration: "17m",
      videoId: "0Pd3dc1EdHc", altVideoId: "vemZtEM63GY", startSec: 0, focus: "00:00 – 17:00",
      takeaways: [
        "Prefer Welch's t-test (equal_var=False) over Student's t-test because real A/B variants rarely share identical variance.",
        "Evaluate both statistical significance (p-value) and practical lift."
      ],
      lab: "Run scipy.stats.ttest_ind(..., equal_var=False) comparing control vs variant session spend.",
      hint: "from scipy.stats import ttest_ind; stat, p = ttest_ind(variant, control, equal_var=False)",
      starterPy: "import numpy as np\nfrom scipy.stats import ttest_ind\ncontrol = np.array([420, 450, 410, 480, 440, 430, 460])\nvariant = np.array([490, 520, 485, 540, 510, 505, 530])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 94, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "StatQuest (Josh Starmer)",
      title: "Chi-Square Test & Conversion Rate A/B Testing", duration: "18m",
      videoId: "2QeDRsxSF9M", altVideoId: "vemZtEM63GY", startSec: 0, focus: "00:00 – 18:10",
      takeaways: [
        "Test categorical conversion tables using scipy.stats.chi2_contingency().",
        "Report absolute percentage-point lift alongside relative lift."
      ],
      lab: "Test whether Control (120/1000 converted) vs Treatment (158/1000 converted) differs significantly.",
      hint: "table = [[120, 880], [158, 842]]; chi2, p, _, _ = chi2_contingency(table)",
      starterPy: "from scipy.stats import chi2_contingency\ntable = [[120, 880], [158, 842]]\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 95, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "StatQuest (Josh Starmer)",
      title: "Statistical Power, Sample Size & MDE", duration: "16m",
      videoId: "Rsc5znwR5FA", altVideoId: "vemZtEM63GY", startSec: 0, focus: "00:00 – 16:00",
      takeaways: [
        "Prevent underpowered experiments by calculating required sample size n before launch.",
        "Understand the trade-off between Minimum Detectable Effect (MDE), power (80%), and sample size."
      ],
      lab: "Use the rule-of-thumb formula n = 16 * variance / (mde ** 2) to size an A/B test with std=50 and MDE=10.",
      hint: "n_per_group = int(16 * (50**2) / (10**2))",
      starterPy: "std, mde = 50.0, 10.0\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 96, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "Krish Naik",
      title: "ANOVA & Kruskal-Wallis Multi-Variant Testing", duration: "19m",
      videoId: "0Vj2V2JvIU0", altVideoId: "vemZtEM63GY", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Compare 3+ pricing or UI variants simultaneously with one-way ANOVA (f_oneway) to avoid inflated false positives.",
        "Use Kruskal-Wallis when group distributions are heavily skewed."
      ],
      lab: "Run scipy.stats.f_oneway across groups A, B, and C to test if mean conversion value differs.",
      hint: "from scipy.stats import f_oneway; f_stat, p_val = f_oneway(a, b, c)",
      starterPy: "from scipy.stats import f_oneway\na, b, c = [12, 14, 13, 15], [18, 20, 19, 21], [13, 15, 14, 13]\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 97, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "Codebasics (Dhaval Patel)",
      title: "A/B Test Pitfalls: Peeking, SRM & Novelty Effects", duration: "18m",
      videoId: "DUNkjfnbV0s", altVideoId: "vemZtEM63GY", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Check Sample Ratio Mismatch (SRM) first—if a 50/50 split lands at 53/47, the randomization pipeline is broken.",
        "Never stop an experiment early the moment p < 0.05."
      ],
      lab: "Run a Chi-Square goodness-of-fit test on observed split [5320, 4680] vs expected [5000, 5000] to detect SRM.",
      hint: "from scipy.stats import chisquare; stat, p = chisquare([5320, 4680], f_exp=[5000, 5000])",
      starterPy: "from scipy.stats import chisquare\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 98, month: 4, week: 14, subject: "Hypothesis Testing & A/B Tests", instructor: "Codebasics (Dhaval Patel)",
      title: "Week 14 Capstone: End-to-End A/B Decision Memo", duration: "24m",
      videoId: "DUNkjfnbV0s", altVideoId: "2QeDRsxSF9M", startSec: 300, focus: "05:00 – 29:00",
      takeaways: [
        "Combine SRM validation, lift calculation, p-value testing, and launch recommendation into one function.",
        "Translate statistical metrics into clear business ship/hold decisions."
      ],
      lab: "Evaluate Control (n=5000, conv=610) vs Variant (n=5020, conv=695): check SRM, compute lift %, p-value, and decision.",
      hint: "Check chisquare([5000, 5020]) first, then chi2_contingency on conversions vs non-conversions.",
      starterPy: "from scipy.stats import chisquare, chi2_contingency\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 99, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "StatQuest (Josh Starmer)",
      title: "Ordinary Least Squares (OLS) & R-Squared", duration: "18m",
      videoId: "nk2CQITm_eo", altVideoId: "PaFPbb66DxQ", startSec: 0, focus: "00:00 – 18:10",
      takeaways: [
        "Fit best-fit linear relationships minimizing sum of squared residuals.",
        "Interpret slope coefficients, R-squared variance explained, and p-values."
      ],
      lab: "Use scipy.stats.linregress(ad_spend, sales) to print slope, intercept, r_value**2, and p_value.",
      hint: "from scipy.stats import linregress; res = linregress(ad_spend, sales)",
      starterPy: "import numpy as np\nfrom scipy.stats import linregress\nad_spend = np.array([10, 20, 30, 40, 50, 60])\nsales = np.array([52, 98, 154, 195, 248, 305])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 100, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "StatQuest (Josh Starmer)",
      title: "Multiple Regression & Adjusted R-Squared", duration: "19m",
      videoId: "zITIFTsivN8", altVideoId: "nk2CQITm_eo", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Hold confounding variables constant when estimating the partial effect of each predictor.",
        "Prefer Adjusted R-Squared when comparing models with different feature counts."
      ],
      lab: "Fit a multi-feature LinearRegression on [sqft, rooms] -> price and print coefficients and R2.",
      hint: "from sklearn.linear_model import LinearRegression",
      starterPy: "import numpy as np\nfrom sklearn.linear_model import LinearRegression\nX = np.array([[1000,2],[1200,3],[1500,3],[1800,4],[2200,4]])\ny = np.array([180, 225, 270, 330, 395])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 101, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "StatQuest (Josh Starmer)",
      title: "Residual Diagnostics & Heteroscedasticity", duration: "16m",
      videoId: "VCVpjKW4r5g", altVideoId: "nk2CQITm_eo", startSec: 0, focus: "00:00 – 16:00",
      takeaways: [
        "Inspect residuals (y_true - y_pred) for zero mean, constant variance, and non-linear patterns.",
        "Apply log1p() transforms to stabilize fanning variance on skewed target variables."
      ],
      lab: "Compute residuals, mean residual, and RMSE for the given predictions.",
      hint: "res = y_true - y_pred; rmse = np.sqrt(np.mean(res**2))",
      starterPy: "import numpy as np\ny_true = np.array([100, 150, 200, 250, 300])\ny_pred = np.array([104, 145, 208, 244, 298])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 102, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "Krish Naik",
      title: "Multicollinearity & Variance Inflation Factor (VIF)", duration: "17m",
      videoId: "0SBIXgPVex8", altVideoId: "nk2CQITm_eo", startSec: 0, focus: "00:00 – 17:15",
      takeaways: [
        "Detect unstable regression coefficients caused by correlated predictors using VIF = 1 / (1 - R^2).",
        "Drop or combine redundant features with VIF > 5."
      ],
      lab: "Compute R2 of predicting feature x2 from x1 and calculate its VIF = 1 / (1 - r2).",
      hint: "r2 = LinearRegression().fit(x1.reshape(-1,1), x2).score(x1.reshape(-1,1), x2)",
      starterPy: "import numpy as np\nfrom sklearn.linear_model import LinearRegression\nx1 = np.array([10, 20, 30, 40, 50])\nx2 = np.array([21, 39, 61, 80, 101])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 103, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "StatQuest (Josh Starmer)",
      title: "Logistic Regression & Log-Odds Interpretation", duration: "20m",
      videoId: "yIYKR4sgzI8", altVideoId: "C4N3_XJJ-jU", startSec: 0, focus: "00:00 – 20:10",
      takeaways: [
        "Map linear combinations into calibrated probabilities via the sigmoid function 1 / (1 + exp(-z)).",
        "Convert log-odds coefficients into odds ratios via np.exp(coef)."
      ],
      lab: "Implement sigmoid(z) in NumPy and evaluate predicted probabilities for z = [-2.5, 0.0, 1.8, 3.2].",
      hint: "1 / (1 + np.exp(-z))",
      starterPy: "import numpy as np\nz = np.array([-2.5, 0.0, 1.8, 3.2])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 104, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "Codebasics (Dhaval Patel)",
      title: "Confounders, Simpson's Paradox & Causal DAGs", duration: "18m",
      videoId: "ebEkn-BiW5k", altVideoId: "yIYKR4sgzI8", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Recognize when aggregated trends reverse inside subgroups (Simpson's Paradox).",
        "Always stratify observational metrics by key confounding segments."
      ],
      lab: "Compare overall conversion rate vs segment-stratified conversion rates in the DataFrame to spot Simpson's Paradox.",
      hint: "df.groupby('variant')['conv'].mean() vs df.groupby(['segment','variant'])['conv'].mean()",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'segment':['Enterprise']*4+['SMB']*4, 'variant':['A','A','B','B']*2, 'conv':[0.40,0.42,0.50,0.52, 0.10,0.12,0.18,0.20]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 105, month: 4, week: 15, subject: "Statistical Regression & Causal Thinking", instructor: "StatQuest (Josh Starmer)",
      title: "Week 15 Capstone: Marketing Channel Attribution Model", duration: "23m",
      videoId: "zITIFTsivN8", altVideoId: "nk2CQITm_eo", startSec: 300, focus: "05:00 – 28:00",
      takeaways: [
        "Quantify marginal ROI per marketing channel using standardized multiple regression.",
        "Rank channels by incremental contribution."
      ],
      lab: "Fit LinearRegression predicting revenue from [search_ads, social_ads, email_spend] and print channel weights.",
      hint: "model = LinearRegression().fit(X, y); dict(zip(cols, model.coef_.round(2)))",
      starterPy: "import numpy as np\nfrom sklearn.linear_model import LinearRegression\nX = np.array([[10,5,2],[20,8,3],[15,12,4],[30,10,5],[25,15,6],[40,18,7]])\ny = np.array([62, 112, 108, 165, 162, 228])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 106, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "Krish Naik",
      title: "Trend, Seasonality & Residual Decomposition", duration: "20m",
      videoId: "e8Yw4alG16Q", altVideoId: "UFuo7EHI8zc", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Decompose business time series into long-term Trend, repeating Seasonality, and Noise.",
        "Choose additive vs multiplicative decomposition based on seasonal amplitude."
      ],
      lab: "Extract 4-period centered moving trend and seasonal difference (y - trend) on quarterly sales.",
      hint: "trend = s.rolling(4, center=True).mean(); seasonal = s - trend",
      starterPy: "import pandas as pd\ns = pd.Series([100, 140, 120, 180, 110, 155, 130, 195, 120, 170, 145, 210])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 107, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "StatQuest (Josh Starmer)",
      title: "Autocorrelation (ACF) & Stationarity Checks", duration: "18m",
      videoId: "DeORzP0go5I", altVideoId: "e8Yw4alG16Q", startSec: 0, focus: "00:00 – 18:05",
      takeaways: [
        "Verify constant mean and variance over time before fitting autoregressive models.",
        "Use first-differencing (.diff()) to stabilize trending series."
      ],
      lab: "Compute lag-1 autocorrelation (.autocorr(lag=1)) before and after first-differencing.",
      hint: "s.autocorr(lag=1) and s.diff().dropna().autocorr(lag=1)",
      starterPy: "import pandas as pd\ns = pd.Series([10, 13, 17, 22, 28, 35, 43, 52, 62, 73])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 108, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "Rob Mulla",
      title: "Exponential Smoothing & Holt-Winters Forecasting", duration: "21m",
      videoId: "vV12dGe_Fho", altVideoId: "e8Yw4alG16Q", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Weight recent observations higher than stale history with Exponentially Weighted Moving Averages (.ewm()).",
        "Tune smoothing span alpha for responsive short-term forecasts."
      ],
      lab: "Compute an EWMA forecast with span=3 on daily demand and print the smoothed series.",
      hint: "demand.ewm(span=3, adjust=False).mean()",
      starterPy: "import pandas as pd\ndemand = pd.Series([80, 85, 82, 95, 110, 108, 125])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 109, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "Rob Mulla",
      title: "Walk-Forward Time-Series Cross-Validation", duration: "19m",
      videoId: "vV12dGe_Fho", altVideoId: "fSytzGwwBVw", startSec: 600, focus: "10:00 – 29:00",
      takeaways: [
        "Never randomly shuffle time-series rows—future data leaks into training folds.",
        "Use sklearn.model_selection.TimeSeriesSplit for expanding-window evaluation."
      ],
      lab: "Print train and test indices across 3 folds using TimeSeriesSplit(n_splits=3).",
      hint: "from sklearn.model_selection import TimeSeriesSplit",
      starterPy: "import numpy as np\nfrom sklearn.model_selection import TimeSeriesSplit\nX = np.arange(12).reshape(-1, 1)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 110, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "StatQuest (Josh Starmer)",
      title: "Forecast Error Metrics: MAE, RMSE, MAPE & sMAPE", duration: "16m",
      videoId: "KzHJXdFJSIQ", altVideoId: "nk2CQITm_eo", startSec: 300, focus: "05:00 – 21:00",
      takeaways: [
        "Choose MAE for median-unbiased forecasts and RMSE when large spikes carry heavy business cost.",
        "Watch out for division-by-zero in MAPE when actuals hit 0."
      ],
      lab: "Compute MAE, RMSE, and MAPE (%) comparing actual vs forecast arrays.",
      hint: "mape = np.mean(np.abs((actual - forecast) / actual)) * 100",
      starterPy: "import numpy as np\nactual = np.array([100, 120, 150, 130, 160])\nforecast = np.array([105, 115, 142, 138, 155])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 111, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "Codebasics (Dhaval Patel)",
      title: "Difference-in-Differences (DiD) Quasi-Experiments", duration: "19m",
      videoId: "ebEkn-BiW5k", altVideoId: "DUNkjfnbV0s", startSec: 420, focus: "07:00 – 26:00",
      takeaways: [
        "Estimate causal impact of regional launches when randomized A/B testing isn't possible.",
        "Compute DiD = (Treat_Post - Treat_Pre) - (Control_Post - Control_Pre)."
      ],
      lab: "Calculate the Difference-in-Differences causal lift from the pre/post city revenue numbers.",
      hint: "did = (treat_post - treat_pre) - (ctrl_post - ctrl_pre)",
      starterPy: "treat_pre, treat_post = 120000, 158000\nctrl_pre, ctrl_post = 115000, 131000\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 112, month: 4, week: 16, subject: "Time Series & Experimentation Systems", instructor: "Rob Mulla",
      title: "Month 4 Capstone: Revenue Forecast & Anomaly Alert", duration: "26m",
      videoId: "vV12dGe_Fho", altVideoId: "e8Yw4alG16Q", startSec: 900, focus: "15:00 – 41:00",
      takeaways: [
        "Combine rolling forecasts with residual Z-score thresholds to flag sudden revenue drops.",
        "Deliver automated operational alerts."
      ],
      lab: "Compute 3-day rolling forecast, residuals, and flag any day where residual < -2 * residual_std.",
      hint: "anomalies = df[df['residual'] < -2 * df['residual'].std()]",
      starterPy: "import pandas as pd\ndf = pd.DataFrame({'day':range(1,9), 'rev':[100,104,102,106,108,105,62,109]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },

    // ==================== MONTH 5: MACHINE LEARNING ENGINEERING (DAYS 113–140) ====================
    {
      day: 113, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "Data School (Kevin Markham)",
      title: "Scikit-Learn Estimator API & Zero-Leakage Splits", duration: "21m",
      videoId: "0B5eIE_1vpU", altVideoId: "pqNCD_5r0IU", startSec: 0, focus: "00:00 – 21:15",
      takeaways: [
        "Master the universal .fit(), .predict(), and .score() interface across all scikit-learn estimators.",
        "Always split train/test BEFORE fitting scalers or imputers to prevent data leakage."
      ],
      lab: "Split X, y with train_test_split(test_size=0.25, random_state=42), fit StandardScaler on train only, and transform both.",
      hint: "X_tr_s = scaler.fit_transform(X_tr); X_te_s = scaler.transform(X_te)",
      starterPy: "import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nX = np.arange(24, dtype=float).reshape(12, 2)\ny = np.arange(12)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 114, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "StatQuest (Josh Starmer)",
      title: "Bias-Variance Tradeoff & Cross-Validation", duration: "18m",
      videoId: "EuBBz3bI-aA", altVideoId: "fSytzGwwBVw", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Diagnose underfitting (high bias) vs overfitting (high variance) using train vs validation curves.",
        "Evaluate models reliably with StratifiedKFold cross-validation."
      ],
      lab: "Run 3-fold cross_val_score with LogisticRegression on the synthetic classification dataset.",
      hint: "from sklearn.model_selection import cross_val_score",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import cross_val_score\nX, y = make_classification(n_samples=120, n_features=6, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 115, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "StatQuest (Josh Starmer)",
      title: "Ridge (L2) & Lasso (L1) Regularization", duration: "20m",
      videoId: "Q81RR3yKn30", altVideoId: "NGf0voTMlcs", startSec: 0, focus: "00:00 – 20:10",
      takeaways: [
        "Shrink noisy coefficients with Ridge (L2) and perform automatic feature selection with Lasso (L1).",
        "Always standardize features before applying L1/L2 penalties."
      ],
      lab: "Fit Lasso(alpha=0.5) on standardized features and print which feature coefficients shrink to zero.",
      hint: "Lasso(alpha=0.5).fit(X, y).coef_",
      starterPy: "import numpy as np\nfrom sklearn.linear_model import Lasso\nrng = np.random.default_rng(42)\nX = rng.normal(size=(80, 5))\ny = 4.0 * X[:, 0] - 2.5 * X[:, 2] + rng.normal(scale=0.3, size=80)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 116, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "Data School (Kevin Markham)",
      title: "ColumnTransformer & Production Pipelines", duration: "22m",
      videoId: "irHhDIYWqcU", altVideoId: "0B5eIE_1vpU", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Bundle numeric imputation/scaling and categorical OneHotEncoding into a single reproducible Pipeline.",
        "Eliminate train-serving skew completely."
      ],
      lab: "Build a ColumnTransformer + LogisticRegression Pipeline handling ['age','spend'] and ['city'] cleanly.",
      hint: "from sklearn.compose import ColumnTransformer; from sklearn.pipeline import Pipeline",
      starterPy: "import pandas as pd\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.linear_model import LogisticRegression\ndf = pd.DataFrame({'age':[25,42,31,54,28,46], 'spend':[200,900,450,1200,300,950], 'city':['Mumbai','Pune','Delhi','Mumbai','Pune','Delhi'], 'buy':[0,1,0,1,0,1]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 117, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "StatQuest (Josh Starmer)",
      title: "Confusion Matrix, Precision, Recall & F1-Score", duration: "19m",
      videoId: "Kdsp6soqA7o", altVideoId: "4jRBRDbJemM", startSec: 0, focus: "00:00 – 19:15",
      takeaways: [
        "Never rely on raw accuracy on imbalanced datasets (e.g., 2% fraud).",
        "Optimize Recall when false negatives are costly; optimize Precision when false alarms are costly."
      ],
      lab: "Compute precision_score, recall_score, and f1_score from y_true and y_pred.",
      hint: "from sklearn.metrics import precision_score, recall_score, f1_score",
      starterPy: "from sklearn.metrics import precision_score, recall_score, f1_score\ny_true = [0, 1, 0, 0, 1, 1, 0, 1]\ny_pred = [0, 1, 1, 0, 1, 0, 0, 1]\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 118, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "StatQuest (Josh Starmer)",
      title: "ROC-AUC, PR-AUC & Decision Threshold Tuning", duration: "21m",
      videoId: "4jRBRDbJemM", altVideoId: "Kdsp6soqA7o", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Evaluate ranking discrimination across all thresholds using ROC-AUC and Precision-Recall AUC.",
        "Adjust the 0.50 probability cutoff to align predictions with business cost matrices."
      ],
      lab: "Compute roc_auc_score and compare F1-score at threshold 0.50 vs threshold 0.35.",
      hint: "preds_35 = (probs >= 0.35).astype(int)",
      starterPy: "import numpy as np\nfrom sklearn.metrics import roc_auc_score, f1_score\ny_true = np.array([0, 0, 1, 0, 1, 1, 0, 1])\nprobs = np.array([0.12, 0.38, 0.42, 0.25, 0.81, 0.39, 0.19, 0.74])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 119, month: 5, week: 17, subject: "Scikit-Learn Core & Linear Models", instructor: "Krish Naik",
      title: "Week 17 Capstone: Credit Default Risk Pipeline", duration: "25m",
      videoId: "pqNCD_5r0IU", altVideoId: "irHhDIYWqcU", startSec: 0, focus: "00:00 – 25:00",
      takeaways: [
        "Handle class imbalance using class_weight='balanced' inside an end-to-end Pipeline.",
        "Report both ROC-AUC and F1 on held-out test data."
      ],
      lab: "Train a StandardScaler + LogisticRegression(class_weight='balanced') pipeline and print test ROC-AUC.",
      hint: "pipe.predict_proba(X_test)[:, 1]",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import roc_auc_score\nX, y = make_classification(n_samples=200, weights=[0.85, 0.15], random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 120, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "StatQuest (Josh Starmer)",
      title: "Decision Trees, Gini Impurity & Pruning", duration: "19m",
      videoId: "_L39rN6gz7Y", altVideoId: "J4Wdy0Wc_xQ", startSec: 0, focus: "00:00 – 19:10",
      takeaways: [
        "Understand greedy recursive feature splitting via Gini Impurity and Information Gain.",
        "Control tree overfitting using max_depth and min_samples_leaf."
      ],
      lab: "Compare train vs test accuracy of DecisionTreeClassifier with max_depth=None vs max_depth=3.",
      hint: "DecisionTreeClassifier(max_depth=3, random_state=42)",
      starterPy: "from sklearn.datasets import make_moons\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nX, y = make_moons(n_samples=200, noise=0.28, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 121, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "StatQuest (Josh Starmer)",
      title: "Random Forests, Bagging & Out-of-Bag Score", duration: "18m",
      videoId: "J4Wdy0Wc_xQ", altVideoId: "_L39rN6gz7Y", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Reduce variance dramatically by averaging decorrelated trees trained on bootstrap samples.",
        "Get free validation estimates with oob_score=True."
      ],
      lab: "Fit RandomForestClassifier(n_estimators=100, oob_score=True, random_state=42) and print oob_score_.",
      hint: "rf = RandomForestClassifier(n_estimators=100, oob_score=True, random_state=42).fit(X, y)",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.ensemble import RandomForestClassifier\nX, y = make_classification(n_samples=180, n_features=8, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 122, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "StatQuest (Josh Starmer)",
      title: "Gradient Boosting & Histogram-Based GBDT", duration: "21m",
      videoId: "3CC4N4z3GJc", altVideoId: "OtD8wVaFm6E", startSec: 0, focus: "00:00 – 21:05",
      takeaways: [
        "Fit sequential shallow trees to pseudo-residuals to drive down bias step-by-step.",
        "Use HistGradientBoostingClassifier for native missing-value support and LightGBM-level speed."
      ],
      lab: "Train HistGradientBoostingClassifier(max_iter=80, learning_rate=0.08, random_state=42) and print accuracy.",
      hint: "from sklearn.ensemble import HistGradientBoostingClassifier",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import HistGradientBoostingClassifier\nX, y = make_classification(n_samples=250, n_features=10, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 123, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "Rob Mulla",
      title: "XGBoost Architecture, Regularization & Early Stopping", duration: "24m",
      videoId: "GrJP9FLV3FE", altVideoId: "OtD8wVaFm6E", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Understand second-order gradient splitting, L1/L2 leaf weights, and colsample_bytree.",
        "Tune learning_rate alongside n_estimators to prevent overfitting."
      ],
      lab: "Compare GradientBoostingClassifier accuracy at learning_rate=0.05 vs learning_rate=0.5.",
      hint: "from sklearn.ensemble import GradientBoostingClassifier",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import GradientBoostingClassifier\nX, y = make_classification(n_samples=200, n_features=8, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 124, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "Data School (Kevin Markham)",
      title: "Hyperparameter Tuning (RandomizedSearchCV)", duration: "20m",
      videoId: "Gol_qOgRqfA", altVideoId: "0B5eIE_1vpU", startSec: 0, focus: "00:00 – 20:15",
      takeaways: [
        "Explore large hyperparameter spaces far more efficiently with RandomizedSearchCV than exhaustive GridSearchCV.",
        "Extract best_params_ and best_score_ cleanly."
      ],
      lab: "Tune RandomForestClassifier max_depth and min_samples_split with RandomizedSearchCV(n_iter=6, cv=3).",
      hint: "from sklearn.model_selection import RandomizedSearchCV",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import RandomizedSearchCV\nX, y = make_classification(n_samples=150, n_features=6, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 125, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "Krish Naik",
      title: "Model Explainability: Permutation Importance & SHAP", duration: "22m",
      videoId: "VB9uV-x0gtg", altVideoId: "J4Wdy0Wc_xQ", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Avoid biased impurity-based feature importances by using validation permutation_importance.",
        "Explain individual predictions to business stakeholders with SHAP values."
      ],
      lab: "Compute permutation_importance on a fitted RandomForestClassifier and print ranked feature importances.",
      hint: "from sklearn.inspection import permutation_importance",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.inspection import permutation_importance\nX, y = make_classification(n_samples=150, n_features=5, n_informative=2, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 126, month: 5, week: 18, subject: "Tree Ensembles & Gradient Boosting", instructor: "Rob Mulla",
      title: "Week 18 Capstone: Tabular Model Benchmark Arena", duration: "26m",
      videoId: "GrJP9FLV3FE", altVideoId: "J4Wdy0Wc_xQ", startSec: 600, focus: "10:00 – 36:00",
      takeaways: [
        "Benchmark LogisticRegression, RandomForest, and HistGradientBoosting on identical CV splits.",
        "Select the winning model based on validation ROC-AUC and inference speed."
      ],
      lab: "Run 3-fold ROC-AUC cross_val_score across all 3 models and print the leaderboard.",
      hint: "scoring='roc_auc' inside cross_val_score()",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import RandomForestClassifier, HistGradientBoostingClassifier\nX, y = make_classification(n_samples=200, n_features=8, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 127, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "StatQuest (Josh Starmer)",
      title: "K-Means Clustering, Elbow Curve & Silhouette Score", duration: "19m",
      videoId: "4b5d3muPQmA", altVideoId: "4P5r1_28_00", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Always scale features before distance-based clustering so high-magnitude columns don't dominate.",
        "Validate cluster separation objectively using silhouette_score (-1 to +1)."
      ],
      lab: "Fit KMeans(n_clusters=3, n_init=10, random_state=42) on scaled blobs and print silhouette_score.",
      hint: "from sklearn.cluster import KMeans; from sklearn.metrics import silhouette_score",
      starterPy: "from sklearn.datasets import make_blobs\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\nX, _ = make_blobs(n_samples=150, centers=3, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 128, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "StatQuest (Josh Starmer)",
      title: "DBSCAN Density Clustering & Noise Detection", duration: "17m",
      videoId: "RDZUdRSDOok", altVideoId: "4b5d3muPQmA", startSec: 0, focus: "00:00 – 17:10",
      takeaways: [
        "Discover arbitrary non-spherical clusters without specifying K upfront.",
        "Automatically isolate outliers as label -1."
      ],
      lab: "Run DBSCAN(eps=0.35, min_samples=5) on scaled moons data and print unique cluster labels.",
      hint: "from sklearn.cluster import DBSCAN",
      starterPy: "import numpy as np\nfrom sklearn.datasets import make_moons\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import DBSCAN\nX, _ = make_moons(n_samples=150, noise=0.08, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 129, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "StatQuest (Josh Starmer)",
      title: "Principal Component Analysis (PCA) & Variance Ratio", duration: "22m",
      videoId: "FgakZw6K1QQ", altVideoId: "HMOI_lkzW08", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Project high-dimensional correlated features onto orthogonal principal components.",
        "Inspect explained_variance_ratio_ to retain >= 95% signal in fewer dimensions."
      ],
      lab: "Fit PCA(n_components=2) on standardized 6D data and print cumulative variance explained.",
      hint: "pca.explained_variance_ratio_.sum()",
      starterPy: "from sklearn.datasets import make_classification\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nX, _ = make_classification(n_samples=120, n_features=6, n_informative=3, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 130, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "Krish Naik",
      title: "Isolation Forest for Unsupervised Anomaly Detection", duration: "18m",
      videoId: "5p8B2Ik8fbk", altVideoId: "RDZUdRSDOok", startSec: 0, focus: "00:00 – 18:00",
      takeaways: [
        "Isolate rare anomalies rapidly via random feature splits without needing labeled fraud examples.",
        "Tune the contamination parameter to match expected anomaly prevalence."
      ],
      lab: "Fit IsolationForest(contamination=0.1, random_state=42) and print indices flagged as -1.",
      hint: "preds = iso.fit_predict(X); np.where(preds == -1)[0]",
      starterPy: "import numpy as np\nfrom sklearn.ensemble import IsolationForest\nrng = np.random.default_rng(42)\nX = np.vstack([rng.normal(0, 1, (36, 2)), [[8, 9], [-7, 8], [9, -8], [-8, -9]]])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 131, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "Codebasics (Dhaval Patel)",
      title: "Collaborative Filtering & Cosine Similarity", duration: "20m",
      videoId: "G4MBc40TdMs", altVideoId: "FgakZw6K1QQ", startSec: 0, focus: "00:00 – 20:10",
      takeaways: [
        "Measure user-item affinity in high-dimensional sparse spaces using cosine similarity.",
        "Build content-based and item-item recommendation engines."
      ],
      lab: "Compute pairwise cosine_similarity across 3 item embedding vectors and find the closest match to Item 0.",
      hint: "from sklearn.metrics.pairwise import cosine_similarity",
      starterPy: "import numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\nitems = np.array([[1, 0, 1, 1], [1, 0, 1, 0], [0, 1, 0, 1]])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 132, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "StatQuest (Josh Starmer)",
      title: "Hierarchical Agglomerative Clustering & Linkage", duration: "17m",
      videoId: "7xHsRkOdVwo", altVideoId: "4b5d3muPQmA", startSec: 0, focus: "00:00 – 17:00",
      takeaways: [
        "Build bottom-up cluster hierarchies using Ward linkage to minimize within-cluster variance.",
        "Cut dendrograms at any desired business granularity."
      ],
      lab: "Fit AgglomerativeClustering(n_clusters=3, linkage='ward') and print cluster counts.",
      hint: "from sklearn.cluster import AgglomerativeClustering",
      starterPy: "import numpy as np\nfrom sklearn.datasets import make_blobs\nfrom sklearn.cluster import AgglomerativeClustering\nX, _ = make_blobs(n_samples=90, centers=3, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 133, month: 5, week: 19, subject: "Unsupervised Learning & Clustering", instructor: "Codebasics (Dhaval Patel)",
      title: "Week 19 Capstone: Customer Persona Segmentation", duration: "24m",
      videoId: "EItlUEPCIzM", altVideoId: "4b5d3muPQmA", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Combine StandardScaler, K-Means clustering, and GroupBy centroid profiling.",
        "Translate numerical cluster centers into named marketing personas."
      ],
      lab: "Cluster customers on [recency, frequency, monetary] into 3 segments and print mean KPIs per cluster.",
      hint: "df['cluster'] = KMeans(n_clusters=3, n_init=10, random_state=42).fit_predict(X_scaled)",
      starterPy: "import pandas as pd\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\ndf = pd.DataFrame({'recency':[5,8,90,85,30,35], 'frequency':[12,10,1,2,5,4], 'monetary':[9000,8200,400,600,3200,2900]})\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 134, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "Krish Naik",
      title: "End-to-End Scikit-Learn Pipelines & Custom Transformers", duration: "21m",
      videoId: "7_g_2_1_8_0", altVideoId: "irHhDIYWqcU", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Encapsulate domain feature ratios inside FunctionTransformer so raw inputs map directly to predictions.",
        "Eliminate manual preprocessing scripts in production."
      ],
      lab: "Wrap a log1p feature transform inside sklearn.preprocessing.FunctionTransformer and run .transform().",
      hint: "from sklearn.preprocessing import FunctionTransformer",
      starterPy: "import numpy as np\nfrom sklearn.preprocessing import FunctionTransformer\nX = np.array([[0.0], [9.0], [99.0]])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 135, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "ArjanCodes",
      title: "Model Serialization, Schema Contracts & Versioning", duration: "18m",
      videoId: "q2_1_3_0_5_8", altVideoId: "pTT7HMqDnJw", startSec: 0, focus: "00:00 – 18:10",
      takeaways: [
        "Serialize fitted pipelines with joblib along with feature schema metadata and training metrics.",
        "Validate incoming inference payloads against expected column names and dtypes."
      ],
      lab: "Write validate_payload(payload, required_cols) raising ValueError if any feature is missing or None.",
      hint: "missing = [c for c in required_cols if payload.get(c) is None]",
      starterPy: "required_cols = ['tenure', 'monthly_spend', 'support_calls']\npayload = {'tenure': 12, 'monthly_spend': 4500}\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 136, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "CampusX (Nitish Singh)",
      title: "FastAPI Inference Microservices & Pydantic Schemas", duration: "22m",
      videoId: "7t2alSnE2-I", altVideoId: "pTT7HMqDnJw", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Serve low-latency JSON prediction endpoints using FastAPI and strict Pydantic request validation.",
        "Return prediction probability, risk tier, and model version in responses."
      ],
      lab: "Implement a predict_churn(features: dict) handler returning probability, binary flag, and risk tier.",
      hint: "score = round(1 / (1 + np.exp(-(0.05*features['calls'] - 0.02*features['tenure']))), 3)",
      starterPy: "import numpy as np\ndef predict_churn(features: dict) -> dict:\n    pass\n\nprint(predict_churn({'tenure': 4, 'calls': 6}))\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 137, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "Krish Naik",
      title: "Data Drift & Population Stability Index (PSI)", duration: "20m",
      videoId: "fHFOANOHwh8", altVideoId: "xi0vhXFPegw", startSec: 300, focus: "05:00 – 25:00",
      takeaways: [
        "Monitor production feature distributions against training baselines using KS-test and PSI.",
        "Trigger automated retraining alerts when PSI > 0.20 or KS p-value < 0.01."
      ],
      lab: "Run scipy.stats.ks_2samp(train_dist, prod_dist) to detect statistically significant feature drift.",
      hint: "from scipy.stats import ks_2samp; stat, p = ks_2samp(train_dist, prod_dist)",
      starterPy: "import numpy as np\nfrom scipy.stats import ks_2samp\nrng = np.random.default_rng(42)\ntrain_dist = rng.normal(50, 10, 200)\nprod_dist = rng.normal(62, 12, 200)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 138, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "StatQuest (Josh Starmer)",
      title: "Probability Calibration (Platt Scaling & Isotonic)", duration: "17m",
      videoId: "FkfPu_a_8_0", altVideoId: "4jRBRDbJemM", startSec: 0, focus: "00:00 – 17:00",
      takeaways: [
        "Ensure predicted probabilities match true empirical event rates when computing Expected Value.",
        "Measure calibration quality using Brier Score Loss."
      ],
      lab: "Compute brier_score_loss(y_true, y_prob) comparing calibrated vs uncalibrated probability estimates.",
      hint: "from sklearn.metrics import brier_score_loss",
      starterPy: "from sklearn.metrics import brier_score_loss\ny_true = [0, 0, 1, 1, 0, 1]\ny_prob = [0.15, 0.25, 0.78, 0.85, 0.20, 0.72]\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 139, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "ArjanCodes",
      title: "ML Experiment Tracking & Reproducibility", duration: "19m",
      videoId: "pTT7HMqDnJw", altVideoId: "vBH6GRJ1REM", startSec: 300, focus: "05:00 – 24:00",
      takeaways: [
        "Log random seeds, hyperparameters, dataset hashes, and validation metrics for every run.",
        "Compare candidate runs systematically before promoting to production."
      ],
      lab: "Write a lightweight ExperimentLogger class storing run configs and returning the best run by ROC-AUC.",
      hint: "max(self.runs, key=lambda r: r['auc'])",
      starterPy: "class ExperimentLogger:\n    def __init__(self): self.runs = []\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 140, month: 5, week: 20, subject: "ML Engineering & Deployment", instructor: "Krish Naik",
      title: "Month 5 Capstone: Production Churn Scoring System", duration: "28m",
      videoId: "pqNCD_5r0IU", altVideoId: "GrJP9FLV3FE", startSec: 600, focus: "10:00 – 38:00",
      takeaways: [
        "Combine preprocessing Pipeline, gradient boosting classifier, threshold tuning, and drift monitoring.",
        "Deliver an end-to-end production ML artifact."
      ],
      lab: "Train a Pipeline(StandardScaler, HistGradientBoostingClassifier), evaluate ROC-AUC, and score 2 new customers.",
      hint: "pipe.fit(X_train, y_train); pipe.predict_proba(new_customers)[:, 1]",
      starterPy: "import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import HistGradientBoostingClassifier\nfrom sklearn.metrics import roc_auc_score\nX, y = make_classification(n_samples=200, n_features=4, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },

    // ==================== MONTH 6: DEEP LEARNING, NLP & GENAI RAG (DAYS 141–168) ====================
    {
      day: 141, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "3Blue1Brown",
      title: "Perceptrons, Activations (ReLU, GELU) & Forward Pass", duration: "19m",
      videoId: "aircAruvnKk", altVideoId: "VMj-3S1tku0", startSec: 0, focus: "00:00 – 19:15",
      takeaways: [
        "Understand how stacked linear transformations + non-linear activations approximate complex functions.",
        "Compare ReLU, GELU, and Softmax roles across hidden vs output layers."
      ],
      lab: "Implement a 2-layer MLP forward pass in NumPy using ReLU hidden activation and Softmax output.",
      hint: "h = np.maximum(0, X @ W1 + b1); logits = h @ W2 + b2",
      starterPy: "import numpy as np\nX = np.array([[1.0, -0.5, 2.0]])\nW1 = np.array([[0.5, -0.2], [0.1, 0.8], [-0.3, 0.4]])\nb1 = np.zeros(2)\nW2 = np.array([[0.7, -0.4], [0.2, 0.9]])\nb2 = np.zeros(2)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 142, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "Andrej Karpathy",
      title: "Backpropagation, Chain Rule & Micrograd Intuition", duration: "26m",
      videoId: "VMj-3S1tku0", altVideoId: "Ilg3gGewQ5U", startSec: 0, focus: "00:00 – 26:00",
      takeaways: [
        "Trace exact partial derivatives backward through computational graphs using the chain rule.",
        "Diagnose vanishing vs exploding gradients."
      ],
      lab: "Compute one manual gradient descent step minimizing L = (w * x - y)^2 with learning rate lr = 0.05.",
      hint: "grad_w = 2 * (w * x - y) * x; w = w - lr * grad_w",
      starterPy: "x, y, w, lr = 3.0, 12.0, 1.5, 0.05\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 143, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "StatQuest (Josh Starmer)",
      title: "Optimizers: SGD, Momentum, RMSprop & AdamW", duration: "20m",
      videoId: "IN2XmBhILt4", altVideoId: "VMj-3S1tku0", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Understand how Adam combines first-moment momentum with adaptive per-parameter learning rates.",
        "Use AdamW decoupled weight decay for modern neural architectures."
      ],
      lab: "Run 50 gradient descent steps on f(w) = (w - 4)^2 starting from w = -6 and print final w.",
      hint: "for _ in range(50): w -= 0.1 * 2 * (w - 4)",
      starterPy: "w = -6.0\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 144, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "CampusX (Nitish Singh)",
      title: "Regularizing Neural Nets: Dropout, BatchNorm & Early Stopping", duration: "21m",
      videoId: "3_8_5_1_9_0", altVideoId: "aircAruvnKk", startSec: 0, focus: "00:00 – 21:10",
      takeaways: [
        "Prevent neuron co-adaptation with inverted Dropout during training.",
        "Stabilize layer activations with BatchNorm / LayerNorm."
      ],
      lab: "Train sklearn MLPClassifier(hidden_layer_sizes=(32,16), early_stopping=True, random_state=42) and print score.",
      hint: "from sklearn.neural_network import MLPClassifier",
      starterPy: "from sklearn.datasets import make_moons\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.neural_network import MLPClassifier\nX, y = make_moons(n_samples=200, noise=0.2, random_state=42)\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 145, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "3Blue1Brown",
      title: "Convolutional Neural Networks (CNNs) & Spatial Filters", duration: "22m",
      videoId: "KuXjwB4LzSA", altVideoId: "aircAruvnKk", startSec: 0, focus: "00:00 – 22:00",
      takeaways: [
        "Understand translation-invariant feature extraction using sliding 2D convolution kernels.",
        "Reduce spatial dimensions with MaxPooling."
      ],
      lab: "Apply a 1D edge-detection kernel [-1, 0, 1] across a 1D signal array using np.convolve(..., mode='valid').",
      hint: "np.convolve(signal, [-1, 0, 1], mode='valid')",
      starterPy: "import numpy as np\nsignal = np.array([10, 10, 10, 50, 50, 50, 10, 10])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 146, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "CampusX (Nitish Singh)",
      title: "Transfer Learning & Pretrained Backbones", duration: "19m",
      videoId: "yofjFQddwHE", altVideoId: "KuXjwB4LzSA", startSec: 0, focus: "00:00 – 19:00",
      takeaways: [
        "Freeze pretrained backbone layers as feature extractors and fine-tune lightweight task heads.",
        "Achieve high accuracy on small domain datasets in minutes."
      ],
      lab: "Simulate feature extraction by projecting 8D raw vectors through a fixed pretrained matrix W_frozen, then fitting LogisticRegression.",
      hint: "X_emb = np.maximum(0, X @ W_frozen)",
      starterPy: "import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.linear_model import LogisticRegression\nX, y = make_classification(n_samples=100, n_features=8, random_state=42)\nW_frozen = np.random.default_rng(42).normal(size=(8, 4))\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 147, month: 6, week: 21, subject: "Neural Networks & Deep Learning", instructor: "Andrej Karpathy",
      title: "Week 21 Capstone: NumPy Neural Net Classifier", duration: "27m",
      videoId: "VMj-3S1tku0", altVideoId: "aircAruvnKk", startSec: 1560, focus: "26:00 – 53:00",
      takeaways: [
        "Implement forward pass, binary cross-entropy loss, and gradient updates from scratch.",
        "Verify loss decreases monotonically across training epochs."
      ],
      lab: "Train a single-layer sigmoid classifier in NumPy for 100 epochs on X, y and print initial vs final BCE loss.",
      hint: "p = 1 / (1 + np.exp(-(X @ w + b))); grad_w = (X.T @ (p - y)) / len(y)",
      starterPy: "import numpy as np\nX = np.array([[0.2, 0.1], [0.1, 0.3], [0.8, 0.9], [0.9, 0.7]])\ny = np.array([0.0, 0.0, 1.0, 1.0])\nw, b = np.zeros(2), 0.0\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 148, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "Andrej Karpathy",
      title: "Subword Tokenization (BPE) & Vocabulary Design", duration: "24m",
      videoId: "zduSFxRajkE", altVideoId: "wjZofJX0v4M", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Understand how Byte-Pair Encoding (BPE) balances character flexibility with word-level efficiency.",
        "Handle out-of-vocabulary terms, code, and multilingual text cleanly."
      ],
      lab: "Implement one step of pair frequency counting on a list of token tuples to find the most frequent adjacent pair.",
      hint: "Use collections.Counter on zip(tokens, tokens[1:]).",
      starterPy: "from collections import Counter\ntokens = ['d','a','t','a','_','d','a','t','a','_','s','c','i']\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 149, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "StatQuest (Josh Starmer)",
      title: "TF-IDF Vectorization & Classical Text Classification", duration: "18m",
      videoId: "vZAXhnPO布局", altVideoId: "0s_1IsROgDc", startSec: 0, focus: "00:00 – 18:10",
      takeaways: [
        "Downweight ubiquitous stopwords while boosting discriminative domain keywords via TF-IDF.",
        "Build ultra-fast baseline ticket/sentiment classifiers with TfidfVectorizer + LogisticRegression."
      ],
      lab: "Fit TfidfVectorizer on the support tickets and classify whether a new ticket is 'Billing' or 'Technical'.",
      hint: "from sklearn.feature_extraction.text import TfidfVectorizer",
      starterPy: "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\ndocs = ['invoice payment failed', 'refund gst receipt', 'api timeout error', 'server crash 500']\nlabels = ['Billing', 'Billing', 'Technical', 'Technical']\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 150, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "3Blue1Brown",
      title: "Word Embeddings & Semantic Vector Geometry", duration: "21m",
      videoId: "wjZofJX0v4M", altVideoId: "aircAruvnKk", startSec: 0, focus: "00:00 – 21:00",
      takeaways: [
        "Represent words and sentences as dense semantic vectors where direction encodes meaning.",
        "Measure semantic proximity using cosine similarity."
      ],
      lab: "Find which candidate vector in 'bank' is semantically closest (highest cosine similarity) to 'query'.",
      hint: "np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))",
      starterPy: "import numpy as np\nquery = np.array([0.8, 0.6, 0.1])\nbank = {'sql_query': np.array([0.75, 0.65, 0.05]), 'cricket_bat': np.array([0.1, 0.2, 0.95])}\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 151, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "3Blue1Brown",
      title: "Self-Attention, Queries, Keys & Values (QKV)", duration: "26m",
      videoId: "eMlx5fFNoYc", altVideoId: "wjZofJX0v4M", startSec: 0, focus: "00:00 – 26:10",
      takeaways: [
        "Compute contextualized token representations via Scaled Dot-Product Attention: softmax(Q K^T / sqrt(d_k)) V.",
        "Understand why scaling by sqrt(d_k) prevents softmax saturation."
      ],
      lab: "Implement scaled_dot_product_attention(Q, K, V) in NumPy and print the output matrix.",
      hint: "scores = (Q @ K.T) / np.sqrt(Q.shape[-1]); weights = np.exp(scores) / np.exp(scores).sum(axis=-1, keepdims=True)",
      starterPy: "import numpy as np\nQ = np.array([[1.0, 0.0], [0.0, 1.0]])\nK = np.array([[1.0, 0.0], [0.5, 0.5]])\nV = np.array([[10.0, 20.0], [30.0, 40.0]])\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 152, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "Andrej Karpathy",
      title: "Multi-Head Attention, Causal Masks & Positional Encoding", duration: "25m",
      videoId: "kCc8FmEb1nY", altVideoId: "eMlx5fFNoYc", startSec: 0, focus: "00:00 – 25:00",
      takeaways: [
        "Apply upper-triangular causal masks (-inf) so autoregressive decoders cannot peek at future tokens.",
        "Inject token order via RoPE / sinusoidal positional embeddings."
      ],
      lab: "Build a 4x4 causal attention mask where future positions are -1e9 and apply row-wise softmax.",
      hint: "mask = np.triu(np.ones((4, 4)) * -1e9, k=1)",
      starterPy: "import numpy as np\nscores = np.ones((4, 4))\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 153, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "CampusX (Nitish Singh)",
      title: "Encoder (BERT) vs Decoder (GPT/Gemini) Architectures", duration: "20m",
      videoId: "t45S_MwAcwk", altVideoId: "wjZofJX0v4M", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Use bidirectional encoders for dense embeddings, reranking, and fast classification.",
        "Use causal decoders for reasoning, generation, tool calling, and structured JSON extraction."
      ],
      lab: "Given task requirements (latency, task_type), write a router recommending 'Encoder' vs 'Decoder'.",
      hint: "Route 'embedding' / 'classification' -> 'Encoder'; 'generation' / 'reasoning' -> 'Decoder'.",
      starterPy: "tasks = ['semantic_search_embedding', 'sql_code_generation', 'ticket_classification']\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 154, month: 6, week: 22, subject: "NLP, Transformers & Attention", instructor: "Codebasics (Dhaval Patel)",
      title: "Week 22 Capstone: Support Ticket Auto-Triage Engine", duration: "24m",
      videoId: "G4MBc40TdMs", altVideoId: "0s_1IsROgDc", startSec: 300, focus: "05:00 – 29:00",
      takeaways: [
        "Combine TF-IDF n-grams with calibrated linear classifiers for instant routing.",
        "Return predicted queue alongside confidence score."
      ],
      lab: "Train a TF-IDF + LogisticRegression classifier and predict queue + max probability for incoming tickets.",
      hint: "probs = clf.predict_proba(X_new)",
      starterPy: "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\ntrain_x = ['payment declined', 'gst invoice missing', 'app slow', 'login bug', 'refund status', 'api 502']\ntrain_y = ['Finance', 'Finance', 'Tech', 'Tech', 'Finance', 'Tech']\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 155, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "DeepLearning.AI (Andrew Ng)",
      title: "Prompt Engineering, System Roles & Structured JSON", duration: "19m",
      videoId: "dOxUroR57xs", altVideoId: "zjkBMFhNj_g", startSec: 0, focus: "00:00 – 19:15",
      takeaways: [
        "Separate immutable system instructions from untrusted user input to prevent prompt injection.",
        "Enforce deterministic JSON schemas for downstream data pipelines."
      ],
      lab: "Parse and validate an LLM JSON extraction payload ensuring required keys ['intent', 'confidence'] exist.",
      hint: "json.loads(raw_llm_out) and verify isinstance(data['confidence'], float)",
      starterPy: "import json\nraw_llm_out = '{\"intent\": \"refund_request\", \"confidence\": 0.94, \"order_id\": \"INV-2041\"}'\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 156, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "Krish Naik",
      title: "Document Chunking Strategies & Overlap Windows", duration: "20m",
      videoId: "8OJC21T2SL4", altVideoId: "T-D1OfcDW1M", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Preserve semantic boundary context across chunks using recursive character splitting with 15–20% overlap.",
        "Tune chunk size to balance retrieval precision vs context completeness."
      ],
      lab: "Write chunk_text(text, chunk_size=40, overlap=10) returning overlapping sliding text windows.",
      hint: "step = chunk_size - overlap; [text[i:i+chunk_size] for i in range(0, len(text), step)]",
      starterPy: "def chunk_text(text, chunk_size=40, overlap=10):\n    pass\n\nsample = 'DataForge curriculum trains Python, SQL, Statistics, Machine Learning, and Production RAG systems.'\nprint(chunk_text(sample))\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 157, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "IBM Technology",
      title: "Vector Databases, HNSW Indexing & Hybrid Search", duration: "18m",
      videoId: "T-D1OfcDW1M", altVideoId: "8OJC21T2SL4", startSec: 0, focus: "00:00 – 18:10",
      takeaways: [
        "Understand Hierarchical Navigable Small World (HNSW) graphs for sub-millisecond ANN vector retrieval.",
        "Combine dense semantic search with sparse BM25 keyword search using Reciprocal Rank Fusion (RRF)."
      ],
      lab: "Implement Reciprocal Rank Fusion: score(doc) = 1/(60 + rank_dense) + 1/(60 + rank_bm25).",
      hint: "Sum 1 / (60 + r) across both ranked lists for each doc ID.",
      starterPy: "dense_rank = {'docA': 1, 'docB': 2, 'docC': 3}\nbm25_rank = {'docC': 1, 'docA': 2, 'docB': 3}\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 158, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "CampusX (Nitish Singh)",
      title: "End-to-End Retrieval-Augmented Generation (RAG)", duration: "24m",
      videoId: "Yjd3_8_5_1_0", altVideoId: "T-D1OfcDW1M", startSec: 0, focus: "00:00 – 24:00",
      takeaways: [
        "Ground LLM answers strictly in retrieved private knowledge chunks with source citations.",
        "Instruct the model to say 'Insufficient context' rather than hallucinating."
      ],
      lab: "Retrieve top-2 matching chunks via TF-IDF cosine similarity and assemble a grounded RAG prompt.",
      hint: "TfidfVectorizer().fit_transform(chunks + [query]) then cosine_similarity",
      starterPy: "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\nchunks = ['GST rate on SaaS is 18%.', 'Refunds take 5 business days.', 'Support hours are 9 AM to 6 PM IST.']\nquery = 'How many days do refunds take?'\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 159, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "DeepLearning.AI (Andrew Ng)",
      title: "Evaluating RAG: Faithfulness, Context Recall & RAGAS", duration: "21m",
      videoId: "dOxUroR57xs", altVideoId: "T-D1OfcDW1M", startSec: 600, focus: "10:00 – 31:00",
      takeaways: [
        "Measure Retrieval quality (Context Precision/Recall) separately from Generation quality (Faithfulness).",
        "Detect unsupported claims automatically with LLM-as-a-Judge."
      ],
      lab: "Compute Context Recall@3: fraction of ground-truth relevant doc IDs present in top_k retrieved IDs.",
      hint: "len(set(relevant) & set(retrieved[:3])) / len(relevant)",
      starterPy: "relevant = ['doc_2', 'doc_5', 'doc_8']\nretrieved = ['doc_1', 'doc_2', 'doc_5', 'doc_9']\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 160, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "Andrej Karpathy",
      title: "Parameter-Efficient Fine-Tuning (LoRA & QLoRA)", duration: "25m",
      videoId: "zjkBMFhNj_g", altVideoId: "kCc8FmEb1nY", startSec: 0, focus: "00:00 – 25:00",
      takeaways: [
        "Adapt foundation models by freezing base weights W and training low-rank adapters A @ B (rank r << d).",
        "Reduce trainable parameters by >98% while eliminating inference latency overhead."
      ],
      lab: "Calculate trainable parameter count for a LoRA adapter (d_in=4096, d_out=4096, rank=8) vs full weight matrix.",
      hint: "lora_params = r * (d_in + d_out); full_params = d_in * d_out",
      starterPy: "d_in, d_out, r = 4096, 4096, 8\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 161, month: 6, week: 23, subject: "GenAI, RAG & LLM Engineering", instructor: "DeepLearning.AI (Andrew Ng)",
      title: "Week 23 Capstone: Enterprise Policy Q&A Retriever", duration: "26m",
      videoId: "T-D1OfcDW1M", altVideoId: "8OJC21T2SL4", startSec: 300, focus: "05:00 – 31:00",
      takeaways: [
        "Combine chunking, metadata filtering, TF-IDF/vector ranking, and confidence gating.",
        "Refuse low-similarity queries below threshold 0.15 safely."
      ],
      lab: "Retrieve top chunk for query; if similarity < 0.15 return 'No matching policy found', else return chunk + score.",
      hint: "best_idx = sims.argmax(); best_score = sims[best_idx]",
      starterPy: "from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\ndocs = ['Annual leave policy allows 24 paid days.', 'Travel reimbursement requires GST invoice.']\nquery = 'What is the weather in Tokyo?'\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 162, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "DeepLearning.AI (Andrew Ng)",
      title: "Agentic Tool Calling & Function Execution Loops", duration: "22m",
      videoId: "sal78ACtGTc", altVideoId: "zjkBMFhNj_g", startSec: 0, focus: "00:00 – 22:10",
      takeaways: [
        "Equip LLMs with deterministic Python/SQL tools via structured tool schemas.",
        "Execute ReAct (Reason -> Act -> Observe) loops safely with max-step guards."
      ],
      lab: "Implement a tool dispatcher mapping tool_call JSON {'tool': 'calc_gst', 'args': {'amt': 5000}} to a Python function.",
      hint: "TOOLS[call['tool']](**call['args'])",
      starterPy: "def calc_gst(amt): return round(amt * 0.18, 2)\nTOOLS = {'calc_gst': calc_gst}\ncall = {'tool': 'calc_gst', 'args': {'amt': 5000}}\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 163, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "CampusX (Nitish Singh)",
      title: "Text-to-SQL Analytics Agents & Read-Only Guardrails", duration: "21m",
      videoId: "7t2alSnE2-I", altVideoId: "sal78ACtGTc", startSec: 420, focus: "07:00 – 28:00",
      takeaways: [
        "Pass exact table DDL schemas into the prompt so the LLM generates valid dialect-specific SQL.",
        "Block mutating keywords (DROP, DELETE, UPDATE, ALTER) before executing generated SQL."
      ],
      lab: "Write is_safe_select(sql_str) returning True only if query starts with SELECT and contains no forbidden keywords.",
      hint: "Check upper-cased tokens against {'DROP','DELETE','UPDATE','INSERT','ALTER'}.",
      starterPy: "def is_safe_select(sql_str: str) -> bool:\n    pass\n\nprint(is_safe_select('SELECT * FROM orders;'))\nprint(is_safe_select('DROP TABLE orders;'))\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 164, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "ArjanCodes",
      title: "LLM Guardrails, PII Redaction & Token Cost Budgets", duration: "19m",
      videoId: "pTT7HMqDnJw", altVideoId: "sal78ACtGTc", startSec: 600, focus: "10:00 – 29:00",
      takeaways: [
        "Scrub emails, phone numbers, and PAN/Aadhaar patterns via regex before sending prompts to external APIs.",
        "Track input/output token costs per user session."
      ],
      lab: "Mask email addresses in raw_prompt with '[REDACTED_EMAIL]' using re.sub().",
      hint: "re.sub(r'[\\w.-]+@[\\w.-]+\\.\\w+', '[REDACTED_EMAIL]', raw_prompt)",
      starterPy: "import re\nraw_prompt = 'Contact ishan.m@example.com regarding invoice INV-2041.'\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 165, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "Alex The Analyst",
      title: "GitHub Portfolio Architecture & Impact READMEs", duration: "20m",
      videoId: "cnjhHZNJEDk", altVideoId: "HVsySz-h9r4", startSec: 0, focus: "00:00 – 20:00",
      takeaways: [
        "Structure every portfolio repo with Business Problem -> Architecture -> Key Metrics -> Live Demo link.",
        "Quantify business impact (e.g., 'Reduced false-positive churn alerts by 28%')."
      ],
      lab: "Generate a structured Markdown project summary block from the project metadata dictionary.",
      hint: "Use multi-line Python f-strings formatting metrics and stack cleanly.",
      starterPy: "proj = {'name': 'ChurnGuard ML', 'auc': 0.89, 'lift': '24% retention lift', 'stack': 'Python, SQL, Scikit-Learn, FastAPI'}\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 166, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "Luke Barousse",
      title: "Data Analyst & Junior DS Technical Interview Prep", duration: "23m",
      videoId: "7mz73uXD9DA", altVideoId: "cnjhHZNJEDk", startSec: 16500, focus: "04:35:00 – 04:58:00",
      takeaways: [
        "Master live SQL window function challenges, A/B testing case studies, and bias-variance explanations.",
        "Communicate trade-offs concisely using the STAR + Metrics framework."
      ],
      lab: "Solve the classic interview problem: find the 2nd highest distinct salary in the salaries list without sorting.",
      hint: "Track top1 and top2 in a single O(n) pass.",
      starterPy: "salaries = [95000, 120000, 110000, 120000, 88000]\n",
      starterSql: "SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;"
    },
    {
      day: 167, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "Krish Naik",
      title: "System Design: End-to-End Hybrid ML + RAG Platform", duration: "24m",
      videoId: "sal78ACtGTc", altVideoId: "pqNCD_5r0IU", startSec: 480, focus: "08:00 – 32:00",
      takeaways: [
        "Design cohesive architectures combining SQL data warehouses, tabular ML scorers, and RAG copilots.",
        "Plan caching, fallback models, and latency SLAs."
      ],
      lab: "Simulate a hybrid router that routes numeric KPI queries to SQL and policy text queries to RAG.",
      hint: "Check if query contains {'revenue','sum','count','average'} -> 'SQL_ENGINE' else 'RAG_ENGINE'.",
      starterPy: "queries = ['What is total revenue in West?', 'What is the refund policy?']\n",
      starterSql: "SELECT * FROM orders LIMIT 5;"
    },
    {
      day: 168, month: 6, week: 24, subject: "AI Agents & Career Portfolio Launch", instructor: "Andrej Karpathy",
      title: "Grand Graduation Capstone: Full-Stack AI Intelligence Pipeline", duration: "30m",
      videoId: "zjkBMFhNj_g", altVideoId: "cnjhHZNJEDk", startSec: 600, focus: "10:00 – 40:00",
      takeaways: [
        "Synthesize 168 days of Python, SQL, Statistics, Machine Learning, and GenAI engineering.",
        "Ship your complete portfolio to GitHub and step confidently into Data Analyst & Junior Data Scientist roles."
      ],
      lab: "Build a unified analytics & ML pipeline: clean data, fit a classifier, evaluate AUC, and print graduation readiness report.",
      hint: "Combine StandardScaler + LogisticRegression + roc_auc_score in one clean run.",
      starterPy: "import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import roc_auc_score\n\nX, y = make_classification(n_samples=300, n_features=6, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nsc = StandardScaler()\nclf = LogisticRegression().fit(sc.fit_transform(X_tr), y_tr)\nauc = roc_auc_score(y_te, clf.predict_proba(sc.transform(X_te))[:, 1])\nprint(f'168-Day Graduation Pipeline Verified | Test ROC-AUC: {auc:.3f}')\n",
      starterSql: "SELECT department, COUNT(*) AS team_size, SUM(salary) AS total_budget FROM employees GROUP BY department ORDER BY total_budget DESC;"
    }
  ];

  const normalizedPart2 = RAW_PART_2.map(item => ({
    ...item,
    altVideoId: item.altVideoId || item.videoId,
    startSec: item.startSec || 0
  }));

  if (Array.isArray(window.CURRICULUM)) {
    window.CURRICULUM.push(...normalizedPart2);
  } else {
    window.CURRICULUM = normalizedPart2;
  }
})();
})();
