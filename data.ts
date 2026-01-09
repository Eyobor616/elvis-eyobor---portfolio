
import { PortfolioData, SocialMediaItem } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Elvis O. Eyobor",
    title: "Microsoft Certified Power Platform Developer | Data Analyst | Operations Planner",
    nationality: "Nigerian",
    birthday: "2nd Feb",
    socials: {
      phone: "+234 8080927312",
      linkedin: "Elvis Eyobor",
      youtube: "@eyoborelvis8224"
    }
  },
  professionalSummary: "Microsoft Certified Power Platform Developer with expertise in designing and implementing custom business solutions using Power Apps, Power Automate, and Power BI. Skilled in building efficient workflows, managing diverse data sources (Dataverse, SQL Server, SharePoint), and creating interactive dashboards for data visualization. Bringing over five years of experience in maintenance planning, I offer additional proficiency in Excel, SAP, and CMMS. Dedicated to streamlining operations and enabling data-driven decision-making to achieve organizational goals.",
  technicalSkills: [
    {
      category: "Power Platform",
      skills: ["Power Apps (Canvas & Model-Driven)", "Power Automate", "Power BI", "Dataverse"]
    },
    {
      category: "Data & Infrastructure",
      skills: ["SQL Server", "SharePoint", "Azure", "SAP ERP", "CMMS", "Excel Expert"]
    },
    {
      category: "Development Tools",
      skills: ["PowerShell", "HTML", "CSS", "JavaScript", "TypeScript", "AutoCAD"]
    }
  ],
  experience: [
    {
      role: "Power Platform Solutions Expert",
      company: "Super PowerLabs",
      period: "2023 - Date",
      description: "I design, develop, and implement business solutions using Microsoft Power Platform. My role focuses on building efficient workflows, connecting data sources (Dataverse, SQL Server, SharePoint), and delivering solutions that streamline operations and align with organizational goals."
    },
    {
      role: "Maintenance & App Management",
      company: "GZ Industries Ltd",
      period: "2020 - 2023",
      description: "Built a CMMS app using PowerApps to streamline machine maintenance planning. Skilled in scheduling repairs, allocating personnel, and analyzing operational performance with tools like SAP & Excel."
    },
    {
      role: "Trainer on Microsoft packages and AutoCAD",
      company: "Soft Apex",
      period: "2018 - 2019",
      description: "Engaged students in tutorials to improve their proficiency in AutoCAD, making and interpreting various designs in all projections. Improved students' background on real-life use of Microsoft Packages in various firms."
    }
  ],
  projects: [
    {
      name: "Contact and Distribution List Management Application",
      client: "IFPMA",
      period: "Oct - Dec 2024",
      description: "Developed a Power App to manage over 8,000 contacts in Azure Active Directory (AAD) and Exchange.",
      project_pictures: ["https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop"],
      features: [
        "Contact creation and modification",
        "Distribution list management",
        "Bi-directional data synchronization with AAD",
        "Role-based access control",
        "Efficient contact searching with distribution list visibility"
      ]
    },
    {
      name: "Vendor Management System",
      client: "ZoomTan Inc.",
      period: "Feb - Apr 2025",
      description: "Solution to address Zoom Tan's key operational challenges regarding vendor oversight.",
      project_pictures: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"],
      features: [
        "Seamless integration with existing Excel spreadsheets",
        "Real-time data synchronization",
        "Multi-level approval routing",
        "Edit and resubmit functionality for denied entries",
        "Deeplinking from email notifications",
        "Role-based access control",
        "Real-time notifications for approvals and updates"
      ]
    },
    {
      name: "Employee Performance Tracking & Review",
      client: "ZoomTan Inc.",
      period: "Jul - Aug 2025",
      description: "Developed with Microsoft Power Platform and embedded within Microsoft Teams, designed to streamline mid-year and end-of-year evaluations.",
      project_pictures: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"],
      features: [
        "Replacing PerformYard legacy system",
        "Automated review cycles",
        "Role-based feedback support",
        "Integration with Paychex via SFTP",
        "Centralized goal tracking",
        "Built for Microsoft 365 with robust security",
        "Full mobile compatibility"
      ]
    },
    {
      name: "Dynamics Rating Advanced Inspection Report App",
      client: "Associated with Super PowerLabs",
      period: "Jul - Sept 2024",
      description: "Simplifies service and installation reporting for field agents.",
      project_pictures: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"],
      features: [
        "Digital signatures",
        "Media capture",
        "PDF export",
        "Offline access",
        "Task tracking",
        "Integration with Power BI and SharePoint"
      ]
    }
  ],
  youtubeTutorials: [
    {
      id: "iqc4kKRBHwE",
      title: "How to generate barcode using power platform",
      description: "Ready to build powerful apps with zero fluff? This beginner-friendly tutorial breaks down how to perform CRUD operations (Create, Read, Update, Delete) in PowerApps—all in under 10 minutes! 💡",
      thumbnailUrl: "https://i.ytimg.com/vi/iqc4kKRBHwE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=iqc4kKRBHwE",
      views: "12K views",
      duration: "45:32"
    },
    {
      id: "h84Z_pFCaGU",
      title: "How to create a PowerApps app from a Figma design",
      description: "Master Power Automate with this step-by-step guide. Learn how to create automated workflows that save time and increase productivity.",
      thumbnailUrl: "https://i.ytimg.com/vi/h84Z_pFCaGU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=h84Z_pFCaGU&t=13s",
      views: "8.5K views",
      duration: "38:15"
    },
    {
      id: "meEFY3-hff8",
      title: "How to generate QR code using power platform",
      description: "Create stunning dashboards in Power BI. From data connection to visualization, learn how to build reports that drive insights.",
      thumbnailUrl: "https://i.ytimg.com/vi/meEFY3-hff8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=meEFY3-hff8",
      views: "15K views",
      duration: "52:48"
    }
    ,
    {
      id: "GzICP4ljS_g",
      title: "Power Platform Tutorial: Advanced Techniques",
      description: "Advanced tips and techniques for building scalable Power Platform solutions.",
      thumbnailUrl: "https://i.ytimg.com/vi/GzICP4ljS_g/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=GzICP4ljS_g&t=26s",
      views: "6K views",
      duration: "22:10"
    },
    {
      id: "EbgVG6Z-yhs",
      title: "Power BI: From Zero to Hero",
      description: "A comprehensive walkthrough to create meaningful Power BI reports and dashboards.",
      thumbnailUrl: "https://i.ytimg.com/vi/EbgVG6Z-yhs/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=EbgVG6Z-yhs&t=580s",
      views: "20K views",
      duration: "1:15:40"
    }
  ],
  community: {
    name: "Learn Power Apps",
    platform: "Skool",
    profileUrl: "https://skool.com",
    imageUrl: "/my-react-app/public/img/Skool%20Profile.jpeg",
    members: 3000,
    contributions: 600,
    followers: 33,
    following: 23,
    handle: "@elvis-eyobor-3582",
    role: "Community Moderator",
    level: "Level 6 - Purple Belt"
  },
  socialMedia: [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@eyoborelvis8224?sub_confirmation=1",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/2348080927312",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    },
    {
      name: "X",
      url: "https://x.com/Eyobor1",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/groups/1419650492494392",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elvis-eyobor-9105a41a1/",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    {
      name: "Linktree",
      url: "https://tr.ee/RSKr08CYod",
      iconUrl: "https://logos-world.net/wp-content/uploads/2022/12/Linktree-Symbol.png"
    },
    {
      name: "Skool",
      url: "https://www.skool.com/@elvis-eyobor-3582?g=learn-power-apps",
      iconUrl: "https://theprocesshacker.com/wp-content/uploads/2024/07/Skool-1024x1024.png"
    }
  ]
};
