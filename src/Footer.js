import React from "react";
import "./Footer.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col">
          <h2 className="logo">ZERODHA</h2>
          <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
          <p>All rights reserved.</p>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calendar</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
          </ul>
        </div>

      </div>

      {/* LEGAL SECTION */}
      <div className="footer-bottom">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633
          CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration
          no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
          Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking please write
          to complaints@zerodha.com, for DP related to dp@zerodha.com.
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
          Mandatory details for filing complaints on SCORES: Name, PAN, Address,
          Mobile Number, E-mail ID.
        </p>

        <p>
          Investments in securities market are subject to market risks; read all the
          related documents carefully before investing.
        </p>

        <p>
          Attention investors: Stock brokers can accept securities as margins from clients
          only by way of pledge in the depository system. Update your e-mail and phone
          number with your stock broker / depository participant and receive OTP directly
          from depository on your e-mail and/or mobile number.
        </p>

        <p>
          As a business we don't give stock tips and have not authorized anyone to trade
          on behalf of others. If you find anyone claiming to be part of Zerodha and
          offering such services, please create a ticket.
        </p>

        <p className="footer-links">
          NSE | BSE | MCX | Terms & conditions | Policies & procedures | Privacy policy |
          Disclosure | Investor charter
        </p>
      </div>
    </footer>
  );
}

export default Footer;
