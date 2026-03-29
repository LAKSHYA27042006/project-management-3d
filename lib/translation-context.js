"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

const TranslationContext = createContext(null);

// Translations for all supported languages
const translations = {
  en: {
    // Common
    appName: "ProjectFlow",
    login: "Log in",
    signup: "Sign Up",
    logout: "Log out",
    getStarted: "Get Started Free",
    startForFree: "Start for Free",
    learnMore: "Learn More",
    continue: "Continue",
    skip: "Skip",
    back: "Back",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    search: "Search",
    settings: "Settings",
    about: "About",
    features: "Features",
    pricing: "Pricing",
    
    // Landing Page
    heroTitle: "Manage projects with",
    heroHighlight: "clarity and speed",
    heroSubtitle: "ProjectFlow helps teams organize work, track progress, and deliver projects on time. From simple tasks to complex workflows, we have you covered.",
    trustedBy: "Trusted by 10,000+ teams worldwide",
    dashboardPreview: "Dashboard Preview",
    
    // Features
    featuresTitle: "Everything you need to ship faster",
    featuresSubtitle: "Powerful tools that grow with your team, from task tracking to strategic planning.",
    listView: "List View",
    listViewDesc: "Track all tasks in a structured table with priorities, due dates, and statuses.",
    boardView: "Board View",
    boardViewDesc: "Drag and drop tasks across columns like Todo, Doing, and Done.",
    timelineView: "Timeline View",
    timelineViewDesc: "Visualize work with deadlines and dependencies on a Gantt-like chart.",
    calendarView: "Calendar View",
    calendarViewDesc: "See all tasks and deadlines on an interactive calendar.",
    goalsStrategy: "Goals & Strategy",
    goalsStrategyDesc: "Set team goals, track progress, and align everyone on key objectives.",
    teamCollab: "Team Collaboration",
    teamCollabDesc: "Invite teammates, assign tasks, and track who is working on what.",
    
    // Pricing
    pricingTitle: "Simple, transparent pricing",
    free: "Free",
    pro: "Pro",
    enterprise: "Enterprise",
    forIndividuals: "For individuals",
    perUserMonth: "Per user / month",
    forLargeTeams: "For large teams",
    custom: "Custom",
    mostPopular: "Most Popular",
    upTo5Projects: "Up to 5 projects",
    basicTaskMgmt: "Basic task management",
    listBoardViews: "List & Board views",
    unlimitedProjects: "Unlimited projects",
    allViews: "All views",
    goalsReporting: "Goals & reporting",
    prioritySupport: "Priority support",
    everythingInPro: "Everything in Pro",
    ssoSaml: "SSO & SAML",
    customIntegrations: "Custom integrations",
    dedicatedSupport: "Dedicated support",
    
    // Navigation
    home: "Home",
    inbox: "Inbox",
    myTasks: "My Tasks",
    projects: "Projects",
    portfolios: "Portfolios",
    goals: "Goals",
    reporting: "Reporting",
    
    // Tasks
    todo: "To Do",
    doing: "In Progress",
    done: "Done",
    high: "High",
    medium: "Medium",
    low: "Low",
    
    // Onboarding
    tellUsAboutWork: "Tell us about your work",
    onboardingSubtitle: "This will help us tailor ProjectFlow for you.",
    whatsYourRole: "What's your role?",
    selectRole: "Select your role...",
    workFunction: "Which function best describes your work?",
    selectFunction: "Select a function...",
    useCase: "What do you want to use ProjectFlow for?",
    selectUseCase: "Select a use case...",
    whatTools: "What tools do you use?",
    toolsSubtitle: "ProjectFlow connects to tools your team uses every day.",
    teamSize: "How big is your team?",
    teamSizeSubtitle: "This helps us recommend the best setup for your team size.",
    whatToManage: "What do you want to manage first?",
    manageSubtitle: "Pick what you want to start with. You can always add more later.",
    takeToWorkspace: "Take me to my workspace",
    
    // Roles
    student: "Student",
    freelancer: "Freelancer",
    teamLead: "Team Lead",
    projectManager: "Project Manager",
    engineeringManager: "Engineering Manager",
    productManager: "Product Manager",
    designer: "Designer",
    executive: "Executive",
    other: "Other",
    
    // Work Functions
    engineeringIT: "Engineering / IT",
    designCreative: "Design / Creative",
    marketing: "Marketing",
    sales: "Sales",
    operations: "Operations",
    humanResources: "Human Resources",
    finance: "Finance",
    education: "Education",
    research: "Research",
    
    // Team Sizes
    justMe: "Just me",
    people2to5: "2-5 people",
    people6to15: "6-15 people",
    people16to50: "16-50 people",
    people51to200: "51-200 people",
    people200plus: "200+ people",
    
    // Chatbot
    chatbotTitle: "How can I help you?",
    askQuestion: "Ask a question...",
    send: "Send",
    
    // Auth
    welcomeBack: "Welcome back",
    loginSubtitle: "Log in to continue to ProjectFlow",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    createAccount: "Create your account",
    signupSubtitle: "Start managing projects for free",
    fullName: "Full name",
    orContinueWith: "Or continue with",
    
    // Footer
    footerDesc: "Modern project management for teams that ship fast.",
    product: "Product",
    company: "Company",
    allRightsReserved: "All rights reserved.",
    
    // Notifications
    notifications: "Notifications",
    markAllRead: "Mark all read",
    viewAll: "View all",
    noNotifications: "No notifications yet",
    
    // Actions
    newTask: "New Task",
    newProject: "New Project",
    newGoal: "New Goal",
    
    // Theme
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    language: "Language",
  },
  
  ta: {
    // Common
    appName: "ProjectFlow",
    login: "உள்நுழை",
    signup: "பதிவு செய்",
    logout: "வெளியேறு",
    getStarted: "இலவசமாக தொடங்கு",
    startForFree: "இலவசமாக தொடங்கு",
    learnMore: "மேலும் அறிக",
    continue: "தொடர்க",
    skip: "தவிர்",
    back: "பின்செல்",
    save: "சேமி",
    cancel: "ரத்து செய்",
    delete: "நீக்கு",
    edit: "திருத்து",
    add: "சேர்",
    search: "தேடு",
    settings: "அமைப்புகள்",
    about: "பற்றி",
    features: "அம்சங்கள்",
    pricing: "விலை",
    
    // Landing Page
    heroTitle: "திட்டங்களை நிர்வகிக்கவும்",
    heroHighlight: "தெளிவாகவும் வேகமாகவும்",
    heroSubtitle: "ProjectFlow அணிகள் வேலையை ஒழுங்கமைக்கவும், முன்னேற்றத்தை கண்காணிக்கவும், திட்டங்களை நேரத்தில் வழங்கவும் உதவுகிறது.",
    trustedBy: "உலகம் முழுவதும் 10,000+ அணிகளால் நம்பப்படுகிறது",
    dashboardPreview: "டாஷ்போர்டு முன்னோட்டம்",
    
    // Features
    featuresTitle: "வேகமாக அனுப்ப உங்களுக்கு தேவையான அனைத்தும்",
    featuresSubtitle: "பணி கண்காணிப்பு முதல் மூலோபாய திட்டமிடல் வரை உங்கள் அணியுடன் வளரும் சக்திவாய்ந்த கருவிகள்.",
    listView: "பட்டியல் காட்சி",
    listViewDesc: "முன்னுரிமைகள், நிலுவை தேதிகள் மற்றும் நிலைகளுடன் அனைத்து பணிகளையும் கட்டமைக்கப்பட்ட அட்டவணையில் கண்காணிக்கவும்.",
    boardView: "போர்டு காட்சி",
    boardViewDesc: "Todo, Doing மற்றும் Done போன்ற நெடுவரிசைகளில் பணிகளை இழுத்து விடவும்.",
    timelineView: "காலவரிசை காட்சி",
    timelineViewDesc: "Gantt போன்ற விளக்கப்படத்தில் காலக்கெடுகள் மற்றும் சார்புகளுடன் வேலையை காட்சிப்படுத்தவும்.",
    calendarView: "நாட்காட்டி காட்சி",
    calendarViewDesc: "ஊடாடும் நாட்காட்டியில் அனைத்து பணிகளையும் காலக்கெடுகளையும் பாருங்கள்.",
    goalsStrategy: "இலக்குகள் & மூலோபாயம்",
    goalsStrategyDesc: "அணி இலக்குகளை அமைக்கவும், முன்னேற்றத்தை கண்காணிக்கவும், முக்கிய நோக்கங்களில் அனைவரையும் சீரமைக்கவும்.",
    teamCollab: "அணி ஒத்துழைப்பு",
    teamCollabDesc: "குழு உறுப்பினர்களை அழைக்கவும், பணிகளை ஒதுக்கவும், யார் எதை வேலை செய்கிறார்கள் என்று கண்காணிக்கவும்.",
    
    // Pricing
    pricingTitle: "எளிய, வெளிப்படையான விலை",
    free: "இலவசம்",
    pro: "ப்ரோ",
    enterprise: "எண்டர்பிரைஸ்",
    forIndividuals: "தனிநபர்களுக்கு",
    perUserMonth: "ஒரு பயனருக்கு / மாதம்",
    forLargeTeams: "பெரிய அணிகளுக்கு",
    custom: "தனிப்பயன்",
    mostPopular: "மிகவும் பிரபலமான",
    upTo5Projects: "5 திட்டங்கள் வரை",
    basicTaskMgmt: "அடிப்படை பணி மேலாண்மை",
    listBoardViews: "பட்டியல் & போர்டு காட்சிகள்",
    unlimitedProjects: "வரம்பற்ற திட்டங்கள்",
    allViews: "அனைத்து காட்சிகள்",
    goalsReporting: "இலக்குகள் & அறிக்கை",
    prioritySupport: "முன்னுரிமை ஆதரவு",
    everythingInPro: "ப்ரோவில் உள்ள அனைத்தும்",
    ssoSaml: "SSO & SAML",
    customIntegrations: "தனிப்பயன் ஒருங்கிணைப்புகள்",
    dedicatedSupport: "அர்ப்பணிக்கப்பட்ட ஆதரவு",
    
    // Navigation
    home: "முகப்பு",
    inbox: "இன்பாக்ஸ்",
    myTasks: "என் பணிகள்",
    projects: "திட்டங்கள்",
    portfolios: "போர்ட்ஃபோலியோக்கள்",
    goals: "இலக்குகள்",
    reporting: "அறிக்கை",
    
    // Tasks
    todo: "செய்ய வேண்டியவை",
    doing: "நடந்துகொண்டிருக்கிறது",
    done: "முடிந்தது",
    high: "உயர்",
    medium: "நடுத்தர",
    low: "குறை",
    
    // Onboarding
    tellUsAboutWork: "உங்கள் வேலை பற்றி சொல்லுங்கள்",
    onboardingSubtitle: "இது உங்களுக்கு ProjectFlow-ஐ தனிப்பயனாக்க உதவும்.",
    whatsYourRole: "உங்கள் பங்கு என்ன?",
    selectRole: "உங்கள் பங்கை தேர்ந்தெடுக்கவும்...",
    workFunction: "உங்கள் வேலையை எந்த செயல்பாடு சிறப்பாக விவரிக்கிறது?",
    selectFunction: "ஒரு செயல்பாட்டைத் தேர்ந்தெடுக்கவும்...",
    useCase: "ProjectFlow-ஐ எதற்காக பயன்படுத்த விரும்புகிறீர்கள்?",
    selectUseCase: "ஒரு பயன்பாட்டு வழக்கைத் தேர்ந்தெடுக்கவும்...",
    whatTools: "நீங்கள் என்ன கருவிகளைப் பயன்படுத்துகிறீர்கள்?",
    toolsSubtitle: "உங்கள் அணி தினமும் பயன்படுத்தும் கருவிகளுடன் ProjectFlow இணைக்கிறது.",
    teamSize: "உங்கள் அணி எவ்வளவு பெரியது?",
    teamSizeSubtitle: "இது உங்கள் அணி அளவுக்கு சிறந்த அமைப்பை பரிந்துரைக்க உதவுகிறது.",
    whatToManage: "முதலில் எதை நிர்வகிக்க விரும்புகிறீர்கள்?",
    manageSubtitle: "எது முக்கியமானது என்பதைத் தொடங்குங்கள். நீங்கள் எப்போதும் பிறகு சேர்க்கலாம்.",
    takeToWorkspace: "என் பணியிடத்திற்கு அழைத்துச் செல்",
    
    // Roles
    student: "மாணவர்",
    freelancer: "ஃப்ரீலான்சர்",
    teamLead: "அணித் தலைவர்",
    projectManager: "திட்ட மேலாளர்",
    engineeringManager: "பொறியியல் மேலாளர்",
    productManager: "தயாரிப்பு மேலாளர்",
    designer: "வடிவமைப்பாளர்",
    executive: "நிர்வாகி",
    other: "மற்றவை",
    
    // Work Functions
    engineeringIT: "பொறியியல் / IT",
    designCreative: "வடிவமைப்பு / படைப்பு",
    marketing: "மார்கெட்டிங்",
    sales: "விற்பனை",
    operations: "செயல்பாடுகள்",
    humanResources: "மனித வளங்கள்",
    finance: "நிதி",
    education: "கல்வி",
    research: "ஆராய்ச்சி",
    
    // Team Sizes
    justMe: "நான் மட்டும்",
    people2to5: "2-5 பேர்",
    people6to15: "6-15 பேர்",
    people16to50: "16-50 பேர்",
    people51to200: "51-200 பேர்",
    people200plus: "200+ பேர்",
    
    // Chatbot
    chatbotTitle: "நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    askQuestion: "ஒரு கேள்வி கேளுங்கள்...",
    send: "அனுப்பு",
    
    // Auth
    welcomeBack: "மீண்டும் வருக",
    loginSubtitle: "ProjectFlow-க்கு தொடர உள்நுழையவும்",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    forgotPassword: "கடவுச்சொல் மறந்துவிட்டதா?",
    noAccount: "கணக்கு இல்லையா?",
    hasAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
    createAccount: "உங்கள் கணக்கை உருவாக்கவும்",
    signupSubtitle: "இலவசமாக திட்டங்களை நிர்வகிக்கத் தொடங்குங்கள்",
    fullName: "முழு பெயர்",
    orContinueWith: "அல்லது இதனுடன் தொடரவும்",
    
    // Footer
    footerDesc: "வேகமாக அனுப்பும் அணிகளுக்கான நவீன திட்ட மேலாண்மை.",
    product: "தயாரிப்பு",
    company: "நிறுவனம்",
    allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    
    // Notifications
    notifications: "அறிவிப்புகள்",
    markAllRead: "அனைத்தையும் படித்ததாக குறி",
    viewAll: "அனைத்தையும் பார்",
    noNotifications: "இன்னும் அறிவிப்புகள் இல்லை",
    
    // Actions
    newTask: "புதிய பணி",
    newProject: "புதிய திட்டம்",
    newGoal: "புதிய இலக்கு",
    
    // Theme
    lightMode: "ஒளி பயன்முறை",
    darkMode: "இருள் பயன்முறை",
    language: "மொழி",
  },
  
  hi: {
    // Common
    appName: "ProjectFlow",
    login: "लॉग इन",
    signup: "साइन अप",
    logout: "लॉग आउट",
    getStarted: "मुफ्त में शुरू करें",
    startForFree: "मुफ्त में शुरू करें",
    learnMore: "और जानें",
    continue: "जारी रखें",
    skip: "छोड़ें",
    back: "वापस",
    save: "सहेजें",
    cancel: "रद्द करें",
    delete: "हटाएं",
    edit: "संपादित करें",
    add: "जोड़ें",
    search: "खोजें",
    settings: "सेटिंग्स",
    about: "के बारे में",
    features: "सुविधाएं",
    pricing: "मूल्य",
    
    // Landing Page
    heroTitle: "प्रोजेक्ट्स को प्रबंधित करें",
    heroHighlight: "स्पष्टता और गति के साथ",
    heroSubtitle: "ProjectFlow टीमों को काम व्यवस्थित करने, प्रगति ट्रैक करने और समय पर प्रोजेक्ट्स डिलीवर करने में मदद करता है।",
    trustedBy: "दुनिया भर में 10,000+ टीमों द्वारा विश्वसनीय",
    dashboardPreview: "डैशबोर्ड प्रीव्यू",
    
    // Features
    featuresTitle: "तेजी से शिप करने के लिए आपको जो कुछ भी चाहिए",
    featuresSubtitle: "शक्तिशाली उपकरण जो आपकी टीम के साथ बढ़ते हैं, टास्क ट्रैकिंग से लेकर रणनीतिक योजना तक।",
    listView: "सूची दृश्य",
    listViewDesc: "प्राथमिकताओं, देय तिथियों और स्थितियों के साथ एक संरचित तालिका में सभी कार्यों को ट्रैक करें।",
    boardView: "बोर्ड दृश्य",
    boardViewDesc: "Todo, Doing और Done जैसे कॉलम में कार्यों को ड्रैग और ड्रॉप करें।",
    timelineView: "टाइमलाइन दृश्य",
    timelineViewDesc: "Gantt-जैसे चार्ट पर समय सीमा और निर्भरता के साथ काम को विज़ुअलाइज़ करें।",
    calendarView: "कैलेंडर दृश्य",
    calendarViewDesc: "एक इंटरैक्टिव कैलेंडर पर सभी कार्य और समय सीमा देखें।",
    goalsStrategy: "लक्ष्य और रणनीति",
    goalsStrategyDesc: "टीम लक्ष्य निर्धारित करें, प्रगति ट्रैक करें, और मुख्य उद्देश्यों पर सभी को संरेखित करें।",
    teamCollab: "टीम सहयोग",
    teamCollabDesc: "टीम के साथियों को आमंत्रित करें, कार्य असाइन करें, और ट्रैक करें कि कौन क्या कर रहा है।",
    
    // Pricing
    pricingTitle: "सरल, पारदर्शी मूल्य निर्धारण",
    free: "मुफ्त",
    pro: "प्रो",
    enterprise: "एंटरप्राइज",
    forIndividuals: "व्यक्तियों के लिए",
    perUserMonth: "प्रति उपयोगकर्ता / महीना",
    forLargeTeams: "बड़ी टीमों के लिए",
    custom: "कस्टम",
    mostPopular: "सबसे लोकप्रिय",
    upTo5Projects: "5 प्रोजेक्ट्स तक",
    basicTaskMgmt: "बेसिक टास्क मैनेजमेंट",
    listBoardViews: "सूची और बोर्ड दृश्य",
    unlimitedProjects: "असीमित प्रोजेक्ट्स",
    allViews: "सभी दृश्य",
    goalsReporting: "लक्ष्य और रिपोर्टिंग",
    prioritySupport: "प्राथमिकता सहायता",
    everythingInPro: "प्रो में सब कुछ",
    ssoSaml: "SSO और SAML",
    customIntegrations: "कस्टम इंटीग्रेशन",
    dedicatedSupport: "समर्पित सहायता",
    
    // Navigation
    home: "होम",
    inbox: "इनबॉक्स",
    myTasks: "मेरे कार्य",
    projects: "प्रोजेक्ट्स",
    portfolios: "पोर्टफोलियो",
    goals: "लक्ष्य",
    reporting: "रिपोर्टिंग",
    
    // Tasks
    todo: "करने के लिए",
    doing: "प्रगति में",
    done: "पूर्ण",
    high: "उच्च",
    medium: "मध्यम",
    low: "कम",
    
    // Onboarding
    tellUsAboutWork: "अपने काम के बारे में बताएं",
    onboardingSubtitle: "यह हमें आपके लिए ProjectFlow को अनुकूलित करने में मदद करेगा।",
    whatsYourRole: "आपकी भूमिका क्या है?",
    selectRole: "अपनी भूमिका चुनें...",
    workFunction: "कौन सा कार्य आपके काम का सबसे अच्छा वर्णन करता है?",
    selectFunction: "एक कार्य चुनें...",
    useCase: "आप ProjectFlow का उपयोग किसलिए करना चाहते हैं?",
    selectUseCase: "एक उपयोग मामला चुनें...",
    whatTools: "आप कौन से उपकरण उपयोग करते हैं?",
    toolsSubtitle: "ProjectFlow आपकी टीम द्वारा हर दिन उपयोग किए जाने वाले उपकरणों से जुड़ता है।",
    teamSize: "आपकी टीम कितनी बड़ी है?",
    teamSizeSubtitle: "यह हमें आपकी टीम के आकार के लिए सर्वोत्तम सेटअप की सिफारिश करने में मदद करता है।",
    whatToManage: "आप पहले क्या प्रबंधित करना चाहते हैं?",
    manageSubtitle: "जो सबसे महत्वपूर्ण है उससे शुरू करें। आप हमेशा बाद में जोड़ सकते हैं।",
    takeToWorkspace: "मुझे मेरे कार्यस्थान पर ले जाएं",
    
    // Roles
    student: "छात्र",
    freelancer: "फ्रीलांसर",
    teamLead: "टीम लीड",
    projectManager: "प्रोजेक्ट मैनेजर",
    engineeringManager: "इंजीनियरिंग मैनेजर",
    productManager: "प्रोडक्ट मैनेजर",
    designer: "डिज़ाइनर",
    executive: "कार्यकारी",
    other: "अन्य",
    
    // Work Functions
    engineeringIT: "इंजीनियरिंग / IT",
    designCreative: "डिज़ाइन / क्रिएटिव",
    marketing: "मार्केटिंग",
    sales: "सेल्स",
    operations: "ऑपरेशंस",
    humanResources: "मानव संसाधन",
    finance: "फाइनेंस",
    education: "शिक्षा",
    research: "रिसर्च",
    
    // Team Sizes
    justMe: "सिर्फ मैं",
    people2to5: "2-5 लोग",
    people6to15: "6-15 लोग",
    people16to50: "16-50 लोग",
    people51to200: "51-200 लोग",
    people200plus: "200+ लोग",
    
    // Chatbot
    chatbotTitle: "मैं आपकी कैसे मदद कर सकता हूं?",
    askQuestion: "एक सवाल पूछें...",
    send: "भेजें",
    
    // Auth
    welcomeBack: "वापसी पर स्वागत है",
    loginSubtitle: "ProjectFlow पर जारी रखने के लिए लॉग इन करें",
    email: "ईमेल",
    password: "पासवर्ड",
    forgotPassword: "पासवर्ड भूल गए?",
    noAccount: "खाता नहीं है?",
    hasAccount: "पहले से खाता है?",
    createAccount: "अपना खाता बनाएं",
    signupSubtitle: "मुफ्त में प्रोजेक्ट्स प्रबंधित करना शुरू करें",
    fullName: "पूरा नाम",
    orContinueWith: "या इसके साथ जारी रखें",
    
    // Footer
    footerDesc: "तेजी से शिप करने वाली टीमों के लिए आधुनिक प्रोजेक्ट प्रबंधन।",
    product: "उत्पाद",
    company: "कंपनी",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    
    // Notifications
    notifications: "सूचनाएं",
    markAllRead: "सभी को पढ़ा हुआ चिह्नित करें",
    viewAll: "सभी देखें",
    noNotifications: "अभी तक कोई सूचना नहीं",
    
    // Actions
    newTask: "नया कार्य",
    newProject: "नया प्रोजेक्ट",
    newGoal: "नया लक्ष्य",
    
    // Theme
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    language: "भाषा",
  },
};

