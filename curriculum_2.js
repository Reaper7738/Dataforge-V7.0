// ==================== MONTH 4: STATISTICS, VISUALIZATION & EXPERIMENTATION (DAYS 85–112) ====================
  {
    day: 85,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "StatQuest",
    duration: "14m",
    title: "Central Tendency, Variance, Standard Deviation & Bessel's Correction",
    videoId: "SzZ6GpcfoQY",
    altVideoId: "u0ASD5a8a3g",
    focus: "00:00 – 13:45",
    takeaways: [
      "Mean is sensitive to extreme outliers; median and IQR describe skewed income or order distributions accurately.",
      "Sample variance divides by (n - 1) (ddof=1 in NumPy/Pandas) to provide an unbiased estimate of population spread."
    ],
    lab: "Compute mean, median, sample standard deviation (ddof=1), and IQR for a skewed list of order amounts.",
    hint: "Use np.mean(), np.median(), np.std(x, ddof=1), and np.percentile(x, [25, 75]).",
    starterPy: `import numpy as np\n\norders = np.array([1200, 1350, 1400, 1550, 1600, 1750, 1900, 2200, 18500])\nmean_val = np.mean(orders)\nmed_val = np.median(orders)\nsd_sample = np.std(orders, ddof=1)\nq1, q3 = np.percentile(orders, [25, 75])\nprint(f"Mean: {mean_val:.1f} | Median: {med_val:.1f} | Sample SD: {sd_sample:.1f} | IQR: {q3 - q1:.1f}")`,
    starterSql: `SELECT ROUND(AVG(amount), 2) AS mean_amt, MIN(amount) AS min_amt, MAX(amount) AS max_amt FROM orders;`
  },
  {
    day: 86,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "StatQuest",
    duration: "12m",
    title: "Skewness, Kurtosis & Log Transformations",
    videoId: "rzFX5NWojp0",
    altVideoId: "SzZ6GpcfoQY",
    focus: "00:00 – 11:30",
    takeaways: [
      "Right-skewed features (revenue, session duration) have mean > median; np.log1p(x) compresses long right tails for linear models.",
      "High kurtosis signals heavy tails with frequent extreme values."
    ],
    lab: "Measure skewness of raw right-skewed revenues vs log1p-transformed revenues using Pandas Series.skew().",
    hint: "Compare s.skew() against np.log1p(s).skew().",
    starterPy: `import pandas as pd, numpy as np\n\nrev = pd.Series([800, 950, 1100, 1250, 1400, 2100, 4500, 12000, 35000])\nlog_rev = np.log1p(rev)\nprint(f"Raw Skewness: {rev.skew():.3f} -> Log1p Skewness: {log_rev.skew():.3f}")`,
    starterSql: `SELECT region, AVG(amount) AS avg_amt, MAX(amount) AS max_amt FROM orders GROUP BY region;`
  },
  {
    day: 87,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "StatQuest",
    duration: "17m",
    title: "Covariance, Pearson vs Spearman Correlation",
    videoId: "xZ_z8KWkhXE",
    altVideoId: "SzZ6GpcfoQY",
    focus: "00:00 – 16:40",
    takeaways: [
      "Pearson r measures linear correlation (-1 to +1); Spearman rho measures monotonic rank correlation and resists outliers.",
      "Correlation never proves causation—always check for confounding variables."
    ],
    lab: "Compare Pearson vs Spearman correlation between ad spend and conversions when an outlier campaign is present.",
    hint: "Use df['ad_spend'].corr(df['conversions'], method='pearson') and method='spearman'.",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "ad_spend": [10, 20, 30, 40, 50, 200],\n    "conversions": [15, 28, 42, 55, 70, 82]\n})\nprint("Pearson r :", round(df["ad_spend"].corr(df["conversions"], method="pearson"), 3))\nprint("Spearman p:", round(df["ad_spend"].corr(df["conversions"], method="spearman"), 3))`,
    starterSql: `SELECT e.salary, COALESCE(SUM(o.amount), 0) AS sales FROM employees e LEFT JOIN orders o ON e.emp_id = o.emp_id GROUP BY e.emp_id;`
  },
  {
    day: 88,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "StatQuest",
    duration: "11m",
    title: "Normal (Gaussian) Distribution, 68-95-99.7 Rule & Z-Scores",
    videoId: "rzFX5NWojp0",
    altVideoId: "u0ASD5a8a3g",
    focus: "00:00 – 11:10",
    takeaways: [
      "Z = (x - mu) / sigma expresses any observation in standard deviation units from the mean.",
      "In a normal distribution, ~68% lies within ±1 SD, ~95% within ±1.96 SD, and ~99.7% within ±3 SD."
    ],
    lab: "Compute Z-scores for server response latencies (mean=120ms, sd=15ms) and flag anomalies with |Z| > 2.5.",
    hint: "z = (latencies - latencies.mean()) / latencies.std(ddof=1).",
    starterPy: `import numpy as np\n\nlatencies = np.array([112, 118, 125, 130, 115, 122, 119, 178])\nz_scores = (latencies - latencies.mean()) / latencies.std(ddof=1)\nfor val, z in zip(latencies, z_scores):\n    print(f"Latency: {val}ms | Z = {z:+.2f} | Anomaly: {abs(z) > 2.5}")`,
    starterSql: `SELECT name, salary FROM employees ORDER BY salary DESC;`
  },
  {
    day: 89,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "StatQuest",
    duration: "13m",
    title: "Binomial & Poisson Discrete Probability Distributions",
    videoId: "J8jNoHk-ZA8",
    altVideoId: "rzFX5NWojp0",
    focus: "00:00 – 12:40",
    takeaways: [
      "Binomial(n, p) models k successes in n independent trials (e.g., email clicks out of 1,000 sends).",
      "Poisson(lambda) models rare event counts arriving per fixed time window (e.g., support tickets per hour)."
    ],
    lab: "Simulate 10,000 days of support tickets following Poisson(lambda=4.5) and compute the probability of receiving >= 8 tickets in a day.",
    hint: "Use rng.poisson(lam=4.5, size=10000) and np.mean(tickets >= 8).",
    starterPy: `import numpy as np\n\nrng = np.random.default_rng(42)\ntickets = rng.poisson(lam=4.5, size=10000)\nprob_surge = np.mean(tickets >= 8)\nprint(f"Mean tickets/day: {tickets.mean():.2f} | P(tickets >= 8): {prob_surge:.4f}")`,
    starterSql: `SELECT order_date, COUNT(*) AS daily_orders FROM orders GROUP BY order_date;`
  },
  {
    day: 90,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "StatQuest",
    duration: "15m",
    title: "Percentiles, Quantiles & QQ-Plot Normality Diagnostics",
    videoId: "okjYjClSjOg",
    altVideoId: "rzFX5NWojp0",
    focus: "00:00 – 14:50",
    takeaways: [
      "SLAs are defined in tail percentiles (P95, P99) rather than averages because averages hide worst-case customer latency.",
      "Comparing sample quantiles against theoretical normal quantiles diagnoses heavy tails and skewness."
    ],
    lab: "Compute P50, P90, P95, and P99 API response times from a simulated log-normal latency sample.",
    hint: "Use np.percentile(latencies, [50, 90, 95, 99]).",
    starterPy: `import numpy as np\n\nrng = np.random.default_rng(7)\nlatencies = rng.lognormal(mean=4.6, sigma=0.45, size=5000)\np50, p90, p95, p99 = np.percentile(latencies, [50, 90, 95, 99])\nprint(f"P50: {p50:.1f}ms | P90: {p90:.1f}ms | P95: {p95:.1f}ms | P99: {p99:.1f}ms")`,
    starterSql: `SELECT COUNT(*) AS total_orders FROM orders;`
  },
  {
    day: 91,
    month: 4,
    week: 13,
    subject: "Descriptive Stats & Distributions",
    instructor: "Brandon Foltz",
    duration: "18m",
    title: "Week 13 Practice: Multi-Segment Statistical Summary Engine",
    videoId: "u0ASD5a8a3g",
    altVideoId: "SzZ6GpcfoQY",
    focus: "00:00 – 18:00",
    takeaways: [
      "Reporting mean alongside SD and median alongside IQR gives stakeholders complete visibility into both center and spread.",
      "Coefficient of Variation (CV = SD / Mean) compares relative volatility across metrics with different units."
    ],
    lab: "Build a summary function returning count, mean, sd, cv_pct, median, and iqr for two product lines.",
    hint: "CV % = (sd / mean) * 100.",
    starterPy: `import numpy as np\n\ndef stat_profile(name, arr):\n    arr = np.asarray(arr, dtype=float)\n    mean, sd = arr.mean(), arr.std(ddof=1)\n    med = np.median(arr)\n    iqr = np.percentile(arr, 75) - np.percentile(arr, 25)\n    print(f"{name:10s} | Mean={mean:7.1f} (SD={sd:6.1f}, CV={sd/mean*100:4.1f}%) | Med={med:7.1f} (IQR={iqr:6.1f})")\n\nstat_profile("Product A", [100, 105, 98, 102, 110, 95])\nstat_profile("Product B", [40, 180, 65, 220, 50, 190])`,
    starterSql: `SELECT category, COUNT(*) AS n, ROUND(AVG(amount), 2) AS avg_amt FROM orders GROUP BY category;`
  },
  {
    day: 92,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "StatQuest",
    duration: "14m",
    title: "Joint, Marginal & Conditional Probability P(A|B)",
    videoId: "9wCnvr7Xw4E",
    altVideoId: "HZGCoVF3YvM",
    focus: "00:00 – 07:00",
    takeaways: [
      "Conditional probability P(Churn | SupportTicket) narrows the sample space to the conditioning event.",
      "Two events A and B are independent iff P(A and B) = P(A) * P(B)."
    ],
    lab: "Compute P(Churn), P(Ticket), and conditional P(Churn | Ticket) from a 2x2 contingency DataFrame.",
    hint: "Filter df[df['ticket'] == 1]['churn'].mean() for P(Churn | Ticket).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "ticket": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],\n    "churn":  [1, 1, 1, 0, 1, 0, 0, 0, 0, 0]\n})\np_churn = df["churn"].mean()\np_churn_given_ticket = df[df["ticket"] == 1]["churn"].mean()\nprint(f"Baseline Churn: {p_churn:.0%} | Churn given Ticket: {p_churn_given_ticket:.0%}")`,
    starterSql: `SELECT status, COUNT(*) AS cnt FROM orders GROUP BY status;`
  },
  {
    day: 93,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "3Blue1Brown",
    duration: "15m",
    title: "Bayes' Theorem & Base-Rate Fallacy in Fraud Detection",
    videoId: "HZGCoVF3YvM",
    altVideoId: "9wCnvr7Xw4E",
    focus: "00:00 – 15:10",
    takeaways: [
      "P(Fraud | Alert) = [P(Alert | Fraud) * P(Fraud)] / P(Alert); low base rates produce many false positives even with 99% accurate detectors.",
      "Updating prior beliefs with new evidence is the foundation of Bayesian inference and Naive Bayes classifiers."
    ],
    lab: "Given 0.5% fraud prevalence, 98% true-positive sensitivity, and 3% false-positive rate, compute the true probability a flagged transaction is fraud.",
    hint: "p_alert = sensitivity * prior + fpr * (1 - prior); posterior = (sensitivity * prior) / p_alert.",
    starterPy: `prior_fraud = 0.005\nsensitivity = 0.98\nfpr = 0.03\n\np_alert = sensitivity * prior_fraud + fpr * (1 - prior_fraud)\nposterior = (sensitivity * prior_fraud) / p_alert\nprint(f"P(Fraud | Flagged Alert) = {posterior:.2%}")`,
    starterSql: `SELECT COUNT(*) FROM orders WHERE amount > 10000;`
  },
  {
    day: 94,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "3Blue1Brown",
    duration: "16m",
    title: "Expected Value, Variance of Random Variables & Risk-Reward",
    videoId: "zeJD6dqJ5lo",
    altVideoId: "YAlJCEDH2uY",
    focus: "00:00 – 07:30",
    takeaways: [
      "Expected Value E[X] = sum(x_i * P(x_i)) weights every outcome by its probability.",
      "Comparing E[X] across pricing or marketing strategies guides rational decision-making under uncertainty."
    ],
    lab: "Compute the Expected Value (EV) of a SaaS pricing experiment with 3 conversion outcomes.",
    hint: "EV = sum(p * v for p, v in zip(probs, payoffs)).",
    starterPy: `probs = [0.65, 0.25, 0.10]\npayoffs = [0, 4000, 15000]\nev = sum(p * v for p, v in zip(probs, payoffs))\nprint(f"Expected Revenue per Lead: INR {ev:,.2f}")`,
    starterSql: `SELECT ROUND(AVG(amount), 2) AS expected_order_value FROM orders;`
  },
  {
    day: 95,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "StatQuest",
    duration: "10m",
    title: "Central Limit Theorem (CLT) & Sampling Distributions",
    videoId: "YAlJCEDH2uY",
    altVideoId: "zeJD6dqJ5lo",
    focus: "00:00 – 09:50",
    takeaways: [
      "Regardless of the population's skew, the distribution of sample means approaches Normal(mu, sigma / sqrt(n)) as sample size n grows.",
      "Standard Error SE = s / sqrt(n) shrinks proportionally to 1/sqrt(n)—quadrupling sample size halves uncertainty."
    ],
    lab: "Draw 2,000 samples of size n=40 from a heavily skewed exponential distribution and verify that the sample means look normal.",
    hint: "Use rng.exponential(scale=500, size=(2000, 40)).mean(axis=1).",
    starterPy: `import numpy as np, pandas as pd\n\nrng = np.random.default_rng(42)\npop = rng.exponential(scale=500, size=50000)\nsample_means = rng.choice(pop, size=(2000, 40), replace=True).mean(axis=1)\nprint(f"Population Skew: {pd.Series(pop).skew():.2f} -> Sample Means Skew: {pd.Series(sample_means).skew():.2f}")\nprint(f"Mean of Sample Means: {sample_means.mean():.1f} | SE: {sample_means.std():.2f}")`,
    starterSql: `SELECT region, COUNT(*) AS n, ROUND(AVG(amount), 2) AS sample_mean FROM orders GROUP BY region;`
  },
  {
    day: 96,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "StatQuest",
    duration: "12m",
    title: "Confidence Intervals (95% CI) & Margin of Error",
    videoId: "TqOeMYtOc1w",
    altVideoId: "YAlJCEDH2uY",
    focus: "00:00 – 11:45",
    takeaways: [
      "A 95% CI [mean - 1.96*SE, mean + 1.96*SE] captures the true population parameter across 95% of repeated experiments.",
      "Always report point estimates alongside their 95% confidence bounds."
    ],
    lab: "Compute the 95% confidence interval for average order value from a sample of 64 transactions.",
    hint: "se = sample.std(ddof=1) / np.sqrt(len(sample)); margin = 1.96 * se.",
    starterPy: `import numpy as np\n\nrng = np.random.default_rng(10)\nsample = rng.normal(loc=3200, scale=640, size=64)\nmean = sample.mean()\nse = sample.std(ddof=1) / np.sqrt(len(sample))\nci_low, ci_high = mean - 1.96 * se, mean + 1.96 * se\nprint(f"Mean: INR {mean:,.2f} | 95% CI: [INR {ci_low:,.2f}, INR {ci_high:,.2f}]")`,
    starterSql: `SELECT COUNT(*) AS n, ROUND(AVG(amount), 2) AS avg_amt FROM orders;`
  },
  {
    day: 97,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "StatQuest",
    duration: "13m",
    title: "Non-Parametric Bootstrap Confidence Intervals",
    videoId: "Xz0x-8-cgaQ",
    altVideoId: "TqOeMYtOc1w",
    focus: "00:00 – 12:30",
    takeaways: [
      "Bootstrapping resamples your observed dataset WITH replacement thousands of times to estimate CIs for medians or ratios without normality assumptions.",
      "Take the 2.5th and 97.5th percentiles of bootstrap statistics for a 95% CI."
    ],
    lab: "Compute a 95% bootstrap confidence interval for the median of a small skewed salary sample.",
    hint: "Draw shape (5000, len(data)) with replacement via rng.choice, take median along axis=1, then np.percentile(..., [2.5, 97.5]).",
    starterPy: `import numpy as np\n\ndata = np.array([55000, 62000, 68000, 71000, 74000, 82000, 145000])\nrng = np.random.default_rng(42)\nboot_medians = np.median(rng.choice(data, size=(5000, len(data)), replace=True), axis=1)\nlow, high = np.percentile(boot_medians, [2.5, 97.5])\nprint(f"Observed Median: {np.median(data):,.0f} | Bootstrap 95% CI: [{low:,.0f}, {high:,.0f}]")`,
    starterSql: `SELECT salary FROM employees ORDER BY salary;`
  },
  {
    day: 98,
    month: 4,
    week: 14,
    subject: "Probability, Bayes & Inference",
    instructor: "StatQuest",
    duration: "14m",
    title: "Week 14 Practice: Bayesian Conversion Rate Updater",
    videoId: "9wCnvr7Xw4E",
    altVideoId: "HZGCoVF3YvM",
    focus: "07:01 – 14:15",
    takeaways: [
      "Beta(alpha + conversions, beta + non_conversions) models conversion rate uncertainty cleanly in Bayesian A/B testing.",
      "Sampling from posterior Beta distributions lets you directly compute P(Variant B > Variant A)."
    ],
    lab: "Compare Variant A (120/1000 conversions) vs Variant B (148/1000 conversions) using Beta posterior draws to compute P(B > A).",
    hint: "Sample from rng.beta(1 + conv, 1 + (trials - conv), size=50000) for both variants.",
    starterPy: `import numpy as np\n\nrng = np.random.default_rng(42)\npost_a = rng.beta(1 + 120, 1 + 880, size=50000)\npost_b = rng.beta(1 + 148, 1 + 852, size=50000)\nprob_b_wins = np.mean(post_b > post_a)\nprint(f"P(Variant B beats Variant A) = {prob_b_wins:.2%}")`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 99,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "StatQuest",
    duration: "12m",
    title: "Null Hypothesis, p-Values, Alpha & Type I/II Errors",
    videoId: "0oc49DyA3hU",
    altVideoId: "vemZtEM63GY",
    focus: "00:00 – 11:50",
    takeaways: [
      "A p-value is P(observing data at least this extreme | H0 is true)—NOT the probability that H0 is true.",
      "Type I error (alpha, usually 0.05) is a false positive; Type II error (beta) is missing a real effect (Power = 1 - beta)."
    ],
    lab: "Simulate 1,000 A/A tests where both groups share the exact same distribution and verify the false-positive rate stays near alpha = 0.05.",
    hint: "Use scipy.stats.ttest_ind(a, b).pvalue < 0.05 across 1,000 iterations.",
    starterPy: `import numpy as np\nfrom scipy import stats\n\nrng = np.random.default_rng(42)\nfalse_positives = 0\nfor _ in range(1000):\n    a = rng.normal(100, 15, 50)\n    b = rng.normal(100, 15, 50)\n    if stats.ttest_ind(a, b).pvalue < 0.05:\n        false_positives += 1\nprint(f"A/A False Positive Rate at alpha=0.05: {false_positives/1000:.3f}")`,
    starterSql: `SELECT region, AVG(amount) FROM orders GROUP BY region;`
  },
  {
    day: 100,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "StatQuest",
    duration: "14m",
    title: "Two-Sample Welch's t-Test & Mann-Whitney U Test",
    videoId: "0Pd3dc1GcHc",
    altVideoId: "0oc49DyA3hU",
    focus: "00:00 – 13:40",
    takeaways: [
      "Always default to Welch's t-test (equal_var=False) because it handles unequal group variances without losing power.",
      "Use Mann-Whitney U (stats.mannwhitneyu) when comparing heavily skewed metrics where medians matter more than means."
    ],
    lab: "Run Welch's t-test comparing checkout revenue between Control and Treatment groups and report t-stat, p-value, and lift %.",
    hint: "stats.ttest_ind(treatment, control, equal_var=False).",
    starterPy: `import numpy as np\nfrom scipy import stats\n\ncontrol = np.array([420, 450, 390, 410, 480, 430, 405, 440, 415, 460])\ntreatment = np.array([490, 520, 475, 510, 540, 495, 485, 530, 505, 515])\nt_stat, p_val = stats.ttest_ind(treatment, control, equal_var=False)\nlift = (treatment.mean() - control.mean()) / control.mean() * 100\nprint(f"Lift: +{lift:.1f}% | t = {t_stat:.3f} | p = {p_val:.5f} | Significant: {p_val < 0.05}")`,
    starterSql: `SELECT status, COUNT(*) AS n, ROUND(AVG(amount), 2) AS avg_amt FROM orders GROUP BY status;`
  },
  {
    day: 101,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "StatQuest",
    duration: "12m",
    title: "Chi-Square Test of Independence for Conversion Funnels",
    videoId: "7_cs1YlZoug",
    altVideoId: "0oc49DyA3hU",
    focus: "00:00 – 11:35",
    takeaways: [
      "Chi-Square tests whether categorical conversion counts depend on experiment variant or device type.",
      "scipy.stats.chi2_contingency(table) returns chi2 statistic, p-value, degrees of freedom, and expected counts."
    ],
    lab: "Test whether signup conversion differs significantly across Desktop vs Mobile traffic using a 2x2 contingency table.",
    hint: "Pass [[desktop_conv, desktop_non], [mobile_conv, mobile_non]] to stats.chi2_contingency().",
    starterPy: `from scipy import stats\n\n# Rows: Desktop, Mobile | Cols: Converted, Not Converted\ntable = [[340, 1660], [270, 1730]]\nchi2, p_val, dof, _ = stats.chi2_contingency(table)\nprint(f"Chi2 = {chi2:.3f} | dof = {dof} | p-value = {p_val:.5f}")`,
    starterSql: `SELECT region, status, COUNT(*) AS cnt FROM orders GROUP BY region, status;`
  },
  {
    day: 102,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "Brandon Foltz",
    duration: "16m",
    title: "One-Way ANOVA & Multiple Testing Correction (Bonferroni)",
    videoId: "0Vj2V2JPBQ0",
    altVideoId: "0Pd3dc1GcHc",
    focus: "00:00 – 15:40",
    takeaways: [
      "ANOVA tests whether 3+ group means differ simultaneously without inflating Type I error from repeated pairwise t-tests.",
      "When running k tests, Bonferroni adjusts alpha_adj = alpha / k to control family-wise false positives."
    ],
    lab: "Run One-Way ANOVA across 3 regional sales teams (West, South, North) using scipy.stats.f_oneway.",
    hint: "f_stat, p_val = stats.f_oneway(west, south, north).",
    starterPy: `from scipy import stats\n\nwest = [42, 45, 48, 44, 49, 46]\nsouth = [38, 40, 37, 41, 39, 42]\nnorth = [51, 54, 49, 53, 55, 52]\nf_stat, p_val = stats.f_oneway(west, south, north)\nprint(f"ANOVA F = {f_stat:.3f} | p-value = {p_val:.5f}")`,
    starterSql: `SELECT region, ROUND(AVG(amount), 2) AS avg_amt FROM orders GROUP BY region;`
  },
  {
    day: 103,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "StatQuest",
    duration: "15m",
    title: "Statistical Power, Effect Size (Cohen's d) & Sample Size Planning",
    videoId: "VX_M3tIyiYk",
    altVideoId: "0oc49DyA3hU",
    focus: "00:00 – 14:40",
    takeaways: [
      "Tiny p-values on million-row tables can reflect negligible practical lift—always pair p-values with Effect Size (Cohen's d).",
      "Sample size per variant scales roughly as 16 * sigma^2 / delta^2 for 80% power at alpha = 0.05."
    ],
    lab: "Compute Cohen's d effect size and required sample size per variant to detect a 2% lift over a 10% baseline conversion rate.",
    hint: "n_per_group = 16 * p * (1 - p) / (mde ** 2).",
    starterPy: `import math\n\np_base = 0.10\nmde = 0.02  # Minimum Detectable Effect (+2% absolute)\nn_per_variant = math.ceil(16 * p_base * (1 - p_base) / (mde ** 2))\nprint(f"Required sample size per variant (80% power, alpha=0.05): {n_per_variant:,} users")`,
    starterSql: `SELECT COUNT(*) AS current_sample FROM orders;`
  },
  {
    day: 104,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "StatQuest",
    duration: "14m",
    title: "A/B Test Guardrails: Sample Ratio Mismatch (SRM) & Peeking",
    videoId: "7_cs1YlZoug",
    altVideoId: "0oc49DyA3hU",
    focus: "05:00 – 11:35",
    takeaways: [
      "Sample Ratio Mismatch (SRM)—e.g., 52%/48% split instead of 50%/50%—signals broken randomization and invalidates the experiment.",
      "Stopping an A/B test early the moment p < 0.05 ('peeking') inflates false positives above 25%."
    ],
    lab: "Write an automated SRM health check using Chi-Square goodness-of-fit on observed variant traffic [5180, 4820].",
    hint: "stats.chisquare(f_obs=[5180, 4820], f_exp=[5000, 5000]).",
    starterPy: `from scipy import stats\n\nobs = [5180, 4820]\nexp = [sum(obs)/2, sum(obs)/2]\nchi2, p_val = stats.chisquare(f_obs=obs, f_exp=exp)\nprint(f"SRM Chi2 = {chi2:.2f} | p = {p_val:.5f} -> SRM Alert: {p_val < 0.001}")`,
    starterSql: `SELECT region, COUNT(*) AS traffic FROM orders GROUP BY region;`
  },
  {
    day: 105,
    month: 4,
    week: 15,
    subject: "Hypothesis Testing & A/B Tests",
    instructor: "StatQuest",
    duration: "16m",
    title: "Week 15 Practice: Full A/B Experiment Decision Report",
    videoId: "0Pd3dc1GcHc",
    altVideoId: "7_cs1YlZoug",
    focus: "00:00 – 13:40",
    takeaways: [
      "A ship/no-ship experiment memo checks SRM first, primary metric lift + 95% CI + p-value second, and guardrail metrics third.",
      "Automating experiment evaluation prevents human confirmation bias."
    ],
    lab: "Evaluate a checkout redesign experiment: verify SRM, compute conversion rates, 95% CI on lift, and print SHIP or HOLD.",
    hint: "Use z-test for two proportions and check p_val < 0.05 and srm_ok.",
    starterPy: `import numpy as np\nfrom scipy import stats\n\nn_a, conv_a = 5000, 610\nn_b, conv_b = 5020, 685\n_, srm_p = stats.chisquare([n_a, n_b], [(n_a+n_b)/2]*2)\np_a, p_b = conv_a / n_a, conv_b / n_b\nse_diff = np.sqrt(p_a*(1-p_a)/n_a + p_b*(1-p_b)/n_b)\nz = (p_b - p_a) / se_diff\np_val = 2 * (1 - stats.norm.cdf(abs(z)))\nprint(f"CR_A: {p_a:.2%} | CR_B: {p_b:.2%} | Rel Lift: {(p_b-p_a)/p_a:+.1%} | p={p_val:.4f} | Decision: {'SHIP' if (srm_p > 0.001 and p_val < 0.05) else 'HOLD'}")`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 106,
    month: 4,
    week: 16,
    subject: "Data Visualization & Storytelling",
    instructor: "Corey Schafer",
    duration: "27m",
    title: "Matplotlib Object-Oriented API: Figure, Axes & Styling",
    videoId: "UO98lJQ3QGI",
    altVideoId: "nKxLfUrkLE8",
    focus: "00:00 – 27:10",
    takeaways: [
      "Always use the explicit OO interface fig, ax = plt.subplots(figsize=(8, 4)) instead of stateful plt.plot().",
      "Remove top and right spines (ax.spines['top'].set_visible(False)) for clean, publication-grade charts."
    ],
    lab: "Build a Matplotlib figure pipeline comparing monthly target vs actual revenue and verify the rendered axis labels and title.",
    hint: "Call fig, ax = plt.subplots(), plot both series, and print ax.get_title() and line count.",
    starterPy: `import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\n\nmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]\nactual = [42, 48, 46, 55, 61, 68]\ntarget = [40, 45, 50, 54, 58, 64]\n\nfig, ax = plt.subplots(figsize=(8, 4))\nax.plot(months, actual, marker="o", linewidth=2.5, label="Actual (Lakhs)")\nax.plot(months, target, linestyle="--", label="Target (Lakhs)")\nax.set_title("H1 Revenue Performance vs Target")\nax.legend()\nprint("Chart Built:", ax.get_title(), "| Series:", len(ax.lines))`,
    starterSql: `SELECT strftime('%Y-%m', order_date) AS m, SUM(amount) AS rev FROM orders GROUP BY m;`
  },
  {
    day: 107,
    month: 4,
    week: 16,
    subject: "Data Visualization & Storytelling",
    instructor: "Corey Schafer",
    duration: "24m",
    title: "Horizontal Bar Charts, Direct Labels & Ranked Comparisons",
    videoId: "nKxLfUrkLE8",
    altVideoId: "UO98lJQ3QGI",
    focus: "00:00 – 24:05",
    takeaways: [
      "Horizontal bar charts (ax.barh) keep long category labels readable without tilted text.",
      "Sorting bars ascending puts the #1 category at the top of horizontal charts."
    ],
    lab: "Create a sorted horizontal bar chart of regional revenue with direct value annotations on each bar.",
    hint: "Use ax.barh(regions, values) and loop over ax.patches to call ax.text().",
    starterPy: `import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\n\ndata = sorted([("West", 185), ("South", 142), ("North", 164), ("East", 98)], key=lambda x: x[1])\nlabels, vals = zip(*data)\nfig, ax = plt.subplots()\nbars = ax.barh(labels, vals, color="#38bdf8")\nax.set_title("Revenue by Region (INR Lakhs)")\nprint("Top Region Bar:", labels[-1], vals[-1], "| Total Bars:", len(bars))`,
    starterSql: `SELECT region, SUM(amount) AS rev FROM orders GROUP BY region ORDER BY rev DESC;`
  },
  {
    day: 108,
    month: 4,
    week: 16,
    subject: "Data Visualization & Storytelling",
    instructor: "Corey Schafer",
    duration: "18m",
    title: "Histograms, KDE Density Curves & Binning Strategy",
    videoId: "XDv6T4a0RNc",
    altVideoId: "UO98lJQ3QGI",
    focus: "00:00 – 18:10",
    takeaways: [
      "Histograms reveal modality and skew; overlay vertical dashed lines (ax.axvline) for mean and median.",
      "Freedman-Diaconis or 'auto' binning avoids hiding bimodal peaks."
    ],
    lab: "Generate a histogram of 1,000 simulated order values with vertical reference lines for mean and median.",
    hint: "ax.hist(data, bins='auto', alpha=0.75); ax.axvline(data.mean(), linestyle='--').",
    starterPy: `import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt, numpy as np\n\nrng = np.random.default_rng(42)\ndata = rng.lognormal(mean=7.5, sigma=0.5, size=1000)\nfig, ax = plt.subplots()\ncounts, bins, _ = ax.hist(data, bins=25, alpha=0.8)\nax.axvline(data.mean(), color="red", linestyle="--", label="Mean")\nax.axvline(np.median(data), color="green", linestyle="-", label="Median")\nprint(f"Histogram Bins: {len(counts)} | Mean={data.mean():.0f} vs Median={np.median(data):.0f}")`,
    starterSql: `SELECT amount FROM orders;`
  },
  {
    day: 109,
    month: 4,
    week: 16,
    subject: "Data Visualization & Storytelling",
    instructor: "Corey Schafer",
    duration: "21m",
    title: "Scatter Plots, Trendlines & Bubble Encoding",
    videoId: "zZZ_3IC49ig",
    altVideoId: "UO98lJQ3QGI",
    focus: "00:00 – 21:00",
    takeaways: [
      "Scatter plots encode two continuous variables on x/y, plus a third via marker size and a fourth via color hue.",
      "Adding an OLS trendline (np.polyfit(x, y, 1)) highlights linear direction and residual spread."
    ],
    lab: "Fit a degree-1 trendline between marketing spend and signups and compute the predicted signups at spend = 75.",
    hint: "slope, intercept = np.polyfit(spend, signups, 1).",
    starterPy: `import numpy as np\n\nspend = np.array([10, 20, 30, 40, 50, 60], dtype=float)\nsignups = np.array([120, 215, 295, 410, 490, 605], dtype=float)\nslope, intercept = np.polyfit(spend, signups, 1)\npred_75 = slope * 75 + intercept\nprint(f"Trendline: signups = {slope:.2f}*spend + {intercept:.2f} | Pred at 75: {pred_75:.0f}")`,
    starterSql: `SELECT salary, emp_id FROM employees;`
  },
  {
    day: 110,
    month: 4,
    week: 16,
    subject: "Data Visualization & Storytelling",
    instructor: "StatQuest",
    duration: "14m",
    title: "Box Plots, Violin Plots & Correlation Heatmaps",
    videoId: "fQb0_3f7V0A",
    altVideoId: "SzZ6GpcfoQY",
    focus: "00:00 – 13:50",
    takeaways: [
      "Box plots summarize median, IQR box, 1.5*IQR whiskers, and outlier points across multiple categories side-by-side.",
      "Annotated correlation matrices quickly expose multicollinearity among numeric features before modeling."
    ],
    lab: "Compute a 3x3 Pearson correlation matrix across [age, tenure, salary] and identify the strongest correlated pair.",
    hint: "Use df.corr().round(3).",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "age": [24, 28, 32, 36, 41, 45],\n    "tenure": [1, 3, 5, 7, 10, 12],\n    "salary": [55000, 72000, 88000, 102000, 125000, 140000]\n})\ncorr = df.corr().round(3)\nprint("Correlation Matrix:\\n", corr)`,
    starterSql: `SELECT department, MIN(salary), AVG(salary), MAX(salary) FROM employees GROUP BY department;`
  },
  {
    day: 111,
    month: 4,
    week: 16,
    subject: "Data Visualization & Storytelling",
    instructor: "Corey Schafer",
    duration: "23m",
    title: "Multi-Panel Dashboards with Subplots & GridSpec",
    videoId: "XFZOrhhC-ao",
    altVideoId: "UO98lJQ3QGI",
    focus: "00:00 – 23:05",
    takeaways: [
      "fig, axes = plt.subplots(2, 2, figsize=(12, 8), constrained_layout=True) builds clean 4-quadrant executive dashboards.",
      "Consistent color palettes and action-oriented titles ('Revenue Grew 22% in Q2' vs 'Revenue Chart') elevate executive storytelling."
    ],
    lab: "Configure a 2x2 Matplotlib subplot grid with distinct panel titles and verify all 4 Axes objects.",
    hint: "Iterate over axes.flat to set titles cleanly.",
    starterPy: `import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as plt\n\nfig, axes = plt.subplots(2, 2, figsize=(10, 6))\ntitles = ["Monthly Revenue Trend", "Channel Conversion %", "Order Value Distribution", "Regional Profit Margin"]\nfor ax, title in zip(axes.flat, titles):\n    ax.set_title(title)\nprint("Dashboard Panels Configured:", [ax.get_title() for ax in axes.flat])`,
    starterSql: `SELECT region, COUNT(*) AS orders, SUM(amount) AS revenue FROM orders GROUP BY region;`
  },
  {
    day: 112,
    month: 4,
    week: 16,
    subject: "Stats & Experimentation Capstone",
    instructor: "StatQuest",
    duration: "28m",
    title: "Month 4 Capstone: End-to-End Pricing A/B & Statistical Audit",
    videoId: "0Pd3dc1GcHc",
    altVideoId: "0oc49DyA3hU",
    focus: "00:00 – 13:40",
    takeaways: [
      "Rigorous data analysis combines descriptive profiling, SRM validation, non-parametric/parametric hypothesis testing, and confidence intervals.",
      "Executive recommendations must translate statistical outputs into annualized INR impact."
    ],
    lab: "Audit a tiered-shipping A/B test: verify 50/50 split, run Welch's t-test on order value, compute 95% CI of the lift, and project annual revenue impact across 50,000 orders.",
    hint: "Multiply mean lift per order by 50,000 for projected annual INR gain.",
    starterPy: `import numpy as np\nfrom scipy import stats\n\nrng = np.random.default_rng(2026)\nctrl = rng.normal(2400, 450, 1200)\ntreat = rng.normal(2540, 460, 1210)\n_, srm_p = stats.chisquare([len(ctrl), len(treat)], [(len(ctrl)+len(treat))/2]*2)\nt_stat, p_val = stats.ttest_ind(treat, ctrl, equal_var=False)\ndiff = treat.mean() - ctrl.mean()\nse = np.sqrt(treat.var(ddof=1)/len(treat) + ctrl.var(ddof=1)/len(ctrl))\nci = (diff - 1.96*se, diff + 1.96*se)\nprint(f"SRM p={srm_p:.3f} | Lift=INR {diff:.2f} (95% CI: [{ci[0]:.2f}, {ci[1]:.2f}]) | p={p_val:.5f}")\nprint(f"Projected Annual Impact (50k orders): INR {diff * 50000:,.0f}")`,
    starterSql: `SELECT region, COUNT(*) AS orders, ROUND(AVG(amount), 2) AS aov FROM orders GROUP BY region;`
  },

  // ==================== MONTH 5: MACHINE LEARNING & PIPELINES (DAYS 113–140) ====================
  {
    day: 113,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "StatQuest",
    duration: "18m",
    title: "ML Workflow, Bias-Variance Tradeoff & Train/Test Split",
    videoId: "EuBBz3bI-aA",
    altVideoId: "nk2CQITm_eo",
    focus: "00:00 – 17:45",
    takeaways: [
      "High bias underfits training data; high variance memorizes noise and fails on unseen test samples.",
      "Always split train/test BEFORE fitting scalers or imputers to prevent data leakage."
    ],
    lab: "Split a synthetic housing dataset 80/20 with train_test_split(random_state=42) and verify train and test shapes.",
    hint: "from sklearn.model_selection import train_test_split.",
    starterPy: `import numpy as np\nfrom sklearn.model_selection import train_test_split\n\nrng = np.random.default_rng(42)\nX = rng.normal(0, 1, size=(100, 4))\ny = X @ np.array([3.5, -2.0, 1.2, 0.5]) + rng.normal(0, 0.5, 100)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint("Train:", X_train.shape, "| Test:", X_test.shape)`,
    starterSql: `SELECT COUNT(*) AS total_rows FROM employees;`
  },
  {
    day: 114,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "StatQuest",
    duration: "27m",
    title: "Ordinary Least Squares (OLS) & Multiple Linear Regression",
    videoId: "nk2CQITm_eo",
    altVideoId: "zPG4NjIkCjc",
    focus: "00:00 – 27:10",
    takeaways: [
      "Linear regression fits weights w and intercept b minimizing Residual Sum of Squares (RSS).",
      "Inspect model.coef_ and model.intercept_ to interpret each feature's marginal effect holding others constant."
    ],
    lab: "Fit Scikit-Learn LinearRegression on [sqft, bedrooms] -> price and print learned coefficients and intercept.",
    hint: "from sklearn.linear_model import LinearRegression.",
    starterPy: `import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\nX = np.array([[800, 2], [1000, 2], [1200, 3], [1500, 3], [1800, 4]])\ny = np.array([65, 80, 98, 120, 145])  # Price in Lakhs\nmodel = LinearRegression().fit(X, y)\nprint("Coefficients (sqft, beds):", np.round(model.coef_, 4), "| Intercept:", round(model.intercept_, 2))\nprint("Predicted 1350 sqft 3BHK:", round(model.predict([[1350, 3]])[0], 2), "Lakhs")`,
    starterSql: `SELECT salary FROM employees;`
  },
  {
    day: 115,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "StatQuest",
    duration: "23m",
    title: "Gradient Descent & Feature Scaling Impact",
    videoId: "sDv4f4s2SB8",
    altVideoId: "nk2CQITm_eo",
    focus: "00:00 – 23:10",
    takeaways: [
      "Gradient descent iteratively updates weights w := w - lr * grad(Loss) in the direction of steepest descent.",
      "Unscaled features create elongated loss contours that slow convergence; StandardScaler makes contours spherical."
    ],
    lab: "Implement 200 steps of batch gradient descent in NumPy for y = 3x + 5 and watch MSE converge near zero.",
    hint: "grad_w = (2/n) * np.sum((y_pred - y) * x); grad_b = (2/n) * np.sum(y_pred - y).",
    starterPy: `import numpy as np\n\nx = np.array([1.0, 2.0, 3.0, 4.0, 5.0])\ny = 3.0 * x + 5.0\nw, b, lr = 0.0, 0.0, 0.05\n\nfor step in range(200):\n    y_pred = w * x + b\n    w -= lr * (2 / len(x)) * np.sum((y_pred - y) * x)\n    b -= lr * (2 / len(x)) * np.sum(y_pred - y)\nprint(f"Learned w = {w:.3f} (target 3.0), b = {b:.3f} (target 5.0)")`,
    starterSql: `SELECT emp_id, salary FROM employees LIMIT 5;`
  },
  {
    day: 116,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "StatQuest",
    duration: "14m",
    title: "Regression Metrics: MAE, RMSE, MAPE & Adjusted R-Squared",
    videoId: "2AQKmw14mHM",
    altVideoId: "nk2CQITm_eo",
    focus: "00:00 – 13:50",
    takeaways: [
      "MAE measures average absolute error in original units; RMSE penalizes large errors more heavily.",
      "R-squared measures variance explained, but always increases with extra features—use Adjusted R2 or test-set RMSE."
    ],
    lab: "Compute MAE, RMSE, and R2 score on actual vs predicted sales values using sklearn.metrics.",
    hint: "Use mean_absolute_error, root_mean_squared_error (or np.sqrt(mean_squared_error)), and r2_score.",
    starterPy: `import numpy as np\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\n\ny_true = np.array([100, 150, 200, 250, 300])\ny_pred = np.array([108, 142, 210, 240, 315])\nmae = mean_absolute_error(y_true, y_pred)\nrmse = np.sqrt(mean_squared_error(y_true, y_pred))\nr2 = r2_score(y_true, y_pred)\nprint(f"MAE: {mae:.2f} | RMSE: {rmse:.2f} | R2: {r2:.4f}")`,
    starterSql: `SELECT AVG(amount) FROM orders;`
  },
  {
    day: 117,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "StatQuest",
    duration: "12m",
    title: "Ridge Regression (L2 Penalty) for Multicollinearity",
    videoId: "Q81RR3yKn30",
    altVideoId: "NGf0voTMlcs",
    focus: "00:00 – 12:15",
    takeaways: [
      "Ridge adds alpha * sum(w_j^2) to the loss, shrinking correlated weights smoothly toward zero without eliminating them.",
      "Always standardize features with StandardScaler before applying Ridge or Lasso penalties."
    ],
    lab: "Compare OLS LinearRegression vs Ridge(alpha=10.0) coefficients on two highly collinear features.",
    hint: "Scale X first, then inspect .coef_ for both LinearRegression and Ridge(alpha=10.0).",
    starterPy: `import numpy as np\nfrom sklearn.linear_model import LinearRegression, Ridge\nfrom sklearn.preprocessing import StandardScaler\n\nrng = np.random.default_rng(42)\nx1 = rng.normal(0, 1, 50)\nx2 = x1 + rng.normal(0, 0.02, 50)  # Nearly collinear\nX = StandardScaler().fit_transform(np.column_stack([x1, x2]))\ny = 4 * x1 + rng.normal(0, 0.5, 50)\n\nols = LinearRegression().fit(X, y)\nridge = Ridge(alpha=10.0).fit(X, y)\nprint("OLS Coefs  :", np.round(ols.coef_, 2))\nprint("Ridge Coefs:", np.round(ridge.coef_, 2))`,
    starterSql: `SELECT salary FROM employees;`
  },
  {
    day: 118,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "StatQuest",
    duration: "11m",
    title: "Lasso Regression (L1 Penalty) & Embedded Feature Selection",
    videoId: "NGf0voTMlcs",
    altVideoId: "Q81RR3yKn30",
    focus: "00:00 – 10:50",
    takeaways: [
      "Lasso adds alpha * sum(|w_j|), whose diamond constraint geometry drives irrelevant feature weights to exact zero.",
      "ElasticNet combines L1 and L2 penalties when you have many correlated features."
    ],
    lab: "Fit Lasso(alpha=0.2) on 5 features where only the first 2 truly drive y, and verify the noisy features shrink to 0.",
    hint: "from sklearn.linear_model import Lasso.",
    starterPy: `import numpy as np\nfrom sklearn.linear_model import Lasso\n\nrng = np.random.default_rng(42)\nX = rng.normal(0, 1, (100, 5))\ny = 3.5 * X[:, 0] - 2.2 * X[:, 1] + rng.normal(0, 0.3, 100)\nlasso = Lasso(alpha=0.2).fit(X, y)\nprint("Lasso Learned Weights:", np.round(lasso.coef_, 3))`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 119,
    month: 5,
    week: 17,
    subject: "Regression & Regularization",
    instructor: "CampusX",
    duration: "25m",
    title: "Week 17 Practice: Polynomial Features & Overfitting Diagnostics",
    videoId: "1m3CPP-93BY",
    altVideoId: "EuBBz3bI-aA",
    focus: "00:00 – 25:00",
    takeaways: [
      "PolynomialFeatures(degree=2) captures non-linear curves and feature interactions while staying linear in parameters.",
      "Comparing train RMSE vs test RMSE across polynomial degrees pinpoints the exact sweet spot before overfitting."
    ],
    lab: "Compare train vs test RMSE for Polynomial degrees 1, 2, and 6 on a curved quadratic dataset.",
    hint: "Use make_pipeline(PolynomialFeatures(deg), LinearRegression()).",
    starterPy: `import numpy as np\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\n\nrng = np.random.default_rng(42)\nX = np.sort(rng.uniform(-3, 3, (40, 1)), axis=0)\ny = 1.5 * X[:, 0]**2 - 2 * X[:, 0] + 1 + rng.normal(0, 1.2, 40)\nX_tr, X_te, y_tr, y_te = X[:28], X[28:], y[:28], y[28:]\n\nfor deg in [1, 2, 6]:\n    m = make_pipeline(PolynomialFeatures(deg), LinearRegression()).fit(X_tr, y_tr)\n    tr_rmse = np.sqrt(mean_squared_error(y_tr, m.predict(X_tr)))\n    te_rmse = np.sqrt(mean_squared_error(y_te, m.predict(X_te)))\n    print(f"Degree {deg} -> Train RMSE: {tr_rmse:.2f} | Test RMSE: {te_rmse:.2f}")`,
    starterSql: `SELECT * FROM orders LIMIT 5;`
  },
  {
    day: 120,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "StatQuest",
    duration: "14m",
    title: "Logistic Regression, Sigmoid Probability & Log-Loss",
    videoId: "yIYKR4sgzI8",
    altVideoId: "vN5cNN2-HWE",
    focus: "00:00 – 14:15",
    takeaways: [
      "Logistic regression maps linear log-odds z = w^T x + b through sigmoid(z) = 1 / (1 + e^-z) into calibrated probabilities [0, 1].",
      ".predict_proba(X)[:, 1] outputs class-1 probabilities so you can tune business decision thresholds."
    ],
    lab: "Train LogisticRegression on customer churn features and print predicted churn probabilities via .predict_proba().",
    hint: "from sklearn.linear_model import LogisticRegression.",
    starterPy: `import numpy as np\nfrom sklearn.linear_model import LogisticRegression\n\n# Features: [support_tickets, monthly_spend_k]\nX = np.array([[0, 8.5], [1, 7.2], [4, 2.1], [5, 1.8], [2, 5.0], [6, 1.5]])\ny = np.array([0, 0, 1, 1, 0, 1])\nclf = LogisticRegression().fit(X, y)\nprobs = clf.predict_proba([[3, 3.0], [0, 9.0]])[:, 1]\nprint("Churn Probabilities:", np.round(probs, 3))`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 121,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "StatQuest",
    duration: "12m",
    title: "Confusion Matrix, Precision, Recall & F1-Score",
    videoId: "Kdsp6soqA7o",
    altVideoId: "yIYKR4sgzI8",
    focus: "00:00 – 11:45",
    takeaways: [
      "Accuracy misleads on imbalanced datasets (99% non-fraud); inspect Precision = TP/(TP+FP) and Recall = TP/(TP+FN).",
      "Maximize Recall when missing positives is costly (cancer/fraud); maximize Precision when false alarms are costly (spam)."
    ],
    lab: "Compute Precision, Recall, F1, and the Confusion Matrix on imbalanced predictions, then compare threshold 0.5 vs 0.3.",
    hint: "Use precision_score, recall_score, f1_score from sklearn.metrics.",
    starterPy: `import numpy as np\nfrom sklearn.metrics import precision_score, recall_score, f1_score\n\ny_true = np.array([0, 0, 0, 0, 0, 0, 1, 1, 1, 1])\ny_prob = np.array([0.1, 0.2, 0.35, 0.4, 0.15, 0.6, 0.38, 0.72, 0.85, 0.45])\nfor thresh in [0.5, 0.35]:\n    preds = (y_prob >= thresh).astype(int)\n    print(f"Thresh={thresh} -> Precision={precision_score(y_true, preds):.2f} | Recall={recall_score(y_true, preds):.2f} | F1={f1_score(y_true, preds):.2f}")`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 122,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "StatQuest",
    duration: "16m",
    title: "ROC-AUC & Precision-Recall Curves Across Thresholds",
    videoId: "4jRBRDbJemM",
    altVideoId: "Kdsp6soqA7o",
    focus: "00:00 – 15:50",
    takeaways: [
      "ROC-AUC measures the probability that a randomly chosen positive ranks higher in predicted score than a randomly chosen negative.",
      "When positives are < 5% of data, PR-AUC (average_precision_score) is much more informative than ROC-AUC."
    ],
    lab: "Compute both roc_auc_score and average_precision_score on a binary classifier's probability outputs.",
    hint: "from sklearn.metrics import roc_auc_score, average_precision_score.",
    starterPy: `import numpy as np\nfrom sklearn.metrics import roc_auc_score, average_precision_score\n\ny_true = np.array([0, 0, 0, 0, 0, 0, 0, 1, 1, 1])\ny_scores = np.array([0.05, 0.12, 0.18, 0.25, 0.31, 0.42, 0.55, 0.48, 0.79, 0.91])\nprint(f"ROC-AUC: {roc_auc_score(y_true, y_scores):.3f} | PR-AUC: {average_precision_score(y_true, y_scores):.3f}")`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 123,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "StatQuest",
    duration: "10m",
    title: "K-Nearest Neighbors (KNN) & Distance Metrics",
    videoId: "HVXime0nQeI",
    altVideoId: "yIYKR4sgzI8",
    focus: "00:00 – 09:45",
    takeaways: [
      "KNN classifies points by majority vote of their k closest neighbors in feature space—requiring strict feature scaling.",
      "Small k (k=1) overfits noise; moderate odd k (k=5, 7) smooths decision boundaries."
    ],
    lab: "Wrap StandardScaler and KNeighborsClassifier(n_neighbors=5) in a pipeline and evaluate accuracy on synthetic classes.",
    hint: "make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5)).",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\n\nX, y = make_classification(n_samples=200, n_features=6, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\npipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5)).fit(X_tr, y_tr)\nprint("KNN Test Accuracy:", round(pipe.score(X_te, y_te), 3))`,
    starterSql: `SELECT * FROM employees LIMIT 5;`
  },
  {
    day: 124,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "StatQuest",
    duration: "20m",
    title: "Support Vector Machines (SVM) & RBF Kernel Trick",
    videoId: "efR1C6CvhmE",
    altVideoId: "HVXime0nQeI",
    focus: "00:00 – 20:10",
    takeaways: [
      "SVMs find the maximum-margin hyperplane separating classes using critical boundary points (support vectors).",
      "The RBF kernel projects non-linearly separable data into higher dimensions implicitly."
    ],
    lab: "Train an RBF SVC(C=1.0, probability=True) inside a scaled pipeline on circular non-linear data (make_circles).",
    hint: "from sklearn.datasets import make_circles; from sklearn.svm import SVC.",
    starterPy: `from sklearn.datasets import make_circles\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\n\nX, y = make_circles(n_samples=200, noise=0.12, factor=0.4, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nclf = make_pipeline(StandardScaler(), SVC(kernel="rbf", C=1.0)).fit(X_tr, y_tr)\nprint("RBF SVM Accuracy on Concentric Circles:", round(clf.score(X_te, y_te), 3))`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 125,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "CampusX",
    duration: "22m",
    title: "Handling Class Imbalance: class_weight='balanced' & Stratified Splits",
    videoId: "1m3CPP-93BY",
    altVideoId: "Kdsp6soqA7o",
    focus: "25:01 – 47:00",
    takeaways: [
      "Always pass stratify=y in train_test_split so rare minority classes keep identical proportions in train and test sets.",
      "class_weight='balanced' upweights minority-class errors inversely proportional to class frequency."
    ],
    lab: "Compare recall on a 90/10 imbalanced dataset between standard LogisticRegression and LogisticRegression(class_weight='balanced').",
    hint: "Generate imbalanced data with make_classification(..., weights=[0.9, 0.1]).",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import recall_score\n\nX, y = make_classification(n_samples=400, weights=[0.9, 0.1], random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)\nfor cw in [None, "balanced"]:\n    m = LogisticRegression(class_weight=cw).fit(X_tr, y_tr)\n    print(f"class_weight={str(cw):8s} -> Minority Recall: {recall_score(y_te, m.predict(X_te)):.3f}")`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 126,
    month: 5,
    week: 18,
    subject: "Classification & Evaluation",
    instructor: "StatQuest",
    duration: "18m",
    title: "Week 18 Practice: Multi-Model Classifier Benchmark",
    videoId: "4jRBRDbJemM",
    altVideoId: "yIYKR4sgzI8",
    focus: "00:00 – 15:50",
    takeaways: [
      "Benchmarking linear (Logistic Regression), distance-based (KNN), and kernel (SVM) models on the exact same stratified split reveals dataset geometry.",
      "Select models using validation ROC-AUC and F1 rather than training accuracy."
    ],
    lab: "Evaluate LogisticRegression, KNN, and RBF SVC on a shared stratified split and print each model's ROC-AUC.",
    hint: "Use predict_proba(X_te)[:, 1] for all three models (pass probability=True to SVC).",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.metrics import roc_auc_score\n\nX, y = make_classification(n_samples=300, n_informative=5, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)\nmodels = {\n    "LogReg": LogisticRegression(),\n    "KNN-7": KNeighborsClassifier(n_neighbors=7),\n    "RBF-SVM": SVC(probability=True, random_state=42)\n}\nfor name, est in models.items():\n    pipe = make_pipeline(StandardScaler(), est).fit(X_tr, y_tr)\n    auc = roc_auc_score(y_te, pipe.predict_proba(X_te)[:, 1])\n    print(f"{name:10s} -> Test ROC-AUC: {auc:.4f}")`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 127,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "StatQuest",
    duration: "18m",
    title: "Decision Trees: Gini Impurity, Entropy & Depth Pruning",
    videoId: "_L39rN6gz7Y",
    altVideoId: "J4Wdy0Wc_xQ",
    focus: "00:00 – 17:40",
    takeaways: [
      "Decision trees recursively split features to minimize Gini impurity or Entropy, requiring zero feature scaling.",
      "Unconstrained trees memorize training rows (100% train accuracy, poor test accuracy)—constrain max_depth and min_samples_leaf."
    ],
    lab: "Compare train vs test accuracy between an unconstrained DecisionTreeClassifier and max_depth=4.",
    hint: "Fit DecisionTreeClassifier(random_state=42) vs DecisionTreeClassifier(max_depth=4, random_state=42).",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\n\nX, y = make_classification(n_samples=300, n_features=10, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nfor depth in [None, 4]:\n    dt = DecisionTreeClassifier(max_depth=depth, random_state=42).fit(X_tr, y_tr)\n    print(f"max_depth={str(depth):4s} -> Train Acc: {dt.score(X_tr, y_tr):.3f} | Test Acc: {dt.score(X_te, y_te):.3f}")`,
    starterSql: `SELECT department, COUNT(*) FROM employees GROUP BY department;`
  },
  {
    day: 128,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "StatQuest",
    duration: "11m",
    title: "Bagging, Bootstrap Aggregation & Out-of-Bag (OOB) Validation",
    videoId: "J4Wdy0Wc_xQ",
    altVideoId: "_L39rN6gz7Y",
    focus: "00:00 – 06:00",
    takeaways: [
      "Bagging trains dozens of high-variance trees on bootstrap resamples and averages their predictions to slash variance.",
      "Each tree leaves out ~36.8% of rows (Out-of-Bag samples), enabling built-in validation via oob_score=True."
    ],
    lab: "Train a RandomForestClassifier with oob_score=True and compare its OOB accuracy against held-out test accuracy.",
    hint: "RandomForestClassifier(n_estimators=100, oob_score=True, random_state=42).",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\nX, y = make_classification(n_samples=300, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nrf = RandomForestClassifier(n_estimators=100, oob_score=True, random_state=42).fit(X_tr, y_tr)\nprint(f"OOB Score: {rf.oob_score_:.3f} | Test Score: {rf.score(X_te, y_te):.3f}")`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 129,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "StatQuest",
    duration: "11m",
    title: "Random Forests & Feature Subsampling (max_features)",
    videoId: "J4Wdy0Wc_xQ",
    altVideoId: "_L39rN6gz7Y",
    focus: "06:01 – 11:10",
    takeaways: [
      "Random Forests decorrelate trees by testing only a random subset of features (sqrt(p)) at every split.",
      "rf.feature_importances_ ranks predictors, though permutation importance on test data is more reliable."
    ],
    lab: "Extract and rank the top 3 most important features from a fitted RandomForestClassifier.",
    hint: "Pair feature names with rf.feature_importances_ and sort descending.",
    starterPy: `import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.ensemble import RandomForestClassifier\n\nX, y = make_classification(n_samples=250, n_features=5, n_informative=2, random_state=42)\nnames = ["tenure", "spend", "tickets", "logins", "age"]\nrf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X, y)\nranked = sorted(zip(names, rf.feature_importances_), key=lambda x: x[1], reverse=True)\nfor feat, imp in ranked[:3]:\n    print(f"{feat:10s}: {imp:.3f}")`,
    starterSql: `SELECT department, AVG(salary) FROM employees GROUP BY department;`
  },
  {
    day: 130,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "StatQuest",
    duration: "21m",
    title: "Gradient Boosting Machines (GBM) & Residual Learning",
    videoId: "3CC4N4z3GJc",
    altVideoId: "OtD8wVaFm6E",
    focus: "00:00 – 20:50",
    takeaways: [
      "Unlike parallel Random Forests, Gradient Boosting builds shallow trees sequentially—each tree fits the negative gradient (residuals) of prior errors.",
      "Lower learning_rate (0.03–0.1) paired with more n_estimators improves generalization."
    ],
    lab: "Fit GradientBoostingRegressor and inspect how training MSE decreases across staged predictions.",
    hint: "from sklearn.ensemble import GradientBoostingRegressor.",
    starterPy: `from sklearn.datasets import make_regression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import GradientBoostingRegressor\nfrom sklearn.metrics import r2_score\n\nX, y = make_regression(n_samples=300, n_features=6, noise=12, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\ngbm = GradientBoostingRegressor(n_estimators=120, learning_rate=0.08, max_depth=3, random_state=42).fit(X_tr, y_tr)\nprint("GBM Test R2:", round(r2_score(y_te, gbm.predict(X_te)), 4))`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 131,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "StatQuest",
    duration: "24m",
    title: "Histogram-Based Gradient Boosting & XGBoost Mechanics",
    videoId: "OtD8wVaFm6E",
    altVideoId: "3CC4N4z3GJc",
    focus: "00:00 – 24:10",
    takeaways: [
      "XGBoost and Scikit-Learn's HistGradientBoostingClassifier bin continuous features into 256 histograms, training orders of magnitude faster on large tabular datasets.",
      "Built-in L1/L2 leaf regularization, column subsampling, and native missing-value routing make gradient boosted trees king on tabular data."
    ],
    lab: "Train HistGradientBoostingClassifier on a dataset containing NaN values directly without prior imputation.",
    hint: "from sklearn.ensemble import HistGradientBoostingClassifier.",
    starterPy: `import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import HistGradientBoostingClassifier\n\nX, y = make_classification(n_samples=300, random_state=42)\nX[0:15, 0] = np.nan  # Inject missing values\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=42)\nhgb = HistGradientBoostingClassifier(max_iter=100, learning_rate=0.08, random_state=42).fit(X_tr, y_tr)\nprint("HistGradientBoosting Accuracy (with native NaNs):", round(hgb.score(X_te, y_te), 3))`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 132,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "StatQuest",
    duration: "15m",
    title: "Cross-Validation & RandomizedSearchCV Hyperparameter Tuning",
    videoId: "fSytzGwwBVw",
    altVideoId: "J4Wdy0Wc_xQ",
    focus: "00:00 – 14:40",
    takeaways: [
      "StratifiedKFold(n_splits=5) evaluates models across 5 distinct validation folds so a lucky split never fools you.",
      "RandomizedSearchCV samples hyperparameter combinations much more efficiently than exhaustive GridSearchCV."
    ],
    lab: "Run 5-fold StratifiedKFold cross-validation with RandomizedSearchCV on a RandomForestClassifier.",
    hint: "from sklearn.model_selection import RandomizedSearchCV.",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import RandomizedSearchCV\n\nX, y = make_classification(n_samples=250, random_state=42)\nparam_dist = {"n_estimators": [50, 100, 150], "max_depth": [3, 5, 8, None], "min_samples_leaf": [1, 2, 4]}\nsearch = RandomizedSearchCV(RandomForestClassifier(random_state=42), param_dist, n_iter=6, cv=4, scoring="roc_auc", random_state=42)\nsearch.fit(X, y)\nprint("Best CV ROC-AUC:", round(search.best_score_, 4), "| Params:", search.best_params_)`,
    starterSql: `SELECT department, COUNT(*) FROM employees GROUP BY department;`
  },
  {
    day: 133,
    month: 5,
    week: 19,
    subject: "Trees, Ensembles & Boosting",
    instructor: "CampusX",
    duration: "24m",
    title: "Week 19 Practice: Permutation Feature Importance & Model Explainability",
    videoId: "1m3CPP-93BY",
    altVideoId: "J4Wdy0Wc_xQ",
    focus: "47:01 – 01:11:00",
    takeaways: [
      "Impurity-based importance inflates high-cardinality numeric features; permutation_importance measures actual test-score drop when a feature is shuffled.",
      "Shapley (SHAP) and permutation explanations turn black-box ensembles into transparent business drivers."
    ],
    lab: "Compute test-set permutation_importance for a fitted RandomForestClassifier and print mean importance drop per feature.",
    hint: "from sklearn.inspection import permutation_importance.",
    starterPy: `from sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.inspection import permutation_importance\n\nX, y = make_classification(n_samples=250, n_features=4, n_informative=2, n_redundant=0, random_state=42)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.3, random_state=42)\nrf = RandomForestClassifier(n_estimators=80, random_state=42).fit(X_tr, y_tr)\nperm = permutation_importance(rf, X_te, y_te, n_repeats=10, random_state=42)\nfor i, imp in enumerate(perm.importances_mean):\n    print(f"Feature {i}: mean accuracy drop = {imp:+.3f}")`,
    starterSql: `SELECT * FROM employees LIMIT 5;`
  },
  {
    day: 134,
    month: 5,
    week: 20,
    subject: "Unsupervised ML & Pipelines",
    instructor: "StatQuest",
    duration: "15m",
    title: "K-Means Clustering, Inertia & Silhouette Score",
    videoId: "4b5d3muPQmA",
    altVideoId: "FgakZw6K1QQ",
    focus: "00:00 – 14:40",
    takeaways: [
      "K-Means partitions scaled data into k spherical clusters minimizing within-cluster sum of squares (inertia).",
      "Silhouette score (-1 to +1) measures how tight each cluster is compared to its nearest neighboring cluster."
    ],
    lab: "Cluster scaled RFM customer data into k=2, 3, 4 clusters and pick the k with the highest silhouette_score.",
    hint: "from sklearn.cluster import KMeans; from sklearn.metrics import silhouette_score.",
    starterPy: `from sklearn.datasets import make_blobs\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.cluster import KMeans\nfrom sklearn.metrics import silhouette_score\n\nX, _ = make_blobs(n_samples=240, centers=3, cluster_std=0.8, random_state=42)\nX_sc = StandardScaler().fit_transform(X)\nfor k in [2, 3, 4]:\n    labels = KMeans(n_clusters=k, n_init=10, random_state=42).fit_predict(X_sc)\n    print(f"k={k} -> Silhouette Score: {silhouette_score(X_sc, labels):.3f}")`,
    starterSql: `SELECT region, COUNT(*), AVG(amount) FROM orders GROUP BY region;`
  },
  {
    day: 135,
    month: 5,
    week: 20,
    subject: "Unsupervised ML & Pipelines",
    instructor: "StatQuest",
    duration: "14m",
    title: "DBSCAN Density Clustering & Anomaly Isolation",
    videoId: "RDZUdRSDOok",
    altVideoId: "4b5d3muPQmA",
    focus: "00:00 – 13:50",
    takeaways: [
      "DBSCAN discovers arbitrarily shaped clusters without specifying k upfront and labels isolated sparse points as -1 (outliers).",
      "IsolationForest isolates anomalies in few random splits—ideal for unsupervised fraud and sensor fault detection."
    ],
    lab: "Use IsolationForest(contamination=0.05) to detect anomalous high-spend orders automatically.",
    hint: "from sklearn.ensemble import IsolationForest; predictions of -1 indicate anomalies.",
    starterPy: `import numpy as np\nfrom sklearn.ensemble import IsolationForest\n\nrng = np.random.default_rng(42)\nnormal = rng.normal(3000, 400, (95, 2))\nanomalies = np.array([[15000, 18000], [19000, 14000], [16500, 21000], [14000, 17500], [22000, 19500]])\nX = np.vstack([normal, anomalies])\npreds = IsolationForest(contamination=0.05, random_state=42).fit_predict(X)\nprint("Detected Anomalies Count:", int(np.sum(preds == -1)))`,
    starterSql: `SELECT order_id, amount FROM orders ORDER BY amount DESC LIMIT 5;`
  },
  {
    day: 136,
    month: 5,
    week: 20,
    subject: "Unsupervised ML & Pipelines",
    instructor: "StatQuest",
    duration: "22m",
    title: "Principal Component Analysis (PCA) & Explained Variance",
    videoId: "FgakZw6K1QQ",
    altVideoId: "4b5d3muPQmA",
    focus: "00:00 – 21:45",
    takeaways: [
      "PCA projects correlated high-dimensional features onto orthogonal principal components ordered by variance explained.",
      "Always standardize features first; choose n_components=0.95 to retain 95% of variance automatically."
    ],
    lab: "Compress a 10-feature correlated dataset using PCA(n_components=0.95) and print how many components were retained.",
    hint: "pca.n_components_ and np.sum(pca.explained_variance_ratio_).",
    starterPy: `import numpy as np\nfrom sklearn.datasets import make_classification\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\n\nX, _ = make_classification(n_samples=200, n_features=10, n_informative=4, n_redundant=4, random_state=42)\nX_sc = StandardScaler().fit_transform(X)\npca = PCA(n_components=0.95, random_state=42).fit(X_sc)\nprint(f"Reduced 10 features -> {pca.n_components_} PCs explaining {pca.explained_variance_ratio_.sum():.1%} variance")`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 137,
    month: 5,
    week: 20,
    subject: "Unsupervised ML & Pipelines",
    instructor: "CampusX",
    duration: "28m",
    title: "Scikit-Learn ColumnTransformer & Leakage-Free Pipelines",
    videoId: "1m3CPP-93BY",
    altVideoId: "fSytzGwwBVw",
    focus: "01:11:01 – 01:39:00",
    takeaways: [
      "ColumnTransformer routes numeric columns to SimpleImputer + StandardScaler and categorical columns to SimpleImputer + OneHotEncoder(handle_unknown='ignore').",
      "Wrapping preprocessing + model inside one Pipeline prevents train-test leakage and deploys as a single artifact."
    ],
    lab: "Build a mixed numeric + categorical Pipeline with ColumnTransformer and fit/predict on a Pandas DataFrame.",
    hint: "from sklearn.compose import ColumnTransformer; from sklearn.pipeline import Pipeline.",
    starterPy: `import pandas as pd\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.linear_model import LogisticRegression\n\ndf = pd.DataFrame({\n    "age": [25, 42, None, 35, 29, 51],\n    "city": ["Mumbai", "Pune", "Mumbai", "Delhi", "Pune", "Delhi"],\n    "churn": [0, 1, 0, 1, 0, 1]\n})\npre = ColumnTransformer([\n    ("num", Pipeline([("imp", SimpleImputer(strategy="median")), ("sc", StandardScaler())]), ["age"]),\n    ("cat", OneHotEncoder(handle_unknown="ignore"), ["city"])\n])\nclf = Pipeline([("pre", pre), ("model", LogisticRegression())]).fit(df[["age", "city"]], df["churn"])\nprint("Predicted Churn Probabilities:", clf.predict_proba(df[["age", "city"]])[:, 1].round(3))`,
    starterSql: `SELECT * FROM employees LIMIT 5;`
  },
  {
    day: 138,
    month: 5,
    week: 20,
    subject: "Unsupervised ML & Pipelines",
    instructor: "CampusX",
    duration: "22m",
    title: "Custom Feature Engineering Transformers & Model Serialization",
    videoId: "1m3CPP-93BY",
    altVideoId: "EuBBz3bI-aA",
    focus: "01:39:01 – 02:01:00",
    takeaways: [
      "FunctionTransformer wraps custom domain ratios (e.g., spend_per_order) directly inside Scikit-Learn Pipelines.",
      "joblib.dump(pipeline, 'model.joblib') saves preprocessing + model weights together for Streamlit or FastAPI inference."
    ],
    lab: "Use FunctionTransformer to engineer a 'spend_per_ticket' feature inside a Scikit-Learn Pipeline.",
    hint: "from sklearn.preprocessing import FunctionTransformer.",
    starterPy: `import pandas as pd\nfrom sklearn.preprocessing import FunctionTransformer\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.linear_model import LogisticRegression\n\ndef add_ratio(df):\n    out = df.copy()\n    out["spend_per_ticket"] = out["spend"] / (out["tickets"] + 1)\n    return out\n\ndf = pd.DataFrame({"spend": [5000, 1200, 8000, 900], "tickets": [0, 4, 1, 5]})\ny = [0, 1, 0, 1]\npipe = make_pipeline(FunctionTransformer(add_ratio), LogisticRegression()).fit(df, y)\nprint("Inference Probabilities:", pipe.predict_proba(df)[:, 1].round(3))`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 139,
    month: 5,
    week: 20,
    subject: "Unsupervised ML & Pipelines",
    instructor: "StatQuest",
    duration: "16m",
    title: "Business Cost-Matrix Threshold Optimization",
    videoId: "Kdsp6soqA7o",
    altVideoId: "4jRBRDbJemM",
    focus: "05:00 – 11:45",
    takeaways: [
      "Default 0.5 classification thresholds assume false positives and false negatives cost the same—almost never true in business.",
      "Sweeping thresholds from 0.1 to 0.9 to maximize net INR savings aligns ML directly with P&L impact."
    ],
    lab: "Find the optimal probability threshold when retaining a true churner saves INR 10,000 while sending an unnecessary retention offer costs INR 1,500.",
    hint: "Net Value = TP * 10000 - (TP + FP) * 1500.",
    starterPy: `import numpy as np\n\ny_true = np.array([1, 1, 1, 0, 0, 0, 0, 0, 1, 0])\ny_prob = np.array([0.82, 0.44, 0.29, 0.35, 0.12, 0.61, 0.08, 0.19, 0.71, 0.22])\nbest_t, best_val = 0.5, -1e9\nfor t in np.arange(0.1, 0.9, 0.05):\n    pred = (y_prob >= t).astype(int)\n    tp = np.sum((pred == 1) & (y_true == 1))\n    targeted = np.sum(pred == 1)\n    net_inr = tp * 10000 - targeted * 1500\n    if net_inr > best_val:\n        best_t, best_val = round(t, 2), net_inr\nprint(f"Optimal Threshold: {best_t} -> Net Business Value: INR {best_val:,}")`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 140,
    month: 5,
    week: 20,
    subject: "Machine Learning Capstone",
    instructor: "CampusX",
    duration: "35m",
    title: "Month 5 Capstone: End-to-End Customer Churn Prediction Pipeline",
    videoId: "1m3CPP-93BY",
    altVideoId: "OtD8wVaFm6E",
    focus: "00:00 – 35:00",
    takeaways: [
      "Production ML combines stratified train/test splitting, ColumnTransformer preprocessing, cross-validated ensemble comparison, and threshold optimization.",
      "Clean, reproducible pipelines form the core technical centerpiece of a Data Scientist portfolio."
    ],
    lab: "Build a full ColumnTransformer + RandomForest vs GradientBoosting churn pipeline on mixed tabular data and report test ROC-AUC.",
    hint: "Compare both pipelines on X_test using roc_auc_score(y_te, pipe.predict_proba(X_te)[:, 1]).",
    starterPy: `import pandas as pd, numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\nfrom sklearn.metrics import roc_auc_score\n\nrng = np.random.default_rng(42)\nn = 240\ndf = pd.DataFrame({\n    "tenure": rng.integers(1, 48, n),\n    "monthly_bill": rng.uniform(500, 5000, n),\n    "tickets": rng.poisson(1.8, n),\n    "plan": rng.choice(["Basic", "Pro", "Enterprise"], n)\n})\ny = ((df["tickets"] >= 3) | ((df["tenure"] < 10) & (df["plan"] == "Basic"))).astype(int)\nX_tr, X_te, y_tr, y_te = train_test_split(df, y, test_size=0.25, stratify=y, random_state=42)\npre = ColumnTransformer([("num", StandardScaler(), ["tenure", "monthly_bill", "tickets"]), ("cat", OneHotEncoder(), ["plan"])])\n\nfor name, clf in [("RandomForest", RandomForestClassifier(n_estimators=100, random_state=42)), ("GradBoost", GradientBoostingClassifier(random_state=42))]:\n    pipe = Pipeline([("pre", pre), ("clf", clf)]).fit(X_tr, y_tr)\n    print(f"{name:14s} -> Test ROC-AUC: {roc_auc_score(y_te, pipe.predict_proba(X_te)[:, 1]):.4f}")`,
    starterSql: `SELECT region, COUNT(*) AS orders, SUM(amount) AS revenue FROM orders GROUP BY region;`
  },

  // ==================== MONTH 6: GENAI, RAG, STREAMLIT & PORTFOLIO (DAYS 141–168) ====================
  {
    day: 141,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "Andrej Karpathy",
    duration: "32m",
    title: "How LLMs Work: Tokenization (BPE), Context Windows & Next-Token Prediction",
    videoId: "zjkBMFhNj_g",
    altVideoId: "zduSFxRajkE",
    focus: "00:00 – 32:00",
    takeaways: [
      "LLMs operate on subword tokens (~4 English chars/token) rather than raw words, explaining arithmetic and character-counting quirks.",
      "Pretraining compresses internet knowledge into base weights; post-training (SFT + RLHF) aligns models into helpful assistants."
    ],
    lab: "Build a subword-style frequency tokenizer & token-budget estimator in Python to calculate token count and API cost for a prompt.",
    hint: "Split words/punctuation with re.findall(r'\\w+|[^\\w\\s]', text) and estimate tokens ~ 1.3 * word_count.",
    starterPy: `import re\n\nprompt = "Analyze Q3 regional revenue churn across Mumbai, Pune, and Bengaluru cohorts."\npieces = re.findall(r"\\w+|[^\\w\\s]", prompt)\nest_tokens = int(len(pieces) * 1.25)\ncost_usd = (est_tokens / 1_000_000) * 0.10\nprint(f"Pieces: {len(pieces)} | Est Tokens: {est_tokens} | Est Input Cost: \${cost_usd:.7f}")`,
    starterSql: `SELECT * FROM orders LIMIT 5;`
  },
  {
    day: 142,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "3Blue1Brown",
    duration: "26m",
    title: "Transformers & Self-Attention Mechanism Intuitively",
    videoId: "eMlx5fFNoYc",
    altVideoId: "zjkBMFhNj_g",
    focus: "00:00 – 26:10",
    takeaways: [
      "Self-attention computes Query-Key dot products scaled by sqrt(d_k) and applies softmax to weight Value vectors dynamically.",
      "Multi-head attention allows the model to simultaneously track syntax, entity coreference, and semantic intent."
    ],
    lab: "Implement scaled dot-product attention softmax((Q @ K.T) / sqrt(d_k)) @ V in NumPy for a 3-token sequence.",
    hint: "Compute scores = (Q @ K.T) / np.sqrt(d_k), apply row-wise softmax, then multiply @ V.",
    starterPy: `import numpy as np\n\nrng = np.random.default_rng(42)\nQ = rng.normal(0, 1, (3, 4))\nK = rng.normal(0, 1, (3, 4))\nV = np.array([[1.0, 0.0], [0.0, 1.0], [0.5, 0.5]])\nscores = (Q @ K.T) / np.sqrt(4)\nweights = np.exp(scores) / np.exp(scores).sum(axis=-1, keepdims=True)\noutput = weights @ V\nprint("Attention Weights:\\n", np.round(weights, 3))\nprint("Attended Output:\\n", np.round(output, 3))`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 143,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "CampusX",
    duration: "24m",
    title: "Structured Prompt Engineering: Few-Shot, CoT & Delimiters",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "00:00 – 24:00",
    takeaways: [
      "Wrap untrusted user/document data in XML tags (<context>...</context>) to prevent prompt injection and boundary confusion.",
      "Providing 2–3 input/output few-shot examples stabilizes formatting far better than verbose prose rules."
    ],
    lab: "Build a dynamic few-shot SQL prompt builder that injects table schemas and 2 exemplars safely.",
    hint: "Use f-strings with explicit <schema>, <examples>, and <question> blocks.",
    starterPy: `def build_sql_prompt(schema, question):\n    return f"""You are a SQLite analyst. Output ONLY valid SQL.\n<schema>{schema}</schema>\n<examples>\nQ: Total revenue? -> SELECT SUM(amount) FROM orders;\nQ: Headcount by dept? -> SELECT department, COUNT(*) FROM employees GROUP BY department;\n</examples>\n<question>{question}</question>"""\n\nprint(build_sql_prompt("orders(order_id, region, amount)", "Revenue by region?"))`,
    starterSql: `SELECT region, SUM(amount) FROM orders GROUP BY region;`
  },
  {
    day: 144,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "CampusX",
    duration: "25m",
    title: "Gemini REST & SDK Integration (gemini-3.8-flash)",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "24:01 – 49:00",
    takeaways: [
      "Gemini generateContent accepts systemInstruction, contents array, and generationConfig (temperature, maxOutputTokens).",
      "Use temperature=0.0–0.2 for deterministic data extraction/SQL generation and 0.7 for brainstorming."
    ],
    lab: "Construct and validate a complete Gemini generateContent JSON request payload with systemInstruction and temperature=0.1.",
    hint: "Structure dict keys: systemInstruction, contents, and generationConfig.",
    starterPy: `import json\n\npayload = {\n    "systemInstruction": {"parts": [{"text": "You are a senior data analyst. Be concise."}]},\n    "contents": [{"role": "user", "parts": [{"text": "Explain p-value in 2 sentences."}]}],\n    "generationConfig": {"temperature": 0.1, "maxOutputTokens": 256}\n}\nprint(json.dumps(payload, indent=2))`,
    starterSql: `SELECT * FROM employees LIMIT 3;`
  },
  {
    day: 145,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "CampusX",
    duration: "22m",
    title: "Structured JSON Outputs & Pydantic Schema Validation",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "49:01 – 01:11:00",
    takeaways: [
      "Setting responseMimeType: 'application/json' with responseSchema guarantees parseable JSON every single call.",
      "Validating LLM outputs against strict field types prevents downstream pipeline crashes."
    ],
    lab: "Parse a raw JSON model response and validate required keys ['sentiment', 'confidence', 'topics'] and value bounds.",
    hint: "Use json.loads() and assert 0.0 <= data['confidence'] <= 1.0.",
    starterPy: `import json\n\nraw_llm_json = '{"sentiment": "positive", "confidence": 0.94, "topics": ["delivery", "packaging"]}'\ndata = json.loads(raw_llm_json)\nassert data["sentiment"] in {"positive", "neutral", "negative"}\nassert 0.0 <= data["confidence"] <= 1.0\nassert isinstance(data["topics"], list)\nprint("Validated Structured Output:", data)`,
    starterSql: `SELECT status, COUNT(*) FROM orders GROUP BY status;`
  },
  {
    day: 146,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "Andrej Karpathy",
    duration: "24m",
    title: "LLM Guardrails, Hallucination Mitigation & Grounding",
    videoId: "zjkBMFhNj_g",
    altVideoId: "2xxziIWmaSA",
    focus: "32:01 – 56:00",
    takeaways: [
      "Instructing the model to cite exact source IDs and answer 'INSUFFICIENT_CONTEXT' when facts are missing sharply reduces hallucinations.",
      "Always verify LLM-generated numbers using deterministic Python or SQL execution."
    ],
    lab: "Write a post-generation verifier that checks whether every numeric figure cited in an LLM summary actually exists in the source metrics dict.",
    hint: "Extract numbers with re.findall(r'\\d+(?:\\.\\d+)?', answer) and check membership in allowed_numbers.",
    starterPy: `import re\n\nsource_metrics = {"revenue": 485000, "orders": 142, "churn_pct": 4.2}\nllm_answer = "Total revenue reached 485000 across 142 orders with 4.2% churn."\nallowed = {str(v) for v in source_metrics.values()}\ncited = set(re.findall(r"\\d+(?:\\.\\d+)?", llm_answer))\nungrounded = cited - allowed\nprint("Cited Numbers:", cited, "| Ungrounded Hallucinations:", ungrounded)`,
    starterSql: `SELECT SUM(amount) AS revenue, COUNT(*) AS orders FROM orders;`
  },
  {
    day: 147,
    month: 6,
    week: 21,
    subject: "LLMs & Gemini API Engineering",
    instructor: "CampusX",
    duration: "20m",
    title: "Week 21 Practice: Automated Customer Review Triage Pipeline",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "01:11:01 – 01:31:00",
    takeaways: [
      "Batching unstructured text classification with structured schemas turns thousands of support tickets into SQL-queryable tables.",
      "Always log token usage and fallback retries in batch LLM jobs."
    ],
    lab: "Aggregate structured triage records into a Pandas summary showing issue category counts and average urgency.",
    hint: "Convert the list of parsed JSON dicts into pd.DataFrame and call .groupby('category').agg().",
    starterPy: `import pandas as pd\n\ntriaged = [\n    {"id": 1, "category": "Billing", "urgency": 4},\n    {"id": 2, "category": "Delivery", "urgency": 2},\n    {"id": 3, "category": "Billing", "urgency": 5},\n    {"id": 4, "category": "Bug", "urgency": 5}\n]\ndf = pd.DataFrame(triaged)\nprint(df.groupby("category", as_index=False).agg(tickets=("id", "count"), avg_urgency=("urgency", "mean")))`,
    starterSql: `SELECT category, COUNT(*) AS tickets FROM orders GROUP BY category;`
  },
  {
    day: 148,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "CampusX",
    duration: "25m",
    title: "Dense Text Embeddings & Cosine Similarity Search",
    videoId: "2xxziIWmaSA",
    altVideoId: "eMlx5fFNoYc",
    focus: "01:31:01 – 01:56:00",
    takeaways: [
      "Embeddings map text into dense vectors where semantic similarity corresponds to small angle (high cosine similarity).",
      "Cosine similarity = (A · B) / (||A|| * ||B||); for L2-normalized vectors, cosine similarity is simply A @ B."
    ],
    lab: "Implement vectorized cosine similarity in NumPy to rank 4 knowledge-base documents against a query vector.",
    hint: "Normalize rows with X / np.linalg.norm(X, axis=1, keepdims=True) and compute norm_docs @ norm_query.",
    starterPy: `import numpy as np\n\ndocs = [\n    "Reset password via SSO portal",\n    "SQL window functions PARTITION BY guide",\n    "PostgreSQL B-tree index tuning",\n    "Expense reimbursement policy PDF"\n]\n# Simulated 4D semantic embeddings\ndoc_vecs = np.array([[0.9, 0.1, 0.0, 0.1], [0.0, 0.9, 0.8, 0.0], [0.1, 0.85, 0.9, 0.0], [0.2, 0.0, 0.1, 0.95]])\nquery_vec = np.array([0.05, 0.92, 0.85, 0.0])  # Query about SQL indexing\n\ndoc_norm = doc_vecs / np.linalg.norm(doc_vecs, axis=1, keepdims=True)\nq_norm = query_vec / np.linalg.norm(query_vec)\nscores = doc_norm @ q_norm\nfor idx in np.argsort(scores)[::-1]:\n    print(f"Score {scores[idx]:.3f} -> {docs[idx]}")`,
    starterSql: `SELECT * FROM employees LIMIT 3;`
  },
  {
    day: 149,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "CampusX",
    duration: "24m",
    title: "Document Chunking Strategies: Fixed, Recursive & Overlap",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "01:56:01 – 02:20:00",
    takeaways: [
      "Chunks that are too small lose context; chunks that are too large dilute embedding focus and waste context tokens.",
      "Adding 15%–20% sliding overlap preserves sentences split across chunk boundaries."
    ],
    lab: "Write a sliding-window word chunker chunk_text(text, chunk_size=12, overlap=3) and inspect the overlapping chunks.",
    hint: "Step forward by (chunk_size - overlap) in range(0, len(words), step).",
    starterPy: `def chunk_text(text, chunk_size=10, overlap=3):\n    words = text.split()\n    step = chunk_size - overlap\n    return [" ".join(words[i:i + chunk_size]) for i in range(0, len(words), step)]\n\ndoc = "Retrieval Augmented Generation combines semantic vector search with large language models to ground answers in private company documents without retraining weights."\nfor i, c in enumerate(chunk_text(doc, 10, 3), 1):\n    print(f"Chunk {i}: {c}")`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 150,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "freeCodeCamp",
    duration: "26m",
    title: "Vector Indexes: Flat Exact Search vs HNSW Approximate Nearest Neighbors",
    videoId: "2xxziIWmaSA",
    altVideoId: "eMlx5fFNoYc",
    focus: "02:20:01 – 02:46:00",
    takeaways: [
      "Exact flat search (IndexFlatIP) guarantees 100% recall up to ~100k vectors; HNSW graphs scale to millions of vectors in milliseconds.",
      "Always store chunk metadata (source_file, page_num, section) alongside vectors for citation links."
    ],
    lab: "Build an in-memory VectorStore class supporting .add(doc_id, text, vec) and .search(query_vec, top_k=2).",
    hint: "Compute cosine similarity against all stored vectors and return top_k sorted tuples.",
    starterPy: `import numpy as np\n\nclass MiniVectorStore:\n    def __init__(self):\n        self.items = []\n\n    def add(self, doc_id, text, vec):\n        v = np.asarray(vec, dtype=float)\n        self.items.append((doc_id, text, v / np.linalg.norm(v)))\n\n    def search(self, q_vec, top_k=2):\n        q = np.asarray(q_vec, dtype=float)\n        q /= np.linalg.norm(q)\n        scored = [(float(q @ v), doc_id, text) for doc_id, text, v in self.items]\n        return sorted(scored, reverse=True)[:top_k]\n\nvs = MiniVectorStore()\nvs.add("POL-1", "Remote work allowed 2 days/week", [0.9, 0.1, 0.0])\nvs.add("POL-2", "Annual leave balance is 24 days", [0.1, 0.9, 0.1])\nvs.add("POL-3", "Cloud GPU budget requires VP signoff", [0.0, 0.1, 0.95])\nprint("Top Matches:", vs.search([0.85, 0.2, 0.0], top_k=2))`,
    starterSql: `SELECT * FROM employees LIMIT 3;`
  },
  {
    day: 151,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "CampusX",
    duration: "28m",
    title: "End-to-End Retrieval-Augmented Generation (RAG) Pipeline",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "02:46:01 – 03:14:00",
    takeaways: [
      "RAG follows Retrieve (top-k chunks) -> Augment (inject chunks + citations into prompt) -> Generate (grounded answer).",
      "Returning source citations alongside every answer builds user trust and makes errors auditable."
    ],
    lab: "Assemble a complete retrieve-and-augment prompt generator that formats top-k retrieved chunks with [Source ID] citations.",
    hint: "Join retrieved chunks as '[ID] text' inside a <retrieved_context> block.",
    starterPy: `retrieved = [\n    ("HR-04", "Medical insurance covers spouse and up to 2 dependent children up to INR 5 Lakhs."),\n    ("HR-09", "Dental and vision claims require itemized GST receipts within 30 days.")\n]\nquestion = "What is the family medical coverage limit?"\ncontext_block = "\\n".join(f"[{cid}] {txt}" for cid, txt in retrieved)\naugmented_prompt = f"Answer using ONLY the context below and cite [ID].\\n<context>\\n{context_block}\\n</context>\\nQuestion: {question}"\nprint(augmented_prompt)`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 152,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "CampusX",
    duration: "22m",
    title: "Hybrid Search: Combining BM25 Keyword + Dense Semantic Scores",
    videoId: "2xxziIWmaSA",
    altVideoId: "eMlx5fFNoYc",
    focus: "03:14:01 – 03:36:00",
    takeaways: [
      "Pure dense vectors sometimes miss exact SKU codes, error IDs, or acronyms; keyword overlap catches exact lexical matches.",
      "Reciprocal Rank Fusion (RRF: 1 / (k + rank)) blends keyword rankings and semantic rankings without score normalization headaches."
    ],
    lab: "Combine semantic rank list and keyword rank list using Reciprocal Rank Fusion (k=60) to find the top consensus document.",
    hint: "For each list, add 1 / (60 + rank_1_based) to scores[doc_id].",
    starterPy: `semantic_rank = ["DocB", "DocA", "DocC", "DocD"]\nkeyword_rank  = ["DocC", "DocA", "DocB", "DocD"]\n\nrrf = {}\nfor ranking in [semantic_rank, keyword_rank]:\n    for rank, doc in enumerate(ranking, start=1):\n        rrf[doc] = rrf.get(doc, 0.0) + 1.0 / (60 + rank)\n\nfor doc, score in sorted(rrf.items(), key=lambda x: x[1], reverse=True):\n    print(f"{doc}: RRF = {score:.5f}")`,
    starterSql: `SELECT * FROM orders LIMIT 4;`
  },
  {
    day: 153,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "CampusX",
    duration: "20m",
    title: "Evaluating RAG: Retrieval Recall@K & Answer Faithfulness",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "03:36:01 – 03:56:00",
    takeaways: [
      "Debug RAG in two separate stages: Retrieval quality (Recall@K, MRR) and Generation quality (Faithfulness & Answer Relevance).",
      "Mean Reciprocal Rank (MRR) rewards placing the gold-standard chunk at rank #1 rather than rank #5."
    ],
    lab: "Compute Recall@3 and Mean Reciprocal Rank (MRR) across 4 evaluation queries.",
    hint: "If gold_id is in retrieved[:3], recall += 1 and rr += 1 / (retrieved.index(gold_id) + 1).",
    starterPy: `eval_cases = [\n    {"gold": "D2", "retrieved": ["D2", "D1", "D4"]},\n    {"gold": "D5", "retrieved": ["D1", "D5", "D3"]},\n    {"gold": "D3", "retrieved": ["D1", "D2", "D4"]},\n    {"gold": "D1", "retrieved": ["D1", "D3", "D2"]}\n]\nhits = sum(1 for c in eval_cases if c["gold"] in c["retrieved"][:3])\nmrr = sum(1 / (c["retrieved"].index(c["gold"]) + 1) for c in eval_cases if c["gold"] in c["retrieved"][:3]) / len(eval_cases)\nprint(f"Recall@3: {hits/len(eval_cases):.2%} | MRR@3: {mrr:.3f}")`,
    starterSql: `SELECT COUNT(*) FROM employees;`
  },
  {
    day: 154,
    month: 6,
    week: 22,
    subject: "Embeddings, Vector Search & RAG",
    instructor: "CampusX",
    duration: "25m",
    title: "Week 22 Practice: Local Policy Q&A Mini-RAG Engine",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "02:46:01 – 03:14:00",
    takeaways: [
      "TF-IDF or dense embeddings paired with cosine similarity can run 100% client-side in Python for lightweight knowledge bases.",
      "Clean metadata filtering (e.g., filtering by department before vector search) boosts precision."
    ],
    lab: "Use TfidfVectorizer + cosine_similarity from Scikit-Learn to retrieve the most relevant policy chunk for a user question.",
    hint: "from sklearn.feature_extraction.text import TfidfVectorizer; from sklearn.metrics.pairwise import cosine_similarity.",
    starterPy: `from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nchunks = [\n    "SQLite window functions use OVER PARTITION BY without collapsing rows.",\n    "Ridge regression applies L2 regularization penalty proportional to squared weights.",\n    "Streamlit caches expensive data loads using the @st.cache_data decorator."\n]\nvec = TfidfVectorizer()\nX = vec.fit_transform(chunks)\nq = vec.transform(["How do I cache data in Streamlit?"])\nsims = cosine_similarity(q, X).ravel()\nbest = sims.argmax()\nprint(f"Best Match (sim={sims[best]:.3f}): {chunks[best]}")`,
    starterSql: `SELECT * FROM orders LIMIT 3;`
  },
  {
    day: 155,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "CampusX",
    duration: "24m",
    title: "Function Calling & JSON Tool Schemas",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "03:56:01 – 04:20:00",
    takeaways: [
      "LLMs don't execute code directly—they emit structured tool_call JSON objects naming a function and arguments.",
      "Clear parameter descriptions and enum constraints prevent invalid tool invocations."
    ],
    lab: "Build a tool dispatcher registry in Python that maps LLM tool-call JSON payloads to real Python analytics functions.",
    hint: "Store functions in a TOOLS = {'get_revenue': get_revenue} dictionary and invoke TOOLS[call['name']](**call['args']).",
    starterPy: `def get_region_revenue(region):\n    data = {"West": 185000, "South": 142000, "North": 164000}\n    return {"region": region, "revenue_inr": data.get(region, 0)}\n\nTOOLS = {"get_region_revenue": get_region_revenue}\nllm_tool_call = {"name": "get_region_revenue", "args": {"region": "West"}}\nresult = TOOLS[llm_tool_call["name"]](**llm_tool_call["args"])\nprint("Tool Execution Result:", result)`,
    starterSql: `SELECT region, SUM(amount) AS revenue FROM orders GROUP BY region;`
  },
  {
    day: 156,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "Andrej Karpathy",
    duration: "25m",
    title: "ReAct Agent Loop: Thought -> Action -> Observation",
    videoId: "zjkBMFhNj_g",
    altVideoId: "2xxziIWmaSA",
    focus: "56:01 – 01:15:00",
    takeaways: [
      "ReAct agents alternate reasoning traces, tool executions, and observation ingestion until reaching a final answer.",
      "Always enforce a strict max_steps cap (e.g., 5 iterations) to prevent infinite agent loops and runaway API spend."
    ],
    lab: "Simulate a bounded 3-step ReAct agent loop that queries revenue, computes 18% GST via a calculator tool, and stops cleanly.",
    hint: "Loop up to max_steps=5 and break as soon as action == 'finish'.",
    starterPy: `tools = {\n    "fetch_sales": lambda: 250000,\n    "calc_gst": lambda amt: round(amt * 0.18, 2)\n}\nplan = [\n    ("fetch_sales", {}),\n    ("calc_gst", {"amt": 250000}),\n    ("finish", {"answer": "Sales = INR 250,000; 18% GST = INR 45,000"})\n]\nfor step, (action, args) in enumerate(plan, 1):\n    if action == "finish":\n        print(f"Step {step} [FINAL]: {args['answer']}")\n        break\n    obs = tools[action](**args)\n    print(f"Step {step} [{action}] -> Observation: {obs}")`,
    starterSql: `SELECT SUM(amount) AS total_sales FROM orders;`
  },
  {
    day: 157,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "CampusX",
    duration: "26m",
    title: "Text-to-SQL Data Analyst Agent with Read-Only Guardrails",
    videoId: "2xxziIWmaSA",
    altVideoId: "7mz73uXD9DA",
    focus: "04:20:01 – 04:46:00",
    takeaways: [
      "Never execute LLM-generated SQL without validating that it starts with SELECT/WITH and blocks DROP, DELETE, UPDATE, or PRAGMA.",
      "Feeding SQLite syntax errors back to the LLM lets it self-correct column names in 1 retry."
    ],
    lab: "Write a SQL safety validator is_safe_readonly_sql(sql) and test it against both a valid SELECT and a malicious DROP TABLE query.",
    hint: "Check uppercased stripped SQL starts with ('SELECT', 'WITH') and contains no forbidden DDL/DML keywords.",
    starterPy: `import re\n\ndef is_safe_readonly_sql(sql):\n    cleaned = sql.strip().upper()\n    if not cleaned.startswith(("SELECT", "WITH")):\n        return False\n    forbidden = r"\\b(DROP|DELETE|UPDATE|INSERT|ALTER|TRUNCATE|ATTACH|PRAGMA)\\b"\n    return re.search(forbidden, cleaned) is None\n\nfor q in ["SELECT region, SUM(amount) FROM orders GROUP BY region;", "SELECT * FROM orders; DROP TABLE orders;"]:\n    print(f"Safe={is_safe_readonly_sql(q)} | {q}")`,
    starterSql: `SELECT region, SUM(amount) FROM orders GROUP BY region;`
  },
  {
    day: 158,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "CampusX",
    duration: "20m",
    title: "Multi-Turn Conversation Memory & Sliding Context Compression",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "04:46:01 – 05:06:00",
    takeaways: [
      "Passing full unbounded chat history inflates latency and token cost quadratically over long sessions.",
      "Keep a rolling window of the last N turns plus a compact running summary of earlier decisions."
    ],
    lab: "Implement a ConversationBuffer class that caps message history at max_turns=4 while preserving the system prompt.",
    hint: "Slice self.messages[-max_turns:] whenever new turns are appended.",
    starterPy: `class ConversationBuffer:\n    def __init__(self, system_prompt, max_turns=4):\n        self.system = {"role": "system", "content": system_prompt}\n        self.max_turns = max_turns\n        self.history = []\n\n    def add(self, role, content):\n        self.history.append({"role": role, "content": content})\n        self.history = self.history[-self.max_turns:]\n\n    def payload(self):\n        return [self.system] + self.history\n\nbuf = ConversationBuffer("You are Instinct Mentor.", max_turns=3)\nfor i in range(5):\n    buf.add("user", f"Question {i+1}")\nprint("Active Context Window:", [m["content"] for m in buf.payload()])`,
    starterSql: `SELECT * FROM employees LIMIT 3;`
  },
  {
    day: 159,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "CampusX",
    duration: "22m",
    title: "Multi-Agent Router Pattern: SQL Agent vs RAG Docs Agent",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "05:06:01 – 05:28:00",
    takeaways: [
      "A lightweight intent router directs structured metric questions to a SQL/Pandas tool and policy/how-to questions to a RAG retriever.",
      "Specialized narrow agents outperform one bloated monolithic prompt."
    ],
    lab: "Build an intent router that classifies user queries into 'SQL_ANALYTICS', 'DOC_RAG', or 'PYTHON_ML'.",
    hint: "Match domain keywords and route cleanly to the specialized handler.",
    starterPy: `def route_query(query):\n    q = query.lower()\n    if any(k in q for k in ["revenue", "sales", "count", "average", "table", "sql"]):\n        return "SQL_ANALYTICS_AGENT"\n    if any(k in q for k in ["policy", "guideline", "document", "handbook"]):\n        return "DOC_RAG_AGENT"\n    return "GENERAL_MENTOR_AGENT"\n\nfor q in ["What is total revenue by region?", "Check leave policy handbook", "Explain gradient descent"]:\n    print(f"{q:36s} -> {route_query(q)}")`,
    starterSql: `SELECT region, SUM(amount) FROM orders GROUP BY region;`
  },
  {
    day: 160,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "freeCodeCamp",
    duration: "20m",
    title: "Semantic Caching, Rate-Limit Backoff & Cost Telemetry",
    videoId: "2xxziIWmaSA",
    altVideoId: "zjkBMFhNj_g",
    focus: "05:28:01 – 05:48:00",
    takeaways: [
      "Caching repeated identical or near-identical prompts cuts API spend and drops response latency to <5ms.",
      "Exponential backoff (1s, 2s, 4s + jitter) gracefully recovers from HTTP 429 rate-limit spikes."
    ],
    lab: "Implement a normalized prompt cache decorator in Python and verify cache hits vs misses.",
    hint: "Normalize prompt keys with prompt.strip().lower() inside a dict cache.",
    starterPy: `cache = {}\n\ndef ask_cached(prompt):\n    key = " ".join(prompt.strip().lower().split())\n    if key in cache:\n        return f"[CACHE HIT] {cache[key]}"\n    response = f"Analyzed: {prompt.strip()}"\n    cache[key] = response\n    return f"[API CALL]  {response}"\n\nprint(ask_cached("  Explain ROC-AUC  "))\nprint(ask_cached("explain roc-auc"))`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 161,
    month: 6,
    week: 23,
    subject: "Tool-Calling Agents & Workflows",
    instructor: "CampusX",
    duration: "25m",
    title: "Week 23 Practice: Autonomous DataFrame Audit Agent",
    videoId: "2xxziIWmaSA",
    altVideoId: "1m3CPP-93BY",
    focus: "04:20:01 – 04:46:00",
    takeaways: [
      "Giving an agent deterministic profiling tools (shape, nulls, outliers, correlation) prevents hallucinated data insights.",
      "Structured audit reports combine automated checks with natural-language executive takeaways."
    ],
    lab: "Build an automated DataFrame profiler tool returning row_count, missing_cols, and high_skew_cols as a clean JSON report.",
    hint: "Inspect df.isna().sum() and df.select_dtypes('number').skew().",
    starterPy: `import pandas as pd, numpy as np, json\n\ndef profile_df(df):\n    missing = {k: int(v) for k, v in df.isna().sum().items() if v > 0}\n    skewed = {k: round(float(v), 2) for k, v in df.select_dtypes("number").skew().items() if abs(v) > 1.0}\n    return {"rows": len(df), "cols": df.shape[1], "missing_cols": missing, "skewed_cols": skewed}\n\ndf = pd.DataFrame({"id": [1, 2, 3, 4, 5], "spend": [100, 120, 110, 130, 9500], "city": ["Mumbai", None, "Pune", "Pune", "Mumbai"]})\nprint(json.dumps(profile_df(df), indent=2))`,
    starterSql: `SELECT * FROM orders LIMIT 5;`
  },
  {
    day: 162,
    month: 6,
    week: 24,
    subject: "Streamlit Apps & Career Portfolio",
    instructor: "freeCodeCamp",
    duration: "30m",
    title: "Streamlit Architecture, Widgets & @st.cache_data",
    videoId: "JwSS70SZdyM",
    altVideoId: "r-uOLxNrNk8",
    focus: "00:00 – 30:00",
    takeaways: [
      "Streamlit reruns the Python script top-to-bottom on every widget interaction—decorate data loaders with @st.cache_data and ML models with @st.cache_resource.",
      "st.session_state persists user chat history, filters, and uploaded datasets across reruns."
    ],
    lab: "Write a clean, modular Streamlit app script structure separating cached data loading, sidebar filters, and KPI metric cards.",
    hint: "Structure pure functions so business logic can be unit-tested independently of Streamlit UI calls.",
    starterPy: `# Clean modular pattern for Streamlit apps (app.py)\ndef filter_sales(records, region):\n    if region == "All":\n        return records\n    return [r for r in records if r["region"] == region]\n\nsample = [{"region": "West", "rev": 120}, {"region": "South", "rev": 95}, {"region": "West", "rev": 150}]\nfiltered = filter_sales(sample, "West")\nprint("Filtered KPI -> Orders:", len(filtered), "| Total Revenue:", sum(r["rev"] for r in filtered))`,
    starterSql: `SELECT region, COUNT(*) AS orders, SUM(amount) AS revenue FROM orders GROUP BY region;`
  },
  {
    day: 163,
    month: 6,
    week: 24,
    subject: "Streamlit Apps & Career Portfolio",
    instructor: "freeCodeCamp",
    duration: "28m",
    title: "Interactive Dashboarding & File Uploaders in Streamlit",
    videoId: "JwSS70SZdyM",
    altVideoId: "r-uOLxNrNk8",
    focus: "30:01 – 58:00",
    takeaways: [
      "st.file_uploader(['csv', 'xlsx']) paired with st.download_button lets non-technical stakeholders self-serve analytics.",
      "Always validate uploaded column schemas with clear st.error() messages before running ML predictions."
    ],
    lab: "Write a schema validator validate_uploaded_csv(df, required_cols) that returns missing columns cleanly.",
    hint: "missing = set(required_cols) - set(df.columns).",
    starterPy: `import pandas as pd\n\ndef validate_schema(df, required_cols):\n    missing = sorted(set(required_cols) - set(df.columns))\n    return len(missing) == 0, missing\n\nuploaded = pd.DataFrame({"customer_id": [1, 2], "tenure": [12, 24]})\nok, missing = validate_schema(uploaded, ["customer_id", "tenure", "monthly_bill"])\nprint(f"Schema Valid: {ok} | Missing Columns: {missing}")`,
    starterSql: `SELECT * FROM employees LIMIT 3;`
  },
  {
    day: 164,
    month: 6,
    week: 24,
    subject: "Streamlit Apps & Career Portfolio",
    instructor: "freeCodeCamp",
    duration: "25m",
    title: "Deploying Live Apps to Streamlit Community Cloud & GitHub Pages",
    videoId: "JwSS70SZdyM",
    altVideoId: "RGOj5yH7evk",
    focus: "01:30:00 – 01:55:00",
    takeaways: [
      "Pin exact package versions in requirements.txt and store API keys in st.secrets (never hardcoded in GitHub).",
      "Linking live interactive demos (Streamlit Cloud + GitHub Pages) at the top of your README triples recruiter engagement."
    ],
    lab: "Generate a clean production requirements.txt manifest from imported libraries and verify no forbidden local paths exist.",
    hint: "Format pinned dependencies cleanly line by line.",
    starterPy: `deps = [\n    "streamlit>=1.38.0",\n    "pandas>=2.2.0",\n    "numpy>=1.26.0",\n    "scikit-learn>=1.5.0",\n    "google-genai>=0.5.0"\n]\nprint("\\n".join(deps))`,
    starterSql: `SELECT COUNT(*) FROM orders;`
  },
  {
    day: 165,
    month: 6,
    week: 24,
    subject: "Streamlit Apps & Career Portfolio",
    instructor: "freeCodeCamp",
    duration: "22m",
    title: "Crafting Recruiter-Ready GitHub READMEs & System Diagrams",
    videoId: "r-uOLxNrNk8",
    altVideoId: "RGOj5yH7evk",
    focus: "00:00 – 22:00",
    takeaways: [
      "Structure every portfolio README around: Business Problem -> Architecture Diagram -> Key Metrics/Lift -> Live Demo Link -> Local Setup.",
      "Include an ASCII or Mermaid architecture diagram so hiring managers grasp your pipeline in 10 seconds."
    ],
    lab: "Generate a structured GitHub project README template populated with your churn ML & RAG project metrics.",
    hint: "Include Problem, Dataset, Model Benchmark table, and Live App URL.",
    starterPy: `project = {\n    "name": "ChurnGuard AI — Customer Retention & RAG Copilot",\n    "roc_auc": 0.884,\n    "annual_savings": "INR 18.5 Lakhs",\n    "repo": "github.com/reaper7738"\n}\nreadme = f"""# {project['name']}\n- **Impact:** Projected **{project['annual_savings']}** annual retention savings\n- **Model Performance:** **ROC-AUC {project['roc_auc']}** (Gradient Boosting + Cost-Optimized Threshold)\n- **Stack:** Python, SQLite, Scikit-Learn, Gemini API, Streamlit\n"""\nprint(readme)`,
    starterSql: `SELECT * FROM employees LIMIT 3;`
  },
  {
    day: 166,
    month: 6,
    week: 24,
    subject: "Streamlit Apps & Career Portfolio",
    instructor: "Luke Barousse",
    duration: "24m",
    title: "Quantifying Resume Bullets (XYZ Formula) & Transition Positioning",
    videoId: "7mz73uXD9DA",
    altVideoId: "r-uOLxNrNk8",
    focus: "00:00 – 15:00",
    takeaways: [
      "Use Google's XYZ formula: 'Accomplished [X business metric] as measured by [Y quantitative result], by doing [Z technical implementation].'",
      "Bridge domain operations experience (Excel/VBA, reporting, process automation) directly into SQL, Python, and ML impact."
    ],
    lab: "Transform weak task-based resume lines into quantified XYZ impact bullets using Python string formatting.",
    hint: "Highlight metric lift, dataset scale, and exact tools used.",
    starterPy: `achievements = [\n    ("Built a churn ML pipeline", "0.88 ROC-AUC & 19% simulated churn reduction", "Scikit-Learn ColumnTransformer & Gradient Boosting"),\n    ("Automated monthly GST & sales reporting", "cut manual reconciliation time by 75%", "Python, Pandas & parameterized SQL views"),\n    ("Deployed an interactive AI learning OS", "168-day Python/SQL/ML curriculum with live code execution", "Pyodide, sql.js, Gemini API & GitHub Pages")\n]\nfor action, metric, tech in achievements:\n    print(f"• {action}, achieving {metric} using {tech}.")`,
    starterSql: `SELECT department, COUNT(*) AS staff FROM employees GROUP BY department;`
  },
  {
    day: 167,
    month: 6,
    week: 24,
    subject: "Streamlit Apps & Career Portfolio",
    instructor: "Alex The Analyst",
    duration: "25m",
    title: "Data Analyst & Junior Data Scientist Technical Interview Drill",
    videoId: "K1WeoCJUXYI",
    altVideoId: "4jRBRDbJemM",
    focus: "00:00 – 11:45",
    takeaways: [
      "Expect live coding on: SQL window rankings/cohorts, Pandas groupby/merge cleaning, precision vs recall tradeoffs, and A/B test p-values.",
      "Always clarify grain, NULL behavior, and business metric definitions before writing code in interviews."
    ],
    lab: "Solve a classic interview double-header: find the 2nd highest salary per department in SQL and verify in Python.",
    hint: "Use DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) = 2.",
    starterPy: `import pandas as pd\n\ndf = pd.DataFrame({\n    "name": ["Aarav", "Diya", "Kabir", "Meera", "Rohan"],\n    "dept": ["Data", "Data", "Data", "Sales", "Sales"],\n    "salary": [110000, 95000, 82000, 90000, 78000]\n})\ndf["rnk"] = df.groupby("dept")["salary"].rank(method="dense", ascending=False)\nprint("2nd Highest Salary per Dept:\\n", df[df["rnk"] == 2][["name", "dept", "salary"]])`,
    starterSql: `WITH ranked AS (\n  SELECT name, department, salary,\n    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk\n  FROM employees\n)\nSELECT name, department, salary FROM ranked WHERE rnk = 2;`
  },
  {
    day: 168,
    month: 6,
    week: 24,
    subject: "Final Graduation Capstone",
    instructor: "CampusX",
    duration: "40m",
    title: "Day 168 Final Capstone: Full-Stack AI & Analytics Portfolio Showcase",
    videoId: "JwSS70SZdyM",
    altVideoId: "1m3CPP-93BY",
    focus: "00:00 – 40:00",
    takeaways: [
      "You now command the complete Data Science stack: Python & Git, Analytical SQL, NumPy/Pandas, Statistical A/B Testing, Scikit-Learn Pipelines, and Gemini RAG/Agents.",
      "Export your 168-day Markdown Portfolio from DataForge and publish your capstone repositories on GitHub."
    ],
    lab: "Run the final end-to-end verification combining Pandas cohort aggregation, Scikit-Learn churn probability scoring, and executive KPI summary generation!",
    hint: "Click Run (Ctrl+Enter) and then hit Verify & Complete to finish all 168 days of DataForge!",
    starterPy: `import pandas as pd, numpy as np\nfrom sklearn.linear_model import LogisticRegression\n\n# 1. Historical cohort data\ndf = pd.DataFrame({\n    "customer": ["C01", "C02", "C03", "C04", "C05", "C06"],\n    "orders": [12, 2, 9, 1, 15, 3],\n    "spend": [48000, 4500, 36000, 2200, 62000, 7800],\n    "churned": [0, 1, 0, 1, 0, 1]\n})\n\n# 2. Train churn risk scorer\nclf = LogisticRegression().fit(df[["orders", "spend"]], df["churned"])\ndf["churn_risk"] = clf.predict_proba(df[["orders", "spend"]])[:, 1].round(3)\n\n# 3. Executive summary\nat_risk_rev = df[df["churn_risk"] > 0.5]["spend"].sum()\nprint(df[["customer", "orders", "spend", "churn_risk"]])\nprint(f"\\n[DATAFORGE 168-DAY CAPSTONE COMPLETE] Total Portfolio Revenue: INR {df['spend'].sum():,} | At-Risk Revenue Flagged: INR {at_risk_rev:,}")`,
    starterSql: `SELECT e.department,\n  COUNT(DISTINCT e.emp_id) AS team_size,\n  COUNT(o.order_id) AS completed_orders,\n  COALESCE(SUM(o.amount), 0) AS total_revenue\nFROM employees e\nLEFT JOIN orders o ON e.emp_id = o.emp_id AND o.status = 'Completed'\nGROUP BY e.department\nORDER BY total_revenue DESC;`
  }
];