// DataForge // Instinct OS - Decoupled 168-Day Curriculum (Part 1 of 2: Days 1-84)
// Pure ASCII-safe strings for zero-encoding-error GitHub Pages deployment.

window.CURRICULUM = [
  {
    day: 1,
    month: 1,
    module: "M1: Python & Git",
    title: "Python Zero-to-One: Syntax Anatomy, Variables & Types",
    instructor: "Programming with Mosh",
    duration: "20m",
    videoId: "kqtD5dpn9C8",
    altVideoId: "LKFrQXaoSMQ",
    startSec: 0,
    bridge: "Launches our continuous ShopPulse pipeline from absolute zero by learning how Python reads lines and stores product data.",
    takeaways: [
      "Vocabulary: a variable is a named box, '=' is the assignment operator, and int / float / str / bool are data types.",
      "Functions like print() and type() take inputs (arguments) inside parentheses () and perform an action.",
      "Type conversion functions—int(), float(), str(), bool()—convert values between types so math and text never collide."
    ],
    lab: {
      lang: "python",
      title: "Anatomy of a ShopPulse Product Record",
      prompt: "Read the labeled syntax parts, then fill in the 2 TODO lines to compute gst_amount and total_payable.",
      hint: "Multiply subtotal by gst_rate for gst_amount, then add subtotal + gst_amount.",
      starterCode: "# 1. VARIABLES & DATA TYPES (name = value)\nsku = 'SP-101'              # str (string: text inside quotes)\nunit_price_inr = 4999.0     # float (decimal number)\nquantity = 3                # int (integer: whole number)\ngst_rate = 0.18             # float\n\n# 2. EXPRESSIONS & OPERATORS (* for multiply, + for add)\nsubtotal = unit_price_inr * quantity\n\n# TODO 1: Multiply subtotal by gst_rate and store in gst_amount\ngst_amount = ___\n\n# TODO 2: Add subtotal and gst_amount and store in total_payable\ntotal_payable = ___\n\n# 3. FUNCTION CALL (print) with an f-string\nprint(f'{sku} | Subtotal: {subtotal} | Total: INR {total_payable:,.2f}')\n"
    }
  },
  {
    day: 2,
    month: 1,
    module: "M1: Python & Git",
    title: "Strings, Zero-Based Indexing & Text Methods",
    instructor: "Programming with Mosh",
    duration: "12m",
    videoId: "kqtD5dpn9C8",
    altVideoId: "LKFrQXaoSMQ",
    startSec: 1125,
    bridge: "Demystifies dot-notation methods (city.strip()) and square-bracket indexing (sku[0:2]) used across all data cleaning.",
    takeaways: [
      "Vocabulary: a method is a function attached to an object via a dot (city.strip()), whereas len(city) is a standalone function.",
      "Python uses zero-based indexing: index [0] is the first character, [-1] is the last, and [0:2] slices indices 0 and 1.",
      "Strings are immutable—methods like .upper() and .title() return a brand-new string rather than modifying the original."
    ],
    lab: {
      lang: "python",
      title: "Cleaning Dirty SKU & City Strings",
      prompt: "Fill in the 3 TODO lines using string methods (.strip(), .title(), .upper()) and slicing to clean raw inputs.",
      hint: "Chain raw_city.strip().title(), use raw_sku.strip().upper(), and slice clean_sku[0:2].",
      starterCode: "raw_city = '   navi mumbai  '\nraw_sku = '  sp-402-blk '\n\n# TODO 1: Remove outer spaces with .strip() and capitalize words with .title()\nclean_city = ___\n\n# TODO 2: Remove outer spaces and convert raw_sku to uppercase with .upper()\nclean_sku = ___\n\n# TODO 3: Extract the first 2 characters ('SP') using slice [0:2]\nprefix = ___\n\nprint(f'City: {clean_city} | SKU: {clean_sku} | Prefix: {prefix} | Len: {len(clean_sku)}')\n"
    }
  },
  {
    day: 3,
    month: 1,
    module: "M1: Python & Git",
    title: "Comparison Operators & Decision Logic (if / elif / else)",
    instructor: "Programming with Mosh",
    duration: "15m",
    videoId: "kqtD5dpn9C8",
    altVideoId: "rRTjPnVooxE",
    startSec: 1500,
    bridge: "Builds crystal-clear mental models for boolean conditions (True/False) and indented decision trees.",
    takeaways: [
      "Vocabulary: '=' assigns a value (x = 5), while '==' compares two values (x == 5) and returns a bool (True or False).",
      "Logical operators (and, or, not) combine multiple comparisons into a single True/False condition.",
      "A colon ':' ends the if/elif/else header line, and 4 spaces of indentation mark which lines belong inside that branch."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Shipping & Tier Fee Router",
      prompt: "Complete the if / elif / else conditions to set shipping_fee_inr based on order_total and is_prime.",
      hint: "Use is_prime or order_total >= 3000 for 0.0, elif order_total >= 1000 for 49.0, else 99.0.",
      starterCode: "order_total = 1850.0\nis_prime = False\n\n# TODO: Free shipping (0.0) if is_prime OR order_total >= 3000; 49.0 if >= 1000; else 99.0\nif ___:\n    shipping_fee_inr = 0.0\nelif ___:\n    shipping_fee_inr = 49.0\nelse:\n    shipping_fee_inr = 99.0\n\nprint(f'Order: INR {order_total} | Shipping: INR {shipping_fee_inr}')\n"
    }
  },
  {
    day: 4,
    month: 1,
    module: "M1: Python & Git",
    title: "Lists, Tuples & Sequence Indexing/Slicing",
    instructor: "Programming with Mosh",
    duration: "12m",
    videoId: "kqtD5dpn9C8",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 2520,
    bridge: "Gives you full command of Python's two ordered sequences—mutable lists [...] and locked tuples (...)—before looping.",
    takeaways: [
      "Vocabulary: a list [10, 20, 30] is mutable (you can .append() or overwrite items); a tuple (10, 20, 30) is immutable (locked).",
      "Each slot in a sequence is an element accessed by its integer index: items[0] is first, items[-1] is last.",
      "Use len(items) to count elements, sum(items) to total numbers, and 'value in items' to check membership."
    ],
    lab: {
      lang: "python",
      title: "Cart Basket List Operations & Tuple Constants",
      prompt: "Append 1299.0 to basket_inr, access the first and last prices via indexing, and print the basket sum.",
      hint: "Use basket_inr.append(1299.0), basket_inr[0], and basket_inr[-1].",
      starterCode: "GST_SLABS = (0.05, 0.12, 0.18)          # tuple (immutable)\nbasket_inr = [4999.0, 1499.0, 799.0]    # list (mutable)\n\n# TODO 1: Add 1299.0 to the end of basket_inr using .append()\n___\n\n# TODO 2: Access the first element [0] and last element [-1]\nfirst_item = ___\nlast_item = ___\n\nprint('Items:', len(basket_inr), '| First:', first_item, '| Last:', last_item)\nprint('Basket Sum: INR', sum(basket_inr), '| Standard GST:', GST_SLABS[-1])\n"
    }
  },
  {
    day: 5,
    month: 1,
    module: "M1: Python & Git",
    title: "Loops Deep-Dive: for, while & range()",
    instructor: "Programming with Mosh",
    duration: "10m",
    videoId: "kqtD5dpn9C8",
    altVideoId: "rRTjPnVooxE",
    startSec: 2340,
    bridge: "Connects Day 3 conditionals and Day 4 lists into step-by-step accumulator loops you can read and write from scratch.",
    takeaways: [
      "Vocabulary: in 'for price in prices:', 'prices' is the iterable list and 'price' is the loop variable holding one item per pass.",
      "The accumulator pattern starts with a counter/total before the loop (total = 0) and updates it inside (total += price).",
      "Use continue to skip an unwanted item in the current pass, and break to exit the loop early."
    ],
    lab: {
      lang: "python",
      title: "Accumulator Loop Over ShopPulse Order Prices",
      prompt: "Complete the for loop to sum and count only orders greater than 2000 INR.",
      hint: "Inside 'for p in prices:', check 'if p > 2000:' and update high_total and high_count.",
      starterCode: "prices = [1499.0, 4999.0, 799.0, 8999.0, 2499.0]\nhigh_total = 0.0\nhigh_count = 0\n\n# TODO: If p > 2000, add p to high_total and add 1 to high_count\nfor p in prices:\n    ___\n\nprint(f'Orders > 2000 INR: {high_count} | Combined Total: INR {high_total:.2f}')\n"
    }
  },
  {
    day: 6,
    month: 1,
    module: "M1: Python & Git",
    title: "Functions, Parameters, Scope & Return Values",
    instructor: "Bro Code",
    duration: "11m",
    videoId: "89cGQjB5R4M",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Refactors inline loops into reusable, testable pricing functions that our later ETL pipeline can import.",
    takeaways: [
      "Vocabulary: parameters are placeholder names inside def func(param); arguments are actual values passed when calling func(val).",
      "return sends a computed value back to the caller; print() only displays text on screen.",
      "Variables created inside a function have local scope and vanish once the function finishes."
    ],
    lab: {
      lang: "python",
      title: "Reusable Net Invoice & Margin Function",
      prompt: "Complete calculate_invoice(amount_inr, discount_pct=0.0, gst_pct=0.18) returning the rounded final invoice amount.",
      hint: "discounted = amount_inr * (1.0 - discount_pct); total = discounted * (1.0 + gst_pct); return round(total, 2).",
      starterCode: "def calculate_invoice(amount_inr, discount_pct=0.0, gst_pct=0.18):\n    # TODO: Apply discount_pct, then add gst_pct, and return rounded to 2 decimals\n    ___\n\nprint('Standard:', calculate_invoice(2499.0))\nprint('Gold Tier:', calculate_invoice(8999.0, discount_pct=0.10))\n"
    }
  },
  {
    day: 7,
    month: 1,
    module: "M1: Python & Git",
    title: "Dictionaries & Hash-Map Lookups",
    instructor: "Indently",
    duration: "9m",
    videoId: "u0yr9B3nH8c",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Models ShopPulse product catalogs and JSON records as O(1) key-value hash maps using safe dictionary accessors.",
    takeaways: [
      "Vocabulary: a dictionary {'SP-101': 4999.0} maps unique keys to values inside curly braces {}.",
      "Use catalog.get(key, default) instead of catalog[key] to avoid KeyError crashes when a SKU is missing.",
      "Loop over both keys and values simultaneously using 'for key, val in my_dict.items():'."
    ],
    lab: {
      lang: "python",
      title: "O(1) SKU Catalog Lookup & Iteration",
      prompt: "Fill in the TODO lines to safely look up 'SP-999' with .get() and loop through catalog.items().",
      hint: "Use catalog.get('SP-999', {'name': 'Unlisted SKU', 'stock': 0}) and catalog.items().",
      starterCode: "catalog = {\n    'SP-101': {'name': 'Mechanical Keyboard', 'price': 4999.0, 'stock': 14},\n    'SP-102': {'name': 'Ergonomic Mouse', 'price': 1499.0, 'stock': 32},\n}\n\n# TODO 1: Safely look up 'SP-999' with fallback {'name': 'Unlisted SKU', 'stock': 0}\nmissing_item = ___\nprint('Lookup SP-999 ->', missing_item['name'])\n\n# TODO 2: Iterate over catalog.items()\nfor sku, info in ___:\n    print(f\"{sku}: {info['name']} (Stock: {info['stock']})\")\n"
    }
  },
  {
    day: 8,
    month: 1,
    module: "M1: Python & Git",
    title: "Sets & O(1) Membership Optimization",
    instructor: "Indently",
    duration: "6m",
    videoId: "k_Hp4C-OQmM",
    altVideoId: "u0yr9B3nH8c",
    startSec: 0,
    bridge: "Uses set algebra to deduplicate customer IDs and compute repeat vs churned buyers before we even touch SQL.",
    takeaways: [
      "Vocabulary: a set {101, 102, 103} is an unordered collection of strictly unique items with instant O(1) lookup.",
      "Compute customer overlap (&), combined union (|), and difference (-) directly with set operators.",
      "Convert a list with duplicates into unique IDs via set(my_list)."
    ],
    lab: {
      lang: "python",
      title: "Cohort Overlap & Churn Detector via Sets",
      prompt: "Given Jan and Feb active customer ID sets, compute retained buyers, new Feb buyers, and churned Jan buyers.",
      hint: "Retained = jan & feb, New = feb - jan, Churned = jan - feb.",
      starterCode: "jan_buyers = {101, 102, 103, 104, 105}\nfeb_buyers = {102, 104, 106, 107}\n\n# TODO: Use &, -, and - set operators\nretained = ___\nnew_feb = ___\nchurned = ___\n\nprint('Retained:', sorted(retained))\nprint('New in Feb:', sorted(new_feb))\nprint('Churned:', sorted(churned))\n"
    }
  },
  {
    day: 9,
    month: 1,
    module: "M1: Python & Git",
    title: "List, Dict & Set Comprehensions",
    instructor: "Indently",
    duration: "13m",
    videoId: "HmZSlcZASGw",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Transforms multi-line filtering loops from Day 5 into concise, readable one-line data transformations.",
    takeaways: [
      "Vocabulary: a comprehension [expr for item in iterable if cond] builds a new collection in one readable expression.",
      "Read comprehensions in three parts: (1) output expression, (2) for-loop source, (3) optional if-filter.",
      "Fall back to a standard multi-line loop whenever logic requires multiple branches or side effects."
    ],
    lab: {
      lang: "python",
      title: "One-Pass Order Normalization",
      prompt: "Complete the dict comprehension mapping order_id -> rounded INR total for all 'Delivered' orders.",
      hint: "{o['id']: round(o['total'], 2) for o in orders if o['status'] == 'Delivered'}",
      starterCode: "orders = [\n    {'id': 1001, 'status': 'Delivered', 'total': 6498.456},\n    {'id': 1002, 'status': 'Cancelled', 'total': 1499.00},\n    {'id': 1003, 'status': 'Delivered', 'total': 8999.123},\n]\n\n# TODO: Map o['id'] -> round(o['total'], 2) ONLY when o['status'] == 'Delivered'\ndelivered_totals = {___ for o in orders if ___}\nprint(delivered_totals)\n"
    }
  },
  {
    day: 10,
    month: 1,
    module: "M1: Python & Git",
    title: "Pythonic Idioms & Built-in Features",
    instructor: "Indently",
    duration: "15m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Equips your data scripts with enumerate, zip, any/all, and generator expressions for memory-safe iteration.",
    takeaways: [
      "Pair parallel columns safely with zip(names, prices) and track row numbers with enumerate(..., start=1).",
      "Validate dataset invariants concisely using all() (every check True) and any() (at least one True).",
      "Use generator expressions inside sum() or max() to avoid materializing temporary lists."
    ],
    lab: {
      lang: "python",
      title: "Parallel Column Alignment & Data Quality Check",
      prompt: "Verify all prices are positive using all(), then pair products and prices with zip() inside enumerate().",
      hint: "Use all(p > 0 for p in prices).",
      starterCode: "products = ['Keyboard', 'Mouse', 'USB-C Hub', 'Headphones']\nprices = [4999.0, 1499.0, 2499.0, 8999.0]\n\n# TODO: Verify every price in prices is > 0 using all()\nis_valid = ___\nprint('All prices positive:', is_valid)\n\nfor idx, (name, price) in enumerate(zip(products, prices), start=1):\n    print(f'{idx}. {name}: INR {price:.2f}')\n"
    }
  },
  {
    day: 11,
    month: 1,
    module: "M1: Python & Git",
    title: "Clean Code Habits & Type Hints",
    instructor: "Indently",
    duration: "18m",
    videoId: "I72uD8ED73U",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Adds static type annotations and guard clauses so your ShopPulse ingestion codebase scales without silent bugs.",
    takeaways: [
      "Annotate function signatures with list[float], dict[str, int], and return types (-> float).",
      "Flatten deeply nested if-blocks using early-return guard clauses at the top of a function.",
      "Separate pure data transformation logic from I/O side effects."
    ],
    lab: {
      lang: "python",
      title: "Type-Annotated Revenue Aggregator",
      prompt: "Add an empty-list guard clause so compute_aov([]) returns 0.0 instead of raising ZeroDivisionError.",
      hint: "Check 'if not amounts: return 0.0' before dividing by len(amounts).",
      starterCode: "def compute_aov(amounts: list[float]) -> float:\n    # TODO: Return 0.0 immediately if amounts is empty\n    ___\n    return round(sum(amounts) / len(amounts), 2)\n\nprint('AOV:', compute_aov([6498.0, 2499.0, 8999.0]))\nprint('Empty:', compute_aov([]))\n"
    }
  },
  {
    day: 12,
    month: 1,
    module: "M1: Python & Git",
    title: "Defensive Code: Exception Handling",
    instructor: "Bro Code",
    duration: "6m",
    videoId: "V_NXT2-QIlE",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Protects your ingestion pipeline from crashing when third-party vendor feeds send malformed numbers or missing keys.",
    takeaways: [
      "Vocabulary: an Exception is a runtime error object (ValueError, KeyError) that halts execution unless caught.",
      "Catch specific exceptions in try/except blocks rather than bare except clauses.",
      "Quarantine corrupt rows with diagnostic messages instead of halting batch jobs."
    ],
    lab: {
      lang: "python",
      title: "Resilient Price Parser",
      prompt: "Parse a list of messy string prices into floats, catching ValueError and logging bad entries.",
      hint: "Wrap clean_prices.append(float(raw)) inside try: and catch except ValueError:.",
      starterCode: "raw_prices = ['4999.0', '1499.50', 'N/A', '2499.0', 'corrupt']\nclean_prices: list[float] = []\n\nfor raw in raw_prices:\n    try:\n        # TODO: Convert raw to float and append to clean_prices\n        ___\n    except ValueError:\n        print(f'[WARN] Skipping invalid price token: {raw}')\n\nprint('Parsed:', clean_prices)\n"
    }
  },
  {
    day: 13,
    month: 1,
    module: "M1: Python & Git",
    title: "Writing Structured Logs & Output Files",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "1IYrmTTKOoI",
    altVideoId: "GWBWQnWNWBI",
    startSec: 0,
    bridge: "Persists cleaned batch summaries to disk using context managers (with open) so audit trails survive script restarts.",
    takeaways: [
      "Vocabulary: a context manager ('with open(...) as f:') closes the file automatically even if an error occurs.",
      "Differentiate write mode ('w') from append mode ('a') and read mode ('r').",
      "Format delimiter-separated audit records cleanly with encoding='utf-8'."
    ],
    lab: {
      lang: "python",
      title: "Audit Log Writer in Virtual Filesystem",
      prompt: "Write 3 cleaned ShopPulse order rows to 'audit_log.txt' using a with block and read them back to verify.",
      hint: "Open with 'w' first to write lines, then open with 'r' and print f.read().",
      starterCode: "records = [\n    '1001,Mumbai,6498.00',\n    '1002,Bengaluru,8999.00',\n    '1003,Pune,2298.00'\n]\n\nwith open('audit_log.txt', 'w', encoding='utf-8') as f:\n    f.write('order_id,city,total_inr\\n')\n    for row in records:\n        f.write(row + '\\n')\n\nwith open('audit_log.txt', 'r', encoding='utf-8') as f:\n    print(f.read())\n"
    }
  },
  {
    day: 14,
    month: 1,
    module: "M1: Python & Git",
    title: "Reading & Parsing Raw Text/CSV Files",
    instructor: "Bro Code",
    duration: "7m",
    videoId: "GWBWQnWNWBI",
    altVideoId: "1IYrmTTKOoI",
    startSec: 0,
    bridge: "Reads raw CSV exports from legacy store systems using Python's standard csv.DictReader before we introduce Pandas.",
    takeaways: [
      "Vocabulary: a module ('import csv') is a reusable Python file of built-in or third-party tools.",
      "Parse header-driven CSV files cleanly with csv.DictReader and io.StringIO.",
      "Cast string fields into numeric types during ingestion."
    ],
    lab: {
      lang: "python",
      title: "In-Memory CSV Stream Parser",
      prompt: "Use csv.DictReader on a multi-line CSV string to compute total revenue across Delivered orders.",
      hint: "Wrap the CSV text in io.StringIO(csv_text) and pass it to csv.DictReader.",
      starterCode: "import csv\nimport io\n\ncsv_text = '''order_id,city,status,total_inr\n1001,Mumbai,Delivered,6498.0\n1002,Delhi,Cancelled,1499.0\n1003,Bengaluru,Delivered,8999.0\n'''\n\nreader = csv.DictReader(io.StringIO(csv_text))\ntotal = sum(float(r['total_inr']) for r in reader if r['status'] == 'Delivered')\nprint(f'Delivered CSV Revenue: INR {total:,.2f}')\n"
    }
  },
  {
    day: 15,
    month: 1,
    module: "M1: Python & Git",
    title: "Serializing & Parsing JSON Payloads",
    instructor: "Bro Code",
    duration: "10m",
    videoId: "r4MLHHLctKw",
    altVideoId: "JVQNywo4AbU",
    startSec: 0,
    bridge: "Bridges nested webhook payloads from ShopPulse checkout events into flat Python dictionaries ready for database storage.",
    takeaways: [
      "Convert between JSON strings and Python objects using json.loads() and json.dumps().",
      "Traverse nested JSON arrays (order -> line_items) safely.",
      "Pretty-print structured JSON outputs with indent=2."
    ],
    lab: {
      lang: "python",
      title: "Nested Checkout Webhook Flattener",
      prompt: "Parse a JSON order payload with nested line items and compute the total quantity and order value.",
      hint: "Use data = json.loads(payload) and iterate over data['items'].",
      starterCode: "import json\n\npayload = '''{\n  \"order_id\": 1007,\n  \"customer\": {\"id\": 5, \"city\": \"Hyderabad\"},\n  \"items\": [\n    {\"sku\": \"SP-104\", \"qty\": 1, \"price\": 8999.0},\n    {\"sku\": \"SP-103\", \"qty\": 2, \"price\": 2499.0}\n  ]\n}'''\n\ndata = json.loads(payload)\ntotal_qty = sum(i['qty'] for i in data['items'])\ntotal_val = sum(i['qty'] * i['price'] for i in data['items'])\nprint(json.dumps({'order_id': data['order_id'], 'city': data['customer']['city'], 'total_qty': total_qty, 'total_inr': total_val}, indent=2))\n"
    }
  },
  {
    day: 16,
    month: 1,
    module: "M1: Python & Git",
    title: "Fetching Live REST API Data (requests)",
    instructor: "Bro Code",
    duration: "9m",
    videoId: "JVQNywo4AbU",
    altVideoId: "r4MLHHLctKw",
    startSec: 0,
    bridge: "Connects our JSON parsing skills to HTTP GET endpoints, query parameters, status codes, and timeout safeguards.",
    takeaways: [
      "Inspect HTTP status codes (200, 404, 429, 500) and call response.raise_for_status().",
      "Pass query parameters via params={} rather than manual string concatenation.",
      "Enforce request timeouts and retry-friendly error handling."
    ],
    lab: {
      lang: "python",
      title: "Mock REST API Client & Response Validator",
      prompt: "Simulate an HTTP response envelope, validate status == 200, and extract active product records.",
      hint: "Raise RuntimeError if response['status'] != 200, otherwise filter records.",
      starterCode: "def parse_api_response(resp: dict) -> list[dict]:\n    if resp.get('status') != 200:\n        raise RuntimeError(f\"API Error: {resp.get('status')}\")\n    return [p for p in resp.get('data', []) if p.get('active')]\n\nmock_http = {\n    'status': 200,\n    'data': [\n        {'sku': 'SP-101', 'price': 4999.0, 'active': True},\n        {'sku': 'SP-109', 'price': 999.0, 'active': False}\n    ]\n}\nprint('Active SKUs:', parse_api_response(mock_http))\n"
    }
  },
  {
    day: 17,
    month: 1,
    module: "M1: Python & Git",
    title: "OOP Part 1: Classes, __init__ & Domain Models",
    instructor: "Bro Code",
    duration: "30m",
    videoId: "IbMDCwVm63M",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Upgrades loose dictionaries into strongly structured Product and Order classes with built-in validation methods.",
    takeaways: [
      "Vocabulary: a class is a blueprint, an object/instance is built from it, and 'self' refers to that specific instance.",
      "Define clean __init__ constructors and instance attributes.",
      "Attach domain methods (like gross_margin_pct) directly to data entities."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Product Domain Class",
      prompt: "Create a Product class with sku, name, price_inr, and cost_inr, plus a gross_margin_pct() method.",
      hint: "Margin % = ((price_inr - cost_inr) / price_inr) * 100.",
      starterCode: "class Product:\n    def __init__(self, sku: str, name: str, price_inr: float, cost_inr: float):\n        self.sku = sku\n        self.name = name\n        self.price_inr = price_inr\n        self.cost_inr = cost_inr\n\n    def gross_margin_pct(self) -> float:\n        return round(((self.price_inr - self.cost_inr) / self.price_inr) * 100, 2)\n\nkb = Product('SP-101', 'Mechanical Keyboard', 4999.0, 2900.0)\nprint(f'{kb.name} Margin: {kb.gross_margin_pct()}%')\n"
    }
  },
  {
    day: 18,
    month: 1,
    module: "M1: Python & Git",
    title: "OOP Part 2: Inheritance, Composition & @property",
    instructor: "Bro Code",
    duration: "35m",
    videoId: "IbMDCwVm63M",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 1800,
    bridge: "Models specialized data connectors (APIConnector) and validated @property attributes without boilerplate.",
    takeaways: [
      "Share common connection logic via parent base classes and super().__init__().",
      "Use @property getters to expose computed attributes cleanly without parentheses.",
      "Design interchangeable pipeline connectors that share a common .extract() method."
    ],
    lab: {
      lang: "python",
      title: "BaseConnector & APIConnector Hierarchy",
      prompt: "Create BaseConnector(source_name) and subclass APIConnector(source_name, endpoint) using super().__init__().",
      hint: "Call super().__init__(source_name) inside APIConnector.__init__.",
      starterCode: "class BaseConnector:\n    def __init__(self, source_name: str):\n        self.source_name = source_name\n\n    def describe(self) -> str:\n        return f'Connector[{self.source_name}]'\n\nclass APIConnector(BaseConnector):\n    def __init__(self, source_name: str, endpoint: str):\n        super().__init__(source_name)\n        self.endpoint = endpoint\n\nconn = APIConnector('ShopPulseOrders', 'https://api.shoppulse.local/v1/orders')\nprint(conn.describe(), '->', conn.endpoint)\n"
    }
  },
  {
    day: 19,
    month: 1,
    module: "M1: Python & Git",
    title: "Unit Testing ETL Functions with Assertions",
    instructor: "NeuralNine",
    duration: "26m",
    videoId: "UL0opWf3DeM",
    altVideoId: "Y6Q3ZWXIvms",
    startSec: 0,
    bridge: "Verifies our invoice, discount, and parsing logic automatically so future refactors never silently corrupt revenue metrics.",
    takeaways: [
      "Write isolated unit tests covering normal inputs, zero/empty boundaries, and invalid cases.",
      "Use assert statements and unittest.TestCase to automate regression checks.",
      "Keep tests fast and deterministic with zero external network dependencies."
    ],
    lab: {
      lang: "python",
      title: "Automated Revenue Calculation Test Suite",
      prompt: "Write and run unit assertions testing normal, discounted, and zero-amount edge cases for net_revenue().",
      hint: "Use assert net_revenue(1000, 0.1) == 900.0 and print a pass confirmation.",
      starterCode: "def net_revenue(gross: float, discount: float = 0.0) -> float:\n    if gross < 0:\n        raise ValueError('Negative gross revenue')\n    return round(gross * (1.0 - discount), 2)\n\nassert net_revenue(5000.0) == 5000.0\nassert net_revenue(5000.0, 0.10) == 4500.0\nassert net_revenue(0.0, 0.25) == 0.0\nprint('All unit assertions passed successfully!')\n"
    }
  },
  {
    day: 20,
    month: 1,
    module: "M1: Python & Git",
    title: "Mocking External API Calls in Tests",
    instructor: "NeuralNine",
    duration: "21m",
    videoId: "-F6wVOlsEAM",
    altVideoId: "UL0opWf3DeM",
    startSec: 0,
    bridge: "Uses unittest.mock to test our Day 16 API client offline against simulated HTTP responses.",
    takeaways: [
      "Isolate external HTTP or database calls with unittest.mock.MagicMock and patch.",
      "Simulate rate limits (429) and server timeouts without hitting live endpoints.",
      "Assert that your client invokes dependencies with expected arguments."
    ],
    lab: {
      lang: "python",
      title: "Mocking ShopPulse API Endpoint",
      prompt: "Use unittest.mock.MagicMock to simulate an HTTP client returning JSON orders and verify your fetcher parses them.",
      hint: "Create client = MagicMock(); client.get.return_value = {'orders': [1001, 1002]}.",
      starterCode: "from unittest.mock import MagicMock\n\ndef fetch_order_ids(http_client) -> list[int]:\n    payload = http_client.get('/orders')\n    return payload.get('orders', [])\n\nmock_client = MagicMock()\nmock_client.get.return_value = {'orders': [1001, 1002, 1003]}\n\nresult = fetch_order_ids(mock_client)\nassert result == [1001, 1002, 1003]\nmock_client.get.assert_called_once_with('/orders')\nprint('Mocked API test passed:', result)\n"
    }
  },
  {
    day: 21,
    month: 1,
    module: "M1: Python & Git",
    title: "Git Basics: Init, Stage, Commit & History",
    instructor: "Kunal Kushwaha",
    duration: "25m",
    videoId: "apGV9Kg7ics",
    altVideoId: "zTjRZNkhiEU",
    startSec: 0,
    bridge: "Places your tested Python ingestion scripts under Git version control with clean atomic commits and a .gitignore.",
    takeaways: [
      "Understand the three Git trees: working directory, staging index, and commit history.",
      "Exclude __pycache__, .env secrets, and local .db files via .gitignore.",
      "Write clear, imperative commit messages describing why a change was made."
    ],
    lab: {
      lang: "python",
      title: "Generate Production .gitignore & Commit Checklist",
      prompt: "Write a Python script that generates a clean .gitignore template for Python + SQLite data projects.",
      hint: "Include __pycache__/, *.pyc, .env, *.sqlite3, and .venv/ in the template.",
      starterCode: "ignore_rules = [\n    '__pycache__/',\n    '*.py[cod]',\n    '.venv/',\n    '.env',\n    '*.sqlite3',\n    '.pytest_cache/'\n]\n\nprint('# Recommended .gitignore for ShopPulse\\n' + '\\n'.join(ignore_rules))\n"
    }
  },
  {
    day: 22,
    month: 1,
    module: "M1: Python & Git",
    title: "Git Branching & Merging Feature Work",
    instructor: "Kunal Kushwaha",
    duration: "25m",
    videoId: "apGV9Kg7ics",
    altVideoId: "zTjRZNkhiEU",
    startSec: 1500,
    bridge: "Isolates new feature development (like adding SQLite export) on feature branches without destabilizing main.",
    takeaways: [
      "Create and switch branches cleanly using git switch -c feat/sqlite-loader.",
      "Understand fast-forward vs three-way merge commits.",
      "Keep main deployable at all times for GitHub Pages and CI checks."
    ],
    lab: {
      lang: "python",
      title: "Branch Naming & Conventional Commit Validator",
      prompt: "Write a validator verifying branch names start with feat/, fix/, or docs/.",
      hint: "Use tuple prefixes with str.startswith(('feat/', 'fix/', 'docs/', 'chore/')).",
      starterCode: "def validate_branch(name: str) -> bool:\n    return name.startswith(('feat/', 'fix/', 'docs/', 'chore/'))\n\nfor b in ['feat/sqlite-ingest', 'random-test', 'fix/null-price']:\n    print(f'{b:22s} -> valid={validate_branch(b)}')\n"
    }
  },
  {
    day: 23,
    month: 1,
    module: "M1: Python & Git",
    title: "GitHub Remotes, Pull Requests & Forks",
    instructor: "Kunal Kushwaha",
    duration: "30m",
    videoId: "apGV9Kg7ics",
    altVideoId: "zTjRZNkhiEU",
    startSec: 3000,
    bridge: "Publishes your ShopPulse repository to GitHub so every month's milestone builds a visible public portfolio.",
    takeaways: [
      "Configure remote origin, push feature branches, and open structured Pull Requests.",
      "Sync forked repositories against upstream changes cleanly.",
      "Document setup instructions and architecture diagrams in README.md."
    ],
    lab: {
      lang: "python",
      title: "Automated README Milestone Badge Generator",
      prompt: "Generate a Markdown progress table for your GitHub README showing Month 1 completion.",
      hint: "Format a Markdown table with Module, Status, and Artifact columns.",
      starterCode: "milestones = [\n    ('M1: Python & Git', 'Complete', 'ShopPulse JSON-to-SQLite CLI'),\n    ('M2: SQL Analytics', 'Up Next', 'Cohort Retention & LTV Views')\n]\nprint('| Module | Status | Portfolio Artifact |')\nprint('|---|---|---|')\nfor m, s, a in milestones:\n    print(f'| {m} | {s} | {a} |')\n"
    }
  },
  {
    day: 24,
    month: 1,
    module: "M1: Python & Git",
    title: "Resolving Merge Conflicts & Rebasing",
    instructor: "freeCodeCamp.org",
    duration: "45m",
    videoId: "zTjRZNkhiEU",
    altVideoId: "apGV9Kg7ics",
    startSec: 5400,
    bridge: "Gives you calm, methodical control when two branches edit the same configuration or schema file.",
    takeaways: [
      "Read <<<<<<< HEAD, =======, and >>>>>>> conflict markers and synthesize clean resolutions.",
      "Use git rebase main on local feature branches for a linear commit history.",
      "Never rebase commits that have already been pushed to shared public branches."
    ],
    lab: {
      lang: "python",
      title: "Conflict Marker Scanner",
      prompt: "Write a pre-commit check function that scans a file string for leftover Git conflict markers.",
      hint: "Check if any marker ('<<<<<<<', '=======', '>>>>>>>') appears in the text.",
      starterCode: "def has_conflict_markers(content: str) -> bool:\n    markers = ('<<<<<<<', '=======', '>>>>>>>')\n    return any(m in content for m in markers)\n\nsample_clean = 'def run():\\n    return True\\n'\nsample_dirty = '<<<<<<< HEAD\\nx = 1\\n=======\\nx = 2\\n>>>>>>> feat\\n'\nprint('Clean file conflict:', has_conflict_markers(sample_clean))\nprint('Dirty file conflict:', has_conflict_markers(sample_dirty))\n"
    }
  },
  {
    day: 25,
    month: 1,
    module: "M1: Python & Git",
    title: "Git Stash, Reset & Tagging Releases",
    instructor: "freeCodeCamp.org",
    duration: "40m",
    videoId: "zTjRZNkhiEU",
    altVideoId: "apGV9Kg7ics",
    startSec: 9000,
    bridge: "Tags your finished Month 1 ingestion engine as v1.0.0 before starting Month 2 database modeling.",
    takeaways: [
      "Use git stash push -m to shelve half-finished experiments safely.",
      "Understand soft vs mixed vs hard resets and recover lost commits via git reflog.",
      "Tag milestone releases (v1.0.0) to snapshot working portfolio states."
    ],
    lab: {
      lang: "python",
      title: "Semantic Version Bumper (v1.0.0)",
      prompt: "Write bump_version(tag, part) supporting 'major', 'minor', and 'patch' semantic version increments.",
      hint: "Strip leading 'v', split by '.', cast to int, increment the target index, and reformat.",
      starterCode: "def bump_version(tag: str, part: str = 'minor') -> str:\n    major, minor, patch = map(int, tag.lstrip('v').split('.'))\n    if part == 'major':\n        major, minor, patch = major + 1, 0, 0\n    elif part == 'minor':\n        minor, patch = minor + 1, 0\n    else:\n        patch += 1\n    return f'v{major}.{minor}.{patch}'\n\nprint(bump_version('v0.9.4', 'major'))\nprint(bump_version('v1.0.0', 'minor'))\n"
    }
  },
  {
    day: 26,
    month: 1,
    module: "M1: Python & Git",
    title: "Flexible Function Signatures: *args & **kwargs",
    instructor: "Bro Code",
    duration: "15m",
    videoId: "Vh__2V2tXUM",
    altVideoId: "89cGQjB5R4M",
    startSec: 0,
    bridge: "Equips your ingestion helpers to accept variable-length item bundles (*args) and optional metadata tags (**kwargs).",
    takeaways: [
      "Pack variable positional arguments into a tuple using *args.",
      "Capture arbitrary keyword metadata into a dictionary using **kwargs.",
      "Unpack lists and dicts cleanly when forwarding arguments across helper functions."
    ],
    lab: {
      lang: "python",
      title: "Dynamic Cart Bundler",
      prompt: "Create build_order_summary(order_id, *item_prices, **meta) that sums variable item prices and prints metadata.",
      hint: "Use sum(item_prices) for *args and meta.get('city', 'N/A') for **kwargs.",
      starterCode: "def build_order_summary(order_id, *item_prices, **meta):\n    subtotal = round(sum(item_prices), 2)\n    city = meta.get('city', 'N/A')\n    tier = meta.get('tier', 'Standard')\n    return {'order_id': order_id, 'items': len(item_prices), 'subtotal_inr': subtotal, 'city': city, 'tier': tier}\n\nprint(build_order_summary(1001, 4999.0, 1499.0, 799.0, city='Mumbai', tier='Gold'))\n"
    }
  },
  {
    day: 27,
    month: 1,
    module: "M1: Python & Git",
    title: "Capstone 1A: ShopPulse API Ingestion CLI",
    instructor: "Bro Code",
    duration: "15m",
    videoId: "JVQNywo4AbU",
    altVideoId: "r4MLHHLctKw",
    startSec: 0,
    bridge: "Combines functions, JSON parsing, exception handling, and assertions into a unified Month 1 ingestion pipeline.",
    takeaways: [
      "Assemble an end-to-end Extract-Validate-Transform pipeline in clean modular Python.",
      "Log rejected records separately from valid normalized output.",
      "Verify pipeline output invariants with automated assertions."
    ],
    lab: {
      lang: "python",
      title: "Capstone 1A: Complete JSON Order Normalizer",
      prompt: "Process a raw JSON feed of ShopPulse orders: filter valid Delivered orders and output summary metrics.",
      hint: "Parse JSON, validate total_inr > 0, and aggregate total revenue and order count.",
      starterCode: "import json\n\nraw_feed = '''[\n  {\"order_id\": 1001, \"city\": \"Mumbai\", \"status\": \"Delivered\", \"total_inr\": 6498.0},\n  {\"order_id\": 1002, \"city\": \"Bengaluru\", \"status\": \"Delivered\", \"total_inr\": 8999.0},\n  {\"order_id\": 1003, \"city\": \"Delhi\", \"status\": \"Cancelled\", \"total_inr\": 1499.0},\n  {\"order_id\": 1004, \"city\": \"Pune\", \"status\": \"Delivered\", \"total_inr\": -50.0}\n]'''\n\norders = json.loads(raw_feed)\nvalid = [o for o in orders if o['status'] == 'Delivered' and o['total_inr'] > 0]\nrevenue = sum(o['total_inr'] for o in valid)\nassert len(valid) == 2\nprint(f'Capstone 1A Verified -> Valid Orders: {len(valid)} | Revenue: INR {revenue:,.2f}')\n"
    }
  },
  {
    day: 28,
    month: 1,
    module: "M1: Python & Git",
    title: "Bridge 1->2: Persisting JSON to SQLite",
    instructor: "NeuralNine",
    duration: "24m",
    videoId: "lFRMdGfo_XA",
    altVideoId: "529LYDgRTgQ",
    startSec: 0,
    bridge: "Hands off Month 1 directly to Month 2 by writing your cleaned Python order records into a real relational SQLite table.",
    takeaways: [
      "Create relational tables and insert parameterized rows with Python's built-in sqlite3 module.",
      "Prevent SQL injection by always using ? parameter placeholders.",
      "Verify persisted rows with a SQL SELECT round-trip inside Python."
    ],
    lab: {
      lang: "python",
      title: "Bridge 1->2: Persist ShopPulse Orders into SQLite",
      prompt: "Create an in-memory SQLite database, insert 3 cleaned order tuples via executemany(), and query total revenue.",
      hint: "Use sqlite3.connect(':memory:') and cur.executemany('INSERT INTO orders VALUES (?, ?, ?)', rows).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE orders (order_id INT PRIMARY KEY, city TEXT, total_inr REAL)')\n\nrows = [(1001, 'Mumbai', 6498.0), (1002, 'Bengaluru', 8999.0), (1003, 'Mumbai', 2499.0)]\ncur.executemany('INSERT INTO orders VALUES (?, ?, ?)', rows)\nconn.commit()\n\nfor row in cur.execute('SELECT city, SUM(total_inr) FROM orders GROUP BY city'):\n    print(row)\n"
    }
  },
  {
    day: 29,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Bridge 1->2: ORM & SQLAlchemy Schemas",
    instructor: "NeuralNine",
    duration: "1h 00m",
    videoId: "529LYDgRTgQ",
    altVideoId: "lFRMdGfo_XA",
    startSec: 0,
    bridge: "Completes the Python-to-SQL handoff by defining declarative relational schemas and querying the live ShopPulse SQLite tables.",
    takeaways: [
      "Map Python domain models to relational tables with primary keys, foreign keys, and constraints.",
      "Understand session transactions, commits, and connection lifecycles.",
      "Inspect the pre-seeded ShopPulse relational schema (customers, products, orders, order_items, reviews)."
    ],
    lab: {
      lang: "sql",
      title: "Inspect ShopPulse Relational Schema",
      prompt: "Query sqlite_master to list all tables in the pre-seeded ShopPulse database and preview the customers table.",
      hint: "SELECT name, sql FROM sqlite_master WHERE type = 'table';",
      starterCode: "SELECT name AS table_name\nFROM sqlite_master\nWHERE type = 'table'\nORDER BY name;\n"
    }
  },
  {
    day: 30,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Core Querying: SELECT, DISTINCT, LIMIT",
    instructor: "Data with Baraa",
    duration: "55m",
    videoId: "TDKoTItCVMU",
    altVideoId: "cMUJFau5Wvg",
    startSec: 0,
    bridge: "Starts systematic SQL querying on our ShopPulse database by projecting columns, deduplicating values, and sampling rows.",
    takeaways: [
      "Select explicit columns rather than SELECT * in production analytical queries.",
      "Extract unique categorical dimensions with SELECT DISTINCT.",
      "Control result cardinality safely using LIMIT."
    ],
    lab: {
      lang: "sql",
      title: "Distinct Customer Cities & Tiers",
      prompt: "List all distinct (city, tier) combinations from the customers table.",
      hint: "Use SELECT DISTINCT city, tier FROM customers;",
      starterCode: "SELECT DISTINCT city, tier\nFROM customers\nORDER BY city;\n"
    }
  },
  {
    day: 31,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Filtering Rows: WHERE, IN, BETWEEN, LIKE",
    instructor: "Data with Baraa",
    duration: "41m",
    videoId: "cMUJFau5Wvg",
    altVideoId: "TDKoTItCVMU",
    startSec: 0,
    bridge: "Translates Python list-comprehension filters into push-down SQL WHERE predicates.",
    takeaways: [
      "Combine AND, OR, and NOT with explicit parentheses to avoid operator-precedence bugs.",
      "Filter sets with IN, closed ranges with BETWEEN, and text patterns with LIKE.",
      "Understand why filtering early in WHERE reduces downstream compute."
    ],
    lab: {
      lang: "sql",
      title: "High-Value Delivered Orders Filter",
      prompt: "Find all Delivered orders with total_inr between 2500 and 10000.",
      hint: "Filter orders WHERE status = 'Delivered' AND total_inr BETWEEN 2500 AND 10000.",
      starterCode: "SELECT order_id, customer_id, order_date, total_inr\nFROM orders\nWHERE status = 'Delivered'\n  AND total_inr BETWEEN 2500 AND 10000;\n"
    }
  },
  {
    day: 32,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Deterministic Sorting: ORDER BY",
    instructor: "Data with Baraa",
    duration: "10m",
    videoId: "q_zD7vmNDZw",
    altVideoId: "TDKoTItCVMU",
    startSec: 0,
    bridge: "Establishes deterministic tie-breaking sort orders needed before we introduce window ranking functions later this month.",
    takeaways: [
      "Sort multi-column keys using ASC and DESC explicitly.",
      "Break ties deterministically by including a unique primary key as the final sort column.",
      "Combine ORDER BY with LIMIT for Top-N leaderboard queries."
    ],
    lab: {
      lang: "sql",
      title: "Top 3 Highest-Margin Products",
      prompt: "Rank products by gross profit (price_inr - cost_inr) descending, breaking ties by product_id.",
      hint: "Compute (price_inr - cost_inr) AS profit_inr in SELECT and ORDER BY profit_inr DESC, product_id ASC LIMIT 3.",
      starterCode: "SELECT product_id, product_name, category,\n       (price_inr - cost_inr) AS profit_inr\nFROM products\nORDER BY profit_inr DESC, product_id ASC\nLIMIT 3;\n"
    }
  },
  {
    day: 33,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Summary Metrics: COUNT, SUM, AVG, MIN/MAX",
    instructor: "Data with Baraa",
    duration: "7m",
    videoId: "AsuPVZ_EjEw",
    altVideoId: "wIljdjni_dc",
    startSec: 0,
    bridge: "Computes KPI rollups directly inside the database engine rather than pulling raw rows into Python loops.",
    takeaways: [
      "Understand how COUNT(*) differs from COUNT(column) when NULL values exist.",
      "Use COUNT(DISTINCT customer_id) to measure unique active buyers.",
      "Compute clean AOV and revenue totals with ROUND(AVG(...), 2)."
    ],
    lab: {
      lang: "sql",
      title: "Executive KPI Summary Bar",
      prompt: "Compute total delivered orders, unique customers, gross revenue, and average order value (AOV).",
      hint: "Filter WHERE status = 'Delivered' and use COUNT(DISTINCT customer_id).",
      starterCode: "SELECT COUNT(*) AS delivered_orders,\n       COUNT(DISTINCT customer_id) AS unique_buyers,\n       ROUND(SUM(total_inr), 2) AS gross_revenue_inr,\n       ROUND(AVG(total_inr), 2) AS aov_inr\nFROM orders\nWHERE status = 'Delivered';\n"
    }
  },
  {
    day: 34,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Dimensional Rollups: GROUP BY",
    instructor: "Alex The Analyst",
    duration: "11m",
    videoId: "zgYqUP_PhQo",
    altVideoId: "AsuPVZ_EjEw",
    startSec: 0,
    bridge: "Splits executive totals from Day 33 into category, status, and customer-tier breakdowns.",
    takeaways: [
      "Every non-aggregated column in SELECT must appear in the GROUP BY clause.",
      "Group by multiple dimensions to build cross-tabulated summaries.",
      "Order grouped results by aggregate metrics for immediate readability."
    ],
    lab: {
      lang: "sql",
      title: "Category Catalog Economics",
      prompt: "Group products by category to find SKU count, average selling price, and average unit profit.",
      hint: "GROUP BY category and compute AVG(price_inr - cost_inr).",
      starterCode: "SELECT category,\n       COUNT(*) AS sku_count,\n       ROUND(AVG(price_inr), 2) AS avg_price_inr,\n       ROUND(AVG(price_inr - cost_inr), 2) AS avg_profit_inr\nFROM products\nGROUP BY category\nORDER BY avg_profit_inr DESC;\n"
    }
  },
  {
    day: 35,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Post-Aggregation Filtering: HAVING",
    instructor: "Alex The Analyst",
    duration: "4m",
    videoId: "tYBOMw7Ob8E",
    altVideoId: "VQf0V6Wwbf4",
    startSec: 0,
    bridge: "Filters grouped customer segments (like repeat buyers with 2+ orders) after GROUP BY aggregation completes.",
    takeaways: [
      "Use HAVING to filter groups based on aggregate conditions (COUNT, SUM, AVG).",
      "Never put row-level filters in HAVING when they belong in WHERE.",
      "Identify high-frequency customers cleanly in one query."
    ],
    lab: {
      lang: "sql",
      title: "Repeat Buyers Filter",
      prompt: "Find customer_ids who have placed at least 2 Delivered orders and show their total spend.",
      hint: "Filter WHERE status = 'Delivered', GROUP BY customer_id, and add HAVING COUNT(*) >= 2.",
      starterCode: "SELECT customer_id,\n       COUNT(*) AS order_count,\n       ROUND(SUM(total_inr), 2) AS total_spend_inr\nFROM orders\nWHERE status = 'Delivered'\nGROUP BY customer_id\nHAVING COUNT(*) >= 2\nORDER BY total_spend_inr DESC;\n"
    }
  },
  {
    day: 36,
    month: 2,
    module: "M2: SQL Analytics",
    title: "WHERE vs HAVING Execution Order",
    instructor: "Neso Academy",
    duration: "8m",
    videoId: "VQf0V6Wwbf4",
    altVideoId: "tYBOMw7Ob8E",
    startSec: 0,
    bridge: "Locks in the logical SQL query execution pipeline (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT).",
    takeaways: [
      "Understand why column aliases defined in SELECT cannot be referenced in WHERE.",
      "Combine pre-aggregation WHERE filters with post-aggregation HAVING filters accurately.",
      "Debug subtle aggregation count discrepancies caused by misplaced predicates."
    ],
    lab: {
      lang: "sql",
      title: "Combined Pre- and Post-Aggregation Pipeline",
      prompt: "From Delivered orders only, find customers whose average order value exceeds 4000 INR.",
      hint: "WHERE status = 'Delivered' runs before GROUP BY; HAVING AVG(total_inr) > 4000 runs after.",
      starterCode: "SELECT customer_id,\n       COUNT(*) AS orders_cnt,\n       ROUND(AVG(total_inr), 2) AS avg_order_inr\nFROM orders\nWHERE status = 'Delivered'\nGROUP BY customer_id\nHAVING AVG(total_inr) > 4000;\n"
    }
  },
  {
    day: 37,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Relational Modeling: INNER & OUTER JOIN",
    instructor: "Alex The Analyst",
    duration: "16m",
    videoId: "9URM1_2S0ho",
    altVideoId: "ImgpDC8d32s",
    startSec: 0,
    bridge: "Recombines normalized ShopPulse tables (customers + orders) so we can analyze revenue by city and loyalty tier.",
    takeaways: [
      "Use INNER JOIN to keep matching records and LEFT JOIN to preserve all left-table entities (including zero-order customers).",
      "Always qualify column names with table aliases to prevent ambiguity.",
      "Spot accidental row fan-out when joining one-to-many tables."
    ],
    lab: {
      lang: "sql",
      title: "Left Join Customer Spend Audit (Including Zero-Order Users)",
      prompt: "List every customer, their city, and their Delivered order count (showing 0 for customers with no delivered orders).",
      hint: "LEFT JOIN orders o ON c.customer_id = o.customer_id AND o.status = 'Delivered'.",
      starterCode: "SELECT c.customer_id, c.full_name, c.city,\n       COUNT(o.order_id) AS delivered_orders,\n       COALESCE(SUM(o.total_inr), 0) AS revenue_inr\nFROM customers c\nLEFT JOIN orders o\n  ON c.customer_id = o.customer_id AND o.status = 'Delivered'\nGROUP BY c.customer_id, c.full_name, c.city\nORDER BY revenue_inr DESC;\n"
    }
  },
  {
    day: 38,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Multi-Table Star-Schema Joins in Postgres",
    instructor: "Alex The Analyst",
    duration: "16m",
    videoId: "ImgpDC8d32s",
    altVideoId: "9URM1_2S0ho",
    startSec: 0,
    bridge: "Chains 4 normalized tables (customers -> orders -> order_items -> products) to compute true product-level gross profit.",
    takeaways: [
      "Traverse fact-to-dimension joins across bridge tables like order_items.",
      "Verify row grain at every join step so line-item sums are never double-counted.",
      "Compute realized profit by subtracting product cost from sold quantity."
    ],
    lab: {
      lang: "sql",
      title: "4-Table Product Profitability Rollup",
      prompt: "Join orders, order_items, and products to compute total units sold and realized gross profit per product.",
      hint: "Filter o.status = 'Delivered' and sum oi.quantity * (p.price_inr - p.cost_inr).",
      starterCode: "SELECT p.product_name, p.category,\n       SUM(oi.quantity) AS units_sold,\n       ROUND(SUM(oi.quantity * (p.price_inr - p.cost_inr)), 2) AS realized_profit_inr\nFROM orders o\nJOIN order_items oi ON o.order_id = oi.order_id\nJOIN products p ON oi.product_id = p.product_id\nWHERE o.status = 'Delivered'\nGROUP BY p.product_id, p.product_name, p.category\nORDER BY realized_profit_inr DESC;\n"
    }
  },
  {
    day: 39,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Business Logic Segmentation: CASE WHEN",
    instructor: "Data with Baraa",
    duration: "36m",
    videoId: "GHPHZ8XJxeg",
    altVideoId: "X_cPXHV2NQ4",
    startSec: 0,
    bridge: "Creates RFM/value buckets and conditional pivot counts directly inside SQL queries.",
    takeaways: [
      "Bucket continuous revenue metrics into discrete customer segments using CASE WHEN.",
      "Use conditional aggregation SUM(CASE WHEN ... THEN 1 ELSE 0 END) to pivot statuses into columns.",
      "Always include an explicit ELSE fallback branch."
    ],
    lab: {
      lang: "sql",
      title: "Order Value Tiering & Status Pivot",
      prompt: "Classify Delivered orders into High (>=7000), Medium (3000-6999), and Standard (<3000) segments.",
      hint: "Use CASE WHEN total_inr >= 7000 THEN 'High' WHEN total_inr >= 3000 THEN 'Medium' ELSE 'Standard' END.",
      starterCode: "SELECT\n  CASE\n    WHEN total_inr >= 7000 THEN 'High (>=7k)'\n    WHEN total_inr >= 3000 THEN 'Medium (3k-7k)'\n    ELSE 'Standard (<3k)'\n  END AS basket_segment,\n  COUNT(*) AS order_count,\n  ROUND(SUM(total_inr), 2) AS segment_revenue_inr\nFROM orders\nWHERE status = 'Delivered'\nGROUP BY basket_segment\nORDER BY segment_revenue_inr DESC;\n"
    }
  },
  {
    day: 40,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Handling Missingness: COALESCE & NULLIF",
    instructor: "Data with Baraa",
    duration: "53m",
    videoId: "X_cPXHV2NQ4",
    altVideoId: "GHPHZ8XJxeg",
    startSec: 0,
    bridge: "Eliminates division-by-zero crashes and NULL propagation in left-joined KPI reports.",
    takeaways: [
      "Replace NULL values cleanly with COALESCE(expr, fallback).",
      "Prevent division-by-zero errors using numerator / NULLIF(denominator, 0).",
      "Remember that NULL = NULL evaluates to UNKNOWN, not TRUE; always use IS NULL."
    ],
    lab: {
      lang: "sql",
      title: "Safe Cancellation Rate Calculator",
      prompt: "Compute the cancellation percentage per city safely using COALESCE and NULLIF.",
      hint: "Divide cancelled order count by NULLIF(COUNT(o.order_id), 0) * 100.0.",
      starterCode: "SELECT c.city,\n       COUNT(o.order_id) AS total_orders,\n       SUM(CASE WHEN o.status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled_orders,\n       COALESCE(ROUND(100.0 * SUM(CASE WHEN o.status = 'Cancelled' THEN 1 ELSE 0 END) / NULLIF(COUNT(o.order_id), 0), 1), 0.0) AS cancel_rate_pct\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.city;\n"
    }
  },
  {
    day: 41,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Cleaning Dirty Text: SQL String Functions",
    instructor: "Data with Baraa",
    duration: "26m",
    videoId: "NOTWx5s-s1o",
    altVideoId: "X_cPXHV2NQ4",
    startSec: 0,
    bridge: "Standardizes customer names, extracts domain/code substrings, and inspects review text lengths directly in SQL.",
    takeaways: [
      "Normalize casing and whitespace with TRIM(), UPPER(), and LOWER().",
      "Measure review verbosity with LENGTH() and extract prefixes with SUBSTR().",
      "Clean messy text keys prior to joining across external data sources."
    ],
    lab: {
      lang: "sql",
      title: "Customer Review Length & Keyword Audit",
      prompt: "Inspect customer reviews, normalize text to lowercase, and flag reviews mentioning 'noise' or '4k'.",
      hint: "Use LOWER(review_text) LIKE '%noise%' inside a CASE expression.",
      starterCode: "SELECT r.review_id, p.product_name, r.rating,\n       LENGTH(r.review_text) AS char_len,\n       CASE WHEN LOWER(r.review_text) LIKE '%noise%' THEN 'Audio Feature' ELSE 'General' END AS topic_tag\nFROM reviews r\nJOIN products p ON r.product_id = p.product_id;\n"
    }
  },
  {
    day: 42,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Cohort Bucketing: DATEPART & DATETRUNC",
    instructor: "Data with Baraa",
    duration: "43m",
    videoId: "7RCxH9x5StM",
    altVideoId: "U7WMMzxvwT4",
    startSec: 0,
    bridge: "Truncates daily timestamps into monthly signup and order cohorts—essential groundwork for Day 51 retention analysis.",
    takeaways: [
      "Bucket ISO dates into YYYY-MM month keys using SUBSTR(date, 1, 7) or DATE_TRUNC('month', ts).",
      "Extract day-of-week and month components for seasonality analysis.",
      "Align signup months with purchase months on a uniform calendar grain."
    ],
    lab: {
      lang: "sql",
      title: "Monthly Revenue & Signup Cohort Bucketing",
      prompt: "Group Delivered orders by YYYY-MM order month and compute monthly order volume and revenue.",
      hint: "Use SUBSTR(order_date, 1, 7) AS order_month and GROUP BY order_month.",
      starterCode: "SELECT SUBSTR(order_date, 1, 7) AS order_month,\n       COUNT(*) AS orders_cnt,\n       ROUND(SUM(total_inr), 2) AS monthly_revenue_inr\nFROM orders\nWHERE status = 'Delivered'\nGROUP BY order_month\nORDER BY order_month;\n"
    }
  },
  {
    day: 43,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Date Math & Type Casting (CAST, CONVERT)",
    instructor: "Data with Baraa",
    duration: "31m",
    videoId: "U7WMMzxvwT4",
    altVideoId: "7RCxH9x5StM",
    startSec: 0,
    bridge: "Calculates days-since-signup (customer tenure at purchase) by casting ISO strings into date values.",
    takeaways: [
      "Prevent integer division truncation using CAST(x AS REAL) or multiplying by 1.0.",
      "Compute elapsed days between signup_date and order_date with JULIANDAY() / DATEDIFF().",
      "Standardize mixed schema data types cleanly in views."
    ],
    lab: {
      lang: "sql",
      title: "Days from Signup to Purchase",
      prompt: "Calculate how many days after signup each customer placed their Delivered orders.",
      hint: "Use ROUND(JULIANDAY(o.order_date) - JULIANDAY(c.signup_date)) AS days_since_signup.",
      starterCode: "SELECT o.order_id, c.full_name, c.signup_date, o.order_date,\n       CAST(JULIANDAY(o.order_date) - JULIANDAY(c.signup_date) AS INT) AS days_since_signup\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nWHERE o.status = 'Delivered'\nORDER BY days_since_signup;\n"
    }
  },
  {
    day: 44,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Scalar & Inline Subqueries",
    instructor: "techTFQ",
    duration: "35m",
    videoId: "nJIEIzF7tDw",
    altVideoId: "QNfnuK-1YYY",
    startSec: 0,
    bridge: "Compares individual orders against the global average order value using dynamic scalar subqueries.",
    takeaways: [
      "Embed scalar subqueries in WHERE or SELECT to compare rows against global benchmarks.",
      "Use IN (SELECT ...) subqueries to filter against dynamic entity lists.",
      "Know when a JOIN outperforms an IN subquery."
    ],
    lab: {
      lang: "sql",
      title: "Above-Average Basket Detector",
      prompt: "Find all Delivered orders whose total_inr exceeds the overall average Delivered order value.",
      hint: "Compare total_inr > (SELECT AVG(total_inr) FROM orders WHERE status = 'Delivered').",
      starterCode: "SELECT order_id, customer_id, order_date, total_inr\nFROM orders\nWHERE status = 'Delivered'\n  AND total_inr > (\n    SELECT AVG(total_inr)\n    FROM orders\n    WHERE status = 'Delivered'\n  )\nORDER BY total_inr DESC;\n"
    }
  },
  {
    day: 45,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Correlated Subqueries & EXISTS",
    instructor: "techTFQ",
    duration: "35m",
    videoId: "nJIEIzF7tDw",
    altVideoId: "QNfnuK-1YYY",
    startSec: 2100,
    bridge: "Uses short-circuiting EXISTS / NOT EXISTS predicates to isolate customers or products without related records.",
    takeaways: [
      "Understand how correlated subqueries evaluate once per outer candidate row.",
      "Prefer EXISTS / NOT EXISTS over NOT IN when NULL values may appear in the subquery.",
      "Identify unreviewed products or non-converting users cleanly."
    ],
    lab: {
      lang: "sql",
      title: "Find Unreviewed Products via NOT EXISTS",
      prompt: "List all products in the catalog that do not yet have any entry in the reviews table.",
      hint: "SELECT * FROM products p WHERE NOT EXISTS (SELECT 1 FROM reviews r WHERE r.product_id = p.product_id).",
      starterCode: "SELECT p.product_id, p.product_name, p.category, p.price_inr\nFROM products p\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM reviews r\n  WHERE r.product_id = p.product_id\n);\n"
    }
  },
  {
    day: 46,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Modular Analytics: CTEs (WITH Clause)",
    instructor: "techTFQ",
    duration: "25m",
    videoId: "QNfnuK-1YYY",
    altVideoId: "nJIEIzF7tDw",
    startSec: 0,
    bridge: "Replaces nested subqueries with readable, step-by-step WITH pipelines—just like chaining clean Python functions.",
    takeaways: [
      "Decompose multi-stage transformations into named Common Table Expressions (CTEs).",
      "Chain multiple CTEs sequentially to separate cleaning, aggregation, and ranking.",
      "Improve code reviewability and debugging across complex analytical queries."
    ],
    lab: {
      lang: "sql",
      title: "Two-Stage Customer LTV CTE Pipeline",
      prompt: "Use a CTE to aggregate Delivered spend per customer, then join with customers to rank LTV by tier.",
      hint: "Define WITH customer_ltv AS (SELECT customer_id, SUM(total_inr) AS ltv ...) and join to customers.",
      starterCode: "WITH customer_ltv AS (\n  SELECT customer_id,\n         COUNT(*) AS orders_cnt,\n         ROUND(SUM(total_inr), 2) AS ltv_inr\n  FROM orders\n  WHERE status = 'Delivered'\n  GROUP BY customer_id\n)\nSELECT c.full_name, c.tier, c.city, l.orders_cnt, l.ltv_inr\nFROM customer_ltv l\nJOIN customers c ON l.customer_id = c.customer_id\nORDER BY l.ltv_inr DESC;\n"
    }
  },
  {
    day: 47,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Window Functions Intro: OVER & PARTITION BY",
    instructor: "Maven Analytics",
    duration: "8m",
    videoId: "rIcB4zMYMas",
    altVideoId: "Ww71knvhQ-s",
    startSec: 0,
    bridge: "Computes group totals and revenue share percentages without collapsing rows like GROUP BY does.",
    takeaways: [
      "Keep row-level granularity while computing partition-wide aggregates via OVER (PARTITION BY ...).",
      "Calculate each order's percentage contribution to a customer's total spend.",
      "Understand the difference between GROUP BY collapsing and window partitioning."
    ],
    lab: {
      lang: "sql",
      title: "Order Share of Customer Lifetime Spend",
      prompt: "Show each Delivered order alongside that customer's total spend and the order's percentage share.",
      hint: "Use SUM(total_inr) OVER (PARTITION BY customer_id).",
      starterCode: "SELECT order_id, customer_id, order_date, total_inr,\n       SUM(total_inr) OVER (PARTITION BY customer_id) AS cust_total_inr,\n       ROUND(100.0 * total_inr / SUM(total_inr) OVER (PARTITION BY customer_id), 1) AS share_pct\nFROM orders\nWHERE status = 'Delivered'\nORDER BY customer_id, order_date;\n"
    }
  },
  {
    day: 48,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Ranking & Period Comparisons: RANK, LEAD, LAG",
    instructor: "techTFQ",
    duration: "25m",
    videoId: "Ww71knvhQ-s",
    altVideoId: "rIcB4zMYMas",
    startSec: 0,
    bridge: "Unlocks Top-N-per-group deduplication (ROW_NUMBER) and month-over-month growth deltas (LAG).",
    takeaways: [
      "Contrast ROW_NUMBER(), RANK(), and DENSE_RANK() on tied values.",
      "Access previous and next rows in an ordered sequence using LAG() and LEAD().",
      "Compute month-over-month revenue growth and days between repeat customer orders."
    ],
    lab: {
      lang: "sql",
      title: "Month-over-Month Revenue Growth via LAG()",
      prompt: "Aggregate monthly Delivered revenue in a CTE, then use LAG() to compute previous month revenue and MoM delta.",
      hint: "Use LAG(rev) OVER (ORDER BY order_month) in the outer SELECT.",
      starterCode: "WITH monthly AS (\n  SELECT SUBSTR(order_date, 1, 7) AS order_month,\n         ROUND(SUM(total_inr), 2) AS rev\n  FROM orders\n  WHERE status = 'Delivered'\n  GROUP BY order_month\n)\nSELECT order_month, rev,\n       LAG(rev) OVER (ORDER BY order_month) AS prev_month_rev,\n       ROUND(rev - COALESCE(LAG(rev) OVER (ORDER BY order_month), rev), 2) AS mom_delta_inr\nFROM monthly\nORDER BY order_month;\n"
    }
  },
  {
    day: 49,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Rolling Windows & Percentiles: ROWS BETWEEN",
    instructor: "techTFQ",
    duration: "54m",
    videoId: "zAmJPdZu8Rg",
    altVideoId: "Ww71knvhQ-s",
    startSec: 0,
    bridge: "Constructs cumulative running totals and moving averages using explicit window frame clauses.",
    takeaways: [
      "Control exact sliding frames with ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW.",
      "Compute 3-period moving averages with ROWS BETWEEN 2 PRECEDING AND CURRENT ROW.",
      "Understand why ROWS frames differ from RANGE frames when duplicate sort keys exist."
    ],
    lab: {
      lang: "sql",
      title: "Cumulative Running Revenue Curve",
      prompt: "Calculate the chronological running total of Delivered revenue across all orders.",
      hint: "SUM(total_inr) OVER (ORDER BY order_date, order_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).",
      starterCode: "SELECT order_id, order_date, total_inr,\n       ROUND(SUM(total_inr) OVER (\n         ORDER BY order_date, order_id\n         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ), 2) AS cumulative_revenue_inr\nFROM orders\nWHERE status = 'Delivered'\nORDER BY order_date, order_id;\n"
    }
  },
  {
    day: 50,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Case Study 1: New vs Repeat Customer Split",
    instructor: "Ankit Bansal",
    duration: "17m",
    videoId: "MpAMjtvarrc",
    altVideoId: "6hfsRqmyvog",
    startSec: 0,
    bridge: "Solves a classic product-analytics interview pattern by tagging every order's purchase sequence number.",
    takeaways: [
      "Identify a customer's first purchase date using MIN(order_date) OVER (PARTITION BY customer_id).",
      "Classify every subsequent order as New vs Repeat revenue.",
      "Aggregate monthly revenue split between new acquisition and repeat retention."
    ],
    lab: {
      lang: "sql",
      title: "New vs Repeat Revenue Breakdown by Month",
      prompt: "Tag each Delivered order as 'New' (first order for that customer) or 'Repeat', then aggregate by month.",
      hint: "Compare order_date = MIN(order_date) OVER (PARTITION BY customer_id) inside a CTE.",
      starterCode: "WITH tagged AS (\n  SELECT order_id, customer_id,\n         SUBSTR(order_date, 1, 7) AS order_month,\n         total_inr,\n         CASE\n           WHEN order_date = MIN(order_date) OVER (PARTITION BY customer_id) THEN 'New'\n           ELSE 'Repeat'\n         END AS buyer_type\n  FROM orders\n  WHERE status = 'Delivered'\n)\nSELECT order_month, buyer_type,\n       COUNT(*) AS orders_cnt,\n       ROUND(SUM(total_inr), 2) AS revenue_inr\nFROM tagged\nGROUP BY order_month, buyer_type\nORDER BY order_month, buyer_type;\n"
    }
  },
  {
    day: 51,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Case Study 2: Monthly Cohort Retention & Churn",
    instructor: "Ankit Bansal",
    duration: "12m",
    videoId: "6hfsRqmyvog",
    altVideoId: "MpAMjtvarrc",
    startSec: 0,
    bridge: "Builds a full cohort retention matrix tracking how many customers return in Month +1, +2, and beyond.",
    takeaways: [
      "Anchor every user to their acquisition cohort month.",
      "Compute month offset index between cohort_month and activity_month.",
      "Measure cohort retention curves cleanly in pure SQL."
    ],
    lab: {
      lang: "sql",
      title: "Cohort Activity Matrix",
      prompt: "Pair each customer's signup month with their Delivered order months to track active buyers per cohort.",
      hint: "Join customers c and orders o, extracting SUBSTR(c.signup_date, 1, 7) and SUBSTR(o.order_date, 1, 7).",
      starterCode: "SELECT SUBSTR(c.signup_date, 1, 7) AS cohort_month,\n       SUBSTR(o.order_date, 1, 7) AS active_month,\n       COUNT(DISTINCT o.customer_id) AS retained_customers,\n       ROUND(SUM(o.total_inr), 2) AS cohort_rev_inr\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nWHERE o.status = 'Delivered'\nGROUP BY cohort_month, active_month\nORDER BY cohort_month, active_month;\n"
    }
  },
  {
    day: 52,
    month: 2,
    module: "M2: SQL Analytics",
    title: "B-Tree & Composite Database Indexing",
    instructor: "Hussein Nasser",
    duration: "13m",
    videoId: "T9n_-_oLrbM",
    altVideoId: "P7EUFtjeAmI",
    startSec: 0,
    bridge: "Explains how B-Tree indexes turn O(N) full table scans into O(log N) seeks on high-traffic filter and join columns.",
    takeaways: [
      "Understand B-Tree leaf navigation and why composite index column order matters (leftmost prefix rule).",
      "Index foreign keys (customer_id, product_id) and frequent WHERE/ORDER BY columns.",
      "Balance read query speed against write amplification overhead."
    ],
    lab: {
      lang: "sql",
      title: "Create Composite Analytical Index & Verify Schema",
      prompt: "Create a composite index on orders(status, order_date, customer_id) and inspect sqlite_master.",
      hint: "CREATE INDEX IF NOT EXISTS idx_orders_status_date ON orders(status, order_date, customer_id);",
      starterCode: "CREATE INDEX IF NOT EXISTS idx_orders_status_date\nON orders(status, order_date, customer_id);\n\nSELECT name, tbl_name, sql\nFROM sqlite_master\nWHERE type = 'index';\n"
    }
  },
  {
    day: 53,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Reading Query Plans with EXPLAIN ANALYZE",
    instructor: "Hussein Nasser",
    duration: "10m",
    videoId: "P7EUFtjeAmI",
    altVideoId: "O7AzUDogXsw",
    startSec: 0,
    bridge: "Verifies whether your SQLite/Postgres query planner actually uses your new index or falls back to a sequential scan.",
    takeaways: [
      "Inspect query execution trees with EXPLAIN QUERY PLAN (SQLite) and EXPLAIN ANALYZE (Postgres).",
      "Recognize SCAN TABLE vs SEARCH TABLE USING INDEX.",
      "Spot non-sargable predicates (like wrapping indexed columns in functions) that defeat indexes."
    ],
    lab: {
      lang: "sql",
      title: "Inspect EXPLAIN QUERY PLAN on Indexed Orders",
      prompt: "Run EXPLAIN QUERY PLAN on a filtered orders query to observe how SQLite scans or searches the table.",
      hint: "Prefix your SELECT statement with EXPLAIN QUERY PLAN.",
      starterCode: "EXPLAIN QUERY PLAN\nSELECT order_id, customer_id, total_inr\nFROM orders\nWHERE status = 'Delivered' AND order_date >= '2026-03-01';\n"
    }
  },
  {
    day: 54,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Tuning Slow Joins & Eliminating Table Scans",
    instructor: "Data with Baraa",
    duration: "32m",
    videoId: "O7AzUDogXsw",
    altVideoId: "P7EUFtjeAmI",
    startSec: 0,
    bridge: "Applies sargable date ranges and pre-aggregated CTEs to keep multi-million-row analytical queries fast.",
    takeaways: [
      "Rewrite non-sargable WHERE YEAR(date) = 2026 into sargable range predicates date >= '2026-01-01'.",
      "Pre-aggregate large fact tables before joining to dimension tables.",
      "Select only required columns to enable covering index-only scans."
    ],
    lab: {
      lang: "sql",
      title: "Sargable Range Filter Refactor",
      prompt: "Query Q1 2026 Delivered orders using a sargable BETWEEN date range rather than string substring functions in WHERE.",
      hint: "WHERE status = 'Delivered' AND order_date BETWEEN '2026-01-01' AND '2026-03-31'.",
      starterCode: "SELECT order_id, customer_id, order_date, total_inr\nFROM orders\nWHERE status = 'Delivered'\n  AND order_date BETWEEN '2026-01-01' AND '2026-03-31'\nORDER BY order_date;\n"
    }
  },
  {
    day: 55,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Capstone 2A: End-to-End SQL Analytics Project",
    instructor: "Luke Barousse",
    duration: "1h 15m",
    videoId: "QKIGsShyEsQ",
    altVideoId: "7mz73uXD9DA",
    startSec: 18000,
    bridge: "Consolidates all Month 2 SQL techniques into a clean analytical VIEW ready to be consumed by Python in Month 3.",
    takeaways: [
      "Encapsulate complex multi-table joins and window ranks into a reusable SQL VIEW.",
      "Deliver an executive city-and-tier performance leaderboard.",
      "Ensure downstream Python consumers can query clean, pre-joined analytical tables."
    ],
    lab: {
      lang: "sql",
      title: "Capstone 2A: ShopPulse Executive Analytics View",
      prompt: "Create a VIEW vw_customer_summary combining customer profile, delivered orders, LTV, and rank, then query it.",
      hint: "CREATE VIEW IF NOT EXISTS vw_customer_summary AS WITH ... SELECT ...;",
      starterCode: "CREATE VIEW IF NOT EXISTS vw_customer_summary AS\nSELECT c.customer_id, c.full_name, c.city, c.tier,\n       COUNT(o.order_id) AS delivered_orders,\n       COALESCE(ROUND(SUM(o.total_inr), 2), 0) AS ltv_inr,\n       DENSE_RANK() OVER (ORDER BY COALESCE(SUM(o.total_inr), 0) DESC) AS ltv_rank\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id AND o.status = 'Delivered'\nGROUP BY c.customer_id, c.full_name, c.city, c.tier;\n\nSELECT * FROM vw_customer_summary;\n"
    }
  },
  {
    day: 56,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Bridge 2->3: Exporting SQL Views to Python Arrays",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "GB9ByFAIAH4",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Bridges Month 2 SQL directly into Month 3 scientific Python by loading SQLite query outputs into NumPy arrays.",
    takeaways: [
      "Bridge relational database tables into contiguous C-backed NumPy ndarrays.",
      "Understand why vectorized NumPy operations outperform Python loops by 50x-100x.",
      "Inspect array dtype, shape, and memory footprint."
    ],
    lab: {
      lang: "python",
      title: "Bridge 2->3: SQLite Revenue Vector to NumPy",
      prompt: "Query an in-memory SQLite orders table, convert the revenue column into a NumPy float64 array, and compute mean & std.",
      hint: "Pass [r[0] for r in cur.fetchall()] into np.array(..., dtype=np.float64).",
      starterCode: "import sqlite3\nimport numpy as np\n\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE orders (id INT, total_inr REAL)')\ncur.executemany('INSERT INTO orders VALUES (?, ?)', [(1, 6498.0), (2, 8999.0), (3, 2499.0), (4, 4999.0), (5, 11498.0)])\n\nrevs = np.array([r[0] for r in cur.execute('SELECT total_inr FROM orders')], dtype=np.float64)\nprint('Shape:', revs.shape, '| Dtype:', revs.dtype)\nprint(f'Mean: INR {revs.mean():.2f} | Std: INR {revs.std():.2f}')\n"
    }
  },
  {
    day: 57,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Bridge 2->3: NumPy Arrays, Shapes & Slicing",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "GB9ByFAIAH4",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Builds on Day 56 by mastering 2D matrix indexing, axis semantics, and zero-copy views in NumPy.",
    takeaways: [
      "Navigate 1D vectors and 2D matrices with [row, col] slicing.",
      "Understand axis=0 (down rows / per column) vs axis=1 (across columns / per row).",
      "Recognize that NumPy slices return views sharing underlying memory."
    ],
    lab: {
      lang: "python",
      title: "2D Daily Store Revenue Matrix Slicing",
      prompt: "Given a 3x4 matrix (3 cities x 4 weeks) of ShopPulse revenue, compute total revenue per city and per week.",
      hint: "Use matrix.sum(axis=1) for city totals and matrix.sum(axis=0) for weekly totals.",
      starterCode: "import numpy as np\n\n# Rows: Mumbai, Bengaluru, Delhi | Cols: W1, W2, W3, W4\nrev_matrix = np.array([\n    [6498, 2499, 7200, 8100],\n    [8999, 3298, 9400, 10200],\n    [4999, 2100, 4500, 5300]\n], dtype=np.float64)\n\nprint('City totals (axis=1):', rev_matrix.sum(axis=1))\nprint('Weekly totals (axis=0):', rev_matrix.sum(axis=0))\n"
    }
  },
  {
    day: 58,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Vectorized Math, Broadcasting & Linear Algebra",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "GB9ByFAIAH4",
    altVideoId: "2uvysYbKdjM",
    startSec: 1200,
    bridge: "Uses broadcasting and dot products (@) to compute multi-SKU cart totals and margins without a single Python loop.",
    takeaways: [
      "Apply scalar and 1D vector broadcasting rules across 2D feature matrices.",
      "Compute weighted sums and linear projections cleanly with the @ matrix multiplication operator.",
      "Use np.where(cond, x, y) for vectorized conditional logic."
    ],
    lab: {
      lang: "python",
      title: "Vectorized Order Matrix x Price Vector (@)",
      prompt: "Multiply a 3x3 order-quantity matrix by a unit-price vector using @ and apply 18% GST via scalar broadcasting.",
      hint: "subtotals = qty_matrix @ unit_prices; totals_with_gst = subtotals * 1.18.",
      starterCode: "import numpy as np\n\nqty_matrix = np.array([\n    [1, 1, 0],\n    [0, 2, 1],\n    [2, 0, 1]\n])\nunit_prices = np.array([4999.0, 1499.0, 2499.0])\n\nsubtotals = qty_matrix @ unit_prices\ntotals_gst = np.round(subtotals * 1.18, 2)\nprint('Order Totals (incl. GST):', totals_gst)\n"
    }
  },
  {
    day: 59,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Reshaping, Stacking & Boolean Masking in NumPy",
    instructor: "Keith Galli",
    duration: "18m",
    videoId: "GB9ByFAIAH4",
    altVideoId: "2uvysYbKdjM",
    startSec: 2400,
    bridge: "Translates SQL WHERE filtering into high-speed NumPy boolean masks and prepares 2D feature shapes for Scikit-Learn.",
    takeaways: [
      "Filter arrays cleanly using compound boolean masks (&, |, ~ with parentheses).",
      "Reshape 1D arrays into 2D column vectors via .reshape(-1, 1).",
      "Combine arrays vertically with np.vstack and horizontally with np.hstack."
    ],
    lab: {
      lang: "python",
      title: "Boolean Masking High-Value Orders",
      prompt: "Filter orders between 2500 and 10000 INR using a boolean mask and reshape the result into a (-1, 1) column matrix.",
      hint: "mask = (orders >= 2500) & (orders <= 10000); filtered = orders[mask].reshape(-1, 1).",
      starterCode: "import numpy as np\n\norders = np.array([6498.0, 8999.0, 1499.0, 2499.0, 4999.0, 11498.0])\nmask = (orders >= 2500) & (orders <= 10000)\nselected = orders[mask].reshape(-1, 1)\n\nprint('Filtered shape:', selected.shape)\nprint(selected)\n"
    }
  },
  {
    day: 60,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Synthetic Data Generation & Random Seeds",
    instructor: "Keith Galli",
    duration: "1h 00m",
    videoId: "VJBY2eVtf7o",
    altVideoId: "GB9ByFAIAH4",
    startSec: 0,
    bridge: "Uses reproducible NumPy random generators (np.random.default_rng) to simulate realistic order distributions for stress testing.",
    takeaways: [
      "Use np.random.default_rng(seed=42) for reproducible synthetic experiments.",
      "Sample normal, uniform, and discrete choice arrays to mock large datasets.",
      "Lay the foundation for Monte Carlo and bootstrapping simulations in Month 4."
    ],
    lab: {
      lang: "python",
      title: "Reproducible 1,000-Order Traffic Simulator",
      prompt: "Simulate 1,000 ShopPulse order values using default_rng(42) and print median, p90, and max values.",
      hint: "Use rng = np.random.default_rng(42) and np.percentile(samples, 90).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nsamples = np.round(rng.lognormal(mean=8.2, sigma=0.6, size=1000), 2)\n\nprint(f'Median: INR {np.median(samples):,.2f}')\nprint(f'90th Percentile: INR {np.percentile(samples, 90):,.2f}')\nprint(f'Max Order: INR {samples.max():,.2f}')\n"
    }
  },
  {
    day: 61,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Pandas Architecture: Series, Index & DataFrames",
    instructor: "codebasics",
    duration: "10m",
    videoId: "CmorAWRsCAw",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Wraps NumPy's fast typed arrays with labeled row Indexes and heterogeneous column schemas inside Pandas DataFrames.",
    takeaways: [
      "Understand how a DataFrame is a collection of aligned Series sharing an Index.",
      "Inspect dtypes, memory usage, and summary stats immediately with .info() and .describe().",
      "Construct DataFrames cleanly from lists of dicts or SQL query outputs."
    ],
    lab: {
      lang: "python",
      title: "Construct & Profile ShopPulse DataFrame",
      prompt: "Build a DataFrame of ShopPulse orders and print its shape, dtypes, and descriptive statistics.",
      hint: "df = pd.DataFrame(records); print(df.describe()).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame([\n    {'order_id': 1001, 'city': 'Mumbai', 'total_inr': 6498.0},\n    {'order_id': 1002, 'city': 'Bengaluru', 'total_inr': 8999.0},\n    {'order_id': 1003, 'city': 'Pune', 'total_inr': 2298.0},\n    {'order_id': 1004, 'city': 'Hyderabad', 'total_inr': 11498.0}\n])\n\nprint(df.dtypes)\nprint('\\nSummary:\\n', df['total_inr'].describe())\n"
    }
  },
  {
    day: 62,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Loading CSV/Excel/SQL & Inspecting Schemas",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "2uvysYbKdjM",
    altVideoId: "CmorAWRsCAw",
    startSec: 0,
    bridge: "Connects Month 2 SQLite databases directly to Pandas via pd.read_sql_query() and io.StringIO CSV readers.",
    takeaways: [
      "Load relational tables into DataFrames with pd.read_sql_query(sql, conn).",
      "Configure parse_dates, usecols, and dtype parameters in pd.read_csv().",
      "Run immediate schema sanity checks (.head(), .isna().sum(), .nunique())."
    ],
    lab: {
      lang: "python",
      title: "SQL-to-Pandas DataFrame Ingestion",
      prompt: "Load an in-memory SQLite table directly into a Pandas DataFrame via pd.read_sql_query() and inspect nulls.",
      hint: "df = pd.read_sql_query('SELECT * FROM orders', conn).",
      starterCode: "import sqlite3\nimport pandas as pd\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (order_id INT, city TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [(1001, 'Mumbai', 6498.0), (1002, 'Delhi', None), (1003, 'Bengaluru', 8999.0)])\n\ndf = pd.read_sql_query('SELECT * FROM orders', conn)\nprint(df)\nprint('\\nNull counts:\\n', df.isna().sum())\n"
    }
  },
  {
    day: 63,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Label vs Position Indexing: .loc[] & .iloc[]",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "2uvysYbKdjM",
    altVideoId: "CmorAWRsCAw",
    startSec: 1200,
    bridge: "Eliminates ambiguous bracket indexing by enforcing explicit label (.loc) and integer-position (.iloc) access.",
    takeaways: [
      "Use .loc[row_mask, ['col_a', 'col_b']] for label and boolean selection.",
      "Use .iloc[0:5, 0:3] for strict zero-based positional slicing.",
      "Never chain df[mask]['col'] = val when mutating DataFrames."
    ],
    lab: {
      lang: "python",
      title: "Explicit .loc[] Filtering & Safe Assignment",
      prompt: "Use .loc[] to select Mumbai orders and assign a new 'priority' flag without chained indexing.",
      hint: "df.loc[df['city'] == 'Mumbai', 'priority'] = 'Express'.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [1001, 1002, 1003],\n    'city': ['Mumbai', 'Delhi', 'Mumbai'],\n    'total_inr': [6498.0, 4999.0, 2499.0]\n})\ndf['priority'] = 'Standard'\ndf.loc[df['city'] == 'Mumbai', 'priority'] = 'Express'\nprint(df.loc[:, ['order_id', 'city', 'priority']])\n"
    }
  },
  {
    day: 64,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Filtering, Sorting & Vectorized Column Creation",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "2uvysYbKdjM",
    altVideoId: "CmorAWRsCAw",
    startSec: 2400,
    bridge: "Mirrors SQL SELECT expressions, WHERE predicates, and ORDER BY clauses inside clean method-chained Pandas pipelines.",
    takeaways: [
      "Build readable transformation pipelines using .assign(), .query(), and .sort_values().",
      "Use .isin() and .between() for expressive row filtering.",
      "Compute derived profit and margin columns vectorially across entire Series."
    ],
    lab: {
      lang: "python",
      title: "Method-Chained Product Profitability Pipeline",
      prompt: "Use .assign() and .sort_values() to compute profit_inr and margin_pct across the product catalog.",
      hint: "df.assign(profit=lambda d: d['price'] - d['cost']).sort_values('profit', ascending=False).",
      starterCode: "import pandas as pd\n\nproducts = pd.DataFrame({\n    'name': ['Keyboard', 'Mouse', 'USB-C Hub', 'Headphones'],\n    'price': [4999.0, 1499.0, 2499.0, 8999.0],\n    'cost': [2900.0, 750.0, 1200.0, 5100.0]\n})\n\nranked = (\n    products\n    .assign(\n        profit=lambda d: d['price'] - d['cost'],\n        margin_pct=lambda d: ((d['profit'] / d['price']) * 100).round(1)\n    )\n    .sort_values('profit', ascending=False)\n)\nprint(ranked)\n"
    }
  },
  {
    day: 65,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Missing Data Strategies: isna, fillna, interpolate",
    instructor: "codebasics",
    duration: "22m",
    videoId: "EaGbS7eWSs0",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Handles real-world sensor and telemetry gaps cleanly before statistical inference or ML training.",
    takeaways: [
      "Diagnose missingness patterns (MCAR vs MAR) with .isna().mean().",
      "Choose domain-appropriate strategies: median/group imputation, forward-fill (.ffill()), or linear interpolation.",
      "Preserve missingness indicator flags when nullity itself carries signal."
    ],
    lab: {
      lang: "python",
      title: "Time-Ordered Metric Interpolation & Fallback Imputation",
      prompt: "Interpolate a missing daily traffic metric and fill missing city labels with 'Unknown'.",
      hint: "Use df['sessions'].interpolate(method='linear') and df['city'].fillna('Unknown').",
      starterCode: "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'day': [1, 2, 3, 4],\n    'city': ['Mumbai', None, 'Bengaluru', 'Pune'],\n    'sessions': [1200.0, np.nan, 1600.0, 1800.0]\n})\n\ndf['city'] = df['city'].fillna('Unknown')\ndf['sessions'] = df['sessions'].interpolate(method='linear')\nprint(df)\n"
    }
  },
  {
    day: 66,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "String & Regex Cleaning with .str Accessor",
    instructor: "Keith Galli",
    duration: "15m",
    videoId: "2uvysYbKdjM",
    altVideoId: "EaGbS7eWSs0",
    startSec: 3600,
    bridge: "Standardizes dirty user-entered city names, coupon codes, and SKU tags across entire Series vectorially.",
    takeaways: [
      "Chain .str.strip().str.title() to normalize inconsistent categorical labels.",
      "Extract structured codes or numeric values from text using .str.extract(regex).",
      "Filter text columns safely using .str.contains(..., na=False)."
    ],
    lab: {
      lang: "python",
      title: "Normalizing Dirty City & Coupon Strings",
      prompt: "Clean messy city names (' mumbai ', 'BENGALURU') and extract numeric discount percentages from coupon strings.",
      hint: "Use df['city'].str.strip().str.title() and df['coupon'].str.extract(r'(\\d+)').astype(float).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'city': ['  mumbai ', 'BENGALURU', 'Mumbai ', ' pune'],\n    'coupon': ['SAVE10', 'FESTIVE20', 'NONE', 'VIP15']\n})\n\ndf['city_clean'] = df['city'].str.strip().str.title()\ndf['disc_pct'] = df['coupon'].str.extract(r'(\\d+)').fillna(0).astype(int)\nprint(df[['city_clean', 'coupon', 'disc_pct']])\n"
    }
  },
  {
    day: 67,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Translating SQL GROUP BY into Pandas Split-Apply-Combine",
    instructor: "Data School",
    duration: "9m",
    videoId: "qy0fDqoMJx8",
    altVideoId: "VRmXto2YA2I",
    startSec: 0,
    bridge: "Maps your Day 34 SQL GROUP BY mastery directly onto Pandas .groupby() split-apply-combine workflows.",
    takeaways: [
      "Understand the Split-Apply-Combine execution model behind .groupby().",
      "Pass as_index=False (or .reset_index()) to keep grouped keys as flat columns.",
      "Control observed=True when grouping over categorical dtypes."
    ],
    lab: {
      lang: "python",
      title: "City Revenue Rollup in Pandas",
      prompt: "Group orders by city (with as_index=False) to compute total orders and revenue.",
      hint: "df.groupby('city', as_index=False)['total_inr'].agg(['count', 'sum']).",
      starterCode: "import pandas as pd\n\norders = pd.DataFrame({\n    'city': ['Mumbai', 'Bengaluru', 'Mumbai', 'Pune', 'Bengaluru'],\n    'total_inr': [6498.0, 8999.0, 2499.0, 2298.0, 3298.0]\n})\n\nsummary = orders.groupby('city', as_index=False).agg(\n    orders_cnt=('total_inr', 'count'),\n    revenue_inr=('total_inr', 'sum')\n).sort_values('revenue_inr', ascending=False)\nprint(summary)\n"
    }
  },
  {
    day: 68,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Multi-Metric Aggregations (.agg()) & transform()",
    instructor: "Alex The Analyst",
    duration: "11m",
    videoId: "VRmXto2YA2I",
    altVideoId: "qy0fDqoMJx8",
    startSec: 0,
    bridge: "Replicates SQL window PARTITION BY aggregates in Pandas using .groupby(...).transform() without collapsing rows.",
    takeaways: [
      "Use named aggregations .agg(col=('src', 'func')) for clean flat column headers.",
      "Use .transform('sum') or .transform('mean') to broadcast group metrics back onto every original row.",
      "Compute within-group Z-scores and share-of-wallet features for ML."
    ],
    lab: {
      lang: "python",
      title: "Order Share of City Revenue via transform()",
      prompt: "Add a city_total_inr column using .groupby('city')['total_inr'].transform('sum') and compute each order's share %.",
      hint: "df['city_total'] = df.groupby('city')['total_inr'].transform('sum').",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [1001, 1002, 1003, 1006],\n    'city': ['Mumbai', 'Bengaluru', 'Mumbai', 'Bengaluru'],\n    'total_inr': [6498.0, 8999.0, 2499.0, 3298.0]\n})\n\ndf['city_total'] = df.groupby('city')['total_inr'].transform('sum')\ndf['city_share_pct'] = (100 * df['total_inr'] / df['city_total']).round(1)\nprint(df)\n"
    }
  },
  {
    day: 69,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Translating SQL JOIN into pd.merge() & concat()",
    instructor: "Absent Data",
    duration: "15m",
    videoId: "1LaSCxx3xhA",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Brings SQL INNER, LEFT, and ANTI joins into Pandas with cardinality validation (validate='many_to_one').",
    takeaways: [
      "Use pd.merge(left, right, on=..., how='left', validate='many_to_one') to catch accidental join fan-out.",
      "Use indicator=True to audit unmatched keys (_merge == 'left_only').",
      "Stack homogenous monthly DataFrames vertically with pd.concat(..., ignore_index=True)."
    ],
    lab: {
      lang: "python",
      title: "Validated Customer-Order Left Merge",
      prompt: "Merge orders onto customers with how='left' and validate='one_to_many', filling missing revenue with 0.",
      hint: "pd.merge(customers, orders, on='customer_id', how='left', validate='one_to_many').",
      starterCode: "import pandas as pd\n\ncustomers = pd.DataFrame({'customer_id': [1, 2, 3], 'name': ['Aarav', 'Priya', 'Rohan']})\norders = pd.DataFrame({'order_id': [1001, 1003, 1002], 'customer_id': [1, 1, 2], 'total_inr': [6498.0, 2499.0, 8999.0]})\n\nmerged = pd.merge(customers, orders, on='customer_id', how='left', validate='one_to_many')\nmerged['total_inr'] = merged['total_inr'].fillna(0.0)\nprint(merged)\n"
    }
  },
  {
    day: 70,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Reshaping Long vs Wide: pivot_table, melt, stack",
    instructor: "Misra Turp",
    duration: "13m",
    videoId: "M3oB2urOHXY",
    altVideoId: "tcRGa2soc-c",
    startSec: 0,
    bridge: "Converts normalized long event tables into executive cross-tab matrices (pivot_table) and back into tidy long format (melt).",
    takeaways: [
      "Build multi-dimensional executive summary matrices with pd.pivot_table(..., fill_value=0).",
      "Unpivot wide reporting spreadsheets into tidy long format with pd.melt() for Seaborn plotting.",
      "Understand tidy data rules: one variable per column, one observation per row."
    ],
    lab: {
      lang: "python",
      title: "City x Month Revenue Pivot Matrix",
      prompt: "Pivot a long orders table into a City (rows) x Month (columns) revenue matrix with fill_value=0.",
      hint: "pd.pivot_table(df, index='city', columns='month', values='rev', aggfunc='sum', fill_value=0).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'city': ['Mumbai', 'Bengaluru', 'Mumbai', 'Pune'],\n    'month': ['2026-02', '2026-02', '2026-03', '2026-03'],\n    'rev': [6498.0, 8999.0, 2499.0, 2298.0]\n})\n\nmatrix = pd.pivot_table(df, index='city', columns='month', values='rev', aggfunc='sum', fill_value=0.0)\nprint(matrix)\n"
    }
  },
  {
    day: 71,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Hierarchical MultiIndex Slicing & Unstacking",
    instructor: "Data School",
    duration: "25m",
    videoId: "tcRGa2soc-c",
    altVideoId: "M3oB2urOHXY",
    startSec: 0,
    bridge: "Gives you mastery over hierarchical group outputs so you never get stuck on tuple column names.",
    takeaways: [
      "Navigate MultiIndex rows and columns cleanly using .xs() and pd.IndexSlice.",
      "Convert hierarchical row levels into wide columns via .unstack(fill_value=0).",
      "Flatten MultiIndex column headers cleanly after multi-function aggregations."
    ],
    lab: {
      lang: "python",
      title: "MultiIndex Groupby & Unstack to Wide Matrix",
      prompt: "Group orders by ['city', 'tier'] and unstack('tier') into a clean comparison table.",
      hint: "df.groupby(['city', 'tier'])['rev'].sum().unstack(fill_value=0).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'city': ['Mumbai', 'Mumbai', 'Bengaluru', 'Bengaluru'],\n    'tier': ['Gold', 'Silver', 'Platinum', 'Gold'],\n    'rev': [8997.0, 1499.0, 12297.0, 4999.0]\n})\n\nwide = df.groupby(['city', 'tier'])['rev'].sum().unstack(fill_value=0.0)\nprint(wide)\n"
    }
  },
  {
    day: 72,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Time Series: to_datetime, Resampling & Rolling Windows",
    instructor: "Data School",
    duration: "10m",
    videoId: "yCgJGsg0Xa4",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Turns string dates into DatetimeIndex series for calendar resampling ('W', 'ME') and seasonality feature extraction.",
    takeaways: [
      "Parse dates reliably with pd.to_datetime(..., format='ISO8601').",
      "Extract day_name(), month, and is_weekend features via the .dt accessor.",
      "Downsample daily transactions into weekly or monthly totals via .resample('ME').sum()."
    ],
    lab: {
      lang: "python",
      title: "Datetime Indexing & Monthly Resampling",
      prompt: "Convert order_date strings to datetime, set as index, and resample total_inr to month-end ('ME') sums.",
      hint: "df['order_date'] = pd.to_datetime(df['order_date']); df.set_index('order_date')['total_inr'].resample('ME').sum().",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_date': ['2026-02-01', '2026-02-14', '2026-03-11', '2026-03-25'],\n    'total_inr': [6498.0, 8999.0, 2499.0, 2298.0]\n})\ndf['order_date'] = pd.to_datetime(df['order_date'])\nmonthly = df.set_index('order_date')['total_inr'].resample('ME').sum()\nprint(monthly)\n"
    }
  },
  {
    day: 73,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Pandas Window Functions (rolling, expanding, shift)",
    instructor: "Keith Galli",
    duration: "15m",
    videoId: "2uvysYbKdjM",
    altVideoId: "yCgJGsg0Xa4",
    startSec: 4500,
    bridge: "Translates Day 48-49 SQL LEAD/LAG and ROWS BETWEEN frames into Pandas .shift(), .rolling(), and .expanding()—critical for Month 5 forecasting.",
    takeaways: [
      "Create lag features and period-over-period diffs with .shift(1) and .pct_change().",
      "Smooth noisy daily revenue with .rolling(window=3, min_periods=1).mean().",
      "Track cumulative running totals with .expanding().sum()."
    ],
    lab: {
      lang: "python",
      title: "3-Day Moving Average & Lag Feature Builder",
      prompt: "Compute a 3-period rolling average and 1-period lag on a daily ShopPulse revenue Series.",
      hint: "Use s.shift(1) and s.rolling(3, min_periods=1).mean().round(2).",
      starterCode: "import pandas as pd\n\ndaily_rev = pd.Series([4200.0, 5100.0, 4800.0, 7900.0, 8400.0], name='rev')\ndf = pd.DataFrame({\n    'rev': daily_rev,\n    'lag_1': daily_rev.shift(1),\n    'rolling_3d_avg': daily_rev.rolling(3, min_periods=1).mean().round(2),\n    'cum_rev': daily_rev.expanding().sum()\n})\nprint(df)\n"
    }
  },
  {
    day: 74,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Memory Optimization: Downcasting & category Dtypes",
    instructor: "Rob Mulla",
    duration: "11m",
    videoId: "u4_c2LDi4b8",
    altVideoId: "SAFmrTnEHLg",
    startSec: 0,
    bridge: "Shrinks DataFrame RAM usage by 60-85% using categorical dtypes and integer/float downcasting before large EDA runs.",
    takeaways: [
      "Measure true deep memory footprint via df.memory_usage(deep=True).",
      "Convert low-cardinality string columns (city, tier, status) to 'category' dtype.",
      "Downcast int64/float64 columns safely using pd.to_numeric(..., downcast='integer')."
    ],
    lab: {
      lang: "python",
      title: "Benchmarking Categorical Memory Compression",
      prompt: "Compare memory_usage(deep=True) on a 10,000-row city Series before and after converting to 'category'.",
      hint: "s_cat = s.astype('category'); compare s.memory_usage(deep=True) vs s_cat.memory_usage(deep=True).",
      starterCode: "import pandas as pd\n\ncities = pd.Series(['Mumbai', 'Bengaluru', 'Pune', 'Delhi', 'Hyderabad'] * 2000)\nmem_obj = cities.memory_usage(deep=True)\nmem_cat = cities.astype('category').memory_usage(deep=True)\n\nprint(f'Object RAM: {mem_obj:,} bytes | Category RAM: {mem_cat:,} bytes ({100*(1 - mem_cat/mem_obj):.1f}% saved)')\n"
    }
  },
  {
    day: 75,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Eliminating .iterrows() Loops via Vectorization",
    instructor: "Rob Mulla",
    duration: "11m",
    videoId: "SAFmrTnEHLg",
    altVideoId: "u4_c2LDi4b8",
    startSec: 0,
    bridge: "Replaces slow row-by-row .iterrows() and .apply() loops with vectorized NumPy/Pandas array operations.",
    takeaways: [
      "Understand why .iterrows() boxes every row into a new Series object.",
      "Replace row-wise if/else logic with np.where() or np.select().",
      "Benchmark execution speedups with time.perf_counter()."
    ],
    lab: {
      lang: "python",
      title: "Vectorized Tiered Commission Calculator (np.select)",
      prompt: "Use np.select() to assign 12%, 8%, or 5% commission rates across 50,000 orders without loops.",
      hint: "np.select([rev >= 8000, rev >= 4000], [0.12, 0.08], default=0.05).",
      starterCode: "import numpy as np\nimport pandas as pd\n\nrng = np.random.default_rng(7)\ndf = pd.DataFrame({'rev': rng.uniform(1000, 12000, size=50000)})\n\nconds = [df['rev'] >= 8000, df['rev'] >= 4000]\nchoices = [0.12, 0.08]\ndf['comm_rate'] = np.select(conds, choices, default=0.05)\ndf['commission'] = (df['rev'] * df['comm_rate']).round(2)\nprint(df.head())\n"
    }
  },
  {
    day: 76,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "25 Anti-Patterns: Chained Indexing & SettingWithCopy",
    instructor: "Rob Mulla",
    duration: "12m",
    videoId: "_gaAoJBMJ_Q",
    altVideoId: "SAFmrTnEHLg",
    startSec: 0,
    bridge: "Hardens your data cleaning scripts against silent mutation bugs, inplace=True traps, and unaligned index joins.",
    takeaways: [
      "Avoid inplace=True and prefer explicit reassignment or method chaining.",
      "Call .copy() explicitly when slicing a subset DataFrame that you intend to modify.",
      "Use .isna() instead of == np.nan."
    ],
    lab: {
      lang: "python",
      title: "Fixing Chained Assignment & Subset Mutation Bugs",
      prompt: "Create an explicit .copy() of Delivered orders and safely add a normalized tax column.",
      hint: "delivered = df.loc[df['status'] == 'Delivered'].copy().",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [1001, 1002, 1003],\n    'status': ['Delivered', 'Cancelled', 'Delivered'],\n    'total_inr': [6498.0, 1499.0, 8999.0]\n})\n\ndelivered = df.loc[df['status'] == 'Delivered'].copy()\ndelivered['base_ex_gst'] = (delivered['total_inr'] / 1.18).round(2)\nprint(delivered)\n"
    }
  },
  {
    day: 77,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Matplotlib Fundamentals: Figures, Axes & Subplots",
    instructor: "Derek Banas",
    duration: "45m",
    videoId: "wB9C0Mz9gSo",
    altVideoId: "6GUZXDef2U0",
    startSec: 0,
    bridge: "Transitions from tabular summaries into visual EDA using Matplotlib's object-oriented Figure and Axes API.",
    takeaways: [
      "Always use fig, ax = plt.subplots() instead of the stateful pyplot global API.",
      "Build multi-panel diagnostic layouts with plt.subplots(nrows, ncols).",
      "Format currency axes, titles, and legends for immediate executive clarity."
    ],
    lab: {
      lang: "python",
      title: "Programmatic Chart Summary & ASCII/Stats Diagnostic",
      prompt: "Compute histogram bin edges and counts via np.histogram() on ShopPulse order values to inspect skew.",
      hint: "counts, edges = np.histogram(orders, bins=4).",
      starterCode: "import numpy as np\n\norders = np.array([1499, 2298, 2499, 3298, 4999, 6498, 8999, 11498], dtype=float)\ncounts, edges = np.histogram(orders, bins=4)\nfor i, c in enumerate(counts):\n    print(f'INR {edges[i]:7.0f} - {edges[i+1]:7.0f} : {\"#\" * c} ({c})')\n"
    }
  },
  {
    day: 78,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Customizing Publication-Grade Annotations & Grids",
    instructor: "Derek Banas",
    duration: "45m",
    videoId: "wB9C0Mz9gSo",
    altVideoId: "6GUZXDef2U0",
    startSec: 2700,
    bridge: "Adds event callouts (like promo launch dates) and reference threshold lines directly onto analytical charts.",
    takeaways: [
      "Highlight target KPI thresholds with ax.axhline() and campaign dates with ax.axvline().",
      "Use ax.annotate() with clean offsets rather than cluttering every data point.",
      "Remove top and right chart spines for a modern editorial aesthetic."
    ],
    lab: {
      lang: "python",
      title: "KPI Threshold & Promo Spike Annotator",
      prompt: "Detect days exceeding the 85th-percentile revenue threshold and generate structured annotation coordinates.",
      hint: "Compute thresh = np.percentile(rev, 85) and filter rows above thresh.",
      starterCode: "import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    'date': ['2026-03-01', '2026-03-02', '2026-03-03', '2026-03-04', '2026-03-05'],\n    'rev': [4500.0, 4800.0, 12900.0, 5100.0, 4900.0]\n})\nthresh = np.percentile(df['rev'], 85)\nspikes = df[df['rev'] >= thresh]\nprint(f'Threshold: INR {thresh:.2f}\\nAnnotated Spikes:\\n', spikes)\n"
    }
  },
  {
    day: 79,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Seaborn Distributions: Histograms, KDE, Box & Violin",
    instructor: "Derek Banas",
    duration: "30m",
    videoId: "6GUZXDef2U0",
    altVideoId: "wB9C0Mz9gSo",
    startSec: 0,
    bridge: "Exposes right-skewed order distributions and outliers visually—setting up Month 4's mathematical probability distributions.",
    takeaways: [
      "Compare mean vs median and IQR on skewed revenue data using boxplots and violin plots.",
      "Overlay KDE density curves onto histograms to inspect modality.",
      "Identify heavy right tails that require log transforms or median-based metrics."
    ],
    lab: {
      lang: "python",
      title: "Distribution Skewness & IQR Outlier Audit",
      prompt: "Compute mean, median, IQR (Q3 - Q1), and Tukey upper outlier fence on ShopPulse basket sizes.",
      hint: "q1, q3 = np.percentile(baskets, [25, 75]); upper_fence = q3 + 1.5 * (q3 - q1).",
      starterCode: "import numpy as np\n\nbaskets = np.array([1499, 2298, 2499, 2799, 3298, 4999, 6498, 8999, 18500], dtype=float)\nq1, med, q3 = np.percentile(baskets, [25, 50, 75])\niqr = q3 - q1\nupper_fence = q3 + 1.5 * iqr\n\nprint(f'Mean: {baskets.mean():.2f} vs Median: {med:.2f}')\nprint(f'IQR: {iqr:.2f} | Upper Fence: {upper_fence:.2f}')\nprint('Outliers:', baskets[baskets > upper_fence])\n"
    }
  },
  {
    day: 80,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Multivariate Seaborn: Pairplots, Heatmaps & FacetGrids",
    instructor: "Derek Banas",
    duration: "30m",
    videoId: "6GUZXDef2U0",
    altVideoId: "wB9C0Mz9gSo",
    startSec: 1800,
    bridge: "Reveals multi-variable feature correlations and segment interactions before formal statistical testing in Month 4.",
    takeaways: [
      "Compute and visualize correlation matrices (.corr()) to spot collinear features.",
      "Use FacetGrid / small multiples to compare conversion rates across cities and tiers.",
      "Avoid Simpson's Paradox by slicing aggregates by confounding dimensions."
    ],
    lab: {
      lang: "python",
      title: "Feature Correlation Matrix Computation",
      prompt: "Build a multivariate customer metrics DataFrame and compute its pairwise Pearson correlation matrix.",
      hint: "Call df[['orders', 'tenure_days', 'ltv_inr']].corr().round(3).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'orders': [2, 5, 1, 4, 6, 3],\n    'tenure_days': [45, 180, 20, 120, 210, 90],\n    'ltv_inr': [8997, 24500, 2298, 16800, 31200, 11500]\n})\nprint(df.corr().round(3))\n"
    }
  },
  {
    day: 81,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Interactive Dashboards & Hover Charts with Plotly",
    instructor: "Derek Banas",
    duration: "1h 22m",
    videoId: "GGL6U0k8WYA",
    altVideoId: "6GUZXDef2U0",
    startSec: 0,
    bridge: "Upgrades static plots into interactive Plotly Express charts with hover tooltips and zoomable time sliders.",
    takeaways: [
      "Build interactive scatter, line, and funnel charts with plotly.express.",
      "Configure custom hover_data fields so stakeholders can inspect individual order IDs.",
      "Export standalone interactive HTML reports."
    ],
    lab: {
      lang: "python",
      title: "Checkout Funnel Stage Conversion Table",
      prompt: "Compute step-to-step and overall conversion percentages across the 4-stage ShopPulse checkout funnel.",
      hint: "Divide each stage's user count by the previous stage and by stage 0 ('Landing').",
      starterCode: "import pandas as pd\n\nfunnel = pd.DataFrame({\n    'stage': ['Landing', 'Product View', 'Add to Cart', 'Checkout Paid'],\n    'users': [10000, 5400, 2160, 864]\n})\nfunnel['step_conv_pct'] = (100 * funnel['users'] / funnel['users'].shift(1).fillna(funnel['users'])).round(1)\nfunnel['overall_conv_pct'] = (100 * funnel['users'] / funnel['users'].iloc[0]).round(2)\nprint(funnel)\n"
    }
  },
  {
    day: 82,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "End-to-End Exploratory Data Analysis (EDA) Workflow",
    instructor: "Rishabh Mishra",
    duration: "25m",
    videoId: "_BA5kFO7w44",
    altVideoId: "2uvysYbKdjM",
    startSec: 2400,
    bridge: "Establishes a repeatable 5-step EDA checklist (Schema -> Missingness -> Univariate -> Bivariate -> Hypotheses).",
    takeaways: [
      "Follow a disciplined EDA protocol rather than ad-hoc chart wandering.",
      "Document anomalies, data leakage risks, and testable business hypotheses.",
      "Summarize key findings in executive bullet points backed by exact numbers."
    ],
    lab: {
      lang: "python",
      title: "Automated EDA Health Report Function",
      prompt: "Write an eda_profile(df) function returning row count, duplicate count, null count, and column count.",
      hint: "Combine len(df), df.duplicated().sum(), and df.isna().sum().sum().",
      starterCode: "import pandas as pd\n\ndef eda_profile(df: pd.DataFrame) -> dict:\n    return {\n        'rows': len(df),\n        'cols': df.shape[1],\n        'duplicates': int(df.duplicated().sum()),\n        'total_nulls': int(df.isna().sum().sum())\n    }\n\nsample = pd.DataFrame({'id': [1, 2, 2], 'val': [100.0, None, None]})\nprint(eda_profile(sample))\n"
    }
  },
  {
    day: 83,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Capstone 3A: ShopPulse Funnel & Cohort EDA Notebook",
    instructor: "Rishabh Mishra",
    duration: "25m",
    videoId: "_BA5kFO7w44",
    altVideoId: "2uvysYbKdjM",
    startSec: 3200,
    bridge: "Synthesizes Month 3 by joining, cleaning, and analyzing the complete ShopPulse funnel and revenue cohort dataset.",
    takeaways: [
      "Combine SQL extraction, Pandas cleaning, window metrics, and funnel diagnostics in one pipeline.",
      "Quantify exact conversion drop-offs between Add-to-Cart and Payment.",
      "Produce the clean analytical dataset used throughout Month 4 hypothesis testing."
    ],
    lab: {
      lang: "python",
      title: "Capstone 3A: Control vs Variant Checkout Funnel Audit",
      prompt: "Compare conversion rates between Control and Variant checkout flows across 2,000 simulated users.",
      hint: "Group by 'variant' and compute mean of 'converted' (0/1).",
      starterCode: "import numpy as np\nimport pandas as pd\n\nrng = np.random.default_rng(2026)\nn = 2000\ndf = pd.DataFrame({\n    'variant': np.repeat(['Control', 'Variant_B'], n // 2),\n    'converted': np.concatenate([rng.binomial(1, 0.082, n // 2), rng.binomial(1, 0.104, n // 2)])\n})\nsummary = df.groupby('variant')['converted'].agg(users='count', conversions='sum', conv_rate=lambda s: round(s.mean()*100, 2))\nprint(summary)\n"
    }
  },
  {
    day: 84,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Bridge 3->4: Quantifying EDA Shapes as Distributions",
    instructor: "StatQuest",
    duration: "6m",
    videoId: "oI3hZJqXJuc",
    altVideoId: "J8jNoF-K8E8",
    startSec: 0,
    bridge: "Hands off Month 3 directly to Month 4 by turning empirical EDA conversion counts and basket histograms into formal probability distributions.",
    takeaways: [
      "Stop eyeballing histograms: map discrete conversion clicks to Binomial models and continuous basket sizes to Normal/Log-Normal models.",
      "Understand why observed sample metrics fluctuate around true population parameters.",
      "Prepare directly for Day 85 PMF/PDF/CDF probability foundations."
    ],
    lab: {
      lang: "python",
      title: "Bridge 3->4: Empirical vs Theoretical Mean & Variance",
      prompt: "Simulate 5,000 Bernoulli checkout trials (p=0.10) and compare sample mean & variance against theoretical p and p*(1-p).",
      hint: "Theoretical mean = p; theoretical variance = p * (1 - p).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\np = 0.10\ntrials = rng.binomial(1, p, size=5000)\n\nprint(f'Empirical Mean: {trials.mean():.4f} | Theoretical: {p:.4f}')\nprint(f'Empirical Var : {trials.var():.4f} | Theoretical: {p*(1-p):.4f}')\n"
    }
  }
];
// DataForge // Instinct OS - Decoupled 168-Day Curriculum (Part 2 of 2: Days 85-168)
// Paste directly below Part 1 in curriculum.js. Pure ASCII-safe strings.

