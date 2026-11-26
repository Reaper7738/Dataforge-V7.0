// DataForge // Instinct OS - Decoupled 168-Day Curriculum (Part 1 of 2: Days 1-84)
// Replace the top half of curriculum.js with this file, then append Part 2 (Days 85-168) below it.
// Pure ASCII-safe strings for clean GitHub Pages execution.

window.CURRICULUM = [
  {
    day: 1,
    month: 1,
    module: "M1: Python & Git",
    title: "Python Big-Picture Kickoff: Setup, Variables, Types & Logic",
    instructor: "Programming with Mosh",
    duration: "60m",
    videoId: "kqtD5dpn9C8",
    altVideoId: "XKHEtdqhLK8",
    startSec: 0,
    bridge: "Builds a complete end-to-end mental map of Python syntax in one sitting so Bro Code's focused deep dives from Day 2 onward click immediately.",
    takeaways: [
      "Declare variables and work across core Python types (int, float, str, bool) without redundant boilerplate.",
      "Combine arithmetic and comparison operators with if/elif/else branching and loops to process order data.",
      "Verify your browser Python sandbox runs clean, ASCII-safe scripts with formatted f-string output."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse First Order Summary & Discount Check",
      prompt: "Store customer name, unit price, quantity, and membership flag in variables, apply a 10% member discount, and print the payable total.",
      hint: "Multiply subtotal by 0.90 when is_member is True, then print using an f-string.",
      starterCode: "customer_name = 'Aarav'\nunit_price_inr = 2499.0\nquantity = 2\nis_member = True\n\nsubtotal = unit_price_inr * quantity\nfinal_total = subtotal * 0.90 if is_member else subtotal\n\nprint(f'Customer: {customer_name} | Qty: {quantity} | Payable: INR {final_total:,.2f}')\n"
    }
  },
  {
    day: 2,
    month: 1,
    module: "M1: Python & Git",
    title: "Type Casting & User Input Validation",
    instructor: "Bro Code",
    duration: "12m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 1260,
    bridge: "Converts raw string payloads from web forms and CSV imports into strongly typed ints, floats, and booleans.",
    takeaways: [
      "Explicitly cast raw string values with int(), float(), str(), and bool() before arithmetic.",
      "Recognize truthy vs falsy values (0, '', None, []) when validating incoming form fields.",
      "Guard string-to-number conversions against whitespace and formatting noise."
    ],
    lab: {
      lang: "python",
      title: "Raw Checkout Payload Type Caster",
      prompt: "Cast string fields raw_qty='3', raw_price='1499.50', and raw_coupon='SAVE10' into typed values and compute order total.",
      hint: "Use int(raw_qty.strip()) and float(raw_price.strip()), then check bool(raw_coupon.strip()).",
      starterCode: "raw_qty = ' 3 '\nraw_price = '1499.50'\nraw_coupon = 'SAVE10'\n\nqty = int(raw_qty.strip())\nprice = float(raw_price.strip())\nhas_coupon = bool(raw_coupon.strip())\ntotal = qty * price * (0.90 if has_coupon else 1.0)\n\nprint(f'Qty: {qty} | Has Coupon: {has_coupon} | Total: INR {total:,.2f}')\n"
    }
  },
  {
    day: 3,
    month: 1,
    module: "M1: Python & Git",
    title: "Arithmetic Operators, Math Functions & Precision",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 2100,
    bridge: "Applies floor division, modulo, rounding, and math utilities to compute GST splits, batch sizes, and currency totals.",
    takeaways: [
      "Distinguish true division (/), floor division (//), modulo remainder (%), and exponentiation (**).",
      "Use round(), abs(), min(), max(), and math.ceil() / math.floor() for billing and pagination math.",
      "Avoid floating-point display artifacts on INR currency outputs using round(val, 2)."
    ],
    lab: {
      lang: "python",
      title: "GST Breakdown & Shipping Box Calculator",
      prompt: "Given base_amount=4250.0 and 18% GST, compute GST amount, gross total, and full 4-item boxes plus leftover items for 19 items.",
      hint: "Use 19 // 4 for full boxes and 19 % 4 for remaining items.",
      starterCode: "import math\n\nbase_amount = 4250.0\ngst_rate = 0.18\ngst_inr = round(base_amount * gst_rate, 2)\ngross_inr = round(base_amount + gst_inr, 2)\n\ntotal_items = 19\nfull_boxes = total_items // 4\nleftover = total_items % 4\n\nprint(f'Base: INR {base_amount:.2f} | GST (18%): INR {gst_inr:.2f} | Gross: INR {gross_inr:.2f}')\nprint(f'Full Boxes: {full_boxes} | Leftover Items: {leftover}')\n"
    }
  },
  {
    day: 4,
    month: 1,
    module: "M1: Python & Git",
    title: "Conditional Logic: if, elif, else & Branch Ordering",
    instructor: "Bro Code",
    duration: "15m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 3060,
    bridge: "Implements deterministic business rule trees for tiered shipping fees and loyalty status classification.",
    takeaways: [
      "Order mutually exclusive if / elif / else branches from most specific threshold to general fallback.",
      "Keep conditional blocks flat and readable by avoiding deep nested indentation.",
      "Test boundary values (exact cutoff amounts) so edge cases route to the intended tier."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Loyalty Tier & Shipping Fee Classifier",
      prompt: "Classify a customer spending INR 18,500 into Platinum (>=25,000), Gold (>=10,000), or Silver (<10,000) and assign shipping cost.",
      hint: "Check spend >= 25000 first, then spend >= 10000, else Silver.",
      starterCode: "annual_spend = 18500.0\n\nif annual_spend >= 25000:\n    tier, shipping = 'Platinum', 0\nelif annual_spend >= 10000:\n    tier, shipping = 'Gold', 49\nelse:\n    tier, shipping = 'Silver', 99\n\nprint(f'Spend: INR {annual_spend:,.2f} -> Tier: {tier} | Shipping: INR {shipping}')\n"
    }
  },
  {
    day: 5,
    month: 1,
    module: "M1: Python & Git",
    title: "Logical Operators & Conditional Expressions (Ternary)",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 4020,
    bridge: "Combines multi-condition eligibility rules using short-circuiting and, or, and not operators.",
    takeaways: [
      "Combine compound predicates cleanly with and, or, and not instead of redundant nested ifs.",
      "Use concise ternary expressions (x if cond else y) for single-value assignments.",
      "Leverage short-circuit evaluation to guard against division-by-zero or empty strings."
    ],
    lab: {
      lang: "python",
      title: "Express Same-Day Delivery Eligibility Gate",
      prompt: "Approve express delivery only when city is in ('Mumbai', 'Bengaluru'), order_total >= 1500, and not is_cod.",
      hint: "Combine all three checks with 'and' into an eligible boolean.",
      starterCode: "city = 'Mumbai'\norder_total = 2200.0\nis_cod = False\n\neligible = (city in ('Mumbai', 'Bengaluru')) and (order_total >= 1500.0) and (not is_cod)\nstatus = 'EXPRESS APPROVED' if eligible else 'STANDARD DELIVERY'\nprint(f'City: {city} | Order: INR {order_total:.2f} -> {status}')\n"
    }
  },
  {
    day: 6,
    month: 1,
    module: "M1: Python & Git",
    title: "String Methods, Indexing & Slicing",
    instructor: "Bro Code",
    duration: "18m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 4920,
    bridge: "Normalizes messy SKU codes, phone numbers, and city labels before joining or grouping datasets.",
    takeaways: [
      "Chain .strip(), .upper(), .lower(), .replace(), and .split() to standardize dirty text fields.",
      "Extract fixed prefixes and suffixes using zero-indexed slicing s[start:stop:step].",
      "Remember Python strings are immutable—every transformation returns a new string."
    ],
    lab: {
      lang: "python",
      title: "SKU & City Label Normalizer",
      prompt: "Clean raw_sku='  sp-104-blk  ' to uppercase 'SP-104-BLK', extract category code 'SP', and title-case raw_city='  navi mumbai '.",
      hint: "Use .strip().upper(), slice [:2], and .strip().title().",
      starterCode: "raw_sku = '  sp-104-blk  '\nraw_city = '  navi mumbai '\n\nclean_sku = raw_sku.strip().upper()\ncategory_prefix = clean_sku[:2]\nvariant_code = clean_sku[-3:]\nclean_city = raw_city.strip().title()\n\nprint(f'SKU: {clean_sku} | Prefix: {category_prefix} | Variant: {variant_code} | City: {clean_city}')\n"
    }
  },
  {
    day: 7,
    month: 1,
    module: "M1: Python & Git",
    title: "Format Specifiers & f-String Reporting",
    instructor: "Bro Code",
    duration: "12m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 6060,
    bridge: "Builds crisp, aligned CLI executive tables using f-string width, alignment, thousand-separator, and percentage specifiers.",
    takeaways: [
      "Format currency with {val:,.2f}, percentages with {pct:.1%}, and signed deltas with {delta:+.2f}.",
      "Align columns cleanly in plain text reports using {<14} (left) and {>10} (right) padding.",
      "Use {var=} self-documenting f-string debugging during rapid script development."
    ],
    lab: {
      lang: "python",
      title: "Aligned ShopPulse City KPI Console Table",
      prompt: "Print a formatted 3-row table showing city name (left-aligned 12 chars), revenue (INR with commas), and conversion rate (%).",
      hint: "Use f'{city:<12} | INR {rev:>10,.2f} | {conv:>6.1%}'.",
      starterCode: "rows = [\n    ('Mumbai', 148500.5, 0.094),\n    ('Bengaluru', 172300.0, 0.112),\n    ('Delhi', 98450.75, 0.078)\n]\n\nprint(f\"{'City':<12} | {'Revenue':>14} | {'Conv':>6}\")\nprint('-' * 38)\nfor city, rev, conv in rows:\n    print(f'{city:<12} | INR {rev:>10,.2f} | {conv:>6.1%}')\n"
    }
  },
  {
    day: 8,
    month: 1,
    module: "M1: Python & Git",
    title: "While Loops & Sentinel Guard Conditions",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 6840,
    bridge: "Handles retry loops, pagination cursors, and budget-capped accumulation where iteration count is unknown upfront.",
    takeaways: [
      "Always ensure the loop state variable progresses toward termination to prevent infinite loops.",
      "Use break to exit immediately on target hit and continue to skip invalid records cleanly.",
      "Pair API or batch polling loops with an explicit max_attempts counter."
    ],
    lab: {
      lang: "python",
      title: "Promo Budget Allocation Simulator with While Loop",
      prompt: "Iterate through queued customer coupon requests (INR 500 each) while remaining_budget >= 500, skipping zero-order users.",
      hint: "Advance index on every iteration (including before continue) and deduct 500 per approved user.",
      starterCode: "requests = [('U1', 3), ('U2', 0), ('U3', 5), ('U4', 2), ('U5', 4)]\nbudget = 1200\nidx = 0\napproved = []\n\nwhile idx < len(requests) and budget >= 500:\n    uid, orders = requests[idx]\n    idx += 1\n    if orders == 0:\n        continue\n    budget -= 500\n    approved.append(uid)\n\nprint(f'Approved Users: {approved} | Remaining Budget: INR {budget}')\n"
    }
  },
  {
    day: 9,
    month: 1,
    module: "M1: Python & Git",
    title: "For Loops, range(), enumerate() & zip()",
    instructor: "Bro Code",
    duration: "16m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 7740,
    bridge: "Iterates deterministically over order batches, parallel metric arrays, and ranked leaderboards using Pythonic idioms.",
    takeaways: [
      "Prefer direct iteration with enumerate(seq, start=1) over manual range(len(seq)) index counters.",
      "Use zip(list_a, list_b) to pair parallel columns (such as SKUs and unit prices) safely.",
      "Accumulate running totals and counts cleanly inside a single linear pass."
    ],
    lab: {
      lang: "python",
      title: "Parallel SKU & Revenue Batch Aggregator",
      prompt: "Pair skus, prices, and units_sold using zip() and enumerate() to compute line-item and grand total revenue.",
      hint: "Loop over enumerate(zip(skus, prices, units), start=1) and sum price * qty.",
      starterCode: "skus = ['SP-101', 'SP-102', 'SP-103']\nprices = [4999.0, 1499.0, 2999.0]\nunits = [4, 10, 3]\n\ngrand_total = 0.0\nfor idx, (sku, price, qty) in enumerate(zip(skus, prices, units), start=1):\n    line = price * qty\n    grand_total += line\n    print(f'{idx}. {sku}: {qty} x INR {price:,.2f} = INR {line:,.2f}')\n\nprint(f'Grand Total: INR {grand_total:,.2f}')\n"
    }
  },
  {
    day: 10,
    month: 1,
    module: "M1: Python & Git",
    title: "Lists, Tuples & Sets: Core Collections",
    instructor: "Bro Code",
    duration: "22m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 8820,
    bridge: "Chooses the right container for the job: mutable lists for sequences, immutable tuples for records, and O(1) sets for deduplication.",
    takeaways: [
      "Use lists for ordered mutable sequences, tuples for fixed immutable records, and sets for unique membership checks.",
      "Compute customer overlap and churned cohorts rapidly with set intersection (&) and difference (-).",
      "Know that x in a_set runs in O(1) hash time versus O(N) linear scan in a list."
    ],
    lab: {
      lang: "python",
      title: "Cohort Retention & New Buyer Set Operations",
      prompt: "Given Jan buyers and Feb buyers, find repeat buyers (intersection), churned Jan buyers (difference), and total unique buyers (union).",
      hint: "Use jan_set & feb_set, jan_set - feb_set, and jan_set | feb_set.",
      starterCode: "jan_buyers = {'C01', 'C02', 'C03', 'C04', 'C05'}\nfeb_buyers = {'C03', 'C04', 'C06', 'C07'}\n\nretained = sorted(jan_buyers & feb_buyers)\nchurned = sorted(jan_buyers - feb_buyers)\nnew_feb = sorted(feb_buyers - jan_buyers)\n\nprint('Retained:', retained)\nprint('Churned :', churned)\nprint('New Feb :', new_feb)\n"
    }
  },
  {
    day: 11,
    month: 1,
    module: "M1: Python & Git",
    title: "2D Collections & Nested Matrix Traversal",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 10200,
    bridge: "Builds mental readiness for tabular rows-by-columns datasets before introducing NumPy 2D arrays and Pandas DataFrames.",
    takeaways: [
      "Access elements in a 2D list-of-lists via grid[row_idx][col_idx].",
      "Compute row sums and column sums cleanly using nested loops or generator expressions.",
      "Avoid [[0]*cols]*rows shallow-copy traps when initializing 2D grids; use list comprehensions instead."
    ],
    lab: {
      lang: "python",
      title: "City x Quarter Revenue Grid Analyzer",
      prompt: "Compute total annual revenue per city (row sums) and Q1 total across all cities (column 0 sum) from a 3x4 grid.",
      hint: "Row sum is sum(row); Q1 sum is sum(row[0] for row in rev_grid).",
      starterCode: "cities = ['Mumbai', 'Bengaluru', 'Delhi']\nrev_grid = [\n    [42000, 48000, 51000, 64000],\n    [39000, 44000, 49000, 58000],\n    [31000, 33000, 36000, 45000]\n]\n\nfor city, row in zip(cities, rev_grid):\n    print(f'{city:<10} Annual Total: INR {sum(row):,}')\n\nq1_all = sum(row[0] for row in rev_grid)\nprint(f'All Cities Q1 Total: INR {q1_all:,}')\n"
    }
  },
  {
    day: 12,
    month: 1,
    module: "M1: Python & Git",
    title: "Dictionaries & Safe Lookup Patterns (.get, .items)",
    instructor: "Bro Code",
    duration: "16m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 11100,
    bridge: "Uses hash-mapped key-value records to represent JSON payloads, lookup tables, and grouped revenue accumulators.",
    takeaways: [
      "Always read optional dictionary keys with d.get(key, default) to eliminate KeyError crashes.",
      "Aggregate totals by category in O(N) time via totals[cat] = totals.get(cat, 0) + amount.",
      "Iterate cleanly over key-value pairs using for k, v in d.items()."
    ],
    lab: {
      lang: "python",
      title: "O(N) Category Revenue & Order Counter",
      prompt: "Aggregate order revenue by category from a list of order dicts, safely defaulting missing 'discount' keys to 0.0.",
      hint: "net = order['amount'] - order.get('discount', 0.0); rev_by_cat[cat] = rev_by_cat.get(cat, 0.0) + net.",
      starterCode: "orders = [\n    {'id': 1, 'category': 'Audio', 'amount': 4999.0, 'discount': 500.0},\n    {'id': 2, 'category': 'Accessories', 'amount': 1499.0},\n    {'id': 3, 'category': 'Audio', 'amount': 6999.0, 'discount': 700.0},\n    {'id': 4, 'category': 'Accessories', 'amount': 999.0}\n]\n\nrev_by_cat = {}\nfor o in orders:\n    cat = o['category']\n    net = o['amount'] - o.get('discount', 0.0)\n    rev_by_cat[cat] = rev_by_cat.get(cat, 0.0) + net\n\nfor cat, total in rev_by_cat.items():\n    print(f'{cat:<12}: INR {total:,.2f}')\n"
    }
  },
  {
    day: 13,
    month: 1,
    module: "M1: Python & Git",
    title: "Functions, Default Arguments & Pure Design",
    instructor: "Bro Code",
    duration: "20m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 13200,
    bridge: "Refactors repeated billing and KPI logic into small, testable pure functions with type hints and clear return values.",
    takeaways: [
      "Write pure functions that take explicit arguments and return computed results rather than mutating globals.",
      "Never use mutable defaults like def f(items=[]); use items=None and initialize inside the function.",
      "Document input/output expectations clearly with Python type annotations."
    ],
    lab: {
      lang: "python",
      title: "Reusable Net Invoice Calculator Function",
      prompt: "Write calc_invoice(subtotal, discount_pct=0.0, gst_pct=0.18) returning a dict with net_base, gst, and grand_total.",
      hint: "Compute discounted = subtotal * (1 - discount_pct), then gst = discounted * gst_pct.",
      starterCode: "def calc_invoice(subtotal: float, discount_pct: float = 0.0, gst_pct: float = 0.18) -> dict:\n    net_base = round(subtotal * (1.0 - discount_pct), 2)\n    gst = round(net_base * gst_pct, 2)\n    return {'net_base': net_base, 'gst': gst, 'grand_total': round(net_base + gst, 2)}\n\nprint('Standard:', calc_invoice(5000.0))\nprint('Member  :', calc_invoice(5000.0, discount_pct=0.10))\n"
    }
  },
  {
    day: 14,
    month: 1,
    module: "M1: Python & Git",
    title: "Flexible Signatures: *args & **kwargs",
    instructor: "Bro Code",
    duration: "14m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 14520,
    bridge: "Builds flexible wrapper helpers and logging utilities capable of accepting arbitrary metric arguments and metadata tags.",
    takeaways: [
      "*args packs extra positional arguments into a tuple; **kwargs packs keyword arguments into a dict.",
      "Unpack lists and dicts into function calls using fn(*my_list, **my_dict).",
      "Keep explicit named parameters first so function signatures stay self-documenting."
    ],
    lab: {
      lang: "python",
      title: "Variadic Basket Sum & Metadata Tag Formatter",
      prompt: "Write summarize_basket(customer, *item_prices, **meta) returning customer name, item count, total INR, and metadata tags.",
      hint: "sum(item_prices) computes the variadic total; meta is already a dict.",
      starterCode: "def summarize_basket(customer: str, *item_prices: float, **meta) -> dict:\n    return {\n        'customer': customer,\n        'items': len(item_prices),\n        'total_inr': round(sum(item_prices), 2),\n        'meta': meta\n    }\n\nprint(summarize_basket('Meera', 2499.0, 999.0, 1499.0, city='Pune', payment='UPI'))\n"
    }
  },
  {
    day: 15,
    month: 1,
    module: "M1: Python & Git",
    title: "Comprehensions: List, Dict & Set Expressions",
    instructor: "Bro Code",
    duration: "18m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 15420,
    bridge: "Replaces verbose multi-line filter-and-transform loops with concise, expressive Python comprehensions.",
    takeaways: [
      "Transform and filter sequences in one readable expression: [expr for x in seq if cond].",
      "Build fast lookup indexes with dict comprehensions: {row['id']: row['name'] for row in rows}.",
      "Fall back to standard for-loops whenever comprehension logic spans more than two clauses."
    ],
    lab: {
      lang: "python",
      title: "High-Value Order Filter & SKU Price Index",
      prompt: "Use a list comprehension to extract IDs of delivered orders >= INR 3,000 and a dict comprehension to map order_id -> amount.",
      hint: "[o['id'] for o in orders if o['status'] == 'Delivered' and o['amount'] >= 3000].",
      starterCode: "orders = [\n    {'id': 101, 'status': 'Delivered', 'amount': 4999.0},\n    {'id': 102, 'status': 'Cancelled', 'amount': 6500.0},\n    {'id': 103, 'status': 'Delivered', 'amount': 1899.0},\n    {'id': 104, 'status': 'Delivered', 'amount': 8200.0}\n]\n\nhigh_val_ids = [o['id'] for o in orders if o['status'] == 'Delivered' and o['amount'] >= 3000]\namount_lookup = {o['id']: o['amount'] for o in orders}\n\nprint('High-Value Delivered IDs:', high_val_ids)\nprint('Order 104 Amount:', amount_lookup[104])\n"
    }
  },
  {
    day: 16,
    month: 1,
    module: "M1: Python & Git",
    title: "Match-Case Routing, Modules & Variable Scope (LEGB)",
    instructor: "Bro Code",
    duration: "18m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "kqtD5dpn9C8",
    startSec: 16560,
    bridge: "Structures event routers with structural match-case and prevents subtle variable shadowing across scopes.",
    takeaways: [
      "Understand Python's LEGB lookup order: Local -> Enclosing -> Global -> Built-in.",
      "Use match-case statements to dispatch clean status codes and event payloads.",
      "Protect reusable scripts with if __name__ == '__main__': entry guards."
    ],
    lab: {
      lang: "python",
      title: "Order Event Status Dispatcher with match-case",
      prompt: "Implement route_order_event(status) using Python match-case to return operational next actions.",
      hint: "Match 'PAID', 'SHIPPED', 'RETURN_REQ', and wildcard case _.",
      starterCode: "def route_order_event(status: str) -> str:\n    match status.upper():\n        case 'PAID':\n            return 'Assign warehouse picker'\n        case 'SHIPPED':\n            return 'Send SMS tracking link'\n        case 'RETURN_REQ':\n            return 'Trigger reverse pickup'\n        case _:\n            return 'Log status for manual review'\n\nfor s in ['PAID', 'SHIPPED', 'UNKNOWN']:\n    print(f'{s:<10} -> {route_order_event(s)}')\n"
    }
  },
  {
    day: 17,
    month: 1,
    module: "M1: Python & Git",
    title: "Lambda Functions, sorted(key=...) & Functional Helpers",
    instructor: "Corey Schafer",
    duration: "15m",
    videoId: "HTLu2DFOdTg",
    altVideoId: "XKHEtdqhLK8",
    startSec: 0,
    bridge: "Sorts complex customer and product dictionaries by multi-column business keys using custom lambda key functions.",
    takeaways: [
      "Pass key=lambda x: ... to sorted(), min(), and max() to rank records by arbitrary fields.",
      "Sort descending on numeric fields using negation (-x['revenue']) paired with ascending tie-breakers.",
      "Prefer comprehensions over map()/filter() for readability, reserving lambdas for inline sort/agg keys."
    ],
    lab: {
      lang: "python",
      title: "Multi-Key Customer Leaderboard Sorter",
      prompt: "Sort customer records by revenue descending, breaking ties by orders descending.",
      hint: "sorted(customers, key=lambda c: (-c['revenue'], -c['orders'])).",
      starterCode: "customers = [\n    {'name': 'Rohan', 'revenue': 12000, 'orders': 3},\n    {'name': 'Ananya', 'revenue': 18500, 'orders': 4},\n    {'name': 'Kabir', 'revenue': 12000, 'orders': 5}\n]\n\nranked = sorted(customers, key=lambda c: (-c['revenue'], -c['orders']))\nfor rank, c in enumerate(ranked, start=1):\n    print(f\"{rank}. {c['name']:<8} | INR {c['revenue']:,} | Orders: {c['orders']}\")\n"
    }
  },
  {
    day: 18,
    month: 1,
    module: "M1: Python & Git",
    title: "Exception Handling: try, except, else, finally & Custom Errors",
    instructor: "Corey Schafer",
    duration: "14m",
    videoId: "NIWwJbo-9_8",
    altVideoId: "XKHEtdqhLK8",
    startSec: 0,
    bridge: "Hardens ingestion scripts against malformed records so one bad row gets quarantined instead of crashing the whole batch.",
    takeaways: [
      "Catch specific exception classes (ValueError, KeyError, ZeroDivisionError)—never bare except:.",
      "Use try / except / else so only code that can raise the expected exception sits inside try.",
      "Quarantine invalid records with structured error reasons during batch ingestion."
    ],
    lab: {
      lang: "python",
      title: "Fault-Tolerant Batch Order Parser",
      prompt: "Parse a list of raw order tuples, separating valid orders from malformed rows without crashing.",
      hint: "Catch (ValueError, TypeError) when casting amount to float and check amount > 0.",
      starterCode: "raw_rows = [('O1', '2499.0'), ('O2', 'BAD_NUM'), ('O3', '-50.0'), ('O4', '3999.0')]\nvalid, quarantine = [], []\n\nfor oid, raw_amt in raw_rows:\n    try:\n        amt = float(raw_amt)\n        if amt <= 0:\n            raise ValueError('Non-positive amount')\n    except ValueError as err:\n        quarantine.append((oid, str(err)))\n    else:\n        valid.append((oid, amt))\n\nprint('Valid     :', valid)\nprint('Quarantine:', quarantine)\n"
    }
  },
  {
    day: 19,
    month: 1,
    module: "M1: Python & Git",
    title: "File I/O with Context Managers (with open) & Pathlib",
    instructor: "Corey Schafer",
    duration: "22m",
    videoId: "Uh2ebFW8OYM",
    altVideoId: "XKHEtdqhLK8",
    startSec: 0,
    bridge: "Reads and writes local files safely using pathlib.Path and context managers that guarantee file closure.",
    takeaways: [
      "Always open files inside with open(path, mode, encoding='utf-8') as f: blocks.",
      "Use pathlib.Path for cross-platform path joining (base / 'data' / 'orders.csv') instead of string concatenation.",
      "Use io.StringIO in memory to test file-based parsers cleanly without disk side effects."
    ],
    lab: {
      lang: "python",
      title: "In-Memory File Stream Line Cleaner",
      prompt: "Read lines from an io.StringIO log stream, strip blank/comment lines (#), and write cleaned records to an output buffer.",
      hint: "Iterate over in_buf, skip lines starting with '#' or empty after .strip(), and write to out_buf.",
      starterCode: "import io\n\nraw_log = '# ShopPulse Export\\nO101,Mumbai,2499\\n\\n# End marker\\nO102,Pune,3899\\n'\nin_buf = io.StringIO(raw_log)\nout_buf = io.StringIO()\n\nfor line in in_buf:\n    clean = line.strip()\n    if clean and not clean.startswith('#'):\n        out_buf.write(clean + '\\n')\n\nprint(out_buf.getvalue().strip())\n"
    }
  },
  {
    day: 20,
    month: 1,
    module: "M1: Python & Git",
    title: "Working with JSON & CSV Data Streams in Python",
    instructor: "Corey Schafer",
    duration: "20m",
    videoId: "9N6a-VLBa2I",
    altVideoId: "q5uM4VKywbA",
    startSec: 0,
    bridge: "Parses nested API JSON payloads and tabular CSV exports using Python's built-in json and csv modules.",
    takeaways: [
      "Use json.loads() / json.dumps(indent=2) to serialize and deserialize structured API payloads.",
      "Use csv.DictReader and csv.DictWriter to map CSV headers directly to Python dictionaries.",
      "Flatten nested JSON customer/order fields cleanly before loading into relational tables."
    ],
    lab: {
      lang: "python",
      title: "Nested JSON Webhook to Flat CSV Record Converter",
      prompt: "Parse a JSON string of nested orders, flatten customer city and item count, and serialize via csv.DictWriter.",
      hint: "Extract o['customer']['city'] and len(o['items']) for each order.",
      starterCode: "import csv\nimport io\nimport json\n\npayload = '''[\n  {\"order_id\": 501, \"customer\": {\"name\": \"Ishan\", \"city\": \"Navi Mumbai\"}, \"items\": [\"SP-101\", \"SP-102\"], \"total\": 6498.0},\n  {\"order_id\": 502, \"customer\": {\"name\": \"Priya\", \"city\": \"Bengaluru\"}, \"items\": [\"SP-103\"], \"total\": 2999.0}\n]'''\n\nrecords = json.loads(payload)\nbuf = io.StringIO()\nwriter = csv.DictWriter(buf, fieldnames=['order_id', 'city', 'item_count', 'total'])\nwriter.writeheader()\nfor r in records:\n    writer.writerow({'order_id': r['order_id'], 'city': r['customer']['city'], 'item_count': len(r['items']), 'total': r['total']})\n\nprint(buf.getvalue().strip())\n"
    }
  },
  {
    day: 21,
    month: 1,
    module: "M1: Python & Git",
    title: "Dates, Times, Timedeltas & Timezones (datetime)",
    instructor: "Corey Schafer",
    duration: "24m",
    videoId: "eirjjyP2qcQ",
    altVideoId: "XKHEtdqhLK8",
    startSec: 0,
    bridge: "Computes delivery SLA durations, customer recency days, and ISO-8601 timestamps accurately.",
    takeaways: [
      "Parse ISO dates with datetime.fromisoformat() and format outputs with .strftime('%Y-%m-%d').",
      "Subtract two datetime objects to obtain a timedelta and read .days or .total_seconds().",
      "Store backend timestamps in UTC or explicit IST (+05:30) timezone-aware objects."
    ],
    lab: {
      lang: "python",
      title: "Customer Recency & Delivery SLA Calculator",
      prompt: "Compute days since last order and delivery turnaround hours from ISO timestamp strings.",
      hint: "Use datetime.fromisoformat() and subtract timestamps to get timedelta.",
      starterCode: "from datetime import datetime\n\nordered_at = datetime.fromisoformat('2026-11-20T10:00:00')\ndelivered_at = datetime.fromisoformat('2026-11-22T16:30:00')\nas_of_date = datetime.fromisoformat('2026-11-26T14:00:00')\n\ndelivery_hours = (delivered_at - ordered_at).total_seconds() / 3600\nrecency_days = (as_of_date - ordered_at).days\n\nprint(f'Delivery Time: {delivery_hours:.1f} hrs | Recency: {recency_days} days')\n"
    }
  },
  {
    day: 22,
    month: 1,
    module: "M1: Python & Git",
    title: "Regular Expressions (re) for Text Cleaning & Extraction",
    instructor: "Corey Schafer",
    duration: "26m",
    videoId: "K8L6KVGG-7o",
    altVideoId: "XKHEtdqhLK8",
    startSec: 0,
    bridge: "Extracts structured SKU codes, pincodes, and invoice numbers from unstructured support tickets and vendor notes.",
    takeaways: [
      "Always write regex patterns using raw strings r'...' so backslashes are not escaped twice.",
      "Use re.findall() for bulk extraction and re.sub() for pattern-based redaction or normalization.",
      "Pre-compile repeated patterns with re.compile() when scanning thousands of text rows."
    ],
    lab: {
      lang: "python",
      title: "Support Ticket SKU & Indian Pincode Extractor",
      prompt: "Extract all SKU codes matching r'SP-\\d{3}' and 6-digit pincodes matching r'\\b\\d{6}\\b' from a support message.",
      hint: "Use re.findall(r'SP-\\d{3}', msg) and re.findall(r'\\b\\d{6}\\b', msg).",
      starterCode: "import re\n\nticket = 'Customer at 410208 reported issue with SP-101 and requested replacement for SP-204.'\nskus = re.findall(r'SP-\\d{3}', ticket)\npincodes = re.findall(r'\\b\\d{6}\\b', ticket)\n\nprint('Extracted SKUs    :', skus)\nprint('Extracted Pincodes:', pincodes)\n"
    }
  },
  {
    day: 23,
    month: 1,
    module: "M1: Python & Git",
    title: "Object-Oriented Python: Classes, __init__ & Instance State",
    instructor: "Bro Code",
    duration: "18m",
    videoId: "XKHEtdqhLK8",
    altVideoId: "ZDa-Z5JzLYM",
    startSec: 18600,
    bridge: "Encapsulates stateful domain entities (like ShoppingCart and DataPipeline) that mirror Scikit-Learn's fit/transform API.",
    takeaways: [
      "Define classes to bundle structured state attributes with cohesive domain methods.",
      "Initialize instance attributes inside __init__(self, ...) so objects never share mutable class lists.",
      "Understand how Scikit-Learn estimators and PyTorch modules rely on this exact stateful class pattern."
    ],
    lab: {
      lang: "python",
      title: "Stateful ShopPulse ShoppingCart Class",
      prompt: "Implement a ShoppingCart class with add_item(sku, price, qty) and total_inr() methods.",
      hint: "Store self.items = [] in __init__ and sum price * qty in total_inr().",
      starterCode: "class ShoppingCart:\n    def __init__(self, customer_id: str):\n        self.customer_id = customer_id\n        self.items = []\n\n    def add_item(self, sku: str, price: float, qty: int = 1):\n        self.items.append({'sku': sku, 'price': price, 'qty': qty})\n\n    def total_inr(self) -> float:\n        return round(sum(i['price'] * i['qty'] for i in self.items), 2)\n\ncart = ShoppingCart('C101')\ncart.add_item('SP-101', 4999.0, 1)\ncart.add_item('SP-102', 1499.0, 2)\nprint(f'Customer {cart.customer_id} Cart Total: INR {cart.total_inr():,.2f}')\n"
    }
  },
  {
    day: 24,
    month: 1,
    module: "M1: Python & Git",
    title: "Inheritance, Composition & Dunder Methods (__repr__, __len__)",
    instructor: "Corey Schafer",
    duration: "20m",
    videoId: "RSl87lqOXDE",
    altVideoId: "3ohzBxoFHAY",
    startSec: 0,
    bridge: "Customizes object printing, length checks, and reusable base classes for clean pipeline engineering.",
    takeaways: [
      "Implement __repr__ so objects display informative debug strings in logs and collections.",
      "Prefer composition (has-a) over deep inheritance hierarchies (is-a) for flexible data pipelines.",
      "Use @dataclass when creating lightweight, typed data-transfer containers."
    ],
    lab: {
      lang: "python",
      title: "Typed OrderRecord @dataclass with Computed Property",
      prompt: "Define an OrderRecord dataclass with order_id, unit_price, and qty, plus a net_total property and clean repr.",
      hint: "Decorate with @dataclass and define @property def net_total(self) -> float.",
      starterCode: "from dataclasses import dataclass\n\n@dataclass\nclass OrderRecord:\n    order_id: int\n    sku: str\n    unit_price: float\n    qty: int\n\n    @property\n    def net_total(self) -> float:\n        return round(self.unit_price * self.qty, 2)\n\nrec = OrderRecord(901, 'SP-101', 4999.0, 2)\nprint(rec, '| Total INR:', rec.net_total)\n"
    }
  },
  {
    day: 25,
    month: 1,
    module: "M1: Python & Git",
    title: "Python Environments (venv), pip & Clean Project Structure",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "APOPm01BVrk",
    altVideoId: "apGV9Kg7ics",
    startSec: 0,
    bridge: "Isolates project dependencies and standardizes src/tests/data folder layouts for reproducible data science repos.",
    takeaways: [
      "Create isolated virtual environments (python -m venv .venv) so project packages never collide.",
      "Pin exact dependencies in requirements.txt and load API keys via environment variables, never hardcoded strings.",
      "Organize repositories cleanly into src/, data/, notebooks/, and tests/ directories."
    ],
    lab: {
      lang: "python",
      title: "Environment Config & Secret Presence Validator",
      prompt: "Implement validate_config(env_dict) verifying required keys exist and API keys are non-empty without printing secrets.",
      hint: "Mask secret values as '***SET***' when printing diagnostics.",
      starterCode: "def audit_config(env: dict) -> dict:\n    required = ('APP_ENV', 'DB_PATH', 'GEMINI_API_KEY')\n    missing = [k for k in required if not str(env.get(k, '')).strip()]\n    return {'ready': len(missing) == 0, 'missing': missing, 'env': env.get('APP_ENV', 'unknown')}\n\nsample_env = {'APP_ENV': 'prod', 'DB_PATH': 'shoppulse.db', 'GEMINI_API_KEY': 'AIzaSy_MASKED'}\nprint(audit_config(sample_env))\n"
    }
  },
  {
    day: 26,
    month: 1,
    module: "M1: Python & Git",
    title: "Git & GitHub Essentials: Commits, Branches & Pull Requests",
    instructor: "Kunal Kushwaha",
    duration: "25m",
    videoId: "apGV9Kg7ics",
    altVideoId: "APOPm01BVrk",
    startSec: 0,
    bridge: "Versions code cleanly on feature branches and protects main with .gitignore rules and atomic commits.",
    takeaways: [
      "Never commit .env secrets, raw multi-GB datasets, or __pycache__ artifacts; enforce a strict .gitignore.",
      "Develop new features on short-lived branches (git checkout -b feat/churn-model) before merging to main.",
      "Write concise, imperative commit messages describing why a change was made."
    ],
    lab: {
      lang: "python",
      title: "Pre-Commit Secret & Large-File Scanner",
      prompt: "Scan staged filenames and file lines to block accidental .env commits or hardcoded API key patterns.",
      hint: "Flag files ending in '.env' or containing 'AIza' or 'SECRET_KEY='.",
      starterCode: "staged_files = {\n    'src/pipeline.py': 'import os\\nkey = os.getenv(\"API_KEY\")',\n    '.env': 'API_KEY=AIzaSy12345'\n}\n\nblocked = []\nfor fname, content in staged_files.items():\n    if fname.endswith('.env') or 'AIza' in content:\n        blocked.append(fname)\n\nprint('Blocked from commit:', blocked)\n"
    }
  },
  {
    day: 27,
    month: 1,
    module: "M1: Python & Git",
    title: "Capstone 1A: ShopPulse JSON-to-SQLite Ingestion CLI",
    instructor: "Corey Schafer",
    duration: "24m",
    videoId: "pd-0G0MigUA",
    altVideoId: "9N6a-VLBa2I",
    startSec: 0,
    bridge: "Unites Month 1 Python parsing, exception quarantine, and sqlite3 persistence into an idempotent ETL ingestion script.",
    takeaways: [
      "Validate and normalize raw JSON records before inserting into SQLite tables.",
      "Use INSERT OR IGNORE / UPSERT patterns so re-running the ingestion script never duplicates rows.",
      "Emit a structured run summary reporting ingested count, quarantined count, and total INR loaded."
    ],
    lab: {
      lang: "python",
      title: "Capstone 1A: Idempotent JSON-to-SQLite Loader",
      prompt: "Parse raw JSON orders, quarantine invalid rows, load valid rows idempotently into SQLite, and query total loaded revenue.",
      hint: "Use CREATE TABLE orders (order_id INT PRIMARY KEY, city TEXT, total REAL) and INSERT OR IGNORE.",
      starterCode: "import json\nimport sqlite3\n\nraw_json = '[{\"order_id\": 1, \"city\": \"Mumbai\", \"total\": 4999.0}, {\"order_id\": 1, \"city\": \"Mumbai\", \"total\": 4999.0}, {\"order_id\": 2, \"city\": \"Pune\", \"total\": -10.0}, {\"order_id\": 3, \"city\": \"Bengaluru\", \"total\": 7499.0}]'\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (order_id INTEGER PRIMARY KEY, city TEXT, total REAL)')\n\nquarantined = 0\nfor row in json.loads(raw_json):\n    if row['total'] <= 0:\n        quarantined += 1\n        continue\n    conn.execute('INSERT OR IGNORE INTO orders VALUES (?, ?, ?)', (row['order_id'], row['city'], row['total']))\n\ncount, rev = conn.execute('SELECT COUNT(*), SUM(total) FROM orders').fetchone()\nprint(f'Loaded Rows: {count} | Quarantined: {quarantined} | Total INR: {rev:,.2f}')\n"
    }
  },
  {
    day: 28,
    month: 1,
    module: "M1: Python & Git",
    title: "Bridge 1->2: Embedded SQLite3 & Relational Schema Design",
    instructor: "Corey Schafer",
    duration: "18m",
    videoId: "pd-0G0MigUA",
    altVideoId: "HXV3zeQKqGY",
    startSec: 900,
    bridge: "Hands off Month 1 Python engineering directly to Month 2 SQL Analytics by standing up our normalized ShopPulse star schema.",
    takeaways: [
      "Separate dimension tables (customers, products) from fact tables (orders, order_items) to avoid update anomalies.",
      "Always use parameterized ? placeholders in sqlite3 queries to prevent SQL injection.",
      "Verify foreign-key relationships across customers, products, and orders before running analytics."
    ],
    lab: {
      lang: "python",
      title: "Bridge 1->2: Normalized ShopPulse Star Schema Builder",
      prompt: "Create customers and orders tables in SQLite, insert sample rows using parameterized queries, and verify row counts.",
      hint: "Use executemany('INSERT INTO ... VALUES (?, ?, ?)', rows).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE customers (cust_id INT PRIMARY KEY, name TEXT, city TEXT, tier TEXT)')\nconn.execute('CREATE TABLE orders (order_id INT PRIMARY KEY, cust_id INT, order_date TEXT, total_inr REAL)')\n\nconn.executemany('INSERT INTO customers VALUES (?, ?, ?, ?)', [\n    (1, 'Aarav', 'Mumbai', 'Gold'),\n    (2, 'Diya', 'Bengaluru', 'Platinum'),\n    (3, 'Kabir', 'Delhi', 'Silver')\n])\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?, ?)', [\n    (101, 1, '2026-10-05', 6498.0),\n    (102, 2, '2026-10-12', 12999.0),\n    (103, 1, '2026-11-02', 2999.0)\n])\n\nprint('Customers:', conn.execute('SELECT COUNT(*) FROM customers').fetchone()[0])\nprint('Orders   :', conn.execute('SELECT COUNT(*) FROM orders').fetchone()[0])\n"
    }
  },
  {
    day: 29,
    month: 2,
    module: "M2: SQL Analytics",
    title: "SQL Foundations: SELECT, FROM, WHERE & Logical Filtering",
    instructor: "Joey Blue",
    duration: "20m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 0,
    bridge: "Launches Month 2 relational analytics by querying ShopPulse tables with explicit column projections and WHERE predicates.",
    takeaways: [
      "Select explicit column names instead of SELECT * to keep analytics queries clear and fast.",
      "Understand SQL logical execution order: FROM -> WHERE -> SELECT -> ORDER BY -> LIMIT.",
      "Combine compound WHERE filters with explicit parentheses around OR clauses."
    ],
    lab: {
      lang: "python",
      title: "Filtered High-Value Mumbai & Bengaluru Orders Query",
      prompt: "Query delivered orders >= INR 3,000 in Mumbai or Bengaluru from SQLite.",
      hint: "WHERE status = 'Delivered' AND city IN ('Mumbai', 'Bengaluru') AND total_inr >= 3000.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (id INT, city TEXT, status TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?, ?)', [\n    (1, 'Mumbai', 'Delivered', 4999.0),\n    (2, 'Mumbai', 'Cancelled', 6500.0),\n    (3, 'Bengaluru', 'Delivered', 8200.0),\n    (4, 'Delhi', 'Delivered', 5100.0)\n])\n\nrows = conn.execute(\"\"\"\n    SELECT id, city, total_inr\n    FROM orders\n    WHERE status = 'Delivered' AND city IN ('Mumbai', 'Bengaluru') AND total_inr >= 3000;\n\"\"\").fetchall()\nprint(rows)\n"
    }
  },
  {
    day: 30,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Sorting, Deduplication & Pagination: ORDER BY, DISTINCT & LIMIT",
    instructor: "Joey Blue",
    duration: "16m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 1800,
    bridge: "Produces deterministic top-K leaderboards and clean unique dimension lists from raw transaction logs.",
    takeaways: [
      "Always pair LIMIT with an explicit deterministic ORDER BY (including a unique tie-breaker column).",
      "Use SELECT DISTINCT carefully—never use it to mask accidental join fan-out bugs.",
      "Understand how NULL values sort in ascending vs descending order."
    ],
    lab: {
      lang: "python",
      title: "Top-3 Orders Leaderboard & Distinct Active Cities",
      prompt: "Fetch distinct cities and the top 2 highest-value orders ordered by total_inr DESC, id ASC.",
      hint: "Use SELECT DISTINCT city FROM orders and ORDER BY total_inr DESC, id ASC LIMIT 2.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (id INT, city TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [\n    (10, 'Mumbai', 5000.0), (11, 'Pune', 7500.0), (12, 'Mumbai', 7500.0), (13, 'Delhi', 2200.0)\n])\n\ncities = [r[0] for r in conn.execute('SELECT DISTINCT city FROM orders ORDER BY city;').fetchall()]\ntop2 = conn.execute('SELECT id, city, total_inr FROM orders ORDER BY total_inr DESC, id ASC LIMIT 2;').fetchall()\nprint('Active Cities:', cities)\nprint('Top 2 Orders :', top2)\n"
    }
  },
  {
    day: 31,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Pattern Matching & Null Semantics: LIKE, IN, BETWEEN & COALESCE",
    instructor: "Joey Blue",
    duration: "18m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 3200,
    bridge: "Handles three-valued SQL NULL logic cleanly so missing discounts never wipe out arithmetic expressions.",
    takeaways: [
      "Remember that NULL = NULL evaluates to UNKNOWN; always filter with IS NULL / IS NOT NULL.",
      "Wrap nullable numeric columns in COALESCE(discount, 0) before subtracting from gross revenue.",
      "Note that BETWEEN is inclusive on both endpoints (low <= x <= high)."
    ],
    lab: {
      lang: "python",
      title: "NULL-Safe Net Revenue Calculation with COALESCE",
      prompt: "Compute net revenue = gross_inr - COALESCE(discount_inr, 0) for orders matching SKU prefix 'SP-%'.",
      hint: "SELECT id, gross_inr - COALESCE(discount_inr, 0) FROM orders WHERE sku LIKE 'SP-%'.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (id INT, sku TEXT, gross_inr REAL, discount_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?, ?)', [\n    (1, 'SP-101', 4999.0, 500.0),\n    (2, 'SP-102', 2499.0, None),\n    (3, 'ACC-09', 999.0, 100.0)\n])\n\nrows = conn.execute(\"\"\"\n    SELECT id, sku, gross_inr - COALESCE(discount_inr, 0) AS net_inr\n    FROM orders\n    WHERE sku LIKE 'SP-%';\n\"\"\").fetchall()\nprint(rows)\n"
    }
  },
  {
    day: 32,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Aggregations & Grain: COUNT, SUM, AVG, MIN & MAX",
    instructor: "Joey Blue",
    duration: "18m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 4600,
    bridge: "Computes core executive KPIs (GMV, AOV, active buyers) while respecting SQL's NULL-ignoring aggregate rules.",
    takeaways: [
      "COUNT(*) counts all rows including NULLs, whereas COUNT(col) counts only non-NULL values.",
      "Use COUNT(DISTINCT cust_id) to measure unique active buyers rather than total order rows.",
      "Always verify the table grain (one row per order vs one row per line item) before summing."
    ],
    lab: {
      lang: "python",
      title: "Executive GMV, AOV & Unique Buyers Summary",
      prompt: "Compute total orders, unique customers, total GMV, and rounded AOV in a single SQL aggregate query.",
      hint: "SELECT COUNT(*), COUNT(DISTINCT cust_id), SUM(total_inr), ROUND(AVG(total_inr), 2) FROM orders.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (order_id INT, cust_id INT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [\n    (1, 101, 4000.0), (2, 101, 6000.0), (3, 102, 5000.0)\n])\n\nkpis = conn.execute(\"\"\"\n    SELECT COUNT(*) AS orders, COUNT(DISTINCT cust_id) AS buyers, SUM(total_inr) AS gmv, ROUND(AVG(total_inr), 2) AS aov\n    FROM orders;\n\"\"\").fetchone()\nprint(dict(zip(['orders', 'buyers', 'gmv', 'aov'], kpis)))\n"
    }
  },
  {
    day: 33,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Grouping & Post-Aggregation Filtering: GROUP BY vs HAVING",
    instructor: "Joey Blue",
    duration: "16m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 5900,
    bridge: "Separates pre-aggregation row filters (WHERE) from post-aggregation group thresholds (HAVING).",
    takeaways: [
      "Filter raw input rows in WHERE before grouping; filter aggregated group metrics in HAVING.",
      "Every non-aggregated column in SELECT must appear in the GROUP BY clause.",
      "Identify repeat VIP buyers using HAVING COUNT(*) >= 2."
    ],
    lab: {
      lang: "python",
      title: "Repeat High-Value Buyer Identification via HAVING",
      prompt: "Find customers with at least 2 delivered orders and total delivered spend >= INR 8,000.",
      hint: "Filter status = 'Delivered' in WHERE, group by cust_id, and apply HAVING COUNT(*) >= 2 AND SUM(total_inr) >= 8000.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (cust_id INT, status TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [\n    (1, 'Delivered', 4500.0), (1, 'Delivered', 5200.0), (2, 'Delivered', 9500.0), (3, 'Delivered', 2000.0), (3, 'Delivered', 2500.0)\n])\n\nvips = conn.execute(\"\"\"\n    SELECT cust_id, COUNT(*) AS order_cnt, SUM(total_inr) AS total_spend\n    FROM orders\n    WHERE status = 'Delivered'\n    GROUP BY cust_id\n    HAVING COUNT(*) >= 2 AND SUM(total_inr) >= 8000;\n\"\"\").fetchall()\nprint('VIP Repeat Customers:', vips)\n"
    }
  },
  {
    day: 34,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Conditional Metrics & Pivot Columns with CASE WHEN",
    instructor: "Joey Blue",
    duration: "18m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "MpAMjtvarrc",
    startSec: 7100,
    bridge: "Computes conversion rates, cancellation rates, and side-by-side status breakdowns inside a single table scan.",
    takeaways: [
      "Compute conditional counts via SUM(CASE WHEN cond THEN 1 ELSE 0 END).",
      "Compute conversion or cancellation rates safely with 1.0 * SUM(CASE ...) / COUNT(*).",
      "Pivot categorical statuses into clean executive columns without multiple self-joins."
    ],
    lab: {
      lang: "python",
      title: "City-Level Delivery vs Cancellation Rate Pivot",
      prompt: "Compute total orders, delivered count, and cancellation rate % per city in one grouped CASE WHEN query.",
      hint: "ROUND(100.0 * SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(*), 1).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (city TEXT, status TEXT)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [\n    ('Mumbai', 'Delivered'), ('Mumbai', 'Delivered'), ('Mumbai', 'Cancelled'), ('Delhi', 'Delivered'), ('Delhi', 'Cancelled')\n])\n\nstats = conn.execute(\"\"\"\n    SELECT city,\n           COUNT(*) AS total,\n           SUM(CASE WHEN status = 'Delivered' THEN 1 ELSE 0 END) AS delivered,\n           ROUND(100.0 * SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(*), 1) AS cancel_pct\n    FROM orders\n    GROUP BY city;\n\"\"\").fetchall()\nprint(stats)\n"
    }
  },
  {
    day: 35,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Relational Modeling: Primary Keys, Foreign Keys & Normalization",
    instructor: "Joey Blue",
    duration: "20m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 8400,
    bridge: "Designs clean 1-to-many and many-to-many bridge tables (orders -> order_items -> products) without duplicate data.",
    takeaways: [
      "Separate order headers (one row per order) from order_items (one row per SKU line) to avoid double-counting order shipping fees.",
      "Enforce referential integrity with PRIMARY KEY and FOREIGN KEY constraints.",
      "Understand star schemas: central fact tables surrounded by descriptive dimension tables."
    ],
    lab: {
      lang: "python",
      title: "Normalized Order Header & Line-Item Schema Query",
      prompt: "Create products and order_items tables, insert line items, and compute revenue per product category.",
      hint: "Join order_items to products on sku and sum qty * unit_price.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE products (sku TEXT PRIMARY KEY, category TEXT, unit_price REAL)')\nconn.execute('CREATE TABLE order_items (order_id INT, sku TEXT, qty INT)')\nconn.executemany('INSERT INTO products VALUES (?, ?, ?)', [('SP-101', 'Audio', 4999.0), ('SP-102', 'Power', 1499.0)])\nconn.executemany('INSERT INTO order_items VALUES (?, ?, ?)', [(1, 'SP-101', 2), (2, 'SP-102', 3)])\n\nres = conn.execute(\"\"\"\n    SELECT p.category, SUM(oi.qty * p.unit_price) AS rev\n    FROM order_items oi\n    JOIN products p ON oi.sku = p.sku\n    GROUP BY p.category;\n\"\"\").fetchall()\nprint(res)\n"
    }
  },
  {
    day: 36,
    month: 2,
    module: "M2: SQL Analytics",
    title: "INNER JOIN & Multi-Table Star-Schema Queries",
    instructor: "Joey Blue",
    duration: "20m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "MpAMjtvarrc",
    startSec: 9800,
    bridge: "Combines customer attributes, order headers, and product dimensions into rich multi-table analytical views.",
    takeaways: [
      "Always qualify column names with concise table aliases (c.city, o.total_inr) in multi-table joins.",
      "Verify join cardinality (1:1 vs 1:N) so joining line items does not accidentally multiply order-level totals.",
      "Use explicit INNER JOIN ... ON syntax rather than legacy comma joins."
    ],
    lab: {
      lang: "python",
      title: "Three-Table Customer Tier Revenue Breakdown",
      prompt: "Join customers, orders, and order_items to calculate total spend by customer loyalty tier.",
      hint: "Join customers c -> orders o -> order_items oi and group by c.tier.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE customers (cust_id INT, tier TEXT)')\nconn.execute('CREATE TABLE orders (order_id INT, cust_id INT)')\nconn.execute('CREATE TABLE order_items (order_id INT, line_total REAL)')\nconn.executemany('INSERT INTO customers VALUES (?, ?)', [(1, 'Gold'), (2, 'Silver')])\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [(10, 1), (11, 2)])\nconn.executemany('INSERT INTO order_items VALUES (?, ?)', [(10, 4999.0), (10, 1499.0), (11, 2200.0)])\n\nrows = conn.execute(\"\"\"\n    SELECT c.tier, SUM(oi.line_total) AS tier_rev\n    FROM customers c\n    JOIN orders o ON c.cust_id = o.cust_id\n    JOIN order_items oi ON o.order_id = oi.order_id\n    GROUP BY c.tier;\n\"\"\").fetchall()\nprint(rows)\n"
    }
  },
  {
    day: 37,
    month: 2,
    module: "M2: SQL Analytics",
    title: "LEFT JOIN, Anti-Joins & Preserving Zero-Order Customers",
    instructor: "Joey Blue",
    duration: "18m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "MpAMjtvarrc",
    startSec: 11200,
    bridge: "Prevents silent survivor bias by preserving signed-up customers who have zero orders or zero delivered purchases.",
    takeaways: [
      "Place filters on the right-hand table inside the LEFT JOIN ... ON clause rather than WHERE, or LEFT JOIN silently becomes an INNER JOIN.",
      "Find unactivated users via anti-join: LEFT JOIN orders o ON ... WHERE o.order_id IS NULL.",
      "Use COUNT(o.order_id) instead of COUNT(*) on left-joined tables so zero-order users show 0 instead of 1."
    ],
    lab: {
      lang: "python",
      title: "Zero-Order Signup Audit & Full Customer Spend Summary",
      prompt: "LEFT JOIN customers to delivered orders (filtering status in ON) so zero-order customers report 0 orders and 0.0 spend.",
      hint: "LEFT JOIN orders o ON c.cust_id = o.cust_id AND o.status = 'Delivered'.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE customers (cust_id INT, name TEXT)')\nconn.execute('CREATE TABLE orders (order_id INT, cust_id INT, status TEXT, total_inr REAL)')\nconn.executemany('INSERT INTO customers VALUES (?, ?)', [(1, 'Aarav'), (2, 'Sneha'), (3, 'Vikram')])\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?, ?)', [(101, 1, 'Delivered', 4500.0), (102, 2, 'Cancelled', 3000.0)])\n\nrows = conn.execute(\"\"\"\n    SELECT c.name, COUNT(o.order_id) AS delivered_cnt, COALESCE(SUM(o.total_inr), 0) AS spend\n    FROM customers c\n    LEFT JOIN orders o ON c.cust_id = o.cust_id AND o.status = 'Delivered'\n    GROUP BY c.cust_id, c.name\n    ORDER BY spend DESC;\n\"\"\").fetchall()\nprint(rows)\n"
    }
  },
  {
    day: 38,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Self Joins & Cross Joins for Pairwise Product Affinity",
    instructor: "Ankit Bansal",
    duration: "16m",
    videoId: "MpAMjtvarrc",
    altVideoId: "HXV3zeQKqGY",
    startSec: 0,
    bridge: "Discovers 'Frequently Bought Together' SKU pairs directly inside SQL using self-joins on order_id.",
    takeaways: [
      "Join a table to itself using distinct aliases (a, b) to compare rows within the same order or employee hierarchy.",
      "Enforce a.sku < b.sku in market-basket self-joins so pairs are counted once without (A,A) self-pairs.",
      "Use CROSS JOIN deliberately when generating all City x Month calendar grids."
    ],
    lab: {
      lang: "python",
      title: "Market-Basket Co-Purchase Pair Finder in SQL",
      prompt: "Find SKU pairs purchased together in the same order using a self-join with a.sku < b.sku.",
      hint: "JOIN order_items b ON a.order_id = b.order_id AND a.sku < b.sku.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE order_items (order_id INT, sku TEXT)')\nconn.executemany('INSERT INTO order_items VALUES (?, ?)', [\n    (1, 'SP-101'), (1, 'SP-102'), (2, 'SP-101'), (2, 'SP-102'), (2, 'SP-103')\n])\n\npairs = conn.execute(\"\"\"\n    SELECT a.sku AS sku_1, b.sku AS sku_2, COUNT(*) AS co_orders\n    FROM order_items a\n    JOIN order_items b ON a.order_id = b.order_id AND a.sku < b.sku\n    GROUP BY a.sku, b.sku\n    ORDER BY co_orders DESC;\n\"\"\").fetchall()\nprint(pairs)\n"
    }
  },
  {
    day: 39,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Set Operations: UNION, UNION ALL, INTERSECT & EXCEPT",
    instructor: "Joey Blue",
    duration: "15m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "MpAMjtvarrc",
    startSec: 12500,
    bridge: "Stacks web and mobile event streams with UNION ALL and audits dataset diffs with EXCEPT.",
    takeaways: [
      "Prefer UNION ALL over UNION when stacking disjoint partitions so SQL skips expensive sort-deduplication.",
      "Use EXCEPT to find records present in source exports but missing from warehouse tables.",
      "Ensure both SELECT branches share identical column counts and compatible data types."
    ],
    lab: {
      lang: "python",
      title: "App vs Web Channel Unification & Discrepancy Check",
      prompt: "Combine app_orders and web_orders with UNION ALL including a channel tag, and find customers in web but not app via EXCEPT.",
      hint: "SELECT 'app' AS channel, cust_id, total FROM app_orders UNION ALL SELECT 'web', cust_id, total FROM web_orders.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE app_orders (cust_id INT, total REAL)')\nconn.execute('CREATE TABLE web_orders (cust_id INT, total REAL)')\nconn.executemany('INSERT INTO app_orders VALUES (?, ?)', [(1, 2500.0), (2, 3100.0)])\nconn.executemany('INSERT INTO web_orders VALUES (?, ?)', [(2, 4200.0), (3, 5500.0)])\n\ncombined = conn.execute(\"SELECT 'app' AS ch, cust_id, total FROM app_orders UNION ALL SELECT 'web', cust_id, total FROM web_orders;\").fetchall()\nweb_only = conn.execute('SELECT cust_id FROM web_orders EXCEPT SELECT cust_id FROM app_orders;').fetchall()\nprint('Combined Rows:', combined)\nprint('Web-Only Cust:', web_only)\n"
    }
  },
  {
    day: 40,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Scalar, IN & EXISTS Correlated Subqueries",
    instructor: "Ankit Bansal",
    duration: "18m",
    videoId: "MpAMjtvarrc",
    altVideoId: "HXV3zeQKqGY",
    startSec: 960,
    bridge: "Filters customers against dynamic benchmarks and avoids NOT IN NULL-poisoning bugs using NOT EXISTS.",
    takeaways: [
      "Avoid NOT IN (subquery) whenever the subquery can return NULL—use NOT EXISTS instead.",
      "Use scalar subqueries in WHERE to compare rows against global averages.",
      "Use EXISTS for fast semi-joins that stop scanning as soon as one matching child row is found."
    ],
    lab: {
      lang: "python",
      title: "Above-Average Order Filter & Safe NOT EXISTS Churn Check",
      prompt: "Select orders strictly above overall average order value and find customers with no orders via NOT EXISTS.",
      hint: "WHERE total_inr > (SELECT AVG(total_inr) FROM orders).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE customers (cust_id INT, name TEXT)')\nconn.execute('CREATE TABLE orders (order_id INT, cust_id INT, total_inr REAL)')\nconn.executemany('INSERT INTO customers VALUES (?, ?)', [(1, 'Aarav'), (2, 'Diya')])\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [(10, 1, 2000.0), (11, 1, 8000.0)])\n\nabove_avg = conn.execute('SELECT order_id, total_inr FROM orders WHERE total_inr > (SELECT AVG(total_inr) FROM orders);').fetchall()\nno_orders = conn.execute('SELECT name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.cust_id = c.cust_id);').fetchall()\nprint('Above Avg Orders:', above_avg)\nprint('Zero-Order Cust :', no_orders)\n"
    }
  },
  {
    day: 41,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Common Table Expressions (WITH CTEs) for Modular SQL",
    instructor: "Ankit Bansal",
    duration: "18m",
    videoId: "MpAMjtvarrc",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 2100,
    bridge: "Replaces unreadable nested subqueries with step-by-step named CTE building blocks.",
    takeaways: [
      "Chain multiple CTEs (WITH step1 AS (...), step2 AS (...)) so complex pipelines read top-to-bottom.",
      "Pre-aggregate fact tables inside a CTE before joining to avoid accidental row multiplication.",
      "Give every CTE a clear grain-descriptive name (e.g., customer_monthly_spend)."
    ],
    lab: {
      lang: "python",
      title: "Multi-CTE Customer LTV & Segment Summary",
      prompt: "Build a CTE computing per-customer total spend, then aggregate average LTV by loyalty tier.",
      hint: "WITH cust_ltv AS (SELECT cust_id, SUM(total_inr) AS ltv FROM orders GROUP BY cust_id) SELECT ...",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE customers (cust_id INT, tier TEXT)')\nconn.execute('CREATE TABLE orders (cust_id INT, total_inr REAL)')\nconn.executemany('INSERT INTO customers VALUES (?, ?)', [(1, 'Gold'), (2, 'Gold'), (3, 'Silver')])\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [(1, 6000.0), (1, 4000.0), (2, 8000.0), (3, 3000.0)])\n\nres = conn.execute(\"\"\"\n    WITH cust_ltv AS (\n        SELECT cust_id, SUM(total_inr) AS ltv\n        FROM orders\n        GROUP BY cust_id\n    )\n    SELECT c.tier, ROUND(AVG(cl.ltv), 2) AS avg_ltv\n    FROM customers c\n    JOIN cust_ltv cl ON c.cust_id = cl.cust_id\n    GROUP BY c.tier;\n\"\"\").fetchall()\nprint(res)\n"
    }
  },
  {
    day: 42,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Recursive CTEs for Date Spines & Hierarchical Trees",
    instructor: "Ankit Bansal",
    duration: "16m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 0,
    bridge: "Generates continuous calendar date spines so days with zero orders still appear as 0 in time-series charts.",
    takeaways: [
      "Structure recursive CTEs with an anchor SELECT, UNION ALL, and a terminating recursive step.",
      "Left-join daily order aggregates onto a generated date spine to eliminate missing-date gaps.",
      "Traverse category parent-child hierarchies cleanly using recursive depth tracking."
    ],
    lab: {
      lang: "python",
      title: "Zero-Gap Daily Revenue Spine with Recursive CTE",
      prompt: "Generate a 5-day date spine ('2026-11-01' to '2026-11-05') and LEFT JOIN sparse daily orders to show 0 on quiet days.",
      hint: "WITH RECURSIVE dates(d) AS (SELECT '2026-11-01' UNION ALL SELECT date(d, '+1 day') FROM dates WHERE d < '2026-11-05').",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE daily_sales (order_date TEXT, rev REAL)')\nconn.executemany('INSERT INTO daily_sales VALUES (?, ?)', [('2026-11-01', 5000.0), ('2026-11-03', 8200.0), ('2026-11-05', 6100.0)])\n\nrows = conn.execute(\"\"\"\n    WITH RECURSIVE dates(d) AS (\n        SELECT '2026-11-01'\n        UNION ALL\n        SELECT date(d, '+1 day') FROM dates WHERE d < '2026-11-05'\n    )\n    SELECT dates.d, COALESCE(ds.rev, 0.0) AS rev\n    FROM dates\n    LEFT JOIN daily_sales ds ON dates.d = ds.order_date;\n\"\"\").fetchall()\nprint(rows)\n"
    }
  },
  {
    day: 43,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Window Functions Part 1: OVER(), PARTITION BY & Running Totals",
    instructor: "Ankit Bansal",
    duration: "20m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 1020,
    bridge: "Computes cumulative revenue and each order's share of customer spend without collapsing individual rows.",
    takeaways: [
      "Window functions compute group aggregates across OVER (PARTITION BY ...) while preserving original row grain.",
      "Add ORDER BY inside OVER() to turn SUM() into a running cumulative total.",
      "Compute % share of city revenue cleanly via total_inr / SUM(total_inr) OVER (PARTITION BY city)."
    ],
    lab: {
      lang: "python",
      title: "Cumulative Customer Spend & Order Share Query",
      prompt: "For each order, compute running cumulative spend per customer and % share of that customer's total spend.",
      hint: "SUM(rev) OVER (PARTITION BY cust_id ORDER BY order_date) and SUM(rev) OVER (PARTITION BY cust_id).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (cust_id INT, order_date TEXT, rev REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [\n    (1, '2026-10-01', 2000.0), (1, '2026-10-15', 3000.0), (1, '2026-11-01', 5000.0)\n])\n\nrows = conn.execute(\"\"\"\n    SELECT order_date,\n           rev,\n           SUM(rev) OVER (PARTITION BY cust_id ORDER BY order_date) AS running_rev,\n           ROUND(100.0 * rev / SUM(rev) OVER (PARTITION BY cust_id), 1) AS share_pct\n    FROM orders;\n\"\"\").fetchall()\nprint(rows)\n"
    }
  },
  {
    day: 44,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Ranking Windows: ROW_NUMBER, RANK & DENSE_RANK (Top-N per Group)",
    instructor: "Ankit Bansal",
    duration: "18m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 2220,
    bridge: "Solves the #1 SQL interview and analytics pattern: extracting the Top-N products or latest order per category/user.",
    takeaways: [
      "ROW_NUMBER assigns unique 1,2,3 ranks; RANK leaves gaps on ties (1,1,3); DENSE_RANK keeps consecutive ranks (1,1,2).",
      "Filter window ranks inside an outer query or CTE (WHERE rn <= 2) because window functions run after WHERE.",
      "Use ROW_NUMBER() OVER (PARTITION BY cust_id ORDER BY order_date DESC) = 1 to fetch each customer's latest order."
    ],
    lab: {
      lang: "python",
      title: "Top-2 Highest Revenue SKUs per City",
      prompt: "Rank SKUs within each city by revenue descending and filter to the top 2 per city.",
      hint: "Use DENSE_RANK() OVER (PARTITION BY city ORDER BY rev DESC) inside a CTE, then WHERE rnk <= 2.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE city_sku (city TEXT, sku TEXT, rev REAL)')\nconn.executemany('INSERT INTO city_sku VALUES (?, ?, ?)', [\n    ('Mumbai', 'SP-101', 9000), ('Mumbai', 'SP-102', 7000), ('Mumbai', 'SP-103', 4000),\n    ('Delhi', 'SP-102', 8500), ('Delhi', 'SP-101', 6000), ('Delhi', 'SP-104', 3000)\n])\n\ntop2 = conn.execute(\"\"\"\n    WITH ranked AS (\n        SELECT city, sku, rev, DENSE_RANK() OVER (PARTITION BY city ORDER BY rev DESC) AS rnk\n        FROM city_sku\n    )\n    SELECT city, sku, rev FROM ranked WHERE rnk <= 2;\n\"\"\").fetchall()\nprint(top2)\n"
    }
  },
  {
    day: 45,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Offset Windows: LAG, LEAD & Period-over-Period Growth",
    instructor: "Ankit Bansal",
    duration: "18m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 3360,
    bridge: "Computes Month-over-Month revenue growth and inter-order days between consecutive customer purchases without self-joins.",
    takeaways: [
      "LAG(col, 1) accesses the preceding row in the partition; LEAD(col, 1) accesses the following row.",
      "Compute MoM % growth via ROUND(100.0 * (rev - LAG(rev) OVER (...)) / LAG(rev) OVER (...), 1).",
      "Compute inter-order repurchase intervals using julianday(order_date) - julianday(LAG(order_date) OVER (...))."
    ],
    lab: {
      lang: "python",
      title: "Month-over-Month Revenue Growth Calculator",
      prompt: "Compute prior-month revenue and MoM percentage growth across monthly ShopPulse revenue rows.",
      hint: "Use LAG(rev) OVER (ORDER BY month) in a CTE, then compute percentage delta.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE monthly_rev (month TEXT, rev REAL)')\nconn.executemany('INSERT INTO monthly_rev VALUES (?, ?)', [\n    ('2026-08', 100000.0), ('2026-09', 115000.0), ('2026-10', 138000.0)\n])\n\nmom = conn.execute(\"\"\"\n    WITH lagged AS (\n        SELECT month, rev, LAG(rev) OVER (ORDER BY month) AS prev_rev\n        FROM monthly_rev\n    )\n    SELECT month, rev, prev_rev, ROUND(100.0 * (rev - prev_rev) / prev_rev, 1) AS mom_pct\n    FROM lagged;\n\"\"\").fetchall()\nprint(mom)\n"
    }
  },
  {
    day: 46,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Window Frames: ROWS BETWEEN Moving Averages & Rolling Windows",
    instructor: "Ankit Bansal",
    duration: "17m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 4500,
    bridge: "Smooths noisy daily order spikes into 3-day and 7-day rolling averages using explicit ROWS BETWEEN frame bounds.",
    takeaways: [
      "Specify ROWS BETWEEN 2 PRECEDING AND CURRENT ROW for a true 3-row trailing moving average.",
      "Understand why default RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW groups tied ORDER BY values together.",
      "Use ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING for partition-wide totals."
    ],
    lab: {
      lang: "python",
      title: "3-Day Trailing Moving Average of Daily Revenue",
      prompt: "Compute a 3-day trailing moving average over daily revenue using ROWS BETWEEN 2 PRECEDING AND CURRENT ROW.",
      hint: "ROUND(AVG(rev) OVER (ORDER BY day ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE daily (day TEXT, rev REAL)')\nconn.executemany('INSERT INTO daily VALUES (?, ?)', [\n    ('D1', 4000), ('D2', 5000), ('D3', 6000), ('D4', 9000), ('D5', 6000)\n])\n\nma = conn.execute(\"\"\"\n    SELECT day, rev,\n           ROUND(AVG(rev) OVER (ORDER BY day ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS ma_3d\n    FROM daily;\n\"\"\").fetchall()\nprint(ma)\n"
    }
  },
  {
    day: 47,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Date Bucketing, Cohort Assignment & Retention Matrices in SQL",
    instructor: "Ankit Bansal",
    duration: "22m",
    videoId: "MpAMjtvarrc",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 3300,
    bridge: "Assigns every buyer to their first-purchase acquisition cohort month and tracks repeat retention over subsequent months.",
    takeaways: [
      "Anchor each customer's cohort month via MIN(strftime('%Y-%m', order_date)) OVER (PARTITION BY cust_id).",
      "Compute cohort month offset (0, 1, 2...) from order month minus cohort month.",
      "Measure cohort retention as active_users_in_month_k / cohort_size_in_month_0."
    ],
    lab: {
      lang: "python",
      title: "First-Order Acquisition Cohort Retention Query",
      prompt: "Assign each customer to their first order month and count active customers by cohort_month and order_month.",
      hint: "Use MIN(substr(order_date, 1, 7)) OVER (PARTITION BY cust_id) AS cohort.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (cust_id INT, order_date TEXT)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [\n    (1, '2026-09-05'), (1, '2026-10-10'), (2, '2026-09-18'), (3, '2026-10-02')\n])\n\ncohorts = conn.execute(\"\"\"\n    WITH tagged AS (\n        SELECT cust_id,\n               substr(order_date, 1, 7) AS order_m,\n               MIN(substr(order_date, 1, 7)) OVER (PARTITION BY cust_id) AS cohort_m\n        FROM orders\n    )\n    SELECT cohort_m, order_m, COUNT(DISTINCT cust_id) AS active_buyers\n    FROM tagged\n    GROUP BY cohort_m, order_m\n    ORDER BY cohort_m, order_m;\n\"\"\").fetchall()\nprint(cohorts)\n"
    }
  },
  {
    day: 48,
    month: 2,
    module: "M2: SQL Analytics",
    title: "RFM Customer Segmentation & Percentile NTILE Bucketing",
    instructor: "Ankit Bansal",
    duration: "18m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 5600,
    bridge: "Scores customers on Recency, Frequency, and Monetary spend using SQL NTILE() quartiles.",
    takeaways: [
      "Compute Recency (days since last order), Frequency (order count), and Monetary (total spend) per customer.",
      "Bucket customers into quartiles or deciles using NTILE(4) OVER (ORDER BY metric).",
      "Combine RFM scores to surface 'Champions' vs 'At-Risk High Spenders'."
    ],
    lab: {
      lang: "python",
      title: "SQL NTILE Monetary Spend Quartile Scorer",
      prompt: "Aggregate total spend per customer and assign NTILE(4) spend tiers (4 = highest spenders).",
      hint: "NTILE(4) OVER (ORDER BY SUM(rev) ASC) AS m_score.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (cust_id INT, rev REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [\n    (1, 2000), (2, 5000), (3, 12000), (4, 28000), (1, 1000)\n])\n\nrfm = conn.execute(\"\"\"\n    SELECT cust_id, SUM(rev) AS monetary,\n           NTILE(4) OVER (ORDER BY SUM(rev) ASC) AS spend_quartile\n    FROM orders\n    GROUP BY cust_id\n    ORDER BY monetary DESC;\n\"\"\").fetchall()\nprint(rfm)\n"
    }
  },
  {
    day: 49,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Funnel Conversion & Drop-Off Analysis in Pure SQL",
    instructor: "Ankit Bansal",
    duration: "18m",
    videoId: "MpAMjtvarrc",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 4680,
    bridge: "Measures step-by-step user progression across view -> cart -> checkout -> purchase events.",
    takeaways: [
      "Aggregate user-level stage flags with MAX(CASE WHEN event = 'purchase' THEN 1 ELSE 0 END).",
      "Compute both step-to-step conversion and overall top-of-funnel conversion rates.",
      "Pinpoint the stage with the steepest drop-off for A/B experiment prioritization."
    ],
    lab: {
      lang: "python",
      title: "4-Stage E-Commerce Funnel Conversion Query",
      prompt: "Compute unique users at view, cart, and purchase stages plus overall view-to-purchase conversion %.",
      hint: "Aggregate per user first with MAX(CASE WHEN stage = ... THEN 1 ELSE 0 END), then sum across users.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE events (user_id INT, stage TEXT)')\nconn.executemany('INSERT INTO events VALUES (?, ?)', [\n    (1, 'view'), (1, 'cart'), (1, 'purchase'),\n    (2, 'view'), (2, 'cart'),\n    (3, 'view'), (4, 'view')\n])\n\nfunnel = conn.execute(\"\"\"\n    WITH u AS (\n        SELECT user_id,\n               MAX(CASE WHEN stage = 'view' THEN 1 ELSE 0 END) AS v,\n               MAX(CASE WHEN stage = 'cart' THEN 1 ELSE 0 END) AS c,\n               MAX(CASE WHEN stage = 'purchase' THEN 1 ELSE 0 END) AS p\n        FROM events GROUP BY user_id\n    )\n    SELECT SUM(v) AS views, SUM(c) AS carts, SUM(p) AS purchases,\n           ROUND(100.0 * SUM(p) / SUM(v), 1) AS conv_pct\n    FROM u;\n\"\"\").fetchone()\nprint(dict(zip(['views', 'carts', 'purchases', 'conv_pct'], funnel)))\n"
    }
  },
  {
    day: 50,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Gap-and-Island Streak Detection with ROW_NUMBER Differences",
    instructor: "Ankit Bansal",
    duration: "19m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 6720,
    bridge: "Detects consecutive active buying days and uninterrupted SLA streaks using the classic date minus row-number invariant.",
    takeaways: [
      "Subtracting sequential ROW_NUMBER() days from consecutive dates yields a constant island anchor date.",
      "Group by (user_id, island_anchor) to compute streak start, streak end, and streak length.",
      "Apply the same pattern to detect consecutive failed payment attempts or downtime windows."
    ],
    lab: {
      lang: "python",
      title: "Consecutive Active Day Streak Finder",
      prompt: "Find the longest streak of consecutive purchase dates for customer 1.",
      hint: "Compute date(order_date, '-' || ROW_NUMBER() OVER (ORDER BY order_date) || ' days') AS grp and group by grp.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE logins (day TEXT)')\nconn.executemany('INSERT INTO logins VALUES (?)', [\n    ('2026-11-01',), ('2026-11-02',), ('2026-11-03',), ('2026-11-06',), ('2026-11-07',)\n])\n\nstreaks = conn.execute(\"\"\"\n    WITH grouped AS (\n        SELECT day, date(day, '-' || ROW_NUMBER() OVER (ORDER BY day) || ' days') AS island\n        FROM logins\n    )\n    SELECT MIN(day) AS start_day, MAX(day) AS end_day, COUNT(*) AS streak_len\n    FROM grouped\n    GROUP BY island\n    ORDER BY streak_len DESC;\n\"\"\").fetchall()\nprint(streaks)\n"
    }
  },
  {
    day: 51,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Views, Constraints, Transactions & ACID Guarantees",
    instructor: "Joey Blue",
    duration: "18m",
    videoId: "HXV3zeQKqGY",
    altVideoId: "pd-0G0MigUA",
    startSec: 13600,
    bridge: "Encapsulates governed KPI logic in reusable SQL VIEWS and protects multi-step writes with atomic transactions.",
    takeaways: [
      "Publish standardized KPI definitions as SQL VIEWs so BI dashboards and Python scripts query one source of truth.",
      "Wrap multi-table updates inside explicit BEGIN / COMMIT transactions so partial failures roll back cleanly.",
      "Enforce CHECK and NOT NULL constraints at the schema layer."
    ],
    lab: {
      lang: "python",
      title: "Governed Executive KPI View & Atomic Rollback Check",
      prompt: "Create a VIEW v_city_summary and verify that a failed transaction rolls back cleanly without corrupting balances.",
      hint: "CREATE VIEW v_city_summary AS SELECT city, SUM(rev) AS total_rev FROM orders GROUP BY city.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (city TEXT, rev REAL CHECK(rev > 0))')\nconn.execute(\"INSERT INTO orders VALUES ('Mumbai', 5000.0)\")\nconn.execute('CREATE VIEW v_city_summary AS SELECT city, SUM(rev) AS total_rev FROM orders GROUP BY city;')\n\ntry:\n    with conn:\n        conn.execute(\"INSERT INTO orders VALUES ('Pune', 3000.0)\")\n        conn.execute(\"INSERT INTO orders VALUES ('Delhi', -50.0)\")\nexcept sqlite3.IntegrityError:\n    pass\n\nprint('View after atomic rollback:', conn.execute('SELECT * FROM v_city_summary;').fetchall())\n"
    }
  },
  {
    day: 52,
    month: 2,
    module: "M2: SQL Analytics",
    title: "B-Tree Indexes, Composite Keys & EXPLAIN QUERY PLAN",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "pd-0G0MigUA",
    altVideoId: "HXV3zeQKqGY",
    startSec: 1500,
    bridge: "Accelerates slow table scans into logarithmic B-tree index lookups verified via EXPLAIN QUERY PLAN.",
    takeaways: [
      "Create indexes on high-selectivity foreign keys and frequent WHERE / ORDER BY filter columns.",
      "Order composite index columns (city, order_date) with equality filters first and range filters second.",
      "Verify index adoption using EXPLAIN QUERY PLAN (SEARCH USING INDEX vs SCAN TABLE)."
    ],
    lab: {
      lang: "python",
      title: "Verifying B-Tree Index Adoption with EXPLAIN QUERY PLAN",
      prompt: "Create a composite index on (city, order_date) and inspect SQLite's EXPLAIN QUERY PLAN output.",
      hint: "CREATE INDEX idx_city_date ON orders(city, order_date); then run EXPLAIN QUERY PLAN SELECT ...",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (id INT, city TEXT, order_date TEXT, rev REAL)')\nconn.execute('CREATE INDEX idx_city_date ON orders(city, order_date);')\n\nplan = conn.execute(\"\"\"\n    EXPLAIN QUERY PLAN\n    SELECT * FROM orders WHERE city = 'Mumbai' AND order_date >= '2026-10-01';\n\"\"\").fetchall()\nprint('Query Plan:', plan)\n"
    }
  },
  {
    day: 53,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Query Optimization: SARGable Predicates & Join Fan-Out Traps",
    instructor: "Ankit Bansal",
    duration: "16m",
    videoId: "MpAMjtvarrc",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 5820,
    bridge: "Eliminates index-breaking functions in WHERE clauses and prevents 1:N join fan-out inflation.",
    takeaways: [
      "Keep indexed columns bare in WHERE (order_date >= '2026-10-01') rather than wrapping them in strftime(order_date).",
      "Pre-aggregate child tables in CTEs before joining to parent tables so totals never inflate.",
      "Filter early inside CTEs to shrink intermediate join row counts."
    ],
    lab: {
      lang: "python",
      title: "Fixing 1:N Join Fan-Out Revenue Inflation",
      prompt: "Join customers with pre-aggregated orders and pre-aggregated support tickets without duplicating order revenue.",
      hint: "Aggregate orders by cust_id in one CTE and tickets by cust_id in a second CTE before joining to customers.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (cust_id INT, rev REAL)')\nconn.execute('CREATE TABLE tickets (cust_id INT, ticket_id INT)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [(1, 5000.0)])\nconn.executemany('INSERT INTO tickets VALUES (?, ?)', [(1, 10), (1, 11), (1, 12)])\n\nrow = conn.execute(\"\"\"\n    WITH o_agg AS (SELECT cust_id, SUM(rev) AS rev FROM orders GROUP BY cust_id),\n         t_agg AS (SELECT cust_id, COUNT(*) AS t_cnt FROM tickets GROUP BY cust_id)\n    SELECT o_agg.cust_id, o_agg.rev, t_agg.t_cnt\n    FROM o_agg JOIN t_agg ON o_agg.cust_id = t_agg.cust_id;\n\"\"\").fetchone()\nprint('Fan-out Free Result:', row)\n"
    }
  },
  {
    day: 54,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Data Quality Assertions & Deduplication Pipelines in SQL",
    instructor: "Ankit Bansal",
    duration: "15m",
    videoId: "C7ZZuuwrsVc",
    altVideoId: "MpAMjtvarrc",
    startSec: 7900,
    bridge: "Builds automated SQL data-quality gates that deduplicate webhook retries and flag null/negative anomalies.",
    takeaways: [
      "Deduplicate latest event snapshots deterministically using ROW_NUMBER() OVER (PARTITION BY event_id ORDER BY updated_at DESC) = 1.",
      "Run automated SQL assertion queries checking for null keys, duplicate IDs, and negative totals.",
      "Block downstream ML feature builds whenever critical data quality checks fail."
    ],
    lab: {
      lang: "python",
      title: "Webhook Event Deduplicator with ROW_NUMBER()",
      prompt: "Deduplicate duplicate webhook events keeping only the latest updated_at timestamp per event_id.",
      hint: "Partition by event_id, order by updated_at DESC, and keep rn = 1.",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE webhooks (event_id TEXT, status TEXT, updated_at TEXT)')\nconn.executemany('INSERT INTO webhooks VALUES (?, ?, ?)', [\n    ('EV-1', 'PENDING', '2026-11-01T10:00:00'),\n    ('EV-1', 'PAID', '2026-11-01T10:02:00'),\n    ('EV-2', 'PAID', '2026-11-01T10:05:00')\n])\n\nclean = conn.execute(\"\"\"\n    WITH dedup AS (\n        SELECT event_id, status, ROW_NUMBER() OVER (PARTITION BY event_id ORDER BY updated_at DESC) AS rn\n        FROM webhooks\n    )\n    SELECT event_id, status FROM dedup WHERE rn = 1;\n\"\"\").fetchall()\nprint(clean)\n"
    }
  },
  {
    day: 55,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Capstone 2A: ShopPulse Executive KPI & Cohort Retention Views",
    instructor: "Ankit Bansal",
    duration: "22m",
    videoId: "MpAMjtvarrc",
    altVideoId: "C7ZZuuwrsVc",
    startSec: 6900,
    bridge: "Synthesizes CTEs, window functions, joins, and views into a production ShopPulse executive reporting layer.",
    takeaways: [
      "Combine customer demographics, order revenue, and cohort retention into clean SQL views.",
      "Validate KPI totals against raw source tables to guarantee zero reconciliation drift.",
      "Expose clean SQL views ready for direct Pandas consumption on Day 56."
    ],
    lab: {
      lang: "python",
      title: "Capstone 2A: Executive City & Tier Performance Mart",
      prompt: "Build and query an executive summary combining city revenue, order count, AOV, and top-city rank.",
      hint: "Use CTE city_metrics with GROUP BY city, then RANK() OVER (ORDER BY rev DESC).",
      starterCode: "import sqlite3\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (city TEXT, rev REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?)', [\n    ('Mumbai', 6500), ('Mumbai', 4500), ('Bengaluru', 8500), ('Bengaluru', 5500), ('Delhi', 4000)\n])\n\nmart = conn.execute(\"\"\"\n    WITH cm AS (\n        SELECT city, COUNT(*) AS orders, SUM(rev) AS rev, ROUND(AVG(rev), 2) AS aov\n        FROM orders GROUP BY city\n    )\n    SELECT RANK() OVER (ORDER BY rev DESC) AS rnk, city, orders, rev, aov FROM cm;\n\"\"\").fetchall()\nfor r in mart:\n    print(r)\n"
    }
  },
  {
    day: 56,
    month: 2,
    module: "M2: SQL Analytics",
    title: "Bridge 2->3: SQL-to-Pandas Feature Extraction & Hybrid Workflows",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "pd-0G0MigUA",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 2100,
    bridge: "Hands off Month 2 SQL Analytics to Month 3 NumPy & Pandas by loading relational query outputs directly into typed DataFrames.",
    takeaways: [
      "Push heavy joins, filtering, and initial aggregations down to SQL before loading into Pandas.",
      "Use pd.read_sql_query(sql, conn, parse_dates=['order_date']) to preserve clean dtypes on load.",
      "Combine SQL's relational power with Pandas' vectorized statistical and time-series toolkit."
    ],
    lab: {
      lang: "python",
      title: "Bridge 2->3: Loading SQLite Mart into Pandas DataFrame",
      prompt: "Execute a grouped SQLite query via pd.read_sql_query() and inspect DataFrame shape, dtypes, and summary.",
      hint: "df = pd.read_sql_query('SELECT ...', conn).",
      starterCode: "import sqlite3\nimport pandas as pd\n\nconn = sqlite3.connect(':memory:')\nconn.execute('CREATE TABLE orders (cust_id INT, city TEXT, rev REAL)')\nconn.executemany('INSERT INTO orders VALUES (?, ?, ?)', [\n    (1, 'Mumbai', 4999.0), (1, 'Mumbai', 2499.0), (2, 'Bengaluru', 8999.0)\n])\n\ndf = pd.read_sql_query('SELECT cust_id, city, COUNT(*) AS orders, SUM(rev) AS spend FROM orders GROUP BY cust_id, city;', conn)\nprint(df)\n"
    }
  },
  {
    day: 57,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "NumPy Foundations: ndarrays, dtypes, Shapes & Memory Layout",
    instructor: "Keith Galli",
    duration: "18m",
    videoId: "QUT1VHiLmmI",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 0,
    bridge: "Launches Month 3 numerical computing with contiguous typed NumPy ndarrays that power Pandas and Scikit-Learn.",
    takeaways: [
      "Inspect .shape, .ndim, .dtype, and .nbytes on every array to catch accidental object dtypes early.",
      "Initialize arrays cleanly with np.array(), np.zeros(), np.ones(), np.arange(), and np.linspace().",
      "Specify float64 / float32 or int64 explicitly for predictable numerical precision."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse Order Matrix Shape & Dtype Inspector",
      prompt: "Create a 2D float64 NumPy array of [orders, revenue_inr, avg_rating] for 4 cities and print shape, dtype, and column means.",
      hint: "arr = np.array(..., dtype=np.float64); arr.mean(axis=0).",
      starterCode: "import numpy as np\n\nmetrics = np.array([\n    [120, 480000.0, 4.7],\n    [145, 610000.0, 4.8],\n    [95,  350000.0, 4.5],\n    [110, 420000.0, 4.6]\n], dtype=np.float64)\n\nprint('Shape:', metrics.shape, '| Dtype:', metrics.dtype)\nprint('Column Means:', np.round(metrics.mean(axis=0), 2))\n"
    }
  },
  {
    day: 58,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Indexing, Slicing, Views vs Copies & Boolean Masking",
    instructor: "Keith Galli",
    duration: "18m",
    videoId: "QUT1VHiLmmI",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 1080,
    bridge: "Filters millions of numerical telemetry points in microseconds using vectorized boolean masks.",
    takeaways: [
      "Basic slices (arr[1:3]) return zero-copy views sharing memory; boolean/fancy indexing returns independent copies.",
      "Combine boolean masks using bitwise &, |, and ~ with parentheses around each comparison.",
      "Call .copy() explicitly whenever mutating a sliced subset."
    ],
    lab: {
      lang: "python",
      title: "Vectorized High-Value Order Masking",
      prompt: "Filter order revenues between INR 2,500 and INR 10,000 using a compound NumPy boolean mask.",
      hint: "mask = (revs >= 2500) & (revs <= 10000); filtered = revs[mask].",
      starterCode: "import numpy as np\n\nrevs = np.array([1200.0, 2800.0, 4999.0, 14500.0, 7200.0, 999.0])\nmask = (revs >= 2500.0) & (revs <= 10000.0)\nfiltered = revs[mask]\n\nprint('Filtered Orders:', filtered)\nprint('Filtered Mean  : INR', round(float(filtered.mean()), 2))\n"
    }
  },
  {
    day: 59,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Vectorized Arithmetic, Universal Functions (ufuncs) & Speed",
    instructor: "Keith Galli",
    duration: "16m",
    videoId: "QUT1VHiLmmI",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 2160,
    bridge: "Replaces slow Python element-by-element loops with C-speed vectorized arithmetic, log1p transforms, and np.where.",
    takeaways: [
      "Apply arithmetic operators (+, -, *, /) and ufuncs (np.log1p, np.sqrt, np.clip) across entire arrays at once.",
      "Use np.where(cond, val_if_true, val_if_false) for vectorized conditional labeling.",
      "Use np.log1p(x) instead of np.log(x) when values can be zero."
    ],
    lab: {
      lang: "python",
      title: "Vectorized GST, Discount & Log-Revenue Transform",
      prompt: "Apply 10% discount to orders >= 5000 via np.where, add 18% GST, and compute np.log1p(gross).",
      hint: "discounted = np.where(base >= 5000, base * 0.90, base).",
      starterCode: "import numpy as np\n\nbase = np.array([2000.0, 5000.0, 8000.0, 1500.0])\ndiscounted = np.where(base >= 5000.0, base * 0.90, base)\ngross = np.round(discounted * 1.18, 2)\nlog_gross = np.round(np.log1p(gross), 3)\n\nprint('Gross INR:', gross)\nprint('Log1p    :', log_gross)\n"
    }
  },
  {
    day: 60,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Broadcasting Rules & Axis-Wise Reductions (axis=0 vs axis=1)",
    instructor: "Keith Galli",
    duration: "18m",
    videoId: "QUT1VHiLmmI",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 3120,
    bridge: "Standardizes multi-feature matrices in one vectorized expression using NumPy trailing-dimension broadcasting.",
    takeaways: [
      "Remember: axis=0 collapses rows (down columns), while axis=1 collapses columns (across each row).",
      "NumPy broadcasts shapes from right to left when dimensions are equal or one of them is 1.",
      "Standardize every feature column cleanly via (X - X.mean(axis=0)) / X.std(axis=0)."
    ],
    lab: {
      lang: "python",
      title: "Z-Score Feature Matrix Standardization via Broadcasting",
      prompt: "Standardize a (4, 3) customer feature matrix column-wise using axis=0 mean and std.",
      hint: "X_std = (X - X.mean(axis=0)) / X.std(axis=0).",
      starterCode: "import numpy as np\n\nX = np.array([\n    [2.0, 4000.0, 10.0],\n    [6.0, 18000.0, 5.0],\n    [4.0, 10000.0, 20.0],\n    [8.0, 24000.0, 2.0]\n])\n\nX_std = (X - X.mean(axis=0)) / X.std(axis=0)\nprint('Standardized Matrix:\\n', np.round(X_std, 3))\nprint('Column Means:', np.round(X_std.mean(axis=0), 6))\n"
    }
  },
  {
    day: 61,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Reshaping, Stacking & Linear Algebra Helpers",
    instructor: "Keith Galli",
    duration: "15m",
    videoId: "QUT1VHiLmmI",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 4200,
    bridge: "Prepares 1D feature columns into 2D (n_samples, n_features) design matrices expected by Scikit-Learn.",
    takeaways: [
      "Use .reshape(-1, 1) to promote a 1D feature vector of length N into a 2D (N, 1) column matrix.",
      "Combine feature columns horizontally with np.column_stack([col1, col2]) or np.hstack().",
      "Use @ for clean matrix multiplication and dot products."
    ],
    lab: {
      lang: "python",
      title: "Design Matrix Assembly & Weighted Score Dot Product",
      prompt: "Stack two 1D feature arrays with an intercept column of ones and compute batch linear scores via X @ weights.",
      hint: "X = np.column_stack([np.ones(len(orders)), orders, tenure]).",
      starterCode: "import numpy as np\n\norders = np.array([2.0, 5.0, 8.0])\ntenure = np.array([3.0, 12.0, 24.0])\nX = np.column_stack([np.ones(len(orders)), orders, tenure])\nw = np.array([1000.0, 1800.0, 250.0])\n\nscores = X @ w\nprint('Design Matrix Shape:', X.shape)\nprint('Predicted LTV INR  :', scores)\n"
    }
  },
  {
    day: 62,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Random Number Generation (default_rng) & Monte Carlo Simulation",
    instructor: "Keith Galli",
    duration: "16m",
    videoId: "QUT1VHiLmmI",
    altVideoId: "XNgt7F6FqDU",
    startSec: 5100,
    bridge: "Simulates revenue uncertainty, A/B traffic splits, and inventory stockout risk using seeded reproducible generators.",
    takeaways: [
      "Always instantiate explicit seeded generators via rng = np.random.default_rng(42) instead of legacy global np.random.",
      "Simulate thousands of business scenarios in vectorized matrices without Python loops.",
      "Extract risk percentiles (P5, P50, P95) directly from simulated distributions."
    ],
    lab: {
      lang: "python",
      title: "Monte Carlo Monthly Revenue Risk Simulator",
      prompt: "Simulate 5,000 months where daily orders ~ Normal(100, 15) and AOV ~ Normal(3200, 400), reporting P10, P50, and P90.",
      hint: "rev_sim = (orders_sim * aov_sim) * 30; np.percentile(rev_sim, [10, 50, 90]).",
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\ndaily_orders = rng.normal(100, 15, size=5000)\naov = rng.normal(3200, 400, size=5000)\nmonthly_rev = daily_orders * aov * 30\n\np10, p50, p90 = np.percentile(monthly_rev, [10, 50, 90])\nprint(f'Monthly Rev -> P10: INR {p10:,.0f} | Median: INR {p50:,.0f} | P90: INR {p90:,.0f}')\n"
    }
  },
  {
    day: 63,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Pandas Series, DataFrames, Indexes & Schema Inspection",
    instructor: "Corey Schafer",
    duration: "20m",
    videoId: "ZyhVh-qRZPA",
    altVideoId: "zmdjNSmRXF4",
    startSec: 0,
    bridge: "Transitions from homogeneous NumPy matrices to labeled, heterogeneous Pandas DataFrames for real business tables.",
    takeaways: [
      "Inspect every newly loaded DataFrame with .shape, .dtypes, .isna().sum(), and .describe().",
      "Understand that each DataFrame column is a Series backed by a typed NumPy or extension array.",
      "Verify numeric columns were not accidentally parsed as object strings due to currency symbols."
    ],
    lab: {
      lang: "python",
      title: "ShopPulse DataFrame Audit & Summary Profiler",
      prompt: "Construct a DataFrame of orders, verify dtypes, and print summary statistics for numeric columns.",
      hint: "Use df.dtypes and df['rev'].agg(['count', 'mean', 'median', 'max']).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [101, 102, 103, 104],\n    'city': ['Mumbai', 'Bengaluru', 'Mumbai', 'Pune'],\n    'rev': [4999.0, 8999.0, 2499.0, 3999.0]\n})\n\nprint('Shape:', df.shape)\nprint(df['rev'].agg(['count', 'mean', 'median', 'max']).round(2))\n"
    }
  },
  {
    day: 64,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Label vs Positional Selection: .loc[], .iloc[] & Query Filters",
    instructor: "Corey Schafer",
    duration: "22m",
    videoId: "zmdjNSmRXF4",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 0,
    bridge: "Eliminates SettingWithCopyWarning and off-by-one slicing bugs by mastering explicit .loc and .iloc accessors.",
    takeaways: [
      "Use .loc[row_filter, col_list] for label-based and boolean-mask selection (inclusive end labels).",
      "Use .iloc[row_pos, col_pos] strictly for zero-based integer positions (exclusive end positions).",
      "Never chain brackets like df[mask]['col'] = val; always assign via df.loc[mask, 'col'] = val."
    ],
    lab: {
      lang: "python",
      title: "Safe .loc Conditional Tagging & Column Projection",
      prompt: "Use .loc to flag orders with rev >= 5000 as 'High' priority and select ['order_id', 'city', 'priority'].",
      hint: "df['priority'] = 'Standard'; df.loc[df['rev'] >= 5000, 'priority'] = 'High'.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [1, 2, 3],\n    'city': ['Mumbai', 'Delhi', 'Bengaluru'],\n    'rev': [2500.0, 6200.0, 8900.0]\n})\n\ndf['priority'] = 'Standard'\ndf.loc[df['rev'] >= 5000, 'priority'] = 'High'\nprint(df.loc[:, ['order_id', 'city', 'priority']])\n"
    }
  },
  {
    day: 65,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Index Management, Sorting & Multi-Column Ranking",
    instructor: "Corey Schafer",
    duration: "18m",
    videoId: "W9XjRYFkkyw",
    altVideoId: "zmdjNSmRXF4",
    startSec: 0,
    bridge: "Keeps DataFrame indexes clean across filtering and sorting operations with .sort_values() and .reset_index(drop=True).",
    takeaways: [
      "Call .reset_index(drop=True) after filtering or sorting when you want a clean 0..N-1 positional index.",
      "Sort multi-column leaderboards via .sort_values(by=['city', 'rev'], ascending=[True, False]).",
      "Use .nlargest(k, 'rev') for fast top-K extraction without sorting the entire table."
    ],
    lab: {
      lang: "python",
      title: "Multi-Column Leaderboard & Top-2 Extractor",
      prompt: "Sort orders by city ascending and rev descending, reset index cleanly, and display top 2 overall orders.",
      hint: "df.sort_values(['city', 'rev'], ascending=[True, False]).reset_index(drop=True).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'id': [1, 2, 3, 4],\n    'city': ['Mumbai', 'Bengaluru', 'Mumbai', 'Bengaluru'],\n    'rev': [4000, 7500, 9200, 3100]\n})\n\nsorted_df = df.sort_values(['city', 'rev'], ascending=[True, False]).reset_index(drop=True)\nprint(sorted_df)\nprint('Top 2 Overall:\\n', df.nlargest(2, 'rev')[['id', 'city', 'rev']])\n"
    }
  },
  {
    day: 66,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Filtering DataFrames: Compound Masks, .isin() & .between()",
    instructor: "Corey Schafer",
    duration: "20m",
    videoId: "Lw2rlcxScZY",
    altVideoId: "zmdjNSmRXF4",
    startSec: 0,
    bridge: "Translates complex SQL WHERE clauses into readable Pandas boolean masks and .query() expressions.",
    takeaways: [
      "Replace long chains of == comparisons with df['city'].isin(['Mumbai', 'Pune', 'Bengaluru']).",
      "Use df['rev'].between(2000, 8000) for clean inclusive range filtering.",
      "Name complex boolean sub-masks (is_metro, is_valid_order) so filter logic reads like English."
    ],
    lab: {
      lang: "python",
      title: "Metro Tier Order Segmentation Filter",
      prompt: "Filter delivered orders in ['Mumbai', 'Bengaluru'] with revenue between 2,000 and 10,000 INR.",
      hint: "Combine df['city'].isin(...), df['status'] == 'Delivered', and df['rev'].between(2000, 10000).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'id': [1, 2, 3, 4],\n    'city': ['Mumbai', 'Delhi', 'Bengaluru', 'Mumbai'],\n    'status': ['Delivered', 'Delivered', 'Delivered', 'Cancelled'],\n    'rev': [4500, 6000, 8500, 5000]\n})\n\nmask = df['city'].isin(['Mumbai', 'Bengaluru']) & (df['status'] == 'Delivered') & df['rev'].between(2000, 10000)\nprint(df.loc[mask])\n"
    }
  },
  {
    day: 67,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Updating Rows & Columns: .assign(), np.where & Vectorized Ops",
    instructor: "Corey Schafer",
    duration: "22m",
    videoId: "DCDe29sIKcE",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 0,
    bridge: "Replaces slow row-by-row .apply(axis=1) loops with 50x faster vectorized column expressions.",
    takeaways: [
      "Never use df.apply(..., axis=1) for arithmetic or conditionals—use vectorized column math or np.select().",
      "Use .assign(net_rev=lambda d: d['gross'] - d['discount']) to create derived features cleanly in pipelines.",
      "Use .map(mapping_dict) to translate category codes into readable labels in O(N) time."
    ],
    lab: {
      lang: "python",
      title: "Vectorized Feature Creation with .assign() & np.select()",
      prompt: "Add net_rev and multi-tier size_band ('Small', 'Medium', 'Large') columns without using .apply().",
      hint: "Use np.select([df['net_rev'] >= 7000, df['net_rev'] >= 3000], ['Large', 'Medium'], default='Small').",
      starterCode: "import numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({'id': [1, 2, 3], 'gross': [2500.0, 5200.0, 9500.0], 'disc': [0.0, 500.0, 1000.0]})\ndf = df.assign(net_rev=lambda d: d['gross'] - d['disc'])\ndf['size_band'] = np.select([df['net_rev'] >= 7000, df['net_rev'] >= 3000], ['Large', 'Medium'], default='Small')\nprint(df)\n"
    }
  },
  {
    day: 68,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Vectorized String Operations (.str) & Regex Extraction",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "DCDe29sIKcE",
    altVideoId: "K8L6KVGG-7o",
    startSec: 1320,
    bridge: "Cleans messy text columns and extracts SKU prefixes across entire DataFrames using the .str accessor.",
    takeaways: [
      "Chain .str.strip().str.upper() to standardize categorical string columns before grouping.",
      "Extract structured substrings into new columns via .str.extract(r'^([A-Z]+)-(\\d+)').",
      "Pass na=False inside .str.contains(..., na=False) so missing values do not break boolean masks."
    ],
    lab: {
      lang: "python",
      title: "Vectorized SKU Code & Category Parser in Pandas",
      prompt: "Normalize raw_sku whitespace/case and extract product family prefix and numeric model ID into two new columns.",
      hint: "s = df['raw_sku'].str.strip().str.upper(); s.str.extract(r'^([A-Z]+)-(\\d+)').",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({'raw_sku': ['  sp-101 ', 'acc-205', ' SP-309  ']})\nclean = df['raw_sku'].str.strip().str.upper()\ndf[['family', 'model_num']] = clean.str.extract(r'^([A-Z]+)-(\\d+)')\nprint(df)\n"
    }
  },
  {
    day: 69,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Handling Missing Data: isna(), fillna(), dropna() & Casting",
    instructor: "Corey Schafer",
    duration: "22m",
    videoId: "KdmPHEnPJPs",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 0,
    bridge: "Audits missingness patterns and applies domain-informed imputation before statistical analysis or ML modeling.",
    takeaways: [
      "Audit missingness rates per column via (df.isna().mean() * 100).round(1).",
      "Impute structural zeros (like missing discount_inr) with 0.0, and skewed continuous metrics with group medians.",
      "Use nullable integer dtype 'Int64' when integer columns must preserve missing values."
    ],
    lab: {
      lang: "python",
      title: "Domain-Specific Missing Value Imputation Pipeline",
      prompt: "Fill missing discount with 0.0, impute missing rating with median rating, and drop rows missing order_id.",
      hint: "df.dropna(subset=['order_id']).assign(discount=lambda d: d['discount'].fillna(0.0), rating=lambda d: d['rating'].fillna(d['rating'].median())).",
      starterCode: "import numpy as np\nimport pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [1, 2, np.nan, 4],\n    'discount': [500.0, np.nan, 100.0, np.nan],\n    'rating': [5.0, np.nan, 4.0, 4.5]\n})\n\nclean = (\n    df.dropna(subset=['order_id'])\n      .assign(\n          order_id=lambda d: d['order_id'].astype(int),\n          discount=lambda d: d['discount'].fillna(0.0),\n          rating=lambda d: d['rating'].fillna(d['rating'].median())\n      )\n)\nprint(clean)\n"
    }
  },
  {
    day: 70,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Deduplication, Outlier Capping (.clip) & Validation Contracts",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "KdmPHEnPJPs",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 1320,
    bridge: "Protects downstream ML features from duplicate records and extreme sensor/entry outliers via winsorization.",
    takeaways: [
      "Deduplicate deterministically by sorting timestamp first, then calling .drop_duplicates(subset=['id'], keep='last').",
      "Winsorize extreme values at the 1st and 99th percentiles via s.clip(lower=q01, upper=q99).",
      "Assert primary-key uniqueness and non-negative revenue constraints at the end of every cleaning function."
    ],
    lab: {
      lang: "python",
      title: "Deterministic Deduplication & 95th-Percentile Outlier Clipping",
      prompt: "Keep the latest row per order_id and cap extreme revenue values at the 90th percentile using .clip().",
      hint: "Sort by updated_at, call drop_duplicates('order_id', keep='last'), then clip(upper=s.quantile(0.90)).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'order_id': [1, 1, 2, 3, 4],\n    'updated_at': [1, 2, 1, 1, 1],\n    'rev': [2000.0, 2500.0, 3200.0, 4100.0, 95000.0]\n})\n\ndedup = df.sort_values('updated_at').drop_duplicates('order_id', keep='last').copy()\ncap = dedup['rev'].quantile(0.90)\ndedup['rev_capped'] = dedup['rev'].clip(upper=cap).round(2)\nassert dedup['order_id'].is_unique\nprint(dedup[['order_id', 'rev', 'rev_capped']])\n"
    }
  },
  {
    day: 71,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "GroupBy Split-Apply-Combine & Named Aggregations (.agg)",
    instructor: "Corey Schafer",
    duration: "25m",
    videoId: "txMdrV1Ut64",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 0,
    bridge: "Produces flat, single-level executive summary DataFrames using Pandas named aggregations.",
    takeaways: [
      "Use named aggregations .groupby('city', as_index=False).agg(orders=('id', 'count'), gmv=('rev', 'sum')) to avoid MultiIndex columns.",
      "Combine built-in stats ('count', 'nunique', 'sum', 'mean', 'median') in one pass.",
      "Always pass observed=True when grouping on categorical columns."
    ],
    lab: {
      lang: "python",
      title: "City Performance Mart via Named GroupBy Aggregations",
      prompt: "Group orders by city to compute order_count, unique_buyers, total_gmv, and median_order_inr.",
      hint: "df.groupby('city', as_index=False).agg(order_count=('id', 'count'), unique_buyers=('cust_id', 'nunique'), ...).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'id': [1, 2, 3, 4, 5],\n    'cust_id': [10, 10, 11, 12, 13],\n    'city': ['Mumbai', 'Mumbai', 'Mumbai', 'Bengaluru', 'Bengaluru'],\n    'rev': [3000.0, 5000.0, 4000.0, 8000.0, 6000.0]\n})\n\nsummary = df.groupby('city', as_index=False).agg(\n    order_count=('id', 'count'),\n    unique_buyers=('cust_id', 'nunique'),\n    total_gmv=('rev', 'sum'),\n    median_order=('rev', 'median')\n)\nprint(summary)\n"
    }
  },
  {
    day: 72,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Group-Wise Transforms (.transform) & Within-Group Normalization",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "txMdrV1Ut64",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 1500,
    bridge: "Mirrors SQL OVER (PARTITION BY ...) window functions in Pandas so every row retains its original shape.",
    takeaways: [
      "Use .groupby('city')['rev'].transform('sum') to broadcast group totals back onto every row.",
      "Compute within-city Z-scores or % share of city revenue without an extra merge.",
      "Filter groups cleanly via df.groupby('city').filter(lambda g: len(g) >= 2)."
    ],
    lab: {
      lang: "python",
      title: "Order Share of City Revenue & Within-City Z-Score",
      prompt: "Compute each order's % share of its city's total revenue using .groupby('city')['rev'].transform('sum').",
      hint: "df['city_share_pct'] = (100 * df['rev'] / df.groupby('city')['rev'].transform('sum')).round(1).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'id': [1, 2, 3, 4],\n    'city': ['Mumbai', 'Mumbai', 'Delhi', 'Delhi'],\n    'rev': [3000.0, 7000.0, 4000.0, 4000.0]\n})\n\ndf['city_total'] = df.groupby('city')['rev'].transform('sum')\ndf['city_share_pct'] = (100.0 * df['rev'] / df['city_total']).round(1)\nprint(df)\n"
    }
  },
  {
    day: 73,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Time-Series Indexing, .shift(), .diff() & Rolling Windows",
    instructor: "Corey Schafer",
    duration: "24m",
    videoId: "UFuo7EHI8zc",
    altVideoId: "eirjjyP2qcQ",
    startSec: 0,
    bridge: "Engineers lag features, day-over-day deltas, and trailing moving averages for forecasting and anomaly detection.",
    takeaways: [
      "Convert string dates with pd.to_datetime() and sort chronologically before calling .shift() or .rolling().",
      "Use .groupby('cust_id')['rev'].shift(1) so lag features never bleed across different customers.",
      "Use .rolling(window=3, min_periods=1).mean() to smooth noisy daily revenue series."
    ],
    lab: {
      lang: "python",
      title: "Customer-Grouped Lag Order & 3-Day Rolling Revenue",
      prompt: "Sort daily sales by date and compute prev_day_rev (.shift(1)) and 3-day rolling average (.rolling(3).mean()).",
      hint: "df['prev_rev'] = df['rev'].shift(1); df['roll_3d'] = df['rev'].rolling(3).mean().round(2).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'date': pd.to_datetime(['2026-11-01', '2026-11-02', '2026-11-03', '2026-11-04']),\n    'rev': [4000.0, 5000.0, 6000.0, 9000.0]\n}).sort_values('date')\n\ndf['prev_rev'] = df['rev'].shift(1)\ndf['roll_3d'] = df['rev'].rolling(3).mean().round(2)\nprint(df)\n"
    }
  },
  {
    day: 74,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Resampling Time Series (.resample) & Period Aggregations",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "UFuo7EHI8zc",
    altVideoId: "eirjjyP2qcQ",
    startSec: 1440,
    bridge: "Rolls high-frequency timestamped order logs up into weekly ('W') and month-end ('ME') executive time series.",
    takeaways: [
      "Set a DatetimeIndex and call .resample('W')['rev'].sum() to aggregate irregular event logs into regular intervals.",
      "Fill quiet intervals with .asfreq('D', fill_value=0) so zero-order days are explicitly represented.",
      "Extract calendar attributes cleanly via .dt.day_name(), .dt.month, and .dt.is_weekend."
    ],
    lab: {
      lang: "python",
      title: "Daily-to-Weekly Revenue Resampler with Zero-Fill",
      prompt: "Resample timestamped order events into daily totals filling missing days with 0, then compute weekly sum.",
      hint: "s.resample('D').sum() automatically fills missing calendar days with 0.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'ts': pd.to_datetime(['2026-11-02 10:00', '2026-11-02 18:00', '2026-11-05 14:00', '2026-11-09 11:00']),\n    'rev': [3000.0, 4500.0, 6000.0, 8000.0]\n}).set_index('ts')\n\ndaily = df['rev'].resample('D').sum()\nweekly = df['rev'].resample('W-MON').sum()\nprint('Daily Active Days:', len(daily), '| Sum:', daily.sum())\nprint('Weekly Totals:\\n', weekly)\n"
    }
  },
  {
    day: 75,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Relational Joins in Pandas: pd.merge(), Validation & pd.concat()",
    instructor: "Corey Schafer",
    duration: "20m",
    videoId: "ZyhVh-qRZPA",
    altVideoId: "txMdrV1Ut64",
    startSec: 1200,
    bridge: "Enforces join cardinality contracts in Python via pd.merge(..., validate='many_to_one') to catch duplicate dimension keys.",
    takeaways: [
      "Always pass validate='many_to_one' (or 'one_to_one') to pd.merge() so duplicate lookup rows raise an immediate error.",
      "Use indicator=True during data audits to inspect 'left_only', 'right_only', and 'both' match counts.",
      "Stack homogeneous monthly DataFrames vertically using pd.concat([df_oct, df_nov], ignore_index=True)."
    ],
    lab: {
      lang: "python",
      title: "Validated Many-to-One Order Enrichment Merge",
      prompt: "Merge orders onto customers using how='left' and validate='many_to_one', filling unmatched tiers with 'Guest'.",
      hint: "pd.merge(orders, customers, on='cust_id', how='left', validate='many_to_one').",
      starterCode: "import pandas as pd\n\norders = pd.DataFrame({'order_id': [1, 2, 3], 'cust_id': [101, 101, 999], 'rev': [4000, 3000, 1500]})\ncustomers = pd.DataFrame({'cust_id': [101, 102], 'tier': ['Gold', 'Silver']})\n\nmerged = pd.merge(orders, customers, on='cust_id', how='left', validate='many_to_one')\nmerged['tier'] = merged['tier'].fillna('Guest')\nprint(merged)\n"
    }
  },
  {
    day: 76,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Reshaping Tables: pivot_table(), melt() & crosstab()",
    instructor: "Corey Schafer",
    duration: "18m",
    videoId: "txMdrV1Ut64",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 2460,
    bridge: "Converts long transaction logs into wide executive City x Category matrices and unpivots wide spreadsheets back to tidy rows.",
    takeaways: [
      "Build multi-dimensional executive matrices via df.pivot_table(index='city', columns='category', values='rev', aggfunc='sum', fill_value=0).",
      "Unpivot wide monthly columns back into tidy long format using pd.melt().",
      "Use pd.crosstab(df['city'], df['status'], normalize='index') for quick row-normalized contingency tables."
    ],
    lab: {
      lang: "python",
      title: "City x Category Revenue Pivot & Unpivot Round-Trip",
      prompt: "Create a City x Category revenue pivot table with fill_value=0, then melt it back into tidy long format.",
      hint: "piv = df.pivot_table(index='city', columns='cat', values='rev', aggfunc='sum', fill_value=0).reset_index().",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'city': ['Mumbai', 'Mumbai', 'Delhi'],\n    'cat': ['Audio', 'Power', 'Audio'],\n    'rev': [8000, 3000, 5000]\n})\n\npiv = df.pivot_table(index='city', columns='cat', values='rev', aggfunc='sum', fill_value=0).reset_index()\nprint('Pivot Matrix:\\n', piv)\ntidy = piv.melt(id_vars='city', var_name='cat', value_name='rev')\nprint('Unpivoted Long:\\n', tidy)\n"
    }
  },
  {
    day: 77,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Categorical dtypes, Memory Optimization & Vectorized Performance",
    instructor: "Corey Schafer",
    duration: "16m",
    videoId: "ZyhVh-qRZPA",
    altVideoId: "QUT1VHiLmmI",
    startSec: 2400,
    bridge: "Shrinks DataFrame RAM footprints by 5x-10x on repeated string columns and enforces ordered category sorting.",
    takeaways: [
      "Cast low-cardinality repeated string columns (city, status, tier) to 'category' dtype to save memory and speed up groupbys.",
      "Use pd.CategoricalDtype(['Silver', 'Gold', 'Platinum'], ordered=True) so sorting respects business tier rank.",
      "Inspect exact memory footprint via df.memory_usage(deep=True)."
    ],
    lab: {
      lang: "python",
      title: "Ordered Categorical Tier Sorting & Memory Check",
      prompt: "Cast tier column to an ordered CategoricalDtype ['Silver', 'Gold', 'Platinum'] and sort customers from highest to lowest tier.",
      hint: "tier_type = pd.CategoricalDtype(['Silver', 'Gold', 'Platinum'], ordered=True).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({'name': ['Rohan', 'Diya', 'Kabir'], 'tier': ['Silver', 'Platinum', 'Gold']})\ntier_type = pd.CategoricalDtype(['Silver', 'Gold', 'Platinum'], ordered=True)\ndf['tier'] = df['tier'].astype(tier_type)\n\nprint(df.sort_values('tier', ascending=False))\n"
    }
  },
  {
    day: 78,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Method Chaining (.pipe) for Clean, Auditable Data Pipelines",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "vmEHCJofslg",
    altVideoId: "ZyhVh-qRZPA",
    startSec: 0,
    bridge: "Replaces tangled intermediate DataFrames (df1, df2, df_final) with readable, composable .pipe() transformation chains.",
    takeaways: [
      "Encapsulate each cleaning or feature step as a pure function df -> df and compose with .pipe().",
      "Avoid inplace=True everywhere—method chaining creates clean, immutable-style data flows.",
      "Log row counts inside pipeline steps to catch unexpected row drops immediately."
    ],
    lab: {
      lang: "python",
      title: "Composable Three-Stage .pipe() Cleaning Pipeline",
      prompt: "Chain filter_valid_orders, add_net_revenue, and summarize_by_city using DataFrame.pipe().",
      hint: "raw_df.pipe(filter_valid).pipe(add_net).pipe(agg_city).",
      starterCode: "import pandas as pd\n\ndef filter_valid(d):\n    return d.loc[d['rev'] > 0].copy()\n\ndef add_gst(d):\n    return d.assign(gross=lambda x: (x['rev'] * 1.18).round(2))\n\ndef agg_city(d):\n    return d.groupby('city', as_index=False)['gross'].sum()\n\nraw = pd.DataFrame({'city': ['Mumbai', 'Mumbai', 'Pune'], 'rev': [4000.0, -100.0, 3000.0]})\nprint(raw.pipe(filter_valid).pipe(add_gst).pipe(agg_city))\n"
    }
  },
  {
    day: 79,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Customer Cohort Retention Pivot Matrix in Pandas",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "vmEHCJofslg",
    altVideoId: "txMdrV1Ut64",
    startSec: 1200,
    bridge: "Builds a complete Month-0..Month-N customer retention percentage matrix in Pandas.",
    takeaways: [
      "Compute cohort_period = order_period - cohort_period using Pandas Period('M') arithmetic.",
      "Pivot active unique users by (cohort_month, cohort_index) and divide each row by column 0 size.",
      "Track Month-1 retention as an early leading indicator of product-market fit."
    ],
    lab: {
      lang: "python",
      title: "Pandas Cohort Retention Table Builder",
      prompt: "Compute acquisition cohort month per customer, calculate period offset (0, 1), and build a retention count pivot.",
      hint: "Convert dates with .dt.to_period('M') and subtract cohort period.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'cust_id': [1, 1, 2, 3, 3],\n    'date': pd.to_datetime(['2026-09-05', '2026-10-12', '2026-09-20', '2026-10-03', '2026-11-04'])\n})\ndf['order_m'] = df['date'].dt.to_period('M')\ndf['cohort_m'] = df.groupby('cust_id')['order_m'].transform('min')\ndf['offset'] = (df['order_m'] - df['cohort_m']).apply(lambda x: x.n)\n\nmat = df.pivot_table(index='cohort_m', columns='offset', values='cust_id', aggfunc='nunique', fill_value=0)\nprint(mat)\n"
    }
  },
  {
    day: 80,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "RFM Customer Scoring & Quantile Tiering (pd.qcut)",
    instructor: "Keith Galli",
    duration: "18m",
    videoId: "vmEHCJofslg",
    altVideoId: "txMdrV1Ut64",
    startSec: 2400,
    bridge: "Segments ShopPulse customers into actionable lifecycle tiers using quantile-based RFM scoring.",
    takeaways: [
      "Use pd.qcut(s.rank(method='first'), q=4, labels=[1, 2, 3, 4]) so duplicate values never fail bin edges.",
      "Invert recency labels [4, 3, 2, 1] because lower days_since_last_order is better.",
      "Combine R, F, and M scores into a composite RFM index for CRM targeting."
    ],
    lab: {
      lang: "python",
      title: "Rank-Safe RFM Customer Scorer in Pandas",
      prompt: "Compute composite RFM score (1..4 scale) across 4 customers using rank-safe pd.qcut.",
      hint: "Use pd.qcut(s.rank(method='first'), q=4, labels=...).astype(int).",
      starterCode: "import pandas as pd\n\ncust = pd.DataFrame({\n    'cust_id': [1, 2, 3, 4],\n    'recency_days': [5, 45, 12, 80],\n    'freq': [6, 2, 4, 1],\n    'monetary': [28000, 6000, 15000, 2200]\n})\n\ncust['R'] = pd.qcut(cust['recency_days'].rank(method='first'), 4, labels=[4, 3, 2, 1]).astype(int)\ncust['F'] = pd.qcut(cust['freq'].rank(method='first'), 4, labels=[1, 2, 3, 4]).astype(int)\ncust['M'] = pd.qcut(cust['monetary'].rank(method='first'), 4, labels=[1, 2, 3, 4]).astype(int)\ncust['RFM_Total'] = cust['R'] + cust['F'] + cust['M']\nprint(cust.sort_values('RFM_Total', ascending=False))\n"
    }
  },
  {
    day: 81,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Event Sessionization & Funnel Drop-Off Metrics in Pandas",
    instructor: "Keith Galli",
    duration: "20m",
    videoId: "vmEHCJofslg",
    altVideoId: "UFuo7EHI8zc",
    startSec: 3480,
    bridge: "Groups raw clickstream timestamps into user sessions using a 30-minute inactivity timeout rule.",
    takeaways: [
      "Start a new user session whenever time since previous event exceeds 30 minutes: (ts.diff() > pd.Timedelta('30min')).cumsum().",
      "Compute session duration, page depth, and checkout conversion per session.",
      "Keep clickstream timestamps sorted by (user_id, timestamp) before computing time diffs."
    ],
    lab: {
      lang: "python",
      title: "30-Minute Inactivity Clickstream Sessionizer",
      prompt: "Assign sequential session IDs to user click timestamps whenever the gap exceeds 30 minutes.",
      hint: "new_sess = df['ts'].diff().gt(pd.Timedelta(minutes=30)); df['session_id'] = new_sess.cumsum() + 1.",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'ts': pd.to_datetime(['2026-11-20 10:00', '2026-11-20 10:12', '2026-11-20 11:05', '2026-11-20 11:15'])\n}).sort_values('ts')\n\ndf['session_id'] = df['ts'].diff().gt(pd.Timedelta(minutes=30)).cumsum() + 1\nprint(df)\n"
    }
  },
  {
    day: 82,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Univariate EDA: Central Tendency, Spread, IQR & Skewness",
    instructor: "StatQuest",
    duration: "14m",
    videoId: "rzFX5NWojp0",
    altVideoId: "vmEHCJofslg",
    startSec: 0,
    bridge: "Diagnoses right-skewed order distributions by pairing parametric (mean/std) and robust (median/IQR) statistics.",
    takeaways: [
      "Always compare mean vs median: when mean >> median, extreme high orders are pulling the average upward.",
      "Compute Interquartile Range IQR = Q3 - Q1 and Tukey outlier fences [Q1 - 1.5*IQR, Q3 + 1.5*IQR].",
      "Measure skewness via s.skew() before choosing linear vs log-transformed modeling features."
    ],
    lab: {
      lang: "python",
      title: "Parametric vs Robust Univariate EDA Summary",
      prompt: "Compute mean, median, std, IQR, and upper Tukey fence on skewed ShopPulse order values.",
      hint: "q1, q3 = s.quantile([0.25, 0.75]); iqr = q3 - q1; upper_fence = q3 + 1.5 * iqr.",
      starterCode: "import pandas as pd\n\ns = pd.Series([1499, 1899, 2299, 2499, 2899, 3199, 3599, 18500], dtype=float)\nq1, q3 = s.quantile([0.25, 0.75])\niqr = q3 - q1\nupper_fence = q3 + 1.5 * iqr\n\nprint(f'Mean: INR {s.mean():.2f} | Median: INR {s.median():.2f} | IQR: INR {iqr:.2f}')\nprint(f'Upper Tukey Fence: INR {upper_fence:.2f} | Outliers: {s[s > upper_fence].tolist()}')\n"
    }
  },
  {
    day: 83,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Multivariate EDA: Cross-Tabs, Group Comparisons & Outliers",
    instructor: "StatQuest",
    duration: "15m",
    videoId: "9yl6-HEY7_s",
    altVideoId: "vmEHCJofslg",
    startSec: 0,
    bridge: "Uncovers segment differences across cities, devices, and loyalty tiers before formulating formal statistical hypotheses.",
    takeaways: [
      "Compare group distributions across segments using grouped quantiles (P25, P50, P75, P90) rather than means alone.",
      "Inspect row-normalized cross-tabs to spot conversion differences between mobile and desktop traffic.",
      "Document concrete hypotheses from EDA anomalies to test rigorously in Month 4."
    ],
    lab: {
      lang: "python",
      title: "Device x Conversion Cross-Tab & Segment Quantiles",
      prompt: "Compute row-normalized conversion percentages across Mobile vs Desktop using pd.crosstab(normalize='index').",
      hint: "(pd.crosstab(df['device'], df['converted'], normalize='index') * 100).round(1).",
      starterCode: "import pandas as pd\n\ndf = pd.DataFrame({\n    'device': ['Mobile', 'Mobile', 'Mobile', 'Desktop', 'Desktop', 'Desktop'],\n    'converted': [1, 0, 0, 1, 1, 0]\n})\n\nct = (pd.crosstab(df['device'], df['converted'], normalize='index') * 100).round(1)\nprint('Conversion % by Device (0=No, 1=Yes):\\n', ct)\n"
    }
  },
  {
    day: 84,
    month: 3,
    module: "M3: NumPy & Pandas",
    title: "Bridge 3->4: Capstone ShopPulse EDA Summary & Empirical Distributions",
    instructor: "Keith Galli",
    duration: "22m",
    videoId: "vmEHCJofslg",
    altVideoId: "oI3hZJqXJuc",
    startSec: 4680,
    bridge: "Hands off Month 3 NumPy & Pandas mastery to Month 4 Probability & Statistics by profiling empirical distributions and binned histograms.",
    takeaways: [
      "Combine data cleaning, grouped KPIs, and empirical distribution binning into one repeatable EDA report.",
      "Inspect binned frequency distributions via pd.cut() and np.histogram() to preview probability mass/density shapes.",
      "Carry clean, validated ShopPulse features directly into Month 4 statistical inference."
    ],
    lab: {
      lang: "python",
      title: "Bridge 3->4: Empirical Order Value Histogram & EDA Report",
      prompt: "Bin order revenues into INR brackets using pd.cut() and compute empirical relative frequencies summing to 1.0.",
      hint: "pd.cut(revs, bins=[0, 2500, 5000, 10000, 50000]).value_counts(normalize=True).sort_index().",
      starterCode: "import pandas as pd\n\nrevs = pd.Series([1200, 1800, 2400, 2900, 3500, 4200, 4800, 6500, 8900, 14500])\nbins = pd.cut(revs, bins=[0, 2500, 5000, 10000, 50000])\nemp_dist = bins.value_counts(normalize=True).sort_index()\n\nprint('Empirical Order Value Distribution:\\n', emp_dist)\nprint('Total Probability:', round(float(emp_dist.sum()), 4))\n"
    }
  }
];
// DataForge // Instinct OS - Decoupled 168-Day Curriculum (Part 2 of 2: Days 85-168)
// Paste directly below the closing ]; of Part 1 in curriculum.js.
// Pure ASCII-safe strings for clean GitHub Pages execution.

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
    bridge: "Proves why sample means become Normally distributed even when raw order revenue is heavily skewed -- enabling A/B test math.",
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
    bridge: "Shrinks A/B test variance by 25-40% using pre-experiment user spend as a covariate -- cutting experiment runtime in half.",
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
    bridge: "Implements iterative parameter updates w = w - lr * grad in pure NumPy -- demystifying how every ML model trains.",
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
    bridge: "Builds additive weak learners sequentially -- each new shallow tree predicts and corrects the residual errors of prior trees.",
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
      starterCode: "import numpy as np\n\nrng = np.random.default_rng(42)\nalphas = np.sort(10 ** rng.uniform(-3, 2, size=8))\nval_losses = 0.42 + 0.08 * (np.log10(alphas) - 0.18) ** 2\nbest_idx = int(np.argmin(val_losses))\nprint(f'Best Alpha: {alphas[best_idx]:.4f} | Val Loss: {val_losses[best_idx]:.4f}')\n"
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
      "Apply SMOTE strictly inside training folds -- never before train/validation splitting.",
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
      prompt: "Standardize 2D [order_value, items_qty] records and flag rows whose Euclidean distance from centroid exceeds 2.0.",
      hint: "dists = np.linalg.norm(X_std, axis=1); flag dists > 2.0.",
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
      prompt: "Train a regularized logistic churn model on 80 synthetic customers and evaluate test accuracy on 20 customers.",
      hint: "Fit weights on X_train over 500 gradient steps with L2 penalty, and evaluate accuracy on X_test.",
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
      prompt: "Compare output token probability sharpness at temperature=0.2 vs temperature=1.5.",
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
      prompt: "Build a clean system + user + assistant chat message formatter verifying role alternation.",
      hint: "Format role blocks cleanly using chat template markers.",
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
      prompt: "Construct a prompt builder wrapping ShopPulse DDL schema and a few-shot example inside XML tags.",
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
      prompt: "Implement chunk_text(text, chunk_size=55, overlap=15) returning overlapping chunks with metadata.",
      hint: "Step start index by (chunk_size - overlap) until start >= len(text).",
      starterCode: "def chunk_text(text: str, chunk_size: int = 55, overlap: int = 15) -> list[dict]:\n    chunks = []\n    step = chunk_size - overlap\n    for idx, start in enumerate(range(0, len(text), step)):\n        piece = text[start:start + chunk_size]\n        chunks.append({'chunk_id': idx, 'text': piece})\n        if start + chunk_size >= len(text):\n            break\n    return chunks\n\ndoc = 'ShopPulse offers a 30-day no-questions return policy on all unopened electronics purchased in India with valid GST invoice.'\nfor c in chunk_text(doc, 55, 15):\n    print(c)\n"
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
      "Validate all tool arguments before execution -- especially read-only SQL constraints."
    ],
    lab: {
      lang: "python",
      title: "Tool Dispatcher Router for ShopPulse Assistant",
      prompt: "Implement a tool registry dispatching structured tool calls ('get_sku_price', 'calc_total_with_gst') safely.",
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
      "Treat retrieved documents and user inputs as untrusted data -- never executable instructions.",
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
      prompt: "Validate a candidate SQL query with read-only checks, execute it against an in-memory SQLite table, and return rows.",
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
      prompt: "Implement recommend_approach(needs_live_data, high_volume_low_latency) returning RAG, Prompting, or LoRA.",
      hint: "If needs_live_data -> 'RAG + Grounded Citations'; elif high_volume_low_latency -> 'LoRA Fine-Tuned Small Model'; else 'Few-Shot Structured Prompting'.",
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
      prompt: "Aggregate span latencies and token counts across a multi-step agent trace.",
      hint: "Sum duration_ms and tokens across span records.",
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
      prompt: "Run automated test assertions verifying SQL injection blocking and safe handling of unsafe queries.",
      hint: "Assert blocked queries raise ValueError cleanly.",
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

// Auto-index safeguard: guarantees contiguous 1..168 day numbering
window.CURRICULUM.forEach((item, index) => {
  item.day = index + 1;
});
