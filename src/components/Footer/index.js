function Footer(){

    const year = new Date().getFullYear();
    
    return (
        <span className="copy-right">
                    Copyright © {year} All Rights Reserved by
                    <a href="https://www.seanroshan.com" rel="noopener noreferrer" target="_blank"
                       className="copy-right-link">Sean Roshan</a>
        </span>
    );
}

export default Footer;