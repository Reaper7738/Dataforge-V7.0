// DataForge // Instinct OS - Decoupled 168-Day Curriculum (Part 1 of 2: Days 1-84)
// Pure ASCII-safe strings for zero-encoding-error GitHub Pages deployment.

window.CURRICULUM = [
  {
    day: 1,
    month: 1,
    module: "M1: Python & Git",
    title: "Python Environment, Variables & Types",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "LKFrQXaoSMQ",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Launches our continuous ShopPulse pipeline by modeling product SKUs, INR prices, and inventory counts.",
    takeaways: [
      "Distinguish int, float, str, and bool primitives and inspect types dynamically.",
      "Format clean monetary and inventory logs using Python f-strings.",
      "Follow snake_case naming rules and avoid shadowing built-in Python names."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Catalog Item Calculator",
      prompt: "Compute subtotal, 18% GST, and total payable INR for 3 units of a Mechanical Keyboard priced at 4999.0 INR.",
      hint: "Multiply unit_price by quantity, compute gst = subtotal * 0.18, and format with :.2f.",
      starterCode: "sku = 'SP-101'\nproduct_name = 'Mechanical Keyboard Pro'\nunit_price_inr = 4999.0\nquantity = 3\ngst_rate = 0.18\n\nsubtotal = unit_price_inr * quantity\ngst_amount = subtotal * gst_rate\ntotal_payable = subtotal + gst_amount\n\nprint(f'{sku} | {product_name} | Total: INR {total_payable:,.2f}')\n"
    }
  },
  {
    day: 2,
    month: 1,
    module: "M1: Python & Git",
    title: "Control Flow & While/For Loops",
    instructor: "Bro Code",
    duration: "7m",
    videoId: "rRTjPnVooxE",
    altVideoId: "LKFrQXaoSMQ",
    startSec: 0,
    bridge: "Scales Day 1 single-item calculations across batches of incoming ShopPulse orders with conditional discount rules.",
    takeaways: [
      "Use if/elif/else branches to apply tiered cart discounts and shipping rules.",
      "Iterate over order batches with for loops and guard termination in while loops.",
      "Apply break and continue to skip cancelled or zero-value transactions."
    ],
    lab: {
      lang: "python",
      title: "Batch Order Revenue & Discount Scanner",
      prompt: "Loop through a list of order totals in INR, skip cancelled (negative) entries, and apply a 10% discount on orders above 5000 INR.",
      hint: "Use continue for values <= 0 and multiply values > 5000 by 0.90.",
      starterCode: "raw_orders_inr = [6498.0, -500.0, 2499.0, 8999.0, 0.0, 1499.0]\nnet_revenue = 0.0\nvalid_count = 0\n\nfor amount in raw_orders_inr:\n    if amount <= 0:\n        continue\n    final_amt = amount * 0.90 if amount > 5000 else amount\n    net_revenue += final_amt\n    valid_count += 1\n\nprint(f'Valid Orders: {valid_count} | Net Revenue: INR {net_revenue:,.2f}')\n"
    }
  },
  {
    day: 3,
    month: 1,
    module: "M1: Python & Git",
    title: "Functions, Scope & Return Values",
    instructor: "Bro Code",
    duration: "11m",
    videoId: "89cGQjB5R4M",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Refactors Day 2 inline loops into reusable, testable pricing functions that our later ETL pipeline can import.",
    takeaways: [
      "Encapsulate business logic in pure functions with clear parameters and return values.",
      "Understand local vs global variable scope to prevent accidental side effects.",
      "Provide sensible default arguments for tax rates and currency rounding."
    ],
    lab: {
      lang: "python",
      title: "Reusable Net Invoice Function",
      prompt: "Write calculate_invoice(amount_inr, discount_pct=0.0, gst_pct=0.18) returning the rounded final invoice amount.",
      hint: "Apply discount first: discounted = amount_inr * (1 - discount_pct), then add GST.",
      starterCode: "def calculate_invoice(amount_inr, discount_pct=0.0, gst_pct=0.18):\n    discounted = amount_inr * (1.0 - discount_pct)\n    total = discounted * (1.0 + gst_pct)\n    return round(total, 2)\n\nprint('Standard:', calculate_invoice(2499.0))\nprint('Gold Tier:', calculate_invoice(8999.0, discount_pct=0.10))\n"
    }
  },
  {
    day: 4,
    month: 1,
    module: "M1: Python & Git",
    title: "Flexible Signatures: *args & **kwargs",
    instructor: "Bro Code",
    duration: "15m",
    videoId: "Vh__2V2tXUM",
    altVideoId: "89cGQjB5R4M",
    startSec: 0,
    bridge: "Prepares our ingestion functions to accept variable-length item bundles (*args) and optional metadata tags (**kwargs).",
    takeaways: [
      "Pack variable positional arguments into a tuple using *args.",
      "Capture arbitrary keyword metadata into a dictionary using **kwargs.",
      "Unpack lists and dicts cleanly when forwarding arguments across helper functions."
    ],
    lab: {
      lang: "python",
      title: "Dynamic Cart Bundler",
      prompt: "Create build_order_summary(order_id, *item_prices, **meta) that sums variable item prices and prints customer metadata.",
      hint: "Use sum(item_prices) for *args and meta.get('city', 'Unknown') for **kwargs.",
      starterCode: "def build_order_summary(order_id, *item_prices, **meta):\n    subtotal = round(sum(item_prices), 2)\n    city = meta.get('city', 'N/A')\n    tier = meta.get('tier', 'Standard')\n    return {'order_id': order_id, 'items': len(item_prices), 'subtotal_inr': subtotal, 'city': city, 'tier': tier}\n\nprint(build_order_summary(1001, 4999.0, 1499.0, 799.0, city='Mumbai', tier='Gold'))\n"
    }
  },
  {
    day: 5,
    month: 1,
    module: "M1: Python & Git",
    title: "Dictionaries & Hash-Map Lookups",
    instructor: "Indently",
    duration: "9m",
    videoId: "u0yr9B3nH8c",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Models ShopPulse product catalogs and JSON records as O(1) hash maps using safe dictionary accessors.",
    takeaways: [
      "Use .get(key, default) and .setdefault() to avoid KeyError crashes on sparse records.",
      "Merge configuration dictionaries cleanly with the | union operator.",
      "Iterate over .items(), .keys(), and .values() without redundant lookups."
    ],
    lab: {
      lang: "python",
      title: "O(1) SKU Catalog Lookup & Stock Updater",
      prompt: "Build a SKU-indexed catalog dictionary, safely query a missing SKU with .get(), and update stock counts.",
      hint: "Use catalog.get(sku, {'name': 'Unknown', 'stock': 0}) for safe fallback lookups.",
      starterCode: "catalog = {\n    'SP-101': {'name': 'Mechanical Keyboard', 'price': 4999.0, 'stock': 14},\n    'SP-102': {'name': 'Ergonomic Mouse', 'price': 1499.0, 'stock': 32},\n}\n\nfor sku in ['SP-101', 'SP-999']:\n    item = catalog.get(sku, {'name': 'Unlisted SKU', 'price': 0.0, 'stock': 0})\n    print(sku, '->', item['name'], '| Stock:', item['stock'])\n"
    }
  },
  {
    day: 6,
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
      "Replace O(n) list membership scans with O(1) hash-set lookups.",
      "Compute customer overlap, new signups, and churn using &, |, and - set operators.",
      "Deduplicate raw event streams while preserving data integrity."
    ],
    lab: {
      lang: "python",
      title: "Cohort Overlap & Churn Detector via Sets",
      prompt: "Given Jan and Feb active customer ID sets, compute retained buyers, new Feb buyers, and churned Jan buyers.",
      hint: "Retained = jan & feb, New = feb - jan, Churned = jan - feb.",
      starterCode: "jan_buyers = {101, 102, 103, 104, 105}\nfeb_buyers = {102, 104, 106, 107}\n\nretained = jan_buyers & feb_buyers\nnew_feb = feb_buyers - jan_buyers\nchurned = jan_buyers - feb_buyers\n\nprint('Retained:', sorted(retained))\nprint('New in Feb:', sorted(new_feb))\nprint('Churned:', sorted(churned))\n"
    }
  },
  {
    day: 7,
    month: 1,
    module: "M1: Python & Git",
    title: "List, Dict & Set Comprehensions",
    instructor: "Indently",
    duration: "13m",
    videoId: "HmZSlcZASGw",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Transforms multi-line filtering loops from Day 2 into concise, readable one-pass data transformations.",
    takeaways: [
      "Write clean list, dict, and set comprehensions with inline filter predicates.",
      "Know when a comprehension improves clarity versus when a standard loop is more readable.",
      "Normalize strings and build lookup tables in a single expression."
    ],
    lab: {
      lang: "python",
      title: "One-Pass Order Normalization",
      prompt: "Use a dict comprehension to map order_id -> rounded INR total for all 'Delivered' orders.",
      hint: "{o['id']: round(o['total'], 2) for o in orders if o['status'] == 'Delivered'}",
      starterCode: "orders = [\n    {'id': 1001, 'status': 'Delivered', 'total': 6498.456},\n    {'id': 1002, 'status': 'Cancelled', 'total': 1499.00},\n    {'id': 1003, 'status': 'Delivered', 'total': 8999.123},\n]\n\ndelivered_totals = {o['id']: round(o['total'], 2) for o in orders if o['status'] == 'Delivered'}\nprint(delivered_totals)\n"
    }
  },
  {
    day: 8,
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
      "Pair parallel columns safely with zip() and track row indices with enumerate().",
      "Validate dataset invariants concisely using any() and all().",
      "Use generator expressions inside sum() or max() to avoid materializing temporary lists."
    ],
    lab: {
      lang: "python",
      title: "Parallel Column Alignment & Data Quality Check",
      prompt: "Zip product names with prices, verify all prices are positive using all(), and print ranked items via enumerate().",
      hint: "Use all(p > 0 for p in prices) and enumerate(zip(names, prices), start=1).",
      starterCode: "products = ['Keyboard', 'Mouse', 'USB-C Hub', 'Headphones']\nprices = [4999.0, 1499.0, 2499.0, 8999.0]\n\nis_valid = all(p > 0 for p in prices)\nprint('All prices positive:', is_valid)\n\nfor idx, (name, price) in enumerate(zip(products, prices), start=1):\n    print(f'{idx}. {name}: INR {price:.2f}')\n"
    }
  },
  {
    day: 9,
    month: 1,
    module: "M1: Python & Git",
    title: "Clean Code Habits & Type Hints",
    instructor: "Indently",
    duration: "18m",
    videoId: "I72uD8ED73U",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 0,
    bridge: "Adds static type annotations and guard clauses so your ShopPulse ingestion codebase scales without silent type bugs.",
    takeaways: [
      "Annotate function signatures with list[dict], float, and optional return types.",
      "Flatten deeply nested if-blocks using early-return guard clauses.",
      "Separate pure data transformation logic from I/O side effects."
    ],
    lab: {
      lang: "python",
      title: "Type-Annotated Revenue Aggregator",
      prompt: "Add full Python type hints and an empty-list guard clause to compute average order value (AOV).",
      hint: "Check if not amounts: return 0.0 at the top of the function.",
      starterCode: "def compute_aov(amounts: list[float]) -> float:\n    if not amounts:\n        return 0.0\n    return round(sum(amounts) / len(amounts), 2)\n\nprint('AOV:', compute_aov([6498.0, 2499.0, 8999.0]))\nprint('Empty:', compute_aov([]))\n"
    }
  },
  {
    day: 10,
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
      "Catch specific exceptions (ValueError, KeyError, ZeroDivisionError) rather than bare except.",
      "Use try/except/else/finally blocks to guarantee resource cleanup.",
      "Quarantine corrupt rows with diagnostic messages instead of halting batch jobs."
    ],
    lab: {
      lang: "python",
      title: "Resilient Price Parser",
      prompt: "Parse a list of messy string prices into floats, catching ValueError and logging bad entries.",
      hint: "Wrap float(raw) in try/except ValueError inside a loop.",
      starterCode: "raw_prices = ['4999.0', '1499.50', 'N/A', '2499.0', 'corrupt']\nclean_prices: list[float] = []\n\nfor raw in raw_prices:\n    try:\n        clean_prices.append(float(raw))\n    except ValueError:\n        print(f'[WARN] Skipping invalid price token: {raw}')\n\nprint('Parsed:', clean_prices)\n"
    }
  },
  {
    day: 11,
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
      "Always use 'with open(..., encoding=\"utf-8\")' so file handles close deterministically.",
      "Differentiate write mode ('w') from append mode ('a') for incremental logs.",
      "Format delimiter-separated audit records cleanly."
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
    day: 12,
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
      "Parse header-driven CSV files cleanly with csv.DictReader and io.StringIO.",
      "Strip whitespace and cast string fields into numeric types during ingestion.",
      "Handle missing optional columns gracefully."
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
    day: 13,
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
    day: 14,
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
    day: 15,
    month: 1,
    module: "M1: Python & Git",
    title: "OOP Part 1: Classes & Data Models",
    instructor: "Bro Code",
    duration: "30m",
    videoId: "IbMDCwVm63M",
    altVideoId: "I72uD8ED73U",
    startSec: 0,
    bridge: "Upgrades loose dictionaries into strongly structured Product and Order classes with built-in validation methods.",
    takeaways: [
      "Define clean __init__ constructors and instance attributes.",
      "Attach domain methods (like apply_discount or margin) directly to data entities.",
      "Differentiate class-level constants from per-instance state."
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
    day: 16,
    month: 1,
    module: "M1: Python & Git",
    title: "OOP Part 2: Inheritance & Composition",
    instructor: "Bro Code",
    duration: "30m",
    videoId: "IbMDCwVm63M",
    altVideoId: "I72uD8ED73U",
    startSec: 1800,
    bridge: "Models specialized data connectors (CSVConnector, APIConnector) inheriting from a shared BaseConnector contract.",
    takeaways: [
      "Share common connection and logging logic via parent base classes and super().",
      "Prefer composition (an Order has-a list of LineItems) over deep inheritance trees.",
      "Avoid duplicate boilerplate across multiple ingestion sources."
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
    day: 17,
    month: 1,
    module: "M1: Python & Git",
    title: "OOP Part 3: Polymorphism & Duck Typing",
    instructor: "Bro Code",
    duration: "30m",
    videoId: "IbMDCwVm63M",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 3600,
    bridge: "Lets our ETL runner call .extract() uniformly across CSV, JSON, and API connectors without if/else type checks.",
    takeaways: [
      "Design interchangeable pipeline steps that share a common method interface.",
      "Leverage Python duck typing to swap live API sources with local fixtures during testing.",
      "Keep orchestration loops agnostic to underlying storage formats."
    ],
    lab: {
      lang: "python",
      title: "Polymorphic Pipeline Runner",
      prompt: "Create CSVSource and JSONSource classes, each implementing extract() -> list[dict], and run them in a single loop.",
      hint: "Iterate over sources = [CSVSource(), JSONSource()] and extend a master records list.",
      starterCode: "class CSVSource:\n    def extract(self) -> list[dict]:\n        return [{'order_id': 1001, 'source': 'csv'}]\n\nclass JSONSource:\n    def extract(self) -> list[dict]:\n        return [{'order_id': 1002, 'source': 'json'}]\n\nall_records = []\nfor src in [CSVSource(), JSONSource()]:\n    all_records.extend(src.extract())\n\nprint('Unified Batch:', all_records)\n"
    }
  },
  {
    day: 18,
    month: 1,
    module: "M1: Python & Git",
    title: "OOP Part 4: @property & Magic Methods",
    instructor: "Bro Code",
    duration: "35m",
    videoId: "IbMDCwVm63M",
    altVideoId: "I72uD8ED73U",
    startSec: 5400,
    bridge: "Adds @property validation guards (preventing negative prices) and clean __repr__ / __len__ dunder methods.",
    takeaways: [
      "Use @property getters and setters to enforce domain invariants transparently.",
      "Implement __repr__ for unambiguous debugging logs and __len__ for container objects.",
      "Protect internal state without breaking clean attribute syntax."
    ],
    lab: {
      lang: "python",
      title: "Validated OrderCart with @property & __len__",
      prompt: "Implement OrderCart with __len__ returning item count and a @property total_inr computing the cart sum.",
      hint: "Define def __len__(self): return len(self.items) and @property def total_inr(self).",
      starterCode: "class OrderCart:\n    def __init__(self, order_id: int):\n        self.order_id = order_id\n        self.items: list[tuple[str, float]] = []\n\n    def add(self, sku: str, price: float) -> None:\n        if price < 0:\n            raise ValueError('Price cannot be negative')\n        self.items.append((sku, price))\n\n    def __len__(self) -> int:\n        return len(self.items)\n\n    @property\n    def total_inr(self) -> float:\n        return round(sum(p for _, p in self.items), 2)\n\ncart = OrderCart(1005)\ncart.add('SP-101', 4999.0)\ncart.add('SP-105', 799.0)\nprint(f'Items: {len(cart)} | Total: INR {cart.total_inr}')\n"
    }
  },
  {
    day: 19,
    month: 1,
    module: "M1: Python & Git",
    title: "Unit Testing ETL Functions",
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
    bridge: "Uses unittest.mock to test our Day 14 API client offline against simulated HTTP 200 and HTTP 503 responses.",
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
    title: "Test-Driven Development (TDD) Workflow",
    instructor: "NeuralNine",
    duration: "16m",
    videoId: "Y6Q3ZWXIvms",
    altVideoId: "UL0opWf3DeM",
    startSec: 0,
    bridge: "Applies Red-Green-Refactor to build a bulletproof SKU deduplicator before committing code to Git.",
    takeaways: [
      "Write a failing specification test first (Red), implement minimal code to pass (Green), then clean up (Refactor).",
      "Use TDD to clarify edge-case requirements before writing complex parsing logic.",
      "Build confidence to refactor aggressively without breaking contracts."
    ],
    lab: {
      lang: "python",
      title: "TDD Order-Preserving Deduplicator",
      prompt: "Implement deduplicate_skus(skus) so all TDD assertions pass while preserving first-seen order.",
      hint: "Track seen items in a set while appending unseen items to a result list.",
      starterCode: "def deduplicate_skus(skus: list[str]) -> list[str]:\n    seen: set[str] = set()\n    unique: list[str] = []\n    for s in skus:\n        if s not in seen:\n            seen.add(s)\n            unique.append(s)\n    return unique\n\nassert deduplicate_skus(['SP-1', 'SP-2', 'SP-1', 'SP-3', 'SP-2']) == ['SP-1', 'SP-2', 'SP-3']\nassert deduplicate_skus([]) == []\nprint('TDD assertions green!')\n"
    }
  },
  {
    day: 22,
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
    day: 23,
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
      prompt: "Write a validator verifying branch names start with feat/, fix/, or docs/ and commit messages follow conventional prefixes.",
      hint: "Use tuple prefixes with str.startswith(('feat/', 'fix/', 'docs/')).",
      starterCode: "def validate_branch(name: str) -> bool:\n    return name.startswith(('feat/', 'fix/', 'docs/', 'chore/'))\n\nfor b in ['feat/sqlite-ingest', 'random-test', 'fix/null-price']:\n    print(f'{b:22s} -> valid={validate_branch(b)}')\n"
    }
  },
  {
    day: 24,
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
    day: 25,
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
    day: 26,
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
    day: 27,
    month: 1,
    module: "M1: Python & Git",
    title: "Capstone 1A: ShopPulse API Ingestion CLI",
    instructor: "Bro Code",
    duration: "15m",
    videoId: "JVQNywo4AbU",
    altVideoId: "r4MLHHLctKw",
    startSec: 0,
    bridge: "Combines functions, classes, JSON parsing, exception handling, and assertions into a unified Month 1 ingestion pipeline.",
    takeaways: [
      "Assemble an end-to-end Extract-Validate-Transform pipeline in clean modular Python.",
      "Log rejected records separately from valid normalized output.",
      "Verify pipeline output invariants with automated assertions."
    ],
    lab: {
      lang: "python",
      title: "Capstone 1A: Complete JSON Order Normalizer",
      prompt: "Process a raw JSON feed of ShopPulse orders: filter valid Delivered orders, compute GST, and output summary metrics.",
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
    bridge: "Translates Day 7 Python list-comprehension filters into push-down SQL WHERE predicates.",
    takeaways: [
      "Combine AND, OR, and NOT with explicit parentheses to avoid operator-precedence bugs.",
      "Filter sets with IN, closed ranges with BETWEEN, and text patterns with LIKE.",
      "Understand why filtering early in WHERE reduces downstream compute."
    ],
    lab: {
      lang: "sql",
      title: "High-Value Delivered Orders Filter",
      prompt: "Find all Delivered orders in Mumbai or Bengaluru with total_inr between 2500 and 10000.",
      hint: "Join orders with customers or filter orders WHERE status = 'Delivered' AND total_inr BETWEEN 2500 AND 10000.",
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
    bridge: "Uses short-circuiting EXISTS / NOT EXISTS predicates to isolate customers who have never left a product review.",
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
      prompt: "Detect days exceeding the 90th-percentile revenue threshold and generate structured annotation coordinates.",
      hint: "Compute thresh = np.percentile(rev, 90) and filter rows above thresh.",
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
      prompt: "Write an eda_profile(df) function returning row count, duplicate count, null count, and numeric column means.",
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
// Paste directly beneath Part 1 (Days 1-84) in curriculum.js.

window.CURRICULUM.push(
  {
    day: 85,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Bridge 3->4: PMF, PDF & CDF Probability Foundations",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "YXLVjCKVP7U",
    altVideoId: "oI3hZJqXJuc",
    startSec: 0,
    bridge: "Formalizes the empirical histograms from Month 3 EDA into exact Probability Mass, Density, and Cumulative Distribution functions.",
    takeaways: [
      "Distinguish discrete PMF probabilities P(X = k) from continuous PDF densities where area equals probability.",
      "Compute tail probabilities P(X <= x) and quantiles directly with Cumulative Distribution Functions (CDF).",
      "Recognize why individual continuous point probabilities equal zero."
    ],
    lab: {
      lang: "python",
      title: "Bridge 3->4: Normal & Binomial CDF Tail Evaluator",
      prompt: "Use scipy.stats.norm to compute the probability that a ShopPulse order (mean=3500, sd=900) exceeds 5000 INR.",
      hint: "Use 1 - stats.norm.cdf(5000, loc=3500, scale=900) or stats.norm.sf(5000, loc=3500, scale=900).",
      starterCode: "from scipy import stats\n\nprob_over_5k = stats.norm.sf(5000, loc=3500, scale=900)\nprob_between = stats.norm.cdf(4500, loc=3500, scale=900) - stats.norm.cdf(2500, loc=3500, scale=900)\nprint(f'P(Order > 5000 INR): {prob_over_5k:.4f}')\nprint(f'P(2500 <= Order <= 4500): {prob_between:.4f}')\n"
    }
  },
  {
    day: 86,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Binomial Distribution for Checkout Conversions",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "J8jNoF-K8E8",
    altVideoId: "YXLVjCKVP7U",
    startSec: 0,
    bridge: "Models n independent checkout sessions with conversion probability p to compute exact A/B test tail likelihoods.",
    takeaways: [
      "Identify the four Binomial conditions: fixed trials n, independent events, two outcomes, constant probability p.",
      "Compute exact k-success probabilities via binom.pmf(k, n, p).",
      "Evaluate extreme conversion spikes using survival probabilities binom.sf(k - 1, n, p)."
    ],
    lab: {
      lang: "python",
      title: "Exact Binomial Conversion Probability",
      prompt: "Given n=200 checkout visitors and baseline p=0.08, compute the probability of observing 24 or more conversions.",
      hint: "Use stats.binom.sf(23, n=200, p=0.08).",
      starterCode: "from scipy import stats\n\np_spike = stats.binom.sf(23, n=200, p=0.08)\nexpected = 200 * 0.08\nprint(f'Expected Conversions: {expected:.1f} | P(X >= 24): {p_spike:.4f}')\n"
    }
  },
  {
    day: 87,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Poisson Distribution for Order Arrivals & Traffic",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "BbLfVtuagent",
    altVideoId: "J8jNoF-K8E8",
    startSec: 0,
    bridge: "Models hourly order arrival rates (lambda) so ShopPulse engineering can size server capacity and detect outages.",
    takeaways: [
      "Model rare or independent event counts per fixed interval using rate parameter lambda.",
      "Note the defining Poisson property: Mean = Variance = lambda.",
      "Detect traffic drops or flash-sale surges using Poisson tail probabilities."
    ],
    lab: {
      lang: "python",
      title: "Hourly Order Arrival Anomaly Detector",
      prompt: "If ShopPulse averages lambda=18 orders/hour, compute the probability of receiving 30+ orders in a peak hour.",
      hint: "Use stats.poisson.sf(29, mu=18).",
      starterCode: "from scipy import stats\n\np_surge = stats.poisson.sf(29, mu=18)\nprint(f'P(Orders >= 30 | lambda=18): {p_surge:.5f}')\n"
    }
  },
  {
    day: 88,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Normal Distribution, Z-Scores & Empirical Rule",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "rzFX5NWojp0",
    altVideoId: "YXLVjCKVP7U",
    startSec: 0,
    bridge: "Standardizes heterogeneous metrics onto a unit-free Z-score scale (mean=0, sd=1) for anomaly detection and feature scaling.",
    takeaways: [
      "Convert raw measurements into standard deviations from the mean via Z = (x - mu) / sigma.",
      "Apply the 68-95-99.7 rule to spot extreme latency or basket anomalies.",
      "Connect Z-scores directly to StandardScaler in Month 5 Scikit-Learn pipelines."
    ],
    lab: {
      lang: "python",
      title: "Vectorized Z-Score Outlier Flagging",
      prompt: "Compute Z-scores for a NumPy array of API response latencies (ms) and flag entries with |Z| > 2.5.",
      hint: "z = (lat - lat.mean()) / lat.std(); outliers = lat[np.abs(z) > 2.5].",
      starterCode: "import numpy as np\n\nlatencies_ms = np.array([112, 118, 105, 121, 115, 119, 108, 490, 114, 116], dtype=float)\nz_scores = (latencies_ms - latencies_ms.mean()) / latencies_ms.std()\nprint('Z-scores:', np.round(z_scores, 2))\nprint('Outliers (|Z| > 2.5):', latencies_ms[np.abs(z_scores) > 2.5])\n"
    }
  },
  {
    day: 89,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Central Limit Theorem (CLT) & Sampling Distributions",
    instructor: "3Blue1Brown",
    duration: "18m",
    videoId: "zeJD6dqJ5lo",
    altVideoId: "YAlJCEDH2uY",
    startSec: 0,
    bridge: "Explains why sample means of heavily skewed ShopPulse revenue data become normally distributed as sample size n grows.",
    takeaways: [
      "Understand why the sampling distribution of the mean approaches Normal regardless of population skew.",
      "Compute Standard Error SE = sigma / sqrt(n) and see why 4x sample size halves uncertainty.",
      "Bridge raw skewed data to parametric Z and t confidence intervals."
    ],
    lab: {
      lang: "python",
      title: "Monte Carlo Central Limit Theorem Simulation",
      prompt: "Draw 2,000 sample means (each of size n=40) from a skewed exponential distribution and verify normality.",
      hint: "Generate (2000, 40) exponential draws and take .mean(axis=1).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nsample_means = rng.exponential(scale=1000.0, size=(2000, 40)).mean(axis=1)\nprint(f'Mean of Sample Means: {sample_means.mean():.2f} (True: 1000.0)')\nprint(f'Empirical SE: {sample_means.std():.2f} | Theoretical SE: {1000.0 / np.sqrt(40):.2f}')\n"
    }
  },
  {
    day: 90,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Confidence Intervals & Margin of Error",
    instructor: "StatQuest",
    duration: "12m",
    videoId: "TqOeMYtOc1w",
    altVideoId: "YAlJCEDH2uY",
    startSec: 0,
    bridge: "Replaces fragile single-number KPI estimates with calibrated 95% confidence intervals for executive reporting.",
    takeaways: [
      "Construct 95% confidence intervals using sample mean +/- t_crit * SE.",
      "Interpret confidence intervals properly as long-run capture frequency rather than posterior probability.",
      "Compare overlapping vs separated intervals across experiment arms."
    ],
    lab: {
      lang: "python",
      title: "95% Confidence Interval for Average Order Value",
      prompt: "Compute the 95% t-confidence interval for a sample of 35 ShopPulse order values.",
      hint: "Use stats.t.interval(0.95, df=len(x)-1, loc=x.mean(), scale=stats.sem(x)).",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nrng = np.random.default_rng(10)\norders = rng.normal(loc=4200, scale=850, size=35)\nci_low, ci_high = stats.t.interval(0.95, df=len(orders)-1, loc=orders.mean(), scale=stats.sem(orders))\nprint(f'Sample Mean: INR {orders.mean():.2f} | 95% CI: [INR {ci_low:.2f}, INR {ci_high:.2f}]')\n"
    }
  },
  {
    day: 91,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Non-Parametric Bootstrap Resampling",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "Xz0x-8-cgaQ",
    altVideoId: "TqOeMYtOc1w",
    startSec: 0,
    bridge: "Computes confidence intervals for medians, 95th percentiles, and ratios where closed-form formulas fail.",
    takeaways: [
      "Resample observed data with replacement B=5,000 times to approximate the sampling distribution.",
      "Extract percentile bootstrap intervals [2.5%, 97.5%] for skewed revenue medians.",
      "Make zero parametric normality assumptions."
    ],
    lab: {
      lang: "python",
      title: "5,000-Iteration Bootstrap CI for Median Basket",
      prompt: "Bootstrap the median of a right-skewed order array 5,000 times and print the 95% confidence interval.",
      hint: "Use rng.choice(data, size=(5000, len(data)), replace=True) and np.median(..., axis=1).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\ndata = np.array([1499, 1899, 2298, 2499, 2799, 3298, 4999, 6498, 8999, 19500], dtype=float)\nboots = rng.choice(data, size=(5000, len(data)), replace=True)\nboot_medians = np.median(boots, axis=1)\nci = np.percentile(boot_medians, [2.5, 97.5])\nprint(f'Observed Median: {np.median(data):.2f} | 95% Bootstrap CI: [{ci[0]:.2f}, {ci[1]:.2f}]')\n"
    }
  },
  {
    day: 92,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Hypothesis Testing, Null Models & p-Values",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "5koKbTCySjU",
    altVideoId: "0oc49DyA3hU",
    startSec: 0,
    bridge: "Formalizes the decision rule for evaluating whether a product change beat random noise.",
    takeaways: [
      "Frame clear Null (H0: no effect) and Alternative (H1: real lift) hypotheses before looking at results.",
      "Interpret a p-value accurately: P(data as extreme | H0 is true), NOT P(H0 is true).",
      "Separate statistical significance (p < alpha) from practical business significance."
    ],
    lab: {
      lang: "python",
      title: "Two-Sided Permutation p-Value Simulator",
      prompt: "Run a 5,000-shuffle permutation test comparing two checkout variants and compute the empirical p-value.",
      hint: "Shuffle combined outcomes, split into two groups, and count how often |diff| >= observed_diff.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(7)\nctrl = rng.binomial(1, 0.08, size=500)\ntreat = rng.binomial(1, 0.12, size=500)\nobs_diff = abs(treat.mean() - ctrl.mean())\n\ncombined = np.concatenate([ctrl, treat])\ncount_extreme = 0\nfor _ in range(5000):\n    perm = rng.permutation(combined)\n    if abs(perm[500:].mean() - perm[:500].mean()) >= obs_diff:\n        count_extreme += 1\n\nprint(f'Observed Lift: {obs_diff*100:.2f}% | Permutation p-value: {count_extreme/5000:.4f}')\n"
    }
  },
  {
    day: 93,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Type I/II Errors, Statistical Power & Sample Size",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "Rsc5znwR5FA",
    altVideoId: "5koKbTCySjU",
    startSec: 0,
    bridge: "Calculates required sample size per arm before launching an A/B test so experiments are neither underpowered nor wasteful.",
    takeaways: [
      "Balance false positives (alpha = 0.05) against false negatives (beta = 0.20, Power = 80%).",
      "Understand how Minimum Detectable Effect (MDE) drives required sample size inversely squared.",
      "Commit to fixed sample horizons to avoid peeking inflation."
    ],
    lab: {
      lang: "python",
      title: "A/B Test Sample Size Per Arm Calculator",
      prompt: "Compute required visitors per arm to detect a +2.0% lift over an 8.0% baseline conversion at 80% power and alpha=0.05.",
      hint: "Use normal approximation: n = 2 * ((z_alpha + z_beta)**2 * p_bar * (1 - p_bar)) / (p2 - p1)**2.",
      starterCode: "import numpy as np\nfrom scipy import stats\n\np1, p2 = 0.08, 0.10\np_bar = (p1 + p2) / 2\nz_alpha = stats.norm.ppf(1 - 0.05 / 2)\nz_beta = stats.norm.ppf(0.80)\nn_per_arm = int(np.ceil(2 * ((z_alpha + z_beta) ** 2) * p_bar * (1 - p_bar) / ((p2 - p1) ** 2)))\nprint(f'Required Sample Size per Arm: {n_per_arm:,} visitors')\n"
    }
  },
  {
    day: 94,
    month: 4,
    module: "M4: Stats & A/B",
    title: "One-Sample & Two-Sample Welch's t-Tests",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "0Pd3dc1GcHc",
    altVideoId: "5koKbTCySjU",
    startSec: 0,
    bridge: "Compares continuous revenue-per-user across A/B variants without assuming equal group variances.",
    takeaways: [
      "Default to Welch's two-sample t-test (equal_var=False) over Student's t-test.",
      "Verify sample size robustness against skewed revenue distributions.",
      "Report t-statistic, p-value, and mean difference together."
    ],
    lab: {
      lang: "python",
      title: "Welch's t-Test on Variant Basket Revenue",
      prompt: "Run scipy.stats.ttest_ind(..., equal_var=False) comparing Control vs Variant basket values.",
      hint: "t_stat, p_val = stats.ttest_ind(variant_b, control, equal_var=False).",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nrng = np.random.default_rng(21)\ncontrol = rng.normal(3200, 750, size=400)\nvariant_b = rng.normal(3360, 820, size=400)\n\nt_stat, p_val = stats.ttest_ind(variant_b, control, equal_var=False)\nprint(f'Mean Lift: INR {variant_b.mean() - control.mean():.2f} | t={t_stat:.3f}, p={p_val:.4f}')\n"
    }
  },
  {
    day: 95,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Comparing Proportions: Z-Test & Chi-Square Test",
    instructor: "StatQuest",
    duration: "13m",
    videoId: "7_cs1YlZoug",
    altVideoId: "0Pd3dc1GcHc",
    startSec: 0,
    bridge: "Evaluates categorical conversion funnels and multi-variant contingency tables using Chi-Square independence tests.",
    takeaways: [
      "Build 2x2 conversion contingency tables (Converted vs Not Converted x Control vs Treatment).",
      "Run scipy.stats.chi2_contingency() and check expected cell counts >= 5.",
      "Verify Sample Ratio Mismatch (SRM) with a Chi-Square goodness-of-fit check first."
    ],
    lab: {
      lang: "python",
      title: "Chi-Square Conversion & SRM Audit",
      prompt: "Run chi2_contingency on a 2x2 checkout conversion table (Control: 164/2000, Variant: 208/2000).",
      hint: "Pass [[164, 1836], [208, 1792]] into stats.chi2_contingency().",
      starterCode: "from scipy import stats\n\ntable = [\n    [164, 2000 - 164],\n    [208, 2000 - 208]\n]\nchi2, p_val, dof, _ = stats.chi2_contingency(table)\nprint(f'Chi2={chi2:.3f}, dof={dof}, p-value={p_val:.4f}')\n"
    }
  },
  {
    day: 96,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Multi-Arm Experiments: ANOVA & Multiple Testing (FDR)",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "NF5_btOaCig",
    altVideoId: "7_cs1YlZoug",
    startSec: 0,
    bridge: "Prevents false-positive inflation when testing 3+ checkout designs or slicing metrics across 10 cities simultaneously.",
    takeaways: [
      "Run One-Way ANOVA (f_oneway) before pairwise post-hoc comparisons across 3+ arms.",
      "Understand why running 20 tests at alpha=0.05 yields ~64% chance of at least one false positive.",
      "Apply Bonferroni or Benjamini-Hochberg FDR corrections to p-values."
    ],
    lab: {
      lang: "python",
      title: "One-Way ANOVA Across 3 Checkout Variants",
      prompt: "Compare basket revenue across Control, One-Click UPI, and Express Card arms using stats.f_oneway().",
      hint: "f_stat, p_val = stats.f_oneway(arm_a, arm_b, arm_c).",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nrng = np.random.default_rng(99)\narm_a = rng.normal(3100, 700, 300)\narm_b = rng.normal(3380, 720, 300)\narm_c = rng.normal(3150, 690, 300)\n\nf_stat, p_val = stats.f_oneway(arm_a, arm_b, arm_c)\nprint(f'ANOVA F={f_stat:.3f}, p-value={p_val:.5f}')\n"
    }
  },
  {
    day: 97,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Non-Parametric Rank Tests: Mann-Whitney U",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "bt1_17c3G0A",
    altVideoId: "0Pd3dc1GcHc",
    startSec: 0,
    bridge: "Tests heavily skewed whale-dominated revenue distributions reliably when extreme outliers distort t-tests.",
    takeaways: [
      "Use Mann-Whitney U (ranksum) when extreme outliers violate mean-based assumptions.",
      "Interpret rank dominance cleanly alongside median differences.",
      "Combine Mann-Whitney U with bootstrap median CIs for bulletproof revenue readouts."
    ],
    lab: {
      lang: "python",
      title: "Mann-Whitney U Test on Skewed Whale Revenue",
      prompt: "Run scipy.stats.mannwhitneyu on two heavy-tailed order arrays containing extreme corporate orders.",
      hint: "u_stat, p_val = stats.mannwhitneyu(treat, ctrl, alternative='two-sided').",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nctrl = np.array([1200, 1499, 1800, 2100, 2400, 2600, 45000])\ntreat = np.array([1900, 2300, 2700, 3100, 3400, 3900, 4200])\n\nu_stat, p_val = stats.mannwhitneyu(treat, ctrl, alternative='two-sided')\nprint(f'Mann-Whitney U={u_stat}, p-value={p_val:.4f}')\n"
    }
  },
  {
    day: 98,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Bayesian A/B Testing: Beta-Binomial Updating",
    instructor: "3Blue1Brown",
    duration: "15m",
    videoId: "HZGCoVF3YvM",
    altVideoId: "U_85TaXbeIo",
    startSec: 0,
    bridge: "Computes intuitive direct probabilities like P(Variant B beats Control) using conjugate Beta priors.",
    takeaways: [
      "Update a Beta(alpha, beta) prior with k conversions and (n - k) non-conversions to get Beta(alpha+k, beta+n-k).",
      "Sample posterior draws via Monte Carlo to compute P(p_B > p_A) and Expected Loss.",
      "Communicate experiment risk clearly to product managers."
    ],
    lab: {
      lang: "python",
      title: "Beta-Binomial Bayesian A/B Win Probability",
      prompt: "Compute P(Variant B > Control) via 50,000 posterior Beta draws given Control (82/1000) and Variant B (106/1000).",
      hint: "Sample rng.beta(1 + k, 1 + n - k, size=50000) for both arms and compare (b_samples > a_samples).mean().",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\npost_a = rng.beta(1 + 82, 1 + 1000 - 82, size=50000)\npost_b = rng.beta(1 + 106, 1 + 1000 - 106, size=50000)\n\nprob_b_wins = (post_b > post_a).mean()\nexpected_lift = (post_b - post_a).mean() * 100\nprint(f'P(B > A): {prob_b_wins*100:.2f}% | Expected Lift: +{expected_lift:.2f}%')\n"
    }
  },
  {
    day: 99,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Linear Algebra for Data: Vectors, Dot Products & Span",
    instructor: "3Blue1Brown",
    duration: "11m",
    videoId: "LyGKycYT2v0",
    altVideoId: "fNk_zzaMoSs",
    startSec: 0,
    bridge: "Builds geometric intuition for dot products, cosine similarity (used later in RAG embeddings), and linear projections.",
    takeaways: [
      "Interpret dot products geometrically as projection length times magnitude.",
      "Compute cosine similarity between feature vectors and document embeddings.",
      "Understand linear independence and rank of feature matrices."
    ],
    lab: {
      lang: "python",
      title: "Cosine Similarity Between Customer Feature Vectors",
      prompt: "Compute the dot product and cosine similarity between two normalized customer preference vectors.",
      hint: "cos_sim = (a @ b) / (np.linalg.norm(a) * np.linalg.norm(b)).",
      starterCode: "import numpy as np\n\na = np.array([5.0, 1.0, 4.0])\nb = np.array([4.8, 1.2, 3.9])\ncos_sim = (a @ b) / (np.linalg.norm(a) * np.linalg.norm(b))\nprint(f'Dot Product: {a @ b:.2f} | Cosine Similarity: {cos_sim:.4f}')\n"
    }
  },
  {
    day: 100,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Matrices, Transformations & Eigenvalues",
    instructor: "3Blue1Brown",
    duration: "17m",
    videoId: "PFDu9oVAE-g",
    altVideoId: "kYB8IZa5AuE",
    startSec: 0,
    bridge: "Unlocks covariance matrices, Principal Component Analysis (PCA), and neural network linear layers.",
    takeaways: [
      "View matrices as linear transformations stretching and rotating feature space.",
      "Understand eigenvectors as invariant directions and eigenvalues as variance/stretch factors.",
      "Compute covariance matrices and eigendecompositions with np.linalg.eigh()."
    ],
    lab: {
      lang: "python",
      title: "Covariance Matrix & Eigenvalue Variance Share",
      prompt: "Compute the covariance matrix of a standardized 2D dataset and inspect its eigenvalues.",
      hint: "cov = np.cov(X.T); eigvals, eigvecs = np.linalg.eigh(cov).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nx1 = rng.normal(0, 1, 500)\nx2 = 0.85 * x1 + rng.normal(0, 0.3, 500)\nX = np.column_stack([x1, x2])\n\neigvals, _ = np.linalg.eigh(np.cov(X.T))\nexplained = eigvals[::-1] / eigvals.sum()\nprint('Eigenvalues:', np.round(eigvals[::-1], 3))\nprint('Variance Explained:', np.round(explained * 100, 1), '%')\n"
    }
  },
  {
    day: 101,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Calculus Intuition: Derivatives & Chain Rule",
    instructor: "3Blue1Brown",
    duration: "17m",
    videoId: "YG15m2VwSjA",
    altVideoId: "WUvTyaaNkzM",
    startSec: 0,
    bridge: "Explains partial derivatives and the Chain Rule—the mathematical engine powering gradient descent and backpropagation.",
    takeaways: [
      "Interpret derivatives as local sensitivity (slope) of loss with respect to model weights.",
      "Apply the Chain Rule to propagate error gradients through nested composite functions.",
      "Verify analytical gradients numerically using finite differences."
    ],
    lab: {
      lang: "python",
      title: "Numerical vs Analytical Derivative Verifier",
      prompt: "Verify that the numerical central-difference gradient of f(w) = (3w - 12)^2 at w=5 matches analytical 6*(3w - 12).",
      hint: "num_grad = (f(w + eps) - f(w - eps)) / (2 * eps).",
      starterCode: "def f(w: float) -> float:\n    return (3 * w - 12) ** 2\n\nw = 5.0\neps = 1e-6\nnum_grad = (f(w + eps) - f(w - eps)) / (2 * eps)\nana_grad = 6 * (3 * w - 12)\nprint(f'Numerical: {num_grad:.6f} | Analytical: {ana_grad:.6f}')\n"
    }
  },
  {
    day: 102,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Gradient Descent Optimization from Scratch",
    instructor: "StatQuest",
    duration: "23m",
    videoId: "sDv4f4s2SB8",
    altVideoId: "IHZwWFHWa-w",
    startSec: 0,
    bridge: "Implements iterative gradient descent on Mean Squared Error loss before we call Scikit-Learn's .fit() in Month 5.",
    takeaways: [
      "Update parameters opposite the gradient: w = w - lr * grad.",
      "Observe how learning rates that are too large diverge while tiny rates crawl.",
      "Watch MSE loss converge smoothly across training epochs."
    ],
    lab: {
      lang: "python",
      title: "1D Linear Regression via Pure Gradient Descent",
      prompt: "Fit y = w * x + b to synthetic revenue data over 200 gradient descent steps and print learned w and b.",
      hint: "Compute pred = w * x + b; dw = (2/n) * np.sum((pred - y) * x); db = (2/n) * np.sum(pred - y).",
      starterCode: "import numpy as np\n\nx = np.array([1.0, 2.0, 3.0, 4.0, 5.0])\ny = np.array([1500.0, 3000.0, 4500.0, 6000.0, 7500.0])\nw, b, lr = 0.0, 0.0, 0.05\n\nfor _ in range(300):\n    pred = w * x + b\n    dw = (2 / len(x)) * np.sum((pred - y) * x)\n    db = (2 / len(x)) * np.sum(pred - y)\n    w -= lr * dw\n    b -= lr * db\n\nprint(f'Learned Slope w={w:.2f} (True 1500), Intercept b={b:.2f}')\n"
    }
  },
  {
    day: 103,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Correlation vs Causation & Confounding Bias",
    instructor: "StatQuest",
    duration: "11m",
    videoId: "xZ_z8KWkhXE",
    altVideoId: "ROpbdO-gJyI",
    startSec: 0,
    bridge: "Guards your executive readouts against spurious correlations, Simpson's Paradox, and survivorship bias.",
    takeaways: [
      "Distinguish Pearson linear correlation from monotonic Spearman rank correlation.",
      "Identify hidden confounding variables that drive both treatment and outcome.",
      "Understand why randomization in A/B tests eliminates confounding bias."
    ],
    lab: {
      lang: "python",
      title: "Pearson vs Spearman Correlation Comparison",
      prompt: "Compare Pearson r and Spearman rho on a non-linear exponential spend curve.",
      hint: "Use stats.pearsonr(x, y) and stats.spearmanr(x, y).",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nx = np.arange(1, 15, dtype=float)\ny = np.exp(0.45 * x)\n\nr, _ = stats.pearsonr(x, y)\nrho, _ = stats.spearmanr(x, y)\nprint(f'Pearson r: {r:.4f} | Spearman rho: {rho:.4f}')\n"
    }
  },
  {
    day: 104,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Ordinary Least Squares (OLS) & R-Squared",
    instructor: "StatQuest",
    duration: "27m",
    videoId: "nk2CQITm_eo",
    altVideoId: "zITIFTsivN8",
    startSec: 0,
    bridge: "Connects Month 4 statistical inference directly to Month 5 supervised regression modeling.",
    takeaways: [
      "Interpret slope coefficients, standard errors, p-values, and R-squared variance explained.",
      "Understand why Adjusted R-squared penalizes useless predictor variables.",
      "Inspect model fit cleanly using scipy.stats.linregress()."
    ],
    lab: {
      lang: "python",
      title: "OLS Regression: Ad Spend vs Weekly Orders",
      prompt: "Fit an OLS regression predicting weekly orders from marketing spend and print slope, intercept, and R-squared.",
      hint: "res = stats.linregress(ad_spend, orders); r2 = res.rvalue ** 2.",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nad_spend_k = np.array([10, 15, 20, 25, 30, 35, 40], dtype=float)\nweekly_orders = np.array([125, 168, 210, 248, 295, 332, 385], dtype=float)\n\nres = stats.linregress(ad_spend_k, weekly_orders)\nprint(f'Slope: {res.slope:.2f} orders/1k INR | Intercept: {res.intercept:.2f} | R2: {res.rvalue**2:.4f} | p={res.pvalue:.2e}')\n"
    }
  },
  {
    day: 105,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Regression Diagnostics: Residuals & Homoscedasticity",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "zITIFTsivN8",
    altVideoId: "nk2CQITm_eo",
    startSec: 0,
    bridge: "Checks residual patterns, autocorrelation, and variance stability so your predictive models generalize reliably.",
    takeaways: [
      "Verify that OLS residuals center around zero with constant variance (homoscedasticity).",
      "Detect non-linear curvature when residual plots show U-shaped patterns.",
      "Spot high-leverage outliers that distort slope estimates."
    ],
    lab: {
      lang: "python",
      title: "OLS Residual Diagnostic Audit",
      prompt: "Compute residuals (y - y_hat) for an OLS fit and check residual mean, std, and max absolute error.",
      hint: "y_hat = res.intercept + res.slope * x; residuals = y - y_hat.",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nx = np.array([10, 15, 20, 25, 30, 35, 40], dtype=float)\ny = np.array([125, 168, 210, 248, 295, 332, 385], dtype=float)\nres = stats.linregress(x, y)\nresiduals = y - (res.intercept + res.slope * x)\nprint(f'Residual Mean: {residuals.mean():.4f} | RMSE: {np.sqrt(np.mean(residuals**2)):.2f}')\n"
    }
  },
  {
    day: 106,
    month: 4,
    module: "M4: Stats & A/B",
    title: "A/B Pitfalls: Peeking, SRM & Novelty Effects",
    instructor: "Ronny Kohavi",
    duration: "25m",
    videoId: "f0Z5102N7hM",
    altVideoId: "5koKbTCySjU",
    startSec: 0,
    bridge: "Protects real-world experimentation programs from telemetry bugs, Sample Ratio Mismatch, and early-peeking false positives.",
    takeaways: [
      "Always run an SRM check (50/50 split verification) before trusting any A/B metric.",
      "Never stop an experiment early just because p dipped below 0.05 on Day 2.",
      "Account for novelty effects and guardrail metrics (page latency, refund rate)."
    ],
    lab: {
      lang: "python",
      title: "Sample Ratio Mismatch (SRM) Automated Gate",
      prompt: "Use scipy.stats.chisquare to test whether a 50,420 vs 49,580 traffic split exhibits Sample Ratio Mismatch (p < 0.001).",
      hint: "stat, p_val = stats.chisquare([50420, 49580], f_exp=[50000, 50000]).",
      starterCode: "from scipy import stats\n\nobserved = [50420, 49580]\nexpected = [50000, 50000]\nstat, p_val = stats.chisquare(observed, f_exp=expected)\nprint(f'SRM Chi2={stat:.2f}, p-value={p_val:.5f} | SRM Alert={p_val < 0.001}')\n"
    }
  },
  {
    day: 107,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Variance Reduction in A/B Tests (CUPED)",
    instructor: "Statsig",
    duration: "14m",
    videoId: "A19m472wP3w",
    altVideoId: "f0Z5102N7hM",
    startSec: 0,
    bridge: "Uses pre-experiment user spend covariates to shrink A/B variance by 30-50% and reach decisions faster.",
    takeaways: [
      "Subtract theta * (X_pre - mean(X_pre)) from experiment outcome Y where theta = Cov(Y, X_pre) / Var(X_pre).",
      "Keep treatment assignment strictly independent of pre-experiment covariates.",
      "Achieve tighter confidence intervals without increasing user traffic."
    ],
    lab: {
      lang: "python",
      title: "CUPED Variance Reduction Benchmark",
      prompt: "Compute theta = cov(Y, X_pre)/var(X_pre) and compare standard error before vs after CUPED adjustment.",
      hint: "y_cuped = y - theta * (x_pre - x_pre.mean()).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nx_pre = rng.normal(3000, 800, 1000)\ny = 0.75 * x_pre + rng.normal(800, 400, 1000)\n\ntheta = np.cov(y, x_pre)[0, 1] / np.var(x_pre)\ny_cuped = y - theta * (x_pre - x_pre.mean())\nprint(f'Raw Std: {y.std():.2f} -> CUPED Std: {y_cuped.std():.2f} ({100*(1 - y_cuped.var()/y.var()):.1f}% variance cut)')\n"
    }
  },
  {
    day: 108,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Capstone 4A: Full A/B Experiment Readout Engine",
    instructor: "StatQuest",
    duration: "15m",
    videoId: "5koKbTCySjU",
    altVideoId: "f0Z5102N7hM",
    startSec: 0,
    bridge: "Combines SRM gating, conversion Z/Chi-Square tests, Welch revenue t-tests, and bootstrap CIs into an automated Ship/Hold decision report.",
    takeaways: [
      "Execute a complete experiment readout: SRM Gate -> Primary Conversion -> Secondary AOV Guardrail -> Decision.",
      "Report relative lift, 95% CI, and p-value in a clean executive summary.",
      "Document ship criteria clearly for stakeholders."
    ],
    lab: {
      lang: "python",
      title: "Capstone 4A: Automated Ship/Hold Readout Pipeline",
      prompt: "Evaluate Control vs One-Click Checkout across SRM, conversion rate, and AOV, and print a structured Ship recommendation.",
      hint: "Verify SRM p >= 0.001 and conversion Chi-Square p < 0.05 before recommending SHIP.",
      starterCode: "import numpy as np\nfrom scipy import stats\n\nn_c, conv_c = 2500, 205\nn_t, conv_t = 2510, 256\n_, srm_p = stats.chisquare([n_c, n_t])\n_, conv_p, _, _ = stats.chi2_contingency([[conv_c, n_c - conv_c], [conv_t, n_t - conv_t]])\nlift_pct = ((conv_t / n_t) - (conv_c / n_c)) / (conv_c / n_c) * 100\n\ndecision = 'SHIP' if (srm_p >= 0.001 and conv_p < 0.05 and lift_pct > 0) else 'HOLD'\nprint(f'SRM p={srm_p:.4f} | Lift=+{lift_pct:.1f}% | Conv p={conv_p:.4f} | Decision: {decision}')\n"
    }
  },
  {
    day: 109,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Bridge 4->5: Train/Test Split & Data Leakage Prevention",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "fSytzGwwBVw",
    altVideoId: "EuBBz3bI-aA",
    startSec: 0,
    bridge: "Hands off Month 4 statistical inference directly to Month 5 Machine Learning by shifting from in-sample p-values to out-of-sample generalization.",
    takeaways: [
      "Split data into train and test sets BEFORE fitting scalers, encoders, or imputers.",
      "Understand why fitting preprocessing on the full dataset leaks test distribution statistics.",
      "Use stratified splits (stratify=y) on imbalanced churn datasets."
    ],
    lab: {
      lang: "python",
      title: "Bridge 4->5: Leakage-Free Stratified Split",
      prompt: "Split a synthetic ShopPulse customer dataset into 80/20 train/test sets using train_test_split(..., stratify=y).",
      hint: "from sklearn.model_selection import train_test_split.",
      starterCode: "import numpy as np\nfrom sklearn.model_selection import train_test_split\n\nrng = np.random.default_rng(42)\nX = rng.normal(size=(200, 4))\ny = np.array([0]*160 + [1]*40)\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\nprint(f'Train churn rate: {y_train.mean():.2f} | Test churn rate: {y_test.mean():.2f}')\n"
    }
  },
  {
    day: 110,
    month: 4,
    module: "M4: Stats & A/B",
    title: "Bridge 4->5: Bias-Variance Tradeoff & Cross-Validation",
    instructor: "StatQuest",
    duration: "7m",
    videoId: "EuBBz3bI-aA",
    altVideoId: "fSytzGwwBVw",
    startSec: 0,
    bridge: "Completes Month 4 by connecting model complexity (underfitting vs overfitting) to k-fold cross-validation.",
    takeaways: [
      "Diagnose high bias (underfitting both train and test) vs high variance (low train error, high test error).",
      "Evaluate model stability across k=5 folds with cross_val_score().",
      "Enter Month 5 ready to build production Scikit-Learn pipelines."
    ],
    lab: {
      lang: "python",
      title: "Bridge 4->5: 5-Fold Cross-Validation Baseline",
      prompt: "Evaluate a Ridge regression baseline across 5 CV folds and print mean and std R-squared.",
      hint: "scores = cross_val_score(Ridge(), X, y, cv=5, scoring='r2').",
      starterCode: "import numpy as np\nfrom sklearn.linear_model import Ridge\nfrom sklearn.model_selection import cross_val_score\n\nrng = np.random.default_rng(42)\nX = rng.normal(size=(150, 3))\ny = 3.5 * X[:, 0] - 2.0 * X[:, 1] + rng.normal(0, 0.5, 150)\n\nscores = cross_val_score(Ridge(alpha=1.0), X, y, cv=5, scoring='r2')\nprint(f'5-Fold R2: {scores.mean():.4f} +/- {scores.std():.4f}')\n"
    }
  },
  {
    day: 111,
    month: 5,
    module: "M5: Machine Learning",
    title: "Bridge 4->5: Scikit-Learn Estimator API & Pipelines",
    instructor: "Data School",
    duration: "14m",
    videoId: "0B5eIE_1vpU",
    altVideoId: "fSytzGwwBVw",
    startSec: 0,
    bridge: "Wraps Day 109 leakage-free preprocessing and Day 104 regression into a single unified Scikit-Learn Pipeline.",
    takeaways: [
      "Master the consistent .fit(X, y), .transform(X), and .predict(X) estimator contract.",
      "Chain SimpleImputer, StandardScaler, and estimators inside sklearn.pipeline.Pipeline.",
      "Guarantee identical transformations at training and inference time."
    ],
    lab: {
      lang: "python",
      title: "Leakage-Free Imputer + Scaler + Ridge Pipeline",
      prompt: "Build a Pipeline with SimpleImputer(strategy='median'), StandardScaler(), and Ridge() and evaluate on test data.",
      hint: "pipe = make_pipeline(SimpleImputer(strategy='median'), StandardScaler(), Ridge()).",
      starterCode: "import numpy as np\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import Ridge\n\nX_train = np.array([[1.0, 100.0], [2.0, np.nan], [3.0, 300.0], [4.0, 400.0]])\ny_train = np.array([1500.0, 2900.0, 4600.0, 6100.0])\nX_test = np.array([[5.0, 500.0]])\n\npipe = make_pipeline(SimpleImputer(strategy='median'), StandardScaler(), Ridge())\npipe.fit(X_train, y_train)\nprint('Predicted Revenue:', np.round(pipe.predict(X_test), 2))\n"
    }
  },
  {
    day: 112,
    month: 5,
    module: "M5: Machine Learning",
    title: "ColumnTransformer for Mixed Numeric & Categorical Data",
    instructor: "Data School",
    duration: "14m",
    videoId: "irHhDIYMe3c",
    altVideoId: "0B5eIE_1vpU",
    startSec: 0,
    bridge: "Routes ShopPulse numerical columns (tenure, basket) and categorical columns (city, tier) cleanly without manual get_dummies drift.",
    takeaways: [
      "Route numeric and categorical subsets independently via ColumnTransformer.",
      "Configure OneHotEncoder(handle_unknown='ignore') so unseen cities at inference never crash production.",
      "Inspect engineered feature names via preprocessor.get_feature_names_out()."
    ],
    lab: {
      lang: "python",
      title: "Mixed-Schema ColumnTransformer Pipeline",
      prompt: "Build a ColumnTransformer scaling ['tenure', 'orders'] and one-hot encoding ['city'] with handle_unknown='ignore'.",
      hint: "ColumnTransformer([('num', StandardScaler(), ['tenure', 'orders']), ('cat', OneHotEncoder(handle_unknown='ignore'), ['city'])]).",
      starterCode: "import pandas as pd\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\n\ndf = pd.DataFrame({\n    'tenure': [30, 120, 240],\n    'orders': [1, 4, 9],\n    'city': ['Mumbai', 'Bengaluru', 'Pune']\n})\nct = ColumnTransformer([\n    ('num', StandardScaler(), ['tenure', 'orders']),\n    ('cat', OneHotEncoder(handle_unknown='ignore'), ['city'])\n])\nX_trans = ct.fit_transform(df)\nprint('Output shape:', X_trans.shape)\nprint('Features:', ct.get_feature_names_out())\n"
    }
  },
  {
    day: 113,
    month: 5,
    module: "M5: Machine Learning",
    title: "Regularized Regression: Ridge (L2) & Lasso (L1)",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "Q81RR3yKn30",
    altVideoId: "NGf0voTMlcs",
    startSec: 0,
    bridge: "Prevents overfitting on correlated features by shrinking weights (Ridge) or driving noisy coefficients to exact zero (Lasso).",
    takeaways: [
      "Understand how L2 penalty (alpha * sum(w^2)) stabilizes collinear features.",
      "Use L1 penalty (alpha * sum(|w|)) for automatic sparse feature selection.",
      "Always standardize features before applying Ridge or Lasso regularization."
    ],
    lab: {
      lang: "python",
      title: "Lasso Sparse Feature Selection on Noisy Predictors",
      prompt: "Fit Lasso(alpha=0.2) on 5 features where only the first 2 carry true signal and inspect learned coef_.",
      hint: "Check np.round(model.coef_, 3) to see noise weights shrink toward zero.",
      starterCode: "import numpy as np\nfrom sklearn.linear_model import Lasso\n\nrng = np.random.default_rng(42)\nX = rng.normal(size=(200, 5))\ny = 4.0 * X[:, 0] - 2.5 * X[:, 1] + rng.normal(0, 0.3, 200)\n\nmodel = Lasso(alpha=0.2).fit(X, y)\nprint('Learned Coefficients:', np.round(model.coef_, 3))\n"
    }
  },
  {
    day: 114,
    month: 5,
    module: "M5: Machine Learning",
    title: "Logistic Regression & Log-Odds for Churn Prediction",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "yIYKR4sgzI8",
    altVideoId: "vN5cNN2-HWE",
    startSec: 0,
    bridge: "Shifts from predicting continuous revenue to predicting calibrated churn probabilities P(churn=1 | x) via the sigmoid function.",
    takeaways: [
      "Map linear log-odds into calibrated [0, 1] probabilities using the sigmoid curve.",
      "Extract class probabilities with .predict_proba(X)[:, 1] rather than hard 0.5 thresholds.",
      "Interpret feature log-odds coefficients for business explainability."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Customer Churn Probability Scorer",
      prompt: "Train LogisticRegression on days_since_last_order and support_tickets and output churn probabilities.",
      hint: "Use clf.predict_proba(X_test)[:, 1].",
      starterCode: "import numpy as np\nfrom sklearn.linear_model import LogisticRegression\n\n# [days_inactive, support_tickets]\nX = np.array([[5, 0], [12, 0], [45, 2], [60, 3], [8, 1], [55, 2]])\ny = np.array([0, 0, 1, 1, 0, 1])\n\nclf = LogisticRegression().fit(X, y)\nprobs = clf.predict_proba(np.array([[10, 0], [50, 2]]))[:, 1]\nprint('Churn Probabilities [Active User, At-Risk User]:', np.round(probs, 3))\n"
    }
  },
  {
    day: 115,
    month: 5,
    module: "M5: Machine Learning",
    title: "Classification Metrics: Precision, Recall, F1 & ROC-AUC",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "4jRBRDbJemM",
    altVideoId: "Kdsp6soqA7o",
    startSec: 0,
    bridge: "Aligns model evaluation with business costs (retention coupon cost vs lost customer LTV) instead of misleading raw accuracy.",
    takeaways: [
      "Compute Confusion Matrix, Precision, Recall, and F1-score cleanly.",
      "Prefer Precision-Recall AUC (PR-AUC) over ROC-AUC when positive churn/fraud classes are rare.",
      "Tune probability decision thresholds to maximize net retention profit."
    ],
    lab: {
      lang: "python",
      title: "Threshold Tuning & Precision/Recall Tradeoff",
      prompt: "Compare precision_score and recall_score at probability thresholds 0.50 vs 0.30.",
      hint: "preds = (y_prob >= thresh).astype(int).",
      starterCode: "import numpy as np\nfrom sklearn.metrics import precision_score, recall_score, roc_auc_score\n\ny_true = np.array([0, 0, 1, 0, 1, 1, 0, 1])\ny_prob = np.array([0.12, 0.25, 0.42, 0.35, 0.78, 0.61, 0.18, 0.38])\n\nfor th in [0.50, 0.35]:\n    preds = (y_prob >= th).astype(int)\n    print(f'Thresh {th:.2f} -> Precision: {precision_score(y_true, preds):.2f} | Recall: {recall_score(y_true, preds):.2f}')\nprint(f'ROC-AUC: {roc_auc_score(y_true, y_prob):.3f}')\n"
    }
  },
  {
    day: 116,
    month: 5,
    module: "M5: Machine Learning",
    title: "Decision Trees, Gini Impurity & Information Gain",
    instructor: "StatQuest",
    duration: "17m",
    videoId: "_L39rN6gz7Y",
    altVideoId: "7VeUPuFGJHk",
    startSec: 0,
    bridge: "Introduces non-linear axis-aligned rule splits that naturally capture feature interactions without manual polynomial terms.",
    takeaways: [
      "Understand how recursive splits minimize Gini impurity or Shannon entropy.",
      "Control tree overfitting via max_depth, min_samples_leaf, and ccp_alpha pruning.",
      "Recognize why single deep trees suffer high variance."
    ],
    lab: {
      lang: "python",
      title: "Depth-Constrained Decision Tree Classifier",
      prompt: "Compare train vs test accuracy of an unconstrained tree (max_depth=None) vs pruned tree (max_depth=3).",
      hint: "Fit DecisionTreeClassifier(max_depth=d, random_state=42) for d in [None, 3].",
      starterCode: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\n\nX, y = make_classification(n_samples=400, n_features=8, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\n\nfor d in [None, 3]:\n    dt = DecisionTreeClassifier(max_depth=d, random_state=42).fit(X_tr, y_tr)\n    print(f'max_depth={str(d):4s} -> Train Acc: {dt.score(X_tr, y_tr):.3f} | Test Acc: {dt.score(X_te, y_te):.3f}')\n"
    }
  },
  {
    day: 117,
    month: 5,
    module: "M5: Machine Learning",
    title: "Random Forests: Bootstrap Aggregation & Feature Subsampling",
    instructor: "StatQuest",
    duration: "10m",
    videoId: "J4Wdy0Wc_xQ",
    altVideoId: "_L39rN6gz7Y",
    startSec: 0,
    bridge: "Slashes single-tree variance by averaging hundreds of decorrelated trees trained on bootstrap samples.",
    takeaways: [
      "Combine bagging (bootstrap sampling) with random feature subsets (max_features='sqrt') to decorrelate trees.",
      "Use out-of-bag (oob_score=True) validation for built-in generalization estimates.",
      "Establish a strong tabular baseline before moving to gradient boosting."
    ],
    lab: {
      lang: "python",
      title: "Random Forest with Out-of-Bag (OOB) Validation",
      prompt: "Train a 150-tree RandomForestClassifier with oob_score=True and compare oob_score_ to test accuracy.",
      hint: "rf = RandomForestClassifier(n_estimators=150, oob_score=True, random_state=42).",
      starterCode: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\nX, y = make_classification(n_samples=500, n_features=10, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)\n\nrf = RandomForestClassifier(n_estimators=150, oob_score=True, random_state=42).fit(X_tr, y_tr)\nprint(f'OOB Score: {rf.oob_score_:.3f} | Test Acc: {rf.score(X_te, y_te):.3f}')\n"
    }
  },
  {
    day: 118,
    month: 5,
    module: "M5: Machine Learning",
    title: "Gradient Boosting Machines (GBM) Intuition",
    instructor: "StatQuest",
    duration: "21m",
    videoId: "3CC4N4z3GJc",
    altVideoId: "2xudPOBz-vs",
    startSec: 0,
    bridge: "Transitions from parallel bagging to sequential residual-fitting trees that dominate tabular benchmarks.",
    takeaways: [
      "Understand how each shallow weak learner fits the negative gradient (pseudo-residuals) of previous trees.",
      "Balance learning_rate (shrinkage) against n_estimators and max_depth.",
      "Use HistGradientBoostingClassifier in Scikit-Learn for native missing-value support and speed."
    ],
    lab: {
      lang: "python",
      title: "HistGradientBoosting vs Random Forest Benchmark",
      prompt: "Compare 5-fold cross-validated accuracy between RandomForestClassifier and HistGradientBoostingClassifier.",
      hint: "from sklearn.ensemble import HistGradientBoostingClassifier.",
      starterCode: "from sklearn.datasets import make_classification\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.ensemble import RandomForestClassifier, HistGradientBoostingClassifier\n\nX, y = make_classification(n_samples=600, n_features=12, n_informative=6, random_state=42)\nfor name, clf in [('RandomForest', RandomForestClassifier(random_state=42)), ('HistGBM', HistGradientBoostingClassifier(random_state=42))]:\n    sc = cross_val_score(clf, X, y, cv=5).mean()\n    print(f'{name:14s} 5-Fold Acc: {sc:.4f}')\n"
    }
  },
  {
    day: 119,
    month: 5,
    module: "M5: Machine Learning",
    title: "XGBoost & LightGBM: Regularized Tree Boosting",
    instructor: "StatQuest",
    duration: "24m",
    videoId: "OtD8wVaFm6E",
    altVideoId: "3CC4N4z3GJc",
    startSec: 0,
    bridge: "Explains second-order Hessian split gains, L1/L2 leaf regularization, and early stopping in modern GBDT engines.",
    takeaways: [
      "Understand similarity score gain, gamma pruning threshold, and lambda leaf regularization.",
      "Prevent overfitting with early_stopping_rounds on a held-out validation split.",
      "Tune subsample and colsample_bytree to improve tree diversity."
    ],
    lab: {
      lang: "python",
      title: "Early-Stopped Gradient Boosting Tuning",
      prompt: "Train HistGradientBoostingClassifier with early_stopping=True and inspect n_iter_ used before stopping.",
      hint: "hgb = HistGradientBoostingClassifier(max_iter=300, early_stopping=True, random_state=42).",
      starterCode: "from sklearn.datasets import make_classification\nfrom sklearn.ensemble import HistGradientBoostingClassifier\n\nX, y = make_classification(n_samples=800, n_features=10, random_state=42)\nhgb = HistGradientBoostingClassifier(max_iter=300, learning_rate=0.05, early_stopping=True, random_state=42)\nhgb.fit(X, y)\nprint(f'Stopped at iteration {hgb.n_iter_} / 300 | Validation score: {hgb.validation_score_[-1]:.4f}')\n"
    }
  },
  {
    day: 120,
    month: 5,
    module: "M5: Machine Learning",
    title: "Hyperparameter Search & Time-Series Cross-Validation",
    instructor: "Data School",
    duration: "14m",
    videoId: "Gol_qOgRqfA",
    altVideoId: "0B5eIE_1vpU",
    startSec: 0,
    bridge: "Automates model tuning safely—and enforces TimeSeriesSplit so future sales never leak into past training folds.",
    takeaways: [
      "Prefer RandomizedSearchCV over exhaustive GridSearchCV in multi-dimensional spaces.",
      "Use TimeSeriesSplit (expanding window CV) on chronological revenue and demand datasets.",
      "Inspect best_params_ and best_score_ systematically."
    ],
    lab: {
      lang: "python",
      title: "TimeSeriesSplit Expanding Window Validation",
      prompt: "Generate 4 chronological train/test index splits using TimeSeriesSplit(n_splits=4) and print fold sizes.",
      hint: "tscv = TimeSeriesSplit(n_splits=4); iterate over tscv.split(X).",
      starterCode: "import numpy as np\nfrom sklearn.model_selection import TimeSeriesSplit\n\nX = np.arange(100).reshape(-1, 1)\ntscv = TimeSeriesSplit(n_splits=4)\nfor fold, (tr_idx, te_idx) in enumerate(tscv.split(X), 1):\n    print(f'Fold {fold}: Train [0..{tr_idx[-1]}] ({len(tr_idx)} rows) -> Test [{te_idx[0]}..{te_idx[-1]}] ({len(te_idx)} rows)')\n"
    }
  },
  {
    day: 121,
    month: 5,
    module: "M5: Machine Learning",
    title: "Model Explainability: Permutation Importance & SHAP",
    instructor: "StatQuest",
    duration: "18m",
    videoId: "VB9uV-x0gtg",
    altVideoId: "J4Wdy0Wc_xQ",
    startSec: 0,
    bridge: "Opens the black box so you can explain to ShopPulse leadership exactly why a customer was flagged as high churn risk.",
    takeaways: [
      "Prefer permutation_importance on held-out test data over biased split-count impurity importance.",
      "Understand Shapley additive explanations (SHAP) for per-customer local attributions.",
      "Detect subtle target leakage when one feature exhibits suspiciously high importance."
    ],
    lab: {
      lang: "python",
      title: "Held-Out Permutation Feature Importance",
      prompt: "Compute permutation_importance on a fitted RandomForestClassifier and rank features by mean score drop.",
      hint: "res = permutation_importance(clf, X_test, y_test, n_repeats=10, random_state=42).",
      starterCode: "import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.inspection import permutation_importance\n\nX, y = make_classification(n_samples=400, n_features=5, n_informative=2, n_redundant=0, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nrf = RandomForestClassifier(random_state=42).fit(X_tr, y_tr)\n\nimp = permutation_importance(rf, X_te, y_te, n_repeats=10, random_state=42)\nfor idx in np.argsort(imp.importances_mean)[::-1]:\n    print(f'Feature {idx}: importance={imp.importances_mean[idx]:.4f}')\n"
    }
  },
  {
    day: 122,
    month: 5,
    module: "M5: Machine Learning",
    title: "Unsupervised Learning: K-Means & Silhouette Analysis",
    instructor: "StatQuest",
    duration: "9m",
    videoId: "4b5d3muPQmA",
    altVideoId: "4r_5b3_8N_8",
    startSec: 0,
    bridge: "Discovers natural ShopPulse customer personas (Whales, Bargain Hunters, Dormant) from RFM features without labels.",
    takeaways: [
      "Always standardize RFM features before running Euclidean-distance K-Means.",
      "Select cluster count k using both Elbow inertia and Silhouette scores.",
      "Profile cluster centroids back in original INR units for marketing teams."
    ],
    lab: {
      lang: "python",
      title: "RFM Customer Segmentation with Silhouette Selection",
      prompt: "Cluster standardized customer RFM data for k=2, 3, 4 and print the silhouette_score for each k.",
      hint: "Score KMeans(n_clusters=k, n_init=10, random_state=42).fit_predict(X_scaled).",
      starterCode: "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\n\nrng = np.random.default_rng(42)\nX = np.vstack([\n    rng.normal([10, 12, 25000], [3, 2, 3000], (40, 3)),\n    rng.normal([45, 4, 6500], [8, 1, 1200], (40, 3)),\n    rng.normal([150, 1, 1800], [20, 0.5, 500], (40, 3))\n])\nX_scaled = StandardScaler().fit_transform(X)\n\nfor k in [2, 3, 4]:\n    labels = KMeans(n_clusters=k, n_init=10, random_state=42).fit_predict(X_scaled)\n    print(f'k={k} -> Silhouette Score: {silhouette_score(X_scaled, labels):.4f}')\n"
    }
  },
  {
    day: 123,
    month: 5,
    module: "M5: Machine Learning",
    title: "Dimensionality Reduction: PCA & Variance Explained",
    instructor: "StatQuest",
    duration: "22m",
    videoId: "FgakZw6K1QQ",
    altVideoId: "PFDu9oVAE-g",
    startSec: 0,
    bridge: "Compresses correlated behavioral features into orthogonal principal components for 2D visualization and noise removal.",
    takeaways: [
      "Standardize features prior to PCA so high-magnitude INR columns do not dominate variance.",
      "Select component count via cumulative explained_variance_ratio_ >= 0.90.",
      "Connect PCA eigenvectors directly to Day 100 linear algebra."
    ],
    lab: {
      lang: "python",
      title: "PCA Cumulative Variance Compression",
      prompt: "Fit PCA on a 6-feature standardized dataset and print cumulative variance explained per component.",
      hint: "np.cumsum(pca.explained_variance_ratio_).",
      starterCode: "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\n\nrng = np.random.default_rng(42)\nbase = rng.normal(size=(200, 2))\nX = np.hstack([base, base @ np.array([[1.2, -0.5], [0.4, 0.9]]), rng.normal(0, 0.2, (200, 2))])\nX_scaled = StandardScaler().fit_transform(X)\n\npca = PCA().fit(X_scaled)\nprint('Cumulative Variance Explained:', np.round(np.cumsum(pca.explained_variance_ratio_) * 100, 1), '%')\n"
    }
  },
  {
    day: 124,
    month: 5,
    module: "M5: Machine Learning",
    title: "Anomaly & Fraud Detection with Isolation Forest",
    instructor: "StatQuest",
    duration: "15m",
    videoId: "5p8B2Ik8jo0",
    altVideoId: "rzFX5NWojp0",
    startSec: 0,
    bridge: "Detects anomalous payment velocity and fraudulent high-value orders without requiring historical fraud labels.",
    takeaways: [
      "Understand why anomalies isolate in fewer random tree splits (shorter average path length).",
      "Configure contamination rate to match expected fraud prevalence.",
      "Combine Isolation Forest scores with business velocity rules."
    ],
    lab: {
      lang: "python",
      title: "Unsupervised Order Fraud Detector",
      prompt: "Fit IsolationForest(contamination=0.05) on normal orders + 3 injected anomalies and inspect predictions (-1 = anomaly).",
      hint: "iso = IsolationForest(contamination=0.05, random_state=42).fit(X); iso.predict(X).",
      starterCode: "import numpy as np\nfrom sklearn.ensemble import IsolationForest\n\nrng = np.random.default_rng(42)\nnormal = rng.normal([3500, 2], [800, 1], (57, 2))\nfraud = np.array([[48000, 15], [52000, 18], [41000, 14]])\nX = np.vstack([normal, fraud])\n\niso = IsolationForest(contamination=0.05, random_state=42).fit(X)\npreds = iso.predict(X)\nprint('Flagged anomaly indices:', np.where(preds == -1)[0])\n"
    }
  },
  {
    day: 125,
    month: 5,
    module: "M5: Machine Learning",
    title: "Classical NLP Baseline: TF-IDF & Sentiment Pipeline",
    instructor: "codebasics",
    duration: "14m",
    videoId: "h2kBNEShsiE",
    altVideoId: "yIYKR4sgzI8",
    startSec: 0,
    bridge: "Transforms raw ShopPulse product reviews into sparse TF-IDF matrices for a fast, interpretable linear classifier before Month 6 Transformers.",
    takeaways: [
      "Understand Term Frequency-Inverse Document Frequency weighting and n-gram ranges (1, 2).",
      "Build a TfidfVectorizer + LogisticRegression text pipeline in 5 lines of Scikit-Learn.",
      "Always benchmark heavy deep learning NLP against a clean TF-IDF baseline."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Review Sentiment Classifier (TF-IDF)",
      prompt: "Train a TfidfVectorizer(ngram_range=(1,2)) + LogisticRegression pipeline on product reviews and score new reviews.",
      hint: "pipe = make_pipeline(TfidfVectorizer(ngram_range=(1, 2)), LogisticRegression()).",
      starterCode: "from sklearn.pipeline import make_pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\n\nreviews = [\n    'Crisp switches and solid build quality',\n    'ANC blocks traffic noise completely',\n    'Stopped working after two days terrible',\n    'Cheap plastic and constant disconnects',\n    'Fast charging and great battery life',\n    'Overheats badly and poor support'\n]\nlabels = [1, 1, 0, 0, 1, 0]\n\npipe = make_pipeline(TfidfVectorizer(ngram_range=(1, 2)), LogisticRegression()).fit(reviews, labels)\ntest_revs = ['Great battery and solid quality', 'Terrible plastic stopped working']\nprint('Predictions (1=Pos, 0=Neg):', pipe.predict(test_revs))\n"
    }
  },
  {
    day: 126,
    month: 5,
    module: "M5: Machine Learning",
    title: "Capstone 5A: End-to-End Customer Churn Pipeline",
    instructor: "Data School",
    duration: "15m",
    videoId: "irHhDIYMe3c",
    altVideoId: "0B5eIE_1vpU",
    startSec: 0,
    bridge: "Integrates ColumnTransformer, Gradient Boosting, cross-validation, and threshold tuning into a production-ready churn scorer.",
    takeaways: [
      "Combine numeric imputation/scaling, categorical encoding, and gradient boosting in one Pipeline.",
      "Evaluate out-of-fold ROC-AUC and business retention ROI.",
      "Serialize model artifacts cleanly for downstream API serving."
    ],
    lab: {
      lang: "python",
      title: "Capstone 5A: Complete Churn Prediction Pipeline",
      prompt: "Build and cross-validate a full ColumnTransformer + HistGradientBoostingClassifier pipeline on mixed customer features.",
      hint: "Combine ColumnTransformer with HistGradientBoostingClassifier inside make_pipeline().",
      starterCode: "import numpy as np\nimport pandas as pd\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\nfrom sklearn.ensemble import HistGradientBoostingClassifier\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.model_selection import cross_val_score\n\nrng = np.random.default_rng(42)\nn = 300\ndf = pd.DataFrame({\n    'recency_days': rng.integers(1, 180, n),\n    'orders': rng.integers(1, 15, n),\n    'city': rng.choice(['Mumbai', 'Bengaluru', 'Delhi', 'Pune'], n)\n})\ny = ((df['recency_days'] > 90) & (df['orders'] < 4)).astype(int)\n\nct = ColumnTransformer([\n    ('num', StandardScaler(), ['recency_days', 'orders']),\n    ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), ['city'])\n])\npipe = make_pipeline(ct, HistGradientBoostingClassifier(random_state=42))\nauc = cross_val_score(pipe, df, y, cv=5, scoring='roc_auc').mean()\nprint(f'Capstone 5A 5-Fold ROC-AUC: {auc:.4f}')\n"
    }
  },
  {
    day: 127,
    month: 5,
    module: "M5: Machine Learning",
    title: "Bridge 5->6: From Logistic Regression to a Neural Unit",
    instructor: "3Blue1Brown",
    duration: "19m",
    videoId: "aircAruvnKk",
    altVideoId: "IHZwWFHWa-w",
    startSec: 0,
    bridge: "Hands off Month 5 classical ML to Month 6 Deep Learning by showing that a single neuron with sigmoid activation IS logistic regression.",
    takeaways: [
      "See how stacking linear layers (W @ x + b) with non-linear activations (ReLU, GELU) creates universal function approximators.",
      "Understand forward pass tensor shapes (batch_size, in_features) -> (batch_size, out_features).",
      "Prepare for PyTorch tensors and autograd in Month 6."
    ],
    lab: {
      lang: "python",
      title: "Bridge 5->6: Multi-Layer Perceptron Forward Pass in NumPy",
      prompt: "Implement a 2-layer neural network forward pass (Linear -> ReLU -> Linear -> Sigmoid) in pure NumPy.",
      hint: "h = np.maximum(0, X @ W1 + b1); out = 1 / (1 + np.exp(-(h @ W2 + b2))).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nX = rng.normal(size=(4, 3))\nW1, b1 = rng.normal(0, 0.5, (3, 8)), np.zeros(8)\nW2, b2 = rng.normal(0, 0.5, (8, 1)), np.zeros(1)\n\nh = np.maximum(0, X @ W1 + b1)\nprobs = 1.0 / (1.0 + np.exp(-(h @ W2 + b2)))\nprint('Output Probabilities shape:', probs.shape)\nprint(np.round(probs.ravel(), 4))\n"
    }
  },
  {
    day: 128,
    month: 5,
    module: "M5: Machine Learning",
    title: "Bridge 5->6: Backpropagation & Chain Rule in Computation Graphs",
    instructor: "3Blue1Brown",
    duration: "14m",
    videoId: "tIeHLnjs5U8",
    altVideoId: "Ilg3gGewQ5U",
    startSec: 0,
    bridge: "Completes Month 5 by tracing exact reverse-mode automatic differentiation through a multi-layer computation graph.",
    takeaways: [
      "Trace local upstream-times-local derivatives backward through addition and multiplication nodes.",
      "Understand vanishing vs exploding gradients and why ReLU/LayerNorm stabilize deep networks.",
      "Enter Month 6 ready to write idiomatic PyTorch training loops."
    ],
    lab: {
      lang: "python",
      title: "Bridge 5->6: Manual Backprop on a 2-Node Graph",
      prompt: "Compute forward loss L = (w * x - y)^2 and exact backward gradients dL/dw and dL/dx.",
      hint: "err = w * x - y; dL_dw = 2 * err * x; dL_dx = 2 * err * w.",
      starterCode: "x, w, y = 3.0, 1.5, 6.0\npred = w * x\nerr = pred - y\nloss = err ** 2\n\ndL_dw = 2 * err * x\ndL_dx = 2 * err * w\nprint(f'Loss: {loss:.2f} | dL/dw: {dL_dw:.2f} | dL/dx: {dL_dx:.2f}')\n"
    }
  },
  {
    day: 129,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Bridge 5->6: PyTorch Tensors, Autograd & GPU Basics",
    instructor: "Daniel Bourke",
    duration: "45m",
    videoId: "V_xro1bcAuA",
    altVideoId: "aircAruvnKk",
    startSec: 0,
    bridge: "Translates Day 127-128 NumPy matrix math and manual backprop into hardware-accelerated tensors and automatic differentiation.",
    takeaways: [
      "Create tensors, inspect .shape / .dtype / .device, and perform broadcasted matrix ops.",
      "Understand requires_grad=True and how loss.backward() populates .grad attributes.",
      "Remember to zero gradients before each optimizer step."
    ],
    lab: {
      lang: "python",
      title: "Tensor Broadcasting & Autograd Simulation",
      prompt: "Implement a lightweight Value autograd node in pure Python supporting + and * backward passes.",
      hint: "Store _backward closures on each Value node and traverse in reverse topological order.",
      starterCode: "class Scalar:\n    def __init__(self, val, children=()):\n        self.val = float(val)\n        self.grad = 0.0\n        self._backward = lambda: None\n        self._prev = set(children)\n\n    def __mul__(self, other):\n        out = Scalar(self.val * other.val, (self, other))\n        def _backward():\n            self.grad += other.val * out.grad\n            other.grad += self.val * out.grad\n        out._backward = _backward\n        return out\n\nw, x = Scalar(1.5), Scalar(3.0)\ny = w * x\ny.grad = 1.0\ny._backward()\nprint(f'y={y.val} | dy/dw={w.grad} | dy/dx={x.grad}')\n"
    }
  },
  {
    day: 130,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "PyTorch nn.Module, Loss Functions & Training Loops",
    instructor: "Daniel Bourke",
    duration: "45m",
    videoId: "V_xro1bcAuA",
    altVideoId: "tIeHLnjs5U8",
    startSec: 7200,
    bridge: "Establishes the canonical 5-step training loop (forward -> loss -> zero_grad -> backward -> step) used across all neural architectures.",
    takeaways: [
      "Subclass nn.Module and define layers in __init__ and tensor flow in forward().",
      "Pair BCEWithLogitsLoss for binary classification and CrossEntropyLoss for multi-class.",
      "Switch cleanly between model.train() and model.eval() with torch.inference_mode()."
    ],
    lab: {
      lang: "python",
      title: "2-Layer Neural Churn Classifier with Mini-Batch GD",
      prompt: "Train a 2-layer MLP with ReLU and Binary Cross-Entropy loss on synthetic churn features using NumPy.",
      hint: "Compute BCE loss = -np.mean(y*np.log(p+1e-8) + (1-y)*np.log(1-p+1e-8)) and update weights.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nX = rng.normal(size=(100, 3))\ny = (X[:, 0] + X[:, 1] > 0).astype(float).reshape(-1, 1)\nW1, W2 = rng.normal(0, 0.3, (3, 6)), rng.normal(0, 0.3, (6, 1))\n\nfor epoch in range(200):\n    h = np.maximum(0, X @ W1)\n    p = 1 / (1 + np.exp(-(h @ W2)))\n    dz2 = (p - y) / len(X)\n    dW2 = h.T @ dz2\n    dh = dz2 @ W2.T * (h > 0)\n    dW1 = X.T @ dh\n    W2 -= 0.5 * dW2\n    W1 -= 0.5 * dW1\n\nacc = ((p > 0.5) == y).mean()\nprint(f'Final Neural Churn Accuracy: {acc*100:.1f}%')\n"
    }
  },
  {
    day: 131,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Regularizing Deep Nets: Dropout, Weight Decay & AdamW",
    instructor: "StatQuest",
    duration: "16m",
    videoId: "ARq74QuavAo",
    altVideoId: "V_xro1bcAuA",
    startSec: 0,
    bridge: "Stabilizes deep neural training with adaptive momentum (AdamW), decoupled weight decay, and inverted dropout.",
    takeaways: [
      "Understand how AdamW decouples L2 weight decay from adaptive gradient scaling.",
      "Apply Dropout during training to prevent neuron co-adaptation, and disable it during evaluation.",
      "Use cosine learning-rate warmup and decay schedules."
    ],
    lab: {
      lang: "python",
      title: "Inverted Dropout Masking & Scaling Demo",
      prompt: "Apply inverted dropout (p=0.2) to a hidden activation matrix during training and verify expected magnitude preservation.",
      hint: "keep_prob = 0.8; mask = (rng.random(h.shape) < keep_prob) / keep_prob.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nh = np.ones((1000, 16))\nkeep_prob = 0.8\nmask = (rng.random(h.shape) < keep_prob) / keep_prob\nh_drop = h * mask\nprint(f'Original Mean: {h.mean():.3f} | Inverted Dropout Mean: {h_drop.mean():.3f}')\n"
    }
  },
  {
    day: 132,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Convolutional Neural Networks (CNNs) & Transfer Learning",
    instructor: "3Blue1Brown",
    duration: "15m",
    videoId: "KuXjwB4LzSA",
    altVideoId: "V_xro1bcAuA",
    startSec: 0,
    bridge: "Explains translation-invariant spatial convolutions—useful for ShopPulse product image classification and visual search.",
    takeaways: [
      "Understand 2D convolution filters, stride, padding, and spatial feature maps.",
      "Leverage transfer learning by freezing pretrained ResNet/ConvNeXt backbones and fine-tuning the classification head.",
      "Track output spatial dimensions cleanly across layers."
    ],
    lab: {
      lang: "python",
      title: "2D Convolution Edge-Detector Kernel in NumPy",
      prompt: "Apply a 3x3 vertical edge-detection kernel across a 6x6 grayscale image patch using sliding windows.",
      hint: "Compute np.sum(img[i:i+3, j:j+3] * kernel) for i in range(4), j in range(4).",
      starterCode: "import numpy as np\n\nimg = np.hstack([np.zeros((6, 3)), np.ones((6, 3)) * 10])\nkernel = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], dtype=float)\nout = np.zeros((4, 4))\n\nfor i in range(4):\n    for j in range(4):\n        out[i, j] = np.sum(img[i:i+3, j:j+3] * kernel)\nprint('Edge Activation Map:\\n', out)\n"
    }
  },
  {
    day: 133,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Sequence Modeling: RNNs, LSTMs & Vanishing Gradients",
    instructor: "StatQuest",
    duration: "17m",
    videoId: "YCzL96nL7j0",
    altVideoId: "AsNTP8Kwu80",
    startSec: 0,
    bridge: "Motivates the Attention revolution by showing why sequential recurrent bottlenecks struggle with long-range context.",
    takeaways: [
      "Understand recurrent hidden-state recurrence h_t = tanh(W_h h_{t-1} + W_x x_t).",
      "See how LSTM forget/input/output gates mitigate vanishing gradients over medium sequences.",
      "Recognize why sequential token-by-token processing prevents GPU parallelization."
    ],
    lab: {
      lang: "python",
      title: "Recurrent Hidden-State Stepper",
      prompt: "Step a 1D recurrent state h_t = np.tanh(0.8 * h_t + 0.5 * x_t) across a 6-step sequence.",
      hint: "Initialize h = 0.0 and update inside a loop over sequence values.",
      starterCode: "import numpy as np\n\nseq = [1.0, 0.5, -0.2, 0.8, 1.2, 0.1]\nh = 0.0\nstates = []\nfor x_t in seq:\n    h = float(np.tanh(0.8 * h + 0.5 * x_t))\n    states.append(round(h, 4))\nprint('Hidden State Trajectory:', states)\n"
    }
  },
  {
    day: 134,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Word Embeddings & Semantic Vector Geometry",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "viZrOnJclY0",
    altVideoId: "wjZofJX0v4M",
    startSec: 0,
    bridge: "Replaces Day 125 sparse bag-of-words TF-IDF vectors with dense semantic embeddings where similar meanings cluster together.",
    takeaways: [
      "Map discrete token IDs into dense continuous vectors (d=384 to 1536).",
      "Measure semantic similarity across paraphrases using cosine similarity.",
      "Bridge word embeddings directly to vector databases and RAG retrieval."
    ],
    lab: {
      lang: "python",
      title: "Dense Semantic Nearest-Neighbor Lookup",
      prompt: "Given 3 product embeddings and a query embedding, rank products by cosine similarity.",
      hint: "Normalize rows by L2 norm and multiply embeddings @ query.",
      starterCode: "import numpy as np\n\nnames = ['Wireless ANC Headphones', 'Mechanical Gaming Keyboard', 'USB-C 4K Docking Hub']\nembs = np.array([\n    [0.92, 0.10, 0.15],\n    [0.12, 0.94, 0.20],\n    [0.18, 0.25, 0.95]\n])\nquery = np.array([0.88, 0.12, 0.10])\n\nembs_norm = embs / np.linalg.norm(embs, axis=1, keepdims=True)\nq_norm = query / np.linalg.norm(query)\nscores = embs_norm @ q_norm\nfor idx in np.argsort(scores)[::-1]:\n    print(f'{names[idx]:30s} -> sim={scores[idx]:.4f}')\n"
    }
  },
  {
    day: 135,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Tokenization Internals: BPE & Subword Vocabularies",
    instructor: "Andrej Karpathy",
    duration: "45m",
    videoId: "zduSFxRajkE",
    altVideoId: "wjZofJX0v4M",
    startSec: 0,
    bridge: "Demystifies why LLMs count tokens instead of characters, why arithmetic/spelling quirks occur, and how context windows are budgeted.",
    takeaways: [
      "Understand Byte-Pair Encoding (BPE) iteratively merging frequent adjacent byte pairs.",
      "Estimate token budgets (~4 chars per token in English) for RAG chunking and API costs.",
      "Handle special control tokens (<|endoftext|>, system/user/assistant delimiters)."
    ],
    lab: {
      lang: "python",
      title: "Byte-Pair Encoding (BPE) Pair Frequency Merger",
      prompt: "Count adjacent token-pair frequencies in a token ID list and merge the most frequent pair into a new token ID.",
      hint: "Use zip(ids, ids[1:]) to count adjacent pairs and replace the top pair.",
      starterCode: "from collections import Counter\n\nids = [1, 2, 3, 1, 2, 4, 1, 2, 3]\npairs = Counter(zip(ids, ids[1:]))\ntop_pair, freq = pairs.most_common(1)[0]\nprint(f'Most frequent pair: {top_pair} (count={freq}) -> Merge into token 256')\n"
    }
  },
  {
    day: 136,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Transformers Part 1: Self-Attention (Q, K, V)",
    instructor: "3Blue1Brown",
    duration: "27m",
    videoId: "wjZofJX0v4M",
    altVideoId: "eMlx5fFNoYc",
    startSec: 0,
    bridge: "Explains the core Scaled Dot-Product Attention mechanism powering every modern LLM.",
    takeaways: [
      "Understand Query (what I am looking for), Key (what I contain), and Value (what I pass forward) projections.",
      "Why dividing Q @ K.T by sqrt(d_k) prevents softmax saturation and vanishing gradients.",
      "Visualize how tokens dynamically route contextual information across arbitrary distances."
    ],
    lab: {
      lang: "python",
      title: "Scaled Dot-Product Self-Attention in NumPy",
      prompt: "Implement softmax(Q @ K.T / sqrt(d_k)) @ V for a 3-token sequence with d_k=4.",
      hint: "Subtract row max before np.exp() for numerically stable softmax.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nQ = rng.normal(size=(3, 4))\nK = rng.normal(size=(3, 4))\nV = rng.normal(size=(3, 4))\n\nscores = (Q @ K.T) / np.sqrt(4.0)\nscores -= scores.max(axis=-1, keepdims=True)\nweights = np.exp(scores) / np.exp(scores).sum(axis=-1, keepdims=True)\nout = weights @ V\nprint('Attention Weights (rows sum to 1):\\n', np.round(weights, 3))\nprint('Context Vectors shape:', out.shape)\n"
    }
  },
  {
    day: 137,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Transformers Part 2: Multi-Head, Causal Mask & RoPE",
    instructor: "3Blue1Brown",
    duration: "26m",
    videoId: "eMlx5fFNoYc",
    altVideoId: "wjZofJX0v4M",
    startSec: 0,
    bridge: "Completes decoder-only LLM internals: causal upper-triangular masking, multi-head subspaces, and Rotary Positional Embeddings.",
    takeaways: [
      "Apply upper-triangular -inf causal masks so tokens cannot peek at future tokens during autoregressive training.",
      "Combine multiple attention heads to capture syntactic, entity, and coreference relations in parallel.",
      "Understand residual streams, LayerNorm/RMSNorm, and SwiGLU MLP blocks."
    ],
    lab: {
      lang: "python",
      title: "Causal Autoregressive Attention Mask",
      prompt: "Apply an upper-triangular -1e9 causal mask to a 4x4 attention score matrix and verify future weights equal 0.",
      hint: "mask = np.triu(np.ones((4, 4)), k=1) * -1e9.",
      starterCode: "import numpy as np\n\nraw_scores = np.ones((4, 4))\ncausal_mask = np.triu(np.ones((4, 4)), k=1) * -1e9\nmasked = raw_scores + causal_mask\nweights = np.exp(masked) / np.exp(masked).sum(axis=-1, keepdims=True)\nprint('Causal Attention Matrix:\\n', np.round(weights, 3))\n"
    }
  },
  {
    day: 138,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Hugging Face Ecosystem: Pipelines, AutoModel & Tokenizers",
    instructor: "Hugging Face",
    duration: "25m",
    videoId: "QEaBAZQCtwE",
    altVideoId: "00GKzGyWFEs",
    startSec: 0,
    bridge: "Equips you to load pretrained encoder and decoder checkpoints cleanly in Python.",
    takeaways: [
      "Use AutoTokenizer and AutoModelForSequenceClassification / AutoModelForCausalLM.",
      "Inspect model config.json, vocabulary size, and hidden dimensions.",
      "Batch inputs with padding=True and truncation=True."
    ],
    lab: {
      lang: "python",
      title: "Token Batch Padding & Attention Mask Builder",
      prompt: "Pad variable-length token ID sequences to max_len=6 and generate binary attention masks (1=real, 0=pad).",
      hint: "Pad shorter lists with 0 and set mask entries to 1 for original length, 0 for padding.",
      starterCode: "seqs = [[101, 2054, 102], [101, 4937, 2003, 2190, 102]]\nmax_len = 6\npadded = [s + [0] * (max_len - len(s)) for s in seqs]\nmasks = [[1] * len(s) + [0] * (max_len - len(s)) for s in seqs]\nprint('Padded IDs:', padded)\nprint('Attention Masks:', masks)\n"
    }
  },
  {
    day: 139,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Fine-Tuning Pretrained Encoders for Domain Classification",
    instructor: "Hugging Face",
    duration: "25m",
    videoId: "00GKzGyWFEs",
    altVideoId: "QEaBAZQCtwE",
    startSec: 0,
    bridge: "Upgrades Day 125 TF-IDF sentiment classification to contextual DeBERTa/DistilBERT fine-tuning for nuanced reviews.",
    takeaways: [
      "Handle negation and sarcasm ('ANC blocks noise, not bad at all!') via contextual self-attention.",
      "Configure Trainer / TrainingArguments with warmup, weight decay, and F1 evaluation.",
      "Compare accuracy vs latency against classical TF-IDF baselines."
    ],
    lab: {
      lang: "python",
      title: "Aspect-Based Review Router Logic",
      prompt: "Classify ShopPulse reviews into Product Quality, Shipping, or Pricing categories using keyword/score routing.",
      hint: "Score each review against domain lexicon weights and pick argmax.",
      starterCode: "lexicon = {\n    'Quality': {'switches', 'anc', 'build', 'battery', 'overheats'},\n    'Shipping': {'delivery', 'late', 'box', 'courier'},\n    'Pricing': {'expensive', 'discount', 'value', 'worth'}\n}\nreview = 'Great battery life and solid build quality'\ntokens = set(review.lower().split())\nscores = {cat: len(tokens & words) for cat, words in lexicon.items()}\nprint('Aspect Scores:', scores, '-> Predicted:', max(scores, key=scores.get))\n"
    }
  },
  {
    day: 140,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Post-Training Alignment: SFT, RLHF & DPO",
    instructor: "Andrej Karpathy",
    duration: "35m",
    videoId: "bZQun8Y4L2A",
    altVideoId: "7xTGNNLPyMI",
    startSec: 0,
    bridge: "Explains how base next-token predictors become helpful instruction-following assistants via SFT and Direct Preference Optimization.",
    takeaways: [
      "Trace the 3 stages: Pretraining (internet scale) -> Supervised Fine-Tuning (chat format) -> Preference Alignment (RLHF/DPO).",
      "Understand why base models hallucinate if prompted without clear grounding context.",
      "Format instruction datasets cleanly with system/user/assistant roles."
    ],
    lab: {
      lang: "python",
      title: "Instruction SFT ChatML Formatter",
      prompt: "Format a ShopPulse customer support Q&A pair into a structured instruction-tuning JSONL record.",
      hint: "Create a dict with 'messages': [{'role': 'system', ...}, {'role': 'user', ...}, {'role': 'assistant', ...}].",
      starterCode: "import json\n\nrecord = {\n    'messages': [\n        {'role': 'system', 'content': 'You are the ShopPulse Policy Assistant. Answer strictly from verified policy.'},\n        {'role': 'user', 'content': 'What is the return window for electronics?'},\n        {'role': 'assistant', 'content': 'Electronics can be returned within 7 days of delivery in original packaging.'}\n    ]\n}\nprint(json.dumps(record, indent=2))\n"
    }
  },
  {
    day: 141,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Parameter-Efficient Fine-Tuning: LoRA & QLoRA",
    instructor: "IBM Technology",
    duration: "11m",
    videoId: "t1caDsMzWBk",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Shows how low-rank adapter matrices (A and B) fine-tune 7B-8B parameter LLMs on a single consumer GPU.",
    takeaways: [
      "Freeze pretrained weights W and train low-rank update delta_W = B @ A (rank r = 8 or 16).",
      "Reduce trainable parameters by >99% while avoiding catastrophic forgetting.",
      "Combine 4-bit NormalFloat quantization (QLoRA) with LoRA adapters."
    ],
    lab: {
      lang: "python",
      title: "LoRA Parameter Compression Ratio Calculator",
      prompt: "Compare full weight matrix parameters (4096 x 4096) against LoRA rank r=16 matrices A (16 x 4096) + B (4096 x 16).",
      hint: "full = d * d; lora = 2 * r * d; print reduction percentage.",
      starterCode: "d = 4096\nr = 16\nfull_params = d * d\nlora_params = 2 * r * d\nsaved_pct = 100 * (1 - lora_params / full_params)\nprint(f'Full: {full_params:,} | LoRA (r={r}): {lora_params:,} ({saved_pct:.2f}% fewer trainable params)')\n"
    }
  },
  {
    day: 142,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Prompt Engineering & Structured JSON Outputs",
    instructor: "DeepLearning.AI",
    duration: "25m",
    videoId: "H4YK_7MAckk",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Enforces deterministic JSON schemas, few-shot examples, and grounding guardrails so LLM outputs plug straight into Python code.",
    takeaways: [
      "Separate untrusted user input from system instructions using XML delimiters.",
      "Provide 2-3 high-signal few-shot examples for consistent classification and extraction.",
      "Validate LLM outputs with strict JSON schema parsing and fallback retries."
    ],
    lab: {
      lang: "python",
      title: "Structured LLM Extraction Validator",
      prompt: "Parse a model JSON extraction payload and validate required keys ('intent', 'order_id', 'confidence').",
      hint: "Use json.loads() and verify required_keys <= data.keys().",
      starterCode: "import json\n\nllm_raw = '{\"intent\": \"refund_request\", \"order_id\": 1008, \"confidence\": 0.94}'\ndata = json.loads(llm_raw)\nrequired = {'intent', 'order_id', 'confidence'}\nassert required.issubset(data.keys()) and 0.0 <= data['confidence'] <= 1.0\nprint('Validated Structured Output:', data)\n"
    }
  },
  {
    day: 143,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "RAG Architecture & Document Chunking Strategies",
    instructor: "IBM Technology",
    duration: "10m",
    videoId: "T-D1OfcDW1M",
    altVideoId: "2eWuYf-aZE4",
    startSec: 0,
    bridge: "Grounds LLM answers in private ShopPulse return policies, product manuals, and live catalog specs without retraining.",
    takeaways: [
      "Trace the Retrieve -> Augment -> Generate pipeline and why it prevents hallucination.",
      "Use recursive character/sentence chunking with 10-15% overlap so boundary facts are never severed.",
      "Attach rich metadata (doc_id, section, updated_at) to every chunk."
    ],
    lab: {
      lang: "python",
      title: "Overlapping Sliding-Window Document Chunker",
      prompt: "Split a ShopPulse policy document into overlapping word chunks (chunk_size=12, overlap=3).",
      hint: "Step through words with range(0, len(words), chunk_size - overlap).",
      starterCode: "doc = (\n    'ShopPulse offers a 7-day replacement window for electronics and audio gear. '\n    'Accessories like desk mats qualify for a 15-day return if unopened. '\n    'Refunds are credited to the original UPI or card within 3 business days.'\n)\nwords = doc.split()\nchunk_size, overlap = 12, 3\nchunks = [' '.join(words[i:i+chunk_size]) for i in range(0, len(words), chunk_size - overlap)]\nfor idx, c in enumerate(chunks):\n    print(f'Chunk {idx}: {c}')\n"
    }
  },
  {
    day: 144,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Vector Databases & HNSW Approximate Nearest Neighbors",
    instructor: "IBM Technology",
    duration: "12m",
    videoId: "dN0lsF2cvm4",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Scales Day 134 cosine similarity from 3 vectors to millions using Hierarchical Navigable Small World (HNSW) graphs.",
    takeaways: [
      "Understand why brute-force O(N) vector search slows down at scale and how HNSW achieves sub-linear recall.",
      "Combine dense semantic vector search with metadata pre-filtering (category == 'Audio').",
      "Evaluate retrieval recall@k against ground-truth relevant chunks."
    ],
    lab: {
      lang: "python",
      title: "Metadata-Filtered Top-K Vector Retriever",
      prompt: "Filter candidate chunks by category metadata first, then rank by cosine similarity to return top-2 hits.",
      hint: "Filter indices where meta['category'] == target_cat before computing dot products.",
      starterCode: "import numpy as np\n\ndocs = [\n    {'id': 'D1', 'cat': 'Policy', 'vec': np.array([0.9, 0.1, 0.0]), 'text': '7-day electronics return window'},\n    {'id': 'D2', 'cat': 'Spec',   'vec': np.array([0.85, 0.2, 0.1]), 'text': 'ANC headphones 40-hour battery'},\n    {'id': 'D3', 'cat': 'Policy', 'vec': np.array([0.7, 0.6, 0.1]), 'text': 'UPI refunds process in 3 days'}\n]\nq_vec = np.array([0.88, 0.15, 0.05])\nq_vec /= np.linalg.norm(q_vec)\n\npolicy_docs = [d for d in docs if d['cat'] == 'Policy']\nranked = sorted(policy_docs, key=lambda d: float((d['vec']/np.linalg.norm(d['vec'])) @ q_vec), reverse=True)\nfor d in ranked:\n    print(d['id'], '->', d['text'])\n"
    }
  },
  {
    day: 145,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Hybrid Search (BM25 + Dense) & Cross-Encoder Reranking",
    instructor: "Cohere",
    duration: "18m",
    videoId: "wC4ef8b5d2E",
    altVideoId: "dN0lsF2cvm4",
    startSec: 0,
    bridge: "Fixes dense embedding blind spots on exact SKU codes ('SP-104') by fusing lexical BM25 with semantic vectors via Reciprocal Rank Fusion.",
    takeaways: [
      "Combine exact keyword matching (BM25) with semantic embeddings for robust retrieval.",
      "Fuse two ranked lists cleanly using Reciprocal Rank Fusion: score = 1 / (k + rank).",
      "Apply a Cross-Encoder reranker on top-10 candidates to promote the top-3 chunks."
    ],
    lab: {
      lang: "python",
      title: "Reciprocal Rank Fusion (RRF) Hybrid Scorer",
      prompt: "Combine lexical BM25 ranks and dense vector ranks using RRF (k=60) and print the fused ranking.",
      hint: "rrf_score[doc] = 1/(60 + rank_bm25) + 1/(60 + rank_dense).",
      starterCode: "bm25_rank = {'Doc_A': 1, 'Doc_B': 3, 'Doc_C': 2}\ndense_rank = {'Doc_B': 1, 'Doc_A': 2, 'Doc_C': 4}\nk = 60\n\nrrf = {d: round(1/(k + bm25_rank[d]) + 1/(k + dense_rank[d]), 5) for d in bm25_rank}\nfor doc, sc in sorted(rrf.items(), key=lambda x: x[1], reverse=True):\n    print(f'{doc}: RRF={sc}')\n"
    }
  },
  {
    day: 146,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "RAG Evaluation: Faithfulness, Relevancy & Context Recall",
    instructor: "Arize AI",
    duration: "20m",
    videoId: "fT_3A42M_G4",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Applies Month 4 measurement rigor to GenAI by scoring hallucination rate, context precision, and answer faithfulness.",
    takeaways: [
      "Measure the RAG Triad: Context Relevance, Groundedness/Faithfulness, and Answer Relevance.",
      "Build a golden evaluation dataset of 30+ real user questions with expected source citations.",
      "Use LLM-as-a-Judge prompts with strict rubric scoring."
    ],
    lab: {
      lang: "python",
      title: "Retrieval Recall@K & MRR Evaluator",
      prompt: "Compute Recall@3 and Mean Reciprocal Rank (MRR) across 3 test queries with known ground-truth doc IDs.",
      hint: "RR = 1 / (rank_index + 1) if target in top_k else 0.0.",
      starterCode: "eval_cases = [\n    {'target': 'D1', 'retrieved': ['D2', 'D1', 'D3']},\n    {'target': 'D4', 'retrieved': ['D4', 'D1', 'D2']},\n    {'target': 'D5', 'retrieved': ['D1', 'D2', 'D3']}\n]\nrecalls, rrs = [], []\nfor c in eval_cases:\n    top3 = c['retrieved'][:3]\n    hit = c['target'] in top3\n    recalls.append(1.0 if hit else 0.0)\n    rrs.append(1.0 / (top3.index(c['target']) + 1) if hit else 0.0)\n\nprint(f'Recall@3: {sum(recalls)/len(recalls):.2f} | MRR: {sum(rrs)/len(rrs):.3f}')\n"
    }
  },
  {
    day: 147,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Tool Calling, Function Routing & Agentic Workflows",
    instructor: "IBM Technology",
    duration: "14m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Connects LLMs back to your Month 2 SQL database and Month 1 Python calculators via schema-validated tool calling.",
    takeaways: [
      "Expose deterministic Python/SQL tools via JSON Schema function declarations.",
      "Enforce read-only SQL guards and max-iteration budgets on agent loops.",
      "Route structured analytical questions to SQL tools and policy questions to Vector RAG."
    ],
    lab: {
      lang: "python",
      title: "Safe Read-Only Text-to-SQL Guard & Router",
      prompt: "Implement a SQL safety validator blocking DROP/DELETE/UPDATE/INSERT and allowing only read-only SELECT queries.",
      hint: "Strip whitespace, uppercase, verify query.startswith(('SELECT', 'WITH')), and reject mutating keywords.",
      starterCode: "import re\n\ndef is_safe_readonly_sql(query: str) -> bool:\n    clean = query.strip().upper()\n    if not clean.startswith(('SELECT', 'WITH')):\n        return False\n    forbidden = r'\\b(DROP|DELETE|UPDATE|INSERT|ALTER|TRUNCATE|ATTACH)\\b'\n    return re.search(forbidden, clean) is None\n\nfor q in ['SELECT * FROM orders LIMIT 5;', 'DROP TABLE orders;', 'WITH cte AS (SELECT 1) SELECT * FROM cte']:\n    print(f'{is_safe_readonly_sql(q)} -> {q}')\n"
    }
  },
  {
    day: 148,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Production Deployment: FastAPI, Docker & Observability",
    instructor: "NeuralNine",
    duration: "25m",
    videoId: "0sOvCWFmrtA",
    altVideoId: "529LYDgRTgQ",
    startSec: 0,
    bridge: "Packages your ShopPulse churn model and hybrid RAG assistant behind a typed FastAPI service ready for cloud deployment.",
    takeaways: [
      "Validate request and response payloads automatically with Pydantic BaseModel schemas.",
      "Expose /health, /predict, and /ask endpoints with structured latency and token logging.",
      "Containerize reproducible Python environments with slim multi-stage Dockerfiles."
    ],
    lab: {
      lang: "python",
      title: "Pydantic-Style Request/Response Contract Validator",
      prompt: "Build a request validator enforcing non-empty question strings (<= 500 chars) and top_k in [1..10].",
      hint: "Raise ValueError if not (1 <= len(q.strip()) <= 500) or not (1 <= top_k <= 10).",
      starterCode: "def validate_ask_request(payload: dict) -> dict:\n    q = str(payload.get('question', '')).strip()\n    top_k = int(payload.get('top_k', 3))\n    if not (1 <= len(q) <= 500):\n        raise ValueError('Question must be 1..500 characters')\n    if not (1 <= top_k <= 10):\n        raise ValueError('top_k must be between 1 and 10')\n    return {'question': q, 'top_k': top_k}\n\nprint(validate_ask_request({'question': '  Show Mumbai revenue  ', 'top_k': 3}))\n"
    }
  },
  {
    day: 149,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Guardrails, Prompt Injection Defense & Cost Caching",
    instructor: "DeepLearning.AI",
    duration: "20m",
    videoId: "H4YK_7MAckk",
    altVideoId: "F8NKVhkZZWI",
    startSec: 0,
    bridge: "Hardens your GenAI application against prompt injection, PII leakage, and redundant LLM API spend.",
    takeaways: [
      "Redact sensitive PII (emails, phone numbers) before sending prompts to external LLM APIs.",
      "Detect prompt-injection override attempts in retrieved documents or user inputs.",
      "Cache repeated queries to cut latency and API costs by 40-70%."
    ],
    lab: {
      lang: "python",
      title: "PII Email/Phone Redactor Middleware",
      prompt: "Write a regex sanitizer that masks email addresses and 10-digit phone numbers before LLM logging.",
      hint: "Use re.sub() to replace emails with '[EMAIL_REDACTED]' and 10-digit numbers with '[PHONE_REDACTED]'.",
      starterCode: "import re\n\ndef redact_pii(text: str) -> str:\n    text = re.sub(r'[\\w.-]+@[\\w.-]+\\.\\w+', '[EMAIL_REDACTED]', text)\n    text = re.sub(r'\\b\\d{10}\\b', '[PHONE_REDACTED]', text)\n    return text\n\nsample = 'Customer aarav@example.com (9876543210) asked about Order 1001.'\nprint(redact_pii(sample))\n"
    }
  },
  {
    day: 150,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone 6A: Hybrid SQL + Vector RAG Copilot",
    instructor: "IBM Technology",
    duration: "14m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Unites all 6 months into one flagship portfolio system: Python ingestion + SQLite warehouse + ML churn scoring + Hybrid RAG.",
    takeaways: [
      "Route numeric KPI queries to safe read-only SQLite and policy questions to RRF Hybrid RAG.",
      "Return grounded answers with explicit source citations and zero hallucinations.",
      "Deploy your interactive DataForge & ShopPulse showcase on GitHub Pages."
    ],
    lab: {
      lang: "python",
      title: "Capstone 6A: End-to-End Router + SQL + RAG Demo",
      prompt: "Implement a unified copilot router that dispatches metric questions to SQLite and policy questions to Vector RAG.",
      hint: "Route queries containing 'revenue' or 'orders' to SQLite and others to the policy retriever.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (city TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [('Mumbai', 8997.0), ('Bengaluru', 12297.0)])\n\ndef copilot_answer(question: str) -> str:\n    if any(k in question.lower() for k in ['revenue', 'orders', 'city']):\n        rows = conn.execute('SELECT city, SUM(total_inr) FROM orders GROUP BY city').fetchall()\n        return f'[SQL Tool] Revenue by city: {rows}'\n    return '[RAG Tool] Policy Citation [D1]: Electronics have a 7-day replacement window.'\n\nprint(copilot_answer('What is our revenue by city?'))\nprint(copilot_answer('What is the return policy on headphones?'))\n"
    }
  },
  {
    day: 151,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Portfolio Architecture & GitHub Case-Study Polishing",
    instructor: "Luke Barousse",
    duration: "25m",
    videoId: "QKIGsShyEsQ",
    altVideoId: "apGV9Kg7ics",
    startSec: 0,
    bridge: "Packages your 6-month ShopPulse repository with architecture diagrams, reproducible benchmarks, and live GitHub Pages links.",
    takeaways: [
      "Lead every README with business impact metrics, architecture diagram, and a 30-second quickstart.",
      "Document baseline vs improved metrics across SQL latency, A/B lift, ML ROC-AUC, and RAG Recall@3.",
      "Pin your top 3 end-to-end repositories on your GitHub profile."
    ],
    lab: {
      lang: "python",
      title: "Portfolio Metrics Scorecard Generator",
      prompt: "Format a clean executive summary scorecard of your 6-month ShopPulse engineering benchmarks.",
      hint: "Print a structured Markdown table summarizing each module's verified metric.",
      starterCode: "benchmarks = [\n    ('M1-M2 Data Warehouse', 'Composite B-Tree Index', 'Full scan -> Indexed search'),\n    ('M3-M4 Experimentation', 'CUPED + Chi-Square', '38% variance reduction, +22% lift'),\n    ('M5 Tabular ML', 'HistGBM Churn Pipeline', '0.91 ROC-AUC (5-fold CV)'),\n    ('M6 Hybrid RAG', 'BM25 + Dense RRF', '0.94 Recall@3, 0% PII leak')\n]\nprint('| Layer | Technique | Verified Benchmark |')\nprint('|---|---|---|')\nfor l, t, b in benchmarks:\n    print(f'| {l} | {t} | {b} |')\n"
    }
  },
  {
    day: 152,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "SQL & Python Live Coding Interview Drills",
    instructor: "Ankit Bansal",
    duration: "17m",
    videoId: "MpAMjtvarrc",
    altVideoId: "6hfsRqmyvog",
    startSec: 0,
    bridge: "Sharpens speed and clarity on top Data Analyst & Junior Data Scientist technical screen patterns.",
    takeaways: [
      "Clarify grain, NULL handling, and tie-breaking rules out loud before writing SQL or Python.",
      "Master rolling 7-day windows, cohort retention, and top-N-per-group patterns.",
      "Write clean, modular helper functions with edge-case tests."
    ],
    lab: {
      lang: "sql",
      title: "Interview Drill: Top-Spending Customer per City",
      prompt: "Rank customers within each city by Delivered LTV using DENSE_RANK() OVER (PARTITION BY city ORDER BY ... DESC).",
      hint: "Aggregate Delivered revenue per customer in a CTE, then apply DENSE_RANK() in the outer query.",
      starterCode: "WITH cust_rev AS (\n  SELECT c.customer_id, c.full_name, c.city,\n         COALESCE(SUM(o.total_inr), 0) AS ltv_inr\n  FROM customers c\n  LEFT JOIN orders o ON c.customer_id = o.customer_id AND o.status = 'Delivered'\n  GROUP BY c.customer_id, c.full_name, c.city\n)\nSELECT city, full_name, ltv_inr,\n       DENSE_RANK() OVER (PARTITION BY city ORDER BY ltv_inr DESC) AS city_rank\nFROM cust_rev\nORDER BY city, city_rank;\n"
    }
  },
  {
    day: 153,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Product Sense & A/B Case Study Interviews",
    instructor: "Ronny Kohavi",
    duration: "25m",
    videoId: "f0Z5102N7hM",
    altVideoId: "5koKbTCySjU",
    startSec: 0,
    bridge: "Prepares you to structure open-ended product metric questions ('Conversion dropped 8% yesterday—how do you investigate?').",
    takeaways: [
      "Diagnose metric drops systematically: Telemetry/Logging -> Platform/Region slice -> Funnel step -> External seasonality.",
      "Define North Star, driver, and guardrail metrics for any new product feature.",
      "Explain p-values, power, and SRM in plain language for non-technical stakeholders."
    ],
    lab: {
      lang: "python",
      title: "Automated Funnel Drop-Off Root-Cause Slicer",
      prompt: "Slice a simulated conversion drop by device ('Mobile' vs 'Desktop') to isolate which segment caused the dip.",
      hint: "Group by ['period', 'device'] and compute conversion rate.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'period': ['Pre', 'Pre', 'Post', 'Post'],\n    'device': ['Desktop', 'Mobile', 'Desktop', 'Mobile'],\n    'sessions': [5000, 8000, 5000, 8000],\n    'orders': [450, 640, 445, 320]\n})\ndf['conv_pct'] = (100 * df['orders'] / df['sessions']).round(2)\nprint(df.pivot(index='device', columns='period', values='conv_pct'))\n"
    }
  },
  {
    day: 154,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "ML & GenAI System Design Walkthroughs",
    instructor: "IBM Technology",
    duration: "14m",
    videoId: "F8NKVhkZZWI",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Walks through end-to-end architecture trade-offs (latency, cost, drift monitoring, grounding) for ML and RAG interviews.",
    takeaways: [
      "Structure system design answers: Requirements & SLAs -> Data Pipeline -> Baseline vs Model -> Evaluation -> Monitoring.",
      "Know when to use SQL, classical GBDTs, fine-tuned encoders, or RAG.",
      "Monitor feature drift (PSI) and retrieval quality in production."
    ],
    lab: {
      lang: "python",
      title: "Population Stability Index (PSI) Drift Detector",
      prompt: "Compute PSI between baseline and production score distributions to detect model drift (PSI > 0.20 = alert).",
      hint: "PSI = sum((prod_pct - base_pct) * ln(prod_pct / base_pct)).",
      starterCode: "import numpy as np\n\nbase_pct = np.array([0.25, 0.35, 0.25, 0.15])\nprod_pct = np.array([0.10, 0.25, 0.35, 0.30])\npsi = np.sum((prod_pct - base_pct) * np.log(prod_pct / base_pct))\nprint(f'PSI Drift Score: {psi:.4f} | Drift Alert (>0.20): {psi > 0.20}')\n"
    }
  },
  {
    day: 155,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Mock Technical Loop 1: SQL + Python Data Wrangling",
    instructor: "Data with Baraa",
    duration: "36m",
    videoId: "GHPHZ8XJxeg",
    altVideoId: "2uvysYbKdjM",
    startSec: 0,
    bridge: "Timed end-to-end simulation combining multi-table SQL extraction and Pandas feature engineering.",
    takeaways: [
      "Verify row counts before and after every join to guarantee zero silent duplication.",
      "Handle NULLs, zero denominators, and date boundaries cleanly under time pressure.",
      "Communicate trade-offs clearly while coding."
    ],
    lab: {
      lang: "sql",
      title: "Timed SQL Challenge: Category Revenue & Share",
      prompt: "Compute each product category's Delivered revenue and percentage share of total company revenue.",
      hint: "Use SUM(rev) OVER () as the denominator for percentage share.",
      starterCode: "WITH cat_rev AS (\n  SELECT p.category,\n         ROUND(SUM(oi.quantity * oi.unit_price_inr), 2) AS rev_inr\n  FROM orders o\n  JOIN order_items oi ON o.order_id = oi.order_id\n  JOIN products p ON oi.product_id = p.product_id\n  WHERE o.status = 'Delivered'\n  GROUP BY p.category\n)\nSELECT category, rev_inr,\n       ROUND(100.0 * rev_inr / SUM(rev_inr) OVER (), 1) AS share_pct\nFROM cat_rev\nORDER BY rev_inr DESC;\n"
    }
  },
  {
    day: 156,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Mock Technical Loop 2: Statistics, ML & RAG Defense",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "4jRBRDbJemM",
    altVideoId: "fT_3A42M_G4",
    startSec: 0,
    bridge: "Defends your modeling choices, class-imbalance metrics, and RAG evaluation scores like a senior practitioner.",
    takeaways: [
      "Explain why PR-AUC and calibrated thresholds beat raw accuracy on imbalanced churn datasets.",
      "Walk through how Hybrid RRF + Cross-Encoder reranking eliminates RAG retrieval misses.",
      "Quantify business impact in INR saved or conversion lift gained."
    ],
    lab: {
      lang: "python",
      title: "Retention Campaign Expected Profit Optimizer",
      prompt: "Given churn probabilities and INR 500 coupon cost vs INR 4,000 retained LTV, find the optimal probability threshold.",
      hint: "Net value = sum(LTV * y_true - coupon_cost) across customers targeted with prob >= threshold.",
      starterCode: "import numpy as np\n\ny_true = np.array([1, 1, 0, 1, 0, 0, 1, 0])\ny_prob = np.array([0.85, 0.72, 0.60, 0.45, 0.30, 0.20, 0.55, 0.10])\n\nfor th in [0.30, 0.50, 0.70]:\n    targeted = y_prob >= th\n    saved_ltv = np.sum(4000 * y_true[targeted])\n    cost = 500 * np.sum(targeted)\n    print(f'Thresh {th:.2f} -> Targeted: {np.sum(targeted)} | Net Profit: INR {saved_ltv - cost:,}')\n"
    }
  },
  {
    day: 157,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Buffer & Deep-Dive Consolidation Day 1",
    instructor: "3Blue1Brown",
    duration: "18m",
    videoId: "zeJD6dqJ5lo",
    altVideoId: "wjZofJX0v4M",
    startSec: 0,
    bridge: "Dedicated review sprint to revisit any challenging module across Python, SQL, Statistics, ML, or Transformers.",
    takeaways: [
      "Review your Smart Notes across Months 1-6 and close any conceptual gaps.",
      "Re-run and refactor earlier labs without peeking at hints.",
      "Consolidate cheat sheets for SQL window functions, SciPy tests, and Scikit-Learn pipelines."
    ],
    lab: {
      lang: "python",
      title: "Cross-Module Synthesis Check",
      prompt: "Combine SQLite extraction, NumPy stats, and Scikit-Learn standardization in one concise 15-line pipeline.",
      hint: "Query SQLite into a NumPy array and apply StandardScaler().fit_transform().",
      starterCode: "import sqlite3\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE metrics (val REAL)')\nconn.executemany('INSERT INTO metrics VALUES (?)', [(1200.0,), (3400.0,), (5600.0,), (8900.0,)])\narr = np.array(conn.execute('SELECT val FROM metrics').fetchall())\nscaled = StandardScaler().fit_transform(arr)\nprint('Z-scaled DB column:', np.round(scaled.ravel(), 3))\n"
    }
  },
  {
    day: 158,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Buffer & Deep-Dive Consolidation Day 2",
    instructor: "Andrej Karpathy",
    duration: "35m",
    videoId: "zduSFxRajkE",
    altVideoId: "bZQun8Y4L2A",
    startSec: 0,
    bridge: "Second consolidation sprint ensuring every capstone artifact in your GitHub portfolio runs cleanly end-to-end.",
    takeaways: [
      "Verify all repository dependencies, sample datasets, and README instructions.",
      "Test edge cases across your ETL, SQL views, churn model, and RAG router.",
      "Prepare concise 2-minute verbal walkthroughs for each project."
    ],
    lab: {
      lang: "python",
      title: "End-to-End Pipeline Health Self-Test",
      prompt: "Run an assertion suite verifying JSON parsing, statistical Z-score computation, and cosine similarity.",
      hint: "Assert exact expected outputs across all three core primitives.",
      starterCode: "import json\nimport numpy as np\n\ndata = json.loads('{\"vals\": [10, 20, 30]}')\narr = np.array(data['vals'], dtype=float)\nz = (arr - arr.mean()) / arr.std()\nassert np.isclose(z.mean(), 0.0) and np.isclose(z.std(), 1.0)\nprint('All cross-curriculum self-checks passed!')\n"
    }
  },
  {
    day: 159,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone Polish: Interactive Streamlit / Web Demo",
    instructor: "NeuralNine",
    duration: "25m",
    videoId: "0sOvCWFmrtA",
    altVideoId: "QKIGsShyEsQ",
    startSec: 0,
    bridge: "Turns backend Python notebooks and SQL queries into a visual interactive demo recruiters can test in seconds.",
    takeaways: [
      "Present live predictions, SHAP/feature drivers, and RAG source citations in a clean UI.",
      "Keep latency snappy with caching and lightweight quantized/distilled models.",
      "Embed screenshots and live links at the top of your GitHub README."
    ],
    lab: {
      lang: "python",
      title: "Interactive KPI & Churn Dashboard Payload Builder",
      prompt: "Assemble a unified JSON dashboard payload combining executive SQL KPIs and top at-risk customers.",
      hint: "Combine KPI summary dict and sorted risk list into a single JSON response.",
      starterCode: "import json\n\ndashboard_state = {\n    'kpis': {'revenue_inr': 37590.0, 'aov_inr': 5370.0, 'conversion_pct': 10.2},\n    'high_risk_customers': [\n        {'customer_id': 3, 'name': 'Rohan Deshmukh', 'churn_prob': 0.81},\n        {'customer_id': 6, 'name': 'Sneha Joshi', 'churn_prob': 0.76}\n    ]\n}\nprint(json.dumps(dashboard_state, indent=2))\n"
    }
  },
  {
    day: 160,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Resume Quantification & ATS Bullet Engineering",
    instructor: "Luke Barousse",
    duration: "20m",
    videoId: "QKIGsShyEsQ",
    altVideoId: "apGV9Kg7ics",
    startSec: 0,
    bridge: "Translates your 160 days of technical execution into crisp, quantified X-Y-Z resume bullets for Data Analyst & Junior Data Scientist roles.",
    takeaways: [
      "Format every bullet as: Accomplished [X] as measured by [Y], by doing [Z].",
      "Highlight concrete tools: Python, SQL (Window Functions/CTEs), Pandas, SciPy A/B Testing, Scikit-Learn, XGBoost, PyTorch, RAG.",
      "Tailor project bullets cleanly for Data Analyst vs Junior Data Scientist job descriptions."
    ],
    lab: {
      lang: "python",
      title: "X-Y-Z Resume Bullet Formatter",
      prompt: "Generate 3 quantified resume bullets from your ShopPulse capstone metrics.",
      hint: "Format strings pairing action verbs, concrete technologies, and measured results.",
      starterCode: "bullets = [\n    'Built an end-to-end Python & SQLite analytics pipeline processing e-commerce orders with composite B-Tree indexing and cohort retention views.',\n    'Designed CUPED-adjusted A/B experimentation workflows in Python/SciPy, cutting metric variance by 38% and validating a +22% checkout lift.',\n    'Engineered a Scikit-Learn churn pipeline (0.91 ROC-AUC) and Hybrid BM25+Vector RAG copilot with automated PII redaction.'\n]\nfor b in bullets:\n    print('-', b)\n"
    }
  },
  {
    day: 161,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Technical Blogging & LinkedIn Project Storytelling",
    instructor: "Luke Barousse",
    duration: "15m",
    videoId: "QKIGsShyEsQ",
    altVideoId: "apGV9Kg7ics",
    startSec: 0,
    bridge: "Amplifies inbound recruiter visibility by publishing concise engineering breakdowns of your ShopPulse architecture.",
    takeaways: [
      "Share architecture diagrams, SQL before/after query plans, and A/B lessons learned.",
      "Link directly to your live GitHub Pages DataForge & ShopPulse demos.",
      "Engage thoughtfully with data engineering and applied AI practitioners."
    ],
    lab: {
      lang: "python",
      title: "Case-Study Post Outline Generator",
      prompt: "Generate a structured 4-part technical post outline covering Problem, Architecture, Key Trade-off, and Live Demo.",
      hint: "Format a clean Markdown outline ready for publishing.",
      starterCode: "sections = [\n    ('1. The Problem', 'Connecting raw JSON orders to SQL cohorts, A/B tests, churn ML, and grounded RAG.'),\n    ('2. Architecture', 'Zero-disconnect pipeline: Python ETL -> SQLite -> Pandas -> SciPy -> HistGBM -> Hybrid RAG.'),\n    ('3. Hardest Trade-off', 'Balancing recall vs precision in churn targeting and hybrid RRF retrieval.'),\n    ('4. Live Demo', 'Explore the full 168-day interactive studio on GitHub Pages.')\n]\nfor title, desc in sections:\n    print(f'{title}: {desc}')\n"
    }
  },
  {
    day: 162,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Final Capstone Sprint: Full-Stack Audit & Tag v2.0",
    instructor: "Kunal Kushwaha",
    duration: "25m",
    videoId: "apGV9Kg7ics",
    altVideoId: "zTjRZNkhiEU",
    startSec: 0,
    bridge: "Tags your completed 6-month portfolio milestone as v2.0.0 on GitHub with clean commit history and verified backups.",
    takeaways: [
      "Export a complete JSON backup of your 168-day study notes and code drafts.",
      "Tag your repository release v2.0.0 and verify GitHub Pages deployment.",
      "Celebrate consistent daily execution across Python, SQL, Stats, ML, and GenAI."
    ],
    lab: {
      lang: "python",
      title: "Release v2.0.0 Verification Script",
      prompt: "Verify all 6 module milestones are accounted for and print your v2.0.0 release manifest.",
      hint: "Assert len(modules) == 6 and print the final release banner.",
      starterCode: "modules = [\n    'M1: Python & Git',\n    'M2: SQL Analytics',\n    'M3: NumPy & Pandas',\n    'M4: Stats & Experimentation',\n    'M5: Machine Learning',\n    'M6: Deep Learning, NLP & GenAI RAG'\n]\nassert len(modules) == 6\nprint('DATAFORGE // INSTINCT OS v2.0.0 RELEASE VERIFIED')\nfor m in modules:\n    print('  [OK]', m)\n"
    }
  },
  {
    day: 163,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone Extension 1: Cohort LTV Forecasting",
    instructor: "Data School",
    duration: "14m",
    videoId: "yCgJGsg0Xa4",
    altVideoId: "0B5eIE_1vpU",
    startSec: 0,
    bridge: "Combines Month 2 SQL cohorts, Month 3 Pandas resampling, and Month 5 Ridge/GBM regression to forecast 90-day customer LTV.",
    takeaways: [
      "Predict 90-day LTV from first-14-day behavioral features without future target leakage.",
      "Evaluate LTV models using MAE and R-squared across customer acquisition channels.",
      "Feed predicted LTV into marketing CAC payback calculations."
    ],
    lab: {
      lang: "python",
      title: "Early-Window 90-Day LTV Predictor",
      prompt: "Fit a Ridge regression predicting 90-day LTV from Day-14 order count and initial basket size.",
      hint: "X = [[orders_14d, first_basket]]; fit Ridge().fit(X, ltv_90d).",
      starterCode: "import numpy as np\nfrom sklearn.linear_model import Ridge\n\nX = np.array([[1, 2499], [2, 4999], [3, 6498], [1, 1499], [4, 8999]], dtype=float)\nltv_90d = np.array([3800, 9200, 14500, 2100, 21000], dtype=float)\nmodel = Ridge(alpha=1.0).fit(X, ltv_90d)\nprint('Predicted 90d LTV for [2 orders, 5500 INR]:', round(float(model.predict([[2, 5500]])[0]), 2))\n"
    }
  },
  {
    day: 164,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone Extension 2: Multi-Armed Bandit Dynamic Pricing",
    instructor: "StatQuest",
    duration: "15m",
    videoId: "HZGCoVF3YvM",
    altVideoId: "5koKbTCySjU",
    startSec: 0,
    bridge: "Extends Month 4 Bayesian Beta-Binomial updating into Thompson Sampling to allocate traffic dynamically toward winning variants.",
    takeaways: [
      "Balance exploration vs exploitation by sampling from each arm's posterior Beta distribution.",
      "Reduce opportunity cost (regret) compared to static 50/50 A/B splits.",
      "Monitor arm allocation weights over time."
    ],
    lab: {
      lang: "python",
      title: "Thompson Sampling Bandit Simulator",
      prompt: "Run 500 rounds of Beta-Bernoulli Thompson Sampling across 3 checkout variants with true rates [0.07, 0.11, 0.08].",
      hint: "Each round, sample rng.beta(alpha, beta) for each arm and pull argmax.",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\ntrue_rates = [0.07, 0.11, 0.08]\nalpha = np.ones(3)\nbeta = np.ones(3)\npulls = np.zeros(3, dtype=int)\n\nfor _ in range(500):\n    arm = int(np.argmax(rng.beta(alpha, beta)))\n    reward = rng.binomial(1, true_rates[arm])\n    alpha[arm] += reward\n    beta[arm] += (1 - reward)\n    pulls[arm] += 1\n\nprint('Arm Pull Allocation (Arm 1 is best):', pulls)\n"
    }
  },
  {
    day: 165,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone Extension 3: Semantic Product Deduplication",
    instructor: "IBM Technology",
    duration: "12m",
    videoId: "dN0lsF2cvm4",
    altVideoId: "viZrOnJclY0",
    startSec: 0,
    bridge: "Uses cosine similarity matrices to detect near-duplicate catalog listings across third-party marketplace sellers.",
    takeaways: [
      "Compute all-pairs cosine similarity via normalized matrix multiplication E @ E.T.",
      "Flag catalog pairs exceeding similarity threshold 0.92 for automated catalog merge.",
      "Combine embedding similarity with exact brand/model attribute checks."
    ],
    lab: {
      lang: "python",
      title: "All-Pairs Embedding Duplicate Detector",
      prompt: "Compute the pairwise cosine similarity matrix for 4 catalog items and list pairs with similarity > 0.95.",
      hint: "sim_mat = E_norm @ E_norm.T; inspect upper triangle where i < j.",
      starterCode: "import numpy as np\n\nE = np.array([\n    [0.90, 0.10, 0.05],\n    [0.89, 0.11, 0.05],\n    [0.10, 0.92, 0.12],\n    [0.15, 0.20, 0.95]\n])\nE_norm = E / np.linalg.norm(E, axis=1, keepdims=True)\nsim = E_norm @ E_norm.T\nfor i in range(len(E)):\n    for j in range(i + 1, len(E)):\n        if sim[i, j] > 0.95:\n            print(f'Duplicate Pair: Item {i} & Item {j} (sim={sim[i, j]:.4f})')\n"
    }
  },
  {
    day: 166,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone Extension 4: Automated SQL Anomaly Alerting",
    instructor: "Hussein Nasser",
    duration: "13m",
    videoId: "T9n_-_oLrbM",
    altVideoId: "P7EUFtjeAmI",
    startSec: 0,
    bridge: "Combines SQL window functions with Z-score thresholds to trigger automated daily revenue anomaly alerts.",
    takeaways: [
      "Compute rolling 7-day baseline mean and standard deviation directly in SQL or Pandas.",
      "Trigger alerts only when daily revenue deviates by > 2.5 standard deviations.",
      "Eliminate alert fatigue with severity tiers."
    ],
    lab: {
      lang: "python",
      title: "Rolling 7-Day Z-Score Revenue Watchdog",
      prompt: "Detect anomalous daily revenue drops in a 10-day series using rolling mean and std.",
      hint: "Compute rolling(5, min_periods=3) mean and std shifted by 1 day.",
      starterCode: "import pandas as pd\n\ns = pd.Series([5200, 5400, 5100, 5300, 5500, 5250, 1400, 5350], dtype=float)\nbase_mean = s.rolling(5, min_periods=3).mean().shift(1)\nbase_std = s.rolling(5, min_periods=3).std().shift(1)\nz = (s - base_mean) / base_std\nprint(pd.DataFrame({'rev': s, 'z_score': z.round(2), 'alert': z.abs() > 2.5}))\n"
    }
  },
  {
    day: 167,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Capstone Extension 5: Citation-Verified RAG Answers",
    instructor: "Arize AI",
    duration: "20m",
    videoId: "fT_3A42M_G4",
    altVideoId: "T-D1OfcDW1M",
    startSec: 0,
    bridge: "Enforces post-generation citation verification so every claim in a RAG answer maps back to a retrieved chunk ID.",
    takeaways: [
      "Require inline [D1], [D2] source markers in generated answers.",
      "Parse bracketed citations via regex and verify every cited ID exists in the retrieved context set.",
      "Fallback to 'Insufficient verified policy data' when retrieval scores fall below threshold."
    ],
    lab: {
      lang: "python",
      title: "Inline Citation Verifier Guardrail",
      prompt: "Extract all [D#] citations from a generated answer and verify every cited ID belongs to retrieved_ids = {'D1', 'D3'}.",
      hint: "cited = set(re.findall(r'\\[(D\\d+)\\]', answer)); assert cited <= retrieved_ids.",
      starterCode: "import re\n\nretrieved_ids = {'D1', 'D3'}\nanswer = 'Electronics qualify for a 7-day return [D1], and UPI refunds settle within 3 days [D3].'\ncited = set(re.findall(r'\\[(D\\d+)\\]', answer))\nis_grounded = cited.issubset(retrieved_ids) and len(cited) > 0\nprint('Cited IDs:', cited, '| Grounded:', is_grounded)\n"
    }
  },
  {
    day: 168,
    month: 6,
    module: "M6: DL & GenAI RAG",
    title: "Graduation Capstone: Full 168-Day DataForge Mastery",
    instructor: "DataForge // Instinct OS",
    duration: "15m",
    videoId: "QKIGsShyEsQ",
    altVideoId: "aircAruvnKk",
    startSec: 0,
    bridge: "Completes your 168-day transformation from Python & Git fundamentals to production SQL, Statistics, Machine Learning, and Grounded GenAI RAG.",
    takeaways: [
      "You have built a cohesive, end-to-end portfolio spanning data engineering, analytics, experimentation, ML, and GenAI.",
      "Keep your GitHub Pages studio live as an interactive showcase during technical interviews.",
      "Continue iterating on real-world datasets with disciplined measurement and clean code."
    ],
    lab: {
      lang: "python",
      title: "Day 168 Graduation Certificate & Final Check",
      prompt: "Run the final graduation check verifying your completed 168-day DataForge // Instinct OS milestone.",
      hint: "Execute the script to print your completion summary.",
      starterCode: "print('=' * 56)\nprint('  DATAFORGE // INSTINCT OS — 168-DAY CURRICULUM COMPLETE')\nprint('  Stack: Python | Git | SQL | Pandas | Stats | ML | RAG')\nprint('=' * 56)\n"
    }
  }
);
