
export type EventStatus = "ALL" | "UPCOMING" | "ONGOING" | "COMPLETED";

export interface Event {
    id: number;
    title: string;
    date: string;
    time?: string;
    venue: string;
    status: EventStatus;
    category: string;
    year: number;
    description: string;
    highlights?: string[];
    organizers?: string[];
    capacity?: string;
    registration?: string;
    image?: string;
}

export const events: Event[] = [
    // --- Current / Upcoming Events (IDs 1-5) ---
    {
        id: 1,
        title: "Fine Tune talks 1: Journey of a Web developer",
        date: "24 JUN 2022",
        time: "7:00 PM",
        venue: "Online (StreamYard)",
        status: "COMPLETED",
        category: "TALK SESSION",
        year: 2022,
        description: "The first session of Fine Tune talks featuring a discussion on the experiences of a web developer and a mentorship journey in a TinkerHub boot camp. The official website of IET MBCET was also launched during this event.",
        highlights: [
            "Journey of a Web Developer presentation",
            "Official IET MBCET website launch",
            "Mentorship journey insights"
        ],
        organizers: ["IET MBCET"],
        capacity: "46 participants",
        registration: "Closed",
        image: "../event-data/1.png"
    },
    {
        id: 2,
        title: "Fine Tune talks 2: Introduction to NFT's",
        date: "15 JUL 2022",
        time: "7:00 PM",
        venue: "Online",
        status: "COMPLETED",
        category: "TALK SESSION",
        year: 2022,
        description: "An engaging session exploring the concept of NFTs and their significance in the art world. It covered how NFT ownership connects to an artist's personal narrative and growth.",
        highlights: [
            "Introduction to NFT art",
            "Insights from Web 3 enthusiast Noel Varughese",
            "Interactive Q&A on digital assets"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/2.png"
    },
    {
        id: 3,
        title: "Fine Tune talks 3: Git and Git-Hub",
        date: "09 AUG 2022",
        time: "7:00 PM",
        venue: "Online",
        status: "COMPLETED",
        category: "TALK SESSION",
        year: 2022,
        description: "A session focusing on the fundamentals of Git and GitHub, essential tools for version control and collaboration in modern software development workflows.",
        highlights: [
            "Fundamentals of version control",
            "Practical usage of GitHub",
            "Insights into software development workflows"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/3.png"
    },
    {
        id: 4,
        title: "PATW’22- College Heats",
        date: "26 OCT 2022",
        time: "Not specified",
        venue: "Aryabhata Hall, MBCET",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2022,
        description: "The Present Around The World (PATW) competition allows engineering students to showcase their presentation skills and technical knowledge on socially relevant topics.",
        highlights: [
            "Global competition format",
            "Evaluation by expert panel of judges",
            "Presentations on technical topics"
        ],
        organizers: ["IET MBCET"],
        capacity: "10 shortlisted participants",
        registration: "Closed",
        image: "../event-data/4.png"
    },
    {
        id: 5,
        title: "SkillX 2022: Getting Started with Python",
        date: "10 NOV 2022 - 16 NOV 2022",
        time: "Not specified",
        venue: "Online",
        status: "COMPLETED",
        category: "WORKSHOP",
        year: 2022,
        description: "A 7-day intensive practical hands-on workshop focused on developing Python programming skills and improving student employability.",
        highlights: [
            "Hands-on Python training",
            "Sessions by industry professional from UST",
            "Focus on technical skill development"
        ],
        organizers: ["IET MBCET", "Computer Science Department"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/5.png"
    },
    {
        id: 6,
        title: "IET Young Professionals Summit 2022",
        date: "11 NOV 2022 - 12 NOV 2022",
        time: "Not specified",
        venue: "IET Headquarters, London",
        status: "COMPLETED",
        category: "SUMMIT",
        year: 2022,
        description: "A global meetup for selected young professional volunteers of the IET, featuring networking, learning, and professional development workshops.",
        highlights: [
            "Global networking opportunities",
            "Professional development workshops",
            "Representation of MBCET on a global stage"
        ],
        organizers: ["IET Global"],
        capacity: "130 selected professionals",
        registration: "Closed",
        image: "../event-data/6.png"
    },
    {
        id: 7,
        title: "IET Future Tech Congress (FTC)",
        date: "21 NOV 2022 - 23 NOV 2022",
        time: "Not specified",
        venue: "Bangalore",
        status: "COMPLETED",
        category: "CONFERENCE",
        year: 2022,
        description: "A platform for sharing ideas and experiences regarding sectors like healthcare, manufacturing, and fin-tech, offering a futurescape of upcoming demands.",
        highlights: [
            "Exploration of mobility and fin-tech trends",
            "Action-packed physical event",
            "Networking with industry leaders"
        ],
        organizers: ["IET South Asia"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/7.png"
    },
    {
        id: 8,
        title: "INSIET",
        date: "16 DEC 2022",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "COMPLETED",
        category: "AWARENESS PROGRAM",
        year: 2022,
        description: "An event organized to raise awareness about the IET among students and discuss the benefits of professional membership.",
        highlights: [
            "Talk session by IET South Asia managers",
            "Networking with IET YP chairpersons",
            "Membership benefit overview"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/8.png"
    },
    {
        id: 9,
        title: "8th Annual General Meeting & IET KKLN Award Function",
        date: "17 DEC 2022",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "COMPLETED",
        category: "AWARD FUNCTION",
        year: 2022,
        description: "A significant event where the MBCET chapter and its faculty advisor received recognition for excellence in promoting technical skills.",
        highlights: [
            "IET KKLN Premier On Campus Award",
            "Best Faculty Advisor Award",
            "Keynote by Principal, MBCET"
        ],
        organizers: ["IET MBCET", "IET KKLN"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/9.png"
    },
    {
        id: 10,
        title: "Rec the Trick",
        date: "06 JAN 2023",
        time: "Not specified",
        venue: "Faraday Hall, MBCET",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2023,
        description: "A logical quiz competition designed to test aptitude and wisdom required for competitive exams.",
        highlights: [
            "Logical reasoning challenges",
            "Aptitude skill building",
            "Participation by faculty and students"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/10.png"
    },
    {
        id: 11,
        title: "Doodle",
        date: "13 JAN 2023",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2023,
        description: "A creative drawing competition themed around 'Geometric Arts' to showcase artistic talent through various mediums.",
        highlights: [
            "Theme: Geometric Arts",
            "Digital and manual art styles",
            "Showcase of student creativity"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/11.png"
    },
    {
        id: 12,
        title: "IGNIET",
        date: "26 JAN 2023",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "COMPLETED",
        category: "ICE-BREAKING",
        year: 2023,
        description: "An introductory orientation event for college freshmen featuring ice-breaking sessions, team games, and a dreamcatcher-making workshop.",
        highlights: [
            "Interactive ice-breaking session",
            "Team-building games",
            "Dreamcatcher making workshop"
        ],
        organizers: ["IET Working Committee", "IET Core team"],
        capacity: "51 participants",
        registration: "Closed",
        image: "../event-data/12.png"
    },
    {
        id: 13,
        title: "Outreach 150: Village Visit",
        date: "25 MAR 2023",
        time: "Not specified",
        venue: "Rural community site",
        status: "COMPLETED",
        category: "OUTREACH",
        year: 2023,
        description: "A site visit to rural areas to establish community contacts and plan impactful awareness programs and clean-up drives.",
        highlights: [
            "Site assessment for rural outreach",
            "Collaboration with community organizations",
            "Documentation of community needs"
        ],
        organizers: ["IET Core Team"],
        capacity: "Core team members",
        registration: "Closed",
        image: "../event-data/13.png"
    },
    {
        id: 14,
        title: "Pitchpoint: Online Presentation Competition",
        date: "10 MAY 2023",
        time: "10-minute slots",
        venue: "Online",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2023,
        description: "A virtual showcase focused on sustainable problem-solving aligned with the United Nations' 17 Sustainable Development Goals.",
        highlights: [
            "Focus on UN Sustainable Development Goals",
            "Innovative environmental solutions",
            "Expert feedback and networking"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/14.png"
    },
    {
        id: 15,
        title: "ONSIET: Outreach 150 Cleanup Drive",
        date: "15 JUL 2023",
        time: "Not specified",
        venue: "Vellanikkal Paramukal Viewpoint",
        status: "COMPLETED",
        category: "OUTREACH",
        year: 2023,
        description: "A collaborative clean-up drive with NSS to restore the natural beauty of scenic viewpoints and promote environmental responsibility.",
        highlights: [
            "Restoration of natural surroundings",
            "Collaboration with NSS",
            "Community environmental impact"
        ],
        organizers: ["IET MBCET", "NSS"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/15.png"
    },
    {
        id: 16,
        title: "INGRESS’23",
        date: "17 JUL 2023",
        time: "Not specified",
        venue: "Online platform / MBCET Campus",
        status: "COMPLETED",
        category: "LEADERSHIP SUMMIT",
        year: 2023,
        description: "A transformative immersive experience designed to unlock global leadership potential through interactive workshops and expert sessions.",
        highlights: [
            "Global leadership development",
            "Interactive workshops and competitions",
            "Industry expert connections"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 17,
        title: "IET Young Professionals Meet",
        date: "14 OCT 2023",
        time: "Not specified",
        venue: "ST. Xavier's College Nagercoil",
        status: "COMPLETED",
        category: "MEETUP",
        year: 2023,
        description: "A collaborative meet involving IET On-Campus starter students, IET Officials, and peers from various institutions to discuss future initiatives and forge professional connections.",
        highlights: [
            "Insightful discussions on IET future plans",
            "Networking with IET Officials",
            "Collaborative ideation with peer institutions"
        ],
        organizers: ["IET MBCET", "IET KKLN"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 18,
        title: "INSIET",
        date: "30 OCT 2023",
        time: "Not specified",
        venue: "Online",
        status: "COMPLETED",
        category: "AWARENESS PROGRAM",
        year: 2023,
        description: "An online awareness session to educate students on the benefits of professional membership in the IET, handled by distinguished guest speakers.",
        highlights: [
            "Guest session by Ms. Likhitha Chandrasekara (Former PATW)",
            "Professional development overview by Geoffer Jaish (Chairman, IET KKLN YP)",
            "Focus on global recognition and career resources"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/18.png"
    },
    {
        id: 19,
        title: "IET President’s Address & IET India Award Night",
        date: "06 NOV 2023",
        time: "Not specified",
        venue: "Bangalore",
        status: "COMPLETED",
        category: "AWARD FUNCTION",
        year: 2023,
        description: "A prestige event honoring technical achievements and featuring a keynote on AI's potential for India by Dr. Gopichand Katragadda.",
        highlights: [
            "Presidential address by Dr. Gopichand Katragadda",
            "Transformative potential of AI theme",
            "Felicitation of individual engineering achievements"
        ],
        organizers: ["IET India"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/19.png"
    },
    {
        id: 20,
        title: "Children’s Day Poster Design Competition",
        date: "16 NOV 2023",
        time: "Not specified",
        venue: "Online",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2023,
        description: "An online creative competition themed 'Sweet Indulgence: Chocolate, a Good Measure?' to celebrate Children's Day.",
        highlights: [
            "Inter-collegiate participation",
            "Thematic creative design",
            "Winner: Shwetha Krishnan Suresh (MBCET)"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/20.png"
    },
    {
        id: 21,
        title: "Rec the Trick",
        date: "08 DEC 2023",
        time: "Not specified",
        venue: "Faraday Hall, MBCET",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2023,
        description: "A logical quiz for students and faculty designed to improve aptitude and reasoning skills for competitive exams.",
        highlights: [
            "Wisdom and aptitude challenges",
            "Cross-departmental participation",
            "Winner: Rhon S George (S5 CS2)"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/21.png"
    },
    {
        id: 22,
        title: "Fraeunpower: Photography Competition",
        date: "08 MAR 2024",
        time: "Not specified",
        venue: "Online",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2024,
        description: "A Women's Day special photography contest themed 'Capture Her Story in a Frame' to highlight strength and resilience.",
        highlights: [
            "Theme: Strength and beauty of women",
            "Resilience and daily life storytelling",
            "Winner: Rohan U S (B.Tech EEE, MBCET)"
        ],
        organizers: ["IET MBCET"],
        capacity: "11 entries",
        registration: "Closed",
        image: "../event-data/22.png"
    },
    {
        id: 23,
        title: "PI Quest",
        date: "14 MAR 2024",
        time: "9:00 PM",
        venue: "Online (Quizizz)",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2024,
        description: "An interactive math quiz held on World Pi Day to challenge students' understanding of mathematical principles and the significance of pi.",
        highlights: [
            "Conducted on Quizizz platform",
            "Questions on π applications and formulas",
            "Winner: Sanal Sajan (S4 CS1)"
        ],
        organizers: ["IET MBCET"],
        capacity: "Close to 100 participants",
        registration: "Closed",
        image: "../event-data/23.png"
    },
    {
        id: 24,
        title: "Fine Tune Talks 2: Electric Vehicles",
        date: "16 MAR 2024",
        time: "9:30 AM",
        venue: "EV Lab, Ground Floor K Block",
        status: "COMPLETED",
        category: "TALK SESSION",
        year: 2024,
        description: "A technical talk and demonstration focused on EV design, environmental benefits, and adoption challenges.",
        highlights: [
            "Demonstration of a retrofitted electric auto",
            "Session handled by Prof. Aswin RB",
            "Deep dive into EV adoption challenges"
        ],
        organizers: ["IET MBCET"],
        capacity: "26 participants",
        registration: "Closed",
        image: "../event-data/24.png"
    },
    {
        id: 25,
        title: "Talk session on India’s Lunar Mission",
        date: "25 MAR 2024",
        time: "4:30 PM",
        venue: "CET Campus",
        status: "COMPLETED",
        category: "TALK SESSION",
        year: 2024,
        description: "An informative session detailing the evolution from Chandrayan 2 to Chandrayan 3, led by an ISRO scientist.",
        highlights: [
            "Speaker: Dr. S Geetha (Scientist, ISRO)",
            "Technical comparison of Lunar missions",
            "Joint session with IET On-Campus CET"
        ],
        organizers: ["IET On-Campus CET", "IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/25.png"
    },
    {
        id: 26,
        title: "Talk Session on Predictive Science",
        date: "08 APR 2024",
        time: "3:30 PM - 4:30 PM",
        venue: "Faraday Hall, MBCET",
        status: "COMPLETED",
        category: "TALK SESSION",
        year: 2024,
        description: "An exclusive talk for IET members focusing on the applications and principles of predictive science.",
        highlights: [
            "Speaker: Dr. Lalin L. Laudis",
            "Expert session on modern predictive methodologies",
            "Member-exclusive technical event"
        ],
        organizers: ["IET MBCET"],
        capacity: "Exclusively for IET members",
        registration: "Closed",
        image: "../event-data/26.jpg"
    },
    {
        id: 27,
        title: "Old Age Home Visit",
        date: "13 APR 2024",
        time: "Not specified",
        venue: "Caramel Old Age Home, Aryand",
        status: "COMPLETED",
        category: "OUTREACH",
        year: 2024,
        description: "A festive outreach program for Vishu featuring music performances and a shared lunch with the residents.",
        highlights: [
            "Singing and violin performances",
            "Intergenerational connection building",
            "Community happiness initiative"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/27.jpg"
    },
    {
        id: 28,
        title: "IET Future Tech Congress",
        date: "02 SEP 2024",
        time: "Not specified",
        venue: "Sheraton Grand Hotel, Bangalore",
        status: "UPCOMING",
        category: "CONFERENCE",
        year: 2024,
        description: "A pivotal national tech event exploring Automation, AI, and Digital Industries with Siemens as the presenting partner.",
        highlights: [
            "Industry leadership panels",
            "Focus on Industrial Metaverse and Quantum Tech",
            "Theme: India's Component Conundrum"
        ],
        organizers: ["IET India"],
        capacity: "Not specified",
        registration: "Open",
        image: "../event-data/28.jpg"
    },
    {
        id: 29,
        title: "INGRESS’24",
        date: "AUG-SEP 2024",
        time: "Two rounds of interviews",
        venue: "MBCET Campus",
        status: "ONGOING",
        category: "SELECTION",
        year: 2024,
        description: "The official selection process for the IET Execom office bearers for the 2024-25 term.",
        highlights: [
            "Recruitment of 12 new office bearers",
            "Leadership skill assessment",
            "Selection of Nevin Thomas Thomas as Chairperson"
        ],
        organizers: ["IET MBCET"],
        capacity: "12 selected candidates",
        registration: "Closed",
        image: "../event-data/29.jpg"
    },
    {
        id: 30,
        title: "PATLN College Heats at MBCET",
        date: "05 OCT 2024",
        time: "Not specified",
        venue: "MBCET Campus, Trivandrum",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2024,
        description: "A dynamic platform for technical presentations where students showcased advanced technical topics. Judged by a distinguished panel from various departments and alumni.",
        highlights: [
            "Winner: Anand Pillai (S5 CS2)",
            "Runner-up: Ann Santhosh (S7 EC2)",
            "Expert judging panel from MBCET departments"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: "../event-data/30.jpg"
    },
    {
        id: 31,
        title: "PATLN Finals",
        date: "10 OCT 2024",
        time: "Not specified",
        venue: "Uday Suites, Shangumukham",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2024,
        description: "The Present Around The Local Network (PATLN) finals featuring students from various colleges under the KKLN Local Network.",
        highlights: [
            "Representative: Anand Pillai (S5 CS2)",
            "Anand Pillai secured Runner-up position in the local network",
            "Technical expertise showcase across multiple colleges"
        ],
        organizers: ["IET KKLN"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 32,
        title: "IET KKLN YP Award Ceremony 2024",
        date: "10 OCT 2024",
        time: "Not specified",
        venue: "Uday Suites",
        status: "COMPLETED",
        category: "AWARDS",
        year: 2024,
        description: "An award function celebrating the achievements of outstanding student volunteers and outgoing students from the KKLN local network.",
        highlights: [
            "Best Outgoing Student Award: Ms. Sanna Pramod",
            "Outstanding Student Volunteer Awards: Ms. Samyuktha Syam, Mr. Anand R, Mr. Sarang GS",
            "Celebration of student leadership and contribution"
        ],
        organizers: ["IET KKLN"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 33,
        title: "DIABEAT IT – Poster Making Competition",
        date: "14 NOV 2024",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2024,
        description: "A poster-making competition likely focused on health awareness or scientific communication.",
        highlights: [
            "Poster design and creative communication focus",
            "Held in coordination with IET on-campus activities"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 34,
        title: "10th Annual General Meeting (AGM) & Award Ceremony",
        date: "13 DEC 2024",
        time: "Not specified",
        venue: "Soma Palmshore, Kovalam",
        status: "COMPLETED",
        category: "MEETING",
        year: 2024,
        description: "A milestone 10th AGM reflecting on organizational accomplishments and outlining future endeavors. Includes an award ceremony for leadership.",
        highlights: [
            "Outstanding Leadership Award: Dr. Soumya A.V",
            "Dr. Soumya A.V elected as Secretary of IET KKLN",
            "Participation by high-level dignitaries like Dr. Maresaline Beno and Dr. Lenin Fred"
        ],
        organizers: ["IET MBCET", "IET KKLN"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 35,
        title: "What If? – Rewrite the Marvel Multiverse",
        date: "09 JAN 2025",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "COMPLETED",
        category: "COMPETITION",
        year: 2025,
        description: "A creative storytelling or technical reimagining competition centered around the Marvel multiverse concept.",
        highlights: [
            "Creative logic and alternative outcome focus",
            "Interactive session for enthusiasts"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Closed",
        image: ""
    },
    {
        id: 36,
        title: "Sustainathon 2025",
        date: "21 FEB 2025 - 22 FEB 2025",
        time: "48-hour event (estimated)",
        venue: "MBCET Campus",
        status: "UPCOMING",
        category: "COMPETITION",
        year: 2025,
        description: "A hackathon-style event focusing on sustainable engineering solutions and green technology innovations.",
        highlights: [
            "Multidisciplinary sustainability challenges",
            "Focus on eco-friendly engineering designs"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Completed",
        image: ""
    },
    {
        id: 37,
        title: "Innovista 2025",
        date: "30 APR 2025",
        time: "Not specified",
        venue: "MBCET Campus",
        status: "UPCOMING",
        category: "EXHIBITION",
        year: 2025,
        description: "A technical exhibition showcasing innovative projects and engineering designs from the on-campus community.",
        highlights: [
            "Platform for undergraduate project showcases",
            "Networking with potential industry mentors"
        ],
        organizers: ["IET MBCET"],
        capacity: "Not specified",
        registration: "Completed",
        image: ""
    },
];
