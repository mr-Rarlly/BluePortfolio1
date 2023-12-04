'use client'
import  React  from 'react'
import PortfolioDetailDesign  from  '../../page/portfolio-detail-design'
import { DataArray } from '@/app/data'
import Head from 'next/head';



const  Portfolio  =(props)=>{
  console.log("the id is: ", props.params.id)

  return(
    <React.Fragment>
      <Head>
        <title>{`Your Site Name | ${DataArray[props.params.id].title}`}</title>
        <meta
          name="description"
          content={DataArray[props.params.id].description}
        />
        <meta property="og:title" content={DataArray[props.params.id].title} />
        <meta
          property="og:description"
          content={DataArray[props.params.id].description}
        />
        <meta
          property="og:image"
          content={DataArray[props.params.id].images[0]} // Use the first image as a representative image
        />
      </Head>
      <PortfolioDetailDesign
      data={DataArray[props.params.id]}
      id={props.params.id}
      DataArray={DataArray}
      />
    </React.Fragment>
  )
  
}
export default Portfolio