window.CURRICULUM.push(
  {
    day: 85,
    month: 4,
    module: "M4: Math & Stats",
    title: "Probability Foundations: PMF, PDF & CDF",
    instructor: "StatQuest",
    duration: "6m",
    videoId: "oI3hZJqXJuc",
    altVideoId: "J8jNoF-K8E8",
    startSec: 0,
    bridge: "Formalizes Day 84 EDA histograms into Probability Mass Functions (discrete clicks) and Probability Density Functions (continuous revenue).",
    takeaways: [
      "Vocabulary: PMF gives exact probabilities for discrete outcomes; PDF gives density over continuous intervals where area equals probability.",
      "The Cumulative Distribution Function CDF(x) = P(X <= x) answers 'what fraction of orders are at or below x INR?'",
      "Total probability across all possible outcomes always sums or integrates to 1.0."
    ],
    lab: {
      lang: "python",
      title: "Empirical PMF & CDF of ShopPulse Basket Sizes",
      prompt: "Compute the discrete PMF and cumulative CDF across order item counts [1, 1, 2, 1, 3, 2, 1, 4, 2, 1].",
      hint: "Use pd.Series(items).value_counts(normalize=True).sort_index() for PMF and .cumsum() for CDF.",
      starterCode: "import pandas as pd\n\nitems_per_order = [1, 1, 2, 1, 3, 2, 1, 4, 2, 1]\ns = pd.Series(items_per_order)\npmf = s.value_counts(normalize=True).sort_index()\ncdf = pmf.cumsum()\n\nprint(pd.DataFrame({'pmf': pmf, 'cdf': cdf}))\n"
    }
  },
  {
    day: 86,
    month: 4,
    module: "M4: Math & Stats",
    title: "Discrete Distributions: Bernoulli, Binomial & Poisson",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "J8jNoF-K8E8",
    altVideoId: "oI3hZJqXJuc",
    startSec: 0,
    bridge: "Models checkout conversions with Binomial(n, p) and hourly order arrivals with Poisson(lambda) to size server and inventory capacity.",
    takeaways: [
      "Bernoulli(p) models a single conversion trial; Binomial(n, p) models k conversions out of n visitors.",
      "Poisson(lambda) models rare event counts arriving per fixed time window (e.g., orders per hour).",
      "Check mean == variance as a quick sanity test for Poisson arrival assumptions."
    ],
    lab: {
      lang: "python",
      title: "Simulating Hourly Order Arrivals & Conversion Counts",
      prompt: "Simulate 1,000 hours of order arrivals (lambda=14 orders/hr) using Poisson and find the 95th-percentile peak load.",
      hint: "Use rng.poisson(lam=14, size=1000) and np.percentile(arrivals, 95).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nhourly_orders = rng.poisson(lam=14, size=1000)\n\nprint(f'Mean arrivals/hr: {hourly_orders.mean():.2f}')\nprint(f'95th-pct peak load: {np.percentile(hourly_orders, 95):.0f} orders/hr')\n"
    }
  },
  {
    day: 87,
    month: 4,
    module: "M4: Math & Stats",
    title: "Continuous Distributions: Normal, Log-Normal & Z-Scores",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "J8jNoF-K8E8",
    altVideoId: "rzFX5NWojp0",
    startSec: 0,
    bridge: "Standardizes metrics onto a common Z-score scale and applies log transforms to tame right-skewed order values.",
    takeaways: [
      "Vocabulary: a Z-score = (x - mean) / std measures how many standard deviations an observation sits from the mean.",
      "Revenue and session duration follow Log-Normal right-skewed shapes; np.log1p(x) restores symmetry.",
      "In a Normal distribution, ~68% of values fall within 1 std and ~95% within 2 std."
    ],
    lab: {
      lang: "python",
      title: "Z-Score Anomaly Detector on Order Values",
      prompt: "Compute Z-scores for ShopPulse daily revenue figures and flag days with |Z| > 2.0 as anomalies.",
      hint: "z = (rev - rev.mean()) / rev.std(ddof=1); flag np.abs(z) > 2.0.",
      starterCode: "import numpy as np\n\ndaily_rev = np.array([4800, 5100, 4950, 5200, 4700, 5050, 14900, 4900], dtype=float)\nz_scores = (daily_rev - daily_rev.mean()) / daily_rev.std(ddof=1)\n\nfor day_idx, (val, z) in enumerate(zip(daily_rev, z_scores), start=1):\n    flag = 'ANOMALY' if abs(z) > 2.0 else 'OK'\n    print(f'Day {day_idx}: INR {val:7.0f} | Z = {z:+.2f} | {flag}')\n"
    }
  },
  {
    day: 88,
    month: 4,
    module: "M4: Math & Stats",
    title: "Law of Large Numbers & Central Limit Theorem (CLT)",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "rzFX5NWojp0",
    altVideoId: "XNgt7F6FqDU",
    startSec: 0,
    bridge: "Proves why sample means become Normally distributed even when raw order revenue is heavily skewed—enabling A/B test math.",
    takeaways: [
      "The Central Limit Theorem states that the sampling distribution of the mean approaches Normal as sample size n grows.",
      "Standard Error SE = std / sqrt(n) shrinks as sample size increases, tightening measurement precision.",
      "Quadrupling sample size cuts standard error in half."
    ],
    lab: {
      lang: "python",
      title: "Monte Carlo Demonstration of the Central Limit Theorem",
      prompt: "Draw 2,000 sample means (each of size n=40) from a skewed exponential distribution and verify their mean and SE.",
      hint: "Sample matrix (2000, 40) with rng.exponential(scale=3000, size=(2000, 40)) and take .mean(axis=1).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nsamples = rng.exponential(scale=3000.0, size=(2000, 40))\nsample_means = samples.mean(axis=1)\n\nprint(f'Grand Mean of Means: INR {sample_means.mean():.2f} (True: 3000.00)')\nprint(f'Empirical SE: INR {sample_means.std():.2f} (Theory 3000/sqrt(40): {3000/np.sqrt(40):.2f})')\n"
    }
  },
  {
    day: 89,
    month: 4,
    module: "M4: Math & Stats",
    title: "Bayes Theorem & Conditional Probability",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "oI3hZJqXJuc",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Updates churn and fraud probabilities dynamically as new customer behavioral signals arrive.",
    takeaways: [
      "Bayes rule: P(A|B) = P(B|A) * P(A) / P(B) updates prior beliefs with observed likelihood.",
      "Base-rate neglect causes false alarms when rare events (like payment fraud) are scored without prior weighting.",
      "Sequential Bayesian updating powers spam filters, recommender scoring, and A/B test calculators."
    ],
    lab: {
      lang: "python",
      title: "Bayesian Payment Fraud Posterior Calculator",
      prompt: "Given 2% base fraud rate, 90% detector sensitivity, and 5% false positive rate, compute P(Fraud | Flagged).",
      hint: "p_flagged = p_f * sens + (1 - p_f) * fpr; posterior = (sens * p_f) / p_flagged.",
      starterCode: "p_fraud = 0.02\nsensitivity = 0.90\nfalse_pos_rate = 0.05\n\np_flagged = (p_fraud * sensitivity) + ((1.0 - p_fraud) * false_pos_rate)\nposterior = (sensitivity * p_fraud) / p_flagged\nprint(f'Posterior P(Fraud | Flagged): {posterior * 100:.2f}%')\n"
    }
  },
  {
    day: 90,
    month: 4,
    module: "M4: Math & Stats",
    title: "Confidence Intervals & Standard Error",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "TqOeMYtOc1w",
    altVideoId: "XNgt7F6FqDU",
    startSec: 0,
    bridge: "Replaces single-number KPI point estimates with honest 95% confidence ranges for executive reporting.",
    takeaways: [
      "Compute a 95% confidence interval for a sample mean as mean +/- 1.96 * (std / sqrt(n)).",
      "For conversion proportions, SE = sqrt(p * (1 - p) / n).",
      "Report confidence bounds alongside point estimates so stakeholders see estimation uncertainty."
    ],
    lab: {
      lang: "python",
      title: "95% Confidence Interval for Checkout Conversion Rate",
      prompt: "Compute the 95% CI for a campaign with 420 conversions out of 4,000 visitors.",
      hint: "p = 420 / 4000; se = np.sqrt(p * (1 - p) / 4000); ci = (p - 1.96*se, p + 1.96*se).",
      starterCode: "import numpy as np\n\nn = 4000\nk = 420\np = k / n\nse = np.sqrt(p * (1.0 - p) / n)\nlow, high = p - 1.96 * se, p + 1.96 * se\nprint(f'Conversion Rate: {p*100:.2f}% | 95% CI: [{low*100:.2f}%, {high*100:.2f}%]')\n"
    }
  },
  {
    day: 91,
    month: 4,
    module: "M4: Math & Stats",
    title: "Bootstrap Resampling for Non-Normal Metrics",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "XNgt7F6FqDU",
    altVideoId: "TqOeMYtOc1w",
    startSec: 0,
    bridge: "Estimates confidence intervals for medians, 90th percentiles, and skewed LTV where analytical formulas break down.",
    takeaways: [
      "Resample your observed dataset WITH replacement B=5,000 times to build an empirical sampling distribution.",
      "Extract 2.5th and 97.5th percentiles of bootstrap replicates for a non-parametric 95% CI.",
      "Bootstrap works reliably for medians, ratios, and heavy-tailed revenue distributions."
    ],
    lab: {
      lang: "python",
      title: "Bootstrap 95% CI for Median Order Value",
      prompt: "Run 3,000 bootstrap resamples on skewed ShopPulse orders to compute the 95% CI of the median.",
      hint: "Draw rng.choice(orders, size=(3000, len(orders)), replace=True) and take np.median(..., axis=1).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\norders = np.array([1499, 1799, 2298, 2499, 2899, 3298, 4999, 6498, 8999, 18500], dtype=float)\nboot_samples = rng.choice(orders, size=(3000, len(orders)), replace=True)\nboot_medians = np.median(boot_samples, axis=1)\nci_low, ci_high = np.percentile(boot_medians, [2.5, 97.5])\nprint(f'Observed Median: INR {np.median(orders):.2f} | Bootstrap 95% CI: [{ci_low:.2f}, {ci_high:.2f}]')\n"
    }
  },
  {
    day: 92,
    month: 4,
    module: "M4: Math & Stats",
    title: "Hypothesis Testing: Null Hypothesis, Alpha & Errors",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "0oc49DyA3hU",
    altVideoId: "vemZtEM63GY",
    startSec: 0,
    bridge: "Structures product launch decisions around formal H0 vs H1 hypotheses and explicit Type I / Type II error budgets.",
    takeaways: [
      "Formulate H0 (no difference between Control and Variant) and H1 (meaningful lift exists) before peeking at data.",
      "Type I error (alpha, usually 0.05) is a false positive launch; Type II error (beta, usually 0.20) is missing a real win.",
      "Statistical power (1 - beta = 0.80) measures your experiment's probability of detecting a true effect."
    ],
    lab: {
      lang: "python",
      title: "Simulating False Positive Rate (Alpha) Under H0",
      prompt: "Simulate 2,000 A/A tests where Control and Variant have identical true conversion p=0.10 and measure how often |Z| > 1.96.",
      hint: "Compare two binomial draws of n=1000, p=0.10 across 2,000 runs and check false alarm fraction.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nn = 1000\np0 = 0.10\np_a = rng.binomial(n, p0, size=2000) / n\np_b = rng.binomial(n, p0, size=2000) / n\np_pool = (p_a + p_b) / 2.0\nse = np.sqrt(p_pool * (1 - p_pool) * (2 / n))\nz = (p_b - p_a) / np.where(se == 0, 1, se)\nfalse_positives = np.mean(np.abs(z) > 1.96)\nprint(f'Empirical Type I Error Rate: {false_positives * 100:.2f}% (Target alpha: 5.00%)')\n"
    }
  },
  {
    day: 93,
    month: 4,
    module: "M4: Math & Stats",
    title: "Interpreting p-Values & Statistical vs Practical Significance",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "vemZtEM63GY",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Prevents costly engineering rollouts on tiny 0.01% lifts that look 'significant' purely due to huge sample sizes.",
    takeaways: [
      "A p-value is P(data at least this extreme | H0 is true), NOT the probability that H0 is true.",
      "Always pair p-values with absolute lift, relative lift %, and confidence intervals.",
      "Require Minimum Detectable Effect (MDE) clearance before shipping UI changes."
    ],
    lab: {
      lang: "python",
      title: "Two-Proportion Z-Test & Practical Lift Evaluator",
      prompt: "Compute Z-statistic, two-sided p-value approximation, and relative lift for Control (82/1000) vs Variant (108/1000).",
      hint: "Use math.erfc(abs(z) / math.sqrt(2)) for exact two-sided Normal p-value without external libraries.",
      starterCode: "import math\n\nn_c, k_c = 1000, 82\nn_v, k_v = 1000, 108\np_c, p_v = k_c / n_c, k_v / n_v\np_pool = (k_c + k_v) / (n_c + n_v)\nse = math.sqrt(p_pool * (1 - p_pool) * (1/n_c + 1/n_v))\nz = (p_v - p_c) / se\np_val = math.erfc(abs(z) / math.sqrt(2))\n\nprint(f'Control: {p_c*100:.2f}% | Variant: {p_v*100:.2f}% | Rel Lift: {((p_v-p_c)/p_c)*100:.1f}%')\nprint(f'Z = {z:.3f} | p-value = {p_val:.4f}')\n"
    }
  },
  {
    day: 94,
    month: 4,
    module: "M4: Math & Stats",
    title: "Comparing Continuous Means: Welch's t-Test & Mann-Whitney",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "0oc49DyA3hU",
    altVideoId: "vemZtEM63GY",
    startSec: 0,
    bridge: "Tests whether a new free-shipping threshold increases Average Order Value (AOV) without assuming equal group variances.",
    takeaways: [
      "Default to Welch's t-test (unequal variances) rather than Student's equal-variance t-test.",
      "Use non-parametric rank tests (Mann-Whitney U) or bootstrap tests when revenue contains extreme outliers.",
      "Check both mean AOV and median basket size before declaring a winner."
    ],
    lab: {
      lang: "python",
      title: "Welch's Two-Sample t-Statistic Calculator",
      prompt: "Compute Welch's t-statistic comparing Control vs Variant order values in pure NumPy.",
      hint: "se = np.sqrt(s1**2 / n1 + s2**2 / n2); t_stat = (m2 - m1) / se.",
      starterCode: "import numpy as np\n\nctrl = np.array([2499, 2799, 3100, 2298, 2950, 2600, 3400, 2850], dtype=float)\nvar_b = np.array([3298, 3899, 4100, 2999, 4500, 3650, 4200, 3950], dtype=float)\n\nse = np.sqrt(ctrl.var(ddof=1)/len(ctrl) + var_b.var(ddof=1)/len(var_b))\nt_stat = (var_b.mean() - ctrl.mean()) / se\nprint(f'Ctrl Mean: INR {ctrl.mean():.2f} | Var Mean: INR {var_b.mean():.2f} | Welch t = {t_stat:.3f}')\n"
    }
  },
  {
    day: 95,
    month: 4,
    module: "M4: Math & Stats",
    title: "Categorical Independence: Chi-Square Test",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "vemZtEM63GY",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Tests whether conversion or cancellation rates differ significantly across 3+ cities or payment methods simultaneously.",
    takeaways: [
      "Compare Observed contingency table counts against Expected independence counts via sum((O - E)**2 / E).",
      "Verify that expected cell frequencies are at least 5 before trusting Chi-Square approximations.",
      "Follow up significant global tests with pairwise segment comparisons."
    ],
    lab: {
      lang: "python",
      title: "Chi-Square Contingency Statistic Across Cities",
      prompt: "Compute expected counts and Chi-Square statistic for a 3x2 (City x Converted/Not) contingency matrix.",
      hint: "expected = np.outer(obs.sum(axis=1), obs.sum(axis=0)) / obs.sum().",
      starterCode: "import numpy as np\n\n# Rows: Mumbai, Bengaluru, Delhi | Cols: Converted, Not Converted\nobs = np.array([\n    [120, 880],\n    [145, 855],\n    [95,  905]\n], dtype=float)\n\nexpected = np.outer(obs.sum(axis=1), obs.sum(axis=0)) / obs.sum()\nchi2 = np.sum((obs - expected) ** 2 / expected)\nprint(f'Chi-Square Statistic (df=2): {chi2:.3f}')\n"
    }
  },
  {
    day: 96,
    month: 4,
    module: "M4: Math & Stats",
    title: "Multiple Testing Corrections: Bonferroni & Benjamini-Hochberg",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "vemZtEM63GY",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Stops p-hacking when slicing A/B test results across 10 cities, devices, and user tiers at once.",
    takeaways: [
      "Running 20 independent tests at alpha=0.05 produces 1 false positive on average purely by chance.",
      "Bonferroni adjusts threshold to alpha / m; Benjamini-Hochberg controls False Discovery Rate (FDR).",
      "Distinguish pre-registered primary metrics from exploratory subgroup slices."
    ],
    lab: {
      lang: "python",
      title: "Benjamini-Hochberg FDR Adjustment Filter",
      prompt: "Given 5 subgroup p-values, apply Benjamini-Hochberg step-up thresholds at FDR=0.05 to see which survive.",
      hint: "Sort p-values ascending; threshold for rank i (1..m) is (i / m) * 0.05.",
      starterCode: "import numpy as np\n\np_vals = np.array([0.004, 0.018, 0.039, 0.120, 0.450])\nm = len(p_vals)\nfor rank, p in enumerate(np.sort(p_vals), start=1):\n    bh_thresh = (rank / m) * 0.05\n    print(f'Rank {rank}: p={p:.3f} vs BH_thresh={bh_thresh:.3f} -> Significant={p <= bh_thresh}')\n"
    }
  },
  {
    day: 97,
    month: 4,
    module: "M4: Math & Stats",
    title: "A/B Experiment Design: Power & Sample Size Sizing",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "TqOeMYtOc1w",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Calculates exact required traffic per variant before launching an experiment so tests neither under-power nor drag on.",
    takeaways: [
      "Compute sample size per arm using baseline conversion p1, target p2, alpha=0.05 (Z=1.96), and power=0.80 (Z=0.84).",
      "Estimate experiment runtime in days by dividing required sample size by daily eligible traffic.",
      "Never stop an experiment early just because p < 0.05 on Day 2 (peeking bias)."
    ],
    lab: {
      lang: "python",
      title: "A/B Test Sample Size & Runtime Calculator",
      prompt: "Compute required users per variant to detect a lift from 8.0% to 9.6% conversion (20% relative lift) at 80% power.",
      hint: "n_per_arm = ((1.96 + 0.84)**2 * (p1*(1-p1) + p2*(1-p2))) / (p2 - p1)**2.",
      starterCode: "import math\n\np1 = 0.080\np2 = 0.096\nz_alpha = 1.96\nz_beta = 0.84\n\nn_per_arm = math.ceil(((z_alpha + z_beta) ** 2 * (p1 * (1 - p1) + p2 * (1 - p2))) / ((p2 - p1) ** 2))\ndaily_traffic = 1200\nprint(f'Required users per variant: {n_per_arm:,} | Est. runtime: {math.ceil((2 * n_per_arm) / daily_traffic)} days')\n"
    }
  },
  {
    day: 98,
    month: 4,
    module: "M4: Math & Stats",
    title: "A/B Guardrails, Novelty Effects & SRM Checks",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "0oc49DyA3hU",
    altVideoId: "TqOeMYtOc1w",
    startSec: 0,
    bridge: "Audits experiment telemetry for Sample Ratio Mismatch (SRM) bugs before trusting any lift number.",
    takeaways: [
      "Run a Sample Ratio Mismatch (SRM) Chi-Square check on assignment counts (50/50 split) first.",
      "Track guardrail metrics (page latency, cancellation rate, refund rate) alongside primary conversion.",
      "Watch for short-lived novelty spikes that decay after week 1."
    ],
    lab: {
      lang: "python",
      title: "Automated Sample Ratio Mismatch (SRM) Gatekeeper",
      prompt: "Check if observed Control (5,210) vs Variant (4,790) traffic split violates an expected 50/50 split (chi2 > 3.84).",
      hint: "expected = total / 2; chi2 = ((c - expected)**2 + (v - expected)**2) / expected.",
      starterCode: "ctrl_n, var_n = 5210, 4790\nexpected = (ctrl_n + var_n) / 2.0\nchi2 = ((ctrl_n - expected) ** 2 + (var_n - expected) ** 2) / expected\nprint(f'SRM Chi2: {chi2:.2f} -> Telemetry Valid: {chi2 < 3.84}')\n"
    }
  },
  {
    day: 99,
    month: 4,
    module: "M4: Math & Stats",
    title: "Variance Reduction: CUPED & Pre-Experiment Covariates",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "9yl6-HEY7_s",
    altVideoId: "TqOeMYtOc1w",
    startSec: 0,
    bridge: "Shrinks A/B test variance by 25-40% using pre-experiment user spend as a covariate—cutting experiment runtime in half.",
    takeaways: [
      "CUPED adjusts post-experiment metric Y using pre-experiment covariate X: Y_cuped = Y - theta * (X - mean(X)).",
      "Optimal theta = Cov(Y, X) / Var(X), which removes pre-existing user heterogeneity.",
      "Lower variance tightens confidence intervals without changing the unbiased treatment lift."
    ],
    lab: {
      lang: "python",
      title: "CUPED Variance Reduction Simulator",
      prompt: "Compute theta = Cov(Y, X) / Var(X) and measure the percentage variance reduction achieved by Y_cuped.",
      hint: "theta = np.cov(y, x)[0, 1] / np.var(x, ddof=1); y_cuped = y - theta * (x - x.mean()).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\npre_spend = rng.normal(3000, 800, size=500)\npost_spend = 0.75 * pre_spend + rng.normal(800, 400, size=500)\n\ntheta = np.cov(post_spend, pre_spend)[0, 1] / np.var(pre_spend, ddof=1)\ny_cuped = post_spend - theta * (pre_spend - pre_spend.mean())\n\nvar_reduction = 100 * (1 - np.var(y_cuped, ddof=1) / np.var(post_spend, ddof=1))\nprint(f'Theta: {theta:.3f} | Variance Reduced by: {var_reduction:.1f}%')\n"
    }
  },
  {
    day: 100,
    month: 4,
    module: "M4: Math & Stats",
    title: "Correlation vs Causation & Confounding Bias",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "9yl6-HEY7_s",
    altVideoId: "oI3hZJqXJuc",
    startSec: 0,
    bridge: "Protects executive strategy from spurious correlations and Simpson's Paradox in observational data.",
    takeaways: [
      "Contrast Pearson linear correlation r with Spearman rank correlation rho on skewed data.",
      "Identify confounders (like user loyalty tier) that drive both feature adoption and spend.",
      "Always stratify observational metrics by key user segments before making causal claims."
    ],
    lab: {
      lang: "python",
      title: "Pearson vs Spearman Correlation on Skewed Data",
      prompt: "Compare Pearson and Spearman rank correlation when a single whale order skews a small sample.",
      hint: "Compute np.corrcoef(x, y)[0, 1] and pd.Series(x).corr(pd.Series(y), method='spearman').",
      starterCode: "import numpy as np\nimport pandas as pd\n\nsessions = pd.Series([2, 4, 6, 8, 10, 12])\nspend = pd.Series([1200, 2100, 3200, 4100, 5200, 48000])\n\nprint(f'Pearson r  : {sessions.corr(spend, method=\"pearson\"):.3f}')\nprint(f'Spearman r : {sessions.corr(spend, method=\"spearman\"):.3f}')\n"
    }
  },
  {
    day: 101,
    month: 4,
    module: "M4: Math & Stats",
    title: "Linear Algebra for ML: Vectors, Dot Products & Norms",
    instructor: "3Blue1Brown",
    duration: "14m",
    videoId: "aircAruvnKk",
    altVideoId: "IHZwWFHWa-w",
    startSec: 0,
    bridge: "Builds geometric intuition for feature vectors, L2 Euclidean norms, and dot products used in ML and LLM embeddings.",
    takeaways: [
      "Every customer or product row in ML is a point/vector in n-dimensional feature space.",
      "Dot product a . b measures alignment; L2 norm ||a|| measures vector magnitude.",
      "Cosine similarity normalizes dot products by vector norms to measure pure directional similarity."
    ],
    lab: {
      lang: "python",
      title: "Customer Feature Vector Norms & Cosine Similarity",
      prompt: "Compute Euclidean distance and cosine similarity between two 4-feature ShopPulse customer vectors.",
      hint: "cos_sim = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)).",
      starterCode: "import numpy as np\n\ncust_a = np.array([5.0, 24000.0, 180.0, 4.8])\ncust_b = np.array([4.0, 21000.0, 165.0, 4.7])\n\neuclid = np.linalg.norm(cust_a - cust_b)\ncos_sim = np.dot(cust_a, cust_b) / (np.linalg.norm(cust_a) * np.linalg.norm(cust_b))\nprint(f'Euclidean Dist: {euclid:.2f} | Cosine Similarity: {cos_sim:.6f}')\n"
    }
  },
  {
    day: 102,
    month: 4,
    module: "M4: Math & Stats",
    title: "Matrices, Linear Transformations & Matrix Multiplication",
    instructor: "3Blue1Brown",
    duration: "15m",
    videoId: "aircAruvnKk",
    altVideoId: "IHZwWFHWa-w",
    startSec: 840,
    bridge: "Views dataset transformations, linear models, and neural network layers as matrix-vector projections.",
    takeaways: [
      "Verify matrix dimension compatibility: (m x n) @ (n x k) -> (m x k).",
      "Understand transpose X.T and how X.T @ X forms feature covariance/Gram matrices.",
      "Compute batch predictions y_hat = X @ w + b in one vectorized matrix operation."
    ],
    lab: {
      lang: "python",
      title: "Batch Linear Scoring via Matrix Multiplication",
      prompt: "Score 4 customers across 3 normalized features using weight vector w and intercept b via X @ w + b.",
      hint: "preds = X @ w + b.",
      starterCode: "import numpy as np\n\nX = np.array([\n    [0.8, 0.9, 0.2],\n    [0.2, 0.3, 0.8],\n    [0.9, 0.8, 0.1],\n    [0.4, 0.4, 0.6]\n])\nw = np.array([15000.0, 12000.0, -5000.0])\nb = 2000.0\n\npredicted_ltv = X @ w + b\nprint('Predicted Customer LTV (INR):', np.round(predicted_ltv, 2))\n"
    }
  },
  {
    day: 103,
    month: 4,
    module: "M4: Math & Stats",
    title: "Eigenvalues, Eigenvectors & Covariance Intuition",
    instructor: "StatQuest",
    duration: "21m",
    videoId: "FgakZw6K1QQ",
    altVideoId: "9yl6-HEY7_s",
    startSec: 0,
    bridge: "Reveals how Principal Component Analysis (PCA) finds directions of maximum variance to compress correlated features.",
    takeaways: [
      "Eigenvectors identify principal axes of variance; eigenvalues measure variance magnitude along each axis.",
      "Always standardize features (mean=0, std=1) before computing covariance for PCA.",
      "Explained variance ratio tells you how much signal top k components retain."
    ],
    lab: {
      lang: "python",
      title: "PCA Explained Variance via NumPy Eigendecomposition",
      prompt: "Standardize a 2-feature correlated matrix, compute its covariance eigenvalues, and print explained variance %.",
      hint: "vals, vecs = np.linalg.eigh(np.cov(X_std.T)); ratio = vals[::-1] / vals.sum().",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nx1 = rng.normal(0, 1, 200)\nx2 = 0.9 * x1 + rng.normal(0, 0.3, 200)\nX = np.column_stack([x1, x2])\nX_std = (X - X.mean(axis=0)) / X.std(axis=0)\n\nvals, _ = np.linalg.eigh(np.cov(X_std.T))\nexplained = (vals[::-1] / vals.sum()) * 100\nprint(f'PC1 Variance: {explained[0]:.1f}% | PC2 Variance: {explained[1]:.1f}%')\n"
    }
  },
  {
    day: 104,
    month: 4,
    module: "M4: Math & Stats",
    title: "Derivatives, Gradients & Chain Rule Intuition",
    instructor: "3Blue1Brown",
    duration: "21m",
    videoId: "IHZwWFHWa-w",
    altVideoId: "sDv4f4s2SB8",
    startSec: 0,
    bridge: "Explains how gradient vectors point uphill and why stepping in the negative gradient direction minimizes ML loss.",
    takeaways: [
      "A partial derivative measures how loss changes when nudging one weight while holding others fixed.",
      "The gradient vector nabla L points in the direction of steepest ascent; -nabla L points steepest downhill.",
      "The chain rule propagates error gradients backward through nested functions."
    ],
    lab: {
      lang: "python",
      title: "Numerical vs Analytical Gradient Verification",
      prompt: "Verify the analytical derivative 2*(w - 4.5) of f(w) = (w - 4.5)**2 against central finite differences.",
      hint: "num_grad = (f(w + eps) - f(w - eps)) / (2 * eps).",
      starterCode: "def f(w):\n    return (w - 4.5) ** 2\n\nw = 2.0\neps = 1e-6\nnum_grad = (f(w + eps) - f(w - eps)) / (2 * eps)\nana_grad = 2 * (w - 4.5)\nprint(f'Numerical: {num_grad:.6f} | Analytical: {ana_grad:.6f}')\n"
    }
  },
  {
    day: 105,
    month: 4,
    module: "M4: Math & Stats",
    title: "Gradient Descent Optimization From Scratch",
    instructor: "StatQuest",
    duration: "23m",
    videoId: "sDv4f4s2SB8",
    altVideoId: "IHZwWFHWa-w",
    startSec: 0,
    bridge: "Implements iterative parameter updates w = w - lr * grad in pure NumPy—demystifying how every ML model trains.",
    takeaways: [
      "Learning rate (lr) controls step size: too large diverges, too small crawls slowly.",
      "Contrast Batch GD, Stochastic GD (SGD), and Mini-Batch GD.",
      "Monitor loss decay across epochs to confirm smooth convergence."
    ],
    lab: {
      lang: "python",
      title: "1D Linear Fit via Pure NumPy Gradient Descent",
      prompt: "Fit slope w and intercept b on ShopPulse order data using 300 steps of Mean Squared Error gradient descent.",
      hint: "err = (w * x + b) - y; dw = (2/n) * np.sum(err * x); db = (2/n) * np.sum(err).",
      starterCode: "import numpy as np\n\nx = np.array([1.0, 2.0, 3.0, 4.0, 5.0])\ny = np.array([2500.0, 4800.0, 7100.0, 9400.0, 11700.0])\nw, b, lr = 0.0, 0.0, 0.05\n\nfor _ in range(300):\n    err = (w * x + b) - y\n    w -= lr * (2 / len(x)) * np.sum(err * x)\n    b -= lr * (2 / len(x)) * np.sum(err)\n\nprint(f'Learned w = {w:.2f} (True 2300) | b = {b:.2f} (True 200)')\n"
    }
  },
  {
    day: 106,
    month: 4,
    module: "M4: Math & Stats",
    title: "Maximum Likelihood Estimation (MLE) & Cross-Entropy Loss",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "oI3hZJqXJuc",
    altVideoId: "yIYKR4sgzI8",
    startSec: 0,
    bridge: "Connects probability theory directly to ML loss functions: MSE comes from Gaussian MLE, and Log-Loss comes from Bernoulli MLE.",
    takeaways: [
      "MLE selects model parameters that maximize the probability of observing the training labels.",
      "Binary Cross-Entropy (Log-Loss) heavily penalizes confident wrong predictions.",
      "Clip predicted probabilities to [1e-15, 1 - 1e-15] to prevent log(0) errors."
    ],
    lab: {
      lang: "python",
      title: "Binary Cross-Entropy (Log-Loss) Evaluator",
      prompt: "Compute Binary Cross-Entropy loss comparing well-calibrated vs overconfident wrong predictions.",
      hint: "bce = -np.mean(y * np.log(p) + (1 - y) * np.log(1 - p)).",
      starterCode: "import numpy as np\n\ndef log_loss(y_true, y_prob):\n    p = np.clip(y_prob, 1e-15, 1 - 1e-15)\n    return -np.mean(y_true * np.log(p) + (1 - y_true) * np.log(1 - p))\n\ny = np.array([1, 0, 1, 0])\ngood_probs = np.array([0.85, 0.15, 0.80, 0.20])\nbad_probs = np.array([0.85, 0.15, 0.05, 0.20])\nprint(f'Calibrated Log-Loss: {log_loss(y, good_probs):.4f} | Overconfident Error Log-Loss: {log_loss(y, bad_probs):.4f}')\n"
    }
  },
  {
    day: 107,
    month: 4,
    module: "M4: Math & Stats",
    title: "Information Theory: Entropy, KL Divergence & Gini",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "_L39rN6gz7Y",
    altVideoId: "oI3hZJqXJuc",
    startSec: 0,
    bridge: "Explains how Decision Trees score split purity (Entropy/Gini) and how drift monitors detect distribution shift (KL/PSI).",
    takeaways: [
      "Shannon Entropy -sum(p * log2(p)) peaks at uniform uncertainty and hits 0 for pure classes.",
      "Gini impurity 1 - sum(p**2) provides a fast log-free split criterion for CART trees.",
      "KL Divergence and Population Stability Index (PSI) measure drift between training and live feature distributions."
    ],
    lab: {
      lang: "python",
      title: "Node Entropy & Gini Impurity Calculator",
      prompt: "Compare Shannon Entropy and Gini Impurity across a mixed node [0.5, 0.5] vs a pure node [0.95, 0.05].",
      hint: "entropy = -np.sum(p * np.log2(p)); gini = 1 - np.sum(p ** 2).",
      starterCode: "import numpy as np\n\ndef impurity(probs):\n    p = np.array(probs, dtype=float)\n    ent = -np.sum(p * np.log2(p))\n    gini = 1.0 - np.sum(p ** 2)\n    return round(float(ent), 4), round(float(gini), 4)\n\nprint('50/50 Split (Entropy, Gini):', impurity([0.5, 0.5]))\nprint('95/05 Split (Entropy, Gini):', impurity([0.95, 0.05]))\n"
    }
  },
  {
    day: 108,
    month: 4,
    module: "M4: Math & Stats",
    title: "Bias-Variance Tradeoff & Overfitting Diagnostics",
    instructor: "StatQuest",
    duration: "7m",
    videoId: "fSytzGwwBVw",
    altVideoId: "7ArmBVF2dCs",
    startSec: 0,
    bridge: "Establishes the fundamental ML diagnostic framework: comparing training error vs validation error across model complexity.",
    takeaways: [
      "High bias (underfitting) yields poor accuracy on both training and validation splits.",
      "High variance (overfitting) memorizes training noise while failing on unseen validation data.",
      "Regularization, simpler models, and more training data tame high variance."
    ],
    lab: {
      lang: "python",
      title: "Polynomial Degree Overfitting Curve Demo",
      prompt: "Fit polynomial degrees 1, 3, and 9 on noisy revenue data using np.polyfit and compare train vs test MSE.",
      hint: "coeffs = np.polyfit(x_train, y_train, deg); preds = np.polyval(coeffs, x_test).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(7)\nx_tr = np.linspace(0, 5, 12)\ny_tr = 2.5 * x_tr + 1.0 + rng.normal(0, 1.2, size=12)\nx_te = np.linspace(0.2, 4.8, 20)\ny_te = 2.5 * x_te + 1.0 + rng.normal(0, 1.2, size=20)\n\nfor deg in [1, 3, 9]:\n    c = np.polyfit(x_tr, y_tr, deg)\n    tr_mse = np.mean((np.polyval(c, x_tr) - y_tr) ** 2)\n    te_mse = np.mean((np.polyval(c, x_te) - y_te) ** 2)\n    print(f'Degree {deg}: Train MSE={tr_mse:.2f} | Test MSE={te_mse:.2f}')\n"
    }
  },
  {
    day: 109,
    month: 4,
    module: "M4: Math & Stats",
    title: "Regression Evaluation Metrics: MAE, RMSE, R2 & MAPE",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "7ArmBVF2dCs",
    altVideoId: "fSytzGwwBVw",
    startSec: 0,
    bridge: "Selects business-aligned error metrics for predicting customer LTV and daily demand in Month 5.",
    takeaways: [
      "MAE measures average error in original INR units and resists extreme outliers.",
      "RMSE penalizes large errors quadratically; R2 measures variance explained relative to predicting the mean.",
      "Avoid MAPE when actual target values can equal or approach zero."
    ],
    lab: {
      lang: "python",
      title: "Regression Metrics Suite (MAE, RMSE, R2)",
      prompt: "Implement MAE, RMSE, and R2 in pure NumPy to evaluate predicted vs actual customer LTV.",
      hint: "r2 = 1 - np.sum((y - y_hat)**2) / np.sum((y - y.mean())**2).",
      starterCode: "import numpy as np\n\ny_true = np.array([6500, 9000, 2300, 11500, 4800], dtype=float)\ny_pred = np.array([6200, 8600, 2700, 10800, 5100], dtype=float)\n\nmae = np.mean(np.abs(y_true - y_pred))\nrmse = np.sqrt(np.mean((y_true - y_pred) ** 2))\nr2 = 1.0 - np.sum((y_true - y_pred) ** 2) / np.sum((y_true - y_true.mean()) ** 2)\nprint(f'MAE: INR {mae:.2f} | RMSE: INR {rmse:.2f} | R2: {r2:.4f}')\n"
    }
  },
  {
    day: 110,
    month: 4,
    module: "M4: Math & Stats",
    title: "Classification Metrics: Confusion Matrix, Precision, Recall & F1",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "Kdsp6soqA7o",
    altVideoId: "4jRBRDbJemM",
    startSec: 0,
    bridge: "Shows why raw accuracy fails on imbalanced churn/fraud problems and how Precision vs Recall trade off business costs.",
    takeaways: [
      "Precision = TP / (TP + FP) answers 'of flagged churners, how many actually churned?'",
      "Recall = TP / (TP + FN) answers 'of all true churners, how many did we catch?'",
      "F1 Score is the harmonic mean of Precision and Recall."
    ],
    lab: {
      lang: "python",
      title: "Churn Classifier Confusion Matrix & F1 Calculator",
      prompt: "Compute TP, FP, FN, Precision, Recall, and F1 from binary churn labels and predictions.",
      hint: "tp = np.sum((y == 1) & (pred == 1)); f1 = 2 * prec * rec / (prec + rec).",
      starterCode: "import numpy as np\n\ny_true = np.array([1, 0, 0, 1, 0, 0, 1, 0, 0, 1])\ny_pred = np.array([1, 0, 1, 1, 0, 0, 0, 0, 0, 1])\n\ntp = np.sum((y_true == 1) & (y_pred == 1))\nfp = np.sum((y_true == 0) & (y_pred == 1))\nfn = np.sum((y_true == 1) & (y_pred == 0))\nprec = tp / (tp + fp)\nrec = tp / (tp + fn)\nf1 = 2 * prec * rec / (prec + rec)\nprint(f'Precision: {prec:.3f} | Recall: {rec:.3f} | F1: {f1:.3f}')\n"
    }
  },
  {
    day: 111,
    month: 4,
    module: "M4: Math & Stats",
    title: "Capstone 4A: ShopPulse Checkout A/B Experiment Analyzer",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "vemZtEM63GY",
    altVideoId: "TqOeMYtOc1w",
    startSec: 0,
    bridge: "Combines SRM validation, conversion lift Z-tests, 95% confidence intervals, and ship/hold decision rules into one reusable analyzer.",
    takeaways: [
      "Gate every experiment decision on passing SRM telemetry checks first.",
      "Report conversion rates, relative lift, 95% CI, and p-value in one automated executive verdict.",
      "Archive experiment results cleanly to inform ML feature selection in Month 5."
    ],
    lab: {
      lang: "python",
      title: "Capstone 4A: End-to-End A/B Decision Engine",
      prompt: "Run SRM check, two-proportion Z-test, 95% lift CI, and output SHIP / HOLD recommendation.",
      hint: "Verify SRM chi2 < 3.84 and p_val < 0.05 before recommending SHIP.",
      starterCode: "import math\n\ndef evaluate_ab(n_c, k_c, n_v, k_v):\n    exp_n = (n_c + n_v) / 2.0\n    srm_chi2 = ((n_c - exp_n)**2 + (n_v - exp_n)**2) / exp_n\n    p_c, p_v = k_c / n_c, k_v / n_v\n    p_pool = (k_c + k_v) / (n_c + n_v)\n    se = math.sqrt(p_pool * (1 - p_pool) * (1/n_c + 1/n_v))\n    z = (p_v - p_c) / se\n    p_val = math.erfc(abs(z) / math.sqrt(2))\n    decision = 'SHIP' if (srm_chi2 < 3.84 and p_val < 0.05 and p_v > p_c) else 'HOLD'\n    return {'srm_ok': srm_chi2 < 3.84, 'lift_pct': round(((p_v-p_c)/p_c)*100, 2), 'p_val': round(p_val, 4), 'decision': decision}\n\nprint(evaluate_ab(5012, 411, 4988, 514))\n"
    }
  },
  {
    day: 112,
    month: 4,
    module: "M4: Math & Stats",
    title: "Bridge 4->5: Train/Validation Split & Data Leakage Prevention",
    instructor: "StatQuest",
    duration: "7m",
    videoId: "fSytzGwwBVw",
    altVideoId: "7ArmBVF2dCs",
    startSec: 0,
    bridge: "Hands off Month 4 directly to Month 5 by enforcing strict train/test isolation so scalers and encoders never peek at test rows.",
    takeaways: [
      "Fit scalers, imputers, and encoders strictly on training data, then .transform() validation and test splits.",
      "Use time-ordered splits for temporal forecasting and stratified splits for imbalanced classification.",
      "Eliminate target leakage columns (like post-churn refund flags) before model training."
    ],
    lab: {
      lang: "python",
      title: "Bridge 4->5: Leakage-Free StandardScaler Split",
      prompt: "Split customer features into 80% train / 20% test, fit mean/std ONLY on train, and transform both splits.",
      hint: "Compute mu = X_train.mean(axis=0) and sigma = X_train.std(axis=0); apply to X_test.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nX = rng.normal(loc=[5, 12000], scale=[2, 4000], size=(100, 2))\nidx = rng.permutation(len(X))\nX_train, X_test = X[idx[:80]], X[idx[80:]]\n\nmu = X_train.mean(axis=0)\nsigma = X_train.std(axis=0)\nX_train_scaled = (X_train - mu) / sigma\nX_test_scaled = (X_test - mu) / sigma\nprint('Train scaled mean:', np.round(X_train_scaled.mean(axis=0), 4))\nprint('Test scaled mean :', np.round(X_test_scaled.mean(axis=0), 4))\n"
    }
  },
  {
    day: 113,
    month: 5,
    module: "M5: Machine Learning",
    title: "ML Workflow & Ordinary Least Squares (OLS) Regression",
    instructor: "StatQuest",
    duration: "27m",
    videoId: "7ArmBVF2dCs",
    altVideoId: "Q81RR3yKn30",
    startSec: 0,
    bridge: "Launches Month 5 predictive modeling by fitting closed-form OLS linear regression to forecast ShopPulse customer LTV.",
    takeaways: [
      "Solve linear regression analytically via normal equations or QR decomposition (np.linalg.lstsq).",
      "Interpret regression coefficients as marginal INR impact holding other features constant.",
      "Always benchmark ML models against a simple baseline predictor first."
    ],
    lab: {
      lang: "python",
      title: "Closed-Form Multi-Feature LTV Linear Regression",
      prompt: "Fit weights on [orders_count, tenure_months, avg_basket_inr] using np.linalg.lstsq to predict customer LTV.",
      hint: "Add an intercept column of ones via np.column_stack([np.ones(len(X)), X]) and call np.linalg.lstsq(X_b, y, rcond=None)[0].",
      starterCode: "import numpy as np\n\nX = np.array([\n    [2, 3, 3000],\n    [5, 10, 4200],\n    [1, 1, 2200],\n    [6, 12, 4800],\n    [3, 5, 3500]\n], dtype=float)\ny = np.array([6400, 22500, 2300, 30500, 11200], dtype=float)\n\nX_b = np.column_stack([np.ones(len(X)), X])\nw, _, _, _ = np.linalg.lstsq(X_b, y, rcond=None)\npreds = X_b @ w\nprint('Weights (intercept, orders, tenure, basket):', np.round(w, 2))\nprint('RMSE:', round(float(np.sqrt(np.mean((y - preds) ** 2))), 2))\n"
    }
  },
  {
    day: 114,
    month: 5,
    module: "M5: Machine Learning",
    title: "Regularization: Ridge (L2), Lasso (L1) & ElasticNet",
    instructor: "StatQuest",
    duration: "20m",
    videoId: "Q81RR3yKn30",
    altVideoId: "NGf0voTMlcs",
    startSec: 0,
    bridge: "Prevents correlated features from exploding regression weights by adding L2 shrinkage and L1 feature-selection penalties.",
    takeaways: [
      "Ridge (L2) adds alpha * sum(w**2) to shrink collinear weights smoothly without zeroing them out.",
      "Lasso (L1) adds alpha * sum(|w|) to drive weak feature weights to exact zero.",
      "Standardize input features before applying L1 or L2 regularization penalties."
    ],
    lab: {
      lang: "python",
      title: "Closed-Form Ridge (L2) Regression Solver",
      prompt: "Solve Ridge regression w = inv(X.T @ X + alpha * I) @ X.T @ y on standardized features and inspect weight shrinkage.",
      hint: "Use np.linalg.solve(X.T @ X + alpha * np.eye(X.shape[1]), X.T @ y).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nX = rng.normal(0, 1, (50, 3))\nX[:, 1] = X[:, 0] + rng.normal(0, 0.05, 50)\ny = 4.0 * X[:, 0] - 2.0 * X[:, 2] + rng.normal(0, 0.5, 50)\n\nfor alpha in [0.0, 1.0, 25.0]:\n    w = np.linalg.solve(X.T @ X + alpha * np.eye(3), X.T @ y)\n    print(f'Alpha {alpha:4.1f} -> Weights: {np.round(w, 3)}')\n"
    }
  },
  {
    day: 115,
    month: 5,
    module: "M5: Machine Learning",
    title: "Logistic Regression & Calibrated Probabilities",
    instructor: "StatQuest",
    duration: "18m",
    videoId: "yIYKR4sgzI8",
    altVideoId: "4jRBRDbJemM",
    startSec: 0,
    bridge: "Models binary churn probabilities P(churn=1 | X) by passing linear log-odds through the sigmoid function.",
    takeaways: [
      "Sigmoid(z) = 1 / (1 + exp(-z)) maps real-valued log-odds cleanly into (0, 1) probabilities.",
      "Positive feature weights increase log-odds of the positive class; negative weights reduce them.",
      "Train weights by minimizing Binary Cross-Entropy via gradient descent."
    ],
    lab: {
      lang: "python",
      title: "Logistic Regression Training Loop from Scratch",
      prompt: "Train a binary churn classifier using sigmoid + gradient descent on [days_since_last_order, support_tickets].",
      hint: "probs = 1 / (1 + np.exp(-(X_b @ w))); grad = (X_b.T @ (probs - y)) / len(y).",
      starterCode: "import numpy as np\n\nX = np.array([[5, 0], [12, 0], [45, 2], [60, 3], [8, 0], [55, 2]], dtype=float)\nX_std = (X - X.mean(axis=0)) / X.std(axis=0)\nX_b = np.column_stack([np.ones(len(X)), X_std])\ny = np.array([0, 0, 1, 1, 0, 1], dtype=float)\n\nw = np.zeros(3)\nfor _ in range(400):\n    probs = 1.0 / (1.0 + np.exp(-(X_b @ w)))\n    w -= 0.1 * (X_b.T @ (probs - y)) / len(y)\n\nprint('Predicted Churn Probs:', np.round(1.0 / (1.0 + np.exp(-(X_b @ w))), 3))\n"
    }
  },
  {
    day: 116,
    month: 5,
    module: "M5: Machine Learning",
    title: "ROC-AUC, PR-AUC & Business Decision Threshold Tuning",
    instructor: "StatQuest",
    duration: "16m",
    videoId: "4jRBRDbJemM",
    altVideoId: "Kdsp6soqA7o",
    startSec: 0,
    bridge: "Replaces naive 0.50 probability cutoffs with cost-optimized decision thresholds tailored to retention campaign ROI.",
    takeaways: [
      "ROC-AUC measures ranking discrimination across all thresholds; PR-AUC focuses on positive-class precision under severe imbalance.",
      "Optimize decision thresholds against business payoff matrices (retention coupon cost vs saved LTV).",
      "Never assume 0.50 is the optimal classification cutoff."
    ],
    lab: {
      lang: "python",
      title: "Profit-Maximizing Churn Threshold Optimizer",
      prompt: "Sweep thresholds from 0.20 to 0.80 to maximize net campaign profit (INR 1,500 saved per TP minus INR 200 coupon per flag).",
      hint: "net_profit = tp * 1500 - (tp + fp) * 200.",
      starterCode: "import numpy as np\n\ny_true = np.array([1, 0, 1, 0, 0, 1, 0, 0, 1, 0])\nprobs = np.array([0.82, 0.45, 0.65, 0.15, 0.25, 0.52, 0.10, 0.35, 0.74, 0.18])\n\nfor t in [0.30, 0.50, 0.70]:\n    preds = (probs >= t).astype(int)\n    tp = np.sum((y_true == 1) & (preds == 1))\n    fp = np.sum((y_true == 0) & (preds == 1))\n    profit = tp * 1500 - (tp + fp) * 200\n    print(f'Threshold {t:.2f} -> TP={tp}, FP={fp} | Net Profit: INR {profit}')\n"
    }
  },
  {
    day: 117,
    month: 5,
    module: "M5: Machine Learning",
    title: "Decision Trees: Splits, Information Gain & Pruning",
    instructor: "StatQuest",
    duration: "18m",
    videoId: "_L39rN6gz7Y",
    altVideoId: "J4Wdy0Wc_xQ",
    startSec: 0,
    bridge: "Captures non-linear feature interactions automatically via greedy recursive partitioning.",
    takeaways: [
      "Trees choose feature thresholds that maximize impurity reduction (Information Gain / Gini decrease).",
      "Unconstrained trees memorize training rows to 100% purity and overfit badly.",
      "Control tree complexity via max_depth, min_samples_leaf, and cost-complexity pruning."
    ],
    lab: {
      lang: "python",
      title: "Greedy Best-Threshold Split Finder",
      prompt: "Scan candidate split thresholds on days_inactive to find the split minimizing weighted Gini impurity.",
      hint: "Compute weighted Gini = (n_left/n)*gini_left + (n_right/n)*gini_right for each split.",
      starterCode: "import numpy as np\n\nx = np.array([5, 10, 14, 30, 45, 60])\ny = np.array([0, 0, 0, 1, 1, 1])\n\ndef gini(labels):\n    if len(labels) == 0:\n        return 0.0\n    p = np.mean(labels)\n    return 1.0 - (p**2 + (1 - p)**2)\n\nfor thresh in [12, 22, 38]:\n    left, right = y[x <= thresh], y[x > thresh]\n    w_gini = (len(left)/len(y))*gini(left) + (len(right)/len(y))*gini(right)\n    print(f'Split <= {thresh:2d} -> Weighted Gini: {w_gini:.4f}')\n"
    }
  },
  {
    day: 118,
    month: 5,
    module: "M5: Machine Learning",
    title: "Random Forests, Bagging & Out-of-Bag Error",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "J4Wdy0Wc_xQ",
    altVideoId: "_L39rN6gz7Y",
    startSec: 0,
    bridge: "Reduces high decision-tree variance by averaging hundreds of bootstrap-sampled, feature-subsampled trees.",
    takeaways: [
      "Bagging trains trees on bootstrap samples; feature subsampling (max_features='sqrt') decorrelates trees.",
      "Out-of-Bag (OOB) rows (~36.8% left out of each bootstrap draw) provide free built-in validation.",
      "Random Forests require minimal feature scaling and resist outliers gracefully."
    ],
    lab: {
      lang: "python",
      title: "Bootstrap Ensemble Variance Reduction Demo",
      prompt: "Average 50 noisy tree predictors and verify that ensemble MSE is substantially lower than single-model MSE.",
      hint: "Generate (50, n) noisy predictions around true y and compare single-row MSE vs .mean(axis=0) MSE.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\ny_true = np.array([0.1, 0.2, 0.8, 0.9, 0.3, 0.7])\ntree_preds = np.clip(y_true + rng.normal(0, 0.22, size=(50, len(y_true))), 0, 1)\n\nsingle_mse = np.mean((tree_preds[0] - y_true) ** 2)\nforest_mse = np.mean((tree_preds.mean(axis=0) - y_true) ** 2)\nprint(f'Single Tree MSE: {single_mse:.4f} | 50-Tree Ensemble MSE: {forest_mse:.4f}')\n"
    }
  },
  {
    day: 119,
    month: 5,
    module: "M5: Machine Learning",
    title: "Gradient Boosting Machines (GBM) Intuition",
    instructor: "StatQuest",
    duration: "21m",
    videoId: "3CC4N4z3GJc",
    altVideoId: "OtD8wVaFm6E",
    startSec: 0,
    bridge: "Builds additive weak learners sequentially—each new shallow tree predicts and corrects the residual errors of prior trees.",
    takeaways: [
      "Unlike independent Random Forest trees, Gradient Boosting fits trees sequentially on pseudo-residuals.",
      "Learning rate (shrinkage) scales each tree's contribution so more trees generalize better.",
      "Shallow trees (max_depth=3..6) capture clean interactions without memorizing noise."
    ],
    lab: {
      lang: "python",
      title: "Sequential Residual Boosting Step-by-Step",
      prompt: "Simulate 4 boosting rounds starting from mean prediction, updating predictions by lr * residual_fit.",
      hint: "Start pred = np.full_like(y, y.mean()); at each round residual = y - pred; pred += lr * residual.",
      starterCode: "import numpy as np\n\ny = np.array([2500.0, 4800.0, 8900.0, 11400.0])\npred = np.full_like(y, y.mean())\nlr = 0.4\n\nfor step in range(1, 5):\n    residual = y - pred\n    pred = pred + lr * residual\n    rmse = np.sqrt(np.mean((y - pred) ** 2))\n    print(f'Round {step}: RMSE = INR {rmse:.2f}')\n"
    }
  },
  {
    day: 120,
    month: 5,
    module: "M5: Machine Learning",
    title: "XGBoost & LightGBM Architecture & Regularization",
    instructor: "StatQuest",
    duration: "24m",
    videoId: "OtD8wVaFm6E",
    altVideoId: "3CC4N4z3GJc",
    startSec: 0,
    bridge: "Explains why XGBoost and LightGBM dominate tabular business datasets via second-order gradients, histogram binning, and native null routing.",
    takeaways: [
      "XGBoost uses second-order Taylor approximations (gradients + hessians) and L1/L2 leaf weight penalties.",
      "Histogram-based binning groups continuous features into 256 buckets for massive training speedups.",
      "Early stopping halts training automatically when validation loss stops improving."
    ],
    lab: {
      lang: "python",
      title: "Second-Order Newton Gain Score Calculator (XGBoost Split)",
      prompt: "Compute XGBoost split gain using gradient sums G and hessian sums H with regularization lambda=1.0.",
      hint: "score(G, H) = (G**2) / (H + reg_lambda); gain = 0.5 * (score_L + score_R - score_parent).",
      starterCode: "def xgb_gain(G_L, H_L, G_R, H_R, reg_lambda=1.0):\n    score = lambda g, h: (g ** 2) / (h + reg_lambda)\n    return 0.5 * (score(G_L, H_L) + score(G_R, H_R) - score(G_L + G_R, H_L + H_R))\n\nprint('Split Gain:', round(xgb_gain(G_L=4.2, H_L=5.0, G_R=-3.8, H_R=5.0), 4))\n"
    }
  },
  {
    day: 121,
    month: 5,
    module: "M5: Machine Learning",
    title: "Feature Engineering: Categorical Encodings & Interactions",
    instructor: "Krish Naik",
    duration: "18m",
    videoId: "pqNCD_5r0IU",
    altVideoId: "fSytzGwwBVw",
    startSec: 0,
    bridge: "Transforms raw SQL/Pandas columns (cities, signup dates, RFM ratios) into high-signal tabular features.",
    takeaways: [
      "Use One-Hot Encoding for low-cardinality categories and out-of-fold Target/Frequency Encoding for high cardinality.",
      "Create domain ratio features (spend_per_order, days_between_orders, discount_affinity).",
      "Compute out-of-fold target encodings strictly inside CV folds to prevent target leakage."
    ],
    lab: {
      lang: "python",
      title: "RFM & Behavioral Feature Engineering Builder",
      prompt: "Engineer frequency, monetary_aov, and recency_ratio features from raw ShopPulse customer metrics.",
      hint: "aov = total_spend / orders; recency_ratio = days_since_last / tenure_days.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'customer_id': [1, 2, 3],\n    'orders': [4, 1, 6],\n    'total_spend': [16800.0, 2298.0, 31200.0],\n    'days_since_last': [12, 85, 8],\n    'tenure_days': [120, 90, 210]\n})\n\ndf['aov_inr'] = (df['total_spend'] / df['orders']).round(2)\ndf['inactivity_ratio'] = (df['days_since_last'] / df['tenure_days']).round(3)\nprint(df[['customer_id', 'aov_inr', 'inactivity_ratio']])\n"
    }
  },
  {
    day: 122,
    month: 5,
    module: "M5: Machine Learning",
    title: "Production Pipelines: Scikit-Learn Pipeline & ColumnTransformer",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "fSytzGwwBVw",
    altVideoId: "pqNCD_5r0IU",
    startSec: 0,
    bridge: "Bundles preprocessing and model inference into one atomic, serializable object that eliminates training-serving skew.",
    takeaways: [
      "Route numeric columns through imputers/scalers and categorical columns through encoders via ColumnTransformer.",
      "Serialize the entire Pipeline artifact so production APIs call pipeline.predict(raw_df) directly.",
      "Guarantee zero data leakage during cross-validation."
    ],
    lab: {
      lang: "python",
      title: "Custom Preprocessing Transformer Class (fit / transform)",
      prompt: "Implement a clean Standardizer class with .fit(X) and .transform(X) methods mirroring Scikit-Learn's API.",
      hint: "Store self.mean_ and self.std_ in fit(), then return (X - self.mean_) / self.std_ in transform().",
      starterCode: "import numpy as np\n\nclass SimpleScaler:\n    def fit(self, X):\n        self.mean_ = X.mean(axis=0)\n        self.std_ = X.std(axis=0)\n        return self\n\n    def transform(self, X):\n        return (X - self.mean_) / self.std_\n\nscaler = SimpleScaler().fit(np.array([[10.0, 200.0], [20.0, 400.0]]))\nprint(scaler.transform(np.array([[15.0, 300.0]])))\n"
    }
  },
  {
    day: 123,
    month: 5,
    module: "M5: Machine Learning",
    title: "Cross-Validation Strategies: Stratified, Group & TimeSeriesSplit",
    instructor: "StatQuest",
    duration: "7m",
    videoId: "fSytzGwwBVw",
    altVideoId: "7ArmBVF2dCs",
    startSec: 0,
    bridge: "Matches validation splitting geometry to real-world deployment: GroupKFold by customer_id and TimeSeriesSplit by date.",
    takeaways: [
      "Use StratifiedKFold for classification so every fold preserves the exact positive class ratio.",
      "Use GroupKFold when multiple rows belong to the same customer_id so user history never leaks across folds.",
      "Use expanding-window TimeSeriesSplit for temporal forecasting tasks."
    ],
    lab: {
      lang: "python",
      title: "Expanding-Window Time-Series Fold Generator",
      prompt: "Generate 3 expanding-window train/validation index splits over 12 chronological months.",
      hint: "Train on [:k], validate on [k:k+2] for k in [6, 8, 10].",
      starterCode: "months = [f'2026-{m:02d}' for m in range(1, 13)]\nfor fold, cutoff in enumerate([6, 8, 10], start=1):\n    print(f'Fold {fold} | Train: {months[:cutoff]} -> Val: {months[cutoff:cutoff+2]}')\n"
    }
  },
  {
    day: 124,
    month: 5,
    module: "M5: Machine Learning",
    title: "Hyperparameter Tuning: Grid, Random & Bayesian Search",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "fSytzGwwBVw",
    altVideoId: "OtD8wVaFm6E",
    startSec: 0,
    bridge: "Searches hyperparameter spaces efficiently using randomized and Bayesian surrogate optimization instead of brute-force grids.",
    takeaways: [
      "RandomizedSearch explores continuous distributions far more efficiently than coarse Cartesian grids.",
      "Bayesian optimization (Optuna) models prior trial scores to focus evaluations on promising regions.",
      "Always hold out a final untouched test set after hyperparameter selection."
    ],
    lab: {
      lang: "python",
      title: "Random Hyperparameter Search Over Regularization Alpha",
      prompt: "Sample 8 log-uniform alpha candidates between 1e-3 and 1e2 and select the lowest validation MSE.",
      hint: "alphas = 10 ** rng.uniform(-3, 2, size=8).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nalphas = np.sort(10 ** rng.uniform(-3, 2, size=8))\n# Simulated validation loss curve peaking around alpha ~ 1.5\nval_losses = 0.42 + 0.08 * (np.log10(alphas) - 0.18) ** 2\nbest_idx = int(np.argmin(val_losses))\nprint(f'Best Alpha: {alphas[best_idx]:.4f} | Val Loss: {val_losses[best_idx]:.4f}')\n"
    }
  },
  {
    day: 125,
    month: 5,
    module: "M5: Machine Learning",
    title: "Handling Class Imbalance: Class Weights & Calibration",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "Kdsp6soqA7o",
    altVideoId: "yIYKR4sgzI8",
    startSec: 0,
    bridge: "Trains accurate fraud and rare-churn models when positive events represent only 1-5% of traffic.",
    takeaways: [
      "Prefer class_weight='balanced' and threshold tuning before synthetic oversampling (SMOTE).",
      "Apply SMOTE strictly inside training folds—never before train/validation splitting.",
      "Recalibrate predicted probabilities (Platt scaling / isotonic) whenever training class priors are altered."
    ],
    lab: {
      lang: "python",
      title: "Balanced Inverse-Frequency Class Weight Calculator",
      prompt: "Compute balanced class weights n_samples / (n_classes * np.bincount(y)) for a 95% / 5% imbalanced target.",
      hint: "weights = len(y) / (2 * np.bincount(y)).",
      starterCode: "import numpy as np\n\ny = np.array([0]*95 + [1]*5)\ncounts = np.bincount(y)\nweights = len(y) / (2.0 * counts)\nprint(f'Class 0 weight: {weights[0]:.3f} | Class 1 weight: {weights[1]:.3f}')\n"
    }
  },
  {
    day: 126,
    month: 5,
    module: "M5: Machine Learning",
    title: "Unsupervised Clustering: K-Means & Elbow/Silhouette",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "4b5d3muPQmA",
    altVideoId: "FgakZw6K1QQ",
    startSec: 0,
    bridge: "Discovers natural RFM customer personas (VIP Whales, At-Risk Sleepers, Bargain Hunters) without labeled targets.",
    takeaways: [
      "Standardize all features before distance-based clustering so high-magnitude INR columns do not dominate.",
      "Evaluate cluster cohesion and separation via inertia (Elbow curve) and Silhouette score.",
      "Profile cluster centroids in original business units so marketing teams can act on each segment."
    ],
    lab: {
      lang: "python",
      title: "2-Cluster K-Means Segmentation From Scratch",
      prompt: "Run 10 iterations of Lloyd's K-Means algorithm on standardized [orders, spend] vectors.",
      hint: "Assign each point to nearest centroid via np.argmin(dists, axis=1), then recompute cluster means.",
      starterCode: "import numpy as np\n\nX = np.array([[1.0, 2200.0], [2.0, 3100.0], [1.0, 1900.0], [8.0, 34000.0], [9.0, 39000.0], [7.0, 29000.0]])\nX_std = (X - X.mean(axis=0)) / X.std(axis=0)\ncentroids = X_std[[0, 3]].copy()\n\nfor _ in range(10):\n    dists = np.linalg.norm(X_std[:, None, :] - centroids[None, :, :], axis=2)\n    labels = np.argmin(dists, axis=1)\n    for k in range(2):\n        centroids[k] = X_std[labels == k].mean(axis=0)\n\nprint('Cluster Assignments:', labels)\n"
    }
  },
  {
    day: 127,
    month: 5,
    module: "M5: Machine Learning",
    title: "Dimensionality Reduction: PCA & UMAP Intuition",
    instructor: "StatQuest",
    duration: "21m",
    videoId: "FgakZw6K1QQ",
    altVideoId: "4b5d3muPQmA",
    startSec: 0,
    bridge: "Projects high-dimensional customer and embedding spaces down to 2D/3D for cluster visualization and noise compression.",
    takeaways: [
      "PCA finds orthogonal linear projections maximizing variance; UMAP preserves local neighborhood topology.",
      "Choose number of PCA components to retain 90-95% cumulative explained variance.",
      "Fit PCA strictly on training data before transforming validation/test matrices."
    ],
    lab: {
      lang: "python",
      title: "2D Principal Component Projection via SVD",
      prompt: "Project standardized 4-feature customer vectors onto their top 2 principal components using np.linalg.svd.",
      hint: "U, S, Vt = np.linalg.svd(X_std, full_matrices=False); X_2d = X_std @ Vt[:2].T.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nX = rng.normal(0, 1, (8, 4))\nX_std = (X - X.mean(axis=0)) / X.std(axis=0)\nU, S, Vt = np.linalg.svd(X_std, full_matrices=False)\nX_2d = X_std @ Vt[:2].T\nprint('Projected 2D Shape:', X_2d.shape)\nprint(np.round(X_2d[:3], 3))\n"
    }
  },
  {
    day: 128,
    month: 5,
    module: "M5: Machine Learning",
    title: "Time-Series Forecasting with Tabular Lag & Calendar Features",
    instructor: "StatQuest",
    duration: "15m",
    videoId: "7ArmBVF2dCs",
    altVideoId: "fSytzGwwBVw",
    startSec: 0,
    bridge: "Connects Day 73 Pandas .shift()/.rolling() features to regression models to forecast next-week ShopPulse demand.",
    takeaways: [
      "Transform univariate time series into supervised tabular rows using lags (t-1, t-7), rolling means, and day-of-week flags.",
      "Compute rolling features strictly on past observations (shift(1) before rolling) to prevent target leakage.",
      "Evaluate forecasts against a seasonal naive baseline (y_hat_t = y_{t-7})."
    ],
    lab: {
      lang: "python",
      title: "Leakage-Free Lag & Rolling Feature Matrix for Forecasting",
      prompt: "Build lag_1, lag_2, and shifted rolling_3_mean features on a 10-day revenue series and drop NaN warmup rows.",
      hint: "Use s.shift(1).rolling(3).mean() so current day y_t never enters its own feature row.",
      starterCode: "import pandas as pd\n\nrev = pd.Series([4100, 4400, 4800, 5200, 6900, 7400, 4600, 4900, 5300, 7200], dtype=float)\ndf = pd.DataFrame({\n    'y': rev,\n    'lag_1': rev.shift(1),\n    'lag_2': rev.shift(2),\n    'prev_3d_avg': rev.shift(1).rolling(3).mean().round(2)\n}).dropna()\nprint(df)\n"
    }
  },
  {
    day: 129,
    month: 5,
    module: "M5: Machine Learning",
    title: "Model Explainability: Permutation Importance & SHAP Values",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "J4Wdy0Wc_xQ",
    altVideoId: "OtD8wVaFm6E",
    startSec: 0,
    bridge: "Opens black-box tree ensembles so product and finance teams see exactly which features drive each customer's risk score.",
    takeaways: [
      "Permutation importance measures how much validation score drops when a single feature column is randomly shuffled.",
      "SHAP values decompose every individual prediction into additive feature contributions summing from base value to output.",
      "Audit top features to catch subtle data leakage bugs."
    ],
    lab: {
      lang: "python",
      title: "Permutation Feature Importance From Scratch",
      prompt: "Measure validation MSE degradation when shuffling feature 0 vs feature 1 on a trained linear predictor.",
      hint: "Shuffle one column of X_val with rng.permutation and compute new MSE minus baseline MSE.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nX_val = rng.normal(0, 1, (100, 2))\nw = np.array([5.0, 0.2])\ny_val = X_val @ w + rng.normal(0, 0.5, 100)\nbase_mse = np.mean((X_val @ w - y_val) ** 2)\n\nfor col in range(2):\n    X_perm = X_val.copy()\n    X_perm[:, col] = rng.permutation(X_perm[:, col])\n    perm_mse = np.mean((X_perm @ w - y_val) ** 2)\n    print(f'Feature {col} Importance (MSE increase): +{perm_mse - base_mse:.3f}')\n"
    }
  },
  {
    day: 130,
    month: 5,
    module: "M5: Machine Learning",
    title: "Model Drift Monitoring: PSI & Data Quality Alerts",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "oI3hZJqXJuc",
    altVideoId: "fSytzGwwBVw",
    startSec: 0,
    bridge: "Detects silent production decay when live customer traffic shifts away from historical training distributions.",
    takeaways: [
      "Population Stability Index (PSI) compares binned baseline vs live distributions: PSI < 0.10 stable, > 0.25 major drift.",
      "Monitor both feature covariate drift and prediction score drift.",
      "Trigger automated retraining pipelines when PSI or calibration error breaches SLA thresholds."
    ],
    lab: {
      lang: "python",
      title: "Population Stability Index (PSI) Drift Monitor",
      prompt: "Compute PSI across 4 risk-score buckets comparing baseline training distribution vs live production traffic.",
      hint: "psi = np.sum((live - base) * np.log(live / base)).",
      starterCode: "import numpy as np\n\nbase_pct = np.array([0.40, 0.30, 0.20, 0.10])\nlive_pct = np.array([0.22, 0.28, 0.28, 0.22])\npsi = np.sum((live_pct - base_pct) * np.log(live_pct / base_pct))\nstatus = 'MAJOR DRIFT' if psi > 0.25 else ('MODERATE' if psi > 0.10 else 'STABLE')\nprint(f'PSI = {psi:.4f} -> Status: {status}')\n"
    }
  },
  {
    day: 131,
    month: 5,
    module: "M5: Machine Learning",
    title: "Serving ML Models via FastAPI & Pydantic Contracts",
    instructor: "Patrick Loeber",
    duration: "25m",
    videoId: "0sOvCWFmrtA",
    altVideoId: "0B5eIE_1vpU",
    startSec: 0,
    bridge: "Wraps trained scoring functions behind strict JSON request/response schemas ready for production microservice deployment.",
    takeaways: [
      "Validate incoming feature payloads strictly with typed schemas before running inference.",
      "Load serialized model weights once at startup rather than on every HTTP request.",
      "Log request IDs, feature hashes, and predicted probabilities for offline drift monitoring."
    ],
    lab: {
      lang: "python",
      title: "Validated Inference Endpoint Contract Simulator",
      prompt: "Implement score_customer(payload) with schema validation, probability inference, and risk-tier tagging.",
      hint: "Validate required keys ('orders', 'days_inactive') and return JSON-serializable prediction dict.",
      starterCode: "def score_customer(payload: dict) -> dict:\n    for key in ('customer_id', 'orders', 'days_inactive'):\n        if key not in payload:\n            raise ValueError(f'Missing required field: {key}')\n    z = -1.8 + 0.06 * payload['days_inactive'] - 0.35 * payload['orders']\n    prob = round(1.0 / (1.0 + (2.718281828 ** (-z))), 4)\n    tier = 'HIGH' if prob >= 0.65 else ('MEDIUM' if prob >= 0.35 else 'LOW')\n    return {'customer_id': payload['customer_id'], 'churn_prob': prob, 'risk_tier': tier}\n\nprint(score_customer({'customer_id': 104, 'orders': 1, 'days_inactive': 58}))\n"
    }
  },
  {
    day: 132,
    month: 5,
    module: "M5: Machine Learning",
    title: "Experiment Tracking & Model Registry Discipline",
    instructor: "Krish Naik",
    duration: "15m",
    videoId: "pqNCD_5r0IU",
    altVideoId: "0sOvCWFmrtA",
    startSec: 0,
    bridge: "Logs hyperparameters, dataset hashes, and validation metrics across training runs so every model is reproducible.",
    takeaways: [
      "Record code version, feature schema, hyperparameters, and validation metrics for every run.",
      "Promote models through Staging -> Production stages only after passing automated metric gates.",
      "Keep rollback artifacts ready in case live latency or calibration degrades."
    ],
    lab: {
      lang: "python",
      title: "Lightweight JSON Experiment Run Logger",
      prompt: "Log 3 candidate model runs and automatically select the best model by validation PR-AUC.",
      hint: "Sort runs by metrics['pr_auc'] descending and pick index 0.",
      starterCode: "runs = [\n    {'run_id': 'run_01', 'model': 'LogReg', 'pr_auc': 0.712, 'latency_ms': 1.2},\n    {'run_id': 'run_02', 'model': 'RandomForest', 'pr_auc': 0.784, 'latency_ms': 6.5},\n    {'run_id': 'run_03', 'model': 'LightGBM', 'pr_auc': 0.819, 'latency_ms': 2.8}\n]\nchampion = max(runs, key=lambda r: r['pr_auc'])\nprint('Promoted Champion Model:', champion)\n"
    }
  },
  {
    day: 133,
    month: 5,
    module: "M5: Machine Learning",
    title: "Recommender Systems: Collaborative & Content-Based Filtering",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "4b5d3muPQmA",
    altVideoId: "aircAruvnKk",
    startSec: 0,
    bridge: "Uses item-item cosine similarity on co-purchase vectors to power ShopPulse 'Frequently Bought Together' recommendations.",
    takeaways: [
      "Item-based collaborative filtering compares SKU purchase vectors across users via cosine similarity.",
      "Content-based filtering matches product attribute vectors to solve cold-start items.",
      "Evaluate recommenders with Precision@K and Normalized Discounted Cumulative Gain (NDCG@K)."
    ],
    lab: {
      lang: "python",
      title: "Item-Item Cosine Similarity Recommender",
      prompt: "Given a 4-customer x 3-SKU purchase matrix, find which SKU is most similar to SKU 0 (Keyboard).",
      hint: "Compute cosine similarity between item columns M[:, 0] and M[:, j] for j in [1, 2].",
      starterCode: "import numpy as np\n\n# Rows: Customers | Cols: Keyboard, Mouse, USB-C Hub\nM = np.array([\n    [1, 1, 0],\n    [1, 1, 1],\n    [0, 0, 1],\n    [1, 1, 0]\n], dtype=float)\n\nkb = M[:, 0]\nfor idx, name in [(1, 'Mouse'), (2, 'USB-C Hub')]:\n    col = M[:, idx]\n    sim = np.dot(kb, col) / (np.linalg.norm(kb) * np.linalg.norm(col))\n    print(f'Similarity(Keyboard, {name}): {sim:.3f}')\n"
    }
  },
  {
    day: 134,
    month: 5,
    module: "M5: Machine Learning",
    title: "Anomaly Detection: Isolation Forest & Mahalanobis Distance",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "J4Wdy0Wc_xQ",
    altVideoId: "XNgt7F6FqDU",
    startSec: 0,
    bridge: "Detects multi-dimensional order anomalies (e.g., high quantity + brand-new account + midnight rush) without labeled fraud data.",
    takeaways: [
      "Anomalies are few and different, requiring far fewer random splits to isolate in tree partitions.",
      "Multivariate distance catches combinations that look normal on each 1D column individually.",
      "Tune contamination rates carefully to keep analyst review queues manageable."
    ],
    lab: {
      lang: "python",
      title: "Multivariate L2 Distance Anomaly Scorer",
      prompt: "Standardize 2D [order_value, items_qty] records and flag rows whose Euclidean distance from centroid exceeds 2.5.",
      hint: "dists = np.linalg.norm(X_std, axis=1); flag dists > 2.5.",
      starterCode: "import numpy as np\n\nX = np.array([[2500, 1], [3100, 2], [2800, 1], [3400, 2], [2900, 1], [45000, 18]], dtype=float)\nX_std = (X - X.mean(axis=0)) / X.std(axis=0)\ndists = np.linalg.norm(X_std, axis=1)\nfor i, d in enumerate(dists):\n    print(f'Row {i}: dist={d:.2f} -> Outlier={d > 2.0}')\n"
    }
  },
  {
    day: 135,
    month: 5,
    module: "M5: Machine Learning",
    title: "Uplift Modeling & Treatment Effect Estimation",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "0oc49DyA3hU",
    altVideoId: "yIYKR4sgzI8",
    startSec: 0,
    bridge: "Targets retention discounts exclusively at 'Persuadables' rather than wasting margin on 'Sure Things' who would buy anyway.",
    takeaways: [
      "Segment users into four quadrants: Persuadables, Sure Things, Lost Causes, and Sleeping Dogs.",
      "Estimate Conditional Average Treatment Effect CATE(x) = P(Y=1 | X=x, T=1) - P(Y=1 | X=x, T=0).",
      "Evaluate uplift models using Qini curves rather than standard accuracy."
    ],
    lab: {
      lang: "python",
      title: "Two-Model T-Learner Uplift Score Calculator",
      prompt: "Compute individual uplift scores P_treat - P_control and select customers with uplift > 0.15.",
      hint: "uplift = p_treat - p_ctrl; select indices where uplift > 0.15.",
      starterCode: "import numpy as np\n\ncust_ids = np.array([101, 102, 103, 104])\np_treat = np.array([0.85, 0.62, 0.15, 0.40])\np_ctrl  = np.array([0.82, 0.31, 0.12, 0.48])\nuplift = np.round(p_treat - p_ctrl, 3)\n\nfor cid, u in zip(cust_ids, uplift):\n    tag = 'TARGET (Persuadable)' if u > 0.15 else 'SKIP'\n    print(f'Customer {cid}: Uplift = {u:+.3f} -> {tag}')\n"
    }
  },
  {
    day: 136,
    month: 5,
    module: "M5: Machine Learning",
    title: "ML System Architecture & Feature Store Patterns",
    instructor: "Krish Naik",
    duration: "16m",
    videoId: "pqNCD_5r0IU",
    altVideoId: "0sOvCWFmrtA",
    startSec: 0,
    bridge: "Unifies batch SQL feature pipelines and real-time online inference lookups so training and serving features never diverge.",
    takeaways: [
      "Separate offline batch feature computation (daily SQL/Pandas jobs) from low-latency online feature lookups.",
      "Enforce point-in-time joins when building historical training sets to prevent future leakage.",
      "Cache precomputed customer embeddings and RFM vectors in fast key-value stores."
    ],
    lab: {
      lang: "python",
      title: "Point-in-Time Feature Lookup Merger",
      prompt: "Join historical customer tier snapshots onto orders using the latest snapshot timestamp <= order_date.",
      hint: "Use pd.merge_asof(orders.sort_values('date'), tiers.sort_values('date'), on='date', by='cust_id').",
      starterCode: "import pandas as pd\n\norders = pd.DataFrame({'cust_id': [1, 1], 'date': pd.to_datetime(['2026-02-10', '2026-04-10']), 'rev': [2500, 6500]})\ntiers = pd.DataFrame({'cust_id': [1, 1], 'date': pd.to_datetime(['2026-01-01', '2026-03-15']), 'tier': ['Silver', 'Gold']})\n\nasof_df = pd.merge_asof(orders.sort_values('date'), tiers.sort_values('date'), on='date', by='cust_id')\nprint(asof_df)\n"
    }
  },
  {
    day: 137,
    month: 5,
    module: "M5: Machine Learning",
    title: "Neural Network Building Blocks: Perceptrons & Activations",
    instructor: "3Blue1Brown",
    duration: "19m",
    videoId: "aircAruvnKk",
    altVideoId: "Ilg3gGewQ5U",
    startSec: 0,
    bridge: "Extends logistic regression into multi-layer perceptrons using ReLU, GELU, and Softmax non-linearities.",
    takeaways: [
      "Without non-linear activation functions (ReLU, GELU), stacked linear layers collapse into a single linear transformation.",
      "Softmax converts raw output logits into a normalized probability distribution summing to 1.0.",
      "Forward pass computes layer activations; backpropagation applies the chain rule to update weights."
    ],
    lab: {
      lang: "python",
      title: "Two-Layer Neural Network Forward Pass in NumPy",
      prompt: "Implement a 2-layer MLP forward pass (Linear -> ReLU -> Linear -> Softmax) on a 3-feature input vector.",
      hint: "h = np.maximum(0, x @ W1 + b1); logits = h @ W2 + b2; probs = np.exp(logits) / np.sum(np.exp(logits)).",
      starterCode: "import numpy as np\n\nx = np.array([0.8, 0.2, 0.5])\nW1 = np.array([[0.5, -0.3], [0.2, 0.8], [-0.4, 0.6]])\nb1 = np.array([0.1, 0.0])\nW2 = np.array([[1.2, -0.5, 0.3], [-0.4, 0.9, 0.2]])\nb2 = np.array([0.0, 0.1, -0.1])\n\nh = np.maximum(0.0, x @ W1 + b1)\nlogits = h @ W2 + b2\nexp_l = np.exp(logits - np.max(logits))\nprobs = exp_l / np.sum(exp_l)\nprint('Class Probabilities:', np.round(probs, 4), '| Sum:', round(float(probs.sum()), 4))\n"
    }
  },
  {
    day: 138,
    month: 5,
    module: "M5: Machine Learning",
    title: "Backpropagation & Adam Optimizer Intuition",
    instructor: "3Blue1Brown",
    duration: "14m",
    videoId: "Ilg3gGewQ5U",
    altVideoId: "IHZwWFHWa-w",
    startSec: 0,
    bridge: "Explains how modern deep learning optimizers combine momentum and adaptive per-parameter learning rates.",
    takeaways: [
      "Backpropagation caches forward activations to compute layer gradients in a single backward sweep.",
      "Adam tracks exponentially decaying first moments (momentum) and second moments (adaptive scaling).",
      "Gradient clipping prevents exploding updates during sequence training."
    ],
    lab: {
      lang: "python",
      title: "Momentum Gradient Descent vs Vanilla GD Comparison",
      prompt: "Compare convergence speed over 25 steps on f(w) = 0.5 * w**2 between vanilla GD and momentum (beta=0.8).",
      hint: "v = beta * v + grad; w = w - lr * v.",
      starterCode: "w_gd, w_mom, v = 10.0, 10.0, 0.0\nlr, beta = 0.1, 0.8\nfor _ in range(25):\n    w_gd -= lr * w_gd\n    v = beta * v + w_mom\n    w_mom -= lr * v\nprint(f'After 25 steps -> Vanilla GD w={w_gd:.4f} | Momentum w={w_mom:.4f}')\n"
    }
  },
  {
    day: 139,
    month: 5,
    module: "M5: Machine Learning",
    title: "Capstone 5A: ShopPulse End-to-End Churn & LTV Scoring Pipeline",
    instructor: "StatQuest",
    duration: "18m",
    videoId: "yIYKR4sgzI8",
    altVideoId: "OtD8wVaFm6E",
    startSec: 0,
    bridge: "Integrates feature engineering, leakage-free scaling, logistic training, and threshold ROI optimization into one pipeline.",
    takeaways: [
      "Combine feature engineering, preprocessing, training, and profit-threshold selection into a single reproducible workflow.",
      "Validate both probability calibration and net retention ROI on held-out test customers.",
      "Export scored customer risk profiles ready for Month 6 AI agent retrieval."
    ],
    lab: {
      lang: "python",
      title: "Capstone 5A: Complete Churn Training & Test Evaluation",
      prompt: "Train a regularized logistic churn model on 80 synthetic customers and evaluate test accuracy and F1 on 20 customers.",
      hint: "Fit scaler on X_train, run 500 gradient steps with L2 penalty, and evaluate on X_test.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(2026)\nX = rng.normal(0, 1, (100, 3))\nlogits_true = 1.6 * X[:, 0] - 1.2 * X[:, 1] + 0.8 * X[:, 2]\ny = (1 / (1 + np.exp(-logits_true)) > 0.5).astype(float)\n\nX_tr, X_te = X[:80], X[80:]\ny_tr, y_te = y[:80], y[80:]\nw = np.zeros(3)\nfor _ in range(500):\n    p = 1 / (1 + np.exp(-(X_tr @ w)))\n    w -= 0.1 * ((X_tr.T @ (p - y_tr)) / len(y_tr) + 0.05 * w)\n\ntest_preds = ((1 / (1 + np.exp(-(X_te @ w)))) >= 0.5).astype(float)\nacc = np.mean(test_preds == y_te)\nprint(f'Capstone 5A Test Accuracy: {acc * 100:.1f}% | Weights: {np.round(w, 2)}')\n"
    }
  },
  {
    day: 140,
    month: 5,
    module: "M5: Machine Learning",
    title: "Bridge 5->6: Dense Text Embeddings & Semantic Vector Search",
    instructor: "3Blue1Brown",
    duration: "27m",
    videoId: "wjZofJX0v4M",
    altVideoId: "eMlx5fFNoYc",
    startSec: 0,
    bridge: "Hands off Month 5 directly to Month 6 by turning product reviews and support tickets into dense vectors searched via cosine similarity.",
    takeaways: [
      "Dense embeddings map semantically similar sentences to nearby coordinates in high-dimensional vector space.",
      "Keyword LIKE '%refund%' misses 'money back', whereas cosine similarity over embeddings matches meaning directly.",
      "Top-K vector retrieval forms the retrieval backbone of Month 6 RAG systems."
    ],
    lab: {
      lang: "python",
      title: "Bridge 5->6: Semantic Top-K Vector Retriever",
      prompt: "Rank 4 ShopPulse support doc embeddings against a user query vector using cosine similarity.",
      hint: "Compute scores = (docs @ query) / (np.linalg.norm(docs, axis=1) * np.linalg.norm(query)).",
      starterCode: "import numpy as np\n\ndoc_titles = ['Refund & Return Policy', 'Warranty Coverage', 'Express Mumbai Shipping', 'GST Invoice Download']\ndoc_vecs = np.array([\n    [0.92, 0.10, 0.05],\n    [0.30, 0.88, 0.12],\n    [0.08, 0.15, 0.95],\n    [0.45, 0.20, 0.40]\n])\nquery_vec = np.array([0.89, 0.14, 0.08])\n\nscores = (doc_vecs @ query_vec) / (np.linalg.norm(doc_vecs, axis=1) * np.linalg.norm(query_vec))\nfor idx in np.argsort(scores)[::-1]:\n    print(f'{scores[idx]:.4f} -> {doc_titles[idx]}')\n"
    }
  },
  {
    day: 141,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Transformer Architecture & Self-Attention Visually Explained",
    instructor: "3Blue1Brown",
    duration: "26m",
    videoId: "eMlx5fFNoYc",
    altVideoId: "wjZofJX0v4M",
    startSec: 0,
    bridge: "Launches Month 6 by opening the Transformer black box: Queries, Keys, Values, and scaled dot-product attention.",
    takeaways: [
      "Self-attention lets every token dynamically attend to relevant context tokens via Attention(Q,K,V) = softmax(Q @ K.T / sqrt(d_k)) @ V.",
      "Multi-head attention learns parallel syntactic, semantic, and entity-tracking relationships.",
      "Causal masking prevents decoder LLMs from peeking at future tokens during autoregressive generation."
    ],
    lab: {
      lang: "python",
      title: "Scaled Dot-Product Self-Attention in Pure NumPy",
      prompt: "Compute attention weight matrix and context output for 3 tokens using Q, K, and V matrices.",
      hint: "scores = (Q @ K.T) / np.sqrt(Q.shape[1]); weights = softmax(scores); out = weights @ V.",
      starterCode: "import numpy as np\n\nQ = np.array([[1.0, 0.0], [0.0, 1.0], [0.7, 0.7]])\nK = np.array([[1.0, 0.1], [0.1, 1.0], [0.6, 0.8]])\nV = np.array([[10.0, 0.0], [0.0, 20.0], [5.0, 10.0]])\n\nscores = (Q @ K.T) / np.sqrt(Q.shape[1])\nexp_s = np.exp(scores - np.max(scores, axis=1, keepdims=True))\nattn_weights = exp_s / np.sum(exp_s, axis=1, keepdims=True)\noutput = attn_weights @ V\nprint('Attention Weights:\\n', np.round(attn_weights, 3))\nprint('Contextualized Output:\\n', np.round(output, 2))\n"
    }
  },
  {
    day: 142,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Tokenization (BPE), Context Windows & Sampling Parameters",
    instructor: "Andrej Karpathy",
    duration: "35m",
    videoId: "zduSFxRajkE",
    altVideoId: "sal78ACtGTc",
    startSec: 0,
    bridge: "Explains how BPE tokenizers split text, why numbers/JSON cost tokens, and how temperature & top-p shape outputs.",
    takeaways: [
      "LLMs read integer token IDs (~4 English characters per token), not raw characters or words.",
      "Set temperature=0.0 for deterministic SQL/JSON extraction; use 0.7 for brainstorming.",
      "Monitor input + output token counts to control API latency and cost budgets."
    ],
    lab: {
      lang: "python",
      title: "Softmax Temperature Scaling & Token Cost Estimator",
      prompt: "Compare output token probability sharpness at temperature=0.2 vs temperature=1.5 and estimate prompt API cost.",
      hint: "scaled = logits / temp; probs = np.exp(scaled) / np.sum(np.exp(scaled)).",
      starterCode: "import numpy as np\n\nlogits = np.array([2.5, 1.8, 0.4])\nfor temp in [0.2, 1.0, 1.5]:\n    s = logits / temp\n    p = np.exp(s - np.max(s)) / np.sum(np.exp(s - np.max(s)))\n    print(f'Temp {temp:.1f} -> Token Probs: {np.round(p, 3)}')\n"
    }
  },
  {
    day: 143,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "LLM Training Lifecycle: Pre-Training, SFT & RLHF/DPO",
    instructor: "Andrej Karpathy",
    duration: "42m",
    videoId: "sal78ACtGTc",
    altVideoId: "7xTGNNLPyMI",
    startSec: 0,
    bridge: "Clarifies the three stages turning raw internet text prediction into a helpful, instruction-following assistant.",
    takeaways: [
      "Pre-training learns world knowledge via next-token prediction on trillions of tokens.",
      "Supervised Fine-Tuning (SFT) teaches helpful Q&A and tool-use formatting.",
      "Preference optimization (RLHF / DPO) aligns responses with safety, honesty, and conciseness."
    ],
    lab: {
      lang: "python",
      title: "SFT Chat-Template Prompt Formatter",
      prompt: "Build a clean system + user + assistant chat message formatter verifying role alternation and token budget.",
      hint: "Format role blocks cleanly and assert total word/token estimate stays below max_tokens.",
      starterCode: "def format_prompt(system_msg: str, user_msg: str) -> str:\n    return f'<|system|>\\n{system_msg}\\n<|user|>\\n{user_msg}\\n<|assistant|>\\n'\n\nprompt = format_prompt('You are a concise SQL analyst.', 'Top 3 cities by revenue?')\nprint(prompt)\n"
    }
  },
  {
    day: 144,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Systematic Prompt Engineering: Few-Shot & Chain-of-Thought",
    instructor: "Andrej Karpathy",
    duration: "35m",
    videoId: "7xTGNNLPyMI",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Replaces brittle ad-hoc prompts with structured delimiters, few-shot examples, and step-by-step reasoning instructions.",
    takeaways: [
      "Separate system instructions from untrusted user/document input using clear XML tags (<context>, <query>).",
      "Provide 2-3 canonical few-shot input/output examples to lock in domain edge cases.",
      "Instruct explicit step-by-step verification for multi-step math or SQL generation."
    ],
    lab: {
      lang: "python",
      title: "XML-Delimited Few-Shot SQL Prompt Builder",
      prompt: "Construct a prompt builder wrapping ShopPulse DDL schema and 2 few-shot examples inside XML tags.",
      hint: "Embed <schema>, <examples>, and <question> blocks cleanly.",
      starterCode: "def build_sql_prompt(schema_ddl: str, question: str) -> str:\n    return f'''<schema>\\n{schema_ddl}\\n</schema>\n<examples>\nQ: Total delivered orders?\nSQL: SELECT COUNT(*) FROM orders WHERE status = 'Delivered';\n</examples>\n<question>{question}</question>\nReturn only valid SQLite SQL.'''\n\nprint(build_sql_prompt('orders(order_id, city, status, total_inr)', 'Revenue by city?'))\n"
    }
  },
  {
    day: 145,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Structured JSON Outputs, Schemas & Guarded Parsing",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "bZQun8Y4L2A",
    altVideoId: "7xTGNNLPyMI",
    startSec: 0,
    bridge: "Enforces strict JSON schema contracts on LLM outputs so downstream Python pipelines never crash on markdown chatter.",
    takeaways: [
      "Always pair structured JSON mode with defensive markdown fence stripping and schema validation.",
      "Validate field types, allowed enum values, and numeric bounds before executing downstream actions.",
      "Implement automatic retry-with-error-feedback when schema validation fails."
    ],
    lab: {
      lang: "python",
      title: "Resilient LLM JSON Extractor & Schema Validator",
      prompt: "Strip ```json fences from a raw LLM string, parse JSON, and validate required keys and sentiment enum.",
      hint: "Strip ```json and ``` wrappers, call json.loads(), and check sentiment in {'positive', 'neutral', 'negative'}.",
      starterCode: "import json\n\ndef parse_review_json(raw_llm: str) -> dict:\n    cleaned = raw_llm.strip().removeprefix('```json').removeprefix('```').removesuffix('```').strip()\n    data = json.loads(cleaned)\n    if data.get('sentiment') not in {'positive', 'neutral', 'negative'}:\n        raise ValueError('Invalid sentiment label')\n    return data\n\nsample = '```json\\n{\"sku\": \"SP-101\", \"sentiment\": \"positive\", \"score\": 5}\\n```'\nprint(parse_review_json(sample))\n"
    }
  },
  {
    day: 146,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Document Chunking Strategies for Knowledge Retrieval",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "T-D1OfcDW1M",
    altVideoId: "fLvJ8VdHLA0",
    startSec: 0,
    bridge: "Splits long policy docs and product manuals into overlapping semantic chunks that preserve context across boundaries.",
    takeaways: [
      "Use recursive character/paragraph splitting with 10-20% overlap so sentences at chunk edges retain context.",
      "Attach rich metadata (doc_id, section, page, updated_at) to every chunk for filtered search.",
      "Tune chunk size (300-800 tokens) to balance retrieval precision vs surrounding context."
    ],
    lab: {
      lang: "python",
      title: "Overlapping Sliding-Window Text Chunker",
      prompt: "Implement chunk_text(text, chunk_size=120, overlap=30) returning overlapping chunks with metadata.",
      hint: "Step start index by (chunk_size - overlap) until start >= len(text).",
      starterCode: "def chunk_text(text: str, chunk_size: int = 80, overlap: int = 20) -> list[dict]:\n    chunks = []\n    step = chunk_size - overlap\n    for idx, start in enumerate(range(0, len(text), step)):\n        piece = text[start:start + chunk_size]\n        chunks.append({'chunk_id': idx, 'text': piece})\n        if start + chunk_size >= len(text):\n            break\n    return chunks\n\ndoc = 'ShopPulse offers a 30-day no-questions return policy on all unopened electronics purchased in India with valid GST invoice.'\nfor c in chunk_text(doc, 55, 15):\n    print(c)\n"
    }
  },
  {
    day: 147,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Vector Databases, HNSW Indexing & Metadata Filtering",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "fLvJ8VdHLA0",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Scales Day 140 brute-force cosine search to millions of vectors using Hierarchical Navigable Small World (HNSW) graphs.",
    takeaways: [
      "Approximate Nearest Neighbor (ANN) indexes like HNSW trade <1% recall for 100x faster sub-millisecond search.",
      "Combine pre/post metadata filters (category == 'Audio') with vector similarity.",
      "Normalize embedding vectors to unit L2 norm so dot product equals cosine similarity."
    ],
    lab: {
      lang: "python",
      title: "Metadata-Filtered Vector Store Query Engine",
      prompt: "Filter candidate chunks by category == 'Returns' first, then rank matching vectors by cosine similarity.",
      hint: "Filter records matching category, then compute dot product on unit-normalized vectors.",
      starterCode: "import numpy as np\n\nstore = [\n    {'id': 'c1', 'cat': 'Returns', 'vec': np.array([0.9, 0.1]), 'text': '30-day return window'},\n    {'id': 'c2', 'cat': 'Shipping', 'vec': np.array([0.85, 0.2]), 'text': 'Free shipping over 3000 INR'},\n    {'id': 'c3', 'cat': 'Returns', 'vec': np.array([0.7, 0.7]), 'text': 'Damaged item replacement'}\n]\nq_vec = np.array([0.92, 0.08])\n\nfiltered = [r for r in store if r['cat'] == 'Returns']\nranked = sorted(filtered, key=lambda r: float(np.dot(r['vec'], q_vec) / (np.linalg.norm(r['vec']) * np.linalg.norm(q_vec))), reverse=True)\nprint('Top Filtered Match:', ranked[0]['text'])\n"
    }
  },
  {
    day: 148,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "RAG Architecture Part 1: Grounded Context Injection",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "T-D1OfcDW1M",
    altVideoId: "fLvJ8VdHLA0",
    startSec: 0,
    bridge: "Connects vector retrieval to LLM generation so answers cite private ShopPulse documentation rather than hallucinating.",
    takeaways: [
      "Retrieve top-K relevant chunks and inject them with explicit [doc_id] citation markers.",
      "Instruct the model to say 'Not found in provided documents' when context lacks the answer.",
      "Keep retrieved context concise to avoid 'lost-in-the-middle' attention dilution."
    ],
    lab: {
      lang: "python",
      title: "Grounded RAG Prompt Assembler with Citation IDs",
      prompt: "Assemble a grounded RAG prompt formatting retrieved chunks with [source_id] tags and strict refusal rules.",
      hint: "Join chunks as '[id] text' inside <context> tags.",
      starterCode: "def build_rag_prompt(question: str, chunks: list[dict]) -> str:\n    ctx = '\\n'.join(f\"[{c['id']}] {c['text']}\" for c in chunks)\n    return f'''Answer ONLY using the context below. Cite sources like [c1]. If missing, say \"Insufficient context.\"\n<context>\n{ctx}\n</context>\nQuestion: {question}'''\n\nprint(build_rag_prompt('What is the return window?', [{'id': 'c1', 'text': 'Returns accepted within 30 days.'}]))\n"
    }
  },
  {
    day: 149,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "RAG Part 2: Hybrid Search (BM25 + Dense) & Reranking",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "fLvJ8VdHLA0",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Fixes dense embedding blind spots on exact SKU codes ('SP-101') by fusing keyword BM25 scores with semantic vectors via RRF.",
    takeaways: [
      "Dense embeddings capture synonyms; lexical keyword search catches exact SKUs, error codes, and proper nouns.",
      "Reciprocal Rank Fusion (RRF): score = sum(1 / (k + rank_i)) merges keyword and vector rankings cleanly without score calibration.",
      "Cross-encoder rerankers score top-20 candidates jointly before passing top-3 to the LLM."
    ],
    lab: {
      lang: "python",
      title: "Reciprocal Rank Fusion (RRF) Hybrid Scorer",
      prompt: "Fuse lexical rank order and vector rank order using RRF (k=60) to surface the best overall document.",
      hint: "For each list, add 1.0 / (60 + rank) to doc_id's cumulative RRF score.",
      starterCode: "lexical_rank = ['doc_sku_101', 'doc_shipping', 'doc_warranty']\nvector_rank  = ['doc_warranty', 'doc_sku_101', 'doc_returns']\n\nrrf = {}\nfor ranking in (lexical_rank, vector_rank):\n    for rank, doc_id in enumerate(ranking, start=1):\n        rrf[doc_id] = rrf.get(doc_id, 0.0) + 1.0 / (60 + rank)\n\nfor doc_id, score in sorted(rrf.items(), key=lambda x: x[1], reverse=True):\n    print(f'{doc_id:15s} -> RRF Score: {score:.5f}')\n"
    }
  },
  {
    day: 150,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Evaluating RAG & LLM Systems (RAGAS & LLM-as-a-Judge)",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "bZQun8Y4L2A",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Replaces 'vibes-based' prompt tweaking with automated Recall@K, Faithfulness, and Answer Relevance evaluation suites.",
    takeaways: [
      "Separate retriever evaluation (Recall@K, MRR) from generator evaluation (Faithfulness, Answer Relevance).",
      "Faithfulness checks whether every claim in the answer is supported by the retrieved context.",
      "Run golden evaluation sets in CI before deploying prompt or chunking changes."
    ],
    lab: {
      lang: "python",
      title: "Retriever Recall@K & Mean Reciprocal Rank (MRR) Evaluator",
      prompt: "Compute Recall@2 and MRR across 3 golden ShopPulse test queries against retrieved doc ID lists.",
      hint: "Recall@2 = 1 if gold_id in retrieved[:2] else 0; RR = 1 / (index + 1) if gold_id in retrieved else 0.",
      starterCode: "eval_cases = [\n    ('doc_return', ['doc_return', 'doc_ship']),\n    ('doc_gst', ['doc_ship', 'doc_gst']),\n    ('doc_warranty', ['doc_return', 'doc_ship'])\n]\n\nrecalls, rrs = [], []\nfor gold, ret in eval_cases:\n    recalls.append(1.0 if gold in ret[:2] else 0.0)\n    rrs.append(1.0 / (ret.index(gold) + 1) if gold in ret else 0.0)\n\nprint(f'Recall@2: {sum(recalls)/len(recalls):.3f} | MRR: {sum(rrs)/len(rrs):.3f}')\n"
    }
  },
  {
    day: 151,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Function Calling & Structured Tool Use",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Grants LLMs safe, deterministic access to Python calculators, SQLite queries, and live inventory APIs.",
    takeaways: [
      "Expose typed tool schemas (name, description, JSON parameters) rather than letting LLMs guess arithmetic.",
      "The LLM emits a structured tool_call JSON; your runtime executes the function and feeds tool_result back.",
      "Validate all tool arguments before execution—especially read-only SQL constraints."
    ],
    lab: {
      lang: "python",
      title: "Tool Dispatcher Router for ShopPulse Assistant",
      prompt: "Implement a tool registry dispatching structured tool calls ('get_sku_price', 'calc_gst') safely.",
      hint: "Look up call['name'] in TOOLS dict and invoke with **call['args'].",
      starterCode: "CATALOG = {'SP-101': 4999.0, 'SP-102': 1499.0}\nTOOLS = {\n    'get_sku_price': lambda sku: CATALOG.get(sku, 0.0),\n    'calc_total_with_gst': lambda amount, rate=0.18: round(amount * (1 + rate), 2)\n}\n\ndef dispatch(tool_call: dict):\n    fn = TOOLS.get(tool_call['name'])\n    if not fn:\n        raise ValueError('Unknown tool')\n    return fn(**tool_call['args'])\n\nprice = dispatch({'name': 'get_sku_price', 'args': {'sku': 'SP-101'}})\nprint('Total INR:', dispatch({'name': 'calc_total_with_gst', 'args': {'amount': price}}))\n"
    }
  },
  {
    day: 152,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "AI Agents Part 1: ReAct Loop (Thought -> Action -> Observation)",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Chains multi-step tool calls inside a bounded Reason-Act-Observe loop so the agent can solve multi-hop questions.",
    takeaways: [
      "ReAct interleaves explicit reasoning traces with tool actions and real observations.",
      "Always enforce a strict max_steps budget (e.g., 5 steps) to prevent infinite agent loops.",
      "Terminate cleanly once sufficient evidence is gathered to synthesize the final answer."
    ],
    lab: {
      lang: "python",
      title: "Bounded Multi-Step ReAct Agent Loop Simulator",
      prompt: "Run a 3-step Reason-Act-Observe trace looking up an order total and applying customer tier discount.",
      hint: "Iterate over planned steps up to max_steps=5, recording observation into state.",
      starterCode: "ORDERS = {1001: {'customer': 'Aarav', 'subtotal': 6498.0}}\nTIERS = {'Aarav': 0.10}\n\nstate = {'order_id': 1001}\ntrace = [\n    ('lookup_order', lambda s: ORDERS[s['order_id']]),\n    ('lookup_discount', lambda s: {'discount': TIERS[s['customer']]}),\n    ('final_calc', lambda s: {'final_inr': round(s['subtotal'] * (1 - s['discount']), 2)})\n]\n\nfor step_idx, (action, fn) in enumerate(trace, start=1):\n    obs = fn(state)\n    state.update(obs)\n    print(f'Step {step_idx} [{action}] -> Obs: {obs}')\n"
    }
  },
  {
    day: 153,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "AI Agents Part 2: Memory, Planning & Multi-Agent Routing",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Scales single-loop agents using short-term conversation state, semantic long-term memory, and specialized sub-agent routers.",
    takeaways: [
      "Separate working scratchpad memory (current task) from persistent user preferences and vector memory.",
      "Use a lightweight supervisor router to dispatch SQL analytics vs policy RAG vs ML scoring requests.",
      "Keep specialist agents narrow with focused tool sets to maintain high accuracy."
    ],
    lab: {
      lang: "python",
      title: "Intent Router Dispatching to SQL, RAG, or ML Agents",
      prompt: "Route incoming ShopPulse user queries to 'SQL_AGENT', 'RAG_AGENT', or 'ML_AGENT' based on intent keywords.",
      hint: "Check domain keywords cleanly and fallback to 'GENERAL_AGENT'.",
      starterCode: "def route_query(query: str) -> str:\n    q = query.lower()\n    if any(k in q for k in ('revenue', 'orders', 'city', 'top')):\n        return 'SQL_AGENT'\n    if any(k in q for k in ('return', 'policy', 'warranty', 'refund')):\n        return 'RAG_AGENT'\n    if any(k in q for k in ('churn', 'predict', 'risk', 'ltv')):\n        return 'ML_AGENT'\n    return 'GENERAL_AGENT'\n\nfor q in ['Total revenue in Mumbai?', 'What is the return policy?', 'Predict churn risk for user 104']:\n    print(f'{q:36s} -> {route_query(q)}')\n"
    }
  },
  {
    day: 154,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Agent Guardrails: SQL Sandboxing, Prompt Injection & HITL",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "sal78ACtGTc",
    startSec: 0,
    bridge: "Locks down AI agents against prompt injection, destructive SQL mutations (DROP/DELETE), and unauthorized refunds.",
    takeaways: [
      "Enforce read-only SELECT validation and row limits on any LLM-generated SQL query.",
      "Treat retrieved documents and user inputs as untrusted data—never executable instructions.",
      "Require Human-in-the-Loop (HITL) confirmation before high-impact write actions (refunds, emails, DB writes)."
    ],
    lab: {
      lang: "python",
      title: "Read-Only SQL Safety Guardrail Validator",
      prompt: "Write validate_readonly_sql(sql) rejecting non-SELECT queries or forbidden keywords (DROP, DELETE, UPDATE, INSERT).",
      hint: "Normalize uppercase, check startswith('SELECT') or startswith('WITH'), and block DDL/DML tokens.",
      starterCode: "def validate_readonly_sql(sql: str) -> bool:\n    clean = sql.strip().upper()\n    if not clean.startswith(('SELECT', 'WITH')):\n        return False\n    forbidden = ('DROP ', 'DELETE ', 'UPDATE ', 'INSERT ', 'ALTER ', 'TRUNCATE ')\n    return not any(tok in clean for tok in forbidden)\n\nfor stmt in ['SELECT city, SUM(total_inr) FROM orders GROUP BY city;', 'DROP TABLE orders;', 'DELETE FROM customers WHERE id=1;']:\n    print(f'Allowed={str(validate_readonly_sql(stmt)):5s} | {stmt}')\n"
    }
  },
  {
    day: 155,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Text-to-SQL Agent: Schema Linking & Self-Correction",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Combines Month 2 SQLite analytics with Day 154 read-only guardrails to answer natural-language executive questions over real tables.",
    takeaways: [
      "Inject exact table DDL and sample rows into the prompt so column names never hallucinate.",
      "Validate generated SQL against SQLite's EXPLAIN QUERY PLAN before execution.",
      "Feed syntax or missing-column error messages back to the generator for automatic self-repair."
    ],
    lab: {
      lang: "python",
      title: "End-to-End Safe Text-to-SQL Execution Harness",
      prompt: "Validate a candidate SQL query with validate_readonly_sql(), execute it against an in-memory SQLite table, and return rows.",
      hint: "Run sqlite3 in-memory query only after passing the read-only guard.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (city TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [('Mumbai', 6498.0), ('Bengaluru', 8999.0), ('Mumbai', 2499.0)])\n\nsql = 'SELECT city, ROUND(SUM(total_inr), 2) AS rev FROM orders GROUP BY city ORDER BY rev DESC;'\nassert sql.strip().upper().startswith('SELECT')\nprint(conn.execute(sql).fetchall())\n"
    }
  },
  {
    day: 156,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Fine-Tuning vs RAG vs Prompting Decision Framework",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "bZQun8Y4L2A",
    altVideoId: "sal78ACtGTc",
    startSec: 0,
    bridge: "Prevents expensive, unnecessary fine-tuning when RAG + structured prompting solves dynamic business knowledge faster.",
    takeaways: [
      "Use Prompting for formatting/reasoning; use RAG for dynamic, private, or citable knowledge.",
      "Reserve LoRA/QLoRA fine-tuning for specialized domain style, strict latency budgets, or compact local models.",
      "Always build a strong RAG + eval baseline before investing in custom weight fine-tuning."
    ],
    lab: {
      lang: "python",
      title: "Architecture Decision Matrix Scorer",
      prompt: "Implement recommend_approach(needs_live_data, custom_tone_only, high_volume_low_latency) returning RAG, Prompting, or LoRA.",
      hint: "If needs_live_data -> 'RAG'; elif high_volume_low_latency -> 'LoRA Fine-Tune'; else 'Structured Prompting'.",
      starterCode: "def recommend_approach(needs_live_data: bool, high_volume_low_latency: bool) -> str:\n    if needs_live_data:\n        return 'RAG + Grounded Citations'\n    if high_volume_low_latency:\n        return 'LoRA Fine-Tuned Small Model'\n    return 'Few-Shot Structured Prompting'\n\nprint('Policy Q&A:', recommend_approach(True, False))\nprint('10M Ticket Classifier:', recommend_approach(False, True))\n"
    }
  },
  {
    day: 157,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "LLMOps: Semantic Caching, Quantization & Latency Budgets",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "7xTGNNLPyMI",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Cuts LLM API spend by 40-70% using semantic query caching, model routing, and quantization trade-offs.",
    takeaways: [
      "Cache frequent or semantically equivalent queries (cosine similarity > 0.96) to return instant zero-token responses.",
      "Route simple classification/extraction tasks to fast small models and complex synthesis to frontier models.",
      "Quantization (INT8 / INT4) shrinks model VRAM footprint 2x-4x with minimal quality loss."
    ],
    lab: {
      lang: "python",
      title: "Cosine-Similarity Semantic Response Cache",
      prompt: "Check if an incoming query embedding matches a cached vector with cosine similarity >= 0.96 before calling the LLM.",
      hint: "Compute cosine similarity against cached entry; return cached answer if sim >= 0.96.",
      starterCode: "import numpy as np\n\ncache = [{'vec': np.array([0.91, 0.12, 0.05]), 'answer': 'Returns are accepted within 30 days.'}]\nq_vec = np.array([0.90, 0.13, 0.05])\n\nsim = float(np.dot(cache[0]['vec'], q_vec) / (np.linalg.norm(cache[0]['vec']) * np.linalg.norm(q_vec)))\nprint(f'Cache Similarity: {sim:.4f} -> Cache Hit: {sim >= 0.96}')\n"
    }
  },
  {
    day: 158,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Observability: Tracing Agent Spans, Tokens & Errors",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Instruments every retrieval, SQL tool call, and synthesis step with structured latency and token telemetry.",
    takeaways: [
      "Log nested trace spans (retriever_ms, sql_ms, llm_ms, input_tokens, output_tokens) for every user turn.",
      "Track P95 end-to-end latency and fallback/refusal rates on operational dashboards.",
      "Replay failed production traces directly inside your automated eval suite."
    ],
    lab: {
      lang: "python",
      title: "Structured Agent Trace & Cost Telemetry Summarizer",
      prompt: "Aggregate span latencies and token costs across a multi-step agent trace.",
      hint: "Sum duration_ms and compute total USD/INR token cost.",
      starterCode: "spans = [\n    {'step': 'vector_search', 'ms': 18, 'tokens': 0},\n    {'step': 'sql_tool', 'ms': 12, 'tokens': 0},\n    {'step': 'llm_synthesis', 'ms': 420, 'tokens': 650}\n]\ntotal_ms = sum(s['ms'] for s in spans)\ntotal_tokens = sum(s['tokens'] for s in spans)\nprint(f'End-to-End Latency: {total_ms} ms | Total Tokens: {total_tokens}')\n"
    }
  },
  {
    day: 159,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Multi-Modal Data Extraction: Tables, Charts & PDFs",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "7xTGNNLPyMI",
    altVideoId: "sal78ACtGTc",
    startSec: 0,
    bridge: "Extends document pipelines beyond plain text to extract structured line items from vendor invoices and PDF reports.",
    takeaways: [
      "Preserve table row/column structure when parsing PDFs and invoices into Markdown or JSON.",
      "Cross-check extracted invoice line totals against printed grand totals via deterministic Python assertions.",
      "Store page numbers and bounding metadata for verifiable audit trails."
    ],
    lab: {
      lang: "python",
      title: "Automated Invoice Line-Item Math Reconciliation",
      prompt: "Verify that extracted JSON invoice line items sum accurately to the stated grand total within 0.01 INR.",
      hint: "Compute sum(item['qty'] * item['unit_price']) and compare against stated_total.",
      starterCode: "invoice = {\n    'invoice_no': 'INV-2026-88',\n    'items': [{'sku': 'SP-101', 'qty': 2, 'unit_price': 4999.0}, {'sku': 'SP-102', 'qty': 1, 'unit_price': 1499.0}],\n    'stated_total': 11497.0\n}\ncomputed = sum(i['qty'] * i['unit_price'] for i in invoice['items'])\nassert abs(computed - invoice['stated_total']) < 0.01\nprint(f\"Invoice {invoice['invoice_no']} reconciled: INR {computed:,.2f}\")\n"
    }
  },
  {
    day: 160,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Capstone 6A Design: Architecting the ShopPulse AI Copilot",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Blueprints the full-stack ShopPulse AI Analyst uniting SQLite analytics, hybrid RAG policy search, and ML churn scoring.",
    takeaways: [
      "Define clear tool interfaces, read-only SQL guardrails, and citation formatting contracts.",
      "Design graceful fallback responses when tools return empty rows or low similarity scores.",
      "Prepare end-to-end integration test cases covering SQL, RAG, and hybrid queries."
    ],
    lab: {
      lang: "python",
      title: "Capstone 6A Blueprint: Tool Registry & Health Check",
      prompt: "Register and self-test all 3 ShopPulse AI Copilot capabilities (SQL, RAG, Churn Scorer) in one unified class.",
      hint: "Verify each registered tool returns a non-empty structured dictionary.",
      starterCode: "class ShopPulseCopilot:\n    def __init__(self):\n        self.tools = {\n            'sql_revenue': lambda city: {'city': city, 'revenue_inr': 8997.0},\n            'rag_policy': lambda topic: {'topic': topic, 'citation': '[doc_ret_01]', 'text': '30-day return window'},\n            'ml_churn': lambda cid: {'customer_id': cid, 'churn_prob': 0.74, 'tier': 'HIGH'}\n        }\n\n    def run(self, tool_name: str, arg):\n        return self.tools[tool_name](arg)\n\nbot = ShopPulseCopilot()\nprint(bot.run('sql_revenue', 'Mumbai'))\nprint(bot.run('rag_policy', 'returns'))\nprint(bot.run('ml_churn', 104))\n"
    }
  },
  {
    day: 161,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Capstone 6A Build: SQL + RAG + ML Tool Execution Engine",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "fLvJ8VdHLA0",
    startSec: 0,
    bridge: "Implements the live multi-tool execution engine querying real SQLite tables and vector policy chunks in a single turn.",
    takeaways: [
      "Combine live SQLite relational aggregates with retrieved policy citations in one synthesized response.",
      "Enforce read-only SQL validation before executing any dynamic query.",
      "Keep all intermediate tool outputs structured for auditability."
    ],
    lab: {
      lang: "python",
      title: "Live SQLite + Policy Lookup Integrated Execution",
      prompt: "Query an in-memory SQLite table for Mumbai revenue and attach the matching shipping policy citation.",
      hint: "Execute validated SELECT query and merge with retrieved policy snippet.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (city TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [('Mumbai', 6498.0), ('Mumbai', 2499.0)])\n\nrev = conn.execute(\"SELECT SUM(total_inr) FROM orders WHERE city = 'Mumbai'\").fetchone()[0]\npolicy = '[doc_ship_02] Free express shipping on orders >= 3000 INR.'\nprint(f'Mumbai Revenue: INR {rev:,.2f} | Policy Note: {policy}')\n"
    }
  },
  {
    day: 162,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Capstone 6A Hardening: Red-Teaming & Evaluation Suite",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "bZQun8Y4L2A",
    altVideoId: "F8NKVhkZZWI",
    startSec: 0,
    bridge: "Stress-tests your ShopPulse AI Copilot against SQL injection attempts, out-of-scope questions, and missing-data edge cases.",
    takeaways: [
      "Test adversarial inputs (DROP TABLE injections, prompt overrides) in automated CI regression suites.",
      "Verify abstention accuracy when answering questions outside the knowledge base.",
      "Track pass/fail across accuracy, safety, and latency assertions."
    ],
    lab: {
      lang: "python",
      title: "Adversarial Safety & Abstention Test Suite",
      prompt: "Run 4 automated test assertions verifying SQL injection blocking and safe handling of unknown SKUs.",
      hint: "Assert blocked queries raise ValueError and unknown SKUs return clean fallback.",
      starterCode: "def safe_query(sql: str) -> str:\n    if 'DROP' in sql.upper() or 'DELETE' in sql.upper():\n        raise ValueError('Blocked unsafe SQL')\n    return 'OK'\n\nassert safe_query('SELECT * FROM orders') == 'OK'\ntry:\n    safe_query('DROP TABLE orders;')\n    assert False, 'Should have blocked DROP'\nexcept ValueError:\n    print('Red-team SQL injection check passed!')\n"
    }
  },
  {
    day: 163,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Portfolio Packaging: Architecture Diagrams & Clean Repos",
    instructor: "Kunal Kushwaha",
    duration: "25m",
    videoId: "apGV9Kg7ics",
    altVideoId: "0sOvCWFmrtA",
    startSec: 0,
    bridge: "Packages Months 1-6 into an executive-ready GitHub repository with clear architecture flows, benchmarks, and setup scripts.",
    takeaways: [
      "Lead your README with problem statement, architecture diagram, benchmark table, and 3-command quickstart.",
      "Highlight concrete business metrics (variance reduced, PR-AUC lift, Recall@2, latency ms).",
      "Keep all secrets out of Git history and pin exact dependency versions."
    ],
    lab: {
      lang: "python",
      title: "Portfolio Metrics Summary Card Generator",
      prompt: "Generate a formatted Markdown summary table showcasing all 6 capstone milestones across your 168-day journey.",
      hint: "Print a clean 6-row Markdown table summarizing M1 through M6 deliverables.",
      starterCode: "capstones = [\n    ('M1', 'Python & Git', 'JSON-to-SQLite Ingestion CLI'),\n    ('M2', 'SQL Analytics', 'Cohort Retention & LTV Views'),\n    ('M3', 'NumPy & Pandas', 'Vectorized Funnel & EDA Engine'),\n    ('M4', 'Math & Stats', 'CUPED & A/B Decision Gatekeeper'),\n    ('M5', 'Machine Learning', 'Churn & LTV Scoring Pipeline'),\n    ('M6', 'LLMs & AI Agents', 'Grounded SQL + RAG AI Copilot')\n]\nprint('| Month | Module | Production Deliverable |')\nprint('|---|---|---|')\nfor m, mod, d in capstones:\n    print(f'| {m} | {mod} | {d} |')\n"
    }
  },
  {
    day: 164,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Technical Interview Prep 1: SQL & Python Coding Patterns",
    instructor: "Ankit Bansal",
    duration: "17m",
    videoId: "MpAMjtvarrc",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Sharpens rapid problem-solving across window functions, sessionization, and hash-map algorithms under interview time constraints.",
    takeaways: [
      "Clarify row grain, NULL handling, and tie-breaking rules before writing a single line of SQL or Python.",
      "Master Top-N per group (DENSE_RANK), running totals, and gap-and-island streak patterns.",
      "State time and space complexity (Big-O) explicitly for every Python solution."
    ],
    lab: {
      lang: "python",
      title: "O(N) Two-Sum & Top-K Frequent SKUs Pattern",
      prompt: "Find the top 2 most frequently purchased SKUs in O(N) time using collections.Counter.",
      hint: "Use Counter(skus).most_common(2).",
      starterCode: "from collections import Counter\n\nskus = ['SP-101', 'SP-102', 'SP-101', 'SP-103', 'SP-101', 'SP-102', 'SP-104']\ntop_2 = Counter(skus).most_common(2)\nprint('Top 2 SKUs:', top_2)\n"
    }
  },
  {
    day: 165,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Technical Interview Prep 2: Statistics & A/B Case Studies",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "vemZtEM63GY",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Practices structuring ambiguous product experiments: metric selection, guardrail trade-offs, and novelty diagnosis.",
    takeaways: [
      "Structure A/B case answers: (1) Primary & Guardrail metrics, (2) Power/MDE sizing, (3) SRM & novelty checks, (4) Ship decision.",
      "Explain p-values, confidence intervals, and CUPED variance reduction in plain executive language.",
      "Address network effects and user-level vs session-level randomization units."
    ],
    lab: {
      lang: "python",
      title: "Experiment Trade-Off Decision Matrix Evaluator",
      prompt: "Evaluate an experiment with +4.5% conversion lift (p=0.01) alongside a +1.8% refund guardrail breach.",
      hint: "Flag guardrail breach for root-cause investigation before full rollout.",
      starterCode: "exp = {'conv_lift_pct': 4.5, 'p_val': 0.01, 'refund_delta_pct': 1.8, 'refund_sla_max': 0.5}\nguardrail_ok = exp['refund_delta_pct'] <= exp['refund_sla_max']\nverdict = 'SHIP' if (exp['p_val'] < 0.05 and guardrail_ok) else 'INVESTIGATE GUARDRAIL BREACH'\nprint('Executive Verdict:', verdict)\n"
    }
  },
  {
    day: 166,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Technical Interview Prep 3: ML System Design Walkthrough",
    instructor: "Krish Naik",
    duration: "16m",
    videoId: "pqNCD_5r0IU",
    altVideoId: "OtD8wVaFm6E",
    startSec: 0,
    bridge: "Rehearses end-to-end ML system design from business objective and offline loss to online latency SLAs and drift monitoring.",
    takeaways: [
      "Frame ML systems around business KPIs first, then training labels, leakage-free features, and baseline models.",
      "Contrast offline metrics (PR-AUC, RMSE) with online A/B business metrics (retention rate, net INR profit).",
      "Detail retraining cadence, PSI drift alerts, and fallback heuristics."
    ],
    lab: {
      lang: "python",
      title: "ML System SLA & Fallback Router Check",
      prompt: "Implement a latency-budgeted predictor that falls back to a fast rule heuristic if model inference exceeds 50 ms.",
      hint: "Check latency_ms <= 50; otherwise return rule-based fallback score.",
      starterCode: "def predict_with_fallback(orders: int, latency_ms: float) -> dict:\n    if latency_ms > 50.0:\n        score = 0.70 if orders <= 1 else 0.20\n        return {'source': 'rule_fallback', 'churn_prob': score}\n    return {'source': 'lgbm_model', 'churn_prob': 0.64}\n\nprint('Fast path:', predict_with_fallback(1, 12.0))\nprint('Timeout path:', predict_with_fallback(1, 75.0))\n"
    }
  },
  {
    day: 167,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Technical Interview Prep 4: RAG & AI Agent Architecture Design",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Walks through production RAG and agent architecture trade-offs: hybrid search, reranking, guardrails, and cost optimization.",
    takeaways: [
      "Explain why hybrid BM25 + dense retrieval + reranking beats naive single-vector search.",
      "Detail concrete defenses against hallucinations (grounded citations, refusal prompts) and prompt injections.",
      "Quantify cost and latency savings from semantic caching and small-model routing."
    ],
    lab: {
      lang: "python",
      title: "End-to-End RAG Quality & Latency Readiness Audit",
      prompt: "Verify that a candidate RAG pipeline meets Recall@5 >= 0.85, Faithfulness >= 0.90, and P95 latency <= 1500 ms.",
      hint: "Check all three production SLA thresholds in a release gate function.",
      starterCode: "metrics = {'recall_at_5': 0.89, 'faithfulness': 0.94, 'p95_latency_ms': 1120}\nready = (\n    metrics['recall_at_5'] >= 0.85\n    and metrics['faithfulness'] >= 0.90\n    and metrics['p95_latency_ms'] <= 1500\n)\nprint('Production Launch Gate Passed:', ready)\n"
    }
  },
  {
    day: 168,
    month: 6,
    module: "M6: LLMs & AI Agents",
    title: "Graduation Capstone: Full-Stack ShopPulse Data & AI Platform",
    instructor: "Andrej Karpathy",
    duration: "30m",
    videoId: "bZQun8Y4L2A",
    altVideoId: "F8NKVhkZZWI",
    startSec: 0,
    bridge: "Celebrates Day 168 by running an end-to-end integration test unifying Python ingestion, SQLite analytics, statistical testing, ML scoring, and AI retrieval.",
    takeaways: [
      "You have mastered the complete modern Data Science & AI stack from Python syntax anatomy to production AI agents.",
      "Every layer connects cleanly: raw JSON -> SQLite warehouse -> NumPy/Pandas features -> statistical inference -> ML models -> grounded AI copilot.",
      "Keep shipping real projects, measuring impact rigorously, and iterating with curiosity."
    ],
    lab: {
      lang: "python",
      title: "Day 168 Graduation: Full-Stack ShopPulse End-to-End Pipeline",
      prompt: "Execute the complete 5-stage ShopPulse pipeline: ingest JSON -> query SQLite -> compute stats -> score churn -> retrieve policy.",
      hint: "Run the integrated script and verify all 5 stages output clean results.",
      starterCode: "import json\nimport sqlite3\nimport numpy as np\n\n# 1. Python JSON Ingestion\nraw = '[{\"id\": 1, \"city\": \"Mumbai\", \"rev\": 6498.0}, {\"id\": 2, \"city\": \"Bengaluru\", \"rev\": 8999.0}, {\"id\": 3, \"city\": \"Mumbai\", \"rev\": 2499.0}]'\norders = json.loads(raw)\n\n# 2. SQLite Relational Warehouse\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (id INT, city TEXT, rev REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [(o['id'], o['city'], o['rev']) for o in orders])\nmumbai_rev = conn.execute(\"SELECT SUM(rev) FROM orders WHERE city='Mumbai'\").fetchone()[0]\n\n# 3. NumPy Statistical Summary\nrevs = np.array([o['rev'] for o in orders])\naov = float(revs.mean())\n\n# 4. ML Churn Risk Score\nchurn_prob = round(1.0 / (1.0 + np.exp(-(-1.5 + 0.05 * 45))), 3)\n\n# 5. Grounded AI Copilot Output\nprint(f'168-Day Capstone Complete | Mumbai Rev: INR {mumbai_rev:,.2f} | AOV: INR {aov:,.2f} | Sample Churn Risk: {churn_prob}')\n"
    }
  }
);
