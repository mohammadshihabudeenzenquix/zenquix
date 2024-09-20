import React from 'react';
import GoalsCard from './GoalsCard';
const About = () => {
    const cardData = [
        {
          title: 'Who We Are ?',
          category: 'ski',
          description: {
            title: "Who We Are ?",
            text: 'At Zenquix, our inspiration comes from the wisdom of Zen philosophy where tranquility, clarity, precision, and finesse combined with boundless energy and agility pave the path to enlightenment. In today’s VUCA world, where change is inevitable and innovation is constant, ZenQuix embraces adaptability, agility, and efficiency with elegance to meet the evolving needs of the market and clients. Our solutions are crafted with the help of our guiding principles of simplicity, mindfulness, and focusing on what truly matters – delivering exceptional outcomes that are quick and creating a meaningful impact. With Zenquix as your trusted partner, let’s embark on a transformative journey of growth and success.'
          },
        },
        {
          title: 'What We Do ?',
          category: 'beach',
          description: {
            title: "What We Do ?",
            text: `At ZenQuix Technologies, we offer a comprehensive range of IT services to empower businesses with seamless technology solutions. Our expert team specializes in the following areas: Network Services, Cloud Services, Datacenter Services, Software Development, End User Services, IT Staff Augmentaion & Consulting Services`
          },
        },
        {
          title: 'Why Zenquix Technologies ?',
          category: 'camping',
          description: {
            title: "Why Zenquix Technologies ?",
            text: `Choose ZenQuix Technologies as your trusted IT partner. Experience our expertise, comprehensive solutions, tailored approach, innovation-driven mindset, customer-centricity, and unwavering reliability. We are here to transform your technology landscape, optimize your IT operations, and empower your organization for success in the digital age.`
          },
        },
      ];
  return (
    <div className='about'>
        <div className="cardArea">
    {cardData.map((card, index) => (
      <GoalsCard
        key={index}
        icon={card.icon}
        title={card.title}
        category={card.category}
        description={card.description}
      />
    ))}
  </div>
    </div>
  )
}

export default About
