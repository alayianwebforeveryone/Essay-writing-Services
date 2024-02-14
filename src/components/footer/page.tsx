import React from 'react'
// interface Props {}
function Footer() {
    // const {} = props

    return (
        <div className="container text-white text-sm bg-topBottom bg-purple-700  py-8">
        <div className="py-12 px-8">
            <p>Disclaimer: Our essays and papers are meant solely for educational purposes and must not be submitted as original work.</p>
        </div>
        <div className="flex justify-around px-8 ">
          <div>
              <p>All rights reserved-Copyrights &copy; 2024 <br /> writingservices.com</p>
          </div>
          <div>
              <p>Contact|Privacy|Terms</p>
          </div>
          <div className="flex justigy-center gap-2 ">
            <div>facabook</div>
            <div>twiter</div>
            <div>instagram</div>
            <div>linkedin</div>
          </div>

         
        </div>
      </div>
    )
}

export default Footer
