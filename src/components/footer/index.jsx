import s from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.col}>
            <h3 className={s.companyName}>Garima International.</h3>
            <p>
              Garima international, peetal nagri,
              <br />
              Moradabad, Uttar Pradesh, India
            </p>
          </div>

          <div className={s.col}>
            <h4>Links</h4>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Support</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </div>

          <div className={s.col}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href='/'>Terms & Conditions</a>
              </li>
              <li>
                <a href='/'>Privacy Policies</a>
              </li>
              <li className={s.email}>
                <span className='material-icons'>email</span>
                admin@garimainternational.com
              </li>

              <li className={s.socialIcons}>
                <a href='/'>
                  <span className='material-icons'>public</span>
                </a>
                <a href='/'>
                  <span className='material-icons'>call</span>
                </a>
                <a href='/'>
                  <span className='material-icons'>facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p>2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
