
import { PortfolioData } from './types';

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
      description: "Solution to address Zoom Tan’s key operational challenges regarding vendor oversight.",
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
  ]
};
