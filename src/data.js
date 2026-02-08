export const projects = [
    {
        title: "BEEXPERT",
        description: "AI chatbot system created to assist high school students in learning Trigonometry. Built combining GPT-4o and Retrieval Augmented Generation (RAG).",
        category: "GEN AI & EDUCATION",
        type: "education",
        url: "https://linktr.ee/beexpert_chatbot"
    },
    {
        title: "Car Accident Classification",
        description: "Comparative study of MobileNetV3, EfficientNetV2, and ResNet50 models to classify car accident shots from CCTV using Python.",
        category: "DEEP LEARNING",
        type: "folder",
        url: "https://github.com/angelinemarym/Car-Accident-Classification"
    },
    {
        title: "BINUSMAYA",
        description: "Mobile and web application for Bina Nusantara students to manage their academic and extracurricular activities. Built using React Native, ReactJS, and .NET Core.",
        category: "MOBILE & WEB APP",
        type: "web",
        url: "https://play.google.com/store/apps/details?id=id.ac.binus.maya&hl=id"
    },
    {
        title: "Hotto Inventory Management System",
        description: "Inventory management system for Hotto, a healthy instant drink product company in Jakarta. Built using NextJS and Golang.",
        category: "WEB APP",
        type: "web",
        url: "https://hims.hotto.co.id/"
    }
];

export const experience = [
    {
        role: "Freelance Backend Software Engineer",
        company: "Coding Studio",
        description: "Developed backend features of Coding Studio and Hotto websites using Golang.",
        period: "Mar 2025 - Present",
        location: "REMOTE",
        type: "code"
    },
    {
        role: "Programmer",
        company: "Bina Nusantara IT Division (BINUSMAYA)",
        description: "Developed frontend/backend features using React Native, ReactJS, and .NET Core. Optimized API performance and Azure implementations.",
        period: "Mar 2023 - Aug 2025",
        location: "JAKARTA, INDONESIA",
        type: "code"
    },
    {
        role: "Freelance Mobile Developer",
        company: "eDOT (eLOG Project)",
        description: "Collaborated to build a logistic mobile application using React Native.",
        period: "Sep 2022 - Dec 2022",
        location: "REMOTE",
        type: "code"
    },
    {
        role: "Mobile Developer Intern",
        company: "Seeds Finance",
        description: "Developed mobile application features for Seeds, a financial services company, using React Native.",
        period: "Jun 2022 - Aug 2022",
        location: "REMOTE",
        type: "code"
    }
];

export const awards = [
    {
        title: "Best Paper Award",
        description: "2025 IEEE International Conference (ICoICT) for \"BEEXPERT\" research.",
        type: "award"
    },
    {
        title: "Chinese Government Scholarship",
        description: "Full scholarship for Master's program at Beijing Institute of Technology.",
        type: "scholarship"
    }
];

export const education = [
    {
        school: "Beijing Institute of Technology",
        degree: "Master of Science - MS, Computer Science and Technology",
        period: "Sep 2025 — Jul 2027",
        details: [],
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Beijing_Institute_of_Technology_F.C.svg/960px-Beijing_Institute_of_Technology_F.C.svg.png"
    },
    {
        school: "BINUS University",
        degree: "Bachelor's degree, Computer Science",
        period: "Sep 2021 — Apr 2025",
        details: [
            "Grade: 3.95/4.00",
            "Predicate: Summa cumlaude"
        ],
        logo: "https://upload.wikimedia.org/wikipedia/id/a/a2/Logo_Binus_University.png"
    },
    {
        school: "Beijing Institute of Technology",
        degree: "Exchange, Computer Science",
        period: "Feb 2024 — Jun 2024",
        details: [
            "Grade: 3.80/4.00",
            "Courses taken: Data Science and Algorithms, Big Data Processing Technology, Computer Graphics, Computer Controlled System, Sensor and Measurement Technology, Introduction to Digital Finance, Money and Banking, World Economy, Microeconomics"
        ],
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Beijing_Institute_of_Technology_F.C.svg/960px-Beijing_Institute_of_Technology_F.C.svg.png"
    }
];

export const publications = [
    {
        title: "BEEXPERT: Voice-based Chatbot with Retrieval Augmented Generation for Personal High School Mathematics Tutor",
        publisher: "IEEE",
        date: "Oct 14, 2025",
        description: "Artificial Intelligence (AI) chatbots are increasingly used as personal tutors, especially in teaching high school mathematics. However, existing tools often lack conversational depth, neglect critical thinking, and risk providing false information. To address these issues, this paper introduces BEEXPERT, a voice-based chatbot designed to assist high school students in learning trigonometry. Powered by a Retrieval-Augmented Generation (RAG) system, it retrieves accurate, contextually relevant information from an OpenWebMath dataset of 515 trigonometry documents, supporting interactions in English and Indonesian. While the RAG system achieved substantial correctness (72.98%), it struggled with faithfulness (31.91%) and relevance (47.87%) due to hallucinations and context fragmentation. Feedback from preliminary testing and the Godspeed Questionnaire Series (GQS) highlights positive user reception, with 88% for likeability, 80% for perceived intelligence, and 75% for anthropomorphism. Expert validation also confirmed alignment with the school curriculum. Suggestions for improvement, such as refined prompts and enhanced features, have been partially implemented, with future updates planned to optimize the system further. In essence, BEEXPERT demonstrates significant potential as a personalized learning tool while highlighting areas for improvement to ensure a more robust and effective educational experience.",
        url: "https://ieeexplore.ieee.org/document/11192932"
    },
    {
        title: "Convolutional Neural Network Algorithms for Car Accident Classification",
        publisher: "IEEE",
        date: "Jan 16, 2024",
        description: "Road accident is one of the top contributors to the number of death tolls around the globe. Consequently, much effort has been put in to minimize road accidents, and not often are many lives lost due to delayed response from emergency medical teams, notably in secluded or congested areas in the event of road accidents. The implementation of numerous deep learning algorithms has been widely used in many research fields; road accident detection is no exception. Therefore, this paper highlights and compares 3 different classification models from convolutional neural networks (CNN), namely MobileNetV3-Large, EfficientNetV2L, and ResNet-50 trained with a dataset of Closed-Circuit Television (CCTV) scenes obtained from Kaggle. The evaluation metrics consist of four categories for each proposed model, such as accuracy, precision, recall, and f1-score from two distinct classes, which are accident and non-accident events. Based on our study, it is evidently proven that ResNet-50 gained the overall highest f1-score of 95.13% followed by EfficientNetV2L and MobileNetV3-Large with 83.24% and 75.56% respectively. Additionally, ResNet-50's result validates the highest point with an average of 95.19% in terms of the remaining evaluation metrics, then 83.49% and 75.62% for EfficientNetV2L and MobileNetV3-Large correspondingly. Ultimately, ResNet-50 serves as the most appropriate and reliable convolutional neural network model in detecting a road accident effectively, followed with the lowest risk of detection inaccuracies.",
        url: "https://ieeexplore.ieee.org/document/10390261"
    }
];
