import React from 'react'
import './main.scss';
import { CiLocationOn } from "react-icons/ci";
import { LuClipboardCheck } from "react-icons/lu";
import img from '../../asset/image/img.jpg';
import img1 from '../../asset/image/img1.jpg';
import img2 from '../../asset/image/img2.jpg';
import img3 from '../../asset/image/img3.jpg';
import img4 from '../../asset/image/img4.jpg';
import img5 from '../../asset/image/img5.jpg';
import img6 from '../../asset/image/img6.jpg';

const Data = [

  {
    id: 0,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Viet Nam',
    location: 'Vung Tau',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'America',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Korea',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cambodia',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'indi',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
  },


];



const Main = () => {
  return (
    <section>
      <div className="main contain section">
        <div className="secTitle">
          <h3 className='title'>
            Most visited destinations
          </h3>
        </div>
        <div className="secContent grid">


          {
            Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
              return (
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <div className="cardInfor">
                    <h4 className="destTitle">{destTitle}</h4>
                      <span className="continent flex">
                        <CiLocationOn className='icon'/>
                        <span className="name">{location}</span>
                      </span>
                    <div className="fees flex">
                      <div className="gradle">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h4>{fees}</h4>
                      </div>
                    </div>
                    <div className="des">
                      <p>{description}</p>
                    </div>
                    <div>
                    <button className='btn flex'>
                      DETAIL <LuClipboardCheck className="icon" />
                    </button>
                    </div>

                    
                  </div>

                </div>
              )

            })
          }

        </div>

      </div>
    </section>
  )
}

export default Main