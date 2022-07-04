import './MailList.css'

function MailList() {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, save money!</h1>
        <span className='mailDesc'>Sign up to never miss out on the biggest deals!</span>
        <div className='mailInputContainer'>
            <input type='text' placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList