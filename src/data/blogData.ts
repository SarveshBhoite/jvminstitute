export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Data Engineering" | "AI & ML" | "Cloud Computing" | "Career Guidance" | "Digital Marketing" | "Tutorials";
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
  tableOfContents: { id: string; title: string }[];
  content: {
    sectionId?: string;
    heading?: string;
    paragraphs: string[];
    codeBlock?: {
      language: string;
      code: string;
    };
    callout?: {
      type: "tip" | "warning" | "info";
      text: string;
    };
  }[];
}

export const blogCategories = [
  "All Blogs",
  "Data Engineering",
  "AI & ML",
  "Cloud Computing",
  "Career Guidance",
  "Digital Marketing",
  "Tutorials",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "build-realtime-etl-pipeline-pyspark-apache-kafka",
    title: "How to Build an Enterprise Real-Time Streaming Pipeline with PySpark and Apache Kafka",
    excerpt: "Learn how to architect high-throughput event streaming pipelines, aggregate streaming DataFrames in PySpark, and sink real-time records into AWS S3 Delta Lakes.",
    category: "Data Engineering",
    featured: true,
    author: {
      name: "Rohit Sharma",
      role: "Lead Data Engineering Mentor @ JVM",
      avatar: "/place1.png",
      bio: "Ex-Principal Data Architect at Tier-1 MNC with 12+ years building petabyte-scale streaming architectures."
    },
    publishedAt: "July 28, 2026",
    readTime: "7 min read",
    image: "/course.jpg",
    tags: ["PySpark", "Kafka", "ETL Pipelines", "AWS", "Big Data"],
    tableOfContents: [
      { id: "introduction", title: "1. Why Real-Time Streaming Matters" },
      { id: "architecture", title: "2. High-Level Streaming Architecture" },
      { id: "kafka-setup", title: "3. Configuring Apache Kafka Producers" },
      { id: "pyspark-streaming", title: "4. PySpark Structured Streaming Code" },
      { id: "best-practices", title: "5. Production Optimization & Windowing" },
    ],
    content: [
      {
        sectionId: "introduction",
        heading: "1. Why Real-Time Streaming Matters in 2026",
        paragraphs: [
          "Batch processing overnight scripts used to be enough for enterprise BI dashboards. But today, e-commerce fraud detection, banking transaction alerts, and ride-hailing applications require decisions in milliseconds.",
          "In Pune's fast-growing IT market, MNCs like Databricks, TCS, and Accenture are aggressively hiring engineers who can build event-driven data architectures using PySpark and Apache Kafka."
        ],
        callout: {
          type: "info",
          text: "Pro Tip: Structured Streaming in PySpark treats incoming data streams as unbounded tables, allowing you to use SQL queries directly on live event data."
        }
      },
      {
        sectionId: "architecture",
        heading: "2. High-Level Streaming Architecture",
        paragraphs: [
          "Our production workflow ingests clickstream events into Kafka topics, processes windowed aggregates using PySpark Structured Streaming on Databricks, and writes ACID Delta tables to cloud storage.",
          "This architecture achieves micro-batch latencies under 500 milliseconds while guaranteeing exactly-once processing semantics."
        ]
      },
      {
        sectionId: "pyspark-streaming",
        heading: "3. PySpark Structured Streaming Code Implementation",
        paragraphs: [
          "Below is a complete, runnable PySpark script that connects to a Kafka server, parses JSON payloads using PySpark schemas, and executes tumbling 5-minute window aggregations."
        ],
        codeBlock: {
          language: "python",
          code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col, expr, window
from pyspark.sql.types import StructType, StructField, StringType, DoubleType, TimestampType

# Initialize Spark Session with Kafka Package
spark = SparkSession.builder \\
    .appName("KafkaPySparkStreaming") \\
    .config("spark.jars.packages", "org.apache.spark:spark-sql-kafka-0-10_2.12:3.4.0") \\
    .getOrCreate()

# Define Incoming Event Schema
schema = StructType([
    StructField("transaction_id", StringType(), True),
    StructField("amount", DoubleType(), True),
    StructField("timestamp", TimestampType(), True)
])

# Read Stream from Kafka Topic
df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "transactions_topic") \\
    .option("startingOffsets", "latest") \\
    .load()

# Parse JSON Payload
parsed_df = df.selectExpr("CAST(value AS STRING) as json_payload") \\
    .select(from_json(col("json_payload"), schema).alias("data")) \\
    .select("data.*")

# Execute 5-Minute Windowed Aggregations
windowed_counts = parsed_df \\
    .groupBy(window(col("timestamp"), "5 minutes"), col("transaction_id")) \\
    .sum("amount")

# Write Stream to Console / Delta Lake
query = windowed_counts.writeStream \\
    .outputMode("complete") \\
    .format("console") \\
    .start()

query.awaitTermination()`
        }
      },
      {
        sectionId: "best-practices",
        heading: "4. Production Optimization & Memory Tuning",
        paragraphs: [
          "When running PySpark streaming clusters in production, always set appropriate watermark thresholds (`withWatermark`) to prevent out-of-memory errors from late-arriving records.",
          "Ensure your checkpoint directories are stored on durable object stores like AWS S3 or Azure ADLS Gen2 for seamless fault tolerance."
        ],
        callout: {
          type: "tip",
          text: "Check out JVM Institute's 6-Month Data Engineering Master Track to build live Databricks & PySpark projects under 1:1 mentor supervision!"
        }
      }
    ]
  },
  {
    id: "2",
    slug: "data-engineering-vs-data-science-roadmap-2026",
    title: "Data Engineering vs Data Science: Which Career Path Pays Higher in Pune?",
    excerpt: "Comprehensive salary comparison, skill requirements, and a 6-month roadmap for IT professionals transitioning into Data Engineering and Cloud Analytics.",
    category: "Career Guidance",
    featured: true,
    author: {
      name: "Pooja Patil",
      role: "Career Counselor & Tech Architect @ JVM",
      avatar: "/students2.jpeg",
      bio: "Career mentor who has helped over 1,200+ Pune students land high-paying software and data roles."
    },
    publishedAt: "July 25, 2026",
    readTime: "5 min read",
    image: "/students1.jpeg",
    tags: ["Career Guide", "Salaries", "Data Engineering", "Data Science", "Jobs in Pune"],
    tableOfContents: [
      { id: "core-differences", title: "1. Core Differences: Builder vs Analyst" },
      { id: "salary-comparison", title: "2. Pune Tech Salary Benchmark 2026" },
      { id: "skills-required", title: "3. Essential Tech Stack Matrix" },
      { id: "how-to-switch", title: "4. 6-Month Transition Playbook" }
    ],
    content: [
      {
        sectionId: "core-differences",
        heading: "1. Core Differences: The Builder vs The Analyst",
        paragraphs: [
          "Data Scientists build statistical models and ML algorithms, but they depend entirely on clean, scalable data infrastructure. Data Engineers build the actual plumbing — multi-node pipelines, cloud warehouses, and streaming nodes.",
          "Without Data Engineers, 80% of data science models die in local Jupyter notebooks because there is no automated pipeline to feed clean data."
        ]
      },
      {
        sectionId: "salary-comparison",
        heading: "2. Pune Tech Salary Benchmark 2026",
        paragraphs: [
          "According to recent Pune MNC placement metrics, freshers and mid-level Data Engineers command an average starting package of 8.5 LPA to 18 LPA, with experienced Cloud Data Architects reaching 28 LPA+."
        ],
        callout: {
          type: "warning",
          text: "High Demand Notice: Data Engineering job postings in Pune have grown by 3.5x over the past 24 months, creating an acute shortage of PySpark and Snowflake certified talent."
        }
      },
      {
        sectionId: "how-to-switch",
        heading: "3. 6-Month Transition Playbook for IT Professionals",
        paragraphs: [
          "Month 1-2: Master SQL Window Functions, Indexing, and Python Programming.",
          "Month 3-4: Learn Apache Spark, PySpark DataFrames, and Local Hadoop Ecosystems.",
          "Month 5-6: Deploy AWS S3, Redshift Data Warehouses, and Airflow DAG Automation."
        ]
      }
    ]
  },
  {
    id: "3",
    slug: "aws-redshift-vs-snowflake-pune-enterprise-comparison",
    title: "AWS Redshift vs Snowflake vs Databricks: Choosing the Right Data Warehouse in 2026",
    excerpt: "Detailed architectural breakdown comparing query performance, pricing models, multi-cluster auto-scaling, and hands-on setup for enterprise data architects.",
    category: "Cloud Computing",
    featured: false,
    author: {
      name: "Rohit Sharma",
      role: "Lead Data Engineering Mentor @ JVM",
      avatar: "/place1.png",
      bio: "Ex-Principal Data Architect at Tier-1 MNC with 12+ years building petabyte-scale streaming architectures."
    },
    publishedAt: "July 20, 2026",
    readTime: "8 min read",
    image: "/students2.jpeg",
    tags: ["AWS Redshift", "Snowflake", "Databricks", "Cloud Warehouse", "SQL"],
    tableOfContents: [
      { id: "warehouse-overview", title: "1. The Modern Cloud Data Stack" },
      { id: "redshift-vs-snowflake", title: "2. Redshift vs Snowflake Performance" },
      { id: "databricks-lakehouse", title: "3. Databricks Lakehouse Unified Platform" },
      { id: "verdict", title: "4. Architectural Verdict & Recommendations" }
    ],
    content: [
      {
        sectionId: "warehouse-overview",
        heading: "1. The Modern Cloud Data Stack Overview",
        paragraphs: [
          "Choosing between AWS Redshift, Snowflake, and Databricks is one of the most critical decisions for modern cloud architects.",
          "While AWS Redshift offers seamless integration with the AWS ecosystem, Snowflake excels at zero-copy cloning and instant compute scaling, while Databricks dominates unified Lakehouse AI analytics."
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "generative-ai-for-data-engineers-llm-pipelines",
    title: "Generative AI for Data Engineers: Building LLM RAG Data Pipelines",
    excerpt: "Learn how Data Engineers design chunking strategies, vector database indexes (Pinecone & pgvector), and automated LLM ETL ingestion pipelines.",
    category: "AI & ML",
    featured: false,
    author: {
      name: "Sneha Kulkarni",
      role: "AI & Data Engineer @ JVM",
      avatar: "/place2.png",
      bio: "Specialist in RAG pipelines, LangChain integrations, and vector search optimization."
    },
    publishedAt: "July 15, 2026",
    readTime: "6 min read",
    image: "/course.jpg",
    tags: ["Generative AI", "RAG Pipelines", "Vector Databases", "Python", "LLMs"],
    tableOfContents: [
      { id: "rag-overview", title: "1. What is RAG Data Engineering?" },
      { id: "vector-dbs", title: "2. Vector Databases: Pinecone vs pgvector" },
      { id: "python-rag-code", title: "3. Building a LangChain Ingestion Pipeline" }
    ],
    content: [
      {
        sectionId: "rag-overview",
        heading: "1. What is RAG Data Engineering?",
        paragraphs: [
          "Retrieval-Augmented Generation (RAG) relies on clean, high-dimensional vector embeddings stored in specialized databases. Data Engineers build the automated ingestion jobs that clean text, generate embeddings, and keep vector stores synchronized in real time."
        ]
      }
    ]
  },
  {
    id: "5",
    slug: "top-10-python-data-analysis-techniques-pandas-polars",
    title: "Top 10 High-Performance Python Data Analysis Techniques: Pandas 2.0 & Polars",
    excerpt: "Discover how Polars outpaces Pandas by 10x using Rust-backed parallel query engines, zero-copy Arrow memory, and lazy evaluation pipelines.",
    category: "Tutorials",
    featured: false,
    author: {
      name: "Rohit Sharma",
      role: "Lead Data Engineering Mentor @ JVM",
      avatar: "/place1.png",
      bio: "Ex-Principal Data Architect at Tier-1 MNC with 12+ years building petabyte-scale streaming architectures."
    },
    publishedAt: "July 10, 2026",
    readTime: "5 min read",
    image: "/students1.jpeg",
    tags: ["Python", "Pandas", "Polars", "Data Analysis", "Rust"],
    tableOfContents: [
      { id: "polars-vs-pandas", title: "1. Why Polars is Replacing Pandas" },
      { id: "code-benchmark", title: "2. Polars Lazy Evaluation Example" }
    ],
    content: [
      {
        sectionId: "polars-vs-pandas",
        heading: "1. Why Polars is Replacing Pandas in 2026",
        paragraphs: [
          "Pandas has long been the default Python data analysis library, but its single-threaded execution model struggles on multi-gigabyte datasets. Polars, written in Rust, leverages modern multi-core CPU architecture for lightning-fast vectorized queries."
        ]
      }
    ]
  },
  {
    id: "6",
    slug: "digital-marketing-strategies-tech-institutes-lead-gen",
    title: "Modern Growth Marketing Strategies for IT & EdTech Institutes in 2026",
    excerpt: "In-depth guide covering search intent keyword strategy, local SEO optimization for Pune tech hubs, meta ad retargeting, and high-converting landing page UI.",
    category: "Digital Marketing",
    featured: false,
    author: {
      name: "Amit Deshmukh",
      role: "Head of Growth @ JVM Institute",
      avatar: "/students2.jpeg",
      bio: "Digital strategist driving EdTech student growth & performance marketing campaigns."
    },
    publishedAt: "July 05, 2026",
    readTime: "6 min read",
    image: "/students2.jpeg",
    tags: ["Digital Marketing", "SEO", "Growth Hacking", "EdTech", "Pune Marketing"],
    tableOfContents: [
      { id: "seo-strategy", title: "1. Pune Local SEO & Keyword Intent" },
      { id: "conversion-funnel", title: "2. Landing Page UI & Trust Triggers" }
    ],
    content: [
      {
        sectionId: "seo-strategy",
        heading: "1. Pune Local SEO & Keyword Intent Mapping",
        paragraphs: [
          "Ranking on Google for localized high-intent keywords like 'Best Data Engineering Course in Pune' requires a combination of structured JSON-LD schema, high-authority localized backlinks, and optimized core web vitals."
        ]
      }
    ]
  }
];
