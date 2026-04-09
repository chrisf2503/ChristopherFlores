import img1 from '../../assets/uniqlo.jpg'
import img2 from '../../assets/nangman.jpeg'
import img3 from '../../assets/OurNationalConversation.png'

export const work_list = [
    {id: 1, img : img1, title: 'Sales Associate', address: "New York NY", employeer: 'UNIQLO 5th AV', startDate: 'October 2026', endDate: 'Present', 
        discription: 
        [
            "Deliver excellent customer service by assistanting customers with product availability and product recommendations",
            "Assit Managment in planning and abjusting store layouts based on seasonal collection, inventory levels, and store operational needs",
            "Tracking sales performance across previous and current periods, analysing trends to support team planning and sales strategies",
            "Collaborate with team memebers to develop plans that boost sales and optimize product placement based on store needs"
        ]},
    {id: 2, img : img3, title: 'Software Developer Intern', employeer: 'Our National Conversation', startDate: 'June 2024', endDate: 'December 2024', 
        discription: [
            "Built and maintain web application feature using React.js",
            "Implemented functionality according to design and operational requirements",
            "Document code base and general structure of the overall product",
            "Document code struture and workflow to support maintainability and team collaboration"
        ]},
    {id: 3, img : img2, title: 'Assistant Manager', employeer: 'Nangman BBQ', startDate: 'October 2021', endDate: 'August 202', 
        discription: [
            "Oversaw daily operations to ensure smooth workflow and efficient service",
            "Coordinated team responsibilities and resolved operational issues quickly during high-volume hours",
            "Managed inventory levels and ensured supplies were consistently stocked and available",
            "Handled customer concerns professionally while maintaining high service standards",
            "Supported staﬀ training and maintained a productive team environment"
        ]}
];