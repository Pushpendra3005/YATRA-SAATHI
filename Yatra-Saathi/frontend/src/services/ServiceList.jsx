import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Good weather enhances the travel experience by making it more pleasant and enjoyable`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Guides enhance experience by providing knowledge,safety,offering personalized insights`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Customization enhances user satisfaction, fosters loyalty, and meets unique needs.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList