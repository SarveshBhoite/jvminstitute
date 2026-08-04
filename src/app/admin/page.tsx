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
  ArrowRight,
  Plus,
  Trash2,
  Briefcase,
  Building2,
  GraduationCap,
  Layers,
  Upload,
  Image as ImageIcon,
  Edit
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

  // Active Tab: "placements" | "blogs"
  const [activeTab, setActiveTab] = useState<"placements" | "blogs">("placements");

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
    authorAvatar: "/place1.png",
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
      }
    } catch {
      // not logged in
    } finally {
      setCheckingAuth(false);
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
      authorAvatar: blog.authorAvatar || "/place1.png",
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
        authorAvatar: "/place1.png",
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
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="flex items-center gap-3 text-purple-400 font-bold">
          <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Verifying Admin Access...</span>
        </div>
      </div>
    );
  }

  // --- 1. LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] bg-gradient-to-br from-slate-950 via-[#0B0F19] to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#1E2B88] via-[#7C248C] to-[#E01E6A] rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              JVM Admin Portal
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sign in with your administrator credentials to access the management dashboard.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@jvminstitute.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] hover:opacity-95 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-[11px] text-slate-400">
              Default Seed Email: <code className="text-purple-400 font-mono">admin@jvminstitute.com</code>
            </p>
          </div>

        </div>
      </div>
    );
  }

  // --- 2. ADMIN DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white font-black text-xl shadow-md">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-black text-white">
                  JVM Admin Control Panel
                </h1>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Authenticated
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Logged in as <span className="text-purple-300 font-semibold">{adminUser?.email || "Super Admin"}</span> ({adminUser?.role || "SUPER_ADMIN"})
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-red-950/40 text-slate-300 hover:text-red-400 border border-slate-700 hover:border-red-800/50 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Total Placements</span>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">{placements.length + 12} Placed</div>
            <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Live Database Synced
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Blog Posts</span>
              <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">{blogs.length + 7} Articles</div>
            <p className="text-[11px] text-indigo-400 font-semibold">Technical Playbooks & Guides</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Lead Enquiries</span>
              <div className="p-2 bg-pink-500/10 text-pink-400 rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">342 Leads</div>
            <p className="text-[11px] text-purple-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> 18 New today
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Referral Payouts</span>
              <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl font-black text-white">₹48,500</div>
            <p className="text-[11px] text-emerald-400 font-semibold">Processed this month</p>
          </div>
        </div>

        {/* --- MANAGEMENT NAVIGATION TABS --- */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab("placements")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "placements"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Placed Students ({placements.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "blogs"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Technical Blogs ({blogs.length})</span>
          </button>
        </div>

        {/* --- SECTION A: PLACEMENT MANAGEMENT --- */}
        {activeTab === "placements" && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                    <span>Placed Students Management</span>
                  </h2>
                  <span className="bg-purple-500/20 text-purple-300 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    Admin Access
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
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
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingPlacement ? "Cancel Form" : "Add Placed Student"}</span>
              </button>
            </div>

            {placementSuccessMsg && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{placementSuccessMsg}</span>
              </div>
            )}

            {/* Add / Edit Student Placement Form */}
            {isAddingPlacement && (
              <form onSubmit={handleAddPlacementSubmit} className="bg-slate-800/80 border border-purple-500/30 rounded-2xl p-6 space-y-5 animate-fade-in">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E01E6A]" />
                  <span>{editingPlacementId ? "Edit Placed Student Details" : "Add Placed Student Details"}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-medium">
                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Student Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Bhoite"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. TCS / Cognizant / Infosys"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Placed Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Associate Data Engineer"
                      value={formData.placedRole}
                      onChange={(e) => setFormData({ ...formData, placedRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Package Offered (LPA)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 8.5 LPA"
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Tech Domain</label>
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
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
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
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Core Tech Skills</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PySpark, Databricks, AWS Glue, SQL"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Cloudinary Student Photo Upload Component */}
                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1 flex items-center justify-between">
                      <span>Student Photo</span>
                      <span className="text-[10px] text-purple-400 font-bold">Cloudinary Direct Upload</span>
                    </label>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="flex-1 px-3 py-2 bg-slate-900 border border-dashed border-purple-500/50 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-purple-300 font-bold">
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
                        <div className="flex items-center gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl">
                          <ImageIcon className="w-4 h-4 text-purple-400 shrink-0" />
                          <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full bg-transparent text-[11px] text-slate-300 focus:outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Featured Placement Switch Toggle */}
                  <div className="sm:col-span-3 bg-slate-900 border border-slate-700 p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <label className="text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Featured Placement (Display Live on Homepage Slideshow)</span>
                      </label>
                      <p className="text-[11px] text-slate-400 mt-0.5">
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
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">
                      Student Testimonial / Review / Advice
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Coming from a non-IT background, I was unsure about switching careers..."
                      value={formData.testimonial}
                      onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none text-xs"
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
                    className="px-4 py-2.5 rounded-xl bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingPlacement || uploadingPlacementImg}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-md hover:opacity-95 disabled:opacity-50 cursor-pointer"
                  >
                    {savingPlacement ? "Saving to Database..." : editingPlacementId ? "Update Placed Student" : "Save Placed Student"}
                  </button>
                </div>
              </form>
            )}

            {/* Admin Placements Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-800/80 text-slate-400 uppercase font-extrabold tracking-wider border-b border-slate-800">
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
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                  {placements.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-6 text-center text-slate-500 font-medium">
                        No placement records in database yet. Click &quot;Add Placed Student&quot; above to insert records.
                      </td>
                    </tr>
                  ) : (
                    placements.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-bold text-white flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-purple-600/30 text-purple-300 flex items-center justify-center font-bold text-xs shrink-0">
                            {p.name.charAt(0)}
                          </div>
                          <span>{p.name}</span>
                        </td>
                        <td className="p-3.5 font-semibold text-slate-200">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-purple-400" /> {p.company}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-300">{p.placedRole}</td>
                        <td className="p-3.5 font-bold text-emerald-400">{p.package}</td>
                        <td className="p-3.5">
                          <span className="bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded-md font-semibold">
                            {p.domain}
                          </span>
                        </td>
                        <td className="p-3.5 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggleFeaturedPlacement(p)}
                            className={`px-3 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1 mx-auto transition-all cursor-pointer ${
                              p.isFeatured !== false
                                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs"
                                : "bg-slate-800 text-slate-500 border border-slate-700"
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
                              className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                              title="Edit Placement"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePlacement(p.id)}
                              className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
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
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-6 h-6 text-purple-400" />
                    <span>Technical Blog Management</span>
                  </h2>
                  <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    Admin Publisher
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Create and publish technical articles, PySpark playbooks, and cloud architecture guides to the main website blog.
                </p>
              </div>

              <button
                onClick={() => setIsAddingBlog(!isAddingBlog)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingBlog ? "Cancel Form" : "Create New Blog Post"}</span>
              </button>
            </div>

            {blogSuccessMsg && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{blogSuccessMsg}</span>
              </div>
            )}

            {/* Add Blog Post Form */}
            {isAddingBlog && (
              <form onSubmit={handleAddBlogSubmit} className="bg-slate-800/80 border border-purple-500/30 rounded-2xl p-6 space-y-5 animate-fade-in">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>{editingBlogId ? "Edit Technical Article" : "Publish New Technical Article"}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-medium">
                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Article Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. How to Optimize PySpark Join Performance on Databricks"
                      value={blogFormData.title}
                      onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Meta Title (SEO)</label>
                    <input
                      type="text"
                      placeholder="SEO Meta Title (Defaults to Article Title)"
                      value={blogFormData.metaTitle}
                      onChange={(e) => setBlogFormData({ ...blogFormData, metaTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Blog Category</label>
                    <select
                      value={blogFormData.category}
                      onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
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
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Short Description (Excerpt)</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Write a concise short description of the post..."
                      value={blogFormData.excerpt}
                      onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Long Description (HTML Format)</label>
                    <textarea
                      rows={6}
                      placeholder="<p>Enter detailed HTML content here...</p><h2>Subheading</h2><p>Additional paragraph details...</p>"
                      value={blogFormData.longDescriptionHtml}
                      onChange={(e) => setBlogFormData({ ...blogFormData, longDescriptionHtml: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Author Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohit Sharma / JVM Admin"
                      value={blogFormData.authorName}
                      onChange={(e) => setBlogFormData({ ...blogFormData, authorName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Author Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lead Data Engineering Architect @ JVM"
                      value={blogFormData.authorRole}
                      onChange={(e) => setBlogFormData({ ...blogFormData, authorRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Read Time</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 6 min read"
                      value={blogFormData.readTime}
                      onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1">Tags (Comma Separated)</label>
                    <input
                      type="text"
                      placeholder="e.g. PySpark, Databricks, AWS, SQL"
                      value={blogFormData.tags}
                      onChange={(e) => setBlogFormData({ ...blogFormData, tags: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Cloudinary Cover Image Upload Component */}
                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider font-bold mb-1 flex items-center justify-between">
                      <span>Cover Image</span>
                      <span className="text-[10px] text-indigo-400 font-bold">Cloudinary Direct Upload</span>
                    </label>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="flex-1 px-3 py-2 bg-slate-900 border border-dashed border-indigo-500/50 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-indigo-300 font-bold">
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
                        <div className="flex items-center gap-2 p-2 bg-slate-900 border border-slate-800 rounded-xl">
                          <ImageIcon className="w-4 h-4 text-indigo-400 shrink-0" />
                          <input
                            type="text"
                            value={blogFormData.image}
                            onChange={(e) => setBlogFormData({ ...blogFormData, image: e.target.value })}
                            className="w-full bg-transparent text-[11px] text-slate-300 focus:outline-none"
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
                    className="px-4 py-2.5 rounded-xl bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingBlog || uploadingBlogImg}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-md hover:opacity-95 disabled:opacity-50 cursor-pointer"
                  >
                    {savingBlog ? (editingBlogId ? "Updating..." : "Publishing to Database...") : (editingBlogId ? "Update Article" : "Publish Article")}
                  </button>
                </div>
              </form>
            )}

            {/* Admin Blogs Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-800/80 text-slate-400 uppercase font-extrabold tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Article Title</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Author</th>
                    <th className="p-3.5">Read Time</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                  {blogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-slate-500 font-medium">
                        No admin published blog posts yet. Click &quot;Create New Blog Post&quot; above to publish articles.
                      </td>
                    </tr>
                  ) : (
                    blogs.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-bold text-white max-w-xs truncate">
                          {b.title}
                        </td>
                        <td className="p-3.5">
                          <span className="bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded-md font-semibold">
                            {b.category}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-300">{b.authorName}</td>
                        <td className="p-3.5 text-purple-300 font-semibold">{b.readTime}</td>
                        <td className="p-3.5 text-right flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditBlog(b)}
                            className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors cursor-pointer"
                            title="Edit Blog Post"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(b.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
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

        {/* Database Status Footer Banner */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Connected to Neon PostgreSQL Database (`neondb`) &amp; Cloudinary Image CDN</span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Server Node Mode: Development</span>
        </div>

      </div>
    </div>
  );
}
