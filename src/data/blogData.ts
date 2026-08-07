export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  longDescriptionHtml?: string;
  category: "Data Engineering" | "AI & ML" | "Cloud Computing" | "Career Guidance" | "Digital Marketing" | "Tutorials" | string;
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
  tableOfContents?: { id: string; title: string }[];
  content?: {
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

export function mapDBBlogToBlogPost(dbBlog: any): BlogPost {
  if (!dbBlog) return null as any;

  const staticPost = blogPosts.find((p) => p.slug === dbBlog.slug);

  let content = [];
  let tableOfContents = [];
  if (dbBlog.contentJson) {
    try {
      const parsed = typeof dbBlog.contentJson === "string" ? JSON.parse(dbBlog.contentJson) : dbBlog.contentJson;
      if (Array.isArray(parsed) && parsed.length > 0) {
        content = parsed;
      } else if (parsed && typeof parsed === "object") {
        content = parsed.content || [];
        tableOfContents = parsed.tableOfContents || [];
      }
    } catch (e) {
      content = [];
    }
  }

  if (content.length === 0 && (!dbBlog.longDescriptionHtml || dbBlog.longDescriptionHtml.trim() === "") && staticPost) {
    content = staticPost.content || [];
    tableOfContents = staticPost.tableOfContents || [];
  }

  if (tableOfContents.length === 0 && staticPost && staticPost.tableOfContents) {
    tableOfContents = staticPost.tableOfContents;
  }

  const tags = typeof dbBlog.tags === "string"
    ? dbBlog.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
    : (Array.isArray(dbBlog.tags) ? dbBlog.tags : []);

  return {
    id: dbBlog.id,
    slug: dbBlog.slug,
    title: dbBlog.title,
    excerpt: dbBlog.excerpt,
    longDescriptionHtml: dbBlog.longDescriptionHtml || "",
    category: dbBlog.category || "Data Engineering",
    featured: dbBlog.featured ?? false,
    author: {
      name: dbBlog.authorName || staticPost?.author?.name || "JVM Technical Team",
      role: dbBlog.authorRole || staticPost?.author?.role || "Senior Data Architect @ JVM",
      avatar: dbBlog.authorAvatar || staticPost?.author?.avatar || "/place1.png",
      bio: "",
    },
    publishedAt: dbBlog.publishedAt || "Aug 2026",
    readTime: dbBlog.readTime || "5 min read",
    image: dbBlog.image || staticPost?.image || "/course.jpg",
    tags: tags.length > 0 ? tags : ["Data Engineering"],
    tableOfContents: tableOfContents,
    content: content,
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "9",
    slug: "how-to-read-xml-files-into-python",
    title: "Unlocking the Power of Data: The Journey of a Data Engineer",
    excerpt: "Discover the evolution, essential skills, real-world applications, and transformative impact of data engineering in today's data-driven world.",
    category: "Data Engineering",
    featured: true,
    author: {
      name: "",
      role: "",
      avatar: "/course.jpg",
      bio: ""
    },
    publishedAt: "May 30, 2024",
    readTime: "6 min read",
    image: "/powerofdata.png",
    tags: ["Data Engineering", "ETL Pipelines", "Python", "SQL", "Cloud Architect"],
    tableOfContents: [
      { id: "introduction", title: "Introduction: Power of Data" },
      { id: "evolution", title: "1. The Evolution of Data Engineering" },
      { id: "skills", title: "2. The Essential Skills of a Data Engineer" },
      { id: "real-world", title: "3. Real-World Applications & Industry Use-Cases" },
      { id: "impact", title: "4. The Impact & Future Opportunities" },
      { id: "conclusion", title: "Conclusion & Your Journey" },
    ],
    content: [
      {
        sectionId: "introduction",
        paragraphs: [
          "Every single day, over 328 million terabytes of raw data are created across global digital networks. Yet without structured processing systems, 90% of enterprise data remains unstructured, isolated, and unusable.",
          "Data engineering is the indispensable discipline that transforms chaotic, raw data streams into clean, reliable, and actionable business intelligence."
        ]
      },
      {
        sectionId: "evolution",
        heading: "1. The Evolution of Data Engineering",
        paragraphs: [
          "Data engineering has undergone a monumental shift. In the early 2000s, traditional relational databases and monolith data warehouses handled nightly batch jobs. As data volume exploded, technologies like Apache Hadoop introduced distributed computing via HDFS and MapReduce.",
          "Today, modern cloud data platforms like Databricks, Snowflake, and AWS Glue enable real-time streaming, serverless ETL pipelines, and unified Lakehouse analytics, making data engineering indispensable across finance, healthcare, e-commerce, and logistics."
        ]
      },
      {
        sectionId: "skills",
        heading: "2. The Skills of a Data Engineer",
        paragraphs: [
          "To excel as a data engineer, mastering a core set of technical competencies is essential: proficiency in programming languages (Python, PySpark, SQL), data modeling (Star & Snowflake schemas), automated ETL/ELT orchestration, and cloud infrastructure.",
          "At JVM Institute, our hands-on training programs empower students to master these skills with live Databricks clusters and production Airflow DAGs. Over 200+ JVM alumni have successfully transitioned into high-paying engineering roles across Tier-1 tech MNCs."
        ],
        codeBlock: {
          language: "python",
          code: `import xml.etree.ElementTree as ET
import pandas as pd

# Parsing XML Data Files into Python DataFrames
tree = ET.parse("data_pipeline_export.xml")
root = tree.getroot()

records = []
for item in root.findall(".//record"):
    records.append({
        "id": item.find("id").text,
        "event": item.find("event").text,
        "value": float(item.find("value").text)
    })

df = pd.DataFrame(records)
print("Parsed Data Summary:\\n", df.head())`
        },
        callout: {
          type: "tip",
          text: "Pro Tip: Combining Python XML element trees with PySpark DataFrames provides high performance when ingesting legacy enterprise files."
        }
      },
      {
        sectionId: "real-world",
        heading: "3. Real-World Applications across Industries",
        paragraphs: [
          "Data engineering powers real-world innovations across every sector: in finance, stream processing detects fraudulent transactions in milliseconds; in healthcare, pipelines aggregate patient IoT telemetry; in e-commerce, automated pipelines fuel hyper-personalized recommendation engines.",
          "Students at JVM Institute complete real-world capstone projects—such as building 100GB live streaming pipelines—demonstrating complete readiness for enterprise challenges."
        ]
      },
      {
        sectionId: "impact",
        heading: "4. The Impact of Data Engineering",
        paragraphs: [
          "The impact of data engineering extends far beyond code—it is the foundation of AI, machine learning models, and executive decision-making. As enterprises migrate to cloud-native data platforms, demand for skilled Data Engineers continues to outpace supply, offering extraordinary career growth and compensation."
        ]
      },
      {
        sectionId: "conclusion",
        heading: "Conclusion: Embark on Your Data Journey",
        paragraphs: [
          "Data engineering is the driving force behind modern business transformation. By mastering data manipulation, cloud warehouses, and pipeline orchestration, you unlock endless career opportunities.",
          "Take the first step in your data engineering journey today! Explore JVM Institute’s industry-accredited training programs and register for our upcoming live batches."
        ],
        callout: {
          type: "info",
          text: "Explore JVM Institute's 6-Month Data Engineering Master Track in Pune with 100% Placement Assistance."
        }
      }
    ]
  },
  {
    id: "8",
    slug: "learn-python-for-data-analysis",
    title: "Top 5 Data Engineering Tools Every Aspiring Data Engineer Should Master",
    excerpt: "Data engineering is a rapidly evolving field. Explore five essential tools—Apache Spark, Cloud ETL (AWS Glue/Dataflow/ADF), Apache Hadoop, Airflow, and SQL—to stay competitive.",
    category: "Data Engineering",
    featured: true,
    author: {
      name: "JVM Admin",
      role: "Lead Data Engineering Editorial Team @ JVM",
      avatar: "/place2.png",
      bio: "Industry technical writers & senior data architects publishing real-world cloud pipelines & framework playbooks."
    },
    publishedAt: "May 30, 2024",
    readTime: "6 min read",
    image: "/top5dataengineeringtool.png",
    tags: ["Apache Spark", "AWS Glue", "Apache Hadoop", "Airflow", "SQL", "ETL"],
    tableOfContents: [
      { id: "apache-spark", title: "1. Apache Spark" },
      { id: "cloud-etl", title: "2. AWS Glue, GCP Dataflow, Azure Data Factory" },
      { id: "apache-hadoop", title: "3. Apache Hadoop" },
      { id: "airflow", title: "4. Apache Airflow" },
      { id: "sql", title: "5. SQL (Structured Query Language)" },
      { id: "conclusion", title: "Conclusion: Long-term Success" },
    ],
    content: [
      {
        sectionId: "introduction",
        paragraphs: [
          "Data engineering is a rapidly evolving field, with new tools and technologies emerging constantly. In this blog post, we’ll explore five essential data engineering tools that every aspiring data engineer should master to stay competitive in the industry."
        ]
      },
      {
        sectionId: "apache-spark",
        heading: "1. Apache Spark",
        paragraphs: [
          "Apache Spark has become a cornerstone in the world of big data processing. Its lightning-fast processing speeds and versatile APIs make it ideal for a wide range of data engineering tasks, including ETL (Extract, Transform, Load) processes, machine learning, and stream processing."
        ],
        codeBlock: {
          language: "python",
          code: `from pyspark.sql import SparkSession

# Initialize PySpark Session for Big Data Processing
spark = SparkSession.builder \\
    .appName("JVMDataEngineeringDemo") \\
    .config("spark.executor.memory", "4g") \\
    .getOrCreate()

# Load & Transform Multi-Gigabyte Dataset
df = spark.read.parquet("s3a://jvm-data-lake/transactions/")
transformed_df = df.filter(df["amount"] > 1000).groupBy("region").count()

transformed_df.show(5)`
        },
        callout: {
          type: "tip",
          text: "Pro Tip: PySpark DataFrame APIs leverage in-memory computation, performing up to 100x faster than traditional MapReduce jobs."
        }
      },
      {
        sectionId: "cloud-etl",
        heading: "2. AWS Glue, GCP Dataflow, Azure Data Factory",
        paragraphs: [
          "Cloud-based ETL (Extract, Transform, Load) services like AWS Glue, GCP Dataflow, and Azure Data Factory have revolutionized data engineering by providing scalable and serverless solutions for data integration and transformation.",
          "These services enable you to ingest data from various sources, perform complex transformations, and load it into your target data stores with ease. Understanding how to leverage these cloud-based ETL services allows data engineers to build efficient and cost-effective data pipelines in the cloud."
        ]
      },
      {
        sectionId: "apache-hadoop",
        heading: "3. Apache Hadoop",
        paragraphs: [
          "While newer technologies like Spark have gained popularity, Apache Hadoop remains a foundational tool in the data engineering landscape.",
          "Hadoop’s distributed file system (HDFS) and MapReduce processing framework are still widely used for storing and processing large-scale data sets. Mastery of Hadoop is crucial for understanding the fundamentals of distributed computing and big data processing."
        ]
      },
      {
        sectionId: "airflow",
        heading: "4. Apache Airflow",
        paragraphs: [
          "Data pipelines are the backbone of any data engineering workflow, and Apache Airflow is a powerful tool for orchestrating and monitoring complex data pipelines.",
          "With Airflow, you can define workflows as code, schedule and execute tasks, and easily visualize the status of your pipelines. Learning how to design, deploy, and manage workflows with Airflow is essential for ensuring the reliability and efficiency of your data pipelines."
        ]
      },
      {
        sectionId: "sql",
        heading: "5. SQL (Structured Query Language)",
        paragraphs: [
          "While not a specific tool, proficiency in SQL (Structured Query Language) is essential for any data engineer.",
          "SQL is the lingua franca of data analysis, and being able to write efficient queries to extract, transform, and analyze data is a fundamental skill. Whether you’re working with traditional relational databases or newer big data platforms, SQL is the language you’ll use to interact with your data."
        ]
      },
      {
        sectionId: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "Mastering these five data engineering tools will provide you with a solid foundation for success in the field.",
          "However, it’s important to remember that the data engineering landscape is constantly evolving, so staying curious, adaptable, and eager to learn new technologies will be key to your long-term success as a data engineer. Keep exploring, experimenting, and pushing the boundaries of what’s possible with data engineering!"
        ],
        callout: {
          type: "info",
          text: "Master Apache Spark, Airflow, SQL & AWS Glue live at JVM Institute Pune with 100% Placement Assistance."
        }
      }
    ]
  },
  {
    id: "7",
    slug: "why-should-i-learn-python-for-data-analysis",
    title: "5 Essential Skills Every Data Analyst Should Master",
    excerpt: "In the rapidly evolving field of data analysis, mastering these five essential skills—data manipulation, visualization, statistical analysis, critical thinking, and business acumen—will set you apart.",
    category: "Career Guidance",
    featured: true,
    author: {
      name: "Rohit Sharma",
      role: "Lead Data Engineering & Analytics Mentor @ JVM",
      avatar: "/place1.png",
      bio: "Ex-Principal Data Architect with 12+ years mentoring over 1,500+ data analysts and engineers."
    },
    publishedAt: "July 30, 2026",
    readTime: "5 min read",
    image: "/5essentialsskills.png",
    tags: ["Data Analyst", "Python", "Data Visualization", "SQL", "Career Skills"],
    tableOfContents: [
      { id: "data-manipulation", title: "1. Proficiency in Data Manipulation" },
      { id: "data-visualization", title: "2. Data Visualization Expertise" },
      { id: "statistical-analysis", title: "3. Statistical Analysis Proficiency" },
      { id: "critical-thinking", title: "4. Critical Thinking & Problem Solving" },
      { id: "business-acumen", title: "5. Business Acumen & Domain Knowledge" },
      { id: "conclusion", title: "Conclusion: Path to Master Data Analysis" },
    ],
    content: [
      {
        sectionId: "introduction",
        paragraphs: [
          "In the rapidly evolving field of data analysis, staying ahead requires a diverse skill set. Whether you’re just starting your journey as a data analyst or looking to advance your career, mastering these five essential skills will set you apart from the competition."
        ]
      },
      {
        sectionId: "data-manipulation",
        heading: "1. Proficiency in Data Manipulation",
        paragraphs: [
          "Data analysts spend a significant amount of time cleaning, transforming, and preparing data for analysis. Proficiency in tools like Python, R, and SQL is essential for efficiently manipulating data sets of varying sizes and formats."
        ],
        codeBlock: {
          language: "python",
          code: `import pandas as pd
import numpy as np

# Data Cleaning & Transformation in Python
df = pd.read_csv("sales_data.csv")

# Clean missing values & filter active users
df['clean_amount'] = df['amount'].fillna(df['amount'].median())
active_sales = df[df['status'] == 'COMPLETED'].groupby('category')['clean_amount'].sum()

print("Category Sales Summary:\\n", active_sales)`
        },
        callout: {
          type: "tip",
          text: "Pro Tip: Python Pandas and SQL window functions are the top 2 requested data manipulation skills by Pune MNC recruiters."
        }
      },
      {
        sectionId: "data-visualization",
        heading: "2. Data Visualization Expertise",
        paragraphs: [
          "The ability to communicate insights effectively is crucial for data analysts. Mastering data visualization tools like Tableau or matplotlib in Python allows analysts to create compelling visualizations that convey complex findings in a clear and concise manner."
        ]
      },
      {
        sectionId: "statistical-analysis",
        heading: "3. Statistical Analysis Proficiency",
        paragraphs: [
          "A solid foundation in statistics is fundamental for conducting rigorous analysis and drawing meaningful conclusions from data. Skills in hypothesis testing, regression analysis, and exploratory data analysis are essential for uncovering insights and making data-driven decisions."
        ]
      },
      {
        sectionId: "critical-thinking",
        heading: "4. Critical Thinking and Problem-Solving Skills",
        paragraphs: [
          "Data analysis often involves tackling complex problems and navigating uncertain situations. Developing strong critical thinking skills enables analysts to ask the right questions, identify patterns, and derive actionable insights from data."
        ]
      },
      {
        sectionId: "business-acumen",
        heading: "5. Business Acumen and Domain Knowledge",
        paragraphs: [
          "Understanding the business context in which data analysis takes place is crucial for delivering value to stakeholders. Data analysts should possess a deep understanding of the industry they work in, along with the ability to translate business objectives into analytical solutions."
        ]
      },
      {
        sectionId: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "Mastering these essential skills is key to becoming a successful data analyst in today's competitive landscape. By continuously honing your abilities in data manipulation, visualization, statistical analysis, critical thinking, and business acumen, you will be well-equipped to tackle any data-related challenge."
        ],
        callout: {
          type: "info",
          text: "Ready to launch your Data Analysis career? Enroll in JVM Institute's hands-on Python for Data Analysis & Data Engineering track today."
        }
      }
    ]
  }
];

