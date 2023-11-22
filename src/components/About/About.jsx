import React from 'react';
import styles from './About.module.css'
import Reveal from '../Reveal/Reveal';
import Accordion from './Accordion/Accordion';

const accordionList = [
    {
        id: '1',
        panelHeadingId: 'panel1-heading',
        ariaControls: 'panel1-content',
        panelTitleId: 'panel1-title',
        panelTitle: 'Workspace',
        iconSrc: './images/workspace.png',
        iconAlt: 'Workspace icon',
        panelContentId: 'panel1-content',
        ariaLabelledby: 'panel1-heading',
        contentParagraph1: `I'm grateful for the opportunities to work and learn, as they allow me to contribute to the world and expand my knowledge.`,
        contentParagraph2: `Spot: Oliwa, Gdańsk, PL.`,
        imgSrc: './images/chicagoLarge.jpeg',
        imgAlt: `Bogdan's workspace in Gdańsk, with a laptop and a tablet`,
    },

    {
        id: '2',
        panelHeadingId: 'panel2-heading',
        ariaControls: 'panel2-content',
        panelTitleId: 'panel2-title',
        panelTitle: 'Family time',
        iconSrc: './images/familyFive.png',
        iconAlt: 'Happy family icon',
        panelContentId: 'panel2-content',
        ariaLabelledby: 'panel2-heading',
        contentParagraph1: `Treasuring every moment with my beloved family, I am blessed to have them all!`,
        contentParagraph2: `Spot: Stare Miasto, Gdańsk, PL.`,
        imgSrc: './images/gdanskLarge.jpeg',
        imgAlt: `Bogdan with his wife and three minor kids`,
    },

    {
        id: '3',
        panelHeadingId: 'panel3-heading',
        ariaControls: 'panel3-content',
        panelTitleId: 'panel3-title',
        panelTitle: 'Family Space',
        iconSrc: './images/spaceFamily.png',
        iconAlt: 'Space rocket icon',
        panelContentId: 'panel3-content',
        ariaLabelledby: 'panel3-heading',
        contentParagraph1: `Great family time with sones at the space expo!`,
        contentParagraph2: `Spot: Galeria Metropolia, Gdańsk, PL.`,
        imgSrc: './images/spaceLarge.jpeg',
        imgAlt: `Bogdan with his two sons at the space exhibition`,
    },

    {
        id: '4',
        panelHeadingId: 'panel4-heading',
        ariaControls: 'panel4-content',
        panelTitleId: 'panel4-title',
        panelTitle: 'Googleplex',
        iconSrc: './images/downtown.png',
        iconAlt: 'Buildings icon',
        panelContentId: 'panel4-content',
        ariaLabelledby: 'panel4-heading',
        contentParagraph1: `If you are ever in the Silicon Valley, check out the Googleplex! It is a truly amazing place.`,
        contentParagraph2: `Spot: Mountain View, California, USA.`,
        imgSrc: './images/googleLarge.jpeg',
        imgAlt: `Bogdan is next to Google Doodle wall`,
    },

    {
        id: '5',
        panelHeadingId: 'panel5-heading',
        ariaControls: 'panel5-content',
        panelTitleId: 'panel5-title',
        panelTitle: 'Nature time',
        iconSrc: './images/forest.png',
        iconAlt: 'Woods icon',
        panelContentId: 'panel5-content',
        ariaLabelledby: 'panel5-heading',
        contentParagraph1: `The colossal stature of Sequoias is truly awe-inspiring, a once-in-a-lifetime encounter that transcends words.`,
        contentParagraph2: `Spot: Sequoia National Park, California, USA.`,
        imgSrc: './images/sequoiaLarge.jpeg',
        imgAlt: `Bogdan is next to the giant Sequoia`,
    },

]

function About() {
    return (
        <section className={styles.about} id="about">
            <Reveal>
                <div className="wrapper">
                    <div className={styles.title}>
                        <h2 className={styles['title-heading']}>
                            About <span className={styles['title-span']}>Me</span>
                        </h2>
                        <hr />
                    </div>
                    <div className={`grid ${styles['about-grid']}`}>
                        <Accordion accordionList={accordionList} />
                        <div className={styles['about-content']}>
                            <h3 className={styles.border}>Hi there!</h3>
                            <p className={styles['about-content__paragraph']}>
                                I'm <span className={styles['first-name']}>Bogdan</span>, a creative developer from Gdańsk, Poland (originally from Zhytomyr, Ukraine). I'm passionate about creating stunning websites that are both visually appealing and user-friendly. I have expertise in translating designs into fully functional and accessible websites, and utilize my development skills to enhance and customize their features.
                            </p>
                            <p className={styles['about-content__paragraph']}>
                                After the start of the full-scale war in Ukraine, my wife, three minor children, and I were forced to leave our home in March 2022. Since that time, I have been learning and improving in software development field, and actively helping my family to adapt and build a better life in Poland.
                                In my leisure time, I enjoy spending quality time with my beloved wife and three children, traveling, reading self-development books, and delving into philosophical works.</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default About