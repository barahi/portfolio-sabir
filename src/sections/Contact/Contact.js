import greycat from '../../assets/gitCat.png';
import linkedin from '../../assets/linkedin.png';
const Contact = () => {
  return(
    <div className="contact section" id="contact">
      <h2 className="megrim section-title">Contact</h2>

      <div className="contactCard">
      <h2 className="megrim cardName" >Contact Me</h2>
      <label className="megrim">Name</label>
      <input type="text" />
      <label className="megrim">Email</label>
      <input type="text" />
      <label className="megrim">Message</label>
      <textarea></textarea>
      <button type='submit' className="megrim contactButton">Send</button>
      </div>
      <div className="links">
        <h2 className='megrim'>My Links</h2>
        <img src = { greycat } className="linkIcon" alt="link"  />
        <img src = { linkedin } className="linkIcon" alt="link" />
      </div>
    </div>
  )
}

export default Contact;
