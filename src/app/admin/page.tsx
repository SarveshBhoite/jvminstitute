"use client";

import React, { useState, useEffect } from "react";
import { 
  Lock, 
  Mail, 
  KeyRound, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  DollarSign, 
  LogOut, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Gift,
  ArrowRight,
  Plus,
  Trash2,
  Briefcase,
  Building2,
  GraduationCap,
  Layers,
  Upload,
  Image as ImageIcon,
  Edit,
  X,
  Sun,
  Moon,
  Maximize2,
  Minimize2
} from "lucide-react";

interface PlacementRecord {
  id: string;
  name: string;
  domain: string;
  placedRole: string;
  company: string;
  package: string;
  skills: string;
  image: string;
  category: string;
  isFeatured?: boolean;
  testimonial?: string;
  createdAt?: string;
}

interface BlogRecord {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string;
  featured: boolean;
  contentJson: string;
  createdAt?: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  
  // Login Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [adminUser, setAdminUser] = useState<{ fullName?: string; email?: string; role?: string } | null>(null);

  // Active Tab: "placements" | "blogs" | "studies" | "unlocks" | "leads" | "referrals"
  const [activeTab, setActiveTab] = useState<"placements" | "blogs" | "studies" | "unlocks" | "leads" | "referrals">("placements");

  // Referral Reward Setting State
  const [referralRewardSetting, setReferralRewardSetting] = useState<number>(2000);
  const [savingReferralSetting, setSavingReferralSetting] = useState(false);

  // Leads & Form Submissions state
  const [leads, setLeads] = useState<any[]>([]);

  // Course Purchases / Unlocks state
  const [courseUnlocks, setCourseUnlocks] = useState<any[]>([]);

  // Study Materials state
  const [studyCourses, setStudyCourses] = useState<any[]>([]);
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [savingCourse, setSavingCourse] = useState(false);
  
