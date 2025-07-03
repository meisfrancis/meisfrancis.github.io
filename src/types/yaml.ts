// Type definitions for YAML data structures

// Home Tab
export interface HomeData {
  title: string;
  subtitle: string;
  sections: {
    aboutMe: {
      title: string;
      paragraphs: {
        text: string;
        style: string;
      }[];
    };
    skills: {
      title: string;
      items: {
        name: string;
        percentage: number;
        barColor: string;
      }[];
    };
    career: {
      title: string;
      items: {
        title: string;
        company: string;
        period: string;
        description: string;
        borderColor: string;
        periodColor: string;
      }[];
    };
  };
  profile: {
    initials: string;
    style: string;
  };
}

// Navigation
export interface NavigationData {
  tabs: {
    id: string;
    label: string;
    icon: string;
  }[];
  styles: {
    active: string;
    inactive: string;
    base: string;
  };
}

// Blogs Tab
export interface BlogsData {
  title: string;
  subtitle: string;
  blogs: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  }[];
  categoryColors: {
    [key: string]: string;
    default: string;
  };
  buttons: {
    readMore: string;
    loadMore: string;
  };
  styles: {
    article: string;
    title: string;
    excerpt: string;
    loadMoreButton: string;
    readMoreButton: string;
  };
}

// Knowledge Tab
export interface KnowledgeData {
  title: string;
  subtitle: string;
  sections: {
    formalEducation: {
      title: string;
      items: {
        degree: string;
        institution: string;
        period: string;
        badge: string;
        badgeStyle: string;
        description: string;
        skills: string[];
      }[];
    };
    certifications: {
      title: string;
      items: {
        title: string;
        organization: string;
        year: string;
        color: string;
        description: string;
      }[];
    };
    continuousLearning: {
      title: string;
      goals: {
        skill: string;
        progress: number;
        progressColor: string;
      }[];
    };
  };
  styles: {
    educationCard: string;
    certificationCard: string;
    skillTag: string;
    learningCard: string;
  };
}

// Links Tab
export interface LinksData {
  title: string;
  subtitle: string;
  sections: {
    services: {
      title: string;
      items: {
        title: string;
        description: string;
        price: string;
        features: string[];
      }[];
      buttons: {
        getStarted: string;
      };
    };
    socialLinks: {
      title: string;
      links: {
        name: string;
        url: string;
        color: string;
      }[];
    };
    callToAction: {
      title: string;
      subtitle: string;
      description: string;
      buttons: {
        scheduleCall: string;
        sendMessage: string;
      };
    };
  };
  styles: {
    serviceCard: string;
    socialLink: string;
    ctaCard: string;
    primaryButton: string;
    secondaryButton: string;
    featureItem: string;
  };
}