// Chatbot Q&A - Pre-login questions
const preLoginQA = {
  en: [
    { q: "What is ProjectFlow?", a: "ProjectFlow is a modern project management tool that helps teams organize work, track progress, and deliver projects on time." },
    { q: "Is ProjectFlow free to use?", a: "Yes! We offer a free plan with up to 5 projects and basic task management. You can upgrade to Pro for unlimited projects." },
    { q: "What features does ProjectFlow offer?", a: "ProjectFlow offers List, Board, Timeline, and Calendar views, plus Goals & Strategy tracking and Team Collaboration tools." },
    { q: "How do I sign up?", a: "Click the 'Get Started Free' button on our homepage, enter your details, and you'll be ready to start managing projects!" },
    { q: "Can I use ProjectFlow on mobile?", a: "Yes, ProjectFlow is fully responsive and works great on mobile devices, tablets, and desktops." },
    { q: "What payment methods are accepted?", a: "We accept all major credit cards, debit cards, and UPI payments for our Pro and Enterprise plans." },
    { q: "Is my data secure?", a: "Absolutely! We use industry-standard encryption and security practices to keep your data safe and private." },
    { q: "Can I invite my team?", a: "Yes! Once you sign up, you can invite unlimited team members to collaborate on your projects." },
    { q: "Do you offer customer support?", a: "Yes, we offer email support for free users and priority support for Pro users. Enterprise users get dedicated support." },
    { q: "What integrations are available?", a: "ProjectFlow integrates with Gmail, Slack, GitHub, Figma, Jira, and many other popular tools your team uses daily." },
  ],
  ta: [
    { q: "ProjectFlow என்றால் என்ன?", a: "ProjectFlow என்பது அணிகள் வேலையை ஒழுங்கமைக்கவும், முன்னேற்றத்தை கண்காணிக்கவும், திட்டங்களை நேரத்தில் வழங்கவும் உதவும் நவீன திட்ட மேலாண்மை கருவி." },
    { q: "ProjectFlow இலவசமா?", a: "ஆம்! 5 திட்டங்கள் வரை இலவச திட்டத்தை வழங்குகிறோம். வரம்பற்ற திட்டங்களுக்கு Pro-க்கு மேம்படுத்தலாம்." },
    { q: "ProjectFlow என்ன அம்சங்களை வழங்குகிறது?", a: "பட்டியல், போர்டு, காலவரிசை, நாட்காட்டி காட்சிகள், இலக்குகள் & மூலோபாயம் கண்காணிப்பு மற்றும் அணி ஒத்துழைப்பு கருவிகள்." },
    { q: "நான் எப்படி பதிவு செய்வது?", a: "முகப்புப் பக்கத்தில் 'இலவசமாக தொடங்கு' பொத்தானைக் கிளிக் செய்து, உங்கள் விவரங்களை உள்ளிடவும்!" },
    { q: "ProjectFlow மொபைலில் வேலை செய்யுமா?", a: "ஆம், ProjectFlow முழுமையாக பதிலளிக்கக்கூடியது மற்றும் மொபைல், டேப்லெட், டெஸ்க்டாப்பில் நன்றாக வேலை செய்கிறது." },
    { q: "என்ன கட்டண முறைகள் ஏற்றுக்கொள்ளப்படுகின்றன?", a: "Pro மற்றும் Enterprise திட்டங்களுக்கு அனைத்து முக்கிய கிரெடிட் கார்டுகள், டெபிட் கார்டுகள் மற்றும் UPI கட்டணங்களை ஏற்றுக்கொள்கிறோம்." },
    { q: "என் தரவு பாதுகாப்பானதா?", a: "நிச்சயமாக! உங்கள் தரவை பாதுகாப்பாகவும் தனிப்பட்டதாகவும் வைக்க தொழில்துறை-தரமான குறியாக்கத்தைப் பயன்படுத்துகிறோம்." },
    { q: "என் அணியை அழைக்க முடியுமா?", a: "ஆம்! பதிவு செய்த பிறகு, உங்கள் திட்டங்களில் ஒத்துழைக்க வரம்பற்ற அணி உறுப்பினர்களை அழைக்கலாம்." },
    { q: "வாடிக்கையாளர் ஆதரவு உள்ளதா?", a: "ஆம், இலவச பயனர்களுக்கு மின்னஞ்சல் ஆதரவும், Pro பயனர்களுக்கு முன்னுரிமை ஆதரவும் வழங்குகிறோம்." },
    { q: "என்ன ஒருங்கிணைப்புகள் உள்ளன?", a: "Gmail, Slack, GitHub, Figma, Jira மற்றும் பல பிரபலமான கருவிகளுடன் ProjectFlow ஒருங்கிணைக்கிறது." },
  ],
  hi: [
    { q: "ProjectFlow क्या है?", a: "ProjectFlow एक आधुनिक प्रोजेक्ट प्रबंधन टूल है जो टीमों को काम व्यवस्थित करने, प्रगति ट्रैक करने और समय पर प्रोजेक्ट्स डिलीवर करने में मदद करता है।" },
    { q: "क्या ProjectFlow मुफ्त है?", a: "हां! हम 5 प्रोजेक्ट्स तक मुफ्त प्लान देते हैं। असीमित प्रोजेक्ट्स के लिए Pro में अपग्रेड कर सकते हैं।" },
    { q: "ProjectFlow क्या सुविधाएं देता है?", a: "सूची, बोर्ड, टाइमलाइन, कैलेंडर दृश्य, लक्ष्य और रणनीति ट्रैकिंग और टीम सहयोग उपकरण।" },
    { q: "मैं कैसे साइन अप करूं?", a: "होमपेज पर 'मुफ्त में शुरू करें' बटन क्लिक करें, अपना विवरण दर्ज करें और आप तैयार हैं!" },
    { q: "क्या ProjectFlow मोबाइल पर काम करता है?", a: "हां, ProjectFlow पूरी तरह से रेस्पॉन्सिव है और मोबाइल, टैबलेट और डेस्कटॉप पर बढ़िया काम करता है।" },
    { q: "कौन सी भुगतान विधियां स्वीकार की जाती हैं?", a: "Pro और Enterprise प्लान के लिए सभी प्रमुख क्रेडिट कार्ड, डेबिट कार्ड और UPI भुगतान स्वीकार करते हैं।" },
    { q: "क्या मेरा डेटा सुरक्षित है?", a: "बिल्कुल! आपके डेटा को सुरक्षित और निजी रखने के लिए हम इंडस्ट्री-स्टैंडर्ड एन्क्रिप्शन का उपयोग करते हैं।" },
    { q: "क्या मैं अपनी टीम को आमंत्रित कर सकता हूं?", a: "हां! साइन अप करने के बाद, आप अपने प्रोजेक्ट्स पर सहयोग करने के लिए असीमित टीम सदस्यों को आमंत्रित कर सकते हैं।" },
    { q: "क्या कस्टमर सपोर्ट है?", a: "हां, मुफ्त उपयोगकर्ताओं के लिए ईमेल सपोर्ट और Pro उपयोगकर्ताओं के लिए प्राथमिकता सपोर्ट देते हैं।" },
    { q: "कौन से इंटीग्रेशन उपलब्ध हैं?", a: "Gmail, Slack, GitHub, Figma, Jira और कई अन्य लोकप्रिय टूल्स के साथ ProjectFlow इंटीग्रेट करता है।" },
  ],
};

