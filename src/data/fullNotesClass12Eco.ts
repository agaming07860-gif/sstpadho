import { ChapterEnrichment } from './fullNotesClass10';

export const FULL_NOTES_CLASS_12_ECO: Record<string, ChapterEnrichment> = {
  "c12-eco-ch1": {
    "shortNotes": [
      {
        "title": "Circular Flow of Income and Basic Macroeconomic Concepts",
        "bullets": [
          "Macroeconomics examines the economy as an aggregate whole, focusing on total national income, overall employment, price levels, and balance of payments.",
          "Circular Flow of Income (Two-Sector Model): Households provide factor services (land, labour, capital, enterprise) to firms; firms pay factor payments (rent, wages, interest, profit); households spend this income on goods and services produced by firms (consumption expenditure); firms supply consumer goods and services back to households.",
          "Stock vs. Flow: A Stock variable is measured at a particular point in time (e.g., total capital stock, national wealth, bank balance on March 31); A Flow variable is measured over a specified period of time (e.g., national income, monthly salary, investment, GDP per annum).",
          "Intermediate vs. Final Goods: Final goods are meant for final consumption or investment and do not undergo further processing (cross the production boundary); Intermediate goods are used as raw materials in production or meant for resale within the same year."
        ]
      },
      {
        "title": "National Income Aggregates and Valuation Rules",
        "bullets": [
          "Conversion Rules: (1) Gross to Net: Net = Gross - Depreciation (Consumption of Fixed Capital); (2) Domestic to National: National = Domestic + NFIA (Net Factor Income from Abroad); (3) Market Price (MP) to Factor Cost (FC): Factor Cost = Market Price - Net Indirect Taxes (NIT = Indirect Taxes - Subsidies).",
          "Eight Core Aggregates: GDP_mp, GDP_fc, NDP_mp, NDP_fc, GNP_mp, GNP_fc, NNP_mp, NNP_fc (NNP_fc is officially known as National Income).",
          "Domestic Income (NDP_fc): Total factor income generated within the political domestic territory of a nation during an accounting year, irrespective of whether produced by residents or non-residents.",
          "National Income (NNP_fc): Total net factor income earned by normal residents of a country, irrespective of whether produced within the domestic territory or abroad."
        ]
      },
      {
        "title": "Three Methods of Measuring National Income and GDP Limitations",
        "bullets": [
          "Value Added Method (Product Method): Gross Value Added at Market Price (GVA_mp) = Value of Output - Intermediate Consumption; Value of Output = Sales + Change in Stock (Closing Stock - Opening Stock); Avoids double counting by counting only the incremental value added at each production stage.",
          "Income Method: National Income = Compensation of Employees (wages, salaries, employer contribution to social security) + Operating Surplus (rent, royalty, interest, profit [dividends, corporate tax, undistributed profits]) + Mixed Income of Self-Employed + NFIA.",
          "Expenditure Method: GDP_mp = Private Final Consumption Expenditure (C) + Government Final Consumption Expenditure (G) + Gross Domestic Capital Formation / Investment (I = Gross Fixed Capital Formation + Change in Stock) + Net Exports (X - M).",
          "Real GDP vs Nominal GDP: Nominal GDP is evaluated at current year market prices (distorted by inflation); Real GDP is evaluated at constant base year prices (reflects physical output growth); GDP Deflator = (Nominal GDP / Real GDP) * 100.",
          "GDP and Welfare Limitations: GDP does not measure income distribution, non-monetary exchanges (household chores, barter), or positive/negative externalities (pollution, environmental degradation)."
        ]
      }
    ],
    "detailedSections": [
      {
        "heading": "1. The Micro-Foundations and Architecture of the Circular Flow of Income",
        "content": "In any economy, production generates income, and income fuels expenditure, which subsequently drives further production in an unbroken continuous circular loop. In the basic two-sector economy consisting solely of Households and Firms, two distinct streams coexist: the 'Real Flow' and the 'Money Flow'. The real flow encompasses the physical transfer of factor inputs (human labour, natural land, machinery capital, entrepreneurial organisation) from households into firms, and the counter-flow of physical finished goods and services from firms back into households. The monetary flow mirrors this: firms disburse monetary factor payments (wages, rents, interest, and profits) to households, and households disburse consumer expenditure back to firms. In an expanded open economy with Government and Foreign sectors, 'Leakages' (withdrawals from circular flow: savings, taxes, imports) must balance 'Injections' (additions to circular flow: investment, government spending, exports) to maintain macroeconomic equilibrium.",
        "keyTakeaway": "Production, income generation, and expenditure are three equivalent phases of the circular economic cycle."
      },
      {
        "heading": "2. The Three Measurement Methodologies and the Avoidance of Double Counting",
        "content": "National income can be estimated through three mathematically convergent methods: (1) Value Added Method: Sums the net value contributed by each producing enterprise. If a farmer sells wheat to a flour mill for Rs 500, the mill converts it into flour selling to a bakery for Rs 800, and the bakery sells bread to consumers for Rs 1200, counting 500 + 800 + 1200 = 2500 would commit the fatal error of 'Double Counting'. The Value Added method counts only the newly added value: 500 (farmer) + 300 (mill) + 400 (baker) = Rs 1200, exactly matching final consumption. (2) Income Method: Aggregates factor incomes earned by normal residents: Compensation of Employees + Operating Surplus (Rent + Royalty + Interest + Profit) + Mixed Income of Self-Employed. Transfer payments (like old-age pensions, lottery winnings, or pocket money) are strictly excluded because they represent no productive output. (3) Expenditure Method: Aggregates final spending on domestic goods: C (Household consumption) + G (Government consumption) + I (Capital formation/investment) + (X - M) (Net exports).",
        "keyTakeaway": "All three methods measure the same national income aggregate when intermediate consumption and transfer payments are properly isolated."
      },
      {
        "heading": "3. Real GDP, Nominal GDP, and the Critical Gap Between GDP and Human Welfare",
        "content": "A high GDP is often equated with societal prosperity, but economists caution that GDP is an incomplete indicator of human welfare. First, Nominal GDP can rise merely because of rising commodity prices (inflation), without any expansion in actual goods and services produced. Hence, economists compute Real GDP using constant base year prices, utilizing the GDP Deflator (Nominal GDP / Real GDP * 100) to isolate pure physical growth. Second, GDP ignores the Distribution of Income: an economy may have high GDP growth while wealth concentrates in the top 1% and the majority languishes in poverty. Third, Non-Monetary Exchanges (such as domestic childcare, farming for self-consumption, and volunteer labor) are excluded due to lack of market valuation. Fourth, Externalities: industrial production generates negative externalities (air and water pollution, deforestation, hazardous waste) that diminish quality of life, yet remediation costs may even perversely boost GDP figures.",
        "keyTakeaway": "GDP is a measure of aggregate market production, not a comprehensive index of ecological or socio-economic human welfare."
      }
    ],
    "keyConcepts": [
      {
        "term": "Gross Domestic Product (GDP)",
        "explanation": "The total monetary market value of all final goods and services produced within the domestic territory of a country during a financial year."
      },
      {
        "term": "National Income (NNP_fc)",
        "explanation": "Net National Product at factor cost; the total factor income earned by normal residents of a nation within or outside domestic boundaries."
      },
      {
        "term": "Net Factor Income from Abroad (NFIA)",
        "explanation": "The difference between factor income earned by domestic residents abroad and factor income earned by non-residents within the domestic territory."
      },
      {
        "term": "Operating Surplus",
        "explanation": "The sum of factor incomes earned from ownership of property and enterprise: rent, royalty, interest, and corporate profits."
      },
      {
        "term": "Intermediate Consumption",
        "explanation": "Expenditure incurred by an enterprise on purchasing non-factor raw materials, fuel, and intermediate inputs used up in the production process."
      },
      {
        "term": "GDP Deflator",
        "explanation": "The price index calculated as (Nominal GDP / Real GDP) * 100, measuring the average price changes across all goods and services produced domestically."
      }
    ],
    "importantDates": [
      {
        "date": "1934",
        "event": "Simon Kuznets develops modern GDP metrics",
        "significance": "Presented the first comprehensive national income accounts to the US Congress."
      },
      {
        "date": "1949",
        "event": "National Income Committee appointed in India",
        "significance": "Chaired by Prof. P.C. Mahalanobis with D.R. Gadgil and V.K.R.V. Rao, laying the foundation of Central Statistics Office (CSO)."
      },
      {
        "date": "1954",
        "event": "Establishment of the Central Statistics Office (CSO)",
        "significance": "Official Indian agency tasked with compiling and releasing annual National Accounts Statistics."
      },
      {
        "date": "2015",
        "event": "Revision of Base Year and GDP Methodology in India",
        "significance": "Central Statistical Office shifted base year from 2004-05 to 2011-12 and adopted headline GDP at market prices."
      }
    ],
    "importantPeople": [
      {
        "name": "Simon Kuznets",
        "role": "American Nobel Laureate Economist",
        "contribution": "Pioneered the empirical framework of national income accounting and Gross National Product (GNP)."
      },
      {
        "name": "Prof. P.C. Mahalanobis",
        "role": "Father of Indian Statistics",
        "contribution": "Headed India's National Income Committee and established the National Sample Survey Organisation (NSSO)."
      },
      {
        "name": "Dr. V.K.R.V. Rao",
        "role": "Indian Pioneer of National Income Accounting",
        "contribution": "Conducted the first systematic academic estimates of India's national income in the 1930s combining census and survey data."
      },
      {
        "name": "John Maynard Keynes",
        "role": "British Macroeconomist",
        "contribution": "Established the theoretical framework for aggregate national demand, expenditure, and macroeconomic modeling."
      }
    ],
    "definitions": [
      {
        "term": "Depreciation (Consumption of Fixed Capital)",
        "definition": "The loss of monetary value of fixed capital assets over time due to regular wear and tear, passage of time, and foreseeable obsolescence.",
        "context": "Gross versus Net conversion rule"
      },
      {
        "term": "Double Counting",
        "definition": "The erroneous practice of counting the value of a commodity more than once at multiple stages of production, leading to gross overestimation of national income.",
        "context": "Value-added measurement methodology"
      },
      {
        "term": "Net Indirect Taxes (NIT)",
        "definition": "The difference between indirect taxes levied by the government on goods/services and economic subsidies granted to producers (Indirect Taxes - Subsidies).",
        "context": "Market Price versus Factor Cost valuation"
      },
      {
        "term": "Externalities",
        "definition": "Benefits (positive) or harms (negative) caused by an economic activity to third parties without any corresponding payment or penalty being exchanged in the market.",
        "context": "GDP and welfare limitations"
      }
    ],
    "importantFigures": [
      {
        "title": "National Income Aggregate Conversion Equations",
        "description": "Equations: Gross = Net + Depreciation; National = Domestic + NFIA; Market Price = Factor Cost + Net Indirect Taxes (NIT).",
        "type": "table"
      },
      {
        "title": "The Three Methods of Estimating GDP",
        "description": "Formula mapping: Value Added (GVA = Output - Intermediate), Income (CE + OS + MI), Expenditure (C + I + G + Net Exports).",
        "type": "flowchart"
      }
    ],
    "oneShotRevision": {
      "summary": "National income accounting aggregates the economic performance of a country. National Income is formally defined as NNP_fc. Fundamental conversion rules bridge Gross to Net (via Depreciation), Domestic to National (via NFIA), and Market Price to Factor Cost (via NIT). Three equivalent methods measure national income: Value Added (deducting intermediate consumption to prevent double counting), Income Method (Compensation of Employees + Operating Surplus + Mixed Income), and Expenditure Method (C + I + G + Net Exports). Real GDP measures physical output at constant base year prices, whereas Nominal GDP is inflated by current prices. GDP limitations include non-monetary household labour, unequal income distribution, and environmental externalities.",
      "goldenPoints": [
        "National Income is officially defined as Net National Product at Factor Cost (NNP_fc).",
        "Depreciation converts Gross to Net; NFIA converts Domestic to National; NIT converts Market Price to Factor Cost.",
        "Transfer payments (scholarships, pensions, gifts) are strictly excluded from national income.",
        "Value added equals Value of Output minus Intermediate Consumption.",
        "Operating Surplus comprises Rent, Royalty, Interest, and Corporate Profit.",
        "GDP Deflator = (Nominal GDP / Real GDP) * 100.",
        "Externalities and non-monetary transactions represent major welfare omissions in GDP."
      ],
      "mindMapSteps": [
        "Circular Flow: Real Flow (Inputs/Goods) vs Money Flow (Factor Payments/Expenditure)",
        "Three Golden Conversion Rules: Net = Gross - Dep; National = Domestic + NFIA; FC = MP - NIT",
        "Measurement Methods: Value Added (Output - Intermediate) = Income (CE + OS + MI) = Expenditure (C+I+G+X-M)",
        "GDP & Welfare: Nominal vs Real GDP \u2192 GDP Deflator \u2192 Externalities & Income Distribution Flaws"
      ],
      "commonPitfalls": [
        "Including intermediate goods in national income calculations\u2014this causes double counting.",
        "Including transfer payments (like old age pensions or pocket money) in the income method\u2014only factor payments for productive services count.",
        "Confusing Domestic Income (NDP_fc) with National Income (NNP_fc)\u2014NDP_fc excludes Net Factor Income from Abroad (NFIA)."
      ]
    }
  },
  "c12-eco-ch2": {
    "shortNotes": [
      {
        "title": "Functions of Money and Limitations of the Barter System",
        "bullets": [
          "Barter System: Direct exchange of goods for goods without money. Drawbacks: (1) Lack of double coincidence of wants; (2) Lack of a common unit of value; (3) Difficulty in contractual/deferred payments; (4) Lack of store of value and difficulty in transporting wealth.",
          "Four Functions of Money: (1) Primary Functions: Medium of exchange (eliminates double coincidence of wants) and Measure of value / Unit of account; (2) Secondary Functions: Standard of deferred payment (enables credit and loan transactions) and Store of value (wealth preservation).",
          "Legal Tender & Fiat Money: Fiat money has value by government order/decree; Legal tender is money that cannot be legally refused by any citizen for debt settlement in the country (e.g., currency notes and coins)."
        ]
      },
      {
        "title": "Demand for Money and RBI Monetary Measures",
        "bullets": [
          "Demand for Money (Liquidity Preference): (1) Transaction Motive: Holding money to carry out day-to-day transactions, directly dependent on national income; (2) Speculative Motive: Holding money to take advantage of future movements in bond prices and interest rates, inversely related to the market rate of interest.",
          "Liquidity Trap: A situation at an exceptionally low interest rate where people prefer to hold all liquid money rather than bonds, rendering monetary policy ineffective.",
          "Money Supply: Total stock of money in circulation among the public at a specific point in time.",
          "RBI Measures of Money Supply: (1) M1 = Currency held by public + Demand deposits with commercial banks + Other deposits with RBI (most liquid); (2) M2 = M1 + Post office savings bank deposits; (3) M3 = M1 + Net time deposits with commercial banks (Broad Money, standard aggregate); (4) M4 = M3 + Total post office deposits (excluding NSC)."
        ]
      },
      {
        "title": "Credit Creation by Commercial Banks and the Central Bank (RBI)",
        "bullets": [
          "Credit Creation Process: Commercial banks create credit out of initial primary deposits. Money Multiplier = 1 / Legal Reserve Ratio (LRR). Total Credit Created = Initial Deposit * (1 / LRR).",
          "Functions of Central Bank (Reserve Bank of India - RBI): (1) Sole authority to issue currency notes (except 1 rupee note and coins issued by Ministry of Finance); (2) Banker, agent, and financial adviser to the government; (3) Bankers' bank and supervisor of commercial banking; (4) Lender of last resort to provide liquidity to solvent banks in distress; (5) Custodian of foreign exchange reserves.",
          "Monetary Policy Instruments: Quantitative (CRR, SLR, Repo Rate, Reverse Repo Rate, Bank Rate, Open Market Operations - OMO); Qualitative (Margin requirements, moral suasion, selective credit control)."
        ]
      }
    ],
    "detailedSections": [
      {
        "heading": "1. Evolution of Money, Motives for Holding Cash, and the Liquidity Trap",
        "content": "Before the advent of money, trade relied on the 'C-C economy' (Commodity for Commodity). The fundamental flaw of barter was the 'Double Coincidence of Wants'\u2014trade could occur only if both parties simultaneously desired what the other possessed. Money solved this by acting as a universal medium of exchange. In 'The General Theory of Employment, Interest and Money' (1936), John Maynard Keynes outlined why people hold cash instead of interest-bearing assets: (1) Transaction and Precautionary Motive: To facilitate day-to-day purchases and guard against unforeseen emergencies. This demand is positively related to income (Y). (2) Speculative Motive: Investors speculate on bond prices. When interest rates are very high, bond prices are low, and investors anticipate bond prices will rise, so they buy bonds and hold minimal cash. Conversely, when interest rates drop to rock-bottom historic lows, bond prices are at their peak and everyone expects them to fall. People choose to hold cash rather than suffer capital losses on bonds. At this point, the demand for money becomes perfectly interest-elastic, a condition known as the 'Liquidity Trap'.",
        "keyTakeaway": "Money fulfills essential exchange functions; speculative demand for money varies inversely with interest rates, culminating in the liquidity trap at rock-bottom rates."
      },
      {
        "heading": "2. The Mechanism of Credit Creation and Deposit Multiplier in Commercial Banking",
        "content": "A commercial bank is a financial institution that accepts deposits from the public and advances loans to earn profit. Banks do not keep 100% of customer deposits idle in vaults; experience indicates that depositors never withdraw all their funds simultaneously. The central bank mandates that banks maintain a fractional reserve known as the Legal Reserve Ratio (LRR), consisting of Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR). If the LRR is 10% (0.1) and a person deposits Rs 1,000 into Bank A, the bank keeps Rs 100 as mandatory reserve and lends Rs 900 to a borrower. The borrower spends the Rs 900, which is deposited into Bank B. Bank B keeps 10% (Rs 90) and lends Rs 810. This cycle continues across the entire banking system until total deposits equal Initial Deposit * (1 / LRR) = 1,000 * (1 / 0.1) = Rs 10,000. Thus, an initial deposit of Rs 1,000 creates Rs 9,000 of fresh commercial bank credit in the economy.",
        "keyTakeaway": "The banking system expands initial cash deposits into multiple credit deposits inversely proportional to the legal reserve ratio."
      },
      {
        "heading": "3. Monetary Policy Transmission: Quantitative vs. Qualitative Control by the RBI",
        "content": "The Reserve Bank of India (established on 1 April 1935 under the RBI Act of 1934) regulates credit and preserves monetary stability using two sets of tools: (1) Quantitative Instruments (affect the overall volume of money supply): (a) Repo Rate: The interest rate at which RBI lends short-term liquidity to commercial banks against government securities. Raising the repo rate makes commercial bank borrowing expensive, pushing loan interest rates up and curbing inflation. (b) Reverse Repo Rate: The rate at which RBI absorbs liquidity from banks. (c) Bank Rate: Long-term rediscount rate without collateral. (d) CRR (Cash Reserve Ratio): Percentage of net demand and time liabilities (NDTL) banks must park as cash with RBI. (e) SLR (Statutory Liquidity Ratio): Percentage of NDTL banks must hold in unencumbered liquid assets like gold and government securities. (f) Open Market Operations (OMO): Outright purchase and sale of government bonds in the open market by the RBI. (2) Qualitative Instruments (direct credit flow to specific sectors): Margin requirements (discount on loan-to-value), moral suasion (informal advisory pressure), and credit rationing.",
        "keyTakeaway": "RBI adjusts interest rates, reserve requirements, and open market operations to steer inflation and promote economic growth."
      }
    ],
    "keyConcepts": [
      {
        "term": "Barter System",
        "explanation": "An economic exchange mechanism where goods and services are exchanged directly for other goods and services without money."
      },
      {
        "term": "Double Coincidence of Wants",
        "explanation": "The rare condition where two parties simultaneously possess goods that each other desires in exchange."
      },
      {
        "term": "Legal Reserve Ratio (LRR)",
        "explanation": "The legally mandated fraction of total deposits that commercial banks must hold in reserve (comprising CRR and SLR)."
      },
      {
        "term": "Money Multiplier",
        "explanation": "The degree to which the money supply expands from an initial cash deposit, calculated as 1 / LRR."
      },
      {
        "term": "Repo Rate",
        "explanation": "The benchmark interest rate at which the Central Bank lends short-term funds to commercial banks against government securities."
      },
      {
        "term": "Open Market Operations (OMO)",
        "explanation": "The buying and selling of government bonds by the central bank in the open market to regulate liquidity in the banking system."
      }
    ],
    "importantDates": [
      {
        "date": "1 April 1935",
        "event": "Establishment of the Reserve Bank of India",
        "significance": "RBI created under the RBI Act 1934 following recommendations of the Hilton Young Commission."
      },
      {
        "date": "1 January 1949",
        "event": "Nationalisation of the RBI",
        "significance": "RBI transitioned from a private shareholder institution into India's public central bank."
      },
      {
        "date": "July 1969",
        "event": "First Major Bank Nationalisation",
        "significance": "Prime Minister Indira Gandhi nationalised 14 major private commercial banks to promote priority sector lending."
      },
      {
        "date": "November 2016",
        "event": "Demonetisation in India",
        "significance": "Government demonetised Rs 500 and Rs 1000 banknotes to curb counterfeit currency, black money, and promote digitisation."
      }
    ],
    "importantPeople": [
      {
        "name": "John Maynard Keynes",
        "role": "Macroeconomist & Author",
        "contribution": "Formulated liquidity preference theory, transaction and speculative demand for money, and the liquidity trap."
      },
      {
        "name": "Sir Osborne Smith",
        "role": "First Governor of the RBI (1935-1937)",
        "contribution": "Inaugurated the central banking operations of the Reserve Bank of India in Calcutta."
      },
      {
        "name": "C.D. Deshmukh",
        "role": "First Indian Governor of the RBI (1943-1949)",
        "contribution": "Guided the RBI through independence, partition, and nationalisation in 1949."
      },
      {
        "name": "Milton Friedman",
        "role": "Nobel Laureate & Monetarist",
        "contribution": "Advanced the Quantity Theory of Money, arguing inflation is always and everywhere a monetary phenomenon."
      }
    ],
    "definitions": [
      {
        "term": "Fiat Money",
        "definition": "Currency notes and coins that derive their legal value solely by government decree rather than intrinsic precious metal backing.",
        "context": "Forms of legal tender money"
      },
      {
        "term": "High-Powered Money (Monetary Base)",
        "definition": "The total monetary liabilities of the central bank, consisting of currency held by the public and reserves held by commercial banks with the central bank.",
        "context": "Central bank balance sheet and money multiplier"
      },
      {
        "term": "Liquidity Trap",
        "definition": "A monetary state where nominal interest rates drop near zero, making money demand perfectly elastic and rendering monetary easing ineffective.",
        "context": "Keynesian monetary economics"
      },
      {
        "term": "Moral Suasion",
        "definition": "A qualitative monetary tool where the central bank uses moral appeal, informal advice, and discussions to guide commercial bank lending.",
        "context": "Central banking qualitative control"
      }
    ],
    "importantFigures": [
      {
        "title": "RBI Monetary Aggregates (M1, M2, M3, M4)",
        "description": "Formula table: M1 = Currency + Demand Deposits + Other deposits; M2 = M1 + Post Office Savings; M3 = M1 + Time Deposits; M4 = M3 + All Post Office Deposits.",
        "type": "table"
      },
      {
        "title": "Credit Creation Formula",
        "description": "Total Deposits = Initial Primary Deposit * (1 / LRR); where LRR = CRR + SLR.",
        "type": "flowchart"
      }
    ],
    "oneShotRevision": {
      "summary": "Money overcomes barter's double coincidence requirement, fulfilling primary functions as a medium of exchange and measure of value, alongside secondary functions as a store of value and standard of deferred payments. Money supply is measured via M1 (currency + demand deposits + other RBI deposits) to M4, with M3 representing broad money. Commercial banks create secondary credit via the deposit multiplier (1 / LRR). The Reserve Bank of India acts as the apex currency authority, banker to government, and lender of last resort, utilizing quantitative tools (Repo, Reverse Repo, CRR, SLR, OMO) and qualitative tools (margin requirements, moral suasion) to regulate economic liquidity.",
      "goldenPoints": [
        "Barter fails due to the lack of double coincidence of wants and absence of a common unit of value.",
        "Primary functions of money: Medium of Exchange and Unit of Value.",
        "Keynes distinguished Transaction demand for money (income-driven) from Speculative demand (interest-rate driven).",
        "Liquidity Trap occurs when interest rates are extremely low and money demand becomes perfectly elastic.",
        "M1 is the narrowest, most liquid measure; M3 is broad money and the standard policy metric.",
        "Credit Multiplier = 1 / LRR. Total deposits = Initial Cash Deposit * (1 / LRR).",
        "The RBI was established on 1 April 1935 and nationalised in 1949.",
        "Repo Rate is the rate at which RBI lends short-term funds to commercial banks against government securities."
      ],
      "mindMapSteps": [
        "Barter System Flaws \u2192 4 Functions of Money (Medium, Unit, Store, Deferred)",
        "Demand for Money: Transaction Motive (Income) vs Speculative Motive (Interest Rates & Liquidity Trap)",
        "Measures of Money Supply: M1 (Currency + Demand Deposits) to M3 (Broad Money)",
        "Credit Creation: Fractional Reserves & Money Multiplier (1 / LRR)",
        "RBI Functions & Monetary Policy: Quantitative (Repo, CRR, SLR, OMO) vs Qualitative (Margins, Moral Suasion)"
      ],
      "commonPitfalls": [
        "Assuming commercial banks issue currency\u2014only the central bank (RBI) has note-issuing monopoly (except \u20b91 notes/coins issued by Ministry of Finance).",
        "Confusing Repo Rate (RBI lends to banks) with Reverse Repo Rate (RBI borrows/absorbs from banks).",
        "Forgetting that high LRR leads to lower credit creation, while low LRR boosts credit creation."
      ]
    }
  }
};
