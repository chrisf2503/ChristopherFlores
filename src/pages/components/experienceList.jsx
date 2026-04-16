import img1 from '../../assets/uniqlo.jpg'
import img2 from '../../assets/nangman.jpeg'
import img3 from '../../assets/OurNationalConversation.png'

export const work_list = [
    {id: 1, img : img1, title: 'Sales Associate', address: "New York NY", employer: 'UNIQLO 5th AV', startDate: 'October 2026', endDate: 'Present', 
        description: 
        [
            "Deliver excellent customer service by assisting customers with product availability and product recommendations",
            "Assist management in planning and adjusting store layouts based on seasonal collection, inventory levels, and store operational needs",
            "Track sales performance across previous and current periods, analyzing trends to support team planning and sales strategies",
            "Collaborate with team members to develop plans that boost sales and optimize product placement based on store needs"
        ]},
    {id: 2, img : img3, title: 'Software Developer Intern', employer: 'Our National Conversation', startDate: 'June 2024', endDate: 'December 2024', 
        description: [
            "Built and maintained web application features using React.js",
            "Implemented functionality according to design and operational requirements",
            "Documented codebase and general structure of the overall product",
            "Documented code structure and workflow to support maintainability and team collaboration"
        ]},
    {id: 3, img : img2, title: 'Assistant Manager', employer: 'Nangman BBQ', startDate: 'October 2021', endDate: 'August 2024', 
        description: [
            "Oversaw daily operations to ensure smooth workflow and efficient service",
            "Coordinated team responsibilities and resolved operational issues quickly during high-volume hours",
            "Managed inventory levels and ensured supplies were consistently stocked and available",
            "Handled customer concerns professionally while maintaining high service standards",
            "Supported staﬀ training and maintained a productive team environment"
        ]}
];