// Chatbot Q&A - Post-login questions
const postLoginQA = {
  en: [
    { q: "How do I create a new project?", a: "Click the '+' button in the sidebar or go to Projects > Add Project. Fill in the project name, description, and team members." },
    { q: "How do I add a task?", a: "Navigate to any project, click 'Add Task' button, enter the task details including name, assignee, due date, and priority." },
    { q: "How do I change task status?", a: "In Board view, drag and drop tasks between columns. In List view, click on the status dropdown to change it." },
    { q: "How do I invite team members?", a: "Go to Settings > Team, click 'Invite Members', and enter their email addresses. They'll receive an invitation link." },
    { q: "How do I set project goals?", a: "Navigate to Goals in the sidebar, click 'Add Goal', and set your target, timeline, and key metrics." },
    { q: "How do I view my tasks?", a: "Click 'My Tasks' in the sidebar to see all tasks assigned to you across all projects." },
    { q: "How do I generate reports?", a: "Go to Reporting in the sidebar to view project analytics, team performance, and task completion rates." },
    { q: "How do I change my profile?", a: "Click on your avatar in the sidebar, then select 'Settings' to update your profile information." },
    { q: "How do I switch between views?", a: "In any project, use the view tabs at the top (List, Board, Timeline, Calendar) to switch between different views." },
    { q: "How do I set task priority?", a: "When creating or editing a task, select the priority level (High, Medium, Low) from the priority dropdown." },
  ],
  ta: [
    { q: "புதிய திட்டத்தை எப்படி உருவாக்குவது?", a: "பக்கப்பட்டியில் '+' பொத்தானைக் கிளிக் செய்யவும் அல்லது திட்டங்கள் > திட்டம் சேர் என்பதற்குச் செல்லவும்." },
    { q: "பணியை எப்படி சேர்ப்பது?", a: "எந்த திட்டத்திற்கும் செல்லவும், 'பணி சேர்' பொத்தானைக் கிளிக் செய்து, பெயர், ஒதுக்கப்பட்டவர், நிலுவை தேதி உள்ளிடவும்." },
    { q: "பணி நிலையை எப்படி மாற்றுவது?", a: "போர்டு காட்சியில், நெடுவரிசைகளுக்கு இடையில் பணிகளை இழுத்து விடவும். பட்டியல் காட்சியில், நிலை dropdown-ஐ கிளிக் செய்யவும்." },
    { q: "அணி உறுப்பினர்களை எப்படி அழைப்பது?", a: "அமைப்புகள் > அணி என்பதற்குச் சென்று, 'உறுப்பினர்களை அழை' என்பதைக் கிளிக் செய்து, அவர்களின் மின்னஞ்சலை உள்ளிடவும்." },
    { q: "திட்ட இலக்குகளை எப்படி அமைப்பது?", a: "பக்கப்பட்டியில் இலக்குகள் என்பதற்குச் செல்லவும், 'இலக்கு சேர்' என்பதைக் கிளிக் செய்து, உங்கள் இலக்கை அமைக்கவும்." },
    { q: "என் பணிகளை எப்படி பார்ப்பது?", a: "அனைத்து திட்டங்களிலும் உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பணிகளையும் பார்க்க பக்கப்பட்டியில் 'என் பணிகள்' என்பதைக் கிளிக் செய்யவும்." },
    { q: "அறிக்கைகளை எப்படி உருவாக்குவது?", a: "திட்ட பகுப்பாய்வு, அணி செயல்திறன் மற்றும் பணி நிறைவு விகிதங்களைப் பார்க்க பக்கப்பட்டியில் அறிக்கை என்பதற்குச் செல்லவும்." },
    { q: "என் சுயவிவரத்தை எப்படி மாற்றுவது?", a: "பக்கப்பட்டியில் உங்கள் அவதாரத்தைக் கிளிக் செய்து, உங்கள் சுயவிவரத்தைப் புதுப்பிக்க 'அமைப்புகள்' என்பதைத் தேர்ந்தெடுக்கவும்." },
    { q: "காட்சிகளுக்கு இடையில் எப்படி மாறுவது?", a: "எந்த திட்டத்திலும், வெவ்வேறு காட்சிகளுக்கு மாற மேலே உள்ள காட்சி தாவல்களைப் பயன்படுத்தவும் (பட்டியல், போர்டு, காலவரிசை, நாட்காட்டி)." },
    { q: "பணி முன்னுரிமையை எப்படி அமைப்பது?", a: "பணியை உருவாக்கும் போது அல்லது திருத்தும் போது, முன்னுரிமை dropdown-இலிருந்து முன்னுரிமை நிலையைத் தேர்ந்தெடுக்கவும்." },
    { q: "வெளியேறுவது எப்படி?", a: "பக்கப்பட்டியில் உங்கள் அவதாரத்தைக் கிளிக் செய்து 'வெளியேறு' என்பதைத் தேர்ந்தெடுக்கவும்." },
  ],
  hi: [
    { q: "नया प्रोजेक्ट कैसे बनाएं?", a: "साइडबार में '+' बटन क्लिक करें या प्रोजेक्ट्स > प्रोजेक्ट जोड़ें पर जाएं। प्रोजेक्ट का नाम, विवरण और टीम सदस्य भरें।" },
    { q: "टास्क कैसे जोड़ें?", a: "किसी भी प्रोजेक्ट पर जाएं, 'टास्क जोड़ें' बटन क्लिक करें, नाम, असाइनी, देय तिथि और प्राथमिकता सहित विवरण दर्ज करें।" },
    { q: "टास्क स्टेटस कैसे बदलें?", a: "बोर्ड व्यू में, कॉलम के बीच टास्क ड्रैग और ड्रॉप करें। लिस्ट व्यू में, स्टेटस ड्रॉपडाउन क्लिक करें।" },
    { q: "टीम सदस्यों को कैसे आमंत्रित करें?", a: "सेटिंग्स > टीम पर जाएं, 'सदस्य आमंत्रित करें' क्लिक करें, और उनके ईमेल पते दर्ज करें।" },
    { q: "प्रोजेक्ट लक्ष्य कैसे सेट करें?", a: "साइडबार में लक्ष्य पर जाएं, 'लक्ष्य जोड़ें' क्लिक करें, और अपना लक्ष्य, समयरेखा और मुख्य मैट्रिक्स सेट करें।" },
    { q: "अपने टास्क कैसे देखें?", a: "सभी प्रोजेक्ट्स में आपको असाइन किए गए सभी टास्क देखने के लिए साइडबार में 'मेरे टास्क' क्लिक करें।" },
    { q: "रिपोर्ट कैसे बनाएं?", a: "प्रोजेक्ट एनालिटिक्स, टीम परफॉर्मेंस और टास्क कम्प्लीशन रेट देखने के लिए साइडबार में रिपोर्टिंग पर जाएं।" },
    { q: "अपनी प्रोफाइल कैसे बदलें?", a: "साइडबार में अपने अवतार पर क्लिक करें, फिर अपनी प्रोफाइल जानकारी अपडेट करने के लिए 'सेटिंग्स' चुनें।" },
    { q: "व्यू के बीच कैसे स्विच करें?", a: "किसी भी प्रोजेक्ट में, अलग-अलग व्यू के बीच स्विच करने के लिए ऊपर व्यू टैब (लिस्ट, बोर्ड, टाइमलाइन, कैलेंडर) का उपयोग करें।" },
    { q: "टास्क प्राथमिकता कैसे सेट करें?", a: "टास्क बनाते या संपादित करते समय, प्राथमिकता ड्रॉपडाउन से प्राथमिकता स्तर (उच्च, मध्यम, कम) चुनें।" },
  ],
};

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("projectflow-language");
    const savedTheme = localStorage.getItem("projectflow-theme");
    if (savedLang && ["en", "ta", "hi"].includes(savedLang)) {
      setLanguage(savedLang);
    }
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("projectflow-language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("projectflow-theme", theme);
    // Apply theme class to document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const t = useCallback((key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  }, [language]);

  const changeLanguage = useCallback((lang) => {
    if (["en", "ta", "hi"].includes(lang)) {
      setLanguage(lang);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const getPreLoginQA = useCallback(() => {
    return preLoginQA[language] || preLoginQA.en;
  }, [language]);

  const getPostLoginQA = useCallback(() => {
    return postLoginQA[language] || postLoginQA.en;
  }, [language]);

  return (
    <TranslationContext.Provider
      value={{
        language,
        theme,
        t,
        changeLanguage,
        toggleTheme,
        setTheme,
        getPreLoginQA,
        getPostLoginQA,
        languages: [
          { code: "en", name: "English", nativeName: "English" },
          { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
          { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
        ],
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}
