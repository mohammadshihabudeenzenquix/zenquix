import React from 'react'
import GoalsCard from './GoalsCard';
const About = () => {
    const cardData = [
        {
          title: 'Our Mission',
          category: 'ski',
          icon: <><path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 18c-4.337 0-8-3.663-8-8s3.663-8 8-8 8 3.663 8 8-3.663 8-8 8z"></path><path d="M12 10c-1.081 0-2 .919-2 2s.919 2 2 2 2-.919 2-2-.919-2-2-2z"></path></>,
          description: {
            title: "Our Mission",
            text: 'At ZenQuix Technologies, our mission is to go beyond being a standard IT services provider. We are passionate about transforming businesses through technology, driving innovation, and delivering exceptional results.'
          },
        },
        {
          title: 'Our Vision',
          category: 'beach',
          icon: <>  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></>,
          description: {
            title: "Our Vision",
            text: `ZenQuix Technologies's vision is to lead the way as a premier provider of comprehensive IT services, renowned for our innovative solutions, expertise, and unwavering commitment to our clients' success. We aim to drive positive transformations in businesses by harnessing the full potential of technology.`
          },
        },
        {
          title: 'Core Values',
          icon: <><path d="M121.72 32a4 4 0 00-3.72 5.56l2.3 5.43 40.7 94.9a4 4 0 006.88.82L243 38.4a4 4 0 00-3.2-6.4zm298.21 26.06l-41.28 96.37a4 4 0 003.68 5.57h101a4 4 0 003.4-6.11L427 57.53a4 4 0 00-7.07.53zM85 57.57l-59.71 96.32a4 4 0 003.4 6.11h101a4 4 0 003.67-5.58L92 58.1a4 4 0 00-7-.53zM393.27 32H267.82a1.94 1.94 0 00-1.56 3.11l79.92 106.46a1.94 1.94 0 003.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 00-1.7-2.66zM239 448l-89.43-253.49A3.78 3.78 0 00146 192H25.7a3.72 3.72 0 00-2.95 6l216 279.81a5.06 5.06 0 006.39 1.37 5 5 0 002.39-6.08zm247.3-256H366a3.75 3.75 0 00-3.54 2.51l-98.2 278.16a5.21 5.21 0 002.42 6.31 5.22 5.22 0 006.61-1.39L489.25 198a3.72 3.72 0 00-2.95-6zM259.2 78.93l56 74.67a4 4 0 01-3.2 6.4H200a4 4 0 01-3.2-6.4l56-74.67a4 4 0 016.4 0zm-7 310.31l-67.7-191.91a4 4 0 013.77-5.33h135.46a4 4 0 013.77 5.33l-67.73 191.91a4 4 0 01-7.54 0z"></path></>,
          category: 'camping',
          description: {
            title: "Core Values",
            text: `At ZenQuix Technologies, our core values are the guiding principles that define our company. We are driven by a commitment to excellence, always striving to deliver the highest quality IT services. Integrity is at the forefront of our interactions, ensuring honesty, transparency, and trust in all relationships. Our customer focus drives us to listen attentively, understand needs deeply, and provide personalized solutions. Innovation is in our DNA, as we embrace emerging technologies and creative thinking to empower our clients. Collaboration fuels our success, enabling us to leverage diverse expertise and work together seamlessly. We take accountability for our actions, meeting commitments and taking ownership of outcomes. Continuous improvement is ingrained in our culture, as we embrace learning, feedback, and growth. These core values form the foundation of ZenQuix Technologies and guide us as we support our clients in achieving their goals.`
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
