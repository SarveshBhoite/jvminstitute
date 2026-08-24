const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedStudyMaterials() {
  console.log("Seeding Study Material Courses & Modules...");

  const pysparkCourse = await prisma.studyMaterialCourse.upsert({
    where: { slug: "pyspark-mastery-guide" },
    update: {
      title: "PySpark & Apache Spark Architecture Mastery",
      description: "Complete production guide covering RDDs, DataFrames, Catalyst Optimizer, Memory Tuning, AQE, Broadcast Joins & Streaming.",
      subject: "PySpark & Big Data",
      badge: "Best Seller",
      price: 499,
      freeModulesCount: 1,
      coverImage: "/course.jpg",
      isPublished: true,
    },
    create: {
      slug: "pyspark-mastery-guide",
      title: "PySpark & Apache Spark Architecture Mastery",
      description: "Complete production guide covering RDDs, DataFrames, Catalyst Optimizer, Memory Tuning, AQE, Broadcast Joins & Streaming.",
      subject: "PySpark & Big Data",
      badge: "Best Seller",
      price: 499,
      freeModulesCount: 1,
      coverImage: "/course.jpg",
      isPublished: true,
    }
  });

  // Modules for PySpark
  await prisma.studyMaterialModule.deleteMany({ where: { courseId: pysparkCourse.id } });

  await prisma.studyMaterialModule.createMany({
    data: [
      {
        courseId: pysparkCourse.id,
        moduleNumber: 1,
        title: "Module 1: Spark Architecture & Core RDD vs DataFrame",
        description: "Understanding Driver, Worker Executors, DAG execution, and why DataFrames outperform raw RDDs.",
        readTime: "12 min read",
        contentHtml: `
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-purple-600 dark:text-purple-400">1. Apache Spark Distributed Architecture</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Apache Spark is an open-source, distributed computing framework designed for fast processing of large-scale datasets across cluster nodes.</p>
            
            <div class="p-5 bg-purple-50 dark:bg-purple-950/50 rounded-2xl border border-purple-200 dark:border-purple-800 space-y-3">
              <h3 class="font-bold text-purple-900 dark:text-purple-200">Key Core Components:</h3>
              <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><strong>Driver Program:</strong> Maintains application info, responds to user input, and schedules execution tasks across worker executors.</li>
                <li><strong>Cluster Manager:</strong> Allocates cluster resources (YARN, Standalone, Kubernetes).</li>
                <li><strong>Executors:</strong> Worker processes that execute individual tasks in JVM threads and cache data partitions in RAM.</li>
              </ul>
            </div>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white pt-2">2. RDD vs DataFrame vs Dataset Comparison</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">DataFrames leverage the Catalyst Query Optimizer for predicate pushdown and column projection, eliminating Python execution overhead.</p>

            <div class="space-y-2">
              <span class="text-xs font-mono uppercase text-slate-500 font-bold block">Production PySpark DataFrame Script:</span>
              <pre class="bg-slate-900 text-emerald-400 p-5 rounded-2xl text-xs font-mono overflow-x-auto shadow-inner">
# PySpark DataFrame Initialization & Transformation Example
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, avg

spark = SparkSession.builder \\
    .appName("JVM_DataEngineering") \\
    .config("spark.sql.adaptive.enabled", "true") \\
    .getOrCreate()

# Reading Parquet Data Lake S3 Path
df = spark.read.parquet("s3://jvm-lake/sales/")
filtered = df.filter(col("amount") > 1000).groupBy("region").agg(sum("amount").alias("total_sales"))
filtered.show(5)
              </pre>
            </div>
          </div>
        `
      },
      {
        courseId: pysparkCourse.id,
        moduleNumber: 2,
        title: "Module 2: Catalyst Query Optimizer & Physical Execution Plans",
        description: "Deep dive into Logical Plan generation, Cost-Based Optimizer (CBO), and physical plan execution.",
        readTime: "18 min read",
        contentHtml: `
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Catalyst Query Optimizer Workflow</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">The Catalyst Optimizer is at the core of Spark SQL. It automatically optimizes DataFrame transformations through 4 main stages:</p>
            
            <ol class="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
              <li><strong>Analysis:</strong> Resolves column names, types, and relations against the Catalog schema.</li>
              <li><strong>Logical Optimization:</strong> Applies rule-based optimizations like Constant Folding, Predicate Pushdown, and Projection Pruning.</li>
              <li><strong>Physical Planning:</strong> Generates multiple physical plans and selects the cheapest cost model plan using CBO.</li>
              <li><strong>Code Generation (Tungsten):</strong> Generates Java bytecode at runtime to execute directly on worker CPUs.</li>
            </ol>

            <pre class="bg-slate-900 text-emerald-400 p-5 rounded-2xl text-xs font-mono overflow-x-auto shadow-inner">
# Inspect Physical Execution Plan with explain()
df.explain(extended=True)
            </pre>
          </div>
        `
      },
      {
        courseId: pysparkCourse.id,
        moduleNumber: 3,
        title: "Module 3: Memory Management, GC Overhead & Data Skewness",
        description: "Master executor memory fraction division, key salting, and AQE skew join optimizations.",
        readTime: "20 min read",
        contentHtml: `
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-pink-600 dark:text-pink-400">Executor Memory Breakdown</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Spark Executor JVM heap is split into Storage Memory (60% default) for caching and Execution Memory (40% default) for shuffles and joins.</p>
            
            <div class="p-5 bg-pink-50 dark:bg-pink-950/50 rounded-2xl border border-pink-200 dark:border-pink-800">
              <h3 class="font-bold text-pink-900 dark:text-pink-200 mb-2">Mitigating Data Skewness with Salting</h3>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">When a join key has uneven frequency, one executor gets stuck processing 90% of data. Add a random integer suffix (0-N) to salt the key and distribute the load evenly across cluster executors.</p>
            </div>
          </div>
        `
      }
    ]
  });

  const sqlCourse = await prisma.studyMaterialCourse.upsert({
    where: { slug: "advanced-sql-analytics" },
    update: {
      title: "Advanced SQL & Database Performance Tuning",
      description: "Master Window Functions, CTEs, Indexing (B-Tree vs Bitmap), Partitioning, and Query Execution Plans.",
      subject: "SQL & Analytics",
      badge: "Must Have",
      price: 399,
      freeModulesCount: 1,
      coverImage: "/course.jpg",
      isPublished: true,
    },
    create: {
      slug: "advanced-sql-analytics",
      title: "Advanced SQL & Database Performance Tuning",
      description: "Master Window Functions, CTEs, Indexing (B-Tree vs Bitmap), Partitioning, and Query Execution Plans.",
      subject: "SQL & Analytics",
      badge: "Must Have",
      price: 399,
      freeModulesCount: 1,
      coverImage: "/course.jpg",
      isPublished: true,
    }
  });

  await prisma.studyMaterialModule.deleteMany({ where: { courseId: sqlCourse.id } });

  await prisma.studyMaterialModule.createMany({
    data: [
      {
        courseId: sqlCourse.id,
        moduleNumber: 1,
        title: "Module 1: Advanced Window Functions (RANK, DENSE_RANK, NTILE)",
        description: "Understanding analytical ranking, window frames (ROWS BETWEEN), LEAD/LAG and partition clauses.",
        readTime: "15 min read",
        contentHtml: `
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Analytical Window Functions</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Window functions perform calculations across a set of table rows related to the current row, without collapsing rows like GROUP BY.</p>
            
            <pre class="bg-slate-900 text-emerald-400 p-5 rounded-2xl text-xs font-mono overflow-x-auto shadow-inner">
SELECT 
  employee_id,
  department_id,
  salary,
  ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) as r_num,
  DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as d_rank,
  LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary DESC) as prev_salary
FROM employees;
            </pre>
          </div>
        `
      },
      {
        courseId: sqlCourse.id,
        moduleNumber: 2,
        title: "Module 2: Common Table Expressions (CTEs) & Recursive Queries",
        description: "Writing clean WITH queries, recursive CTEs for hierarchical organizational trees.",
        readTime: "14 min read",
        contentHtml: `
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Recursive CTEs</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Recursive CTEs allow querying graph data or manager-employee hierarchies with simple SQL syntax.</p>
          </div>
        `
      }
    ]
  });

  console.log("Successfully seeded Study Material Courses & Modules!");
  await prisma.$disconnect();
}

seedStudyMaterials().catch(err => {
  console.error("Seeding Error:", err);
  prisma.$disconnect();
  process.exit(1);
});
