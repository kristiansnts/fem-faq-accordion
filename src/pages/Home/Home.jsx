import StarImg from "assets/images/icon-star.svg"
import { useState } from "react";
import Accordion from "src/components/Accordion/Accordion";

const faqsList = [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It`s suitable for all levels and ideal for portfolio building."
    }, 
    {
        title: "Is Frontend Mentor free?",
        content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    }, 
    {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    }, 
    {
        title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
]

const Home = () => {
    const [isActive, setIsActive] = useState(null)

    const handleClick = (index) => {
        setIsActive((prevIndex) => (prevIndex === index) ? null : index)
    }

    return ( 
        <main>
            <div className="faqs">
                <img src={StarImg} alt="" />
                <h1 className="faqs__title">FAQs</h1>
            </div>
            <div className="accordions">
                {faqsList.map((question, index) => (
                    <Accordion 
                        key={index}
                        isOpen={isActive === index}
                        title={question.title}
                        handleClick={() => handleClick(index)}
                    >
                        {question.content}
                    </Accordion>
                ))}
            </div>
        </main>
     );
}
 
export default Home;