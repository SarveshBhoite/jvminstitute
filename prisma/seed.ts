import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Events
  await prisma.event.deleteMany();
  await prisma.event.createMany({
    data: [
      {
        slug: "enterprise-pyspark-kafka-databricks",
        title: "Enterprise Data Streaming with PySpark, Apache Kafka & Databricks",
        category: "upcoming",
        date: "Aug 15, 2026",
        time: "06:00 PM - 08:30 PM IST",
        mode: "JVM Pune Campus & Online",
        speakerName: "Rahul Deshmukh",
        speakerRole: "Principal Data Architect",
        speakerCompany: "Tier-1 Cloud Enterprise",
        speakerAvatar: "/place1.png",
        description: "Learn how to architect end-to-end real-time data streaming pipelines using PySpark Structured Streaming, Apache Kafka topics, and Delta Lake on Databricks with hands-on code walkthrough.",
        tags: ["PySpark", "Apache Kafka", "Databricks", "Data Streaming", "Delta Lake"],
        seatsTotal: 250,
        seatsFilled: 218,
        isFeatured: true,
      },
      {
        slug: "snowflake-modern-data-warehousing",
        title: "Snowflake Modern Data Warehousing & Zero-Copy Cloning Masterclass",
        category: "upcoming",
        date: "Aug 22, 2026",
        time: "11:00 AM - 01:30 PM IST",
        mode: "Virtual (Zoom Live)",
        speakerName: "Priya Sharma",
        speakerRole: "Senior Snowflake Consultant",
        speakerCompany: "Global Tech Solutions",
        speakerAvatar: "/place2.png",
        description: "Master Snowflake virtual warehouses, Micro-partitioning, Time Travel, Dynamic Tables, and Cost Optimization strategies used by Fortune 500 companies.",
        tags: ["Snowflake", "Data Warehousing", "SQL", "Cloud Data", "Time Travel"],
        seatsTotal: 300,
        seatsFilled: 245,
      },
      {
        slug: "jvm-tech-a-thon-2026",
        title: "JVM Tech-a-Thon 2026: 48-Hour National Data Engineering Hackathon",
        category: "hackathon",
        date: "Sep 05 - Sep 07, 2026",
        time: "Starts 06:00 PM IST",
        mode: "Hybrid",
        speakerName: "JVM Technical Board",
        speakerRole: "Hackathon Jury & Mentors",
        speakerCompany: "JVM Institute",
        speakerAvatar: "/jvm logo.jpeg",
        description: "Compete against India's top tech talent to build high-scale analytics engines & GenAI RAG applications. Prize Pool worth ₹1,00,000 + direct interview calls!",
        tags: ["Hackathon", "PySpark", "GenAI", "SQL", "AWS", "Snowflake"],
        seatsTotal: 500,
        seatsFilled: 380,
      },
    ],
  });

  // Seed Placements from jvm.imgs.docx
  await prisma.placement.deleteMany();
  await prisma.placement.createMany({
    data: [
      {
        name: "Priya",
        domain: "PySpark & Big Data",
        placedRole: "Senior Data Engineer",
        company: "Cymetrix",
        package: "11.54 LPA",
        image: "/placements/placement_1_priya.png",
        skills: "PySpark, AWS, SQL, Python",
        category: "pyspark_bigdata",
        isFeatured: true,
        testimonial: "Coming from a non-IT background, I was unsure about switching careers. JVM Institute made the transition smooth with their step-by-step training approach. The live projects gave me valuable practical exposure, and the trainers continuously motivated me throughout the course. Their placement assistance and mock interviews were incredibly helpful. Thanks to JVM Institute, I successfully started my journey in the IT industry.",
      },
      {
        name: "Shweta",
        domain: "Data Engineering",
        placedRole: "Software Engineer",
        company: "Persistent",
        package: "12.5 LPA",
        image: "/placements/placement_2_shweta.png",
        skills: "Python, SQL, Data Engineering, AWS",
        category: "data_engineering",
        isFeatured: true,
        testimonial: "After a career break, I wanted to restart my professional journey in a growing field. JVM Institute gave me the confidence and skills needed to enter the IT industry. The trainers were extremely supportive and explained every topic in a simple manner. The live projects and interview preparation sessions helped me gain practical experience. Today, I am successfully working in the Data Engineering domain and grateful to JVM Institute for making this transition possible",
      },
      {
        name: "Prathamesh",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Zorba Consulting",
        package: "13 LPA",
        image: "/placements/placement_3_prathamesh.png",
        skills: "SQL, Python, PySpark, AWS, Azure, Databricks",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "My journey with JVM Institute has been truly life-changing. The training program provided in-depth knowledge of SQL, Python, PySpark, AWS, Azure, and real-time Data Engineering projects. The trainers were highly supportive and ensured that every concept was understood clearly through practical implementation. The mock interviews, resume preparation, and placement support helped me build confidence and perform well in interviews. With the guidance of JVM Institute, I successfully secured multiple offers from leading companies including Zorba Consulting (13 LPA), Datametica (12.2 LPA), and IPG Mediabrands (12 LPA). I am sincerely grateful to JVM Institute for helping me achieve these career milestones and would highly recommend it to anyone aspiring to build a successful career in Data Engineering.",
      },
      {
        name: "Abhishek",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Datemetica",
        package: "12 LPA",
        image: "/placements/placement_4_abhishek.jpeg",
        skills: "SQL, Python, Cloud, Big Data, PySpark",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I joined JVM Institute to upgrade my technical skills and improve my career prospects. The curriculum covered everything from SQL and Python to Cloud and Big Data technologies. The trainers were knowledgeable, supportive, and always encouraged us to learn beyond the classroom. The placement support and interview guidance were outstanding. It was truly a career-changing experience for me.",
      },
      {
        name: "Ajinkya",
        domain: "PySpark & Big Data",
        placedRole: "Senior Data Engineer",
        company: "LTI Mindtree",
        package: "16 LPA",
        image: "/placements/placement_5_ajinkya.jpeg",
        skills: "PySpark, Databricks, SQL, Big Data",
        category: "pyspark_bigdata",
        isFeatured: false,

        testimonial: "I joined JVM Institute to upgrade my technical skills and improve my career prospects. The curriculum covered everything from SQL and Python to Cloud and Big Data technologies. The trainers were knowledgeable, supportive, and always encouraged us to learn beyond the classroom. The placement support and interview guidance were outstanding. It was truly a career-changing experience for me",
      },
      {
        name: "Nikhil",
        domain: "Data Engineering",
        placedRole: "Senior Software Engineer",
        company: "Prodapt",
        package: "11 LPA",
        image: "/placements/placement_6_nikhil.jpeg",
        skills: "Python, SQL, PySpark, Real-time Projects",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I am extremely grateful to JVM Institute for helping me achieve this milestone in my career. The practical training, real-time projects, and continuous mentorship played a crucial role in enhancing my technical skills. The trainers were always supportive and guided me throughout the learning journey. The mock interviews and placement assistance boosted my confidence and prepared me for opportunities in top companies. Thanks to JVM Institute, I successfully received offers from Prodapt (11 LPA) and Senzcraft (10 LPA). I highly recommend JVM Institute to anyone looking to build a successful career in the IT industry",
      },
      {
        name: "Satyajeet",
        domain: "Cloud & Snowflake",
        placedRole: "Lead Software Engineer",
        company: "Persistent",
        package: "13.20 LPA",
        image: "/placements/placement_7_satyajeet.png",
        skills: "SQL, Python, AWS, PySpark",
        category: "cloud_snowflake",
        isFeatured: false,

        testimonial: "After spending several years in the preparing for goverment exams, I wanted a career with better growth opportunities. JVM Institute helped me learn industry-relevant technologies such as SQL, Python, AWS, and PySpark. The trainers provided personal attention and cleared every doubt patiently. The practical assignments and placement support made a huge difference. I successfully switched from Banking to IT and started my Data Engineering career.",
      },
      {
        name: "Rohini",
        domain: "Data Engineering",
        placedRole: "Lead Software Engineer",
        company: "Persistent",
        package: "13.66 LPA",
        image: "/placements/placement_8_rohini.jpeg",
        skills: "Python, SQL, PySpark, AWS",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "Coming from a non-IT background, I always dreamed of building a successful career in the technology industry but wasn't sure where to begin. JVM Institute provided me with the right guidance, structured learning path, and practical exposure through real-time projects. The trainers were incredibly supportive and helped me understand complex concepts in a simple way. The mock interviews, resume preparation, and continuous mentorship boosted my confidence and made me industry-ready. With the skills and knowledge gained at JVM Institute, I successfully secured a position as a Lead Software Engineer at Persistent with a package of 13.66 LPA. I am truly grateful to JVM Institute for helping me transform my career and achieve this milestone",
      },
      {
        name: "Rahul",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Anchanto",
        package: "10 LPA",
        image: "/placements/placement_9_rahul.jpeg",
        skills: "Python, SQL, ETL, Data Pipelines",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "Coming from an Non IT background, I had limited technical knowledge. JVM Institute helped me understand Data Engineering concepts from scratch through hands-on learning and real-world projects. The trainers focused on practical implementation rather than just theory. The placement support and mock interviews played a huge role in my success. Thanks to JVM Institute, I was able to make a successful career transition into IT.",
      },
      {
        name: "Ankit",
        domain: "Cloud & Snowflake",
        placedRole: "Senior Consultant",
        company: "Mindcraft",
        package: "12.75 LPA",
        image: "/placements/placement_10_ankit.png",
        skills: "SQL, Python, Cloud, Data Engineering",
        category: "cloud_snowflake",
        isFeatured: false,

        testimonial: "My experience with JVM Institute was fantastic. The trainers not only taught technical concepts but also guided us on resume building and interview preparation. The hands-on assignments and projects strengthened my practical knowledge. The supportive learning environment kept me motivated throughout the course. Thanks to JVM Institute, I was able to achieve my career goals successfully.",
      },
      {
        name: "Vaishnavi",
        domain: "Data Engineering",
        placedRole: "Technical Lead",
        company: "HCL Tech",
        package: "11 LPA",
        image: "/placements/placement_11_vaishnavi.png",
        skills: "Python, SQL, PySpark, AWS",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I came from a non-IT background with a strong desire to build a career in technology. JVM Institute helped me bridge the gap with hands-on training, practical assignments, and expert mentorship. The trainers focused on real-world scenarios and ensured that every concept was understood thoroughly. The placement support and mock interviews prepared me to confidently face recruitment challenges. Thanks to JVM Institute, I successfully secured a Technical Lead position at HCLTech with a package of 11 LPA. This achievement would not have been possible without their guidance and support.",
      },
      {
        name: "Pooja",
        domain: "Data Engineering",
        placedRole: "Developer",
        company: "Wipro",
        package: "12 LPA",
        image: "/placements/placement_12_pooja.jpeg",
        skills: "SQL, Python, ETL, Data Engineering",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "entering the software industry seemed challenging at first. JVM Institute's structured training program and practical learning approach made the transition smooth and achievable. The trainers patiently guided me through every concept and provided constant support throughout the course. The interview preparation sessions and real-world projects helped me develop the skills required by top companies. Today, I am proud to have secured a Developer role at Wipro with a package of 12 LPA. I sincerely thank JVM Institute for helping me build a successful IT career.",
      },
      {
        name: "Kartik",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Code Chavo",
        package: "11 LPA",
        image: "/placements/placement_13_kartik.jpeg",
        skills: "SQL, Python, PySpark, Cloud Technologies",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "Coming from a non-IT background, I was uncertain about how to start my journey in the technology field. JVM Institute provided me with the right guidance, practical training, and industry-focused learning. The trainers helped me build a strong foundation in SQL, Python, PySpark, and Cloud technologies through real-time projects. The mock interviews and placement support significantly improved my confidence. With the continuous mentorship from JVM Institute, I successfully secured a Data Engineer position at CodeChavo with a package of 11 LPA. I am thankful to JVM Institute for helping me achieve this career transformation.",
      },
      {
        name: "Jayshree",
        domain: "Data Engineering",
        placedRole: "Senior Consultant",
        company: "EY",
        package: "13.5 LPA",
        image: "/placements/placement_14_jayshree.jpeg",
        skills: "SQL, Python, PySpark, AWS, Azure, Big Data",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I come from a non-IT background and was looking for a way to build a career in the IT industry. After joining JVM Institute's Data Engineering course, my journey completely changed. The trainers explained every concept from the basics, making it easy for me to understand technologies like SQL, Python, Big Data, AWS, Azure, and PySpark. The live classes, daily assignments, mock interviews, and continuous support helped me gain confidence and improve my technical skills. Today, I have successfully transitioned into the IT field.",
      },
      {
        name: "Aarti Shinde",
        domain: "Software Development",
        placedRole: "Senior Software Developer",
        company: "HCL Tech",
        package: "11 LPA",
        image: "/placements/placement_15_aarti.png",
        skills: "SQL, Python, PySpark, Cloud Platforms",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I joined JVM Institute to upgrade my skills and stay updated with the latest industry technologies. The training was practical, well-structured, and focused on real-world applications. The trainers were highly knowledgeable and always ready to help with doubts. The hands-on assignments and mock interviews helped me improve both my technical and professional skills. I gained confidence in technologies like SQL, Python, PySpark, and Cloud platforms.",
      },
      {
        name: "Ishika Pandit",
        domain: "IT Consulting",
        placedRole: "Consultant",
        company: "Capco",
        package: "11.5 LPA",
        image: "/placements/placement_16_ishika.jpeg",
        skills: "SQL, Python, Data Engineering, Analytics",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "JVM Institute has been a great platform for enhancing my technical skills. The course content is up-to-date, and the trainers explain concepts with real-world examples. The learning environment is supportive, and the regular practice sessions helped me improve significantly. Thank you JVM Institute for helping me take my skills to the next level.",
      },
      {
        name: "Pruthviraj",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Dataeaze",
        package: "11.60 LPA",
        image: "/placements/placement_17_pruthviraj.jpeg",
        skills: "SQL, Python, PySpark, Cloud, ETL",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "As a non-IT student, I was initially worried about entering the IT industry. However, JVM Institute provided excellent training and continuous support at every step. The trainers were knowledgeable, patient, and always ready to help. The practical approach to learning helped me understand concepts quickly. The mock interviews and placement assistance were extremely valuable.",
      },
      {
        name: "Shreyas",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Tiger Analytics",
        package: "15 LPA",
        image: "/placements/placement_18_shreyas.jpeg",
        skills: "SQL, Python, PySpark, AWS, Azure, GCP",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I joined JVM Institute to upgrade my skills and stay updated with the latest technologies in Data Engineering. The course covered SQL, Python, PySpark, AWS, Azure, and GCP in a practical way with hands-on projects and real-time examples. The trainers were highly supportive and always available to clear doubts. Thanks to JVM Institute, I have significantly improved my skills.",
      },
      {
        name: "Kamran Shaikh",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Impetus",
        package: "12.5 LPA",
        image: "/placements/placement_19_kamran.png",
        skills: "SQL, Python, PySpark, Data Pipelines",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "To advance my career, I wanted to upgrade my skills, and JVM Institute exceeded my expectations. The training sessions were interactive, practical, and highly informative. The trainers were always available to guide and motivate us. I gained valuable knowledge and confidence that will help me in my professional journey. Highly recommended for skill enhancement.",
      },
      {
        name: "Shilpa Shinde",
        domain: "IT Consulting",
        placedRole: "Consultant",
        company: "Capgemini",
        package: "14 LPA",
        image: "/placements/placement_20_shilpa.jpeg",
        skills: "SQL, Python, PySpark, Cloud",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "JVM Institute is a great place for professionals who want to upgrade their skills. The course content is relevant to current industry requirements, and the trainers provide excellent mentorship. The hands-on approach to learning helped me gain confidence and practical knowledge. I am grateful for the support and guidance provided by the entire team.",
      },
      {
        name: "Sanket Pawar",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Programming.Com",
        package: "12 LPA",
        image: "/placements/placement_21_sanket.jpeg",
        skills: "SQL, Python, PySpark, AWS, Azure",
        category: "data_engineering",
        isFeatured: false,

        testimonial: "I joined JVM Institute to upgrade my skills and strengthen my knowledge in Data Engineering. The trainers provided excellent guidance, practical learning, and continuous support throughout the course. The hands-on assignments, mock interviews, and real-time scenarios helped me build confidence and improve my technical skills. The placement support was outstanding.",
      },
      {
        name: "Saurabh Kumatkar",
        domain: "Data Engineering",
        placedRole: "Data Engineer",
        company: "Lumiq",
        package: "13.50 LPA",
        image: "/placements/placement_22_saurabh.jpeg",
        skills: "SQL, Python, PySpark, ETL, Cloud",
        category: "data_engineering",
        isFeatured: true,
        testimonial: "JVM Institute helped me bridge my skill gap and gain hands-on experience with industry-relevant tools and technologies. The trainers are experienced, supportive, and dedicated to student success. The training improved my confidence and technical abilities. Thank you JVM Institute for this wonderful learning experience.",
      },
    ],
  });


  // Seed Courses
  await prisma.course.deleteMany();
  await prisma.course.createMany({
    data: [
      {
        slug: "data-engineering-master-program",
        title: "Data Engineering Master Program (PySpark & Databricks)",
        shortDescription: "Complete hands-on Data Engineering course covering Python, SQL, PySpark, Databricks, Snowflake & AWS.",
        fullDescription: "Master real-time data streaming, cloud data warehousing, and ETL pipeline building with 100% placement support.",
        duration: "6 Months",
        mode: "Online & Classroom (Karve Nagar, Pune)",
        fullFee: 45000,
        advanceFee: 5000,
        isFeatured: true,
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
