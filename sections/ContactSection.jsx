import '@styles/ContactSection.css';
import { getConstDetails, getConstName } from '@utils/getLangItems';

const ContactSection = ({ isArabic }) => {

    const contactsReasons = [
        { title: 'Inquire', bg: '#00ff00', detail: 'Ask questions to our specialists' },
        { title: 'Get Help', detail: 'We will help & guide you' },
        { title: 'Payments', detail: 'We have a lot of payments methods' },
        { title: 'Contact Specialist', bg: '#00ff00', detail: 'Talk with one of our specialist' },
        { title: 'Rate us', bg: '#00ff00', detail: 'Rate our work in our Social Media pages' },
        { title: 'Support Us', detail: 'We will appreciate your support' }
    ]

  return (

    <div className='ContactSection'>
      
        <h1>{getConstName('Contact Us', isArabic)}</h1>

        <div className='reasons'>

            <ul>
                {contactsReasons.map((item) => (
                    <li key={item.detail}>
                        <h2>{getConstName(item.title, isArabic)}</h2>
                        <p>{getConstDetails(item.title, isArabic)}</p>
                        <span style={{ background: item.bg }}/>
                    </li>
                ))}
            </ul>

        </div>

    </div>

  )
}

export default ContactSection