  // Selected course for editing modules
  const [selectedCourseForModules, setSelectedCourseForModules] = useState<any | null>(null);
  const [isAddingModule, setIsAddingModule] = useState(false);
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);
  const [savingModule, setSavingModule] = useState(false);

  // Course Form
  const [courseFormData, setCourseFormData] = useState({
    title: "",
    description: "",
    subject: "Data Engineering",
    badge: "Popular",
    price: 499,
    freeModulesCount: 1,
    coverImage: "/course.jpg",
  });

  // Module Form
  const [moduleFormData, setModuleFormData] = useState({
    moduleNumber: 1,
    title: "",
    description: "",
    readTime: "10 min read",
    contentHtml: "<h3>Module Header</h3>\n<p>Enter module HTML content here...</p>",
  });

  // HTML Preview mode & Theme
  const [htmlPreviewTab, setHtmlPreviewTab] = useState<"edit" | "preview">("edit");
  const [previewThemeMode, setPreviewThemeMode] = useState<"dark" | "light">("dark");
  const [isFullScreenEditor, setIsFullScreenEditor] = useState<boolean>(false);

  // Helper function to auto-format and pretty-indent HTML tags
  const formatHtmlContent = (htmlString: string): string => {
    if (!htmlString) return "";
    let formatted = "";
    let indent = "";
    const tab = "  ";

    // Split HTML by tags
    const tokens = htmlString.replace(/>\s*</g, "><").replace(/(<[^\/>]+?>)/g, "\n$1").replace(/(<\/[^>]+?>)/g, "\n$1").split("\n");

    tokens.forEach((token) => {
      token = token.trim();
      if (!token) return;

      if (token.match(/^<\/[^>]+>/)) {
        // Closing tag -> decrease indent
        indent = indent.substring(tab.length);
        formatted += indent + token + "\n";
      } else if (token.match(/^<[^\/>]+>/) && !token.match(/<(img|hr|br|input|link|meta)/i)) {
        // Opening tag -> increase indent
        formatted += indent + token + "\n";
        indent += tab;
      } else {
        // Self-closing or text node
        formatted += indent + token + "\n";
      }
    });

    return formatted.trim();
  };


  // Placements Management state
  const [placements, setPlacements] = useState<PlacementRecord[]>([]);
  const [isAddingPlacement, setIsAddingPlacement] = useState(false);
  const [editingPlacementId, setEditingPlacementId] = useState<string | null>(null);
  const [savingPlacement, setSavingPlacement] = useState(false);
  const [placementSuccessMsg, setPlacementSuccessMsg] = useState("");
  const [uploadingPlacementImg, setUploadingPlacementImg] = useState(false);

  // New / Edit placement form fields
  const [formData, setFormData] = useState({
    name: "",
    domain: "Data Engineering",
    placedRole: "",
    company: "",
    package: "",
    skills: "",
    image: "/place1.png",
    category: "data_engineering",
    isFeatured: true,
    testimonial: "",
  });

  // Blog Management state
  const [blogs, setBlogs] = useState<BlogRecord[]>([]);
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [savingBlog, setSavingBlog] = useState(false);
  const [blogSuccessMsg, setBlogSuccessMsg] = useState("");
  const [uploadingBlogImg, setUploadingBlogImg] = useState(false);

  // New blog form fields
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    metaTitle: "",
    slug: "",
    excerpt: "",
    longDescriptionHtml: "",
    category: "Data Engineering",
    authorName: "JVM Technical Team",
    authorRole: "Senior Data Architect @ JVM",
    authorAvatar: "/anand.png",
    publishedAt: "Aug 2026",
    readTime: "5 min read",
    image: "/course.jpg",
    tags: "Data Engineering, Python, PySpark, SQL",
    featured: false,
    contentJson: "",
  });

  useEffect(() => {
    checkAdminSession();
  }, []);

  const checkAdminSession = async () => {
    try {
      const res = await fetch("/api/admin/auth/me");
      const data = await res.json();
      if (data.success && data.data?.admin) {
        setIsAuthenticated(true);
        setAdminUser(data.data.admin);
        fetchPlacements();
        fetchBlogs();
        fetchStudyCourses();
        fetchCourseUnlocks();
        fetchLeads();
        fetchReferralSetting();
      }
    } catch {
      // not logged in
    } finally {
      setCheckingAuth(false);
    }
  };

  const fetchReferralSetting = async () => {
    try {
      const res = await fetch("/api/referrals/settings");
      const data = await res.json();
      if (data.success && typeof data.rewardAmount === "number") {
        setReferralRewardSetting(data.rewardAmount);
      }
    } catch (err) {
      console.error("Failed to fetch referral setting:", err);
    }
  };

  const handleUpdateReferralSetting = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingReferralSetting(true);
    try {
      const res = await fetch("/api/referrals/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rewardAmount: referralRewardSetting }),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Referral reward amount updated successfully!");
      } else {
        alert(data.error || "Failed to update referral reward amount");
      }
    } catch (err) {
      alert("Error updating setting: " + err);
    } finally {
      setSavingReferralSetting(false);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch leads", err);
    }
  };

  const fetchCourseUnlocks = async () => {
    try {
      const res = await fetch("/api/admin/unlocks");
      const data = await res.json();
      if (data.success) {
        setCourseUnlocks(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch course unlocks", err);
    }
  };

  const fetchPlacements = async () => {
    try {
      const res = await fetch("/api/admin/placements");
      const data = await res.json();
      if (data.success) {
        setPlacements(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch placements", err);
    }
  };

  const fetchStudyCourses = async () => {
    try {
      const res = await fetch("/api/study-materials/courses");
      const data = await res.json();
      if (data.success) {
        setStudyCourses(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch study courses", err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/admin/blogs");
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingCourse(true);
    try {
      const url = editingCourseId ? `/api/study-materials/courses/${editingCourseId}` : "/api/study-materials/courses";
      const method = editingCourseId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseFormData),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddingCourse(false);
        setEditingCourseId(null);
        fetchStudyCourses();
      } else {
        alert(data.message || "Failed to save course");
      }
    } catch (err) {
      alert("Error saving study course: " + err);
    } finally {
      setSavingCourse(false);
    }
  };

  const handleModuleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseForModules) return;
    setSavingModule(true);
    try {
      const res = await fetch(`/api/study-materials/courses/${selectedCourseForModules.id}/modules`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...moduleFormData,
          moduleId: editingModuleId,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddingModule(false);
        setEditingModuleId(null);
        fetchStudyCourses();
        // Refresh selected course
        const updatedRes = await fetch("/api/study-materials/courses");
        const updatedData = await updatedRes.json();
        if (updatedData.success) {
          const fresh = updatedData.data.find((c: any) => c.id === selectedCourseForModules.id);
          if (fresh) setSelectedCourseForModules(fresh);
        }
      } else {
        alert(data.message || "Failed to save module");
      }
    } catch (err) {
      alert("Error saving module: " + err);
    } finally {
      setSavingModule(false);
    }
  };


  // Helper for Cloudinary Image Upload
  const uploadToCloudinary = async (file: File, folderName: string): Promise<string | null> => {
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("folder", folderName);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body,
      });

      const data = await res.json();
      if (res.ok && data.success && data.data?.url) {
        return data.data.url;
      } else {
        alert(data.message || "Failed to upload image to Cloudinary.");
        return null;
      }
    } catch (err) {
      alert("Image upload error: " + err);
      return null;
    }
  };

  const handlePlacementImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPlacementImg(true);
    const url = await uploadToCloudinary(file, "placements");
    if (url) {
      setFormData((prev) => ({ ...prev, image: url }));
    }
    setUploadingPlacementImg(false);
  };

  const handleBlogImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingBlogImg(true);
    const url = await uploadToCloudinary(file, "blogs");
    if (url) {
      setBlogFormData((prev) => ({ ...prev, image: url }));
    }
    setUploadingBlogImg(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Invalid credentials. Please try again.");
        setLoading(false);
        return;
      }

      setIsAuthenticated(true);
      setAdminUser(data.data?.admin || { fullName: "JVM Super Admin", email, role: "SUPER_ADMIN" });
      fetchPlacements();
      fetchBlogs();
      fetchStudyCourses();
      fetchCourseUnlocks();
      fetchLeads();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    document.cookie = "jvm_admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    setIsAuthenticated(false);
    setAdminUser(null);
  };

  const handleEditPlacement = (p: PlacementRecord) => {
    setEditingPlacementId(p.id);
    setIsAddingPlacement(true);
    setFormData({
      name: p.name || "",
      domain: p.domain || "Data Engineering",
      placedRole: p.placedRole || "",
      company: p.company || "",
      package: p.package || "",
      skills: p.skills || "",
      image: p.image || "/place1.png",
      category: p.category || "data_engineering",
      isFeatured: p.isFeatured !== false,
      testimonial: p.testimonial || "",
    });
  };

  const handleToggleFeaturedPlacement = async (p: PlacementRecord) => {
    const updatedFeatured = !p.isFeatured;
    try {
      const res = await fetch(`/api/admin/placements/${p.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...p,
          isFeatured: updatedFeatured,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPlacements((prev) =>
          prev.map((item) => (item.id === p.id ? { ...item, isFeatured: updatedFeatured } : item))
        );
      } else {
        alert(data.message || "Failed to update featured status");
      }
    } catch (err) {
      alert("Error updating featured status: " + err);
    }
  };

  const handleAddPlacementSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingPlacement(true);
    setPlacementSuccessMsg("");

    try {
      const url = editingPlacementId ? `/api/admin/placements/${editingPlacementId}` : "/api/admin/placements";
      const method = editingPlacementId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || `Failed to ${editingPlacementId ? "update" : "add"} placement student record.`);
        setSavingPlacement(false);
        return;
      }

      setPlacementSuccessMsg(`✅ Placed student ${editingPlacementId ? "updated" : "added"} successfully to database & live website!`);
      setIsAddingPlacement(false);
      setEditingPlacementId(null);
      setFormData({
        name: "",
        domain: "Data Engineering",
        placedRole: "",
        company: "",
        package: "",
        skills: "",
        image: "/place1.png",
        category: "data_engineering",
        isFeatured: true,
        testimonial: "",
      });
      fetchPlacements();
    } catch (err) {
      alert("Error saving placement student record: " + err);
    } finally {
      setSavingPlacement(false);
    }
  };

  const handleDeletePlacement = async (id: string) => {
    if (!confirm("Are you sure you want to remove this placement record?")) return;

    try {
      const res = await fetch(`/api/admin/placements/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        setPlacements((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert(data.message || "Failed to delete placement record");
      }
    } catch (err) {
      alert("Delete error: " + err);
    }
  };

  const handleEditBlog = (blog: BlogRecord) => {
    setEditingBlogId(blog.id);
    setIsAddingBlog(true);
    setBlogFormData({
      title: blog.title || "",
      metaTitle: (blog as any).metaTitle || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      longDescriptionHtml: (blog as any).longDescriptionHtml || "",
      category: blog.category || "Data Engineering",
      authorName: blog.authorName || "JVM Technical Team",
      authorRole: blog.authorRole || "Senior Data Architect @ JVM",
      authorAvatar: blog.authorAvatar || "/anand.png",
      publishedAt: blog.publishedAt || "Aug 2026",
      readTime: blog.readTime || "5 min read",
      image: blog.image || "/course.jpg",
      tags: blog.tags || "Data Engineering, Python, PySpark, SQL",
      featured: blog.featured || false,
      contentJson: blog.contentJson || "",
    });
  };

  // Handle Add / Edit Blog Post
  const handleAddBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingBlog(true);
    setBlogSuccessMsg("");

    // Auto generate slug if empty
    const slug = blogFormData.slug || blogFormData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const payload = {
      ...blogFormData,
      slug,
      contentJson: blogFormData.contentJson || JSON.stringify([
        {
          sectionId: "introduction",
          paragraphs: [blogFormData.excerpt, "Explore technical architecture details and live engineering code examples."]
        }
      ])
    };

    try {
      const url = editingBlogId ? `/api/admin/blogs/${editingBlogId}` : "/api/admin/blogs";
      const method = editingBlogId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || `Failed to ${editingBlogId ? "update" : "publish"} blog post.`);
        setSavingBlog(false);
        return;
      }

      setBlogSuccessMsg(`✅ Technical Blog ${editingBlogId ? "updated" : "published"} successfully to database & live website!`);
      setIsAddingBlog(false);
      setEditingBlogId(null);
      setBlogFormData({
        title: "",
        metaTitle: "",
        slug: "",
        excerpt: "",
        longDescriptionHtml: "",
        category: "Data Engineering",
        authorName: "JVM Technical Team",
        authorRole: "Senior Data Architect @ JVM",
        authorAvatar: "/anand.png",
        publishedAt: "Aug 2026",
        readTime: "5 min read",
        image: "/course.jpg",
        tags: "Data Engineering, Python, PySpark, SQL",
        featured: false,
        contentJson: "",
      });
      fetchBlogs();
    } catch (err) {
      alert("Error saving blog post: " + err);
    } finally {
      setSavingBlog(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        setBlogs((prev) => prev.filter((b) => b.id !== id));
      } else {
        alert(data.message || "Failed to delete blog post");
      }
    } catch (err) {
      alert("Delete error: " + err);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex items-center justify-center">
        <div className="flex items-center gap-3 font-bold px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-xl">
          <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-slate-800 text-sm font-extrabold">Verifying Admin Access...</span>
        </div>
      </div>
    );
  }

  // --- 1. LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] bg-[#FAFAFC] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-14 h-14 jvm-gradient-bg rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              JVM Admin Portal
            </h1>
            <p className="text-xs text-slate-500">
              Sign in with your administrator credentials to access the management dashboard.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="infojvminstitute@gmail.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 jvm-gradient-bg hover:opacity-95 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              Admin Login: <code className="text-purple-600 font-mono font-bold">infojvminstitute@gmail.com</code> | Pass: <code className="text-purple-600 font-mono font-bold">Jvm123</code>
            </p>
          </div>

        </div>
      </div>
    );
  }

  // --- 2. ADMIN DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        {!selectedCourseForModules && (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white border border-slate-200 p-6 rounded-3xl backdrop-blur-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl jvm-gradient-bg flex items-center justify-center text-white font-black text-xl shadow-md">
                A
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl md:text-2xl font-black text-slate-900">
                    JVM Admin Control Panel
                  </h1>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Authenticated
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Logged in as <span className="text-purple-700 font-semibold">{adminUser?.email || "Super Admin"}</span> ({adminUser?.role || "SUPER_ADMIN"})
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200 hover:border-red-200 text-xs font-bold transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        )}

        {/* Quick Stats Grid */}
        {!selectedCourseForModules && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Total Placements</span>
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900">{placements.length} Placed</div>
              <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Live DB Records
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Blog Posts</span>
                <div className="p-2 bg-purple-50 text-purple-700 rounded-xl">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900">{blogs.length} Published</div>
              <p className="text-[11px] text-purple-700 font-semibold">Technical Articles</p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Lead Enquiries</span>
                <div className="p-2 bg-pink-50 text-pink-700 rounded-xl">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900">{leads.length} Enquiries</div>
              <p className="text-[11px] text-purple-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Website Form Submissions
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Course Unlocks</span>
                <div className="p-2 bg-amber-50 text-amber-700 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900">{courseUnlocks.length} Unlocked</div>
              <p className="text-[11px] text-emerald-700 font-semibold">Paid Student Unlocks</p>
            </div>
          </div>
        )}

        {/* --- MANAGEMENT NAVIGATION TABS --- */}
        {!selectedCourseForModules && (
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("placements")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "placements"
                  ? "jvm-gradient-bg text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Placed Students ({placements.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "blogs"
                  ? "jvm-gradient-bg text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Technical Blogs ({blogs.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("studies");
                fetchStudyCourses();
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "studies"
                  ? "jvm-gradient-bg text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Study Materials ({studyCourses.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("leads");
                fetchLeads();
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "leads"
                  ? "jvm-gradient-bg text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Form Enquiries ({leads.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("unlocks");
                fetchCourseUnlocks();
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "unlocks"
                  ? "jvm-gradient-bg text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Student Unlocks ({courseUnlocks.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("referrals");
                fetchReferralSetting();
                fetchLeads();
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "referrals"
                  ? "jvm-gradient-bg text-white shadow-md"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Gift className="w-4 h-4 text-amber-500" />
              <span>Referrals ({leads.filter((l) => l.referralCode).length})</span>
            </button>
          </div>
        )}


        {/* --- SECTION A: PLACEMENT MANAGEMENT --- */}
        {activeTab === "placements" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                    <span>Placed Students Management</span>
                  </h2>
                  <span className="bg-purple-100 text-purple-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    Admin Access
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Add new student placement records directly into Neon PostgreSQL database to reflect on the main website wall.
                </p>
              </div>

              <button
                onClick={() => {
                  if (isAddingPlacement) {
                    setIsAddingPlacement(false);
                    setEditingPlacementId(null);
                  } else {
                    setEditingPlacementId(null);
                    setFormData({
                      name: "",
                      domain: "Data Engineering",
                      placedRole: "",
                      company: "",
                      package: "",
                      skills: "",
                      image: "/place1.png",
                      category: "data_engineering",
                      isFeatured: true,
                      testimonial: "",
                    });
                    setIsAddingPlacement(true);
                  }
                }}
                className="px-5 py-2.5 rounded-xl jvm-gradient-bg hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingPlacement ? "Cancel Form" : "Add Placed Student"}</span>
              </button>
            </div>

            {placementSuccessMsg && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{placementSuccessMsg}</span>
              </div>
            )}

            {/* Add / Edit Student Placement Form */}
            {isAddingPlacement && (
              <form onSubmit={handleAddPlacementSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>{editingPlacementId ? "Edit Placed Student Details" : "Add Placed Student Details"}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-medium">
                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Student Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Bhoite"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. TCS / Cognizant / Infosys"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Placed Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Associate Data Engineer"
                      value={formData.placedRole}
                      onChange={(e) => setFormData({ ...formData, placedRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Package Offered (LPA)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 8.5 LPA"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Tech Domain</label>
                    <select
                      value={formData.domain}
                      onChange={(e) => {
                        const domainMap: Record<string, string> = {
                          "Data Engineering": "data_engineering",
                          "PySpark & Big Data": "pyspark_bigdata",
                          "Cloud & Snowflake": "cloud_snowflake",
                          "Data Analytics": "data_analytics",
                          "Data Science": "data_science",
                          "AI & Machine Learning": "ai_ml"
                        };
                        setFormData({ 
                          ...formData, 
                          domain: e.target.value,
                          category: domainMap[e.target.value] || "data_engineering"
                        });
                      }}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                    >
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="PySpark & Big Data">PySpark & Big Data</option>
                      <option value="Cloud & Snowflake">Cloud & Snowflake</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Data Science">Data Science</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Core Tech Skills</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PySpark, Databricks, AWS Glue, SQL"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-semibold"
                    />
                  </div>

                  {/* Cloudinary Student Photo Upload Component */}
                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1 flex items-center justify-between">
                      <span>Student Photo</span>
                      <span className="text-[10px] text-purple-600 font-bold">Cloudinary Direct Upload</span>
                    </label>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="flex-1 px-3 py-2 bg-white border border-dashed border-purple-300 rounded-xl cursor-pointer hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 text-purple-700 font-bold">
                          <Upload className="w-4 h-4" />
                          <span>{uploadingPlacementImg ? "Uploading..." : "Upload Image to Cloudinary"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePlacementImageUpload}
                            disabled={uploadingPlacementImg}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {formData.image && (
                        <div className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-xl">
                          <ImageIcon className="w-4 h-4 text-purple-600 shrink-0" />
                          <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full bg-transparent text-[11px] text-slate-700 focus:outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Featured Placement Switch Toggle */}
                  <div className="sm:col-span-3 bg-white border border-slate-200 p-3.5 rounded-xl flex items-center justify-between shadow-xs">
                    <div>
                      <label className="text-slate-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Featured Placement (Display Live on Homepage Slideshow)</span>
                      </label>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        When enabled, this student profile will be included in the homepage slideshow carousel.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      className="w-5 h-5 accent-purple-600 rounded cursor-pointer"
                    />
                  </div>

                  {/* Student Testimonial / Review / Advice */}
                  <div className="sm:col-span-3">
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">
                      Student Testimonial / Review / Advice
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Coming from a non-IT background, I was unsure about switching careers..."
                      value={formData.testimonial}
                      onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingPlacement(false);
                      setEditingPlacementId(null);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingPlacement || uploadingPlacementImg}
                    className="px-6 py-2.5 rounded-xl jvm-gradient-bg text-white text-xs font-bold shadow-md hover:opacity-95 disabled:opacity-50 cursor-pointer"
                  >
                    {savingPlacement ? "Saving..." : editingPlacementId ? "Update Placed Student" : "Save Placed Student"}
                  </button>
                </div>
              </form>
            )}

            {/* Admin Placements Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase font-extrabold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Student Name</th>
                    <th className="p-3.5">Company</th>
                    <th className="p-3.5">Placed Role</th>
                    <th className="p-3.5">Package</th>
                    <th className="p-3.5">Domain</th>
                    <th className="p-3.5 text-center">Featured (Homepage)</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {placements.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-6 text-center text-slate-500 font-medium">
                        No placement records in database yet. Click &quot;Add Placed Student&quot; above to insert records.
                      </td>
                    </tr>
                  ) : (
                    placements.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">
                            {p.name.charAt(0)}
                          </div>
                          <span>{p.name}</span>
                        </td>
                        <td className="p-3.5 font-semibold text-slate-800">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-purple-600" /> {p.company}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-600">{p.placedRole}</td>
                        <td className="p-3.5 font-bold text-emerald-600">{p.package}</td>
                        <td className="p-3.5">
                          <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-md font-semibold">
                            {p.domain}
                          </span>
                        </td>
                        <td className="p-3.5 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggleFeaturedPlacement(p)}
                            className={`px-3 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1 mx-auto transition-all cursor-pointer ${
                              p.isFeatured !== false
                                ? "bg-amber-100 text-amber-800 border border-amber-300 shadow-xs"
                                : "bg-slate-100 text-slate-400 border border-slate-200"
                            }`}
                            title="Toggle Homepage Slideshow Visibility"
                          >
                            <Sparkles className="w-3 h-3" />
                            {p.isFeatured !== false ? "Featured (ON)" : "OFF"}
                          </button>
                        </td>
                        <td className="p-3.5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEditPlacement(p)}
                              className="p-1.5 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                              title="Edit Placement"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePlacement(p.id)}
                              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                              title="Delete Placement"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* --- SECTION B: BLOG MANAGEMENT --- */}
        {activeTab === "blogs" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-purple-600" />
                    <span>Technical Blog Management</span>
                  </h2>
                  <span className="bg-purple-100 text-purple-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    Admin Publisher
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Create and publish technical articles, PySpark playbooks, and cloud architecture guides to the main website blog.
                </p>
              </div>

              <button
                onClick={() => setIsAddingBlog(!isAddingBlog)}
                className="px-5 py-2.5 rounded-xl jvm-gradient-bg hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingBlog ? "Cancel Form" : "Create New Blog Post"}</span>
              </button>
            </div>

            {blogSuccessMsg && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{blogSuccessMsg}</span>
              </div>
            )}

            {/* Add Blog Post Form */}
            {isAddingBlog && (
              <form onSubmit={handleAddBlogSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>{editingBlogId ? "Edit Technical Article" : "Publish New Technical Article"}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-medium">
                  <div className="sm:col-span-2">
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Article Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. How to Optimize PySpark Join Performance on Databricks"
                      value={blogFormData.title}
                      onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Meta Title (SEO)</label>
                    <input
                      type="text"
                      placeholder="SEO Meta Title (Defaults to Article Title)"
                      value={blogFormData.metaTitle}
                      onChange={(e) => setBlogFormData({ ...blogFormData, metaTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Blog Category</label>
                    <select
                      value={blogFormData.category}
                      onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    >
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="AI & ML">AI & ML</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Career Guidance">Career Guidance</option>
                      <option value="Tutorials">Tutorials</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Short Description (Excerpt)</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Write a concise short description of the post..."
                      value={blogFormData.excerpt}
                      onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Long Description (HTML Format)</label>
                    <textarea
                      rows={6}
                      placeholder="<p>Enter detailed HTML content here...</p><h2>Subheading</h2><p>Additional paragraph details...</p>"
                      value={blogFormData.longDescriptionHtml}
                      onChange={(e) => setBlogFormData({ ...blogFormData, longDescriptionHtml: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Author Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohit Sharma / JVM Admin"
                      value={blogFormData.authorName}
                      onChange={(e) => setBlogFormData({ ...blogFormData, authorName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Author Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lead Data Engineering Architect @ JVM"
                      value={blogFormData.authorRole}
                      onChange={(e) => setBlogFormData({ ...blogFormData, authorRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Read Time</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 6 min read"
                      value={blogFormData.readTime}
                      onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Tags (Comma Separated)</label>
                    <input
                      type="text"
                      placeholder="e.g. PySpark, Databricks, AWS, SQL"
                      value={blogFormData.tags}
                      onChange={(e) => setBlogFormData({ ...blogFormData, tags: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Cloudinary Cover Image Upload Component */}
                  <div>
                    <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1 flex items-center justify-between">
                      <span>Cover Image</span>
                      <span className="text-[10px] text-purple-600 font-bold">Cloudinary Direct Upload</span>
                    </label>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="flex-1 px-3 py-2 bg-white border border-dashed border-purple-300 rounded-xl cursor-pointer hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 text-purple-700 font-bold">
                          <Upload className="w-4 h-4" />
                          <span>{uploadingBlogImg ? "Uploading..." : "Upload Cover Image"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleBlogImageUpload}
                            disabled={uploadingBlogImg}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {blogFormData.image && (
                        <div className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-xl">
                          <ImageIcon className="w-4 h-4 text-purple-600 shrink-0" />
                          <input
                            type="text"
                            value={blogFormData.image}
                            onChange={(e) => setBlogFormData({ ...blogFormData, image: e.target.value })}
                            className="w-full bg-transparent text-[11px] text-slate-700 focus:outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddingBlog(false);
                      setEditingBlogId(null);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingBlog || uploadingBlogImg}
                    className="px-6 py-2.5 rounded-xl jvm-gradient-bg text-white text-xs font-bold shadow-md hover:opacity-95 disabled:opacity-50 cursor-pointer"
                  >
                    {savingBlog ? (editingBlogId ? "Updating..." : "Publishing...") : (editingBlogId ? "Update Article" : "Publish Article")}
                  </button>
                </div>
              </form>
            )}

            {/* Admin Blogs Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase font-extrabold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Article Title</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Author</th>
                    <th className="p-3.5">Read Time</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-slate-500 font-medium">
                        No admin published blog posts yet. Click &quot;Create New Blog Post&quot; above to publish articles.
                      </td>
                    </tr>
                  ) : (
                    blogs.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 max-w-xs truncate">
                          {b.title}
                        </td>
                        <td className="p-3.5">
                          <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-md font-semibold">
                            {b.category}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-600">{b.authorName}</td>
                        <td className="p-3.5 text-purple-700 font-semibold">{b.readTime}</td>
                        <td className="p-3.5 text-right flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditBlog(b)}
                            className="p-1.5 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                            title="Edit Blog Post"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(b.id)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                            title="Delete Blog Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* --- SECTION C: STUDY MATERIALS & HTML MODULE EDITOR --- */}
        {activeTab === "studies" && (
          <>
            {!selectedCourseForModules ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                      <span>Study Material Courses & HTML Modules Editor</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Create study courses, edit title/price (₹), select free module preview threshold, and manage HTML modules.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsAddingCourse(!isAddingCourse);
                      setEditingCourseId(null);
                      setCourseFormData({
                        title: "",
                        description: "",
                        subject: "Data Engineering",
                        badge: "Popular",
                        price: 499,
                        freeModulesCount: 1,
                        coverImage: "/course.jpg",
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl jvm-gradient-bg hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{isAddingCourse ? "Cancel Course Form" : "Create New Study Course"}</span>
                  </button>
                </div>

                {/* Course Create / Edit Form */}
                {isAddingCourse && (
                  <form onSubmit={handleCourseSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span>{editingCourseId ? "Edit Study Course Details" : "Create New Study Course"}</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-medium">
                      <div className="sm:col-span-2">
                        <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Course Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. PySpark & Apache Spark Architecture Mastery"
                          value={courseFormData.title}
                          onChange={(e) => setCourseFormData({ ...courseFormData, title: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Subject Tag</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. PySpark & Big Data"
                          value={courseFormData.subject}
                          onChange={(e) => setCourseFormData({ ...courseFormData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Course Description</label>
                        <textarea
                          rows={2}
                          required
                          placeholder="Enter description of what students will learn..."
                          value={courseFormData.description}
                          onChange={(e) => setCourseFormData({ ...courseFormData, description: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Unlock Price (₹)</label>
                        <input
                          type="number"
                          required
                          value={courseFormData.price}
                          onChange={(e) => setCourseFormData({ ...courseFormData, price: parseFloat(e.target.value) || 0 })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Free Preview Modules Count</label>
                        <input
                          type="number"
                          required
                          min={0}
                          max={10}
                          value={courseFormData.freeModulesCount}
                          onChange={(e) => setCourseFormData({ ...courseFormData, freeModulesCount: parseInt(e.target.value) || 1 })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-600 uppercase tracking-wider font-bold mb-1">Badge Tag</label>
                        <input
                          type="text"
                          placeholder="e.g. Best Seller / Popular"
                          value={courseFormData.badge}
                          onChange={(e) => setCourseFormData({ ...courseFormData, badge: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddingCourse(false);
                          setEditingCourseId(null);
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={savingCourse}
                        className="px-6 py-2 rounded-xl jvm-gradient-bg text-white text-xs font-bold shadow-md"
                      >
                        {savingCourse ? "Saving..." : editingCourseId ? "Update Course" : "Create Course"}
                      </button>
                    </div>
                  </form>
                )}

                {/* Courses List Table */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Published Study Courses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studyCourses.map((c) => (
                      <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full uppercase">
                              {c.subject}
                            </span>
                            <h4 className="text-lg font-bold text-slate-900 mt-1">{c.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{c.description}</p>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-lg font-black text-emerald-600 block">₹{c.price}</span>
                            <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">{c.freeModulesCount} Free Module(s)</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                          <span className="text-slate-600 font-semibold">{c.modules?.length || 0} Total Modules</span>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setEditingCourseId(c.id);
                                setIsAddingCourse(true);
                                setCourseFormData({
                                  title: c.title,
                                  description: c.description,
                                  subject: c.subject,
                                  badge: c.badge || "Popular",
                                  price: c.price,
                                  freeModulesCount: c.freeModulesCount,
                                  coverImage: c.coverImage || "/course.jpg",
                                });
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                              title="Edit Course Details (Title, Price, Description)"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setSelectedCourseForModules(c);
                                setIsAddingModule(false);
                                setEditingModuleId(null);
                              }}
                              className="px-3.5 py-2 rounded-xl jvm-gradient-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:opacity-95"
                            >
                              <BookOpen className="w-3.5 h-3.5" /> Open Course Workspace
                            </button>
                            <button
                              onClick={async () => {
                                if (confirm("Delete this course and all its modules?")) {
                                  await fetch(`/api/study-materials/courses/${c.id}`, { method: "DELETE" });
                                  fetchStudyCourses();
                                }
                              }}
                              className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* DEDICATED FULL PAGE WORKSPACE VIEW FOR SELECTED COURSE MODULES */
              <div className="space-y-6 animate-fade-in bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedCourseForModules(null);
                        setIsAddingModule(false);
                        setEditingModuleId(null);
                      }}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1 text-xs"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" /> Back to All Courses
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full uppercase">
                          {selectedCourseForModules.subject}
                        </span>
                        <h2 className="text-xl font-black text-slate-900">{selectedCourseForModules.title}</h2>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Manage course modules, edit HTML content &amp; format raw markup with live preview.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setIsAddingModule(true);
                        setEditingModuleId(null);
                        setModuleFormData({
                          moduleNumber: (selectedCourseForModules.modules?.length || 0) + 1,
                          title: "",
                          description: "",
                          readTime: "10 min read",
                          contentHtml: `<div class="space-y-4">\n  <h2>Module Header</h2>\n  <p>Write or paste your formatted HTML notes here...</p>\n</div>`,
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl jvm-gradient-bg text-white font-bold text-xs flex items-center gap-2 shadow-md hover:opacity-95"
                    >
                      <Plus className="w-4 h-4" /> Create New Module Note
                    </button>
                  </div>
                </div>

                {/* Add / Edit Module HTML Fullscreen Editor Form */}
                {isAddingModule && (
                    <form
                      onSubmit={handleModuleSubmit}
                      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl animate-fade-in"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></span>
                          <h4 className="text-lg font-extrabold text-slate-900">
                            {editingModuleId ? "Edit Module Content & HTML Notes" : "Create New Module Content & HTML Notes"}
                          </h4>
                        </div>

                        {/* Light / Dark Mode Preview Toggle */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold border border-slate-200">
                            <button
                              type="button"
                              onClick={() => setPreviewThemeMode("light")}
                              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                                previewThemeMode === "light" ? "bg-amber-500 text-slate-900 shadow-md font-black" : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              <Sun className="w-3.5 h-3.5" /> Light Mode
                            </button>
                            <button
                              type="button"
                              onClick={() => setPreviewThemeMode("dark")}
                              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                                previewThemeMode === "dark" ? "bg-purple-600 text-white shadow-md" : "text-slate-600 hover:text-slate-900"
                              }`}
                            >
                              <Moon className="w-3.5 h-3.5" /> Dark Mode
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingModule(false);
                            }}
                            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium">
                        <div>
                          <label className="block text-slate-600 font-bold mb-1 uppercase">Module Number</label>
                          <input
                            type="number"
                            required
                            value={moduleFormData.moduleNumber}
                            onChange={(e) => setModuleFormData({ ...moduleFormData, moduleNumber: parseInt(e.target.value) || 1 })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-bold focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-slate-600 font-bold mb-1 uppercase">Module Title (Name)</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Module 1: Spark Architecture & Core RDD vs DataFrame"
                            value={moduleFormData.title}
                            onChange={(e) => setModuleFormData({ ...moduleFormData, title: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-bold focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-slate-600 font-bold mb-1 uppercase">Short Description / Subtitle</label>
                          <input
                            type="text"
                            placeholder="Brief 1-sentence summary of this module..."
                            value={moduleFormData.description}
                            onChange={(e) => setModuleFormData({ ...moduleFormData, description: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-600 font-bold mb-1 uppercase">Read Time</label>
                          <input
                            type="text"
                            value={moduleFormData.readTime}
                            onChange={(e) => setModuleFormData({ ...moduleFormData, readTime: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-bold focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      {/* FULL PAGE DEDICATED 50/50 PARALLEL HTML EDITOR & LIVE PREVIEW */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-2 flex flex-col">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                              <FileText className="w-4 h-4 text-purple-600" /> HTML Source Code Editor
                            </label>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  const pretty = formatHtmlContent(moduleFormData.contentHtml);
                                  setModuleFormData((prev) => ({ ...prev, contentHtml: pretty }));
                                }}
                                className="px-3 py-1 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold text-[11px] flex items-center gap-1 border border-purple-200 shadow-xs cursor-pointer"
                                title="Auto format and align all HTML tags properly"
                              >
                                <Sparkles className="w-3 h-3" /> Format HTML Tags
                              </button>
                            </div>
                          </div>
                          <textarea
                            rows={26}
                            required
                            placeholder="<div class='space-y-4'><h2>Module Header</h2><p>Pasted HTML content here...</p></div>"
                            value={moduleFormData.contentHtml}
                            onChange={(e) => setModuleFormData({ ...moduleFormData, contentHtml: e.target.value })}
                            className="w-full p-5 bg-slate-900 border border-slate-800 rounded-2xl text-xs font-mono text-emerald-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner min-h-[600px] leading-relaxed"
                          />
                        </div>

                        <div className="space-y-2 flex flex-col">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-amber-500" /> Live Rendered Preview ({previewThemeMode.toUpperCase()} MODE)
                            </label>
                            <span className="text-[11px] text-slate-500">Matches live student view</span>
                          </div>

                          <div
                            className={`flex-1 rounded-2xl border p-6 min-h-[600px] max-h-[750px] overflow-y-auto transition-colors ${
                              previewThemeMode === "light"
                                ? "bg-white text-slate-900 border-slate-300 shadow-lg"
                                : "bg-[#0B0F19] text-slate-100 border-slate-800 shadow-2xl"
                            }`}
                          >
                            <div className={`pb-4 mb-4 border-b ${previewThemeMode === "light" ? "border-slate-200" : "border-slate-800"}`}>
                              <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                Module {moduleFormData.moduleNumber || 1}
                              </span>
                              <h3 className={`text-lg font-extrabold mt-1 ${previewThemeMode === "light" ? "text-slate-900" : "text-white"}`}>
                                {moduleFormData.title || "Module Title Preview"}
                              </h3>
                              <p className={`text-xs mt-0.5 ${previewThemeMode === "light" ? "text-slate-500" : "text-slate-400"}`}>
                                {moduleFormData.description || "Module description preview..."}
                              </p>
                            </div>

                            <div
                              className={`prose ${previewThemeMode === "dark" ? "dark:prose-invert" : ""} max-w-none text-xs leading-relaxed space-y-4`}
                              dangerouslySetInnerHTML={{ __html: moduleFormData.contentHtml || "<p class='text-slate-400 italic'>Enter HTML content to preview live...</p>" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-3 border-t border-slate-200">
                        <button
                          type="button"
                          onClick={() => setIsAddingModule(false)}
                          className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={savingModule}
                          className="px-7 py-2.5 rounded-xl jvm-gradient-bg text-white text-xs font-bold shadow-lg hover:opacity-95"
                        >
                          {savingModule ? "Saving Module..." : editingModuleId ? "Update & Save Module" : "Publish Module"}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Modules List for Selected Course */}
                  <div className="space-y-3">
                    {selectedCourseForModules.modules?.map((m: any) => (
                      <div key={m.id} className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center justify-between text-xs shadow-sm">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-purple-700">Module {m.moduleNumber}</span>
                            <span className="font-extrabold text-slate-900">{m.title}</span>
                            {m.moduleNumber <= selectedCourseForModules.freeModulesCount ? (
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">FREE PREVIEW</span>
                            ) : (
                              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">LOCKED (PAID)</span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">{m.description || "No description provided."}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingModuleId(m.id);
                              setIsAddingModule(true);
                              setIsFullScreenEditor(true);
                              setModuleFormData({
                                moduleNumber: m.moduleNumber,
                                title: m.title,
                                description: m.description || "",
                                readTime: m.readTime,
                                contentHtml: m.contentHtml || "",
                              });
                            }}
                            className="p-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={async () => {
                              if (confirm("Delete this module?")) {
                                await fetch(`/api/study-materials/courses/${selectedCourseForModules.id}/modules?moduleId=${m.id}`, { method: "DELETE" });
                                fetchStudyCourses();
                              }
                            }}
                            className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            )}
          </>
        )}

        {/* --- SECTION D: STUDENT COURSE UNLOCKS & PURCHASES --- */}
        {activeTab === "unlocks" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-purple-600" />
                  <span>Student Course Purchases & Unlock Passcodes</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  View all completed Razorpay payments, customer details, and 6-digit recovery passcodes.
                </p>
              </div>

              <button
                onClick={fetchCourseUnlocks}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5"
              >
                <span>Refresh List</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase font-extrabold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Course Title</th>
                    <th className="p-3.5">Customer Email / Phone</th>
                    <th className="p-3.5">6-Digit Passcode</th>
                    <th className="p-3.5">Razorpay Payment ID</th>
                    <th className="p-3.5 text-right">Unlocked At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {courseUnlocks.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-500 font-medium">
                        No course purchases recorded yet. Purchased courses will automatically show here!
                      </td>
                    </tr>
                  ) : (
                    courseUnlocks.map((u) => (
                      <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          {u.course?.title || "Study Course"}
                        </td>
                        <td className="p-3.5">
                          <div className="font-semibold text-slate-900">{u.userEmail || "N/A"}</div>
                          <div className="text-[11px] text-slate-500">{u.userPhone || "N/A"}</div>
                        </td>
                        <td className="p-3.5 font-mono font-bold text-purple-700 bg-purple-50 rounded-lg inline-block my-2 px-3 py-1 border border-purple-200">
                          {u.accessCode || "N/A"}
                        </td>
                        <td className="p-3.5 font-mono text-slate-600 text-[11px]">
                          {u.razorpayPaymentId || u.razorpayOrderId || "Test Unlock"}
                        </td>
                        <td className="p-3.5 text-right text-slate-500 font-medium">
                          {new Date(u.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- SECTION E: WEBSITE FORM SUBMISSIONS & LEAD ENQUIRIES --- */}
        {activeTab === "leads" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-pink-600" />
                  <span>Website Form Submissions & Lead Enquiries</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  View all incoming lead submissions from enrollment popups, demo requests, contact forms, and referral forms.
                </p>
              </div>

              <button
                onClick={fetchLeads}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Refresh Leads</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase font-extrabold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Candidate Name</th>
                    <th className="p-3.5">Email / Phone</th>
                    <th className="p-3.5">Course / Topic</th>
                    <th className="p-3.5">Source & Details</th>
                    <th className="p-3.5 text-right">Received Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-500 font-medium">
                        No form enquiries received yet. Submissions from website forms will automatically appear here!
                      </td>
                    </tr>
                  ) : (
                    leads.map((l) => (
                      <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900">
                          {l.name}
                        </td>
                        <td className="p-3.5">
                          <div className="font-semibold text-slate-900">{l.email || "N/A"}</div>
                          <div className="text-[11px] text-purple-700 font-bold">{l.phone || "N/A"}</div>
                        </td>
                        <td className="p-3.5">
                          <span className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-lg font-bold border border-purple-200 text-[11px] inline-block">
                            {l.courseSlug || "General Enquiry"}
                          </span>
                        </td>
                        <td className="p-3.5 max-w-md">
                          <div className="flex flex-wrap items-center gap-1.5 mb-1">
                            <span className="text-[10px] font-extrabold uppercase bg-purple-100 text-purple-700 px-2 py-0.5 rounded border border-purple-200 block w-max">
                              {l.source || "WEBSITE"}
                            </span>
                            {l.referralCode && (
                              <span className="text-[10px] font-mono font-black uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-300 flex items-center gap-1">
                                🎁 REF: {l.referralCode}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-800 whitespace-pre-wrap bg-slate-50 p-2 rounded-lg border border-slate-200 mt-1">{l.message || "No message provided."}</p>
                        </td>
                        <td className="p-3.5 text-right text-slate-500 font-medium whitespace-nowrap">
                          {new Date(l.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- SECTION F: REFERRALS TRACKING & SETTINGS --- */}
        {activeTab === "referrals" && (
          <div className="space-y-6">

            {/* Referral Settings Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-amber-500" />
                  <span>Refer &amp; Earn Program Settings</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Configure the uniform referral cash reward amount granted per successful candidate admission across all courses.
                </p>
              </div>

              <form onSubmit={handleUpdateReferralSetting} className="flex flex-col sm:flex-row items-end gap-4 max-w-2xl">
                <div className="flex-1 w-full">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Referral Cash Reward Amount (₹ Per Candidate)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-extrabold text-sm">₹</span>
                    <input
                      type="number"
                      min="0"
                      step="100"
                      required
                      value={referralRewardSetting}
                      onChange={(e) => setReferralRewardSetting(parseInt(e.target.value, 10) || 0)}
                      className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="2000"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={savingReferralSetting}
                  className="w-full sm:w-auto px-6 py-2.5 jvm-gradient-bg text-white font-extrabold text-xs rounded-xl shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  {savingReferralSetting ? "Updating..." : "Update Amount"}
                </button>
              </form>
            </div>

            {/* Referral Info Table Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <span>Referral Submissions &amp; Claims</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    All candidate admissions registered with a Referral Code or via the Refer &amp; Earn page.
                  </p>
                </div>
                <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1 rounded-full border border-amber-300">
                  Total Referred Candidates: {leads.filter((l) => l.referralCode).length}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 uppercase font-extrabold tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Referral Code</th>
                      <th className="p-3.5">Referred Candidate</th>
                      <th className="p-3.5">Contact Details</th>
                      <th className="p-3.5">Course Track</th>
                      <th className="p-3.5">Submission Source / Notes</th>
                      <th className="p-3.5 text-right">Reward Amount</th>
                      <th className="p-3.5 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.filter((l) => l.referralCode).length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-slate-500 font-medium">
                          No referrals recorded yet. Submissions with a referral code will automatically populate here!
                        </td>
                      </tr>
                    ) : (
                      leads
                        .filter((l) => l.referralCode)
                        .map((l) => (
                          <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-mono font-black text-purple-700 text-xs">
                              <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-1 rounded-lg inline-block">
                                🎁 {l.referralCode}
                              </span>
                            </td>
                            <td className="p-3.5 font-bold text-slate-900 text-sm">
                              {l.name}
                            </td>
                            <td className="p-3.5">
                              <div className="font-semibold text-slate-900">{l.email || "N/A"}</div>
                              <div className="text-[11px] text-purple-700 font-bold">{l.phone || "N/A"}</div>
                            </td>
                            <td className="p-3.5">
                              <span className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-lg font-bold border border-purple-200 text-[11px] inline-block">
                                {l.courseSlug || "General Track"}
                              </span>
                            </td>
                            <td className="p-3.5 max-w-xs">
                              <span className="text-[10px] font-extrabold uppercase bg-purple-100 text-purple-700 px-2 py-0.5 rounded border border-purple-200 inline-block mb-1">
                                {l.source || "REFERRAL"}
                              </span>
                              <p className="text-[11px] text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-200 mt-1 whitespace-pre-wrap">
                                {l.message || "Referral enquiry."}
                              </p>
                            </td>
                            <td className="p-3.5 text-right font-black text-emerald-600 text-sm">
                              ₹{referralRewardSetting.toLocaleString()}
                            </td>
                            <td className="p-3.5 text-right text-slate-500 font-medium whitespace-nowrap">
                              {new Date(l.createdAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
